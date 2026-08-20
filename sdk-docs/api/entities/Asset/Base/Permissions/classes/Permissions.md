# Class: Permissions

> Defined in: [src/api/entities/Asset/Base/Permissions/index.ts:37](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Asset/Base/Permissions/index.ts#L37)

# Class: Permissions

Defined in: [src/api/entities/Asset/Base/Permissions/index.ts:37](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Asset/Base/Permissions/index.ts#L37)

Handles all Asset Permissions related functionality

## Extends

- `Namespace`\<[`BaseAsset`](../../BaseAsset/classes/BaseAsset.mdx)\>

## Methods

### createGroup()

> **createGroup**(`args`: [`CreateGroupParams`](../../../../../procedures/types/interfaces/CreateGroupParams.mdx), `opts?`: [`ProcedureOpts`](../../../../../procedures/types/interfaces/ProcedureOpts.mdx)): `Promise`\<[`GenericPolymeshTransaction`](../../../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<[`CustomPermissionGroup`](../../../../CustomPermissionGroup/classes/CustomPermissionGroup.mdx), [`CustomPermissionGroup`](../../../../CustomPermissionGroup/classes/CustomPermissionGroup.mdx)\>\>

Defined in: [src/api/entities/Asset/Base/Permissions/index.ts:63](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Asset/Base/Permissions/index.ts#L63)

Create a Permission Group for this Asset. Identities can be assigned to Permission Groups as agents. Agents assigned to a Permission Group have said group's permissions over the Asset

#### Parameters

Parameter
Type

`args`

[`CreateGroupParams`](../../../../../procedures/types/interfaces/CreateGroupParams.mdx)

`opts?`

[`ProcedureOpts`](../../../../../procedures/types/interfaces/ProcedureOpts.mdx)

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<[`CustomPermissionGroup`](../../../../CustomPermissionGroup/classes/CustomPermissionGroup.mdx), [`CustomPermissionGroup`](../../../../CustomPermissionGroup/classes/CustomPermissionGroup.mdx)\>\>

#### Note

this method is of type [ProcedureMethod](../../../../../procedures/types/interfaces/ProcedureMethod.mdx), which means you can call [createGroup.checkAuthorization](../../../../../procedures/types/interfaces/ProcedureMethod.mdx#checkauthorization) on it to see whether the signing Account and Identity have the required roles and permissions to run it

***

### getAgents()

> **getAgents**(): `Promise`\<[`AgentWithGroup`](../../../types/interfaces/AgentWithGroup.mdx)[]\>

Defined in: [src/api/entities/Asset/Base/Permissions/index.ts:169](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Asset/Base/Permissions/index.ts#L169)

Retrieve a list of agents (Identities which have permissions over the Asset) and
  their respective Permission Groups

#### Returns

`Promise`\<[`AgentWithGroup`](../../../types/interfaces/AgentWithGroup.mdx)[]\>

***

### getGroup()

#### Call Signature

> **getGroup**(`args`: `object`): `Promise`\<[`CustomPermissionGroup`](../../../../CustomPermissionGroup/classes/CustomPermissionGroup.mdx)\>

Defined in: [src/api/entities/Asset/Base/Permissions/index.ts:94](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Asset/Base/Permissions/index.ts#L94)

Retrieve a Custom Permission Group by its ID

##### Parameters

Parameter
Type
Description

`args`

\{ `id`: `BigNumber`; \}

&hyphen;

`args.id`

`BigNumber`

Permission Group identifier

##### Returns

`Promise`\<[`CustomPermissionGroup`](../../../../CustomPermissionGroup/classes/CustomPermissionGroup.mdx)\>

Promise that resolves to the Custom Permission Group

##### Throws

if there is no Permission Group with the passed ID

#### Call Signature

> **getGroup**(`args`: `object`): `Promise`\<[`KnownPermissionGroup`](../../../../KnownPermissionGroup/classes/KnownPermissionGroup.mdx)\>

Defined in: [src/api/entities/Asset/Base/Permissions/index.ts:103](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Asset/Base/Permissions/index.ts#L103)

Retrieve a Known Permission Group by its type

##### Parameters

Parameter
Type
Description

`args`

\{ `type`: [`PermissionGroupType`](../../../../types/enumerations/PermissionGroupType.mdx); \}

&hyphen;

`args.type`

[`PermissionGroupType`](../../../../types/enumerations/PermissionGroupType.mdx)

The Known Permission Group type

##### Returns

`Promise`\<[`KnownPermissionGroup`](../../../../KnownPermissionGroup/classes/KnownPermissionGroup.mdx)\>

Promise that resolves to the Known Permission Group

***

### getGroups()

> **getGroups**(): `Promise`\<[`PermissionGroups`](../../../../types/interfaces/PermissionGroups.mdx)\>

Defined in: [src/api/entities/Asset/Base/Permissions/index.ts:132](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Asset/Base/Permissions/index.ts#L132)

Retrieve all Permission Groups of this Asset

#### Returns

`Promise`\<[`PermissionGroups`](../../../../types/interfaces/PermissionGroups.mdx)\>

***

### inviteAgent()

> **inviteAgent**(`args`: [`InviteExternalAgentParams`](../../../../../procedures/types/interfaces/InviteExternalAgentParams.mdx), `opts?`: [`ProcedureOpts`](../../../../../procedures/types/interfaces/ProcedureOpts.mdx)): `Promise`\<[`GenericPolymeshTransaction`](../../../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<[`AuthorizationRequest`](../../../../AuthorizationRequest/classes/AuthorizationRequest.mdx), [`AuthorizationRequest`](../../../../AuthorizationRequest/classes/AuthorizationRequest.mdx)\>\>

Defined in: [src/api/entities/Asset/Base/Permissions/index.ts:78](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Asset/Base/Permissions/index.ts#L78)

Invite an Identity to be an agent with permissions over this Asset

#### Parameters

Parameter
Type

`args`

[`InviteExternalAgentParams`](../../../../../procedures/types/interfaces/InviteExternalAgentParams.mdx)

`opts?`

[`ProcedureOpts`](../../../../../procedures/types/interfaces/ProcedureOpts.mdx)

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<[`AuthorizationRequest`](../../../../AuthorizationRequest/classes/AuthorizationRequest.mdx), [`AuthorizationRequest`](../../../../AuthorizationRequest/classes/AuthorizationRequest.mdx)\>\>

#### Note

the signing Identity must be an agent of this Asset holding `externalAgents.acceptBecomeAgent`
  permission — granted by `TxGroup.ExternalAgentManagement` or `PermissionGroupType.Full`. The chain
  checks this when the `target` accepts, against the Identity that created the Authorization Request,
  so an invitation sent without it can never be accepted. If no existing Permission Group matches the
  requested permissions, `externalAgents.createGroupAndAddAuth` permission is also required

#### Note

this will create an [Authorization Request](../../../../AuthorizationRequest/classes/AuthorizationRequest.mdx) which has to be accepted by the `target` Identity.
  An [Account](../../../../Account/classes/Account.mdx) or [Identity](../../../../Identity/classes/Identity.mdx) can fetch its pending Authorization Requests by calling [authorizations.getReceived](../../../../common/namespaces/Authorizations/classes/Authorizations.mdx#getreceived).
  Also, an Account or Identity can directly fetch the details of an Authorization Request by calling [authorizations.getOne](../../../../common/namespaces/Authorizations/classes/Authorizations.mdx#getone)

#### Note

this method is of type [ProcedureMethod](../../../../../procedures/types/interfaces/ProcedureMethod.mdx), which means you can call [inviteAgent.checkAuthorization](../../../../../procedures/types/interfaces/ProcedureMethod.mdx#checkauthorization) on it to see whether the signing Account and Identity have the required roles and permissions to run it

***

### removeAgent()

> **removeAgent**(`args`: [`RemoveExternalAgentParams`](../../../../../procedures/types/interfaces/RemoveExternalAgentParams.mdx), `opts?`: [`ProcedureOpts`](../../../../../procedures/types/interfaces/ProcedureOpts.mdx)): `Promise`\<[`GenericPolymeshTransaction`](../../../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

Defined in: [src/api/entities/Asset/Base/Permissions/index.ts:83](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Asset/Base/Permissions/index.ts#L83)

Revoke an agent's permissions over this Asset

#### Parameters

Parameter
Type

`args`

[`RemoveExternalAgentParams`](../../../../../procedures/types/interfaces/RemoveExternalAgentParams.mdx)

`opts?`

[`ProcedureOpts`](../../../../../procedures/types/interfaces/ProcedureOpts.mdx)

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

#### Note

this method is of type [ProcedureMethod](../../../../../procedures/types/interfaces/ProcedureMethod.mdx), which means you can call [removeAgent.checkAuthorization](../../../../../procedures/types/interfaces/ProcedureMethod.mdx#checkauthorization) on it to see whether the signing Account and Identity have the required roles and permissions to run it
