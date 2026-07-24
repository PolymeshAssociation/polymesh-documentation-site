# Interface: GroupedInstructions

> Defined in: [src/api/entities/Instruction/types.ts:136](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Instruction/types.ts#L136)

# Interface: GroupedInstructions

Defined in: [src/api/entities/Instruction/types.ts:136](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Instruction/types.ts#L136)

## Properties

### affirmed

> **affirmed**: [`Instruction`](../../classes/Instruction.mdx)[]

Defined in: [src/api/entities/Instruction/types.ts:140](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Instruction/types.ts#L140)

Instructions that have already been affirmed by the Identity

***

### failed

> **failed**: [`Instruction`](../../classes/Instruction.mdx)[]

Defined in: [src/api/entities/Instruction/types.ts:150](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Instruction/types.ts#L150)

Instructions that failed in their execution (can be rescheduled).
  This group supersedes the other three, so for example, a failed Instruction
  might also belong in the `affirmed` group, but it will only be included in this one

***

### pending

> **pending**: [`Instruction`](../../classes/Instruction.mdx)[]

Defined in: [src/api/entities/Instruction/types.ts:144](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Instruction/types.ts#L144)

Instructions that still need to be affirmed/rejected by the Identity
