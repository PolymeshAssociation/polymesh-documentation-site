---
id: "Network"
title: "Class: Network"
sidebar_label: "Network"
---

[api/client/Network](../../../../modules/API/Client/Network/Network.md).Network

Handles all Network related functionality, including querying for historical events from middleware

## Methods

### getEventByIndexedArgs

▸ **getEventByIndexedArgs**(`opts`): `Promise`\<``null`` \| [`EventIdentifier`](../../../../interfaces/Types/EventIdentifier/EventIdentifier.md)\>

Retrieve a single event by any of its indexed arguments. Can be filtered using parameters

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `Object` | - |
| `opts.eventArg0?` | `string` | event parameter value to filter by in position 0 |
| `opts.eventArg1?` | `string` | event parameter value to filter by in position 1 |
| `opts.eventArg2?` | `string` | event parameter value to filter by in position 2 |
| `opts.eventId` | [`EventIdEnum`](../../../../enums/Types/EventIdEnum/EventIdEnum.md) | type of the event to fetch |
| `opts.moduleId` | [`ModuleIdEnum`](../../../../enums/Types/ModuleIdEnum/ModuleIdEnum.md) | type of the module to fetch |

#### Returns

`Promise`\<``null`` \| [`EventIdentifier`](../../../../interfaces/Types/EventIdentifier/EventIdentifier.md)\>

**`Note`**

uses the middlewareV2

#### Defined in

