# Interface: LaunchOfferingParams

> Defined in: [src/api/procedures/types.ts:1604](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L1604)

# Interface: LaunchOfferingParams

Defined in: [src/api/procedures/types.ts:1604](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L1604)

## Properties

### end?

> `optional` **end?**: `Date`

Defined in: [src/api/procedures/types.ts:1632](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L1632)

end date of the Offering (optional, defaults to never)

***

### minInvestment

> **minInvestment**: `BigNumber`

Defined in: [src/api/procedures/types.ts:1641](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L1641)

minimum amount that can be spent on this offering

***

### name

> **name**: `string`

Defined in: [src/api/procedures/types.ts:1624](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L1624)

***

### offeringPortfolio

> **offeringPortfolio**: [`PortfolioLike`](../../../entities/types/type-aliases/PortfolioLike.mdx)

Defined in: [src/api/procedures/types.ts:1608](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L1608)

portfolio in which the Asset tokens to be sold are stored

***

### raisingCurrency

> **raisingCurrency**: `string`

Defined in: [src/api/procedures/types.ts:1617](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L1617)

ticker symbol of the currency in which the funds are being raised (e.g. 'USD' or 'CAD').
  Other Assets can be used as currency as well

***

### raisingPortfolio

> **raisingPortfolio**: [`PortfolioLike`](../../../entities/types/type-aliases/PortfolioLike.mdx)

Defined in: [src/api/procedures/types.ts:1612](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L1612)

portfolio in which the raised funds will be stored

***

### start?

> `optional` **start?**: `Date`

Defined in: [src/api/procedures/types.ts:1628](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L1628)

start date of the Offering (optional, defaults to right now)

***

### tiers

> **tiers**: [`OfferingTier`](../../../entities/Offering/types/interfaces/OfferingTier.mdx)[]

Defined in: [src/api/procedures/types.ts:1637](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L1637)

array of sale tiers. Each tier consists of an amount of Assets to be sold at a certain price.
  Tokens in a tier can only be bought when all tokens in previous tiers have been bought

***

### venue?

> `optional` **venue?**: [`Venue`](../../../entities/Venue/classes/Venue.mdx)

Defined in: [src/api/procedures/types.ts:1623](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L1623)

venue through which all offering related trades will be settled
  (optional, defaults to the first `Sto` type Venue owned by the owner of the Offering Portfolio.
  If passed, it must be of type `Sto`)
