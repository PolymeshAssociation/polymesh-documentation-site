# Class: CheckpointSchedule

> Defined in: [src/api/entities/CheckpointSchedule/index.ts:34](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/CheckpointSchedule/index.ts#L34)

# Class: CheckpointSchedule

Defined in: [src/api/entities/CheckpointSchedule/index.ts:34](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/CheckpointSchedule/index.ts#L34)

Represents a Checkpoint Schedule for an Asset. Schedules can be set up to create Checkpoints at regular intervals

## Extends

- [`Entity`](../../Entity/classes/Entity.mdx)\<[`UniqueIdentifiers`](../interfaces/UniqueIdentifiers.mdx), [`HumanReadable`](../interfaces/HumanReadable.mdx)\>

## Properties

### asset

> **asset**: [`FungibleAsset`](../../Asset/Fungible/classes/FungibleAsset.mdx)

Defined in: [src/api/entities/CheckpointSchedule/index.ts:53](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/CheckpointSchedule/index.ts#L53)

Asset for which Checkpoints are scheduled

***

### expiryDate

> **expiryDate**: `Date`

Defined in: [src/api/entities/CheckpointSchedule/index.ts:63](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/CheckpointSchedule/index.ts#L63)

date at which the last Checkpoint will be created with this Schedule.

***

### id

> **id**: `BigNumber`

Defined in: [src/api/entities/CheckpointSchedule/index.ts:48](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/CheckpointSchedule/index.ts#L48)

schedule identifier number

***

### pendingPoints

> **pendingPoints**: `Date`[]

Defined in: [src/api/entities/CheckpointSchedule/index.ts:58](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/CheckpointSchedule/index.ts#L58)

dates in the future where checkpoints are schedule to be created

***

### uuid

> **uuid**: `string`

Defined in: [src/api/entities/Entity.ts:46](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Entity.ts#L46)

#### Inherited from

[`Entity`](../../Entity/classes/Entity.mdx).[`uuid`](../../Entity/classes/Entity.mdx#uuid)

## Methods

### details()

> **details**(): `Promise`\<[`ScheduleDetails`](../types/interfaces/ScheduleDetails.mdx)\>

Defined in: [src/api/entities/CheckpointSchedule/index.ts:85](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/CheckpointSchedule/index.ts#L85)

Retrieve information specific to this Schedule

#### Returns

`Promise`\<[`ScheduleDetails`](../types/interfaces/ScheduleDetails.mdx)\>

***

### exists()

> **exists**(): `Promise`\<`boolean`\>

Defined in: [src/api/entities/CheckpointSchedule/index.ts:165](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/CheckpointSchedule/index.ts#L165)

Determine whether this Checkpoint Schedule exists on chain

#### Returns

`Promise`\<`boolean`\>

#### Overrides

[`Entity`](../../Entity/classes/Entity.mdx).[`exists`](../../Entity/classes/Entity.mdx#exists)

***

### getCheckpoints()

> **getCheckpoints**(): `Promise`\<[`Checkpoint`](../../Checkpoint/classes/Checkpoint.mdx)[]\>

Defined in: [src/api/entities/CheckpointSchedule/index.ts:132](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/CheckpointSchedule/index.ts#L132)

Retrieve all Checkpoints created by this Schedule

#### Returns

`Promise`\<[`Checkpoint`](../../Checkpoint/classes/Checkpoint.mdx)[]\>

***

### isEqual()

> **isEqual**(`entity`: [`Entity`](../../Entity/classes/Entity.mdx)\<`unknown`, `unknown`\>): `boolean`

Defined in: [src/api/entities/Entity.ts:61](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Entity.ts#L61)

Determine whether this Entity is the same as another one

#### Parameters

Parameter
Type

`entity`

[`Entity`](../../Entity/classes/Entity.mdx)\<`unknown`, `unknown`\>

#### Returns

`boolean`

#### Inherited from

[`Entity`](../../Entity/classes/Entity.mdx).[`isEqual`](../../Entity/classes/Entity.mdx#isequal)

***

### toHuman()

> **toHuman**(): [`HumanReadable`](../interfaces/HumanReadable.mdx)

Defined in: [src/api/entities/CheckpointSchedule/index.ts:190](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/CheckpointSchedule/index.ts#L190)

Return the Schedule's static data

#### Returns

[`HumanReadable`](../interfaces/HumanReadable.mdx)

#### Overrides

[`Entity`](../../Entity/classes/Entity.mdx).[`toHuman`](../../Entity/classes/Entity.mdx#tohuman)

***

### generateUuid()

> `static` **generateUuid**\<`Identifiers`\>(`identifiers`: `Identifiers`): `string`

Defined in: [src/api/entities/Entity.ts:14](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Entity.ts#L14)

Generate the Entity's UUID from its identifying properties

#### Type Parameters

Type Parameter

`Identifiers`

#### Parameters

Parameter
Type
Description

`identifiers`

`Identifiers`

&hyphen;

#### Returns

`string`

#### Inherited from

[`Entity`](../../Entity/classes/Entity.mdx).[`generateUuid`](../../Entity/classes/Entity.mdx#generateuuid)

***

### unserialize()

> `static` **unserialize**\<`Identifiers`\>(`serialized`: `string`): `Identifiers`

Defined in: [src/api/entities/Entity.ts:23](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Entity.ts#L23)

Unserialize a UUID into its Unique Identifiers

#### Type Parameters

Type Parameter

`Identifiers`

#### Parameters

Parameter
Type
Description

`serialized`

`string`

UUID to unserialize

#### Returns

`Identifiers`

#### Inherited from

[`Entity`](../../Entity/classes/Entity.mdx).[`unserialize`](../../Entity/classes/Entity.mdx#unserialize)
