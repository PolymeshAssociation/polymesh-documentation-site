---
id: "InvestInOfferingParams"
title: "Interface: InvestInOfferingParams"
sidebar_label: "InvestInOfferingParams"
---

[api/procedures/types](../../../../../modules/API/Procedures/Types/Types.md).InvestInOfferingParams

## Properties

### fundingPortfolio

• **fundingPortfolio**: [`PortfolioLike`](../../../../../modules/API/Entities/Types/Types.md#portfoliolike)

portfolio from which funds will be withdrawn to pay for the Asset tokens

#### Defined in

[api/procedures/types.ts:1546](https://github.com/PolymeshAssociation/polymesh-sdk/blob/3cc570ade/src/api/procedures/types.ts#L1546)

___

### maxPrice

• `Optional` **maxPrice**: `BigNumber`

maximum average price to pay per Asset token (optional)

#### Defined in

[api/procedures/types.ts:1554](https://github.com/PolymeshAssociation/polymesh-sdk/blob/3cc570ade/src/api/procedures/types.ts#L1554)

___

### purchaseAmount

• **purchaseAmount**: `BigNumber`

amount of Asset tokens to purchase

#### Defined in

[api/procedures/types.ts:1550](https://github.com/PolymeshAssociation/polymesh-sdk/blob/3cc570ade/src/api/procedures/types.ts#L1550)

___

### purchasePortfolio

• **purchasePortfolio**: [`PortfolioLike`](../../../../../modules/API/Entities/Types/Types.md#portfoliolike)

portfolio in which the purchased Asset tokens will be stored

#### Defined in

[api/procedures/types.ts:1542](https://github.com/PolymeshAssociation/polymesh-sdk/blob/3cc570ade/src/api/procedures/types.ts#L1542)
