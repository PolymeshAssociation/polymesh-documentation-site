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

array of Scope/Identity IDs that are exempted from the Restriction

**`Note`**

if the Asset requires investor uniqueness, Scope IDs are used. Otherwise, we use Identity IDs. More on Scope IDs and investor uniqueness
  [here](https://developers.polymesh.network/introduction/identity#polymesh-unique-identity-system-puis) and
  [here](https://developers.polymesh.network/polymesh-docs/primitives/confidential-identity)

#### Inherited from

TransferRestrictionBase.exemptedIds

#### Defined in

[types/index.ts:1307](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/types/index.ts#L1307)

___

### percentage

• **percentage**: `BigNumber`

maximum percentage (0-100) of the total supply of the Asset that can be held by a single investor at once

#### Defined in

[types/index.ts:1318](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/types/index.ts#L1318)
