---
title: Secondary Keys
description: Manage identity access by delegating specific permissions to additional keys while maintaining security and compliance through granular access control
id: secondary-keys
slug: /identity/advanced/secondary-keys
sidebar_label: Secondary Keys
tags:
  - keys
  - management
  - identity
  - permissions
  - access control
---

## Overview

Secondary keys in Polymesh provide a flexible and secure way to manage access to your identity on the blockchain. Secondary keys share the same DID as your Primary key but allow an identity owner to delegate specific permissions to different secondary keys, enabling more secure and granular control over your on-chain assets and actions.

Unlike the primary key (which has full control over an identity), secondary keys can be limited to specific functions, providing enhanced security and more flexible identity management.

## Features and Benefits

### Granular Permission Control

Secondary keys can be configured with specific permissions limited to:

- **Assets**: Control which assets a key can interact with
- **Transactions**: Define which specific blockchain functions a key can execute
- **Portfolios**: Specify which portfolios a key can access and manage

### Enhanced Security

- Limit exposure of your primary key by using secondary keys for day-to-day operations
- Create role-specific keys with minimal permissions needed for each function
- Freeze all secondary keys in case of security concerns while maintaining primary key control

### Operational Flexibility

- Delegate specific tasks to team members without sharing full identity control
- Create automated service accounts with limited permissions
- Maintain operational continuity while upholding security best practices

## Use Cases

Secondary keys enable a variety of operational structures and security models in Polymesh:

- **Secure treasury management** with primary key held by executives and limited secondary keys for daily operations
- **Separation of duties** by assigning different functional permissions to different team members
- **Operational continuity** by having multiple keys that can perform critical functions
- **Role-based access control** with permissions tailored to specific job functions
- **Compliance operations** with dedicated keys for compliance-related activities
- **Asset management** with specific keys for asset servicing and administration
- **Portfolio management** with different keys for different portfolio strategies
- **Staking management** by using one secondary key as a stash key (holding funds) and another as a controller key (managing staking operations)
- **POLYX segregation** for financial controls and improved security by keeping balances separated

## Technical Overview

### Relationship to Primary Key

Every Polymesh identity has a single primary key that serves as the ultimate controller of the identity. The primary key:

- Has unrestricted access to all identity functions
- Can add, remove, and modify permissions for all secondary keys
- Cannot be restricted in its capabilities
- Can freeze/unfreeze all secondary keys associated with the identity

Secondary keys always exist in relationship to an identity and its primary key, with permissions explicitly granted by the primary key.

### Adding Secondary Keys

Secondary keys can be added to an identity through two main methods:

#### 1. Authorization Request

The primary key initiates an [authorization request](/authorizations) for a new secondary key:

- Using `identity::add_authorization` Primary key creates an authorization request of type `JoinIdentity` targeting the new key as the account to join the identity
- Authorization includes specific permissions for the new key
- Using the generated authorization ID the target account accepts the authorization using `identity::join_identity_as_key` to become a secondary key

This process involves consent from both parties:

- The identity owner (primary key) must initiate the authorization
- The secondary key owner must approve the assignment of their key to the identity

This ensures that no identity can claim control over a key without the key owner's explicit permission.

#### 2. Off-chain Authorization

For batch adding of multiple secondary keys or adding a key to an identity in a single transaction an off-chain authorization can be provided by the target secondary key(s):

- Primary key prepares authorization data (including permissions)
- Target accounts sign authorization data off-chain
- Primary key submits all signed authorizations at once

##### Off-chain Authorization Details

The signature generation process involves:

1. **Required payload components**:
   - The requesting identity's DID
   - The identity's current off-chain authorization nonce (retrieved via `identity::OffChainAuthorizationNonce`)
   - Expiry timestamp for the authorization
2. **Payload Creation**:
   - Concatenate the hex values (DID + nonce + expiry) without separators into a single payload
3. **Signing**:
   - Sign the payload using the future secondary key
   - The resulting signature must be provided when adding the secondary key

:::note
Off-chain authorization signatures provide a secure way to prove that the new key consents to becoming a secondary key without requiring preliminary on-chain transactions.
:::

This method enables bulk addition of secondary keys without requiring each key to submit separate transactions to accept joining the identity.

### Secondary Key Permissions

Permissions for secondary keys are divided into three categories that work together to define the key's capabilities:

- **Assets**: Control which assets the key can interact with

  - Full access to all assets
  - No access to any assets
  - Access to specific assets only

