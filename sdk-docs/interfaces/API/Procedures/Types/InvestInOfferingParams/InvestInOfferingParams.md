---
id: "InvestInOfferingParams"
title: "Interface: InvestInOfferingParams"
sidebar_label: "InvestInOfferingParams"
---

# Interface: InvestInOfferingParams

[api/procedures/types](../../../../../modules/API/Procedures/Types/Types.md).InvestInOfferingParams

## Properties

### fundingPortfolio

• **fundingPortfolio**: [`PortfolioLike`](../../../../../modules/Types/Types.md#portfoliolike)

portfolio from which funds will be withdrawn to pay for the Asset tokens

#### Defined in

[api/procedures/types.ts:862](https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/api/procedures/types.ts#L862)

___

### maxPrice

• `Optional` **maxPrice**: `BigNumber`

maximum average price to pay per Asset token (optional)

#### Defined in

[api/procedures/types.ts:870](https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/api/procedures/types.ts#L870)

___

### purchaseAmount

• **purchaseAmount**: `BigNumber`

amount of Asset tokens to purchase

#### Defined in

[api/procedures/types.ts:866](https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/api/procedures/types.ts#L866)

___

### purchasePortfolio

• **purchasePortfolio**: [`PortfolioLike`](../../../../../modules/Types/Types.md#portfoliolike)

portfolio in which the purchased Asset tokens will be stored

#### Defined in

[api/procedures/types.ts:858](https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/api/procedures/types.ts#L858)
