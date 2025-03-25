---
id: "NftControllerTransferParams"
title: "Interface: NftControllerTransferParams"
sidebar_label: "NftControllerTransferParams"
---

[api/procedures/types](../../../../../modules/API/Procedures/Types/Types.md).NftControllerTransferParams

## Properties

### destinationPortfolio

• `Optional` **destinationPortfolio**: [`PortfolioLike`](../../../../../modules/API/Entities/Types/Types.md#portfoliolike)

Optional portfolio (or portfolio ID) to which NFTs will be transferred to. Defaults to default. If specified it must be one of the callers own portfolios

#### Defined in

[api/procedures/types.ts:1167](https://github.com/PolymeshAssociation/polymesh-sdk/blob/f8a937f04/src/api/procedures/types.ts#L1167)

___

### nfts

• **nfts**: (`BigNumber` \| [`Nft`](../../../../../classes/API/Entities/Asset/NonFungible/Nft/Nft.md))[]

The NFTs to transfer

#### Defined in

[api/procedures/types.ts:1162](https://github.com/PolymeshAssociation/polymesh-sdk/blob/f8a937f04/src/api/procedures/types.ts#L1162)

___

### originPortfolio

• **originPortfolio**: [`PortfolioLike`](../../../../../modules/API/Entities/Types/Types.md#portfoliolike)

portfolio (or portfolio ID) from which NFTs will be transferred from

#### Defined in

[api/procedures/types.ts:1158](https://github.com/PolymeshAssociation/polymesh-sdk/blob/f8a937f04/src/api/procedures/types.ts#L1158)
