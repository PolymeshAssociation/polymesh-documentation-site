# Interface: ModifyMultiSigParams

> Defined in: [src/api/procedures/types.ts:1885](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L1885)

# Interface: ModifyMultiSigParams

Defined in: [src/api/procedures/types.ts:1885](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L1885)

## Properties

### multiSig

> **multiSig**: [`MultiSig`](../../../entities/Account/MultiSig/classes/MultiSig.mdx)

Defined in: [src/api/procedures/types.ts:1889](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L1889)

The MultiSig to be modified

***

### requiredSignatures?

> `optional` **requiredSignatures?**: `BigNumber`

Defined in: [src/api/procedures/types.ts:1897](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L1897)

The required number of signatures for the MultiSig

***

### signers?

> `optional` **signers?**: [`Account`](../../../entities/Account/classes/Account.mdx)[]

Defined in: [src/api/procedures/types.ts:1893](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L1893)

The signer accounts to set for the MultiSig
