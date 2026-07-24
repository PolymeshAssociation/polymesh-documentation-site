# Interface: CreateBallotParams

> Defined in: [src/api/procedures/types.ts:2052](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L2052)

# Interface: CreateBallotParams

Defined in: [src/api/procedures/types.ts:2052](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L2052)

## Properties

### declarationDate

> **declarationDate**: `Date`

Defined in: [src/api/procedures/types.ts:2083](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L2083)

Date on which the Corporate Action is declared

***

### description

> **description**: `string`

Defined in: [src/api/procedures/types.ts:2071](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L2071)

Description of the Corporate Action to which the Ballot is attached

***

### endDate

> **endDate**: `Date`

Defined in: [src/api/procedures/types.ts:2066](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L2066)

Date when Ballot voting ends

***

### meta

> **meta**: [`BallotMeta`](../../../entities/CorporateBallot/types/interfaces/BallotMeta.mdx)

Defined in: [src/api/procedures/types.ts:2056](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L2056)

Title and motions of the Ballot

***

### rcv

> **rcv**: `boolean`

Defined in: [src/api/procedures/types.ts:2088](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L2088)

Specifies whether Ranked Choice Voting (RCV) is enabled for this ballot.

***

### startDate

> **startDate**: `Date`

Defined in: [src/api/procedures/types.ts:2061](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L2061)

Date when Ballot voting starts

***

### targets?

> `optional` **targets?**: [`InputCorporateActionTargets`](../type-aliases/InputCorporateActionTargets.mdx)

Defined in: [src/api/procedures/types.ts:2078](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L2078)

Asset Holder Identities to be included (or excluded) from the Ballot. Inclusion/exclusion is controlled by the `treatment`
  property. When the value is `Include`, all Asset Holders not present in the array are excluded, and vice-versa. If no value is passed,
  the default value for the Asset is used. If there is no default value, all Asset Holders will be part of the Ballot
