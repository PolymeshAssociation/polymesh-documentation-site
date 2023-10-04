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

[types/index.ts:733](https://github.com/PolymeshAssociation/polymesh-sdk/blob/d4e2c127f/src/types/index.ts#L733)

___

### locked

• **locked**: `BigNumber`

unavailable balance, either bonded for staking or locked for some other purpose

#### Defined in

[types/index.ts:737](https://github.com/PolymeshAssociation/polymesh-sdk/blob/d4e2c127f/src/types/index.ts#L737)

___

### total

• **total**: `BigNumber`

free + locked

#### Defined in

[types/index.ts:741](https://github.com/PolymeshAssociation/polymesh-sdk/blob/d4e2c127f/src/types/index.ts#L741)
