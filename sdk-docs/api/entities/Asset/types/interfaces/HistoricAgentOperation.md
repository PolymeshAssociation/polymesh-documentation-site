# Interface: HistoricAgentOperation

> Defined in: [src/api/entities/Asset/types.ts:404](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Asset/types.ts#L404)

# Interface: HistoricAgentOperation

Defined in: [src/api/entities/Asset/types.ts:404](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Asset/types.ts#L404)

Events triggered by transactions performed by an Agent Identity, related to the Token's configuration
  For example: changing compliance requirements, inviting/removing agent Identities, freezing/unfreezing transfers

Token transfers (settlements or movements between Portfolios) do not count as Operations

## Properties

### history

> **history**: [`EventIdentifier`](../../../../client/types/interfaces/EventIdentifier.mdx)[]

Defined in: [src/api/entities/Asset/types.ts:412](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Asset/types.ts#L412)

list of Token Operation Events that were triggered by the Agent Identity

***

### identity

> **identity**: [`Identity`](../../../Identity/classes/Identity.mdx)

Defined in: [src/api/entities/Asset/types.ts:408](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Asset/types.ts#L408)

Agent Identity that performed the operations
