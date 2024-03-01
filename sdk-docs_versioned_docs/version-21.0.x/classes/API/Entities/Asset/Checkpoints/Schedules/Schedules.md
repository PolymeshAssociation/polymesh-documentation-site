---
id: 'Schedules'
title: 'Class: Schedules'
sidebar_label: 'Schedules'
---

[api/entities/Asset/Checkpoints/Schedules](../../../../../../modules/API/Entities/Asset/Checkpoints/Schedules/Schedules.md).Schedules

Handles all Asset Checkpoint Schedules related functionality

## Hierarchy

- `Namespace`\<[`Asset`](../../Asset.md)\>

  ↳ **`Schedules`**

## Methods

### complexityOf

▸ **complexityOf**(`period`): `BigNumber`

Calculate an abstract measure of the complexity of a given Calendar Period

#### Parameters

| Name     | Type                                                                                    |
| :------- | :-------------------------------------------------------------------------------------- |
| `period` | [`CalendarPeriod`](../../../../../../interfaces/Types/CalendarPeriod/CalendarPeriod.md) |

#### Returns

`BigNumber`

#### Defined in

[api/entities/Asset/Checkpoints/Schedules.ts:131](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/Asset/Checkpoints/Schedules.ts#L131)

---

### create

▸ **create**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../../../modules/Types/Types.md#genericpolymeshtransaction) \<[`CheckpointSchedule`](../../../CheckpointSchedule/CheckpointSchedule.md), [`CheckpointSchedule`](../../../CheckpointSchedule/CheckpointSchedule.md)\>\>

Create a schedule for Checkpoint creation (e.g. "Create a checkpoint every week for 5 weeks, starting next tuesday")

#### Parameters

| Name    | Type                                                                                                                                                   |
| :------ | :----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `args`  | [`CreateCheckpointScheduleParams`](../../../../../../interfaces/API/Procedures/Types/CreateCheckpointScheduleParams/CreateCheckpointScheduleParams.md) |
| `opts?` | [`ProcedureOpts`](../../../../../../interfaces/Types/ProcedureOpts/ProcedureOpts.md)                                                                   |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../../../modules/Types/Types.md#genericpolymeshtransaction) \<[`CheckpointSchedule`](../../../CheckpointSchedule/CheckpointSchedule.md), [`CheckpointSchedule`](../../../CheckpointSchedule/CheckpointSchedule.md)\>\>

**`Note`**

due to chain limitations, schedules are advanced and (if appropriate) executed whenever the Asset is
redeemed, issued or transferred between portfolios. This means that on an Asset without much movement, there may be disparities between intended Checkpoint creation dates
and the actual date when they are created. This, however, has no effect on the Checkpoint's accuracy regarding to balances

**`Note`**

this method is of type [ProcedureMethod](../../../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [create.checkAuthorization](../../../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/entities/Asset/Checkpoints/Schedules.ts:61](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/Asset/Checkpoints/Schedules.ts#L61)

---

### currentComplexity

▸ **currentComplexity**(): `Promise`\<`BigNumber`\>

Calculate the sum of the complexity of all current Checkpoint Schedules for this Asset.
The number cannot exceed the Asset's maximum complexity (obtained via [maxComplexity](Schedules.md#maxcomplexity))

#### Returns

`Promise`\<`BigNumber`\>

#### Defined in

[api/entities/Asset/Checkpoints/Schedules.ts:139](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/Asset/Checkpoints/Schedules.ts#L139)

---

### get

▸ **get**(): `Promise`\<[`ScheduleWithDetails`](../../../../../../interfaces/Types/ScheduleWithDetails/ScheduleWithDetails.md)[]\>

Retrieve all active Checkpoint Schedules

#### Returns

`Promise`\<[`ScheduleWithDetails`](../../../../../../interfaces/Types/ScheduleWithDetails/ScheduleWithDetails.md)[]\>

#### Defined in

[api/entities/Asset/Checkpoints/Schedules.ts:98](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/Asset/Checkpoints/Schedules.ts#L98)

---

### getOne

▸ **getOne**(`«destructured»`): `Promise`\<[`ScheduleWithDetails`](../../../../../../interfaces/Types/ScheduleWithDetails/ScheduleWithDetails.md)\>

Retrieve a single Checkpoint Schedule associated to this Asset by its ID

#### Parameters

| Name             | Type        |
| :--------------- | :---------- |
| `«destructured»` | `Object`    |
| › `id`           | `BigNumber` |

#### Returns

`Promise`\<[`ScheduleWithDetails`](../../../../../../interfaces/Types/ScheduleWithDetails/ScheduleWithDetails.md)\>

**`Throws`**

if there is no Schedule with the passed ID

#### Defined in

[api/entities/Asset/Checkpoints/Schedules.ts:80](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/Asset/Checkpoints/Schedules.ts#L80)

---

### maxComplexity

▸ **maxComplexity**(): `Promise`\<`BigNumber`\>

Retrieve the maximum allowed Schedule complexity for this Asset

#### Returns

`Promise`\<`BigNumber`\>

#### Defined in

[api/entities/Asset/Checkpoints/Schedules.ts:148](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/Asset/Checkpoints/Schedules.ts#L148)

---

### remove

▸ **remove**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../../../modules/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

Remove the supplied Checkpoint Schedule for a given Asset

#### Parameters

| Name    | Type                                                                                                                                                   |
| :------ | :----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `args`  | [`RemoveCheckpointScheduleParams`](../../../../../../interfaces/API/Procedures/Types/RemoveCheckpointScheduleParams/RemoveCheckpointScheduleParams.md) |
| `opts?` | [`ProcedureOpts`](../../../../../../interfaces/Types/ProcedureOpts/ProcedureOpts.md)                                                                   |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../../../modules/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

**`Note`**

this method is of type [ProcedureMethod](../../../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [remove.checkAuthorization](../../../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/entities/Asset/Checkpoints/Schedules.ts:71](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/Asset/Checkpoints/Schedules.ts#L71)
