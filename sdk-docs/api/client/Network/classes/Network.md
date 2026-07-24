# Class: Network

> Defined in: [src/api/client/Network.ts:42](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/client/Network.ts#L42)

# Class: Network

Defined in: [src/api/client/Network.ts:42](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/client/Network.ts#L42)

Handles all Network related functionality, including querying for historical events from middleware

## Methods

### getEventByIndexedArgs()

> **getEventByIndexedArgs**(`opts`: `object`): `Promise`\<[`EventIdentifier`](../../types/interfaces/EventIdentifier.mdx) \| `null`\>

Defined in: [src/api/client/Network.ts:174](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/client/Network.ts#L174)

Retrieve a single event by any of its indexed arguments. Can be filtered using parameters

#### Parameters

Parameter
Type
Description

`opts`

\{ `eventArg0?`: `string`; `eventArg1?`: `string`; `eventArg2?`: `string`; `eventId`: [`EventIdEnum`](../../../../types/enumerations/EventIdEnum.mdx); `moduleId`: [`ModuleIdEnum`](../../../../types/enumerations/ModuleIdEnum.mdx); \}

&hyphen;

`opts.eventArg0?`

`string`

event parameter value to filter by in position 0

`opts.eventArg1?`

`string`

event parameter value to filter by in position 1

`opts.eventArg2?`

`string`

event parameter value to filter by in position 2

`opts.eventId`

[`EventIdEnum`](../../../../types/enumerations/EventIdEnum.mdx)

type of the event to fetch

`opts.moduleId`

[`ModuleIdEnum`](../../../../types/enumerations/ModuleIdEnum.mdx)

type of the module to fetch

#### Returns

`Promise`\<[`EventIdentifier`](../../types/interfaces/EventIdentifier.mdx) \| `null`\>

#### Note

uses the middlewareV2

***

### ~~getEventsByIndexedArgs()~~

> **getEventsByIndexedArgs**(`opts`: `object`): `Promise`\<[`EventIdentifier`](../../types/interfaces/EventIdentifier.mdx)[] \| `null`\>

Defined in: [src/api/client/Network.ts:361](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/client/Network.ts#L361)

Retrieve a list of events. Can be filtered using parameters

#### Parameters

Parameter
Type
Description

`opts`

\{ `eventArg0?`: `string`; `eventArg1?`: `string`; `eventArg2?`: `string`; `eventId`: [`EventIdEnum`](../../../../types/enumerations/EventIdEnum.mdx); `moduleId`: [`ModuleIdEnum`](../../../../types/enumerations/ModuleIdEnum.mdx); `size?`: `BigNumber`; `start?`: `BigNumber`; \}

&hyphen;

`opts.eventArg0?`

`string`

event parameter value to filter by in position 0

`opts.eventArg1?`

`string`

event parameter value to filter by in position 1

`opts.eventArg2?`

`string`

event parameter value to filter by in position 2

`opts.eventId`

[`EventIdEnum`](../../../../types/enumerations/EventIdEnum.mdx)

type of the event to fetch

`opts.moduleId`

[`ModuleIdEnum`](../../../../types/enumerations/ModuleIdEnum.mdx)

type of the module to fetch

`opts.size?`

`BigNumber`

page size

`opts.start?`

`BigNumber`

page offset

#### Returns

`Promise`\<[`EventIdentifier`](../../types/interfaces/EventIdentifier.mdx)[] \| `null`\>

#### Deprecated

#### Note

uses the middlewareV2

***

### getLatestBlock()

> **getLatestBlock**(): `Promise`\<`BigNumber`\>

Defined in: [src/api/client/Network.ts:60](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/client/Network.ts#L60)

Retrieve the number of the latest finalized block in the chain

#### Returns

`Promise`\<`BigNumber`\>

***

### getMiddlewareLag()

> **getMiddlewareLag**(): `Promise`\<`BigNumber`\>

Defined in: [src/api/client/Network.ts:516](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/client/Network.ts#L516)

Get the number of blocks the middleware needs to process to be synced with chain.
The lag can be around somewhere upto 15 blocks, but this can increase if the block size being processed by the Middleware is too large.
If the lag is too large, its recommended to check the indexer health to make sure the Middleware is processing the blocks.

#### Returns

`Promise`\<`BigNumber`\>

#### Note

uses the middleware V2

***

### getMiddlewareMetadata()

> **getMiddlewareMetadata**(): `Promise`\<[`MiddlewareMetadata`](../../types/interfaces/MiddlewareMetadata.mdx) \| `null`\>

Defined in: [src/api/client/Network.ts:505](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/client/Network.ts#L505)

Retrieve middleware metadata.
Returns null if middleware is disabled

#### Returns

`Promise`\<[`MiddlewareMetadata`](../../types/interfaces/MiddlewareMetadata.mdx) \| `null`\>

#### Note

uses the middleware V2

***

### getNetworkProperties()

> **getNetworkProperties**(): `Promise`\<[`NetworkProperties`](../../types/interfaces/NetworkProperties.mdx)\>

Defined in: [src/api/client/Network.ts:81](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/client/Network.ts#L81)

Retrieve information for the current network

#### Returns

`Promise`\<[`NetworkProperties`](../../types/interfaces/NetworkProperties.mdx)\>

***

### getProtocolFees()

> **getProtocolFees**(`args`: `object`): `Promise`\<[`ProtocolFees`](../../types/interfaces/ProtocolFees.mdx)[]\>

Defined in: [src/api/client/Network.ts:107](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/client/Network.ts#L107)

Retrieve the protocol fees associated with running specific transactions

#### Parameters

Parameter
Type
Description

`args`

\{ `tags`: [`TxTag`](../../../../types/type-aliases/TxTag.mdx)[]; \}

&hyphen;

`args.tags`

[`TxTag`](../../../../types/type-aliases/TxTag.mdx)[]

list of transaction tags (e.g. [TxTags.asset.CreateAsset, TxTags.asset.RegisterUniqueTicker] or ["asset.createAsset", "asset.registerTicker"])

#### Returns

`Promise`\<[`ProtocolFees`](../../types/interfaces/ProtocolFees.mdx)[]\>

***

### getSs58Format()

> **getSs58Format**(): `BigNumber`

Defined in: [src/api/client/Network.ts:74](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/client/Network.ts#L74)

Retrieve the chain's SS58 format

#### Returns

`BigNumber`

***

### getTransactionByHash()

> **getTransactionByHash**(`opts`: `object`): `Promise`\<[`ExtrinsicDataWithFees`](../../types/interfaces/ExtrinsicDataWithFees.mdx) \| `null`\>

Defined in: [src/api/client/Network.ts:410](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/client/Network.ts#L410)

Retrieve a transaction by hash

#### Parameters

Parameter
Type
Description

`opts`

\{ `txHash`: `string`; \}

&hyphen;

`opts.txHash`

`string`

hash of the transaction

#### Returns

`Promise`\<[`ExtrinsicDataWithFees`](../../types/interfaces/ExtrinsicDataWithFees.mdx) \| `null`\>

#### Note

uses the middlewareV2

***

### getTreasuryAccount()

> **getTreasuryAccount**(): [`Account`](../../../entities/Account/classes/Account.mdx)

Defined in: [src/api/client/Network.ts:114](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/client/Network.ts#L114)

Get the treasury wallet address

#### Returns

[`Account`](../../../entities/Account/classes/Account.mdx)

***

### getTreasuryBalance()

#### Call Signature

> **getTreasuryBalance**(): `Promise`\<`BigNumber`\>

Defined in: [src/api/client/Network.ts:127](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/client/Network.ts#L127)

Get the Treasury POLYX balance

##### Returns

`Promise`\<`BigNumber`\>

Promise that resolves to the current Treasury balance

#### Call Signature

> **getTreasuryBalance**(`callback`: [`SubCallback`](../../../entities/types/type-aliases/SubCallback.mdx)\<`BigNumber`\>): `Promise`\<[`UnsubCallback`](../../../entities/types/type-aliases/UnsubCallback.mdx)\>

Defined in: [src/api/client/Network.ts:138](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/client/Network.ts#L138)

Get the Treasury POLYX balance (with subscription support)

##### Parameters

Parameter
Type
Description

`callback`

[`SubCallback`](../../../entities/types/type-aliases/SubCallback.mdx)\<`BigNumber`\>

Callback function that receives balance updates

##### Returns

`Promise`\<[`UnsubCallback`](../../../entities/types/type-aliases/UnsubCallback.mdx)\>

Promise that resolves to an unsubscribe function

##### Note

can be subscribed to, if connected to node using a web socket

***

### getVersion()

> **getVersion**(): `Promise`\<`string`\>

Defined in: [src/api/client/Network.ts:67](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/client/Network.ts#L67)

Fetch the current network version (e.g. 3.1.0)

#### Returns

`Promise`\<`string`\>

***

### submitTransaction()

> **submitTransaction**(`txPayload`: [`TransactionPayloadInput`](../../../../base/types/type-aliases/TransactionPayloadInput.mdx), `signature`: `string`): `Promise`\<[`SubmissionDetails`](../../types/interfaces/SubmissionDetails.mdx)\>

Defined in: [src/api/client/Network.ts:213](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/client/Network.ts#L213)

Submits a transaction payload with its signature to the chain. `signature` should be hex encoded

#### Parameters

Parameter
Type

`txPayload`

[`TransactionPayloadInput`](../../../../base/types/type-aliases/TransactionPayloadInput.mdx)

`signature`

`string`

#### Returns

`Promise`\<[`SubmissionDetails`](../../types/interfaces/SubmissionDetails.mdx)\>

#### Throws

if the signature is not hex encoded

***

### supportsConfidentialAssets()

> **supportsConfidentialAssets**(): `boolean`

Defined in: [src/api/client/Network.ts:533](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/client/Network.ts#L533)

Returns whether or not the connected chain node as support for confidential assets

#### Returns

`boolean`

***

### supportsSubscription()

> **supportsSubscription**(): `boolean`

Defined in: [src/api/client/Network.ts:549](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/client/Network.ts#L549)

Returns if functions can be subscribed.

#### Returns

`boolean`

`true` if connected over ws(s)://, otherwise `false`

***

### transferPolyx()

> **transferPolyx**(`args`: [`TransferPolyxParams`](../../../procedures/types/interfaces/TransferPolyxParams.mdx), `opts?`: [`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)): `Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

Defined in: [src/api/client/Network.ts:161](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/client/Network.ts#L161)

Transfer an amount of POLYX to a specified Account

#### Parameters

Parameter
Type

`args`

[`TransferPolyxParams`](../../../procedures/types/interfaces/TransferPolyxParams.mdx)

`opts?`

[`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

#### Note

this method is of type [ProcedureMethod](../../../procedures/types/interfaces/ProcedureMethod.mdx), which means you can call [transferPolyx.checkAuthorization](../../../procedures/types/interfaces/ProcedureMethod.mdx#checkauthorization) on it to see whether the signing Account and Identity have the required roles and permissions to run it
