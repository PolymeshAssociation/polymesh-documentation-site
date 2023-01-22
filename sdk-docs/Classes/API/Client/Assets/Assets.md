[api/client/Assets](../../../../Modules/API/Client/Assets.md).Assets

Handles all Asset related functionality

## Methods

### claimClassicTicker

▸ **claimClassicTicker**(`args`, `opts?`): `Promise`<[`GenericPolymeshTransaction`](../../../../Modules/Types/Types.md#genericpolymeshtransaction)<[`TickerReservation`](../../Entities/TickerReservation/TickerReservation.md), [`TickerReservation`](../../Entities/TickerReservation/TickerReservation.md)\>\>

Claim a ticker symbol that was reserved in Polymath Classic (Ethereum). The Ethereum Account
  that owns the ticker must sign a special message that contains the DID of the Identity that will own the ticker
  in Polymesh, and provide the signed data to this call

**`Note`**

this method is of type [ProcedureMethod](../../../../Interfaces/Types/ProcedureMethod.md), which means you can call [claimClassicTicker.checkAuthorization](../../../../Interfaces/Types/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`ClaimClassicTickerParams`](../../../../Interfaces/API/Procedures/Types/ClaimClassicTickerParams.md) |
| `opts?` | [`ProcedureOpts`](../../../../Interfaces/Types/ProcedureOpts.md) |

#### Returns

`Promise`<[`GenericPolymeshTransaction`](../../../../Modules/Types/Types.md#genericpolymeshtransaction)<[`TickerReservation`](../../Entities/TickerReservation/TickerReservation.md), [`TickerReservation`](../../Entities/TickerReservation/TickerReservation.md)\>\>

___

### createAsset

▸ **createAsset**(`args`, `opts?`): `Promise`<[`GenericPolymeshTransaction`](../../../../Modules/Types/Types.md#genericpolymeshtransaction)<[`Asset`](../../Entities/Asset/Asset.md), [`Asset`](../../Entities/Asset/Asset.md)\>\>

Create an Asset

**`Note`**

if ticker is already reserved, then required role:
  - Ticker Owner

**`Note`**

this method is of type [ProcedureMethod](../../../../Interfaces/Types/ProcedureMethod.md), which means you can call [createAsset.checkAuthorization](../../../../Interfaces/Types/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`CreateAssetWithTickerParams`](../../../../Interfaces/API/Procedures/Types/CreateAssetWithTickerParams.md) |
| `opts?` | [`ProcedureOpts`](../../../../Interfaces/Types/ProcedureOpts.md) |

#### Returns

`Promise`<[`GenericPolymeshTransaction`](../../../../Modules/Types/Types.md#genericpolymeshtransaction)<[`Asset`](../../Entities/Asset/Asset.md), [`Asset`](../../Entities/Asset/Asset.md)\>\>

___

### get

▸ **get**(`paginationOpts?`): `Promise`<[`ResultSet`](../../../../Interfaces/Types/ResultSet.md)<[`Asset`](../../Entities/Asset/Asset.md)\>\>

Retrieve all the Assets on chain

**`Note`**

supports pagination

#### Parameters

| Name | Type |
| :------ | :------ |
| `paginationOpts?` | [`PaginationOptions`](../../../../Interfaces/Types/PaginationOptions.md) |

#### Returns

`Promise`<[`ResultSet`](../../../../Interfaces/Types/ResultSet.md)<[`Asset`](../../Entities/Asset/Asset.md)\>\>

___

### getAsset

▸ **getAsset**(`args`): `Promise`<[`Asset`](../../Entities/Asset/Asset.md)\>

Retrieve an Asset

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | `Object` | - |
| `args.ticker` | `string` | Asset ticker |

#### Returns

`Promise`<[`Asset`](../../Entities/Asset/Asset.md)\>

___

### getAssets

▸ **getAssets**(`args?`): `Promise`<[`Asset`](../../Entities/Asset/Asset.md)[]\>

Retrieve all of the Assets owned by an Identity

**`Note`**

Assets with unreadable characters in their tickers will be left out

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args?` | `Object` | - |
| `args.owner` | `string` \| [`Identity`](../../Entities/Identity/Identity.md) | Identity representation or Identity ID as stored in the blockchain |

#### Returns

`Promise`<[`Asset`](../../Entities/Asset/Asset.md)[]\>

___

### getGlobalMetadataKeys

▸ **getGlobalMetadataKeys**(): `Promise`<[`GlobalMetadataKey`](../../../../Modules/API/Entities/MetadataEntry/Types.md#globalmetadatakey)[]\>

Retrieve all the Asset Global Metadata on chain. This includes metadata id, name and specs

#### Returns

`Promise`<[`GlobalMetadataKey`](../../../../Modules/API/Entities/MetadataEntry/Types.md#globalmetadatakey)[]\>

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

___

### getTickerReservations

▸ **getTickerReservations**(`args?`): `Promise`<[`TickerReservation`](../../Entities/TickerReservation/TickerReservation.md)[]\>

Retrieve all the ticker reservations currently owned by an Identity. This doesn't include Assets that
  have already been launched

**`Note`**

reservations with unreadable characters in their tickers will be left out

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args?` | `Object` | - |
| `args.owner` | `string` \| [`Identity`](../../Entities/Identity/Identity.md) | defaults to the signing Identity |

#### Returns

`Promise`<[`TickerReservation`](../../Entities/TickerReservation/TickerReservation.md)[]\>

___

### isTickerAvailable

▸ **isTickerAvailable**(`args`): `Promise`<`boolean`\>

Check if a ticker hasn't been reserved

**`Note`**

can be subscribed to

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.ticker` | `string` |

#### Returns

`Promise`<`boolean`\>

▸ **isTickerAvailable**(`args`, `callback`): `Promise`<[`UnsubCallback`](../../../../Modules/Types/Types.md#unsubcallback)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.ticker` | `string` |
| `callback` | [`SubCallback`](../../../../Modules/Types/Types.md#subcallback)<`boolean`\> |

#### Returns

`Promise`<[`UnsubCallback`](../../../../Modules/Types/Types.md#unsubcallback)\>

___

### reserveTicker

▸ **reserveTicker**(`args`, `opts?`): `Promise`<[`GenericPolymeshTransaction`](../../../../Modules/Types/Types.md#genericpolymeshtransaction)<[`TickerReservation`](../../Entities/TickerReservation/TickerReservation.md), [`TickerReservation`](../../Entities/TickerReservation/TickerReservation.md)\>\>

Reserve a ticker symbol under the ownership of the signing Identity to later use in the creation of an Asset.
  The ticker will expire after a set amount of time, after which other users can reserve it

**`Note`**

this method is of type [ProcedureMethod](../../../../Interfaces/Types/ProcedureMethod.md), which means you can call [reserveTicker.checkAuthorization](../../../../Interfaces/Types/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`ReserveTickerParams`](../../../../Interfaces/API/Procedures/Types/ReserveTickerParams.md) |
| `opts?` | [`ProcedureOpts`](../../../../Interfaces/Types/ProcedureOpts.md) |

#### Returns

`Promise`<[`GenericPolymeshTransaction`](../../../../Modules/Types/Types.md#genericpolymeshtransaction)<[`TickerReservation`](../../Entities/TickerReservation/TickerReservation.md), [`TickerReservation`](../../Entities/TickerReservation/TickerReservation.md)\>\>
