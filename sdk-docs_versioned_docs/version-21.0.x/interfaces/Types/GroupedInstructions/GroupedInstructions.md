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

[types/index.ts:1563](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/types/index.ts#L1563)

___

### failed

• **failed**: [`Instruction`](../../../classes/API/Entities/Instruction/Instruction.md)[]

Instructions that failed in their execution (can be rescheduled).
  This group supersedes the other three, so for example, a failed Instruction
  might also belong in the `affirmed` group, but it will only be included in this one

#### Defined in

[types/index.ts:1573](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/types/index.ts#L1573)

___

### pending

• **pending**: [`Instruction`](../../../classes/API/Entities/Instruction/Instruction.md)[]

Instructions that still need to be affirmed/rejected by the Identity

#### Defined in

[types/index.ts:1567](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/types/index.ts#L1567)
