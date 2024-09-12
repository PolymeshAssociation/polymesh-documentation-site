---
id: "GroupedInstructions"
title: "Interface: GroupedInstructions"
sidebar_label: "GroupedInstructions"
---

[api/entities/Instruction/types](../../../../../../modules/API/Entities/Instruction/Types/Types.md).GroupedInstructions

## Properties

### affirmed

• **affirmed**: [`Instruction`](../../../../../../classes/API/Entities/Instruction/Instruction.md)[]

Instructions that have already been affirmed by the Identity

#### Defined in

[api/entities/Instruction/types.ts:116](https://github.com/PolymeshAssociation/polymesh-sdk/blob/978e4ded6/src/api/entities/Instruction/types.ts#L116)

___

### failed

• **failed**: [`Instruction`](../../../../../../classes/API/Entities/Instruction/Instruction.md)[]

Instructions that failed in their execution (can be rescheduled).
  This group supersedes the other three, so for example, a failed Instruction
  might also belong in the `affirmed` group, but it will only be included in this one

#### Defined in

[api/entities/Instruction/types.ts:126](https://github.com/PolymeshAssociation/polymesh-sdk/blob/978e4ded6/src/api/entities/Instruction/types.ts#L126)

___

### pending

• **pending**: [`Instruction`](../../../../../../classes/API/Entities/Instruction/Instruction.md)[]

Instructions that still need to be affirmed/rejected by the Identity

#### Defined in

[api/entities/Instruction/types.ts:120](https://github.com/PolymeshAssociation/polymesh-sdk/blob/978e4ded6/src/api/entities/Instruction/types.ts#L120)
