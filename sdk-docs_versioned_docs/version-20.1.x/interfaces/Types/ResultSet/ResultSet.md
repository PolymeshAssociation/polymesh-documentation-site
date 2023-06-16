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

[types/index.ts:730](https://github.com/F-OBrien/polymesh-sdk/blob/012f1745/src/types/index.ts#L730)

___

### data

• **data**: `T`[]

#### Defined in

[types/index.ts:725](https://github.com/F-OBrien/polymesh-sdk/blob/012f1745/src/types/index.ts#L725)

___

### next

• **next**: [`NextKey`](../../../modules/Types/Types.md#nextkey)

#### Defined in

[types/index.ts:726](https://github.com/F-OBrien/polymesh-sdk/blob/012f1745/src/types/index.ts#L726)
