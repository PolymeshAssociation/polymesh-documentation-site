# Interface: HistoricalInstructionFilters

> Defined in: [src/api/client/types.ts:224](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/client/types.ts#L224)

# Interface: HistoricalInstructionFilters

Defined in: [src/api/client/types.ts:224](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/client/types.ts#L224)

Filters for instructions

## Properties

### asset?

> `optional` **asset?**: `string` \| [`Asset`](../../../entities/Asset/types/type-aliases/Asset.mdx)

Defined in: [src/api/client/types.ts:232](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/client/types.ts#L232)

The asset ID to filter by

***

### identity?

> `optional` **identity?**: `string` \| [`Identity`](../../../entities/Identity/classes/Identity.mdx)

Defined in: [src/api/client/types.ts:228](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/client/types.ts#L228)

The DID of the identity to filter by

***

### mediator?

> `optional` **mediator?**: `string` \| [`Identity`](../../../entities/Identity/classes/Identity.mdx)

Defined in: [src/api/client/types.ts:248](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/client/types.ts#L248)

The mediator did to filter by

***

### party?

> `optional` **party?**: `string` \| [`Identity`](../../../entities/Identity/classes/Identity.mdx)

Defined in: [src/api/client/types.ts:252](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/client/types.ts#L252)

The party did to filter by

***

### receiver?

> `optional` **receiver?**: `string` \| [`Identity`](../../../entities/Identity/classes/Identity.mdx)

Defined in: [src/api/client/types.ts:244](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/client/types.ts#L244)

The receiver did to filter by

***

### sender?

> `optional` **sender?**: `string` \| [`Identity`](../../../entities/Identity/classes/Identity.mdx)

Defined in: [src/api/client/types.ts:240](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/client/types.ts#L240)

The sender did to filter by

***

### size?

> `optional` **size?**: `BigNumber`

Defined in: [src/api/client/types.ts:256](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/client/types.ts#L256)

The number of results to return

***

### start?

> `optional` **start?**: `BigNumber`

Defined in: [src/api/client/types.ts:260](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/client/types.ts#L260)

The number of results to skip

***

### status?

> `optional` **status?**: [`InstructionStatusEnum`](../enumerations/InstructionStatusEnum.mdx)

Defined in: [src/api/client/types.ts:236](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/client/types.ts#L236)

The status to filter by
