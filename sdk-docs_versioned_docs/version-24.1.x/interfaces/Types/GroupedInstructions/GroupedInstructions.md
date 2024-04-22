---
id: "GroupedInstructions"
title: "Interface: GroupedInstructions"
sidebar_label: "GroupedInstructions"
---

[types](../../../modules/Types/Types.md).GroupedInstructions

## Properties

### affirmed

• **affirmed**: [`Instruction`](../../../classes/API/Entities/Instruction/Instruction.md)[]

Instructions that have already been affirmed by the Identity

#### Defined in

[types/index.ts:1593](https://github.com/PolymeshAssociation/polymesh-sdk/blob/968f8d70c/src/types/index.ts#L1593)

___

### failed

• **failed**: [`Instruction`](../../../classes/API/Entities/Instruction/Instruction.md)[]

Instructions that failed in their execution (can be rescheduled).
  This group supersedes the other three, so for example, a failed Instruction
  might also belong in the `affirmed` group, but it will only be included in this one

#### Defined in

[types/index.ts:1603](https://github.com/PolymeshAssociation/polymesh-sdk/blob/968f8d70c/src/types/index.ts#L1603)

___

### pending

• **pending**: [`Instruction`](../../../classes/API/Entities/Instruction/Instruction.md)[]

Instructions that still need to be affirmed/rejected by the Identity

#### Defined in

[types/index.ts:1597](https://github.com/PolymeshAssociation/polymesh-sdk/blob/968f8d70c/src/types/index.ts#L1597)
