---
id: "Types"
title: "Module: CorporateBallot Types"
sidebar_label: "Types"
---

## Enumerations

- [CorporateBallotStatus](../../../../../enums/API/Entities/CorporateBallot/Types/CorporateBallotStatus/CorporateBallotStatus.md)

## Interfaces

- [BallotMeta](../../../../../interfaces/API/Entities/CorporateBallot/Types/BallotMeta/BallotMeta.md)
- [BallotMotion](../../../../../interfaces/API/Entities/CorporateBallot/Types/BallotMotion/BallotMotion.md)
- [CorporateBallotDetails](../../../../../interfaces/API/Entities/CorporateBallot/Types/CorporateBallotDetails/CorporateBallotDetails.md)

## Type Aliases

### BallotVote

Ƭ **BallotVote**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `fallback?` | `BigNumber` | The fallback vote to be used if the choice is not found in the ballot. **`Note`** This is only allowed for RCV ballots. **`Note`** Must point to a choice in a motion (index of the choice in the motion choices array). **`Note`** Must not point to the same choice as the `vote` property (index != choiceIndex). |
| `power` | `BigNumber` | The power of the vote. |

#### Defined in

[api/entities/CorporateBallot/types.ts:21](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/CorporateBallot/types.ts#L21)

___

### ChoiceWithParticipation

Ƭ **ChoiceWithParticipation**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `choice` | `string` | The choice of the motion for which the votes are cast. |
| `fallback?` | `BigNumber` | The fallback choice for the vote. |
| `power` | `BigNumber` | The power of the vote. |

#### Defined in

[api/entities/CorporateBallot/types.ts:110](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/CorporateBallot/types.ts#L110)

___

### ChoiceWithVotes

Ƭ **ChoiceWithVotes**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `choice` | `string` | The choice of the motion for which the votes are cast. |
| `votes` | `BigNumber` | The number of votes for the choice. |

#### Defined in

[api/entities/CorporateBallot/types.ts:79](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/CorporateBallot/types.ts#L79)

___

### CorporateBallotMetaWithResults

Ƭ **CorporateBallotMetaWithResults**: `Omit`\<[`BallotMeta`](../../../../../interfaces/API/Entities/CorporateBallot/Types/BallotMeta/BallotMeta.md), ``"motions"``\> & \{ `motions`: [`CorporateBallotMotionWithResults`](Types.md#corporateballotmotionwithresults)[]  }

#### Defined in

[api/entities/CorporateBallot/types.ts:103](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/CorporateBallot/types.ts#L103)

___

### CorporateBallotMotionWithParticipation

Ƭ **CorporateBallotMotionWithParticipation**: `Pick`\<[`BallotMotion`](../../../../../interfaces/API/Entities/CorporateBallot/Types/BallotMotion/BallotMotion.md), ``"title"`` \| ``"infoLink"``\> & \{ `choices`: [`ChoiceWithParticipation`](Types.md#choicewithparticipation)[]  }

#### Defined in

[api/entities/CorporateBallot/types.ts:127](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/CorporateBallot/types.ts#L127)

___

### CorporateBallotMotionWithResults

Ƭ **CorporateBallotMotionWithResults**: `Pick`\<[`BallotMotion`](../../../../../interfaces/API/Entities/CorporateBallot/Types/BallotMotion/BallotMotion.md), ``"title"`` \| ``"infoLink"``\> & \{ `choices`: [`ChoiceWithVotes`](Types.md#choicewithvotes)[] ; `total`: `BigNumber`  }

#### Defined in

[api/entities/CorporateBallot/types.ts:91](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/CorporateBallot/types.ts#L91)

___

### CorporateBallotWithParticipation

Ƭ **CorporateBallotWithParticipation**: `Omit`\<[`BallotMeta`](../../../../../interfaces/API/Entities/CorporateBallot/Types/BallotMeta/BallotMeta.md), ``"motions"``\> & \{ `motions`: [`CorporateBallotMotionWithParticipation`](Types.md#corporateballotmotionwithparticipation)[]  }

#### Defined in

[api/entities/CorporateBallot/types.ts:134](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/CorporateBallot/types.ts#L134)
