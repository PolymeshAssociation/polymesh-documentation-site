---
id: "CustomPermissionGroup"
title: "Class: CustomPermissionGroup"
sidebar_label: "CustomPermissionGroup"
---

[api/entities/CustomPermissionGroup](../../../../modules/API/Entities/CustomPermissionGroup/CustomPermissionGroup.md).CustomPermissionGroup

Represents a group of custom permissions for an Asset

## Hierarchy

- [`PermissionGroup`](../PermissionGroup/PermissionGroup.md)

  ↳ **`CustomPermissionGroup`**

## Properties

### asset

• **asset**: [`BaseAsset`](../Asset/Base/BaseAsset/BaseAsset.md)

Asset for which this group specifies permissions

#### Inherited from

[PermissionGroup](../PermissionGroup/PermissionGroup.md).[asset](../PermissionGroup/PermissionGroup.md#asset)

#### Defined in

[api/entities/PermissionGroup.ts:19](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c53723bab/src/api/entities/PermissionGroup.ts#L19)

___

### id

• **id**: `BigNumber`

#### Defined in

[api/entities/CustomPermissionGroup.ts:43](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c53723bab/src/api/entities/CustomPermissionGroup.ts#L43)

___

### uuid

• **uuid**: `string`

#### Inherited from

[PermissionGroup](../PermissionGroup/PermissionGroup.md).[uuid](../PermissionGroup/PermissionGroup.md#uuid)

#### Defined in

[api/entities/Entity.ts:46](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c53723bab/src/api/entities/Entity.ts#L46)

## Methods

### exists

▸ **exists**(): `Promise`\<`boolean`\>

Determine whether this Custom Permission Group exists on chain

#### Returns

`Promise`\<`boolean`\>

#### Overrides

[PermissionGroup](../PermissionGroup/PermissionGroup.md).[exists](../PermissionGroup/PermissionGroup.md#exists)

#### Defined in

[api/entities/CustomPermissionGroup.ts:108](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c53723bab/src/api/entities/CustomPermissionGroup.ts#L108)

___

### getPermissions

▸ **getPermissions**(): `Promise`\<[`GroupPermissions`](../../../../modules/API/Entities/Types/Types.md#grouppermissions)\>

Retrieve the list of permissions and transaction groups associated with this Permission Group

#### Returns

`Promise`\<[`GroupPermissions`](../../../../modules/API/Entities/Types/Types.md#grouppermissions)\>

#### Overrides

[PermissionGroup](../PermissionGroup/PermissionGroup.md).[getPermissions](../PermissionGroup/PermissionGroup.md#getpermissions)

#### Defined in

[api/entities/CustomPermissionGroup.ts:74](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c53723bab/src/api/entities/CustomPermissionGroup.ts#L74)

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

[api/entities/Entity.ts:61](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c53723bab/src/api/entities/Entity.ts#L61)

___

### setPermissions

▸ **setPermissions**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

Modify the group's permissions

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`SetGroupPermissionsParams`](../../../../interfaces/API/Procedures/Types/SetGroupPermissionsParams/SetGroupPermissionsParams.md) |
| `opts?` | [`ProcedureOpts`](../../../../interfaces/API/Procedures/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

**`Note`**

this method is of type [ProcedureMethod](../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [setPermissions.checkAuthorization](../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/entities/CustomPermissionGroup.ts:67](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c53723bab/src/api/entities/CustomPermissionGroup.ts#L67)

___

### toHuman

▸ **toHuman**(): [`HumanReadable`](../../../../interfaces/API/Entities/CustomPermissionGroup/HumanReadable/HumanReadable.md)

Return the Group's static data

#### Returns

[`HumanReadable`](../../../../interfaces/API/Entities/CustomPermissionGroup/HumanReadable/HumanReadable.md)

#### Overrides

[PermissionGroup](../PermissionGroup/PermissionGroup.md).[toHuman](../PermissionGroup/PermissionGroup.md#tohuman)

#### Defined in

[api/entities/CustomPermissionGroup.ts:122](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c53723bab/src/api/entities/CustomPermissionGroup.ts#L122)

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

[api/entities/Entity.ts:14](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c53723bab/src/api/entities/Entity.ts#L14)

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

[api/entities/Entity.ts:23](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c53723bab/src/api/entities/Entity.ts#L23)
