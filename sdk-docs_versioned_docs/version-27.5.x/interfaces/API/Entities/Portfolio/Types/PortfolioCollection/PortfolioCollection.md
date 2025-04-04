---
id: "PortfolioCollection"
title: "Interface: PortfolioCollection"
sidebar_label: "PortfolioCollection"
---

[api/entities/Portfolio/types](../../../../../../modules/API/Entities/Portfolio/Types/Types.md).PortfolioCollection

## Properties

### collection

• **collection**: [`NftCollection`](../../../../../../classes/API/Entities/Asset/NonFungible/NftCollection/NftCollection.md)

#### Defined in

[api/entities/Portfolio/types.ts:12](https://github.com/PolymeshAssociation/polymesh-sdk/blob/49a0066c3/src/api/entities/Portfolio/types.ts#L12)

___

### free

• **free**: [`Nft`](../../../../../../classes/API/Entities/Asset/NonFungible/Nft/Nft.md)[]

NFTs available for transferring

#### Defined in

[api/entities/Portfolio/types.ts:16](https://github.com/PolymeshAssociation/polymesh-sdk/blob/49a0066c3/src/api/entities/Portfolio/types.ts#L16)

___

### locked

• **locked**: [`Nft`](../../../../../../classes/API/Entities/Asset/NonFungible/Nft/Nft.md)[]

NFTs that are locked, such as being involved in a pending instruction

#### Defined in

[api/entities/Portfolio/types.ts:20](https://github.com/PolymeshAssociation/polymesh-sdk/blob/49a0066c3/src/api/entities/Portfolio/types.ts#L20)

___

### total

• **total**: `BigNumber`

Total number of NFTs held for a collection

#### Defined in

[api/entities/Portfolio/types.ts:24](https://github.com/PolymeshAssociation/polymesh-sdk/blob/49a0066c3/src/api/entities/Portfolio/types.ts#L24)
