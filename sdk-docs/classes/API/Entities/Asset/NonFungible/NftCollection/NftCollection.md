---
id: 'NftCollection'
title: 'Class: NftCollection'
sidebar_label: 'NftCollection'
---

[api/entities/Asset/NonFungible/NftCollection](../../../../../../modules/API/Entities/Asset/NonFungible/NftCollection/NftCollection.md).NftCollection

Class used to manage NFT functionality

## Hierarchy

- [`BaseAsset`](../../Base/BaseAsset/BaseAsset.md)

  ↳ **`NftCollection`**

## Properties

### compliance

• **compliance**: [`Compliance`](../../Base/Compliance/Compliance.md)

#### Inherited from

[BaseAsset](../../Base/BaseAsset/BaseAsset.md).[compliance](../../Base/BaseAsset/BaseAsset.md#compliance)

#### Defined in

[api/entities/Asset/Base/BaseAsset.ts:58](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/api/entities/Asset/Base/BaseAsset.ts#L58)

---

### did

• **did**: `string`

Identity ID of the Asset (used for Claims)

#### Inherited from

[BaseAsset](../../Base/BaseAsset/BaseAsset.md).[did](../../Base/BaseAsset/BaseAsset.md#did)

#### Defined in

[api/entities/Asset/Base/BaseAsset.ts:66](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/api/entities/Asset/Base/BaseAsset.ts#L66)

---

### documents

• **documents**: [`Documents`](../../Base/Documents/Documents.md)

#### Inherited from

[BaseAsset](../../Base/BaseAsset/BaseAsset.md).[documents](../../Base/BaseAsset/BaseAsset.md#documents)

#### Defined in

[api/entities/Asset/Base/BaseAsset.ts:59](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/api/entities/Asset/Base/BaseAsset.ts#L59)

---

### metadata

• **metadata**: [`Metadata`](../../Base/Metadata/Metadata.md)

#### Inherited from

[BaseAsset](../../Base/BaseAsset/BaseAsset.md).[metadata](../../Base/BaseAsset/BaseAsset.md#metadata)

#### Defined in

[api/entities/Asset/Base/BaseAsset.ts:60](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/api/entities/Asset/Base/BaseAsset.ts#L60)

---

### permissions

• **permissions**: [`Permissions`](../../Base/Permissions/Permissions.md)

#### Inherited from

[BaseAsset](../../Base/BaseAsset/BaseAsset.md).[permissions](../../Base/BaseAsset/BaseAsset.md#permissions)

#### Defined in

[api/entities/Asset/Base/BaseAsset.ts:61](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/api/entities/Asset/Base/BaseAsset.ts#L61)

---

### settlements

• **settlements**: [`NonFungibleSettlements`](../../Base/Settlements/NonFungibleSettlements.md)

#### Defined in

[api/entities/Asset/NonFungible/NftCollection.ts:50](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/api/entities/Asset/NonFungible/NftCollection.ts#L50)

---

### ticker

• **ticker**: `string`

ticker of the Asset

#### Inherited from

[BaseAsset](../../Base/BaseAsset/BaseAsset.md).[ticker](../../Base/BaseAsset/BaseAsset.md#ticker)

#### Defined in

[api/entities/Asset/Base/BaseAsset.ts:71](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/api/entities/Asset/Base/BaseAsset.ts#L71)

---

### uuid

• **uuid**: `string`

#### Inherited from

[BaseAsset](../../Base/BaseAsset/BaseAsset.md).[uuid](../../Base/BaseAsset/BaseAsset.md#uuid)

#### Defined in

[api/entities/Entity.ts:46](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/api/entities/Entity.ts#L46)

## Methods

### addRequiredMediators

▸ **addRequiredMediators**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../../../modules/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

Add required mediators. Mediators must approve any trades involving the asset

#### Parameters

| Name    | Type                                                                                                                  |
| :------ | :-------------------------------------------------------------------------------------------------------------------- |
| `args`  | [`AssetMediatorParams`](../../../../../../interfaces/API/Procedures/Types/AssetMediatorParams/AssetMediatorParams.md) |
| `opts?` | [`ProcedureOpts`](../../../../../../interfaces/Types/ProcedureOpts/ProcedureOpts.md)                                  |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../../../modules/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

**`Note`**

this method is of type [ProcedureMethod](../../../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [addRequiredMediators.checkAuthorization](../../../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Inherited from

[BaseAsset](../../Base/BaseAsset/BaseAsset.md).[addRequiredMediators](../../Base/BaseAsset/BaseAsset.md#addrequiredmediators)

#### Defined in

[api/entities/Asset/Base/BaseAsset.ts:178](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/api/entities/Asset/Base/BaseAsset.ts#L178)

---

### collectionKeys

▸ **collectionKeys**(): `Promise`\<[`CollectionKey`](../../../../../../modules/API/Entities/Asset/Types/Types.md#collectionkey)[]\>

Retrieve the metadata that defines the NFT collection. Every `issue` call for this collection must provide a value for each element returned

#### Returns

`Promise`\<[`CollectionKey`](../../../../../../modules/API/Entities/Asset/Types/Types.md#collectionkey)[]\>

**`Note`**

Each NFT **must** have an entry for each value, it **should** comply with the spec.
In other words, the SDK only validates the presence of metadata keys, additional validation should be used when issuing

#### Defined in

[api/entities/Asset/NonFungible/NftCollection.ts:146](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/api/entities/Asset/NonFungible/NftCollection.ts#L146)

---

### createdAt

▸ **createdAt**(): `Promise`\<`null` \| [`EventIdentifier`](../../../../../../interfaces/Types/EventIdentifier/EventIdentifier.md)\>

Retrieve the identifier data (block number, date and event index) of the event that was emitted when the token was created

#### Returns

`Promise`\<`null` \| [`EventIdentifier`](../../../../../../interfaces/Types/EventIdentifier/EventIdentifier.md)\>

**`Note`**

uses the middlewareV2

**`Note`**

there is a possibility that the data is not ready by the time it is requested. In that case, `null` is returned

#### Defined in

[api/entities/Asset/NonFungible/NftCollection.ts:234](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/api/entities/Asset/NonFungible/NftCollection.ts#L234)

---

### details

▸ **details**(): `Promise`\<[`AssetDetails`](../../../../../../interfaces/API/Entities/Asset/Types/AssetDetails/AssetDetails.md)\>

Retrieve the NftCollection's data

#### Returns

`Promise`\<[`AssetDetails`](../../../../../../interfaces/API/Entities/Asset/Types/AssetDetails/AssetDetails.md)\>

**`Note`**

can be subscribed to

#### Overrides

[BaseAsset](../../Base/BaseAsset/BaseAsset.md).[details](../../Base/BaseAsset/BaseAsset.md#details)

#### Defined in

[api/entities/Asset/NonFungible/NftCollection.ts:97](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/api/entities/Asset/NonFungible/NftCollection.ts#L97)

▸ **details**(`callback`): `Promise`\<[`UnsubCallback`](../../../../../../modules/Types/Types.md#unsubcallback)\>

#### Parameters

| Name       | Type                                                                                                                                                                           |
| :--------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `callback` | [`SubCallback`](../../../../../../modules/Types/Types.md#subcallback) \<[`AssetDetails`](../../../../../../interfaces/API/Entities/Asset/Types/AssetDetails/AssetDetails.md)\> |

#### Returns

`Promise`\<[`UnsubCallback`](../../../../../../modules/Types/Types.md#unsubcallback)\>

#### Overrides

[BaseAsset](../../Base/BaseAsset/BaseAsset.md).[details](../../Base/BaseAsset/BaseAsset.md#details)

#### Defined in

[api/entities/Asset/NonFungible/NftCollection.ts:98](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/api/entities/Asset/NonFungible/NftCollection.ts#L98)

---

### exists

▸ **exists**(): `Promise`\<`boolean`\>

Determine whether this NftCollection exists on chain

#### Returns

`Promise`\<`boolean`\>

#### Overrides

BaseAsset.exists

#### Defined in

[api/entities/Asset/NonFungible/NftCollection.ts:255](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/api/entities/Asset/NonFungible/NftCollection.ts#L255)

---

### freeze

▸ **freeze**(`opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../../../modules/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

Freeze transfers of the Asset

#### Parameters

| Name    | Type                                                                                 |
| :------ | :----------------------------------------------------------------------------------- |
| `opts?` | [`ProcedureOpts`](../../../../../../interfaces/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../../../modules/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

**`Note`**

this method is of type [NoArgsProcedureMethod](../../../../../../interfaces/Types/NoArgsProcedureMethod/NoArgsProcedureMethod.md), which means you can call [freeze.checkAuthorization](../../../../../../interfaces/Types/NoArgsProcedureMethod/NoArgsProcedureMethod.md#checkauthorization)
on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Inherited from

[BaseAsset](../../Base/BaseAsset/BaseAsset.md).[freeze](../../Base/BaseAsset/BaseAsset.md#freeze)

#### Defined in

[api/entities/Asset/Base/BaseAsset.ts:158](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/api/entities/Asset/Base/BaseAsset.ts#L158)

---

### getCollectionId

▸ **getCollectionId**(): `Promise`\<`BigNumber`\>

Returns the collection's on chain numeric ID. Used primarily to access NFT specific storage values

#### Returns

`Promise`\<`BigNumber`\>

#### Defined in

[api/entities/Asset/NonFungible/NftCollection.ts:268](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/api/entities/Asset/NonFungible/NftCollection.ts#L268)

---

### getIdentifiers

▸ **getIdentifiers**(): `Promise`\<[`SecurityIdentifier`](../../../../../../interfaces/Types/SecurityIdentifier/SecurityIdentifier.md)[]\>

Retrieve the Asset's identifiers list

#### Returns

`Promise`\<[`SecurityIdentifier`](../../../../../../interfaces/Types/SecurityIdentifier/SecurityIdentifier.md)[]\>

**`Note`**

can be subscribed to

#### Inherited from

[BaseAsset](../../Base/BaseAsset/BaseAsset.md).[getIdentifiers](../../Base/BaseAsset/BaseAsset.md#getidentifiers)

#### Defined in

[api/entities/Asset/Base/BaseAsset.ts:197](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/api/entities/Asset/Base/BaseAsset.ts#L197)

▸ **getIdentifiers**(`callback?`): `Promise`\<[`UnsubCallback`](../../../../../../modules/Types/Types.md#unsubcallback)\>

#### Parameters

| Name        | Type                                                                                                                                                                            |
| :---------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `callback?` | [`SubCallback`](../../../../../../modules/Types/Types.md#subcallback) \<[`SecurityIdentifier`](../../../../../../interfaces/Types/SecurityIdentifier/SecurityIdentifier.md)[]\> |

#### Returns

`Promise`\<[`UnsubCallback`](../../../../../../modules/Types/Types.md#unsubcallback)\>

#### Inherited from

[BaseAsset](../../Base/BaseAsset/BaseAsset.md).[getIdentifiers](../../Base/BaseAsset/BaseAsset.md#getidentifiers)

#### Defined in

[api/entities/Asset/Base/BaseAsset.ts:198](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/api/entities/Asset/Base/BaseAsset.ts#L198)

---

### getNft

▸ **getNft**(`args`): `Promise`\<[`Nft`](../Nft/Nft.md)\>

Get an NFT belonging to this collection

#### Parameters

| Name      | Type        |
| :-------- | :---------- |
| `args`    | `Object`    |
| `args.id` | `BigNumber` |

#### Returns

`Promise`\<[`Nft`](../Nft/Nft.md)\>

**`Throws`**

if the given NFT does not exist

#### Defined in

[api/entities/Asset/NonFungible/NftCollection.ts:210](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/api/entities/Asset/NonFungible/NftCollection.ts#L210)

---

### getRequiredMediators

▸ **getRequiredMediators**(): `Promise`\<[`Identity`](../../../Identity/Identity.md)[]\>

Get required Asset mediators. These Identities must approve any Instruction involving the asset

#### Returns

`Promise`\<[`Identity`](../../../Identity/Identity.md)[]\>

#### Inherited from

[BaseAsset](../../Base/BaseAsset/BaseAsset.md).[getRequiredMediators](../../Base/BaseAsset/BaseAsset.md#getrequiredmediators)

#### Defined in

[api/entities/Asset/Base/BaseAsset.ts:360](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/api/entities/Asset/Base/BaseAsset.ts#L360)

---

### investorCount

▸ **investorCount**(): `Promise`\<`BigNumber`\>

Retrieve the amount of unique investors that hold this Nft

#### Returns

`Promise`\<`BigNumber`\>

#### Defined in

[api/entities/Asset/NonFungible/NftCollection.ts:187](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/api/entities/Asset/NonFungible/NftCollection.ts#L187)

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

[BaseAsset](../../Base/BaseAsset/BaseAsset.md).[isEqual](../../Base/BaseAsset/BaseAsset.md#isequal)

#### Defined in

[api/entities/Entity.ts:61](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/api/entities/Entity.ts#L61)

---

### isFrozen

▸ **isFrozen**(): `Promise`\<`boolean`\>

Check whether transfers are frozen for the Asset

#### Returns

`Promise`\<`boolean`\>

**`Note`**

can be subscribed to

#### Inherited from

[BaseAsset](../../Base/BaseAsset/BaseAsset.md).[isFrozen](../../Base/BaseAsset/BaseAsset.md#isfrozen)

#### Defined in

[api/entities/Asset/Base/BaseAsset.ts:233](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/api/entities/Asset/Base/BaseAsset.ts#L233)

▸ **isFrozen**(`callback`): `Promise`\<[`UnsubCallback`](../../../../../../modules/Types/Types.md#unsubcallback)\>

#### Parameters

| Name       | Type                                                                               |
| :--------- | :--------------------------------------------------------------------------------- |
| `callback` | [`SubCallback`](../../../../../../modules/Types/Types.md#subcallback)\<`boolean`\> |

#### Returns

`Promise`\<[`UnsubCallback`](../../../../../../modules/Types/Types.md#unsubcallback)\>

#### Inherited from

[BaseAsset](../../Base/BaseAsset/BaseAsset.md).[isFrozen](../../Base/BaseAsset/BaseAsset.md#isfrozen)

#### Defined in

[api/entities/Asset/Base/BaseAsset.ts:234](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/api/entities/Asset/Base/BaseAsset.ts#L234)

---

### issue

▸ **issue**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../../../modules/Types/Types.md#genericpolymeshtransaction) \<[`Nft`](../Nft/Nft.md), [`Nft`](../Nft/Nft.md)\>\>

Issues a new NFT for the collection

#### Parameters

| Name    | Type                                                                                       |
| :------ | :----------------------------------------------------------------------------------------- |
| `args`  | [`IssueNftParams`](../../../../../../modules/API/Procedures/Types/Types.md#issuenftparams) |
| `opts?` | [`ProcedureOpts`](../../../../../../interfaces/Types/ProcedureOpts/ProcedureOpts.md)       |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../../../modules/Types/Types.md#genericpolymeshtransaction) \<[`Nft`](../Nft/Nft.md), [`Nft`](../Nft/Nft.md)\>\>

**`Note`**

Each NFT requires metadata for each value returned by `collectionKeys`. The SDK and chain only validate the presence of these fields. Additional validation may be needed to ensure each value complies with the specification.

**`Note`**

this method is of type [ProcedureMethod](../../../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [issue.checkAuthorization](../../../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/entities/Asset/NonFungible/NftCollection.ts:59](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/api/entities/Asset/NonFungible/NftCollection.ts#L59)

---

### removeRequiredMediators

▸ **removeRequiredMediators**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../../../modules/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

Remove required mediators

#### Parameters

| Name    | Type                                                                                                                  |
| :------ | :-------------------------------------------------------------------------------------------------------------------- |
| `args`  | [`AssetMediatorParams`](../../../../../../interfaces/API/Procedures/Types/AssetMediatorParams/AssetMediatorParams.md) |
| `opts?` | [`ProcedureOpts`](../../../../../../interfaces/Types/ProcedureOpts/ProcedureOpts.md)                                  |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../../../modules/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

**`Note`**

this method is of type [ProcedureMethod](../../../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [removeRequiredMediators.checkAuthorization](../../../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Inherited from

[BaseAsset](../../Base/BaseAsset/BaseAsset.md).[removeRequiredMediators](../../Base/BaseAsset/BaseAsset.md#removerequiredmediators)

#### Defined in

[api/entities/Asset/Base/BaseAsset.ts:188](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/api/entities/Asset/Base/BaseAsset.ts#L188)

---

### toHuman

▸ **toHuman**(): `string`

Return the NftCollection's ticker

#### Returns

`string`

#### Inherited from

[BaseAsset](../../Base/BaseAsset/BaseAsset.md).[toHuman](../../Base/BaseAsset/BaseAsset.md#tohuman)

#### Defined in

[api/entities/Asset/Base/BaseAsset.ts:400](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/api/entities/Asset/Base/BaseAsset.ts#L400)

---

### transferOwnership

▸ **transferOwnership**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../../../modules/Types/Types.md#genericpolymeshtransaction) \<[`AuthorizationRequest`](../../../AuthorizationRequest/AuthorizationRequest.md), [`AuthorizationRequest`](../../../AuthorizationRequest/AuthorizationRequest.md)\>\>

Transfer ownership of the Asset to another Identity. This generates an authorization request that must be accepted
by the recipient

#### Parameters

| Name    | Type                                                                                                                                             |
| :------ | :----------------------------------------------------------------------------------------------------------------------------------------------- |
| `args`  | [`TransferAssetOwnershipParams`](../../../../../../interfaces/API/Procedures/Types/TransferAssetOwnershipParams/TransferAssetOwnershipParams.md) |
| `opts?` | [`ProcedureOpts`](../../../../../../interfaces/Types/ProcedureOpts/ProcedureOpts.md)                                                             |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../../../modules/Types/Types.md#genericpolymeshtransaction) \<[`AuthorizationRequest`](../../../AuthorizationRequest/AuthorizationRequest.md), [`AuthorizationRequest`](../../../AuthorizationRequest/AuthorizationRequest.md)\>\>

**`Note`**

this will create [Authorization Request](../../../AuthorizationRequest/AuthorizationRequest.md) which has to be accepted by the `target` Identity.
An [Account](../../../Account/Account.md) or [Identity](../../../Identity/Identity.md) can fetch its pending Authorization Requests by calling [authorizations.getReceived](../../../Common/Namespaces/Authorizations/Authorizations.md#getreceived).
Also, an Account or Identity can directly fetch the details of an Authorization Request by calling [authorizations.getOne](../../../Common/Namespaces/Authorizations/Authorizations.md#getone)

**`Note`**

this method is of type [ProcedureMethod](../../../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [transferOwnership.checkAuthorization](../../../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Inherited from

[BaseAsset](../../Base/BaseAsset/BaseAsset.md).[transferOwnership](../../Base/BaseAsset/BaseAsset.md#transferownership)

#### Defined in

[api/entities/Asset/Base/BaseAsset.ts:84](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/api/entities/Asset/Base/BaseAsset.ts#L84)

---

### unfreeze

▸ **unfreeze**(`opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../../../modules/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

Unfreeze transfers of the Asset

#### Parameters

| Name    | Type                                                                                 |
| :------ | :----------------------------------------------------------------------------------- |
| `opts?` | [`ProcedureOpts`](../../../../../../interfaces/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../../../modules/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

**`Note`**

this method is of type [NoArgsProcedureMethod](../../../../../../interfaces/Types/NoArgsProcedureMethod/NoArgsProcedureMethod.md), which means you can call [unfreeze.checkAuthorization](../../../../../../interfaces/Types/NoArgsProcedureMethod/NoArgsProcedureMethod.md#checkauthorization)
on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Inherited from

[BaseAsset](../../Base/BaseAsset/BaseAsset.md).[unfreeze](../../Base/BaseAsset/BaseAsset.md#unfreeze)

#### Defined in

[api/entities/Asset/Base/BaseAsset.ts:168](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/api/entities/Asset/Base/BaseAsset.ts#L168)

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

[BaseAsset](../../Base/BaseAsset/BaseAsset.md).[generateUuid](../../Base/BaseAsset/BaseAsset.md#generateuuid)

#### Defined in

[api/entities/Entity.ts:14](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/api/entities/Entity.ts#L14)

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

[BaseAsset](../../Base/BaseAsset/BaseAsset.md).[unserialize](../../Base/BaseAsset/BaseAsset.md#unserialize)

#### Defined in

[api/entities/Entity.ts:23](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/api/entities/Entity.ts#L23)
