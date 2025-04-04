---
id: "ClaimPercentageTransferRestriction"
title: "Interface: ClaimPercentageTransferRestriction"
sidebar_label: "ClaimPercentageTransferRestriction"
---

[api/entities/types](../../../../../modules/API/Entities/Types/Types.md).ClaimPercentageTransferRestriction

## Hierarchy

- `TransferRestrictionBase`

  ↳ **`ClaimPercentageTransferRestriction`**

## Properties

### claim

• **claim**: [`InputStatClaim`](../../../../../modules/API/Entities/Types/Types.md#inputstatclaim)

The type of investors this restriction applies to. e.g. Canadian investor

#### Defined in

[api/entities/types.ts:531](https://github.com/PolymeshAssociation/polymesh-sdk/blob/49a0066c3/src/api/entities/types.ts#L531)

___

### exemptedIds

• `Optional` **exemptedIds**: `string`[]

array of Identity IDs that are exempted from the Restriction

#### Inherited from

TransferRestrictionBase.exemptedIds

#### Defined in

[api/entities/types.ts:498](https://github.com/PolymeshAssociation/polymesh-sdk/blob/49a0066c3/src/api/entities/types.ts#L498)

___

### issuer

• **issuer**: [`Identity`](../../../../../classes/API/Entities/Identity/Identity.md)

#### Defined in

[api/entities/types.ts:541](https://github.com/PolymeshAssociation/polymesh-sdk/blob/49a0066c3/src/api/entities/types.ts#L541)

___

### max

• **max**: `BigNumber`

The maximum percentage of the total supply that investors meeting the Claim criteria must hold

#### Defined in

[api/entities/types.ts:539](https://github.com/PolymeshAssociation/polymesh-sdk/blob/49a0066c3/src/api/entities/types.ts#L539)

___

### min

• **min**: `BigNumber`

The minimum percentage of the total supply that investors meeting the Claim criteria must hold

#### Defined in

[api/entities/types.ts:535](https://github.com/PolymeshAssociation/polymesh-sdk/blob/49a0066c3/src/api/entities/types.ts#L535)
