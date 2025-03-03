---
title: Multisigs
description: Create multi-signature structures requiring approval from multiple parties
id: multisigs
slug: /identity/advanced/multisig
sidebar_label: Multisigs
tags:
  - multisig
  - accounts
---

## Overview

A multisig in Polymesh is a specialized account that requires approval from multiple parties to execute transactions. Instead of using a single private key, a multisig allows you to specify a group of signing accounts (m signers) and define how many of those signers (n signatures) must agree before any transaction can be executed. On Polymesh, multisig keys behave the same as other key types, i.e., they can be associated with an identity as either a primary or secondary key with defined permissions.

Multisigs enhance security and governance by distributing control across multiple parties while maintaining a single point of identity on the blockchain.

## Core Concepts

### Structure and Roles

A multisig consists of several key components:

- **Signing Keys**: The accounts authorized to approve transactions (m signers)
- **Required Signatures**: The minimum number of approvals needed (n signatures)
- **Admin Identity**: Optional identity that can manage multisig configuration
- **Paying Identity**: The creator's identity, which pays for proposal transaction fees (can be removed)
- **Multisig Identity**: The identity to which the multisig is linked

### Key Relationships

Multisigs have three important relationships:

1. **Identity Association**: Like any key, a multisig must be linked to an identity to perform most operations
2. **Admin Control**: An optional admin identity can manage the multisig configuration
3. **Fee Payment**: Initially the creator's identity pays for proposal fees, but this can be removed to make the multisig self-paying

### Operational Flow

The basic flow for multisig operations:

1. A signer proposes a transaction
2. Other signers review and approve/reject the proposal
3. When sufficient approvals are gathered, the transaction executes automatically
4. If rejected or executed, the proposal is removed from chain storage

## Managing a Multisig

### Creation and Setup

When a multisig is created by calling `multisig::create_multisig`:

