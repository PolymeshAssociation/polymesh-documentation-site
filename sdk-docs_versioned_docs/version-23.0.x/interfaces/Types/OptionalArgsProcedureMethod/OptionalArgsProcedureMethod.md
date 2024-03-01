---
id: "OptionalArgsProcedureMethod"
title: "Interface: OptionalArgsProcedureMethod<MethodArgs, ProcedureReturnValue, ReturnValue>"
sidebar_label: "OptionalArgsProcedureMethod"
---

[types](../../../modules/Types/Types.md).OptionalArgsProcedureMethod

## Type parameters

| Name | Type |
| :------ | :------ |
| `MethodArgs` | `MethodArgs` |
| `ProcedureReturnValue` | `ProcedureReturnValue` |
| `ReturnValue` | `ProcedureReturnValue` |

## Callable

### OptionalArgsProcedureMethod

▸ **OptionalArgsProcedureMethod**(`args?`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../modules/Types/Types.md#genericpolymeshtransaction)\<`ProcedureReturnValue`, `ReturnValue`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `args?` | `MethodArgs` |
| `opts?` | [`ProcedureOpts`](../ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../modules/Types/Types.md#genericpolymeshtransaction)\<`ProcedureReturnValue`, `ReturnValue`\>\>

#### Defined in

[types/index.ts:1573](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2c78f6c34/src/types/index.ts#L1573)

## Properties

### checkAuthorization

• **checkAuthorization**: (`args?`: `MethodArgs`, `opts?`: [`ProcedureOpts`](../ProcedureOpts/ProcedureOpts.md)) => `Promise`\<[`ProcedureAuthorizationStatus`](../ProcedureAuthorizationStatus/ProcedureAuthorizationStatus.md)\>

#### Type declaration

▸ (`args?`, `opts?`): `Promise`\<[`ProcedureAuthorizationStatus`](../ProcedureAuthorizationStatus/ProcedureAuthorizationStatus.md)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `args?` | `MethodArgs` |
| `opts?` | [`ProcedureOpts`](../ProcedureOpts/ProcedureOpts.md) |

##### Returns

`Promise`\<[`ProcedureAuthorizationStatus`](../ProcedureAuthorizationStatus/ProcedureAuthorizationStatus.md)\>

#### Defined in

[types/index.ts:1576](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2c78f6c34/src/types/index.ts#L1576)
