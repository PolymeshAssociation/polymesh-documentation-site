# Interface: CreateTransactionBatchProcedureMethod()

> Defined in: [src/api/procedures/types.ts:183](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L183)

# Interface: CreateTransactionBatchProcedureMethod()

Defined in: [src/api/procedures/types.ts:183](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L183)

> **CreateTransactionBatchProcedureMethod**\<`ReturnValues`\>(`args`: [`CreateTransactionBatchParams`](CreateTransactionBatchParams.mdx)\<`ReturnValues`\>, `opts?`: [`ProcedureOpts`](ProcedureOpts.mdx)): `Promise`\<[`PolymeshTransactionBatch`](../../../../base/PolymeshTransactionBatch/classes/PolymeshTransactionBatch.mdx)\<`ReturnValues`, `ReturnValues`, `unknown`[][]\>\>

Defined in: [src/api/procedures/types.ts:184](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L184)

## Type Parameters

Type Parameter

`ReturnValues` *extends* readonly `unknown`[]

## Parameters

Parameter
Type

`args`

[`CreateTransactionBatchParams`](CreateTransactionBatchParams.mdx)\<`ReturnValues`\>

`opts?`

[`ProcedureOpts`](ProcedureOpts.mdx)

## Returns

`Promise`\<[`PolymeshTransactionBatch`](../../../../base/PolymeshTransactionBatch/classes/PolymeshTransactionBatch.mdx)\<`ReturnValues`, `ReturnValues`, `unknown`[][]\>\>

## Properties

### checkAuthorization

> **checkAuthorization**: \<`ReturnValues`\>(`args`: [`CreateTransactionBatchParams`](CreateTransactionBatchParams.mdx)\<`ReturnValues`\>, `opts?`: [`ProcedureOpts`](ProcedureOpts.mdx)) => `Promise`\<[`ProcedureAuthorizationStatus`](ProcedureAuthorizationStatus.mdx)\>

Defined in: [src/api/procedures/types.ts:188](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L188)

#### Type Parameters

Type Parameter

`ReturnValues` *extends* `unknown`[]

#### Parameters

Parameter
Type

`args`

[`CreateTransactionBatchParams`](CreateTransactionBatchParams.mdx)\<`ReturnValues`\>

`opts?`

[`ProcedureOpts`](ProcedureOpts.mdx)

#### Returns

`Promise`\<[`ProcedureAuthorizationStatus`](ProcedureAuthorizationStatus.mdx)\>
