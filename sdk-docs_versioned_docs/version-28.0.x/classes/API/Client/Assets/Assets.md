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

[api/client/Assets.ts:113](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/client/Assets.ts#L113)

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

[api/client/Assets.ts:126](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/client/Assets.ts#L126)

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

[api/client/Assets.ts:456](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/client/Assets.ts#L456)

___

### getAsset

▸ **getAsset**(`args`): `Promise`\<[`Asset`](../../../../modules/API/Entities/Asset/Types/Types.md#asset)\>

Retrieve an Asset using its ticker.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | `Object` | Configuration object |
| `args.ticker` | `string` | The registered ticker symbol of the Asset |

#### Returns

`Promise`\<[`Asset`](../../../../modules/API/Entities/Asset/Types/Types.md#asset)\>

A generic `Asset` instance. Use `getFungibleAsset` or `getNftCollection` for more specific types.

**`Remarks`**

This method will look up the `assetId` for the given `ticker`.

#### Defined in

[api/client/Assets.ts:245](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/client/Assets.ts#L245)

▸ **getAsset**(`args`): `Promise`\<[`Asset`](../../../../modules/API/Entities/Asset/Types/Types.md#asset)\>

Retrieve an Asset using its assetId.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | `Object` | Configuration object |
| `args.assetId` | `string` | The unique Asset ID on-chain |

#### Returns

`Promise`\<[`Asset`](../../../../modules/API/Entities/Asset/Types/Types.md#asset)\>

A generic `Asset` instance. Use `getFungibleAsset` or `getNftCollection` for more specific types.

#### Defined in

[api/client/Assets.ts:254](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/client/Assets.ts#L254)

___

### getAssets

▸ **getAssets**(`args?`): `Promise`\<[`Asset`](../../../../modules/API/Entities/Asset/Types/Types.md#asset)[]\>

Retrieve all `Assets` owned by a given `Identity`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args?` | `Object` | Optional configuration object |
| `args.owner` | `string` \| [`Identity`](../../Entities/Identity/Identity.md) | The owner of the assets, provided as an `Identity` instance or a string DID |

#### Returns

`Promise`\<[`Asset`](../../../../modules/API/Entities/Asset/Types/Types.md#asset)[]\>

A list of `Asset` instances owned by the specified `Identity`

**`Remarks`**

You may provide either an `Identity` instance or a `string` representing a DID.
Assets with invalid or unreadable ticker values will be excluded from the result.

#### Defined in

[api/client/Assets.ts:281](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/client/Assets.ts#L281)

___

### getFungibleAsset

▸ **getFungibleAsset**(`args`): `Promise`\<[`FungibleAsset`](../../Entities/Asset/Fungible/FungibleAsset.md)\>

Retrieve a `FungibleAsset` using its asset ID.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | `Object` | Configuration object |
| `args.assetId` | `string` | Unique ID of the Fungible Asset |
| `args.skipExistsCheck?` | `boolean` | If `true`, skips existence validation before returning the asset |

#### Returns

`Promise`\<[`FungibleAsset`](../../Entities/Asset/Fungible/FungibleAsset.md)\>

The `FungibleAsset` instance matching the provided `assetId`

**`Remarks`**

By default, the method checks whether the asset exists and throws if it does not.

**`Throws`**

If no matching `FungibleAsset` exists and `skipExistsCheck` is not set

#### Defined in

[api/client/Assets.ts:337](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/client/Assets.ts#L337)

▸ **getFungibleAsset**(`args`): `Promise`\<[`FungibleAsset`](../../Entities/Asset/Fungible/FungibleAsset.md)\>

Retrieve a `FungibleAsset` using its ticker.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | `Object` | Configuration object |
| `args.ticker` | `string` | The ticker symbol of the Fungible Asset |

#### Returns

`Promise`\<[`FungibleAsset`](../../Entities/Asset/Fungible/FungibleAsset.md)\>

The `FungibleAsset` instance matching the provided `ticker`

**`Remarks`**

The ticker must exist and be associated with a valid asset.

**`Throws`**

If no matching ticker exists or is not associated with a FungibleAsset

#### Defined in

[api/client/Assets.ts:355](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/client/Assets.ts#L355)

___

### getGlobalMetadataKeys

▸ **getGlobalMetadataKeys**(): `Promise`\<[`GlobalMetadataKey`](../../../../modules/API/Entities/MetadataEntry/Types/Types.md#globalmetadatakey)[]\>

Retrieve all global asset metadata keys registered on-chain.

#### Returns

`Promise`\<[`GlobalMetadataKey`](../../../../modules/API/Entities/MetadataEntry/Types/Types.md#globalmetadatakey)[]\>

A list of global `Asset` metadata keys

**`Remarks`**

Each metadata key includes its ID, name, and specification.

#### Defined in

[api/client/Assets.ts:502](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/client/Assets.ts#L502)

___

### getNextCustomAssetTypeId

▸ **getNextCustomAssetTypeId**(): `Promise`\<`BigNumber`\>

Gets the next custom Asset type Id

#### Returns

`Promise`\<`BigNumber`\>

#### Defined in

[api/client/Assets.ts:560](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/client/Assets.ts#L560)

___

### getNftCollection

▸ **getNftCollection**(`args`): `Promise`\<[`NftCollection`](../../Entities/Asset/NonFungible/NftCollection/NftCollection.md)\>

Retrieve an `NftCollection` using its ticker.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | `Object` | Configuration object |
| `args.ticker` | `string` | The ticker symbol of the NftCollection |

#### Returns

`Promise`\<[`NftCollection`](../../Entities/Asset/NonFungible/NftCollection/NftCollection.md)\>

The `NftCollection` instance matching the provided `ticker`

**`Remarks`**

The ticker must exist and be associated with a valid collection.

**`Throws`**

If no matching ticker exists or is not associated with an NftCollection

#### Defined in

[api/client/Assets.ts:400](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/client/Assets.ts#L400)

▸ **getNftCollection**(`args`): `Promise`\<[`NftCollection`](../../Entities/Asset/NonFungible/NftCollection/NftCollection.md)\>

Retrieve an `NftCollection` using its asset ID.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | `Object` | Configuration object |
| `args.assetId` | `string` | Unique ID of the NftCollection |
| `args.skipExistsCheck?` | `boolean` | If `true`, skips existence validation before returning the collection |

#### Returns

`Promise`\<[`NftCollection`](../../Entities/Asset/NonFungible/NftCollection/NftCollection.md)\>

The `NftCollection` instance matching the provided `assetId`

**`Remarks`**

By default, the method checks whether the collection exists and throws if it does not.

**`Throws`**

If no matching `NftCollection` exists and `skipExistsCheck` is not set

#### Defined in

[api/client/Assets.ts:416](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/client/Assets.ts#L416)

___

### getTickerReservation

▸ **getTickerReservation**(`args`): [`TickerReservation`](../../Entities/TickerReservation/TickerReservation.md)

Retrieve a Ticker Reservation

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | `Object` | Configuration object |
| `args.ticker` | `string` | Asset ticker |

#### Returns

[`TickerReservation`](../../Entities/TickerReservation/TickerReservation.md)

#### Defined in

[api/client/Assets.ts:227](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/client/Assets.ts#L227)

___

### getTickerReservations

▸ **getTickerReservations**(`args?`): `Promise`\<[`TickerReservation`](../../Entities/TickerReservation/TickerReservation.md)[]\>

Retrieve all ticker reservations owned by a given `Identity`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args?` | `Object` | Method parameters |
| `args.owner` | `string` \| [`Identity`](../../Entities/Identity/Identity.md) | The `Identity` or string DID whose reservations to return. Defaults to the signing Identity if omitted. |

#### Returns

`Promise`\<[`TickerReservation`](../../Entities/TickerReservation/TickerReservation.md)[]\>

A list of active `TickerReservation` instances

**`Remarks`**

Only active reservations are returned. Assets that have already been created are excluded.

**`Note`**

Reservations with unreadable ticker characters are excluded.

#### Defined in

[api/client/Assets.ts:187](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/client/Assets.ts#L187)

___

### isTickerAvailable

▸ **isTickerAvailable**(`args`): `Promise`\<`boolean`\>

Check if a ticker hasn't been reserved

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | `Object` | Configuration object |
| `args.ticker` | `string` | The ticker symbol to check |

#### Returns

`Promise`\<`boolean`\>

**`Note`**

can be subscribed to, if connected to node using a web socket

#### Defined in

[api/client/Assets.ts:138](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/client/Assets.ts#L138)

▸ **isTickerAvailable**(`args`, `callback`): `Promise`\<[`UnsubCallback`](../../../../modules/API/Entities/Types/Types.md#unsubcallback)\>

Check if a ticker hasn't been reserved (with subscription)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | `Object` | Configuration object |
| `args.ticker` | `string` | The ticker symbol to check |
| `callback` | [`SubCallback`](../../../../modules/API/Entities/Types/Types.md#subcallback)\<`boolean`\> | Callback function to receive updates |

#### Returns

`Promise`\<[`UnsubCallback`](../../../../modules/API/Entities/Types/Types.md#unsubcallback)\>

**`Note`**

can be subscribed to, if connected to node using a web socket

#### Defined in

[api/client/Assets.ts:148](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/client/Assets.ts#L148)

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

[api/client/Assets.ts:553](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/client/Assets.ts#L553)

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

[api/client/Assets.ts:100](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/client/Assets.ts#L100)
