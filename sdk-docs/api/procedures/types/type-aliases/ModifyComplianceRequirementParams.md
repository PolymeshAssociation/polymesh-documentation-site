# Type Alias: ModifyComplianceRequirementParams

> > **ModifyComplianceRequirementParams** = `object`

# Type Alias: ModifyComplianceRequirementParams

> **ModifyComplianceRequirementParams** = `object`

Defined in: [src/api/procedures/types.ts:1463](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L1463)

## Properties

Property
Type
Description
Defined in

 `conditions`

[`InputCondition`](../../../entities/types/type-aliases/InputCondition.mdx)[]

array of conditions to replace the existing array of conditions for the requirement (identified by `id`).
  Conditions within a requirement are *AND* between them. This means that in order
  for a transfer to comply with this requirement, it must fulfill *ALL* conditions

[src/api/procedures/types.ts:1473](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L1473)

 `id`

`BigNumber`

ID of the Compliance Requirement

[src/api/procedures/types.ts:1467](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L1467)
