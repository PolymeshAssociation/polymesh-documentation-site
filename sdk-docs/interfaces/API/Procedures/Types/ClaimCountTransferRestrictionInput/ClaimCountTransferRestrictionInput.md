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

[api/procedures/types.ts:186](https://github.com/PolymeshAssociation/polymesh-sdk/blob/d4e2c127f/src/api/procedures/types.ts#L186)

___

### exemptedIdentities

• `Optional` **exemptedIdentities**: (`string` \| [`Identity`](../../../../../classes/API/Entities/Identity/Identity.md))[]

array of Identities (or DIDs) that are exempted from the Restriction

#### Inherited from

TransferRestrictionInputBase.exemptedIdentities

#### Defined in

[api/procedures/types.ts:165](https://github.com/PolymeshAssociation/polymesh-sdk/blob/d4e2c127f/src/api/procedures/types.ts#L165)

___

### issuer

• **issuer**: [`Identity`](../../../../../classes/API/Entities/Identity/Identity.md)

#### Defined in

[api/procedures/types.ts:185](https://github.com/PolymeshAssociation/polymesh-sdk/blob/d4e2c127f/src/api/procedures/types.ts#L185)

___

### max

• `Optional` **max**: `BigNumber`

#### Defined in

[api/procedures/types.ts:184](https://github.com/PolymeshAssociation/polymesh-sdk/blob/d4e2c127f/src/api/procedures/types.ts#L184)

___

### min

• **min**: `BigNumber`

#### Defined in

[api/procedures/types.ts:183](https://github.com/PolymeshAssociation/polymesh-sdk/blob/d4e2c127f/src/api/procedures/types.ts#L183)
