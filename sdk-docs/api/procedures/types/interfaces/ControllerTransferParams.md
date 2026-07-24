# Interface: ControllerTransferParams

> Defined in: [src/api/procedures/types.ts:1279](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L1279)

# Interface: ControllerTransferParams

Defined in: [src/api/procedures/types.ts:1279](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L1279)

## Properties

### amount

> **amount**: `BigNumber`

Defined in: [src/api/procedures/types.ts:1287](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L1287)

amount of Asset tokens to transfer

***

### destination?

> `optional` **destination?**: [`AssetHolderLike`](../../../entities/types/type-aliases/AssetHolderLike.mdx)

Defined in: [src/api/procedures/types.ts:1292](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L1292)

(optional) portfolio (or portfolio ID) or account to which Assets will be transferred to. Defaults to default portfolio. If specified it must be one of the callers own portfolios or accounts

***

### originPortfolio

> **originPortfolio**: [`PortfolioLike`](../../../entities/types/type-aliases/PortfolioLike.mdx)

Defined in: [src/api/procedures/types.ts:1283](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L1283)

portfolio (or portfolio ID) from which Assets will be transferred
