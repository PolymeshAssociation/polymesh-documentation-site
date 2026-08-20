# Abstract Class: Entity\<UniqueIdentifiers, HumanReadable\>

> Defined in: [src/api/entities/Entity.ts:8](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Entity.ts#L8)

# Abstract Class: Entity\

Defined in: [src/api/entities/Entity.ts:8](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Entity.ts#L8)

Represents an object or resource in the Polymesh Ecosystem with its own set of properties and functionality

## Extended by

- [`Account`](../../Account/classes/Account.mdx)
- [`BaseAsset`](../../Asset/Base/BaseAsset/classes/BaseAsset.mdx)
- [`Nft`](../../Asset/NonFungible/Nft/classes/Nft.mdx)
- [`AuthorizationRequest`](../../AuthorizationRequest/classes/AuthorizationRequest.mdx)
- [`Checkpoint`](../../Checkpoint/classes/Checkpoint.mdx)
- [`CheckpointSchedule`](../../CheckpointSchedule/classes/CheckpointSchedule.mdx)
- [`CorporateActionBase`](../../CorporateActionBase/classes/CorporateActionBase.mdx)
- [`Identity`](../../Identity/classes/Identity.mdx)
- [`Instruction`](../../Instruction/classes/Instruction.mdx)
- [`MetadataEntry`](../../MetadataEntry/classes/MetadataEntry.mdx)
- [`MultiSigProposal`](../../MultiSigProposal/classes/MultiSigProposal.mdx)
- [`Offering`](../../Offering/classes/Offering.mdx)
- [`PermissionGroup`](../../PermissionGroup/classes/PermissionGroup.mdx)
- [`Portfolio`](../../Portfolio/classes/Portfolio.mdx)
- [`Subsidy`](../../Subsidy/classes/Subsidy.mdx)
- [`TickerReservation`](../../TickerReservation/classes/TickerReservation.mdx)
- [`Venue`](../../Venue/classes/Venue.mdx)

## Type Parameters

Type Parameter

`UniqueIdentifiers`

`HumanReadable`

## Properties

### uuid

> **uuid**: `string`

Defined in: [src/api/entities/Entity.ts:46](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Entity.ts#L46)

## Methods

### exists()

> `abstract` **exists**(): `Promise`\<`boolean`\>

Defined in: [src/api/entities/Entity.ts:68](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Entity.ts#L68)

Determine whether this Entity exists on chain

#### Returns

`Promise`\<`boolean`\>

***

### isEqual()

> **isEqual**(`entity`: `Entity`\<`unknown`, `unknown`\>): `boolean`

Defined in: [src/api/entities/Entity.ts:61](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Entity.ts#L61)

Determine whether this Entity is the same as another one

#### Parameters

Parameter
Type

`entity`

`Entity`\<`unknown`, `unknown`\>

#### Returns

`boolean`

***

### toHuman()

> `abstract` **toHuman**(): `HumanReadable`

Defined in: [src/api/entities/Entity.ts:73](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Entity.ts#L73)

Returns Entity data in a human readable (JSON) format

#### Returns

`HumanReadable`

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

***

### isUniqueIdentifiers()

> `static` **isUniqueIdentifiers**(`identifiers`: `unknown`): `boolean`

Defined in: [src/api/entities/Entity.ts:42](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Entity.ts#L42)

Typeguard that checks whether the object passed corresponds to the unique identifiers of the class. Must be overridden

#### Parameters

Parameter
Type
Description

`identifiers`

`unknown`

object to type check

#### Returns

`boolean`

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
