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

[types/index.ts:1591](https://github.com/PolymeshAssociation/polymesh-sdk/blob/daafaa68f/src/types/index.ts#L1591)

___

### failed

• **failed**: [`Instruction`](../../../classes/API/Entities/Instruction/Instruction.md)[]

Instructions that failed in their execution (can be rescheduled).
  This group supersedes the other three, so for example, a failed Instruction
  might also belong in the `affirmed` group, but it will only be included in this one

#### Defined in

[types/index.ts:1601](https://github.com/PolymeshAssociation/polymesh-sdk/blob/daafaa68f/src/types/index.ts#L1601)

___

### pending

• **pending**: [`Instruction`](../../../classes/API/Entities/Instruction/Instruction.md)[]

Instructions that still need to be affirmed/rejected by the Identity

#### Defined in

[types/index.ts:1595](https://github.com/PolymeshAssociation/polymesh-sdk/blob/daafaa68f/src/types/index.ts#L1595)
