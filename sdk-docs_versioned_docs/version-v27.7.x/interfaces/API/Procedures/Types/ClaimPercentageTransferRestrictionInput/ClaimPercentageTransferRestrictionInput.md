---
id: "ClaimPercentageTransferRestrictionInput"
title: "Interface: ClaimPercentageTransferRestrictionInput"
sidebar_label: "ClaimPercentageTransferRestrictionInput"
---

[api/procedures/types](../../../../../modules/API/Procedures/Types/Types.md).ClaimPercentageTransferRestrictionInput

## Hierarchy

- `TransferRestrictionInputBase`

  ↳ **`ClaimPercentageTransferRestrictionInput`**

## Properties

### claim

• **claim**: [`InputStatClaim`](../../../../../modules/API/Entities/Types/Types.md#inputstatclaim)

#### Defined in

[api/procedures/types.ts:565](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9e72221/src/api/procedures/types.ts#L565)

___

### exemptedIdentities

• `Optional` **exemptedIdentities**: (`string` \| [`Identity`](../../../../../classes/API/Entities/Identity/Identity.md))[]

array of Identities (or DIDs) that are exempted from the Restriction

#### Inherited from

TransferRestrictionInputBase.exemptedIdentities

#### Defined in

[api/procedures/types.ts:534](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9e72221/src/api/procedures/types.ts#L534)

___

### issuer

• **issuer**: [`Identity`](../../../../../classes/API/Entities/Identity/Identity.md)

#### Defined in

[api/procedures/types.ts:564](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9e72221/src/api/procedures/types.ts#L564)

___

### max

• **max**: `BigNumber`

#### Defined in

[api/procedures/types.ts:563](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9e72221/src/api/procedures/types.ts#L563)

___

### min

• **min**: `BigNumber`

#### Defined in

[api/procedures/types.ts:562](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9e72221/src/api/procedures/types.ts#L562)

___

### skipStatIsEnabledCheck

• `Optional` **skipStatIsEnabledCheck**: `boolean`

(optional) Set to `true` to skip stat is enabled check, useful for batch transactions

#### Inherited from

TransferRestrictionInputBase.skipStatIsEnabledCheck

#### Defined in

[api/procedures/types.ts:538](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9e72221/src/api/procedures/types.ts#L538)
