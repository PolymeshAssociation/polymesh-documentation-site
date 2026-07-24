# Interface: StakingEraInfo

> Defined in: [src/api/client/types.ts:267](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/client/types.ts#L267)

# Interface: StakingEraInfo

Defined in: [src/api/client/types.ts:267](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/client/types.ts#L267)

A conglomeration of staking storage related to the active era

## Properties

### activeEra

> **activeEra**: `BigNumber`

Defined in: [src/api/client/types.ts:271](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/client/types.ts#L271)

The active era. This is the era whose rewards and slashes are being processed and may lag the current era

***

### activeEraStart

> **activeEraStart**: `BigNumber`

Defined in: [src/api/client/types.ts:275](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/client/types.ts#L275)

The block in which the active era began

***

### currentEra

> **currentEra**: `BigNumber`

Defined in: [src/api/client/types.ts:279](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/client/types.ts#L279)

The current era

***

### plannedSession

> **plannedSession**: `BigNumber`

Defined in: [src/api/client/types.ts:283](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/client/types.ts#L283)

The planned session number. A session is a subdivision of an era

***

### totalStaked

> **totalStaked**: `BigNumber`

Defined in: [src/api/client/types.ts:287](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/client/types.ts#L287)

The total amount of POLYX staked
