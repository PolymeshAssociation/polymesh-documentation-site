---
id: "CheckpointSchedule"
title: "Class: CheckpointSchedule"
sidebar_label: "CheckpointSchedule"
---

[api/entities/CheckpointSchedule](../../../../modules/API/Entities/CheckpointSchedule/CheckpointSchedule.md).CheckpointSchedule

Represents a Checkpoint Schedule for an Asset. Schedules can be set up to create Checkpoints at regular intervals

## Hierarchy

- [`Entity`](../Entity/Entity.md)<[`UniqueIdentifiers`](../../../../interfaces/API/Entities/CheckpointSchedule/UniqueIdentifiers/UniqueIdentifiers.md), [`HumanReadable`](../../../../interfaces/API/Entities/CheckpointSchedule/HumanReadable/HumanReadable.md)\>

  ↳ **`CheckpointSchedule`**

## Properties

### asset

• **asset**: [`FungibleAsset`](../Asset/Fungible/FungibleAsset.md)

Asset for which Checkpoints are scheduled

#### Defined in

[api/entities/CheckpointSchedule/index.ts:48](https://github.com/PolymeshAssociation/polymesh-sdk/blob/720afb69c/src/api/entities/CheckpointSchedule/index.ts#L48)

___

### expiryDate

• **expiryDate**: `Date`

date at which the last Checkpoint will be created with this Schedule.

#### Defined in

[api/entities/CheckpointSchedule/index.ts:58](https://github.com/PolymeshAssociation/polymesh-sdk/blob/720afb69c/src/api/entities/CheckpointSchedule/index.ts#L58)

___

### id

• **id**: `BigNumber`

schedule identifier number

#### Defined in

[api/entities/CheckpointSchedule/index.ts:43](https://github.com/PolymeshAssociation/polymesh-sdk/blob/720afb69c/src/api/entities/CheckpointSchedule/index.ts#L43)

___

### pendingPoints

• **pendingPoints**: `Date`[]

dates in the future where checkpoints are schedule to be created

#### Defined in

[api/entities/CheckpointSchedule/index.ts:53](https://github.com/PolymeshAssociation/polymesh-sdk/blob/720afb69c/src/api/entities/CheckpointSchedule/index.ts#L53)

___

### uuid

• **uuid**: `string`

#### Inherited from

[Entity](../Entity/Entity.md).[uuid](../Entity/Entity.md#uuid)

#### Defined in

[api/entities/Entity.ts:46](https://github.com/PolymeshAssociation/polymesh-sdk/blob/720afb69c/src/api/entities/Entity.ts#L46)

## Methods

### details

▸ **details**(): `Promise`<[`ScheduleDetails`](../../../../interfaces/API/Entities/CheckpointSchedule/Types/ScheduleDetails/ScheduleDetails.md)\>

Retrieve information specific to this Schedule

#### Returns

`Promise`<[`ScheduleDetails`](../../../../interfaces/API/Entities/CheckpointSchedule/Types/ScheduleDetails/ScheduleDetails.md)\>

___

### exists

▸ **exists**(): `Promise`<`boolean`\>

Determine whether this Checkpoint Schedule exists on chain

#### Returns

`Promise`<`boolean`\>

#### Overrides

[Entity](../Entity/Entity.md).[exists](../Entity/Entity.md#exists)

___

### getCheckpoints

▸ **getCheckpoints**(): `Promise`<[`Checkpoint`](../Checkpoint/Checkpoint.md)[]\>

Retrieve all Checkpoints created by this Schedule

#### Returns

`Promise`<[`Checkpoint`](../Checkpoint/Checkpoint.md)[]\>

___

### isEqual

▸ **isEqual**(`entity`): `boolean`

Determine whether this Entity is the same as another one

#### Parameters

| Name | Type |
| :------ | :------ |
| `entity` | [`Entity`](../Entity/Entity.md)<`unknown`, `unknown`\> |

#### Returns

`boolean`

#### Inherited from

[Entity](../Entity/Entity.md).[isEqual](../Entity/Entity.md#isequal)

___

### toHuman

▸ **toHuman**(): [`HumanReadable`](../../../../interfaces/API/Entities/CheckpointSchedule/HumanReadable/HumanReadable.md)

Return the Schedule's static data

#### Returns

[`HumanReadable`](../../../../interfaces/API/Entities/CheckpointSchedule/HumanReadable/HumanReadable.md)

#### Overrides

[Entity](../Entity/Entity.md).[toHuman](../Entity/Entity.md#tohuman)

___

### generateUuid

▸ `Static` **generateUuid**<`Identifiers`\>(`identifiers`): `string`

Generate the Entity's UUID from its identifying properties

#### Type parameters

| Name |
| :------ |
| `Identifiers` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `identifiers` | `Identifiers` |

#### Returns

`string`

#### Inherited from

[Entity](../Entity/Entity.md).[generateUuid](../Entity/Entity.md#generateuuid)

___

### unserialize

▸ `Static` **unserialize**<`Identifiers`\>(`serialized`): `Identifiers`

Unserialize a UUID into its Unique Identifiers

#### Type parameters

| Name |
| :------ |
| `Identifiers` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `serialized` | `string` | UUID to unserialize |

#### Returns

`Identifiers`

#### Inherited from

[Entity](../Entity/Entity.md).[unserialize](../Entity/Entity.md#unserialize)
