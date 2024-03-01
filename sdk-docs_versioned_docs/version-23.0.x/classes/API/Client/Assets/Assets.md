---
id: 'Assets'
title: 'Class: Assets'
sidebar_label: 'Assets'
---

[api/client/Assets](../../../../modules/API/Client/Assets/Assets.md).Assets

Handles all Asset related functionality

## Methods

### createAsset

▸ **createAsset**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction) \<[`FungibleAsset`](../../Entities/Asset/Fungible/FungibleAsset.md), [`FungibleAsset`](../../Entities/Asset/Fungible/FungibleAsset.md)\>\>

Create an Asset

#### Parameters

| Name    | Type                                                                                                                                    |
| :------ | :-------------------------------------------------------------------------------------------------------------------------------------- |
| `args`  | [`CreateAssetWithTickerParams`](../../../../interfaces/API/Procedures/Types/CreateAssetWithTickerParams/CreateAssetWithTickerParams.md) |
| `opts?` | [`ProcedureOpts`](../../../../interfaces/Types/ProcedureOpts/ProcedureOpts.md)                                                          |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction) \<[`FungibleAsset`](../../Entities/Asset/Fungible/FungibleAsset.md), [`FungibleAsset`](../../Entities/Asset/Fungible/FungibleAsset.md)\>\>

**`Note`**

if ticker is already reserved, then required role:

- Ticker Owner

**`Note`**

this method is of type [ProcedureMethod](../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [createAsset.checkAuthorization](../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/client/Assets.ts:99](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2c78f6c34/src/api/client/Assets.ts#L99)

---

### createNftCollection

▸ **createNftCollection**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction) \<[`NftCollection`](../../Entities/Asset/NonFungible/NftCollection/NftCollection.md), [`NftCollection`](../../Entities/Asset/NonFungible/NftCollection/NftCollection.md)\>\>

Create an NftCollection

#### Parameters

| Name    | Type                                                                                                                              |
| :------ | :-------------------------------------------------------------------------------------------------------------------------------- |
| `args`  | [`CreateNftCollectionParams`](../../../../interfaces/API/Procedures/Types/CreateNftCollectionParams/CreateNftCollectionParams.md) |
| `opts?` | [`ProcedureOpts`](../../../../interfaces/Types/ProcedureOpts/ProcedureOpts.md)                                                    |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction) \<[`NftCollection`](../../Entities/Asset/NonFungible/NftCollection/NftCollection.md), [`NftCollection`](../../Entities/Asset/NonFungible/NftCollection/NftCollection.md)\>\>

**`Note`**

if ticker is already reserved, then required role:

- Ticker Owner

**`Note`**

