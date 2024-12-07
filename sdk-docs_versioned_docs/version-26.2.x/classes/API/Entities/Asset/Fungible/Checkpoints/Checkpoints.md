---
id: "Checkpoints"
title: "Class: Checkpoints"
sidebar_label: "Checkpoints"
---

[api/entities/Asset/Fungible/Checkpoints](../../../../../../modules/API/Entities/Asset/Fungible/Checkpoints/Checkpoints.md).Checkpoints

Handles all Asset Checkpoints related functionality

## Hierarchy

- `Namespace`\<[`FungibleAsset`](../FungibleAsset.md)\>

  ↳ **`Checkpoints`**

## Properties

### schedules

• **schedules**: [`Schedules`](Schedules/Schedules.md)

#### Defined in

[api/entities/Asset/Fungible/Checkpoints/index.ts:36](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c8da9dfce/src/api/entities/Asset/Fungible/Checkpoints/index.ts#L36)

## Methods

### create

▸ **create**(`opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<[`Checkpoint`](../../../Checkpoint/Checkpoint.md), [`Checkpoint`](../../../Checkpoint/Checkpoint.md)\>\>

Create a snapshot of Asset Holders and their respective balances at this moment

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`ProcedureOpts`](../../../../../../interfaces/API/Procedures/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<[`Checkpoint`](../../../Checkpoint/Checkpoint.md), [`Checkpoint`](../../../Checkpoint/Checkpoint.md)\>\>

**`Note`**

this method is of type [NoArgsProcedureMethod](../../../../../../interfaces/API/Procedures/Types/NoArgsProcedureMethod/NoArgsProcedureMethod.md), which means you can call [create.checkAuthorization](../../../../../../interfaces/API/Procedures/Types/NoArgsProcedureMethod/NoArgsProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/entities/Asset/Fungible/Checkpoints/index.ts:58](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c8da9dfce/src/api/entities/Asset/Fungible/Checkpoints/index.ts#L58)

___

### get

▸ **get**(`paginationOpts?`): `Promise`\<[`ResultSet`](../../../../../../interfaces/API/Entities/Types/ResultSet/ResultSet.md)\<[`CheckpointWithData`](../../../../../../interfaces/API/Entities/Types/CheckpointWithData/CheckpointWithData.md)\>\>

Retrieve all Checkpoints created on this Asset, together with their corresponding creation Date and Total Supply

#### Parameters

| Name | Type |
| :------ | :------ |
| `paginationOpts?` | [`PaginationOptions`](../../../../../../interfaces/API/Entities/Types/PaginationOptions/PaginationOptions.md) |

#### Returns

`Promise`\<[`ResultSet`](../../../../../../interfaces/API/Entities/Types/ResultSet/ResultSet.md)\<[`CheckpointWithData`](../../../../../../interfaces/API/Entities/Types/CheckpointWithData/CheckpointWithData.md)\>\>

**`Note`**

supports pagination

#### Defined in

[api/entities/Asset/Fungible/Checkpoints/index.ts:92](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c8da9dfce/src/api/entities/Asset/Fungible/Checkpoints/index.ts#L92)

___

### getOne

▸ **getOne**(`args`): `Promise`\<[`Checkpoint`](../../../Checkpoint/Checkpoint.md)\>

Retrieve a single Checkpoint for this Asset by its ID

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.id` | `BigNumber` |

#### Returns

`Promise`\<[`Checkpoint`](../../../Checkpoint/Checkpoint.md)\>

**`Throws`**

if there is no Checkpoint with the passed ID

#### Defined in

[api/entities/Asset/Fungible/Checkpoints/index.ts:67](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c8da9dfce/src/api/entities/Asset/Fungible/Checkpoints/index.ts#L67)
