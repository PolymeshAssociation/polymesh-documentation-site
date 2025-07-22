---
id: "TransferBreakdown"
title: "Interface: TransferBreakdown"
sidebar_label: "TransferBreakdown"
---

[api/entities/Asset/types](../../../../../../modules/API/Entities/Asset/Types/Types.md).TransferBreakdown

Object containing every reason why a specific Asset transfer would fail

## Properties

### compliance

• **compliance**: [`Compliance`](../../../Types/Compliance/Compliance.md)

how the transfer adheres to the asset's compliance rules

#### Defined in

[api/entities/Asset/types.ts:134](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9e72221/src/api/entities/Asset/types.ts#L134)

___

### general

• **general**: [`TransferError`](../../../../../../enums/API/Entities/Asset/Types/TransferError/TransferError.md)[]

list of general transfer errors

#### Defined in

[api/entities/Asset/types.ts:130](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9e72221/src/api/entities/Asset/types.ts#L130)

___

### restrictions

• **restrictions**: [`TransferRestrictionResult`](../TransferRestrictionResult/TransferRestrictionResult.md)[]

list of transfer restrictions and whether the transfer satisfies each one

#### Defined in

[api/entities/Asset/types.ts:138](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9e72221/src/api/entities/Asset/types.ts#L138)

___

### result

• **result**: `boolean`

true if the transfer is possible

#### Defined in

[api/entities/Asset/types.ts:142](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9e72221/src/api/entities/Asset/types.ts#L142)