this method is of type [ProcedureMethod](../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [createNftCollection.checkAuthorization](../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/client/Assets.ts:112](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2c78f6c34/src/api/client/Assets.ts#L112)

---

### get

▸ **get**(`paginationOpts?`): `Promise`\<[`ResultSet`](../../../../interfaces/Types/ResultSet/ResultSet.md) \<[`FungibleAsset`](../../Entities/Asset/Fungible/FungibleAsset.md) \| [`NftCollection`](../../Entities/Asset/NonFungible/NftCollection/NftCollection.md)\>\>

Retrieve all the Assets on chain

#### Parameters

| Name              | Type                                                                                       |
| :---------------- | :----------------------------------------------------------------------------------------- |
| `paginationOpts?` | [`PaginationOptions`](../../../../interfaces/Types/PaginationOptions/PaginationOptions.md) |

#### Returns

`Promise`\<[`ResultSet`](../../../../interfaces/Types/ResultSet/ResultSet.md) \<[`FungibleAsset`](../../Entities/Asset/Fungible/FungibleAsset.md) \| [`NftCollection`](../../Entities/Asset/NonFungible/NftCollection/NftCollection.md)\>\>

**`Note`**

supports pagination

#### Defined in

[api/client/Assets.ts:293](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2c78f6c34/src/api/client/Assets.ts#L293)

---

### getAsset

▸ **getAsset**(`args`): `Promise`\<[`Asset`](../../../../modules/API/Entities/Asset/Types/Types.md#asset)\>

Retrieve a FungibleAsset or NftCollection

#### Parameters

| Name          | Type     |
| :------------ | :------- |
| `args`        | `Object` |
| `args.ticker` | `string` |

#### Returns

`Promise`\<[`Asset`](../../../../modules/API/Entities/Asset/Types/Types.md#asset)\>

**`Note`**

`getFungibleAsset` and `getNftCollection` are similar to this method, but return a more specific type

#### Defined in

[api/client/Assets.ts:199](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2c78f6c34/src/api/client/Assets.ts#L199)

---

### getAssets

▸ **getAssets**(`args?`): `Promise`\<[`Asset`](../../../../modules/API/Entities/Asset/Types/Types.md#asset)[]\>

Retrieve all of the Assets owned by an Identity

#### Parameters

| Name         | Type                                                          | Description                                                        |
| :----------- | :------------------------------------------------------------ | :----------------------------------------------------------------- |
| `args?`      | `Object`                                                      | -                                                                  |
| `args.owner` | `string` \| [`Identity`](../../Entities/Identity/Identity.md) | Identity representation or Identity ID as stored in the blockchain |

#### Returns

`Promise`\<[`Asset`](../../../../modules/API/Entities/Asset/Types/Types.md#asset)[]\>

**`Note`**

Assets with unreadable characters in their tickers will be left out

#### Defined in

[api/client/Assets.ts:213](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2c78f6c34/src/api/client/Assets.ts#L213)

---

### getFungibleAsset

▸ **getFungibleAsset**(`args`): `Promise`\<[`FungibleAsset`](../../Entities/Asset/Fungible/FungibleAsset.md)\>

Retrieve a FungibleAsset

#### Parameters

| Name          | Type     | Description  |
| :------------ | :------- | :----------- |
| `args`        | `Object` | -            |
| `args.ticker` | `string` | Asset ticker |

#### Returns

`Promise`\<[`FungibleAsset`](../../Entities/Asset/Fungible/FungibleAsset.md)\>

#### Defined in

[api/client/Assets.ts:251](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2c78f6c34/src/api/client/Assets.ts#L251)

---

### getGlobalMetadataKeys

▸ **getGlobalMetadataKeys**(): `Promise`\<[`GlobalMetadataKey`](../../../../modules/API/Entities/MetadataEntry/Types/Types.md#globalmetadatakey)[]\>

Retrieve all the Asset Global Metadata on chain. This includes metadata id, name and specs

#### Returns

`Promise`\<[`GlobalMetadataKey`](../../../../modules/API/Entities/MetadataEntry/Types/Types.md#globalmetadatakey)[]\>

#### Defined in

[api/client/Assets.ts:338](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2c78f6c34/src/api/client/Assets.ts#L338)

---

### getNftCollection

▸ **getNftCollection**(`args`): `Promise`\<[`NftCollection`](../../Entities/Asset/NonFungible/NftCollection/NftCollection.md)\>

Retrieve an NftCollection

#### Parameters

| Name          | Type     | Description          |
| :------------ | :------- | :------------------- |
| `args`        | `Object` | -                    |
| `args.ticker` | `string` | NftCollection ticker |

#### Returns

`Promise`\<[`NftCollection`](../../Entities/Asset/NonFungible/NftCollection/NftCollection.md)\>

#### Defined in

[api/client/Assets.ts:272](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2c78f6c34/src/api/client/Assets.ts#L272)

---

### getTickerReservation

▸ **getTickerReservation**(`args`): [`TickerReservation`](../../Entities/TickerReservation/TickerReservation.md)

Retrieve a Ticker Reservation

#### Parameters

| Name          | Type     | Description  |
| :------------ | :------- | :----------- |
| `args`        | `Object` | -            |
| `args.ticker` | `string` | Asset ticker |

#### Returns

[`TickerReservation`](../../Entities/TickerReservation/TickerReservation.md)

#### Defined in

[api/client/Assets.ts:187](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2c78f6c34/src/api/client/Assets.ts#L187)

---

### getTickerReservations

▸ **getTickerReservations**(`args?`): `Promise`\<[`TickerReservation`](../../Entities/TickerReservation/TickerReservation.md)[]\>

Retrieve all the ticker reservations currently owned by an Identity. This doesn't include Assets that
have already been launched

#### Parameters

| Name         | Type                                                          | Description                      |
| :----------- | :------------------------------------------------------------ | :------------------------------- |
| `args?`      | `Object`                                                      | -                                |
| `args.owner` | `string` \| [`Identity`](../../Entities/Identity/Identity.md) | defaults to the signing Identity |

#### Returns

`Promise`\<[`TickerReservation`](../../Entities/TickerReservation/TickerReservation.md)[]\>

**`Note`**

reservations with unreadable characters in their tickers will be left out

#### Defined in

[api/client/Assets.ts:153](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2c78f6c34/src/api/client/Assets.ts#L153)

---

### isTickerAvailable

▸ **isTickerAvailable**(`args`): `Promise`\<`boolean`\>

Check if a ticker hasn't been reserved

#### Parameters

| Name          | Type     |
| :------------ | :------- |
| `args`        | `Object` |
| `args.ticker` | `string` |

#### Returns

`Promise`\<`boolean`\>

**`Note`**

can be subscribed to

#### Defined in

[api/client/Assets.ts:121](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2c78f6c34/src/api/client/Assets.ts#L121)

▸ **isTickerAvailable**(`args`, `callback`): `Promise`\<[`UnsubCallback`](../../../../modules/Types/Types.md#unsubcallback)\>

#### Parameters

| Name          | Type                                                                         |
| :------------ | :--------------------------------------------------------------------------- |
| `args`        | `Object`                                                                     |
| `args.ticker` | `string`                                                                     |
| `callback`    | [`SubCallback`](../../../../modules/Types/Types.md#subcallback)\<`boolean`\> |

#### Returns

`Promise`\<[`UnsubCallback`](../../../../modules/Types/Types.md#unsubcallback)\>

#### Defined in

[api/client/Assets.ts:122](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2c78f6c34/src/api/client/Assets.ts#L122)

---

### reserveTicker

▸ **reserveTicker**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction) \<[`TickerReservation`](../../Entities/TickerReservation/TickerReservation.md), [`TickerReservation`](../../Entities/TickerReservation/TickerReservation.md)\>\>

Reserve a ticker symbol under the ownership of the signing Identity to later use in the creation of an Asset.
The ticker will expire after a set amount of time, after which other users can reserve it

#### Parameters

| Name    | Type                                                                                                            |
| :------ | :-------------------------------------------------------------------------------------------------------------- |
| `args`  | [`ReserveTickerParams`](../../../../interfaces/API/Procedures/Types/ReserveTickerParams/ReserveTickerParams.md) |
| `opts?` | [`ProcedureOpts`](../../../../interfaces/Types/ProcedureOpts/ProcedureOpts.md)                                  |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction) \<[`TickerReservation`](../../Entities/TickerReservation/TickerReservation.md), [`TickerReservation`](../../Entities/TickerReservation/TickerReservation.md)\>\>

**`Note`**

this method is of type [ProcedureMethod](../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [reserveTicker.checkAuthorization](../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/client/Assets.ts:86](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2c78f6c34/src/api/client/Assets.ts#L86)
