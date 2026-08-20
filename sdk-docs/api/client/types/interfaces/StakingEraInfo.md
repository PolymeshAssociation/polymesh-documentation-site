# Interface: StakingEraInfo

> Defined in: [src/api/client/types.ts:266](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/client/types.ts#L266)

# Interface: StakingEraInfo

Defined in: [src/api/client/types.ts:266](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/client/types.ts#L266)

A conglomeration of staking storage related to the active era

## Properties

### activeEra

> **activeEra**: `BigNumber`

Defined in: [src/api/client/types.ts:270](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/client/types.ts#L270)

The active era. This is the era whose rewards and slashes are being processed and may lag the current era

***

### activeEraStart

> **activeEraStart**: `BigNumber`

Defined in: [src/api/client/types.ts:274](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/client/types.ts#L274)

The block in which the active era began

***

### currentEra

> **currentEra**: `BigNumber`

Defined in: [src/api/client/types.ts:278](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/client/types.ts#L278)

The current era

***

### plannedSession

> **plannedSession**: `BigNumber`

Defined in: [src/api/client/types.ts:282](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/client/types.ts#L282)

The planned session number. A session is a subdivision of an era

***

### totalStaked

> **totalStaked**: `BigNumber`

Defined in: [src/api/client/types.ts:286](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/client/types.ts#L286)

The total amount of POLYX staked
