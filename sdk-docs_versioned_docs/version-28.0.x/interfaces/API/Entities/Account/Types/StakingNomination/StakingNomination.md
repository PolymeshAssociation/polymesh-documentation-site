---
id: "StakingNomination"
title: "Interface: StakingNomination"
sidebar_label: "StakingNomination"
---

[api/entities/Account/types](../../../../../../modules/API/Entities/Account/Types/Types.md).StakingNomination

## Properties

### submittedInEra

• **submittedInEra**: `BigNumber`

The era in which the nomination was submitted

**`Note`**

nominations only effect future eras (1 era is approximately 1 day)

#### Defined in

[api/entities/Account/types.ts:123](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/Account/types.ts#L123)

___

### suppressed

• **suppressed**: `boolean`

Nominations maybe suppressed if they fail to meet the minimum bond or validators are over subscribed

**`Note`**

nominations are rarely suppressed on Polymesh

#### Defined in

[api/entities/Account/types.ts:130](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/Account/types.ts#L130)

___

### targets

• **targets**: [`Account`](../../../../../../classes/API/Entities/Account/Account.md)[]

The nominated validators

#### Defined in

[api/entities/Account/types.ts:117](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/Account/types.ts#L117)
