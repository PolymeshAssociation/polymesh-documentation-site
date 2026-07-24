# Interface: PortfolioCollection

> Defined in: [src/api/entities/Portfolio/types.ts:11](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Portfolio/types.ts#L11)

# Interface: PortfolioCollection

Defined in: [src/api/entities/Portfolio/types.ts:11](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Portfolio/types.ts#L11)

## Properties

### collection

> **collection**: [`NftCollection`](../../../Asset/NonFungible/NftCollection/classes/NftCollection.mdx)

Defined in: [src/api/entities/Portfolio/types.ts:12](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Portfolio/types.ts#L12)

***

### free

> **free**: [`Nft`](../../../Asset/NonFungible/Nft/classes/Nft.mdx)[]

Defined in: [src/api/entities/Portfolio/types.ts:16](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Portfolio/types.ts#L16)

NFTs available for transferring

***

### locked

> **locked**: [`Nft`](../../../Asset/NonFungible/Nft/classes/Nft.mdx)[]

Defined in: [src/api/entities/Portfolio/types.ts:20](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Portfolio/types.ts#L20)

NFTs that are locked, such as being involved in a pending instruction

***

### total

> **total**: `BigNumber`

Defined in: [src/api/entities/Portfolio/types.ts:24](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Portfolio/types.ts#L24)

Total number of NFTs held for a collection
