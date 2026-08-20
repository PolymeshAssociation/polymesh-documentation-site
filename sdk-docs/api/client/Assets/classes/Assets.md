# Class: Assets

> Defined in: [src/api/client/Assets.ts:59](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/client/Assets.ts#L59)

# Class: Assets

Defined in: [src/api/client/Assets.ts:59](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/client/Assets.ts#L59)

Handles all Asset related functionality

## Methods

### createAsset()

> **createAsset**(`args`: [`CreateAssetWithTickerParams`](../../../procedures/types/interfaces/CreateAssetWithTickerParams.mdx), `opts?`: [`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)): `Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<[`FungibleAsset`](../../../entities/Asset/Fungible/classes/FungibleAsset.mdx), [`FungibleAsset`](../../../entities/Asset/Fungible/classes/FungibleAsset.mdx)\>\>

Defined in: [src/api/client/Assets.ts:116](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/client/Assets.ts#L116)

Create an Asset

#### Parameters

Parameter
Type

`args`

[`CreateAssetWithTickerParams`](../../../procedures/types/interfaces/CreateAssetWithTickerParams.mdx)

`opts?`

[`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<[`FungibleAsset`](../../../entities/Asset/Fungible/classes/FungibleAsset.mdx), [`FungibleAsset`](../../../entities/Asset/Fungible/classes/FungibleAsset.mdx)\>\>

#### Note

if ticker is already reserved, then required role:
  - Ticker Owner

#### Note

this method is of type [ProcedureMethod](../../../procedures/types/interfaces/ProcedureMethod.mdx), which means you can call [createAsset.checkAuthorization](../../../procedures/types/interfaces/ProcedureMethod.mdx#checkauthorization) on it to see whether the signing Account and Identity have the required roles and permissions to run it

***

### createNftCollection()

> **createNftCollection**(`args`: [`CreateNftCollectionParams`](../../../procedures/types/interfaces/CreateNftCollectionParams.mdx), `opts?`: [`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)): `Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<[`NftCollection`](../../../entities/Asset/NonFungible/NftCollection/classes/NftCollection.mdx), [`NftCollection`](../../../entities/Asset/NonFungible/NftCollection/classes/NftCollection.mdx)\>\>

Defined in: [src/api/client/Assets.ts:124](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/client/Assets.ts#L124)

Create an NftCollection

#### Parameters

Parameter
Type

`args`

[`CreateNftCollectionParams`](../../../procedures/types/interfaces/CreateNftCollectionParams.mdx)

`opts?`

[`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<[`NftCollection`](../../../entities/Asset/NonFungible/NftCollection/classes/NftCollection.mdx), [`NftCollection`](../../../entities/Asset/NonFungible/NftCollection/classes/NftCollection.mdx)\>\>

#### Note

if ticker is already reserved, then required role:
  - Ticker Owner

#### Note

this method is of type [ProcedureMethod](../../../procedures/types/interfaces/ProcedureMethod.mdx), which means you can call [createNftCollection.checkAuthorization](../../../procedures/types/interfaces/ProcedureMethod.mdx#checkauthorization) on it to see whether the signing Account and Identity have the required roles and permissions to run it

***

### get()

> **get**(`paginationOpts?`: [`PaginationOptions`](../../../entities/types/interfaces/PaginationOptions.mdx)): `Promise`\<[`ResultSet`](../../../entities/types/interfaces/ResultSet.mdx)\<[`Asset`](../../../entities/Asset/types/type-aliases/Asset.mdx)\>\>

Defined in: [src/api/client/Assets.ts:413](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/client/Assets.ts#L413)

Retrieve all the Assets on chain

#### Parameters

Parameter
Type

`paginationOpts?`

[`PaginationOptions`](../../../entities/types/interfaces/PaginationOptions.mdx)

#### Returns

`Promise`\<[`ResultSet`](../../../entities/types/interfaces/ResultSet.mdx)\<[`Asset`](../../../entities/Asset/types/type-aliases/Asset.mdx)\>\>

#### Note

supports pagination

***

### getAsset()

#### Call Signature

> **getAsset**(`args`: `object`): `Promise`\<[`Asset`](../../../entities/Asset/types/type-aliases/Asset.mdx)\>

Defined in: [src/api/client/Assets.ts:236](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/client/Assets.ts#L236)

Retrieve a FungibleAsset or NftCollection by ticker

##### Parameters

Parameter
Type
Description

`args`

\{ `ticker`: `string`; \}

&hyphen;

`args.ticker`

`string`

Unique ticker of the Asset

##### Returns

`Promise`\<[`Asset`](../../../entities/Asset/types/type-aliases/Asset.mdx)\>

##### Note

`getFungibleAsset` and `getNftCollection` are similar to this method, but return a more specific type

#### Call Signature

> **getAsset**(`args`: `object`): `Promise`\<[`Asset`](../../../entities/Asset/types/type-aliases/Asset.mdx)\>

Defined in: [src/api/client/Assets.ts:245](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/client/Assets.ts#L245)

Retrieve a FungibleAsset or NftCollection by Asset ID

##### Parameters

Parameter
Type
Description

`args`

\{ `assetId`: `string`; \}

&hyphen;

`args.assetId`

`string`

Unique identifier of the Asset

##### Returns

`Promise`\<[`Asset`](../../../entities/Asset/types/type-aliases/Asset.mdx)\>

##### Note

`getFungibleAsset` and `getNftCollection` are similar to this method, but return a more specific type

***

### getAssets()

> **getAssets**(`args?`: `object`): `Promise`\<[`Asset`](../../../entities/Asset/types/type-aliases/Asset.mdx)[]\>

Defined in: [src/api/client/Assets.ts:266](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/client/Assets.ts#L266)

Retrieve all of the Assets owned by an Identity

#### Parameters

Parameter
Type
Description

`args?`

\{ `owner`: `string` \| [`Identity`](../../../entities/Identity/classes/Identity.mdx); \}

&hyphen;

`args.owner?`

`string` \| [`Identity`](../../../entities/Identity/classes/Identity.mdx)

Identity representation or Identity ID as stored in the blockchain

#### Returns

`Promise`\<[`Asset`](../../../entities/Asset/types/type-aliases/Asset.mdx)[]\>

#### Note

Assets with unreadable characters in their tickers will be left out

***

### getFungibleAsset()

#### Call Signature

> **getFungibleAsset**(`args`: `object`): `Promise`\<[`FungibleAsset`](../../../entities/Asset/Fungible/classes/FungibleAsset.mdx)\>

Defined in: [src/api/client/Assets.ts:314](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/client/Assets.ts#L314)

Retrieve a FungibleAsset by Asset ID

##### Parameters

Parameter
Type
Description

`args`

\{ `assetId`: `string`; `skipExistsCheck?`: `boolean`; \}

&hyphen;

`args.assetId`

`string`

Unique identifier of the Fungible Asset

`args.skipExistsCheck?`

`boolean`

When true, method will not check if Asset exists before returning instance. Defaults to false

##### Returns

`Promise`\<[`FungibleAsset`](../../../entities/Asset/Fungible/classes/FungibleAsset.mdx)\>

#### Call Signature

> **getFungibleAsset**(`args`: `object`): `Promise`\<[`FungibleAsset`](../../../entities/Asset/Fungible/classes/FungibleAsset.mdx)\>

Defined in: [src/api/client/Assets.ts:326](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/client/Assets.ts#L326)

Retrieve a FungibleAsset by ticker

##### Parameters

Parameter
Type
Description

`args`

\{ `ticker`: `string`; \}

&hyphen;

`args.ticker`

`string`

Unique ticker of the Fungible Asset

##### Returns

`Promise`\<[`FungibleAsset`](../../../entities/Asset/Fungible/classes/FungibleAsset.mdx)\>

##### Note

The Asset must exist on chain to be retrieved by ticker

***

### getGlobalMetadataKeys()

> **getGlobalMetadataKeys**(): `Promise`\<[`GlobalMetadataKey`](../../../entities/MetadataEntry/types/type-aliases/GlobalMetadataKey.mdx)[]\>

Defined in: [src/api/client/Assets.ts:454](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/client/Assets.ts#L454)

Retrieve all the Asset Global Metadata on chain. This includes metadata id, name and specs

#### Returns

`Promise`\<[`GlobalMetadataKey`](../../../entities/MetadataEntry/types/type-aliases/GlobalMetadataKey.mdx)[]\>

***

### getNextCustomAssetTypeId()

> **getNextCustomAssetTypeId**(): `Promise`\<`BigNumber`\>

Defined in: [src/api/client/Assets.ts:507](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/client/Assets.ts#L507)

Gets the next custom Asset type Id

#### Returns

`Promise`\<`BigNumber`\>

***

### getNftCollection()

#### Call Signature

> **getNftCollection**(`args`: `object`): `Promise`\<[`NftCollection`](../../../entities/Asset/NonFungible/NftCollection/classes/NftCollection.mdx)\>

Defined in: [src/api/client/Assets.ts:365](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/client/Assets.ts#L365)

Retrieve an NftCollection by ticker

##### Parameters

Parameter
Type
Description

`args`

\{ `ticker`: `string`; \}

&hyphen;

`args.ticker`

`string`

Unique ticker of the NftCollection

##### Returns

`Promise`\<[`NftCollection`](../../../entities/Asset/NonFungible/NftCollection/classes/NftCollection.mdx)\>

##### Note

The NftCollection must exist on chain to be retrieved by ticker

#### Call Signature

> **getNftCollection**(`args`: `object`): `Promise`\<[`NftCollection`](../../../entities/Asset/NonFungible/NftCollection/classes/NftCollection.mdx)\>

Defined in: [src/api/client/Assets.ts:373](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/client/Assets.ts#L373)

Retrieve an NftCollection by Asset ID

##### Parameters

Parameter
Type
Description

`args`

\{ `assetId`: `string`; `skipExistsCheck?`: `boolean`; \}

&hyphen;

`args.assetId`

`string`

Unique identifier of the NftCollection

`args.skipExistsCheck?`

`boolean`

When true, method will not check if the NftCollection exists before returning instance. Defaults to false

##### Returns

`Promise`\<[`NftCollection`](../../../entities/Asset/NonFungible/NftCollection/classes/NftCollection.mdx)\>

***

### getTickerRegistrationConfig()

> **getTickerRegistrationConfig**(): `Promise`\<[`TickerRegistrationConfig`](../../../entities/Asset/types/interfaces/TickerRegistrationConfig.mdx)\>

Defined in: [src/api/client/Assets.ts:535](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/client/Assets.ts#L535)

Gets the chain-wide rules used to validate ticker registrations

#### Returns

`Promise`\<[`TickerRegistrationConfig`](../../../entities/Asset/types/interfaces/TickerRegistrationConfig.mdx)\>

***

### getTickerReservation()

> **getTickerReservation**(`args`: `object`): [`TickerReservation`](../../../entities/TickerReservation/classes/TickerReservation.mdx)

Defined in: [src/api/client/Assets.ts:222](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/client/Assets.ts#L222)

Retrieve a Ticker Reservation

#### Parameters

Parameter
Type
Description

`args`

\{ `ticker`: `string`; \}

&hyphen;

`args.ticker`

`string`

Asset ticker

#### Returns

[`TickerReservation`](../../../entities/TickerReservation/classes/TickerReservation.mdx)

***

### getTickerReservations()

> **getTickerReservations**(`args?`: `object`): `Promise`\<[`TickerReservation`](../../../entities/TickerReservation/classes/TickerReservation.mdx)[]\>

Defined in: [src/api/client/Assets.ts:181](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/client/Assets.ts#L181)

Retrieve all the ticker reservations currently owned by an Identity. This doesn't include tickers already
associated with an Asset

#### Parameters

Parameter
Type
Description

`args?`

\{ `owner`: `string` \| [`Identity`](../../../entities/Identity/classes/Identity.mdx); \}

&hyphen;

`args.owner?`

`string` \| [`Identity`](../../../entities/Identity/classes/Identity.mdx)

The identity whose reservations to return. Defaults to the signing Identity if omitted.

#### Returns

`Promise`\<[`TickerReservation`](../../../entities/TickerReservation/classes/TickerReservation.mdx)[]\>

A list of active `TickerReservation` instances

#### Note

Reservations with unreadable ticker characters are excluded.

***

### isTickerAvailable()

#### Call Signature

> **isTickerAvailable**(`args`: `object`): `Promise`\<`boolean`\>

Defined in: [src/api/client/Assets.ts:133](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/client/Assets.ts#L133)

Check if a ticker hasn't been reserved

##### Parameters

Parameter
Type
Description

`args`

\{ `ticker`: `string`; \}

&hyphen;

`args.ticker`

`string`

Ticker symbol to check availability for

##### Returns

`Promise`\<`boolean`\>

Promise that resolves to true if ticker is available, false otherwise

#### Call Signature

> **isTickerAvailable**(`args`: `object`, `callback`: [`SubCallback`](../../../entities/types/type-aliases/SubCallback.mdx)\<`boolean`\>): `Promise`\<[`UnsubCallback`](../../../entities/types/type-aliases/UnsubCallback.mdx)\>

Defined in: [src/api/client/Assets.ts:145](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/client/Assets.ts#L145)

Check if a ticker hasn't been reserved (with subscription support)

##### Parameters

Parameter
Type
Description

`args`

\{ `ticker`: `string`; \}

&hyphen;

`args.ticker`

`string`

Ticker symbol to check availability for

`callback`

[`SubCallback`](../../../entities/types/type-aliases/SubCallback.mdx)\<`boolean`\>

Callback function that receives availability status updates

##### Returns

`Promise`\<[`UnsubCallback`](../../../entities/types/type-aliases/UnsubCallback.mdx)\>

Promise that resolves to an unsubscribe function

##### Note

can be subscribed to, if connected to node using a web socket

***

### registerCustomAssetType()

> **registerCustomAssetType**(`args`: [`RegisterCustomAssetTypeParams`](../../../procedures/types/interfaces/RegisterCustomAssetTypeParams.mdx), `opts?`: [`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)): `Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`BigNumber`, `BigNumber`\>\>

Defined in: [src/api/client/Assets.ts:502](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/client/Assets.ts#L502)

Register a custom asset type

#### Parameters

Parameter
Type

`args`

[`RegisterCustomAssetTypeParams`](../../../procedures/types/interfaces/RegisterCustomAssetTypeParams.mdx)

`opts?`

[`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`BigNumber`, `BigNumber`\>\>

#### Note

this method is of type [ProcedureMethod](../../../procedures/types/interfaces/ProcedureMethod.mdx), which means you can call [registerCustomAssetType.checkAuthorization](../../../procedures/types/interfaces/ProcedureMethod.mdx#checkauthorization) on it to see whether the signing Account and Identity have the required roles and permissions to run it

***

### reserveTicker()

> **reserveTicker**(`args`: [`ReserveTickerParams`](../../../procedures/types/interfaces/ReserveTickerParams.mdx), `opts?`: [`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)): `Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<[`TickerReservation`](../../../entities/TickerReservation/classes/TickerReservation.mdx), [`TickerReservation`](../../../entities/TickerReservation/classes/TickerReservation.mdx)\>\>

Defined in: [src/api/client/Assets.ts:108](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/client/Assets.ts#L108)

Reserve a ticker symbol under the ownership of the signing Identity to later use in the creation of an Asset.
  The ticker will expire after a set amount of time, after which other users can reserve it

#### Parameters

Parameter
Type

`args`

[`ReserveTickerParams`](../../../procedures/types/interfaces/ReserveTickerParams.mdx)

`opts?`

[`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<[`TickerReservation`](../../../entities/TickerReservation/classes/TickerReservation.mdx), [`TickerReservation`](../../../entities/TickerReservation/classes/TickerReservation.mdx)\>\>

#### Note

this method is of type [ProcedureMethod](../../../procedures/types/interfaces/ProcedureMethod.mdx), which means you can call [reserveTicker.checkAuthorization](../../../procedures/types/interfaces/ProcedureMethod.mdx#checkauthorization) on it to see whether the signing Account and Identity have the required roles and permissions to run it

***

### transferFunds()

> **transferFunds**(`args`: [`TransferFundsParams`](../../../procedures/types/type-aliases/TransferFundsParams.mdx), `opts?`: [`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)): `Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<[`Instruction`](../../../entities/Instruction/classes/Instruction.mdx) \| `undefined`, [`Instruction`](../../../entities/Instruction/classes/Instruction.mdx) \| `undefined`\>\>

Defined in: [src/api/client/Assets.ts:530](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/client/Assets.ts#L530)

Transfer funds between two asset holders (Account or Portfolio), which may be owned by the same or different identities.

#### Parameters

Parameter
Type

`args`

[`TransferFundsParams`](../../../procedures/types/type-aliases/TransferFundsParams.mdx)

`opts?`

[`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<[`Instruction`](../../../entities/Instruction/classes/Instruction.mdx) \| `undefined`, [`Instruction`](../../../entities/Instruction/classes/Instruction.mdx) \| `undefined`\>\>

#### Note

When `from` account is of type account and the caller is the subsidizer of `from` account, there should be allowance available for transfer and for each transfer said amount is decremented.

#### Note

When `from` and `to` belong to different identities, this creates a settlement instruction that is immediately affirmed on behalf of `from`. If the caller's identity doesn't also own `to`, the instruction remains pending until the receiver affirms it (a resolved [Instruction](../../../entities/Instruction/classes/Instruction.mdx) is returned in that case). If both sides are affirmed, the transfer settles immediately and `undefined` is returned.

#### Note

this method is of type [ProcedureMethod](../../../procedures/types/interfaces/ProcedureMethod.mdx), which means you can call [transferFunds.checkAuthorization](../../../procedures/types/interfaces/ProcedureMethod.mdx#checkauthorization) on it to see whether the signing Account and Identity have the required roles and permissions to run it
