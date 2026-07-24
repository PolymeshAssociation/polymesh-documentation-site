# Abstract Class: PermissionGroup

> Defined in: [src/api/entities/PermissionGroup.ts:15](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/PermissionGroup.ts#L15)

# Abstract Class: PermissionGroup

Defined in: [src/api/entities/PermissionGroup.ts:15](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/PermissionGroup.ts#L15)

Represents a group of permissions for an Asset

## Extends

- [`Entity`](../../Entity/classes/Entity.mdx)\<[`UniqueIdentifiers`](../interfaces/UniqueIdentifiers.mdx), `unknown`\>

## Extended by

- [`CustomPermissionGroup`](../../CustomPermissionGroup/classes/CustomPermissionGroup.mdx)
- [`KnownPermissionGroup`](../../KnownPermissionGroup/classes/KnownPermissionGroup.mdx)

## Properties

### asset

> **asset**: [`BaseAsset`](../../Asset/Base/BaseAsset/classes/BaseAsset.mdx)

Defined in: [src/api/entities/PermissionGroup.ts:19](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/PermissionGroup.ts#L19)

Asset for which this group specifies permissions

***

### uuid

> **uuid**: `string`

Defined in: [src/api/entities/Entity.ts:46](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Entity.ts#L46)

#### Inherited from

[`Entity`](../../Entity/classes/Entity.mdx).[`uuid`](../../Entity/classes/Entity.mdx#uuid)

## Methods

### exists()

> `abstract` **exists**(): `Promise`\<`boolean`\>

Defined in: [src/api/entities/Entity.ts:68](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Entity.ts#L68)

Determine whether this Entity exists on chain

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

[`Entity`](../../Entity/classes/Entity.mdx).[`exists`](../../Entity/classes/Entity.mdx#exists)

***

### getPermissions()

> `abstract` **getPermissions**(): `Promise`\<[`GroupPermissions`](../../types/type-aliases/GroupPermissions.mdx)\>

Defined in: [src/api/entities/PermissionGroup.ts:35](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/PermissionGroup.ts#L35)

Retrieve the Permissions associated with this Permission Group

#### Returns

`Promise`\<[`GroupPermissions`](../../types/type-aliases/GroupPermissions.mdx)\>

***

### isEqual()

> **isEqual**(`entity`: [`Entity`](../../Entity/classes/Entity.mdx)\<`unknown`, `unknown`\>): `boolean`

Defined in: [src/api/entities/Entity.ts:61](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Entity.ts#L61)

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

> `abstract` **toHuman**(): `unknown`

Defined in: [src/api/entities/Entity.ts:73](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Entity.ts#L73)

Returns Entity data in a human readable (JSON) format

#### Returns

`unknown`

#### Inherited from

[`Entity`](../../Entity/classes/Entity.mdx).[`toHuman`](../../Entity/classes/Entity.mdx#tohuman)

***

### generateUuid()

> `static` **generateUuid**\<`Identifiers`\>(`identifiers`: `Identifiers`): `string`

Defined in: [src/api/entities/Entity.ts:14](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Entity.ts#L14)

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

### isUniqueIdentifiers()

> `static` **isUniqueIdentifiers**(`identifiers`: `unknown`): `boolean`

Defined in: [src/api/entities/Entity.ts:42](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Entity.ts#L42)

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

#### Inherited from

[`Entity`](../../Entity/classes/Entity.mdx).[`isUniqueIdentifiers`](../../Entity/classes/Entity.mdx#isuniqueidentifiers)

***

### unserialize()

> `static` **unserialize**\<`Identifiers`\>(`serialized`: `string`): `Identifiers`

Defined in: [src/api/entities/Entity.ts:23](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Entity.ts#L23)

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
