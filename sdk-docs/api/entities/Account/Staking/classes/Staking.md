# Class: Staking

> Defined in: [src/api/entities/Account/Staking/index.ts:26](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Account/Staking/index.ts#L26)

# Class: Staking

Defined in: [src/api/entities/Account/Staking/index.ts:26](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Account/Staking/index.ts#L26)

Handles Account staking related functionality

## Extends

- `Namespace`\<[`Account`](../../classes/Account.mdx)\>

## Methods

### getCommission()

> **getCommission**(): `Promise`\<[`StakingCommission`](../../types/interfaces/StakingCommission.mdx) \| `null`\>

Defined in: [src/api/entities/Account/Staking/index.ts:244](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Account/Staking/index.ts#L244)

Fetch the commission settings for this validator account

#### Returns

`Promise`\<[`StakingCommission`](../../types/interfaces/StakingCommission.mdx) \| `null`\>

The commission details or null if the account is not seeking nominations as a validator

***

### getController()

#### Call Signature

> **getController**(): `Promise`\<[`Account`](../../classes/Account.mdx) \| `null`\>

Defined in: [src/api/entities/Account/Staking/index.ts:185](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Account/Staking/index.ts#L185)

Fetch the controller associated to this account if there is one

##### Returns

`Promise`\<[`Account`](../../classes/Account.mdx) \| `null`\>

The controller account or null if the account is not a stash

##### Note

a stash can be its own controller

#### Call Signature

> **getController**(`callback`: [`SubCallback`](../../../types/type-aliases/SubCallback.mdx)\<[`Account`](../../classes/Account.mdx) \| `null`\>): `Promise`\<[`UnsubCallback`](../../../types/type-aliases/UnsubCallback.mdx)\>

Defined in: [src/api/entities/Account/Staking/index.ts:196](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Account/Staking/index.ts#L196)

Fetch the controller associated to this account if there is one

##### Parameters

Parameter
Type
Description

`callback`

[`SubCallback`](../../../types/type-aliases/SubCallback.mdx)\<[`Account`](../../classes/Account.mdx) \| `null`\>

Callback function that can be used to listen for changes to the controller

##### Returns

`Promise`\<[`UnsubCallback`](../../../types/type-aliases/UnsubCallback.mdx)\>

The controller account or null if the account is not a stash

##### Note

can be subscribed to, if connected to node using a web socket

##### Note

a stash can be its own controller

***

### getLedger()

> **getLedger**(): `Promise`\<[`StakingLedger`](../../types/interfaces/StakingLedger.mdx) \| `null`\>

Defined in: [src/api/entities/Account/Staking/index.ts:32](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Account/Staking/index.ts#L32)

Fetch the ledger information for a stash account

#### Returns

`Promise`\<[`StakingLedger`](../../types/interfaces/StakingLedger.mdx) \| `null`\>

The staking ledger information or null if the account is not a controller

***

### getNomination()

#### Call Signature

> **getNomination**(): `Promise`\<[`StakingNomination`](../../types/interfaces/StakingNomination.mdx) \| `null`\>

Defined in: [src/api/entities/Account/Staking/index.ts:125](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Account/Staking/index.ts#L125)

Fetch this account's current nominations

##### Returns

`Promise`\<[`StakingNomination`](../../types/interfaces/StakingNomination.mdx) \| `null`\>

The nomination details or null if the account is not a controller

#### Call Signature

> **getNomination**(`callback`: [`SubCallback`](../../../types/type-aliases/SubCallback.mdx)\<[`StakingNomination`](../../types/interfaces/StakingNomination.mdx) \| `null`\>): `Promise`\<[`UnsubCallback`](../../../types/type-aliases/UnsubCallback.mdx)\>

Defined in: [src/api/entities/Account/Staking/index.ts:135](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Account/Staking/index.ts#L135)

Fetch this account's current nominations

##### Parameters

Parameter
Type
Description

`callback`

[`SubCallback`](../../../types/type-aliases/SubCallback.mdx)\<[`StakingNomination`](../../types/interfaces/StakingNomination.mdx) \| `null`\>

Callback function that can be used to listen for changes to the nominations

##### Returns

`Promise`\<[`UnsubCallback`](../../../types/type-aliases/UnsubCallback.mdx)\>

The nomination details or null if the account is not a controller

##### Note

can be subscribed to, if connected to node using a web socket

***

### getPayee()

#### Call Signature

> **getPayee**(): `Promise`\<[`StakingPayee`](../../types/interfaces/StakingPayee.mdx) \| `null`\>

Defined in: [src/api/entities/Account/Staking/index.ts:56](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Account/Staking/index.ts#L56)

Fetch the payee that will receive a stash account's rewards

##### Returns

`Promise`\<[`StakingPayee`](../../types/interfaces/StakingPayee.mdx) \| `null`\>

The payee account or null if the account is not a stash

#### Call Signature

> **getPayee**(`callback`: [`SubCallback`](../../../types/type-aliases/SubCallback.mdx)\<[`StakingPayee`](../../types/interfaces/StakingPayee.mdx) \| `null`\>): `Promise`\<[`UnsubCallback`](../../../types/type-aliases/UnsubCallback.mdx)\>

Defined in: [src/api/entities/Account/Staking/index.ts:66](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Account/Staking/index.ts#L66)

Fetch the payee that will receive a stash account's rewards

##### Parameters

Parameter
Type
Description

`callback`

[`SubCallback`](../../../types/type-aliases/SubCallback.mdx)\<[`StakingPayee`](../../types/interfaces/StakingPayee.mdx) \| `null`\>

Callback function that can be used to listen for changes to the staking payee

##### Returns

`Promise`\<[`UnsubCallback`](../../../types/type-aliases/UnsubCallback.mdx)\>

The payee account or null if the account is not a stash

##### Note

can be subscribed to, if connected to node using a web socket
