---
id: "CreateNftCollectionParams"
title: "Interface: CreateNftCollectionParams"
sidebar_label: "CreateNftCollectionParams"
---

[api/procedures/types](../../../../../modules/API/Procedures/Types/Types.md).CreateNftCollectionParams

## Properties

### assetId

• `Optional` **assetId**: `string`

The ID of the asset to be used to create the collection.
If no assetId is provided, a new asset with `NonFungible` asset type will be created

**`Note`**

for spec version before 7.x, this value is overwritten by `ticker` value

#### Defined in

[api/procedures/types.ts:770](https://github.com/PolymeshAssociation/polymesh-sdk/blob/f8a937f04/src/api/procedures/types.ts#L770)

___

### collectionKeys

• **collectionKeys**: [`CollectionKeyInput`](../../../../../modules/API/Procedures/Types/Types.md#collectionkeyinput)[]

The required metadata values each NFT in the collection will have

**`Note`**

Images — Most Polymesh networks (mainnet, testnet, etc.) have global metadata keys registered to help standardize displaying images
If `imageUri` is specified as a collection key, then each token will need to be issued with an image URI.

#### Defined in

[api/procedures/types.ts:799](https://github.com/PolymeshAssociation/polymesh-sdk/blob/f8a937f04/src/api/procedures/types.ts#L799)

___

### documents

• `Optional` **documents**: [`AssetDocument`](../../../Entities/Asset/Types/AssetDocument/AssetDocument.md)[]

Links to off chain documents related to the NftCollection

#### Defined in

[api/procedures/types.ts:803](https://github.com/PolymeshAssociation/polymesh-sdk/blob/f8a937f04/src/api/procedures/types.ts#L803)

___

### fundingRound

• `Optional` **fundingRound**: `string`

A optional field that can be used to provide information about the funding state of the asset

#### Defined in

[api/procedures/types.ts:808](https://github.com/PolymeshAssociation/polymesh-sdk/blob/f8a937f04/src/api/procedures/types.ts#L808)

___

### name

• `Optional` **name**: `string`

The collection name. defaults to `ticker`

#### Defined in

[api/procedures/types.ts:783](https://github.com/PolymeshAssociation/polymesh-sdk/blob/f8a937f04/src/api/procedures/types.ts#L783)

___

### nftType

• **nftType**: `string` \| `BigNumber`

**`Throws`**

if provided string that does not have a custom type

**`Throws`**

if provided a BigNumber that does not correspond to a custom type

#### Defined in

[api/procedures/types.ts:788](https://github.com/PolymeshAssociation/polymesh-sdk/blob/f8a937f04/src/api/procedures/types.ts#L788)

___

### securityIdentifiers

• `Optional` **securityIdentifiers**: [`SecurityIdentifier`](../../../Entities/Asset/Types/SecurityIdentifier/SecurityIdentifier.md)[]

array of domestic or international alphanumeric security identifiers for the Asset (e.g. ISIN, CUSIP, FIGI)

#### Defined in

[api/procedures/types.ts:792](https://github.com/PolymeshAssociation/polymesh-sdk/blob/f8a937f04/src/api/procedures/types.ts#L792)

___

### ticker

• `Optional` **ticker**: `string`

The primary identifier for the collection.
The ticker must either be free, or the signer has appropriate permissions if reserved.

Since spec version 7.x, this value (if provided) is then linked to `assetId` asset

**`Note`**

This value is mandatory for spec version before 7.x

#### Defined in

[api/procedures/types.ts:779](https://github.com/PolymeshAssociation/polymesh-sdk/blob/f8a937f04/src/api/procedures/types.ts#L779)
