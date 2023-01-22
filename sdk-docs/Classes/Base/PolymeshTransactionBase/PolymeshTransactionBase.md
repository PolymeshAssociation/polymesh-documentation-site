[base/PolymeshTransactionBase](../../../Modules/Base/PolymeshTransactionBase.md).PolymeshTransactionBase

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

[base/PolymeshTransactionBase.ts:92](https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/base/PolymeshTransactionBase.ts#L92)

___

### blockNumber

• `Optional` **blockNumber**: `BigNumber`

number of the block where this transaction resides (status: `Succeeded`, `Failed`)

#### Defined in

[base/PolymeshTransactionBase.ts:97](https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/base/PolymeshTransactionBase.ts#L97)

___

### error

• `Optional` **error**: [`PolymeshError`](../PolymeshError/PolymeshError.md)

stores errors thrown while running the transaction (status: `Failed`, `Aborted`)

#### Defined in

[base/PolymeshTransactionBase.ts:72](https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/base/PolymeshTransactionBase.ts#L72)

___

### receipt

• `Optional` **receipt**: `ISubmittableResult`

stores the transaction receipt (if successful)

#### Defined in

[base/PolymeshTransactionBase.ts:77](https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/base/PolymeshTransactionBase.ts#L77)

___

### status

• **status**: [`TransactionStatus`](../../../Enums/Types/TransactionStatus.md) = `TransactionStatus.Idle`

current status of the transaction

#### Defined in

[base/PolymeshTransactionBase.ts:67](https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/base/PolymeshTransactionBase.ts#L67)

___

### txHash

• `Optional` **txHash**: `string`

transaction hash (status: `Running`, `Succeeded`, `Failed`)

#### Defined in

[base/PolymeshTransactionBase.ts:82](https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/base/PolymeshTransactionBase.ts#L82)

___

### txIndex

• `Optional` **txIndex**: `BigNumber`

transaction index within its block (status: `Succeeded`, `Failed`)

#### Defined in

[base/PolymeshTransactionBase.ts:87](https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/base/PolymeshTransactionBase.ts#L87)

## Accessors

### isSuccess

• `get` **isSuccess**(): `boolean`

returns true if transaction has completed successfully

#### Returns

`boolean`

___

### result

• `get` **result**(): `TransformedReturnValue`

returns the transaction result - this is the same value as the Promise run returns

**`Note`**

it is generally preferable to `await` the `Promise` returned by [transaction.run()](PolymeshTransactionBase.md#run) instead of reading this property

**`Throws`**

if the [transaction.isSuccess](PolymeshTransactionBase.md#issuccess) property is false — be sure to check that before accessing!

#### Returns

`TransformedReturnValue`

## Methods

### getProtocolFees

▸ `Abstract` **getProtocolFees**(): `Promise`<`BigNumber`\>

Return this transaction's protocol fees. These are extra fees charged for
  specific operations on the chain. Not to be confused with network fees (which
  depend on the complexity of the operation), protocol fees are set by governance and/or
  chain upgrades

#### Returns

`Promise`<`BigNumber`\>

___

### getTotalFees

▸ **getTotalFees**(): `Promise`<[`PayingAccountFees`](../../../Interfaces/Types/PayingAccountFees.md)\>

Retrieve a breakdown of the fees required to run this transaction, as well as the Account responsible for paying them

**`Note`**

these values might be inaccurate if the transaction is run at a later time. This can be due to a governance vote or other
  chain related factors (like modifications to a specific subsidizer relationship or a chain upgrade)

#### Returns

`Promise`<[`PayingAccountFees`](../../../Interfaces/Types/PayingAccountFees.md)\>

___

### onProcessedByMiddleware

▸ **onProcessedByMiddleware**(`listener`): [`UnsubCallback`](../../../Modules/Types/Types.md#unsubcallback)

Subscribe to the results of this transaction being processed by the indexing service (and as such, available to the middleware)

**`Note`**

this event will be fired even if the queue fails

**`Throws`**

if the middleware wasn't enabled when instantiating the SDK client

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `listener` | (`err?`: [`PolymeshError`](../PolymeshError/PolymeshError.md)) => `void` | callback function that will be called whenever the middleware is updated with the latest data. If there is an error (timeout or middleware offline) it will be passed to this callback |

#### Returns

[`UnsubCallback`](../../../Modules/Types/Types.md#unsubcallback)

unsubscribe function

___

### onStatusChange

▸ **onStatusChange**(`listener`): [`UnsubCallback`](../../../Modules/Types/Types.md#unsubcallback)

Subscribe to status changes

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `listener` | (`transaction`: [`GenericPolymeshTransaction`](../../../Modules/Types/Types.md#genericpolymeshtransaction)<`ReturnValue`, `TransformedReturnValue`\>) => `void` | callback function that will be called whenever the status changes |

#### Returns

[`UnsubCallback`](../../../Modules/Types/Types.md#unsubcallback)

unsubscribe function

___

### run

▸ **run**(): `Promise`<`TransformedReturnValue`\>

Run the transaction, update its status and return a result if applicable.
  Certain transactions create Entities on the blockchain, and those Entities are returned
  for convenience. For example, when running a transaction that creates an Asset, the Asset itself
  is returned

#### Returns

`Promise`<`TransformedReturnValue`\>

___

### supportsSubsidy

▸ `Abstract` **supportsSubsidy**(): `boolean`

Return whether the transaction can be subsidized. If the result is false
  AND the caller is being subsidized by a third party, the transaction can't be executed and trying
  to do so will result in an error

**`Note`**

this depends on the type of transaction itself (e.g. `staking.bond` can't be subsidized, but `asset.createAsset` can)

#### Returns

`boolean`
