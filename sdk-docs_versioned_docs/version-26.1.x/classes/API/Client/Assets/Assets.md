---
id: "Assets"
title: "Class: Assets"
sidebar_label: "Assets"
---

[api/client/Assets](../../../../modules/API/Client/Assets/Assets.md).Assets

Handles all Asset related functionality

## Methods

### createAsset

▸ **createAsset**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<[`FungibleAsset`](../../Entities/Asset/Fungible/FungibleAsset.md), [`FungibleAsset`](../../Entities/Asset/Fungible/FungibleAsset.md)\>\>

Create an Asset

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`CreateAssetWithTickerParams`](../../../../interfaces/API/Procedures/Types/CreateAssetWithTickerParams/CreateAssetWithTickerParams.md) |
| `opts?` | [`ProcedureOpts`](../../../../interfaces/API/Procedures/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<[`FungibleAsset`](../../Entities/Asset/Fungible/FungibleAsset.md), [`FungibleAsset`](../../Entities/Asset/Fungible/FungibleAsset.md)\>\>

**`Note`**

if ticker is already reserved, then required role:
  - Ticker Owner

**`Note`**

this method is of type [ProcedureMethod](../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [createAsset.checkAuthorization](../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/client/Assets.ts:114](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b55e63737/src/api/client/Assets.ts#L114)

___

### createNftCollection

▸ **createNftCollection**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<[`NftCollection`](../../Entities/Asset/NonFungible/NftCollection/NftCollection.md), [`NftCollection`](../../Entities/Asset/NonFungible/NftCollection/NftCollection.md)\>\>

Create an NftCollection

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`CreateNftCollectionParams`](../../../../interfaces/API/Procedures/Types/CreateNftCollectionParams/CreateNftCollectionParams.md) |
| `opts?` | [`ProcedureOpts`](../../../../interfaces/API/Procedures/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<[`NftCollection`](../../Entities/Asset/NonFungible/NftCollection/NftCollection.md), [`NftCollection`](../../Entities/Asset/NonFungible/NftCollection/NftCollection.md)\>\>

**`Note`**

if ticker is already reserved, then required role:
  - Ticker Owner

**`Note`**

this method is of type [ProcedureMethod](../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [createNftCollection.checkAuthorization](../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/client/Assets.ts:127](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b55e63737/src/api/client/Assets.ts#L127)

___

### get

▸ **get**(`paginationOpts?`): `Promise`\<[`ResultSet`](../../../../interfaces/API/Entities/Types/ResultSet/ResultSet.md)\<[`Asset`](../../../../modules/API/Entities/Asset/Types/Types.md#asset)\>\>

Retrieve all the Assets on chain

#### Parameters

| Name | Type |
| :------ | :------ |
| `paginationOpts?` | [`PaginationOptions`](../../../../interfaces/API/Entities/Types/PaginationOptions/PaginationOptions.md) |

#### Returns

`Promise`\<[`ResultSet`](../../../../interfaces/API/Entities/Types/ResultSet/ResultSet.md)\<[`Asset`](../../../../modules/API/Entities/Asset/Types/Types.md#asset)\>\>

**`Note`**

supports pagination

#### Defined in

[api/client/Assets.ts:420](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b55e63737/src/api/client/Assets.ts#L420)

___

### getAsset

▸ **getAsset**(`args`): `Promise`\<[`Asset`](../../../../modules/API/Entities/Asset/Types/Types.md#asset)\>

Retrieve a FungibleAsset or NftCollection

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.ticker` | `string` |

#### Returns

`Promise`\<[`Asset`](../../../../modules/API/Entities/Asset/Types/Types.md#asset)\>

**`Note`**

`getFungibleAsset` and `getNftCollection` are similar to this method, but return a more specific type

#### Defined in

[api/client/Assets.ts:242](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b55e63737/src/api/client/Assets.ts#L242)

▸ **getAsset**(`args`): `Promise`\<[`Asset`](../../../../modules/API/Entities/Asset/Types/Types.md#asset)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.assetId` | `string` |

#### Returns

`Promise`\<[`Asset`](../../../../modules/API/Entities/Asset/Types/Types.md#asset)\>

#### Defined in

[api/client/Assets.ts:243](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b55e63737/src/api/client/Assets.ts#L243)

___

### getAssets

▸ **getAssets**(`args?`): `Promise`\<[`Asset`](../../../../modules/API/Entities/Asset/Types/Types.md#asset)[]\>

Retrieve all of the Assets owned by an Identity

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args?` | `Object` | - |
| `args.owner` | `string` \| [`Identity`](../../Entities/Identity/Identity.md) | Identity representation or Identity ID as stored in the blockchain |

#### Returns

`Promise`\<[`Asset`](../../../../modules/API/Entities/Asset/Types/Types.md#asset)[]\>

**`Note`**

Assets with unreadable characters in their tickers will be left out

#### Defined in

[api/client/Assets.ts:272](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b55e63737/src/api/client/Assets.ts#L272)

___

### getFungibleAsset

▸ **getFungibleAsset**(`args`): `Promise`\<[`FungibleAsset`](../../Entities/Asset/Fungible/FungibleAsset.md)\>

Retrieve a FungibleAsset

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | `Object` | - |
| `args.assetId` | `string` | Unique Id of the Asset (for spec version 6.x, this is same as ticker) |

#### Returns

`Promise`\<[`FungibleAsset`](../../Entities/Asset/Fungible/FungibleAsset.md)\>

#### Defined in

[api/client/Assets.ts:353](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b55e63737/src/api/client/Assets.ts#L353)

▸ **getFungibleAsset**(`args`): `Promise`\<[`FungibleAsset`](../../Entities/Asset/Fungible/FungibleAsset.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.ticker` | `string` |

#### Returns

`Promise`\<[`FungibleAsset`](../../Entities/Asset/Fungible/FungibleAsset.md)\>

#### Defined in

[api/client/Assets.ts:354](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b55e63737/src/api/client/Assets.ts#L354)

___

### getGlobalMetadataKeys

▸ **getGlobalMetadataKeys**(): `Promise`\<[`GlobalMetadataKey`](../../../../modules/API/Entities/MetadataEntry/Types/Types.md#globalmetadatakey)[]\>

Retrieve all the Asset Global Metadata on chain. This includes metadata id, name and specs

#### Returns

`Promise`\<[`GlobalMetadataKey`](../../../../modules/API/Entities/MetadataEntry/Types/Types.md#globalmetadatakey)[]\>

#### Defined in

[api/client/Assets.ts:470](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b55e63737/src/api/client/Assets.ts#L470)

___

### getNextCustomAssetTypeId

▸ **getNextCustomAssetTypeId**(): `Promise`\<`BigNumber`\>

Gets the next custom Asset type Id

#### Returns

`Promise`\<`BigNumber`\>

#### Defined in

[api/client/Assets.ts:528](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b55e63737/src/api/client/Assets.ts#L528)

___

### getNftCollection

▸ **getNftCollection**(`args`): `Promise`\<[`NftCollection`](../../Entities/Asset/NonFungible/NftCollection/NftCollection.md)\>

Retrieve an NftCollection

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | `Object` | - |
| `args.ticker` | `string` | NftCollection ticker |

#### Returns

`Promise`\<[`NftCollection`](../../Entities/Asset/NonFungible/NftCollection/NftCollection.md)\>

#### Defined in

[api/client/Assets.ts:385](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b55e63737/src/api/client/Assets.ts#L385)

▸ **getNftCollection**(`args`): `Promise`\<[`NftCollection`](../../Entities/Asset/NonFungible/NftCollection/NftCollection.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.assetId` | `string` |

#### Returns

`Promise`\<[`NftCollection`](../../Entities/Asset/NonFungible/NftCollection/NftCollection.md)\>

#### Defined in

[api/client/Assets.ts:386](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b55e63737/src/api/client/Assets.ts#L386)

___

### getTickerReservation

▸ **getTickerReservation**(`args`): [`TickerReservation`](../../Entities/TickerReservation/TickerReservation.md)

Retrieve a Ticker Reservation

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | `Object` | - |
| `args.ticker` | `string` | Asset ticker |

#### Returns

[`TickerReservation`](../../Entities/TickerReservation/TickerReservation.md)

#### Defined in

[api/client/Assets.ts:230](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b55e63737/src/api/client/Assets.ts#L230)

___

### getTickerReservations

▸ **getTickerReservations**(`args?`): `Promise`\<[`TickerReservation`](../../Entities/TickerReservation/TickerReservation.md)[]\>

Retrieve all the ticker reservations currently owned by an Identity. This doesn't include Assets that
  have already been launched

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args?` | `Object` | - |
| `args.owner` | `string` \| [`Identity`](../../Entities/Identity/Identity.md) | defaults to the signing Identity |

#### Returns

`Promise`\<[`TickerReservation`](../../Entities/TickerReservation/TickerReservation.md)[]\>

**`Note`**

reservations with unreadable characters in their tickers will be left out

#### Defined in

[api/client/Assets.ts:171](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b55e63737/src/api/client/Assets.ts#L171)

___

### isTickerAvailable

▸ **isTickerAvailable**(`args`): `Promise`\<`boolean`\>

Check if a ticker hasn't been reserved

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.ticker` | `string` |

#### Returns

`Promise`\<`boolean`\>

**`Note`**

can be subscribed to, if connected to node using a web socket

#### Defined in

[api/client/Assets.ts:136](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b55e63737/src/api/client/Assets.ts#L136)

▸ **isTickerAvailable**(`args`, `callback`): `Promise`\<[`UnsubCallback`](../../../../modules/API/Entities/Types/Types.md#unsubcallback)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.ticker` | `string` |
| `callback` | [`SubCallback`](../../../../modules/API/Entities/Types/Types.md#subcallback)\<`boolean`\> |

#### Returns

`Promise`\<[`UnsubCallback`](../../../../modules/API/Entities/Types/Types.md#unsubcallback)\>

#### Defined in

[api/client/Assets.ts:137](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b55e63737/src/api/client/Assets.ts#L137)

___

### registerCustomAssetType

▸ **registerCustomAssetType**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<`BigNumber`, `BigNumber`\>\>

Register a custom asset type

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`RegisterCustomAssetTypeParams`](../../../../interfaces/API/Procedures/Types/RegisterCustomAssetTypeParams/RegisterCustomAssetTypeParams.md) |
| `opts?` | [`ProcedureOpts`](../../../../interfaces/API/Procedures/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<`BigNumber`, `BigNumber`\>\>

**`Note`**

this method is of type [ProcedureMethod](../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [registerCustomAssetType.checkAuthorization](../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/client/Assets.ts:521](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b55e63737/src/api/client/Assets.ts#L521)

___

### reserveTicker

▸ **reserveTicker**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<[`TickerReservation`](../../Entities/TickerReservation/TickerReservation.md), [`TickerReservation`](../../Entities/TickerReservation/TickerReservation.md)\>\>

Reserve a ticker symbol under the ownership of the signing Identity to later use in the creation of an Asset.
  The ticker will expire after a set amount of time, after which other users can reserve it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`ReserveTickerParams`](../../../../interfaces/API/Procedures/Types/ReserveTickerParams/ReserveTickerParams.md) |
| `opts?` | [`ProcedureOpts`](../../../../interfaces/API/Procedures/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<[`TickerReservation`](../../Entities/TickerReservation/TickerReservation.md), [`TickerReservation`](../../Entities/TickerReservation/TickerReservation.md)\>\>

**`Note`**

this method is of type [ProcedureMethod](../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [reserveTicker.checkAuthorization](../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/client/Assets.ts:101](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b55e63737/src/api/client/Assets.ts#L101)
