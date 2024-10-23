---
id: "Types"
title: "Module: Instruction Types"
sidebar_label: "Types"
---

## Enumerations

- [AffirmationStatus](../../../../../enums/API/Entities/Instruction/Types/AffirmationStatus/AffirmationStatus.md)
- [InstructionStatus](../../../../../enums/API/Entities/Instruction/Types/InstructionStatus/InstructionStatus.md)
- [InstructionType](../../../../../enums/API/Entities/Instruction/Types/InstructionType/InstructionType.md)

## Interfaces

- [FungibleLeg](../../../../../interfaces/API/Entities/Instruction/Types/FungibleLeg/FungibleLeg.md)
- [GroupedInstructions](../../../../../interfaces/API/Entities/Instruction/Types/GroupedInstructions/GroupedInstructions.md)
- [GroupedInvolvedInstructions](../../../../../interfaces/API/Entities/Instruction/Types/GroupedInvolvedInstructions/GroupedInvolvedInstructions.md)
- [InstructionAffirmation](../../../../../interfaces/API/Entities/Instruction/Types/InstructionAffirmation/InstructionAffirmation.md)
- [NftLeg](../../../../../interfaces/API/Entities/Instruction/Types/NftLeg/NftLeg.md)
- [OffChainAffirmation](../../../../../interfaces/API/Entities/Instruction/Types/OffChainAffirmation/OffChainAffirmation.md)
- [OffChainLeg](../../../../../interfaces/API/Entities/Instruction/Types/OffChainLeg/OffChainLeg.md)

## Type Aliases

### InstructionDetails

Ƭ **InstructionDetails**: \{ `createdAt`: `Date` ; `memo`: `string` \| ``null`` ; `status`: [`InstructionStatus`](../../../../../enums/API/Entities/Instruction/Types/InstructionStatus/InstructionStatus.md) ; `tradeDate`: `Date` \| ``null`` ; `valueDate`: `Date` \| ``null`` ; `venue`: [`Venue`](../../../../../classes/API/Entities/Venue/Venue.md)  } & [`InstructionEndCondition`](Types.md#instructionendcondition)

#### Defined in

[api/entities/Instruction/types.ts:40](https://github.com/PolymeshAssociation/polymesh-sdk/blob/88db4a911/src/api/entities/Instruction/types.ts#L40)

___

### InstructionEndCondition

Ƭ **InstructionEndCondition**: \{ `type`: [`SettleOnAffirmation`](../../../../../enums/API/Entities/Instruction/Types/InstructionType/InstructionType.md#settleonaffirmation)  } \| \{ `endBlock`: `BigNumber` ; `type`: [`SettleOnBlock`](../../../../../enums/API/Entities/Instruction/Types/InstructionType/InstructionType.md#settleonblock)  } \| \{ `endAfterBlock`: `BigNumber` ; `type`: [`SettleManual`](../../../../../enums/API/Entities/Instruction/Types/InstructionType/InstructionType.md#settlemanual)  }

#### Defined in

[api/entities/Instruction/types.ts:27](https://github.com/PolymeshAssociation/polymesh-sdk/blob/88db4a911/src/api/entities/Instruction/types.ts#L27)

___

### InstructionStatusResult

Ƭ **InstructionStatusResult**: \{ `status`: [`Pending`](../../../../../enums/API/Entities/Instruction/Types/InstructionStatus/InstructionStatus.md#pending)  } \| \{ `eventIdentifier`: [`EventIdentifier`](../../../../../interfaces/API/Client/Types/EventIdentifier/EventIdentifier.md) ; `status`: `Exclude`\<[`InstructionStatus`](../../../../../enums/API/Entities/Instruction/Types/InstructionStatus/InstructionStatus.md), [`Pending`](../../../../../enums/API/Entities/Instruction/Types/InstructionStatus/InstructionStatus.md#pending)\>  }

#### Defined in

[api/entities/Instruction/types.ts:94](https://github.com/PolymeshAssociation/polymesh-sdk/blob/88db4a911/src/api/entities/Instruction/types.ts#L94)

___

### InstructionsByStatus

Ƭ **InstructionsByStatus**: [`GroupedInstructions`](../../../../../interfaces/API/Entities/Instruction/Types/GroupedInstructions/GroupedInstructions.md) & \{ `partiallyAffirmed`: [`Instruction`](../../../../../classes/API/Entities/Instruction/Instruction.md)[]  }

#### Defined in

[api/entities/Instruction/types.ts:129](https://github.com/PolymeshAssociation/polymesh-sdk/blob/88db4a911/src/api/entities/Instruction/types.ts#L129)

___

### Leg

Ƭ **Leg**: [`FungibleLeg`](../../../../../interfaces/API/Entities/Instruction/Types/FungibleLeg/FungibleLeg.md) \| [`NftLeg`](../../../../../interfaces/API/Entities/Instruction/Types/NftLeg/NftLeg.md) \| [`OffChainLeg`](../../../../../interfaces/API/Entities/Instruction/Types/OffChainLeg/OffChainLeg.md)

#### Defined in

[api/entities/Instruction/types.ts:76](https://github.com/PolymeshAssociation/polymesh-sdk/blob/88db4a911/src/api/entities/Instruction/types.ts#L76)

___

### MediatorAffirmation

Ƭ **MediatorAffirmation**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `expiry?` | `Date` | Affirmations may have an expiration time |
| `identity` | [`Identity`](../../../../../classes/API/Entities/Identity/Identity.md) | - |
| `status` | [`AffirmationStatus`](../../../../../enums/API/Entities/Instruction/Types/AffirmationStatus/AffirmationStatus.md) | - |

#### Defined in

[api/entities/Instruction/types.ts:103](https://github.com/PolymeshAssociation/polymesh-sdk/blob/88db4a911/src/api/entities/Instruction/types.ts#L103)
