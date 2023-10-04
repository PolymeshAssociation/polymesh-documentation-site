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

#### Defined in

[api/procedures/types.ts:366](https://github.com/PolymeshAssociation/polymesh-sdk/blob/d4e2c127f/src/api/procedures/types.ts#L366)

___

### documents

• `Optional` **documents**: [`AssetDocument`](../../../../Types/AssetDocument/AssetDocument.md)[]

Links to off chain documents related to the NftCollection

#### Defined in

[api/procedures/types.ts:370](https://github.com/PolymeshAssociation/polymesh-sdk/blob/d4e2c127f/src/api/procedures/types.ts#L370)

___

### name

• `Optional` **name**: `string`

The collection name. defaults to `ticker`

#### Defined in

[api/procedures/types.ts:353](https://github.com/PolymeshAssociation/polymesh-sdk/blob/d4e2c127f/src/api/procedures/types.ts#L353)

___

### nftType

• **nftType**: `string` \| `BigNumber`

**`Throws`**

 if provided string that does not have a custom type

**`Throws`**

 if provided a BigNumber that does not correspond to a custom type

#### Defined in

[api/procedures/types.ts:358](https://github.com/PolymeshAssociation/polymesh-sdk/blob/d4e2c127f/src/api/procedures/types.ts#L358)

___

### securityIdentifiers

• `Optional` **securityIdentifiers**: [`SecurityIdentifier`](../../../../Types/SecurityIdentifier/SecurityIdentifier.md)[]

array of domestic or international alphanumeric security identifiers for the Asset (e.g. ISIN, CUSIP, FIGI)

#### Defined in

[api/procedures/types.ts:362](https://github.com/PolymeshAssociation/polymesh-sdk/blob/d4e2c127f/src/api/procedures/types.ts#L362)

___

### ticker

• **ticker**: `string`

The primary identifier for the collection. The ticker must either be free, or the signer has appropriate permissions if reserved

#### Defined in

[api/procedures/types.ts:349](https://github.com/PolymeshAssociation/polymesh-sdk/blob/d4e2c127f/src/api/procedures/types.ts#L349)
