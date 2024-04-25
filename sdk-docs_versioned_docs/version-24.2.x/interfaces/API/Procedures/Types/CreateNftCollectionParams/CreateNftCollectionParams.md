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

[api/procedures/types.ts:691](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fedc4714f/src/api/procedures/types.ts#L691)

___

### documents

• `Optional` **documents**: [`AssetDocument`](../../../Entities/Asset/Types/AssetDocument/AssetDocument.md)[]

Links to off chain documents related to the NftCollection

#### Defined in

[api/procedures/types.ts:695](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fedc4714f/src/api/procedures/types.ts#L695)

___

### fundingRound

• `Optional` **fundingRound**: `string`

A optional field that can be used to provide information about the funding state of the asset

#### Defined in

[api/procedures/types.ts:700](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fedc4714f/src/api/procedures/types.ts#L700)

___

### name

• `Optional` **name**: `string`

The collection name. defaults to `ticker`

#### Defined in

[api/procedures/types.ts:675](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fedc4714f/src/api/procedures/types.ts#L675)

___

### nftType

• **nftType**: `string` \| `BigNumber`

**`Throws`**

if provided string that does not have a custom type

**`Throws`**

if provided a BigNumber that does not correspond to a custom type

#### Defined in

[api/procedures/types.ts:680](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fedc4714f/src/api/procedures/types.ts#L680)

___

### securityIdentifiers

• `Optional` **securityIdentifiers**: [`SecurityIdentifier`](../../../Entities/Asset/Types/SecurityIdentifier/SecurityIdentifier.md)[]

array of domestic or international alphanumeric security identifiers for the Asset (e.g. ISIN, CUSIP, FIGI)

#### Defined in

[api/procedures/types.ts:684](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fedc4714f/src/api/procedures/types.ts#L684)

___

### ticker

• **ticker**: `string`

The primary identifier for the collection. The ticker must either be free, or the signer has appropriate permissions if reserved

#### Defined in

[api/procedures/types.ts:671](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fedc4714f/src/api/procedures/types.ts#L671)
