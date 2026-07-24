# Type Alias: WithRequired\<T, K\>

> > **WithRequired**\<`T`, `K`\> = `T` & `{ [P in K]-?: T[P] }`

# Type Alias: WithRequired\

> **WithRequired**\<`T`, `K`\> = `T` & `{ [P in K]-?: T[P] }`

Defined in: [src/types/utils/index.ts:82](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/types/utils/index.ts#L82)

Ensure a specific property of T is defined

## Type Parameters

Type Parameter

`T`

`K` *extends* keyof `T`
