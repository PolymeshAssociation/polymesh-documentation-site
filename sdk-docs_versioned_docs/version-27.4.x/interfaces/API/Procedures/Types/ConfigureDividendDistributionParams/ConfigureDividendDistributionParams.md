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

[api/procedures/types.ts:1377](https://github.com/PolymeshAssociation/polymesh-sdk/blob/f8a937f04/src/api/procedures/types.ts#L1377)

___

### currency

• **currency**: `string`

ticker of the currency in which Dividends will be distributed

#### Defined in

[api/procedures/types.ts:1385](https://github.com/PolymeshAssociation/polymesh-sdk/blob/f8a937f04/src/api/procedures/types.ts#L1385)

___

### declarationDate

• `Optional` **declarationDate**: `Date`

date at which the issuer publicly declared the Dividend Distribution. Optional, defaults to the current date

#### Defined in

[api/procedures/types.ts:1356](https://github.com/PolymeshAssociation/polymesh-sdk/blob/f8a937f04/src/api/procedures/types.ts#L1356)

___

### defaultTaxWithholding

• `Optional` **defaultTaxWithholding**: `BigNumber`

default percentage (0-100) of the Benefits to be held for tax purposes

#### Defined in

[api/procedures/types.ts:1367](https://github.com/PolymeshAssociation/polymesh-sdk/blob/f8a937f04/src/api/procedures/types.ts#L1367)

___

### description

• **description**: `string`

#### Defined in

[api/procedures/types.ts:1357](https://github.com/PolymeshAssociation/polymesh-sdk/blob/f8a937f04/src/api/procedures/types.ts#L1357)

___

### expiryDate

• `Optional` **expiryDate**: `Date`

optional, defaults to never expiring

#### Defined in

[api/procedures/types.ts:1401](https://github.com/PolymeshAssociation/polymesh-sdk/blob/f8a937f04/src/api/procedures/types.ts#L1401)

___

### maxAmount

• **maxAmount**: `BigNumber`

maximum amount of `currency` to distribute in total

#### Defined in

[api/procedures/types.ts:1393](https://github.com/PolymeshAssociation/polymesh-sdk/blob/f8a937f04/src/api/procedures/types.ts#L1393)

___

### originPortfolio

• `Optional` **originPortfolio**: `BigNumber` \| [`NumberedPortfolio`](../../../../../classes/API/Entities/NumberedPortfolio/NumberedPortfolio.md)

portfolio from which the Dividends will be distributed. Optional, defaults to the Dividend Distributions Agent's Default Portfolio

#### Defined in

[api/procedures/types.ts:1381](https://github.com/PolymeshAssociation/polymesh-sdk/blob/f8a937f04/src/api/procedures/types.ts#L1381)

___

### paymentDate

• **paymentDate**: `Date`

date from which Asset Holders can claim their Dividends

#### Defined in

[api/procedures/types.ts:1397](https://github.com/PolymeshAssociation/polymesh-sdk/blob/f8a937f04/src/api/procedures/types.ts#L1397)

___

### perShare

• **perShare**: `BigNumber`

amount of `currency` to distribute per each share of the Asset that a target holds

#### Defined in

[api/procedures/types.ts:1389](https://github.com/PolymeshAssociation/polymesh-sdk/blob/f8a937f04/src/api/procedures/types.ts#L1389)

___

### targets

• `Optional` **targets**: [`InputCorporateActionTargets`](../../../../../modules/API/Procedures/Types/Types.md#inputcorporateactiontargets)

Asset Holder Identities to be included (or excluded) from the Dividend Distribution. Inclusion/exclusion is controlled by the `treatment`
  property. When the value is `Include`, all Asset Holders not present in the array are excluded, and vice-versa. If no value is passed,
  the default value for the Asset is used. If there is no default value, all Asset Holders will be part of the Dividend Distribution

#### Defined in

[api/procedures/types.ts:1363](https://github.com/PolymeshAssociation/polymesh-sdk/blob/f8a937f04/src/api/procedures/types.ts#L1363)

___

### taxWithholdings

• `Optional` **taxWithholdings**: [`InputCorporateActionTaxWithholdings`](../../../../../modules/API/Procedures/Types/Types.md#inputcorporateactiontaxwithholdings)

percentage (0-100) of the Benefits to be held for tax purposes from individual Asset Holder Identities.
  This overrides the value of `defaultTaxWithholding`

#### Defined in

[api/procedures/types.ts:1372](https://github.com/PolymeshAssociation/polymesh-sdk/blob/f8a937f04/src/api/procedures/types.ts#L1372)
