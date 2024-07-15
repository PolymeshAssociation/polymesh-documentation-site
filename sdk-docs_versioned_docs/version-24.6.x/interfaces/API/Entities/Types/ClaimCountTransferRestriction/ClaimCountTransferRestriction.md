---
id: "ClaimCountTransferRestriction"
title: "Interface: ClaimCountTransferRestriction"
sidebar_label: "ClaimCountTransferRestriction"
---

[api/entities/types](../../../../../modules/API/Entities/Types/Types.md).ClaimCountTransferRestriction

## Hierarchy

- `TransferRestrictionBase`

  ↳ **`ClaimCountTransferRestriction`**

## Properties

### claim

• **claim**: [`InputStatClaim`](../../../../../modules/API/Entities/Types/Types.md#inputstatclaim)

The type of investors this restriction applies to. e.g. non-accredited

#### Defined in

[api/entities/types.ts:504](https://github.com/PolymeshAssociation/polymesh-sdk/blob/654b99c8d/src/api/entities/types.ts#L504)

___

### exemptedIds

• `Optional` **exemptedIds**: `string`[]

array of Identity IDs that are exempted from the Restriction

#### Inherited from

TransferRestrictionBase.exemptedIds

#### Defined in

[api/entities/types.ts:487](https://github.com/PolymeshAssociation/polymesh-sdk/blob/654b99c8d/src/api/entities/types.ts#L487)

___

### issuer

• **issuer**: [`Identity`](../../../../../classes/API/Entities/Identity/Identity.md)

#### Defined in

[api/entities/types.ts:514](https://github.com/PolymeshAssociation/polymesh-sdk/blob/654b99c8d/src/api/entities/types.ts#L514)

___

### max

• `Optional` **max**: `BigNumber`

The maximum amount of investors that must meet the Claim criteria

#### Defined in

[api/entities/types.ts:512](https://github.com/PolymeshAssociation/polymesh-sdk/blob/654b99c8d/src/api/entities/types.ts#L512)

___

### min

• **min**: `BigNumber`

The minimum amount of investors the must meet the Claim criteria

#### Defined in

[api/entities/types.ts:508](https://github.com/PolymeshAssociation/polymesh-sdk/blob/654b99c8d/src/api/entities/types.ts#L508)
