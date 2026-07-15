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

- **Transactions**: Define which specific blockchain functions a key can execute
- **Portfolios**: Control which portfolios a key can access — this governs the key's ability to move and transfer assets
- **Assets**: Restrict which assets a key can administer as an external agent (asset-agent actions only — not ordinary transfers)

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
   - Concatenate the hex values (DID + nonce + expiry) without separators
   - Wrap the concatenated string with `<Bytes>` and `</Bytes>` tags to form the final payload
3. **Signing**:
   - Sign the wrapped payload using the future secondary key
   - The resulting signature must be provided when adding the secondary key

:::note
Off-chain authorization signatures provide a secure way to prove that the new key consents to becoming a secondary key without requiring preliminary on-chain transactions. The payload data must be wrapped with `<Bytes>` and `</Bytes>` tags before signing.
:::

This method enables bulk addition of secondary keys without requiring each key to submit separate transactions to accept joining the identity.

### Secondary Key Permissions

Permissions for secondary keys are divided into three categories:

- **Extrinsics** (transactions): Define which blockchain functions (pallet and method) the key can call at all. This is the first gate every call passes through.
  - Full access to all functions
  - No access to any functions
  - Access to specific modules and/or methods

- **Portfolios**: Control which of the identity's portfolios the key can access and manage. **This is what governs a key's ability to move and transfer assets** not directly held by their key — restricting a key's portfolios restricts which portfolio holdings it can move, send in a settlement, or otherwise transfer.
  - Full access to all portfolios
  - No access to any portfolios
  - Access to specific portfolios only

- **Assets**: Control which assets the key can administer **as an external agent** — asset-agent actions such as issuance, redemption, compliance configuration, and controller (forced) transfers on assets the identity is an agent for.
  - Full access to all assets
  - No access to any assets
  - Access to specific assets only

:::warning Asset permissions do not restrict transfers
Asset permissions apply **only** to external-agent actions on an asset. They do **not** restrict a key's ability to transfer that asset out of the identity's portfolios — ordinary transfers are governed entirely by **portfolio** permissions. If you need to stop a secondary key from moving or sending a particular holding, restrict its **portfolio** permissions; restricting its asset permissions will not prevent the transfer.
:::

How the three combine: a call must first be permitted by the key's **extrinsic** permissions. Beyond that, a call that moves assets in or out of a portfolio additionally checks the key's **portfolio** permissions, and a call performed as an asset's external agent additionally checks the key's **asset** permissions. Each dimension is enforced independently by the calls that use it — they are not intersected into a single "asset-within-portfolio" scope.

:::note
Some blockchain functions (like POLYX transfers and staking operations) don't involve assets, portfolios or an identity. These actions are always permitted.
:::

### Extrinsic Permissions Delegate the Authority of the Calls They Allow

Extrinsic (transaction) permissions control **which** calls a secondary key may submit. They do **not** sandbox the **effects** of those calls. This distinction is important: granting a secondary key permission to call an extrinsic grants it the full authority that extrinsic carries when it executes.

Some extrinsics create, assign, or modify key permissions, or otherwise link keys and authorizations to the identity. **Granting a secondary key permission to call such an extrinsic is equivalent to delegating that permission-management authority to the key.** A key permitted to call these calls can therefore acquire — or confer on another key — authority beyond the `Assets`/`Portfolios` scope it was originally assigned, because those scopes constrain only portfolio access and external-agent actions, not the identity-management authority carried by the call itself.

This is by design. Polymesh's permission model treats a key's extrinsic-permission set as a delegation of authority: if a key may call a permission- or key-management extrinsic, it may exercise that extrinsic's authority in full. Deciding which extrinsics to permission is therefore the identity owner's responsibility.

:::warning Granting call permissions can enable privilege escalation
Because extrinsic permissions delegate the authority of the calls they allow, granting a secondary key permission to call an identity, key, or authorization-management extrinsic (for example `add_authorization`, or any call that assigns or changes key permissions) can allow that key to obtain, or grant to another key, permissions broader than its own. This is intended behaviour of the delegation model, **not** a containment boundary.

When permissioning secondary keys:

