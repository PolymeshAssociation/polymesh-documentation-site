---
id: "VenueFilteringDetails"
title: "Interface: VenueFilteringDetails"
sidebar_label: "VenueFilteringDetails"
---

[api/entities/Asset/types](../../../../../../modules/API/Entities/Asset/Types/Types.md).VenueFilteringDetails

## Properties

### allowedVenues

• **allowedVenues**: [`Venue`](../../../../../../classes/API/Entities/Venue/Venue.md)[]

If `isEnabled` is true, then only these venues are allowed to create instructions involving the asset

#### Defined in

[api/entities/Asset/types.ts:240](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/Asset/types.ts#L240)

___

### isEnabled

• **isEnabled**: `boolean`

Whether or not Venue filtering is enabled. If enabled then only allowed the Venues are able to create instructions to trade the asset

#### Defined in

[api/entities/Asset/types.ts:236](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/Asset/types.ts#L236)
