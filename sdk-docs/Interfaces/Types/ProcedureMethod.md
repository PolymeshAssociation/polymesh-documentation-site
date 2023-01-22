[types](../../Modules/Types/Types.md).ProcedureMethod

## Type parameters

| Name | Type |
| :------ | :------ |
| `MethodArgs` | `MethodArgs` |
| `ProcedureReturnValue` | `ProcedureReturnValue` |
| `ReturnValue` | `ProcedureReturnValue` |

## Callable

### ProcedureMethod

▸ **ProcedureMethod**(`args`, `opts?`): `Promise`<[`GenericPolymeshTransaction`](../../Modules/Types/Types.md#genericpolymeshtransaction)<`ProcedureReturnValue`, `ReturnValue`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `MethodArgs` |
| `opts?` | [`ProcedureOpts`](ProcedureOpts.md) |

#### Returns

`Promise`<[`GenericPolymeshTransaction`](../../Modules/Types/Types.md#genericpolymeshtransaction)<`ProcedureReturnValue`, `ReturnValue`\>\>

## Properties

### checkAuthorization

• **checkAuthorization**: (`args`: `MethodArgs`, `opts?`: [`ProcedureOpts`](ProcedureOpts.md)) => `Promise`<[`ProcedureAuthorizationStatus`](ProcedureAuthorizationStatus.md)\>

#### Type declaration

▸ (`args`, `opts?`): `Promise`<[`ProcedureAuthorizationStatus`](ProcedureAuthorizationStatus.md)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `MethodArgs` |
| `opts?` | [`ProcedureOpts`](ProcedureOpts.md) |

##### Returns

`Promise`<[`ProcedureAuthorizationStatus`](ProcedureAuthorizationStatus.md)\>

#### Defined in

[types/index.ts:1501](https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/types/index.ts#L1501)
