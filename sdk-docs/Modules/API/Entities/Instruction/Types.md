## Enumerations

- [AffirmationStatus](../../../../Enums/API/Entities/Instruction/Types/AffirmationStatus.md)
- [InstructionStatus](../../../../Enums/API/Entities/Instruction/Types/InstructionStatus.md)
- [InstructionType](../../../../Enums/API/Entities/Instruction/Types/InstructionType.md)

## Interfaces

- [InstructionAffirmation](../../../../Interfaces/API/Entities/Instruction/Types/InstructionAffirmation.md)
- [Leg](../../../../Interfaces/API/Entities/Instruction/Types/Leg.md)

## Type Aliases

### InstructionDetails

Ƭ **InstructionDetails**: { `createdAt`: `Date` ; `memo`: `string` \| ``null`` ; `status`: [`InstructionStatus`](../../../../Enums/API/Entities/Instruction/Types/InstructionStatus.md) ; `tradeDate`: `Date` \| ``null`` ; `valueDate`: `Date` \| ``null`` ; `venue`: [`Venue`](../../../../Classes/API/Entities/Venue/Venue.md)  } & { `type`: [`SettleOnAffirmation`](../../../../Enums/API/Entities/Instruction/Types/InstructionType.md#settleonaffirmation)  } \| { `endBlock`: `BigNumber` ; `type`: [`SettleOnBlock`](../../../../Enums/API/Entities/Instruction/Types/InstructionType.md#settleonblock)  }

#### Defined in

[api/entities/Instruction/types.ts:17](https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/api/entities/Instruction/types.ts#L17)

___

### InstructionStatusResult

Ƭ **InstructionStatusResult**: { `status`: [`Pending`](../../../../Enums/API/Entities/Instruction/Types/InstructionStatus.md#pending)  } \| { `eventIdentifier`: [`EventIdentifier`](../../../../Interfaces/Types/EventIdentifier.md) ; `status`: `Exclude`<[`InstructionStatus`](../../../../Enums/API/Entities/Instruction/Types/InstructionStatus.md), [`Pending`](../../../../Enums/API/Entities/Instruction/Types/InstructionStatus.md#pending)\>  }

#### Defined in

[api/entities/Instruction/types.ts:58](https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/api/entities/Instruction/types.ts#L58)
