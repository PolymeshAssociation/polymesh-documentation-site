---
id: "Account"
title: "Class: Account"
sidebar_label: "Account"
---

[api/entities/Account](../../../../modules/API/Entities/Account/Account.md).Account

Represents an Account in the Polymesh blockchain. Accounts can hold POLYX, control Identities and vote on proposals (among other things)

## Hierarchy

- [`Entity`](../Entity/Entity.md)\<`UniqueIdentifiers`, `string`\>

  ↳ **`Account`**

  ↳↳ [`MultiSig`](MultiSig/MultiSig.md)

## Properties

### address

• **address**: `string`

Polymesh-specific address of the Account. Serves as an identifier

#### Defined in

[api/entities/Account/index.ts:82](https://github.com/PolymeshAssociation/polymesh-sdk/blob/654b99c8d/src/api/entities/Account/index.ts#L82)

___

### authorizations

• **authorizations**: [`Authorizations`](../Common/Namespaces/Authorizations/Authorizations.md)\<[`Account`](Account.md)\>

#### Defined in

[api/entities/Account/index.ts:91](https://github.com/PolymeshAssociation/polymesh-sdk/blob/654b99c8d/src/api/entities/Account/index.ts#L91)

___

### key

• **key**: `string`

A hex representation of the cryptographic public key of the Account. This is consistent across
Substrate chains, while the address depends on the chain as well.

#### Defined in

[api/entities/Account/index.ts:88](https://github.com/PolymeshAssociation/polymesh-sdk/blob/654b99c8d/src/api/entities/Account/index.ts#L88)

___

### subsidies

• **subsidies**: [`Subsidies`](../Subsidies/Subsidies.md)

#### Defined in

[api/entities/Account/index.ts:92](https://github.com/PolymeshAssociation/polymesh-sdk/blob/654b99c8d/src/api/entities/Account/index.ts#L92)

___

### uuid

• **uuid**: `string`

#### Inherited from

[Entity](../Entity/Entity.md).[uuid](../Entity/Entity.md#uuid)

#### Defined in

[api/entities/Entity.ts:46](https://github.com/PolymeshAssociation/polymesh-sdk/blob/654b99c8d/src/api/entities/Entity.ts#L46)

## Methods

### checkPermissions

▸ **checkPermissions**(`permissions`): `Promise`\<[`CheckPermissionsResult`](../../../../interfaces/API/Entities/Types/CheckPermissionsResult/CheckPermissionsResult.md)\<[`Account`](../../../../enums/API/Entities/Types/SignerType/SignerType.md#account)\>\>

Check if this Account possesses certain Permissions to act on behalf of its corresponding Identity

#### Parameters

| Name | Type |
| :------ | :------ |
| `permissions` | [`SimplePermissions`](../../../../interfaces/API/Entities/Types/SimplePermissions/SimplePermissions.md) |

#### Returns

`Promise`\<[`CheckPermissionsResult`](../../../../interfaces/API/Entities/Types/CheckPermissionsResult/CheckPermissionsResult.md)\<[`Account`](../../../../enums/API/Entities/Types/SignerType/SignerType.md#account)\>\>

which permissions the Account is missing (if any) and the final result

#### Defined in

[api/entities/Account/index.ts:372](https://github.com/PolymeshAssociation/polymesh-sdk/blob/654b99c8d/src/api/entities/Account/index.ts#L372)

___

### exists

▸ **exists**(): `Promise`\<`boolean`\>

Determine whether this Account exists on chain

#### Returns

`Promise`\<`boolean`\>

#### Overrides

[Entity](../Entity/Entity.md).[exists](../Entity/Entity.md#exists)

#### Defined in

[api/entities/Account/index.ts:455](https://github.com/PolymeshAssociation/polymesh-sdk/blob/654b99c8d/src/api/entities/Account/index.ts#L455)

___

### getBalance

▸ **getBalance**(): `Promise`\<[`Balance`](../../../../interfaces/API/Entities/Account/Types/Balance/Balance.md)\>

Get the free/locked POLYX balance of the Account

#### Returns

`Promise`\<[`Balance`](../../../../interfaces/API/Entities/Account/Types/Balance/Balance.md)\>

**`Note`**

can be subscribed to, if connected to node using a web socket

#### Defined in

[api/entities/Account/index.ts:115](https://github.com/PolymeshAssociation/polymesh-sdk/blob/654b99c8d/src/api/entities/Account/index.ts#L115)

▸ **getBalance**(`callback`): `Promise`\<[`UnsubCallback`](../../../../modules/API/Entities/Types/Types.md#unsubcallback)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`SubCallback`](../../../../modules/API/Entities/Types/Types.md#subcallback)\<[`Balance`](../../../../interfaces/API/Entities/Account/Types/Balance/Balance.md)\> |

#### Returns

`Promise`\<[`UnsubCallback`](../../../../modules/API/Entities/Types/Types.md#unsubcallback)\>

#### Defined in

[api/entities/Account/index.ts:116](https://github.com/PolymeshAssociation/polymesh-sdk/blob/654b99c8d/src/api/entities/Account/index.ts#L116)

___

### getCurrentNonce

▸ **getCurrentNonce**(): `Promise`\<`BigNumber`\>

Retrieve the current nonce for this Account

#### Returns

`Promise`\<`BigNumber`\>

#### Defined in

[api/entities/Account/index.ts:469](https://github.com/PolymeshAssociation/polymesh-sdk/blob/654b99c8d/src/api/entities/Account/index.ts#L469)

___

### getIdentity

▸ **getIdentity**(): `Promise`\<``null`` \| [`Identity`](../Identity/Identity.md)\>

Retrieve the Identity associated to this Account (null if there is none)

#### Returns

`Promise`\<``null`` \| [`Identity`](../Identity/Identity.md)\>

#### Defined in

[api/entities/Account/index.ts:160](https://github.com/PolymeshAssociation/polymesh-sdk/blob/654b99c8d/src/api/entities/Account/index.ts#L160)

___

### getMultiSig

▸ **getMultiSig**(): `Promise`\<``null`` \| [`MultiSig`](MultiSig/MultiSig.md)\>

Fetch the MultiSig this Account is part of. If this Account is not a signer on any MultiSig, return null

#### Returns

`Promise`\<``null`` \| [`MultiSig`](MultiSig/MultiSig.md)\>

#### Defined in

[api/entities/Account/index.ts:427](https://github.com/PolymeshAssociation/polymesh-sdk/blob/654b99c8d/src/api/entities/Account/index.ts#L427)

___

### getPendingProposals

▸ **getPendingProposals**(): `Promise`\<[`MultiSigProposal`](../MultiSigProposal/MultiSigProposal.md)[]\>

Returns pending MultiSig proposals for this Account

#### Returns

`Promise`\<[`MultiSigProposal`](../MultiSigProposal/MultiSigProposal.md)[]\>

**`Note`**

uses the middleware

**`Throws`**

if the Account is not a signer on any MultiSig

#### Defined in

[api/entities/Account/index.ts:571](https://github.com/PolymeshAssociation/polymesh-sdk/blob/654b99c8d/src/api/entities/Account/index.ts#L571)

___

### getPermissions

▸ **getPermissions**(): `Promise`\<[`Permissions`](../../../../interfaces/API/Entities/Types/Permissions/Permissions.md)\>

Retrieve the Permissions this Account has as a Permissioned Account for its corresponding Identity

#### Returns

`Promise`\<[`Permissions`](../../../../interfaces/API/Entities/Types/Permissions/Permissions.md)\>

**`Throws`**

if there is no Identity associated with the Account

#### Defined in

[api/entities/Account/index.ts:333](https://github.com/PolymeshAssociation/polymesh-sdk/blob/654b99c8d/src/api/entities/Account/index.ts#L333)

___

### getPolyxTransactions

▸ **getPolyxTransactions**(`filters`): `Promise`\<[`ResultSet`](../../../../interfaces/API/Entities/Types/ResultSet/ResultSet.md)\<[`HistoricPolyxTransaction`](../../../../interfaces/API/Entities/Account/Types/HistoricPolyxTransaction/HistoricPolyxTransaction.md)\>\>

Returns POLYX transactions associated with this account

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filters` | `Object` | - |
| `filters.size?` | `BigNumber` | page size |
| `filters.start?` | `BigNumber` | page offset |

#### Returns

`Promise`\<[`ResultSet`](../../../../interfaces/API/Entities/Types/ResultSet/ResultSet.md)\<[`HistoricPolyxTransaction`](../../../../interfaces/API/Entities/Account/Types/HistoricPolyxTransaction/HistoricPolyxTransaction.md)\>\>

**`Note`**

uses the middleware

#### Defined in

[api/entities/Account/index.ts:553](https://github.com/PolymeshAssociation/polymesh-sdk/blob/654b99c8d/src/api/entities/Account/index.ts#L553)

___

### getSubsidy

▸ **getSubsidy**(): `Promise`\<``null`` \| [`SubsidyWithAllowance`](../../../../interfaces/API/Entities/Subsidy/Types/SubsidyWithAllowance/SubsidyWithAllowance.md)\>

Get the subsidized balance of this Account and the subsidizer Account. If
  this Account isn't being subsidized, return null

#### Returns

`Promise`\<``null`` \| [`SubsidyWithAllowance`](../../../../interfaces/API/Entities/Subsidy/Types/SubsidyWithAllowance/SubsidyWithAllowance.md)\>

**`Note`**

can be subscribed to, if connected to node using a web socket

**`Deprecated`**

in favour of [subsidies.getSubsidizer](../Subsidies/Subsidies.md#getsubsidizer)

#### Defined in

[api/entities/Account/index.ts:140](https://github.com/PolymeshAssociation/polymesh-sdk/blob/654b99c8d/src/api/entities/Account/index.ts#L140)

▸ **getSubsidy**(`callback`): `Promise`\<[`UnsubCallback`](../../../../modules/API/Entities/Types/Types.md#unsubcallback)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`SubCallback`](../../../../modules/API/Entities/Types/Types.md#subcallback)\<``null`` \| [`SubsidyWithAllowance`](../../../../interfaces/API/Entities/Subsidy/Types/SubsidyWithAllowance/SubsidyWithAllowance.md)\> |

#### Returns

`Promise`\<[`UnsubCallback`](../../../../modules/API/Entities/Types/Types.md#unsubcallback)\>

#### Defined in

[api/entities/Account/index.ts:141](https://github.com/PolymeshAssociation/polymesh-sdk/blob/654b99c8d/src/api/entities/Account/index.ts#L141)

___

### getTransactionHistory

▸ **getTransactionHistory**(`filters?`): `Promise`\<[`ResultSet`](../../../../interfaces/API/Entities/Types/ResultSet/ResultSet.md)\<[`ExtrinsicData`](../../../../interfaces/API/Client/Types/ExtrinsicData/ExtrinsicData.md)\>\>

Retrieve a list of transactions signed by this Account. Can be filtered using parameters

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filters` | `Object` | - |
| `filters.blockHash?` | `string` | - |
| `filters.blockNumber?` | `BigNumber` | - |
| `filters.orderBy?` | [`ExtrinsicsOrderBy`](../../../../enums/Types/ExtrinsicsOrderBy/ExtrinsicsOrderBy.md) | - |
| `filters.size?` | `BigNumber` | page size |
| `filters.start?` | `BigNumber` | page offset |
| `filters.success?` | `boolean` | whether the transaction was successful or not |
| `filters.tag?` | [`TxTag`](../../../../modules/Generated/Types/Types.md#txtag) | tag associated with the transaction |

#### Returns

`Promise`\<[`ResultSet`](../../../../interfaces/API/Entities/Types/ResultSet/ResultSet.md)\<[`ExtrinsicData`](../../../../interfaces/API/Client/Types/ExtrinsicData/ExtrinsicData.md)\>\>

**`Note`**

if both `blockNumber` and `blockHash` are passed, only `blockNumber` is taken into account.
Also, for ordering by block_id, one should pass `ExtrinsicsOrderBy.CreatedAtAsc` or `ExtrinsicsOrderBy.CreatedAtDesc`
in order of their choice (since block ID is a string field in middleware v2)

**`Note`**

uses the middleware v2

#### Defined in

[api/entities/Account/index.ts:196](https://github.com/PolymeshAssociation/polymesh-sdk/blob/654b99c8d/src/api/entities/Account/index.ts#L196)

___

### getTypeInfo

▸ **getTypeInfo**(): `Promise`\<[`AccountTypeInfo`](../../../../interfaces/API/Entities/Account/Types/AccountTypeInfo/AccountTypeInfo.md)\>

Retrieve the type of Account, and its relation to an Identity, if applicable

#### Returns

`Promise`\<[`AccountTypeInfo`](../../../../interfaces/API/Entities/Account/Types/AccountTypeInfo/AccountTypeInfo.md)\>

#### Defined in

[api/entities/Account/index.ts:490](https://github.com/PolymeshAssociation/polymesh-sdk/blob/654b99c8d/src/api/entities/Account/index.ts#L490)

___

### isEqual

▸ **isEqual**(`entity`): `boolean`

Determine whether this Entity is the same as another one

#### Parameters

| Name | Type |
| :------ | :------ |
| `entity` | [`Entity`](../Entity/Entity.md)\<`unknown`, `unknown`\> |

#### Returns

`boolean`

#### Inherited from

[Entity](../Entity/Entity.md).[isEqual](../Entity/Entity.md#isequal)

#### Defined in

[api/entities/Entity.ts:61](https://github.com/PolymeshAssociation/polymesh-sdk/blob/654b99c8d/src/api/entities/Entity.ts#L61)

___

### isFrozen

▸ **isFrozen**(): `Promise`\<`boolean`\>

Check whether this Account is frozen. If frozen, it cannot perform any Identity related action until the primary Account of the Identity unfreezes all secondary Accounts

#### Returns

`Promise`\<`boolean`\>

**`Note`**

returns false if the Account isn't associated to any Identity

#### Defined in

[api/entities/Account/index.ts:312](https://github.com/PolymeshAssociation/polymesh-sdk/blob/654b99c8d/src/api/entities/Account/index.ts#L312)

___

### toHuman

▸ **toHuman**(): `string`

Return the Account's address

#### Returns

`string`

#### Overrides

[Entity](../Entity/Entity.md).[toHuman](../Entity/Entity.md#tohuman)

#### Defined in

[api/entities/Account/index.ts:462](https://github.com/PolymeshAssociation/polymesh-sdk/blob/654b99c8d/src/api/entities/Account/index.ts#L462)

___

### generateUuid

▸ `Static` **generateUuid**\<`Identifiers`\>(`identifiers`): `string`

Generate the Entity's UUID from its identifying properties

#### Type parameters

| Name |
| :------ |
| `Identifiers` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `identifiers` | `Identifiers` |

#### Returns

`string`

#### Inherited from

[Entity](../Entity/Entity.md).[generateUuid](../Entity/Entity.md#generateuuid)

#### Defined in

[api/entities/Entity.ts:14](https://github.com/PolymeshAssociation/polymesh-sdk/blob/654b99c8d/src/api/entities/Entity.ts#L14)

___

### unserialize

▸ `Static` **unserialize**\<`Identifiers`\>(`serialized`): `Identifiers`

Unserialize a UUID into its Unique Identifiers

#### Type parameters

| Name |
| :------ |
| `Identifiers` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `serialized` | `string` | UUID to unserialize |

#### Returns

`Identifiers`

#### Inherited from

[Entity](../Entity/Entity.md).[unserialize](../Entity/Entity.md#unserialize)

#### Defined in

[api/entities/Entity.ts:23](https://github.com/PolymeshAssociation/polymesh-sdk/blob/654b99c8d/src/api/entities/Entity.ts#L23)
