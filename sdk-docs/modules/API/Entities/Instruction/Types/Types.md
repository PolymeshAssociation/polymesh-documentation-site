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

- [InstructionAffirmation](../../../../../interfaces/API/Entities/Instruction/Types/InstructionAffirmation/InstructionAffirmation.md)
- [Leg](../../../../../interfaces/API/Entities/Instruction/Types/Leg/Leg.md)

## Type Aliases

### InstructionDetails

Ƭ **InstructionDetails**: { `createdAt`: `Date` ; `memo`: `string` \| ``null`` ; `status`: [`InstructionStatus`](../../../../../enums/API/Entities/Instruction/Types/InstructionStatus/InstructionStatus.md) ; `tradeDate`: `Date` \| ``null`` ; `valueDate`: `Date` \| ``null`` ; `venue`: [`Venue`](../../../../../classes/API/Entities/Venue/Venue.md)  } & { `type`: [`SettleOnAffirmation`](../../../../../enums/API/Entities/Instruction/Types/InstructionType/InstructionType.md#settleonaffirmation)  } \| { `endBlock`: `BigNumber` ; `type`: [`SettleOnBlock`](../../../../../enums/API/Entities/Instruction/Types/InstructionType/InstructionType.md#settleonblock)  }

#### Defined in

[api/entities/Instruction/types.ts:17](https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/api/entities/Instruction/types.ts#L17)

___

### InstructionStatusResult

Ƭ **InstructionStatusResult**: { `status`: [`Pending`](../../../../../enums/API/Entities/Instruction/Types/InstructionStatus/InstructionStatus.md#pending)  } \| { `eventIdentifier`: [`EventIdentifier`](../../../../../interfaces/Types/EventIdentifier/EventIdentifier.md) ; `status`: `Exclude`<[`InstructionStatus`](../../../../../enums/API/Entities/Instruction/Types/InstructionStatus/InstructionStatus.md), [`Pending`](../../../../../enums/API/Entities/Instruction/Types/InstructionStatus/InstructionStatus.md#pending)\>  }

#### Defined in

[api/entities/Instruction/types.ts:58](https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/api/entities/Instruction/types.ts#L58)
