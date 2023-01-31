---
id: "AddInstructionParams"
title: "Interface: AddInstructionParams"
sidebar_label: "AddInstructionParams"
---

# Interface: AddInstructionParams

[api/procedures/types](../../../../../modules/API/Procedures/Types/Types.md).AddInstructionParams

## Hierarchy

- **`AddInstructionParams`**

  ↳ [`AddInstructionWithVenueIdParams`](../AddInstructionWithVenueIdParams/AddInstructionWithVenueIdParams.md)

## Properties

### endBlock

• `Optional` **endBlock**: `BigNumber`

block at which the Instruction will be executed automatically (optional, the Instruction will be executed when all participants have authorized it if not supplied)

#### Defined in

[api/procedures/types.ts:426](https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/api/procedures/types.ts#L426)

___

### legs

• **legs**: { `amount`: `BigNumber` ; `asset`: `string` \| [`Asset`](../../../../../classes/API/Entities/Asset/Asset.md) ; `from`: [`PortfolioLike`](../../../../../modules/Types/Types.md#portfoliolike) ; `to`: [`PortfolioLike`](../../../../../modules/Types/Types.md#portfoliolike)  }[]

array of Asset movements (amount, from, to, asset)

#### Defined in

[api/procedures/types.ts:409](https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/api/procedures/types.ts#L409)

___

### memo

• `Optional` **memo**: `string`

identifier string to help differentiate instructions

#### Defined in

[api/procedures/types.ts:430](https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/api/procedures/types.ts#L430)

___

### tradeDate

• `Optional` **tradeDate**: `Date`

date at which the trade was agreed upon (optional, for off chain trades)

#### Defined in

[api/procedures/types.ts:418](https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/api/procedures/types.ts#L418)

___

### valueDate

• `Optional` **valueDate**: `Date`

date at which the trade was executed (optional, for off chain trades)

#### Defined in

[api/procedures/types.ts:422](https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/api/procedures/types.ts#L422)
