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

[api/entities/Portfolio/types.ts:11](https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/api/entities/Portfolio/types.ts#L11)

___

### free

• **free**: `BigNumber`

balance available for transferring and paying fees

#### Inherited from

[Balance](../../../../../Types/Balance/Balance.md).[free](../../../../../Types/Balance/Balance.md#free)

#### Defined in

[types/index.ts:704](https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/types/index.ts#L704)

___

### locked

• **locked**: `BigNumber`

unavailable balance, either bonded for staking or locked for some other purpose

#### Inherited from

[Balance](../../../../../Types/Balance/Balance.md).[locked](../../../../../Types/Balance/Balance.md#locked)

#### Defined in

[types/index.ts:708](https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/types/index.ts#L708)

___

### total

• **total**: `BigNumber`

free + locked

#### Inherited from

[Balance](../../../../../Types/Balance/Balance.md).[total](../../../../../Types/Balance/Balance.md#total)

#### Defined in

[types/index.ts:712](https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/types/index.ts#L712)
