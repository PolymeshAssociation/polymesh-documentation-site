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

[api/procedures/types.ts:514](https://github.com/PolymeshAssociation/polymesh-sdk/blob/654b99c8d/src/api/procedures/types.ts#L514)

___

### exemptedIdentities

• `Optional` **exemptedIdentities**: (`string` \| [`Identity`](../../../../../classes/API/Entities/Identity/Identity.md))[]

array of Identities (or DIDs) that are exempted from the Restriction

#### Inherited from

TransferRestrictionInputBase.exemptedIdentities

#### Defined in

[api/procedures/types.ts:487](https://github.com/PolymeshAssociation/polymesh-sdk/blob/654b99c8d/src/api/procedures/types.ts#L487)

___

### issuer

• **issuer**: [`Identity`](../../../../../classes/API/Entities/Identity/Identity.md)

#### Defined in

[api/procedures/types.ts:513](https://github.com/PolymeshAssociation/polymesh-sdk/blob/654b99c8d/src/api/procedures/types.ts#L513)

___

### max

• **max**: `BigNumber`

#### Defined in

[api/procedures/types.ts:512](https://github.com/PolymeshAssociation/polymesh-sdk/blob/654b99c8d/src/api/procedures/types.ts#L512)

___

### min

• **min**: `BigNumber`

#### Defined in

[api/procedures/types.ts:511](https://github.com/PolymeshAssociation/polymesh-sdk/blob/654b99c8d/src/api/procedures/types.ts#L511)
