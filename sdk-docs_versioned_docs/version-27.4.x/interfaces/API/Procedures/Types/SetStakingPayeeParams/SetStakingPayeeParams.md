---
id: "SetStakingPayeeParams"
title: "Interface: SetStakingPayeeParams"
sidebar_label: "SetStakingPayeeParams"
---

[api/procedures/types](../../../../../modules/API/Procedures/Types/Types.md).SetStakingPayeeParams

## Properties

### autoStake

• **autoStake**: `boolean`

If set to true then rewards will be auto staked in order to compound

**`Note`**

The payee must be the stash account in order to auto stake

#### Defined in

[api/procedures/types.ts:1827](https://github.com/PolymeshAssociation/polymesh-sdk/blob/f8a937f04/src/api/procedures/types.ts#L1827)

___

### payee

• **payee**: `string` \| [`Account`](../../../../../classes/API/Entities/Account/Account.md)

The account who will receive the staking rewards

#### Defined in

[api/procedures/types.ts:1821](https://github.com/PolymeshAssociation/polymesh-sdk/blob/f8a937f04/src/api/procedures/types.ts#L1821)
