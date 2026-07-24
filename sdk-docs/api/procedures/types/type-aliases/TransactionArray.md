# Type Alias: TransactionArray\<ReturnValues\>

> > **TransactionArray**\<`ReturnValues`\> = `{ [K in keyof ReturnValues]: GenericPolymeshTransaction<any, ReturnValues[K]> }`

# Type Alias: TransactionArray\

> **TransactionArray**\<`ReturnValues`\> = `{ [K in keyof ReturnValues]: GenericPolymeshTransaction<any, ReturnValues[K]> }`

Defined in: [src/api/procedures/types.ts:251](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L251)

## Type Parameters

Type Parameter

`ReturnValues` *extends* readonly \[`...unknown[]`\]
