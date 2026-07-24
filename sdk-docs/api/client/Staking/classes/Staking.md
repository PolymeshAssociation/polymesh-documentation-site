# Class: Staking

> Defined in: [src/api/client/Staking.ts:43](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/client/Staking.ts#L43)

# Class: Staking

Defined in: [src/api/client/Staking.ts:43](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/client/Staking.ts#L43)

Handles Staking related functionality

## Methods

### bond()

> **bond**(`args`: [`BondPolyxParams`](../../../procedures/types/interfaces/BondPolyxParams.mdx), `opts?`: [`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)): `Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

Defined in: [src/api/client/Staking.ts:108](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/client/Staking.ts#L108)

Bond POLYX for staking

#### Parameters

Parameter
Type

`args`

[`BondPolyxParams`](../../../procedures/types/interfaces/BondPolyxParams.mdx)

`opts?`

[`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

#### Note

the signing account cannot be a stash

#### Note

this method is of type [ProcedureMethod](../../../procedures/types/interfaces/ProcedureMethod.mdx), which means you can call [bond.checkAuthorization](../../../procedures/types/interfaces/ProcedureMethod.mdx#checkauthorization) on it to see whether the signing Account and Identity have the required roles and permissions to run it

***

### bondExtra()

> **bondExtra**(`args`: [`UpdatePolyxBondParams`](../../../procedures/types/interfaces/UpdatePolyxBondParams.mdx), `opts?`: [`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)): `Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

Defined in: [src/api/client/Staking.ts:115](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/client/Staking.ts#L115)

Bond extra POLYX for staking

#### Parameters

Parameter
Type

`args`

[`UpdatePolyxBondParams`](../../../procedures/types/interfaces/UpdatePolyxBondParams.mdx)

`opts?`

[`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

#### Note

this transaction must be signed by a stash

#### Note

this method is of type [ProcedureMethod](../../../procedures/types/interfaces/ProcedureMethod.mdx), which means you can call [bondExtra.checkAuthorization](../../../procedures/types/interfaces/ProcedureMethod.mdx#checkauthorization) on it to see whether the signing Account and Identity have the required roles and permissions to run it

***

### eraInfo()

#### Call Signature

> **eraInfo**(): `Promise`\<[`StakingEraInfo`](../../types/interfaces/StakingEraInfo.mdx)\>

Defined in: [src/api/client/Staking.ts:204](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/client/Staking.ts#L204)

Retrieve the current staking era information

##### Returns

`Promise`\<[`StakingEraInfo`](../../types/interfaces/StakingEraInfo.mdx)\>

Promise that resolves to the current era information

#### Call Signature

> **eraInfo**(`callback`: [`SubCallback`](../../../entities/types/type-aliases/SubCallback.mdx)\<[`StakingEraInfo`](../../types/interfaces/StakingEraInfo.mdx)\>): `Promise`\<[`UnsubCallback`](../../../entities/types/type-aliases/UnsubCallback.mdx)\>

Defined in: [src/api/client/Staking.ts:215](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/client/Staking.ts#L215)

Retrieve the current staking era information (with subscription support)

##### Parameters

Parameter
Type
Description

`callback`

[`SubCallback`](../../../entities/types/type-aliases/SubCallback.mdx)\<[`StakingEraInfo`](../../types/interfaces/StakingEraInfo.mdx)\>

Callback function that receives era information updates

##### Returns

`Promise`\<[`UnsubCallback`](../../../entities/types/type-aliases/UnsubCallback.mdx)\>

Promise that resolves to an unsubscribe function

##### Note

can be subscribed to, if connected to node using a web socket

***

### getValidators()

> **getValidators**(`paginationOpts?`: [`PaginationOptions`](../../../entities/types/interfaces/PaginationOptions.mdx)): `Promise`\<[`ResultSet`](../../../entities/types/interfaces/ResultSet.mdx)\<[`StakingCommission`](../../../entities/Account/types/interfaces/StakingCommission.mdx)\>\>

Defined in: [src/api/client/Staking.ts:156](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/client/Staking.ts#L156)

Return information about nomination targets

#### Parameters

Parameter
Type

`paginationOpts?`

[`PaginationOptions`](../../../entities/types/interfaces/PaginationOptions.mdx)

#### Returns

`Promise`\<[`ResultSet`](../../../entities/types/interfaces/ResultSet.mdx)\<[`StakingCommission`](../../../entities/Account/types/interfaces/StakingCommission.mdx)\>\>

#### Note

supports pagination

***

### nominate()

> **nominate**(`args`: [`NominateValidatorsParams`](../../../procedures/types/interfaces/NominateValidatorsParams.mdx), `opts?`: [`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)): `Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

Defined in: [src/api/client/Staking.ts:134](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/client/Staking.ts#L134)

Nominate validators for the bonded POLYX

#### Parameters

Parameter
Type

`args`

[`NominateValidatorsParams`](../../../procedures/types/interfaces/NominateValidatorsParams.mdx)

`opts?`

[`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

#### Note

this transaction must be signed by a controller

#### Note

this method is of type [ProcedureMethod](../../../procedures/types/interfaces/ProcedureMethod.mdx), which means you can call [nominate.checkAuthorization](../../../procedures/types/interfaces/ProcedureMethod.mdx#checkauthorization) on it to see whether the signing Account and Identity have the required roles and permissions to run it

***

### setController()

> **setController**(`args`: [`SetStakingControllerParams`](../../../procedures/types/interfaces/SetStakingControllerParams.mdx), `opts?`: [`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)): `Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

Defined in: [src/api/client/Staking.ts:142](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/client/Staking.ts#L142)

Allow for a stash account to update its controller

#### Parameters

Parameter
Type

`args`

[`SetStakingControllerParams`](../../../procedures/types/interfaces/SetStakingControllerParams.mdx)

`opts?`

[`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

#### Note

the transaction must be signed by a stash account

#### Note

Polymesh v8 makes it so the stash will become its own controller account

#### Note

this method is of type [ProcedureMethod](../../../procedures/types/interfaces/ProcedureMethod.mdx), which means you can call [setController.checkAuthorization](../../../procedures/types/interfaces/ProcedureMethod.mdx#checkauthorization) on it to see whether the signing Account and Identity have the required roles and permissions to run it

***

### setPayee()

> **setPayee**(`args`: [`SetStakingPayeeParams`](../../../procedures/types/interfaces/SetStakingPayeeParams.mdx), `opts?`: [`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)): `Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

Defined in: [src/api/client/Staking.ts:149](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/client/Staking.ts#L149)

Allow for a stash account to update where it's staking rewards are deposited

#### Parameters

Parameter
Type

`args`

[`SetStakingPayeeParams`](../../../procedures/types/interfaces/SetStakingPayeeParams.mdx)

`opts?`

[`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

#### Note

the transaction must be signed by a controller account

#### Note

this method is of type [ProcedureMethod](../../../procedures/types/interfaces/ProcedureMethod.mdx), which means you can call [setPayee.checkAuthorization](../../../procedures/types/interfaces/ProcedureMethod.mdx#checkauthorization) on it to see whether the signing Account and Identity have the required roles and permissions to run it

***

### unbond()

> **unbond**(`args`: [`UpdatePolyxBondParams`](../../../procedures/types/interfaces/UpdatePolyxBondParams.mdx), `opts?`: [`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)): `Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

Defined in: [src/api/client/Staking.ts:120](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/client/Staking.ts#L120)

Unbond POLYX for staking. The unbonded amount can be withdrawn after the lockup period

#### Parameters

Parameter
Type

`args`

[`UpdatePolyxBondParams`](../../../procedures/types/interfaces/UpdatePolyxBondParams.mdx)

`opts?`

[`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

#### Note

this method is of type [ProcedureMethod](../../../procedures/types/interfaces/ProcedureMethod.mdx), which means you can call [unbond.checkAuthorization](../../../procedures/types/interfaces/ProcedureMethod.mdx#checkauthorization) on it to see whether the signing Account and Identity have the required roles and permissions to run it

***

### withdraw()

> **withdraw**(`opts?`: [`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)): `Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

Defined in: [src/api/client/Staking.ts:127](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/client/Staking.ts#L127)

Withdraw unbonded POLYX to free it for the stash account

#### Parameters

Parameter
Type

`opts?`

[`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

#### Note

this transaction must be signed by a controller

#### Note

this method is of type [NoArgsProcedureMethod](../../../procedures/types/interfaces/NoArgsProcedureMethod.mdx), which means you can call [withdraw.checkAuthorization](../../../procedures/types/interfaces/NoArgsProcedureMethod.mdx#checkauthorization) on it to see whether the signing Account and Identity have the required roles and permissions to run it
