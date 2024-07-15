---
id: "Balance"
title: "Interface: Balance"
sidebar_label: "Balance"
---

[types](../../../modules/Types/Types.md).Balance

## Hierarchy

- **`Balance`**

  ↳ [`PortfolioBalance`](../../API/Entities/Portfolio/Types/PortfolioBalance/PortfolioBalance.md)

## Properties

### free

• **free**: `BigNumber`

balance available for transferring and paying fees

#### Defined in

[types/index.ts:763](https://github.com/PolymeshAssociation/polymesh-sdk/blob/daafaa68f/src/types/index.ts#L763)

___

### locked

• **locked**: `BigNumber`

unavailable balance, either bonded for staking or locked for some other purpose

#### Defined in

[types/index.ts:767](https://github.com/PolymeshAssociation/polymesh-sdk/blob/daafaa68f/src/types/index.ts#L767)

___

### total

• **total**: `BigNumber`

free + locked

#### Defined in

[types/index.ts:771](https://github.com/PolymeshAssociation/polymesh-sdk/blob/daafaa68f/src/types/index.ts#L771)
