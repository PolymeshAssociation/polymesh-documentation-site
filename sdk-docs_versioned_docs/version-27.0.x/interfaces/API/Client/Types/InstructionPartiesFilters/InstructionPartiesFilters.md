---
id: "InstructionPartiesFilters"
title: "Interface: InstructionPartiesFilters"
sidebar_label: "InstructionPartiesFilters"
---

[api/client/types](../../../../../modules/API/Client/Types/Types.md).InstructionPartiesFilters

Filters for instructions

## Properties

### asset

• `Optional` **asset**: `string` \| [`Asset`](../../../../../modules/API/Entities/Asset/Types/Types.md#asset)

The asset ID to filter by

#### Defined in

[api/client/types.ts:229](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9158669/src/api/client/types.ts#L229)

___

### identity

• `Optional` **identity**: `string` \| [`Identity`](../../../../../classes/API/Entities/Identity/Identity.md)

The DID of the identity to filter by

#### Defined in

[api/client/types.ts:225](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9158669/src/api/client/types.ts#L225)

___

### mediator

• `Optional` **mediator**: `string` \| [`Identity`](../../../../../classes/API/Entities/Identity/Identity.md)

The mediator did to filter by

#### Defined in

[api/client/types.ts:245](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9158669/src/api/client/types.ts#L245)

___

### party

• `Optional` **party**: `string` \| [`Identity`](../../../../../classes/API/Entities/Identity/Identity.md)

The party did to filter by

#### Defined in

[api/client/types.ts:249](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9158669/src/api/client/types.ts#L249)

___

### receiver

• `Optional` **receiver**: `string` \| [`Identity`](../../../../../classes/API/Entities/Identity/Identity.md)

The receiver did to filter by

#### Defined in

[api/client/types.ts:241](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9158669/src/api/client/types.ts#L241)

___

### sender

• `Optional` **sender**: `string` \| [`Identity`](../../../../../classes/API/Entities/Identity/Identity.md)

The sender did to filter by

#### Defined in

[api/client/types.ts:237](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9158669/src/api/client/types.ts#L237)

___

### size

• `Optional` **size**: `BigNumber`

The number of results to return

#### Defined in

[api/client/types.ts:253](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9158669/src/api/client/types.ts#L253)

___

### start

• `Optional` **start**: `BigNumber`

The number of results to skip

#### Defined in

[api/client/types.ts:257](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9158669/src/api/client/types.ts#L257)

___

### status

• `Optional` **status**: [`InstructionStatusEnum`](../../../../../enums/API/Client/Types/InstructionStatusEnum/InstructionStatusEnum.md)

The status to filter by

#### Defined in

[api/client/types.ts:233](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9158669/src/api/client/types.ts#L233)
