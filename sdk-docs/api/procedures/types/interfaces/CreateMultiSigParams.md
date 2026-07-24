# Interface: CreateMultiSigParams

> Defined in: [src/api/procedures/types.ts:1873](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L1873)

# Interface: CreateMultiSigParams

Defined in: [src/api/procedures/types.ts:1873](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L1873)

## Properties

### permissions?

> `optional` **permissions?**: [`PermissionsLike`](../../../entities/types/type-aliases/PermissionsLike.mdx)

Defined in: [src/api/procedures/types.ts:1882](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L1882)

Grants permissions to the MultiSig upon creation. The caller must be the primary key of the Identity for these to work

***

### requiredSignatures

> **requiredSignatures**: `BigNumber`

Defined in: [src/api/procedures/types.ts:1878](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L1878)

***

### signers

> **signers**: [`Signer`](../../../entities/types/type-aliases/Signer.mdx)[]

Defined in: [src/api/procedures/types.ts:1877](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L1877)

#### Note

Signer must be an Account as of v7
