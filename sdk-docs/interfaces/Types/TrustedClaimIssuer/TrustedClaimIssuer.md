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

[types/index.ts:388](https://github.com/PolymeshAssociation/polymesh-sdk/blob/de58d40fd/src/types/index.ts#L388)

___

### trustedFor

• **trustedFor**: ``null`` \| [`ClaimType`](../../../enums/Types/ClaimType/ClaimType.md)[]

a null value means that the issuer is trusted for all claim types

#### Defined in

[types/index.ts:392](https://github.com/PolymeshAssociation/polymesh-sdk/blob/de58d40fd/src/types/index.ts#L392)
