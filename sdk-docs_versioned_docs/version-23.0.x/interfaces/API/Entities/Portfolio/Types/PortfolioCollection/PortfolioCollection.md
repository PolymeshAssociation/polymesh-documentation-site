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

[api/entities/Portfolio/types.ts:13](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2c78f6c34/src/api/entities/Portfolio/types.ts#L13)

___

### free

• **free**: [`Nft`](../../../../../../classes/API/Entities/Asset/NonFungible/Nft/Nft.md)[]

NFTs available for transferring

#### Defined in

[api/entities/Portfolio/types.ts:17](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2c78f6c34/src/api/entities/Portfolio/types.ts#L17)

___

### locked

• **locked**: [`Nft`](../../../../../../classes/API/Entities/Asset/NonFungible/Nft/Nft.md)[]

NFTs that are locked, such as being involved in a pending instruction

#### Defined in

[api/entities/Portfolio/types.ts:21](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2c78f6c34/src/api/entities/Portfolio/types.ts#L21)

___

### total

• **total**: `BigNumber`

Total number of NFTs held for a collection

#### Defined in

[api/entities/Portfolio/types.ts:25](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2c78f6c34/src/api/entities/Portfolio/types.ts#L25)
