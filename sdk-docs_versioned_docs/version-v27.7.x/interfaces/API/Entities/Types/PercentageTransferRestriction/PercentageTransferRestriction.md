---
id: "PercentageTransferRestriction"
title: "Interface: PercentageTransferRestriction"
sidebar_label: "PercentageTransferRestriction"
---

[api/entities/types](../../../../../modules/API/Entities/Types/Types.md).PercentageTransferRestriction

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

[api/entities/types.ts:498](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9e72221/src/api/entities/types.ts#L498)

___

### percentage

• **percentage**: `BigNumber`

maximum percentage (0-100) of the total supply of the Asset that can be held by a single investor at once

#### Defined in

[api/entities/types.ts:509](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9e72221/src/api/entities/types.ts#L509)
