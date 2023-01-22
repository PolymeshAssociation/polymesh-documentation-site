[api/entities/Asset/Offerings](../../../../../Modules/API/Entities/Asset/Offerings.md).Offerings

Handles all Asset Offering related functionality

## Hierarchy

- `Namespace`<[`Asset`](../Asset.md)\>

  ↳ **`Offerings`**

## Methods

### get

▸ **get**(`opts?`): `Promise`<[`OfferingWithDetails`](../../../../../Interfaces/Types/OfferingWithDetails.md)[]\>

Retrieve all of the Asset's Offerings and their details. Can be filtered using parameters

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `Object` | - |
| `opts.status?` | `Partial`<[`OfferingStatus`](../../../../../Interfaces/API/Entities/Offering/Types/OfferingStatus.md)\> | status of the Offerings to fetch. If defined, only Offerings that have all passed statuses will be returned |

#### Returns

`Promise`<[`OfferingWithDetails`](../../../../../Interfaces/Types/OfferingWithDetails.md)[]\>

___

### getOne

▸ **getOne**(`args`): `Promise`<[`Offering`](../../Offering/Offering.md)\>

Retrieve a single Offering associated to this Asset by its ID

**`Throws`**

if there is no Offering with the passed ID

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.id` | `BigNumber` |

#### Returns

`Promise`<[`Offering`](../../Offering/Offering.md)\>

___

### launch

▸ **launch**(`args`, `opts?`): `Promise`<[`GenericPolymeshTransaction`](../../../../../Modules/Types/Types.md#genericpolymeshtransaction)<[`Offering`](../../Offering/Offering.md), [`Offering`](../../Offering/Offering.md)\>\>

Launch an Asset Offering

**`Note`**

required roles:
  - Offering Portfolio Custodian
  - Raising Portfolio Custodian

**`Note`**

this method is of type [ProcedureMethod](../../../../../Interfaces/Types/ProcedureMethod.md), which means you can call [launch.checkAuthorization](../../../../../Interfaces/Types/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`LaunchOfferingParams`](../../../../../Interfaces/API/Procedures/Types/LaunchOfferingParams.md) |
| `opts?` | [`ProcedureOpts`](../../../../../Interfaces/Types/ProcedureOpts.md) |

#### Returns

`Promise`<[`GenericPolymeshTransaction`](../../../../../Modules/Types/Types.md#genericpolymeshtransaction)<[`Offering`](../../Offering/Offering.md), [`Offering`](../../Offering/Offering.md)\>\>
