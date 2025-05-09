---
title: Glossary
description: Term Definitions
id: glossary
slug: /glossary
sidebar_label: Glossary
tags:
  - glossary
  - terms
---

This glossary provides definitions for key terms and concepts used throughout the Polymesh documentation. Understanding these terms will help you better navigate the Polymesh ecosystem and its features.

## Identity & Keys

### Permissioned Identity

On Polymesh, all keys (excluding [Session Keys](#session-keys)) must be linked to an on-chain [DID](/identity/) with a valid [CDD](#cdd-customer-due-diligence) claim to receive [POLYX](#polyx) and submit transactions. A node operator's DID must be granted an additional role making it a permissioned identity. Only keys linked to this identity will be allowed to be [Stash keys](#stash).

### Primary Key

This key is a special key under the on-chain identity. It has additional capabilities of adding and removing [Secondary Keys](#secondary-key) from an identity. It cannot access POLYX on secondary keys. It is recommended to keep the Primary Key in a cold wallet and **not** use it as a [Stash key](#stash).

### Secondary Key

Secondary keys are authorized by a [Primary Key](#primary-key) to join an identity. For the purposes of staking/POLYX transfers, they are no different from primary keys. Secondary keys can be given permissions to perform specific on-chain actions (e.g., interact only with specific [assets](#asset), [portfolios](#portfolio), or transactions).

### Session Keys

Session keys are cryptographic keys used by the [Node Operator](#node-operator) to sign data necessary for consensus and block production. These keys are stored on the operator node itself and are essential for participating in the network as an operator. Although session keys do not hold any funds, they can be used to perform actions that could result in penalties, such as double signing (equivocation), so it is critical to keep these keys secure.

Session keys can either be generated offline and injected into the operator node or generated within the operator node by calling the appropriate RPC method. Once generated, session keys should be persisted. Session keys must either be stored within the client or mounted from secure storage via external methods.

### Multisig

A type of account or transaction that requires multiple signatures to authorize actions, increasing security and enabling shared control. See [Multisig](/identity/advanced/).

### Authorization

A mechanism to grant specific permissions to other identities or keys, such as joining an identity, managing [portfolios](#portfolio), or acting as an agent. See [Authorizations](/authorizations/).

### Authorization Request

A formal on-chain request to grant permissions or perform actions (such as adding secondary keys, rotating primary keys, or transferring assets) that must be accepted by the target party. Used throughout Polymesh for secure delegation and access control.

### Rotate Primary Key / Rotate Primary to Secondary

Authorization types for changing the primary key of an identity or converting the current primary key into a secondary key and replacing it with a new primary key. These operations require explicit authorization and acceptance.

### Child Identity / Child Identities

A subsidiary identity derived from a parent identity, inheriting CDD status but maintaining independent control and assets. Used for organizational structure, security, or smart contract isolation. See [Child Identities](/identity/advanced/child).

### Parent Identity

The original identity from which one or more child identities are derived. The parent can create, manage, and unlink child identities.

### Agent / Agent Permissions

An entity or key authorized to act on behalf of an asset issuer or identity, with specific permissions. Agents can perform asset management, compliance, or operational tasks. See [Agent Permissions](/asset-agents).

### Portfolio Custody

The right to manage or control a portfolio on behalf of the beneficial owner, without transferring ownership. Enables delegation of asset management while retaining ownership. See [Portfolio Custody](/portfolios/custody/).

### Subsidized Account / Fee Relayer / Subsidizer

An account that pays transaction fees on behalf of another account (the subsidized), enabling fee management and improved user experience. The subsidizer sets an allowance and can manage or revoke the relationship. See [Subsidized Accounts](/accounts/subsidized/).

### Paying Identity

The identity responsible for paying transaction fees in multisig or subsidized account arrangements. In multisig, the creator's identity is initially the paying identity.

### Admin Identity (Multisig)

An identity with special privileges to manage multisig configuration and membership, such as adding or removing signers or changing required signatures.

### Proposal (Multisig)

A transaction or configuration change submitted for approval by multisig signers. Proposals require a minimum number of approvals to execute.

### Signer (Multisig)

An account authorized to approve transactions in a multisig arrangement. The set of signers and required signatures define the multisig's security model.

### Required Signatures (Multisig)

The minimum number of approvals needed to execute a multisig transaction. This value is set during multisig creation and can be changed by proposal.

### Off-chain Authorization

A method of granting permissions or performing actions by signing data off-chain, enabling certain operations to complete in a single transaction. Used for adding secondary keys or creating child identities.

### Identity Freezing / Unfreezing

The ability to freeze or unfreeze all secondary keys of an identity for security purposes. Only the primary key can perform this action.

### Beneficial Ownership

The true ownership of assets or portfolios, even if custody or control is delegated to another party.

### Multisig Identity

The identity to which a multisig key is linked. Multisig keys must be associated with an identity to perform most operations.

### Smart Contract

A smart contract is a programmatic account deployed on Polymesh that enables custom, automated, or complex business logic to be executed on-chain. Smart contracts are compiled to WebAssembly (Wasm), with [Ink!](https://ink.substrate.io/) recommended for development. On Polymesh, a smart contract can serve as a primary or secondary key for an identity, allowing it to control assets, act as a custodian, or manage permissions. Beyond acting as a key, smart contracts can interact with native Polymesh modules, extend protocol functionality, and implement custom workflows such as decentralized exchanges, compliance logic, or asset management. All smart contracts must be attached to an identity with a valid CDD claim to function. See [Smart Contracts](/development/smart-contracts/).

### Proposal Voting (Multisig)

The process by which multisig signers approve or reject proposals. A proposal is executed or rejected based on the collected votes.

---

## Staking & Node Operations

### Session

A fixed period with a constant set of operators. Operators can only join or leave the set at the start of a session. Sessions are used to rotate keys and update the active operator set.

### Node Operator

A permissioned entity that runs nodes to collect transactions and produce blocks. Node operators stake their own [POLYX](#polyx), earn rewards for honest behavior, and face [slashing](#slashing) if they misbehave. See [Node Operations](/developer-resources/validator-node-guide).

### Nominator

A POLYX holder who stakes tokens by nominating node operators they wish to support. Nominators earn a share of rewards tied to the operator(s) their tokens are assigned to but do not run nodes themselves.

### Stash

The stash address is the address that holds the [POLYX](#polyx) bonded by the operator and, optionally, receives operator rewards. This is recommended to be a cold wallet to minimize risk exposure of staked tokens. Stash keys can be either a [Primary Key](#primary-key) or a [Secondary Key](#secondary-key) but **must** be linked to the permissioned [DID](/identity/) of the operator.

Stash keys can:

- Bond POLYX
- Bond extra POLYX
- Set the [Controller key](#controller) of the stash. If a separate controller key is not provided, the stash key is automatically made the controller.

### Controller

The controller key is used to manage bonded funds, vote with bonded funds, and perform similar on-chain actions. This key is not directly required by the operator node and should never be shared with it. It is recommended to use a [multisig](#multisig) address or a supported hardware wallet for the controller key. These keys can hold funds and directly control bonded funds, so they must be stored securely. Consider the controller key a semi-cold wallet.

Controller keys can:

- Set/update [Session Keys](#session-keys)
- Set commission and validate
- Set a destination for reward payments (e.g., stash with automatically stake, stash unstaked, controller, or other address)
- Commence unbonding of stash tokens
- Withdraw unbonded tokens after the 28-day waiting period to the stash address (i.e., the controller cannot transfer unbonded tokens from the stash)
- Rebond tokens which are in the process of unbonding
- "Chill" the node (i.e., gracefully stop validating after the last era the node was elected to ends)
- Purge session keys

### Bonding

The process of locking [POLYX](#polyx) for the purpose of staking. See [Staking](/polyx/staking/).

### Staking

Locking POLYX to support network security and earn rewards. See [Staking](/polyx/staking/).

### Unbonding

The process of reclaiming staked tokens after a waiting period.

### Era

A fixed time period (typically 24 hours on Polymesh Mainnet) during which the elected node operators remain active and after which rewards are distributed. Each era determines the operator and nominator sets and is the interval for reward distribution.

### Slashing

Mechanism by which staked tokens are lost if misbehavior occurs.

### Equivocation

Occurs when an operator node commits to two or more conflicting states (for example, by signing multiple blocks for the same slot). Equivocation is considered a serious protocol violation and can result in slashing of staked POLYX and removal from the operator set.

### Immortal Transaction

A transaction valid at any time, not restricted to a specific block or era. When using immortal transactions, care must be taken to ensure the account nonce is correct, as replay protection is not provided by block height or era.

### Warm Spare Node

A synced node configured and ready to replace an active operator node manually in the event of failure or maintenance. A warm spare node does not have session keys active until it is promoted to active status, helping to prevent equivocation penalties.

---

## Assets & Portfolios

### Asset

A digital representation of value on Polymesh. Assets are managed at the protocol level and can have compliance, settlement, and lifecycle rules enforced on-chain. Assets can be either [fungible](#fungible-token--asset) or [non-fungible](#non-fungible-token-nft). Each asset is assigned a unique Asset ID and may have a ticker and external identifiers (such as ISINs, CUSIPs, etc.). See [Assets](/assets/).

### Asset ID

A unique 16-byte identifier (UUID) assigned to each asset at creation. Used throughout the chain to reference and manage the asset.

### Ticker

A unique, human-readable symbol that can be registered and linked to an asset for discoverability. Tickers can be transferred and unlinked from assets. See [Ownership Transfer](/assets/ownership-transfer).

### Divisibility

Indicates whether a fungible asset can be divided into fractional units. Divisibility is set at creation, but an indivisible asset can later be made divisible (irreversible). All fungible assets use 6 decimals of precision on-chain.

### Issuance

The process of minting new tokens for an asset (fungible or non-fungible), increasing the total supply and assigning balances to portfolios. For fungible assets, issuance creates additional tokens; for NFTs, issuance creates new unique tokens within a collection. Performed by an agent of the asset using the `asset::issue` method.

### Redemption

The process of burning tokens from a portfolio, reducing both the total supply and the portfolio's balance. Applies to both fungible assets (removing tokens) and NFTs (removing unique tokens from a collection). Performed by an agent of the asset using the `asset::redeem` method.

### Checkpoint

A snapshot of all holder balances for a fungible asset at a specific point in time. Used for corporate actions, compliance, and regulatory reporting. See [Checkpoint Management](/corporate-actions/checkpoints).

### Transfer Restriction

Rules that limit the transfer of assets based on criteria such as maximum investor count, maximum ownership percentage, or claim-based restrictions. Enforced via the statistics pallet. See [Transfer Restrictions](/compliance/transfer-restrictions).

### NFT Collection

A group of non-fungible tokens (NFTs) managed under a single asset. Each collection is associated with a unique Asset ID and user-defined metadata. The collection defines the metadata keys that are required to be present for all individual NFTs within it. See [Non-Fungible Assets](/assets/nft).

### Collection Metadata Keys

Properties that must be defined for each NFT in a collection. Registered before collection creation and stored on-chain for transparency and smart contract use. See [Asset Metadata](/assets/metadata).

### Token URI

A standardized metadata key for NFTs, pointing to off-chain JSON metadata describing the token.

### Base Token URI

A collection-wide base URI for NFT token metadata, used to construct full metadata URLs for each token.

### Image URI

A standardized metadata key for NFTs, pointing to an off-chain image representing the token.

### Base Image URI

A collection-wide base URI for NFT images, used to construct full image URLs for each token.

### Asset Metadata

Additional information associated with an asset, such as regulatory details, classifications, investment terms, or external references. Metadata can be local (asset-specific) or global (standardized across assets). See [Asset Metadata](/assets/metadata).

### Local Metadata

Asset-specific metadata defined and managed by the asset issuer or authorized agents.

### Global Metadata

Standardized metadata definitions usable across all assets, defined through on-chain governance.

### Agent Group

A set of permissions assigned to agents for a specific asset. Each agent belongs to exactly one group per asset, and groups define what actions agents can perform. See [Asset Agents & Permissions](/asset-agents).

### Custom Agent Group

A user-defined group with specific permissions for agents on a per-asset basis. Created using the `externalAgents::create_group` method.

### Security Token Offering (STO)

A fundraising method where tokens representing ownership of an asset are sold to investors. Managed on-chain with automated settlement. See [Security Token Offerings](/sto).

### Fungible Token / Asset

A fungible token or asset on Polymesh is an interchangeable unit of value, such as a token or share, where each unit is identical and mutually substitutable. Fungible tokens are divisible and can be transferred, issued, or redeemed in fractional or whole amounts. See [Fungible Assets](/assets/fungible).

### Non-Fungible Token (NFT)

A non-fungible token (NFT) is a unique digital asset on Polymesh that represents ownership of a specific, individually distinguishable item or record. Unlike fungible tokens, each NFT has distinct characteristics or metadata and cannot be exchanged on a one-to-one basis with other tokens. NFTs are commonly used for assets such as collectibles, certificates, or unique financial instruments, and are managed within NFT collections that define required metadata keys for each token. See [Non-Fungible Assets](/assets/nft).

### Portfolio

A logical grouping of assets owned by an identity. Portfolios allow users to organize, segregate, and control digital assets with flexible permissions. Each identity has a default portfolio and can create additional numbered portfolios. See [Portfolios](/portfolios/).

### Default Portfolio

The primary portfolio associated with an identity, used as the default destination for asset transfers. Cannot be deleted or renamed.

### Portfolio Movement

The transfer of assets between portfolios under the same identity. Does not require settlement or compliance checks.

### Custody

The management and safekeeping of assets on behalf of an owner. Custody can be delegated to third parties, such as custodians, using Polymesh's portfolio and authorization features. See [Custody](/portfolios/custody/). (See also: [Portfolio Custody](#portfolio-custody))

---

## Compliance & Verification

### Compliance

Protocol-level rules that govern asset transfers and ownership. Compliance ensures only eligible identities can hold or transfer certain assets, based on rules set by the asset issuer. See [Compliance](/compliance/).

### CDD (Customer Due Diligence)

A process by which an identity is verified and approved to participate on Polymesh. CDD claims are required for most network actions. See [CDD](/identity/verification/).

### KYC (Know Your Customer)

KYC is a regulatory process to verify the identity and suitability of participants. On Polymesh, CDD providers perform identity verification as part of the CDD process, but this alone will not satisfy all regulatory KYC requirements for asset issuers. Asset issuers should assess and implement their own KYC procedures based on the type of asset and relevant jurisdiction. KYC claims can then be added to identities and used in conjunction with compliance rules as appropriate. On-chain, KYC is typically enforced via KYC claims, which can be referenced in compliance rules.

### Claim / Attestation

A statement made by one identity about another, such as a CDD claim. Claims are used for compliance and can be attached to identities. See [Claims](/identity/verification/).

---

## Settlement & Instructions

### Settlement

The process of transferring assets between parties on-chain. Polymesh supports atomic, multi-asset, multi-party settlements via [instructions](#instruction). See [Settlement](/settlement/).

### Instruction

An atomic group of asset transfers (legs) between counterparties. Instructions must be affirmed by all parties and are settled atomically. See [Instructions](/settlement/).

### Leg

A single transfer of assets from one party to another within an instruction.

### Venue

A logical grouping of instructions, representing a marketplace or context for settlement. Venues define who can sign off-chain receipts and manage instructions. Asset issuers can restrict asset transfers so that they are only permitted via instructions linked to specific venues, enabling fine-grained control over where and how assets are settled. See [Venues](/settlement/venues/).

### Execution

The process by which a settled instruction is executed on-chain, resulting in the actual transfer of assets between parties. Execution can be automatic or manual, depending on the instruction type, and occurs after all required affirmations are received. An instruction can only be executed when all compliance rules and transfer restrictions for the involved assets and parties are satisfied. See [Settlement](/settlement/).

### Affirmation

The act of a counterparty approving an instruction before settlement.

---

## Corporate Actions

### Corporate Action

An on-chain event affecting asset holders, such as distributions, voting, or reorganizations. Polymesh automates corporate actions via protocol features. See [Corporate Actions](/corporate-actions/).

### Distribution

A type of corporate action where assets (e.g., dividends) are distributed to eligible holders. See [Distributions](/corporate-actions/distributions/).

### Ballot

A corporate action involving voting by asset holders. See [On-Chain Voting](/corporate-actions/on-chain-voting/).

---

## Governance

Governance refers to the on-chain mechanisms and processes for managing network upgrades, permissioning, and parameter changes. Governance is performed by the [Governing Council](#governing-council), committees, and POLYX token holders. See [Governance](/governance/).

### PIP (Polymesh Improvement Proposal)

A formal proposal for changes to the network, such as upgrades, parameter changes, or privileged actions. PIPs are curated by the community and committees, and are actioned by the [Governing Council](#governing-council). See [Governance](/governance/).

### Governing Council

The on-chain body responsible for executing privileged actions, including PIPs, network upgrades, and permissioning. The council acts as a multisig, with a voting threshold for actions. Members can add/remove council members and elect a [Release Coordinator](#release-coordinator). See [Governing Council](/governance/).

### Committee

A group with special roles in governance, such as the Technical Committee or Upgrade Committee. Committees can submit PIPs directly to the council and manage specific network changes. See [Committees](/governance/). (See also: [PIP (Polymesh Improvement Proposal)](#pip-polymesh-improvement-proposal))

### Release Coordinator

A member of the Governing Council elected to schedule and coordinate the execution of ratified PIPs. The Release Coordinator can reschedule or expedite PIP execution. See [Release Coordinator](/governance/).

---

## Technical & Infrastructure

### Substrate (Polkadot SDK)

Substrate is the blockchain framework that underpins the Polkadot SDK, developed by Parity. It is used as the foundation for Polymesh and provides modular components (pallets) and support for custom business logic. Official resources are now found at [Polkadot SDK](https://polkadot.com/platform/sdk/).

### Primitives

Core business logic and financial abstractions provided at the base layer of Polymesh, such as asset origination, settlement, and compliance. Primitives are implemented as pallets.

### Consensus (NPoS, BABE, GRANDPA)

Polymesh uses Nominated Proof-of-Stake (NPoS) for operator selection, BABE for block production, and GRANDPA for block finality. See [Consensus](/architecture/).

### NPoS (Nominated Proof-of-Stake)

A consensus mechanism where token holders nominate node operators by staking POLYX, and the most-backed operators are selected to produce blocks.

### BABE (Blind Assignment for Blockchain Extension)

The protocol used to determine which operator produces each block in Polymesh.

### GRANDPA (GHOST-based Recursive ANcestor Deriving Prefix Agreement)

The protocol used for rapid block finality in Polymesh, where operators vote on chains rather than individual blocks.

### Wasm (WebAssembly)

A binary instruction format for a stack-based virtual machine, used for running smart contracts on Polymesh and other Substrate-based chains.

### Ink!

A Rust-based language and toolset for writing smart contracts for Substrate-based blockchains, recommended for Polymesh smart contract development.

### Identity

The requirement that all users act through on-chain identities, with federated onboarding and key management. See [Identity](/identity/).

### POLYX

The native token of Polymesh, used for transaction fees, [staking](/polyx/staking/), and governance. See [POLYX](/polyx/).

### Middleware

Off-chain services (such as the Polymesh GraphQL API) that index and provide access to chain data for SDKs and applications.

### Chain Indexer (SubQuery)

A service that ingests Polymesh blocks and builds an indexed database for querying chain state and history, used by the GraphQL API.

### SDK

The [Polymesh SDK](https://github.com/PolymeshAssociation/polymesh-sdk) is a TypeScript library for interacting with the Polymesh blockchain. See [Developer Resources](/development).

### REST API

A service that exposes Polymesh functionality via HTTP endpoints, often used for integration with external systems.

### Extrinsic

An extrinsic is a piece of information (such as a transaction or an inherent) that comes from outside the blockchain and is included in a block. In Polymesh (and other Substrate-based chains), extrinsics are how users and external actors interact with the chain, such as submitting transactions or signaling intent. See also [Polkadot Glossary: Extrinsic](https://wiki.polkadot.network/general/glossary/#extrinsic).

### Pallet

A pallet is a modular component in the Substrate framework that implements specific blockchain functionality (such as balances, identity, or staking). Polymesh is built from multiple pallets, each responsible for a part of the chain's logic.

---

## Polymesh Private & Confidentiality

### Polymesh Private

A private, permissioned version of the Polymesh blockchain, designed for enterprise and consortium deployments in controlled environments. Polymesh Private offers enhanced privacy, customizable governance, and compatibility with public Polymesh features. See [Polymesh Private](/polymesh-private/).

### Confidential Asset

An asset type available on Polymesh Private that supports confidential balances and transfers using zero-knowledge proofs and homomorphic encryption. See [Confidential Assets](/confidential-assets/overview/). (See also: [Zero-Knowledge Proof (ZKP)](#zero-knowledge-proof-zkp))

### Confidentiality

The ability to maintain privacy over certain transactions and balances, especially via confidential assets and zero-knowledge proofs. See [Confidential Assets](/confidential-assets/overview/).

### Proof API (Polymesh Private)

A service for generating and verifying zero-knowledge proofs required for confidential asset operations. Used by the REST API and SDK. See [Proof API](/polymesh-private/developer-tooling/#polymesh-proof-api).

### Zero-Knowledge Proof (ZKP)

A cryptographic proof that allows one party to prove knowledge of a value (such as a confidential balance) without revealing the value itself. Used for confidential asset operations. (See also: [Confidential Asset](#confidential-asset))
