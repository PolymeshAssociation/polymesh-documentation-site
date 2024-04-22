---
id: "TransferBreakdown"
title: "Interface: TransferBreakdown"
sidebar_label: "TransferBreakdown"
---

[api/entities/Asset/types](../../../../../../modules/API/Entities/Asset/Types/Types.md).TransferBreakdown

Object containing every reason why a specific Asset transfer would fail

## Properties

### compliance

• **compliance**: [`Compliance`](../../../../../Types/Compliance/Compliance.md)

how the transfer adheres to the asset's compliance rules

#### Defined in

[api/entities/Asset/types.ts:82](https://github.com/PolymeshAssociation/polymesh-sdk/blob/968f8d70c/src/api/entities/Asset/types.ts#L82)

___

### general

• **general**: [`TransferError`](../../../../../../enums/Types/TransferError/TransferError.md)[]

list of general transfer errors

#### Defined in

[api/entities/Asset/types.ts:78](https://github.com/PolymeshAssociation/polymesh-sdk/blob/968f8d70c/src/api/entities/Asset/types.ts#L78)

___

### restrictions

• **restrictions**: [`TransferRestrictionResult`](../TransferRestrictionResult/TransferRestrictionResult.md)[]

list of transfer restrictions and whether the transfer satisfies each one

#### Defined in

[api/entities/Asset/types.ts:86](https://github.com/PolymeshAssociation/polymesh-sdk/blob/968f8d70c/src/api/entities/Asset/types.ts#L86)

___

### result

• **result**: `boolean`

true if the transfer is possible

#### Defined in

[api/entities/Asset/types.ts:90](https://github.com/PolymeshAssociation/polymesh-sdk/blob/968f8d70c/src/api/entities/Asset/types.ts#L90)
