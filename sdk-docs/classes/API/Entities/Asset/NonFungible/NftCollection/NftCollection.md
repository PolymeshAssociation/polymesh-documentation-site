---
id: "NftCollection"
title: "Class: NftCollection"
sidebar_label: "NftCollection"
---

[api/entities/Asset/NonFungible/NftCollection](../../../../../../modules/API/Entities/Asset/NonFungible/NftCollection/NftCollection.md).NftCollection

Class used to manage NFT functionality

## Hierarchy

- [`BaseAsset`](../../Base/BaseAsset/BaseAsset.md)

  ↳ **`NftCollection`**

## Properties

### assetHolders

• **assetHolders**: [`AssetHolders`](../AssetHolders/AssetHolders.md)

#### Defined in

[api/entities/Asset/NonFungible/NftCollection.ts:62](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c53723bab/src/api/entities/Asset/NonFungible/NftCollection.ts#L62)

___

### compliance

• **compliance**: [`Compliance`](../../Base/Compliance/Compliance.md)

#### Inherited from

[BaseAsset](../../Base/BaseAsset/BaseAsset.md).[compliance](../../Base/BaseAsset/BaseAsset.md#compliance)

#### Defined in

[api/entities/Asset/Base/BaseAsset.ts:69](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c53723bab/src/api/entities/Asset/Base/BaseAsset.ts#L69)

___

### did

• `Optional` **did**: `string`

Identity ID of the Asset (used for Claims)

#### Inherited from

[BaseAsset](../../Base/BaseAsset/BaseAsset.md).[did](../../Base/BaseAsset/BaseAsset.md#did)

#### Defined in

[api/entities/Asset/Base/BaseAsset.ts:78](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c53723bab/src/api/entities/Asset/Base/BaseAsset.ts#L78)

___

### documents

• **documents**: [`Documents`](../../Base/Documents/Documents.md)

#### Inherited from

[BaseAsset](../../Base/BaseAsset/BaseAsset.md).[documents](../../Base/BaseAsset/BaseAsset.md#documents)

#### Defined in

[api/entities/Asset/Base/BaseAsset.ts:70](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c53723bab/src/api/entities/Asset/Base/BaseAsset.ts#L70)

___

### id

• **id**: `string`

Unique ID of the Asset

#### Inherited from

[BaseAsset](../../Base/BaseAsset/BaseAsset.md).[id](../../Base/BaseAsset/BaseAsset.md#id)

#### Defined in

[api/entities/Asset/Base/BaseAsset.ts:90](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c53723bab/src/api/entities/Asset/Base/BaseAsset.ts#L90)

___

### metadata

• **metadata**: [`Metadata`](../../Base/Metadata/Metadata.md)

#### Inherited from

[BaseAsset](../../Base/BaseAsset/BaseAsset.md).[metadata](../../Base/BaseAsset/BaseAsset.md#metadata)

#### Defined in

[api/entities/Asset/Base/BaseAsset.ts:71](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c53723bab/src/api/entities/Asset/Base/BaseAsset.ts#L71)

___

### permissions

• **permissions**: [`Permissions`](../../Base/Permissions/Permissions.md)

#### Inherited from

[BaseAsset](../../Base/BaseAsset/BaseAsset.md).[permissions](../../Base/BaseAsset/BaseAsset.md#permissions)

#### Defined in

[api/entities/Asset/Base/BaseAsset.ts:72](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c53723bab/src/api/entities/Asset/Base/BaseAsset.ts#L72)

___

### settlements

• **settlements**: [`NonFungibleSettlements`](../../Base/Settlements/NonFungibleSettlements.md)

#### Defined in

[api/entities/Asset/NonFungible/NftCollection.ts:63](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c53723bab/src/api/entities/Asset/NonFungible/NftCollection.ts#L63)

___

### ticker

• `Optional` **ticker**: `string`

ticker of the Asset

Since the chain version 7.x, ticker can be optionally associated with an Asset

#### Inherited from

[BaseAsset](../../Base/BaseAsset/BaseAsset.md).[ticker](../../Base/BaseAsset/BaseAsset.md#ticker)

#### Defined in

[api/entities/Asset/Base/BaseAsset.ts:85](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c53723bab/src/api/entities/Asset/Base/BaseAsset.ts#L85)

___

### uuid

• **uuid**: `string`

#### Inherited from

[BaseAsset](../../Base/BaseAsset/BaseAsset.md).[uuid](../../Base/BaseAsset/BaseAsset.md#uuid)

#### Defined in

[api/entities/Entity.ts:46](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c53723bab/src/api/entities/Entity.ts#L46)

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

#### Inherited from

[BaseAsset](../../Base/BaseAsset/BaseAsset.md).[addRequiredMediators](../../Base/BaseAsset/BaseAsset.md#addrequiredmediators)

#### Defined in

[api/entities/Asset/Base/BaseAsset.ts:243](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c53723bab/src/api/entities/Asset/Base/BaseAsset.ts#L243)

___

### collectionKeys

▸ **collectionKeys**(): `Promise`\<[`CollectionKey`](../../../../../../modules/API/Entities/Asset/Types/Types.md#collectionkey)[]\>

Retrieve the metadata that defines the NFT collection. Every `issue` call for this collection must provide a value for each element returned

#### Returns

`Promise`\<[`CollectionKey`](../../../../../../modules/API/Entities/Asset/Types/Types.md#collectionkey)[]\>

**`Note`**

Each NFT **must** have an entry for each value, it **should** comply with the spec.
In other words, the SDK only validates the presence of metadata keys, additional validation should be used when issuing

#### Defined in

[api/entities/Asset/NonFungible/NftCollection.ts:172](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c53723bab/src/api/entities/Asset/NonFungible/NftCollection.ts#L172)

___

### controllerTransfer

▸ **controllerTransfer**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

Force a transfer from the origin portfolio to one of the caller's portfolios

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`NftControllerTransferParams`](../../../../../../interfaces/API/Procedures/Types/NftControllerTransferParams/NftControllerTransferParams.md) |
| `opts?` | [`ProcedureOpts`](../../../../../../interfaces/API/Procedures/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

**`Note`**

this method is of type [ProcedureMethod](../../../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [controllerTransfer.checkAuthorization](../../../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/entities/Asset/NonFungible/NftCollection.ts:82](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c53723bab/src/api/entities/Asset/NonFungible/NftCollection.ts#L82)

___

### createdAt

▸ **createdAt**(): `Promise`\<``null`` \| [`EventIdentifier`](../../../../../../interfaces/API/Client/Types/EventIdentifier/EventIdentifier.md)\>

Retrieve the identifier data (block number, date and event index) of the event that was emitted when the token was created

#### Returns

`Promise`\<``null`` \| [`EventIdentifier`](../../../../../../interfaces/API/Client/Types/EventIdentifier/EventIdentifier.md)\>

**`Note`**

uses the middlewareV2

**`Note`**

there is a possibility that the data is not ready by the time it is requested. In that case, `null` is returned

#### Defined in

[api/entities/Asset/NonFungible/NftCollection.ts:261](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c53723bab/src/api/entities/Asset/NonFungible/NftCollection.ts#L261)

___

### currentFundingRound

▸ **currentFundingRound**(): `Promise`\<``null`` \| `string`\>

Retrieve the Asset's funding round

#### Returns

`Promise`\<``null`` \| `string`\>

**`Note`**

can be subscribed to, if connected to node using a web socket

#### Inherited from

[BaseAsset](../../Base/BaseAsset/BaseAsset.md).[currentFundingRound](../../Base/BaseAsset/BaseAsset.md#currentfundinground)

#### Defined in

[api/entities/Asset/Base/BaseAsset.ts:511](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c53723bab/src/api/entities/Asset/Base/BaseAsset.ts#L511)

▸ **currentFundingRound**(`callback`): `Promise`\<[`UnsubCallback`](../../../../../../modules/API/Entities/Types/Types.md#unsubcallback)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`SubCallback`](../../../../../../modules/API/Entities/Types/Types.md#subcallback)\<``null`` \| `string`\> |

#### Returns

`Promise`\<[`UnsubCallback`](../../../../../../modules/API/Entities/Types/Types.md#unsubcallback)\>

#### Inherited from

[BaseAsset](../../Base/BaseAsset/BaseAsset.md).[currentFundingRound](../../Base/BaseAsset/BaseAsset.md#currentfundinground)

#### Defined in

[api/entities/Asset/Base/BaseAsset.ts:512](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c53723bab/src/api/entities/Asset/Base/BaseAsset.ts#L512)

___

### details

▸ **details**(): `Promise`\<[`AssetDetails`](../../../../../../interfaces/API/Entities/Asset/Types/AssetDetails/AssetDetails.md)\>

Retrieve the NftCollection's data

#### Returns

`Promise`\<[`AssetDetails`](../../../../../../interfaces/API/Entities/Asset/Types/AssetDetails/AssetDetails.md)\>

**`Note`**

can be subscribed to, if connected to node using a web socket

#### Overrides

[BaseAsset](../../Base/BaseAsset/BaseAsset.md).[details](../../Base/BaseAsset/BaseAsset.md#details)

#### Defined in

[api/entities/Asset/NonFungible/NftCollection.ts:122](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c53723bab/src/api/entities/Asset/NonFungible/NftCollection.ts#L122)

▸ **details**(`callback`): `Promise`\<[`UnsubCallback`](../../../../../../modules/API/Entities/Types/Types.md#unsubcallback)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`SubCallback`](../../../../../../modules/API/Entities/Types/Types.md#subcallback)\<[`AssetDetails`](../../../../../../interfaces/API/Entities/Asset/Types/AssetDetails/AssetDetails.md)\> |

#### Returns

`Promise`\<[`UnsubCallback`](../../../../../../modules/API/Entities/Types/Types.md#unsubcallback)\>

#### Overrides

[BaseAsset](../../Base/BaseAsset/BaseAsset.md).[details](../../Base/BaseAsset/BaseAsset.md#details)

#### Defined in

[api/entities/Asset/NonFungible/NftCollection.ts:123](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c53723bab/src/api/entities/Asset/NonFungible/NftCollection.ts#L123)

___

### exists

▸ **exists**(): `Promise`\<`boolean`\>

Determine whether this NftCollection exists on chain

#### Returns

`Promise`\<`boolean`\>

#### Overrides

BaseAsset.exists

#### Defined in

[api/entities/Asset/NonFungible/NftCollection.ts:284](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c53723bab/src/api/entities/Asset/NonFungible/NftCollection.ts#L284)

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

#### Inherited from

[BaseAsset](../../Base/BaseAsset/BaseAsset.md).[freeze](../../Base/BaseAsset/BaseAsset.md#freeze)

#### Defined in

[api/entities/Asset/Base/BaseAsset.ts:223](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c53723bab/src/api/entities/Asset/Base/BaseAsset.ts#L223)

___

### getCollectionId

▸ **getCollectionId**(): `Promise`\<`BigNumber`\>

Returns the collection's on chain numeric ID. Used primarily to access NFT specific storage values

#### Returns

`Promise`\<`BigNumber`\>

#### Defined in

[api/entities/Asset/NonFungible/NftCollection.ts:311](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c53723bab/src/api/entities/Asset/NonFungible/NftCollection.ts#L311)

___

### getIdentifiers

▸ **getIdentifiers**(): `Promise`\<[`SecurityIdentifier`](../../../../../../interfaces/API/Entities/Asset/Types/SecurityIdentifier/SecurityIdentifier.md)[]\>

Retrieve the Asset's identifiers list

#### Returns

`Promise`\<[`SecurityIdentifier`](../../../../../../interfaces/API/Entities/Asset/Types/SecurityIdentifier/SecurityIdentifier.md)[]\>

**`Note`**

can be subscribed to, if connected to node using a web socket

#### Inherited from

[BaseAsset](../../Base/BaseAsset/BaseAsset.md).[getIdentifiers](../../Base/BaseAsset/BaseAsset.md#getidentifiers)

#### Defined in

[api/entities/Asset/Base/BaseAsset.ts:275](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c53723bab/src/api/entities/Asset/Base/BaseAsset.ts#L275)

▸ **getIdentifiers**(`callback?`): `Promise`\<[`UnsubCallback`](../../../../../../modules/API/Entities/Types/Types.md#unsubcallback)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback?` | [`SubCallback`](../../../../../../modules/API/Entities/Types/Types.md#subcallback)\<[`SecurityIdentifier`](../../../../../../interfaces/API/Entities/Asset/Types/SecurityIdentifier/SecurityIdentifier.md)[]\> |

#### Returns

`Promise`\<[`UnsubCallback`](../../../../../../modules/API/Entities/Types/Types.md#unsubcallback)\>

#### Inherited from

[BaseAsset](../../Base/BaseAsset/BaseAsset.md).[getIdentifiers](../../Base/BaseAsset/BaseAsset.md#getidentifiers)

#### Defined in

[api/entities/Asset/Base/BaseAsset.ts:276](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c53723bab/src/api/entities/Asset/Base/BaseAsset.ts#L276)

___

### getNft

▸ **getNft**(`args`): `Promise`\<[`Nft`](../Nft/Nft.md)\>

Get an NFT belonging to this collection

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.id` | `BigNumber` |

#### Returns

`Promise`\<[`Nft`](../Nft/Nft.md)\>

**`Throws`**

if the given NFT does not exist

#### Defined in

[api/entities/Asset/NonFungible/NftCollection.ts:237](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c53723bab/src/api/entities/Asset/NonFungible/NftCollection.ts#L237)

___

### getRequiredMediators

▸ **getRequiredMediators**(): `Promise`\<[`Identity`](../../../Identity/Identity.md)[]\>

Get required Asset mediators. These Identities must approve any Instruction involving the asset

#### Returns

`Promise`\<[`Identity`](../../../Identity/Identity.md)[]\>

#### Inherited from

[BaseAsset](../../Base/BaseAsset/BaseAsset.md).[getRequiredMediators](../../Base/BaseAsset/BaseAsset.md#getrequiredmediators)

#### Defined in

[api/entities/Asset/Base/BaseAsset.ts:456](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c53723bab/src/api/entities/Asset/Base/BaseAsset.ts#L456)

___

### getTransactionHistory

▸ **getTransactionHistory**(`opts`): `Promise`\<[`ResultSet`](../../../../../../interfaces/API/Entities/Types/ResultSet/ResultSet.md)\<[`HistoricNftTransaction`](../../../../../../interfaces/API/Entities/Asset/Types/HistoricNftTransaction/HistoricNftTransaction.md)\>\>

Retrieve this Collection's transaction history

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `Object` |
| `opts.size?` | `BigNumber` |
| `opts.start?` | `BigNumber` |

#### Returns

`Promise`\<[`ResultSet`](../../../../../../interfaces/API/Entities/Types/ResultSet/ResultSet.md)\<[`HistoricNftTransaction`](../../../../../../interfaces/API/Entities/Asset/Types/HistoricNftTransaction/HistoricNftTransaction.md)\>\>

**`Note`**

uses the middlewareV2

#### Defined in

[api/entities/Asset/NonFungible/NftCollection.ts:346](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c53723bab/src/api/entities/Asset/NonFungible/NftCollection.ts#L346)

___

### getVenueFilteringDetails

▸ **getVenueFilteringDetails**(): `Promise`\<[`VenueFilteringDetails`](../../../../../../interfaces/API/Entities/Asset/Types/VenueFilteringDetails/VenueFilteringDetails.md)\>

Get venue filtering details

#### Returns

`Promise`\<[`VenueFilteringDetails`](../../../../../../interfaces/API/Entities/Asset/Types/VenueFilteringDetails/VenueFilteringDetails.md)\>

#### Inherited from

[BaseAsset](../../Base/BaseAsset/BaseAsset.md).[getVenueFilteringDetails](../../Base/BaseAsset/BaseAsset.md#getvenuefilteringdetails)

#### Defined in

[api/entities/Asset/Base/BaseAsset.ts:476](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c53723bab/src/api/entities/Asset/Base/BaseAsset.ts#L476)

___

### investorCount

▸ **investorCount**(): `Promise`\<`BigNumber`\>

Retrieve the amount of unique investors that hold this Nft

#### Returns

`Promise`\<`BigNumber`\>

#### Defined in

[api/entities/Asset/NonFungible/NftCollection.ts:215](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c53723bab/src/api/entities/Asset/NonFungible/NftCollection.ts#L215)

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

[BaseAsset](../../Base/BaseAsset/BaseAsset.md).[isEqual](../../Base/BaseAsset/BaseAsset.md#isequal)

#### Defined in

[api/entities/Entity.ts:61](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c53723bab/src/api/entities/Entity.ts#L61)

___

### isFrozen

▸ **isFrozen**(): `Promise`\<`boolean`\>

Check whether transfers are frozen for the Asset

#### Returns

`Promise`\<`boolean`\>

**`Note`**

can be subscribed to, if connected to node using a web socket

#### Inherited from

[BaseAsset](../../Base/BaseAsset/BaseAsset.md).[isFrozen](../../Base/BaseAsset/BaseAsset.md#isfrozen)

#### Defined in

[api/entities/Asset/Base/BaseAsset.ts:321](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c53723bab/src/api/entities/Asset/Base/BaseAsset.ts#L321)

▸ **isFrozen**(`callback`): `Promise`\<[`UnsubCallback`](../../../../../../modules/API/Entities/Types/Types.md#unsubcallback)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`SubCallback`](../../../../../../modules/API/Entities/Types/Types.md#subcallback)\<`boolean`\> |

#### Returns

`Promise`\<[`UnsubCallback`](../../../../../../modules/API/Entities/Types/Types.md#unsubcallback)\>

#### Inherited from

[BaseAsset](../../Base/BaseAsset/BaseAsset.md).[isFrozen](../../Base/BaseAsset/BaseAsset.md#isfrozen)

#### Defined in

[api/entities/Asset/Base/BaseAsset.ts:322](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c53723bab/src/api/entities/Asset/Base/BaseAsset.ts#L322)

___

### issue

▸ **issue**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<[`Nft`](../Nft/Nft.md), [`Nft`](../Nft/Nft.md)\>\>

Issues a new NFT for the collection

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`IssueNftParams`](../../../../../../modules/API/Procedures/Types/Types.md#issuenftparams) |
| `opts?` | [`ProcedureOpts`](../../../../../../interfaces/API/Procedures/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<[`Nft`](../Nft/Nft.md), [`Nft`](../Nft/Nft.md)\>\>

**`Note`**

Each NFT requires metadata for each value returned by `collectionKeys`. The SDK and chain only validate the presence of these fields. Additional validation may be needed to ensure each value complies with the specification.

**`Note`**

this method is of type [ProcedureMethod](../../../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [issue.checkAuthorization](../../../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/entities/Asset/NonFungible/NftCollection.ts:72](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c53723bab/src/api/entities/Asset/NonFungible/NftCollection.ts#L72)

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

#### Inherited from

[BaseAsset](../../Base/BaseAsset/BaseAsset.md).[linkTicker](../../Base/BaseAsset/BaseAsset.md#linkticker)

#### Defined in

[api/entities/Asset/Base/BaseAsset.ts:266](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c53723bab/src/api/entities/Asset/Base/BaseAsset.ts#L266)

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

#### Inherited from

[BaseAsset](../../Base/BaseAsset/BaseAsset.md).[modify](../../Base/BaseAsset/BaseAsset.md#modify)

#### Defined in

[api/entities/Asset/Base/BaseAsset.ts:135](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c53723bab/src/api/entities/Asset/Base/BaseAsset.ts#L135)

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

#### Inherited from

[BaseAsset](../../Base/BaseAsset/BaseAsset.md).[removeRequiredMediators](../../Base/BaseAsset/BaseAsset.md#removerequiredmediators)

#### Defined in

[api/entities/Asset/Base/BaseAsset.ts:253](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c53723bab/src/api/entities/Asset/Base/BaseAsset.ts#L253)

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

#### Inherited from

[BaseAsset](../../Base/BaseAsset/BaseAsset.md).[setVenueFiltering](../../Base/BaseAsset/BaseAsset.md#setvenuefiltering)

#### Defined in

[api/entities/Asset/Base/BaseAsset.ts:113](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c53723bab/src/api/entities/Asset/Base/BaseAsset.ts#L113)

___

### toHuman

▸ **toHuman**(): `string`

Return the BaseAsset's ID

#### Returns

`string`

#### Inherited from

[BaseAsset](../../Base/BaseAsset/BaseAsset.md).[toHuman](../../Base/BaseAsset/BaseAsset.md#tohuman)

#### Defined in

[api/entities/Asset/Base/BaseAsset.ts:578](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c53723bab/src/api/entities/Asset/Base/BaseAsset.ts#L578)

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

#### Inherited from

[BaseAsset](../../Base/BaseAsset/BaseAsset.md).[transferOwnership](../../Base/BaseAsset/BaseAsset.md#transferownership)

#### Defined in

[api/entities/Asset/Base/BaseAsset.ts:103](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c53723bab/src/api/entities/Asset/Base/BaseAsset.ts#L103)

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

#### Inherited from

[BaseAsset](../../Base/BaseAsset/BaseAsset.md).[unfreeze](../../Base/BaseAsset/BaseAsset.md#unfreeze)

#### Defined in

[api/entities/Asset/Base/BaseAsset.ts:233](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c53723bab/src/api/entities/Asset/Base/BaseAsset.ts#L233)

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

[BaseAsset](../../Base/BaseAsset/BaseAsset.md).[generateUuid](../../Base/BaseAsset/BaseAsset.md#generateuuid)

#### Defined in

[api/entities/Entity.ts:14](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c53723bab/src/api/entities/Entity.ts#L14)

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

[BaseAsset](../../Base/BaseAsset/BaseAsset.md).[unserialize](../../Base/BaseAsset/BaseAsset.md#unserialize)

#### Defined in

[api/entities/Entity.ts:23](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c53723bab/src/api/entities/Entity.ts#L23)
