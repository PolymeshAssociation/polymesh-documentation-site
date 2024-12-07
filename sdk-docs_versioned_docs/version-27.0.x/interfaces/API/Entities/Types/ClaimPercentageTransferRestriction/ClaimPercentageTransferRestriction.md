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

[api/entities/types.ts:529](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9158669/src/api/entities/types.ts#L529)

___

### exemptedIds

• `Optional` **exemptedIds**: `string`[]

array of Identity IDs that are exempted from the Restriction

#### Inherited from

TransferRestrictionBase.exemptedIds

#### Defined in

[api/entities/types.ts:496](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9158669/src/api/entities/types.ts#L496)

___

### issuer

• **issuer**: [`Identity`](../../../../../classes/API/Entities/Identity/Identity.md)

#### Defined in

[api/entities/types.ts:539](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9158669/src/api/entities/types.ts#L539)

___

### max

• **max**: `BigNumber`

The maximum percentage of the total supply that investors meeting the Claim criteria must hold

#### Defined in

[api/entities/types.ts:537](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9158669/src/api/entities/types.ts#L537)

___

### min

• **min**: `BigNumber`

The minimum percentage of the total supply that investors meeting the Claim criteria must hold

#### Defined in

[api/entities/types.ts:533](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9158669/src/api/entities/types.ts#L533)
