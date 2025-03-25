---
id: "Polymesh"
title: "Class: Polymesh"
sidebar_label: "Polymesh"
---

[api/client/Polymesh](../../../../modules/API/Client/Polymesh/Polymesh.md).Polymesh

Main entry point of the Polymesh SDK

## Properties

### accountManagement

• **accountManagement**: [`AccountManagement`](../AccountManagement/AccountManagement.md)

A set of methods for managing a Polymesh Identity's Accounts and their permissions

#### Defined in

[api/client/Polymesh.ts:114](https://github.com/PolymeshAssociation/polymesh-sdk/blob/f8a937f04/src/api/client/Polymesh.ts#L114)

___

### assets

• **assets**: [`Assets`](../Assets/Assets.md)

A set of methods for interacting with Assets

#### Defined in

[api/client/Polymesh.ts:122](https://github.com/PolymeshAssociation/polymesh-sdk/blob/f8a937f04/src/api/client/Polymesh.ts#L122)

___

### claims

• **claims**: [`Claims`](../Claims/Claims.md)

A set of methods to deal with Claims

#### Defined in

[api/client/Polymesh.ts:98](https://github.com/PolymeshAssociation/polymesh-sdk/blob/f8a937f04/src/api/client/Polymesh.ts#L98)

___

### identities

• **identities**: [`Identities`](../Identities/Identities.md)

A set of methods for interacting with Polymesh Identities.

#### Defined in

[api/client/Polymesh.ts:118](https://github.com/PolymeshAssociation/polymesh-sdk/blob/f8a937f04/src/api/client/Polymesh.ts#L118)

___

### network

• **network**: [`Network`](../Network/Network.md)

A set of methods to interact with the Polymesh network. This includes transferring POLYX, reading network properties and querying for historical events

#### Defined in

[api/client/Polymesh.ts:102](https://github.com/PolymeshAssociation/polymesh-sdk/blob/f8a937f04/src/api/client/Polymesh.ts#L102)

___

### settlements

• **settlements**: [`Settlements`](../Settlements/Settlements.md)

A set of methods for exchanging Assets

#### Defined in

[api/client/Polymesh.ts:106](https://github.com/PolymeshAssociation/polymesh-sdk/blob/f8a937f04/src/api/client/Polymesh.ts#L106)

___

### staking

• **staking**: [`Staking`](../Staking/Staking.md)

A set of methods for staking POLYX

#### Defined in

[api/client/Polymesh.ts:110](https://github.com/PolymeshAssociation/polymesh-sdk/blob/f8a937f04/src/api/client/Polymesh.ts#L110)

## Accessors

### \_middlewareApiV2

• `get` **_middlewareApiV2**(): `ApolloClient`\<`NormalizedCacheObject`\>

MiddlewareV2 client

#### Returns

`ApolloClient`\<`NormalizedCacheObject`\>

#### Defined in

[api/client/Polymesh.ts:363](https://github.com/PolymeshAssociation/polymesh-sdk/blob/f8a937f04/src/api/client/Polymesh.ts#L363)

___

### \_polkadotApi

• `get` **_polkadotApi**(): `ApiPromise`

Polkadot client

#### Returns

`ApiPromise`

#### Defined in

[api/client/Polymesh.ts:347](https://github.com/PolymeshAssociation/polymesh-sdk/blob/f8a937f04/src/api/client/Polymesh.ts#L347)

___

### \_signingAddress

• `get` **_signingAddress**(): `string`

signing address (to manually submit transactions with the polkadot API)

#### Returns

`string`

#### Defined in

[api/client/Polymesh.ts:355](https://github.com/PolymeshAssociation/polymesh-sdk/blob/f8a937f04/src/api/client/Polymesh.ts#L355)

## Methods

### createTransactionBatch

▸ **createTransactionBatch**\<`ReturnValues`\>(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<`ReturnValues`, `ReturnValues`\>\>

Create a batch transaction from a list of separate transactions. The list can contain batch transactions as well.
  The result of running this transaction will be an array of the results of each transaction in the list, in the same order.
  Transactions with no return value will produce `undefined` in the resulting array

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ReturnValues` | extends readonly `unknown`[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`CreateTransactionBatchParams`](../../../../interfaces/API/Procedures/Types/CreateTransactionBatchParams/CreateTransactionBatchParams.md)\<`ReturnValues`\> |
| `opts?` | [`ProcedureOpts`](../../../../interfaces/API/Procedures/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<`ReturnValues`, `ReturnValues`\>\>

**`Example`**

Batching 3 ticker reservation transactions

```typescript
const tx1 = await sdk.assets.reserveTicker({ ticker: 'FOO' });
const tx2 = await sdk.assets.reserveTicker({ ticker: 'BAR' });
const tx3 = await sdk.assets.reserveTicker({ ticker: 'BAZ' });

const batch = sdk.createTransactionBatch({ transactions: [tx1, tx2, tx3] as const });

const [res1, res2, res3] = await batch.run();
```

**`Example`**

Specifying the signer account for the whole batch

```typescript
const batch = sdk.createTransactionBatch({ transactions: [tx1, tx2, tx3] as const }, { signingAccount: 'someAddress' });

const [res1, res2, res3] = await batch.run();
```

**`Note`**

it is mandatory to use the `as const` type assertion when passing in the transaction array to the method in order to get the correct types
  for the results of running the batch

**`Note`**

if a signing Account is not specified, the default one will be used (the one returned by `sdk.accountManagement.getSigningAccount()`)

**`Note`**

all fees in the resulting batch must be paid by the calling Account, regardless of any exceptions that would normally be made for
  the individual transactions (such as subsidies or accepting invitations to join an Identity)

**`Note`**

this method is of type [CreateTransactionBatchProcedureMethod](../../../../interfaces/API/Procedures/Types/CreateTransactionBatchProcedureMethod/CreateTransactionBatchProcedureMethod.md), which means you can call [createTransactionBatch.checkAuthorization](../../../../interfaces/API/Procedures/Types/CreateTransactionBatchProcedureMethod/CreateTransactionBatchProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/client/Polymesh.ts:338](https://github.com/PolymeshAssociation/polymesh-sdk/blob/f8a937f04/src/api/client/Polymesh.ts#L338)

___

### disconnect

▸ **disconnect**(): `Promise`\<`void`\>

Disconnect the client and close all open connections and subscriptions

#### Returns

`Promise`\<`void`\>

**`Note`**

the SDK will become unusable after this operation. It will throw an error when attempting to
  access any chain or middleware data. If you wish to continue using the SDK, you must
  create a new instance by calling [connect](Polymesh.md#connect)

#### Defined in

[api/client/Polymesh.ts:280](https://github.com/PolymeshAssociation/polymesh-sdk/blob/f8a937f04/src/api/client/Polymesh.ts#L280)

___

### getSigningIdentity

▸ **getSigningIdentity**(): `Promise`\<``null`` \| [`Identity`](../../Entities/Identity/Identity.md)\>

Retrieve the Identity associated to the signing Account (null if there is none)

#### Returns

`Promise`\<``null`` \| [`Identity`](../../Entities/Identity/Identity.md)\>

**`Throws`**

if there is no signing Account associated to the SDK

#### Defined in

[api/client/Polymesh.ts:235](https://github.com/PolymeshAssociation/polymesh-sdk/blob/f8a937f04/src/api/client/Polymesh.ts#L235)

___

### onConnectionError

▸ **onConnectionError**(`callback`): [`UnsubCallback`](../../../../modules/API/Entities/Types/Types.md#unsubcallback)

Handle connection errors

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (...`args`: `unknown`[]) => `unknown` |

#### Returns

[`UnsubCallback`](../../../../modules/API/Entities/Types/Types.md#unsubcallback)

an unsubscribe callback

#### Defined in

[api/client/Polymesh.ts:244](https://github.com/PolymeshAssociation/polymesh-sdk/blob/f8a937f04/src/api/client/Polymesh.ts#L244)

___

### onDisconnect

▸ **onDisconnect**(`callback`): [`UnsubCallback`](../../../../modules/API/Entities/Types/Types.md#unsubcallback)

Handle disconnection

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (...`args`: `unknown`[]) => `unknown` |

#### Returns

[`UnsubCallback`](../../../../modules/API/Entities/Types/Types.md#unsubcallback)

an unsubscribe callback

#### Defined in

[api/client/Polymesh.ts:261](https://github.com/PolymeshAssociation/polymesh-sdk/blob/f8a937f04/src/api/client/Polymesh.ts#L261)

___

### setSigningAccount

▸ **setSigningAccount**(`signer`): `Promise`\<`void`\>

Set the SDK's signing Account to the provided one

#### Parameters

| Name | Type |
| :------ | :------ |
| `signer` | `string` \| [`Account`](../../Entities/Account/Account.md) |

#### Returns

`Promise`\<`void`\>

**`Throws`**

if the passed Account is not present in the Signing Manager (or there is no Signing Manager)

#### Defined in

[api/client/Polymesh.ts:289](https://github.com/PolymeshAssociation/polymesh-sdk/blob/f8a937f04/src/api/client/Polymesh.ts#L289)

___

### setSigningManager

▸ **setSigningManager**(`signingManager`): `Promise`\<`void`\>

Set the SDK's Signing Manager to the provided one.

#### Parameters

| Name | Type |
| :------ | :------ |
| `signingManager` | ``null`` \| `SigningManager` |

#### Returns

`Promise`\<`void`\>

**`Note`**

Pass `null` to unset the current signing manager

#### Defined in

[api/client/Polymesh.ts:298](https://github.com/PolymeshAssociation/polymesh-sdk/blob/f8a937f04/src/api/client/Polymesh.ts#L298)

___

### connect

▸ `Static` **connect**(`params`): `Promise`\<[`Polymesh`](Polymesh.md)\>

Create an SDK instance and connect to a Polymesh node

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`ConnectParams`](../../../../interfaces/API/Client/Polymesh/ConnectParams/ConnectParams.md) |

#### Returns

`Promise`\<[`Polymesh`](Polymesh.md)\>

#### Defined in

[api/client/Polymesh.ts:156](https://github.com/PolymeshAssociation/polymesh-sdk/blob/f8a937f04/src/api/client/Polymesh.ts#L156)
