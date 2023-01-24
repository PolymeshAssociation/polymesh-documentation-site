[api/entities/Asset/Checkpoints/Schedules](../../../../../../Modules/API/Entities/Asset/Checkpoints/Schedules.md).Schedules

Handles all Asset Checkpoint Schedules related functionality

## Hierarchy

- `Namespace`<[`Asset`](../../Asset.md)\>

  ↳ **`Schedules`**

## Methods

### complexityOf

▸ **complexityOf**(`period`): `BigNumber`

Calculate an abstract measure of the complexity of a given Calendar Period

#### Parameters

| Name | Type |
| :------ | :------ |
| `period` | [`CalendarPeriod`](../../../../../../Interfaces/Types/CalendarPeriod.md) |

#### Returns

`BigNumber`

___

### create

▸ **create**(`args`, `opts?`): `Promise`<[`GenericPolymeshTransaction`](../../../../../../Modules/Types/Types.md#genericpolymeshtransaction)<[`CheckpointSchedule`](../../../CheckpointSchedule/CheckpointSchedule.md), [`CheckpointSchedule`](../../../CheckpointSchedule/CheckpointSchedule.md)\>\>

Create a schedule for Checkpoint creation (e.g. "Create a checkpoint every week for 5 weeks, starting next tuesday")

**`Note`**

due to chain limitations, schedules are advanced and (if appropriate) executed whenever the Asset is
  redeemed, issued or transferred between portfolios. This means that on an Asset without much movement, there may be disparities between intended Checkpoint creation dates
  and the actual date when they are created. This, however, has no effect on the Checkpoint's accuracy regarding to balances

**`Note`**

this method is of type [ProcedureMethod](../../../../../../Interfaces/Types/ProcedureMethod.md), which means you can call [create.checkAuthorization](../../../../../../Interfaces/Types/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`CreateCheckpointScheduleParams`](../../../../../../Interfaces/API/Procedures/Types/CreateCheckpointScheduleParams.md) |
| `opts?` | [`ProcedureOpts`](../../../../../../Interfaces/Types/ProcedureOpts.md) |

#### Returns

`Promise`<[`GenericPolymeshTransaction`](../../../../../../Modules/Types/Types.md#genericpolymeshtransaction)<[`CheckpointSchedule`](../../../CheckpointSchedule/CheckpointSchedule.md), [`CheckpointSchedule`](../../../CheckpointSchedule/CheckpointSchedule.md)\>\>

___

### currentComplexity

▸ **currentComplexity**(): `Promise`<`BigNumber`\>

Calculate the sum of the complexity of all current Checkpoint Schedules for this Asset.
  The number cannot exceed the Asset's maximum complexity (obtained via [maxComplexity](Schedules.md#maxcomplexity))

#### Returns

`Promise`<`BigNumber`\>

___

### get

▸ **get**(): `Promise`<[`ScheduleWithDetails`](../../../../../../Interfaces/Types/ScheduleWithDetails.md)[]\>

Retrieve all active Checkpoint Schedules

#### Returns

`Promise`<[`ScheduleWithDetails`](../../../../../../Interfaces/Types/ScheduleWithDetails.md)[]\>

___

### getOne

▸ **getOne**(`«destructured»`): `Promise`<[`ScheduleWithDetails`](../../../../../../Interfaces/Types/ScheduleWithDetails.md)\>

Retrieve a single Checkpoint Schedule associated to this Asset by its ID

**`Throws`**

if there is no Schedule with the passed ID

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `id` | `BigNumber` |

#### Returns

`Promise`<[`ScheduleWithDetails`](../../../../../../Interfaces/Types/ScheduleWithDetails.md)\>

___

### maxComplexity

▸ **maxComplexity**(): `Promise`<`BigNumber`\>

Retrieve the maximum allowed Schedule complexity for this Asset

#### Returns

`Promise`<`BigNumber`\>

___

### remove

▸ **remove**(`args`, `opts?`): `Promise`<[`GenericPolymeshTransaction`](../../../../../../Modules/Types/Types.md#genericpolymeshtransaction)<`void`, `void`\>\>

Remove the supplied Checkpoint Schedule for a given Asset

**`Note`**

this method is of type [ProcedureMethod](../../../../../../Interfaces/Types/ProcedureMethod.md), which means you can call [remove.checkAuthorization](../../../../../../Interfaces/Types/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`RemoveCheckpointScheduleParams`](../../../../../../Interfaces/API/Procedures/Types/RemoveCheckpointScheduleParams.md) |
| `opts?` | [`ProcedureOpts`](../../../../../../Interfaces/Types/ProcedureOpts.md) |

#### Returns

`Promise`<[`GenericPolymeshTransaction`](../../../../../../Modules/Types/Types.md#genericpolymeshtransaction)<`void`, `void`\>\>
