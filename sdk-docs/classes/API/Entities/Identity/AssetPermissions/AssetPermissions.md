---
id: 'AssetPermissions'
title: 'Class: AssetPermissions'
sidebar_label: 'AssetPermissions'
---

[api/entities/Identity/AssetPermissions](../../../../../modules/API/Entities/Identity/AssetPermissions/AssetPermissions.md).AssetPermissions

Handles all Asset Permissions (External Agents) related functionality on the Identity side

## Hierarchy

- `Namespace`\<[`Identity`](../Identity.md)\>

  ↳ **`AssetPermissions`**

## Methods

### checkPermissions

▸ **checkPermissions**(`args`): `Promise`\<[`CheckPermissionsResult`](../../../../../interfaces/Types/CheckPermissionsResult/CheckPermissionsResult.md) \<[`Identity`](../../../../../enums/Types/SignerType/SignerType.md#identity)\>\>

Check whether this Identity has specific transaction Permissions over an Asset

#### Parameters

| Name                | Type                                                                         |
| :------------------ | :--------------------------------------------------------------------------- |
| `args`              | `Object`                                                                     |
| `args.asset`        | `string` \| [`BaseAsset`](../../Asset/Base/BaseAsset/BaseAsset.md)           |
| `args.transactions` | `null` \| [`TxTag`](../../../../../modules/Generated/Types/Types.md#txtag)[] |

#### Returns

`Promise`\<[`CheckPermissionsResult`](../../../../../interfaces/Types/CheckPermissionsResult/CheckPermissionsResult.md) \<[`Identity`](../../../../../enums/Types/SignerType/SignerType.md#identity)\>\>

#### Defined in

[api/entities/Identity/AssetPermissions.ts:129](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/api/entities/Identity/AssetPermissions.ts#L129)

---

### enabledAt

▸ **enabledAt**(`«destructured»`): `Promise`\<`null` \| [`EventIdentifier`](../../../../../interfaces/Types/EventIdentifier/EventIdentifier.md)\>

Retrieve the identifier data (block number, date and event index) of the event that was emitted when this Identity was enabled/added as
an Agent with permissions over a specific Asset

#### Parameters

| Name             | Type                                                                                                                                              |
| :--------------- | :------------------------------------------------------------------------------------------------------------------------------------------------ |
| `«destructured»` | `Object`                                                                                                                                          |
| › `asset`        | `string` \| [`FungibleAsset`](../../Asset/Fungible/FungibleAsset.md) \| [`NftCollection`](../../Asset/NonFungible/NftCollection/NftCollection.md) |

#### Returns

`Promise`\<`null` \| [`EventIdentifier`](../../../../../interfaces/Types/EventIdentifier/EventIdentifier.md)\>

**`Note`**

uses the middlewareV2

**`Note`**

there is a possibility that the data is not ready by the time it is requested. In that case, `null` is returned

#### Defined in

[api/entities/Identity/AssetPermissions.ts:319](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/api/entities/Identity/AssetPermissions.ts#L319)

---

### get

▸ **get**(): `Promise`\<[`AssetWithGroup`](../../../../../interfaces/Types/AssetWithGroup/AssetWithGroup.md)[]\>

Retrieve all the Assets over which this Identity has permissions, with the corresponding Permission Group

#### Returns

`Promise`\<[`AssetWithGroup`](../../../../../interfaces/Types/AssetWithGroup/AssetWithGroup.md)[]\>

#### Defined in

[api/entities/Identity/AssetPermissions.ts:100](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/api/entities/Identity/AssetPermissions.ts#L100)

---

### getGroup

▸ **getGroup**(`«destructured»`): `Promise`\<[`CustomPermissionGroup`](../../CustomPermissionGroup/CustomPermissionGroup.md) \| [`KnownPermissionGroup`](../../KnownPermissionGroup/KnownPermissionGroup.md)\>

Retrieve this Identity's Permission Group for a specific Asset

#### Parameters

| Name             | Type                                                               |
| :--------------- | :----------------------------------------------------------------- |
| `«destructured»` | `Object`                                                           |
| › `asset`        | `string` \| [`BaseAsset`](../../Asset/Base/BaseAsset/BaseAsset.md) |

#### Returns

`Promise`\<[`CustomPermissionGroup`](../../CustomPermissionGroup/CustomPermissionGroup.md) \| [`KnownPermissionGroup`](../../KnownPermissionGroup/KnownPermissionGroup.md)\>

#### Defined in

[api/entities/Identity/AssetPermissions.ts:279](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/api/entities/Identity/AssetPermissions.ts#L279)

---

### getOperationHistory

▸ **getOperationHistory**(`opts`): `Promise`\<[`ResultSet`](../../../../../interfaces/Types/ResultSet/ResultSet.md) \<[`EventIdentifier`](../../../../../interfaces/Types/EventIdentifier/EventIdentifier.md)\>\>

Retrieve all Events triggered by Operations this Identity has performed on a specific Asset

#### Parameters

| Name             | Type                                                                      | Description               |
| :--------------- | :------------------------------------------------------------------------ | :------------------------ |
| `opts`           | `Object`                                                                  | -                         |
| `opts.asset`     | `string` \| [`FungibleAsset`](../../Asset/Fungible/FungibleAsset.md)      | -                         |
| `opts.eventId?`  | [`EventIdEnum`](../../../../../enums/Types/EventIdEnum/EventIdEnum.md)    | filters results by event  |
| `opts.moduleId?` | [`ModuleIdEnum`](../../../../../enums/Types/ModuleIdEnum/ModuleIdEnum.md) | filters results by module |
| `opts.size?`     | `BigNumber`                                                               | page size                 |
| `opts.start?`    | `BigNumber`                                                               | page offset               |

#### Returns

`Promise`\<[`ResultSet`](../../../../../interfaces/Types/ResultSet/ResultSet.md) \<[`EventIdentifier`](../../../../../interfaces/Types/EventIdentifier/EventIdentifier.md)\>\>

**`Note`**

uses the middlewareV2

**`Note`**

supports pagination

#### Defined in

[api/entities/Identity/AssetPermissions.ts:373](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/api/entities/Identity/AssetPermissions.ts#L373)

---

### setGroup

▸ **setGroup**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../../modules/Types/Types.md#genericpolymeshtransaction) \<[`CustomPermissionGroup`](../../CustomPermissionGroup/CustomPermissionGroup.md) \| [`KnownPermissionGroup`](../../KnownPermissionGroup/KnownPermissionGroup.md), [`CustomPermissionGroup`](../../CustomPermissionGroup/CustomPermissionGroup.md) \| [`KnownPermissionGroup`](../../KnownPermissionGroup/KnownPermissionGroup.md)\>\>

Assign this Identity to a different Permission Group for a given Asset

#### Parameters

| Name    | Type                                                                                                                              |
| :------ | :-------------------------------------------------------------------------------------------------------------------------------- |
| `args`  | [`SetPermissionGroupParams`](../../../../../interfaces/API/Procedures/Types/SetPermissionGroupParams/SetPermissionGroupParams.md) |
| `opts?` | [`ProcedureOpts`](../../../../../interfaces/Types/ProcedureOpts/ProcedureOpts.md)                                                 |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../../modules/Types/Types.md#genericpolymeshtransaction) \<[`CustomPermissionGroup`](../../CustomPermissionGroup/CustomPermissionGroup.md) \| [`KnownPermissionGroup`](../../KnownPermissionGroup/KnownPermissionGroup.md), [`CustomPermissionGroup`](../../CustomPermissionGroup/CustomPermissionGroup.md) \| [`KnownPermissionGroup`](../../KnownPermissionGroup/KnownPermissionGroup.md)\>\>

**`Note`**

this method is of type [ProcedureMethod](../../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [setGroup.checkAuthorization](../../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/entities/Identity/AssetPermissions.ts:358](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/api/entities/Identity/AssetPermissions.ts#L358)

---

### waive

▸ **waive**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../../modules/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

Abdicate from the current Permissions Group for a given Asset. This means that this Identity will no longer have any permissions over said Asset

#### Parameters

| Name    | Type                                                                                                                        |
| :------ | :-------------------------------------------------------------------------------------------------------------------------- |
| `args`  | [`WaivePermissionsParams`](../../../../../interfaces/API/Procedures/Types/WaivePermissionsParams/WaivePermissionsParams.md) |
| `opts?` | [`ProcedureOpts`](../../../../../interfaces/Types/ProcedureOpts/ProcedureOpts.md)                                           |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../../modules/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

**`Note`**

this method is of type [ProcedureMethod](../../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [waive.checkAuthorization](../../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/entities/Identity/AssetPermissions.ts:348](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/api/entities/Identity/AssetPermissions.ts#L348)
