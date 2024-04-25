---
id: "ResultSet"
title: "Interface: ResultSet<T>"
sidebar_label: "ResultSet"
---

[api/entities/types](../../../../../modules/API/Entities/Types/Types.md).ResultSet

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

[api/entities/types.ts:98](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fedc4714f/src/api/entities/types.ts#L98)

___

### data

• **data**: `T`[]

#### Defined in

[api/entities/types.ts:93](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fedc4714f/src/api/entities/types.ts#L93)

___

### next

• **next**: [`NextKey`](../../../../../modules/API/Entities/Types/Types.md#nextkey)

#### Defined in

[api/entities/types.ts:94](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fedc4714f/src/api/entities/types.ts#L94)
