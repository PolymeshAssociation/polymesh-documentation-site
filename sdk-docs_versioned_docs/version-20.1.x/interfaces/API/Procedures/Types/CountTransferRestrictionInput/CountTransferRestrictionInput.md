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

[api/procedures/types.ts:168](https://github.com/F-OBrien/polymesh-sdk/blob/012f1745/src/api/procedures/types.ts#L168)

___

### exemptedIdentities

• `Optional` **exemptedIdentities**: (`string` \| [`Identity`](../../../../../classes/API/Entities/Identity/Identity.md))[]

array of Identities (or DIDs) that are exempted from the Restriction

#### Inherited from

TransferRestrictionInputBase.exemptedIdentities

#### Defined in

[api/procedures/types.ts:161](https://github.com/F-OBrien/polymesh-sdk/blob/012f1745/src/api/procedures/types.ts#L161)
