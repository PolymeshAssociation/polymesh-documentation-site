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

[api/entities/types.ts:512](https://github.com/PolymeshAssociation/polymesh-sdk/blob/3cc570ade/src/api/entities/types.ts#L512)

___

### exemptedIds

• `Optional` **exemptedIds**: `string`[]

array of Identity IDs that are exempted from the Restriction

#### Inherited from

TransferRestrictionBase.exemptedIds

#### Defined in

[api/entities/types.ts:495](https://github.com/PolymeshAssociation/polymesh-sdk/blob/3cc570ade/src/api/entities/types.ts#L495)

___

### issuer

• **issuer**: [`Identity`](../../../../../classes/API/Entities/Identity/Identity.md)

#### Defined in

[api/entities/types.ts:522](https://github.com/PolymeshAssociation/polymesh-sdk/blob/3cc570ade/src/api/entities/types.ts#L522)

___

### max

• `Optional` **max**: `BigNumber`

The maximum amount of investors that must meet the Claim criteria

#### Defined in

[api/entities/types.ts:520](https://github.com/PolymeshAssociation/polymesh-sdk/blob/3cc570ade/src/api/entities/types.ts#L520)

___

### min

• **min**: `BigNumber`

The minimum amount of investors the must meet the Claim criteria

#### Defined in

[api/entities/types.ts:516](https://github.com/PolymeshAssociation/polymesh-sdk/blob/3cc570ade/src/api/entities/types.ts#L516)
