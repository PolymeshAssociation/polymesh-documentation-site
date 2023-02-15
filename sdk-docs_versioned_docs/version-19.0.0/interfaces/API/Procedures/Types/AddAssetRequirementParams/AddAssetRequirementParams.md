---
id: "AddAssetRequirementParams"
title: "Interface: AddAssetRequirementParams"
sidebar_label: "AddAssetRequirementParams"
---

[api/procedures/types](../../../../../modules/API/Procedures/Types/Types.md).AddAssetRequirementParams

## Properties

### conditions

• **conditions**: [`InputCondition`](../../../../../modules/Types/Types.md#inputcondition)[]

array of conditions that form the requirement that must be added.
  Conditions within a requirement are *AND* between them. This means that in order
  for a transfer to comply with this requirement, it must fulfill *ALL* conditions

#### Defined in

[api/procedures/types.ts:588](https://github.com/PolymeshAssociation/polymesh-sdk/blob/5a778578/src/api/procedures/types.ts#L588)
