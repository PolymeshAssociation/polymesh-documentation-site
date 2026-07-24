# Other Runtime Changes Changelog - v7.4 to v8.0

> Remaining Polymesh chain v8 changes not covered elsewhere - transaction fee pallet split, Sudo, authorized runtime upgrades, the CheckMetadataHash signing extension, Scheduler retries, and new light-client pallets.

This page covers v8 changes not significant enough for their own page, but still worth knowing about. It is part of the [v7.4 → v8.0 changelog](./010-overview.mdx).

**Audience:** anyone doing a thorough audit of chain-level changes; most integrators can skip this page unless a specific item below is relevant to them.

---

## Transaction fees split into two pallets

Polymesh's custom transaction-payment pallet (`pallets/transaction-payment`, crate `pallet-transaction-payment` at v7.4) is renamed to crate `polymesh-transaction-payment` and slimmed down. Chain v8 mounts it alongside the standard upstream `pallet_transaction_payment`:

- **`TransactionPayment`** (runtime index 6) — the standard upstream pallet: weight-to-fee conversion, the next-fee-multiplier adjustment, and the RPC fee-query helpers (`query_info`, `query_fee_details`, `compute_fee`, etc.) that used to live in Polymesh's own pallet.
- **`PolymeshTransactionPayment`** (runtime index 51) — what's left of the Polymesh-specific pallet: `current_payer`/`set_current_payer` (tracks who is paying for the current extrinsic, used by the subsidy system) and the `set_disable_fees` call.

If you called the RPC-style fee-query helpers directly against the old `TransactionPayment` pallet, they now live on the standard upstream pallet at the same pallet name but different index; `set_disable_fees` and payer-tracking move to `PolymeshTransactionPayment`.

The upstream `TransactionPayment` pallet also brings its own constant and storage: new constant `OperationalFeeMultiplier` (multiplies the priority "virtual tip" for `Operational`-class extrinsics), and new transient storage `TxPaymentCredit` (cleared every block; not user-facing state). Polymesh's old fee-curve constants `TransactionByteFee` and `WeightToFeeConst` are removed — fee-per-byte and the weight-to-fee curve are now configured through the upstream pallet's own `WeightToFee`/`LengthToFee` mechanism instead.

## `Sudo` moved to the upstream standard; gains `remove_key`

Same pattern as `Balances`/`Staking`: the local `pallets/sudo` crate is deleted, and `Sudo` is now the standard upstream `pallet-sudo`. `sudo`, `sudo_unchecked_weight`, `set_key`, and `sudo_as` are unchanged. New: `remove_key()`, which permanently and irreversibly clears the sudo key, and a corresponding `KeyRemoved` event.

## System: authorized runtime upgrades, and `ExtrinsicSuccess`/`ExtrinsicFailed` retyped

`frame_system` gains a two-step upgrade path: `authorize_upgrade(code_hash)` (or `authorize_upgrade_without_checks`) pre-authorizes a specific code hash, and anyone can subsequently call `apply_authorized_upgrade(code)` with the matching Wasm blob to perform the upgrade. New events `UpgradeAuthorized` and `RejectedInvalidAuthorizedUpgrade`; new errors `MultiBlockMigrationsOngoing`, `NothingAuthorized`, `Unauthorized`; new storage `AuthorizedUpgrade` (holds the pending authorization), `BlockSize`, `BlocksTillUpgrade`, `InherentsApplied`, and `ExtrinsicWeightReclaimed`; removed storage `AllExtrinsicsLen`. This is primarily relevant to governance/infrastructure tooling that performs runtime upgrades, not typical integrations.

More broadly relevant: `ExtrinsicSuccess { dispatch_info }` and `ExtrinsicFailed { dispatch_error, dispatch_info }` — emitted once per extrinsic in every block — change `dispatch_info`'s type from `DispatchInfo` to `DispatchEventInfo`. The fields (`weight`, `class`, `pays_fee`) are the same; the type name itself changes, which matters for typed decoders generated from chain metadata even though the underlying encoding is unaffected.

## Transaction extension: `CheckMetadataHash` (Merkleized metadata)

Chain v8 adds the `CheckMetadataHash` transaction extension (`frame_metadata_hash_extension::CheckMetadataHash`) to the runtime's signed-extension tuple. This implements the "Merkleized metadata" scheme (RFC-0078): the production runtime is built with a hash of its own metadata baked in, and a signer can opt to include that metadata hash in the signed payload.

