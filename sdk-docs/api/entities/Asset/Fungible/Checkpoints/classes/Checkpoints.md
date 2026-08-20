# Class: Checkpoints

> Defined in: [src/api/entities/Asset/Fungible/Checkpoints/index.ts:33](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Asset/Fungible/Checkpoints/index.ts#L33)

# Class: Checkpoints

Defined in: [src/api/entities/Asset/Fungible/Checkpoints/index.ts:33](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Asset/Fungible/Checkpoints/index.ts#L33)

Handles all Asset Checkpoints related functionality

## Extends

- `Namespace`\<[`FungibleAsset`](../../classes/FungibleAsset.mdx)\>

## Properties

### schedules

> **schedules**: [`Schedules`](../Schedules/classes/Schedules.mdx)

Defined in: [src/api/entities/Asset/Fungible/Checkpoints/index.ts:34](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Asset/Fungible/Checkpoints/index.ts#L34)

## Methods

### create()

> **create**(`opts?`: [`ProcedureOpts`](../../../../../procedures/types/interfaces/ProcedureOpts.mdx)): `Promise`\<[`GenericPolymeshTransaction`](../../../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<[`Checkpoint`](../../../../Checkpoint/classes/Checkpoint.mdx), [`Checkpoint`](../../../../Checkpoint/classes/Checkpoint.mdx)\>\>

Defined in: [src/api/entities/Asset/Fungible/Checkpoints/index.ts:53](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Asset/Fungible/Checkpoints/index.ts#L53)

Create a snapshot of Asset Holders and their respective balances at this moment

#### Parameters

Parameter
Type

`opts?`

[`ProcedureOpts`](../../../../../procedures/types/interfaces/ProcedureOpts.mdx)

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<[`Checkpoint`](../../../../Checkpoint/classes/Checkpoint.mdx), [`Checkpoint`](../../../../Checkpoint/classes/Checkpoint.mdx)\>\>

#### Note

this method is of type [NoArgsProcedureMethod](../../../../../procedures/types/interfaces/NoArgsProcedureMethod.mdx), which means you can call [create.checkAuthorization](../../../../../procedures/types/interfaces/NoArgsProcedureMethod.mdx#checkauthorization) on it to see whether the signing Account and Identity have the required roles and permissions to run it

***

### get()

> **get**(`paginationOpts?`: [`PaginationOptions`](../../../../types/interfaces/PaginationOptions.mdx)): `Promise`\<[`ResultSet`](../../../../types/interfaces/ResultSet.mdx)\<[`CheckpointWithData`](../../../../types/interfaces/CheckpointWithData.mdx)\>\>

Defined in: [src/api/entities/Asset/Fungible/Checkpoints/index.ts:85](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Asset/Fungible/Checkpoints/index.ts#L85)

Retrieve all Checkpoints created on this Asset, together with their corresponding creation Date and Total Supply

#### Parameters

Parameter
Type

`paginationOpts?`

[`PaginationOptions`](../../../../types/interfaces/PaginationOptions.mdx)

#### Returns

`Promise`\<[`ResultSet`](../../../../types/interfaces/ResultSet.mdx)\<[`CheckpointWithData`](../../../../types/interfaces/CheckpointWithData.mdx)\>\>

#### Note

supports pagination

***

### getOne()

> **getOne**(`args`: `object`): `Promise`\<[`Checkpoint`](../../../../Checkpoint/classes/Checkpoint.mdx)\>

Defined in: [src/api/entities/Asset/Fungible/Checkpoints/index.ts:60](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Asset/Fungible/Checkpoints/index.ts#L60)

Retrieve a single Checkpoint for this Asset by its ID

#### Parameters

Parameter
Type

`args`

\{ `id`: `BigNumber`; \}

`args.id`

`BigNumber`

#### Returns

`Promise`\<[`Checkpoint`](../../../../Checkpoint/classes/Checkpoint.mdx)\>

#### Throws

if there is no Checkpoint with the passed ID
