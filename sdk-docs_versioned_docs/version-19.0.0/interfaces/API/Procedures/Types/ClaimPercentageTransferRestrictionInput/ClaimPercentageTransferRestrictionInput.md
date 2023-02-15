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

[api/procedures/types.ts:188](https://github.com/PolymeshAssociation/polymesh-sdk/blob/5a778578/src/api/procedures/types.ts#L188)

___

### exemptedIdentities

• `Optional` **exemptedIdentities**: (`string` \| [`Identity`](../../../../../classes/API/Entities/Identity/Identity.md))[]

array of Identities (or DIDs) that are exempted from the Restriction

#### Inherited from

TransferRestrictionInputBase.exemptedIdentities

#### Defined in

[api/procedures/types.ts:161](https://github.com/PolymeshAssociation/polymesh-sdk/blob/5a778578/src/api/procedures/types.ts#L161)

___

### issuer

• **issuer**: [`Identity`](../../../../../classes/API/Entities/Identity/Identity.md)

#### Defined in

[api/procedures/types.ts:187](https://github.com/PolymeshAssociation/polymesh-sdk/blob/5a778578/src/api/procedures/types.ts#L187)

___

### max

• **max**: `BigNumber`

#### Defined in

[api/procedures/types.ts:186](https://github.com/PolymeshAssociation/polymesh-sdk/blob/5a778578/src/api/procedures/types.ts#L186)

___

### min

• **min**: `BigNumber`

#### Defined in

[api/procedures/types.ts:185](https://github.com/PolymeshAssociation/polymesh-sdk/blob/5a778578/src/api/procedures/types.ts#L185)
