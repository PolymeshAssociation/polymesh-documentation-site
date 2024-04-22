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

• **claim**: [`InputStatClaim`](../../../../../modules/Types/Types.md#inputstatclaim)

#### Defined in

[api/procedures/types.ts:194](https://github.com/PolymeshAssociation/polymesh-sdk/blob/968f8d70c/src/api/procedures/types.ts#L194)

___

### exemptedIdentities

• `Optional` **exemptedIdentities**: (`string` \| [`Identity`](../../../../../classes/API/Entities/Identity/Identity.md))[]

array of Identities (or DIDs) that are exempted from the Restriction

#### Inherited from

TransferRestrictionInputBase.exemptedIdentities

#### Defined in

[api/procedures/types.ts:167](https://github.com/PolymeshAssociation/polymesh-sdk/blob/968f8d70c/src/api/procedures/types.ts#L167)

___

### issuer

• **issuer**: [`Identity`](../../../../../classes/API/Entities/Identity/Identity.md)

#### Defined in

[api/procedures/types.ts:193](https://github.com/PolymeshAssociation/polymesh-sdk/blob/968f8d70c/src/api/procedures/types.ts#L193)

___

### max

• **max**: `BigNumber`

#### Defined in

[api/procedures/types.ts:192](https://github.com/PolymeshAssociation/polymesh-sdk/blob/968f8d70c/src/api/procedures/types.ts#L192)

___

### min

• **min**: `BigNumber`

#### Defined in

[api/procedures/types.ts:191](https://github.com/PolymeshAssociation/polymesh-sdk/blob/968f8d70c/src/api/procedures/types.ts#L191)
