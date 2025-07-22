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

Network users interact with Polymesh in various ways, from transferring POLYX to managing identities and assets. Any user who wishes to manage identities and assets on Polymesh must go through a [Identity Verification](/identity/verification/) process. With a valid CDD claim, a user can manage their identity, created and manage assets, settle transfer instructions, and access advanced network features.

:::note

Identity verification is not required for POLYX transfers or staking, except for validator activities. This makes basic token operations accessible to all users, while asset and identity-related transactions remain permissioned.

:::

## Operators

Operator nodes are special nodes in the Polymesh network that author new blocks and participate in finalising the blockchain.

To run an operator node, a user must be permissioned through both identity verification and the on-chain governance process. This is managed via a [Polymesh Improvement Proposal](/governance#polymesh-improvement-proposals). Operators play a critical role in maintaining network security and consensus.

## Customer Due Diligence Service Providers

CDD service providers are trusted entities permitted to issue CDD claims. These companies offer identity verification and onboarding services to Polymesh users, providing a streamlined due diligence process and identity creation.

Only explicitly permissioned identities can issue CDD claims. Service providers are added or removed via a PIP executed through the on-chain governance process.

## Committee Membership

Committees are specialized groups that can send PIPs directly to the Governing Council for ratification. There may be several committees, each with a different specialization and membership.

Committees manage their own membership, voting to add or remove members as needed.

## Governing Council Membership

The Governing Council is responsible for ratifying or rejecting PIPs and scheduling their execution. Like committees, the council manages its own membership through its established voting process.
