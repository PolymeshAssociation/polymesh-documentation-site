---
id: "Types"
title: "Module: TickerReservation Types"
sidebar_label: "Types"
---

## Enumerations

- [TickerReservationStatus](../../../../../enums/API/Entities/TickerReservation/Types/TickerReservationStatus/TickerReservationStatus.md)

## Type Aliases

### TickerReservationDetails

Ƭ **TickerReservationDetails**: \{ `expiryDate`: `Date` \| ``null`` ; `owner`: [`Identity`](../../../../../classes/API/Entities/Identity/Identity.md) \| ``null``  } & \{ `status`: [`Free`](../../../../../enums/API/Entities/TickerReservation/Types/TickerReservationStatus/TickerReservationStatus.md#free) \| [`Reserved`](../../../../../enums/API/Entities/TickerReservation/Types/TickerReservationStatus/TickerReservationStatus.md#reserved)  } \| \{ `assetId`: `string` ; `status`: [`AssetCreated`](../../../../../enums/API/Entities/TickerReservation/Types/TickerReservationStatus/TickerReservationStatus.md#assetcreated)  }

#### Defined in

[api/entities/TickerReservation/types.ts:18](https://github.com/PolymeshAssociation/polymesh-sdk/blob/49a0066c3/src/api/entities/TickerReservation/types.ts#L18)
