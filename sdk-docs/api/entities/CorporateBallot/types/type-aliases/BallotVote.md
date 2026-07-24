# Type Alias: BallotVote

> > **BallotVote** = `object`

# Type Alias: BallotVote

> **BallotVote** = `object`

Defined in: [src/api/entities/CorporateBallot/types.ts:21](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/CorporateBallot/types.ts#L21)

## Properties

Property
Type
Description
Defined in

 `fallback?`

`BigNumber`

The fallback vote to be used if the choice is not found in the ballot.

**Note**

This is only allowed for RCV ballots.

**Note**

Must point to a choice in a motion (index of the choice in the motion choices array).

**Note**

Must not point to the same choice as the `vote` property (index != choiceIndex).

[src/api/entities/CorporateBallot/types.ts:33](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/CorporateBallot/types.ts#L33)

 `power`

`BigNumber`

The power of the vote.

[src/api/entities/CorporateBallot/types.ts:25](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/CorporateBallot/types.ts#L25)
