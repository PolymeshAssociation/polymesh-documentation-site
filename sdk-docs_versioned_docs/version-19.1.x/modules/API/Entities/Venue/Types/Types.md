---
id: "Types"
title: "Module: Venue Types"
sidebar_label: "Types"
---

## Enumerations

- [VenueType](../../../../../enums/API/Entities/Venue/Types/VenueType/VenueType.md)

## Interfaces

- [VenueDetails](../../../../../interfaces/API/Entities/Venue/Types/VenueDetails/VenueDetails.md)

## Type Aliases

### HistoricInstruction

Ƭ **HistoricInstruction**: `Omit`<[`InstructionDetails`](../../Instruction/Types/Types.md#instructiondetails), ``"status"`` \| ``"venue"``\> & { `blockHash`: `string` ; `blockNumber`: `BigNumber` ; `id`: `BigNumber` ; `legs`: [`Leg`](../../../../../interfaces/API/Entities/Instruction/Types/Leg/Leg.md)[] ; `status`: [`InstructionStatusEnum`](../../../../../enums/Types/InstructionStatusEnum/InstructionStatusEnum.md) ; `venueId`: `BigNumber`  }

#### Defined in

[api/entities/Venue/types.ts:29](https://github.com/PolymeshAssociation/polymesh-sdk/blob/31fdce23/src/api/entities/Venue/types.ts#L29)
