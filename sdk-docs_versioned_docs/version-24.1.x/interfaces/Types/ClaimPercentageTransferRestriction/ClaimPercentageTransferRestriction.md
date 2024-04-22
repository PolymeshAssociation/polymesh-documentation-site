---
id: "ClaimPercentageTransferRestriction"
title: "Interface: ClaimPercentageTransferRestriction"
sidebar_label: "ClaimPercentageTransferRestriction"
---

[types](../../../modules/Types/Types.md).ClaimPercentageTransferRestriction

## Hierarchy

- `TransferRestrictionBase`

  ↳ **`ClaimPercentageTransferRestriction`**

## Properties

### claim

• **claim**: [`InputStatClaim`](../../../modules/Types/Types.md#inputstatclaim)

The type of investors this restriction applies to. e.g. Canadian investor

#### Defined in

[types/index.ts:1388](https://github.com/PolymeshAssociation/polymesh-sdk/blob/968f8d70c/src/types/index.ts#L1388)

___

### exemptedIds

• `Optional` **exemptedIds**: `string`[]

array of Identity IDs that are exempted from the Restriction

#### Inherited from

TransferRestrictionBase.exemptedIds

#### Defined in

[types/index.ts:1355](https://github.com/PolymeshAssociation/polymesh-sdk/blob/968f8d70c/src/types/index.ts#L1355)

___

### issuer

• **issuer**: [`Identity`](../../../classes/API/Entities/Identity/Identity.md)

#### Defined in

[types/index.ts:1398](https://github.com/PolymeshAssociation/polymesh-sdk/blob/968f8d70c/src/types/index.ts#L1398)

___

### max

• **max**: `BigNumber`

The maximum percentage of the total supply that investors meeting the Claim criteria must hold

#### Defined in

[types/index.ts:1396](https://github.com/PolymeshAssociation/polymesh-sdk/blob/968f8d70c/src/types/index.ts#L1396)

___

### min

• **min**: `BigNumber`

The minimum percentage of the total supply that investors meeting the Claim criteria must hold

#### Defined in

[types/index.ts:1392](https://github.com/PolymeshAssociation/polymesh-sdk/blob/968f8d70c/src/types/index.ts#L1392)
