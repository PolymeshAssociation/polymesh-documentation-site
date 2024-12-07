---
id: "AssetPermissions"
title: "Class: AssetPermissions"
sidebar_label: "AssetPermissions"
---

[api/entities/Identity/AssetPermissions](../../../../../modules/API/Entities/Identity/AssetPermissions/AssetPermissions.md).AssetPermissions

Handles all Asset Permissions (External Agents) related functionality on the Identity side

## Hierarchy

- `Namespace`\<[`Identity`](../Identity.md)\>

  ↳ **`AssetPermissions`**

## Methods

### checkPermissions

▸ **checkPermissions**(`args`): `Promise`\<[`CheckPermissionsResult`](../../../../../interfaces/API/Entities/Types/CheckPermissionsResult/CheckPermissionsResult.md)\<[`Identity`](../../../../../enums/API/Entities/Types/SignerType/SignerType.md#identity)\>\>

Check whether this Identity has specific transaction Permissions over an Asset

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.asset` | `string` \| [`BaseAsset`](../../Asset/Base/BaseAsset/BaseAsset.md) |
| `args.transactions` | ``null`` \| [`TxTag`](../../../../../modules/Generated/Types/Types.md#txtag)[] |

#### Returns

`Promise`\<[`CheckPermissionsResult`](../../../../../interfaces/API/Entities/Types/CheckPermissionsResult/CheckPermissionsResult.md)\<[`Identity`](../../../../../enums/API/Entities/Types/SignerType/SignerType.md#identity)\>\>

#### Defined in

[api/entities/Identity/AssetPermissions.ts:133](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c8da9dfce/src/api/entities/Identity/AssetPermissions.ts#L133)

___

### enabledAt

▸ **enabledAt**(`«destructured»`): `Promise`\<``null`` \| [`EventIdentifier`](../../../../../interfaces/API/Client/Types/EventIdentifier/EventIdentifier.md)\>

Retrieve the identifier data (block number, date and event index) of the event that was emitted when this Identity was enabled/added as
  an Agent with permissions over a specific Asset

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `asset` | `string` \| [`Asset`](../../../../../modules/API/Entities/Asset/Types/Types.md#asset) |

#### Returns

`Promise`\<``null`` \| [`EventIdentifier`](../../../../../interfaces/API/Client/Types/EventIdentifier/EventIdentifier.md)\>

**`Note`**

uses the middlewareV2

**`Note`**

there is a possibility that the data is not ready by the time it is requested. In that case, `null` is returned

#### Defined in

[api/entities/Identity/AssetPermissions.ts:325](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c8da9dfce/src/api/entities/Identity/AssetPermissions.ts#L325)

___

### get

▸ **get**(): `Promise`\<[`AssetWithGroup`](../../../../../interfaces/API/Entities/Asset/Types/AssetWithGroup/AssetWithGroup.md)[]\>

Retrieve all the Assets over which this Identity has permissions, with the corresponding Permission Group

#### Returns

`Promise`\<[`AssetWithGroup`](../../../../../interfaces/API/Entities/Asset/Types/AssetWithGroup/AssetWithGroup.md)[]\>

#### Defined in

[api/entities/Identity/AssetPermissions.ts:104](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c8da9dfce/src/api/entities/Identity/AssetPermissions.ts#L104)

___

### getGroup

▸ **getGroup**(`«destructured»`): `Promise`\<[`CustomPermissionGroup`](../../CustomPermissionGroup/CustomPermissionGroup.md) \| [`KnownPermissionGroup`](../../KnownPermissionGroup/KnownPermissionGroup.md)\>

Retrieve this Identity's Permission Group for a specific Asset

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `asset` | `string` \| [`BaseAsset`](../../Asset/Base/BaseAsset/BaseAsset.md) |

#### Returns

`Promise`\<[`CustomPermissionGroup`](../../CustomPermissionGroup/CustomPermissionGroup.md) \| [`KnownPermissionGroup`](../../KnownPermissionGroup/KnownPermissionGroup.md)\>

#### Defined in

[api/entities/Identity/AssetPermissions.ts:284](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c8da9dfce/src/api/entities/Identity/AssetPermissions.ts#L284)

___

### getOperationHistory

▸ **getOperationHistory**(`opts`): `Promise`\<[`ResultSet`](../../../../../interfaces/API/Entities/Types/ResultSet/ResultSet.md)\<[`EventIdentifier`](../../../../../interfaces/API/Client/Types/EventIdentifier/EventIdentifier.md)\>\>

Retrieve all Events triggered by Operations this Identity has performed on a specific Asset

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `Object` | - |
| `opts.asset` | `string` \| [`FungibleAsset`](../../Asset/Fungible/FungibleAsset.md) | - |
| `opts.eventId?` | [`EventIdEnum`](../../../../../enums/Types/EventIdEnum/EventIdEnum.md) | filters results by event |
| `opts.moduleId?` | [`ModuleIdEnum`](../../../../../enums/Types/ModuleIdEnum/ModuleIdEnum.md) | filters results by module |
| `opts.size?` | `BigNumber` | page size |
| `opts.start?` | `BigNumber` | page offset |

#### Returns

`Promise`\<[`ResultSet`](../../../../../interfaces/API/Entities/Types/ResultSet/ResultSet.md)\<[`EventIdentifier`](../../../../../interfaces/API/Client/Types/EventIdentifier/EventIdentifier.md)\>\>

**`Note`**

uses the middlewareV2

**`Note`**

supports pagination

#### Defined in

[api/entities/Identity/AssetPermissions.ts:376](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c8da9dfce/src/api/entities/Identity/AssetPermissions.ts#L376)

___

### setGroup

▸ **setGroup**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<[`CustomPermissionGroup`](../../CustomPermissionGroup/CustomPermissionGroup.md) \| [`KnownPermissionGroup`](../../KnownPermissionGroup/KnownPermissionGroup.md), [`CustomPermissionGroup`](../../CustomPermissionGroup/CustomPermissionGroup.md) \| [`KnownPermissionGroup`](../../KnownPermissionGroup/KnownPermissionGroup.md)\>\>

Assign this Identity to a different Permission Group for a given Asset

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`SetPermissionGroupParams`](../../../../../interfaces/API/Procedures/Types/SetPermissionGroupParams/SetPermissionGroupParams.md) |
| `opts?` | [`ProcedureOpts`](../../../../../interfaces/API/Procedures/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<[`CustomPermissionGroup`](../../CustomPermissionGroup/CustomPermissionGroup.md) \| [`KnownPermissionGroup`](../../KnownPermissionGroup/KnownPermissionGroup.md), [`CustomPermissionGroup`](../../CustomPermissionGroup/CustomPermissionGroup.md) \| [`KnownPermissionGroup`](../../KnownPermissionGroup/KnownPermissionGroup.md)\>\>

**`Note`**

this method is of type [ProcedureMethod](../../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [setGroup.checkAuthorization](../../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/entities/Identity/AssetPermissions.ts:361](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c8da9dfce/src/api/entities/Identity/AssetPermissions.ts#L361)

___

### waive

▸ **waive**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

Abdicate from the current Permissions Group for a given Asset. This means that this Identity will no longer have any permissions over said Asset

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`WaivePermissionsParams`](../../../../../interfaces/API/Procedures/Types/WaivePermissionsParams/WaivePermissionsParams.md) |
| `opts?` | [`ProcedureOpts`](../../../../../interfaces/API/Procedures/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

**`Note`**

this method is of type [ProcedureMethod](../../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [waive.checkAuthorization](../../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/entities/Identity/AssetPermissions.ts:351](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c8da9dfce/src/api/entities/Identity/AssetPermissions.ts#L351)
