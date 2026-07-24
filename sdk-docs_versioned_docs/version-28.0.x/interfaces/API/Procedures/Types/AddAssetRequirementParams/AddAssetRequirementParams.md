---
id: "AddAssetRequirementParams"
title: "Interface: AddAssetRequirementParams"
sidebar_label: "AddAssetRequirementParams"
---

[api/procedures/types](../../../../../modules/API/Procedures/Types/Types.md).AddAssetRequirementParams

## Properties

### conditions

• **conditions**: [`InputCondition`](../../../../../modules/API/Entities/Types/Types.md#inputcondition)[]

array of conditions that form the requirement that must be added.
  Conditions within a requirement are *AND* between them. This means that in order
  for a transfer to comply with this requirement, it must fulfill *ALL* conditions

#### Defined in

[api/procedures/types.ts:1256](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/procedures/types.ts#L1256)
