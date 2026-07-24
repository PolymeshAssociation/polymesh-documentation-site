# Interface: ApproveAllowanceParams

> Defined in: [src/api/procedures/types.ts:2154](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L2154)

# Interface: ApproveAllowanceParams

Defined in: [src/api/procedures/types.ts:2154](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L2154)

## Properties

### amount

> **amount**: `BigNumber`

Defined in: [src/api/procedures/types.ts:2163](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L2163)

Maximum amount the `spender` may transfer. Passing `0` will revoke the approval. Balance::MAX = unlimited.

***

### spender

> **spender**: [`AccountLike`](../../../entities/types/type-aliases/AccountLike.mdx)

Defined in: [src/api/procedures/types.ts:2158](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L2158)

Account authorized to spend the Asset
