[types](../../Modules/Types/Types.md).NoArgsProcedureMethod

## Type parameters

| Name | Type |
| :------ | :------ |
| `ProcedureReturnValue` | `ProcedureReturnValue` |
| `ReturnValue` | `ProcedureReturnValue` |

## Callable

### NoArgsProcedureMethod

▸ **NoArgsProcedureMethod**(`opts?`): `Promise`<[`GenericPolymeshTransaction`](../../Modules/Types/Types.md#genericpolymeshtransaction)<`ProcedureReturnValue`, `ReturnValue`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`ProcedureOpts`](ProcedureOpts.md) |

#### Returns

`Promise`<[`GenericPolymeshTransaction`](../../Modules/Types/Types.md#genericpolymeshtransaction)<`ProcedureReturnValue`, `ReturnValue`\>\>

## Properties

### checkAuthorization

• **checkAuthorization**: (`opts?`: [`ProcedureOpts`](ProcedureOpts.md)) => `Promise`<[`ProcedureAuthorizationStatus`](ProcedureAuthorizationStatus.md)\>

#### Type declaration

▸ (`opts?`): `Promise`<[`ProcedureAuthorizationStatus`](ProcedureAuthorizationStatus.md)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`ProcedureOpts`](ProcedureOpts.md) |

##### Returns

`Promise`<[`ProcedureAuthorizationStatus`](ProcedureAuthorizationStatus.md)\>

#### Defined in

[types/index.ts:1509](https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/types/index.ts#L1509)
