---
id: "Types"
title: "Module: api/entities/Asset/Checkpoints/types"
sidebar_label: "Types"
---

# Module: api/entities/Asset/Checkpoints/types

## Enumerations

- [CaCheckpointType](../../../../../../enums/API/Entities/Asset/Checkpoints/Types/CaCheckpointType/CaCheckpointType.md)

## Type Aliases

### InputCaCheckpoint

Ƭ **InputCaCheckpoint**: [`Checkpoint`](../../../../../../classes/API/Entities/Checkpoint/Checkpoint.md) \| [`CheckpointSchedule`](../../../../../../classes/API/Entities/CheckpointSchedule/CheckpointSchedule.md) \| `Date` \| { `id`: `BigNumber` ; `type`: [`Existing`](../../../../../../enums/API/Entities/Asset/Checkpoints/Types/CaCheckpointType/CaCheckpointType.md#existing)  } \| { `id`: `BigNumber` ; `type`: [`Schedule`](../../../../../../enums/API/Entities/Asset/Checkpoints/Types/CaCheckpointType/CaCheckpointType.md#schedule)  }

#### Defined in

[api/entities/Asset/Checkpoints/types.ts:10](https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/api/entities/Asset/Checkpoints/types.ts#L10)
