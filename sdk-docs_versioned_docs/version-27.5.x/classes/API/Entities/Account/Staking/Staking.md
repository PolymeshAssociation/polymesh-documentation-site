---
id: "Staking"
title: "Class: Staking"
sidebar_label: "Staking"
---

[api/entities/Account/Staking](../../../../../modules/API/Entities/Account/Staking/Staking.md).Staking

Handles Account staking related functionality

## Hierarchy

- `Namespace`\<[`Account`](../Account.md)\>

  ↳ **`Staking`**

## Methods

### getCommission

▸ **getCommission**(): `Promise`\<``null`` \| [`StakingCommission`](../../../../../interfaces/API/Entities/Account/Types/StakingCommission/StakingCommission.md)\>

#### Returns

`Promise`\<``null`` \| [`StakingCommission`](../../../../../interfaces/API/Entities/Account/Types/StakingCommission/StakingCommission.md)\>

null unless the account is seeking nominations as a validator

#### Defined in

[api/entities/Account/Staking/index.ts:216](https://github.com/PolymeshAssociation/polymesh-sdk/blob/995f17653/src/api/entities/Account/Staking/index.ts#L216)

___

### getController

▸ **getController**(): `Promise`\<``null`` \| [`Account`](../Account.md)\>

Fetch the controller associated to this account if there is one

#### Returns

`Promise`\<``null`` \| [`Account`](../Account.md)\>

null unless the account is a stash

**`Note`**

can be subscribed to, if connected to node using a web socket

**`Note`**

a stash can be its own controller

#### Defined in

[api/entities/Account/Staking/index.ts:169](https://github.com/PolymeshAssociation/polymesh-sdk/blob/995f17653/src/api/entities/Account/Staking/index.ts#L169)

▸ **getController**(`callback`): `Promise`\<[`UnsubCallback`](../../../../../modules/API/Entities/Types/Types.md#unsubcallback)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`SubCallback`](../../../../../modules/API/Entities/Types/Types.md#subcallback)\<``null`` \| [`Account`](../Account.md)\> |

#### Returns

`Promise`\<[`UnsubCallback`](../../../../../modules/API/Entities/Types/Types.md#unsubcallback)\>

#### Defined in

[api/entities/Account/Staking/index.ts:170](https://github.com/PolymeshAssociation/polymesh-sdk/blob/995f17653/src/api/entities/Account/Staking/index.ts#L170)

___

### getLedger

▸ **getLedger**(): `Promise`\<``null`` \| [`StakingLedger`](../../../../../interfaces/API/Entities/Account/Types/StakingLedger/StakingLedger.md)\>

Fetch the ledger information for a stash account

#### Returns

`Promise`\<``null`` \| [`StakingLedger`](../../../../../interfaces/API/Entities/Account/Types/StakingLedger/StakingLedger.md)\>

null unless the account is a controller

#### Defined in

[api/entities/Account/Staking/index.ts:32](https://github.com/PolymeshAssociation/polymesh-sdk/blob/995f17653/src/api/entities/Account/Staking/index.ts#L32)

___

### getNomination

▸ **getNomination**(): `Promise`\<``null`` \| [`StakingNomination`](../../../../../interfaces/API/Entities/Account/Types/StakingNomination/StakingNomination.md)\>

Fetch this account's current nominations

#### Returns

`Promise`\<``null`` \| [`StakingNomination`](../../../../../interfaces/API/Entities/Account/Types/StakingNomination/StakingNomination.md)\>

null unless the account is a controller

**`Note`**

can be subscribed to, if connected to node using a web socket

#### Defined in

[api/entities/Account/Staking/index.ts:117](https://github.com/PolymeshAssociation/polymesh-sdk/blob/995f17653/src/api/entities/Account/Staking/index.ts#L117)

▸ **getNomination**(`callback`): `Promise`\<[`UnsubCallback`](../../../../../modules/API/Entities/Types/Types.md#unsubcallback)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`SubCallback`](../../../../../modules/API/Entities/Types/Types.md#subcallback)\<``null`` \| [`StakingNomination`](../../../../../interfaces/API/Entities/Account/Types/StakingNomination/StakingNomination.md)\> |

#### Returns

`Promise`\<[`UnsubCallback`](../../../../../modules/API/Entities/Types/Types.md#unsubcallback)\>

#### Defined in

[api/entities/Account/Staking/index.ts:118](https://github.com/PolymeshAssociation/polymesh-sdk/blob/995f17653/src/api/entities/Account/Staking/index.ts#L118)

___

### getPayee

▸ **getPayee**(): `Promise`\<``null`` \| [`StakingPayee`](../../../../../interfaces/API/Entities/Account/Types/StakingPayee/StakingPayee.md)\>

Fetch the payee that will receive a stash account's rewards

#### Returns

`Promise`\<``null`` \| [`StakingPayee`](../../../../../interfaces/API/Entities/Account/Types/StakingPayee/StakingPayee.md)\>

**`Note`**

null is returned when the account is not a stash

**`Note`**

can be subscribed to, if connected to node using a web socket

#### Defined in

[api/entities/Account/Staking/index.ts:57](https://github.com/PolymeshAssociation/polymesh-sdk/blob/995f17653/src/api/entities/Account/Staking/index.ts#L57)

▸ **getPayee**(`callback`): `Promise`\<[`UnsubCallback`](../../../../../modules/API/Entities/Types/Types.md#unsubcallback)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`SubCallback`](../../../../../modules/API/Entities/Types/Types.md#subcallback)\<``null`` \| [`StakingPayee`](../../../../../interfaces/API/Entities/Account/Types/StakingPayee/StakingPayee.md)\> |

#### Returns

`Promise`\<[`UnsubCallback`](../../../../../modules/API/Entities/Types/Types.md#unsubcallback)\>

#### Defined in

[api/entities/Account/Staking/index.ts:58](https://github.com/PolymeshAssociation/polymesh-sdk/blob/995f17653/src/api/entities/Account/Staking/index.ts#L58)
