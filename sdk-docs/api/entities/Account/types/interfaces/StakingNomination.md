# Interface: StakingNomination

> Defined in: [src/api/entities/Account/types.ts:148](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Account/types.ts#L148)

# Interface: StakingNomination

Defined in: [src/api/entities/Account/types.ts:148](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Account/types.ts#L148)

## Properties

### submittedInEra

> **submittedInEra**: `BigNumber`

Defined in: [src/api/entities/Account/types.ts:158](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Account/types.ts#L158)

The era in which the nomination was submitted

#### Note

nominations only effect future eras (1 era is approximately 1 day)

***

### suppressed

> **suppressed**: `boolean`

Defined in: [src/api/entities/Account/types.ts:165](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Account/types.ts#L165)

Nominations maybe suppressed if they fail to meet the minimum bond or validators are over subscribed

#### Note

nominations are rarely suppressed on Polymesh

***

### targets

> **targets**: [`Account`](../../classes/Account.mdx)[]

Defined in: [src/api/entities/Account/types.ts:152](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Account/types.ts#L152)

The nominated validators
