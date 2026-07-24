# Interface: RedeemNftParams

> Defined in: [src/api/procedures/types.ts:1416](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L1416)

# Interface: RedeemNftParams

Defined in: [src/api/procedures/types.ts:1416](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L1416)

## Properties

### from?

> `optional` **from?**: `BigNumber` \| [`DefaultPortfolio`](../../../entities/DefaultPortfolio/classes/DefaultPortfolio.mdx) \| [`NumberedPortfolio`](../../../entities/NumberedPortfolio/classes/NumberedPortfolio.mdx)

Defined in: [src/api/procedures/types.ts:1422](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L1422)

portfolio (or portfolio ID) from which Assets will be redeemed (optional, defaults to the default Portfolio)

#### Note

either `from` or `fromAccount` must be provided

***

### fromAccount?

> `optional` **fromAccount?**: `string` \| [`Account`](../../../entities/Account/classes/Account.mdx)

Defined in: [src/api/procedures/types.ts:1429](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L1429)

(optional) Account from which Assets will be redeemed

#### Note

only one of `from` or `fromAccount` can be provided. If none are provided, defaults to the default Portfolio
