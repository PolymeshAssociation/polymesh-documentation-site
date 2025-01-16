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

## Identity Terms

### Permissioned Identity

On Polymesh, all keys (excluding [Session keys](#session-keys)) must be linked to an on-chain DID with a valid CDD claim to be able to receive POLYX and submit transactions. A node operator's DID must be granted an additional role making it a permissioned identity. Only keys linked to this identity will be allowed to be [Stash keys](#stash).

### Primary Key

This key is a special key under the onchain identity. It has additional capabilities of adding and removing [Secondary keys](#secondary-key) from an identity. It cannot access POLYX on secondary keys. It is recommended to keep the Primary key in a cold wallet and NOT use it as a [Stash key](#stash).

### Secondary Key

Secondary keys are authorized by a [Primary key](#primary-key) to join an identity. For the purposes of staking/POLYX transfers, they are no different from primary keys. Secondary keys can be given permissions to perform specific on-chain actions. For example, they may be allowed to interact only with specific assets, only with specific portfolios, or only use specific transactions.

## Staking Terms

### Node Operator

A permissioned entity that runs nodes to collect transactions and produce blocks. Node operators stake their own POLYX, earn rewards for honest behavior, and face [slashing](#slashing) if they misbehave.

### Nominator

A POLYX holder who stakes tokens by nominating node operators they wish to support. Nominators earn a share of rewards tied to the operator(s) their tokens are assigned to but do not run nodes themselves.

### Bonding

The process of locking POLYX for the purpose of staking.

### Era

A fixed time period (typically 24 hours on Polymesh Mainnet) during which the elected node operators remain active and after which rewards are distributed.

### Unbonding

The process of reclaiming staked tokens after a waiting period.

### Slashing

Mechanism by which staked tokens are lost if misbehavior occurs.

### Stash

The stash address is the address that holds the POLYX bonded by the operator and, optionally, receives operator rewards. This is recommended to be a cold wallet to minimise risk exposure of staked tokens. Stash keys can be either a [Primary key](#primary-key) or a [Secondary key](#secondary-key) but MUST be linked to the permissioned DID of the operator.

Stash keys can:

- Bond POLYX
- Bond extra POLYX
- Set the [Controller key](#controller) of the stash. If a separate controller key is not provided, the stash key is automatically made the controller.

### Controller

The controller key is used to manage bonded funds, vote with bonded funds, and perform similar on-chain actions. This key is not directly required by the operator node and should never be shared with it. It is recommended to use a multisig address or a supported hardware wallet for the controller key. These keys can hold funds and directly control bonded funds, so they must be stored securely. Consider the controller key a semi-cold wallet.

Controller keys can:

- Set/update [Session keys](#session-keys)
- Set commission and validate
- Set a destination for reward payments (e.g., stash with automatically stake, stash unstaked, controller, or other address)
- Commence unbonding of stash tokens
- Withdraw unbonded tokens after the 28-day waiting period to the stash address (i.e., the controller cannot transfer unbonded tokens from the stash)
- Rebond tokens which are in the process of unbonding
- "Chill" the node (i.e., gracefully stop validating after the last era the node was elected to ends)
- Purge session keys

### Session Keys

Session keys are used by the operator node to sign data necessary for consensus. These keys are stored on the operator node itself. Although session keys do not hold any funds, they can be used to perform actions that could result in penalties, such as double signing. It is therefore critical to keep these keys secure.

Session keys can either be generated offline and injected into the operator node or generated within the operator node by calling the appropriate RPC method. Once generated, session keys should be persisted.

Session keys must either be stored within the client or mounted from secure storage via external methods.
