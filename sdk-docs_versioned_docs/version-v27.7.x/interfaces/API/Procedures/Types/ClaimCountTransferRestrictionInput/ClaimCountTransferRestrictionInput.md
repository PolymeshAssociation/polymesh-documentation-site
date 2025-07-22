---
id: "ClaimCountTransferRestrictionInput"
title: "Interface: ClaimCountTransferRestrictionInput"
sidebar_label: "ClaimCountTransferRestrictionInput"
---

[api/procedures/types](../../../../../modules/API/Procedures/Types/Types.md).ClaimCountTransferRestrictionInput

## Hierarchy

- `TransferRestrictionInputBase`

  ↳ **`ClaimCountTransferRestrictionInput`**

## Properties

### claim

• **claim**: [`InputStatClaim`](../../../../../modules/API/Entities/Types/Types.md#inputstatclaim)

#### Defined in

[api/procedures/types.ts:559](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9e72221/src/api/procedures/types.ts#L559)

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

[api/procedures/types.ts:558](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9e72221/src/api/procedures/types.ts#L558)

___

### max

• `Optional` **max**: `BigNumber`

#### Defined in

[api/procedures/types.ts:557](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9e72221/src/api/procedures/types.ts#L557)

___

### min

• **min**: `BigNumber`

#### Defined in

[api/procedures/types.ts:556](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9e72221/src/api/procedures/types.ts#L556)

___

### skipStatIsEnabledCheck

• `Optional` **skipStatIsEnabledCheck**: `boolean`

(optional) Set to `true` to skip stat is enabled check, useful for batch transactions

#### Inherited from

TransferRestrictionInputBase.skipStatIsEnabledCheck

#### Defined in

[api/procedures/types.ts:538](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9e72221/src/api/procedures/types.ts#L538)
