---
id: "CreateNftCollectionParams"
title: "Interface: CreateNftCollectionParams"
sidebar_label: "CreateNftCollectionParams"
---

[api/procedures/types](../../../../../modules/API/Procedures/Types/Types.md).CreateNftCollectionParams

## Properties

### collectionKeys

• **collectionKeys**: [`CollectionKeyInput`](../../../../../modules/API/Procedures/Types/Types.md#collectionkeyinput)[]

The required metadata values each NFT in the collection will have

**`Note`**

Images — Most Polymesh networks (mainnet, testnet, etc.) have global metadata keys registered to help standardize displaying images
If `imageUri` is specified as a collection key, then each token will need to be issued with an image URI.

#### Defined in

[api/procedures/types.ts:379](https://github.com/PolymeshAssociation/polymesh-sdk/blob/daafaa68f/src/api/procedures/types.ts#L379)

___

### documents

• `Optional` **documents**: [`AssetDocument`](../../../../Types/AssetDocument/AssetDocument.md)[]

Links to off chain documents related to the NftCollection

#### Defined in

[api/procedures/types.ts:383](https://github.com/PolymeshAssociation/polymesh-sdk/blob/daafaa68f/src/api/procedures/types.ts#L383)

___

### name

• `Optional` **name**: `string`

The collection name. defaults to `ticker`

#### Defined in

[api/procedures/types.ts:363](https://github.com/PolymeshAssociation/polymesh-sdk/blob/daafaa68f/src/api/procedures/types.ts#L363)

___

### nftType

• **nftType**: `string` \| `BigNumber`

**`Throws`**

if provided string that does not have a custom type

**`Throws`**

if provided a BigNumber that does not correspond to a custom type

#### Defined in

[api/procedures/types.ts:368](https://github.com/PolymeshAssociation/polymesh-sdk/blob/daafaa68f/src/api/procedures/types.ts#L368)

___

### securityIdentifiers

• `Optional` **securityIdentifiers**: [`SecurityIdentifier`](../../../../Types/SecurityIdentifier/SecurityIdentifier.md)[]

array of domestic or international alphanumeric security identifiers for the Asset (e.g. ISIN, CUSIP, FIGI)

#### Defined in

[api/procedures/types.ts:372](https://github.com/PolymeshAssociation/polymesh-sdk/blob/daafaa68f/src/api/procedures/types.ts#L372)

___

### ticker

• **ticker**: `string`

The primary identifier for the collection. The ticker must either be free, or the signer has appropriate permissions if reserved

#### Defined in

[api/procedures/types.ts:359](https://github.com/PolymeshAssociation/polymesh-sdk/blob/daafaa68f/src/api/procedures/types.ts#L359)
