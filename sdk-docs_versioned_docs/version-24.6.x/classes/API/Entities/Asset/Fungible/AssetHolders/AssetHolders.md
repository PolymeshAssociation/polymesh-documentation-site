---
id: "AssetHolders"
title: "Class: AssetHolders"
sidebar_label: "AssetHolders"
---

[api/entities/Asset/Fungible/AssetHolders](../../../../../../modules/API/Entities/Asset/Fungible/AssetHolders/AssetHolders.md).AssetHolders

Handles all Asset Holders related functionality

## Hierarchy

- `Namespace`\<[`FungibleAsset`](../FungibleAsset.md)\>

  ↳ **`AssetHolders`**

## Methods

### get

▸ **get**(`paginationOpts?`): `Promise`\<[`ResultSet`](../../../../../../interfaces/API/Entities/Types/ResultSet/ResultSet.md)\<[`IdentityBalance`](../../../../../../interfaces/API/Entities/Asset/Types/IdentityBalance/IdentityBalance.md)\>\>

Retrieve all the Asset Holders with their respective balance

#### Parameters

| Name | Type |
| :------ | :------ |
| `paginationOpts?` | [`PaginationOptions`](../../../../../../interfaces/API/Entities/Types/PaginationOptions/PaginationOptions.md) |

#### Returns

`Promise`\<[`ResultSet`](../../../../../../interfaces/API/Entities/Types/ResultSet/ResultSet.md)\<[`IdentityBalance`](../../../../../../interfaces/API/Entities/Asset/Types/IdentityBalance/IdentityBalance.md)\>\>

**`Note`**

supports pagination

#### Defined in

[api/entities/Asset/Fungible/AssetHolders/index.ts:17](https://github.com/PolymeshAssociation/polymesh-sdk/blob/654b99c8d/src/api/entities/Asset/Fungible/AssetHolders/index.ts#L17)