[api/client/Network.ts:165](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/api/client/Network.ts#L165)

___

### getEventsByIndexedArgs

▸ **getEventsByIndexedArgs**(`opts`): `Promise`\<``null`` \| [`EventIdentifier`](../../../../interfaces/Types/EventIdentifier/EventIdentifier.md)[]\>

Retrieve a list of events. Can be filtered using parameters

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `Object` | - |
| `opts.eventArg0?` | `string` | event parameter value to filter by in position 0 |
| `opts.eventArg1?` | `string` | event parameter value to filter by in position 1 |
| `opts.eventArg2?` | `string` | event parameter value to filter by in position 2 |
| `opts.eventId` | [`EventIdEnum`](../../../../enums/Types/EventIdEnum/EventIdEnum.md) | type of the event to fetch |
| `opts.moduleId` | [`ModuleIdEnum`](../../../../enums/Types/ModuleIdEnum/ModuleIdEnum.md) | type of the module to fetch |
| `opts.size?` | `BigNumber` | page size |
| `opts.start?` | `BigNumber` | page offset |

#### Returns

`Promise`\<``null`` \| [`EventIdentifier`](../../../../interfaces/Types/EventIdentifier/EventIdentifier.md)[]\>

**`Note`**

uses the middlewareV2

#### Defined in

[api/client/Network.ts:302](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/api/client/Network.ts#L302)

___

### getLatestBlock

▸ **getLatestBlock**(): `Promise`\<`BigNumber`\>

Retrieve the number of the latest finalized block in the chain

#### Returns

`Promise`\<`BigNumber`\>

#### Defined in

[api/client/Network.ts:59](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/api/client/Network.ts#L59)

___

### getMiddlewareLag

▸ **getMiddlewareLag**(): `Promise`\<`BigNumber`\>

Get the number of blocks the middleware needs to process to be synced with chain.
The lag can be around somewhere upto 15 blocks, but this can increase if the block size being processed by the Middleware is too large.
If the lag is too large, its recommended to check the indexer health to make sure the Middleware is processing the blocks.

#### Returns

`Promise`\<`BigNumber`\>

**`Note`**

uses the middleware V2

#### Defined in

[api/client/Network.ts:453](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/api/client/Network.ts#L453)

___

### getMiddlewareMetadata

▸ **getMiddlewareMetadata**(): `Promise`\<``null`` \| [`MiddlewareMetadata`](../../../../interfaces/Types/MiddlewareMetadata/MiddlewareMetadata.md)\>

Retrieve middleware metadata.
Returns null if middleware is disabled

#### Returns

`Promise`\<``null`` \| [`MiddlewareMetadata`](../../../../interfaces/Types/MiddlewareMetadata/MiddlewareMetadata.md)\>

**`Note`**

uses the middleware V2

#### Defined in

[api/client/Network.ts:442](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/api/client/Network.ts#L442)

___

### getNetworkProperties

▸ **getNetworkProperties**(): `Promise`\<[`NetworkProperties`](../../../../interfaces/Types/NetworkProperties/NetworkProperties.md)\>

Retrieve information for the current network

#### Returns

`Promise`\<[`NetworkProperties`](../../../../interfaces/Types/NetworkProperties/NetworkProperties.md)\>

#### Defined in

[api/client/Network.ts:80](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/api/client/Network.ts#L80)

___

### getProtocolFees

▸ **getProtocolFees**(`args`): `Promise`\<[`ProtocolFees`](../../../../interfaces/Types/ProtocolFees/ProtocolFees.md)[]\>

Retrieve the protocol fees associated with running specific transactions

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | `Object` | - |
| `args.tags` | [`TxTag`](../../../../modules/Generated/Types/Types.md#txtag)[] | list of transaction tags (e.g. [TxTags.asset.CreateAsset, TxTags.asset.RegisterTicker] or ["asset.createAsset", "asset.registerTicker"]) |

#### Returns

`Promise`\<[`ProtocolFees`](../../../../interfaces/Types/ProtocolFees/ProtocolFees.md)[]\>

#### Defined in

[api/client/Network.ts:104](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/api/client/Network.ts#L104)

___

### getSs58Format

▸ **getSs58Format**(): `BigNumber`

Retrieve the chain's SS58 format

#### Returns

`BigNumber`

#### Defined in

[api/client/Network.ts:73](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/api/client/Network.ts#L73)

___

### getTransactionByHash

▸ **getTransactionByHash**(`opts`): `Promise`\<``null`` \| [`ExtrinsicDataWithFees`](../../../../interfaces/Types/ExtrinsicDataWithFees/ExtrinsicDataWithFees.md)\>

Retrieve a transaction by hash

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `Object` | - |
| `opts.txHash` | `string` | hash of the transaction |

#### Returns

`Promise`\<``null`` \| [`ExtrinsicDataWithFees`](../../../../interfaces/Types/ExtrinsicDataWithFees/ExtrinsicDataWithFees.md)\>

**`Note`**

uses the middlewareV2

#### Defined in

[api/client/Network.ts:350](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/api/client/Network.ts#L350)

___

### getTreasuryAccount

▸ **getTreasuryAccount**(): [`Account`](../../Entities/Account/Account.md)

Get the treasury wallet address

#### Returns

[`Account`](../../Entities/Account/Account.md)

#### Defined in

[api/client/Network.ts:111](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/api/client/Network.ts#L111)

___

### getTreasuryBalance

▸ **getTreasuryBalance**(): `Promise`\<`BigNumber`\>

Get the Treasury POLYX balance

#### Returns

`Promise`\<`BigNumber`\>

**`Note`**

can be subscribed to

#### Defined in

[api/client/Network.ts:124](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/api/client/Network.ts#L124)

▸ **getTreasuryBalance**(`callback`): `Promise`\<[`UnsubCallback`](../../../../modules/Types/Types.md#unsubcallback)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`SubCallback`](../../../../modules/Types/Types.md#subcallback)\<`BigNumber`\> |

#### Returns

`Promise`\<[`UnsubCallback`](../../../../modules/Types/Types.md#unsubcallback)\>

#### Defined in

[api/client/Network.ts:125](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/api/client/Network.ts#L125)

___

### getVersion

▸ **getVersion**(): `Promise`\<`string`\>

Fetch the current network version (e.g. 3.1.0)

#### Returns

`Promise`\<`string`\>

#### Defined in

[api/client/Network.ts:66](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/api/client/Network.ts#L66)

___

### submitTransaction

▸ **submitTransaction**(`txPayload`, `signature`): `Promise`\<[`SubmissionDetails`](../../../../interfaces/Types/SubmissionDetails/SubmissionDetails.md)\>

Submits a transaction payload with its signature to the chain. `signature` should be hex encoded

#### Parameters

| Name | Type |
| :------ | :------ |
| `txPayload` | [`TransactionPayload`](../../../../interfaces/Base/Types/TransactionPayload/TransactionPayload.md) |
| `signature` | `string` |

#### Returns

`Promise`\<[`SubmissionDetails`](../../../../interfaces/Types/SubmissionDetails/SubmissionDetails.md)\>

**`Throws`**

if the signature is not hex encoded

#### Defined in

[api/client/Network.ts:203](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/api/client/Network.ts#L203)

___

### transferPolyx

▸ **transferPolyx**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

Transfer an amount of POLYX to a specified Account

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`TransferPolyxParams`](../../../../interfaces/API/Procedures/Types/TransferPolyxParams/TransferPolyxParams.md) |
| `opts?` | [`ProcedureOpts`](../../../../interfaces/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

**`Note`**

this method is of type [ProcedureMethod](../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [transferPolyx.checkAuthorization](../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/client/Network.ts:150](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/api/client/Network.ts#L150)
