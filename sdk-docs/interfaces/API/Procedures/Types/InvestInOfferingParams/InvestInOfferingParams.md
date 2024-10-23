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

[api/procedures/types.ts:1541](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c53723bab/src/api/procedures/types.ts#L1541)

___

### maxPrice

• `Optional` **maxPrice**: `BigNumber`

maximum average price to pay per Asset token (optional)

#### Defined in

[api/procedures/types.ts:1549](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c53723bab/src/api/procedures/types.ts#L1549)

___

### purchaseAmount

• **purchaseAmount**: `BigNumber`

amount of Asset tokens to purchase

#### Defined in

[api/procedures/types.ts:1545](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c53723bab/src/api/procedures/types.ts#L1545)

___

### purchasePortfolio

• **purchasePortfolio**: [`PortfolioLike`](../../../../../modules/API/Entities/Types/Types.md#portfoliolike)

portfolio in which the purchased Asset tokens will be stored

#### Defined in

[api/procedures/types.ts:1537](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c53723bab/src/api/procedures/types.ts#L1537)
