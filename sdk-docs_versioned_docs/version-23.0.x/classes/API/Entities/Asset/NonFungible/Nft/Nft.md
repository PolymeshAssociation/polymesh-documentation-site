---
id: 'Nft'
title: 'Class: Nft'
sidebar_label: 'Nft'
---

[api/entities/Asset/NonFungible/Nft](../../../../../../modules/API/Entities/Asset/NonFungible/Nft/Nft.md).Nft

Class used to manage Nft functionality. Each NFT belongs to an NftCollection, which specifies the expected metadata values for each NFT

## Hierarchy

- [`Entity`](../../../Entity/Entity.md) \<[`NftUniqueIdentifiers`](../../../../../../modules/API/Entities/Asset/NonFungible/Nft/Nft.md#nftuniqueidentifiers), [`HumanReadable`](../../../../../../interfaces/API/Entities/Asset/NonFungible/Nft/HumanReadable/HumanReadable.md)\>

  ↳ **`Nft`**

## Properties

### collection

• **collection**: [`NftCollection`](../NftCollection/NftCollection.md)

The [NftCollection](../../../../../../modules/API/Entities/Asset/NonFungible/NftCollection/NftCollection.md) this NFT belongs to

#### Defined in

[api/entities/Asset/NonFungible/Nft.ts:40](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2c78f6c34/src/api/entities/Asset/NonFungible/Nft.ts#L40)

---

### id

• **id**: `BigNumber`

#### Defined in

[api/entities/Asset/NonFungible/Nft.ts:35](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2c78f6c34/src/api/entities/Asset/NonFungible/Nft.ts#L35)

---

### uuid

• **uuid**: `string`

#### Inherited from

[Entity](../../../Entity/Entity.md).[uuid](../../../Entity/Entity.md#uuid)

#### Defined in

[api/entities/Entity.ts:46](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2c78f6c34/src/api/entities/Entity.ts#L46)

## Methods

### exists

▸ **exists**(): `Promise`\<`boolean`\>

Determine if the NFT exists on chain

#### Returns

`Promise`\<`boolean`\>

**`Note`**

This method returns true, even if the token has been redeemed/burned

#### Overrides

[Entity](../../../Entity/Entity.md).[exists](../../../Entity/Entity.md#exists)

#### Defined in

[api/entities/Asset/NonFungible/Nft.ts:116](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2c78f6c34/src/api/entities/Asset/NonFungible/Nft.ts#L116)

---

### getImageUri

▸ **getImageUri**(): `Promise`\<`null` \| `string`\>

Get the conventional image URI for the NFT

This function will check for a token level value and a collection level value. Token level values take precedence over base values in case of a conflict.

When creating a collection an issuer can either require per token images by specifying global metadata key `imageUri` as a collection key or by
setting a collection base image URL by setting a value on the collection corresponding to the global metadata key `baseImageUri`.

This method will return `null` if the NFT issuer did not configure the collection according to the convention.

Per token URIs provide the most flexibility, but require more chain space to store, increasing the POLYX fee to issue each token.

The URI values can include `{tokenId}` that will be replaced with the NFTs ID. If a base URI does not specify this the ID will be appended onto the URL. Examples:

- `https://example.com/nfts/{tokenId}/image.png` becomes `https://example.com/nfts/1/image.png`
- `https://example.com/nfts` becomes `https://example.com/nfts/1` if used a base value, but remain unchanged as a local value

#### Returns

`Promise`\<`null` \| `string`\>

#### Defined in

[api/entities/Asset/NonFungible/Nft.ts:151](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2c78f6c34/src/api/entities/Asset/NonFungible/Nft.ts#L151)

---

### getMetadata

▸ **getMetadata**(): `Promise`\<[`NftMetadata`](../../../../../../interfaces/API/Entities/Asset/Types/NftMetadata/NftMetadata.md)[]\>

Get metadata associated with this token

#### Returns

`Promise`\<[`NftMetadata`](../../../../../../interfaces/API/Entities/Asset/Types/NftMetadata/NftMetadata.md)[]\>

#### Defined in

[api/entities/Asset/NonFungible/Nft.ts:85](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2c78f6c34/src/api/entities/Asset/NonFungible/Nft.ts#L85)

---

### getTokenUri

▸ **getTokenUri**(): `Promise`\<`null` \| `string`\>

Get the conventional token URI for the NFT

This function will check for a token level value and a collection level value. Token level values take precedence over base values in case of a conflict.

When creating a collection an issuer can either require per token URL by specifying global metadata key `tokenURI` as a collection key or by
setting a collection base URL by setting a value on the collection corresponding to the global metadata key `baseTokenUri` on the collection.

This method will return `null` if the NFT issuer did not configure the collection according to the convention.

Per token URIs provide the most flexibility, but require more chain space to store, increasing the POLYX fee to issue each token.

The URI values can include `{tokenId}` that will be replaced with the NFTs ID. If a base URI does not specify this the ID will be appended onto the URL. Examples:

- `https://example.com/nfts/{tokenId}/info.json` becomes `https://example.com/nfts/1/info.json`
- `https://example.com/nfts` becomes `https://example.com/nfts/1` if used a base value, but remain unchanged as a local value

#### Returns

`Promise`\<`null` \| `string`\>

#### Defined in

[api/entities/Asset/NonFungible/Nft.ts:187](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2c78f6c34/src/api/entities/Asset/NonFungible/Nft.ts#L187)

---

### isEqual

▸ **isEqual**(`entity`): `boolean`

Determine whether this Entity is the same as another one

#### Parameters

| Name     | Type                                                          |
| :------- | :------------------------------------------------------------ |
| `entity` | [`Entity`](../../../Entity/Entity.md)\<`unknown`, `unknown`\> |

#### Returns

`boolean`

#### Inherited from

[Entity](../../../Entity/Entity.md).[isEqual](../../../Entity/Entity.md#isequal)

#### Defined in

[api/entities/Entity.ts:61](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2c78f6c34/src/api/entities/Entity.ts#L61)

---

### redeem

▸ **redeem**(`args?`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../../../modules/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

Redeem (or "burns") the NFT, removing it from circulation

#### Parameters

| Name    | Type                                                                                                      |
| :------ | :-------------------------------------------------------------------------------------------------------- |
| `args?` | [`RedeemNftParams`](../../../../../../interfaces/API/Procedures/Types/RedeemNftParams/RedeemNftParams.md) |
| `opts?` | [`ProcedureOpts`](../../../../../../interfaces/Types/ProcedureOpts/ProcedureOpts.md)                      |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../../../modules/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

**`Note`**

this method is of type [OptionalArgsProcedureMethod](../../../../../../interfaces/Types/OptionalArgsProcedureMethod/OptionalArgsProcedureMethod.md), which means you can call [redeem.checkAuthorization](../../../../../../interfaces/Types/OptionalArgsProcedureMethod/OptionalArgsProcedureMethod.md#checkauthorization)
on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/entities/Asset/NonFungible/Nft.ts:48](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2c78f6c34/src/api/entities/Asset/NonFungible/Nft.ts#L48)

---

### generateUuid

▸ `Static` **generateUuid**\<`Identifiers`\>(`identifiers`): `string`

Generate the Entity's UUID from its identifying properties

#### Type parameters

| Name          |
| :------------ |
| `Identifiers` |

#### Parameters

| Name          | Type          |
| :------------ | :------------ |
| `identifiers` | `Identifiers` |

#### Returns

`string`

#### Inherited from

[Entity](../../../Entity/Entity.md).[generateUuid](../../../Entity/Entity.md#generateuuid)

#### Defined in

[api/entities/Entity.ts:14](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2c78f6c34/src/api/entities/Entity.ts#L14)

---

### unserialize

▸ `Static` **unserialize**\<`Identifiers`\>(`serialized`): `Identifiers`

Unserialize a UUID into its Unique Identifiers

#### Type parameters

| Name          |
| :------------ |
| `Identifiers` |

#### Parameters

| Name         | Type     | Description         |
| :----------- | :------- | :------------------ |
| `serialized` | `string` | UUID to unserialize |

#### Returns

`Identifiers`

#### Inherited from

[Entity](../../../Entity/Entity.md).[unserialize](../../../Entity/Entity.md#unserialize)

#### Defined in

[api/entities/Entity.ts:23](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2c78f6c34/src/api/entities/Entity.ts#L23)
