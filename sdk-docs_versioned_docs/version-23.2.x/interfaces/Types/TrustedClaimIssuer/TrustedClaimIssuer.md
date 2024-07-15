---
id: "TrustedClaimIssuer"
title: "Interface: TrustedClaimIssuer<IsDefault>"
sidebar_label: "TrustedClaimIssuer"
---

[types](../../../modules/Types/Types.md).TrustedClaimIssuer

## Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `IsDefault` | extends `boolean` = ``false`` | whether the Identity is a default trusted claim issuer for an asset or just for a specific compliance condition. Defaults to false |

## Properties

### identity

• **identity**: `IsDefault` extends ``true`` ? [`DefaultTrustedClaimIssuer`](../../../classes/API/Entities/DefaultTrustedClaimIssuer/DefaultTrustedClaimIssuer.md) : [`Identity`](../../../classes/API/Entities/Identity/Identity.md)

#### Defined in

[types/index.ts:411](https://github.com/PolymeshAssociation/polymesh-sdk/blob/daafaa68f/src/types/index.ts#L411)

___

### trustedFor

• **trustedFor**: ``null`` \| [`ClaimType`](../../../enums/Types/ClaimType/ClaimType.md)[]

a null value means that the issuer is trusted for all claim types

#### Defined in

[types/index.ts:415](https://github.com/PolymeshAssociation/polymesh-sdk/blob/daafaa68f/src/types/index.ts#L415)
