---
id: "Offerings"
title: "Class: Offerings"
sidebar_label: "Offerings"
---

[api/entities/Asset/Fungible/Offerings](../../../../../../modules/API/Entities/Asset/Fungible/Offerings/Offerings.md).Offerings

Handles all Asset Offering related functionality

## Hierarchy

- `Namespace`\<[`FungibleAsset`](../FungibleAsset.md)\>

  ↳ **`Offerings`**

## Methods

### get

▸ **get**(`opts?`): `Promise`\<[`OfferingWithDetails`](../../../../../../interfaces/API/Entities/Types/OfferingWithDetails/OfferingWithDetails.md)[]\>

Retrieve all of the Asset's Offerings and their details. Can be filtered using parameters

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `Object` | - |
| `opts.status?` | `Partial`\<[`OfferingStatus`](../../../../../../interfaces/API/Entities/Offering/Types/OfferingStatus/OfferingStatus.md)\> | status of the Offerings to fetch. If defined, only Offerings that have all passed statuses will be returned |

#### Returns

`Promise`\<[`OfferingWithDetails`](../../../../../../interfaces/API/Entities/Types/OfferingWithDetails/OfferingWithDetails.md)[]\>

#### Defined in

[api/entities/Asset/Fungible/Offerings/index.ts:84](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c8da9dfce/src/api/entities/Asset/Fungible/Offerings/index.ts#L84)

___

### getOne

▸ **getOne**(`args`): `Promise`\<[`Offering`](../../../Offering/Offering.md)\>

Retrieve a single Offering associated to this Asset by its ID

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.id` | `BigNumber` |

#### Returns

`Promise`\<[`Offering`](../../../Offering/Offering.md)\>

**`Throws`**

if there is no Offering with the passed ID

#### Defined in

[api/entities/Asset/Fungible/Offerings/index.ts:62](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c8da9dfce/src/api/entities/Asset/Fungible/Offerings/index.ts#L62)

___

### launch

▸ **launch**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<[`Offering`](../../../Offering/Offering.md), [`Offering`](../../../Offering/Offering.md)\>\>

Launch an Asset Offering

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`LaunchOfferingParams`](../../../../../../interfaces/API/Procedures/Types/LaunchOfferingParams/LaunchOfferingParams.md) |
| `opts?` | [`ProcedureOpts`](../../../../../../interfaces/API/Procedures/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<[`Offering`](../../../Offering/Offering.md), [`Offering`](../../../Offering/Offering.md)\>\>

**`Note`**

required roles:
  - Offering Portfolio Custodian
  - Raising Portfolio Custodian

**`Note`**

this method is of type [ProcedureMethod](../../../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [launch.checkAuthorization](../../../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/entities/Asset/Fungible/Offerings/index.ts:53](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c8da9dfce/src/api/entities/Asset/Fungible/Offerings/index.ts#L53)
