---
id: "Balance"
title: "Interface: Balance"
sidebar_label: "Balance"
---

[api/entities/Account/types](../../../../../../modules/API/Entities/Account/Types/Types.md).Balance

## Hierarchy

- **`Balance`**

  ↳ [`PortfolioBalance`](../../../Portfolio/Types/PortfolioBalance/PortfolioBalance.md)

## Properties

### free

• **free**: `BigNumber`

balance available for transferring and paying fees

#### Defined in

[api/entities/Account/types.ts:11](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b55e63737/src/api/entities/Account/types.ts#L11)

___

### locked

• **locked**: `BigNumber`

unavailable balance, either bonded for staking or locked for some other purpose

#### Defined in

[api/entities/Account/types.ts:15](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b55e63737/src/api/entities/Account/types.ts#L15)

___

### total

• **total**: `BigNumber`

free + locked

#### Defined in

[api/entities/Account/types.ts:19](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b55e63737/src/api/entities/Account/types.ts#L19)
