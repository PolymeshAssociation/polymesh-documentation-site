# Interface: RedeemTokensParams

> Defined in: [src/api/procedures/types.ts:1396](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L1396)

# Interface: RedeemTokensParams

Defined in: [src/api/procedures/types.ts:1396](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L1396)

## Properties

### amount

> **amount**: `BigNumber`

Defined in: [src/api/procedures/types.ts:1400](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L1400)

amount of Asset tokens to be redeemed

***

### from?

> `optional` **from?**: `BigNumber` \| [`DefaultPortfolio`](../../../entities/DefaultPortfolio/classes/DefaultPortfolio.mdx) \| [`NumberedPortfolio`](../../../entities/NumberedPortfolio/classes/NumberedPortfolio.mdx)

Defined in: [src/api/procedures/types.ts:1406](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L1406)

portfolio (or portfolio ID) from which Assets will be redeemed (optional, defaults to the default Portfolio)

#### Note

either `from` or `fromAccount` must be provided

***

### fromAccount?

> `optional` **fromAccount?**: `string` \| [`Account`](../../../entities/Account/classes/Account.mdx)

Defined in: [src/api/procedures/types.ts:1413](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L1413)

(optional) Account from which Assets will be redeemed

#### Note

either `from` or `fromAccount` must be provided. `fromAccount` takes precedence over `from`
