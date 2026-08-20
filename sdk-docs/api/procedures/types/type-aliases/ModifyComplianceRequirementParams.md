# Type Alias: ModifyComplianceRequirementParams

> > **ModifyComplianceRequirementParams** = `object`

# Type Alias: ModifyComplianceRequirementParams

> **ModifyComplianceRequirementParams** = `object`

Defined in: [src/api/procedures/types.ts:1404](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/procedures/types.ts#L1404)

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

[src/api/procedures/types.ts:1414](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/procedures/types.ts#L1414)

 `id`

`BigNumber`

ID of the Compliance Requirement

[src/api/procedures/types.ts:1408](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/procedures/types.ts#L1408)
