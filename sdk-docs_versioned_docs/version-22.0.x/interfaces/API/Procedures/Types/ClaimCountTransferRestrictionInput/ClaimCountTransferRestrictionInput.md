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

• **claim**: [`InputStatClaim`](../../../../../modules/Types/Types.md#inputstatclaim)

#### Defined in

[api/procedures/types.ts:183](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95f248df/src/api/procedures/types.ts#L183)

___

### exemptedIdentities

• `Optional` **exemptedIdentities**: (`string` \| [`Identity`](../../../../../classes/API/Entities/Identity/Identity.md))[]

array of Identities (or DIDs) that are exempted from the Restriction

#### Inherited from

TransferRestrictionInputBase.exemptedIdentities

#### Defined in

[api/procedures/types.ts:162](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95f248df/src/api/procedures/types.ts#L162)

___

### issuer

• **issuer**: [`Identity`](../../../../../classes/API/Entities/Identity/Identity.md)

#### Defined in

[api/procedures/types.ts:182](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95f248df/src/api/procedures/types.ts#L182)

___

### max

• `Optional` **max**: `BigNumber`

#### Defined in

[api/procedures/types.ts:181](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95f248df/src/api/procedures/types.ts#L181)

___

### min

• **min**: `BigNumber`

#### Defined in

[api/procedures/types.ts:180](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95f248df/src/api/procedures/types.ts#L180)
