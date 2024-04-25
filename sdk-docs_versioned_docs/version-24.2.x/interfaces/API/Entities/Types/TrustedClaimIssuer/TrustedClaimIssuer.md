---
id: "TrustedClaimIssuer"
title: "Interface: TrustedClaimIssuer<IsDefault>"
sidebar_label: "TrustedClaimIssuer"
---

[api/entities/types](../../../../../modules/API/Entities/Types/Types.md).TrustedClaimIssuer

## Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `IsDefault` | extends `boolean` = ``false`` | whether the Identity is a default trusted claim issuer for an asset or just for a specific compliance condition. Defaults to false |

## Properties

### identity

• **identity**: `IsDefault` extends ``true`` ? [`DefaultTrustedClaimIssuer`](../../../../../classes/API/Entities/DefaultTrustedClaimIssuer/DefaultTrustedClaimIssuer.md) : [`Identity`](../../../../../classes/API/Entities/Identity/Identity.md)

#### Defined in

[api/entities/types.ts:305](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fedc4714f/src/api/entities/types.ts#L305)

___

### trustedFor

• **trustedFor**: ``null`` \| [`ClaimType`](../../../../../enums/API/Entities/Types/ClaimType/ClaimType.md)[]

a null value means that the issuer is trusted for all claim types

#### Defined in

[api/entities/types.ts:309](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fedc4714f/src/api/entities/types.ts#L309)
