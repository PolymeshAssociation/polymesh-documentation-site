---
id: "ActiveTransferRestrictions"
title: "Interface: ActiveTransferRestrictions<Restriction>"
sidebar_label: "ActiveTransferRestrictions"
---

[api/entities/types](../../../../../modules/API/Entities/Types/Types.md).ActiveTransferRestrictions

## Type parameters

| Name | Type |
| :------ | :------ |
| `Restriction` | extends [`CountTransferRestriction`](../CountTransferRestriction/CountTransferRestriction.md) \| [`PercentageTransferRestriction`](../PercentageTransferRestriction/PercentageTransferRestriction.md) \| [`ClaimCountTransferRestriction`](../ClaimCountTransferRestriction/ClaimCountTransferRestriction.md) \| [`ClaimPercentageTransferRestriction`](../ClaimPercentageTransferRestriction/ClaimPercentageTransferRestriction.md) |

## Properties

### availableSlots

• **availableSlots**: `BigNumber`

amount of restrictions that can be added before reaching the shared limit

#### Defined in

[api/entities/types.ts:555](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9e72221/src/api/entities/types.ts#L555)

___

### restrictions

• **restrictions**: `Restriction`[]

#### Defined in

[api/entities/types.ts:551](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9e72221/src/api/entities/types.ts#L551)
