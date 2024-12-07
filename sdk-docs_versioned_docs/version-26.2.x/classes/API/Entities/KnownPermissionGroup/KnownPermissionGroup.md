---
id: "KnownPermissionGroup"
title: "Class: KnownPermissionGroup"
sidebar_label: "KnownPermissionGroup"
---

[api/entities/KnownPermissionGroup](../../../../modules/API/Entities/KnownPermissionGroup/KnownPermissionGroup.md).KnownPermissionGroup

Represents a pre-defined group of permissions for an Asset

## Hierarchy

- [`PermissionGroup`](../PermissionGroup/PermissionGroup.md)

  ↳ **`KnownPermissionGroup`**

## Properties

### asset

• **asset**: [`BaseAsset`](../Asset/Base/BaseAsset/BaseAsset.md)

Asset for which this group specifies permissions

#### Inherited from

[PermissionGroup](../PermissionGroup/PermissionGroup.md).[asset](../PermissionGroup/PermissionGroup.md#asset)

#### Defined in

[api/entities/PermissionGroup.ts:19](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c8da9dfce/src/api/entities/PermissionGroup.ts#L19)

___

### type

• **type**: [`PermissionGroupType`](../../../../enums/API/Entities/Types/PermissionGroupType/PermissionGroupType.md)

#### Defined in

[api/entities/KnownPermissionGroup.ts:34](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c8da9dfce/src/api/entities/KnownPermissionGroup.ts#L34)

___

### uuid

• **uuid**: `string`

#### Inherited from

[PermissionGroup](../PermissionGroup/PermissionGroup.md).[uuid](../PermissionGroup/PermissionGroup.md#uuid)

#### Defined in

[api/entities/Entity.ts:46](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c8da9dfce/src/api/entities/Entity.ts#L46)

## Methods

### exists

▸ **exists**(): `Promise`\<`boolean`\>

Determine whether this Known Permission Group exists on chain

#### Returns

`Promise`\<`boolean`\>

#### Overrides

[PermissionGroup](../PermissionGroup/PermissionGroup.md).[exists](../PermissionGroup/PermissionGroup.md#exists)

#### Defined in

[api/entities/KnownPermissionGroup.ts:94](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c8da9dfce/src/api/entities/KnownPermissionGroup.ts#L94)

___

### getPermissions

▸ **getPermissions**(): `Promise`\<[`GroupPermissions`](../../../../modules/API/Entities/Types/Types.md#grouppermissions)\>

Retrieve the Permissions associated with this Permission Group

#### Returns

`Promise`\<[`GroupPermissions`](../../../../modules/API/Entities/Types/Types.md#grouppermissions)\>

#### Overrides

[PermissionGroup](../PermissionGroup/PermissionGroup.md).[getPermissions](../PermissionGroup/PermissionGroup.md#getpermissions)

#### Defined in

[api/entities/KnownPermissionGroup.ts:50](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c8da9dfce/src/api/entities/KnownPermissionGroup.ts#L50)

___

### isEqual

▸ **isEqual**(`entity`): `boolean`

Determine whether this Entity is the same as another one

#### Parameters

| Name | Type |
| :------ | :------ |
| `entity` | [`Entity`](../Entity/Entity.md)\<`unknown`, `unknown`\> |

#### Returns

`boolean`

#### Inherited from

[PermissionGroup](../PermissionGroup/PermissionGroup.md).[isEqual](../PermissionGroup/PermissionGroup.md#isequal)

#### Defined in

[api/entities/Entity.ts:61](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c8da9dfce/src/api/entities/Entity.ts#L61)

___

### toHuman

▸ **toHuman**(): [`HumanReadable`](../../../../interfaces/API/Entities/KnownPermissionGroup/HumanReadable/HumanReadable.md)

Return the KnownPermissionGroup's static data

#### Returns

[`HumanReadable`](../../../../interfaces/API/Entities/KnownPermissionGroup/HumanReadable/HumanReadable.md)

#### Overrides

[PermissionGroup](../PermissionGroup/PermissionGroup.md).[toHuman](../PermissionGroup/PermissionGroup.md#tohuman)

#### Defined in

[api/entities/KnownPermissionGroup.ts:101](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c8da9dfce/src/api/entities/KnownPermissionGroup.ts#L101)

___

### generateUuid

▸ `Static` **generateUuid**\<`Identifiers`\>(`identifiers`): `string`

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

[PermissionGroup](../PermissionGroup/PermissionGroup.md).[generateUuid](../PermissionGroup/PermissionGroup.md#generateuuid)

#### Defined in

[api/entities/Entity.ts:14](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c8da9dfce/src/api/entities/Entity.ts#L14)

___

### unserialize

▸ `Static` **unserialize**\<`Identifiers`\>(`serialized`): `Identifiers`

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

[PermissionGroup](../PermissionGroup/PermissionGroup.md).[unserialize](../PermissionGroup/PermissionGroup.md#unserialize)

#### Defined in

[api/entities/Entity.ts:23](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c8da9dfce/src/api/entities/Entity.ts#L23)
