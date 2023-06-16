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

[types/index.ts:704](https://github.com/F-OBrien/polymesh-sdk/blob/012f1745/src/types/index.ts#L704)

___

### locked

• **locked**: `BigNumber`

unavailable balance, either bonded for staking or locked for some other purpose

#### Defined in

[types/index.ts:708](https://github.com/F-OBrien/polymesh-sdk/blob/012f1745/src/types/index.ts#L708)

___

### total

• **total**: `BigNumber`

free + locked

#### Defined in

[types/index.ts:712](https://github.com/F-OBrien/polymesh-sdk/blob/012f1745/src/types/index.ts#L712)
