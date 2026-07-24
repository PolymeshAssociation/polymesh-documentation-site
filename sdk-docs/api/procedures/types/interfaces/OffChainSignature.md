# Interface: OffChainSignature

> Defined in: [src/api/procedures/types.ts:1186](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L1186)

# Interface: OffChainSignature

Defined in: [src/api/procedures/types.ts:1186](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L1186)

## Properties

### type

> **type**: [`SignerKeyRingType`](../enumerations/SignerKeyRingType.mdx)

Defined in: [src/api/procedures/types.ts:1187](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L1187)

***

### value

> **value**: `` `0x${string}` ``

Defined in: [src/api/procedures/types.ts:1192](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L1192)

The off chain signature value.
NOTE: The off chain payload should be wrapped with bytes before signing. For e.g. `<Bytes>Off chain payload</Bytes>` should be signed to get the signature value
