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

[api/procedures/types.ts:1406](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fe2e6dd1d/src/api/procedures/types.ts#L1406)

___

### maxPrice

• `Optional` **maxPrice**: `BigNumber`

maximum average price to pay per Asset token (optional)

#### Defined in

[api/procedures/types.ts:1414](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fe2e6dd1d/src/api/procedures/types.ts#L1414)

___

### purchaseAmount

• **purchaseAmount**: `BigNumber`

amount of Asset tokens to purchase

#### Defined in

[api/procedures/types.ts:1410](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fe2e6dd1d/src/api/procedures/types.ts#L1410)

___

### purchasePortfolio

• **purchasePortfolio**: [`PortfolioLike`](../../../../../modules/API/Entities/Types/Types.md#portfoliolike)

portfolio in which the purchased Asset tokens will be stored

#### Defined in

[api/procedures/types.ts:1402](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fe2e6dd1d/src/api/procedures/types.ts#L1402)
