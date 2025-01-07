---
id: "CreateTransactionBatchProcedureMethod"
title: "Interface: CreateTransactionBatchProcedureMethod"
sidebar_label: "CreateTransactionBatchProcedureMethod"
---

[api/procedures/types](../../../../../modules/API/Procedures/Types/Types.md).CreateTransactionBatchProcedureMethod

## Callable

### CreateTransactionBatchProcedureMethod

▸ **CreateTransactionBatchProcedureMethod**\<`ReturnValues`\>(`args`, `opts?`): `Promise`\<[`PolymeshTransactionBatch`](../../../../../classes/Base/PolymeshTransactionBatch/PolymeshTransactionBatch.md)\<`ReturnValues`, `ReturnValues`, `unknown`[][]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ReturnValues` | extends readonly `unknown`[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`CreateTransactionBatchParams`](../CreateTransactionBatchParams/CreateTransactionBatchParams.md)\<`ReturnValues`\> |
| `opts?` | [`ProcedureOpts`](../ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`\<[`PolymeshTransactionBatch`](../../../../../classes/Base/PolymeshTransactionBatch/PolymeshTransactionBatch.md)\<`ReturnValues`, `ReturnValues`, `unknown`[][]\>\>

#### Defined in

[api/procedures/types.ts:149](https://github.com/PolymeshAssociation/polymesh-sdk/blob/0dbd0ebd0/src/api/procedures/types.ts#L149)

## Properties

### checkAuthorization

• **checkAuthorization**: \<ReturnValues\>(`args`: [`CreateTransactionBatchParams`](../CreateTransactionBatchParams/CreateTransactionBatchParams.md)\<`ReturnValues`\>, `opts?`: [`ProcedureOpts`](../ProcedureOpts/ProcedureOpts.md)) => `Promise`\<[`ProcedureAuthorizationStatus`](../ProcedureAuthorizationStatus/ProcedureAuthorizationStatus.md)\>

#### Type declaration

▸ \<`ReturnValues`\>(`args`, `opts?`): `Promise`\<[`ProcedureAuthorizationStatus`](../ProcedureAuthorizationStatus/ProcedureAuthorizationStatus.md)\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `ReturnValues` | extends `unknown`[] |

##### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`CreateTransactionBatchParams`](../CreateTransactionBatchParams/CreateTransactionBatchParams.md)\<`ReturnValues`\> |
| `opts?` | [`ProcedureOpts`](../ProcedureOpts/ProcedureOpts.md) |

##### Returns

`Promise`\<[`ProcedureAuthorizationStatus`](../ProcedureAuthorizationStatus/ProcedureAuthorizationStatus.md)\>

#### Defined in

[api/procedures/types.ts:153](https://github.com/PolymeshAssociation/polymesh-sdk/blob/0dbd0ebd0/src/api/procedures/types.ts#L153)
