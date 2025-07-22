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

[api/entities/Account/Staking/index.ts:245](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/Account/Staking/index.ts#L245)

___

### getController

▸ **getController**(): `Promise`\<``null`` \| [`Account`](../Account.md)\>

Fetch the controller associated to this account if there is one

#### Returns

`Promise`\<``null`` \| [`Account`](../Account.md)\>

The controller account or null if the account is not a stash

**`Note`**

can be subscribed to, if connected to node using a web socket

**`Note`**

a stash can be its own controller

#### Defined in

[api/entities/Account/Staking/index.ts:189](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/Account/Staking/index.ts#L189)

▸ **getController**(`callback`): `Promise`\<[`UnsubCallback`](../../../../../modules/API/Entities/Types/Types.md#unsubcallback)\>

Fetch the controller associated to this account if there is one

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | [`SubCallback`](../../../../../modules/API/Entities/Types/Types.md#subcallback)\<``null`` \| [`Account`](../Account.md)\> | Callback function to handle subscription updates |

#### Returns

`Promise`\<[`UnsubCallback`](../../../../../modules/API/Entities/Types/Types.md#unsubcallback)\>

An unsubscribe function

**`Note`**

can be subscribed to, if connected to node using a web socket

**`Note`**

a stash can be its own controller

#### Defined in

[api/entities/Account/Staking/index.ts:199](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/Account/Staking/index.ts#L199)

___

### getLedger

▸ **getLedger**(): `Promise`\<``null`` \| [`StakingLedger`](../../../../../interfaces/API/Entities/Account/Types/StakingLedger/StakingLedger.md)\>

Fetch the ledger information for a stash account

#### Returns

`Promise`\<``null`` \| [`StakingLedger`](../../../../../interfaces/API/Entities/Account/Types/StakingLedger/StakingLedger.md)\>

null unless the account is a controller

#### Defined in

[api/entities/Account/Staking/index.ts:32](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/Account/Staking/index.ts#L32)

___

### getNomination

▸ **getNomination**(): `Promise`\<``null`` \| [`StakingNomination`](../../../../../interfaces/API/Entities/Account/Types/StakingNomination/StakingNomination.md)\>

Fetch this account's current nominations

#### Returns

`Promise`\<``null`` \| [`StakingNomination`](../../../../../interfaces/API/Entities/Account/Types/StakingNomination/StakingNomination.md)\>

The nominations or null if the account is not a controller

**`Note`**

can be subscribed to, if connected to node using a web socket

**`Note`**

null is returned unless the account is a controller

#### Defined in

[api/entities/Account/Staking/index.ts:128](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/Account/Staking/index.ts#L128)

▸ **getNomination**(`callback`): `Promise`\<[`UnsubCallback`](../../../../../modules/API/Entities/Types/Types.md#unsubcallback)\>

Fetch this account's current nominations

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | [`SubCallback`](../../../../../modules/API/Entities/Types/Types.md#subcallback)\<``null`` \| [`StakingNomination`](../../../../../interfaces/API/Entities/Account/Types/StakingNomination/StakingNomination.md)\> | Callback function to handle subscription updates |

#### Returns

`Promise`\<[`UnsubCallback`](../../../../../modules/API/Entities/Types/Types.md#unsubcallback)\>

An unsubscribe function

**`Note`**

can be subscribed to, if connected to node using a web socket

**`Note`**

null is returned unless the account is a controller

#### Defined in

[api/entities/Account/Staking/index.ts:138](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/Account/Staking/index.ts#L138)

___

### getPayee

▸ **getPayee**(): `Promise`\<``null`` \| [`StakingPayee`](../../../../../interfaces/API/Entities/Account/Types/StakingPayee/StakingPayee.md)\>

Fetch the payee that will receive a stash account's rewards

#### Returns

`Promise`\<``null`` \| [`StakingPayee`](../../../../../interfaces/API/Entities/Account/Types/StakingPayee/StakingPayee.md)\>

The payee account or null if the account is not a stash

**`Note`**

null is returned when the account is not a stash

**`Note`**

can be subscribed to, if connected to node using a web socket

#### Defined in

[api/entities/Account/Staking/index.ts:58](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/Account/Staking/index.ts#L58)

▸ **getPayee**(`callback`): `Promise`\<[`UnsubCallback`](../../../../../modules/API/Entities/Types/Types.md#unsubcallback)\>

Fetch the payee that will receive a stash account's rewards

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | [`SubCallback`](../../../../../modules/API/Entities/Types/Types.md#subcallback)\<``null`` \| [`StakingPayee`](../../../../../interfaces/API/Entities/Account/Types/StakingPayee/StakingPayee.md)\> | Callback function to handle subscription updates |

#### Returns

`Promise`\<[`UnsubCallback`](../../../../../modules/API/Entities/Types/Types.md#unsubcallback)\>

An unsubscribe function

**`Note`**

null is returned when the account is not a stash

**`Note`**

can be subscribed to, if connected to node using a web socket

#### Defined in

[api/entities/Account/Staking/index.ts:68](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/Account/Staking/index.ts#L68)
