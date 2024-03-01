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

[types/index.ts:725](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2d3ac2aea/src/types/index.ts#L725)

___

### locked

• **locked**: `BigNumber`

unavailable balance, either bonded for staking or locked for some other purpose

#### Defined in

[types/index.ts:729](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2d3ac2aea/src/types/index.ts#L729)

___

### total

• **total**: `BigNumber`

free + locked

#### Defined in

[types/index.ts:733](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2d3ac2aea/src/types/index.ts#L733)
