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

[api/entities/types.ts:522](https://github.com/PolymeshAssociation/polymesh-sdk/blob/978e4ded6/src/api/entities/types.ts#L522)

___

### exemptedIds

• `Optional` **exemptedIds**: `string`[]

array of Identity IDs that are exempted from the Restriction

#### Inherited from

TransferRestrictionBase.exemptedIds

#### Defined in

[api/entities/types.ts:489](https://github.com/PolymeshAssociation/polymesh-sdk/blob/978e4ded6/src/api/entities/types.ts#L489)

___

### issuer

• **issuer**: [`Identity`](../../../../../classes/API/Entities/Identity/Identity.md)

#### Defined in

[api/entities/types.ts:532](https://github.com/PolymeshAssociation/polymesh-sdk/blob/978e4ded6/src/api/entities/types.ts#L532)

___

### max

• **max**: `BigNumber`

The maximum percentage of the total supply that investors meeting the Claim criteria must hold

#### Defined in

[api/entities/types.ts:530](https://github.com/PolymeshAssociation/polymesh-sdk/blob/978e4ded6/src/api/entities/types.ts#L530)

___

### min

• **min**: `BigNumber`

The minimum percentage of the total supply that investors meeting the Claim criteria must hold

#### Defined in

[api/entities/types.ts:526](https://github.com/PolymeshAssociation/polymesh-sdk/blob/978e4ded6/src/api/entities/types.ts#L526)
