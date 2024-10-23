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

[api/entities/Asset/types.ts:133](https://github.com/PolymeshAssociation/polymesh-sdk/blob/88db4a911/src/api/entities/Asset/types.ts#L133)

___

### general

• **general**: [`TransferError`](../../../../../../enums/API/Entities/Asset/Types/TransferError/TransferError.md)[]

list of general transfer errors

#### Defined in

[api/entities/Asset/types.ts:129](https://github.com/PolymeshAssociation/polymesh-sdk/blob/88db4a911/src/api/entities/Asset/types.ts#L129)

___

### restrictions

• **restrictions**: [`TransferRestrictionResult`](../TransferRestrictionResult/TransferRestrictionResult.md)[]

list of transfer restrictions and whether the transfer satisfies each one

#### Defined in

[api/entities/Asset/types.ts:137](https://github.com/PolymeshAssociation/polymesh-sdk/blob/88db4a911/src/api/entities/Asset/types.ts#L137)

___

### result

• **result**: `boolean`

true if the transfer is possible

#### Defined in

[api/entities/Asset/types.ts:141](https://github.com/PolymeshAssociation/polymesh-sdk/blob/88db4a911/src/api/entities/Asset/types.ts#L141)
