---
id: "AddInstructionWithVenueIdParams"
title: "Interface: AddInstructionWithVenueIdParams"
sidebar_label: "AddInstructionWithVenueIdParams"
---

[api/procedures/types](../../../../../modules/API/Procedures/Types/Types.md).AddInstructionWithVenueIdParams

## Hierarchy

- [`AddInstructionParams`](../AddInstructionParams/AddInstructionParams.md)

  ↳ **`AddInstructionWithVenueIdParams`**

## Properties

### endBlock

• `Optional` **endBlock**: `BigNumber`

block at which the Instruction will be executed automatically (optional, the Instruction will be executed when all participants have authorized it if not supplied)

#### Inherited from

[AddInstructionParams](../AddInstructionParams/AddInstructionParams.md).[endBlock](../AddInstructionParams/AddInstructionParams.md#endblock)

#### Defined in

[api/procedures/types.ts:426](https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/api/procedures/types.ts#L426)

___

### legs

• **legs**: { `amount`: `BigNumber` ; `asset`: `string` \| [`Asset`](../../../../../classes/API/Entities/Asset/Asset.md) ; `from`: [`PortfolioLike`](../../../../../modules/Types/Types.md#portfoliolike) ; `to`: [`PortfolioLike`](../../../../../modules/Types/Types.md#portfoliolike)  }[]

array of Asset movements (amount, from, to, asset)

#### Inherited from

[AddInstructionParams](../AddInstructionParams/AddInstructionParams.md).[legs](../AddInstructionParams/AddInstructionParams.md#legs)

#### Defined in

[api/procedures/types.ts:409](https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/api/procedures/types.ts#L409)

___

### memo

• `Optional` **memo**: `string`

identifier string to help differentiate instructions

#### Inherited from

[AddInstructionParams](../AddInstructionParams/AddInstructionParams.md).[memo](../AddInstructionParams/AddInstructionParams.md#memo)

#### Defined in

[api/procedures/types.ts:430](https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/api/procedures/types.ts#L430)

___

### tradeDate

• `Optional` **tradeDate**: `Date`

date at which the trade was agreed upon (optional, for off chain trades)

#### Inherited from

[AddInstructionParams](../AddInstructionParams/AddInstructionParams.md).[tradeDate](../AddInstructionParams/AddInstructionParams.md#tradedate)

#### Defined in

[api/procedures/types.ts:418](https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/api/procedures/types.ts#L418)

___

### valueDate

• `Optional` **valueDate**: `Date`

date at which the trade was executed (optional, for off chain trades)

#### Inherited from

[AddInstructionParams](../AddInstructionParams/AddInstructionParams.md).[valueDate](../AddInstructionParams/AddInstructionParams.md#valuedate)

#### Defined in

[api/procedures/types.ts:422](https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/api/procedures/types.ts#L422)

___

### venueId

• **venueId**: `BigNumber`

#### Defined in

[api/procedures/types.ts:441](https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/api/procedures/types.ts#L441)
