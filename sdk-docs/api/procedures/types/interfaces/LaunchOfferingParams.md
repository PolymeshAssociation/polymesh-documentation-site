# Interface: LaunchOfferingParams

> Defined in: [src/api/procedures/types.ts:1534](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/procedures/types.ts#L1534)

# Interface: LaunchOfferingParams

Defined in: [src/api/procedures/types.ts:1534](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/procedures/types.ts#L1534)

## Properties

### end?

> `optional` **end?**: `Date`

Defined in: [src/api/procedures/types.ts:1562](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/procedures/types.ts#L1562)

end date of the Offering (optional, defaults to never)

***

### minInvestment

> **minInvestment**: `BigNumber`

Defined in: [src/api/procedures/types.ts:1571](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/procedures/types.ts#L1571)

minimum amount that can be spent on this offering

***

### name

> **name**: `string`

Defined in: [src/api/procedures/types.ts:1554](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/procedures/types.ts#L1554)

***

### offeringPortfolio

> **offeringPortfolio**: [`PortfolioLike`](../../../entities/types/type-aliases/PortfolioLike.mdx)

Defined in: [src/api/procedures/types.ts:1538](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/procedures/types.ts#L1538)

portfolio in which the Asset tokens to be sold are stored

***

### raisingCurrency

> **raisingCurrency**: `string`

Defined in: [src/api/procedures/types.ts:1547](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/procedures/types.ts#L1547)

ticker symbol of the currency in which the funds are being raised (e.g. 'USD' or 'CAD').
  Other Assets can be used as currency as well

***

### raisingPortfolio

> **raisingPortfolio**: [`PortfolioLike`](../../../entities/types/type-aliases/PortfolioLike.mdx)

Defined in: [src/api/procedures/types.ts:1542](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/procedures/types.ts#L1542)

portfolio in which the raised funds will be stored

***

### start?

> `optional` **start?**: `Date`

Defined in: [src/api/procedures/types.ts:1558](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/procedures/types.ts#L1558)

start date of the Offering (optional, defaults to right now)

***

### tiers

> **tiers**: [`OfferingTier`](../../../entities/Offering/types/interfaces/OfferingTier.mdx)[]

Defined in: [src/api/procedures/types.ts:1567](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/procedures/types.ts#L1567)

array of sale tiers. Each tier consists of an amount of Assets to be sold at a certain price.
  Tokens in a tier can only be bought when all tokens in previous tiers have been bought

***

### venue?

> `optional` **venue?**: [`Venue`](../../../entities/Venue/classes/Venue.mdx)

Defined in: [src/api/procedures/types.ts:1553](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/procedures/types.ts#L1553)

venue through which all offering related trades will be settled
  (optional, defaults to the first `Sto` type Venue owned by the owner of the Offering Portfolio.
  If passed, it must be of type `Sto`)
