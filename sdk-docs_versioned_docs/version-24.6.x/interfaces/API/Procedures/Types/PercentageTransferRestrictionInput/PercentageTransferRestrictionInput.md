---
id: "PercentageTransferRestrictionInput"
title: "Interface: PercentageTransferRestrictionInput"
sidebar_label: "PercentageTransferRestrictionInput"
---

[api/procedures/types](../../../../../modules/API/Procedures/Types/Types.md).PercentageTransferRestrictionInput

## Hierarchy

- `TransferRestrictionInputBase`

  ↳ **`PercentageTransferRestrictionInput`**

## Properties

### exemptedIdentities

• `Optional` **exemptedIdentities**: (`string` \| [`Identity`](../../../../../classes/API/Entities/Identity/Identity.md))[]

array of Identities (or DIDs) that are exempted from the Restriction

#### Inherited from

TransferRestrictionInputBase.exemptedIdentities

#### Defined in

[api/procedures/types.ts:487](https://github.com/PolymeshAssociation/polymesh-sdk/blob/654b99c8d/src/api/procedures/types.ts#L487)

___

### percentage

• **percentage**: `BigNumber`

maximum percentage (0-100) of the total supply of the Asset that can be held by a single investor at once

#### Defined in

[api/procedures/types.ts:501](https://github.com/PolymeshAssociation/polymesh-sdk/blob/654b99c8d/src/api/procedures/types.ts#L501)
