## Enumerations

- [VenueType](../../../../Enums/API/Entities/Venue/Types/VenueType.md)

## Interfaces

- [VenueDetails](../../../../Interfaces/API/Entities/Venue/Types/VenueDetails.md)

## Type Aliases

### HistoricInstruction

Ƭ **HistoricInstruction**: `Omit`<[`InstructionDetails`](../Instruction/Types.md#instructiondetails), ``"status"`` \| ``"venue"``\> & { `blockHash`: `string` ; `blockNumber`: `BigNumber` ; `id`: `BigNumber` ; `legs`: [`Leg`](../../../../Interfaces/API/Entities/Instruction/Types/Leg.md)[] ; `status`: [`InstructionStatusEnum`](../../../../Enums/Types/InstructionStatusEnum.md) ; `venueId`: `BigNumber`  }

#### Defined in

[api/entities/Venue/types.ts:29](https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/api/entities/Venue/types.ts#L29)
