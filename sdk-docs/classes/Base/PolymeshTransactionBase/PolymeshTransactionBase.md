---
id: "PolymeshTransactionBase"
title: "Class: PolymeshTransactionBase<ReturnValue, TransformedReturnValue>"
sidebar_label: "PolymeshTransactionBase"
---

[base/PolymeshTransactionBase](../../../modules/Base/PolymeshTransactionBase/PolymeshTransactionBase.md).PolymeshTransactionBase

Wrapper class for a Polymesh Transaction

## Type parameters

| Name | Type |
| :------ | :------ |
| `ReturnValue` | `void` |
| `TransformedReturnValue` | `ReturnValue` |

## Hierarchy

- **`PolymeshTransactionBase`**

  ↳ [`PolymeshTransaction`](../PolymeshTransaction/PolymeshTransaction.md)

  ↳ [`PolymeshTransactionBatch`](../PolymeshTransactionBatch/PolymeshTransactionBatch.md)

## Properties

### blockHash

• `Optional` **blockHash**: `string`

hash of the block where this transaction resides (status: `Succeeded`, `Failed`)

#### Defined in

[base/PolymeshTransactionBase.ts:92](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/base/PolymeshTransactionBase.ts#L92)

___

### blockNumber

• `Optional` **blockNumber**: `BigNumber`

number of the block where this transaction resides (status: `Succeeded`, `Failed`)

#### Defined in

[base/PolymeshTransactionBase.ts:97](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/base/PolymeshTransactionBase.ts#L97)

___

### error

• `Optional` **error**: [`PolymeshError`](../PolymeshError/PolymeshError.md)

stores errors thrown while running the transaction (status: `Failed`, `Aborted`)

#### Defined in

[base/PolymeshTransactionBase.ts:72](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/base/PolymeshTransactionBase.ts#L72)

___

### receipt

• `Optional` **receipt**: `ISubmittableResult`

stores the transaction receipt (if successful)

#### Defined in

[base/PolymeshTransactionBase.ts:77](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/base/PolymeshTransactionBase.ts#L77)

___

### status

• **status**: [`TransactionStatus`](../../../enums/Types/TransactionStatus/TransactionStatus.md) = `TransactionStatus.Idle`

current status of the transaction

#### Defined in

[base/PolymeshTransactionBase.ts:67](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/base/PolymeshTransactionBase.ts#L67)

___

### txHash

• `Optional` **txHash**: `string`

transaction hash (status: `Running`, `Succeeded`, `Failed`)

#### Defined in

[base/PolymeshTransactionBase.ts:82](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/base/PolymeshTransactionBase.ts#L82)

___

### txIndex

• `Optional` **txIndex**: `BigNumber`

transaction index within its block (status: `Succeeded`, `Failed`)

#### Defined in

[base/PolymeshTransactionBase.ts:87](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/base/PolymeshTransactionBase.ts#L87)

## Accessors

### isSuccess

• `get` **isSuccess**(): `boolean`

returns true if transaction has completed successfully

#### Returns

`boolean`

#### Defined in

[base/PolymeshTransactionBase.ts:756](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/base/PolymeshTransactionBase.ts#L756)

___

### result

• `get` **result**(): `TransformedReturnValue`

returns the transaction result - this is the same value as the Promise run returns

#### Returns

`TransformedReturnValue`

**`Note`**

it is generally preferable to `await` the `Promise` returned by [transaction.run()](PolymeshTransactionBase.md#run) instead of reading this property

**`Throws`**

if the [transaction.isSuccess](PolymeshTransactionBase.md#issuccess) property is false — be sure to check that before accessing!

#### Defined in

[base/PolymeshTransactionBase.ts:673](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/base/PolymeshTransactionBase.ts#L673)

## Methods

### getProtocolFees

▸ `Abstract` **getProtocolFees**(): `Promise`\<`BigNumber`\>

Return this transaction's protocol fees. These are extra fees charged for
  specific operations on the chain. Not to be confused with network fees (which
  depend on the complexity of the operation), protocol fees are set by governance and/or
  chain upgrades

#### Returns

`Promise`\<`BigNumber`\>

#### Defined in

[base/PolymeshTransactionBase.ts:601](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/base/PolymeshTransactionBase.ts#L601)

___

### getTotalFees

▸ **getTotalFees**(): `Promise`\<[`PayingAccountFees`](../../../interfaces/Types/PayingAccountFees/PayingAccountFees.md)\>

Retrieve a breakdown of the fees required to run this transaction, as well as the Account responsible for paying them

#### Returns

`Promise`\<[`PayingAccountFees`](../../../interfaces/Types/PayingAccountFees/PayingAccountFees.md)\>

**`Note`**

these values might be inaccurate if the transaction is run at a later time. This can be due to a governance vote or other
  chain related factors (like modifications to a specific subsidizer relationship or a chain upgrade)

#### Defined in

[base/PolymeshTransactionBase.ts:401](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/base/PolymeshTransactionBase.ts#L401)

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

#### Defined in

[base/PolymeshTransactionBase.ts:441](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/base/PolymeshTransactionBase.ts#L441)

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

#### Defined in

[base/PolymeshTransactionBase.ts:383](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/base/PolymeshTransactionBase.ts#L383)

___

### run

▸ **run**(): `Promise`\<`TransformedReturnValue`\>

Run the transaction, update its status and return a result if applicable.
  Certain transactions create Entities on the blockchain, and those Entities are returned
  for convenience. For example, when running a transaction that creates an Asset, the Asset itself
  is returned

#### Returns

`Promise`\<`TransformedReturnValue`\>

#### Defined in

[base/PolymeshTransactionBase.ts:191](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/base/PolymeshTransactionBase.ts#L191)

___

### supportsSubsidy

▸ `Abstract` **supportsSubsidy**(): `boolean`

Return whether the transaction can be subsidized. If the result is false
  AND the caller is being subsidized by a third party, the transaction can't be executed and trying
  to do so will result in an error

#### Returns

`boolean`

**`Note`**

this depends on the type of transaction itself (e.g. `staking.bond` can't be subsidized, but `asset.createAsset` can)

#### Defined in

[base/PolymeshTransactionBase.ts:571](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/base/PolymeshTransactionBase.ts#L571)

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

#### Defined in

[base/PolymeshTransactionBase.ts:694](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/base/PolymeshTransactionBase.ts#L694)
