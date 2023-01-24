[api/entities/Identity/AssetPermissions](../../../../../Modules/API/Entities/Identity/AssetPermissions.md).AssetPermissions

Handles all Asset Permissions (External Agents) related functionality on the Identity side

## Hierarchy

- `Namespace`<[`Identity`](../Identity.md)\>

  ↳ **`AssetPermissions`**

## Methods

### checkPermissions

▸ **checkPermissions**(`args`): `Promise`<[`CheckPermissionsResult`](../../../../../Interfaces/Types/CheckPermissionsResult.md)<[`Identity`](../../../../../Enums/Types/SignerType.md#identity)\>\>

Check whether this Identity has specific transaction Permissions over an Asset

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.asset` | `string` \| [`Asset`](../../Asset/Asset.md) |
| `args.transactions` | ``null`` \| [`TxTag`](../../../../../Modules/Generated/Types.md#txtag)[] |

#### Returns

`Promise`<[`CheckPermissionsResult`](../../../../../Interfaces/Types/CheckPermissionsResult.md)<[`Identity`](../../../../../Enums/Types/SignerType.md#identity)\>\>

___

### enabledAt

▸ **enabledAt**(`«destructured»`): `Promise`<``null`` \| [`EventIdentifier`](../../../../../Interfaces/Types/EventIdentifier.md)\>

Retrieve the identifier data (block number, date and event index) of the event that was emitted when this Identity was enabled/added as
  an Agent with permissions over a specific Asset

**`Note`**

uses the middleware

**`Note`**

there is a possibility that the data is not ready by the time it is requested. In that case, `null` is returned

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `asset` | `string` \| [`Asset`](../../Asset/Asset.md) |

#### Returns

`Promise`<``null`` \| [`EventIdentifier`](../../../../../Interfaces/Types/EventIdentifier.md)\>

___

### enabledAtV2

▸ **enabledAtV2**(`«destructured»`): `Promise`<``null`` \| [`EventIdentifier`](../../../../../Interfaces/Types/EventIdentifier.md)\>

Retrieve the identifier data (block number, date and event index) of the event that was emitted when this Identity was enabled/added as
  an Agent with permissions over a specific Asset

**`Note`**

uses the middlewareV2

**`Note`**

there is a possibility that the data is not ready by the time it is requested. In that case, `null` is returned

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `asset` | `string` \| [`Asset`](../../Asset/Asset.md) |

#### Returns

`Promise`<``null`` \| [`EventIdentifier`](../../../../../Interfaces/Types/EventIdentifier.md)\>

___

### get

▸ **get**(): `Promise`<[`AssetWithGroup`](../../../../../Interfaces/Types/AssetWithGroup.md)[]\>

Retrieve all the Assets over which this Identity has permissions, with the corresponding Permission Group

#### Returns

`Promise`<[`AssetWithGroup`](../../../../../Interfaces/Types/AssetWithGroup.md)[]\>

___

### getGroup

▸ **getGroup**(`«destructured»`): `Promise`<[`CustomPermissionGroup`](../../CustomPermissionGroup/CustomPermissionGroup.md) \| [`KnownPermissionGroup`](../../KnownPermissionGroup/KnownPermissionGroup.md)\>

Retrieve this Identity's Permission Group for a specific Asset

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `asset` | `string` \| [`Asset`](../../Asset/Asset.md) |

#### Returns

`Promise`<[`CustomPermissionGroup`](../../CustomPermissionGroup/CustomPermissionGroup.md) \| [`KnownPermissionGroup`](../../KnownPermissionGroup/KnownPermissionGroup.md)\>

___

### getOperationHistory

▸ **getOperationHistory**(`opts`): `Promise`<[`ResultSet`](../../../../../Interfaces/Types/ResultSet.md)<[`EventIdentifier`](../../../../../Interfaces/Types/EventIdentifier.md)\>\>

Retrieve all Events triggered by Operations this Identity has performed on a specific Asset

**`Note`**

uses the middleware

**`Note`**

supports pagination

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `Object` | - |
| `opts.asset` | `string` \| [`Asset`](../../Asset/Asset.md) | - |
| `opts.eventId?` | [`EventIdEnum`](../../../../../Enums/Types/EventIdEnum.md) | filters results by event |
| `opts.moduleId?` | [`ModuleIdEnum`](../../../../../Enums/Types/ModuleIdEnum.md) | filters results by module |
| `opts.size?` | `BigNumber` | page size |
| `opts.start?` | `BigNumber` | page offset |

#### Returns

`Promise`<[`ResultSet`](../../../../../Interfaces/Types/ResultSet.md)<[`EventIdentifier`](../../../../../Interfaces/Types/EventIdentifier.md)\>\>

___

### getOperationHistoryV2

▸ **getOperationHistoryV2**(`opts`): `Promise`<[`ResultSet`](../../../../../Interfaces/Types/ResultSet.md)<[`EventIdentifier`](../../../../../Interfaces/Types/EventIdentifier.md)\>\>

Retrieve all Events triggered by Operations this Identity has performed on a specific Asset

**`Note`**

uses the middlewareV2

**`Note`**

supports pagination

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `Object` | - |
| `opts.asset` | `string` \| [`Asset`](../../Asset/Asset.md) | - |
| `opts.eventId?` | [`PublicEnum8F5A39C8Ee`](../../../../../Enums/Types/PublicEnum8F5A39C8Ee.md) | filters results by event |
| `opts.moduleId?` | [`PublicEnum7A0B4Cc03E`](../../../../../Enums/Types/PublicEnum7A0B4Cc03E.md) | filters results by module |
| `opts.size?` | `BigNumber` | page size |
| `opts.start?` | `BigNumber` | page offset |

#### Returns

`Promise`<[`ResultSet`](../../../../../Interfaces/Types/ResultSet.md)<[`EventIdentifier`](../../../../../Interfaces/Types/EventIdentifier.md)\>\>

___

### setGroup

▸ **setGroup**(`args`, `opts?`): `Promise`<[`GenericPolymeshTransaction`](../../../../../Modules/Types/Types.md#genericpolymeshtransaction)<[`CustomPermissionGroup`](../../CustomPermissionGroup/CustomPermissionGroup.md) \| [`KnownPermissionGroup`](../../KnownPermissionGroup/KnownPermissionGroup.md), [`CustomPermissionGroup`](../../CustomPermissionGroup/CustomPermissionGroup.md) \| [`KnownPermissionGroup`](../../KnownPermissionGroup/KnownPermissionGroup.md)\>\>

Assign this Identity to a different Permission Group for a given Asset

**`Note`**

this method is of type [ProcedureMethod](../../../../../Interfaces/Types/ProcedureMethod.md), which means you can call [setGroup.checkAuthorization](../../../../../Interfaces/Types/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`SetPermissionGroupParams`](../../../../../Interfaces/API/Procedures/Types/SetPermissionGroupParams.md) |
| `opts?` | [`ProcedureOpts`](../../../../../Interfaces/Types/ProcedureOpts.md) |

#### Returns

`Promise`<[`GenericPolymeshTransaction`](../../../../../Modules/Types/Types.md#genericpolymeshtransaction)<[`CustomPermissionGroup`](../../CustomPermissionGroup/CustomPermissionGroup.md) \| [`KnownPermissionGroup`](../../KnownPermissionGroup/KnownPermissionGroup.md), [`CustomPermissionGroup`](../../CustomPermissionGroup/CustomPermissionGroup.md) \| [`KnownPermissionGroup`](../../KnownPermissionGroup/KnownPermissionGroup.md)\>\>

___

### waive

▸ **waive**(`args`, `opts?`): `Promise`<[`GenericPolymeshTransaction`](../../../../../Modules/Types/Types.md#genericpolymeshtransaction)<`void`, `void`\>\>

Abdicate from the current Permissions Group for a given Asset. This means that this Identity will no longer have any permissions over said Asset

**`Note`**

this method is of type [ProcedureMethod](../../../../../Interfaces/Types/ProcedureMethod.md), which means you can call [waive.checkAuthorization](../../../../../Interfaces/Types/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`WaivePermissionsParams`](../../../../../Interfaces/API/Procedures/Types/WaivePermissionsParams.md) |
| `opts?` | [`ProcedureOpts`](../../../../../Interfaces/Types/ProcedureOpts.md) |

#### Returns

`Promise`<[`GenericPolymeshTransaction`](../../../../../Modules/Types/Types.md#genericpolymeshtransaction)<`void`, `void`\>\>
