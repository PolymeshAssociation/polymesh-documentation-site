---
id: "Staking"
title: "Class: Staking"
sidebar_label: "Staking"
---

[api/client/Staking](../../../../modules/API/Client/Staking/Staking.md).Staking

Handles Staking related functionality

## Methods

### bond

▸ **bond**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

Bond POLYX for staking

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`BondPolyxParams`](../../../../interfaces/API/Procedures/Types/BondPolyxParams/BondPolyxParams.md) |
| `opts?` | [`ProcedureOpts`](../../../../interfaces/API/Procedures/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

**`Note`**

the signing account cannot be a stash

**`Note`**

this method is of type [ProcedureMethod](../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [bond.checkAuthorization](../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/client/Staking.ts:112](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9e72221/src/api/client/Staking.ts#L112)

___

### bondExtra

▸ **bondExtra**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

Bond extra POLYX for staking

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`UpdatePolyxBondParams`](../../../../interfaces/API/Procedures/Types/UpdatePolyxBondParams/UpdatePolyxBondParams.md) |
| `opts?` | [`ProcedureOpts`](../../../../interfaces/API/Procedures/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

**`Note`**

this transaction must be signed by a stash

**`Note`**

this method is of type [ProcedureMethod](../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [bondExtra.checkAuthorization](../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/client/Staking.ts:124](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9e72221/src/api/client/Staking.ts#L124)

___

### eraInfo

▸ **eraInfo**(): `Promise`\<[`StakingEraInfo`](../../../../interfaces/API/Client/Types/StakingEraInfo/StakingEraInfo.md)\>

Retrieve the current staking era

#### Returns

`Promise`\<[`StakingEraInfo`](../../../../interfaces/API/Client/Types/StakingEraInfo/StakingEraInfo.md)\>

**`Note`**

can be subscribed to, if connected to node using a web socket

#### Defined in

[api/client/Staking.ts:239](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9e72221/src/api/client/Staking.ts#L239)

▸ **eraInfo**(`callback`): `Promise`\<[`UnsubCallback`](../../../../modules/API/Entities/Types/Types.md#unsubcallback)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`SubCallback`](../../../../modules/API/Entities/Types/Types.md#subcallback)\<[`StakingEraInfo`](../../../../interfaces/API/Client/Types/StakingEraInfo/StakingEraInfo.md)\> |

#### Returns

`Promise`\<[`UnsubCallback`](../../../../modules/API/Entities/Types/Types.md#unsubcallback)\>

#### Defined in

[api/client/Staking.ts:240](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9e72221/src/api/client/Staking.ts#L240)

___

### getValidators

▸ **getValidators**(`paginationOpts?`): `Promise`\<[`ResultSet`](../../../../interfaces/API/Entities/Types/ResultSet/ResultSet.md)\<[`StakingCommission`](../../../../interfaces/API/Entities/Account/Types/StakingCommission/StakingCommission.md)\>\>

Return information about nomination targets

#### Parameters

| Name | Type |
| :------ | :------ |
| `paginationOpts?` | [`PaginationOptions`](../../../../interfaces/API/Entities/Types/PaginationOptions/PaginationOptions.md) |

#### Returns

`Promise`\<[`ResultSet`](../../../../interfaces/API/Entities/Types/ResultSet/ResultSet.md)\<[`StakingCommission`](../../../../interfaces/API/Entities/Account/Types/StakingCommission/StakingCommission.md)\>\>

**`Note`**

supports pagination

#### Defined in

[api/client/Staking.ts:191](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9e72221/src/api/client/Staking.ts#L191)

___

### nominate

▸ **nominate**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

Nominate validators for the bonded POLYX

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`NominateValidatorsParams`](../../../../interfaces/API/Procedures/Types/NominateValidatorsParams/NominateValidatorsParams.md) |
| `opts?` | [`ProcedureOpts`](../../../../interfaces/API/Procedures/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

**`Note`**

this transaction must be signed by a controller

**`Note`**

this method is of type [ProcedureMethod](../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [nominate.checkAuthorization](../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/client/Staking.ts:158](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9e72221/src/api/client/Staking.ts#L158)

___

### setController

▸ **setController**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

Allow for a stash account to update its controller

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`SetStakingControllerParams`](../../../../interfaces/API/Procedures/Types/SetStakingControllerParams/SetStakingControllerParams.md) |
| `opts?` | [`ProcedureOpts`](../../../../interfaces/API/Procedures/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

**`Note`**

the transaction must be signed by a stash account

**`Note`**

this method is of type [ProcedureMethod](../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [setController.checkAuthorization](../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/client/Staking.ts:170](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9e72221/src/api/client/Staking.ts#L170)

___

### setPayee

▸ **setPayee**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

Allow for a stash account to update where it's staking rewards are deposited

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`SetStakingPayeeParams`](../../../../interfaces/API/Procedures/Types/SetStakingPayeeParams/SetStakingPayeeParams.md) |
| `opts?` | [`ProcedureOpts`](../../../../interfaces/API/Procedures/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

**`Note`**

the transaction must be signed by a controller account

**`Note`**

this method is of type [ProcedureMethod](../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [setPayee.checkAuthorization](../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/client/Staking.ts:182](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9e72221/src/api/client/Staking.ts#L182)

___

### unbond

▸ **unbond**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

Unbond POLYX for staking. The unbonded amount can be withdrawn after the lockup period

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`UpdatePolyxBondParams`](../../../../interfaces/API/Procedures/Types/UpdatePolyxBondParams/UpdatePolyxBondParams.md) |
| `opts?` | [`ProcedureOpts`](../../../../interfaces/API/Procedures/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

**`Note`**

this method is of type [ProcedureMethod](../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [unbond.checkAuthorization](../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/client/Staking.ts:134](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9e72221/src/api/client/Staking.ts#L134)

___

### withdraw

▸ **withdraw**(`opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

Withdraw unbonded POLYX to free it for the stash account

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`ProcedureOpts`](../../../../interfaces/API/Procedures/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

**`Note`**

this transaction must be signed by a controller

**`Note`**

this method is of type [NoArgsProcedureMethod](../../../../interfaces/API/Procedures/Types/NoArgsProcedureMethod/NoArgsProcedureMethod.md), which means you can call [withdraw.checkAuthorization](../../../../interfaces/API/Procedures/Types/NoArgsProcedureMethod/NoArgsProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/client/Staking.ts:146](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9e72221/src/api/client/Staking.ts#L146)
