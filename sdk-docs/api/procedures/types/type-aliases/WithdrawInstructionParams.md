# ~~Type Alias: WithdrawInstructionParams~~

> > **WithdrawInstructionParams** = `object`

# ~~Type Alias: WithdrawInstructionParams~~

> **WithdrawInstructionParams** = `object`

Defined in: [src/api/procedures/types.ts:1171](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L1171)

## Deprecated

withdrawing affirmation is no longer supported in chain v8

## Properties

Property
Type
Description
Defined in

 ~~`holders?`~~

[`AssetHolderLike`](../../../entities/types/type-aliases/AssetHolderLike.mdx)[]

(optional) Asset holders that the signer controls and wants to affirm the instruction or withdraw affirmation

**Note**

if empty, all the legs containing any custodied Asset Holders of the signer will be affirmed/affirmation will be withdrawn, based on the operation.

[src/api/procedures/types.ts:1177](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L1177)
