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

[types/index.ts:753](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d2/src/types/index.ts#L753)

___

### data

• **data**: `T`[]

#### Defined in

[types/index.ts:748](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d2/src/types/index.ts#L748)

___

### next

• **next**: [`NextKey`](../../../modules/Types/Types.md#nextkey)

#### Defined in

[types/index.ts:749](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d2/src/types/index.ts#L749)
