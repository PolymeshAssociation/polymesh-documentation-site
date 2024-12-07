---
id: "LaunchOfferingParams"
title: "Interface: LaunchOfferingParams"
sidebar_label: "LaunchOfferingParams"
---

[api/procedures/types](../../../../../modules/API/Procedures/Types/Types.md).LaunchOfferingParams

## Properties

### end

• `Optional` **end**: `Date`

end date of the Offering (optional, defaults to never)

#### Defined in

[api/procedures/types.ts:1407](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c8da9dfce/src/api/procedures/types.ts#L1407)

___

### minInvestment

• **minInvestment**: `BigNumber`

minimum amount that can be spent on this offering

#### Defined in

[api/procedures/types.ts:1416](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c8da9dfce/src/api/procedures/types.ts#L1416)

___

### name

• **name**: `string`

#### Defined in

[api/procedures/types.ts:1399](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c8da9dfce/src/api/procedures/types.ts#L1399)

___

### offeringPortfolio

• **offeringPortfolio**: [`PortfolioLike`](../../../../../modules/API/Entities/Types/Types.md#portfoliolike)

portfolio in which the Asset tokens to be sold are stored

#### Defined in

[api/procedures/types.ts:1383](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c8da9dfce/src/api/procedures/types.ts#L1383)

___

### raisingCurrency

• **raisingCurrency**: `string`

ticker symbol of the currency in which the funds are being raised (e.g. 'USD' or 'CAD').
  Other Assets can be used as currency as well

#### Defined in

[api/procedures/types.ts:1392](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c8da9dfce/src/api/procedures/types.ts#L1392)

___

### raisingPortfolio

• **raisingPortfolio**: [`PortfolioLike`](../../../../../modules/API/Entities/Types/Types.md#portfoliolike)

portfolio in which the raised funds will be stored

#### Defined in

[api/procedures/types.ts:1387](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c8da9dfce/src/api/procedures/types.ts#L1387)

___

### start

• `Optional` **start**: `Date`

start date of the Offering (optional, defaults to right now)

#### Defined in

[api/procedures/types.ts:1403](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c8da9dfce/src/api/procedures/types.ts#L1403)

___

### tiers

• **tiers**: [`OfferingTier`](../../../Entities/Offering/Types/OfferingTier/OfferingTier.md)[]

array of sale tiers. Each tier consists of an amount of Assets to be sold at a certain price.
  Tokens in a tier can only be bought when all tokens in previous tiers have been bought

#### Defined in

[api/procedures/types.ts:1412](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c8da9dfce/src/api/procedures/types.ts#L1412)

___

### venue

• `Optional` **venue**: [`Venue`](../../../../../classes/API/Entities/Venue/Venue.md)

venue through which all offering related trades will be settled
  (optional, defaults to the first `Sto` type Venue owned by the owner of the Offering Portfolio.
  If passed, it must be of type `Sto`)

#### Defined in

[api/procedures/types.ts:1398](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c8da9dfce/src/api/procedures/types.ts#L1398)
