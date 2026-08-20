# Interface: CreateNftCollectionParams

> Defined in: [src/api/procedures/types.ts:871](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/procedures/types.ts#L871)

# Interface: CreateNftCollectionParams

Defined in: [src/api/procedures/types.ts:871](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/procedures/types.ts#L871)

## Properties

### assetId?

> `optional` **assetId?**: `string`

Defined in: [src/api/procedures/types.ts:876](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/procedures/types.ts#L876)

The ID of the asset to be used to create the collection.
If no assetId is provided, a new asset with `NonFungible` asset type will be created

***

### collectionKeys

> **collectionKeys**: [`CollectionKeyInput`](../type-aliases/CollectionKeyInput.mdx)[]

Defined in: [src/api/procedures/types.ts:903](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/procedures/types.ts#L903)

The required metadata values each NFT in the collection will have

#### Note

Images — Most Polymesh networks (mainnet, testnet, etc.) have global metadata keys registered to help standardize displaying images
If `imageUri` is specified as a collection key, then each token will need to be issued with an image URI.

***

### documents?

> `optional` **documents?**: [`AssetDocument`](../../../entities/Asset/types/interfaces/AssetDocument.mdx)[]

Defined in: [src/api/procedures/types.ts:907](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/procedures/types.ts#L907)

Links to off chain documents related to the NftCollection

***

### fundingRound?

> `optional` **fundingRound?**: `string`

Defined in: [src/api/procedures/types.ts:912](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/procedures/types.ts#L912)

A optional field that can be used to provide information about the funding state of the asset

***

### name?

> `optional` **name?**: `string`

Defined in: [src/api/procedures/types.ts:887](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/procedures/types.ts#L887)

The collection name. defaults to `ticker`

***

### nftType

> **nftType**: `string` \| `BigNumber`

Defined in: [src/api/procedures/types.ts:892](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/procedures/types.ts#L892)

#### Throws

if provided string that does not have a custom type

#### Throws

if provided a BigNumber that does not correspond to a custom type

***

### securityIdentifiers?

> `optional` **securityIdentifiers?**: [`SecurityIdentifier`](../../../entities/Asset/types/interfaces/SecurityIdentifier.mdx)[]

Defined in: [src/api/procedures/types.ts:896](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/procedures/types.ts#L896)

array of domestic or international alphanumeric security identifiers for the Asset (e.g. ISIN, CUSIP, FIGI)

***

### ticker?

> `optional` **ticker?**: `string`

Defined in: [src/api/procedures/types.ts:883](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/procedures/types.ts#L883)

The primary identifier for the collection.
The ticker must either be free, or the signer has appropriate permissions if reserved.

This value (if provided) is then linked to the `assetId` asset.
