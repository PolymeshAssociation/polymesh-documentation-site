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

[api/entities/types.ts:107](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9e72221/src/api/entities/types.ts#L107)

___

### data

• **data**: `T`[]

#### Defined in

[api/entities/types.ts:102](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9e72221/src/api/entities/types.ts#L102)

___

### next

• **next**: [`NextKey`](../../../../../modules/API/Entities/Types/Types.md#nextkey)

#### Defined in

[api/entities/types.ts:103](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9e72221/src/api/entities/types.ts#L103)
