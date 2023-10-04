---
id: "SetAssetRequirementsParams"
title: "Interface: SetAssetRequirementsParams"
sidebar_label: "SetAssetRequirementsParams"
---

[api/procedures/types](../../../../../modules/API/Procedures/Types/Types.md).SetAssetRequirementsParams

## Properties

### requirements

• **requirements**: [`InputCondition`](../../../../../modules/Types/Types.md#inputcondition)[][]

array of array of conditions. For a transfer to be successful, it must comply with all the conditions of at least one of the arrays.
  In other words, higher level arrays are *OR* between them, while conditions inside each array are *AND* between them

#### Defined in

[api/procedures/types.ts:715](https://github.com/PolymeshAssociation/polymesh-sdk/blob/d4e2c127f/src/api/procedures/types.ts#L715)
