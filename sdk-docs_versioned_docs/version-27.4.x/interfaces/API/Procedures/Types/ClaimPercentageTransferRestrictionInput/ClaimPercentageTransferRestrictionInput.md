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

[api/procedures/types.ts:558](https://github.com/PolymeshAssociation/polymesh-sdk/blob/f8a937f04/src/api/procedures/types.ts#L558)

___

### exemptedIdentities

• `Optional` **exemptedIdentities**: (`string` \| [`Identity`](../../../../../classes/API/Entities/Identity/Identity.md))[]

array of Identities (or DIDs) that are exempted from the Restriction

#### Inherited from

TransferRestrictionInputBase.exemptedIdentities

#### Defined in

[api/procedures/types.ts:531](https://github.com/PolymeshAssociation/polymesh-sdk/blob/f8a937f04/src/api/procedures/types.ts#L531)

___

### issuer

• **issuer**: [`Identity`](../../../../../classes/API/Entities/Identity/Identity.md)

#### Defined in

[api/procedures/types.ts:557](https://github.com/PolymeshAssociation/polymesh-sdk/blob/f8a937f04/src/api/procedures/types.ts#L557)

___

### max

• **max**: `BigNumber`

#### Defined in

[api/procedures/types.ts:556](https://github.com/PolymeshAssociation/polymesh-sdk/blob/f8a937f04/src/api/procedures/types.ts#L556)

___

### min

• **min**: `BigNumber`

#### Defined in

[api/procedures/types.ts:555](https://github.com/PolymeshAssociation/polymesh-sdk/blob/f8a937f04/src/api/procedures/types.ts#L555)
