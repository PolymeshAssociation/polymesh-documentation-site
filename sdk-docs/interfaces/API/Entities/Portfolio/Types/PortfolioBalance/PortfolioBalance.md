---
id: "PortfolioBalance"
title: "Interface: PortfolioBalance"
sidebar_label: "PortfolioBalance"
---

[api/entities/Portfolio/types](../../../../../../modules/API/Entities/Portfolio/Types/Types.md).PortfolioBalance

## Hierarchy

- [`Balance`](../../../Account/Types/Balance/Balance.md)

  ↳ **`PortfolioBalance`**

## Properties

### asset

• **asset**: [`FungibleAsset`](../../../../../../classes/API/Entities/Asset/Fungible/FungibleAsset.md)

#### Defined in

[api/entities/Portfolio/types.ts:8](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c53723bab/src/api/entities/Portfolio/types.ts#L8)

___

### free

• **free**: `BigNumber`

balance available for transferring and paying fees

#### Inherited from

[Balance](../../../Account/Types/Balance/Balance.md).[free](../../../Account/Types/Balance/Balance.md#free)

#### Defined in

[api/entities/Account/types.ts:11](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c53723bab/src/api/entities/Account/types.ts#L11)

___

### locked

• **locked**: `BigNumber`

unavailable balance, either bonded for staking or locked for some other purpose

#### Inherited from

[Balance](../../../Account/Types/Balance/Balance.md).[locked](../../../Account/Types/Balance/Balance.md#locked)

#### Defined in

[api/entities/Account/types.ts:15](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c53723bab/src/api/entities/Account/types.ts#L15)

___

### total

• **total**: `BigNumber`

free + locked

#### Inherited from

[Balance](../../../Account/Types/Balance/Balance.md).[total](../../../Account/Types/Balance/Balance.md#total)

#### Defined in

[api/entities/Account/types.ts:19](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c53723bab/src/api/entities/Account/types.ts#L19)
