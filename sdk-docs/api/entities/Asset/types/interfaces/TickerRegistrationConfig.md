# Interface: TickerRegistrationConfig

> Defined in: [src/api/entities/Asset/types.ts:265](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Asset/types.ts#L265)

# Interface: TickerRegistrationConfig

Defined in: [src/api/entities/Asset/types.ts:265](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Asset/types.ts#L265)

## Properties

### maxTickerLength

> **maxTickerLength**: `BigNumber`

Defined in: [src/api/entities/Asset/types.ts:269](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Asset/types.ts#L269)

maximum allowed length for a ticker

***

### registrationLength

> **registrationLength**: `BigNumber` \| `null`

Defined in: [src/api/entities/Asset/types.ts:273](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Asset/types.ts#L273)

amount of time (in milliseconds) a ticker reservation is valid for before it expires, starting from the moment it is reserved. A null value means ticker reservations never expire
