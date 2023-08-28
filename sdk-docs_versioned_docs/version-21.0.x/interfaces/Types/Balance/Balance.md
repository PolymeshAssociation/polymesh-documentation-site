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

[types/index.ts:727](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d2/src/types/index.ts#L727)

___

### locked

• **locked**: `BigNumber`

unavailable balance, either bonded for staking or locked for some other purpose

#### Defined in

[types/index.ts:731](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d2/src/types/index.ts#L731)

___

### total

• **total**: `BigNumber`

free + locked

#### Defined in

[types/index.ts:735](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d2/src/types/index.ts#L735)
