# Interface: InstructionLockedInfo

> Defined in: [src/api/entities/Instruction/types.ts:171](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Instruction/types.ts#L171)

# Interface: InstructionLockedInfo

Defined in: [src/api/entities/Instruction/types.ts:171](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Instruction/types.ts#L171)

## Properties

### expiry

> **expiry**: `BigNumber` \| `null`

Defined in: [src/api/entities/Instruction/types.ts:183](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Instruction/types.ts#L183)

Time in milliseconds after which the instruction will no longer be locked for execution

***

### isLocked

> **isLocked**: `boolean`

Defined in: [src/api/entities/Instruction/types.ts:175](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Instruction/types.ts#L175)

Whether the instruction is locked for execution

***

### lockedAt

> **lockedAt**: `Date` \| `null`

Defined in: [src/api/entities/Instruction/types.ts:179](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Instruction/types.ts#L179)

The date and time when the instruction was locked for execution

***

### unlocksAt

> **unlocksAt**: `Date` \| `null`

Defined in: [src/api/entities/Instruction/types.ts:187](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Instruction/types.ts#L187)

The date when the instruction will no longer be locked for execution
