---
id: "Nft"
title: "Class: Nft"
sidebar_label: "Nft"
---

[api/entities/Asset/NonFungible/Nft](../../../../../../modules/API/Entities/Asset/NonFungible/Nft/Nft.md).Nft

Class used to manage Nft functionality

## Hierarchy

- [`Entity`](../../../Entity/Entity.md)<[`NftUniqueIdentifiers`](../../../../../../modules/API/Entities/Asset/NonFungible/Nft/Nft.md#nftuniqueidentifiers), [`HumanReadable`](../../../../../../interfaces/API/Entities/Asset/NonFungible/Nft/HumanReadable/HumanReadable.md)\>

  ↳ **`Nft`**

## Properties

### collection

• **collection**: [`NftCollection`](../NftCollection/NftCollection.md)

#### Defined in

[api/entities/Asset/NonFungible/Nft.ts:30](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b6f9fb883/src/api/entities/Asset/NonFungible/Nft.ts#L30)

___

### id

• **id**: `BigNumber`

#### Defined in

[api/entities/Asset/NonFungible/Nft.ts:28](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b6f9fb883/src/api/entities/Asset/NonFungible/Nft.ts#L28)

___

### uuid

• **uuid**: `string`

#### Inherited from

[Entity](../../../Entity/Entity.md).[uuid](../../../Entity/Entity.md#uuid)

#### Defined in

[api/entities/Entity.ts:46](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b6f9fb883/src/api/entities/Entity.ts#L46)

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

### redeem

▸ **redeem**(`args?`, `opts?`): `Promise`<[`GenericPolymeshTransaction`](../../../../../../modules/Types/Types.md#genericpolymeshtransaction)<`void`, `void`\>\>

Redeem (or "burns") the NFT

**`Note`**

 this method is of type [OptionalArgsProcedureMethod](../../../../../../interfaces/Types/OptionalArgsProcedureMethod/OptionalArgsProcedureMethod.md), which means you can call [redeem.checkAuthorization](../../../../../../interfaces/Types/OptionalArgsProcedureMethod/OptionalArgsProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args?` | [`RedeemNftParams`](../../../../../../interfaces/API/Procedures/Types/RedeemNftParams/RedeemNftParams.md) |
| `opts?` | [`ProcedureOpts`](../../../../../../interfaces/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`<[`GenericPolymeshTransaction`](../../../../../../modules/Types/Types.md#genericpolymeshtransaction)<`void`, `void`\>\>

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
