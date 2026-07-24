# Interface: OptionalArgsProcedureMethod()\<MethodArgs, ProcedureReturnValue, ReturnValue\>

> Defined in: [src/api/procedures/types.ts:208](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L208)

# Interface: OptionalArgsProcedureMethod()\

Defined in: [src/api/procedures/types.ts:208](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L208)

## Type Parameters

Type Parameter
Default type

`MethodArgs`

&hyphen;

`ProcedureReturnValue`

&hyphen;

`ReturnValue`

`ProcedureReturnValue`

> **OptionalArgsProcedureMethod**(`args?`: `MethodArgs`, `opts?`: [`ProcedureOpts`](ProcedureOpts.mdx)): `Promise`\<[`GenericPolymeshTransaction`](../type-aliases/GenericPolymeshTransaction.mdx)\<`ProcedureReturnValue`, `ReturnValue`\>\>

Defined in: [src/api/procedures/types.ts:213](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L213)

## Parameters

Parameter
Type

`args?`

`MethodArgs`

`opts?`

[`ProcedureOpts`](ProcedureOpts.mdx)

## Returns

`Promise`\<[`GenericPolymeshTransaction`](../type-aliases/GenericPolymeshTransaction.mdx)\<`ProcedureReturnValue`, `ReturnValue`\>\>

## Properties

### checkAuthorization

> **checkAuthorization**: (`args?`: `MethodArgs`, `opts?`: [`ProcedureOpts`](ProcedureOpts.mdx)) => `Promise`\<[`ProcedureAuthorizationStatus`](ProcedureAuthorizationStatus.mdx)\>

Defined in: [src/api/procedures/types.ts:216](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L216)

#### Parameters

Parameter
Type

`args?`

`MethodArgs`

`opts?`

[`ProcedureOpts`](ProcedureOpts.mdx)

#### Returns

`Promise`\<[`ProcedureAuthorizationStatus`](ProcedureAuthorizationStatus.mdx)\>
