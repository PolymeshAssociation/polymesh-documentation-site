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

[base/PolymeshTransactionBase.ts:90](https://github.com/PolymeshAssociation/polymesh-sdk/blob/daafaa68f/src/base/PolymeshTransactionBase.ts#L90)

___

### blockNumber

• `Optional` **blockNumber**: `BigNumber`

number of the block where this transaction resides (status: `Succeeded`, `Failed`)

#### Inherited from

[PolymeshTransactionBase](../PolymeshTransactionBase/PolymeshTransactionBase.md).[blockNumber](../PolymeshTransactionBase/PolymeshTransactionBase.md#blocknumber)

#### Defined in

[base/PolymeshTransactionBase.ts:95](https://github.com/PolymeshAssociation/polymesh-sdk/blob/daafaa68f/src/base/PolymeshTransactionBase.ts#L95)

___

### error

• `Optional` **error**: [`PolymeshError`](../PolymeshError/PolymeshError.md)

stores errors thrown while running the transaction (status: `Failed`, `Aborted`)

#### Inherited from

[PolymeshTransactionBase](../PolymeshTransactionBase/PolymeshTransactionBase.md).[error](../PolymeshTransactionBase/PolymeshTransactionBase.md#error)

#### Defined in

[base/PolymeshTransactionBase.ts:70](https://github.com/PolymeshAssociation/polymesh-sdk/blob/daafaa68f/src/base/PolymeshTransactionBase.ts#L70)

___

### receipt

• `Optional` **receipt**: `ISubmittableResult`

stores the transaction receipt (if successful)

#### Inherited from

[PolymeshTransactionBase](../PolymeshTransactionBase/PolymeshTransactionBase.md).[receipt](../PolymeshTransactionBase/PolymeshTransactionBase.md#receipt)

#### Defined in

[base/PolymeshTransactionBase.ts:75](https://github.com/PolymeshAssociation/polymesh-sdk/blob/daafaa68f/src/base/PolymeshTransactionBase.ts#L75)

___

### status

• **status**: [`TransactionStatus`](../../../enums/Types/TransactionStatus/TransactionStatus.md) = `TransactionStatus.Idle`

current status of the transaction

#### Inherited from

[PolymeshTransactionBase](../PolymeshTransactionBase/PolymeshTransactionBase.md).[status](../PolymeshTransactionBase/PolymeshTransactionBase.md#status)

#### Defined in

[base/PolymeshTransactionBase.ts:65](https://github.com/PolymeshAssociation/polymesh-sdk/blob/daafaa68f/src/base/PolymeshTransactionBase.ts#L65)

___

### txHash

• `Optional` **txHash**: `string`

transaction hash (status: `Running`, `Succeeded`, `Failed`)

#### Inherited from

[PolymeshTransactionBase](../PolymeshTransactionBase/PolymeshTransactionBase.md).[txHash](../PolymeshTransactionBase/PolymeshTransactionBase.md#txhash)

#### Defined in

[base/PolymeshTransactionBase.ts:80](https://github.com/PolymeshAssociation/polymesh-sdk/blob/daafaa68f/src/base/PolymeshTransactionBase.ts#L80)

___

### txIndex

• `Optional` **txIndex**: `BigNumber`

transaction index within its block (status: `Succeeded`, `Failed`)

#### Inherited from

[PolymeshTransactionBase](../PolymeshTransactionBase/PolymeshTransactionBase.md).[txIndex](../PolymeshTransactionBase/PolymeshTransactionBase.md#txindex)

#### Defined in

[base/PolymeshTransactionBase.ts:85](https://github.com/PolymeshAssociation/polymesh-sdk/blob/daafaa68f/src/base/PolymeshTransactionBase.ts#L85)

## Accessors

### isSuccess

• `get` **isSuccess**(): `boolean`

returns true if transaction has completed successfully

#### Returns

`boolean`

#### Inherited from

PolymeshTransactionBase.isSuccess

#### Defined in

[base/PolymeshTransactionBase.ts:714](https://github.com/PolymeshAssociation/polymesh-sdk/blob/daafaa68f/src/base/PolymeshTransactionBase.ts#L714)

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

[base/PolymeshTransactionBase.ts:698](https://github.com/PolymeshAssociation/polymesh-sdk/blob/daafaa68f/src/base/PolymeshTransactionBase.ts#L698)

___

### transactions

• `get` **transactions**(): [`MapTxData`](../../../modules/Types/Types.md#maptxdata)\<`Args`\>

transactions in the batch with their respective arguments

#### Returns

[`MapTxData`](../../../modules/Types/Types.md#maptxdata)\<`Args`\>

#### Defined in

[base/PolymeshTransactionBatch.ts:77](https://github.com/PolymeshAssociation/polymesh-sdk/blob/daafaa68f/src/base/PolymeshTransactionBatch.ts#L77)

## Methods

### getTotalFees

▸ **getTotalFees**(): `Promise`\<[`PayingAccountFees`](../../../interfaces/Types/PayingAccountFees/PayingAccountFees.md)\>

Retrieve a breakdown of the fees required to run this transaction, as well as the Account responsible for paying them

#### Returns

`Promise`\<[`PayingAccountFees`](../../../interfaces/Types/PayingAccountFees/PayingAccountFees.md)\>

**`Note`**

these values might be inaccurate if the transaction is run at a later time. This can be due to a governance vote or other
  chain related factors (like modifications to a specific subsidizer relationship or a chain upgrade)

#### Inherited from

[PolymeshTransactionBase](../PolymeshTransactionBase/PolymeshTransactionBase.md).[getTotalFees](../PolymeshTransactionBase/PolymeshTransactionBase.md#gettotalfees)

#### Defined in

[base/PolymeshTransactionBase.ts:397](https://github.com/PolymeshAssociation/polymesh-sdk/blob/daafaa68f/src/base/PolymeshTransactionBase.ts#L397)

___

### onProcessedByMiddleware

▸ **onProcessedByMiddleware**(`listener`): [`UnsubCallback`](../../../modules/Types/Types.md#unsubcallback)

Subscribe to the results of this transaction being processed by the indexing service (and as such, available to the middleware)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `listener` | (`err?`: [`PolymeshError`](../PolymeshError/PolymeshError.md)) => `void` | callback function that will be called whenever the middleware is updated with the latest data. If there is an error (timeout or middleware offline) it will be passed to this callback |

#### Returns

[`UnsubCallback`](../../../modules/Types/Types.md#unsubcallback)

unsubscribe function

**`Note`**

this event will be fired even if the queue fails

**`Throws`**

if the middleware wasn't enabled when instantiating the SDK client

#### Inherited from

[PolymeshTransactionBase](../PolymeshTransactionBase/PolymeshTransactionBase.md).[onProcessedByMiddleware](../PolymeshTransactionBase/PolymeshTransactionBase.md#onprocessedbymiddleware)

#### Defined in

[base/PolymeshTransactionBase.ts:437](https://github.com/PolymeshAssociation/polymesh-sdk/blob/daafaa68f/src/base/PolymeshTransactionBase.ts#L437)

___

### onStatusChange

▸ **onStatusChange**(`listener`): [`UnsubCallback`](../../../modules/Types/Types.md#unsubcallback)

Subscribe to status changes

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `listener` | (`transaction`: [`GenericPolymeshTransaction`](../../../modules/Types/Types.md#genericpolymeshtransaction)\<`ReturnValue`, `TransformedReturnValue`\>) => `void` | callback function that will be called whenever the status changes |

#### Returns

[`UnsubCallback`](../../../modules/Types/Types.md#unsubcallback)

unsubscribe function

#### Inherited from

[PolymeshTransactionBase](../PolymeshTransactionBase/PolymeshTransactionBase.md).[onStatusChange](../PolymeshTransactionBase/PolymeshTransactionBase.md#onstatuschange)

#### Defined in

[base/PolymeshTransactionBase.ts:379](https://github.com/PolymeshAssociation/polymesh-sdk/blob/daafaa68f/src/base/PolymeshTransactionBase.ts#L379)

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

[base/PolymeshTransactionBase.ts:189](https://github.com/PolymeshAssociation/polymesh-sdk/blob/daafaa68f/src/base/PolymeshTransactionBase.ts#L189)

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

[base/PolymeshTransactionBatch.ts:159](https://github.com/PolymeshAssociation/polymesh-sdk/blob/daafaa68f/src/base/PolymeshTransactionBatch.ts#L159)

___

### supportsSubsidy

▸ **supportsSubsidy**(): `boolean`

#### Returns

`boolean`

**`Note`**

batches can't be subsidized. If the caller is subsidized, they should use `splitTransactions` and
  run each transaction separately

#### Overrides

[PolymeshTransactionBase](../PolymeshTransactionBase/PolymeshTransactionBase.md).[supportsSubsidy](../PolymeshTransactionBase/PolymeshTransactionBase.md#supportssubsidy)

#### Defined in

[base/PolymeshTransactionBatch.ts:124](https://github.com/PolymeshAssociation/polymesh-sdk/blob/daafaa68f/src/base/PolymeshTransactionBatch.ts#L124)
