# Type Alias: InputCaCheckpoint

> > **InputCaCheckpoint** = [`Checkpoint`](../../../../../Checkpoint/classes/Checkpoint.mdx) \| [`CheckpointSchedule`](../../../../../CheckpointSchedule/classes/CheckpointSchedule.mdx) \| `Date` \| \{ `id`: `BigNumber`; `type`: [`Existing`](../enumerations/CaCheckpointType.mdx#existing); \} \| \{ `id`: `BigNumber`; `type`: [`Schedule`](../enumerations/CaCheckpointType.mdx#schedule); \}

# Type Alias: InputCaCheckpoint

> **InputCaCheckpoint** = [`Checkpoint`](../../../../../Checkpoint/classes/Checkpoint.mdx) \| [`CheckpointSchedule`](../../../../../CheckpointSchedule/classes/CheckpointSchedule.mdx) \| `Date` \| \{ `id`: `BigNumber`; `type`: [`Existing`](../enumerations/CaCheckpointType.mdx#existing); \} \| \{ `id`: `BigNumber`; `type`: [`Schedule`](../enumerations/CaCheckpointType.mdx#schedule); \}

Defined in: [src/api/entities/Asset/Fungible/Checkpoints/types.ts:10](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Asset/Fungible/Checkpoints/types.ts#L10)

## Union Members

[`Checkpoint`](../../../../../Checkpoint/classes/Checkpoint.mdx)

***

[`CheckpointSchedule`](../../../../../CheckpointSchedule/classes/CheckpointSchedule.mdx)

***

`Date`

***

### Type Literal

\{ `id`: `BigNumber`; `type`: [`Existing`](../enumerations/CaCheckpointType.mdx#existing); \}

Name
Type
Description
Defined in

`id`

`BigNumber`

identifier for an existing Checkpoint

[src/api/entities/Asset/Fungible/Checkpoints/types.ts:19](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Asset/Fungible/Checkpoints/types.ts#L19)

`type`

[`Existing`](../enumerations/CaCheckpointType.mdx#existing)

&hyphen;

[src/api/entities/Asset/Fungible/Checkpoints/types.ts:15](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Asset/Fungible/Checkpoints/types.ts#L15)

***

### Type Literal

\{ `id`: `BigNumber`; `type`: [`Schedule`](../enumerations/CaCheckpointType.mdx#schedule); \}

Name
Type
Description
Defined in

`id`

`BigNumber`

identifier for a Checkpoint Schedule

[src/api/entities/Asset/Fungible/Checkpoints/types.ts:26](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Asset/Fungible/Checkpoints/types.ts#L26)

`type`

[`Schedule`](../enumerations/CaCheckpointType.mdx#schedule)

&hyphen;

[src/api/entities/Asset/Fungible/Checkpoints/types.ts:22](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Asset/Fungible/Checkpoints/types.ts#L22)
