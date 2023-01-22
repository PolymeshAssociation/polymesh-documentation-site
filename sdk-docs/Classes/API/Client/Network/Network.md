[api/client/Network](../../../../Modules/API/Client/Network.md).Network

Handles all Network related functionality, including querying for historical events from middleware

## Methods

### getEventByIndexedArgs

▸ **getEventByIndexedArgs**(`opts`): `Promise`<``null`` \| [`EventIdentifier`](../../../../Interfaces/Types/EventIdentifier.md)\>

Retrieve a single event by any of its indexed arguments. Can be filtered using parameters

**`Note`**

uses the middleware

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `Object` | - |
| `opts.eventArg0?` | `string` | event parameter value to filter by in position 0 |
| `opts.eventArg1?` | `string` | event parameter value to filter by in position 1 |
| `opts.eventArg2?` | `string` | event parameter value to filter by in position 2 |
| `opts.eventId` | [`EventIdEnum`](../../../../Enums/Types/EventIdEnum.md) | type of the event to fetch |
| `opts.moduleId` | [`ModuleIdEnum`](../../../../Enums/Types/ModuleIdEnum.md) | type of the module to fetch |

#### Returns

`Promise`<``null`` \| [`EventIdentifier`](../../../../Interfaces/Types/EventIdentifier.md)\>

___

### getEventByIndexedArgsV2

▸ **getEventByIndexedArgsV2**(`opts`): `Promise`<``null`` \| [`EventIdentifier`](../../../../Interfaces/Types/EventIdentifier.md)\>

Retrieve a single event by any of its indexed arguments. Can be filtered using parameters

**`Note`**

uses the middlewareV2

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `Object` | - |
| `opts.eventArg0?` | `string` | event parameter value to filter by in position 0 |
| `opts.eventArg1?` | `string` | event parameter value to filter by in position 1 |
| `opts.eventArg2?` | `string` | event parameter value to filter by in position 2 |
| `opts.eventId` | [`PublicEnum8F5A39C8Ee`](../../../../Enums/Types/PublicEnum8F5A39C8Ee.md) | type of the event to fetch |
| `opts.moduleId` | [`PublicEnum7A0B4Cc03E`](../../../../Enums/Types/PublicEnum7A0B4Cc03E.md) | type of the module to fetch |

#### Returns

`Promise`<``null`` \| [`EventIdentifier`](../../../../Interfaces/Types/EventIdentifier.md)\>

___

### getEventsByIndexedArgs

▸ **getEventsByIndexedArgs**(`opts`): `Promise`<``null`` \| [`EventIdentifier`](../../../../Interfaces/Types/EventIdentifier.md)[]\>

Retrieve a list of events. Can be filtered using parameters

**`Note`**

uses the middleware

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `Object` | - |
| `opts.eventArg0?` | `string` | event parameter value to filter by in position 0 |
| `opts.eventArg1?` | `string` | event parameter value to filter by in position 1 |
| `opts.eventArg2?` | `string` | event parameter value to filter by in position 2 |
| `opts.eventId` | [`EventIdEnum`](../../../../Enums/Types/EventIdEnum.md) | type of the event to fetch |
| `opts.moduleId` | [`ModuleIdEnum`](../../../../Enums/Types/ModuleIdEnum.md) | type of the module to fetch |
| `opts.size?` | `BigNumber` | page size |
| `opts.start?` | `BigNumber` | page offset |

#### Returns

`Promise`<``null`` \| [`EventIdentifier`](../../../../Interfaces/Types/EventIdentifier.md)[]\>

___

### getEventsByIndexedArgsV2

▸ **getEventsByIndexedArgsV2**(`opts`): `Promise`<``null`` \| [`EventIdentifier`](../../../../Interfaces/Types/EventIdentifier.md)[]\>

Retrieve a list of events. Can be filtered using parameters

**`Note`**

uses the middlewareV2

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `Object` | - |
| `opts.eventArg0?` | `string` | event parameter value to filter by in position 0 |
| `opts.eventArg1?` | `string` | event parameter value to filter by in position 1 |
| `opts.eventArg2?` | `string` | event parameter value to filter by in position 2 |
| `opts.eventId` | [`PublicEnum8F5A39C8Ee`](../../../../Enums/Types/PublicEnum8F5A39C8Ee.md) | type of the event to fetch |
| `opts.moduleId` | [`PublicEnum7A0B4Cc03E`](../../../../Enums/Types/PublicEnum7A0B4Cc03E.md) | type of the module to fetch |
| `opts.size?` | `BigNumber` | page size |
| `opts.start?` | `BigNumber` | page offset |

