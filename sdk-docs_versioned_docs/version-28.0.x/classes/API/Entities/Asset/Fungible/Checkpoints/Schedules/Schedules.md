---
id: "Schedules"
title: "Class: Schedules"
sidebar_label: "Schedules"
---

[api/entities/Asset/Fungible/Checkpoints/Schedules](../../../../../../../modules/API/Entities/Asset/Fungible/Checkpoints/Schedules/Schedules.md).Schedules

Handles all Asset Checkpoint Schedules related functionality

## Hierarchy

- `Namespace`\<[`FungibleAsset`](../../FungibleAsset.md)\>

  ↳ **`Schedules`**

## Methods

### create

▸ **create**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<[`CheckpointSchedule`](../../../../CheckpointSchedule/CheckpointSchedule.md), [`CheckpointSchedule`](../../../../CheckpointSchedule/CheckpointSchedule.md)\>\>

Create a schedule for Checkpoint creation (e.g. "Create a checkpoint every week for 5 weeks, starting next tuesday")

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`CreateCheckpointScheduleParams`](../../../../../../../interfaces/API/Procedures/Types/CreateCheckpointScheduleParams/CreateCheckpointScheduleParams.md) |
| `opts?` | [`ProcedureOpts`](../../../../../../../interfaces/API/Procedures/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<[`CheckpointSchedule`](../../../../CheckpointSchedule/CheckpointSchedule.md), [`CheckpointSchedule`](../../../../CheckpointSchedule/CheckpointSchedule.md)\>\>

**`Note`**

⚠️ Chain v6 introduces changes in how checkpoints are created. Only a set amount of points can be specified, infinitely repeating schedules are deprecated

**`Note`**

due to chain limitations, schedules are advanced and (if appropriate) executed whenever the Asset is
  redeemed, issued or transferred between portfolios. This means that on an Asset without much movement, there may be disparities between intended Checkpoint creation dates
  and the actual date when they are created. This, however, has no effect on the Checkpoint's accuracy regarding to balances

**`Note`**

this method is of type [ProcedureMethod](../../../../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [create.checkAuthorization](../../../../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/entities/Asset/Fungible/Checkpoints/Schedules.ts:55](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/Asset/Fungible/Checkpoints/Schedules.ts#L55)

___

### get

▸ **get**(): `Promise`\<[`ScheduleWithDetails`](../../../../../../../interfaces/API/Entities/Types/ScheduleWithDetails/ScheduleWithDetails.md)[]\>

Retrieve all active Checkpoint Schedules

#### Returns

`Promise`\<[`ScheduleWithDetails`](../../../../../../../interfaces/API/Entities/Types/ScheduleWithDetails/ScheduleWithDetails.md)[]\>

#### Defined in

[api/entities/Asset/Fungible/Checkpoints/Schedules.ts:92](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/Asset/Fungible/Checkpoints/Schedules.ts#L92)

___

### getOne

▸ **getOne**(`«destructured»`): `Promise`\<[`ScheduleWithDetails`](../../../../../../../interfaces/API/Entities/Types/ScheduleWithDetails/ScheduleWithDetails.md)\>

Retrieve a single Checkpoint Schedule associated to this Asset by its ID

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `id` | `BigNumber` |

#### Returns

`Promise`\<[`ScheduleWithDetails`](../../../../../../../interfaces/API/Entities/Types/ScheduleWithDetails/ScheduleWithDetails.md)\>

**`Throws`**

if there is no Schedule with the passed ID

#### Defined in

[api/entities/Asset/Fungible/Checkpoints/Schedules.ts:74](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/Asset/Fungible/Checkpoints/Schedules.ts#L74)

___

### maxComplexity

▸ **maxComplexity**(): `Promise`\<`BigNumber`\>

Retrieve the maximum allowed Schedule complexity for this Asset

#### Returns

`Promise`\<`BigNumber`\>

#### Defined in

[api/entities/Asset/Fungible/Checkpoints/Schedules.ts:135](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/Asset/Fungible/Checkpoints/Schedules.ts#L135)

___

### remove

▸ **remove**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

Remove the supplied Checkpoint Schedule for a given Asset

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`RemoveCheckpointScheduleParams`](../../../../../../../interfaces/API/Procedures/Types/RemoveCheckpointScheduleParams/RemoveCheckpointScheduleParams.md) |
| `opts?` | [`ProcedureOpts`](../../../../../../../interfaces/API/Procedures/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

**`Note`**

this method is of type [ProcedureMethod](../../../../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [remove.checkAuthorization](../../../../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/entities/Asset/Fungible/Checkpoints/Schedules.ts:65](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/Asset/Fungible/Checkpoints/Schedules.ts#L65)
