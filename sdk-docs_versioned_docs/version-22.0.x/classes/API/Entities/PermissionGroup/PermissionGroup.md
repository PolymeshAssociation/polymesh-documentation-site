---
id: 'PermissionGroup'
title: 'Class: PermissionGroup'
sidebar_label: 'PermissionGroup'
---

[api/entities/PermissionGroup](../../../../modules/API/Entities/PermissionGroup/PermissionGroup.md).PermissionGroup

Represents a group of permissions for an Asset

## Hierarchy

- [`Entity`](../Entity/Entity.md) \<[`UniqueIdentifiers`](../../../../interfaces/API/Entities/PermissionGroup/UniqueIdentifiers/UniqueIdentifiers.md), `unknown`\>

  ↳ **`PermissionGroup`**

  ↳↳ [`CustomPermissionGroup`](../CustomPermissionGroup/CustomPermissionGroup.md)

  ↳↳ [`KnownPermissionGroup`](../KnownPermissionGroup/KnownPermissionGroup.md)

## Properties

### asset

• **asset**: [`Asset`](../Asset/Asset.md)

Asset for which this group specifies permissions

#### Defined in

[api/entities/PermissionGroup.ts:19](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2d3ac2aea/src/api/entities/PermissionGroup.ts#L19)

---

### uuid

• **uuid**: `string`

#### Inherited from

[Entity](../Entity/Entity.md).[uuid](../Entity/Entity.md#uuid)

#### Defined in

[api/entities/Entity.ts:46](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2d3ac2aea/src/api/entities/Entity.ts#L46)

## Methods

### exists

▸ `Abstract` **exists**(): `Promise`\<`boolean`\>

Determine whether this Entity exists on chain

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

[Entity](../Entity/Entity.md).[exists](../Entity/Entity.md#exists)

#### Defined in

[api/entities/Entity.ts:68](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2d3ac2aea/src/api/entities/Entity.ts#L68)

---

### getPermissions

▸ `Abstract` **getPermissions**(): `Promise`\<[`GroupPermissions`](../../../../modules/Types/Types.md#grouppermissions)\>

Retrieve the Permissions associated with this Permission Group

#### Returns

`Promise`\<[`GroupPermissions`](../../../../modules/Types/Types.md#grouppermissions)\>

#### Defined in

[api/entities/PermissionGroup.ts:35](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2d3ac2aea/src/api/entities/PermissionGroup.ts#L35)

---

### isEqual

▸ **isEqual**(`entity`): `boolean`

Determine whether this Entity is the same as another one

#### Parameters

| Name     | Type                                                    |
| :------- | :------------------------------------------------------ |
| `entity` | [`Entity`](../Entity/Entity.md)\<`unknown`, `unknown`\> |

#### Returns

`boolean`

#### Inherited from

[Entity](../Entity/Entity.md).[isEqual](../Entity/Entity.md#isequal)

#### Defined in

[api/entities/Entity.ts:61](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2d3ac2aea/src/api/entities/Entity.ts#L61)

---

### toHuman

▸ `Abstract` **toHuman**(): `unknown`

Returns Entity data in a human readable (JSON) format

#### Returns

`unknown`

#### Inherited from

[Entity](../Entity/Entity.md).[toHuman](../Entity/Entity.md#tohuman)

#### Defined in

[api/entities/Entity.ts:73](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2d3ac2aea/src/api/entities/Entity.ts#L73)

---

### generateUuid

▸ `Static` **generateUuid**\<`Identifiers`\>(`identifiers`): `string`

Generate the Entity's UUID from its identifying properties

#### Type parameters

| Name          |
| :------------ |
| `Identifiers` |

#### Parameters

| Name          | Type          |
| :------------ | :------------ |
| `identifiers` | `Identifiers` |

#### Returns

`string`

#### Inherited from

[Entity](../Entity/Entity.md).[generateUuid](../Entity/Entity.md#generateuuid)

#### Defined in

[api/entities/Entity.ts:14](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2d3ac2aea/src/api/entities/Entity.ts#L14)

---

### isUniqueIdentifiers

▸ `Static` **isUniqueIdentifiers**(`identifiers`): `boolean`

Typeguard that checks whether the object passed corresponds to the unique identifiers of the class. Must be overridden

#### Parameters

| Name          | Type      | Description          |
| :------------ | :-------- | :------------------- |
| `identifiers` | `unknown` | object to type check |

#### Returns

`boolean`

#### Inherited from

[Entity](../Entity/Entity.md).[isUniqueIdentifiers](../Entity/Entity.md#isuniqueidentifiers)

#### Defined in

[api/entities/Entity.ts:42](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2d3ac2aea/src/api/entities/Entity.ts#L42)

---

### unserialize

▸ `Static` **unserialize**\<`Identifiers`\>(`serialized`): `Identifiers`

Unserialize a UUID into its Unique Identifiers

#### Type parameters

| Name          |
| :------------ |
| `Identifiers` |

#### Parameters

| Name         | Type     | Description         |
| :----------- | :------- | :------------------ |
| `serialized` | `string` | UUID to unserialize |

#### Returns

`Identifiers`

#### Inherited from

[Entity](../Entity/Entity.md).[unserialize](../Entity/Entity.md#unserialize)

#### Defined in

[api/entities/Entity.ts:23](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2d3ac2aea/src/api/entities/Entity.ts#L23)
