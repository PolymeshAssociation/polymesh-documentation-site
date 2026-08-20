# Interface: TransactionsParams

> Defined in: [src/api/procedures/types.ts:1755](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/procedures/types.ts#L1755)

# Interface: TransactionsParams

Defined in: [src/api/procedures/types.ts:1755](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/procedures/types.ts#L1755)

## Extends

- [`AssetBase`](AssetBase.mdx)

## Properties

### asset

> **asset**: `string` \| [`FungibleAsset`](../../../entities/Asset/Fungible/classes/FungibleAsset.mdx)

Defined in: [src/api/procedures/types.ts:1752](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/procedures/types.ts#L1752)

Asset over which the Identity will be granted permissions

#### Inherited from

[`AssetBase`](AssetBase.mdx).[`asset`](AssetBase.mdx#asset)

***

### transactions

> **transactions**: [`TransactionPermissions`](../../../entities/types/interfaces/TransactionPermissions.mdx) \| `null`

Defined in: [src/api/procedures/types.ts:1759](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/procedures/types.ts#L1759)

a null value means full permissions
