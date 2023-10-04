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

[api/entities/Portfolio/types.ts:9](https://github.com/PolymeshAssociation/polymesh-sdk/blob/de58d40fd/src/api/entities/Portfolio/types.ts#L9)

___

### free

• **free**: `BigNumber`

balance available for transferring and paying fees

#### Inherited from

[Balance](../../../../../Types/Balance/Balance.md).[free](../../../../../Types/Balance/Balance.md#free)

#### Defined in

[types/index.ts:733](https://github.com/PolymeshAssociation/polymesh-sdk/blob/de58d40fd/src/types/index.ts#L733)

___

### locked

• **locked**: `BigNumber`

unavailable balance, either bonded for staking or locked for some other purpose

#### Inherited from

[Balance](../../../../../Types/Balance/Balance.md).[locked](../../../../../Types/Balance/Balance.md#locked)

#### Defined in

[types/index.ts:737](https://github.com/PolymeshAssociation/polymesh-sdk/blob/de58d40fd/src/types/index.ts#L737)

___

### total

• **total**: `BigNumber`

free + locked

#### Inherited from

[Balance](../../../../../Types/Balance/Balance.md).[total](../../../../../Types/Balance/Balance.md#total)

#### Defined in

[types/index.ts:741](https://github.com/PolymeshAssociation/polymesh-sdk/blob/de58d40fd/src/types/index.ts#L741)
