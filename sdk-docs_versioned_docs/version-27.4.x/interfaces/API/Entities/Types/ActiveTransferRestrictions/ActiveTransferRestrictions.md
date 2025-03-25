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

[api/entities/types.ts:553](https://github.com/PolymeshAssociation/polymesh-sdk/blob/f8a937f04/src/api/entities/types.ts#L553)

___

### restrictions

• **restrictions**: `Restriction`[]

#### Defined in

[api/entities/types.ts:549](https://github.com/PolymeshAssociation/polymesh-sdk/blob/f8a937f04/src/api/entities/types.ts#L549)
