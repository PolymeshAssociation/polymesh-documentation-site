# Interface: HistoricalInstructionFilters

> Defined in: [src/api/client/types.ts:225](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/client/types.ts#L225)

# Interface: HistoricalInstructionFilters

Defined in: [src/api/client/types.ts:225](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/client/types.ts#L225)

Filters for instructions

## Properties

### asset?

> `optional` **asset?**: `string` \| [`Asset`](../../../entities/Asset/types/type-aliases/Asset.mdx)

Defined in: [src/api/client/types.ts:233](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/client/types.ts#L233)

The asset ID to filter by

***

### identity?

> `optional` **identity?**: `string` \| [`Identity`](../../../entities/Identity/classes/Identity.mdx)

Defined in: [src/api/client/types.ts:229](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/client/types.ts#L229)

The DID of the identity to filter by

***

### mediator?

> `optional` **mediator?**: `string` \| [`Identity`](../../../entities/Identity/classes/Identity.mdx)

Defined in: [src/api/client/types.ts:249](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/client/types.ts#L249)

The mediator did to filter by

***

### party?

> `optional` **party?**: `string` \| [`Identity`](../../../entities/Identity/classes/Identity.mdx)

Defined in: [src/api/client/types.ts:253](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/client/types.ts#L253)

The party did to filter by

***

### receiver?

> `optional` **receiver?**: `string` \| [`Identity`](../../../entities/Identity/classes/Identity.mdx)

Defined in: [src/api/client/types.ts:245](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/client/types.ts#L245)

The receiver did to filter by

***

### sender?

> `optional` **sender?**: `string` \| [`Identity`](../../../entities/Identity/classes/Identity.mdx)

Defined in: [src/api/client/types.ts:241](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/client/types.ts#L241)

The sender did to filter by

***

### size?

> `optional` **size?**: `BigNumber`

Defined in: [src/api/client/types.ts:257](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/client/types.ts#L257)

The number of results to return

***

### start?

> `optional` **start?**: `BigNumber`

Defined in: [src/api/client/types.ts:261](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/client/types.ts#L261)

The number of results to skip

***

### status?

> `optional` **status?**: [`InstructionStatusEnum`](../enumerations/InstructionStatusEnum.mdx)

Defined in: [src/api/client/types.ts:237](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/client/types.ts#L237)

The status to filter by
