---
id: "NftCollection"
title: "Class: NftCollection"
sidebar_label: "NftCollection"
---

[api/entities/Asset/NonFungible/NftCollection](../../../../../../modules/API/Entities/Asset/NonFungible/NftCollection/NftCollection.md).NftCollection

Class used to manage Nft functionality

## Hierarchy

- [`BaseAsset`](../../Base/BaseAsset/BaseAsset.md)

  ↳ **`NftCollection`**

## Properties

### compliance

• **compliance**: [`Compliance`](../../Base/Compliance/Compliance.md)

#### Inherited from

[BaseAsset](../../Base/BaseAsset/BaseAsset.md).[compliance](../../Base/BaseAsset/BaseAsset.md#compliance)

#### Defined in

[api/entities/Asset/Base/BaseAsset.ts:54](https://github.com/PolymeshAssociation/polymesh-sdk/blob/d4e2c127f/src/api/entities/Asset/Base/BaseAsset.ts#L54)

___

### did

• **did**: `string`

Identity ID of the Asset (used for Claims)

#### Inherited from

[BaseAsset](../../Base/BaseAsset/BaseAsset.md).[did](../../Base/BaseAsset/BaseAsset.md#did)

#### Defined in

[api/entities/Asset/Base/BaseAsset.ts:62](https://github.com/PolymeshAssociation/polymesh-sdk/blob/d4e2c127f/src/api/entities/Asset/Base/BaseAsset.ts#L62)

___

### documents

• **documents**: [`Documents`](../../Base/Documents/Documents.md)

#### Inherited from

[BaseAsset](../../Base/BaseAsset/BaseAsset.md).[documents](../../Base/BaseAsset/BaseAsset.md#documents)

#### Defined in

[api/entities/Asset/Base/BaseAsset.ts:55](https://github.com/PolymeshAssociation/polymesh-sdk/blob/d4e2c127f/src/api/entities/Asset/Base/BaseAsset.ts#L55)

___

### metadata

• **metadata**: [`Metadata`](../../Base/Metadata/Metadata.md)

#### Inherited from

[BaseAsset](../../Base/BaseAsset/BaseAsset.md).[metadata](../../Base/BaseAsset/BaseAsset.md#metadata)

#### Defined in

[api/entities/Asset/Base/BaseAsset.ts:56](https://github.com/PolymeshAssociation/polymesh-sdk/blob/d4e2c127f/src/api/entities/Asset/Base/BaseAsset.ts#L56)

___

### permissions

• **permissions**: [`Permissions`](../../Base/Permissions/Permissions.md)

#### Inherited from

[BaseAsset](../../Base/BaseAsset/BaseAsset.md).[permissions](../../Base/BaseAsset/BaseAsset.md#permissions)

#### Defined in

[api/entities/Asset/Base/BaseAsset.ts:57](https://github.com/PolymeshAssociation/polymesh-sdk/blob/d4e2c127f/src/api/entities/Asset/Base/BaseAsset.ts#L57)

___

### ticker

• **ticker**: `string`

ticker of the Asset

#### Inherited from

[BaseAsset](../../Base/BaseAsset/BaseAsset.md).[ticker](../../Base/BaseAsset/BaseAsset.md#ticker)

#### Defined in

[api/entities/Asset/Base/BaseAsset.ts:67](https://github.com/PolymeshAssociation/polymesh-sdk/blob/d4e2c127f/src/api/entities/Asset/Base/BaseAsset.ts#L67)

___

### uuid

• **uuid**: `string`

#### Inherited from

[BaseAsset](../../Base/BaseAsset/BaseAsset.md).[uuid](../../Base/BaseAsset/BaseAsset.md#uuid)

#### Defined in

[api/entities/Entity.ts:46](https://github.com/PolymeshAssociation/polymesh-sdk/blob/d4e2c127f/src/api/entities/Entity.ts#L46)

## Methods

### collectionMetadataKeys

▸ **collectionMetadataKeys**(): `Promise`<[`MetadataKeyId`](../../../../../../modules/API/Entities/Asset/Types/Types.md#metadatakeyid)[]\>

Get metadata keys that each NFT in the collection must have

#### Returns

`Promise`<[`MetadataKeyId`](../../../../../../modules/API/Entities/Asset/Types/Types.md#metadatakeyid)[]\>

___

### createdAt

▸ **createdAt**(): `Promise`<``null`` \| [`EventIdentifier`](../../../../../../interfaces/Types/EventIdentifier/EventIdentifier.md)\>

Retrieve the identifier data (block number, date and event index) of the event that was emitted when the token was created

**`Note`**

 uses the middlewareV2

**`Note`**

 there is a possibility that the data is not ready by the time it is requested. In that case, `null` is returned

#### Returns

`Promise`<``null`` \| [`EventIdentifier`](../../../../../../interfaces/Types/EventIdentifier/EventIdentifier.md)\>

___

### details

▸ **details**(): `Promise`<[`AssetDetails`](../../../../../../interfaces/API/Entities/Asset/Types/AssetDetails/AssetDetails.md)\>

Retrieve the NftCollection's data

**`Note`**

 can be subscribed to

#### Returns

`Promise`<[`AssetDetails`](../../../../../../interfaces/API/Entities/Asset/Types/AssetDetails/AssetDetails.md)\>

#### Overrides

[BaseAsset](../../Base/BaseAsset/BaseAsset.md).[details](../../Base/BaseAsset/BaseAsset.md#details)

▸ **details**(`callback`): `Promise`<[`UnsubCallback`](../../../../../../modules/Types/Types.md#unsubcallback)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`SubCallback`](../../../../../../modules/Types/Types.md#subcallback)<[`AssetDetails`](../../../../../../interfaces/API/Entities/Asset/Types/AssetDetails/AssetDetails.md)\> |

#### Returns

`Promise`<[`UnsubCallback`](../../../../../../modules/Types/Types.md#unsubcallback)\>

#### Overrides

[BaseAsset](../../Base/BaseAsset/BaseAsset.md).[details](../../Base/BaseAsset/BaseAsset.md#details)

___

### exists

▸ **exists**(): `Promise`<`boolean`\>

Determine whether this NftCollection exists on chain

#### Returns

`Promise`<`boolean`\>

#### Overrides

BaseAsset.exists

___

### freeze

▸ **freeze**(`opts?`): `Promise`<[`GenericPolymeshTransaction`](../../../../../../modules/Types/Types.md#genericpolymeshtransaction)<`void`, `void`\>\>

Freeze transfers of the Asset

**`Note`**

 this method is of type [NoArgsProcedureMethod](../../../../../../interfaces/Types/NoArgsProcedureMethod/NoArgsProcedureMethod.md), which means you can call [freeze.checkAuthorization](../../../../../../interfaces/Types/NoArgsProcedureMethod/NoArgsProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`ProcedureOpts`](../../../../../../interfaces/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`<[`GenericPolymeshTransaction`](../../../../../../modules/Types/Types.md#genericpolymeshtransaction)<`void`, `void`\>\>

#### Inherited from

[BaseAsset](../../Base/BaseAsset/BaseAsset.md).[freeze](../../Base/BaseAsset/BaseAsset.md#freeze)

___

### getCollectionId

▸ **getCollectionId**(): `Promise`<`BigNumber`\>

Returns the collection id

#### Returns

`Promise`<`BigNumber`\>

___

### getIdentifiers

▸ **getIdentifiers**(): `Promise`<[`SecurityIdentifier`](../../../../../../interfaces/Types/SecurityIdentifier/SecurityIdentifier.md)[]\>

Retrieve the Asset's identifiers list

**`Note`**

 can be subscribed to

#### Returns

`Promise`<[`SecurityIdentifier`](../../../../../../interfaces/Types/SecurityIdentifier/SecurityIdentifier.md)[]\>

#### Inherited from

[BaseAsset](../../Base/BaseAsset/BaseAsset.md).[getIdentifiers](../../Base/BaseAsset/BaseAsset.md#getidentifiers)

▸ **getIdentifiers**(`callback?`): `Promise`<[`UnsubCallback`](../../../../../../modules/Types/Types.md#unsubcallback)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback?` | [`SubCallback`](../../../../../../modules/Types/Types.md#subcallback)<[`SecurityIdentifier`](../../../../../../interfaces/Types/SecurityIdentifier/SecurityIdentifier.md)[]\> |

#### Returns

`Promise`<[`UnsubCallback`](../../../../../../modules/Types/Types.md#unsubcallback)\>

#### Inherited from

[BaseAsset](../../Base/BaseAsset/BaseAsset.md).[getIdentifiers](../../Base/BaseAsset/BaseAsset.md#getidentifiers)

___

### investorCount

▸ **investorCount**(): `Promise`<`BigNumber`\>

Retrieve the amount of unique investors that hold this Nft

#### Returns

`Promise`<`BigNumber`\>

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

[BaseAsset](../../Base/BaseAsset/BaseAsset.md).[isEqual](../../Base/BaseAsset/BaseAsset.md#isequal)

___

### isFrozen

▸ **isFrozen**(): `Promise`<`boolean`\>

Check whether transfers are frozen for the Asset

**`Note`**

 can be subscribed to

#### Returns

`Promise`<`boolean`\>

#### Inherited from

[BaseAsset](../../Base/BaseAsset/BaseAsset.md).[isFrozen](../../Base/BaseAsset/BaseAsset.md#isfrozen)

▸ **isFrozen**(`callback`): `Promise`<[`UnsubCallback`](../../../../../../modules/Types/Types.md#unsubcallback)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`SubCallback`](../../../../../../modules/Types/Types.md#subcallback)<`boolean`\> |

#### Returns

`Promise`<[`UnsubCallback`](../../../../../../modules/Types/Types.md#unsubcallback)\>

#### Inherited from

[BaseAsset](../../Base/BaseAsset/BaseAsset.md).[isFrozen](../../Base/BaseAsset/BaseAsset.md#isfrozen)

___

### issue

▸ **issue**(`args`, `opts?`): `Promise`<[`GenericPolymeshTransaction`](../../../../../../modules/Types/Types.md#genericpolymeshtransaction)<[`Nft`](../Nft/Nft.md), [`Nft`](../Nft/Nft.md)\>\>

Issues a new NFT for the collection

**`Note`**

 this method is of type [ProcedureMethod](../../../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [issue.checkAuthorization](../../../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`IssueNftParams`](../../../../../../modules/API/Procedures/Types/Types.md#issuenftparams) |
| `opts?` | [`ProcedureOpts`](../../../../../../interfaces/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`<[`GenericPolymeshTransaction`](../../../../../../modules/Types/Types.md#genericpolymeshtransaction)<[`Nft`](../Nft/Nft.md), [`Nft`](../Nft/Nft.md)\>\>

___

### toHuman

▸ **toHuman**(): `string`

Return the NftCollection's ticker

#### Returns

`string`

#### Inherited from

[BaseAsset](../../Base/BaseAsset/BaseAsset.md).[toHuman](../../Base/BaseAsset/BaseAsset.md#tohuman)

___

### transferOwnership

▸ **transferOwnership**(`args`, `opts?`): `Promise`<[`GenericPolymeshTransaction`](../../../../../../modules/Types/Types.md#genericpolymeshtransaction)<[`AuthorizationRequest`](../../../AuthorizationRequest/AuthorizationRequest.md), [`AuthorizationRequest`](../../../AuthorizationRequest/AuthorizationRequest.md)\>\>

Transfer ownership of the Asset to another Identity. This generates an authorization request that must be accepted
  by the recipient

**`Note`**

 this will create [Authorization Request](../../../AuthorizationRequest/AuthorizationRequest.md) which has to be accepted by the `target` Identity.
  An [Account](../../../Account/Account.md) or [Identity](../../../Identity/Identity.md) can fetch its pending Authorization Requests by calling [authorizations.getReceived](../../../Common/Namespaces/Authorizations/Authorizations.md#getreceived).
  Also, an Account or Identity can directly fetch the details of an Authorization Request by calling [authorizations.getOne](../../../Common/Namespaces/Authorizations/Authorizations.md#getone)

**`Note`**

 this method is of type [ProcedureMethod](../../../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [transferOwnership.checkAuthorization](../../../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`TransferAssetOwnershipParams`](../../../../../../interfaces/API/Procedures/Types/TransferAssetOwnershipParams/TransferAssetOwnershipParams.md) |
| `opts?` | [`ProcedureOpts`](../../../../../../interfaces/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`<[`GenericPolymeshTransaction`](../../../../../../modules/Types/Types.md#genericpolymeshtransaction)<[`AuthorizationRequest`](../../../AuthorizationRequest/AuthorizationRequest.md), [`AuthorizationRequest`](../../../AuthorizationRequest/AuthorizationRequest.md)\>\>

#### Inherited from

[BaseAsset](../../Base/BaseAsset/BaseAsset.md).[transferOwnership](../../Base/BaseAsset/BaseAsset.md#transferownership)

___

### unfreeze

▸ **unfreeze**(`opts?`): `Promise`<[`GenericPolymeshTransaction`](../../../../../../modules/Types/Types.md#genericpolymeshtransaction)<`void`, `void`\>\>

Unfreeze transfers of the Asset

**`Note`**

 this method is of type [NoArgsProcedureMethod](../../../../../../interfaces/Types/NoArgsProcedureMethod/NoArgsProcedureMethod.md), which means you can call [unfreeze.checkAuthorization](../../../../../../interfaces/Types/NoArgsProcedureMethod/NoArgsProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`ProcedureOpts`](../../../../../../interfaces/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`<[`GenericPolymeshTransaction`](../../../../../../modules/Types/Types.md#genericpolymeshtransaction)<`void`, `void`\>\>

#### Inherited from

[BaseAsset](../../Base/BaseAsset/BaseAsset.md).[unfreeze](../../Base/BaseAsset/BaseAsset.md#unfreeze)

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

[BaseAsset](../../Base/BaseAsset/BaseAsset.md).[generateUuid](../../Base/BaseAsset/BaseAsset.md#generateuuid)

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

[BaseAsset](../../Base/BaseAsset/BaseAsset.md).[unserialize](../../Base/BaseAsset/BaseAsset.md#unserialize)
