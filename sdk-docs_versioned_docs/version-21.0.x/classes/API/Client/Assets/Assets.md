---
id: 'Assets'
title: 'Class: Assets'
sidebar_label: 'Assets'
---

[api/client/Assets](../../../../modules/API/Client/Assets/Assets.md).Assets

Handles all Asset related functionality

## Methods

### createAsset

▸ **createAsset**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction) \<[`Asset`](../../Entities/Asset/Asset.md), [`Asset`](../../Entities/Asset/Asset.md)\>\>

Create an Asset

#### Parameters

| Name    | Type                                                                                                                                    |
| :------ | :-------------------------------------------------------------------------------------------------------------------------------------- |
| `args`  | [`CreateAssetWithTickerParams`](../../../../interfaces/API/Procedures/Types/CreateAssetWithTickerParams/CreateAssetWithTickerParams.md) |
| `opts?` | [`ProcedureOpts`](../../../../interfaces/Types/ProcedureOpts/ProcedureOpts.md)                                                          |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction) \<[`Asset`](../../Entities/Asset/Asset.md), [`Asset`](../../Entities/Asset/Asset.md)\>\>

**`Note`**

if ticker is already reserved, then required role:

- Ticker Owner

**`Note`**

this method is of type [ProcedureMethod](../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [createAsset.checkAuthorization](../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/client/Assets.ts:84](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/client/Assets.ts#L84)

---

### get

▸ **get**(`paginationOpts?`): `Promise`\<[`ResultSet`](../../../../interfaces/Types/ResultSet/ResultSet.md) \<[`Asset`](../../Entities/Asset/Asset.md)\>\>

Retrieve all the Assets on chain

#### Parameters

| Name              | Type                                                                                       |
| :---------------- | :----------------------------------------------------------------------------------------- |
| `paginationOpts?` | [`PaginationOptions`](../../../../interfaces/Types/PaginationOptions/PaginationOptions.md) |

#### Returns

`Promise`\<[`ResultSet`](../../../../interfaces/Types/ResultSet/ResultSet.md) \<[`Asset`](../../Entities/Asset/Asset.md)\>\>

**`Note`**

supports pagination

#### Defined in

[api/client/Assets.ts:226](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/client/Assets.ts#L226)

---

### getAsset

▸ **getAsset**(`args`): `Promise`\<[`Asset`](../../Entities/Asset/Asset.md)\>

Retrieve an Asset

#### Parameters

| Name          | Type     | Description  |
| :------------ | :------- | :----------- |
| `args`        | `Object` | -            |
| `args.ticker` | `string` | Asset ticker |

#### Returns

`Promise`\<[`Asset`](../../Entities/Asset/Asset.md)\>

#### Defined in

[api/client/Assets.ts:205](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/client/Assets.ts#L205)

---

### getAssets

▸ **getAssets**(`args?`): `Promise`\<[`Asset`](../../Entities/Asset/Asset.md)[]\>

Retrieve all of the Assets owned by an Identity

#### Parameters

| Name         | Type                                                          | Description                                                        |
| :----------- | :------------------------------------------------------------ | :----------------------------------------------------------------- |
| `args?`      | `Object`                                                      | -                                                                  |
| `args.owner` | `string` \| [`Identity`](../../Entities/Identity/Identity.md) | Identity representation or Identity ID as stored in the blockchain |

#### Returns

`Promise`\<[`Asset`](../../Entities/Asset/Asset.md)[]\>

**`Note`**

Assets with unreadable characters in their tickers will be left out

#### Defined in

[api/client/Assets.ts:173](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/client/Assets.ts#L173)

---

### getGlobalMetadataKeys

▸ **getGlobalMetadataKeys**(): `Promise`\<[`GlobalMetadataKey`](../../../../modules/API/Entities/MetadataEntry/Types/Types.md#globalmetadatakey)[]\>

Retrieve all the Asset Global Metadata on chain. This includes metadata id, name and specs

#### Returns

`Promise`\<[`GlobalMetadataKey`](../../../../modules/API/Entities/MetadataEntry/Types/Types.md#globalmetadatakey)[]\>

#### Defined in

[api/client/Assets.ts:259](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/client/Assets.ts#L259)

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

[api/client/Assets.ts:159](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/client/Assets.ts#L159)

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

[api/client/Assets.ts:125](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/client/Assets.ts#L125)

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

[api/client/Assets.ts:93](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/client/Assets.ts#L93)

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

[api/client/Assets.ts:94](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/client/Assets.ts#L94)

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

[api/client/Assets.ts:71](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/client/Assets.ts#L71)
