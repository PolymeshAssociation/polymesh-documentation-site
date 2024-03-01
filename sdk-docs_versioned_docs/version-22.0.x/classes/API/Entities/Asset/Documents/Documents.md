---
id: 'Documents'
title: 'Class: Documents'
sidebar_label: 'Documents'
---

[api/entities/Asset/Documents](../../../../../modules/API/Entities/Asset/Documents/Documents.md).Documents

Handles all Asset Document related functionality

## Hierarchy

- `Namespace`\<[`Asset`](../Asset.md)\>

  ↳ **`Documents`**

## Methods

### get

▸ **get**(`paginationOpts?`): `Promise`\<[`ResultSet`](../../../../../interfaces/Types/ResultSet/ResultSet.md) \<[`AssetDocument`](../../../../../interfaces/Types/AssetDocument/AssetDocument.md)\>\>

Retrieve all documents linked to the Asset

#### Parameters

| Name              | Type                                                                                          |
| :---------------- | :-------------------------------------------------------------------------------------------- |
| `paginationOpts?` | [`PaginationOptions`](../../../../../interfaces/Types/PaginationOptions/PaginationOptions.md) |

#### Returns

`Promise`\<[`ResultSet`](../../../../../interfaces/Types/ResultSet/ResultSet.md) \<[`AssetDocument`](../../../../../interfaces/Types/AssetDocument/AssetDocument.md)\>\>

**`Note`**

supports pagination

#### Defined in

[api/entities/Asset/Documents.ts:50](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2d3ac2aea/src/api/entities/Asset/Documents.ts#L50)

---

### set

▸ **set**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../../modules/Types/Types.md#genericpolymeshtransaction) \<[`Asset`](../Asset.md), [`Asset`](../Asset.md)\>\>

Assign a new list of documents to the Asset by replacing the existing list of documents with the ones passed in the parameters

This requires two transactions

#### Parameters

| Name    | Type                                                                                                                           |
| :------ | :----------------------------------------------------------------------------------------------------------------------------- |
| `args`  | [`SetAssetDocumentsParams`](../../../../../interfaces/API/Procedures/Types/SetAssetDocumentsParams/SetAssetDocumentsParams.md) |
| `opts?` | [`ProcedureOpts`](../../../../../interfaces/Types/ProcedureOpts/ProcedureOpts.md)                                              |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../../modules/Types/Types.md#genericpolymeshtransaction) \<[`Asset`](../Asset.md), [`Asset`](../Asset.md)\>\>

**`Note`**

this method is of type [ProcedureMethod](../../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [set.checkAuthorization](../../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/entities/Asset/Documents.ts:41](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2d3ac2aea/src/api/entities/Asset/Documents.ts#L41)
