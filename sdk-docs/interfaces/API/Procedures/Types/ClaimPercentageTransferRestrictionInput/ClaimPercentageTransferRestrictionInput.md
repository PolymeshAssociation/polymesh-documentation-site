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

[api/procedures/types.ts:192](https://github.com/PolymeshAssociation/polymesh-sdk/blob/de58d40fd/src/api/procedures/types.ts#L192)

___

### exemptedIdentities

• `Optional` **exemptedIdentities**: (`string` \| [`Identity`](../../../../../classes/API/Entities/Identity/Identity.md))[]

array of Identities (or DIDs) that are exempted from the Restriction

#### Inherited from

TransferRestrictionInputBase.exemptedIdentities

#### Defined in

[api/procedures/types.ts:165](https://github.com/PolymeshAssociation/polymesh-sdk/blob/de58d40fd/src/api/procedures/types.ts#L165)

___

### issuer

• **issuer**: [`Identity`](../../../../../classes/API/Entities/Identity/Identity.md)

#### Defined in

[api/procedures/types.ts:191](https://github.com/PolymeshAssociation/polymesh-sdk/blob/de58d40fd/src/api/procedures/types.ts#L191)

___

### max

• **max**: `BigNumber`

#### Defined in

[api/procedures/types.ts:190](https://github.com/PolymeshAssociation/polymesh-sdk/blob/de58d40fd/src/api/procedures/types.ts#L190)

___

### min

• **min**: `BigNumber`

#### Defined in

[api/procedures/types.ts:189](https://github.com/PolymeshAssociation/polymesh-sdk/blob/de58d40fd/src/api/procedures/types.ts#L189)
