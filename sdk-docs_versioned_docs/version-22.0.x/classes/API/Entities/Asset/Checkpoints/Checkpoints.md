---
id: 'Checkpoints'
title: 'Class: Checkpoints'
sidebar_label: 'Checkpoints'
---

[api/entities/Asset/Checkpoints](../../../../../modules/API/Entities/Asset/Checkpoints/Checkpoints.md).Checkpoints

Handles all Asset Checkpoints related functionality

## Hierarchy

- `Namespace`\<[`Asset`](../Asset.md)\>

  ↳ **`Checkpoints`**

## Properties

### schedules

• **schedules**: [`Schedules`](Schedules/Schedules.md)

#### Defined in

[api/entities/Asset/Checkpoints/index.ts:29](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2d3ac2aea/src/api/entities/Asset/Checkpoints/index.ts#L29)

## Methods

### create

▸ **create**(`opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../../modules/Types/Types.md#genericpolymeshtransaction) \<[`Checkpoint`](../../Checkpoint/Checkpoint.md), [`Checkpoint`](../../Checkpoint/Checkpoint.md)\>\>

Create a snapshot of Asset Holders and their respective balances at this moment

#### Parameters

| Name    | Type                                                                              |
| :------ | :-------------------------------------------------------------------------------- |
| `opts?` | [`ProcedureOpts`](../../../../../interfaces/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../../modules/Types/Types.md#genericpolymeshtransaction) \<[`Checkpoint`](../../Checkpoint/Checkpoint.md), [`Checkpoint`](../../Checkpoint/Checkpoint.md)\>\>

**`Note`**

this method is of type [NoArgsProcedureMethod](../../../../../interfaces/Types/NoArgsProcedureMethod/NoArgsProcedureMethod.md), which means you can call [create.checkAuthorization](../../../../../interfaces/Types/NoArgsProcedureMethod/NoArgsProcedureMethod.md#checkauthorization)
on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/entities/Asset/Checkpoints/index.ts:53](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2d3ac2aea/src/api/entities/Asset/Checkpoints/index.ts#L53)

---

### get

▸ **get**(`paginationOpts?`): `Promise`\<[`ResultSet`](../../../../../interfaces/Types/ResultSet/ResultSet.md) \<[`CheckpointWithData`](../../../../../interfaces/Types/CheckpointWithData/CheckpointWithData.md)\>\>

Retrieve all Checkpoints created on this Asset, together with their corresponding creation Date and Total Supply

#### Parameters

| Name              | Type                                                                                          |
| :---------------- | :-------------------------------------------------------------------------------------------- |
| `paginationOpts?` | [`PaginationOptions`](../../../../../interfaces/Types/PaginationOptions/PaginationOptions.md) |

#### Returns

`Promise`\<[`ResultSet`](../../../../../interfaces/Types/ResultSet/ResultSet.md) \<[`CheckpointWithData`](../../../../../interfaces/Types/CheckpointWithData/CheckpointWithData.md)\>\>

**`Note`**

supports pagination

#### Defined in

[api/entities/Asset/Checkpoints/index.ts:87](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2d3ac2aea/src/api/entities/Asset/Checkpoints/index.ts#L87)

---

### getOne

▸ **getOne**(`args`): `Promise`\<[`Checkpoint`](../../Checkpoint/Checkpoint.md)\>

Retrieve a single Checkpoint for this Asset by its ID

#### Parameters

| Name      | Type        |
| :-------- | :---------- |
| `args`    | `Object`    |
| `args.id` | `BigNumber` |

#### Returns

`Promise`\<[`Checkpoint`](../../Checkpoint/Checkpoint.md)\>

**`Throws`**

if there is no Checkpoint with the passed ID

#### Defined in

[api/entities/Asset/Checkpoints/index.ts:62](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2d3ac2aea/src/api/entities/Asset/Checkpoints/index.ts#L62)
