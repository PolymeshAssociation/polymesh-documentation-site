---
id: "AttestPrimaryKeyRotationParams"
title: "Interface: AttestPrimaryKeyRotationParams"
sidebar_label: "AttestPrimaryKeyRotationParams"
---

[api/procedures/types](../../../../../modules/API/Procedures/Types/Types.md).AttestPrimaryKeyRotationParams

## Properties

### expiry

• `Optional` **expiry**: `Date`

(optional) when the generated authorization should expire

#### Defined in

[api/procedures/types.ts:909](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9e72221/src/api/procedures/types.ts#L909)

___

### identity

• **identity**: `string` \| [`Identity`](../../../../../classes/API/Entities/Identity/Identity.md)

Identity or the DID of the Identity that is to be rotated

#### Defined in

[api/procedures/types.ts:904](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9e72221/src/api/procedures/types.ts#L904)

___

### targetAccount

• **targetAccount**: `string` \| [`Account`](../../../../../classes/API/Entities/Account/Account.md)

The Account that will be attested to become the primary key of the `identity`. Can be ss58 encoded address or an instance of Account

#### Defined in

[api/procedures/types.ts:899](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9e72221/src/api/procedures/types.ts#L899)
