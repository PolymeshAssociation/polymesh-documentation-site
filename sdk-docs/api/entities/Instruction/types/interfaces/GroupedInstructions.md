# Interface: GroupedInstructions

> Defined in: [src/api/entities/Instruction/types.ts:155](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Instruction/types.ts#L155)

# Interface: GroupedInstructions

Defined in: [src/api/entities/Instruction/types.ts:155](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Instruction/types.ts#L155)

## Properties

### affirmed

> **affirmed**: [`Instruction`](../../classes/Instruction.mdx)[]

Defined in: [src/api/entities/Instruction/types.ts:159](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Instruction/types.ts#L159)

Instructions that have already been affirmed by the Identity

***

### failed

> **failed**: [`Instruction`](../../classes/Instruction.mdx)[]

Defined in: [src/api/entities/Instruction/types.ts:169](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Instruction/types.ts#L169)

Instructions that failed in their execution (can be rescheduled).
  This group supersedes the other three, so for example, a failed Instruction
  might also belong in the `affirmed` group, but it will only be included in this one

***

### pending

> **pending**: [`Instruction`](../../classes/Instruction.mdx)[]

Defined in: [src/api/entities/Instruction/types.ts:163](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Instruction/types.ts#L163)

Instructions that still need to be affirmed/rejected by the Identity
