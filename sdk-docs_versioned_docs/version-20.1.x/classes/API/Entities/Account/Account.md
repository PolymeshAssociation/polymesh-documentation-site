---
id: "Account"
title: "Class: Account"
sidebar_label: "Account"
---

[api/entities/Account](../../../../modules/API/Entities/Account/Account.md).Account

Represents an Account in the Polymesh blockchain. Accounts can hold POLYX, control Identities and vote on proposals (among other things)

## Hierarchy

- [`Entity`](../Entity/Entity.md)<`UniqueIdentifiers`, `string`\>

  ↳ **`Account`**

  ↳↳ [`MultiSig`](MultiSig/MultiSig.md)

## Properties

### address

• **address**: `string`

Polymesh-specific address of the Account. Serves as an identifier

#### Defined in

[api/entities/Account/index.ts:81](https://github.com/PolymeshAssociation/polymesh-sdk/blob/07a4c5b0/src/api/entities/Account/index.ts#L81)

___

### authorizations

• **authorizations**: [`Authorizations`](../Common/Namespaces/Authorizations/Authorizations.md)<[`Account`](Account.md)\>

#### Defined in

[api/entities/Account/index.ts:90](https://github.com/PolymeshAssociation/polymesh-sdk/blob/07a4c5b0/src/api/entities/Account/index.ts#L90)

___

### key

• **key**: `string`

A hex representation of the cryptographic public key of the Account. This is consistent across
Substrate chains, while the address depends on the chain as well.

#### Defined in

[api/entities/Account/index.ts:87](https://github.com/PolymeshAssociation/polymesh-sdk/blob/07a4c5b0/src/api/entities/Account/index.ts#L87)

___

### subsidies

• **subsidies**: [`Subsidies`](../Subsidies/Subsidies.md)

#### Defined in

[api/entities/Account/index.ts:91](https://github.com/PolymeshAssociation/polymesh-sdk/blob/07a4c5b0/src/api/entities/Account/index.ts#L91)

___

### uuid

• **uuid**: `string`

#### Inherited from

[Entity](../Entity/Entity.md).[uuid](../Entity/Entity.md#uuid)

#### Defined in

[api/entities/Entity.ts:46](https://github.com/PolymeshAssociation/polymesh-sdk/blob/07a4c5b0/src/api/entities/Entity.ts#L46)

## Methods

### checkPermissions

▸ **checkPermissions**(`permissions`): `Promise`<[`CheckPermissionsResult`](../../../../interfaces/Types/CheckPermissionsResult/CheckPermissionsResult.md)<[`Account`](../../../../enums/Types/SignerType/SignerType.md#account)\>\>

Check if this Account possesses certain Permissions to act on behalf of its corresponding Identity

#### Parameters

| Name | Type |
| :------ | :------ |
| `permissions` | [`SimplePermissions`](../../../../interfaces/Types/SimplePermissions/SimplePermissions.md) |

#### Returns

`Promise`<[`CheckPermissionsResult`](../../../../interfaces/Types/CheckPermissionsResult/CheckPermissionsResult.md)<[`Account`](../../../../enums/Types/SignerType/SignerType.md#account)\>\>

which permissions the Account is missing (if any) and the final result

___

### exists

▸ **exists**(): `Promise`<`boolean`\>

Determine whether this Account exists on chain

#### Returns

`Promise`<`boolean`\>

#### Overrides

[Entity](../Entity/Entity.md).[exists](../Entity/Entity.md#exists)

___

### getBalance

▸ **getBalance**(): `Promise`<[`Balance`](../../../../interfaces/Types/Balance/Balance.md)\>

Get the free/locked POLYX balance of the Account

**`Note`**

 can be subscribed to

#### Returns

`Promise`<[`Balance`](../../../../interfaces/Types/Balance/Balance.md)\>

▸ **getBalance**(`callback`): `Promise`<[`UnsubCallback`](../../../../modules/Types/Types.md#unsubcallback)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`SubCallback`](../../../../modules/Types/Types.md#subcallback)<[`Balance`](../../../../interfaces/Types/Balance/Balance.md)\> |

#### Returns

`Promise`<[`UnsubCallback`](../../../../modules/Types/Types.md#unsubcallback)\>

___

### getCurrentNonce

▸ **getCurrentNonce**(): `Promise`<`BigNumber`\>

Retrieve the current nonce for this Account

#### Returns

`Promise`<`BigNumber`\>

___

### getIdentity

▸ **getIdentity**(): `Promise`<``null`` \| [`Identity`](../Identity/Identity.md)\>

Retrieve the Identity associated to this Account (null if there is none)

#### Returns

`Promise`<``null`` \| [`Identity`](../Identity/Identity.md)\>

___

### getMultiSig

▸ **getMultiSig**(): `Promise`<``null`` \| [`MultiSig`](MultiSig/MultiSig.md)\>

Fetch the MultiSig this Account is part of. If this Account is not a signer on any MultiSig, return null

#### Returns

`Promise`<``null`` \| [`MultiSig`](MultiSig/MultiSig.md)\>

___

### getPermissions

▸ **getPermissions**(): `Promise`<[`Permissions`](../../../../interfaces/Types/Permissions/Permissions.md)\>

Retrieve the Permissions this Account has as a Permissioned Account for its corresponding Identity

**`Throws`**

 if there is no Identity associated with the Account

#### Returns

`Promise`<[`Permissions`](../../../../interfaces/Types/Permissions/Permissions.md)\>

___

### getSubsidy

▸ **getSubsidy**(): `Promise`<``null`` \| [`SubsidyWithAllowance`](../../../../interfaces/API/Entities/Subsidy/Types/SubsidyWithAllowance/SubsidyWithAllowance.md)\>

Get the subsidized balance of this Account and the subsidizer Account. If
  this Account isn't being subsidized, return null

**`Note`**

 can be subscribed to

**`Deprecated`**

 in favour of [subsidies.getSubsidizer](../Subsidies/Subsidies.md#getsubsidizer)

#### Returns

`Promise`<``null`` \| [`SubsidyWithAllowance`](../../../../interfaces/API/Entities/Subsidy/Types/SubsidyWithAllowance/SubsidyWithAllowance.md)\>

▸ **getSubsidy**(`callback`): `Promise`<[`UnsubCallback`](../../../../modules/Types/Types.md#unsubcallback)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`SubCallback`](../../../../modules/Types/Types.md#subcallback)<``null`` \| [`SubsidyWithAllowance`](../../../../interfaces/API/Entities/Subsidy/Types/SubsidyWithAllowance/SubsidyWithAllowance.md)\> |

#### Returns

`Promise`<[`UnsubCallback`](../../../../modules/Types/Types.md#unsubcallback)\>

___

### getTransactionHistory

▸ **getTransactionHistory**(`filters?`): `Promise`<[`ResultSet`](../../../../interfaces/Types/ResultSet/ResultSet.md)<[`ExtrinsicData`](../../../../interfaces/Types/ExtrinsicData/ExtrinsicData.md)\>\>

Retrieve a list of transactions signed by this Account. Can be filtered using parameters

**`Note`**

 if both `blockNumber` and `blockHash` are passed, only `blockNumber` is taken into account

**`Note`**

 uses the middleware

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filters` | `Object` | - |
| `filters.blockHash?` | `string` | - |
| `filters.blockNumber?` | `BigNumber` | - |
| `filters.orderBy?` | [`TransactionOrderByInput`](../../../../modules/Types/Types.md#transactionorderbyinput) | - |
| `filters.size?` | `BigNumber` | page size |
| `filters.start?` | `BigNumber` | page offset |
| `filters.success?` | `boolean` | whether the transaction was successful or not |
| `filters.tag?` | [`TxTag`](../../../../modules/Generated/Types/Types.md#txtag) | tag associated with the transaction |

#### Returns

`Promise`<[`ResultSet`](../../../../interfaces/Types/ResultSet/ResultSet.md)<[`ExtrinsicData`](../../../../interfaces/Types/ExtrinsicData/ExtrinsicData.md)\>\>

___

### getTransactionHistoryV2

▸ **getTransactionHistoryV2**(`filters?`): `Promise`<[`ResultSet`](../../../../interfaces/Types/ResultSet/ResultSet.md)<[`ExtrinsicData`](../../../../interfaces/Types/ExtrinsicData/ExtrinsicData.md)\>\>

Retrieve a list of transactions signed by this Account. Can be filtered using parameters

**`Note`**

 if both `blockNumber` and `blockHash` are passed, only `blockNumber` is taken into account

**`Note`**

 uses the middlewareV2

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

`Promise`<[`ResultSet`](../../../../interfaces/Types/ResultSet/ResultSet.md)<[`ExtrinsicData`](../../../../interfaces/Types/ExtrinsicData/ExtrinsicData.md)\>\>

___

### getTypeInfo

▸ **getTypeInfo**(): `Promise`<[`AccountTypeInfo`](../../../../interfaces/API/Entities/Account/Types/AccountTypeInfo/AccountTypeInfo.md)\>

Retrieve the type of Account, and its relation to an Identity, if applicable

#### Returns

`Promise`<[`AccountTypeInfo`](../../../../interfaces/API/Entities/Account/Types/AccountTypeInfo/AccountTypeInfo.md)\>

___

### isEqual

▸ **isEqual**(`entity`): `boolean`

Determine whether this Entity is the same as another one

#### Parameters

| Name | Type |
| :------ | :------ |
| `entity` | [`Entity`](../Entity/Entity.md)<`unknown`, `unknown`\> |

#### Returns

`boolean`

#### Inherited from

[Entity](../Entity/Entity.md).[isEqual](../Entity/Entity.md#isequal)

___

### isFrozen

▸ **isFrozen**(): `Promise`<`boolean`\>

Check whether this Account is frozen. If frozen, it cannot perform any Identity related action until the primary Account of the Identity unfreezes all secondary Accounts

**`Note`**

 returns false if the Account isn't associated to any Identity

#### Returns

`Promise`<`boolean`\>

___

### toHuman

▸ **toHuman**(): `string`

Return the Account's address

#### Returns

`string`

#### Overrides

[Entity](../Entity/Entity.md).[toHuman](../Entity/Entity.md#tohuman)

___

### generateUuid

▸ `Static` **generateUuid**<`Identifiers`\>(`identifiers`): `string`

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

___

### unserialize

▸ `Static` **unserialize**<`Identifiers`\>(`serialized`): `Identifiers`

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
