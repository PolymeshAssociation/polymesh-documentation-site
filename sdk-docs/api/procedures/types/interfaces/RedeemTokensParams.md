# Interface: RedeemTokensParams

> Defined in: [src/api/procedures/types.ts:1337](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/procedures/types.ts#L1337)

# Interface: RedeemTokensParams

Defined in: [src/api/procedures/types.ts:1337](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/procedures/types.ts#L1337)

## Properties

### amount

> **amount**: `BigNumber`

Defined in: [src/api/procedures/types.ts:1341](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/procedures/types.ts#L1341)

amount of Asset tokens to be redeemed

***

### from?

> `optional` **from?**: `BigNumber` \| [`DefaultPortfolio`](../../../entities/DefaultPortfolio/classes/DefaultPortfolio.mdx) \| [`NumberedPortfolio`](../../../entities/NumberedPortfolio/classes/NumberedPortfolio.mdx)

Defined in: [src/api/procedures/types.ts:1347](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/procedures/types.ts#L1347)

portfolio (or portfolio ID) from which Assets will be redeemed (optional, defaults to the default Portfolio)

#### Note

either `from` or `fromAccount` must be provided

***

### fromAccount?

> `optional` **fromAccount?**: `string` \| [`Account`](../../../entities/Account/classes/Account.mdx)

Defined in: [src/api/procedures/types.ts:1354](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/procedures/types.ts#L1354)

(optional) Account from which Assets will be redeemed

#### Note

either `from` or `fromAccount` must be provided. `fromAccount` takes precedence over `from`
