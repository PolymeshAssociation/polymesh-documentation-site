---
title: Smart Contracts
description: Smart Contract Development
id: smart-contracts
slug: /development/smart-contracts
sidebar_label: Smart Contracts
tags:
  - development
  - smart contracts
---

## Overview

Polymesh includes rich native functionality for identity, assets, compliance, portfolio management, and settlement.
Smart contracts are used to add custom workflow and business logic on top of those native capabilities.

This allows teams to keep core regulated operations on the native layer while implementing bespoke behavior in contracts, such as:

- exchange and routing logic
- custody workflow automation
- permissioned operations with custom approval paths
- upgradeable application-level policy logic

## `pallet-revive`: PolkaVM contracts with EVM compatibility

The smart contract pallet on Polymesh is `pallet-revive`.

Contracts execute on **PolkaVM**, a RISC-V-based execution engine. EVM compatibility — Solidity contracts, standard Ethereum JSON-RPC tooling — is one supported way to interact with `pallet-revive`, not the whole of what it does. Native PolkaVM contracts and EVM-bytecode contracts both run on the same pallet.

## Address mapping

Polymesh accounts are 32-byte (`AccountId32`), not 20-byte Ethereum addresses. `AddressMapper = pallet_revive::AccountId32Mapper<Self>` bridges the two, and the two directions work differently:

- **Native account → Ethereum address**: computed by hashing the 32-byte account with Keccak-256 and taking the last 20 bytes. This is a one-way derivation — the original 32-byte account cannot be recovered from the 20-byte hash output alone.
- **Ethereum address → native account**: if the account has previously called `map_account`, the chain looks up the real account via the stored `OriginalAccount` mapping. If it hasn't, the chain falls back to a deterministic **fallback account**: the 20-byte address padded with twelve `0xEE` bytes to make 32 bytes. `unmap_account` removes a stored mapping.

:::danger Map your account before receiving tokens at its Ethereum-style address
The native-to-Ethereum direction above is a one-way hash, so the chain cannot invert it on its own. Until an account calls `map_account`, any transfer sent to that account's derived Ethereum-style address is credited to the `0xEE`-padded **fallback account** instead — a distinct 32-byte account from the real one.

This is not automatically lost: the real account holder can call `dispatch_as_fallback_account` to dispatch a call (e.g. a transfer) as that fallback account and move the funds out, since the runtime re-derives the same fallback account from their signed origin. But this is a manual recovery step that most wallets and tooling won't surface by default, so **the safe practice is to call `map_account` before ever advertising or receiving funds at your derived Ethereum-style address** — mapped accounts receive transfers directly, with no recovery step ever needed.
:::

