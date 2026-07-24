# Type Alias: MapTxData\<ArgsArray\>

> > **MapTxData**\<`ArgsArray`\> = `{ [K in keyof ArgsArray]: ArgsArray[K] extends unknown[] ? TxData<ArgsArray[K]> : never }`

# Type Alias: MapTxData\

> **MapTxData**\<`ArgsArray`\> = `{ [K in keyof ArgsArray]: ArgsArray[K] extends unknown[] ? TxData<ArgsArray[K]> : never }`

Defined in: [src/base/types.ts:16](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/base/types.ts#L16)

Apply the [TxData](../../../api/procedures/types/interfaces/TxData.mdx) type to all args in an array

## Type Parameters

Type Parameter

`ArgsArray` *extends* `unknown`[][]
