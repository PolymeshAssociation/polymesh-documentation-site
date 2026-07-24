# Type Alias: AddInstructionParams

> > **AddInstructionParams** = `object` & \{ `endBlock?`: `BigNumber`; \} \| \{ `endAfterBlock?`: `BigNumber`; \} \| \{ `endAfterLock?`: `true`; \}

# Type Alias: AddInstructionParams

> **AddInstructionParams** = `object` & \{ `endBlock?`: `BigNumber`; \} \| \{ `endAfterBlock?`: `BigNumber`; \} \| \{ `endAfterLock?`: `true`; \}

Defined in: [src/api/procedures/types.ts:1087](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L1087)

## Type Declaration

Name
Type
Description
Defined in

`legs`

[`InstructionLeg`](InstructionLeg.mdx)[]

array of Asset movements

[src/api/procedures/types.ts:1091](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L1091)

`mediators?`

(`string` \| [`Identity`](../../../entities/Identity/classes/Identity.mdx))[]

additional identities that must affirm the instruction

**Note**

mediators are mandatory if settlement is to be locked for execution (providing `endAfterLock`)

[src/api/procedures/types.ts:1109](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L1109)

`memo?`

`string`

identifier string to help differentiate instructions

[src/api/procedures/types.ts:1103](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L1103)

`tradeDate?`

`Date`

date at which the trade was agreed upon (optional, for off chain trades)

[src/api/procedures/types.ts:1095](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L1095)

`valueDate?`

`Date`

date at which the trade was executed (optional, for off chain trades)

[src/api/procedures/types.ts:1099](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L1099)
