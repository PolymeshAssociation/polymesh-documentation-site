# Type Alias: Ensured\<T, K\>

> > **Ensured**\<`T`, `K`\> = `Required`\<`Pick`\<`T`, `K`\>\> & `{ [SubKey in K]: NonNullable<T[SubKey]> }`

# Type Alias: Ensured\

> **Ensured**\<`T`, `K`\> = `Required`\<`Pick`\<`T`, `K`\>\> & `{ [SubKey in K]: NonNullable<T[SubKey]> }`

Defined in: [src/types/utils/index.ts:87](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/types/utils/index.ts#L87)

Pick a single property from T and ensure it is defined

## Type Parameters

Type Parameter

`T`

`K` *extends* keyof `T`
