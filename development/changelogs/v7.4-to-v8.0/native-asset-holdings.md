# Native Asset Holdings Changelog - v7.4 to v8.0

> Breaking changes to the Asset, NFT, and Portfolio pallets in Polymesh chain v8 - the AssetHolder model that lets accounts hold assets directly, not just portfolios.

This page covers changes to the `Asset`, `Nft`, and `Portfolio` pallets that let an `Account` hold Polymesh assets directly, without a portfolio. It is part of the [v7.4 → v8.0 changelog](./010-overview.mdx). For the `Settlement` pallet (instructions, affirmations, legs), see [Settlement & Instructions](./050-settlement-and-instructions.mdx).

**Audience:** asset issuers, transfer agents, and anyone building tooling against asset ownership, balances, or NFT collections.

---

## Overview

The `AssetHolder` type (`Account | Portfolio(PortfolioId)`) already existed in v7.4, but only the `Nft` pallet used it — an account could already hold NFTs directly via `PortfolioKind::AccountId`, a variant bolted onto the portfolio-kind enum as a non-breaking addition. That path still went through `PortfolioId`, which always carries a `did: IdentityId` field regardless of `kind` — so holding via an account still required that DID linked to the account also be provided instead of a wallet-only model. The `Asset` pallet's per-account balance storage (`AssetBalance`, `LockedBalance`) also already existed in v7.4, unused by any public call.

Chain v8 doesn't remove the DID-linkage requirement — `AssetHolder::Account` still resolves the account to a DID via `Identity::KeyRecords` and errors `IdentityNotFoundForAccountPortfolio` if none is found — but it does give account-based holding a proper, first-class type instead of a portfolio-kind extension.

Chain v8 turns this into a proper first-class concept:

- A new `AssetHolderKind` enum (`Account | DefaultPortfolio | UserPortfolio(PortfolioNumber)`) replaces the `PortfolioKind::AccountId` variant as the way to specify "who should receive this" without needing the caller's identity resolved yet. `PortfolioKind` reverts to its original two variants (`Default`, `User`) and only means an actual portfolio.
- The `Asset` (fungible) pallet is wired up to use `AssetHolder`/`AssetHolderKind` the same way `Nft` already did.

If your integration already handled NFTs held by accounts, the model is now consistent for fungible assets too — and `PortfolioKind` no longer accepts an `AccountId` variant, so any code passing that must switch to the new types.

## Breaking changes

### 1. `issue` / `redeem` take `AssetHolderKind`, not `PortfolioKind`

```
// v7.4
issue(asset_id, amount, portfolio_kind: PortfolioKind)
redeem(asset_id, value, portfolio_kind: PortfolioKind)

// v8.0
issue(asset_id, amount, asset_holder_kind: AssetHolderKind)
redeem(asset_id, value, asset_holder_kind: AssetHolderKind)
```

Same call indices (7, 8), same intent, different type — `AssetHolderKind` is not SCALE-compatible with `PortfolioKind`.

### 2. `controller_transfer` takes an explicit source holder and destination kind

```
// v7.4
controller_transfer(asset_id, value, from_portfolio: PortfolioId)

// v8.0
controller_transfer(asset_id, value, source: AssetHolder, destination_kind: AssetHolderKind)
```

The v7.4 call could only pull funds from a portfolio, to the caller's own portfolio. The v8 call can pull from any `AssetHolder` (account or portfolio) and send to either an account or a portfolio.

### 3. `approve` — new (Allowances)

```
approve(asset_id, spender: AccountId, amount: Balance)
```

Sets a spending allowance for `spender` over the caller's balance, tracked in the new `Allowances` storage (`(owner, spender, asset_id) -> Balance`). Setting `amount` to `0` removes the allowance entry rather than storing a zero. This has no v7.4 equivalent. Two new events accompany it: `Approval { owner, spender, asset_id, amount }` when the allowance is set, and `AllowanceSpent { owner, spender, asset_id, amount_spent, remaining_allowance }` when a spender draws on it.

`approve` on its own doesn't move funds — the allowance is drawn down when the `spender` later calls `Settlement::transfer_funds` naming the owner's account as `from` (see [Settlement & Instructions](./050-settlement-and-instructions.mdx)). Together they emulate the ERC-20 `approve` / `transferFrom` pattern: an owner pre-authorizes a spend, and a third party (typically a smart contract) executes it without needing the owner's signature on the transfer itself.

Query a spender's remaining allowance with the new `AssetApi::allowance(owner, spender, asset_id)` Runtime API rather than decoding `Allowances` storage directly — see [Runtime APIs & RPC](./120-runtime-apis-and-rpc.mdx#assetapi--version-bump-transfer_report-retyped-new-allowance-method). Note that the `asset_transferReport`/`nft_transferReport` JSON-RPC methods are removed entirely in v8 — `AssetApi::transfer_report`/`NFTApi::transfer_report` are now `state_call`-only.

### 4. NFT: `issue_nft` / `redeem_nft` / `controller_transfer`

Same pattern as fungible assets:

```
// v7.4
issue_nft(asset_id, nft_metadata_attributes, portfolio_kind: PortfolioKind)
redeem_nft(asset_id, nft_id, portfolio_kind: PortfolioKind, number_of_keys)
controller_transfer(nfts, source_portfolio: PortfolioId, callers_portfolio_kind: PortfolioKind)

// v8.0
issue_nft(asset_id, nft_metadata_attributes, holdings_kind: AssetHolderKind)
redeem_nft(asset_id, nft_id, holdings_kind: AssetHolderKind, number_of_keys)
controller_transfer(nfts, source: AssetHolder, destination_kind: AssetHolderKind)
```

### 5. `transfer_nft` — new

```
transfer_nft(nfts: NFTs, to: AccountId, memo: Option<Memo>)
```

