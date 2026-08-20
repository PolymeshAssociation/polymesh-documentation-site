# Interface: CreateBallotParams

> Defined in: [src/api/procedures/types.ts:1923](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/procedures/types.ts#L1923)

# Interface: CreateBallotParams

Defined in: [src/api/procedures/types.ts:1923](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/procedures/types.ts#L1923)

## Properties

### declarationDate

> **declarationDate**: `Date`

Defined in: [src/api/procedures/types.ts:1954](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/procedures/types.ts#L1954)

Date on which the Corporate Action is declared

***

### description

> **description**: `string`

Defined in: [src/api/procedures/types.ts:1942](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/procedures/types.ts#L1942)

Description of the Corporate Action to which the Ballot is attached

***

### endDate

> **endDate**: `Date`

Defined in: [src/api/procedures/types.ts:1937](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/procedures/types.ts#L1937)

Date when Ballot voting ends

***

### meta

> **meta**: [`BallotMeta`](../../../entities/CorporateBallot/types/interfaces/BallotMeta.mdx)

Defined in: [src/api/procedures/types.ts:1927](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/procedures/types.ts#L1927)

Title and motions of the Ballot

***

### rcv

> **rcv**: `boolean`

Defined in: [src/api/procedures/types.ts:1959](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/procedures/types.ts#L1959)

Specifies whether Ranked Choice Voting (RCV) is enabled for this ballot.

***

### startDate

> **startDate**: `Date`

Defined in: [src/api/procedures/types.ts:1932](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/procedures/types.ts#L1932)

Date when Ballot voting starts

***

### targets?

> `optional` **targets?**: [`InputCorporateActionTargets`](../type-aliases/InputCorporateActionTargets.mdx)

Defined in: [src/api/procedures/types.ts:1949](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/procedures/types.ts#L1949)

Asset Holder Identities to be included (or excluded) from the Ballot. Inclusion/exclusion is controlled by the `treatment`
  property. When the value is `Include`, all Asset Holders not present in the array are excluded, and vice-versa. If no value is passed,
  the default value for the Asset is used. If there is no default value, all Asset Holders will be part of the Ballot
