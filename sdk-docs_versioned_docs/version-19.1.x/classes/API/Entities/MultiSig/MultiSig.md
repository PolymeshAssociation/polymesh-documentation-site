---
id: "MultiSig"
title: "Class: MultiSig"
sidebar_label: "MultiSig"
---

[api/entities/MultiSig](../../../../modules/API/Entities/MultiSig/MultiSig.md).MultiSig

Represents a MultiSig Account. A MultiSig Account is composed of one or more signing Accounts. In order to submit a transaction, a specific amount of those signing Accounts must approve it first

## Hierarchy

- [`Account`](../Account/Account.md)

  ↳ **`MultiSig`**

## Properties

### address

• **address**: `string`

Polymesh-specific address of the Account. Serves as an identifier

#### Inherited from

[Account](../Account/Account.md).[address](../Account/Account.md#address)

#### Defined in

[api/entities/Account.ts:274](https://github.com/PolymeshAssociation/polymesh-sdk/blob/31fdce23/src/api/entities/Account.ts#L274)

___

### authorizations

• **authorizations**: [`Authorizations`](../Common/Namespaces/Authorizations/Authorizations.md)<[`Account`](../Account/Account.md)\>

#### Inherited from

[Account](../Account/Account.md).[authorizations](../Account/Account.md#authorizations)

#### Defined in

[api/entities/Account.ts:283](https://github.com/PolymeshAssociation/polymesh-sdk/blob/31fdce23/src/api/entities/Account.ts#L283)

___

### key

• **key**: `string`

A hex representation of the cryptographic public key of the Account. This is consistent across
Substrate chains, while the address depends on the chain as well.

#### Inherited from

[Account](../Account/Account.md).[key](../Account/Account.md#key)

#### Defined in

[api/entities/Account.ts:280](https://github.com/PolymeshAssociation/polymesh-sdk/blob/31fdce23/src/api/entities/Account.ts#L280)

___

### subsidies

• **subsidies**: [`Subsidies`](../Subsidies/Subsidies.md)

#### Inherited from

[Account](../Account/Account.md).[subsidies](../Account/Account.md#subsidies)

#### Defined in

[api/entities/Account.ts:284](https://github.com/PolymeshAssociation/polymesh-sdk/blob/31fdce23/src/api/entities/Account.ts#L284)

___

### uuid

• **uuid**: `string`

#### Inherited from

[Account](../Account/Account.md).[uuid](../Account/Account.md#uuid)

#### Defined in

[api/entities/Entity.ts:46](https://github.com/PolymeshAssociation/polymesh-sdk/blob/31fdce23/src/api/entities/Entity.ts#L46)

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

#### Inherited from

[Account](../Account/Account.md).[checkPermissions](../Account/Account.md#checkpermissions)

___

### details

▸ **details**(): `Promise`<[`MultiSigDetails`](../../../../interfaces/API/Entities/MultiSig/Types/MultiSigDetails/MultiSigDetails.md)\>

Return details about this MultiSig such as the signing Accounts and the required number of signatures to execute a MultiSigProposal

#### Returns

`Promise`<[`MultiSigDetails`](../../../../interfaces/API/Entities/MultiSig/Types/MultiSigDetails/MultiSigDetails.md)\>

___

### exists

▸ **exists**(): `Promise`<`boolean`\>

Determine whether this Account exists on chain

#### Returns

`Promise`<`boolean`\>

#### Inherited from

[Account](../Account/Account.md).[exists](../Account/Account.md#exists)

___

### getBalance

▸ **getBalance**(): `Promise`<[`Balance`](../../../../interfaces/Types/Balance/Balance.md)\>

Get the free/locked POLYX balance of the Account

**`Note`**

 can be subscribed to

#### Returns

`Promise`<[`Balance`](../../../../interfaces/Types/Balance/Balance.md)\>

#### Inherited from

[Account](../Account/Account.md).[getBalance](../Account/Account.md#getbalance)

▸ **getBalance**(`callback`): `Promise`<[`UnsubCallback`](../../../../modules/Types/Types.md#unsubcallback)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`SubCallback`](../../../../modules/Types/Types.md#subcallback)<[`Balance`](../../../../interfaces/Types/Balance/Balance.md)\> |

#### Returns

`Promise`<[`UnsubCallback`](../../../../modules/Types/Types.md#unsubcallback)\>

#### Inherited from

[Account](../Account/Account.md).[getBalance](../Account/Account.md#getbalance)

___

### getCreator

▸ **getCreator**(): `Promise`<[`Identity`](../Identity/Identity.md)\>

Returns the Identity of the MultiSig creator. This Identity can add or remove signers directly without creating a MultiSigProposal first.

#### Returns

`Promise`<[`Identity`](../Identity/Identity.md)\>

___

### getCurrentNonce

▸ **getCurrentNonce**(): `Promise`<`BigNumber`\>

Retrieve the current nonce for this Account

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

[Account](../Account/Account.md).[getCurrentNonce](../Account/Account.md#getcurrentnonce)

___

### getIdentity

▸ **getIdentity**(): `Promise`<``null`` \| [`Identity`](../Identity/Identity.md)\>

Retrieve the Identity associated to this Account (null if there is none)

#### Returns

`Promise`<``null`` \| [`Identity`](../Identity/Identity.md)\>

#### Inherited from

[Account](../Account/Account.md).[getIdentity](../Account/Account.md#getidentity)

___

### getMultiSig

▸ **getMultiSig**(): `Promise`<``null`` \| [`MultiSig`](MultiSig.md)\>

Fetch the MultiSig this Account is part of. If this Account is not a signer on any MultiSig, return null

#### Returns

`Promise`<``null`` \| [`MultiSig`](MultiSig.md)\>

#### Inherited from

[Account](../Account/Account.md).[getMultiSig](../Account/Account.md#getmultisig)

___

### getPermissions

▸ **getPermissions**(): `Promise`<[`Permissions`](../../../../interfaces/Types/Permissions/Permissions.md)\>

Retrieve the Permissions this Account has as a Permissioned Account for its corresponding Identity

**`Throws`**

 if there is no Identity associated with the Account

#### Returns

`Promise`<[`Permissions`](../../../../interfaces/Types/Permissions/Permissions.md)\>

#### Inherited from

[Account](../Account/Account.md).[getPermissions](../Account/Account.md#getpermissions)

___

### getProposal

▸ **getProposal**(`args`): `Promise`<[`MultiSigProposal`](../MultiSigProposal/MultiSigProposal.md)\>

Given an ID, fetch a [MultiSigProposal](../MultiSigProposal/MultiSigProposal.md) for this MultiSig

**`Throws`**

 if the MultiSigProposal is not found

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.id` | `BigNumber` |

#### Returns

`Promise`<[`MultiSigProposal`](../MultiSigProposal/MultiSigProposal.md)\>

___

### getProposals

▸ **getProposals**(): `Promise`<[`MultiSigProposal`](../MultiSigProposal/MultiSigProposal.md)[]\>

Return all [MultiSigProposal](../MultiSigProposal/MultiSigProposal.md) for this MultiSig Account

#### Returns

`Promise`<[`MultiSigProposal`](../MultiSigProposal/MultiSigProposal.md)[]\>

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

#### Inherited from

[Account](../Account/Account.md).[getSubsidy](../Account/Account.md#getsubsidy)

▸ **getSubsidy**(`callback`): `Promise`<[`UnsubCallback`](../../../../modules/Types/Types.md#unsubcallback)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`SubCallback`](../../../../modules/Types/Types.md#subcallback)<``null`` \| [`SubsidyWithAllowance`](../../../../interfaces/API/Entities/Subsidy/Types/SubsidyWithAllowance/SubsidyWithAllowance.md)\> |

#### Returns

`Promise`<[`UnsubCallback`](../../../../modules/Types/Types.md#unsubcallback)\>

#### Inherited from

[Account](../Account/Account.md).[getSubsidy](../Account/Account.md#getsubsidy)

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

#### Inherited from

[Account](../Account/Account.md).[getTransactionHistory](../Account/Account.md#gettransactionhistory)

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

#### Inherited from

[Account](../Account/Account.md).[getTransactionHistoryV2](../Account/Account.md#gettransactionhistoryv2)

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

[Account](../Account/Account.md).[isEqual](../Account/Account.md#isequal)

___

### isFrozen

▸ **isFrozen**(): `Promise`<`boolean`\>

Check whether this Account is frozen. If frozen, it cannot perform any Identity related action until the primary Account of the Identity unfreezes all secondary Accounts

**`Note`**

 returns false if the Account isn't associated to any Identity

#### Returns

`Promise`<`boolean`\>

#### Inherited from

[Account](../Account/Account.md).[isFrozen](../Account/Account.md#isfrozen)

___

### modify

▸ **modify**(`args`, `opts?`): `Promise`<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction)<`void`, `void`\>\>

Modify the signers for the MultiSig. The signing Account must belong to the Identity of the creator of the MultiSig

**`Note`**

 this method is of type [ProcedureMethod](../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [modify.checkAuthorization](../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Pick`<[`ModifyMultiSigParams`](../../../../interfaces/API/Procedures/Types/ModifyMultiSigParams/ModifyMultiSigParams.md), ``"signers"``\> |
| `opts?` | [`ProcedureOpts`](../../../../interfaces/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction)<`void`, `void`\>\>

___

### toHuman

▸ **toHuman**(): `string`

Return the Account's address

#### Returns

`string`

#### Inherited from

[Account](../Account/Account.md).[toHuman](../Account/Account.md#tohuman)

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

[Account](../Account/Account.md).[generateUuid](../Account/Account.md#generateuuid)

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

[Account](../Account/Account.md).[unserialize](../Account/Account.md#unserialize)
