# Class: AssetHolders

> Defined in: [src/api/entities/Asset/Fungible/AssetHolders/index.ts:11](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Asset/Fungible/AssetHolders/index.ts#L11)

# Class: AssetHolders

Defined in: [src/api/entities/Asset/Fungible/AssetHolders/index.ts:11](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Asset/Fungible/AssetHolders/index.ts#L11)

Handles all Asset Holders related functionality

## Extends

- `Namespace`\<[`FungibleAsset`](../../classes/FungibleAsset.mdx)\>

## Methods

### get()

> **get**(`paginationOpts?`: [`PaginationOptions`](../../../../types/interfaces/PaginationOptions.mdx)): `Promise`\<[`ResultSet`](../../../../types/interfaces/ResultSet.mdx)\<[`IdentityBalance`](../../../types/interfaces/IdentityBalance.mdx)\>\>

Defined in: [src/api/entities/Asset/Fungible/AssetHolders/index.ts:17](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Asset/Fungible/AssetHolders/index.ts#L17)

Retrieve all the Asset Holders with their respective balance

#### Parameters

Parameter
Type

`paginationOpts?`

[`PaginationOptions`](../../../../types/interfaces/PaginationOptions.mdx)

#### Returns

`Promise`\<[`ResultSet`](../../../../types/interfaces/ResultSet.mdx)\<[`IdentityBalance`](../../../types/interfaces/IdentityBalance.mdx)\>\>

#### Note

supports pagination
