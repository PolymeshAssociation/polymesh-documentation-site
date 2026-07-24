# Interface: AddAssetRequirementParams

> Defined in: [src/api/procedures/types.ts:1454](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L1454)

# Interface: AddAssetRequirementParams

Defined in: [src/api/procedures/types.ts:1454](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L1454)

## Properties

### conditions

> **conditions**: [`InputCondition`](../../../entities/types/type-aliases/InputCondition.mdx)[]

Defined in: [src/api/procedures/types.ts:1460](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L1460)

array of conditions that form the requirement that must be added.
  Conditions within a requirement are *AND* between them. This means that in order
  for a transfer to comply with this requirement, it must fulfill *ALL* conditions
