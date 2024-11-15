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

[api/client/types.ts:228](https://github.com/PolymeshAssociation/polymesh-sdk/blob/3cc570ade/src/api/client/types.ts#L228)

___

### identity

• `Optional` **identity**: `string` \| [`Identity`](../../../../../classes/API/Entities/Identity/Identity.md)

The DID of the identity to filter by

#### Defined in

[api/client/types.ts:224](https://github.com/PolymeshAssociation/polymesh-sdk/blob/3cc570ade/src/api/client/types.ts#L224)

___

### mediator

• `Optional` **mediator**: `string` \| [`Identity`](../../../../../classes/API/Entities/Identity/Identity.md)

The mediator did to filter by

#### Defined in

[api/client/types.ts:244](https://github.com/PolymeshAssociation/polymesh-sdk/blob/3cc570ade/src/api/client/types.ts#L244)

___

### party

• `Optional` **party**: `string` \| [`Identity`](../../../../../classes/API/Entities/Identity/Identity.md)

The party did to filter by

#### Defined in

[api/client/types.ts:248](https://github.com/PolymeshAssociation/polymesh-sdk/blob/3cc570ade/src/api/client/types.ts#L248)

___

### receiver

• `Optional` **receiver**: `string` \| [`Identity`](../../../../../classes/API/Entities/Identity/Identity.md)

The receiver did to filter by

#### Defined in

[api/client/types.ts:240](https://github.com/PolymeshAssociation/polymesh-sdk/blob/3cc570ade/src/api/client/types.ts#L240)

___

### sender

• `Optional` **sender**: `string` \| [`Identity`](../../../../../classes/API/Entities/Identity/Identity.md)

The sender did to filter by

#### Defined in

[api/client/types.ts:236](https://github.com/PolymeshAssociation/polymesh-sdk/blob/3cc570ade/src/api/client/types.ts#L236)

___

### size

• `Optional` **size**: `BigNumber`

The number of results to return

#### Defined in

[api/client/types.ts:252](https://github.com/PolymeshAssociation/polymesh-sdk/blob/3cc570ade/src/api/client/types.ts#L252)

___

### start

• `Optional` **start**: `BigNumber`

The number of results to skip

#### Defined in

[api/client/types.ts:256](https://github.com/PolymeshAssociation/polymesh-sdk/blob/3cc570ade/src/api/client/types.ts#L256)

___

### status

• `Optional` **status**: [`InstructionStatusEnum`](../../../../../enums/API/Client/Types/InstructionStatusEnum/InstructionStatusEnum.md)

The status to filter by

#### Defined in

[api/client/types.ts:232](https://github.com/PolymeshAssociation/polymesh-sdk/blob/3cc570ade/src/api/client/types.ts#L232)
