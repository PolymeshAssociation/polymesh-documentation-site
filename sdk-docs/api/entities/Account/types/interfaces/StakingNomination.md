# Interface: StakingNomination

> Defined in: [src/api/entities/Account/types.ts:113](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Account/types.ts#L113)

# Interface: StakingNomination

Defined in: [src/api/entities/Account/types.ts:113](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Account/types.ts#L113)

## Properties

### submittedInEra

> **submittedInEra**: `BigNumber`

Defined in: [src/api/entities/Account/types.ts:123](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Account/types.ts#L123)

The era in which the nomination was submitted

#### Note

nominations only effect future eras (1 era is approximately 1 day)

***

### suppressed

> **suppressed**: `boolean`

Defined in: [src/api/entities/Account/types.ts:130](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Account/types.ts#L130)

Nominations maybe suppressed if they fail to meet the minimum bond or validators are over subscribed

#### Note

nominations are rarely suppressed on Polymesh

***

### targets

> **targets**: [`Account`](../../classes/Account.mdx)[]

Defined in: [src/api/entities/Account/types.ts:117](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Account/types.ts#L117)

The nominated validators
