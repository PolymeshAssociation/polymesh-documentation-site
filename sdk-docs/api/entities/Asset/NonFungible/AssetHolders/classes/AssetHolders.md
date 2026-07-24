# Class: AssetHolders

> Defined in: [src/api/entities/Asset/NonFungible/AssetHolders/index.ts:13](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Asset/NonFungible/AssetHolders/index.ts#L13)

# Class: AssetHolders

Defined in: [src/api/entities/Asset/NonFungible/AssetHolders/index.ts:13](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Asset/NonFungible/AssetHolders/index.ts#L13)

Handles all NFT Holders related functionality

## Extends

- `Namespace`\<[`NftCollection`](../../../../types/type-aliases/NftCollection.mdx)\>

## Methods

### get()

> **get**(`opts`: `object`): `Promise`\<[`ResultSet`](../../../../types/interfaces/ResultSet.mdx)\<[`IdentityHeldNfts`](../../../types/interfaces/IdentityHeldNfts.mdx)\>\>

Defined in: [src/api/entities/Asset/NonFungible/AssetHolders/index.ts:19](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Asset/NonFungible/AssetHolders/index.ts#L19)

Retrieve all the NFT Holders with their holdings

#### Parameters

Parameter
Type

`opts`

\{ `size?`: `BigNumber`; `start?`: `BigNumber`; \}

`opts.size?`

`BigNumber`

`opts.start?`

`BigNumber`

#### Returns

`Promise`\<[`ResultSet`](../../../../types/interfaces/ResultSet.mdx)\<[`IdentityHeldNfts`](../../../types/interfaces/IdentityHeldNfts.mdx)\>\>

#### Note

uses the middlewareV2
