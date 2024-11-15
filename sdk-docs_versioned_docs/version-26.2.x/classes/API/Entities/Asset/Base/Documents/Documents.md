---
id: "Documents"
title: "Class: Documents"
sidebar_label: "Documents"
---

[api/entities/Asset/Base/Documents](../../../../../../modules/API/Entities/Asset/Base/Documents/Documents.md).Documents

Handles all Asset Document related functionality

## Hierarchy

- `Namespace`\<[`BaseAsset`](../BaseAsset/BaseAsset.md)\>

  ↳ **`Documents`**

## Methods

### get

▸ **get**(`paginationOpts?`): `Promise`\<[`ResultSet`](../../../../../../interfaces/API/Entities/Types/ResultSet/ResultSet.md)\<[`AssetDocument`](../../../../../../interfaces/API/Entities/Asset/Types/AssetDocument/AssetDocument.md)\>\>

Retrieve all documents linked to the Asset

#### Parameters

| Name | Type |
| :------ | :------ |
| `paginationOpts?` | [`PaginationOptions`](../../../../../../interfaces/API/Entities/Types/PaginationOptions/PaginationOptions.md) |

#### Returns

`Promise`\<[`ResultSet`](../../../../../../interfaces/API/Entities/Types/ResultSet/ResultSet.md)\<[`AssetDocument`](../../../../../../interfaces/API/Entities/Asset/Types/AssetDocument/AssetDocument.md)\>\>

**`Note`**

supports pagination

#### Defined in

[api/entities/Asset/Base/Documents/index.ts:45](https://github.com/PolymeshAssociation/polymesh-sdk/blob/3cc570ade/src/api/entities/Asset/Base/Documents/index.ts#L45)

___

### set

▸ **set**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

Assign a new list of documents to the Asset by replacing the existing list of documents with the ones passed in the parameters

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`SetAssetDocumentsParams`](../../../../../../interfaces/API/Procedures/Types/SetAssetDocumentsParams/SetAssetDocumentsParams.md) |
| `opts?` | [`ProcedureOpts`](../../../../../../interfaces/API/Procedures/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

**`Note`**

this method is of type [ProcedureMethod](../../../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [set.checkAuthorization](../../../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/entities/Asset/Base/Documents/index.ts:36](https://github.com/PolymeshAssociation/polymesh-sdk/blob/3cc570ade/src/api/entities/Asset/Base/Documents/index.ts#L36)
