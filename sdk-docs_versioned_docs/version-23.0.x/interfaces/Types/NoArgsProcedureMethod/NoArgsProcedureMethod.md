---
id: "NoArgsProcedureMethod"
title: "Interface: NoArgsProcedureMethod<ProcedureReturnValue, ReturnValue>"
sidebar_label: "NoArgsProcedureMethod"
---

[types](../../../modules/Types/Types.md).NoArgsProcedureMethod

## Type parameters

| Name | Type |
| :------ | :------ |
| `ProcedureReturnValue` | `ProcedureReturnValue` |
| `ReturnValue` | `ProcedureReturnValue` |

## Callable

### NoArgsProcedureMethod

▸ **NoArgsProcedureMethod**(`opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../modules/Types/Types.md#genericpolymeshtransaction)\<`ProcedureReturnValue`, `ReturnValue`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`ProcedureOpts`](../ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../modules/Types/Types.md#genericpolymeshtransaction)\<`ProcedureReturnValue`, `ReturnValue`\>\>

#### Defined in

[types/index.ts:1583](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2c78f6c34/src/types/index.ts#L1583)

## Properties

### checkAuthorization

• **checkAuthorization**: (`opts?`: [`ProcedureOpts`](../ProcedureOpts/ProcedureOpts.md)) => `Promise`\<[`ProcedureAuthorizationStatus`](../ProcedureAuthorizationStatus/ProcedureAuthorizationStatus.md)\>

#### Type declaration

▸ (`opts?`): `Promise`\<[`ProcedureAuthorizationStatus`](../ProcedureAuthorizationStatus/ProcedureAuthorizationStatus.md)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`ProcedureOpts`](../ProcedureOpts/ProcedureOpts.md) |

##### Returns

`Promise`\<[`ProcedureAuthorizationStatus`](../ProcedureAuthorizationStatus/ProcedureAuthorizationStatus.md)\>

#### Defined in

[types/index.ts:1584](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2c78f6c34/src/types/index.ts#L1584)
