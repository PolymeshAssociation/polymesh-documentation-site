---
id: "InstructionLockedInfo"
title: "Interface: InstructionLockedInfo"
sidebar_label: "InstructionLockedInfo"
---

[api/entities/Instruction/types](../../../../../../modules/API/Entities/Instruction/Types/Types.md).InstructionLockedInfo

## Properties

### expiry

• **expiry**: ``null`` \| `BigNumber`

Time in milliseconds after which the instruction will no longer be locked for execution

#### Defined in

[api/entities/Instruction/types.ts:176](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/Instruction/types.ts#L176)

___

### isLocked

• **isLocked**: `boolean`

Whether the instruction is locked for execution

#### Defined in

[api/entities/Instruction/types.ts:168](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/Instruction/types.ts#L168)

___

### lockedAt

• **lockedAt**: ``null`` \| `Date`

The date and time when the instruction was locked for execution

#### Defined in

[api/entities/Instruction/types.ts:172](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/Instruction/types.ts#L172)

___

### unlocksAt

• **unlocksAt**: ``null`` \| `Date`

The date when the instruction will no longer be locked for execution

#### Defined in

[api/entities/Instruction/types.ts:180](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/Instruction/types.ts#L180)
