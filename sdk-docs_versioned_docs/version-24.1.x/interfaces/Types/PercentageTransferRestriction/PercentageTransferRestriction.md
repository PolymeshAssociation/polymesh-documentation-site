---
id: "PercentageTransferRestriction"
title: "Interface: PercentageTransferRestriction"
sidebar_label: "PercentageTransferRestriction"
---

[types](../../../modules/Types/Types.md).PercentageTransferRestriction

## Hierarchy

- `TransferRestrictionBase`

  ↳ **`PercentageTransferRestriction`**

## Properties

### exemptedIds

• `Optional` **exemptedIds**: `string`[]

array of Identity IDs that are exempted from the Restriction

#### Inherited from

TransferRestrictionBase.exemptedIds

#### Defined in

[types/index.ts:1355](https://github.com/PolymeshAssociation/polymesh-sdk/blob/968f8d70c/src/types/index.ts#L1355)

___

### percentage

• **percentage**: `BigNumber`

maximum percentage (0-100) of the total supply of the Asset that can be held by a single investor at once

#### Defined in

[types/index.ts:1366](https://github.com/PolymeshAssociation/polymesh-sdk/blob/968f8d70c/src/types/index.ts#L1366)
