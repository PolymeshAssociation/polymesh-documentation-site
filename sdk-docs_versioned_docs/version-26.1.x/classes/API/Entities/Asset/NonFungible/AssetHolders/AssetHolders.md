---
id: "AssetHolders"
title: "Class: AssetHolders"
sidebar_label: "AssetHolders"
---

[api/entities/Asset/NonFungible/AssetHolders](../../../../../../modules/API/Entities/Asset/NonFungible/AssetHolders/AssetHolders.md).AssetHolders

Handles all NFT Holders related functionality

## Hierarchy

- `Namespace`\<[`NftCollection`](../../../../../../modules/API/Entities/Types/Types.md#nftcollection)\>

  ↳ **`AssetHolders`**

## Methods

### get

▸ **get**(`opts`): `Promise`\<[`ResultSet`](../../../../../../interfaces/API/Entities/Types/ResultSet/ResultSet.md)\<[`IdentityHeldNfts`](../../../../../../interfaces/API/Entities/Asset/Types/IdentityHeldNfts/IdentityHeldNfts.md)\>\>

Retrieve all the NFT Holders with their holdings

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `Object` |
| `opts.size?` | `BigNumber` |
| `opts.start?` | `BigNumber` |

#### Returns

`Promise`\<[`ResultSet`](../../../../../../interfaces/API/Entities/Types/ResultSet/ResultSet.md)\<[`IdentityHeldNfts`](../../../../../../interfaces/API/Entities/Asset/Types/IdentityHeldNfts/IdentityHeldNfts.md)\>\>

**`Note`**

uses the middlewareV2

#### Defined in

[api/entities/Asset/NonFungible/AssetHolders/index.ts:19](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b55e63737/src/api/entities/Asset/NonFungible/AssetHolders/index.ts#L19)
