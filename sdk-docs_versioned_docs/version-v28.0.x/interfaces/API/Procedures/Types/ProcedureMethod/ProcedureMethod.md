---
id: "ProcedureMethod"
title: "Interface: ProcedureMethod<MethodArgs, ProcedureReturnValue, ReturnValue>"
sidebar_label: "ProcedureMethod"
---

[api/procedures/types](../../../../../modules/API/Procedures/Types/Types.md).ProcedureMethod

## Type parameters

| Name | Type |
| :------ | :------ |
| `MethodArgs` | `MethodArgs` |
| `ProcedureReturnValue` | `ProcedureReturnValue` |
| `ReturnValue` | `ProcedureReturnValue` |

## Callable

### ProcedureMethod

▸ **ProcedureMethod**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<`ProcedureReturnValue`, `ReturnValue`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `MethodArgs` |
| `opts?` | [`ProcedureOpts`](../ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<`ProcedureReturnValue`, `ReturnValue`\>\>

#### Defined in

[api/procedures/types.ts:195](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/procedures/types.ts#L195)

## Properties

### checkAuthorization

• **checkAuthorization**: (`args`: `MethodArgs`, `opts?`: [`ProcedureOpts`](../ProcedureOpts/ProcedureOpts.md)) => `Promise`\<[`ProcedureAuthorizationStatus`](../ProcedureAuthorizationStatus/ProcedureAuthorizationStatus.md)\>

#### Type declaration

▸ (`args`, `opts?`): `Promise`\<[`ProcedureAuthorizationStatus`](../ProcedureAuthorizationStatus/ProcedureAuthorizationStatus.md)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `MethodArgs` |
| `opts?` | [`ProcedureOpts`](../ProcedureOpts/ProcedureOpts.md) |

##### Returns

`Promise`\<[`ProcedureAuthorizationStatus`](../ProcedureAuthorizationStatus/ProcedureAuthorizationStatus.md)\>

#### Defined in

[api/procedures/types.ts:198](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/procedures/types.ts#L198)
