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

[types/index.ts:716](https://github.com/PolymeshAssociation/polymesh-sdk/blob/acc2284c/src/types/index.ts#L716)

___

### data

• **data**: `T`[]

#### Defined in

[types/index.ts:711](https://github.com/PolymeshAssociation/polymesh-sdk/blob/acc2284c/src/types/index.ts#L711)

___

### next

• **next**: [`NextKey`](../../../modules/Types/Types.md#nextkey)

#### Defined in

[types/index.ts:712](https://github.com/PolymeshAssociation/polymesh-sdk/blob/acc2284c/src/types/index.ts#L712)
