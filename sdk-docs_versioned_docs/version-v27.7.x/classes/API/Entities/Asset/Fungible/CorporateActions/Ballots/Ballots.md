---
id: "Ballots"
title: "Class: Ballots"
sidebar_label: "Ballots"
---

[api/entities/Asset/Fungible/CorporateActions/Ballots](../../../../../../../modules/API/Entities/Asset/Fungible/CorporateActions/Ballots/Ballots.md).Ballots

Handles all Asset Ballots related functionality

## Hierarchy

- `Namespace`\<[`FungibleAsset`](../../FungibleAsset.md)\>

  ↳ **`Ballots`**

## Methods

### create

▸ **create**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<[`CorporateBallotWithDetails`](../../../../../../../interfaces/API/Entities/Types/CorporateBallotWithDetails/CorporateBallotWithDetails.md), [`CorporateBallotWithDetails`](../../../../../../../interfaces/API/Entities/Types/CorporateBallotWithDetails/CorporateBallotWithDetails.md)\>\>

Create a Ballot for an Asset

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`CreateBallotParams`](../../../../../../../interfaces/API/Procedures/Types/CreateBallotParams/CreateBallotParams.md) |
| `opts?` | [`ProcedureOpts`](../../../../../../../interfaces/API/Procedures/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<[`CorporateBallotWithDetails`](../../../../../../../interfaces/API/Entities/Types/CorporateBallotWithDetails/CorporateBallotWithDetails.md), [`CorporateBallotWithDetails`](../../../../../../../interfaces/API/Entities/Types/CorporateBallotWithDetails/CorporateBallotWithDetails.md)\>\>

**`Note`**

this method is of type [ProcedureMethod](../../../../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [create.checkAuthorization](../../../../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/entities/Asset/Fungible/CorporateActions/Ballots.ts:29](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9e72221/src/api/entities/Asset/Fungible/CorporateActions/Ballots.ts#L29)

___

### get

▸ **get**(): `Promise`\<[`CorporateBallotWithDetails`](../../../../../../../interfaces/API/Entities/Types/CorporateBallotWithDetails/CorporateBallotWithDetails.md)[]\>

Retrieve all Ballots associated to this Asset

#### Returns

`Promise`\<[`CorporateBallotWithDetails`](../../../../../../../interfaces/API/Entities/Types/CorporateBallotWithDetails/CorporateBallotWithDetails.md)[]\>

#### Defined in

[api/entities/Asset/Fungible/CorporateActions/Ballots.ts:78](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9e72221/src/api/entities/Asset/Fungible/CorporateActions/Ballots.ts#L78)

___

### getOne

▸ **getOne**(`args`): `Promise`\<[`CorporateBallotWithDetails`](../../../../../../../interfaces/API/Entities/Types/CorporateBallotWithDetails/CorporateBallotWithDetails.md)\>

Retrieve a single Ballot associated to this Asset by its ID

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.id` | `BigNumber` |

#### Returns

`Promise`\<[`CorporateBallotWithDetails`](../../../../../../../interfaces/API/Entities/Types/CorporateBallotWithDetails/CorporateBallotWithDetails.md)\>

**`Throws`**

if there is no Ballot assigned to the provided Corporate Action with the passed ID

**`Throws`**

if the provided Corporate Action does not exist

#### Defined in

[api/entities/Asset/Fungible/CorporateActions/Ballots.ts:51](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9e72221/src/api/entities/Asset/Fungible/CorporateActions/Ballots.ts#L51)
