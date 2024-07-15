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

[api/entities/Account/index.ts:82](https://github.com/PolymeshAssociation/polymesh-sdk/blob/654b99c8d/src/api/entities/Account/index.ts#L82)

___

### authorizations

• **authorizations**: [`Authorizations`](../../Common/Namespaces/Authorizations/Authorizations.md)\<[`Account`](../Account.md)\>

#### Inherited from

[Account](../Account.md).[authorizations](../Account.md#authorizations)

#### Defined in

[api/entities/Account/index.ts:91](https://github.com/PolymeshAssociation/polymesh-sdk/blob/654b99c8d/src/api/entities/Account/index.ts#L91)

___

### key

• **key**: `string`

A hex representation of the cryptographic public key of the Account. This is consistent across
Substrate chains, while the address depends on the chain as well.

#### Inherited from

[Account](../Account.md).[key](../Account.md#key)

#### Defined in

[api/entities/Account/index.ts:88](https://github.com/PolymeshAssociation/polymesh-sdk/blob/654b99c8d/src/api/entities/Account/index.ts#L88)

___

### subsidies

• **subsidies**: [`Subsidies`](../../Subsidies/Subsidies.md)

#### Inherited from

[Account](../Account.md).[subsidies](../Account.md#subsidies)

#### Defined in

[api/entities/Account/index.ts:92](https://github.com/PolymeshAssociation/polymesh-sdk/blob/654b99c8d/src/api/entities/Account/index.ts#L92)

___

### uuid

• **uuid**: `string`

#### Inherited from

[Account](../Account.md).[uuid](../Account.md#uuid)

#### Defined in

[api/entities/Entity.ts:46](https://github.com/PolymeshAssociation/polymesh-sdk/blob/654b99c8d/src/api/entities/Entity.ts#L46)

## Methods

### checkPermissions

▸ **checkPermissions**(`permissions`): `Promise`\<[`CheckPermissionsResult`](../../../../../interfaces/API/Entities/Types/CheckPermissionsResult/CheckPermissionsResult.md)\<[`Account`](../../../../../enums/API/Entities/Types/SignerType/SignerType.md#account)\>\>

Check if this Account possesses certain Permissions to act on behalf of its corresponding Identity

#### Parameters

| Name | Type |
| :------ | :------ |
| `permissions` | [`SimplePermissions`](../../../../../interfaces/API/Entities/Types/SimplePermissions/SimplePermissions.md) |

#### Returns

`Promise`\<[`CheckPermissionsResult`](../../../../../interfaces/API/Entities/Types/CheckPermissionsResult/CheckPermissionsResult.md)\<[`Account`](../../../../../enums/API/Entities/Types/SignerType/SignerType.md#account)\>\>

which permissions the Account is missing (if any) and the final result

#### Inherited from

[Account](../Account.md).[checkPermissions](../Account.md#checkpermissions)

#### Defined in

[api/entities/Account/index.ts:372](https://github.com/PolymeshAssociation/polymesh-sdk/blob/654b99c8d/src/api/entities/Account/index.ts#L372)

___

### details

▸ **details**(): `Promise`\<[`MultiSigDetails`](../../../../../interfaces/API/Entities/Account/MultiSig/Types/MultiSigDetails/MultiSigDetails.md)\>

Return details about this MultiSig such as the signing Accounts and the required number of signatures to execute a MultiSigProposal

#### Returns

`Promise`\<[`MultiSigDetails`](../../../../../interfaces/API/Entities/Account/MultiSig/Types/MultiSigDetails/MultiSigDetails.md)\>

#### Defined in

[api/entities/Account/MultiSig/index.ts:50](https://github.com/PolymeshAssociation/polymesh-sdk/blob/654b99c8d/src/api/entities/Account/MultiSig/index.ts#L50)

___

### exists

▸ **exists**(): `Promise`\<`boolean`\>

Determine whether this Account exists on chain

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

[Account](../Account.md).[exists](../Account.md#exists)

#### Defined in

[api/entities/Account/index.ts:455](https://github.com/PolymeshAssociation/polymesh-sdk/blob/654b99c8d/src/api/entities/Account/index.ts#L455)

___

### getBalance

▸ **getBalance**(): `Promise`\<[`Balance`](../../../../../interfaces/API/Entities/Account/Types/Balance/Balance.md)\>

Get the free/locked POLYX balance of the Account

#### Returns

`Promise`\<[`Balance`](../../../../../interfaces/API/Entities/Account/Types/Balance/Balance.md)\>

**`Note`**

can be subscribed to, if connected to node using a web socket

#### Inherited from

[Account](../Account.md).[getBalance](../Account.md#getbalance)

#### Defined in

[api/entities/Account/index.ts:115](https://github.com/PolymeshAssociation/polymesh-sdk/blob/654b99c8d/src/api/entities/Account/index.ts#L115)

▸ **getBalance**(`callback`): `Promise`\<[`UnsubCallback`](../../../../../modules/API/Entities/Types/Types.md#unsubcallback)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`SubCallback`](../../../../../modules/API/Entities/Types/Types.md#subcallback)\<[`Balance`](../../../../../interfaces/API/Entities/Account/Types/Balance/Balance.md)\> |

#### Returns

`Promise`\<[`UnsubCallback`](../../../../../modules/API/Entities/Types/Types.md#unsubcallback)\>

#### Inherited from

[Account](../Account.md).[getBalance](../Account.md#getbalance)

#### Defined in

[api/entities/Account/index.ts:116](https://github.com/PolymeshAssociation/polymesh-sdk/blob/654b99c8d/src/api/entities/Account/index.ts#L116)

___

### getCreator

▸ **getCreator**(): `Promise`\<[`Identity`](../../Identity/Identity.md)\>

Returns the Identity of the MultiSig creator. This Identity can add or remove signers directly without creating a MultiSigProposal first.

#### Returns

`Promise`\<[`Identity`](../../Identity/Identity.md)\>

#### Defined in

[api/entities/Account/MultiSig/index.ts:194](https://github.com/PolymeshAssociation/polymesh-sdk/blob/654b99c8d/src/api/entities/Account/MultiSig/index.ts#L194)

___

### getCurrentNonce

▸ **getCurrentNonce**(): `Promise`\<`BigNumber`\>

Retrieve the current nonce for this Account

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

[Account](../Account.md).[getCurrentNonce](../Account.md#getcurrentnonce)

#### Defined in

[api/entities/Account/index.ts:469](https://github.com/PolymeshAssociation/polymesh-sdk/blob/654b99c8d/src/api/entities/Account/index.ts#L469)

___

### getHistoricalProposals

▸ **getHistoricalProposals**(`opts`): `Promise`\<[`ResultSet`](../../../../../interfaces/API/Entities/Types/ResultSet/ResultSet.md)\<[`MultiSigProposal`](../../MultiSigProposal/MultiSigProposal.md)\>\>

Return all [MultiSigProposal](../../MultiSigProposal/MultiSigProposal.md) for this MultiSig Account

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `Object` |
| `opts.size?` | `BigNumber` |
| `opts.start?` | `BigNumber` |

#### Returns

`Promise`\<[`ResultSet`](../../../../../interfaces/API/Entities/Types/ResultSet/ResultSet.md)\<[`MultiSigProposal`](../../MultiSigProposal/MultiSigProposal.md)\>\>

**`Note`**

uses the middlewareV2

#### Defined in

[api/entities/Account/MultiSig/index.ts:156](https://github.com/PolymeshAssociation/polymesh-sdk/blob/654b99c8d/src/api/entities/Account/MultiSig/index.ts#L156)

___

### getIdentity

▸ **getIdentity**(): `Promise`\<``null`` \| [`Identity`](../../Identity/Identity.md)\>

Retrieve the Identity associated to this Account (null if there is none)

#### Returns

`Promise`\<``null`` \| [`Identity`](../../Identity/Identity.md)\>

#### Inherited from

[Account](../Account.md).[getIdentity](../Account.md#getidentity)

#### Defined in

[api/entities/Account/index.ts:160](https://github.com/PolymeshAssociation/polymesh-sdk/blob/654b99c8d/src/api/entities/Account/index.ts#L160)

___

### getMultiSig

▸ **getMultiSig**(): `Promise`\<``null`` \| [`MultiSig`](MultiSig.md)\>

Fetch the MultiSig this Account is part of. If this Account is not a signer on any MultiSig, return null

#### Returns

`Promise`\<``null`` \| [`MultiSig`](MultiSig.md)\>

#### Inherited from

[Account](../Account.md).[getMultiSig](../Account.md#getmultisig)

#### Defined in

[api/entities/Account/index.ts:427](https://github.com/PolymeshAssociation/polymesh-sdk/blob/654b99c8d/src/api/entities/Account/index.ts#L427)

___

### getPendingProposals

▸ **getPendingProposals**(): `Promise`\<[`MultiSigProposal`](../../MultiSigProposal/MultiSigProposal.md)[]\>

Returns pending MultiSig proposals for this Account

#### Returns

`Promise`\<[`MultiSigProposal`](../../MultiSigProposal/MultiSigProposal.md)[]\>

**`Note`**

uses the middleware

**`Throws`**

if the Account is not a signer on any MultiSig

#### Inherited from

[Account](../Account.md).[getPendingProposals](../Account.md#getpendingproposals)

#### Defined in

[api/entities/Account/index.ts:571](https://github.com/PolymeshAssociation/polymesh-sdk/blob/654b99c8d/src/api/entities/Account/index.ts#L571)

___

### getPermissions

▸ **getPermissions**(): `Promise`\<[`Permissions`](../../../../../interfaces/API/Entities/Types/Permissions/Permissions.md)\>

Retrieve the Permissions this Account has as a Permissioned Account for its corresponding Identity

#### Returns

`Promise`\<[`Permissions`](../../../../../interfaces/API/Entities/Types/Permissions/Permissions.md)\>

**`Throws`**

if there is no Identity associated with the Account

#### Inherited from

[Account](../Account.md).[getPermissions](../Account.md#getpermissions)

#### Defined in

[api/entities/Account/index.ts:333](https://github.com/PolymeshAssociation/polymesh-sdk/blob/654b99c8d/src/api/entities/Account/index.ts#L333)

___

### getPolyxTransactions

▸ **getPolyxTransactions**(`filters`): `Promise`\<[`ResultSet`](../../../../../interfaces/API/Entities/Types/ResultSet/ResultSet.md)\<[`HistoricPolyxTransaction`](../../../../../interfaces/API/Entities/Account/Types/HistoricPolyxTransaction/HistoricPolyxTransaction.md)\>\>

Returns POLYX transactions associated with this account

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filters` | `Object` | - |
| `filters.size?` | `BigNumber` | page size |
| `filters.start?` | `BigNumber` | page offset |

#### Returns

`Promise`\<[`ResultSet`](../../../../../interfaces/API/Entities/Types/ResultSet/ResultSet.md)\<[`HistoricPolyxTransaction`](../../../../../interfaces/API/Entities/Account/Types/HistoricPolyxTransaction/HistoricPolyxTransaction.md)\>\>

**`Note`**

uses the middleware

#### Inherited from

[Account](../Account.md).[getPolyxTransactions](../Account.md#getpolyxtransactions)

#### Defined in

[api/entities/Account/index.ts:553](https://github.com/PolymeshAssociation/polymesh-sdk/blob/654b99c8d/src/api/entities/Account/index.ts#L553)

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

[api/entities/Account/MultiSig/index.ts:85](https://github.com/PolymeshAssociation/polymesh-sdk/blob/654b99c8d/src/api/entities/Account/MultiSig/index.ts#L85)

___

### getProposals

▸ **getProposals**(): `Promise`\<[`MultiSigProposal`](../../MultiSigProposal/MultiSigProposal.md)[]\>

Return all active [MultiSigProposal](../../MultiSigProposal/MultiSigProposal.md) for this MultiSig Account

#### Returns

`Promise`\<[`MultiSigProposal`](../../MultiSigProposal/MultiSigProposal.md)[]\>

#### Defined in

[api/entities/Account/MultiSig/index.ts:105](https://github.com/PolymeshAssociation/polymesh-sdk/blob/654b99c8d/src/api/entities/Account/MultiSig/index.ts#L105)

___

### getSubsidy

▸ **getSubsidy**(): `Promise`\<``null`` \| [`SubsidyWithAllowance`](../../../../../interfaces/API/Entities/Subsidy/Types/SubsidyWithAllowance/SubsidyWithAllowance.md)\>

Get the subsidized balance of this Account and the subsidizer Account. If
  this Account isn't being subsidized, return null

#### Returns

`Promise`\<``null`` \| [`SubsidyWithAllowance`](../../../../../interfaces/API/Entities/Subsidy/Types/SubsidyWithAllowance/SubsidyWithAllowance.md)\>

**`Note`**

can be subscribed to, if connected to node using a web socket

**`Deprecated`**

in favour of [subsidies.getSubsidizer](../../Subsidies/Subsidies.md#getsubsidizer)

#### Inherited from

[Account](../Account.md).[getSubsidy](../Account.md#getsubsidy)

#### Defined in

[api/entities/Account/index.ts:140](https://github.com/PolymeshAssociation/polymesh-sdk/blob/654b99c8d/src/api/entities/Account/index.ts#L140)

▸ **getSubsidy**(`callback`): `Promise`\<[`UnsubCallback`](../../../../../modules/API/Entities/Types/Types.md#unsubcallback)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`SubCallback`](../../../../../modules/API/Entities/Types/Types.md#subcallback)\<``null`` \| [`SubsidyWithAllowance`](../../../../../interfaces/API/Entities/Subsidy/Types/SubsidyWithAllowance/SubsidyWithAllowance.md)\> |

#### Returns

`Promise`\<[`UnsubCallback`](../../../../../modules/API/Entities/Types/Types.md#unsubcallback)\>

#### Inherited from

[Account](../Account.md).[getSubsidy](../Account.md#getsubsidy)

#### Defined in

[api/entities/Account/index.ts:141](https://github.com/PolymeshAssociation/polymesh-sdk/blob/654b99c8d/src/api/entities/Account/index.ts#L141)

___

### getTransactionHistory

▸ **getTransactionHistory**(`filters?`): `Promise`\<[`ResultSet`](../../../../../interfaces/API/Entities/Types/ResultSet/ResultSet.md)\<[`ExtrinsicData`](../../../../../interfaces/API/Client/Types/ExtrinsicData/ExtrinsicData.md)\>\>

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

`Promise`\<[`ResultSet`](../../../../../interfaces/API/Entities/Types/ResultSet/ResultSet.md)\<[`ExtrinsicData`](../../../../../interfaces/API/Client/Types/ExtrinsicData/ExtrinsicData.md)\>\>

**`Note`**

if both `blockNumber` and `blockHash` are passed, only `blockNumber` is taken into account.
Also, for ordering by block_id, one should pass `ExtrinsicsOrderBy.CreatedAtAsc` or `ExtrinsicsOrderBy.CreatedAtDesc`
in order of their choice (since block ID is a string field in middleware v2)

**`Note`**

uses the middleware v2

#### Inherited from

[Account](../Account.md).[getTransactionHistory](../Account.md#gettransactionhistory)

#### Defined in

[api/entities/Account/index.ts:196](https://github.com/PolymeshAssociation/polymesh-sdk/blob/654b99c8d/src/api/entities/Account/index.ts#L196)

___

### getTypeInfo

▸ **getTypeInfo**(): `Promise`\<[`AccountTypeInfo`](../../../../../interfaces/API/Entities/Account/Types/AccountTypeInfo/AccountTypeInfo.md)\>

Retrieve the type of Account, and its relation to an Identity, if applicable

#### Returns

`Promise`\<[`AccountTypeInfo`](../../../../../interfaces/API/Entities/Account/Types/AccountTypeInfo/AccountTypeInfo.md)\>

#### Inherited from

[Account](../Account.md).[getTypeInfo](../Account.md#gettypeinfo)

#### Defined in

[api/entities/Account/index.ts:490](https://github.com/PolymeshAssociation/polymesh-sdk/blob/654b99c8d/src/api/entities/Account/index.ts#L490)

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

[api/entities/Entity.ts:61](https://github.com/PolymeshAssociation/polymesh-sdk/blob/654b99c8d/src/api/entities/Entity.ts#L61)

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

[api/entities/Account/index.ts:312](https://github.com/PolymeshAssociation/polymesh-sdk/blob/654b99c8d/src/api/entities/Account/index.ts#L312)

___

### modify

▸ **modify**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

Modify the signers for the MultiSig. The signing Account must belong to the Identity of the creator of the MultiSig

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Pick`\<[`ModifyMultiSigParams`](../../../../../interfaces/API/Procedures/Types/ModifyMultiSigParams/ModifyMultiSigParams.md), ``"signers"``\> |
| `opts?` | [`ProcedureOpts`](../../../../../interfaces/API/Procedures/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

**`Note`**

this method is of type [ProcedureMethod](../../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [modify.checkAuthorization](../../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/entities/Account/MultiSig/index.ts:225](https://github.com/PolymeshAssociation/polymesh-sdk/blob/654b99c8d/src/api/entities/Account/MultiSig/index.ts#L225)

___

### toHuman

▸ **toHuman**(): `string`

Return the Account's address

#### Returns

`string`

#### Inherited from

[Account](../Account.md).[toHuman](../Account.md#tohuman)

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

[Account](../Account.md).[generateUuid](../Account.md#generateuuid)

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

[Account](../Account.md).[unserialize](../Account.md#unserialize)

#### Defined in

[api/entities/Entity.ts:23](https://github.com/PolymeshAssociation/polymesh-sdk/blob/654b99c8d/src/api/entities/Entity.ts#L23)
