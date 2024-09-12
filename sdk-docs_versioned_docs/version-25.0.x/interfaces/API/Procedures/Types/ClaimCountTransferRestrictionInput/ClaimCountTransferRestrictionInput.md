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

[api/procedures/types.ts:520](https://github.com/PolymeshAssociation/polymesh-sdk/blob/978e4ded6/src/api/procedures/types.ts#L520)

___

### exemptedIdentities

• `Optional` **exemptedIdentities**: (`string` \| [`Identity`](../../../../../classes/API/Entities/Identity/Identity.md))[]

array of Identities (or DIDs) that are exempted from the Restriction

#### Inherited from

TransferRestrictionInputBase.exemptedIdentities

#### Defined in

[api/procedures/types.ts:499](https://github.com/PolymeshAssociation/polymesh-sdk/blob/978e4ded6/src/api/procedures/types.ts#L499)

___

### issuer

• **issuer**: [`Identity`](../../../../../classes/API/Entities/Identity/Identity.md)

#### Defined in

[api/procedures/types.ts:519](https://github.com/PolymeshAssociation/polymesh-sdk/blob/978e4ded6/src/api/procedures/types.ts#L519)

___

### max

• `Optional` **max**: `BigNumber`

#### Defined in

[api/procedures/types.ts:518](https://github.com/PolymeshAssociation/polymesh-sdk/blob/978e4ded6/src/api/procedures/types.ts#L518)

___

### min

• **min**: `BigNumber`

#### Defined in

[api/procedures/types.ts:517](https://github.com/PolymeshAssociation/polymesh-sdk/blob/978e4ded6/src/api/procedures/types.ts#L517)
