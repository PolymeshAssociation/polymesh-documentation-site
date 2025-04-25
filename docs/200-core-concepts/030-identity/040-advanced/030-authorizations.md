---
title: Authorizations
description: A secure request-approval framework for managing permissions and delegations between identities and keys
id: authorizations
slug: /authorizations
sidebar_label: Authorizations
tags:
  - identity
  - permissions
  - access control
  - authorizations
---

## Overview

Authorizations in Polymesh provide a secure framework for managing permissions and access between identities and keys. They enable controlled delegation of permissions while maintaining security through explicit consent from all parties involved.

## How It Works

The authorization process follows a simple request-approval flow:

1. An identity (the authorizer) creates an authorization request for a specific action
2. The target identity or key (the authorized) receives the pending authorization
3. The authorized party can view, accept, or reject the authorization
4. Upon acceptance, the authorized action is executed with proper permissions

:::note
Authorization requests can optionally include an expiry time. If specified and not accepted within that timeframe, they become invalid and must be reissued.
:::

## Common Use Cases

The authorizations framework on Polymesh facilitates various identity management and permission scenarios including:

- **Identity Key Management**: Adding secondary keys or rotating primary keys
- **Asset Control**: Transferring ownership of assets or tickers between identities
- **Custody Management**: Granting portfolio custody/control rights to other identities
- **Agent Permissions**: Authorizing entities to act as agents for specific assets
- **Fee Management**: Setting up subsidized account relationships
- **MultiSig Operations**: Adding signers to multisig arrangements

## Authorization Types

Polymesh supports several types of authorizations, each serving different permission management needs:

### Identity Management

- **Join Identity**: Authorize a key to become a [secondary key](/identity/advanced/secondary-keys) with specified permissions
- **Rotate Primary Key**: Allow changing of an identity's primary key
- **Rotate Primary to Secondary**: Convert the current primary key into a secondary key during rotation

### Asset Control

- **Transfer Asset**: Authorize transfer of asset ownership between identities
- **Transfer Ticker**: Allow transfer of ticker ownership or reservation rights
- **Become Agent**: Grant permission to act as an [agent](/asset-agents) for specific asset operations while defining specific actions the agent can perform

### Operational Control

- **Portfolio Custody**: Enable third part [portfolio custody](/portfolios/custody) management or control of specific portfolios while maintaining beneficial ownership under the original onchain identity
- **Add MultiSig Signer**: Authorize addition of new signers to a [multisig](/identity/advanced/multisig) arrangement.
- **Add Relayer Paying Key**: Set up [subsidized account](/accounts/subsidized) relationships

## Managing Authorizations

### Creating Requests

Authorization requests can be created using `identity::add_authorization`. Each request must specify:

- The target identity or key
- The type of authorization
- Any required authorization data (e.g., permissions for secondary keys)
- Optional expiry time

In some special cases, a dedicated method may be provided to create an authorization request. For example, `multisig::add_multisig_signers_via_admin` allows a permissioned admin identity to act on behalf of the multisig to add a new signer.

Some operations also support off-chain authorization signatures as an alternative to the request-approval flow. This includes adding [secondary keys](/identity/advanced/secondary-keys/#2-off-chain-authorization) and creating [child identities](/identity/advanced/child#child-identity-creation-from-unlinked-keys). These methods typically require the target key to sign specific authorization data off-chain, enabling operations to complete in a single transaction.

Each new authorization request is assigned a unique authorization ID which is used to query details of the authorization request and accept or reject it.

### Processing Requests

Targets can manage authorization requests through:

- **Accepting**: Approve and execute the authorized action through an authorization-specific method by providing the authorization ID
- **Rejecting**: Cancel pending authorization requests (can be done by either the authorizer or target) by calling `identity::remove_authorization`
- **Review Pending Incoming Requests**: View pending authorizations targeting the identity or key using `identity::Authorizations`
- **Review Pending Issued Requests**: Query past authorizations using `identity::AuthorizationsGiven`

:::warning
Authorization management is critical for identity security. Always verify authorization types and permissions before acceptance.
:::

### Fee Management

For some authorization types, the accepting identity may not be able to hold POLYX and hence cannot pay the transaction fee to accept the authorization request. In these cases, the primary key of the identity that initiated the authorization request (the authorizer) pays the transaction fee when the authorization is accepted by the target.

The following acceptance methods have their transaction fees paid by the authorizer's primary key:

- `identity::join_identity_as_key`
- `identity::rotate_primary_key_to_secondary`
- `identity::accept_primary_key`
- `multisig::accept_multisig_signer`
- `relayer::accept_paying_key`

For all other authorization acceptance methods, the transaction fee is paid by the accepting party's key.

When removing/rejecting an authorization request, the caller can optionally specify that the primary key of the requestor's identity pays the transaction fee by setting the `auth_issuer_pays` parameter to `true`.

### Monitoring Authorizations

Identities can monitor their authorizations through several methods:

- **Pending Incoming Requests**: View pending authorizations targeting the identity or key using `identity::Authorizations`
- **Pending Issued Requests**: Query past authorizations using `identity::AuthorizationsGiven`

:::info
Authorization requests that have been consumed, rejected, expired, or revoked cannot be reused. A new authorization request must be created if needed.
:::
