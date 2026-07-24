# Interface: SetStakingPayeeParams

> Defined in: [src/api/procedures/types.ts:2028](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L2028)

# Interface: SetStakingPayeeParams

Defined in: [src/api/procedures/types.ts:2028](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L2028)

## Properties

### autoStake

> **autoStake**: `boolean`

Defined in: [src/api/procedures/types.ts:2038](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L2038)

If set to true then rewards will be auto staked in order to compound

#### Note

The payee must be the stash account in order to auto stake

***

### payee

> **payee**: `string` \| [`Account`](../../../entities/Account/classes/Account.mdx)

Defined in: [src/api/procedures/types.ts:2032](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L2032)

The account who will receive the staking rewards
