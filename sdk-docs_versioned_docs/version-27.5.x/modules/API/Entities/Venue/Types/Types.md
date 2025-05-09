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

Ƭ **HistoricInstruction**: `Omit`\<[`InstructionDetails`](../../Instruction/Types/Types.md#instructiondetails), ``"status"`` \| ``"venue"``\> & \{ `blockHash`: `string` ; `blockNumber`: `BigNumber` ; `id`: `BigNumber` ; `legs`: [`Leg`](../../Instruction/Types/Types.md#leg)[] ; `status`: [`InstructionStatusEnum`](../../../../../enums/API/Client/Types/InstructionStatusEnum/InstructionStatusEnum.md) ; `venueId?`: `BigNumber`  }

#### Defined in

[api/entities/Venue/types.ts:29](https://github.com/PolymeshAssociation/polymesh-sdk/blob/995f17653/src/api/entities/Venue/types.ts#L29)