#### Returns

`Promise`<``null`` \| [`EventIdentifier`](../../../../Interfaces/Types/EventIdentifier.md)[]\>

___

### getLatestBlock

▸ **getLatestBlock**(): `Promise`<`BigNumber`\>

Retrieve the number of the latest finalized block in the chain

#### Returns

`Promise`<`BigNumber`\>

___

### getNetworkProperties

▸ **getNetworkProperties**(): `Promise`<[`NetworkProperties`](../../../../Interfaces/Types/NetworkProperties.md)\>

Retrieve information for the current network

#### Returns

`Promise`<[`NetworkProperties`](../../../../Interfaces/Types/NetworkProperties.md)\>

___

### getProtocolFees

▸ **getProtocolFees**(`args`): `Promise`<[`ProtocolFees`](../../../../Interfaces/Types/ProtocolFees.md)[]\>

Retrieve the protocol fees associated with running specific transactions

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | `Object` | - |
| `args.tags` | [`TxTag`](../../../../Modules/Generated/Types.md#txtag)[] | list of transaction tags (e.g. [TxTags.asset.CreateAsset, TxTags.asset.RegisterTicker] or ["asset.createAsset", "asset.registerTicker"]) |

#### Returns

`Promise`<[`ProtocolFees`](../../../../Interfaces/Types/ProtocolFees.md)[]\>

___

### getSs58Format

▸ **getSs58Format**(): `BigNumber`

Retrieve the chain's SS58 format

#### Returns

`BigNumber`

___

### getTransactionByHash

▸ **getTransactionByHash**(`opts`): `Promise`<``null`` \| [`ExtrinsicDataWithFees`](../../../../Interfaces/Types/ExtrinsicDataWithFees.md)\>

Retrieve a transaction by hash

**`Note`**

uses the middleware

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `Object` | - |
| `opts.txHash` | `string` | hash of the transaction |

#### Returns

`Promise`<``null`` \| [`ExtrinsicDataWithFees`](../../../../Interfaces/Types/ExtrinsicDataWithFees.md)\>

___

### getTransactionByHashV2

▸ **getTransactionByHashV2**(`opts`): `Promise`<``null`` \| [`ExtrinsicDataWithFees`](../../../../Interfaces/Types/ExtrinsicDataWithFees.md)\>

Retrieve a transaction by hash

**`Note`**

uses the middlewareV2

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `Object` | - |
| `opts.txHash` | `string` | hash of the transaction |

#### Returns

`Promise`<``null`` \| [`ExtrinsicDataWithFees`](../../../../Interfaces/Types/ExtrinsicDataWithFees.md)\>

___

### getTreasuryAccount

▸ **getTreasuryAccount**(): [`Account`](../../Entities/Account/Account.md)

Get the treasury wallet address

#### Returns

[`Account`](../../Entities/Account/Account.md)

___

### getTreasuryBalance

▸ **getTreasuryBalance**(): `Promise`<`BigNumber`\>

Get the Treasury POLYX balance

**`Note`**

can be subscribed to

#### Returns

`Promise`<`BigNumber`\>

▸ **getTreasuryBalance**(`callback`): `Promise`<[`UnsubCallback`](../../../../Modules/Types/Types.md#unsubcallback)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`SubCallback`](../../../../Modules/Types/Types.md#subcallback)<`BigNumber`\> |

#### Returns

`Promise`<[`UnsubCallback`](../../../../Modules/Types/Types.md#unsubcallback)\>

___

### getVersion

▸ **getVersion**(): `Promise`<`string`\>

Fetch the current network version (e.g. 3.1.0)

#### Returns

`Promise`<`string`\>

___

### transferPolyx

▸ **transferPolyx**(`args`, `opts?`): `Promise`<[`GenericPolymeshTransaction`](../../../../Modules/Types/Types.md#genericpolymeshtransaction)<`void`, `void`\>\>

Transfer an amount of POLYX to a specified Account

**`Note`**

this method is of type [ProcedureMethod](../../../../Interfaces/Types/ProcedureMethod.md), which means you can call [transferPolyx.checkAuthorization](../../../../Interfaces/Types/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`TransferPolyxParams`](../../../../Interfaces/API/Procedures/Types/TransferPolyxParams.md) |
| `opts?` | [`ProcedureOpts`](../../../../Interfaces/Types/ProcedureOpts.md) |

#### Returns

`Promise`<[`GenericPolymeshTransaction`](../../../../Modules/Types/Types.md#genericpolymeshtransaction)<`void`, `void`\>\>
