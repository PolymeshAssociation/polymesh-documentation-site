# Type Alias: TickerReservationDetails

> > **TickerReservationDetails** = `object` & \{ `status`: [`Free`](../enumerations/TickerReservationStatus.mdx#free) \| [`Reserved`](../enumerations/TickerReservationStatus.mdx#reserved); \} \| \{ `assetId`: `string`; `status`: [`AssetCreated`](../enumerations/TickerReservationStatus.mdx#assetcreated); \}

# Type Alias: TickerReservationDetails

> **TickerReservationDetails** = `object` & \{ `status`: [`Free`](../enumerations/TickerReservationStatus.mdx#free) \| [`Reserved`](../enumerations/TickerReservationStatus.mdx#reserved); \} \| \{ `assetId`: `string`; `status`: [`AssetCreated`](../enumerations/TickerReservationStatus.mdx#assetcreated); \}

Defined in: [src/api/entities/TickerReservation/types.ts:18](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/TickerReservation/types.ts#L18)

## Type Declaration

Name
Type
Description
Defined in

`expiryDate`

`Date` \| `null`

date at which the reservation expires, null if it never expires (permanent reservation or Asset already launched)

[src/api/entities/TickerReservation/types.ts:26](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/TickerReservation/types.ts#L26)

`owner`

[`Identity`](../../../Identity/classes/Identity.mdx) \| `null`

Identity ID of the owner of the ticker, null if it hasn't been reserved

[src/api/entities/TickerReservation/types.ts:22](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/TickerReservation/types.ts#L22)
