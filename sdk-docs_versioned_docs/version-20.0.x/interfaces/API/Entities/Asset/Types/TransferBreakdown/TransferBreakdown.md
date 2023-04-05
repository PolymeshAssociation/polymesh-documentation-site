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

[api/entities/Asset/types.ts:43](https://github.com/PolymeshAssociation/polymesh-sdk/blob/91c2d2d8/src/api/entities/Asset/types.ts#L43)

___

### general

• **general**: [`TransferError`](../../../../../../enums/Types/TransferError/TransferError.md)[]

list of general transfer errors

#### Defined in

[api/entities/Asset/types.ts:39](https://github.com/PolymeshAssociation/polymesh-sdk/blob/91c2d2d8/src/api/entities/Asset/types.ts#L39)

___

### restrictions

• **restrictions**: [`TransferRestrictionResult`](../TransferRestrictionResult/TransferRestrictionResult.md)[]

list of transfer restrictions and whether the transfer satisfies each one

#### Defined in

[api/entities/Asset/types.ts:47](https://github.com/PolymeshAssociation/polymesh-sdk/blob/91c2d2d8/src/api/entities/Asset/types.ts#L47)

___

### result

• **result**: `boolean`

true if the transfer is possible

#### Defined in

[api/entities/Asset/types.ts:51](https://github.com/PolymeshAssociation/polymesh-sdk/blob/91c2d2d8/src/api/entities/Asset/types.ts#L51)
