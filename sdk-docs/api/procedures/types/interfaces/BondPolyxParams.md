# Interface: BondPolyxParams

> Defined in: [src/api/procedures/types.ts:1992](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L1992)

# Interface: BondPolyxParams

Defined in: [src/api/procedures/types.ts:1992](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L1992)

## Properties

### amount

> **amount**: `BigNumber`

Defined in: [src/api/procedures/types.ts:2016](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L2016)

The amount of POLYX to bond (up to 6 decimals of precision)

#### Note

It is strongly recommended against bonding 100% an account's POLYX balance.
At the minimum a stash account needs enough POLYX to sign the unbond extrinsic ()

***

### autoStake

> **autoStake**: `boolean`

Defined in: [src/api/procedures/types.ts:2008](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L2008)

Can be set to `true` if `rewardDestination` is the signing account. Auto stake will stake all rewards so the balance will compound

***

### controller

> **controller**: `string` \| [`Account`](../../../entities/Account/classes/Account.mdx)

Defined in: [src/api/procedures/types.ts:1998](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L1998)

The controller is the account responsible for managing staked POLYX. This can be the stash,
but designating a different key can make it easier to update nomination preferences and maintain
the POLYX in a more secure, but inconvenient, stash key.

***

### payee

> **payee**: `string` \| [`Account`](../../../entities/Account/classes/Account.mdx)

Defined in: [src/api/procedures/types.ts:2003](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L2003)

The account that should receive the stashing rewards
