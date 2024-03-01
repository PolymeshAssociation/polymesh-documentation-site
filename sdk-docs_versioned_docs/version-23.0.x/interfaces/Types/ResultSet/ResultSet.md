---
id: "ResultSet"
title: "Interface: ResultSet<T>"
sidebar_label: "ResultSet"
---

[types](../../../modules/Types/Types.md).ResultSet

## Type parameters

| Name |
| :------ |
| `T` |

## Properties

### count

• `Optional` **count**: `BigNumber`

**`Note`**

methods will have `count` defined when middleware is configured, but be undefined otherwise. This happens when the chain node is queried directly

#### Defined in

[types/index.ts:789](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2c78f6c34/src/types/index.ts#L789)

___

### data

• **data**: `T`[]

#### Defined in

[types/index.ts:784](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2c78f6c34/src/types/index.ts#L784)

___

### next

• **next**: [`NextKey`](../../../modules/Types/Types.md#nextkey)

#### Defined in

[types/index.ts:785](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2c78f6c34/src/types/index.ts#L785)
