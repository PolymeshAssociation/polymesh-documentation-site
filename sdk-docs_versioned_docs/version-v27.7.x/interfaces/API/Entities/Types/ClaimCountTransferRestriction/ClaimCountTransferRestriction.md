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

[api/entities/types.ts:515](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9e72221/src/api/entities/types.ts#L515)

___

### exemptedIds

• `Optional` **exemptedIds**: `string`[]

array of Identity IDs that are exempted from the Restriction

#### Inherited from

TransferRestrictionBase.exemptedIds

#### Defined in

[api/entities/types.ts:498](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9e72221/src/api/entities/types.ts#L498)

___

### issuer

• **issuer**: [`Identity`](../../../../../classes/API/Entities/Identity/Identity.md)

#### Defined in

[api/entities/types.ts:525](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9e72221/src/api/entities/types.ts#L525)

___

### max

• `Optional` **max**: `BigNumber`

The maximum amount of investors that must meet the Claim criteria

#### Defined in

[api/entities/types.ts:523](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9e72221/src/api/entities/types.ts#L523)

___

### min

• **min**: `BigNumber`

The minimum amount of investors the must meet the Claim criteria

#### Defined in

[api/entities/types.ts:519](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9e72221/src/api/entities/types.ts#L519)
