---
id: "TrustedClaimIssuer"
title: "Interface: TrustedClaimIssuer<IsDefault>"
sidebar_label: "TrustedClaimIssuer"
---

[types](../../../modules/Types/Types.md).TrustedClaimIssuer

## Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `IsDefault` | extends `boolean` = ``false`` |  |

## Properties

### identity

• **identity**: `IsDefault` extends ``true`` ? [`DefaultTrustedClaimIssuer`](../../../classes/API/Entities/DefaultTrustedClaimIssuer/DefaultTrustedClaimIssuer.md) : [`Identity`](../../../classes/API/Entities/Identity/Identity.md)

#### Defined in

[types/index.ts:390](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b6f9fb883/src/types/index.ts#L390)

___

### trustedFor

• **trustedFor**: ``null`` \| [`ClaimType`](../../../enums/Types/ClaimType/ClaimType.md)[]

a null value means that the issuer is trusted for all claim types

#### Defined in

[types/index.ts:394](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b6f9fb883/src/types/index.ts#L394)
