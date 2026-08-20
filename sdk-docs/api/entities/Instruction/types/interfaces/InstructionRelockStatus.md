# Interface: InstructionRelockStatus

> Defined in: [src/api/entities/Instruction/types.ts:190](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Instruction/types.ts#L190)

# Interface: InstructionRelockStatus

Defined in: [src/api/entities/Instruction/types.ts:190](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Instruction/types.ts#L190)

## Properties

### cooldownEndsAt

> **cooldownEndsAt**: `Date` \| `null`

Defined in: [src/api/entities/Instruction/types.ts:206](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Instruction/types.ts#L206)

The date and time after which the instruction can be locked again, `null` if it has never been unlocked

***

### maxRelockCount

> **maxRelockCount**: `BigNumber`

Defined in: [src/api/entities/Instruction/types.ts:202](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Instruction/types.ts#L202)

The maximum number of times the instruction can be relocked

***

### relockCount

> **relockCount**: `BigNumber`

Defined in: [src/api/entities/Instruction/types.ts:198](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Instruction/types.ts#L198)

The number of times the instruction has been relocked

***

### unlockedAt

> **unlockedAt**: `Date` \| `null`

Defined in: [src/api/entities/Instruction/types.ts:194](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Instruction/types.ts#L194)

The date and time when the instruction was last unlocked by a mediator, `null` if it has never been unlocked
