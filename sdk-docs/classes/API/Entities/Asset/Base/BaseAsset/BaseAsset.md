---
id: "BaseAsset"
title: "Class: BaseAsset"
sidebar_label: "BaseAsset"
---

[api/entities/Asset/Base/BaseAsset](../../../../../../modules/API/Entities/Asset/Base/BaseAsset/BaseAsset.md).BaseAsset

Class used to manage functionality common to all assets.

## Hierarchy

- [`Entity`](../../../Entity/Entity.md)\<[`UniqueIdentifiers`](../../../../../../interfaces/API/Entities/Asset/Types/UniqueIdentifiers/UniqueIdentifiers.md), `string`\>

  ↳ **`BaseAsset`**

  ↳↳ [`FungibleAsset`](../../Fungible/FungibleAsset.md)

  ↳↳ [`NftCollection`](../../NonFungible/NftCollection/NftCollection.md)

## Properties

### compliance

• **compliance**: [`Compliance`](../Compliance/Compliance.md)

#### Defined in

[api/entities/Asset/Base/BaseAsset.ts:71](https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/entities/Asset/Base/BaseAsset.ts#L71)

___

### did

• `Optional` **did**: `string`

Identity ID of the Asset (used for Claims)

**`Deprecated`**

this is no longer used from chain 7.x

#### Defined in

[api/entities/Asset/Base/BaseAsset.ts:81](https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/entities/Asset/Base/BaseAsset.ts#L81)

___

### documents

• **documents**: [`Documents`](../Documents/Documents.md)

#### Defined in

[api/entities/Asset/Base/BaseAsset.ts:72](https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/entities/Asset/Base/BaseAsset.ts#L72)

___

### id

• **id**: `string`

Unique ID of the Asset

#### Defined in

[api/entities/Asset/Base/BaseAsset.ts:95](https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/entities/Asset/Base/BaseAsset.ts#L95)

___

### metadata

• **metadata**: [`Metadata`](../Metadata/Metadata.md)

#### Defined in

[api/entities/Asset/Base/BaseAsset.ts:73](https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/entities/Asset/Base/BaseAsset.ts#L73)

___

### permissions

• **permissions**: [`Permissions`](../Permissions/Permissions.md)

#### Defined in

[api/entities/Asset/Base/BaseAsset.ts:74](https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/entities/Asset/Base/BaseAsset.ts#L74)

___

### ticker

• `Optional` **ticker**: `string`

ticker of the Asset

Since the chain version 7.x, ticker can be optionally associated with an Asset

**`Deprecated`**

in favour of `ticker` value received from the response of `details` method

#### Defined in

[api/entities/Asset/Base/BaseAsset.ts:90](https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/entities/Asset/Base/BaseAsset.ts#L90)

___

### uuid

• **uuid**: `string`

#### Inherited from

[Entity](../../../Entity/Entity.md).[uuid](../../../Entity/Entity.md#uuid)

#### Defined in

[api/entities/Entity.ts:46](https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/entities/Entity.ts#L46)

## Methods

### addRequiredMediators

▸ **addRequiredMediators**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

Add required mediators. Mediators must approve any trades involving the asset

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`AssetMediatorParams`](../../../../../../interfaces/API/Procedures/Types/AssetMediatorParams/AssetMediatorParams.md) |
| `opts?` | [`ProcedureOpts`](../../../../../../interfaces/API/Procedures/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

**`Note`**

this method is of type [ProcedureMethod](../../../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [addRequiredMediators.checkAuthorization](../../../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/entities/Asset/Base/BaseAsset.ts:254](https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/entities/Asset/Base/BaseAsset.ts#L254)

___

### currentFundingRound

▸ **currentFundingRound**(): `Promise`\<``null`` \| `string`\>

Retrieve the Asset's funding round

#### Returns

`Promise`\<``null`` \| `string`\>

**`Note`**

can be subscribed to, if connected to node using a web socket

#### Defined in

[api/entities/Asset/Base/BaseAsset.ts:554](https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/entities/Asset/Base/BaseAsset.ts#L554)

▸ **currentFundingRound**(`callback`): `Promise`\<[`UnsubCallback`](../../../../../../modules/API/Entities/Types/Types.md#unsubcallback)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`SubCallback`](../../../../../../modules/API/Entities/Types/Types.md#subcallback)\<``null`` \| `string`\> |

#### Returns

`Promise`\<[`UnsubCallback`](../../../../../../modules/API/Entities/Types/Types.md#unsubcallback)\>

#### Defined in

[api/entities/Asset/Base/BaseAsset.ts:555](https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/entities/Asset/Base/BaseAsset.ts#L555)

___

### details

▸ **details**(): `Promise`\<[`AssetDetails`](../../../../../../interfaces/API/Entities/Asset/Types/AssetDetails/AssetDetails.md)\>

Retrieve the Asset's data

#### Returns

`Promise`\<[`AssetDetails`](../../../../../../interfaces/API/Entities/Asset/Types/AssetDetails/AssetDetails.md)\>

**`Note`**

can be subscribed to, if connected to node using a web socket

#### Defined in

[api/entities/Asset/Base/BaseAsset.ts:380](https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/entities/Asset/Base/BaseAsset.ts#L380)

▸ **details**(`callback`): `Promise`\<[`UnsubCallback`](../../../../../../modules/API/Entities/Types/Types.md#unsubcallback)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`SubCallback`](../../../../../../modules/API/Entities/Types/Types.md#subcallback)\<[`AssetDetails`](../../../../../../interfaces/API/Entities/Asset/Types/AssetDetails/AssetDetails.md)\> |

#### Returns

`Promise`\<[`UnsubCallback`](../../../../../../modules/API/Entities/Types/Types.md#unsubcallback)\>

#### Defined in

[api/entities/Asset/Base/BaseAsset.ts:381](https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/entities/Asset/Base/BaseAsset.ts#L381)

___

### freeze

▸ **freeze**(`opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

Freeze transfers of the Asset

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`ProcedureOpts`](../../../../../../interfaces/API/Procedures/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

**`Note`**

this method is of type [NoArgsProcedureMethod](../../../../../../interfaces/API/Procedures/Types/NoArgsProcedureMethod/NoArgsProcedureMethod.md), which means you can call [freeze.checkAuthorization](../../../../../../interfaces/API/Procedures/Types/NoArgsProcedureMethod/NoArgsProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/entities/Asset/Base/BaseAsset.ts:234](https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/entities/Asset/Base/BaseAsset.ts#L234)

___

### getIdentifiers

▸ **getIdentifiers**(): `Promise`\<[`SecurityIdentifier`](../../../../../../interfaces/API/Entities/Asset/Types/SecurityIdentifier/SecurityIdentifier.md)[]\>

Retrieve the Asset's identifiers list

#### Returns

`Promise`\<[`SecurityIdentifier`](../../../../../../interfaces/API/Entities/Asset/Types/SecurityIdentifier/SecurityIdentifier.md)[]\>

**`Note`**

can be subscribed to, if connected to node using a web socket

#### Defined in

[api/entities/Asset/Base/BaseAsset.ts:300](https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/entities/Asset/Base/BaseAsset.ts#L300)

▸ **getIdentifiers**(`callback?`): `Promise`\<[`UnsubCallback`](../../../../../../modules/API/Entities/Types/Types.md#unsubcallback)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback?` | [`SubCallback`](../../../../../../modules/API/Entities/Types/Types.md#subcallback)\<[`SecurityIdentifier`](../../../../../../interfaces/API/Entities/Asset/Types/SecurityIdentifier/SecurityIdentifier.md)[]\> |

#### Returns

`Promise`\<[`UnsubCallback`](../../../../../../modules/API/Entities/Types/Types.md#unsubcallback)\>

#### Defined in

[api/entities/Asset/Base/BaseAsset.ts:301](https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/entities/Asset/Base/BaseAsset.ts#L301)

___

### getRequiredMediators

▸ **getRequiredMediators**(): `Promise`\<[`Identity`](../../../Identity/Identity.md)[]\>

Get required Asset mediators. These Identities must approve any Instruction involving the asset

#### Returns

`Promise`\<[`Identity`](../../../Identity/Identity.md)[]\>

#### Defined in

[api/entities/Asset/Base/BaseAsset.ts:499](https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/entities/Asset/Base/BaseAsset.ts#L499)

___

### getVenueFilteringDetails

▸ **getVenueFilteringDetails**(): `Promise`\<[`VenueFilteringDetails`](../../../../../../interfaces/API/Entities/Asset/Types/VenueFilteringDetails/VenueFilteringDetails.md)\>

Get venue filtering details

#### Returns

`Promise`\<[`VenueFilteringDetails`](../../../../../../interfaces/API/Entities/Asset/Types/VenueFilteringDetails/VenueFilteringDetails.md)\>

#### Defined in

[api/entities/Asset/Base/BaseAsset.ts:519](https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/entities/Asset/Base/BaseAsset.ts#L519)

___

### isEqual

▸ **isEqual**(`entity`): `boolean`

Determine whether this Entity is the same as another one

#### Parameters

| Name | Type |
| :------ | :------ |
| `entity` | [`Entity`](../../../Entity/Entity.md)\<`unknown`, `unknown`\> |

#### Returns

`boolean`

#### Inherited from

[Entity](../../../Entity/Entity.md).[isEqual](../../../Entity/Entity.md#isequal)

#### Defined in

[api/entities/Entity.ts:61](https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/entities/Entity.ts#L61)

___

### isFrozen

▸ **isFrozen**(): `Promise`\<`boolean`\>

Check whether transfers are frozen for the Asset

#### Returns

`Promise`\<`boolean`\>

**`Note`**

can be subscribed to, if connected to node using a web socket

#### Defined in

[api/entities/Asset/Base/BaseAsset.ts:346](https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/entities/Asset/Base/BaseAsset.ts#L346)

▸ **isFrozen**(`callback`): `Promise`\<[`UnsubCallback`](../../../../../../modules/API/Entities/Types/Types.md#unsubcallback)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`SubCallback`](../../../../../../modules/API/Entities/Types/Types.md#subcallback)\<`boolean`\> |

#### Returns

`Promise`\<[`UnsubCallback`](../../../../../../modules/API/Entities/Types/Types.md#unsubcallback)\>

#### Defined in

[api/entities/Asset/Base/BaseAsset.ts:347](https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/entities/Asset/Base/BaseAsset.ts#L347)

___

### linkTicker

▸ **linkTicker**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

Link ticker to the asset

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`LinkTickerToAssetParams`](../../../../../../interfaces/API/Procedures/Types/LinkTickerToAssetParams/LinkTickerToAssetParams.md) |
| `opts?` | [`ProcedureOpts`](../../../../../../interfaces/API/Procedures/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

**`Note`**

if ticker is already reserved, then required role:
- Ticker Owner

**`Note`**

this method is of type [ProcedureMethod](../../../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [linkTicker.checkAuthorization](../../../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/entities/Asset/Base/BaseAsset.ts:277](https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/entities/Asset/Base/BaseAsset.ts#L277)

___

### modify

▸ **modify**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<[`Asset`](../../../../../../modules/API/Entities/Asset/Types/Types.md#asset), [`Asset`](../../../../../../modules/API/Entities/Asset/Types/Types.md#asset)\>\>

Modify some properties of the Asset

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`ModifyAssetParams`](../../../../../../modules/API/Procedures/Types/Types.md#modifyassetparams) |
| `opts?` | [`ProcedureOpts`](../../../../../../interfaces/API/Procedures/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<[`Asset`](../../../../../../modules/API/Entities/Asset/Types/Types.md#asset), [`Asset`](../../../../../../modules/API/Entities/Asset/Types/Types.md#asset)\>\>

**`Throws`**

if the passed values result in no changes being made to the Asset

**`Note`**

this method is of type [ProcedureMethod](../../../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [modify.checkAuthorization](../../../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/entities/Asset/Base/BaseAsset.ts:140](https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/entities/Asset/Base/BaseAsset.ts#L140)

___

### removeRequiredMediators

▸ **removeRequiredMediators**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

Remove required mediators

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`AssetMediatorParams`](../../../../../../interfaces/API/Procedures/Types/AssetMediatorParams/AssetMediatorParams.md) |
| `opts?` | [`ProcedureOpts`](../../../../../../interfaces/API/Procedures/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

**`Note`**

this method is of type [ProcedureMethod](../../../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [removeRequiredMediators.checkAuthorization](../../../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/entities/Asset/Base/BaseAsset.ts:264](https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/entities/Asset/Base/BaseAsset.ts#L264)

___

### setVenueFiltering

▸ **setVenueFiltering**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

Enable/disable venue filtering for this Asset and/or set allowed/disallowed venues

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`SetVenueFilteringParams`](../../../../../../modules/API/Procedures/Types/Types.md#setvenuefilteringparams) |
| `opts?` | [`ProcedureOpts`](../../../../../../interfaces/API/Procedures/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

**`Note`**

this method is of type [ProcedureMethod](../../../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [setVenueFiltering.checkAuthorization](../../../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/entities/Asset/Base/BaseAsset.ts:118](https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/entities/Asset/Base/BaseAsset.ts#L118)

___

### toHuman

▸ **toHuman**(): `string`

Return the BaseAsset's ID

#### Returns

`string`

#### Overrides

[Entity](../../../Entity/Entity.md).[toHuman](../../../Entity/Entity.md#tohuman)

#### Defined in

[api/entities/Asset/Base/BaseAsset.ts:621](https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/entities/Asset/Base/BaseAsset.ts#L621)

___

### transferOwnership

▸ **transferOwnership**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<[`AuthorizationRequest`](../../../AuthorizationRequest/AuthorizationRequest.md), [`AuthorizationRequest`](../../../AuthorizationRequest/AuthorizationRequest.md)\>\>

Transfer ownership of the Asset to another Identity. This generates an authorization request that must be accepted
  by the recipient

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`TransferAssetOwnershipParams`](../../../../../../interfaces/API/Procedures/Types/TransferAssetOwnershipParams/TransferAssetOwnershipParams.md) |
| `opts?` | [`ProcedureOpts`](../../../../../../interfaces/API/Procedures/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<[`AuthorizationRequest`](../../../AuthorizationRequest/AuthorizationRequest.md), [`AuthorizationRequest`](../../../AuthorizationRequest/AuthorizationRequest.md)\>\>

**`Note`**

this will create [Authorization Request](../../../AuthorizationRequest/AuthorizationRequest.md) which has to be accepted by the `target` Identity.
  An [Account](../../../Account/Account.md) or [Identity](../../../Identity/Identity.md) can fetch its pending Authorization Requests by calling [authorizations.getReceived](../../../Common/Namespaces/Authorizations/Authorizations.md#getreceived).
  Also, an Account or Identity can directly fetch the details of an Authorization Request by calling [authorizations.getOne](../../../Common/Namespaces/Authorizations/Authorizations.md#getone)

**`Note`**

this method is of type [ProcedureMethod](../../../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [transferOwnership.checkAuthorization](../../../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/entities/Asset/Base/BaseAsset.ts:108](https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/entities/Asset/Base/BaseAsset.ts#L108)

___

### unfreeze

▸ **unfreeze**(`opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

Unfreeze transfers of the Asset

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`ProcedureOpts`](../../../../../../interfaces/API/Procedures/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

**`Note`**

this method is of type [NoArgsProcedureMethod](../../../../../../interfaces/API/Procedures/Types/NoArgsProcedureMethod/NoArgsProcedureMethod.md), which means you can call [unfreeze.checkAuthorization](../../../../../../interfaces/API/Procedures/Types/NoArgsProcedureMethod/NoArgsProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/entities/Asset/Base/BaseAsset.ts:244](https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/entities/Asset/Base/BaseAsset.ts#L244)

___

### unlinkTicker

▸ **unlinkTicker**(`opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

Unlink ticker from the Asset

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`ProcedureOpts`](../../../../../../interfaces/API/Procedures/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

**`Note`**

Only the ticker owner is allowed to unlink the Asset

**`Throws`**

if there is no ticker to unlink

**`Note`**

this method is of type [NoArgsProcedureMethod](../../../../../../interfaces/API/Procedures/Types/NoArgsProcedureMethod/NoArgsProcedureMethod.md), which means you can call [unlinkTicker.checkAuthorization](../../../../../../interfaces/API/Procedures/Types/NoArgsProcedureMethod/NoArgsProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/entities/Asset/Base/BaseAsset.ts:291](https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/entities/Asset/Base/BaseAsset.ts#L291)

___

### generateUuid

▸ `Static` **generateUuid**\<`Identifiers`\>(`identifiers`): `string`

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

#### Defined in

[api/entities/Entity.ts:14](https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/entities/Entity.ts#L14)

___

### unserialize

▸ `Static` **unserialize**\<`Identifiers`\>(`serialized`): `Identifiers`

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

#### Defined in

[api/entities/Entity.ts:23](https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/entities/Entity.ts#L23)
