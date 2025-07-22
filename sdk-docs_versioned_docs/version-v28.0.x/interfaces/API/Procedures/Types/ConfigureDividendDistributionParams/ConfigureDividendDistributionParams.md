---
id: "ConfigureDividendDistributionParams"
title: "Interface: ConfigureDividendDistributionParams"
sidebar_label: "ConfigureDividendDistributionParams"
---

[api/procedures/types](../../../../../modules/API/Procedures/Types/Types.md).ConfigureDividendDistributionParams

## Properties

### checkpoint

• **checkpoint**: [`InputCaCheckpoint`](../../../../../modules/API/Entities/Asset/Fungible/Checkpoints/Types/Types.md#inputcacheckpoint)

checkpoint to be used to calculate Dividends. If a Schedule is passed, the next Checkpoint it creates will be used.
  If a Date is passed, a Checkpoint will be created at that date and used

#### Defined in

[api/procedures/types.ts:1352](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/procedures/types.ts#L1352)

___

### currency

• **currency**: `string`

ticker of the currency in which Dividends will be distributed

#### Defined in

[api/procedures/types.ts:1360](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/procedures/types.ts#L1360)

___

### declarationDate

• `Optional` **declarationDate**: `Date`

date at which the issuer publicly declared the Dividend Distribution. Optional, defaults to the current date

#### Defined in

[api/procedures/types.ts:1331](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/procedures/types.ts#L1331)

___

### defaultTaxWithholding

• `Optional` **defaultTaxWithholding**: `BigNumber`

default percentage (0-100) of the Benefits to be held for tax purposes

#### Defined in

[api/procedures/types.ts:1342](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/procedures/types.ts#L1342)

___

### description

• **description**: `string`

#### Defined in

[api/procedures/types.ts:1332](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/procedures/types.ts#L1332)

___

### expiryDate

• `Optional` **expiryDate**: `Date`

optional, defaults to never expiring

#### Defined in

[api/procedures/types.ts:1376](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/procedures/types.ts#L1376)

___

### maxAmount

• **maxAmount**: `BigNumber`

maximum amount of `currency` to distribute in total

#### Defined in

[api/procedures/types.ts:1368](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/procedures/types.ts#L1368)

___

### originPortfolio

• `Optional` **originPortfolio**: `BigNumber` \| [`NumberedPortfolio`](../../../../../classes/API/Entities/NumberedPortfolio/NumberedPortfolio.md)

portfolio from which the Dividends will be distributed. Optional, defaults to the Dividend Distributions Agent's Default Portfolio

#### Defined in

[api/procedures/types.ts:1356](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/procedures/types.ts#L1356)

___

### paymentDate

• **paymentDate**: `Date`

date from which Asset Holders can claim their Dividends

#### Defined in

[api/procedures/types.ts:1372](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/procedures/types.ts#L1372)

___

### perShare

• **perShare**: `BigNumber`

amount of `currency` to distribute per each share of the Asset that a target holds

#### Defined in

[api/procedures/types.ts:1364](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/procedures/types.ts#L1364)

___

### targets

• `Optional` **targets**: [`InputCorporateActionTargets`](../../../../../modules/API/Procedures/Types/Types.md#inputcorporateactiontargets)

Asset Holder Identities to be included (or excluded) from the Dividend Distribution. Inclusion/exclusion is controlled by the `treatment`
  property. When the value is `Include`, all Asset Holders not present in the array are excluded, and vice-versa. If no value is passed,
  the default value for the Asset is used. If there is no default value, all Asset Holders will be part of the Dividend Distribution

#### Defined in

[api/procedures/types.ts:1338](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/procedures/types.ts#L1338)

___

### taxWithholdings

• `Optional` **taxWithholdings**: [`InputCorporateActionTaxWithholdings`](../../../../../modules/API/Procedures/Types/Types.md#inputcorporateactiontaxwithholdings)

percentage (0-100) of the Benefits to be held for tax purposes from individual Asset Holder Identities.
  This overrides the value of `defaultTaxWithholding`

#### Defined in

[api/procedures/types.ts:1347](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/procedures/types.ts#L1347)
