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

[types/index.ts:1519](https://github.com/PolymeshAssociation/polymesh-sdk/blob/07a4c5b0/src/types/index.ts#L1519)

___

### failed

• **failed**: [`Instruction`](../../../classes/API/Entities/Instruction/Instruction.md)[]

Instructions that failed in their execution (can be rescheduled).
  This group supersedes the other three, so for example, a failed Instruction
  might also belong in the `affirmed` group, but it will only be included in this one

#### Defined in

[types/index.ts:1529](https://github.com/PolymeshAssociation/polymesh-sdk/blob/07a4c5b0/src/types/index.ts#L1529)

___

### pending

• **pending**: [`Instruction`](../../../classes/API/Entities/Instruction/Instruction.md)[]

Instructions that still need to be affirmed/rejected by the Identity

#### Defined in

[types/index.ts:1523](https://github.com/PolymeshAssociation/polymesh-sdk/blob/07a4c5b0/src/types/index.ts#L1523)
