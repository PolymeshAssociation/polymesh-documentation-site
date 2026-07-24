# Interface: ProcedureMethod()\<MethodArgs, ProcedureReturnValue, ReturnValue\>

> Defined in: [src/api/procedures/types.ts:194](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L194)

# Interface: ProcedureMethod()\

Defined in: [src/api/procedures/types.ts:194](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L194)

## Type Parameters

Type Parameter
Default type

`MethodArgs`

&hyphen;

`ProcedureReturnValue`

&hyphen;

`ReturnValue`

`ProcedureReturnValue`

> **ProcedureMethod**(`args`: `MethodArgs`, `opts?`: [`ProcedureOpts`](ProcedureOpts.mdx)): `Promise`\<[`GenericPolymeshTransaction`](../type-aliases/GenericPolymeshTransaction.mdx)\<`ProcedureReturnValue`, `ReturnValue`\>\>

Defined in: [src/api/procedures/types.ts:199](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L199)

## Parameters

Parameter
Type

`args`

`MethodArgs`

`opts?`

[`ProcedureOpts`](ProcedureOpts.mdx)

## Returns

`Promise`\<[`GenericPolymeshTransaction`](../type-aliases/GenericPolymeshTransaction.mdx)\<`ProcedureReturnValue`, `ReturnValue`\>\>

## Properties

### checkAuthorization

> **checkAuthorization**: (`args`: `MethodArgs`, `opts?`: [`ProcedureOpts`](ProcedureOpts.mdx)) => `Promise`\<[`ProcedureAuthorizationStatus`](ProcedureAuthorizationStatus.mdx)\>

Defined in: [src/api/procedures/types.ts:202](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L202)

#### Parameters

Parameter
Type

`args`

`MethodArgs`

`opts?`

[`ProcedureOpts`](ProcedureOpts.mdx)

#### Returns

`Promise`\<[`ProcedureAuthorizationStatus`](ProcedureAuthorizationStatus.mdx)\>
