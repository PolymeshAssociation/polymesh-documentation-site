[api/entities/Asset/Checkpoints](../../../../../Modules/API/Entities/Asset/Checkpoints.md).Checkpoints

Handles all Asset Checkpoints related functionality

## Hierarchy

- `Namespace`<[`Asset`](../Asset.md)\>

  ↳ **`Checkpoints`**

## Properties

### schedules

• **schedules**: [`Schedules`](Schedules/Schedules.md)

#### Defined in

[api/entities/Asset/Checkpoints/index.ts:29](https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/api/entities/Asset/Checkpoints/index.ts#L29)

## Methods

### create

▸ **create**(`opts?`): `Promise`<[`GenericPolymeshTransaction`](../../../../../Modules/Types/Types.md#genericpolymeshtransaction)<[`Checkpoint`](../../Checkpoint/Checkpoint.md), [`Checkpoint`](../../Checkpoint/Checkpoint.md)\>\>

Create a snapshot of Asset Holders and their respective balances at this moment

**`Note`**

this method is of type [NoArgsProcedureMethod](../../../../../Interfaces/Types/NoArgsProcedureMethod.md), which means you can call [create.checkAuthorization](../../../../../Interfaces/Types/NoArgsProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`ProcedureOpts`](../../../../../Interfaces/Types/ProcedureOpts.md) |

#### Returns

`Promise`<[`GenericPolymeshTransaction`](../../../../../Modules/Types/Types.md#genericpolymeshtransaction)<[`Checkpoint`](../../Checkpoint/Checkpoint.md), [`Checkpoint`](../../Checkpoint/Checkpoint.md)\>\>

___

### get

▸ **get**(`paginationOpts?`): `Promise`<[`ResultSet`](../../../../../Interfaces/Types/ResultSet.md)<[`CheckpointWithData`](../../../../../Interfaces/Types/CheckpointWithData.md)\>\>

Retrieve all Checkpoints created on this Asset, together with their corresponding creation Date and Total Supply

**`Note`**

supports pagination

#### Parameters

| Name | Type |
| :------ | :------ |
| `paginationOpts?` | [`PaginationOptions`](../../../../../Interfaces/Types/PaginationOptions.md) |

#### Returns

`Promise`<[`ResultSet`](../../../../../Interfaces/Types/ResultSet.md)<[`CheckpointWithData`](../../../../../Interfaces/Types/CheckpointWithData.md)\>\>

___

### getOne

▸ **getOne**(`args`): `Promise`<[`Checkpoint`](../../Checkpoint/Checkpoint.md)\>

Retrieve a single Checkpoint for this Asset by its ID

**`Throws`**

if there is no Checkpoint with the passed ID

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.id` | `BigNumber` |

#### Returns

`Promise`<[`Checkpoint`](../../Checkpoint/Checkpoint.md)\>
