---
id: "CreateBallotParams"
title: "Interface: CreateBallotParams"
sidebar_label: "CreateBallotParams"
---

[api/procedures/types](../../../../../modules/API/Procedures/Types/Types.md).CreateBallotParams

## Properties

### declarationDate

• **declarationDate**: `Date`

Date on which the Corporate Action is declared

#### Defined in

[api/procedures/types.ts:1847](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/procedures/types.ts#L1847)

___

### description

• **description**: `string`

Description of the Corporate Action to which the Ballot is attached

#### Defined in

[api/procedures/types.ts:1835](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/procedures/types.ts#L1835)

___

### endDate

• **endDate**: `Date`

Date when Ballot voting ends

#### Defined in

[api/procedures/types.ts:1830](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/procedures/types.ts#L1830)

___

### meta

• **meta**: [`BallotMeta`](../../../Entities/CorporateBallot/Types/BallotMeta/BallotMeta.md)

Title and motions of the Ballot

#### Defined in

[api/procedures/types.ts:1820](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/procedures/types.ts#L1820)

___

### rcv

• **rcv**: `boolean`

Specifies whether Ranked Choice Voting (RCV) is enabled for this ballot.

#### Defined in

[api/procedures/types.ts:1852](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/procedures/types.ts#L1852)

___

### startDate

• **startDate**: `Date`

Date when Ballot voting starts

#### Defined in

[api/procedures/types.ts:1825](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/procedures/types.ts#L1825)

___

### targets

• `Optional` **targets**: [`InputCorporateActionTargets`](../../../../../modules/API/Procedures/Types/Types.md#inputcorporateactiontargets)

Asset Holder Identities to be included (or excluded) from the Ballot. Inclusion/exclusion is controlled by the `treatment`
  property. When the value is `Include`, all Asset Holders not present in the array are excluded, and vice-versa. If no value is passed,
  the default value for the Asset is used. If there is no default value, all Asset Holders will be part of the Ballot

#### Defined in

[api/procedures/types.ts:1842](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/procedures/types.ts#L1842)
