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

[api/procedures/types.ts:508](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fedc4714f/src/api/procedures/types.ts#L508)

___

### exemptedIdentities

• `Optional` **exemptedIdentities**: (`string` \| [`Identity`](../../../../../classes/API/Entities/Identity/Identity.md))[]

array of Identities (or DIDs) that are exempted from the Restriction

#### Inherited from

TransferRestrictionInputBase.exemptedIdentities

#### Defined in

[api/procedures/types.ts:487](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fedc4714f/src/api/procedures/types.ts#L487)

___

### issuer

• **issuer**: [`Identity`](../../../../../classes/API/Entities/Identity/Identity.md)

#### Defined in

[api/procedures/types.ts:507](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fedc4714f/src/api/procedures/types.ts#L507)

___

### max

• `Optional` **max**: `BigNumber`

#### Defined in

[api/procedures/types.ts:506](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fedc4714f/src/api/procedures/types.ts#L506)

___

### min

• **min**: `BigNumber`

#### Defined in

[api/procedures/types.ts:505](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fedc4714f/src/api/procedures/types.ts#L505)
