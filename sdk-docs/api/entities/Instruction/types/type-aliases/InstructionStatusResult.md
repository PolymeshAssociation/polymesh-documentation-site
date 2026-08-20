# Type Alias: InstructionStatusResult

> > **InstructionStatusResult** = \{ `status`: [`Pending`](../enumerations/InstructionStatus.mdx#pending); \} \| \{ `eventIdentifier`: [`EventIdentifier`](../../../../client/types/interfaces/EventIdentifier.mdx); `status`: `Exclude`\<[`InstructionStatus`](../enumerations/InstructionStatus.mdx), [`Pending`](../enumerations/InstructionStatus.mdx#pending)\>; \}

# Type Alias: InstructionStatusResult

> **InstructionStatusResult** = \{ `status`: [`Pending`](../enumerations/InstructionStatus.mdx#pending); \} \| \{ `eventIdentifier`: [`EventIdentifier`](../../../../client/types/interfaces/EventIdentifier.mdx); `status`: `Exclude`\<[`InstructionStatus`](../enumerations/InstructionStatus.mdx), [`Pending`](../enumerations/InstructionStatus.mdx#pending)\>; \}

Defined in: [src/api/entities/Instruction/types.ts:137](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Instruction/types.ts#L137)
