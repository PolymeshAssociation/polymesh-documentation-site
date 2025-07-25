---
id: "ChildKeyWithAuth"
title: "Interface: ChildKeyWithAuth"
sidebar_label: "ChildKeyWithAuth"
---

[api/procedures/types](../../../../../modules/API/Procedures/Types/Types.md).ChildKeyWithAuth

## Properties

### authSignature

• **authSignature**: \`0x$\{string}\`

Off-chain authorization signature generated by `key` signing of the target Id authorization

Target Id authorization consists of the target Identity (which will become the parent of the child Identity),
off chain authorization nonce of the target Identity and expiry date (same as `expiresAt` value) until which the off chain authorization will be valid.
Signature has to be generated encoding the target Id authorization value in the specified order.

**`Note`**

Nonce value can be fetched using [Identity.getOffChainAuthorizationNonce](../../../../../classes/API/Entities/Identity/Identity.md#getoffchainauthorizationnonce)
Signature can also be generated using the method [accountManagement.generateOffChainAuthSignature](../../../../../classes/API/Client/AccountManagement/AccountManagement.md#generateoffchainauthsignature)

#### Defined in

[api/procedures/types.ts:1719](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/procedures/types.ts#L1719)

___

### key

• **key**: `string` \| [`Account`](../../../../../classes/API/Entities/Account/Account.md)

The key that will become the primary key of the new child Identity

**`Note`**

This key should not be linked to any other Identity

#### Defined in

[api/procedures/types.ts:1708](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/procedures/types.ts#L1708)
