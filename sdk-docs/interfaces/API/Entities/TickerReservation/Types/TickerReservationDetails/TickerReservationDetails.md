---
id: "TickerReservationDetails"
title: "Interface: TickerReservationDetails"
sidebar_label: "TickerReservationDetails"
---

[api/entities/TickerReservation/types](../../../../../../modules/API/Entities/TickerReservation/Types/Types.md).TickerReservationDetails

## Properties

### expiryDate

• **expiryDate**: ``null`` \| `Date`

date at which the reservation expires, null if it never expires (permanent reservation or Asset already launched)

#### Defined in

[api/entities/TickerReservation/types.ts:26](https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/api/entities/TickerReservation/types.ts#L26)

___

### owner

• **owner**: ``null`` \| [`Identity`](../../../../../../classes/API/Entities/Identity/Identity.md)

Identity ID of the owner of the ticker, null if it hasn't been reserved

#### Defined in

[api/entities/TickerReservation/types.ts:22](https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/api/entities/TickerReservation/types.ts#L22)

___

### status

• **status**: [`TickerReservationStatus`](../../../../../../enums/API/Entities/TickerReservation/Types/TickerReservationStatus/TickerReservationStatus.md)

#### Defined in

[api/entities/TickerReservation/types.ts:27](https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/api/entities/TickerReservation/types.ts#L27)
