---
id: "MultiSig"
title: "Class: MultiSig"
sidebar_label: "MultiSig"
---

[api/entities/Account/MultiSig](../../../../../modules/API/Entities/Account/MultiSig/MultiSig.md).MultiSig

Represents a MultiSig Account. A MultiSig Account is composed of one or more signing Accounts. In order to submit a transaction, a specific amount of those signing Accounts must approve it first

## Hierarchy

- [`Account`](../Account.md)

  ↳ **`MultiSig`**

## Properties

### address

• **address**: `string`

Polymesh-specific address of the Account. Serves as an identifier

#### Inherited from

[Account](../Account.md).[address](../Account.md#address)

#### Defined in

[api/entities/Account/index.ts:74](https://github.com/PolymeshAssociation/polymesh-sdk/blob/daafaa68f/src/api/entities/Account/index.ts#L74)

___

### authorizations

• **authorizations**: [`Authorizations`](../../Common/Namespaces/Authorizations/Authorizations.md)\<[`Account`](../Account.md)\>

#### Inherited from

[Account](../Account.md).[authorizations](../Account.md#authorizations)

#### Defined in

[api/entities/Account/index.ts:83](https://github.com/PolymeshAssociation/polymesh-sdk/blob/daafaa68f/src/api/entities/Account/index.ts#L83)

___

### key

• **key**: `string`

A hex representation of the cryptographic public key of the Account. This is consistent across
Substrate chains, while the address depends on the chain as well.

#### Inherited from

[Account](../Account.md).[key](../Account.md#key)

#### Defined in

[api/entities/Account/index.ts:80](https://github.com/PolymeshAssociation/polymesh-sdk/blob/daafaa68f/src/api/entities/Account/index.ts#L80)

___

### subsidies

• **subsidies**: [`Subsidies`](../../Subsidies/Subsidies.md)

#### Inherited from

[Account](../Account.md).[subsidies](../Account.md#subsidies)

#### Defined in

[api/entities/Account/index.ts:84](https://github.com/PolymeshAssociation/polymesh-sdk/blob/daafaa68f/src/api/entities/Account/index.ts#L84)

___

### uuid

• **uuid**: `string`

#### Inherited from

[Account](../Account.md).[uuid](../Account.md#uuid)

#### Defined in

[api/entities/Entity.ts:46](https://github.com/PolymeshAssociation/polymesh-sdk/blob/daafaa68f/src/api/entities/Entity.ts#L46)

## Methods

### checkPermissions

▸ **checkPermissions**(`permissions`): `Promise`\<[`CheckPermissionsResult`](../../../../../interfaces/Types/CheckPermissionsResult/CheckPermissionsResult.md)\<[`Account`](../../../../../enums/Types/SignerType/SignerType.md#account)\>\>

Check if this Account possesses certain Permissions to act on behalf of its corresponding Identity

#### Parameters

| Name | Type |
| :------ | :------ |
| `permissions` | [`SimplePermissions`](../../../../../interfaces/Types/SimplePermissions/SimplePermissions.md) |

#### Returns

`Promise`\<[`CheckPermissionsResult`](../../../../../interfaces/Types/CheckPermissionsResult/CheckPermissionsResult.md)\<[`Account`](../../../../../enums/Types/SignerType/SignerType.md#account)\>\>

which permissions the Account is missing (if any) and the final result

#### Inherited from

[Account](../Account.md).[checkPermissions](../Account.md#checkpermissions)

#### Defined in

[api/entities/Account/index.ts:362](https://github.com/PolymeshAssociation/polymesh-sdk/blob/daafaa68f/src/api/entities/Account/index.ts#L362)

___

### details

▸ **details**(): `Promise`\<[`MultiSigDetails`](../../../../../interfaces/API/Entities/Account/MultiSig/Types/MultiSigDetails/MultiSigDetails.md)\>

Return details about this MultiSig such as the signing Accounts and the required number of signatures to execute a MultiSigProposal

#### Returns

`Promise`\<[`MultiSigDetails`](../../../../../interfaces/API/Entities/Account/MultiSig/Types/MultiSigDetails/MultiSigDetails.md)\>

#### Defined in

[api/entities/Account/MultiSig/index.ts:38](https://github.com/PolymeshAssociation/polymesh-sdk/blob/daafaa68f/src/api/entities/Account/MultiSig/index.ts#L38)

___

### exists

▸ **exists**(): `Promise`\<`boolean`\>

Determine whether this Account exists on chain

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

[Account](../Account.md).[exists](../Account.md#exists)

#### Defined in

[api/entities/Account/index.ts:445](https://github.com/PolymeshAssociation/polymesh-sdk/blob/daafaa68f/src/api/entities/Account/index.ts#L445)

___

### getBalance

▸ **getBalance**(): `Promise`\<[`Balance`](../../../../../interfaces/Types/Balance/Balance.md)\>

Get the free/locked POLYX balance of the Account

#### Returns

`Promise`\<[`Balance`](../../../../../interfaces/Types/Balance/Balance.md)\>

**`Note`**

can be subscribed to

#### Inherited from

[Account](../Account.md).[getBalance](../Account.md#getbalance)

#### Defined in

[api/entities/Account/index.ts:107](https://github.com/PolymeshAssociation/polymesh-sdk/blob/daafaa68f/src/api/entities/Account/index.ts#L107)

▸ **getBalance**(`callback`): `Promise`\<[`UnsubCallback`](../../../../../modules/Types/Types.md#unsubcallback)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`SubCallback`](../../../../../modules/Types/Types.md#subcallback)\<[`Balance`](../../../../../interfaces/Types/Balance/Balance.md)\> |

#### Returns

`Promise`\<[`UnsubCallback`](../../../../../modules/Types/Types.md#unsubcallback)\>

#### Inherited from

[Account](../Account.md).[getBalance](../Account.md#getbalance)

#### Defined in

[api/entities/Account/index.ts:108](https://github.com/PolymeshAssociation/polymesh-sdk/blob/daafaa68f/src/api/entities/Account/index.ts#L108)

___

### getCreator

▸ **getCreator**(): `Promise`\<[`Identity`](../../Identity/Identity.md)\>

Returns the Identity of the MultiSig creator. This Identity can add or remove signers directly without creating a MultiSigProposal first.

#### Returns

`Promise`\<[`Identity`](../../Identity/Identity.md)\>

#### Defined in

[api/entities/Account/MultiSig/index.ts:120](https://github.com/PolymeshAssociation/polymesh-sdk/blob/daafaa68f/src/api/entities/Account/MultiSig/index.ts#L120)

___

### getCurrentNonce

▸ **getCurrentNonce**(): `Promise`\<`BigNumber`\>

Retrieve the current nonce for this Account

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

[Account](../Account.md).[getCurrentNonce](../Account.md#getcurrentnonce)

#### Defined in

[api/entities/Account/index.ts:459](https://github.com/PolymeshAssociation/polymesh-sdk/blob/daafaa68f/src/api/entities/Account/index.ts#L459)

___

### getIdentity

▸ **getIdentity**(): `Promise`\<``null`` \| [`Identity`](../../Identity/Identity.md)\>

Retrieve the Identity associated to this Account (null if there is none)

#### Returns

`Promise`\<``null`` \| [`Identity`](../../Identity/Identity.md)\>

#### Inherited from

[Account](../Account.md).[getIdentity](../Account.md#getidentity)

#### Defined in

[api/entities/Account/index.ts:150](https://github.com/PolymeshAssociation/polymesh-sdk/blob/daafaa68f/src/api/entities/Account/index.ts#L150)

___

### getMultiSig

▸ **getMultiSig**(): `Promise`\<``null`` \| [`MultiSig`](MultiSig.md)\>

Fetch the MultiSig this Account is part of. If this Account is not a signer on any MultiSig, return null

#### Returns

`Promise`\<``null`` \| [`MultiSig`](MultiSig.md)\>

#### Inherited from

[Account](../Account.md).[getMultiSig](../Account.md#getmultisig)

#### Defined in

[api/entities/Account/index.ts:417](https://github.com/PolymeshAssociation/polymesh-sdk/blob/daafaa68f/src/api/entities/Account/index.ts#L417)

___

### getPermissions

▸ **getPermissions**(): `Promise`\<[`Permissions`](../../../../../interfaces/Types/Permissions/Permissions.md)\>

Retrieve the Permissions this Account has as a Permissioned Account for its corresponding Identity

#### Returns

`Promise`\<[`Permissions`](../../../../../interfaces/Types/Permissions/Permissions.md)\>

**`Throws`**

if there is no Identity associated with the Account

#### Inherited from

[Account](../Account.md).[getPermissions](../Account.md#getpermissions)

#### Defined in

[api/entities/Account/index.ts:323](https://github.com/PolymeshAssociation/polymesh-sdk/blob/daafaa68f/src/api/entities/Account/index.ts#L323)

___

### getPolyxTransactions

▸ **getPolyxTransactions**(`filters`): `Promise`\<[`ResultSet`](../../../../../interfaces/Types/ResultSet/ResultSet.md)\<[`HistoricPolyxTransaction`](../../../../../interfaces/API/Entities/Account/Types/HistoricPolyxTransaction/HistoricPolyxTransaction.md)\>\>

Returns POLYX transactions associated with this account

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filters` | `Object` | - |
| `filters.size?` | `BigNumber` | page size |
| `filters.start?` | `BigNumber` | page offset |

#### Returns

`Promise`\<[`ResultSet`](../../../../../interfaces/Types/ResultSet/ResultSet.md)\<[`HistoricPolyxTransaction`](../../../../../interfaces/API/Entities/Account/Types/HistoricPolyxTransaction/HistoricPolyxTransaction.md)\>\>

**`Note`**

uses the middleware

#### Inherited from

[Account](../Account.md).[getPolyxTransactions](../Account.md#getpolyxtransactions)

#### Defined in

[api/entities/Account/index.ts:543](https://github.com/PolymeshAssociation/polymesh-sdk/blob/daafaa68f/src/api/entities/Account/index.ts#L543)

___

### getProposal

▸ **getProposal**(`args`): `Promise`\<[`MultiSigProposal`](../../MultiSigProposal/MultiSigProposal.md)\>

Given an ID, fetch a [MultiSigProposal](../../MultiSigProposal/MultiSigProposal.md) for this MultiSig

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.id` | `BigNumber` |

#### Returns

`Promise`\<[`MultiSigProposal`](../../MultiSigProposal/MultiSigProposal.md)\>

**`Throws`**

if the MultiSigProposal is not found

#### Defined in

[api/entities/Account/MultiSig/index.ts:73](https://github.com/PolymeshAssociation/polymesh-sdk/blob/daafaa68f/src/api/entities/Account/MultiSig/index.ts#L73)

___

### getProposals

▸ **getProposals**(): `Promise`\<[`MultiSigProposal`](../../MultiSigProposal/MultiSigProposal.md)[]\>

Return all [MultiSigProposal](../../MultiSigProposal/MultiSigProposal.md) for this MultiSig Account

#### Returns

`Promise`\<[`MultiSigProposal`](../../MultiSigProposal/MultiSigProposal.md)[]\>

#### Defined in

[api/entities/Account/MultiSig/index.ts:93](https://github.com/PolymeshAssociation/polymesh-sdk/blob/daafaa68f/src/api/entities/Account/MultiSig/index.ts#L93)

___

### getSubsidy

▸ **getSubsidy**(): `Promise`\<``null`` \| [`SubsidyWithAllowance`](../../../../../interfaces/API/Entities/Subsidy/Types/SubsidyWithAllowance/SubsidyWithAllowance.md)\>

Get the subsidized balance of this Account and the subsidizer Account. If
  this Account isn't being subsidized, return null

#### Returns

`Promise`\<``null`` \| [`SubsidyWithAllowance`](../../../../../interfaces/API/Entities/Subsidy/Types/SubsidyWithAllowance/SubsidyWithAllowance.md)\>

**`Note`**

can be subscribed to

**`Deprecated`**

in favour of [subsidies.getSubsidizer](../../Subsidies/Subsidies.md#getsubsidizer)

#### Inherited from

[Account](../Account.md).[getSubsidy](../Account.md#getsubsidy)

#### Defined in

[api/entities/Account/index.ts:131](https://github.com/PolymeshAssociation/polymesh-sdk/blob/daafaa68f/src/api/entities/Account/index.ts#L131)

▸ **getSubsidy**(`callback`): `Promise`\<[`UnsubCallback`](../../../../../modules/Types/Types.md#unsubcallback)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`SubCallback`](../../../../../modules/Types/Types.md#subcallback)\<``null`` \| [`SubsidyWithAllowance`](../../../../../interfaces/API/Entities/Subsidy/Types/SubsidyWithAllowance/SubsidyWithAllowance.md)\> |

#### Returns

`Promise`\<[`UnsubCallback`](../../../../../modules/Types/Types.md#unsubcallback)\>

#### Inherited from

[Account](../Account.md).[getSubsidy](../Account.md#getsubsidy)

#### Defined in

[api/entities/Account/index.ts:132](https://github.com/PolymeshAssociation/polymesh-sdk/blob/daafaa68f/src/api/entities/Account/index.ts#L132)

___

### getTransactionHistory

▸ **getTransactionHistory**(`filters?`): `Promise`\<[`ResultSet`](../../../../../interfaces/Types/ResultSet/ResultSet.md)\<[`ExtrinsicData`](../../../../../interfaces/Types/ExtrinsicData/ExtrinsicData.md)\>\>

Retrieve a list of transactions signed by this Account. Can be filtered using parameters

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filters` | `Object` | - |
| `filters.blockHash?` | `string` | - |
| `filters.blockNumber?` | `BigNumber` | - |
| `filters.orderBy?` | [`ExtrinsicsOrderBy`](../../../../../enums/Types/ExtrinsicsOrderBy/ExtrinsicsOrderBy.md) | - |
| `filters.size?` | `BigNumber` | page size |
| `filters.start?` | `BigNumber` | page offset |
| `filters.success?` | `boolean` | whether the transaction was successful or not |
| `filters.tag?` | [`TxTag`](../../../../../modules/Generated/Types/Types.md#txtag) | tag associated with the transaction |

#### Returns

`Promise`\<[`ResultSet`](../../../../../interfaces/Types/ResultSet/ResultSet.md)\<[`ExtrinsicData`](../../../../../interfaces/Types/ExtrinsicData/ExtrinsicData.md)\>\>

**`Note`**

if both `blockNumber` and `blockHash` are passed, only `blockNumber` is taken into account.
Also, for ordering by block_id, one should pass `ExtrinsicsOrderBy.CreatedAtAsc` or `ExtrinsicsOrderBy.CreatedAtDesc`
in order of their choice (since block ID is a string field in middleware v2)

**`Note`**

uses the middleware v2

#### Inherited from

[Account](../Account.md).[getTransactionHistory](../Account.md#gettransactionhistory)

#### Defined in

[api/entities/Account/index.ts:186](https://github.com/PolymeshAssociation/polymesh-sdk/blob/daafaa68f/src/api/entities/Account/index.ts#L186)

___

### getTypeInfo

▸ **getTypeInfo**(): `Promise`\<[`AccountTypeInfo`](../../../../../interfaces/API/Entities/Account/Types/AccountTypeInfo/AccountTypeInfo.md)\>

Retrieve the type of Account, and its relation to an Identity, if applicable

#### Returns

`Promise`\<[`AccountTypeInfo`](../../../../../interfaces/API/Entities/Account/Types/AccountTypeInfo/AccountTypeInfo.md)\>

#### Inherited from

[Account](../Account.md).[getTypeInfo](../Account.md#gettypeinfo)

#### Defined in

[api/entities/Account/index.ts:480](https://github.com/PolymeshAssociation/polymesh-sdk/blob/daafaa68f/src/api/entities/Account/index.ts#L480)

___

### isEqual

▸ **isEqual**(`entity`): `boolean`

Determine whether this Entity is the same as another one

#### Parameters

| Name | Type |
| :------ | :------ |
| `entity` | [`Entity`](../../Entity/Entity.md)\<`unknown`, `unknown`\> |

#### Returns

`boolean`

#### Inherited from

[Account](../Account.md).[isEqual](../Account.md#isequal)

#### Defined in

[api/entities/Entity.ts:61](https://github.com/PolymeshAssociation/polymesh-sdk/blob/daafaa68f/src/api/entities/Entity.ts#L61)

___

### isFrozen

▸ **isFrozen**(): `Promise`\<`boolean`\>

Check whether this Account is frozen. If frozen, it cannot perform any Identity related action until the primary Account of the Identity unfreezes all secondary Accounts

#### Returns

`Promise`\<`boolean`\>

**`Note`**

returns false if the Account isn't associated to any Identity

#### Inherited from

[Account](../Account.md).[isFrozen](../Account.md#isfrozen)

#### Defined in

[api/entities/Account/index.ts:302](https://github.com/PolymeshAssociation/polymesh-sdk/blob/daafaa68f/src/api/entities/Account/index.ts#L302)

___

### modify

▸ **modify**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../../modules/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

Modify the signers for the MultiSig. The signing Account must belong to the Identity of the creator of the MultiSig

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Pick`\<[`ModifyMultiSigParams`](../../../../../interfaces/API/Procedures/Types/ModifyMultiSigParams/ModifyMultiSigParams.md), ``"signers"``\> |
| `opts?` | [`ProcedureOpts`](../../../../../interfaces/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../../modules/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

**`Note`**

this method is of type [ProcedureMethod](../../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [modify.checkAuthorization](../../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/entities/Account/MultiSig/index.ts:151](https://github.com/PolymeshAssociation/polymesh-sdk/blob/daafaa68f/src/api/entities/Account/MultiSig/index.ts#L151)

___

### toHuman

▸ **toHuman**(): `string`

Return the Account's address

#### Returns

`string`

#### Inherited from

[Account](../Account.md).[toHuman](../Account.md#tohuman)

#### Defined in

[api/entities/Account/index.ts:452](https://github.com/PolymeshAssociation/polymesh-sdk/blob/daafaa68f/src/api/entities/Account/index.ts#L452)

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

[Account](../Account.md).[generateUuid](../Account.md#generateuuid)

#### Defined in

[api/entities/Entity.ts:14](https://github.com/PolymeshAssociation/polymesh-sdk/blob/daafaa68f/src/api/entities/Entity.ts#L14)

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

[Account](../Account.md).[unserialize](../Account.md#unserialize)

#### Defined in

[api/entities/Entity.ts:23](https://github.com/PolymeshAssociation/polymesh-sdk/blob/daafaa68f/src/api/entities/Entity.ts#L23)