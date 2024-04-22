---
id: "CreateTransactionBatchProcedureMethod"
title: "Interface: CreateTransactionBatchProcedureMethod"
sidebar_label: "CreateTransactionBatchProcedureMethod"
---

[types](../../../modules/Types/Types.md).CreateTransactionBatchProcedureMethod

## Callable

### CreateTransactionBatchProcedureMethod

▸ **CreateTransactionBatchProcedureMethod**\<`ReturnValues`\>(`args`, `opts?`): `Promise`\<[`PolymeshTransactionBatch`](../../../classes/Base/PolymeshTransactionBatch/PolymeshTransactionBatch.md)\<`ReturnValues`, `ReturnValues`, `unknown`[][]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ReturnValues` | extends readonly `unknown`[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`CreateTransactionBatchParams`](../../API/Procedures/Types/CreateTransactionBatchParams/CreateTransactionBatchParams.md)\<`ReturnValues`\> |
| `opts?` | [`ProcedureOpts`](../ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`\<[`PolymeshTransactionBatch`](../../../classes/Base/PolymeshTransactionBatch/PolymeshTransactionBatch.md)\<`ReturnValues`, `ReturnValues`, `unknown`[][]\>\>

#### Defined in

[types/index.ts:1546](https://github.com/PolymeshAssociation/polymesh-sdk/blob/968f8d70c/src/types/index.ts#L1546)

## Properties

### checkAuthorization

• **checkAuthorization**: \<ReturnValues\>(`args`: [`CreateTransactionBatchParams`](../../API/Procedures/Types/CreateTransactionBatchParams/CreateTransactionBatchParams.md)\<`ReturnValues`\>, `opts?`: [`ProcedureOpts`](../ProcedureOpts/ProcedureOpts.md)) => `Promise`\<[`ProcedureAuthorizationStatus`](../ProcedureAuthorizationStatus/ProcedureAuthorizationStatus.md)\>

#### Type declaration

▸ \<`ReturnValues`\>(`args`, `opts?`): `Promise`\<[`ProcedureAuthorizationStatus`](../ProcedureAuthorizationStatus/ProcedureAuthorizationStatus.md)\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `ReturnValues` | extends `unknown`[] |

##### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`CreateTransactionBatchParams`](../../API/Procedures/Types/CreateTransactionBatchParams/CreateTransactionBatchParams.md)\<`ReturnValues`\> |
| `opts?` | [`ProcedureOpts`](../ProcedureOpts/ProcedureOpts.md) |

##### Returns

`Promise`\<[`ProcedureAuthorizationStatus`](../ProcedureAuthorizationStatus/ProcedureAuthorizationStatus.md)\>

#### Defined in

[types/index.ts:1550](https://github.com/PolymeshAssociation/polymesh-sdk/blob/968f8d70c/src/types/index.ts#L1550)
