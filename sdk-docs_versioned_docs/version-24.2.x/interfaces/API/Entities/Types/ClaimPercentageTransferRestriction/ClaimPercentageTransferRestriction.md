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

[api/entities/types.ts:520](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fedc4714f/src/api/entities/types.ts#L520)

___

### exemptedIds

• `Optional` **exemptedIds**: `string`[]

array of Identity IDs that are exempted from the Restriction

#### Inherited from

TransferRestrictionBase.exemptedIds

#### Defined in

[api/entities/types.ts:487](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fedc4714f/src/api/entities/types.ts#L487)

___

### issuer

• **issuer**: [`Identity`](../../../../../classes/API/Entities/Identity/Identity.md)

#### Defined in

[api/entities/types.ts:530](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fedc4714f/src/api/entities/types.ts#L530)

___

### max

• **max**: `BigNumber`

The maximum percentage of the total supply that investors meeting the Claim criteria must hold

#### Defined in

[api/entities/types.ts:528](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fedc4714f/src/api/entities/types.ts#L528)

___

### min

• **min**: `BigNumber`

The minimum percentage of the total supply that investors meeting the Claim criteria must hold

#### Defined in

[api/entities/types.ts:524](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fedc4714f/src/api/entities/types.ts#L524)
