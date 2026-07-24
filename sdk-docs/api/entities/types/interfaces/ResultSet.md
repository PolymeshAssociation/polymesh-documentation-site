# Interface: ResultSet\<T\>

> Defined in: [src/api/entities/types.ts:103](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/types.ts#L103)

# Interface: ResultSet\

Defined in: [src/api/entities/types.ts:103](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/types.ts#L103)

## Type Parameters

Type Parameter

`T`

## Properties

### count?

> `optional` **count?**: `BigNumber`

Defined in: [src/api/entities/types.ts:109](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/types.ts#L109)

#### Note

methods will have `count` defined when middleware is configured, but be undefined otherwise. This happens when the chain node is queried directly

***

### data

> **data**: `T`[]

Defined in: [src/api/entities/types.ts:104](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/types.ts#L104)

***

### next

> **next**: [`NextKey`](../type-aliases/NextKey.mdx)

Defined in: [src/api/entities/types.ts:105](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/types.ts#L105)
