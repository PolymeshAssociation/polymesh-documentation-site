---
id: "BondPolyxParams"
title: "Interface: BondPolyxParams"
sidebar_label: "BondPolyxParams"
---

[api/procedures/types](../../../../../modules/API/Procedures/Types/Types.md).BondPolyxParams

## Properties

### amount

• **amount**: `BigNumber`

The amount of POLYX to bond (up to 6 decimals of precision)

**`Note`**

It is strongly recommended against bonding 100% an account's POLYX balance.
At the minimum a stash account needs enough POLYX to sign the unbond extrinsic ()

#### Defined in

[api/procedures/types.ts:1782](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/procedures/types.ts#L1782)

___

### autoStake

• **autoStake**: `boolean`

Can be set to `true` if `rewardDestination` is the signing account. Auto stake will stake all rewards so the balance will compound

#### Defined in

[api/procedures/types.ts:1774](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/procedures/types.ts#L1774)

___

### controller

• **controller**: `string` \| [`Account`](../../../../../classes/API/Entities/Account/Account.md)

The controller is the account responsible for managing staked POLYX. This can be the stash,
but designating a different key can make it easier to update nomination preferences and maintain
the POLYX in a more secure, but inconvenient, stash key.

#### Defined in

[api/procedures/types.ts:1764](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/procedures/types.ts#L1764)

___

### payee

• **payee**: `string` \| [`Account`](../../../../../classes/API/Entities/Account/Account.md)

The account that should receive the stashing rewards

#### Defined in

[api/procedures/types.ts:1769](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/procedures/types.ts#L1769)
