# Type Alias: AddInstructionParams

> > **AddInstructionParams** = `object` & \{ `endBlock?`: `BigNumber`; \} \| \{ `endAfterBlock?`: `BigNumber`; \} \| \{ `endAfterLock?`: `true`; \}

# Type Alias: AddInstructionParams

> **AddInstructionParams** = `object` & \{ `endBlock?`: `BigNumber`; \} \| \{ `endAfterBlock?`: `BigNumber`; \} \| \{ `endAfterLock?`: `true`; \}

Defined in: [src/api/procedures/types.ts:1069](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/procedures/types.ts#L1069)

## Type Declaration

Name
Type
Description
Defined in

`legs`

[`InstructionLeg`](InstructionLeg.mdx)[]

array of Asset movements

[src/api/procedures/types.ts:1073](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/procedures/types.ts#L1073)

`mediators?`

(`string` \| [`Identity`](../../../entities/Identity/classes/Identity.mdx))[]

additional identities that must affirm the instruction

**Note**

mediators are mandatory if settlement is to be locked for execution (providing `endAfterLock`)

[src/api/procedures/types.ts:1091](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/procedures/types.ts#L1091)

`memo?`

`string`

identifier string to help differentiate instructions

[src/api/procedures/types.ts:1085](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/procedures/types.ts#L1085)

`tradeDate?`

`Date`

date at which the trade was agreed upon (optional, for off chain trades)

[src/api/procedures/types.ts:1077](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/procedures/types.ts#L1077)

`valueDate?`

`Date`

date at which the trade was executed (optional, for off chain trades)

[src/api/procedures/types.ts:1081](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/procedures/types.ts#L1081)
