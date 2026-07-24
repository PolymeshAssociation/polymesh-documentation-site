# Interface: ConfigureDividendDistributionParams

> Defined in: [src/api/procedures/types.ts:1531](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L1531)

# Interface: ConfigureDividendDistributionParams

Defined in: [src/api/procedures/types.ts:1531](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L1531)

## Properties

### checkpoint

> **checkpoint**: [`InputCaCheckpoint`](../../../entities/Asset/Fungible/Checkpoints/types/type-aliases/InputCaCheckpoint.mdx)

Defined in: [src/api/procedures/types.ts:1556](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L1556)

checkpoint to be used to calculate Dividends. If a Schedule is passed, the next Checkpoint it creates will be used.
  If a Date is passed, a Checkpoint will be created at that date and used

***

### currency

> **currency**: `string`

Defined in: [src/api/procedures/types.ts:1564](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L1564)

ticker of the currency in which Dividends will be distributed

***

### declarationDate?

> `optional` **declarationDate?**: `Date`

Defined in: [src/api/procedures/types.ts:1535](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L1535)

date at which the issuer publicly declared the Dividend Distribution. Optional, defaults to the current date

***

### defaultTaxWithholding?

> `optional` **defaultTaxWithholding?**: `BigNumber`

Defined in: [src/api/procedures/types.ts:1546](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L1546)

default percentage (0-100) of the Benefits to be held for tax purposes

***

### description

> **description**: `string`

Defined in: [src/api/procedures/types.ts:1536](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L1536)

***

### expiryDate?

> `optional` **expiryDate?**: `Date`

Defined in: [src/api/procedures/types.ts:1580](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L1580)

optional, defaults to never expiring

***

### maxAmount

> **maxAmount**: `BigNumber`

Defined in: [src/api/procedures/types.ts:1572](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L1572)

maximum amount of `currency` to distribute in total

***

### originPortfolio?

> `optional` **originPortfolio?**: `BigNumber` \| [`NumberedPortfolio`](../../../entities/NumberedPortfolio/classes/NumberedPortfolio.mdx)

Defined in: [src/api/procedures/types.ts:1560](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L1560)

portfolio from which the Dividends will be distributed. Optional, defaults to the Dividend Distributions Agent's Default Portfolio

***

### paymentDate

> **paymentDate**: `Date`

Defined in: [src/api/procedures/types.ts:1576](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L1576)

date from which Asset Holders can claim their Dividends

***

### perShare

> **perShare**: `BigNumber`

Defined in: [src/api/procedures/types.ts:1568](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L1568)

amount of `currency` to distribute per each share of the Asset that a target holds

***

### targets?

> `optional` **targets?**: [`InputCorporateActionTargets`](../type-aliases/InputCorporateActionTargets.mdx)

Defined in: [src/api/procedures/types.ts:1542](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L1542)

Asset Holder Identities to be included (or excluded) from the Dividend Distribution. Inclusion/exclusion is controlled by the `treatment`
  property. When the value is `Include`, all Asset Holders not present in the array are excluded, and vice-versa. If no value is passed,
  the default value for the Asset is used. If there is no default value, all Asset Holders will be part of the Dividend Distribution

***

### taxWithholdings?

> `optional` **taxWithholdings?**: [`InputCorporateActionTaxWithholdings`](../type-aliases/InputCorporateActionTaxWithholdings.mdx)

Defined in: [src/api/procedures/types.ts:1551](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L1551)

percentage (0-100) of the Benefits to be held for tax purposes from individual Asset Holder Identities.
  This overrides the value of `defaultTaxWithholding`
