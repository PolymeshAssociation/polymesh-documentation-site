# Abstract Class: PolymeshTransactionBase\<ReturnValue, TransformedReturnValue\>

> Defined in: [src/base/PolymeshTransactionBase.ts:58](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/base/PolymeshTransactionBase.ts#L58)

# Abstract Class: PolymeshTransactionBase\

Defined in: [src/base/PolymeshTransactionBase.ts:58](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/base/PolymeshTransactionBase.ts#L58)

Wrapper class for a Polymesh Transaction

## Extended by

- [`PolymeshTransaction`](../../PolymeshTransaction/classes/PolymeshTransaction.mdx)
- [`PolymeshTransactionBatch`](../../PolymeshTransactionBatch/classes/PolymeshTransactionBatch.mdx)

## Type Parameters

Type Parameter
Default type

`ReturnValue`

`void`

`TransformedReturnValue`

`ReturnValue`

## Properties

### blockHash?

> `optional` **blockHash?**: `string`

Defined in: [src/base/PolymeshTransactionBase.ts:107](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/base/PolymeshTransactionBase.ts#L107)

hash of the block where this transaction resides (status: `Succeeded`, `Failed`)

***

### blockNumber?

> `optional` **blockNumber?**: `BigNumber`

Defined in: [src/base/PolymeshTransactionBase.ts:112](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/base/PolymeshTransactionBase.ts#L112)

number of the block where this transaction resides (status: `Succeeded`, `Failed`)

***

### error?

> `optional` **error?**: [`PolymeshError`](../../PolymeshError/classes/PolymeshError.mdx)

Defined in: [src/base/PolymeshTransactionBase.ts:87](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/base/PolymeshTransactionBase.ts#L87)

stores errors thrown while running the transaction (status: `Failed`, `Aborted`)

***

### multiSig

> **multiSig**: [`MultiSig`](../../../api/entities/Account/MultiSig/classes/MultiSig.mdx) \| `null`

Defined in: [src/base/PolymeshTransactionBase.ts:120](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/base/PolymeshTransactionBase.ts#L120)

This will be set if the signingAddress is a MultiSig signer, otherwise `null`

When set it indicates the transaction will be wrapped as a proposal for the MultiSig,
meaning `.runAsProposal` should be used instead of `.run`

***

### receipt?

> `optional` **receipt?**: `ISubmittableResult`

Defined in: [src/base/PolymeshTransactionBase.ts:92](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/base/PolymeshTransactionBase.ts#L92)

stores the transaction receipt (if successful)

***

### status

> **status**: [`TransactionStatus`](../../types/enumerations/TransactionStatus.mdx) = `TransactionStatus.Idle`

Defined in: [src/base/PolymeshTransactionBase.ts:82](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/base/PolymeshTransactionBase.ts#L82)

current status of the transaction

***

### txHash?

> `optional` **txHash?**: `string`

Defined in: [src/base/PolymeshTransactionBase.ts:97](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/base/PolymeshTransactionBase.ts#L97)

transaction hash (status: `Running`, `Succeeded`, `Failed`)

***

### txIndex?

> `optional` **txIndex?**: `BigNumber`

Defined in: [src/base/PolymeshTransactionBase.ts:102](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/base/PolymeshTransactionBase.ts#L102)

transaction index within its block (status: `Succeeded`, `Failed`)

## Accessors

### isSuccess

#### Get Signature

> **get** **isSuccess**(): `boolean`

Defined in: [src/base/PolymeshTransactionBase.ts:929](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/base/PolymeshTransactionBase.ts#L929)

returns true if transaction has completed successfully

##### Returns

`boolean`

***

### result

#### Get Signature

> **get** **result**(): `TransformedReturnValue`

Defined in: [src/base/PolymeshTransactionBase.ts:840](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/base/PolymeshTransactionBase.ts#L840)

returns the transaction result - this is the same value as the Promise run returns

##### Note

it is generally preferable to `await` the `Promise` returned by [transaction.run()](#run) instead of reading this property

##### Throws

if the [transaction.isSuccess](#issuccess) property is false — be sure to check that before accessing!

##### Returns

`TransformedReturnValue`

## Methods

### getProtocolFees()

> `abstract` **getProtocolFees**(): `Promise`\<`BigNumber`\>

Defined in: [src/base/PolymeshTransactionBase.ts:771](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/base/PolymeshTransactionBase.ts#L771)

Return this transaction's protocol fees. These are extra fees charged for
  specific operations on the chain. Not to be confused with network fees (which
  depend on the complexity of the operation), protocol fees are set by governance and/or
  chain upgrades

#### Returns

`Promise`\<`BigNumber`\>

***

### getTotalFees()

> **getTotalFees**(`asProposal?`: `boolean`): `Promise`\<[`PayingAccountFees`](../../types/interfaces/PayingAccountFees.mdx)\>

Defined in: [src/base/PolymeshTransactionBase.ts:566](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/base/PolymeshTransactionBase.ts#L566)

Retrieve a breakdown of the fees required to run this transaction, as well as the Account responsible for paying them

#### Parameters

Parameter
Type
Default value
Description

`asProposal`

`boolean`

`true`

When `true` (default), treats the transaction as a MultiSig proposal if the signing account is a MultiSig signer.
  When `false`, treats the transaction as a direct transaction from the signing account, ignoring the MultiSig.

#### Returns

`Promise`\<[`PayingAccountFees`](../../types/interfaces/PayingAccountFees.mdx)\>

#### Note

these values might be inaccurate if the transaction is run at a later time. This can be due to a governance vote or other
  chain related factors (like modifications to a specific subsidizer relationship or a chain upgrade)

***

### onProcessedByMiddleware()

> **onProcessedByMiddleware**(`listener`: (`err?`: [`PolymeshError`](../../PolymeshError/classes/PolymeshError.mdx)) => `void`): [`UnsubCallback`](../../../api/entities/types/type-aliases/UnsubCallback.mdx)

Defined in: [src/base/PolymeshTransactionBase.ts:606](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/base/PolymeshTransactionBase.ts#L606)

Subscribe to the results of this transaction being processed by the indexing service (and as such, available to the middleware)

#### Parameters

Parameter
Type
Description

`listener`

(`err?`: [`PolymeshError`](../../PolymeshError/classes/PolymeshError.mdx)) => `void`

callback function that will be called whenever the middleware is updated with the latest data.
  If there is an error (timeout or middleware offline) it will be passed to this callback

#### Returns

[`UnsubCallback`](../../../api/entities/types/type-aliases/UnsubCallback.mdx)

unsubscribe function

#### Note

this event will be fired even if the queue fails

#### Throws

if the middleware wasn't enabled when instantiating the SDK client

***

### onStatusChange()

> **onStatusChange**(`listener`: (`transaction`: [`GenericPolymeshTransaction`](../../../api/procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`ReturnValue`, `TransformedReturnValue`\>) => `void`): [`UnsubCallback`](../../../api/entities/types/type-aliases/UnsubCallback.mdx)

Defined in: [src/base/PolymeshTransactionBase.ts:545](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/base/PolymeshTransactionBase.ts#L545)

Subscribe to status changes

#### Parameters

Parameter
Type
Description

`listener`

(`transaction`: [`GenericPolymeshTransaction`](../../../api/procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`ReturnValue`, `TransformedReturnValue`\>) => `void`

callback function that will be called whenever the status changes

#### Returns

[`UnsubCallback`](../../../api/entities/types/type-aliases/UnsubCallback.mdx)

unsubscribe function

***

### run()

> **run**(): `Promise`\<`TransformedReturnValue`\>

Defined in: [src/base/PolymeshTransactionBase.ts:285](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/base/PolymeshTransactionBase.ts#L285)

Run the transaction, update its status and return a result if applicable.
  Certain transactions create Entities on the blockchain, and those Entities are returned
  for convenience. For example, when running a transaction that creates an Asset, the Asset itself
  is returned

#### Returns

`Promise`\<`TransformedReturnValue`\>

***

### runAsProposal()

> **runAsProposal**(): `Promise`\<[`MultiSigProposal`](../../../api/entities/MultiSigProposal/classes/MultiSigProposal.mdx)\>

Defined in: [src/base/PolymeshTransactionBase.ts:238](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/base/PolymeshTransactionBase.ts#L238)

Run the transaction as a multiSig proposal

#### Returns

`Promise`\<[`MultiSigProposal`](../../../api/entities/MultiSigProposal/classes/MultiSigProposal.mdx)\>

***

### supportsSubsidy()

> `abstract` **supportsSubsidy**(): `void`

Defined in: [src/base/PolymeshTransactionBase.ts:732](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/base/PolymeshTransactionBase.ts#L732)

Return whether the transaction can be subsidized. If the result is false
  AND the caller is being subsidized by a third party, the transaction can't be executed and trying
  to do so will result in an error

#### Returns

`void`

#### Note

this depends on the type of transaction itself (e.g. `staking.bond` can't be subsidized, but `asset.createAsset` can)

***

### toSignablePayload()

> **toSignablePayload**(`metadata?`: `Record`\<`string`, `string`\>, `asProposal?`: `boolean`): `Promise`\<[`TransactionPayload`](../../types/interfaces/TransactionPayload.mdx)\>

Defined in: [src/base/PolymeshTransactionBase.ts:865](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/base/PolymeshTransactionBase.ts#L865)

Returns a representation intended for offline signers.

#### Parameters

Parameter
Type
Default value
Description

`metadata`

`Record`\<`string`, `string`\>

`{}`

Additional information attached to the payload, such as IDs or memos about the transaction

`asProposal`

`boolean`

`true`

When `true` (default), treats the transaction as a MultiSig proposal if the signing account is a MultiSig signer.
  When `false`, treats the transaction as a direct transaction from the signing account, ignoring the MultiSig.

#### Returns

`Promise`\<[`TransactionPayload`](../../types/interfaces/TransactionPayload.mdx)\>

#### Note

Usually `.run()` should be preferred due to is simplicity.

#### Note

When using this method, details like account nonces, and transaction mortality require extra consideration. Generating a payload for offline sign implies asynchronicity. If using this API, be sure each procedure is created with the correct nonce, accounting for in flight transactions, and the lifetime is sufficient.
