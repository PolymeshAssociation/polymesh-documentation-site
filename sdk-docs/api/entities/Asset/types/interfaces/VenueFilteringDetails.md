# Interface: VenueFilteringDetails

> Defined in: [src/api/entities/Asset/types.ts:254](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Asset/types.ts#L254)

# Interface: VenueFilteringDetails

Defined in: [src/api/entities/Asset/types.ts:254](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Asset/types.ts#L254)

## Properties

### allowedVenues

> **allowedVenues**: [`Venue`](../../../Venue/classes/Venue.mdx)[]

Defined in: [src/api/entities/Asset/types.ts:262](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Asset/types.ts#L262)

If `isEnabled` is true, then only these venues are allowed to create instructions involving the asset

***

### isEnabled

> **isEnabled**: `boolean`

Defined in: [src/api/entities/Asset/types.ts:258](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Asset/types.ts#L258)

Whether or not Venue filtering is enabled. If enabled then only allowed the Venues are able to create instructions to trade the asset
