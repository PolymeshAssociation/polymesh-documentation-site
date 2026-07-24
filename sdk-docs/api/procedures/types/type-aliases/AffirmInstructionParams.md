# Type Alias: AffirmInstructionParams

> > **AffirmInstructionParams** = `object`

# Type Alias: AffirmInstructionParams

> **AffirmInstructionParams** = `object`

Defined in: [src/api/procedures/types.ts:1218](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L1218)

## Properties

Property
Type
Description
Defined in

 `holders?`

[`AssetHolderLike`](../../../entities/types/type-aliases/AssetHolderLike.mdx)[]

(optional) Asset holders that the signer controls and wants to affirm the instruction

**Note**

if empty, all the legs containing any custodied portfolios or accounts of of the signer will be affirmed

[src/api/procedures/types.ts:1224](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L1224)

 `receipts?`

[`OffChainAffirmationReceipt`](../interfaces/OffChainAffirmationReceipt.mdx)[]

(optional) list of offchain receipts required for affirming offchain legs(if any) in the instruction

Receipt can be generated using [generateOffChainAffirmationReceipt](../../../entities/Instruction/classes/Instruction.mdx#generateoffchainaffirmationreceipt) method

[src/api/procedures/types.ts:1231](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L1231)
