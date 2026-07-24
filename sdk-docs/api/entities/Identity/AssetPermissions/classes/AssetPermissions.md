# Class: AssetPermissions

> Defined in: [src/api/entities/Identity/AssetPermissions.ts:82](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Identity/AssetPermissions.ts#L82)

# Class: AssetPermissions

Defined in: [src/api/entities/Identity/AssetPermissions.ts:82](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Identity/AssetPermissions.ts#L82)

Handles all Asset Permissions (External Agents) related functionality on the Identity side

## Extends

- `Namespace`\<[`Identity`](../../classes/Identity.mdx)\>

## Methods

### checkPermissions()

> **checkPermissions**(`args`: `object`): `Promise`\<[`CheckPermissionsResult`](../../../types/interfaces/CheckPermissionsResult.mdx)\<[`Identity`](../../../types/enumerations/SignerType.mdx#identity)\>\>

Defined in: [src/api/entities/Identity/AssetPermissions.ts:135](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Identity/AssetPermissions.ts#L135)

Check whether this Identity has specific transaction Permissions over an Asset

#### Parameters

Parameter
Type

`args`

\{ `asset`: `string` \| [`BaseAsset`](../../../Asset/Base/BaseAsset/classes/BaseAsset.mdx); `transactions`: [`TxTag`](../../../../../types/type-aliases/TxTag.mdx)[] \| `null`; \}

`args.asset`

`string` \| [`BaseAsset`](../../../Asset/Base/BaseAsset/classes/BaseAsset.mdx)

`args.transactions`

[`TxTag`](../../../../../types/type-aliases/TxTag.mdx)[] \| `null`

#### Returns

`Promise`\<[`CheckPermissionsResult`](../../../types/interfaces/CheckPermissionsResult.mdx)\<[`Identity`](../../../types/enumerations/SignerType.mdx#identity)\>\>

***

### enabledAt()

> **enabledAt**(`__namedParameters`: `object`): `Promise`\<[`EventIdentifier`](../../../../client/types/interfaces/EventIdentifier.mdx) \| `null`\>

Defined in: [src/api/entities/Identity/AssetPermissions.ts:326](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Identity/AssetPermissions.ts#L326)

Retrieve the identifier data (block number, date and event index) of the event that was emitted when this Identity was enabled/added as
  an Agent with permissions over a specific Asset

#### Parameters

Parameter
Type

`__namedParameters`

\{ `asset`: `string` \| [`Asset`](../../../Asset/types/type-aliases/Asset.mdx); \}

`__namedParameters.asset`

`string` \| [`Asset`](../../../Asset/types/type-aliases/Asset.mdx)

#### Returns

`Promise`\<[`EventIdentifier`](../../../../client/types/interfaces/EventIdentifier.mdx) \| `null`\>

#### Note

uses the middlewareV2

#### Note

there is a possibility that the data is not ready by the time it is requested. In that case, `null` is returned

***

### get()

> **get**(): `Promise`\<[`AssetWithGroup`](../../../Asset/types/interfaces/AssetWithGroup.mdx)[]\>

Defined in: [src/api/entities/Identity/AssetPermissions.ts:103](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Identity/AssetPermissions.ts#L103)

Retrieve all the Assets over which this Identity has permissions, with the corresponding Permission Group

#### Returns

`Promise`\<[`AssetWithGroup`](../../../Asset/types/interfaces/AssetWithGroup.mdx)[]\>

***

### getGroup()

> **getGroup**(`__namedParameters`: `object`): `Promise`\<[`CustomPermissionGroup`](../../../CustomPermissionGroup/classes/CustomPermissionGroup.mdx) \| [`KnownPermissionGroup`](../../../KnownPermissionGroup/classes/KnownPermissionGroup.mdx)\>

Defined in: [src/api/entities/Identity/AssetPermissions.ts:285](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Identity/AssetPermissions.ts#L285)

Retrieve this Identity's Permission Group for a specific Asset

#### Parameters

Parameter
Type

`__namedParameters`

\{ `asset`: `string` \| [`BaseAsset`](../../../Asset/Base/BaseAsset/classes/BaseAsset.mdx); \}

`__namedParameters.asset`

`string` \| [`BaseAsset`](../../../Asset/Base/BaseAsset/classes/BaseAsset.mdx)

#### Returns

`Promise`\<[`CustomPermissionGroup`](../../../CustomPermissionGroup/classes/CustomPermissionGroup.mdx) \| [`KnownPermissionGroup`](../../../KnownPermissionGroup/classes/KnownPermissionGroup.mdx)\>

***

### getOperationHistory()

> **getOperationHistory**(`opts`: `object`): `Promise`\<[`ResultSet`](../../../types/interfaces/ResultSet.mdx)\<[`EventIdentifier`](../../../../client/types/interfaces/EventIdentifier.mdx)\>\>

Defined in: [src/api/entities/Identity/AssetPermissions.ts:370](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Identity/AssetPermissions.ts#L370)

Retrieve all Events triggered by Operations this Identity has performed on a specific Asset

#### Parameters

Parameter
Type
Description

`opts`

\{ `asset`: `string` \| [`FungibleAsset`](../../../Asset/Fungible/classes/FungibleAsset.mdx); `eventId?`: [`EventIdEnum`](../../../../../types/enumerations/EventIdEnum.mdx); `moduleId?`: [`ModuleIdEnum`](../../../../../types/enumerations/ModuleIdEnum.mdx); `size?`: `BigNumber`; `start?`: `BigNumber`; \}

&hyphen;

`opts.asset`

`string` \| [`FungibleAsset`](../../../Asset/Fungible/classes/FungibleAsset.mdx)

&hyphen;

`opts.eventId?`

[`EventIdEnum`](../../../../../types/enumerations/EventIdEnum.mdx)

filters results by event

`opts.moduleId?`

[`ModuleIdEnum`](../../../../../types/enumerations/ModuleIdEnum.mdx)

filters results by module

`opts.size?`

`BigNumber`

page size

`opts.start?`

`BigNumber`

page offset

#### Returns

`Promise`\<[`ResultSet`](../../../types/interfaces/ResultSet.mdx)\<[`EventIdentifier`](../../../../client/types/interfaces/EventIdentifier.mdx)\>\>

#### Note

uses the middlewareV2

#### Note

supports pagination

***

### setGroup()

> **setGroup**(`args`: [`SetPermissionGroupParams`](../../../../procedures/types/interfaces/SetPermissionGroupParams.mdx), `opts?`: [`ProcedureOpts`](../../../../procedures/types/interfaces/ProcedureOpts.mdx)): `Promise`\<[`GenericPolymeshTransaction`](../../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<[`CustomPermissionGroup`](../../../CustomPermissionGroup/classes/CustomPermissionGroup.mdx) \| [`KnownPermissionGroup`](../../../KnownPermissionGroup/classes/KnownPermissionGroup.mdx), [`CustomPermissionGroup`](../../../CustomPermissionGroup/classes/CustomPermissionGroup.mdx) \| [`KnownPermissionGroup`](../../../KnownPermissionGroup/classes/KnownPermissionGroup.mdx)\>\>

Defined in: [src/api/entities/Identity/AssetPermissions.ts:354](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Identity/AssetPermissions.ts#L354)

Assign this Identity to a different Permission Group for a given Asset

#### Parameters

Parameter
Type

`args`

[`SetPermissionGroupParams`](../../../../procedures/types/interfaces/SetPermissionGroupParams.mdx)

`opts?`

[`ProcedureOpts`](../../../../procedures/types/interfaces/ProcedureOpts.mdx)

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<[`CustomPermissionGroup`](../../../CustomPermissionGroup/classes/CustomPermissionGroup.mdx) \| [`KnownPermissionGroup`](../../../KnownPermissionGroup/classes/KnownPermissionGroup.mdx), [`CustomPermissionGroup`](../../../CustomPermissionGroup/classes/CustomPermissionGroup.mdx) \| [`KnownPermissionGroup`](../../../KnownPermissionGroup/classes/KnownPermissionGroup.mdx)\>\>

#### Note

this method is of type [ProcedureMethod](../../../../procedures/types/interfaces/ProcedureMethod.mdx), which means you can call [setGroup.checkAuthorization](../../../../procedures/types/interfaces/ProcedureMethod.mdx#checkauthorization) on it to see whether the signing Account and Identity have the required roles and permissions to run it

***

### waive()

> **waive**(`args`: [`WaivePermissionsParams`](../../../../procedures/types/interfaces/WaivePermissionsParams.mdx), `opts?`: [`ProcedureOpts`](../../../../procedures/types/interfaces/ProcedureOpts.mdx)): `Promise`\<[`GenericPolymeshTransaction`](../../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

Defined in: [src/api/entities/Identity/AssetPermissions.ts:349](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Identity/AssetPermissions.ts#L349)

Abdicate from the current Permissions Group for a given Asset. This means that this Identity will no longer have any permissions over said Asset

#### Parameters

Parameter
Type

`args`

[`WaivePermissionsParams`](../../../../procedures/types/interfaces/WaivePermissionsParams.mdx)

`opts?`

[`ProcedureOpts`](../../../../procedures/types/interfaces/ProcedureOpts.mdx)

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

#### Note

this method is of type [ProcedureMethod](../../../../procedures/types/interfaces/ProcedureMethod.mdx), which means you can call [waive.checkAuthorization](../../../../procedures/types/interfaces/ProcedureMethod.mdx#checkauthorization) on it to see whether the signing Account and Identity have the required roles and permissions to run it
