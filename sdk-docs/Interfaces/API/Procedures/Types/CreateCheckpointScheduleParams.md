[api/procedures/types](../../../../Modules/API/Procedures/Types.md).CreateCheckpointScheduleParams

## Properties

### period

• **period**: ``null`` \| [`CalendarPeriod`](../../../Types/CalendarPeriod.md)

The cadence with which to make Checkpoints.

**`Note`**

A null value indicates to create only one Checkpoint, regardless of repetitions specified. This can be used to schedule the creation of a Checkpoint in the future

#### Defined in

[api/procedures/types.ts:540](https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/api/procedures/types.ts#L540)

___

### repetitions

• **repetitions**: ``null`` \| `BigNumber`

The number of snapshots to take. A null value indicates snapshots should be made indefinitely

#### Defined in

[api/procedures/types.ts:544](https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/api/procedures/types.ts#L544)

___

### start

• **start**: ``null`` \| `Date`

The date from which to begin creating snapshots. A null value indicates immediately

#### Defined in

[api/procedures/types.ts:535](https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/api/procedures/types.ts#L535)
