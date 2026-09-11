---
title: EVM & Smart Contracts
description: Polymesh's EVM surface - the pallet-revive dual-VM contract engine, precompiles, EVM address mapping, runtime calls from a wallet, and the Ethereum JSON-RPC proxy
id: smart-contracts
slug: /development/smart-contracts
sidebar_label: EVM & Smart Contracts
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

## EVM compatibility on Polymesh

Polymesh is **EVM-compatible**. This is a statement about formats and tooling, not about networks.

**What Polymesh has:**

- An **EVM** — `revm`, a Rust implementation of the Ethereum Virtual Machine — that executes standard EVM bytecode compiled by `solc`.
- **EVM addresses and keys**: 20-byte addresses controlled by secp256k1 keys, the same kind MetaMask and hardware wallets hold.
- **EVM transactions**: legacy, EIP-2930 and EIP-1559 transactions, RLP-encoded and signed the usual way.
- **Ethereum JSON-RPC compatibility**, through the [`eth-rpc` proxy](#running-evm-json-rpc), so tools built for Ethereum — MetaMask, viem, ethers, Foundry, Hardhat, Blockscout — work against Polymesh.

**What Polymesh is not:**

- It is **not connected to the Ethereum network**, and there is no bridge to it in the runtime. An EVM transaction you sign for Polymesh is submitted to Polymesh and settles on Polymesh.
- It holds **no Ether and no Ethereum-issued tokens**. Gas and fees are paid in POLYX; an ERC-20 exposed by a [precompile](./020-precompiles/index.mdx) is a native Polymesh asset, not a token bridged from anywhere.
- A contract address, an account balance or a transaction hash on Polymesh has **no relationship** to the same value on Ethereum.

### How we use the terms

| Term                     | Means                                                                                                                                 | Also called                               |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| **EVM**                  | The execution environment, and Polymesh's compatibility with EVM formats generally                                                    | —                                         |
| **EVM key / EVM wallet** | A secp256k1 key, and the wallet holding it — MetaMask, Ledger, a viem or ethers account                                               | Ethereum key, Ethereum wallet, ETH wallet |
| **EVM address**          | The 20-byte address derived from such a key, or from a Polymesh account (see [Address mapping](./010-address-mapping.mdx))            | Ethereum address, `0x` address, H160      |
| **EVM transaction**      | An RLP-encoded, EVM-signed transaction, submitted to Polymesh                                                                         | Ethereum transaction                      |
| **Ethereum**             | Reserved for the Ethereum network itself, EIP/ERC standards, the `eth_*` JSON-RPC method names, and tools from the Ethereum ecosystem | —                                         |

### Ethereum key, Ethereum wallet, ETH wallet

These are the common industry names for what this documentation calls an EVM key and an EVM wallet: the same secp256k1 key, the same MetaMask account, the same `0x` address. The EVM prefix is used because such a key on Polymesh does not involve the Ethereum network.

Chain mechanism: [Runtime Calls from an EVM Wallet](./030-runtime-calls.mdx). Application use through the SDK: [EVM Wallets](/development/tooling/sdk/evm-wallets).

Some code identifiers predate this convention and use `Eth`/`Ethereum` for what this documentation calls EVM — the SDK's `EthSigningManager` and `AccountKeyType.Ethereum`, the chain's `eth_transact` and `eth_substrate_call`. Those names are unchanged; they refer to EVM keys and EVM transactions on Polymesh, not to anything on Ethereum.

## `pallet-revive`: a dual-VM contract engine (PolkaVM + EVM)

The smart contract pallet on Polymesh is `pallet-revive`. It is a **dual-VM contract execution engine**: it runs two different virtual machines, and which one executes a given contract is determined by how that contract was compiled — not by which way you call it.

- **PolkaVM** (a RISC-V-based VM) executes **PolkaVM bytecode**. Solidity compiled with the [`resolc`](https://github.com/paritytech/revive) compiler (instead of `solc`) targets PolkaVM. This path does **not** provide full EVM compatibility — some EVM semantics and opcodes are unsupported or behave differently, so a contract that depends on exact EVM behaviour should not assume it carries over.
- **revm** (a Rust implementation of the Ethereum Virtual Machine) executes standard **EVM bytecode**. Solidity compiled with the ordinary `solc` compiler produces EVM bytecode that deploys and runs in `revm` with **full EVM compatibility**. This is the path to use when a contract must behave exactly as it would on Ethereum.

In short: **`resolc` → PolkaVM** (native execution, partial EVM compatibility) and **`solc` → EVM bytecode → `revm`** (full EVM compatibility). EVM-bytecode execution is a distinct execution path enabled by the `AllowEVMBytecode` runtime flag (see [Runtime configuration](#runtime-configuration)) — not merely an interface layered on top of PolkaVM. Both VMs live behind the same `pallet-revive` calls, storage, and account model.

:::info The VM is chosen from the uploaded code, not the submission path
When you deploy a contract you upload its compiled code, and the runtime selects the VM from the code itself — PolkaVM if it's RISC-V/PolkaVM bytecode, `revm` if it's EVM bytecode. This is **independent of how you submit the transaction**. A Solidity/EVM-bytecode contract can be deployed and called from an ordinary **Substrate transaction** (e.g. polkadot.js or subxt, via `instantiate_with_code` / `call`) just as well as from standard Ethereum tooling through the [`eth-rpc` proxy](#running-evm-json-rpc). The Ethereum JSON-RPC path is a convenience for standard ETH tooling and workflows — it is not a requirement for deploying or using EVM contracts.
:::

## Address mapping

Polymesh accounts are 32-byte (`AccountId32`), not 20-byte EVM addresses, and `pallet-revive` bridges the two. The derivation is one-way in the native-to-EVM direction, so **an account must call `map_account` before receiving funds at its EVM address** or they are credited to a separate fallback account.

See [Address Mapping](./010-address-mapping.mdx) for the full model, the recovery path, and the conversion tools.

## Calls

`pallet-revive` exposes the standard upstream call set — Polymesh has not added or removed any calls at the pallet level; customization is entirely in runtime configuration (below):

- `call`, `instantiate`, `instantiate_with_code` — native (Substrate) calls to invoke or deploy a contract. `instantiate_with_code` accepts **either** PolkaVM or EVM bytecode; the runtime selects the VM from the uploaded code, so these deploy Solidity/EVM contracts to `revm` too — not only PolkaVM contracts.
- `eth_transact`, `eth_instantiate_with_code`, `eth_call`, `eth_substrate_call` — EVM-transaction-shaped entry points (RLP-encoded, ETH-signed) that the `eth-rpc` proxy uses so standard Ethereum tooling can reach the same contracts. They are an alternative submission path, not a different VM. `eth_substrate_call` is the odd one out: it dispatches a native extrinsic rather than touching a contract, and is how [an EVM wallet calls runtime pallets directly](./030-runtime-calls.mdx).
- `upload_code`, `remove_code`, `set_code` — manage contract code independently of instances (again, either bytecode kind)
- `map_account`, `unmap_account` — manage the reversible `AccountId32` ↔ EVM address mapping
- `dispatch_as_fallback_account` — dispatch a call as a contract's fallback account

## Runtime configuration

Values set in `impl pallet_revive::Config for Runtime`:

| Setting            | Value                                                                             | Notes                                                                                          |
| ------------------ | --------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `ChainId`          | `1_641_820` (Mainnet), `1_641_819` (Testnet), `1_641_818` (Develop)               | The EVM chain ID wallets and tooling (MetaMask, ethers.js) need to target the right network    |
| `NativeToEthRatio` | `10^12`                                                                           | Converts Polymesh's 6-decimal POLYX to Ethereum's 18-decimal wei convention                    |
| `AllowEVMBytecode` | `true`                                                                            | Enables the `revm` EVM-bytecode path (`solc` output) alongside PolkaVM contracts               |
| `GasScale`         | `100`                                                                             | Scales EVM gas to Polymesh's weight-based fee model                                            |
| `Precompiles`      | `FungibleAssetInterface`, `NonFungibleAssetInterface`, `PolymeshRuntimeInterface` | Exposes native assets and general runtime calls to contracts — see [Precompiles](#precompiles) |
| `AddressMapper`    | `AccountId32Mapper`                                                               | See [Address mapping](./010-address-mapping.mdx) above                                         |

## Interacting with native Polymesh functionality

### Precompiles

A precompile is a fixed contract address that, instead of running interpreted bytecode, triggers native logic on the runtime side — from a contract's perspective it looks like a normal contract implementing some interface (an ABI, for the EVM case), but calls to it are handled directly by a pallet rather than by executing PolkaVM/EVM code. This is the mechanism `pallet-revive` uses to expose native chain functionality to contracts: `impl pallet_revive::Config for Runtime` has a `Precompiles` associated type (see the [runtime configuration](#runtime-configuration) table above) that lists which precompiles are wired in for a given network.

Polymesh ships three, all enabled on Mainnet, Testnet, and Develop:

- The [**Fungible Asset precompile**](/development/smart-contracts/precompiles/fungible-asset) makes every native fungible asset callable as an **ERC-20** token — `transfer`, `approve`, `transferFrom`, `balanceOf`, `allowance`, plus `mint`/`burn`, the ERC-7943 transfer checks and forced transfers, and part of the ERC-3643 administration surface.
- The [**Non-Fungible Asset precompile**](/development/smart-contracts/precompiles/non-fungible-asset) makes every NFT collection callable as an **ERC-721** token, with ERC-721Metadata token URIs, approvals, and part of ERC-7943.
- The [**Polymesh Runtime precompile**](/development/smart-contracts/precompiles/polymesh-runtime) exposes the general-purpose calls that are not scoped to an asset: asset creation, ticker registration, DID onboarding, and external agent authorization.

Full compliance and settlement enforcement sits behind every call.

**See [Precompiles](/development/smart-contracts/precompiles)** for the address scheme, the semantics shared by all precompiles, and the current list of what is and isn't exposed. There is not yet a precompile for portfolios, settlement instructions, compliance management, or claims — contracts cannot call those pallets.

### Runtime calls from an EVM wallet

Precompiles serve contracts. A wallet holding only an EVM key has a second, broader route: send a zero-value transaction to the reserved address `0x6d6f646c70792f70616464720000000000000000` with a **SCALE-encoded `RuntimeCall`** as its calldata, and the runtime dispatches that extrinsic with the EVM signer as the origin.

Nothing runs in a VM, no contract is involved, and the whole runtime is reachable — not just the parts a precompile exposes. This is what lets an EVM-keyed user create assets, affirm instructions, or manage portfolios without ever holding a Polymesh key.

**See [Runtime Calls from an EVM Wallet](./030-runtime-calls.mdx)** for the calldata format, which account the call runs as, permissions, fees, and the limits.

### Allowances (`asset::approve` / `settlement::transfer_funds`)

The `Asset` and `Settlement` pallets provide an ERC-20-style `approve`/`transferFrom` pattern at the chain level: an asset holder calls `asset::approve(asset_id, spender, amount)` to authorize a spender to move up to `amount` of the asset on their behalf, without granting the spender a broader identity permission. The spender then calls `settlement::transfer_funds` naming the owner's account as the source — no separate signature from the owner is required for that transfer, and the allowance is drawn down accordingly. See [Allowances](/core/assets/fungible#allowances) and [Direct Transfers](/settlement#direct-transfers-transfer_funds) for the full mechanics.

This is a general chain feature usable by any permitted caller — an off-chain service, another pallet, or a contract. It is also exactly what the fungible-asset precompile's `approve`/`transferFrom` methods drive, so allowances set through either path are the same on-chain state.

## Pre-deployed standard contracts

Two contracts that most Ethereum tooling assumes exist are deployed on Polymesh at the same canonical addresses they use on every other EVM chain:

| Contract                                                                    | Address                                      | What it's for                                                                                                                                                    |
| --------------------------------------------------------------------------- | -------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Multicall3](https://github.com/mds1/multicall3)                            | `0xcA11bde05977b3631167028862bE2a173976CA11` | Aggregates many contract calls into a single JSON-RPC request. Used by viem, wagmi, ethers, and most dApp front-ends to batch reads.                             |
| [CREATE2 proxy](https://github.com/Arachnid/deterministic-deployment-proxy) | `0x4e59b44847b379578588920ca78fbf26c0b4956c` | The deterministic deployment proxy. Lets you deploy a contract to the same address on every chain, and is what Foundry uses for `CREATE2`/deterministic deploys. |

Both reach the same address on every chain by being deployed from a single-use account whose transaction is pre-signed, so the deployer address — and therefore the contract address — is fixed regardless of when or where it is deployed. Multicall3's [documentation site](https://multicall3.com) and the CREATE2 proxy's [repository](https://github.com/Arachnid/deterministic-deployment-proxy) explain the mechanism and the ABIs in full.

On live Polymesh networks these were deployed manually, in the ordinary way, after the network launched. On **development chains** they are instead written into the genesis config, so a fresh local chain has them from block zero and you don't have to deploy them yourself before using tooling that depends on them.

:::tip Confirm before depending on them
Because these are ordinary deployed contracts rather than runtime features, the reliable check is to ask the chain:

```bash
curl -s -H 'Content-Type: application/json' \
  -d '{"jsonrpc":"2.0","method":"eth_getCode","params":["0xcA11bde05977b3631167028862bE2a173976CA11","latest"],"id":1}' \
  <your eth-rpc endpoint>
```

A response other than `0x` means the contract is present.
:::

## Running EVM JSON-RPC

`pallet-revive` is a Substrate pallet, not a full Ethereum node — it doesn't speak Ethereum's JSON-RPC (`eth_call`, `eth_sendRawTransaction`, `eth_getBalance`, etc.) directly. A separate proxy process, `pallet-revive-eth-rpc` (binary name `eth-rpc`), translates standard Ethereum JSON-RPC into calls against the node. Run it alongside your node to point MetaMask, ethers.js, or other standard Ethereum tooling at Polymesh, using the `ChainId` for your target network from the table above.

The `eth-rpc` proxy exists purely to support standard Ethereum tooling and workflows. It is **not** required to use EVM contracts: the same `revm`-executed Solidity contracts can be deployed and called directly through ordinary Substrate transactions (`instantiate_with_code` / `call`) using e.g. polkadot.js or subxt. Which VM runs a contract depends on the uploaded bytecode, not on whether you go through `eth-rpc` — see [the note above](#pallet-revive-a-dual-vm-contract-engine-polkavm--evm).

:::info Polkadot's smart contracts documentation
Polymesh's `pallet-revive` is built on the same upstream pallet used across the Polkadot ecosystem, so [Polkadot's smart contracts documentation](https://docs.polkadot.com/smart-contracts/) is a useful reference for standard EVM/Solidity tooling and workflows — dev environments (Remix, Hardhat, Foundry), libraries (ethers.js, viem, web3.js), an ERC-20/NFT/Uniswap cookbook, and general EVM-vs-PVM concepts. Treat it as a guide to the surrounding tooling ecosystem, not to Polymesh's own configuration: runtime settings like `ChainId`, `Precompiles`, and address mapping are specific to Polymesh's deployment and are documented above.
:::

## Error handling

`pallet-revive` has a large, themed error surface (contract/code lookup, execution & gas, calls & reentrancy, storage & deposits, code/blob validation, delegate dependencies, account mapping & syscalls, and EVM/Ethereum compatibility). For a full list of error definitions refer to the chain's own metadata for the network and runtime version you're targeting (via [Subscan runtime explorer](https://polymesh-testnet.subscan.io/runtime/Revive), [polymesh developer app](https://mainnet-app.polymesh.network/), polkadot.js apps, subxt, or the Polymesh SDK's generated types). If you're building a wallet, indexer, or dApp framework against `pallet-revive`, treat the metadata as the source of truth; expect most error conditions to be execution or storage-limit conditions specific to the PolkaVM environment.

## Getting started checklist

1. Target `pallet-revive` for all contract work on Polymesh.
2. To interact with contracts using standard Ethereum tooling, run the `eth-rpc` proxy alongside your node and use the correct `ChainId` for your network.
3. Have users call `map_account` **before** they receive funds at their derived EVM address — see the warning in [Address mapping](./010-address-mapping.mdx).
4. To read or move native Polymesh assets from a contract, use the [Fungible Asset](/development/smart-contracts/precompiles/fungible-asset) or [Non-Fungible Asset](/development/smart-contracts/precompiles/non-fungible-asset) precompile — and give the contract its own identity, since a precompile call acts as the contract's account, not the user's.
5. Check [Precompiles](/development/smart-contracts/precompiles) before assuming a native capability is reachable from contract code. If you are building for a **wallet** rather than a contract, [runtime calls](./030-runtime-calls.mdx) reach the whole runtime instead.
