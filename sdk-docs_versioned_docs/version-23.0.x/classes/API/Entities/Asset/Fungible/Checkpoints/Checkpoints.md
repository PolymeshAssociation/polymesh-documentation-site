---
id: "Checkpoints"
title: "Class: Checkpoints"
sidebar_label: "Checkpoints"
---

[api/entities/Asset/Fungible/Checkpoints](../../../../../../modules/API/Entities/Asset/Fungible/Checkpoints/Checkpoints.md).Checkpoints

Handles all Asset Checkpoints related functionality

## Hierarchy

- `Namespace`<[`FungibleAsset`](../FungibleAsset.md)\>

  ↳ **`Checkpoints`**

## Properties

### schedules

• **schedules**: [`Schedules`](Schedules/Schedules.md)

#### Defined in

[api/entities/Asset/Fungible/Checkpoints/index.ts:36](https://github.com/PolymeshAssociation/polymesh-sdk/blob/720afb69c/src/api/entities/Asset/Fungible/Checkpoints/index.ts#L36)

## Methods

### create

▸ **create**(`opts?`): `Promise`<[`GenericPolymeshTransaction`](../../../../../../modules/Types/Types.md#genericpolymeshtransaction)<[`Checkpoint`](../../../Checkpoint/Checkpoint.md), [`Checkpoint`](../../../Checkpoint/Checkpoint.md)\>\>

Create a snapshot of Asset Holders and their respective balances at this moment

**`Note`**

 this method is of type [NoArgsProcedureMethod](../../../../../../interfaces/Types/NoArgsProcedureMethod/NoArgsProcedureMethod.md), which means you can call [create.checkAuthorization](../../../../../../interfaces/Types/NoArgsProcedureMethod/NoArgsProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`ProcedureOpts`](../../../../../../interfaces/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`<[`GenericPolymeshTransaction`](../../../../../../modules/Types/Types.md#genericpolymeshtransaction)<[`Checkpoint`](../../../Checkpoint/Checkpoint.md), [`Checkpoint`](../../../Checkpoint/Checkpoint.md)\>\>

___

### get

▸ **get**(`paginationOpts?`): `Promise`<[`ResultSet`](../../../../../../interfaces/Types/ResultSet/ResultSet.md)<[`CheckpointWithData`](../../../../../../interfaces/Types/CheckpointWithData/CheckpointWithData.md)\>\>

Retrieve all Checkpoints created on this Asset, together with their corresponding creation Date and Total Supply

**`Note`**

 supports pagination

#### Parameters

| Name | Type |
| :------ | :------ |
| `paginationOpts?` | [`PaginationOptions`](../../../../../../interfaces/Types/PaginationOptions/PaginationOptions.md) |

#### Returns

`Promise`<[`ResultSet`](../../../../../../interfaces/Types/ResultSet/ResultSet.md)<[`CheckpointWithData`](../../../../../../interfaces/Types/CheckpointWithData/CheckpointWithData.md)\>\>

___

### getOne

▸ **getOne**(`args`): `Promise`<[`Checkpoint`](../../../Checkpoint/Checkpoint.md)\>

Retrieve a single Checkpoint for this Asset by its ID

**`Throws`**

 if there is no Checkpoint with the passed ID

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.id` | `BigNumber` |

#### Returns

`Promise`<[`Checkpoint`](../../../Checkpoint/Checkpoint.md)\>
