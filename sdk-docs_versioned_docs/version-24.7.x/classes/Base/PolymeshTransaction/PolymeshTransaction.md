---
id: "PolymeshTransaction"
title: "Class: PolymeshTransaction<ReturnValue, TransformedReturnValue, Args>"
sidebar_label: "PolymeshTransaction"
---

[base/PolymeshTransaction](../../../modules/Base/PolymeshTransaction/PolymeshTransaction.md).PolymeshTransaction

Wrapper class for a Polymesh Transaction

## Type parameters

| Name | Type |
| :------ | :------ |
| `ReturnValue` | `ReturnValue` |
| `TransformedReturnValue` | `ReturnValue` |
| `Args` | extends `unknown`[] \| [] = `unknown`[] |

## Hierarchy

- [`PolymeshTransactionBase`](../PolymeshTransactionBase/PolymeshTransactionBase.md)\<`ReturnValue`, `TransformedReturnValue`\>

  ↳ **`PolymeshTransaction`**

## Properties

### args

• **args**: `Args`

arguments for the transaction in SCALE format (polkadot.js Codec)

#### Defined in

[base/PolymeshTransaction.ts:39](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fe2e6dd1d/src/base/PolymeshTransaction.ts#L39)

___

### blockHash

• `Optional` **blockHash**: `string`

hash of the block where this transaction resides (status: `Succeeded`, `Failed`)

#### Inherited from

[PolymeshTransactionBase](../PolymeshTransactionBase/PolymeshTransactionBase.md).[blockHash](../PolymeshTransactionBase/PolymeshTransactionBase.md#blockhash)

#### Defined in

[base/PolymeshTransactionBase.ts:96](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fe2e6dd1d/src/base/PolymeshTransactionBase.ts#L96)

___

### blockNumber

• `Optional` **blockNumber**: `BigNumber`

number of the block where this transaction resides (status: `Succeeded`, `Failed`)

#### Inherited from

[PolymeshTransactionBase](../PolymeshTransactionBase/PolymeshTransactionBase.md).[blockNumber](../PolymeshTransactionBase/PolymeshTransactionBase.md#blocknumber)

#### Defined in

[base/PolymeshTransactionBase.ts:101](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fe2e6dd1d/src/base/PolymeshTransactionBase.ts#L101)

___

### error

• `Optional` **error**: [`PolymeshError`](../PolymeshError/PolymeshError.md)

stores errors thrown while running the transaction (status: `Failed`, `Aborted`)

#### Inherited from

[PolymeshTransactionBase](../PolymeshTransactionBase/PolymeshTransactionBase.md).[error](../PolymeshTransactionBase/PolymeshTransactionBase.md#error)

#### Defined in

[base/PolymeshTransactionBase.ts:76](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fe2e6dd1d/src/base/PolymeshTransactionBase.ts#L76)

___

### receipt

• `Optional` **receipt**: `ISubmittableResult`

stores the transaction receipt (if successful)

#### Inherited from

[PolymeshTransactionBase](../PolymeshTransactionBase/PolymeshTransactionBase.md).[receipt](../PolymeshTransactionBase/PolymeshTransactionBase.md#receipt)

#### Defined in

[base/PolymeshTransactionBase.ts:81](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fe2e6dd1d/src/base/PolymeshTransactionBase.ts#L81)

___

### status

• **status**: [`TransactionStatus`](../../../enums/Base/Types/TransactionStatus/TransactionStatus.md) = `TransactionStatus.Idle`

current status of the transaction

#### Inherited from

[PolymeshTransactionBase](../PolymeshTransactionBase/PolymeshTransactionBase.md).[status](../PolymeshTransactionBase/PolymeshTransactionBase.md#status)

#### Defined in

[base/PolymeshTransactionBase.ts:71](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fe2e6dd1d/src/base/PolymeshTransactionBase.ts#L71)

___

### tag

• **tag**: [`TxTag`](../../../modules/Generated/Types/Types.md#txtag)

type of transaction represented by this instance (mostly for display purposes)

#### Defined in

[base/PolymeshTransaction.ts:44](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fe2e6dd1d/src/base/PolymeshTransaction.ts#L44)

___

### txHash

• `Optional` **txHash**: `string`

transaction hash (status: `Running`, `Succeeded`, `Failed`)

#### Inherited from

[PolymeshTransactionBase](../PolymeshTransactionBase/PolymeshTransactionBase.md).[txHash](../PolymeshTransactionBase/PolymeshTransactionBase.md#txhash)

#### Defined in

[base/PolymeshTransactionBase.ts:86](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fe2e6dd1d/src/base/PolymeshTransactionBase.ts#L86)

___

### txIndex

• `Optional` **txIndex**: `BigNumber`

transaction index within its block (status: `Succeeded`, `Failed`)

#### Inherited from

[PolymeshTransactionBase](../PolymeshTransactionBase/PolymeshTransactionBase.md).[txIndex](../PolymeshTransactionBase/PolymeshTransactionBase.md#txindex)

#### Defined in

[base/PolymeshTransactionBase.ts:91](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fe2e6dd1d/src/base/PolymeshTransactionBase.ts#L91)

## Accessors

### isSuccess

• `get` **isSuccess**(): `boolean`

returns true if transaction has completed successfully

#### Returns

`boolean`

#### Inherited from

PolymeshTransactionBase.isSuccess

#### Defined in

[base/PolymeshTransactionBase.ts:801](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fe2e6dd1d/src/base/PolymeshTransactionBase.ts#L801)

___

### result

• `get` **result**(): `TransformedReturnValue`

returns the transaction result - this is the same value as the Promise run returns

#### Returns

`TransformedReturnValue`

**`Note`**

it is generally preferable to `await` the `Promise` returned by [transaction.run()](../PolymeshTransactionBase/PolymeshTransactionBase.md#run) instead of reading this property

**`Throws`**

if the [transaction.isSuccess](../PolymeshTransactionBase/PolymeshTransactionBase.md#issuccess) property is false — be sure to check that before accessing!

#### Inherited from

PolymeshTransactionBase.result

#### Defined in

[base/PolymeshTransactionBase.ts:718](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fe2e6dd1d/src/base/PolymeshTransactionBase.ts#L718)

## Methods

### getProtocolFees

▸ **getProtocolFees**(): `Promise`\<`BigNumber`\>

Return this transaction's protocol fees. These are extra fees charged for
  specific operations on the chain. Not to be confused with network fees (which
  depend on the complexity of the operation), protocol fees are set by governance and/or
  chain upgrades

#### Returns

`Promise`\<`BigNumber`\>

#### Overrides

[PolymeshTransactionBase](../PolymeshTransactionBase/PolymeshTransactionBase.md).[getProtocolFees](../PolymeshTransactionBase/PolymeshTransactionBase.md#getprotocolfees)

#### Defined in

[base/PolymeshTransaction.ts:100](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fe2e6dd1d/src/base/PolymeshTransaction.ts#L100)

___

### getTotalFees

▸ **getTotalFees**(): `Promise`\<[`PayingAccountFees`](../../../interfaces/Base/Types/PayingAccountFees/PayingAccountFees.md)\>

Retrieve a breakdown of the fees required to run this transaction, as well as the Account responsible for paying them

#### Returns

`Promise`\<[`PayingAccountFees`](../../../interfaces/Base/Types/PayingAccountFees/PayingAccountFees.md)\>

**`Note`**

these values might be inaccurate if the transaction is run at a later time. This can be due to a governance vote or other
  chain related factors (like modifications to a specific subsidizer relationship or a chain upgrade)

#### Inherited from

[PolymeshTransactionBase](../PolymeshTransactionBase/PolymeshTransactionBase.md).[getTotalFees](../PolymeshTransactionBase/PolymeshTransactionBase.md#gettotalfees)

#### Defined in

[base/PolymeshTransactionBase.ts:438](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fe2e6dd1d/src/base/PolymeshTransactionBase.ts#L438)

___

### onProcessedByMiddleware

▸ **onProcessedByMiddleware**(`listener`): [`UnsubCallback`](../../../modules/API/Entities/Types/Types.md#unsubcallback)

Subscribe to the results of this transaction being processed by the indexing service (and as such, available to the middleware)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `listener` | (`err?`: [`PolymeshError`](../PolymeshError/PolymeshError.md)) => `void` | callback function that will be called whenever the middleware is updated with the latest data. If there is an error (timeout or middleware offline) it will be passed to this callback |

#### Returns

[`UnsubCallback`](../../../modules/API/Entities/Types/Types.md#unsubcallback)

unsubscribe function

**`Note`**

this event will be fired even if the queue fails

**`Throws`**

if the middleware wasn't enabled when instantiating the SDK client

#### Inherited from

[PolymeshTransactionBase](../PolymeshTransactionBase/PolymeshTransactionBase.md).[onProcessedByMiddleware](../PolymeshTransactionBase/PolymeshTransactionBase.md#onprocessedbymiddleware)

#### Defined in

[base/PolymeshTransactionBase.ts:478](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fe2e6dd1d/src/base/PolymeshTransactionBase.ts#L478)

___

### onStatusChange

▸ **onStatusChange**(`listener`): [`UnsubCallback`](../../../modules/API/Entities/Types/Types.md#unsubcallback)

Subscribe to status changes

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `listener` | (`transaction`: [`GenericPolymeshTransaction`](../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<`ReturnValue`, `TransformedReturnValue`\>) => `void` | callback function that will be called whenever the status changes |

#### Returns

[`UnsubCallback`](../../../modules/API/Entities/Types/Types.md#unsubcallback)

unsubscribe function

#### Inherited from

[PolymeshTransactionBase](../PolymeshTransactionBase/PolymeshTransactionBase.md).[onStatusChange](../PolymeshTransactionBase/PolymeshTransactionBase.md#onstatuschange)

#### Defined in

[base/PolymeshTransactionBase.ts:420](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fe2e6dd1d/src/base/PolymeshTransactionBase.ts#L420)

___

### run

▸ **run**(): `Promise`\<`TransformedReturnValue`\>

Run the transaction, update its status and return a result if applicable.
  Certain transactions create Entities on the blockchain, and those Entities are returned
  for convenience. For example, when running a transaction that creates an Asset, the Asset itself
  is returned

#### Returns

`Promise`\<`TransformedReturnValue`\>

#### Inherited from

[PolymeshTransactionBase](../PolymeshTransactionBase/PolymeshTransactionBase.md).[run](../PolymeshTransactionBase/PolymeshTransactionBase.md#run)

#### Defined in

[base/PolymeshTransactionBase.ts:195](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fe2e6dd1d/src/base/PolymeshTransactionBase.ts#L195)

___

### supportsSubsidy

▸ **supportsSubsidy**(): `boolean`

Return whether the transaction can be subsidized. If the result is false
  AND the caller is being subsidized by a third party, the transaction can't be executed and trying
  to do so will result in an error

#### Returns

`boolean`

**`Note`**

this depends on the type of transaction itself (e.g. `staking.bond` can't be subsidized, but `asset.createAsset` can)

#### Overrides

[PolymeshTransactionBase](../PolymeshTransactionBase/PolymeshTransactionBase.md).[supportsSubsidy](../PolymeshTransactionBase/PolymeshTransactionBase.md#supportssubsidy)

#### Defined in

[base/PolymeshTransaction.ts:123](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fe2e6dd1d/src/base/PolymeshTransaction.ts#L123)

___

### toSignablePayload

▸ **toSignablePayload**(`metadata?`): `Promise`\<[`TransactionPayload`](../../../interfaces/Base/Types/TransactionPayload/TransactionPayload.md)\>

Returns a representation intended for offline signers.

#### Parameters

| Name | Type |
| :------ | :------ |
| `metadata` | `Record`\<`string`, `string`\> |

#### Returns

`Promise`\<[`TransactionPayload`](../../../interfaces/Base/Types/TransactionPayload/TransactionPayload.md)\>

**`Note`**

Usually `.run()` should be preferred due to is simplicity.

**`Note`**

When using this method, details like account nonces, and transaction mortality require extra consideration. Generating a payload for offline sign implies asynchronicity. If using this API, be sure each procedure is created with the correct nonce, accounting for in flight transactions, and the lifetime is sufficient.

#### Inherited from

[PolymeshTransactionBase](../PolymeshTransactionBase/PolymeshTransactionBase.md).[toSignablePayload](../PolymeshTransactionBase/PolymeshTransactionBase.md#tosignablepayload)

#### Defined in

[base/PolymeshTransactionBase.ts:739](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fe2e6dd1d/src/base/PolymeshTransactionBase.ts#L739)
