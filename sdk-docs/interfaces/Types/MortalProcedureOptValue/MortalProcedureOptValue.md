---
id: "MortalProcedureOptValue"
title: "Interface: MortalProcedureOptValue"
sidebar_label: "MortalProcedureOptValue"
---

# Interface: MortalProcedureOptValue

[types](../../../modules/Types/Types.md).MortalProcedureOptValue

This transaction will be rejected if not included in a block after a while (default: ~5 minutes)

## Properties

### immortal

• `Readonly` **immortal**: ``false``

#### Defined in

[types/index.ts:1470](https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/types/index.ts#L1470)

___

### lifetime

• `Optional` `Readonly` **lifetime**: `BigNumber`

The number of blocks the for which the transaction remains valid. Target block time is 6 seconds. The default should suffice for most use cases

**`Note`**

this value will get rounded up to the closest power of 2, e.g. `65` rounds to `128`

**`Note`**

this value should not exceed 250 (rounds to 256), which is the chain's `BlockHashCount` as the lesser of the two will be used.

#### Defined in

[types/index.ts:1477](https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/types/index.ts#L1477)
