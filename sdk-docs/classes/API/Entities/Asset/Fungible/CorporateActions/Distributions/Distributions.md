---
id: 'Distributions'
title: 'Class: Distributions'
sidebar_label: 'Distributions'
---

[api/entities/Asset/Fungible/CorporateActions/Distributions](../../../../../../../modules/API/Entities/Asset/Fungible/CorporateActions/Distributions/Distributions.md).Distributions

Handles all Asset Distributions related functionality

## Hierarchy

- `Namespace`\<[`FungibleAsset`](../../FungibleAsset.md)\>

  ↳ **`Distributions`**

## Methods

### configureDividendDistribution

▸ **configureDividendDistribution**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../../../../modules/Types/Types.md#genericpolymeshtransaction) \<[`DividendDistribution`](../../../../DividendDistribution/DividendDistribution.md), [`DividendDistribution`](../../../../DividendDistribution/DividendDistribution.md)\>\>

Create a Dividend Distribution for a subset of the Asset Holders at a certain (existing or future) Checkpoint

#### Parameters

| Name    | Type                                                                                                                                                                     |
| :------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `args`  | [`ConfigureDividendDistributionParams`](../../../../../../../interfaces/API/Procedures/Types/ConfigureDividendDistributionParams/ConfigureDividendDistributionParams.md) |
| `opts?` | [`ProcedureOpts`](../../../../../../../interfaces/Types/ProcedureOpts/ProcedureOpts.md)                                                                                  |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../../../../modules/Types/Types.md#genericpolymeshtransaction) \<[`DividendDistribution`](../../../../DividendDistribution/DividendDistribution.md), [`DividendDistribution`](../../../../DividendDistribution/DividendDistribution.md)\>\>

**`Note`**

required role:

- Origin Portfolio Custodian

**`Note`**

this method is of type [ProcedureMethod](../../../../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [configureDividendDistribution.checkAuthorization](../../../../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/entities/Asset/Fungible/CorporateActions/Distributions.ts:42](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/api/entities/Asset/Fungible/CorporateActions/Distributions.ts#L42)

---

### get

▸ **get**(): `Promise`\<[`DistributionWithDetails`](../../../../../../../interfaces/Types/DistributionWithDetails/DistributionWithDetails.md)[]\>

Retrieve all Dividend Distributions associated to this Asset, along with their details

#### Returns

`Promise`\<[`DistributionWithDetails`](../../../../../../../interfaces/Types/DistributionWithDetails/DistributionWithDetails.md)[]\>

#### Defined in

[api/entities/Asset/Fungible/CorporateActions/Distributions.ts:117](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/api/entities/Asset/Fungible/CorporateActions/Distributions.ts#L117)

---

### getOne

▸ **getOne**(`args`): `Promise`\<[`DistributionWithDetails`](../../../../../../../interfaces/Types/DistributionWithDetails/DistributionWithDetails.md)\>

Retrieve a single Dividend Distribution associated to this Asset by its ID

#### Parameters

| Name      | Type        |
| :-------- | :---------- |
| `args`    | `Object`    |
| `args.id` | `BigNumber` |

#### Returns

`Promise`\<[`DistributionWithDetails`](../../../../../../../interfaces/Types/DistributionWithDetails/DistributionWithDetails.md)\>

**`Throws`**

if there is no Distribution with the passed ID

#### Defined in

[api/entities/Asset/Fungible/CorporateActions/Distributions.ts:65](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/api/entities/Asset/Fungible/CorporateActions/Distributions.ts#L65)
