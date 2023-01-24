[api/entities/Asset/Documents](../../../../../Modules/API/Entities/Asset/Documents.md).Documents

Handles all Asset Document related functionality

## Hierarchy

- `Namespace`<[`Asset`](../Asset.md)\>

  ↳ **`Documents`**

## Methods

### get

▸ **get**(`paginationOpts?`): `Promise`<[`ResultSet`](../../../../../Interfaces/Types/ResultSet.md)<[`AssetDocument`](../../../../../Interfaces/Types/AssetDocument.md)\>\>

Retrieve all documents linked to the Asset

**`Note`**

supports pagination

#### Parameters

| Name | Type |
| :------ | :------ |
| `paginationOpts?` | [`PaginationOptions`](../../../../../Interfaces/Types/PaginationOptions.md) |

#### Returns

`Promise`<[`ResultSet`](../../../../../Interfaces/Types/ResultSet.md)<[`AssetDocument`](../../../../../Interfaces/Types/AssetDocument.md)\>\>

___

### set

▸ **set**(`args`, `opts?`): `Promise`<[`GenericPolymeshTransaction`](../../../../../Modules/Types/Types.md#genericpolymeshtransaction)<[`Asset`](../Asset.md), [`Asset`](../Asset.md)\>\>

Assign a new list of documents to the Asset by replacing the existing list of documents with the ones passed in the parameters

This requires two transactions

**`Note`**

this method is of type [ProcedureMethod](../../../../../Interfaces/Types/ProcedureMethod.md), which means you can call [set.checkAuthorization](../../../../../Interfaces/Types/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`SetAssetDocumentsParams`](../../../../../Interfaces/API/Procedures/Types/SetAssetDocumentsParams.md) |
| `opts?` | [`ProcedureOpts`](../../../../../Interfaces/Types/ProcedureOpts.md) |

#### Returns

`Promise`<[`GenericPolymeshTransaction`](../../../../../Modules/Types/Types.md#genericpolymeshtransaction)<[`Asset`](../Asset.md), [`Asset`](../Asset.md)\>\>
