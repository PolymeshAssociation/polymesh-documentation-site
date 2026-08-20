# Class: KnownPermissionGroup

> Defined in: [src/api/entities/KnownPermissionGroup.ts:27](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/KnownPermissionGroup.ts#L27)

# Class: KnownPermissionGroup

Defined in: [src/api/entities/KnownPermissionGroup.ts:27](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/KnownPermissionGroup.ts#L27)

Represents a pre-defined group of permissions for an Asset

## Extends

- [`PermissionGroup`](../../PermissionGroup/classes/PermissionGroup.mdx)

## Properties

### asset

> **asset**: [`BaseAsset`](../../Asset/Base/BaseAsset/classes/BaseAsset.mdx)

Defined in: [src/api/entities/PermissionGroup.ts:19](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/PermissionGroup.ts#L19)

Asset for which this group specifies permissions

#### Inherited from

[`PermissionGroup`](../../PermissionGroup/classes/PermissionGroup.mdx).[`asset`](../../PermissionGroup/classes/PermissionGroup.mdx#asset)

***

### type

> **type**: [`PermissionGroupType`](../../types/enumerations/PermissionGroupType.mdx)

Defined in: [src/api/entities/KnownPermissionGroup.ts:38](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/KnownPermissionGroup.ts#L38)

***

### uuid

> **uuid**: `string`

Defined in: [src/api/entities/Entity.ts:46](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Entity.ts#L46)

#### Inherited from

[`PermissionGroup`](../../PermissionGroup/classes/PermissionGroup.mdx).[`uuid`](../../PermissionGroup/classes/PermissionGroup.mdx#uuid)

## Methods

### exists()

> **exists**(): `Promise`\<`boolean`\>

Defined in: [src/api/entities/KnownPermissionGroup.ts:103](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/KnownPermissionGroup.ts#L103)

Determine whether this Known Permission Group exists on chain

#### Returns

`Promise`\<`boolean`\>

#### Overrides

[`PermissionGroup`](../../PermissionGroup/classes/PermissionGroup.mdx).[`exists`](../../PermissionGroup/classes/PermissionGroup.mdx#exists)

***

### getPermissions()

> **getPermissions**(): `Promise`\<[`GroupPermissions`](../../types/type-aliases/GroupPermissions.mdx)\>

Defined in: [src/api/entities/KnownPermissionGroup.ts:54](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/KnownPermissionGroup.ts#L54)

Retrieve the Permissions associated with this Permission Group

#### Returns

`Promise`\<[`GroupPermissions`](../../types/type-aliases/GroupPermissions.mdx)\>

#### Overrides

[`PermissionGroup`](../../PermissionGroup/classes/PermissionGroup.mdx).[`getPermissions`](../../PermissionGroup/classes/PermissionGroup.mdx#getpermissions)

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

[`PermissionGroup`](../../PermissionGroup/classes/PermissionGroup.mdx).[`isEqual`](../../PermissionGroup/classes/PermissionGroup.mdx#isequal)

***

### toHuman()

> **toHuman**(): [`HumanReadable`](../interfaces/HumanReadable.mdx)

Defined in: [src/api/entities/KnownPermissionGroup.ts:110](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/KnownPermissionGroup.ts#L110)

Return the KnownPermissionGroup's static data

#### Returns

[`HumanReadable`](../interfaces/HumanReadable.mdx)

#### Overrides

[`PermissionGroup`](../../PermissionGroup/classes/PermissionGroup.mdx).[`toHuman`](../../PermissionGroup/classes/PermissionGroup.mdx#tohuman)

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

[`PermissionGroup`](../../PermissionGroup/classes/PermissionGroup.mdx).[`generateUuid`](../../PermissionGroup/classes/PermissionGroup.mdx#generateuuid)

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

[`PermissionGroup`](../../PermissionGroup/classes/PermissionGroup.mdx).[`unserialize`](../../PermissionGroup/classes/PermissionGroup.mdx#unserialize)
