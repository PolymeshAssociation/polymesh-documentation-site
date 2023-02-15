---
id: "Offerings"
title: "Class: Offerings"
sidebar_label: "Offerings"
---

[api/entities/Asset/Offerings](../../../../../modules/API/Entities/Asset/Offerings/Offerings.md).Offerings

Handles all Asset Offering related functionality

## Hierarchy

- `Namespace`<[`Asset`](../Asset.md)\>

  ↳ **`Offerings`**

## Methods

### get

▸ **get**(`opts?`): `Promise`<[`OfferingWithDetails`](../../../../../interfaces/Types/OfferingWithDetails/OfferingWithDetails.md)[]\>

Retrieve all of the Asset's Offerings and their details. Can be filtered using parameters

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `Object` | - |
| `opts.status?` | `Partial`<[`OfferingStatus`](../../../../../interfaces/API/Entities/Offering/Types/OfferingStatus/OfferingStatus.md)\> | status of the Offerings to fetch. If defined, only Offerings that have all passed statuses will be returned |

#### Returns

`Promise`<[`OfferingWithDetails`](../../../../../interfaces/Types/OfferingWithDetails/OfferingWithDetails.md)[]\>

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

▸ **launch**(`args`, `opts?`): `Promise`<[`GenericPolymeshTransaction`](../../../../../modules/Types/Types.md#genericpolymeshtransaction)<[`Offering`](../../Offering/Offering.md), [`Offering`](../../Offering/Offering.md)\>\>

Launch an Asset Offering

**`Note`**

 required roles:
  - Offering Portfolio Custodian
  - Raising Portfolio Custodian

**`Note`**

 this method is of type [ProcedureMethod](../../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [launch.checkAuthorization](../../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`LaunchOfferingParams`](../../../../../interfaces/API/Procedures/Types/LaunchOfferingParams/LaunchOfferingParams.md) |
| `opts?` | [`ProcedureOpts`](../../../../../interfaces/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`<[`GenericPolymeshTransaction`](../../../../../modules/Types/Types.md#genericpolymeshtransaction)<[`Offering`](../../Offering/Offering.md), [`Offering`](../../Offering/Offering.md)\>\>
