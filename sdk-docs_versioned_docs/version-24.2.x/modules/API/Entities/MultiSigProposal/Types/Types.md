---
id: "Types"
title: "Module: MultiSigProposal Types"
sidebar_label: "Types"
---

## Enumerations

- [MultiSigProposalAction](../../../../../enums/API/Entities/MultiSigProposal/Types/MultiSigProposalAction/MultiSigProposalAction.md)
- [ProposalStatus](../../../../../enums/API/Entities/MultiSigProposal/Types/ProposalStatus/ProposalStatus.md)

## Interfaces

- [MultiSigProposalDetails](../../../../../interfaces/API/Entities/MultiSigProposal/Types/MultiSigProposalDetails/MultiSigProposalDetails.md)

## Type Aliases

### AnyJson

Ƭ **AnyJson**: `string` \| `number` \| `boolean` \| ``null`` \| `undefined` \| [`AnyJson`](Types.md#anyjson)[] \| \{ `[index: string]`: [`AnyJson`](Types.md#anyjson);  }

Represents JSON serializable data. Used for cases when the value can take on many types, like args for a MultiSig proposal.

#### Defined in

[api/entities/MultiSigProposal/types.ts:18](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fedc4714f/src/api/entities/MultiSigProposal/types.ts#L18)

___

### MultiSigProposalVote

Ƭ **MultiSigProposalVote**: [`EventIdentifier`](../../../../../interfaces/API/Client/Types/EventIdentifier/EventIdentifier.md) & \{ `action`: [`MultiSigProposalVoteActionEnum`](../../../../../enums/Types/MultiSigProposalVoteActionEnum/MultiSigProposalVoteActionEnum.md) ; `signer`: [`Signer`](../../Types/Types.md#signer)  }

#### Defined in

[api/entities/MultiSigProposal/types.ts:69](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fedc4714f/src/api/entities/MultiSigProposal/types.ts#L69)
