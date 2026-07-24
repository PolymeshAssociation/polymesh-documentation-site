# Interface: NoArgsProcedureMethod()\<ProcedureReturnValue, ReturnValue\>

> Defined in: [src/api/procedures/types.ts:222](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L222)

# Interface: NoArgsProcedureMethod()\

Defined in: [src/api/procedures/types.ts:222](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L222)

## Type Parameters

Type Parameter
Default type

`ProcedureReturnValue`

&hyphen;

`ReturnValue`

`ProcedureReturnValue`

> **NoArgsProcedureMethod**(`opts?`: [`ProcedureOpts`](ProcedureOpts.mdx)): `Promise`\<[`GenericPolymeshTransaction`](../type-aliases/GenericPolymeshTransaction.mdx)\<`ProcedureReturnValue`, `ReturnValue`\>\>

Defined in: [src/api/procedures/types.ts:223](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L223)

## Parameters

Parameter
Type

`opts?`

[`ProcedureOpts`](ProcedureOpts.mdx)

## Returns

`Promise`\<[`GenericPolymeshTransaction`](../type-aliases/GenericPolymeshTransaction.mdx)\<`ProcedureReturnValue`, `ReturnValue`\>\>

## Properties

### checkAuthorization

> **checkAuthorization**: (`opts?`: [`ProcedureOpts`](ProcedureOpts.mdx)) => `Promise`\<[`ProcedureAuthorizationStatus`](ProcedureAuthorizationStatus.mdx)\>

Defined in: [src/api/procedures/types.ts:224](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L224)

#### Parameters

Parameter
Type

`opts?`

[`ProcedureOpts`](ProcedureOpts.mdx)

#### Returns

`Promise`\<[`ProcedureAuthorizationStatus`](ProcedureAuthorizationStatus.mdx)\>