Tools such as [Subscan's account-conversion utility](https://polymesh.subscan.io/tools/format_transform) can compute both directions for you (Ethereum → SS58 pads with `0xEE`; SS58 → Ethereum performs the Keccak-256 derivation) — useful for looking up addresses, but it does not perform or substitute for the on-chain `map_account` call.

## Calls

`pallet-revive` exposes the standard upstream call set — Polymesh has not added or removed any calls at the pallet level; customization is entirely in runtime configuration (below):

- `eth_transact` — submit a raw signed Ethereum transaction
- `call`, `instantiate`, `instantiate_with_code` — native calls to invoke or deploy a contract
- `eth_instantiate_with_code`, `eth_call`, `eth_substrate_call` — EVM-flavored equivalents
- `upload_code`, `remove_code`, `set_code` — manage contract code independently of instances
- `map_account`, `unmap_account` — manage the reversible `AccountId32` ↔ Ethereum address mapping
- `dispatch_as_fallback_account` — dispatch a call as a contract's fallback account

## Runtime configuration

Values set in `impl pallet_revive::Config for Runtime`:

| Setting            | Value                                                               | Notes                                                                                       |
| ------------------ | ------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `ChainId`          | `1_641_820` (Mainnet), `1_641_819` (Testnet), `1_641_818` (Develop) | The EVM chain ID wallets and tooling (MetaMask, ethers.js) need to target the right network |
| `NativeToEthRatio` | `10^12`                                                             | Bridges Polymesh's 6-decimal POLYX to Ethereum's 18-decimal wei convention                  |
| `AllowEVMBytecode` | `true`                                                              | EVM bytecode execution is enabled, in addition to native PolkaVM contracts                  |
| `GasScale`         | `100`                                                               | Scales EVM gas to Polymesh's weight-based fee model                                         |
| `Precompiles`      | `()`                                                                | No custom precompiles configured yet — see [Precompiles](#precompiles) below                |
| `AddressMapper`    | `AccountId32Mapper`                                                 | See [Address mapping](#address-mapping) above                                               |

## Interacting with native Polymesh functionality

### Precompiles

A precompile is a fixed contract address that, instead of running interpreted bytecode, triggers native logic on the runtime side — from a contract's perspective it looks like a normal contract implementing some interface (an ABI, for the EVM case), but calls to it are handled directly by a pallet rather than by executing PolkaVM/EVM code. This is the mechanism `pallet-revive` uses to expose native chain functionality to contracts: `impl pallet_revive::Config for Runtime` has a `Precompiles` associated type (see the [runtime configuration](#runtime-configuration) table above) that lists which precompiles are wired in for a given network.

:::caution No native-asset precompiles yet
As of this writing, Polymesh's `Precompiles` configuration is empty (`()`) on Mainnet, Testnet, and Develop. There is currently **no** supported way for a contract — PolkaVM or EVM — to call into the `Asset`, `Settlement`, or `Identity` pallets. Contracts are limited to their own storage and native POLYX balance flows (receiving, holding, transferring), which don't depend on a precompile.

Precompiles for interacting with native assets (such as an ERC-20-style interface for fungible assets — `transfer`, `approve`, `transferFrom`, `balanceOf`, `allowance`) are planned for a future release. This page will be updated once they ship; until then, treat contract-driven native-asset interaction as a planned capability, not an available one.
:::

### Allowances (`asset::approve` / `settlement::transfer_funds`)

The `Asset` and `Settlement` pallets provide an ERC-20-style `approve`/`transferFrom` pattern at the chain level: an asset holder calls `asset::approve(asset_id, spender, amount)` to authorize a spender to move up to `amount` of the asset on their behalf, without granting the spender a broader identity permission. The spender then calls `settlement::transfer_funds` naming the owner's account as the source — no separate signature from the owner is required for that transfer, and the allowance is drawn down accordingly. See [Allowances](/core/assets/fungible#allowances) and [Direct Transfers](/settlement#direct-transfers-transfer_funds) for the full mechanics. This is a general chain feature usable today by any permitted caller (an off-chain service, another pallet, or — once the precompile above ships — a contract); it does not itself require a contract.

## Running EVM JSON-RPC

`pallet-revive` is a Substrate pallet, not a full Ethereum node — it doesn't speak Ethereum's JSON-RPC (`eth_call`, `eth_sendRawTransaction`, `eth_getBalance`, etc.) directly. A separate proxy process, `pallet-revive-eth-rpc` (binary name `eth-rpc`), translates standard Ethereum JSON-RPC into calls against the node. Run it alongside your node to point MetaMask, ethers.js, or other standard Ethereum tooling at Polymesh, using the `ChainId` for your target network from the table above.

:::info Polkadot's smart contracts documentation
Polymesh's `pallet-revive` is built on the same upstream pallet used across the Polkadot ecosystem, so [Polkadot's smart contracts documentation](https://docs.polkadot.com/smart-contracts/) is a useful reference for standard EVM/Solidity tooling and workflows — dev environments (Remix, Hardhat, Foundry), libraries (ethers.js, viem, web3.js), an ERC-20/NFT/Uniswap cookbook, and general EVM-vs-PVM concepts. Treat it as a guide to the surrounding tooling ecosystem, not to Polymesh's own configuration: runtime settings like `ChainId`, `Precompiles`, and address mapping are specific to Polymesh's deployment and are documented above.
:::

## Error handling

`pallet-revive` has a large, themed error surface (contract/code lookup, execution & gas, calls & reentrancy, storage & deposits, code/blob validation, delegate dependencies, account mapping & syscalls, and EVM/Ethereum compatibility). For a full list of error definitions refer to the chain's own metadata for the network and runtime version you're targeting (via [Subscan runtime explorer](https://polymesh-testnet.subscan.io/runtime/Revive), [polymesh developer app](https://mainnet-app.polymesh.network/), polkadot.js apps, subxt, or the Polymesh SDK's generated types). If you're building a wallet, indexer, or dApp framework against `pallet-revive`, treat the metadata as the source of truth; expect most error conditions to be execution or storage-limit conditions specific to the PolkaVM environment.

## Getting started checklist

1. Target `pallet-revive` for all contract work on Polymesh.
2. To interact with contracts using standard Ethereum tooling, run the `eth-rpc` proxy alongside your node and use the correct `ChainId` for your network.
3. Have users call `map_account` **before** they receive funds at their derived Ethereum-style address — see the warning in [Address mapping](#address-mapping).
4. Contracts cannot yet call into native Polymesh pallets (no precompiles are configured) — see [Precompiles](#precompiles). Native-asset precompiles are planned for a future release.
