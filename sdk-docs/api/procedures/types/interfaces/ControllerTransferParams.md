# Interface: ControllerTransferParams

> Defined in: [src/api/procedures/types.ts:1240](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/procedures/types.ts#L1240)

# Interface: ControllerTransferParams

Defined in: [src/api/procedures/types.ts:1240](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/procedures/types.ts#L1240)

## Properties

### amount

> **amount**: `BigNumber`

Defined in: [src/api/procedures/types.ts:1248](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/procedures/types.ts#L1248)

amount of Asset tokens to transfer

***

### destination?

> `optional` **destination?**: [`AssetHolderLike`](../../../entities/types/type-aliases/AssetHolderLike.mdx)

Defined in: [src/api/procedures/types.ts:1253](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/procedures/types.ts#L1253)

(optional) portfolio (or portfolio ID) or account to which Assets will be transferred to. Defaults to default portfolio. If specified it must be one of the callers own portfolios or accounts

***

### originPortfolio

> **originPortfolio**: [`PortfolioLike`](../../../entities/types/type-aliases/PortfolioLike.mdx)

Defined in: [src/api/procedures/types.ts:1244](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/procedures/types.ts#L1244)

portfolio (or portfolio ID) from which Assets will be transferred
