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

[types/index.ts:768](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b6f9fb883/src/types/index.ts#L768)

___

### data

• **data**: `T`[]

#### Defined in

[types/index.ts:763](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b6f9fb883/src/types/index.ts#L763)

___

### next

• **next**: [`NextKey`](../../../modules/Types/Types.md#nextkey)

#### Defined in

[types/index.ts:764](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b6f9fb883/src/types/index.ts#L764)
