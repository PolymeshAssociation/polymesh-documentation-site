# Class: Documents

> Defined in: [src/api/entities/Asset/Base/Documents/index.ts:24](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Asset/Base/Documents/index.ts#L24)

# Class: Documents

Defined in: [src/api/entities/Asset/Base/Documents/index.ts:24](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Asset/Base/Documents/index.ts#L24)

Handles all Asset Document related functionality

## Extends

- `Namespace`\<[`BaseAsset`](../../BaseAsset/classes/BaseAsset.mdx)\>

## Methods

### add()

> **add**(`args`: [`AddAssetDocumentsParams`](../../../../../procedures/types/interfaces/AddAssetDocumentsParams.mdx), `opts?`: [`ProcedureOpts`](../../../../../procedures/types/interfaces/ProcedureOpts.mdx)): `Promise`\<[`GenericPolymeshTransaction`](../../../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

Defined in: [src/api/entities/Asset/Base/Documents/index.ts:57](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Asset/Base/Documents/index.ts#L57)

Add documents to the Asset's existing list of documents

#### Parameters

Parameter
Type

`args`

[`AddAssetDocumentsParams`](../../../../../procedures/types/interfaces/AddAssetDocumentsParams.mdx)

`opts?`

[`ProcedureOpts`](../../../../../procedures/types/interfaces/ProcedureOpts.mdx)

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

#### Note

this method is of type [ProcedureMethod](../../../../../procedures/types/interfaces/ProcedureMethod.mdx), which means you can call [add.checkAuthorization](../../../../../procedures/types/interfaces/ProcedureMethod.mdx#checkauthorization) on it to see whether the signing Account and Identity have the required roles and permissions to run it

***

### get()

> **get**(`paginationOpts?`: [`PaginationOptions`](../../../../types/interfaces/PaginationOptions.mdx)): `Promise`\<[`ResultSet`](../../../../types/interfaces/ResultSet.mdx)\<[`AssetDocumentWithId`](../../../types/interfaces/AssetDocumentWithId.mdx)\>\>

Defined in: [src/api/entities/Asset/Base/Documents/index.ts:70](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Asset/Base/Documents/index.ts#L70)

Retrieve all documents linked to the Asset

#### Parameters

Parameter
Type

`paginationOpts?`

[`PaginationOptions`](../../../../types/interfaces/PaginationOptions.mdx)

#### Returns

`Promise`\<[`ResultSet`](../../../../types/interfaces/ResultSet.mdx)\<[`AssetDocumentWithId`](../../../types/interfaces/AssetDocumentWithId.mdx)\>\>

#### Note

supports pagination

#### Note

returns documents with their on-chain IDs which can be used with the `remove` method

***

### remove()

> **remove**(`args`: [`RemoveAssetDocumentsParams`](../../../../../procedures/types/interfaces/RemoveAssetDocumentsParams.mdx), `opts?`: [`ProcedureOpts`](../../../../../procedures/types/interfaces/ProcedureOpts.mdx)): `Promise`\<[`GenericPolymeshTransaction`](../../../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

Defined in: [src/api/entities/Asset/Base/Documents/index.ts:62](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Asset/Base/Documents/index.ts#L62)

Remove specific documents from the Asset by their IDs

#### Parameters

Parameter
Type

`args`

[`RemoveAssetDocumentsParams`](../../../../../procedures/types/interfaces/RemoveAssetDocumentsParams.mdx)

`opts?`

[`ProcedureOpts`](../../../../../procedures/types/interfaces/ProcedureOpts.mdx)

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

#### Note

this method is of type [ProcedureMethod](../../../../../procedures/types/interfaces/ProcedureMethod.mdx), which means you can call [remove.checkAuthorization](../../../../../procedures/types/interfaces/ProcedureMethod.mdx#checkauthorization) on it to see whether the signing Account and Identity have the required roles and permissions to run it

***

### set()

> **set**(`args`: [`SetAssetDocumentsParams`](../../../../../procedures/types/interfaces/SetAssetDocumentsParams.mdx), `opts?`: [`ProcedureOpts`](../../../../../procedures/types/interfaces/ProcedureOpts.mdx)): `Promise`\<[`GenericPolymeshTransaction`](../../../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

Defined in: [src/api/entities/Asset/Base/Documents/index.ts:52](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Asset/Base/Documents/index.ts#L52)

Assign a new list of documents to the Asset by replacing the existing list of documents with the ones passed in the parameters

#### Parameters

Parameter
Type

`args`

[`SetAssetDocumentsParams`](../../../../../procedures/types/interfaces/SetAssetDocumentsParams.mdx)

`opts?`

[`ProcedureOpts`](../../../../../procedures/types/interfaces/ProcedureOpts.mdx)

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

#### Note

this removes all existing documents and adds the new ones

#### Note

this method is of type [ProcedureMethod](../../../../../procedures/types/interfaces/ProcedureMethod.mdx), which means you can call [set.checkAuthorization](../../../../../procedures/types/interfaces/ProcedureMethod.mdx#checkauthorization) on it to see whether the signing Account and Identity have the required roles and permissions to run it
