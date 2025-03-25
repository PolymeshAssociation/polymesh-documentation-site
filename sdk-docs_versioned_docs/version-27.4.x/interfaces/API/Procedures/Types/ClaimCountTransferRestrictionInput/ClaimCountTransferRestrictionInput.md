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

[api/procedures/types.ts:552](https://github.com/PolymeshAssociation/polymesh-sdk/blob/f8a937f04/src/api/procedures/types.ts#L552)

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

[api/procedures/types.ts:551](https://github.com/PolymeshAssociation/polymesh-sdk/blob/f8a937f04/src/api/procedures/types.ts#L551)

___

### max

• `Optional` **max**: `BigNumber`

#### Defined in

[api/procedures/types.ts:550](https://github.com/PolymeshAssociation/polymesh-sdk/blob/f8a937f04/src/api/procedures/types.ts#L550)

___

### min

• **min**: `BigNumber`

#### Defined in

[api/procedures/types.ts:549](https://github.com/PolymeshAssociation/polymesh-sdk/blob/f8a937f04/src/api/procedures/types.ts#L549)
