# Type Alias: AffirmInstructionParams

> > **AffirmInstructionParams** = `object`

# Type Alias: AffirmInstructionParams

> **AffirmInstructionParams** = `object`

Defined in: [src/api/procedures/types.ts:1184](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/procedures/types.ts#L1184)

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

[src/api/procedures/types.ts:1190](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/procedures/types.ts#L1190)

 `receipts?`

[`OffChainAffirmationReceipt`](../interfaces/OffChainAffirmationReceipt.mdx)[]

(optional) list of offchain receipts required for affirming offchain legs(if any) in the instruction

Receipt can be generated using [generateOffChainAffirmationReceipt](../../../entities/Instruction/classes/Instruction.mdx#generateoffchainaffirmationreceipt) method

[src/api/procedures/types.ts:1197](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/procedures/types.ts#L1197)
