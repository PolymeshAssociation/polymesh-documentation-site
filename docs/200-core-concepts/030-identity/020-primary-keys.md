---
title: Primary Keys
description: Understanding primary keys and their role in Polymesh identities
id: primary-keys
slug: /identity/advanced/primary-keys
sidebar_label: Primary Keys
tags:
  - identity
  - keys
  - security
  - primary key
---

## Overview

A primary key is the ultimate controller of a Polymesh identity. Each identity must have exactly one primary key that serves as its root of authority, able to manage all aspects of the identity including assets, permissions, and key management.

:::warning
Primary keys cannot be replaced if lost - they can only be rotated to a new key through a controlled [authorization](/authorizations) process requiring the primary key to initiate the rotation. Secure storage and backup of primary keys is critical.
:::

## Supported Key Types

A primary key can be one of the following:

- A public/private key pair using:
  - ED25519
  - SR25519
  - ECDSA (secp256k1)
- A [multisig](/identity/advanced/multisig) arrangement requiring multiple approvals
- A [smart contract](/development/smart-contracts) that implements key functionality

Each type has its own security and operational considerations:

- **Single Key Pairs**: Simplest to manage but rely on secure storage of a single private key
- **Multisigs**: Enhanced security through requiring multiple approvals but more complex operationally
- **Smart Contracts**: Enable programmatic control and complex logic but require careful implementation and testing

## Core Capabilities and Operations

A primary key has unrestricted access to all identity functions and cannot have its permissions limited. The following operations can only be performed by primary keys:

### Identity Management

- Creating and managing [child identities](/identity/advanced/child)
- Adding, removing, and modifying permissions of [secondary keys](/identity/advanced/secondary-keys)
- Creating [authorization](/authorizations) requests for identity operations
- Freezing/unfreezing all secondary keys (using `identity::freeze_secondary_keys`/`identity::unfreeze_secondary_keys`)
- Initiating primary key rotation

### Key Management Operations

- Adding secondary keys (via `identity::add_authorization` with type `JoinIdentity`)
- Removing secondary keys (via `identity::remove_secondary_keys`)
- Setting and modifying secondary key permissions (via `identity::set_secondary_key_permissions`)

### Asset and Portfolio Control

- Creating [multisig](/identity/advanced/multisig) arrangements
- Transferring asset ownership between identities
- Granting [agent permissions](/asset-agents) for asset management
- Authorizing [portfolio custody](/portfolios/custody) transfers

:::note
While primary keys can execute any transaction the identity is authorized for, it's recommended to use properly permissioned [secondary keys](/identity/advanced/secondary-keys) for routine operations and reserve the primary key for critical identity management functions.
:::

## Key Management

### Security Best Practices

To protect your identity:

- Store the primary key in cold storage (offline)
- Use [secondary keys](/identity/advanced/secondary-keys) with appropriate permissions for day-to-day operations
- Maintain secure backups of primary key material
- Document key recovery procedures
- Consider using a [multisig](/identity/advanced/multisig) as your primary key for enhanced security

:::tip Key Recovery Option
If you're concerned about potential primary key loss or compromise, you can create a pending primary key rotation authorization request as a backup. While this creates another potential security vector if the backup key is compromised, it provides a recovery path if the primary key becomes inaccessible. Consider carefully securing both the primary and backup keys if using this approach.
:::

### Key Rotation

Primary keys can be rotated through a controlled process [authorization](/authorizations) that requires:

1. Authorization from the current primary key
2. Acceptance by the new primary key

The rotation process can be done in two ways:

- Standard rotation to a new key using an authorization type of `RotatePrimaryKey`
- Rotation to an existing secondary key using an authorization of type `RotatePrimaryKeyToSecondary`

:::note

- During rotation, the current primary key remains in control until the process is complete. This ensures continuity of control over the identity.
- When an authorization request of type `RotatePrimaryKey` is enacted, the old primary key is detached from the onchain identity, preventing it from transacting. Any remaining POLYX held on that key will be locked until the key is associated with a new identity.

:::

## Advanced Configurations

### Multisig Primary Keys

Using a multisig as your primary key provides additional security through requiring multiple approvals for critical operations. When setting up a multisig primary key:

- Configure an appropriate number of required signatures
- Carefully select trusted signers
- Consider the operational impact of requiring multiple signatures
- Plan for key recovery scenarios

### Smart Contract Primary Keys

[Smart contracts](/development/smart-contracts) can serve as primary keys, enabling programmatic control over identity management. This configuration:

- Allows encoding complex management logic
- Can implement time-locks or other controls
- Must include logic to handle authorizations
- Should be thoroughly tested and audited
- Can implement upgrade mechanisms through proxy patterns

:::note
Smart contract upgrades require special consideration since Polymesh native assets are associated with identities and not the smart contract address. You can use key rotation as part of your upgrade strategy:

1. Deploy the new contract version
2. Use the old contract to authorize rotation to the new contract
3. Execute the rotation once the new contract is validated

This process ensures continuous access to identity-associated assets during upgrades.
:::

:::warning
Smart contract interactions with the chain runtime can potentially be broken in a major chain upgrade. To mitigate this:

- Use the [Upgradable Polymesh Ink Contract](/development/smart-contracts/#upgradable-polymesh-ink-contract) for native chain interactions
- Implement a proxy pattern for contract upgrades
- Test thoroughly before each network upgrade

:::

## Guidelines for Usage

### When to Use Primary Key

Use your primary key for:

- Adding or removing secondary keys
- Modifying permissions of secondary keys
- Creating child identities
- Critical identity management operations
- Key rotation procedures

### When to Use Secondary Keys

Use [secondary keys](/identity/advanced/secondary-keys) for:

- Day-to-day operations
- Portfolio management
- Asset transactions
- Regular business activities

### Transaction Fee Considerations

- Primary keys need POLYX for transaction fees
- Cannot access POLYX balances of secondary keys
- Consider setting up [subsidized relationships](/accounts/subsidized) for fee management

### Limitations

- Only one primary key per identity
- Cannot be restricted in permissions
- Cannot be replaced without proper rotation
- Must maintain sufficient POLYX for transaction fees
- Cannot act as a secondary key for another identity
