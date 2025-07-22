---
id: "PolymeshTransactionBatch"
title: "Class: PolymeshTransactionBatch<ReturnValue, TransformedReturnValue, Args>"
sidebar_label: "PolymeshTransactionBatch"
---

[base/PolymeshTransactionBatch](../../../modules/Base/PolymeshTransactionBatch/PolymeshTransactionBatch.md).PolymeshTransactionBatch

Wrapper class for a batch of Polymesh Transactions

## Type parameters

| Name | Type |
| :------ | :------ |
| `ReturnValue` | `ReturnValue` |
| `TransformedReturnValue` | `ReturnValue` |
| `Args` | extends `unknown`[][] = `unknown`[][] |

## Hierarchy

- [`PolymeshTransactionBase`](../PolymeshTransactionBase/PolymeshTransactionBase.md)\<`ReturnValue`, `TransformedReturnValue`\>

  ↳ **`PolymeshTransactionBatch`**

## Properties

### blockHash

• `Optional` **blockHash**: `string`

hash of the block where this transaction resides (status: `Succeeded`, `Failed`)

#### Inherited from

[PolymeshTransactionBase](../PolymeshTransactionBase/PolymeshTransactionBase.md).[blockHash](../PolymeshTransactionBase/PolymeshTransactionBase.md#blockhash)

#### Defined in

[base/PolymeshTransactionBase.ts:106](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9e72221/src/base/PolymeshTransactionBase.ts#L106)

___

### blockNumber

• `Optional` **blockNumber**: `BigNumber`

number of the block where this transaction resides (status: `Succeeded`, `Failed`)

#### Inherited from

[PolymeshTransactionBase](../PolymeshTransactionBase/PolymeshTransactionBase.md).[blockNumber](../PolymeshTransactionBase/PolymeshTransactionBase.md#blocknumber)

#### Defined in

[base/PolymeshTransactionBase.ts:111](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9e72221/src/base/PolymeshTransactionBase.ts#L111)

___

### error

• `Optional` **error**: [`PolymeshError`](../PolymeshError/PolymeshError.md)

stores errors thrown while running the transaction (status: `Failed`, `Aborted`)

#### Inherited from

[PolymeshTransactionBase](../PolymeshTransactionBase/PolymeshTransactionBase.md).[error](../PolymeshTransactionBase/PolymeshTransactionBase.md#error)

#### Defined in

[base/PolymeshTransactionBase.ts:86](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9e72221/src/base/PolymeshTransactionBase.ts#L86)

___

### multiSig

• **multiSig**: ``null`` \| [`MultiSig`](../../API/Entities/Account/MultiSig/MultiSig.md)

This will be set if the signingAddress is a MultiSig signer, otherwise `null`

When set it indicates the transaction will be wrapped as a proposal for the MultiSig,
meaning `.runAsProposal` should be used instead of `.run`

#### Inherited from

[PolymeshTransactionBase](../PolymeshTransactionBase/PolymeshTransactionBase.md).[multiSig](../PolymeshTransactionBase/PolymeshTransactionBase.md#multisig)

#### Defined in

[base/PolymeshTransactionBase.ts:119](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9e72221/src/base/PolymeshTransactionBase.ts#L119)

___

### receipt

• `Optional` **receipt**: `ISubmittableResult`

stores the transaction receipt (if successful)

#### Inherited from

[PolymeshTransactionBase](../PolymeshTransactionBase/PolymeshTransactionBase.md).[receipt](../PolymeshTransactionBase/PolymeshTransactionBase.md#receipt)

#### Defined in

[base/PolymeshTransactionBase.ts:91](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9e72221/src/base/PolymeshTransactionBase.ts#L91)

___

### status

• **status**: [`TransactionStatus`](../../../enums/Base/Types/TransactionStatus/TransactionStatus.md) = `TransactionStatus.Idle`

current status of the transaction

#### Inherited from

[PolymeshTransactionBase](../PolymeshTransactionBase/PolymeshTransactionBase.md).[status](../PolymeshTransactionBase/PolymeshTransactionBase.md#status)

#### Defined in

[base/PolymeshTransactionBase.ts:81](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9e72221/src/base/PolymeshTransactionBase.ts#L81)

___

### txHash

• `Optional` **txHash**: `string`

transaction hash (status: `Running`, `Succeeded`, `Failed`)

#### Inherited from

[PolymeshTransactionBase](../PolymeshTransactionBase/PolymeshTransactionBase.md).[txHash](../PolymeshTransactionBase/PolymeshTransactionBase.md#txhash)

#### Defined in

[base/PolymeshTransactionBase.ts:96](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9e72221/src/base/PolymeshTransactionBase.ts#L96)

___

### txIndex

• `Optional` **txIndex**: `BigNumber`

transaction index within its block (status: `Succeeded`, `Failed`)

#### Inherited from

[PolymeshTransactionBase](../PolymeshTransactionBase/PolymeshTransactionBase.md).[txIndex](../PolymeshTransactionBase/PolymeshTransactionBase.md#txindex)

#### Defined in

[base/PolymeshTransactionBase.ts:101](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9e72221/src/base/PolymeshTransactionBase.ts#L101)

## Accessors

### isSuccess

• `get` **isSuccess**(): `boolean`

returns true if transaction has completed successfully

#### Returns

`boolean`

#### Inherited from

PolymeshTransactionBase.isSuccess

#### Defined in

[base/PolymeshTransactionBase.ts:907](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9e72221/src/base/PolymeshTransactionBase.ts#L907)

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

[base/PolymeshTransactionBase.ts:823](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9e72221/src/base/PolymeshTransactionBase.ts#L823)

___

### transactions

• `get` **transactions**(): [`MapTxData`](../../../modules/Base/Types/Types.md#maptxdata)\<`Args`\>

transactions in the batch with their respective arguments

#### Returns

[`MapTxData`](../../../modules/Base/Types/Types.md#maptxdata)\<`Args`\>

#### Defined in

[base/PolymeshTransactionBatch.ts:79](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9e72221/src/base/PolymeshTransactionBatch.ts#L79)

## Methods

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

[base/PolymeshTransactionBase.ts:537](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9e72221/src/base/PolymeshTransactionBase.ts#L537)

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

[base/PolymeshTransactionBase.ts:577](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9e72221/src/base/PolymeshTransactionBase.ts#L577)

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

[base/PolymeshTransactionBase.ts:519](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9e72221/src/base/PolymeshTransactionBase.ts#L519)

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

[base/PolymeshTransactionBase.ts:270](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9e72221/src/base/PolymeshTransactionBase.ts#L270)

___

### runAsProposal

▸ **runAsProposal**(): `Promise`\<[`MultiSigProposal`](../../API/Entities/MultiSigProposal/MultiSigProposal.md)\>

Run the transaction as a multiSig proposal

#### Returns

`Promise`\<[`MultiSigProposal`](../../API/Entities/MultiSigProposal/MultiSigProposal.md)\>

#### Inherited from

[PolymeshTransactionBase](../PolymeshTransactionBase/PolymeshTransactionBase.md).[runAsProposal](../PolymeshTransactionBase/PolymeshTransactionBase.md#runasproposal)

#### Defined in

[base/PolymeshTransactionBase.ts:228](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9e72221/src/base/PolymeshTransactionBase.ts#L228)

___

### splitTransactions

▸ **splitTransactions**(): ([`PolymeshTransaction`](../PolymeshTransaction/PolymeshTransaction.md)\<`void`, `void`, `unknown`[]\> \| [`PolymeshTransaction`](../PolymeshTransaction/PolymeshTransaction.md)\<`ReturnValue`, `TransformedReturnValue`, `unknown`[]\>)[]

Splits this batch into its individual transactions to be run separately. This is useful if the caller is being subsidized,
  since batches cannot be run by subsidized Accounts

#### Returns

([`PolymeshTransaction`](../PolymeshTransaction/PolymeshTransaction.md)\<`void`, `void`, `unknown`[]\> \| [`PolymeshTransaction`](../PolymeshTransaction/PolymeshTransaction.md)\<`ReturnValue`, `TransformedReturnValue`, `unknown`[]\>)[]

**`Note`**

the transactions returned by this method must be run in the same order they appear in the array to guarantee the same behavior. If run out of order,
  an error will be thrown. The result that would be obtained by running the batch is returned by running the last transaction in the array

**`Example`**

```typescript
const createAssetTx = await sdk.assets.createAsset(...);

let ticker: string;

if (isPolymeshTransactionBatch<Asset>(createAssetTx)) {
  const transactions = createAssetTx.splitTransactions();

  for (let i = 0; i < length; i += 1) {
    const result = await transactions[i].run();

    if (isAsset(result)) {
      ({ticker} = result)
    }
  }
} else {
  ({ ticker } = await createAssetTx.run());
}

console.log(`New Asset created! Ticker: ${ticker}`);
```

#### Defined in

[base/PolymeshTransactionBatch.ts:198](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9e72221/src/base/PolymeshTransactionBatch.ts#L198)

___

### supportsSubsidy

▸ **supportsSubsidy**(): `boolean`

#### Returns

`boolean`

**`Note`**

batch can only be subsidized if -
  1. Number of transactions in the batch are not more than 7
  2. Every transaction in the batch can be subsidized

#### Overrides

[PolymeshTransactionBase](../PolymeshTransactionBase/PolymeshTransactionBase.md).[supportsSubsidy](../PolymeshTransactionBase/PolymeshTransactionBase.md#supportssubsidy)

#### Defined in

[base/PolymeshTransactionBatch.ts:129](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9e72221/src/base/PolymeshTransactionBatch.ts#L129)

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

[base/PolymeshTransactionBase.ts:844](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9e72221/src/base/PolymeshTransactionBase.ts#L844)
