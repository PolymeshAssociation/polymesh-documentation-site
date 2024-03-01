---
id: 'Asset'
title: 'Class: Asset'
sidebar_label: 'Asset'
---

[api/entities/Asset](../../../../modules/API/Entities/Asset/Asset.md).Asset

Class used to manage all Asset functionality

## Hierarchy

- [`Entity`](../Entity/Entity.md) \<[`UniqueIdentifiers`](../../../../interfaces/API/Entities/Asset/UniqueIdentifiers/UniqueIdentifiers.md), `string`\>

  ↳ **`Asset`**

## Properties

### assetHolders

• **assetHolders**: [`AssetHolders`](AssetHolders/AssetHolders.md)

#### Defined in

[api/entities/Asset/index.ts:118](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/Asset/index.ts#L118)

---

### checkpoints

• **checkpoints**: [`Checkpoints`](Checkpoints/Checkpoints.md)

#### Defined in

[api/entities/Asset/index.ts:123](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/Asset/index.ts#L123)

---

### compliance

• **compliance**: [`Compliance`](Compliance/Compliance.md)

#### Defined in

[api/entities/Asset/index.ts:120](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/Asset/index.ts#L120)

---

### corporateActions

• **corporateActions**: [`CorporateActions`](CorporateActions/CorporateActions.md)

#### Defined in

[api/entities/Asset/index.ts:124](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/Asset/index.ts#L124)

---

### did

• **did**: `string`

Identity ID of the Asset (used for Claims)

#### Defined in

[api/entities/Asset/index.ts:108](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/Asset/index.ts#L108)

---

### documents

• **documents**: [`Documents`](Documents/Documents.md)

#### Defined in

[api/entities/Asset/index.ts:116](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/Asset/index.ts#L116)

---

### issuance

• **issuance**: [`Issuance`](Issuance/Issuance.md)

#### Defined in

[api/entities/Asset/index.ts:119](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/Asset/index.ts#L119)

---

### metadata

• **metadata**: [`Metadata`](Metadata/Metadata.md)

#### Defined in

[api/entities/Asset/index.ts:126](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/Asset/index.ts#L126)

---

### offerings

• **offerings**: [`Offerings`](Offerings/Offerings.md)

#### Defined in

[api/entities/Asset/index.ts:122](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/Asset/index.ts#L122)

---

### permissions

• **permissions**: [`Permissions`](Permissions/Permissions.md)

#### Defined in

[api/entities/Asset/index.ts:125](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/Asset/index.ts#L125)

---

### settlements

• **settlements**: [`Settlements`](Settlements/Settlements.md)

#### Defined in

[api/entities/Asset/index.ts:117](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/Asset/index.ts#L117)

---

### ticker

• **ticker**: `string`

ticker of the Asset

#### Defined in

[api/entities/Asset/index.ts:113](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/Asset/index.ts#L113)

---

### transferRestrictions

• **transferRestrictions**: [`TransferRestrictions`](TransferRestrictions/TransferRestrictions.md)

#### Defined in

[api/entities/Asset/index.ts:121](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/Asset/index.ts#L121)

---

### uuid

• **uuid**: `string`

#### Inherited from

[Entity](../Entity/Entity.md).[uuid](../Entity/Entity.md#uuid)

#### Defined in

[api/entities/Entity.ts:46](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/Entity.ts#L46)

## Methods

### controllerTransfer

▸ **controllerTransfer**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

Force a transfer from a given Portfolio to the caller’s default Portfolio

#### Parameters

| Name    | Type                                                                                                                           |
| :------ | :----------------------------------------------------------------------------------------------------------------------------- |
| `args`  | [`ControllerTransferParams`](../../../../interfaces/API/Procedures/Types/ControllerTransferParams/ControllerTransferParams.md) |
| `opts?` | [`ProcedureOpts`](../../../../interfaces/Types/ProcedureOpts/ProcedureOpts.md)                                                 |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

**`Note`**

this method is of type [ProcedureMethod](../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [controllerTransfer.checkAuthorization](../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/entities/Asset/index.ts:563](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/Asset/index.ts#L563)

---

### createdAt

▸ **createdAt**(): `Promise`\<`null` \| [`EventIdentifier`](../../../../interfaces/Types/EventIdentifier/EventIdentifier.md)\>

Retrieve the identifier data (block number, date and event index) of the event that was emitted when the token was created

#### Returns

`Promise`\<`null` \| [`EventIdentifier`](../../../../interfaces/Types/EventIdentifier/EventIdentifier.md)\>

**`Note`**

uses the middleware

**`Note`**

there is a possibility that the data is not ready by the time it is requested. In that case, `null` is returned

#### Defined in

[api/entities/Asset/index.ts:387](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/Asset/index.ts#L387)

---

### createdAtV2

▸ **createdAtV2**(): `Promise`\<`null` \| [`EventIdentifier`](../../../../interfaces/Types/EventIdentifier/EventIdentifier.md)\>

Retrieve the identifier data (block number, date and event index) of the event that was emitted when the token was created

#### Returns

`Promise`\<`null` \| [`EventIdentifier`](../../../../interfaces/Types/EventIdentifier/EventIdentifier.md)\>

**`Note`**

uses the middlewareV2

**`Note`**

there is a possibility that the data is not ready by the time it is requested. In that case, `null` is returned

#### Defined in

[api/entities/Asset/index.ts:413](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/Asset/index.ts#L413)

---

### currentFundingRound

▸ **currentFundingRound**(): `Promise`\<`null` \| `string`\>

Retrieve the Asset's funding round

#### Returns

`Promise`\<`null` \| `string`\>

**`Note`**

can be subscribed to

#### Defined in

[api/entities/Asset/index.ts:313](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/Asset/index.ts#L313)

▸ **currentFundingRound**(`callback`): `Promise`\<[`UnsubCallback`](../../../../modules/Types/Types.md#unsubcallback)\>

#### Parameters

| Name       | Type                                                                                  |
| :--------- | :------------------------------------------------------------------------------------ |
| `callback` | [`SubCallback`](../../../../modules/Types/Types.md#subcallback)\<`null` \| `string`\> |

#### Returns

`Promise`\<[`UnsubCallback`](../../../../modules/Types/Types.md#unsubcallback)\>

#### Defined in

[api/entities/Asset/index.ts:314](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/Asset/index.ts#L314)

---

### details

▸ **details**(): `Promise`\<[`AssetDetails`](../../../../interfaces/API/Entities/Asset/Types/AssetDetails/AssetDetails.md)\>

Retrieve the Asset's data

#### Returns

`Promise`\<[`AssetDetails`](../../../../interfaces/API/Entities/Asset/Types/AssetDetails/AssetDetails.md)\>

**`Note`**

can be subscribed to

#### Defined in

[api/entities/Asset/index.ts:218](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/Asset/index.ts#L218)

▸ **details**(`callback`): `Promise`\<[`UnsubCallback`](../../../../modules/Types/Types.md#unsubcallback)\>

#### Parameters

| Name       | Type                                                                                                                                                               |
| :--------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `callback` | [`SubCallback`](../../../../modules/Types/Types.md#subcallback) \<[`AssetDetails`](../../../../interfaces/API/Entities/Asset/Types/AssetDetails/AssetDetails.md)\> |

#### Returns

`Promise`\<[`UnsubCallback`](../../../../modules/Types/Types.md#unsubcallback)\>

#### Defined in

[api/entities/Asset/index.ts:219](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/Asset/index.ts#L219)

---

### exists

▸ **exists**(): `Promise`\<`boolean`\>

Determine whether this Asset exists on chain

#### Returns

`Promise`\<`boolean`\>

#### Overrides

[Entity](../Entity/Entity.md).[exists](../Entity/Entity.md#exists)

#### Defined in

[api/entities/Asset/index.ts:749](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/Asset/index.ts#L749)

---

### freeze

▸ **freeze**(`opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction) \<[`Asset`](Asset.md), [`Asset`](Asset.md)\>\>

Freeze transfers of the Asset

#### Parameters

| Name    | Type                                                                           |
| :------ | :----------------------------------------------------------------------------- |
| `opts?` | [`ProcedureOpts`](../../../../interfaces/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction) \<[`Asset`](Asset.md), [`Asset`](Asset.md)\>\>

**`Note`**

this method is of type [NoArgsProcedureMethod](../../../../interfaces/Types/NoArgsProcedureMethod/NoArgsProcedureMethod.md), which means you can call [freeze.checkAuthorization](../../../../interfaces/Types/NoArgsProcedureMethod/NoArgsProcedureMethod.md#checkauthorization)
on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/entities/Asset/index.ts:440](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/Asset/index.ts#L440)

---

### getIdentifiers

▸ **getIdentifiers**(): `Promise`\<[`SecurityIdentifier`](../../../../interfaces/Types/SecurityIdentifier/SecurityIdentifier.md)[]\>

Retrieve the Asset's identifiers list

#### Returns

`Promise`\<[`SecurityIdentifier`](../../../../interfaces/Types/SecurityIdentifier/SecurityIdentifier.md)[]\>

**`Note`**

can be subscribed to

#### Defined in

[api/entities/Asset/index.ts:350](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/Asset/index.ts#L350)

▸ **getIdentifiers**(`callback?`): `Promise`\<[`UnsubCallback`](../../../../modules/Types/Types.md#unsubcallback)\>

#### Parameters

| Name        | Type                                                                                                                                                                |
| :---------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `callback?` | [`SubCallback`](../../../../modules/Types/Types.md#subcallback) \<[`SecurityIdentifier`](../../../../interfaces/Types/SecurityIdentifier/SecurityIdentifier.md)[]\> |

#### Returns

`Promise`\<[`UnsubCallback`](../../../../modules/Types/Types.md#unsubcallback)\>

#### Defined in

[api/entities/Asset/index.ts:351](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/Asset/index.ts#L351)

---

### getOperationHistory

▸ **getOperationHistory**(): `Promise`\<[`HistoricAgentOperation`](../../../../interfaces/Types/HistoricAgentOperation/HistoricAgentOperation.md)[]\>

Retrieve this Asset's Operation History

#### Returns

`Promise`\<[`HistoricAgentOperation`](../../../../interfaces/Types/HistoricAgentOperation/HistoricAgentOperation.md)[]\>

**`Note`**

Operations are grouped by the agent Identity who performed them

**`Note`**

uses the middleware

#### Defined in

[api/entities/Asset/index.ts:574](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/Asset/index.ts#L574)

---

### getOperationHistoryV2

▸ **getOperationHistoryV2**(): `Promise`\<[`HistoricAgentOperation`](../../../../interfaces/Types/HistoricAgentOperation/HistoricAgentOperation.md)[]\>

Retrieve this Asset's Operation History

#### Returns

`Promise`\<[`HistoricAgentOperation`](../../../../interfaces/Types/HistoricAgentOperation/HistoricAgentOperation.md)[]\>

**`Note`**

Operations are grouped by the agent Identity who performed them

**`Note`**

uses the middlewareV2

#### Defined in

[api/entities/Asset/index.ts:663](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/Asset/index.ts#L663)

---

### getTransactionHistory

▸ **getTransactionHistory**(`opts`): `Promise`\<[`ResultSet`](../../../../interfaces/Types/ResultSet/ResultSet.md) \<[`HistoricAssetTransaction`](../../../../interfaces/API/Entities/Asset/Types/HistoricAssetTransaction/HistoricAssetTransaction.md)\>\>

Retrieve this Asset's transaction History

#### Parameters

| Name          | Type        |
| :------------ | :---------- |
| `opts`        | `Object`    |
| `opts.size?`  | `BigNumber` |
| `opts.start?` | `BigNumber` |

#### Returns

`Promise`\<[`ResultSet`](../../../../interfaces/Types/ResultSet/ResultSet.md) \<[`HistoricAssetTransaction`](../../../../interfaces/API/Entities/Asset/Types/HistoricAssetTransaction/HistoricAssetTransaction.md)\>\>

**`Note`**

uses the middlewareV2

#### Defined in

[api/entities/Asset/index.ts:692](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/Asset/index.ts#L692)

---

### investorCount

▸ **investorCount**(): `Promise`\<`BigNumber`\>

Retrieve the amount of unique investors that hold this Asset

#### Returns

`Promise`\<`BigNumber`\>

**`Note`**

this takes into account the Scope ID of Investor Uniqueness Claims. If an investor holds balances
of this Asset in two or more different Identities, but they all have Investor Uniqueness Claims with the same
Scope ID, then they will only be counted once for the purposes of this result

#### Defined in

[api/entities/Asset/index.ts:507](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/Asset/index.ts#L507)

---

### isEqual

▸ **isEqual**(`entity`): `boolean`

Determine whether this Entity is the same as another one

#### Parameters

| Name     | Type                                                    |
| :------- | :------------------------------------------------------ |
| `entity` | [`Entity`](../Entity/Entity.md)\<`unknown`, `unknown`\> |

#### Returns

`boolean`

#### Inherited from

[Entity](../Entity/Entity.md).[isEqual](../Entity/Entity.md#isequal)

#### Defined in

[api/entities/Entity.ts:61](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/Entity.ts#L61)

---

### isFrozen

▸ **isFrozen**(): `Promise`\<`boolean`\>

Check whether transfers are frozen for the Asset

#### Returns

`Promise`\<`boolean`\>

**`Note`**

can be subscribed to

#### Defined in

[api/entities/Asset/index.ts:459](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/Asset/index.ts#L459)

▸ **isFrozen**(`callback`): `Promise`\<[`UnsubCallback`](../../../../modules/Types/Types.md#unsubcallback)\>

#### Parameters

| Name       | Type                                                                         |
| :--------- | :--------------------------------------------------------------------------- |
| `callback` | [`SubCallback`](../../../../modules/Types/Types.md#subcallback)\<`boolean`\> |

#### Returns

`Promise`\<[`UnsubCallback`](../../../../modules/Types/Types.md#unsubcallback)\>

#### Defined in

[api/entities/Asset/index.ts:460](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/Asset/index.ts#L460)

---

### modify

▸ **modify**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction) \<[`Asset`](Asset.md), [`Asset`](Asset.md)\>\>

Modify some properties of the Asset

#### Parameters

| Name    | Type                                                                                       |
| :------ | :----------------------------------------------------------------------------------------- |
| `args`  | [`ModifyAssetParams`](../../../../modules/API/Procedures/Types/Types.md#modifyassetparams) |
| `opts?` | [`ProcedureOpts`](../../../../interfaces/Types/ProcedureOpts/ProcedureOpts.md)             |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction) \<[`Asset`](Asset.md), [`Asset`](Asset.md)\>\>

**`Throws`**

if the passed values result in no changes being made to the Asset

**`Note`**

this method is of type [ProcedureMethod](../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [modify.checkAuthorization](../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/entities/Asset/index.ts:209](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/Asset/index.ts#L209)

---

### redeem

▸ **redeem**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

Redeem (burn) an amount of this Asset's tokens

#### Parameters

| Name    | Type                                                                                                         |
| :------ | :----------------------------------------------------------------------------------------------------------- |
| `args`  | [`RedeemTokensParams`](../../../../interfaces/API/Procedures/Types/RedeemTokensParams/RedeemTokensParams.md) |
| `opts?` | [`ProcedureOpts`](../../../../interfaces/Types/ProcedureOpts/ProcedureOpts.md)                               |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

**`Note`**

tokens are removed from the caller's Default Portfolio

**`Note`**

this method is of type [ProcedureMethod](../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [redeem.checkAuthorization](../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/entities/Asset/index.ts:496](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/Asset/index.ts#L496)

---

### setVenueFiltering

▸ **setVenueFiltering**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

Enable/disable venue filtering for this Asset and/or set allowed/disallowed venues

#### Parameters

| Name    | Type                                                                                                   |
| :------ | :----------------------------------------------------------------------------------------------------- |
| `args`  | [`SetVenueFilteringParams`](../../../../modules/API/Procedures/Types/Types.md#setvenuefilteringparams) |
| `opts?` | [`ProcedureOpts`](../../../../interfaces/Types/ProcedureOpts/ProcedureOpts.md)                         |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

**`Note`**

this method is of type [ProcedureMethod](../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [setVenueFiltering.checkAuthorization](../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/entities/Asset/index.ts:772](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/Asset/index.ts#L772)

---

### toHuman

▸ **toHuman**(): `string`

Return the Asset's ticker

#### Returns

`string`

#### Overrides

[Entity](../Entity/Entity.md).[toHuman](../Entity/Entity.md#tohuman)

#### Defined in

[api/entities/Asset/index.ts:762](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/Asset/index.ts#L762)

---

### transferOwnership

▸ **transferOwnership**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction) \<[`AuthorizationRequest`](../AuthorizationRequest/AuthorizationRequest.md), [`AuthorizationRequest`](../AuthorizationRequest/AuthorizationRequest.md)\>\>

Transfer ownership of the Asset to another Identity. This generates an authorization request that must be accepted
by the recipient

#### Parameters

| Name    | Type                                                                                                                                       |
| :------ | :----------------------------------------------------------------------------------------------------------------------------------------- |
| `args`  | [`TransferAssetOwnershipParams`](../../../../interfaces/API/Procedures/Types/TransferAssetOwnershipParams/TransferAssetOwnershipParams.md) |
| `opts?` | [`ProcedureOpts`](../../../../interfaces/Types/ProcedureOpts/ProcedureOpts.md)                                                             |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction) \<[`AuthorizationRequest`](../AuthorizationRequest/AuthorizationRequest.md), [`AuthorizationRequest`](../AuthorizationRequest/AuthorizationRequest.md)\>\>

**`Note`**

this will create [Authorization Request](../AuthorizationRequest/AuthorizationRequest.md) which has to be accepted by the `target` Identity.
An [Account](../Account/Account.md) or [Identity](../Identity/Identity.md) can fetch its pending Authorization Requests by calling [authorizations.getReceived](../Common/Namespaces/Authorizations/Authorizations.md#getreceived).
Also, an Account or Identity can directly fetch the details of an Authorization Request by calling [authorizations.getOne](../Common/Namespaces/Authorizations/Authorizations.md#getone)

**`Note`**

this method is of type [ProcedureMethod](../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [transferOwnership.checkAuthorization](../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/entities/Asset/index.ts:198](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/Asset/index.ts#L198)

---

### unfreeze

▸ **unfreeze**(`opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction) \<[`Asset`](Asset.md), [`Asset`](Asset.md)\>\>

Unfreeze transfers of the Asset

#### Parameters

| Name    | Type                                                                           |
| :------ | :----------------------------------------------------------------------------- |
| `opts?` | [`ProcedureOpts`](../../../../interfaces/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction) \<[`Asset`](Asset.md), [`Asset`](Asset.md)\>\>

**`Note`**

this method is of type [NoArgsProcedureMethod](../../../../interfaces/Types/NoArgsProcedureMethod/NoArgsProcedureMethod.md), which means you can call [unfreeze.checkAuthorization](../../../../interfaces/Types/NoArgsProcedureMethod/NoArgsProcedureMethod.md#checkauthorization)
on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/entities/Asset/index.ts:450](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/Asset/index.ts#L450)

---

### generateUuid

▸ `Static` **generateUuid**\<`Identifiers`\>(`identifiers`): `string`

Generate the Entity's UUID from its identifying properties

#### Type parameters

| Name          |
| :------------ |
| `Identifiers` |

#### Parameters

| Name          | Type          |
| :------------ | :------------ |
| `identifiers` | `Identifiers` |

#### Returns

`string`

#### Inherited from

[Entity](../Entity/Entity.md).[generateUuid](../Entity/Entity.md#generateuuid)

#### Defined in

[api/entities/Entity.ts:14](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/Entity.ts#L14)

---

### unserialize

▸ `Static` **unserialize**\<`Identifiers`\>(`serialized`): `Identifiers`

Unserialize a UUID into its Unique Identifiers

#### Type parameters

| Name          |
| :------------ |
| `Identifiers` |

#### Parameters

| Name         | Type     | Description         |
| :----------- | :------- | :------------------ |
| `serialized` | `string` | UUID to unserialize |

#### Returns

`Identifiers`

#### Inherited from

[Entity](../Entity/Entity.md).[unserialize](../Entity/Entity.md#unserialize)

#### Defined in

[api/entities/Entity.ts:23](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/Entity.ts#L23)
