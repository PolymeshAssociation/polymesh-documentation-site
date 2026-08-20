# Interface: CreateTransactionBatchProcedureMethod()

> Defined in: [src/api/procedures/types.ts:181](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/procedures/types.ts#L181)

# Interface: CreateTransactionBatchProcedureMethod()

Defined in: [src/api/procedures/types.ts:181](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/procedures/types.ts#L181)

> **CreateTransactionBatchProcedureMethod**\<`ReturnValues`\>(`args`: [`CreateTransactionBatchParams`](CreateTransactionBatchParams.mdx)\<`ReturnValues`\>, `opts?`: [`ProcedureOpts`](ProcedureOpts.mdx)): `Promise`\<[`PolymeshTransactionBatch`](../../../../base/PolymeshTransactionBatch/classes/PolymeshTransactionBatch.mdx)\<`ReturnValues`, `ReturnValues`, `unknown`[][]\>\>

Defined in: [src/api/procedures/types.ts:182](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/procedures/types.ts#L182)

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

Defined in: [src/api/procedures/types.ts:186](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/procedures/types.ts#L186)

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
