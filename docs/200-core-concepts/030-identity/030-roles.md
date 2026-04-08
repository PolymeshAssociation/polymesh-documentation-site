---
title: Permissioned Roles
description: Network Roles and Permissions
id: permissioned-roles
slug: /identity/roles
sidebar_label: Permissioned Roles
tags:
  - roles
  - permissions
---

## Overview

Polymesh is a public network, so anyone can run a node, receive network and state updates and check that the blockchain is progressing as expected.

Different roles on the Polymesh network have different levels of permissioning required, all managed through the on-chain [governance](/governance/) process.

## Network Users

Network users interact with Polymesh in various ways, from transferring POLYX to managing identities and assets. Any user who wishes to manage identities and assets on Polymesh must complete [identity onboarding](/identity/onboarding/) so their key is linked to a DID. With a DID, a user can manage their identity, create and manage assets, settle transfer instructions, and access advanced network features.

:::note

Identity onboarding (DID linkage) is not required for POLYX transfers or staking, except for validator activities. This makes basic token operations accessible to all users, while asset and identity-related transactions remain permissioned.

:::

## Operators

Operator nodes are special nodes in the Polymesh network that author new blocks and participate in finalising the blockchain.

To run an operator node, a user must have a DID linked to a permissioned operator identity and be approved through the on-chain governance process. This is managed via a [Polymesh Improvement Proposal](/governance#polymesh-improvement-proposals). Operators play a critical role in maintaining network security and consensus.

## DID Registrars

DID registrars are trusted entities permitted to register DIDs for user keys. This allows platforms to offer streamlined onboarding where the registrar can pay the registration fee on behalf of the user.

Only explicitly permissioned identities can act as DID registrars. Registrars are added or removed via a PIP executed through the on-chain governance process.

## Committee Membership

Committees are specialized groups that can send PIPs directly to the Governing Council for ratification. There may be several committees, each with a different specialization and membership.

Committees manage their own membership, voting to add or remove members as needed.

## Governing Council Membership

The Governing Council is responsible for ratifying or rejecting PIPs and scheduling their execution. Like committees, the council manages its own membership through its established voting process.
