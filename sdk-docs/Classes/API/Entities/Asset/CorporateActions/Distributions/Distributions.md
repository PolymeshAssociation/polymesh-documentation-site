[api/entities/Asset/CorporateActions/Distributions](../../../../../../Modules/API/Entities/Asset/CorporateActions/Distributions.md).Distributions

Handles all Asset Distributions related functionality

## Hierarchy

- `Namespace`<[`Asset`](../../Asset.md)\>

  ↳ **`Distributions`**

## Methods

### configureDividendDistribution

▸ **configureDividendDistribution**(`args`, `opts?`): `Promise`<[`GenericPolymeshTransaction`](../../../../../../Modules/Types/Types.md#genericpolymeshtransaction)<[`DividendDistribution`](../../../DividendDistribution/DividendDistribution.md), [`DividendDistribution`](../../../DividendDistribution/DividendDistribution.md)\>\>

Create a Dividend Distribution for a subset of the Asset Holders at a certain (existing or future) Checkpoint

**`Note`**

required role:
  - Origin Portfolio Custodian

**`Note`**

this method is of type [ProcedureMethod](../../../../../../Interfaces/Types/ProcedureMethod.md), which means you can call [configureDividendDistribution.checkAuthorization](../../../../../../Interfaces/Types/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`ConfigureDividendDistributionParams`](../../../../../../Interfaces/API/Procedures/Types/ConfigureDividendDistributionParams.md) |
| `opts?` | [`ProcedureOpts`](../../../../../../Interfaces/Types/ProcedureOpts.md) |

#### Returns

`Promise`<[`GenericPolymeshTransaction`](../../../../../../Modules/Types/Types.md#genericpolymeshtransaction)<[`DividendDistribution`](../../../DividendDistribution/DividendDistribution.md), [`DividendDistribution`](../../../DividendDistribution/DividendDistribution.md)\>\>

___

### get

▸ **get**(): `Promise`<[`DistributionWithDetails`](../../../../../../Interfaces/Types/DistributionWithDetails.md)[]\>

Retrieve all Dividend Distributions associated to this Asset, along with their details

#### Returns

`Promise`<[`DistributionWithDetails`](../../../../../../Interfaces/Types/DistributionWithDetails.md)[]\>

___

### getOne

▸ **getOne**(`args`): `Promise`<[`DistributionWithDetails`](../../../../../../Interfaces/Types/DistributionWithDetails.md)\>

Retrieve a single Dividend Distribution associated to this Asset by its ID

**`Throws`**

if there is no Distribution with the passed ID

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.id` | `BigNumber` |

#### Returns

`Promise`<[`DistributionWithDetails`](../../../../../../Interfaces/Types/DistributionWithDetails.md)\>
