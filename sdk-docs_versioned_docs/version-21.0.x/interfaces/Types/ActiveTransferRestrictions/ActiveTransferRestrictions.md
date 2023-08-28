---
id: "ActiveTransferRestrictions"
title: "Interface: ActiveTransferRestrictions<Restriction>"
sidebar_label: "ActiveTransferRestrictions"
---

[types](../../../modules/Types/Types.md).ActiveTransferRestrictions

## Type parameters

| Name | Type |
| :------ | :------ |
| `Restriction` | extends [`CountTransferRestriction`](../CountTransferRestriction/CountTransferRestriction.md) \| [`PercentageTransferRestriction`](../PercentageTransferRestriction/PercentageTransferRestriction.md) \| [`ClaimCountTransferRestriction`](../ClaimCountTransferRestriction/ClaimCountTransferRestriction.md) \| [`ClaimPercentageTransferRestriction`](../ClaimPercentageTransferRestriction/ClaimPercentageTransferRestriction.md) |

## Properties

### availableSlots

• **availableSlots**: `BigNumber`

amount of restrictions that can be added before reaching the shared limit

#### Defined in

[types/index.ts:1364](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d2/src/types/index.ts#L1364)

___

### restrictions

• **restrictions**: `Restriction`[]

#### Defined in

[types/index.ts:1360](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d2/src/types/index.ts#L1360)
