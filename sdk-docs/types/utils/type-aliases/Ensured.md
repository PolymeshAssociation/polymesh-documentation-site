# Type Alias: Ensured\<T, K\>

> > **Ensured**\<`T`, `K`\> = `Required`\<`Pick`\<`T`, `K`\>\> & `{ [SubKey in K]: NonNullable<T[SubKey]> }`

# Type Alias: Ensured\

> **Ensured**\<`T`, `K`\> = `Required`\<`Pick`\<`T`, `K`\>\> & `{ [SubKey in K]: NonNullable<T[SubKey]> }`

Defined in: [src/types/utils/index.ts:87](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/types/utils/index.ts#L87)

Pick a single property from T and ensure it is defined

## Type Parameters

Type Parameter

`T`

`K` *extends* keyof `T`
