[types](../../Modules/Types/Types.md).GroupedInstructions

## Properties

### affirmed

• **affirmed**: [`Instruction`](../../Classes/API/Entities/Instruction/Instruction.md)[]

Instructions that have already been affirmed by the Identity

#### Defined in

[types/index.ts:1516](https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/types/index.ts#L1516)

___

### failed

• **failed**: [`Instruction`](../../Classes/API/Entities/Instruction/Instruction.md)[]

Instructions that failed in their execution (can be rescheduled).
  This group supersedes the other three, so for example, a failed Instruction
  might also belong in the `affirmed` group, but it will only be included in this one

#### Defined in

[types/index.ts:1526](https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/types/index.ts#L1526)

___

### pending

• **pending**: [`Instruction`](../../Classes/API/Entities/Instruction/Instruction.md)[]

Instructions that still need to be affirmed/rejected by the Identity

#### Defined in

[types/index.ts:1520](https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/types/index.ts#L1520)
