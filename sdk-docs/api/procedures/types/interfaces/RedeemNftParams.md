# Interface: RedeemNftParams

> Defined in: [src/api/procedures/types.ts:1357](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/procedures/types.ts#L1357)

# Interface: RedeemNftParams

Defined in: [src/api/procedures/types.ts:1357](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/procedures/types.ts#L1357)

## Properties

### from?

> `optional` **from?**: `BigNumber` \| [`DefaultPortfolio`](../../../entities/DefaultPortfolio/classes/DefaultPortfolio.mdx) \| [`NumberedPortfolio`](../../../entities/NumberedPortfolio/classes/NumberedPortfolio.mdx)

Defined in: [src/api/procedures/types.ts:1363](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/procedures/types.ts#L1363)

portfolio (or portfolio ID) from which Assets will be redeemed (optional, defaults to the default Portfolio)

#### Note

either `from` or `fromAccount` must be provided

***

### fromAccount?

> `optional` **fromAccount?**: `string` \| [`Account`](../../../entities/Account/classes/Account.mdx)

Defined in: [src/api/procedures/types.ts:1370](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/procedures/types.ts#L1370)

(optional) Account from which Assets will be redeemed

#### Note

only one of `from` or `fromAccount` can be provided. If none are provided, defaults to the default Portfolio
