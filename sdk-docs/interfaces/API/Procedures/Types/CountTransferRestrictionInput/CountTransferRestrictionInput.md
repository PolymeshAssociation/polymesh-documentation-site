---
id: "CountTransferRestrictionInput"
title: "Interface: CountTransferRestrictionInput"
sidebar_label: "CountTransferRestrictionInput"
---

[api/procedures/types](../../../../../modules/API/Procedures/Types/Types.md).CountTransferRestrictionInput

## Hierarchy

- `TransferRestrictionInputBase`

  ↳ **`CountTransferRestrictionInput`**

## Properties

### count

• **count**: `BigNumber`

limit on the amount of different (unique) investors that can hold the Asset at once

#### Defined in

[api/procedures/types.ts:174](https://github.com/PolymeshAssociation/polymesh-sdk/blob/372a67e5d/src/api/procedures/types.ts#L174)

___

### exemptedIdentities

• `Optional` **exemptedIdentities**: (`string` \| [`Identity`](../../../../../classes/API/Entities/Identity/Identity.md))[]

array of Identities (or DIDs) that are exempted from the Restriction

#### Inherited from

TransferRestrictionInputBase.exemptedIdentities

#### Defined in

[api/procedures/types.ts:167](https://github.com/PolymeshAssociation/polymesh-sdk/blob/372a67e5d/src/api/procedures/types.ts#L167)