- Apply least privilege: grant only the specific extrinsics a key needs for its role, and prefer a minimal, explicit extrinsic set over broad "all functions" (`Whole`) access.
- Treat permission to call any permission-, key-, or authorization-management extrinsic as granting that management authority itself.
- Do not rely on `Assets` or `Portfolios` scoping to contain a key that also holds such an extrinsic permission — those scopes bound only portfolio access and external-agent actions, not the authority a management call carries.
- Note that the most critical identity functions are reserved to the primary key and cannot be delegated to a secondary key at all — see **Primary Key Exclusive Functions** below.
  :::

### Updating Permissions

The primary key can modify permissions for any secondary key at any time:

- Add or remove specific permissions using `identity::set_secondary_key_permissions`
- Completely revoke access by removing the secondary key using `identity::remove_secondary_keys`
- Temporarily disable all or re-enable secondary keys by freezing them using `identity::freeze_secondary_keys` and `identity::unfreeze_secondary_keys`

### Limitations and Considerations

- A single key can only be associated with one identity (either as primary or secondary key)
- Secondary keys cannot add other secondary keys directly without explicit `add_authorization` permission
- There's a limit to the complexity and number of permissions that can be assigned
- Secondary keys can voluntarily leave an identity but cannot modify their own permissions
- Frozen secondary keys cannot perform any operations until unfrozen by the primary key

**Primary Key Exclusive Functions:**

The following critical identity management functions can **only** be performed by the primary key:

- Setting or modifying permissions of secondary keys (`set_secondary_key_permissions`)
- Adding/removing secondary keys (`add_secondary_keys_with_authorization`, `remove_secondary_keys`)
- Freezing/unfreezing secondary keys (`freeze_secondary_keys`, `unfreeze_secondary_keys`)
- Multisig administration (when designated as admin or payer identity)

**Secondary Key Authorization Capabilities:**

Secondary keys with permission to call `add_authorization` can create authorization requests for sensitive operations, including:

- Primary key rotation requests
- Asset ownership transfers
- Portfolio custody changes
- Other identity-level permissions

:::warning Critical Security Consideration
Granting a secondary key permission to call `add_authorization` effectively allows it to initiate **primary key rotation** and other sensitive identity operations. While the target must still accept these authorizations, this permission should be granted with extreme caution as it can serve as a backup mechanism to regain identity control if the primary key is lost.

**Recommendation**: Only grant `add_authorization` permissions to highly trusted secondary keys that you intend to use as emergency backup keys for identity recovery scenarios.
:::

**Key Recovery Implications:**

- If a secondary key leaves or is removed from an identity, it cannot interact with asset or identity related transactions on the Polymesh blockchain until it receives its own DID through onboarding or joins another identity as a secondary key.

These restrictions are enforced at the protocol level, ensuring that control over core identity structure remains secure while allowing controlled delegation of specific capabilities.

### Transaction Fee Management

A key consideration when implementing secondary keys is managing transaction fees:

- Each secondary key requires its own POLYX balance to pay for transaction fees
- POLYX balances are key-specific and independent - primary keys cannot access or use the POLYX balance of secondary keys and vice versa
- Alternative to maintaining individual balances, [subsidized accounts](/accounts/subsidized) can be set up to pay for transaction fees on behalf of specified secondary keys

When implementing a multi-key strategy for your identity, make sure to account for POLYX distribution to ensure all keys have sufficient balance to execute their assigned functions, whether through individual balances or subsidization.

## Advanced Topics

### Smart Contracts and Multisigs

[Smart contracts](/development/smart-contracts) and [Multisigs](/identity/advanced/multisig) can also be attached to identities as secondary keys in Polymesh, providing powerful functionality for implementing strict controls or automated business logic while maintaining proper identity management.

### Secondary Keys and Separate DIDs

When managing complex organizational or operational structures on Polymesh, you may need to decide between delegating access via secondary keys within the same identity, or creating a fully independent identity for a separate key through DID registration.

| Secondary Keys                       | Separate DIDs                      |
| ------------------------------------ | ---------------------------------- |
| Share DID with primary key           | Each key has its own DID           |
| Share compliance status              | Independent compliance status      |
| Limited by permissions               | Full identity capabilities         |
| Cannot have their own secondary keys | Can have their own secondary keys  |
| Best for delegating tasks            | Best for organizational separation |

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

Secondary keys provide a powerful way to implement secure and flexible identity management on Polymesh. When properly implemented with appropriate permissions and controls, they enable organizations to maintain strong security while supporting efficient operations. Understanding the relationship between secondary keys and smart contracts allows for creating sophisticated and secure organizational structures on the blockchain.
