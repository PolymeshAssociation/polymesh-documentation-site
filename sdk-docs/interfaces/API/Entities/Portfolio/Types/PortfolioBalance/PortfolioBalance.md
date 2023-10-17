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

• **asset**: [`FungibleAsset`](../../../../../../classes/API/Entities/Asset/Fungible/FungibleAsset.md)

#### Defined in

[api/entities/Portfolio/types.ts:9](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b6f9fb883/src/api/entities/Portfolio/types.ts#L9)

___

### free

• **free**: `BigNumber`

balance available for transferring and paying fees

#### Inherited from

[Balance](../../../../../Types/Balance/Balance.md).[free](../../../../../Types/Balance/Balance.md#free)

#### Defined in

[types/index.ts:742](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b6f9fb883/src/types/index.ts#L742)

___

### locked

• **locked**: `BigNumber`

unavailable balance, either bonded for staking or locked for some other purpose

#### Inherited from

[Balance](../../../../../Types/Balance/Balance.md).[locked](../../../../../Types/Balance/Balance.md#locked)

#### Defined in

[types/index.ts:746](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b6f9fb883/src/types/index.ts#L746)

___

### total

• **total**: `BigNumber`

free + locked

#### Inherited from

[Balance](../../../../../Types/Balance/Balance.md).[total](../../../../../Types/Balance/Balance.md#total)

#### Defined in

[types/index.ts:750](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b6f9fb883/src/types/index.ts#L750)
