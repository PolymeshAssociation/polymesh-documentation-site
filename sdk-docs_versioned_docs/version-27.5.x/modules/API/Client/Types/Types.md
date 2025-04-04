---
id: "Types"
title: "Module: Client Types"
sidebar_label: "Types"
---

## Enumerations

- [ErrorCode](../../../../enums/API/Client/Types/ErrorCode/ErrorCode.md)
- [InstructionStatusEnum](../../../../enums/API/Client/Types/InstructionStatusEnum/InstructionStatusEnum.md)

## Interfaces

- [EventIdentifier](../../../../interfaces/API/Client/Types/EventIdentifier/EventIdentifier.md)
- [ExtrinsicData](../../../../interfaces/API/Client/Types/ExtrinsicData/ExtrinsicData.md)
- [ExtrinsicDataWithFees](../../../../interfaces/API/Client/Types/ExtrinsicDataWithFees/ExtrinsicDataWithFees.md)
- [Fees](../../../../interfaces/API/Client/Types/Fees/Fees.md)
- [HistoricalInstructionFilters](../../../../interfaces/API/Client/Types/HistoricalInstructionFilters/HistoricalInstructionFilters.md)
- [MiddlewareConfig](../../../../interfaces/API/Client/Types/MiddlewareConfig/MiddlewareConfig.md)
- [MiddlewareMetadata](../../../../interfaces/API/Client/Types/MiddlewareMetadata/MiddlewareMetadata.md)
- [NetworkProperties](../../../../interfaces/API/Client/Types/NetworkProperties/NetworkProperties.md)
- [PolkadotConfig](../../../../interfaces/API/Client/Types/PolkadotConfig/PolkadotConfig.md)
- [ProtocolFees](../../../../interfaces/API/Client/Types/ProtocolFees/ProtocolFees.md)
- [StakingEraInfo](../../../../interfaces/API/Client/Types/StakingEraInfo/StakingEraInfo.md)
- [SubmissionDetails](../../../../interfaces/API/Client/Types/SubmissionDetails/SubmissionDetails.md)

## Type Aliases

### CustomClaimType

Ƭ **CustomClaimType**: `Object`

CustomClaimType

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `BigNumber` |
| `name` | `string` |

#### Defined in

[api/client/types.ts:207](https://github.com/PolymeshAssociation/polymesh-sdk/blob/49a0066c3/src/api/client/types.ts#L207)

___

### CustomClaimTypeWithDid

Ƭ **CustomClaimTypeWithDid**: [`CustomClaimType`](Types.md#customclaimtype) & \{ `did?`: `string`  }

CustomClaimType with DID that registered the CustomClaimType

#### Defined in

[api/client/types.ts:215](https://github.com/PolymeshAssociation/polymesh-sdk/blob/49a0066c3/src/api/client/types.ts#L215)
