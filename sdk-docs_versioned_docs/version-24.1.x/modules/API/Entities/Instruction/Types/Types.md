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
- [InstructionAffirmation](../../../../../interfaces/API/Entities/Instruction/Types/InstructionAffirmation/InstructionAffirmation.md)
- [NftLeg](../../../../../interfaces/API/Entities/Instruction/Types/NftLeg/NftLeg.md)

## Type Aliases

### InstructionDetails

Ƭ **InstructionDetails**: \{ `createdAt`: `Date` ; `memo`: `string` \| ``null`` ; `status`: [`InstructionStatus`](../../../../../enums/API/Entities/Instruction/Types/InstructionStatus/InstructionStatus.md) ; `tradeDate`: `Date` \| ``null`` ; `valueDate`: `Date` \| ``null`` ; `venue`: [`Venue`](../../../../../classes/API/Entities/Venue/Venue.md)  } & [`InstructionEndCondition`](Types.md#instructionendcondition)

#### Defined in

[api/entities/Instruction/types.ts:39](https://github.com/PolymeshAssociation/polymesh-sdk/blob/968f8d70c/src/api/entities/Instruction/types.ts#L39)

___

### InstructionEndCondition

Ƭ **InstructionEndCondition**: \{ `type`: [`SettleOnAffirmation`](../../../../../enums/API/Entities/Instruction/Types/InstructionType/InstructionType.md#settleonaffirmation)  } \| \{ `endBlock`: `BigNumber` ; `type`: [`SettleOnBlock`](../../../../../enums/API/Entities/Instruction/Types/InstructionType/InstructionType.md#settleonblock)  } \| \{ `endAfterBlock`: `BigNumber` ; `type`: [`SettleManual`](../../../../../enums/API/Entities/Instruction/Types/InstructionType/InstructionType.md#settlemanual)  }

#### Defined in

[api/entities/Instruction/types.ts:26](https://github.com/PolymeshAssociation/polymesh-sdk/blob/968f8d70c/src/api/entities/Instruction/types.ts#L26)

___

### InstructionStatusResult

Ƭ **InstructionStatusResult**: \{ `status`: [`Pending`](../../../../../enums/API/Entities/Instruction/Types/InstructionStatus/InstructionStatus.md#pending)  } \| \{ `eventIdentifier`: [`EventIdentifier`](../../../../../interfaces/Types/EventIdentifier/EventIdentifier.md) ; `status`: `Exclude`\<[`InstructionStatus`](../../../../../enums/API/Entities/Instruction/Types/InstructionStatus/InstructionStatus.md), [`Pending`](../../../../../enums/API/Entities/Instruction/Types/InstructionStatus/InstructionStatus.md#pending)\>  }

#### Defined in

[api/entities/Instruction/types.ts:81](https://github.com/PolymeshAssociation/polymesh-sdk/blob/968f8d70c/src/api/entities/Instruction/types.ts#L81)

___

### Leg

Ƭ **Leg**: [`FungibleLeg`](../../../../../interfaces/API/Entities/Instruction/Types/FungibleLeg/FungibleLeg.md) \| [`NftLeg`](../../../../../interfaces/API/Entities/Instruction/Types/NftLeg/NftLeg.md)

#### Defined in

[api/entities/Instruction/types.ts:68](https://github.com/PolymeshAssociation/polymesh-sdk/blob/968f8d70c/src/api/entities/Instruction/types.ts#L68)

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

[api/entities/Instruction/types.ts:90](https://github.com/PolymeshAssociation/polymesh-sdk/blob/968f8d70c/src/api/entities/Instruction/types.ts#L90)
