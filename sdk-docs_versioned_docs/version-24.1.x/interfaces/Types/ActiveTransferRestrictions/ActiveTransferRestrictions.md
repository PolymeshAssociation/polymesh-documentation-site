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

[types/index.ts:1412](https://github.com/PolymeshAssociation/polymesh-sdk/blob/968f8d70c/src/types/index.ts#L1412)

___

### restrictions

• **restrictions**: `Restriction`[]

#### Defined in

[types/index.ts:1408](https://github.com/PolymeshAssociation/polymesh-sdk/blob/968f8d70c/src/types/index.ts#L1408)
