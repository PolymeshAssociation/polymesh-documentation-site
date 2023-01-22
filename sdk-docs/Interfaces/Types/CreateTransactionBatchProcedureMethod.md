[types](../../Modules/Types/Types.md).CreateTransactionBatchProcedureMethod

## Callable

### CreateTransactionBatchProcedureMethod

▸ **CreateTransactionBatchProcedureMethod**<`ReturnValues`\>(`args`, `opts?`): `Promise`<[`PolymeshTransactionBatch`](../../Classes/Base/PolymeshTransactionBatch/PolymeshTransactionBatch.md)<`ReturnValues`, `ReturnValues`, `unknown`[][]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ReturnValues` | extends readonly `unknown`[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`CreateTransactionBatchParams`](../API/Procedures/Types/CreateTransactionBatchParams.md)<`ReturnValues`\> |
| `opts?` | [`ProcedureOpts`](ProcedureOpts.md) |

#### Returns

`Promise`<[`PolymeshTransactionBatch`](../../Classes/Base/PolymeshTransactionBatch/PolymeshTransactionBatch.md)<`ReturnValues`, `ReturnValues`, `unknown`[][]\>\>

## Properties

### checkAuthorization

• **checkAuthorization**: <ReturnValues\>(`args`: [`CreateTransactionBatchParams`](../API/Procedures/Types/CreateTransactionBatchParams.md)<`ReturnValues`\>, `opts?`: [`ProcedureOpts`](ProcedureOpts.md)) => `Promise`<[`ProcedureAuthorizationStatus`](ProcedureAuthorizationStatus.md)\>

#### Type declaration

▸ <`ReturnValues`\>(`args`, `opts?`): `Promise`<[`ProcedureAuthorizationStatus`](ProcedureAuthorizationStatus.md)\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `ReturnValues` | extends `unknown`[] |

##### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`CreateTransactionBatchParams`](../API/Procedures/Types/CreateTransactionBatchParams.md)<`ReturnValues`\> |
| `opts?` | [`ProcedureOpts`](ProcedureOpts.md) |

##### Returns

`Promise`<[`ProcedureAuthorizationStatus`](ProcedureAuthorizationStatus.md)\>

#### Defined in

[types/index.ts:1487](https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/types/index.ts#L1487)
