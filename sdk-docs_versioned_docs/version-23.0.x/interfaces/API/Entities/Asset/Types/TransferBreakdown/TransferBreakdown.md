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

[api/entities/Asset/types.ts:72](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2c78f6c34/src/api/entities/Asset/types.ts#L72)

___

### general

• **general**: [`TransferError`](../../../../../../enums/Types/TransferError/TransferError.md)[]

list of general transfer errors

#### Defined in

[api/entities/Asset/types.ts:68](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2c78f6c34/src/api/entities/Asset/types.ts#L68)

___

### restrictions

• **restrictions**: [`TransferRestrictionResult`](../TransferRestrictionResult/TransferRestrictionResult.md)[]

list of transfer restrictions and whether the transfer satisfies each one

#### Defined in

[api/entities/Asset/types.ts:76](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2c78f6c34/src/api/entities/Asset/types.ts#L76)

___

### result

• **result**: `boolean`

true if the transfer is possible

#### Defined in

[api/entities/Asset/types.ts:80](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2c78f6c34/src/api/entities/Asset/types.ts#L80)