Direct account-to-account NFT transfer. Unlike the `Asset` pallet's `transfer_asset` (see below), there is no separate affirm/reject step — the transfer completes immediately.

### 6. NFT ownership storage consolidated

`NFTOwner` (`(AssetId, NFTId) -> PortfolioId`) — already marked "will be deprecated" in v7.4 — is removed in v8. Ownership is tracked entirely through `NFTHolder` and `Owner` (`(AssetId, NFTId) -> AssetHolder`), both of which already existed in v7.4.

### 7. `NFTPortfolioUpdated` event renamed and retyped

```
// v7.4
NFTPortfolioUpdated(IdentityId, NFTs, Option<PortfolioId>, Option<PortfolioId>, PortfolioUpdateReason)

// v8.0
NFTHoldingsUpdated(IdentityId, NFTs, Option<AssetHolder>, Option<AssetHolder>, HoldingsUpdateReason)
```

`PortfolioUpdateReason` is correspondingly renamed `HoldingsUpdateReason`.

### 8. Portfolio: parameter renames, and `PortfolioNFT` storage restructured

`delete_portfolio(num)` → `delete_portfolio(portfolio_number)`; `rename_portfolio(num, to_name)` → `rename_portfolio(portfolio_number, new_portfolio_name)`. Types and call indices are unchanged — only the parameter names differ, which matters if you build extrinsics with named arguments.

Separately, the `PortfolioNFT` storage item (tracks which NFTs a portfolio holds) changes from a `StorageDoubleMap<PortfolioId, (AssetId, NFTId), bool>` to a `StorageNMap<(PortfolioId, AssetId, NFTId), bool>`. The key set is the same; only the storage map type and resulting key encoding change. Relevant only if you decode this storage item directly rather than through a query API.

### 9. Errors

**`Asset`** — new: `InsufficientAllowance`, `InsufficientTokensLocked`, `InvalidTransferInvalidReceiverDID`, `KeyNotFoundForDid`, `SelfOwnershipTransferNotAllowed`, `UnauthorizedHolderKey`. Removed: `InvalidTransferInvalidReceiverCDD`, `InvalidTransferInvalidSenderCDD` (CDD is no longer checked at the transfer level, consistent with the DID-only onboarding model — see [Identity & Onboarding](./060-identity-and-onboarding.mdx)).

**`Nft`** — new: `InvalidNFTTransferInvalidReceiverDID`, `InvalidNFTTransferSenderDidMatchesReceiverDid`, `NFTIsNotLocked`. Removed: `InvalidNFTTransferInvalidReceiverCDD`, `InvalidNFTTransferInvalidSenderCDD`, `InvalidNFTTransferSenderIdMatchesReceiverId` — same CDD-to-DID pattern as `Asset`, plus a rename (`...SenderIdMatchesReceiverId` → `...SenderDidMatchesReceiverDid`).

**`Portfolio`** — removed: `AccountBasedPortfoliosCannotHaveCustodians` (the account-based-portfolio hack this error guarded against is gone now that accounts are first-class `AssetHolder`s, not a special portfolio kind) and `InvalidTransferSenderIdMatchesReceiverId`, with no direct replacement in `Portfolio` itself. Similar self-transfer guards exist elsewhere in v8 (`Asset::SelfOwnershipTransferNotAllowed` above, `Settlement::SenderSameAsReceiver` in [Settlement & Instructions](./050-settlement-and-instructions.mdx)), though these are separate errors on separate pallets, not a renamed version of this one.

## What did _not_ change

- `transfer_asset`, `receiver_affirm_asset_transfer`, and `reject_asset_transfer` on the `Asset` pallet — these already existed in v7.4 at the same call indices (34, 35, 36), with the same signatures. They are not new in v8.
- The `AssetHolder` enum itself (`Account | Portfolio(PortfolioId)`) is unchanged from v7.4.
- The `AssetBalance` and `LockedBalance` storage maps are unchanged from v7.4.

## Migration checklist

1. Replace any use of `PortfolioKind::AccountId` — it no longer exists. Use `AssetHolderKind::Account` for calls that take it, or `AssetHolder::Account` where a concrete holder is required.
2. Update `issue`, `redeem`, `issue_nft`, `redeem_nft` call encoding for the `AssetHolderKind` parameter type.
3. Update `controller_transfer` (both `Asset` and `Nft`) for the new `source`/`destination_kind` parameters.
4. If you track NFT ownership via `NFTOwner` storage or `NFTPortfolioUpdated` events, switch to `Owner`/`NFTHolder` storage and the `NFTHoldingsUpdated` event.
5. Do not assume `transfer_asset` / `receiver_affirm_asset_transfer` / `reject_asset_transfer` are new — they carry over unchanged from v7.4 if you already support them.
6. Update any extrinsic construction that names `Portfolio.delete_portfolio`/`rename_portfolio` parameters by name.
7. Stop matching on the removed CDD-flavored errors (`InvalidTransferInvalidReceiverCDD`/`...SenderCDD`, `InvalidNFTTransferInvalidReceiverCDD`/`...SenderCDD`, `AccountBasedPortfoliosCannotHaveCustodians`) — none exist on v8.

For the complete literal list of every added/removed/modified call, event, error, storage item, and constant on `Asset`, `Nft`, and `Portfolio`, see the [Full Pallet API Reference](./110-pallet-api-reference.mdx). `AssetApi` and `NFTApi`'s `transfer_report` Runtime API methods went through the same `PortfolioId` → `AssetHolder` retyping as the pallet calls above, `AssetApi` gains a new `allowance` method, and the `asset_transferReport`/`nft_transferReport` JSON-RPC wrappers are removed — see [Runtime APIs & RPC](./120-runtime-apis-and-rpc.mdx).
