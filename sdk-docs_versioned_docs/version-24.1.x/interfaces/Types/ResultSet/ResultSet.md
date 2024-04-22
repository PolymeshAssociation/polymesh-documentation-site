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

[types/index.ts:795](https://github.com/PolymeshAssociation/polymesh-sdk/blob/968f8d70c/src/types/index.ts#L795)

___

### data

• **data**: `T`[]

#### Defined in

[types/index.ts:790](https://github.com/PolymeshAssociation/polymesh-sdk/blob/968f8d70c/src/types/index.ts#L790)

___

### next

• **next**: [`NextKey`](../../../modules/Types/Types.md#nextkey)

#### Defined in

[types/index.ts:791](https://github.com/PolymeshAssociation/polymesh-sdk/blob/968f8d70c/src/types/index.ts#L791)
