---
id: "NftControllerTransferParams"
title: "Interface: NftControllerTransferParams"
sidebar_label: "NftControllerTransferParams"
---

[api/procedures/types](../../../../../modules/API/Procedures/Types/Types.md).NftControllerTransferParams

## Properties

### destinationPortfolio

• `Optional` **destinationPortfolio**: [`PortfolioLike`](../../../../../modules/Types/Types.md#portfoliolike)

Optional portfolio (or portfolio ID) to which NFTs will be transferred to. Defaults to default. If specified it must be one of the callers own portfolios

#### Defined in

[api/procedures/types.ts:670](https://github.com/PolymeshAssociation/polymesh-sdk/blob/968f8d70c/src/api/procedures/types.ts#L670)

___

### nfts

• **nfts**: (`BigNumber` \| [`Nft`](../../../../../classes/API/Entities/Asset/NonFungible/Nft/Nft.md))[]

The NFTs to transfer

#### Defined in

[api/procedures/types.ts:665](https://github.com/PolymeshAssociation/polymesh-sdk/blob/968f8d70c/src/api/procedures/types.ts#L665)

___

### originPortfolio

• **originPortfolio**: [`PortfolioLike`](../../../../../modules/Types/Types.md#portfoliolike)

portfolio (or portfolio ID) from which NFTs will be transferred from

#### Defined in

[api/procedures/types.ts:661](https://github.com/PolymeshAssociation/polymesh-sdk/blob/968f8d70c/src/api/procedures/types.ts#L661)
