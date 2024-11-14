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

[api/entities/types.ts:510](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b55e63737/src/api/entities/types.ts#L510)

___

### exemptedIds

• `Optional` **exemptedIds**: `string`[]

array of Identity IDs that are exempted from the Restriction

#### Inherited from

TransferRestrictionBase.exemptedIds

#### Defined in

[api/entities/types.ts:493](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b55e63737/src/api/entities/types.ts#L493)

___

### issuer

• **issuer**: [`Identity`](../../../../../classes/API/Entities/Identity/Identity.md)

#### Defined in

[api/entities/types.ts:520](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b55e63737/src/api/entities/types.ts#L520)

___

### max

• `Optional` **max**: `BigNumber`

The maximum amount of investors that must meet the Claim criteria

#### Defined in

[api/entities/types.ts:518](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b55e63737/src/api/entities/types.ts#L518)

___

### min

• **min**: `BigNumber`

The minimum amount of investors the must meet the Claim criteria

#### Defined in

[api/entities/types.ts:514](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b55e63737/src/api/entities/types.ts#L514)
