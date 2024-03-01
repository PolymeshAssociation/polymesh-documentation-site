---
id: "PortfolioBalance"
title: "Interface: PortfolioBalance"
sidebar_label: "PortfolioBalance"
---

[api/entities/Portfolio/types](../../../../../../modules/API/Entities/Portfolio/Types/Types.md).PortfolioBalance

## Hierarchy

- [`Balance`](../../../../../Types/Balance/Balance.md)

  ↳ **`PortfolioBalance`**

## Properties

### asset

• **asset**: [`Asset`](../../../../../../classes/API/Entities/Asset/Asset.md)

#### Defined in

[api/entities/Portfolio/types.ts:11](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/Portfolio/types.ts#L11)

___

### free

• **free**: `BigNumber`

balance available for transferring and paying fees

#### Inherited from

[Balance](../../../../../Types/Balance/Balance.md).[free](../../../../../Types/Balance/Balance.md#free)

#### Defined in

[types/index.ts:727](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/types/index.ts#L727)

___

### locked

• **locked**: `BigNumber`

unavailable balance, either bonded for staking or locked for some other purpose

#### Inherited from

[Balance](../../../../../Types/Balance/Balance.md).[locked](../../../../../Types/Balance/Balance.md#locked)

#### Defined in

[types/index.ts:731](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/types/index.ts#L731)

___

### total

• **total**: `BigNumber`

free + locked

#### Inherited from

[Balance](../../../../../Types/Balance/Balance.md).[total](../../../../../Types/Balance/Balance.md#total)

#### Defined in

[types/index.ts:735](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/types/index.ts#L735)
