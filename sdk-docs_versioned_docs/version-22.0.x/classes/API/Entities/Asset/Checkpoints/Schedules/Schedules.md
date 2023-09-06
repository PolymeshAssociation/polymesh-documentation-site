---
id: "Schedules"
title: "Class: Schedules"
sidebar_label: "Schedules"
---

[api/entities/Asset/Checkpoints/Schedules](../../../../../../modules/API/Entities/Asset/Checkpoints/Schedules/Schedules.md).Schedules

Handles all Asset Checkpoint Schedules related functionality

## Hierarchy

- `Namespace`<[`Asset`](../../Asset.md)\>

  ↳ **`Schedules`**

## Methods

### create

▸ **create**(`args`, `opts?`): `Promise`<[`GenericPolymeshTransaction`](../../../../../../modules/Types/Types.md#genericpolymeshtransaction)<[`CheckpointSchedule`](../../../CheckpointSchedule/CheckpointSchedule.md), [`CheckpointSchedule`](../../../CheckpointSchedule/CheckpointSchedule.md)\>\>

Create a schedule for Checkpoint creation (e.g. "Create a checkpoint every week for 5 weeks, starting next tuesday")

**`Note`**

 ⚠️ Chain v6 introduces changes in how checkpoints are created. Only a set amount of points can be specified, infinitely repeating schedules are deprecated

**`Note`**

 due to chain limitations, schedules are advanced and (if appropriate) executed whenever the Asset is
  redeemed, issued or transferred between portfolios. This means that on an Asset without much movement, there may be disparities between intended Checkpoint creation dates
  and the actual date when they are created. This, however, has no effect on the Checkpoint's accuracy regarding to balances

**`Note`**

 this method is of type [ProcedureMethod](../../../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [create.checkAuthorization](../../../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`CreateCheckpointScheduleParams`](../../../../../../interfaces/API/Procedures/Types/CreateCheckpointScheduleParams/CreateCheckpointScheduleParams.md) |
| `opts?` | [`ProcedureOpts`](../../../../../../interfaces/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`<[`GenericPolymeshTransaction`](../../../../../../modules/Types/Types.md#genericpolymeshtransaction)<[`CheckpointSchedule`](../../../CheckpointSchedule/CheckpointSchedule.md), [`CheckpointSchedule`](../../../CheckpointSchedule/CheckpointSchedule.md)\>\>

___

### get

▸ **get**(): `Promise`<[`ScheduleWithDetails`](../../../../../../interfaces/Types/ScheduleWithDetails/ScheduleWithDetails.md)[]\>

Retrieve all active Checkpoint Schedules

#### Returns

`Promise`<[`ScheduleWithDetails`](../../../../../../interfaces/Types/ScheduleWithDetails/ScheduleWithDetails.md)[]\>

___

### getOne

▸ **getOne**(`__namedParameters`): `Promise`<[`ScheduleWithDetails`](../../../../../../interfaces/Types/ScheduleWithDetails/ScheduleWithDetails.md)\>

Retrieve a single Checkpoint Schedule associated to this Asset by its ID

**`Throws`**

 if there is no Schedule with the passed ID

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.id` | `BigNumber` |

#### Returns

`Promise`<[`ScheduleWithDetails`](../../../../../../interfaces/Types/ScheduleWithDetails/ScheduleWithDetails.md)\>

___

### maxComplexity

▸ **maxComplexity**(): `Promise`<`BigNumber`\>

Retrieve the maximum allowed Schedule complexity for this Asset

#### Returns

`Promise`<`BigNumber`\>

___

### remove

▸ **remove**(`args`, `opts?`): `Promise`<[`GenericPolymeshTransaction`](../../../../../../modules/Types/Types.md#genericpolymeshtransaction)<`void`, `void`\>\>

Remove the supplied Checkpoint Schedule for a given Asset

**`Note`**

 this method is of type [ProcedureMethod](../../../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [remove.checkAuthorization](../../../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`RemoveCheckpointScheduleParams`](../../../../../../interfaces/API/Procedures/Types/RemoveCheckpointScheduleParams/RemoveCheckpointScheduleParams.md) |
| `opts?` | [`ProcedureOpts`](../../../../../../interfaces/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`<[`GenericPolymeshTransaction`](../../../../../../modules/Types/Types.md#genericpolymeshtransaction)<`void`, `void`\>\>
