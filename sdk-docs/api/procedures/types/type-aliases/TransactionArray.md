# Type Alias: TransactionArray\<ReturnValues\>

> > **TransactionArray**\<`ReturnValues`\> = `{ [K in keyof ReturnValues]: GenericPolymeshTransaction<any, ReturnValues[K]> }`

# Type Alias: TransactionArray\

> **TransactionArray**\<`ReturnValues`\> = `{ [K in keyof ReturnValues]: GenericPolymeshTransaction<any, ReturnValues[K]> }`

Defined in: [src/api/procedures/types.ts:249](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/procedures/types.ts#L249)

## Type Parameters

Type Parameter

`ReturnValues` *extends* readonly \[`...unknown[]`\]