1. It's automatically added as a secondary key to the creator's identity. Optionally the creator can assign [secondary key permissions](/identity/advanced/keys/#secondary-key-permissions) to the multisig when creating.
2. The creator's identity becomes the paying identity
3. Authorization requests are sent to all designated signers
4. Signers must accept their authorizations before participating

When selecting signing keys for a multisig consider the following requirements:

- Signing keys cannot be linked to other identities or multisigs
- Signers cannot directly receive or send POLYX

### Administration

A multisig can optionally have an admin identity that can unilaterally manage its configuration. An admin identity can be added by creating a multisig proposal with a call of `multisig::add_admin`. The admin identity's primary key can then:

- Add a signer to the multisig (`multisig::add_multisig_signers_via_admin`)
- Remove a signer from the multisig (`multisig::remove_multisig_signers_via_admin`)
- Change the required number of signatures (`multisig::change_sigs_required_via_admin`)

:::note
See [Proposal Voting](#proposal-states) for details on how configuration changes affect existing proposals.
:::

### Configuration changes

If no admin identity is set (or as an alternative to admin-based changes), a multisig can modify its configuration through its normal [proposal process](#multisig-proposals).

The following configuration changes are possible:

#### Adding/Removing Signers

- Add new signers via `multisig::add_multisig_signers`
- Remove existing signers via `multisig::remove_multisig_signers`

:::note

You cannot remove signers if it would cause the total number of signers to fall below the required number of approvals

:::

#### Changing Required Signatures

- Modify the number of required signatures via `multisig::change_sigs_required`
- The new required signatures value must be:
  - Greater than 0
  - Less than or equal to the total number of signers

### Payment Management

Transaction fees for multisig proposals are handled in one of two ways:

1. **Paying Identity**: Initially set to the creator's identity, this identity's primary key covers transaction fees for all multisig proposals
2. **Self-Paying**: The multisig can be configured to pay its own fees by removing the paying identity

In either case, the paying key must have sufficient POLYX to submit and execute the transaction.

Important points about the paying identity:

- It is automatically set to the creator's identity when the multisig is created
- It can be removed either by:
  - The multisig itself using `multisig::remove_payer`
  - The paying identity using `multisig::remove_payer_via_payer`
- It cannot be changed to a different identity
- Once removed, the multisig must pay its own transaction fees from its POLYX balance
- The removal is permanent - after removing the paying identity, the multisig cannot revert to using a paying identity

:::tip
Once a paying identity has been removed, if another key is required to pay transaction fees, a [account subsidy](/accounts/subsidized) relationship can be set up.
:::

### Joining a New Identity

When a multisig needs to move from one identity to another, there is a specific process that must be followed:

1. The multisig must first leave its current identity using `identity::leave_identity_as_key` as a proposal or be removed by the identities primary key.
2. The new identity must issue then issue a `JoinIdentity` authorization to the multisig
3. The multisig must accept this authorization using the specific extrinsic `multisig::approve_join_identity`

:::important
Multisigs must use `multisig::approve_join_identity` instead of the standard `identity::join_identity_as_key` when accepting a join identity authorization. This ensures transaction fees are handled correctly, as a multisig that is not attached to an identity cannot pay for its own transactions.
:::

This process can be optimized by using Polymesh's batching functionality to combine leaving the current identity and joining the new identity into a single atomic transaction using `utility::batch`. This approach is recommended when the `JoinIdentity` authorization request can be obtained before the multisig needs to leave its current identity.

## Multisig Proposals

### Proposal Creation

To create a multisig proposal, a signer must call the `multisig::create_proposal_as_key` extrinsic. This allows the proposer to wrap a standard blockchain call into a proposal that other multisig signers can vote on. The creator must be one of the authorized signers of the multisig, and by creating the proposal they automatically cast an approval vote.

When creating a proposal, you can specify:

- The transaction to be executed (wrapped as a proposal)
- An optional expiry after which the proposal will expire if not executed
- Arguments specific to the transaction being proposed

Once created, proposals cannot be modified - they can only be approved or rejected by other signers. If enough signer threshold is reached during creation, the proposal will execute right away without requiring additional approvals.

:::tip
When using the Polymesh SDK, regular transactions from a multisig signer must use `.runAsProposal()` instead of `.run()`. The SDK will automatically wrap the transaction with `multisig::create_proposal_as_key`. Proposal approvals/rejections by signers should still use `.run()` directly.
:::

### Proposal Voting

Signers vote on proposals by calling either `multisig::approve` or `multisig::reject`, providing the multisig address and the proposal ID generated during the proposal creation as arguments. These transactions must be submitted directly by the signer's key, not through another multisig proposal.

Key voting aspects:

- The proposal creator's vote is automatically set to approve upon creation
- Other signers can vote exactly once on each proposal
- The proposal creator has special privileges:
  - Can change their vote to reject if no other signers have voted yet
  - Changing to reject in this case automatically rejects the proposal
- The proposal executes immediately when the required number of approvals is reached
- A proposal is rejected when rejection votes exceed total signers minus required approvals

### Proposal Management

Proposals have several states and features:

- Can be created by any authorized signer
- Remain active until executed, rejected, expired or invalidated
- May have optional expiration times

#### Proposal States

A proposal can be in one of the following states:

- **Active**: Currently collecting approvals, not yet executed
- **Expired**: Passed its expiration time without sufficient approvals
- **Failed**: Execution was complete but the transaction failed
- **Invalid**: No longer valid due to configuration changes
- **Successful**: Successfully executed

:::note Invalid Proposals
The following situations will cause proposals to be invalidated.

- Configuration changes (modifying signers or required signatures) invalidate all pending proposals
- Removal of a multisig account from an identity
- A chain upgrade containing breaking transaction changes

Invalidated proposals must be recreated as new proposals if required.
:::

:::note
Historical proposal details can be retrieved via the [SubQuery](/development/tooling/subquery) chain indexing service or by querying historical blocks on an archive node.
:::
