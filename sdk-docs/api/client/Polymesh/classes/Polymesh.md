# Class: Polymesh

> Defined in: [src/api/client/Polymesh.ts:88](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/client/Polymesh.ts#L88)

# Class: Polymesh

Defined in: [src/api/client/Polymesh.ts:88](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/client/Polymesh.ts#L88)

Main entry point of the Polymesh SDK

## Properties

### accountManagement

> **accountManagement**: [`AccountManagement`](../../AccountManagement/classes/AccountManagement.mdx)

Defined in: [src/api/client/Polymesh.ts:112](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/client/Polymesh.ts#L112)

A set of methods for managing a Polymesh Identity's Accounts and their permissions

***

### assets

> **assets**: [`Assets`](../../Assets/classes/Assets.mdx)

Defined in: [src/api/client/Polymesh.ts:120](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/client/Polymesh.ts#L120)

A set of methods for interacting with Assets

***

### claims

> **claims**: [`Claims`](../../Claims/classes/Claims.mdx)

Defined in: [src/api/client/Polymesh.ts:96](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/client/Polymesh.ts#L96)

A set of methods to deal with Claims

***

### identities

> **identities**: [`Identities`](../../Identities/classes/Identities.mdx)

Defined in: [src/api/client/Polymesh.ts:116](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/client/Polymesh.ts#L116)

A set of methods for interacting with Polymesh Identities.

***

### network

> **network**: [`Network`](../../Network/classes/Network.mdx)

Defined in: [src/api/client/Polymesh.ts:100](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/client/Polymesh.ts#L100)

A set of methods to interact with the Polymesh network. This includes transferring POLYX, reading network properties and querying for historical events

***

### settlements

> **settlements**: [`Settlements`](../../Settlements/classes/Settlements.mdx)

Defined in: [src/api/client/Polymesh.ts:104](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/client/Polymesh.ts#L104)

A set of methods for exchanging Assets

***

### staking

> **staking**: [`Staking`](../../Staking/classes/Staking.mdx)

Defined in: [src/api/client/Polymesh.ts:108](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/client/Polymesh.ts#L108)

A set of methods for staking POLYX

## Accessors

### \_middlewareApiV2

#### Get Signature

> **get** **\_middlewareApiV2**(): `ApolloClient`\<`NormalizedCacheObject`\>

Defined in: [src/api/client/Polymesh.ts:357](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/client/Polymesh.ts#L357)

MiddlewareV2 client

##### Returns

`ApolloClient`\<`NormalizedCacheObject`\>

***

### \_polkadotApi

#### Get Signature

> **get** **\_polkadotApi**(): `ApiPromise`

Defined in: [src/api/client/Polymesh.ts:341](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/client/Polymesh.ts#L341)

Polkadot client

##### Returns

`ApiPromise`

***

### \_signingAddress

#### Get Signature

> **get** **\_signingAddress**(): `string`

Defined in: [src/api/client/Polymesh.ts:349](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/client/Polymesh.ts#L349)

signing address (to manually submit transactions with the polkadot API)

##### Returns

`string`

## Methods

### createTransactionBatch()

> **createTransactionBatch**\<`ReturnValues`\>(`args`: [`CreateTransactionBatchParams`](../../../procedures/types/interfaces/CreateTransactionBatchParams.mdx)\<`ReturnValues`\>, `opts?`: [`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)): `Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`ReturnValues`, `ReturnValues`\>\>

Defined in: [src/api/client/Polymesh.ts:334](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/client/Polymesh.ts#L334)

Create a batch transaction from a list of separate transactions. The list can contain batch transactions as well.
  The result of running this transaction will be an array of the results of each transaction in the list, in the same order.
  Transactions with no return value will produce `undefined` in the resulting array

#### Type Parameters

Type Parameter

`ReturnValues` *extends* readonly `unknown`[]

#### Parameters

Parameter
Type

`args`

[`CreateTransactionBatchParams`](../../../procedures/types/interfaces/CreateTransactionBatchParams.mdx)\<`ReturnValues`\>

`opts?`

[`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`ReturnValues`, `ReturnValues`\>\>

#### Examples

```typescript
const tx1 = await sdk.assets.reserveTicker({ ticker: 'FOO' });
const tx2 = await sdk.assets.reserveTicker({ ticker: 'BAR' });
const tx3 = await sdk.assets.reserveTicker({ ticker: 'BAZ' });

const batch = sdk.createTransactionBatch({ transactions: [tx1, tx2, tx3] as const });

const [res1, res2, res3] = await batch.run();
```

```typescript
const batch = sdk.createTransactionBatch({ transactions: [tx1, tx2, tx3] as const }, { signingAccount: 'someAddress' });

const [res1, res2, res3] = await batch.run();
```

#### Note

it is mandatory to use the `as const` type assertion when passing in the transaction array to the method in order to get the correct types
  for the results of running the batch

#### Note

if a signing Account is not specified, the default one will be used (the one returned by `sdk.accountManagement.getSigningAccount()`)

#### Note

all fees in the resulting batch must be paid by the calling Account, regardless of any exceptions that would normally be made for
  the individual transactions (such as subsidies or accepting invitations to join an Identity)

#### Note

this method is of type [CreateTransactionBatchProcedureMethod](../../../procedures/types/interfaces/CreateTransactionBatchProcedureMethod.mdx), which means you can call [createTransactionBatch.checkAuthorization](../../../procedures/types/interfaces/CreateTransactionBatchProcedureMethod.mdx#checkauthorization) on it to see whether the signing Account and Identity have the required roles and permissions to run it

***

### disconnect()

> **disconnect**(): `Promise`\<`void`\>

Defined in: [src/api/client/Polymesh.ts:279](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/client/Polymesh.ts#L279)

Disconnect the client and close all open connections and subscriptions

#### Returns

`Promise`\<`void`\>

#### Note

the SDK will become unusable after this operation. It will throw an error when attempting to
  access any chain or middleware data. If you wish to continue using the SDK, you must
  create a new instance by calling [connect](#connect)

***

### getSigningIdentity()

> **getSigningIdentity**(): `Promise`\<[`Identity`](../../../entities/Identity/classes/Identity.mdx) \| `null`\>

Defined in: [src/api/client/Polymesh.ts:234](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/client/Polymesh.ts#L234)

Retrieve the Identity associated to the signing Account (null if there is none)

#### Returns

`Promise`\<[`Identity`](../../../entities/Identity/classes/Identity.mdx) \| `null`\>

#### Throws

if there is no signing Account associated to the SDK

***

### onConnectionError()

> **onConnectionError**(`callback`: (...`args`: `unknown`[]) => `unknown`): [`UnsubCallback`](../../../entities/types/type-aliases/UnsubCallback.mdx)

Defined in: [src/api/client/Polymesh.ts:243](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/client/Polymesh.ts#L243)

Handle connection errors

#### Parameters

Parameter
Type

`callback`

(...`args`: `unknown`[]) => `unknown`

#### Returns

[`UnsubCallback`](../../../entities/types/type-aliases/UnsubCallback.mdx)

an unsubscribe callback

***

### onDisconnect()

> **onDisconnect**(`callback`: (...`args`: `unknown`[]) => `unknown`): [`UnsubCallback`](../../../entities/types/type-aliases/UnsubCallback.mdx)

Defined in: [src/api/client/Polymesh.ts:260](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/client/Polymesh.ts#L260)

Handle disconnection

#### Parameters

Parameter
Type

`callback`

(...`args`: `unknown`[]) => `unknown`

#### Returns

[`UnsubCallback`](../../../entities/types/type-aliases/UnsubCallback.mdx)

an unsubscribe callback

***

### setSigningAccount()

> **setSigningAccount**(`signer`: `string` \| [`Account`](../../../entities/Account/classes/Account.mdx)): `void`

Defined in: [src/api/client/Polymesh.ts:288](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/client/Polymesh.ts#L288)

Set the SDK's signing Account to the provided one

#### Parameters

Parameter
Type

`signer`

`string` \| [`Account`](../../../entities/Account/classes/Account.mdx)

#### Returns

`void`

#### Throws

if the passed Account is not present in the Signing Manager (or there is no Signing Manager)

***

### setSigningManager()

> **setSigningManager**(`signingManager`: `SigningManager` \| `null`): `Promise`\<`void`\>

Defined in: [src/api/client/Polymesh.ts:297](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/client/Polymesh.ts#L297)

Set the SDK's Signing Manager to the provided one.

#### Parameters

Parameter
Type

`signingManager`

`SigningManager` \| `null`

#### Returns

`Promise`\<`void`\>

#### Note

Pass `null` to unset the current signing manager

***

### connect()

> `static` **connect**(`params`: [`ConnectParams`](../interfaces/ConnectParams.mdx)): `Promise`\<`Polymesh`\>

Defined in: [src/api/client/Polymesh.ts:154](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/client/Polymesh.ts#L154)

Create an SDK instance and connect to a Polymesh node

#### Parameters

Parameter
Type

`params`

[`ConnectParams`](../interfaces/ConnectParams.mdx)

#### Returns

`Promise`\<`Polymesh`\>