- **Extrinsics** (transactions): Define which blockchain functions the key can execute

  - Full access to all functions
  - No access to any functions
  - Access to specific modules and/or methods

- **Portfolios**: Specify which portfolios the key can access and manage
  - Full access to all portfolios
  - No access to any portfolios
  - Access to specific portfolios only

The effective permissions of a secondary key are determined by the intersection of these categories. For example, a key with access to Asset A and Portfolio B can only perform authorized transactions involving Asset A within Portfolio B.

:::note
Some blockchain functions (like POLYX transfers and staking operations) don't involve assets, portfolios or an identity. These actions are always permitted.
:::

### Updating Permissions

The primary key can modify permissions for any secondary key at any time:

- Add or remove specific permissions using `identity::set_secondary_key_permissions`
- Completely revoke access by removing the secondary key using `identity::remove_secondary_keys`
- Temporarily disable all or re-enable secondary keys by freezing them using `identity::freeze_secondary_keys` and `identity::unfreeze_secondary_keys`

### Limitations and Considerations

- A single key can only be associated with one identity (either as primary or secondary key)
- Secondary keys cannot add other secondary keys
- There's a limit to the complexity and number of permissions that can be assigned
- Secondary keys can voluntarily leave an identity but cannot modify their own permissions
- Frozen secondary keys cannot perform any operations until unfrozen by the primary key
- Many critical identity management functions can only be performed by the primary key:
  - Setting or modifying permissions of secondary keys
  - Removing secondary keys from an identity
  - Creating child identities
  - Adding secondary keys
  - Freezing/unfreezing secondary keys
  - Creating multisigs
  - Initiating primary key rotation
- If a secondary key leaves or is removed from an identity, it cannot transact on the Polymesh blockchain until it either:
  - Receives its own DID and CDD claim (becoming a primary key for a new identity)
  - Joins another identity that has a valid CDD claim

These restrictions are enforced at the protocol level, ensuring that control over identity structure and permissions remains with the primary key holder.

### Transaction Fee Management

A key consideration when implementing secondary keys is managing transaction fees:

- Each secondary key requires its own POLYX balance to pay for transaction fees
- POLYX balances are key-specific and independent - primary keys cannot access or use the POLYX balance of secondary keys and vice versa
- Alternative to maintaining individual balances, [subsidized accounts](/accounts/subsidized) can be set up to pay for transaction fees on behalf of specified secondary keys

When implementing a multi-key strategy for your identity, make sure to account for POLYX distribution to ensure all keys have sufficient balance to execute their assigned functions, whether through individual balances or subsidization.

## Advanced Topics

### Smart Contracts and Multisigs

[Smart contracts](/development/smart-contracts) and [Multisigs](/identity/advanced/multisig) can also be attached to identities as secondary keys in Polymesh, providing powerful functionality for implementing strict controls or automated business logic while maintaining proper identity management.

### Secondary Keys vs Child Identities

Learn more about [child identities](/identity/advanced/child) and understand when to use each option:

| Secondary Keys                       | Child Identities                   |
| ------------------------------------ | ---------------------------------- |
| Share DID with primary key           | Have their own DID                 |
| Share compliance status              | Independent compliance status      |
| Limited by permissions               | Full identity capabilities         |
| Cannot have their own secondary keys | Can have their own secondary keys  |
| Best for delegating tasks            | Best for organizational separation |

Choose based on your needs:

- **Delegate limited permissions** → Use secondary keys
- **Create separate but related identities** → Use child identities
- **Implement automated logic** → Consider smart contracts as either secondary keys or child identity primary keys

## Best Practices

1. **Primary Key Security**

   - Store primary key securely and minimize its use
   - Use properly permissioned secondary keys for routine operations
   - Implement clear key rotation policies

2. **Permission Management**

   - Follow least-privilege principle when assigning permissions
   - Document all key permissions and their intended use
   - Regularly audit and update permissions as needed

3. **Operational Controls**

   - Create clear policies for key usage and sharing
   - Implement role-based access through appropriate permissions
   - Maintain documentation of all key management procedures

4. **Security Measures**
   - Conduct regular security audits of all keys and permissions
   - Remove unused or unnecessary keys promptly
   - Plan for key rotation and recovery scenarios

## Conclusion

Secondary keys provide a powerful way to implement secure and flexible identity management on Polymesh. When properly implemented with appropriate permissions and controls, they enable organizations to maintain strong security while supporting efficient operations. Understanding the relationship between secondary keys, smart contracts, and child identities allows for creating sophisticated and secure organizational structures on the blockchain.