This is the chain-level change that makes **generic offline signers and hardware wallets** able to decode and display full, human-readable Polymesh transaction details without a Polymesh-specific application — the device verifies the metadata it uses to render the transaction against the hash committed in what it signs. In practice this is what enables the generic Polkadot Ledger app (and similar tooling) to sign Polymesh transactions safely; see the [Ledger Hardware Wallet](/getting-started/keys/ledger) guide for the wallet-side view.

Because compatible signers decode against the runtime's own metadata rather than a fixed, hardcoded set of transaction formats, future runtime upgrades that add or change transaction types are typically understood and displayed correctly without requiring an app update — the metadata hash simply changes to match the new runtime.

Impact on transaction construction:

- The signed-extension list gained one entry, `CheckMetadataHash`, which contributes one byte (its mode: enabled/disabled) to the extra/additional-signed data. Anything that builds and signs extrinsics by manually assembling the signed extensions must account for it, in the correct position within the tuple, or signatures will be rejected.
- The extension supports two modes. With the mode **disabled**, only the mode byte is added and no metadata hash is required — existing signing flows continue to work with just the extra byte accounted for. With the mode **enabled**, the metadata hash is included, which is what unlocks the human-readable display on compatible signers.
- Up-to-date client libraries handle this automatically using the chain's current metadata (which carries the information needed to compute the hash); the Polymesh SDK and current Polkadot-JS tooling already account for it.

## Scheduler: retry management

New calls `set_retry`, `set_retry_named`, `cancel_retry`, `cancel_retry_named` let a scheduled task be configured to automatically retry (with a configurable period and retry count) if it fails. New events `RetrySet`, `RetryCancelled`, `RetryFailed`, `AgendaIncomplete`, backed by new `Retries` storage.

## Preimage: `ensure_updated`

New call `ensure_updated(hashes)` re-checks and updates the status of the given preimage hashes; the caller pays no fee if at least 90% are successfully updated. New storage `RequestStatusFor`; new errors `TooMany`, `TooFew`.

## Indices: `poke_deposit`

New call `poke_deposit(index)` re-syncs the deposit held for a short/vanity account index after a deposit-price change, refunding or charging the difference. New event `DepositPoked`. Low relevance unless you use short indices.

## New light-client pallets: `Beefy`, `Mmr`, `MmrLeaf`

Three new pallets support BEEFY (a secondary finality gadget for efficient light-client / bridge proofs) and its Merkle Mountain Range leaf data. This is what requires the new BEEFY session key covered in [Staking & Validators](./030-staking-and-validators.mdx#node-operators). Also new: `MultiBlockMigrations`, infrastructure for running storage migrations across multiple blocks rather than one.

## MultiSig: one error removed

`ChangeNotAllowed` is removed, with no replacement. No calls, events, or storage on `MultiSig` changed — this is the only difference.

## Removed: `Bridge` pallet (dead code)

The local `pallets/bridge` crate is deleted. It was already commented out of `construct_runtime!` at v7.4.0 (`//Bridge = 16,`) — it was source code that was never compiled into any runtime, so this has no practical impact.

## Migration checklist

1. If you query transaction fees via RPC-style calls, note they now resolve against the standard `TransactionPayment` pallet rather than Polymesh's custom one; `current_payer` and `set_disable_fees` move to `PolymeshTransactionPayment`. Drop any reliance on `TransactionByteFee`/`WeightToFeeConst`.
2. If your tooling calls `Sudo` calls by pallet name/index, re-check — the pallet moved to the upstream standard.
3. If you build or apply runtime upgrades programmatically, consider the new `authorize_upgrade`/`apply_authorized_upgrade` two-step path for large runtimes.
4. If you decode `ExtrinsicSuccess`/`ExtrinsicFailed` with generated types, regenerate them for the `DispatchInfo` → `DispatchEventInfo` rename.
5. If you construct and sign extrinsics by manually assembling signed extensions (rather than via the SDK or up-to-date Polkadot-JS), add the new `CheckMetadataHash` extension in the correct tuple position, or signatures will be rejected. Regenerating against the chain's current metadata handles this for you.
6. No action needed for `Bridge` — it was already inert.

For the complete literal list of every added/removed/modified call, event, error, storage item, and constant across every pallet, including the smaller ones not otherwise covered by this changelog series (`Babe`, `Grandpa`, `Historical`, `Offences`, `Permissions`, `Pips`, `ElectionProviderMultiPhase`, `AuthorityDiscovery`, `ImOnline`, committee-membership pallets, and `Base`), see the [Full Pallet API Reference](./110-pallet-api-reference.mdx).
