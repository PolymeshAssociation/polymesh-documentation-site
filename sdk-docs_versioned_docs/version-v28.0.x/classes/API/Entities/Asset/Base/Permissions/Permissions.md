---
id: "Permissions"
title: "Class: Permissions"
sidebar_label: "Permissions"
---

[api/entities/Asset/Base/Permissions](../../../../../../modules/API/Entities/Asset/Base/Permissions/Permissions.md).Permissions

Handles all Asset Permissions related functionality

## Hierarchy

- `Namespace`\<[`BaseAsset`](../BaseAsset/BaseAsset.md)\>

  ↳ **`Permissions`**

## Methods

### createGroup

▸ **createGroup**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<[`CustomPermissionGroup`](../../../CustomPermissionGroup/CustomPermissionGroup.md), [`CustomPermissionGroup`](../../../CustomPermissionGroup/CustomPermissionGroup.md)\>\>

Create a Permission Group for this Asset. Identities can be assigned to Permission Groups as agents. Agents assigned to a Permission Group have said group's permissions over the Asset

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`CreateGroupParams`](../../../../../../interfaces/API/Procedures/Types/CreateGroupParams/CreateGroupParams.md) |
| `opts?` | [`ProcedureOpts`](../../../../../../interfaces/API/Procedures/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<[`CustomPermissionGroup`](../../../CustomPermissionGroup/CustomPermissionGroup.md), [`CustomPermissionGroup`](../../../CustomPermissionGroup/CustomPermissionGroup.md)\>\>

**`Note`**

this method is of type [ProcedureMethod](../../../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [createGroup.checkAuthorization](../../../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/entities/Asset/Base/Permissions/index.ts:67](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/Asset/Base/Permissions/index.ts#L67)

___

### getAgents

▸ **getAgents**(): `Promise`\<[`AgentWithGroup`](../../../../../../interfaces/API/Entities/Asset/Types/AgentWithGroup/AgentWithGroup.md)[]\>

Retrieve a list of agents (Identities which have permissions over the Asset) and
  their respective Permission Groups

#### Returns

`Promise`\<[`AgentWithGroup`](../../../../../../interfaces/API/Entities/Asset/Types/AgentWithGroup/AgentWithGroup.md)[]\>

#### Defined in

[api/entities/Asset/Base/Permissions/index.ts:177](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/Asset/Base/Permissions/index.ts#L177)

___

### getGroup

▸ **getGroup**(`args`): `Promise`\<[`CustomPermissionGroup`](../../../CustomPermissionGroup/CustomPermissionGroup.md)\>

Retrieve a Custom Permission Group by its ID

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | `Object` | - |
| `args.id` | `BigNumber` | The ID of the Custom Permission Group to retrieve |

#### Returns

`Promise`\<[`CustomPermissionGroup`](../../../CustomPermissionGroup/CustomPermissionGroup.md)\>

The Custom Permission Group

**`Throws`**

if there is no Permission Group with the passed ID

#### Defined in

[api/entities/Asset/Base/Permissions/index.ts:103](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/Asset/Base/Permissions/index.ts#L103)

▸ **getGroup**(`args`): `Promise`\<[`KnownPermissionGroup`](../../../KnownPermissionGroup/KnownPermissionGroup.md)\>

Retrieve a Known Permission Group by its type

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | `Object` | - |
| `args.type` | [`PermissionGroupType`](../../../../../../enums/API/Entities/Types/PermissionGroupType/PermissionGroupType.md) | The type of the Known Permission Group to retrieve |

#### Returns

`Promise`\<[`KnownPermissionGroup`](../../../KnownPermissionGroup/KnownPermissionGroup.md)\>

The Known Permission Group

#### Defined in

[api/entities/Asset/Base/Permissions/index.ts:111](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/Asset/Base/Permissions/index.ts#L111)

___

### getGroups

▸ **getGroups**(): `Promise`\<[`PermissionGroups`](../../../../../../interfaces/API/Entities/Types/PermissionGroups/PermissionGroups.md)\>

Retrieve all Permission Groups of this Asset

#### Returns

`Promise`\<[`PermissionGroups`](../../../../../../interfaces/API/Entities/Types/PermissionGroups/PermissionGroups.md)\>

#### Defined in

[api/entities/Asset/Base/Permissions/index.ts:140](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/Asset/Base/Permissions/index.ts#L140)

___

### inviteAgent

▸ **inviteAgent**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<[`AuthorizationRequest`](../../../AuthorizationRequest/AuthorizationRequest.md), [`AuthorizationRequest`](../../../AuthorizationRequest/AuthorizationRequest.md)\>\>

Invite an Identity to be an agent with permissions over this Asset

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`InviteExternalAgentParams`](../../../../../../interfaces/API/Procedures/Types/InviteExternalAgentParams/InviteExternalAgentParams.md) |
| `opts?` | [`ProcedureOpts`](../../../../../../interfaces/API/Procedures/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<[`AuthorizationRequest`](../../../AuthorizationRequest/AuthorizationRequest.md), [`AuthorizationRequest`](../../../AuthorizationRequest/AuthorizationRequest.md)\>\>

**`Note`**

this will create an [Authorization Request](../../../AuthorizationRequest/AuthorizationRequest.md) which has to be accepted by the `target` Identity.
  An [Account](../../../Account/Account.md) or [Identity](../../../Identity/Identity.md) can fetch its pending Authorization Requests by calling [authorizations.getReceived](../../../Common/Namespaces/Authorizations/Authorizations.md#getreceived).
  Also, an Account or Identity can directly fetch the details of an Authorization Request by calling [authorizations.getOne](../../../Common/Namespaces/Authorizations/Authorizations.md#getone)

**`Note`**

this method is of type [ProcedureMethod](../../../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [inviteAgent.checkAuthorization](../../../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/entities/Asset/Base/Permissions/index.ts:81](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/Asset/Base/Permissions/index.ts#L81)

___

### removeAgent

▸ **removeAgent**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

Revoke an agent's permissions over this Asset

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`RemoveExternalAgentParams`](../../../../../../interfaces/API/Procedures/Types/RemoveExternalAgentParams/RemoveExternalAgentParams.md) |
| `opts?` | [`ProcedureOpts`](../../../../../../interfaces/API/Procedures/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

**`Note`**

this method is of type [ProcedureMethod](../../../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [removeAgent.checkAuthorization](../../../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/entities/Asset/Base/Permissions/index.ts:91](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/Asset/Base/Permissions/index.ts#L91)
