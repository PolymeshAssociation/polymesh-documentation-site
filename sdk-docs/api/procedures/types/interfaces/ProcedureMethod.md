# Interface: ProcedureMethod()\<MethodArgs, ProcedureReturnValue, ReturnValue\>

> Defined in: [src/api/procedures/types.ts:192](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/procedures/types.ts#L192)

# Interface: ProcedureMethod()\

Defined in: [src/api/procedures/types.ts:192](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/procedures/types.ts#L192)

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

Defined in: [src/api/procedures/types.ts:197](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/procedures/types.ts#L197)

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

Defined in: [src/api/procedures/types.ts:200](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/procedures/types.ts#L200)

#### Parameters

Parameter
Type

`args`

`MethodArgs`

`opts?`

[`ProcedureOpts`](ProcedureOpts.mdx)

#### Returns

`Promise`\<[`ProcedureAuthorizationStatus`](ProcedureAuthorizationStatus.mdx)\>
