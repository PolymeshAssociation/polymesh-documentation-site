---
id: "Nft"
title: "Class: Nft"
sidebar_label: "Nft"
---

[api/entities/Asset/NonFungible/Nft](../../../../../../modules/API/Entities/Asset/NonFungible/Nft/Nft.md).Nft

Class used to manage Nft functionality

## Hierarchy

- [`Entity`](../../../Entity/Entity.md)<[`NftUniqueIdentifiers`](../../../../../../modules/API/Entities/Asset/NonFungible/Nft/Nft.md#nftuniqueidentifiers), `string`\>

  ↳ **`Nft`**

## Properties

### collection

• **collection**: [`NftCollection`](../NftCollection/NftCollection.md)

#### Defined in

[api/entities/Asset/NonFungible/Nft.ts:25](https://github.com/PolymeshAssociation/polymesh-sdk/blob/de58d40fd/src/api/entities/Asset/NonFungible/Nft.ts#L25)

___

### id

• **id**: `BigNumber`

#### Defined in

[api/entities/Asset/NonFungible/Nft.ts:23](https://github.com/PolymeshAssociation/polymesh-sdk/blob/de58d40fd/src/api/entities/Asset/NonFungible/Nft.ts#L23)

___

### ticker

• **ticker**: `string`

#### Defined in

[api/entities/Asset/NonFungible/Nft.ts:21](https://github.com/PolymeshAssociation/polymesh-sdk/blob/de58d40fd/src/api/entities/Asset/NonFungible/Nft.ts#L21)

___

### uuid

• **uuid**: `string`

#### Inherited from

[Entity](../../../Entity/Entity.md).[uuid](../../../Entity/Entity.md#uuid)

#### Defined in

[api/entities/Entity.ts:46](https://github.com/PolymeshAssociation/polymesh-sdk/blob/de58d40fd/src/api/entities/Entity.ts#L46)

## Methods

### exists

▸ **exists**(): `Promise`<`boolean`\>

Determine if the NFT exists on chain

**`Note`**

 This method returns true, even if the token has been redeemed/burned

#### Returns

`Promise`<`boolean`\>

#### Overrides

[Entity](../../../Entity/Entity.md).[exists](../../../Entity/Entity.md#exists)

___

### getMetadata

▸ **getMetadata**(): `Promise`<[`NftMetadata`](../../../../../../interfaces/API/Entities/Asset/Types/NftMetadata/NftMetadata.md)[]\>

Get metadata associated with this token

#### Returns

`Promise`<[`NftMetadata`](../../../../../../interfaces/API/Entities/Asset/Types/NftMetadata/NftMetadata.md)[]\>

___

### isEqual

▸ **isEqual**(`entity`): `boolean`

Determine whether this Entity is the same as another one

#### Parameters

| Name | Type |
| :------ | :------ |
| `entity` | [`Entity`](../../../Entity/Entity.md)<`unknown`, `unknown`\> |

#### Returns

`boolean`

#### Inherited from

[Entity](../../../Entity/Entity.md).[isEqual](../../../Entity/Entity.md#isequal)

___

### generateUuid

▸ `Static` **generateUuid**<`Identifiers`\>(`identifiers`): `string`

Generate the Entity's UUID from its identifying properties

#### Type parameters

| Name |
| :------ |
| `Identifiers` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `identifiers` | `Identifiers` |

#### Returns

`string`

#### Inherited from

[Entity](../../../Entity/Entity.md).[generateUuid](../../../Entity/Entity.md#generateuuid)

___

### unserialize

▸ `Static` **unserialize**<`Identifiers`\>(`serialized`): `Identifiers`

Unserialize a UUID into its Unique Identifiers

#### Type parameters

| Name |
| :------ |
| `Identifiers` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `serialized` | `string` | UUID to unserialize |

#### Returns

`Identifiers`

#### Inherited from

[Entity](../../../Entity/Entity.md).[unserialize](../../../Entity/Entity.md#unserialize)
