# Type Alias: InstructionDetails

> > **InstructionDetails** = `object` & [`InstructionEndCondition`](InstructionEndCondition.mdx)

# Type Alias: InstructionDetails

> **InstructionDetails** = `object` & [`InstructionEndCondition`](InstructionEndCondition.mdx)

Defined in: [src/api/entities/Instruction/types.ts:45](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Instruction/types.ts#L45)

## Type Declaration

Name
Type
Description
Defined in

`createdAt`

`Date` \| `null`

Date at which the instruction was created

**Note**

From 7.x chain, this value becomes null when instruction has been executed.

[src/api/entities/Instruction/types.ts:51](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Instruction/types.ts#L51)

`memo`

`string` \| `null`

&hyphen;

[src/api/entities/Instruction/types.ts:65](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Instruction/types.ts#L65)

`status`

[`InstructionStatus`](../enumerations/InstructionStatus.mdx)

&hyphen;

[src/api/entities/Instruction/types.ts:46](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Instruction/types.ts#L46)

`tradeDate`

`Date` \| `null`

Date at which the trade was agreed upon (optional, for offchain trades)

[src/api/entities/Instruction/types.ts:55](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Instruction/types.ts#L55)

`valueDate`

`Date` \| `null`

Date at which the trade was executed (optional, for offchain trades)

[src/api/entities/Instruction/types.ts:59](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Instruction/types.ts#L59)

`venue`

[`Venue`](../../../Venue/classes/Venue.mdx) \| `null`

Venue to which the Instruction belongs to

**Note**

From 7.x chain, Instructions can be created without a Venue. Hence the possible null value.

[src/api/entities/Instruction/types.ts:64](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Instruction/types.ts#L64)
