# Interface: OptionalArgsProcedureMethod()\<MethodArgs, ProcedureReturnValue, ReturnValue\>

> Defined in: [src/api/procedures/types.ts:206](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/procedures/types.ts#L206)

# Interface: OptionalArgsProcedureMethod()\

Defined in: [src/api/procedures/types.ts:206](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/procedures/types.ts#L206)

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

Defined in: [src/api/procedures/types.ts:211](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/procedures/types.ts#L211)

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

Defined in: [src/api/procedures/types.ts:214](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/procedures/types.ts#L214)

#### Parameters

Parameter
Type

`args?`

`MethodArgs`

`opts?`

[`ProcedureOpts`](ProcedureOpts.mdx)

#### Returns

`Promise`\<[`ProcedureAuthorizationStatus`](ProcedureAuthorizationStatus.mdx)\>
