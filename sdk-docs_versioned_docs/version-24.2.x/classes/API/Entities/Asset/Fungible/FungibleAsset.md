---
id: 'FungibleAsset'
title: 'Class: FungibleAsset'
sidebar_label: 'FungibleAsset'
---

[api/entities/Asset/Fungible](../../../../../modules/API/Entities/Asset/Fungible/Fungible.md).FungibleAsset

Class used to manage all Fungible Asset functionality

## Hierarchy

- [`BaseAsset`](../Base/BaseAsset/BaseAsset.md)

  ↳ **`FungibleAsset`**

## Properties

### assetHolders

• **assetHolders**: [`AssetHolders`](AssetHolders/AssetHolders.md)

#### Defined in

[api/entities/Asset/Fungible/index.ts:46](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fedc4714f/src/api/entities/Asset/Fungible/index.ts#L46)

---

### checkpoints

• **checkpoints**: [`Checkpoints`](Checkpoints/Checkpoints.md)

#### Defined in

[api/entities/Asset/Fungible/index.ts:50](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fedc4714f/src/api/entities/Asset/Fungible/index.ts#L50)

---

### compliance

• **compliance**: [`Compliance`](../Base/Compliance/Compliance.md)

#### Inherited from

[BaseAsset](../Base/BaseAsset/BaseAsset.md).[compliance](../Base/BaseAsset/BaseAsset.md#compliance)

#### Defined in

[api/entities/Asset/Base/BaseAsset.ts:66](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fedc4714f/src/api/entities/Asset/Base/BaseAsset.ts#L66)

---

### corporateActions

• **corporateActions**: [`CorporateActions`](CorporateActions/CorporateActions.md)

#### Defined in

[api/entities/Asset/Fungible/index.ts:51](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fedc4714f/src/api/entities/Asset/Fungible/index.ts#L51)

---

### did

• **did**: `string`

Identity ID of the Asset (used for Claims)

#### Inherited from

[BaseAsset](../Base/BaseAsset/BaseAsset.md).[did](../Base/BaseAsset/BaseAsset.md#did)

#### Defined in

[api/entities/Asset/Base/BaseAsset.ts:74](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fedc4714f/src/api/entities/Asset/Base/BaseAsset.ts#L74)

---

### documents

• **documents**: [`Documents`](../Base/Documents/Documents.md)

#### Inherited from

[BaseAsset](../Base/BaseAsset/BaseAsset.md).[documents](../Base/BaseAsset/BaseAsset.md#documents)

#### Defined in

[api/entities/Asset/Base/BaseAsset.ts:67](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fedc4714f/src/api/entities/Asset/Base/BaseAsset.ts#L67)

---

### issuance

• **issuance**: [`Issuance`](Issuance/Issuance.md)

#### Defined in

[api/entities/Asset/Fungible/index.ts:47](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fedc4714f/src/api/entities/Asset/Fungible/index.ts#L47)

---

### metadata

• **metadata**: [`Metadata`](../Base/Metadata/Metadata.md)

#### Inherited from

[BaseAsset](../Base/BaseAsset/BaseAsset.md).[metadata](../Base/BaseAsset/BaseAsset.md#metadata)

#### Defined in

[api/entities/Asset/Base/BaseAsset.ts:68](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fedc4714f/src/api/entities/Asset/Base/BaseAsset.ts#L68)

---

### offerings

• **offerings**: [`Offerings`](Offerings/Offerings.md)

#### Defined in

[api/entities/Asset/Fungible/index.ts:49](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fedc4714f/src/api/entities/Asset/Fungible/index.ts#L49)

---

### permissions

• **permissions**: [`Permissions`](../Base/Permissions/Permissions.md)

#### Inherited from

[BaseAsset](../Base/BaseAsset/BaseAsset.md).[permissions](../Base/BaseAsset/BaseAsset.md#permissions)

#### Defined in

[api/entities/Asset/Base/BaseAsset.ts:69](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fedc4714f/src/api/entities/Asset/Base/BaseAsset.ts#L69)

---

### settlements

• **settlements**: [`FungibleSettlements`](../Base/Settlements/FungibleSettlements.md)

#### Defined in

[api/entities/Asset/Fungible/index.ts:45](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fedc4714f/src/api/entities/Asset/Fungible/index.ts#L45)

---

### ticker

• **ticker**: `string`

ticker of the Asset

#### Inherited from

[BaseAsset](../Base/BaseAsset/BaseAsset.md).[ticker](../Base/BaseAsset/BaseAsset.md#ticker)

#### Defined in

[api/entities/Asset/Base/BaseAsset.ts:79](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fedc4714f/src/api/entities/Asset/Base/BaseAsset.ts#L79)

---

### transferRestrictions

• **transferRestrictions**: [`TransferRestrictions`](TransferRestrictions/TransferRestrictions.md)

#### Defined in

[api/entities/Asset/Fungible/index.ts:48](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fedc4714f/src/api/entities/Asset/Fungible/index.ts#L48)

---

### uuid

• **uuid**: `string`

#### Inherited from

[BaseAsset](../Base/BaseAsset/BaseAsset.md).[uuid](../Base/BaseAsset/BaseAsset.md#uuid)

#### Defined in

[api/entities/Entity.ts:46](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fedc4714f/src/api/entities/Entity.ts#L46)

## Methods

### addRequiredMediators

▸ **addRequiredMediators**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

Add required mediators. Mediators must approve any trades involving the asset

#### Parameters

| Name    | Type                                                                                                               |
| :------ | :----------------------------------------------------------------------------------------------------------------- |
| `args`  | [`AssetMediatorParams`](../../../../../interfaces/API/Procedures/Types/AssetMediatorParams/AssetMediatorParams.md) |
| `opts?` | [`ProcedureOpts`](../../../../../interfaces/API/Procedures/Types/ProcedureOpts/ProcedureOpts.md)                   |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

**`Note`**

this method is of type [ProcedureMethod](../../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [addRequiredMediators.checkAuthorization](../../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Inherited from

[BaseAsset](../Base/BaseAsset/BaseAsset.md).[addRequiredMediators](../Base/BaseAsset/BaseAsset.md#addrequiredmediators)

#### Defined in

[api/entities/Asset/Base/BaseAsset.ts:218](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fedc4714f/src/api/entities/Asset/Base/BaseAsset.ts#L218)

---

### controllerTransfer

▸ **controllerTransfer**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

Force a transfer from a given Portfolio to the caller’s default Portfolio

#### Parameters

| Name    | Type                                                                                                                              |
| :------ | :-------------------------------------------------------------------------------------------------------------------------------- |
| `args`  | [`ControllerTransferParams`](../../../../../interfaces/API/Procedures/Types/ControllerTransferParams/ControllerTransferParams.md) |
| `opts?` | [`ProcedureOpts`](../../../../../interfaces/API/Procedures/Types/ProcedureOpts/ProcedureOpts.md)                                  |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

**`Note`**

this method is of type [ProcedureMethod](../../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [controllerTransfer.checkAuthorization](../../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/entities/Asset/Fungible/index.ts:151](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fedc4714f/src/api/entities/Asset/Fungible/index.ts#L151)

---

### createdAt

▸ **createdAt**(): `Promise`\<`null` \| [`EventIdentifier`](../../../../../interfaces/API/Client/Types/EventIdentifier/EventIdentifier.md)\>

Retrieve the identifier data (block number, date and event index) of the event that was emitted when the token was created

#### Returns

`Promise`\<`null` \| [`EventIdentifier`](../../../../../interfaces/API/Client/Types/EventIdentifier/EventIdentifier.md)\>

**`Note`**

uses the middlewareV2

**`Note`**

there is a possibility that the data is not ready by the time it is requested. In that case, `null` is returned

#### Defined in

[api/entities/Asset/Fungible/index.ts:88](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fedc4714f/src/api/entities/Asset/Fungible/index.ts#L88)

---

### currentFundingRound

▸ **currentFundingRound**(): `Promise`\<`null` \| `string`\>

Retrieve the Asset's funding round

#### Returns

`Promise`\<`null` \| `string`\>

**`Note`**

can be subscribed to

#### Inherited from

[BaseAsset](../Base/BaseAsset/BaseAsset.md).[currentFundingRound](../Base/BaseAsset/BaseAsset.md#currentfundinground)

#### Defined in

[api/entities/Asset/Base/BaseAsset.ts:454](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fedc4714f/src/api/entities/Asset/Base/BaseAsset.ts#L454)

▸ **currentFundingRound**(`callback`): `Promise`\<[`UnsubCallback`](../../../../../modules/API/Entities/Types/Types.md#unsubcallback)\>

#### Parameters

| Name       | Type                                                                                                  |
| :--------- | :---------------------------------------------------------------------------------------------------- |
| `callback` | [`SubCallback`](../../../../../modules/API/Entities/Types/Types.md#subcallback)\<`null` \| `string`\> |

#### Returns

`Promise`\<[`UnsubCallback`](../../../../../modules/API/Entities/Types/Types.md#unsubcallback)\>

#### Inherited from

[BaseAsset](../Base/BaseAsset/BaseAsset.md).[currentFundingRound](../Base/BaseAsset/BaseAsset.md#currentfundinground)

#### Defined in

[api/entities/Asset/Base/BaseAsset.ts:455](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fedc4714f/src/api/entities/Asset/Base/BaseAsset.ts#L455)

---

### details

▸ **details**(): `Promise`\<[`AssetDetails`](../../../../../interfaces/API/Entities/Asset/Types/AssetDetails/AssetDetails.md)\>

Retrieve the Asset's data

#### Returns

`Promise`\<[`AssetDetails`](../../../../../interfaces/API/Entities/Asset/Types/AssetDetails/AssetDetails.md)\>

**`Note`**

can be subscribed to

#### Inherited from

[BaseAsset](../Base/BaseAsset/BaseAsset.md).[details](../Base/BaseAsset/BaseAsset.md#details)

#### Defined in

[api/entities/Asset/Base/BaseAsset.ts:307](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fedc4714f/src/api/entities/Asset/Base/BaseAsset.ts#L307)

▸ **details**(`callback`): `Promise`\<[`UnsubCallback`](../../../../../modules/API/Entities/Types/Types.md#unsubcallback)\>

#### Parameters

| Name       | Type                                                                                                                                                                                  |
| :--------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `callback` | [`SubCallback`](../../../../../modules/API/Entities/Types/Types.md#subcallback) \<[`AssetDetails`](../../../../../interfaces/API/Entities/Asset/Types/AssetDetails/AssetDetails.md)\> |

#### Returns

`Promise`\<[`UnsubCallback`](../../../../../modules/API/Entities/Types/Types.md#unsubcallback)\>

#### Inherited from

[BaseAsset](../Base/BaseAsset/BaseAsset.md).[details](../Base/BaseAsset/BaseAsset.md#details)

#### Defined in

[api/entities/Asset/Base/BaseAsset.ts:308](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fedc4714f/src/api/entities/Asset/Base/BaseAsset.ts#L308)

---

### exists

▸ **exists**(): `Promise`\<`boolean`\>

Determine whether this FungibleAsset exists on chain

#### Returns

`Promise`\<`boolean`\>

#### Overrides

BaseAsset.exists

#### Defined in

[api/entities/Asset/Fungible/index.ts:254](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fedc4714f/src/api/entities/Asset/Fungible/index.ts#L254)

---

### freeze

▸ **freeze**(`opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

Freeze transfers of the Asset

#### Parameters

| Name    | Type                                                                                             |
| :------ | :----------------------------------------------------------------------------------------------- |
| `opts?` | [`ProcedureOpts`](../../../../../interfaces/API/Procedures/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

**`Note`**

this method is of type [NoArgsProcedureMethod](../../../../../interfaces/API/Procedures/Types/NoArgsProcedureMethod/NoArgsProcedureMethod.md), which means you can call [freeze.checkAuthorization](../../../../../interfaces/API/Procedures/Types/NoArgsProcedureMethod/NoArgsProcedureMethod.md#checkauthorization)
on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Inherited from

[BaseAsset](../Base/BaseAsset/BaseAsset.md).[freeze](../Base/BaseAsset/BaseAsset.md#freeze)

#### Defined in

[api/entities/Asset/Base/BaseAsset.ts:198](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fedc4714f/src/api/entities/Asset/Base/BaseAsset.ts#L198)

---

### getIdentifiers

▸ **getIdentifiers**(): `Promise`\<[`SecurityIdentifier`](../../../../../interfaces/API/Entities/Asset/Types/SecurityIdentifier/SecurityIdentifier.md)[]\>

Retrieve the Asset's identifiers list

#### Returns

`Promise`\<[`SecurityIdentifier`](../../../../../interfaces/API/Entities/Asset/Types/SecurityIdentifier/SecurityIdentifier.md)[]\>

**`Note`**

can be subscribed to

#### Inherited from

[BaseAsset](../Base/BaseAsset/BaseAsset.md).[getIdentifiers](../Base/BaseAsset/BaseAsset.md#getidentifiers)

#### Defined in

[api/entities/Asset/Base/BaseAsset.ts:237](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fedc4714f/src/api/entities/Asset/Base/BaseAsset.ts#L237)

▸ **getIdentifiers**(`callback?`): `Promise`\<[`UnsubCallback`](../../../../../modules/API/Entities/Types/Types.md#unsubcallback)\>

#### Parameters

| Name        | Type                                                                                                                                                                                                      |
| :---------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `callback?` | [`SubCallback`](../../../../../modules/API/Entities/Types/Types.md#subcallback) \<[`SecurityIdentifier`](../../../../../interfaces/API/Entities/Asset/Types/SecurityIdentifier/SecurityIdentifier.md)[]\> |

#### Returns

`Promise`\<[`UnsubCallback`](../../../../../modules/API/Entities/Types/Types.md#unsubcallback)\>

#### Inherited from

[BaseAsset](../Base/BaseAsset/BaseAsset.md).[getIdentifiers](../Base/BaseAsset/BaseAsset.md#getidentifiers)

#### Defined in

[api/entities/Asset/Base/BaseAsset.ts:238](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fedc4714f/src/api/entities/Asset/Base/BaseAsset.ts#L238)

---

### getOperationHistory

▸ **getOperationHistory**(): `Promise`\<[`HistoricAgentOperation`](../../../../../interfaces/API/Entities/Asset/Types/HistoricAgentOperation/HistoricAgentOperation.md)[]\>

Retrieve this Asset's Operation History

#### Returns

`Promise`\<[`HistoricAgentOperation`](../../../../../interfaces/API/Entities/Asset/Types/HistoricAgentOperation/HistoricAgentOperation.md)[]\>

**`Note`**

Operations are grouped by the agent Identity who performed them

**`Note`**

uses the middlewareV2

#### Defined in

[api/entities/Asset/Fungible/index.ts:162](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fedc4714f/src/api/entities/Asset/Fungible/index.ts#L162)

---

### getRequiredMediators

▸ **getRequiredMediators**(): `Promise`\<[`Identity`](../../Identity/Identity.md)[]\>

Get required Asset mediators. These Identities must approve any Instruction involving the asset

#### Returns

`Promise`\<[`Identity`](../../Identity/Identity.md)[]\>

#### Inherited from

[BaseAsset](../Base/BaseAsset/BaseAsset.md).[getRequiredMediators](../Base/BaseAsset/BaseAsset.md#getrequiredmediators)

#### Defined in

[api/entities/Asset/Base/BaseAsset.ts:400](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fedc4714f/src/api/entities/Asset/Base/BaseAsset.ts#L400)

---

### getTransactionHistory

▸ **getTransactionHistory**(`opts`): `Promise`\<[`ResultSet`](../../../../../interfaces/API/Entities/Types/ResultSet/ResultSet.md) \<[`HistoricAssetTransaction`](../../../../../interfaces/API/Entities/Asset/Types/HistoricAssetTransaction/HistoricAssetTransaction.md)\>\>

Retrieve this Asset's transaction History

#### Parameters

| Name          | Type        |
| :------------ | :---------- |
| `opts`        | `Object`    |
| `opts.size?`  | `BigNumber` |
| `opts.start?` | `BigNumber` |

#### Returns

`Promise`\<[`ResultSet`](../../../../../interfaces/API/Entities/Types/ResultSet/ResultSet.md) \<[`HistoricAssetTransaction`](../../../../../interfaces/API/Entities/Asset/Types/HistoricAssetTransaction/HistoricAssetTransaction.md)\>\>

**`Note`**

uses the middlewareV2

#### Defined in

[api/entities/Asset/Fungible/index.ts:191](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fedc4714f/src/api/entities/Asset/Fungible/index.ts#L191)

---

### getVenueFilteringDetails

▸ **getVenueFilteringDetails**(): `Promise`\<[`VenueFilteringDetails`](../../../../../interfaces/API/Entities/Asset/Types/VenueFilteringDetails/VenueFilteringDetails.md)\>

Get venue filtering details

#### Returns

`Promise`\<[`VenueFilteringDetails`](../../../../../interfaces/API/Entities/Asset/Types/VenueFilteringDetails/VenueFilteringDetails.md)\>

#### Inherited from

[BaseAsset](../Base/BaseAsset/BaseAsset.md).[getVenueFilteringDetails](../Base/BaseAsset/BaseAsset.md#getvenuefilteringdetails)

#### Defined in

[api/entities/Asset/Base/BaseAsset.ts:419](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fedc4714f/src/api/entities/Asset/Base/BaseAsset.ts#L419)

---

### investorCount

▸ **investorCount**(): `Promise`\<`BigNumber`\>

Retrieve the amount of unique investors that hold this Asset

#### Returns

`Promise`\<`BigNumber`\>

#### Defined in

[api/entities/Asset/Fungible/index.ts:121](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fedc4714f/src/api/entities/Asset/Fungible/index.ts#L121)

---

### isEqual

▸ **isEqual**(`entity`): `boolean`

Determine whether this Entity is the same as another one

#### Parameters

| Name     | Type                                                       |
| :------- | :--------------------------------------------------------- |
| `entity` | [`Entity`](../../Entity/Entity.md)\<`unknown`, `unknown`\> |

#### Returns

`boolean`

#### Inherited from

[BaseAsset](../Base/BaseAsset/BaseAsset.md).[isEqual](../Base/BaseAsset/BaseAsset.md#isequal)

#### Defined in

[api/entities/Entity.ts:61](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fedc4714f/src/api/entities/Entity.ts#L61)

---

### isFrozen

▸ **isFrozen**(): `Promise`\<`boolean`\>

Check whether transfers are frozen for the Asset

#### Returns

`Promise`\<`boolean`\>

**`Note`**

can be subscribed to

#### Inherited from

[BaseAsset](../Base/BaseAsset/BaseAsset.md).[isFrozen](../Base/BaseAsset/BaseAsset.md#isfrozen)

#### Defined in

[api/entities/Asset/Base/BaseAsset.ts:273](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fedc4714f/src/api/entities/Asset/Base/BaseAsset.ts#L273)

▸ **isFrozen**(`callback`): `Promise`\<[`UnsubCallback`](../../../../../modules/API/Entities/Types/Types.md#unsubcallback)\>

#### Parameters

| Name       | Type                                                                                         |
| :--------- | :------------------------------------------------------------------------------------------- |
| `callback` | [`SubCallback`](../../../../../modules/API/Entities/Types/Types.md#subcallback)\<`boolean`\> |

#### Returns

`Promise`\<[`UnsubCallback`](../../../../../modules/API/Entities/Types/Types.md#unsubcallback)\>

#### Inherited from

[BaseAsset](../Base/BaseAsset/BaseAsset.md).[isFrozen](../Base/BaseAsset/BaseAsset.md#isfrozen)

#### Defined in

[api/entities/Asset/Base/BaseAsset.ts:274](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fedc4714f/src/api/entities/Asset/Base/BaseAsset.ts#L274)

---

### modify

▸ **modify**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction) \<[`Asset`](../../../../../modules/API/Entities/Asset/Types/Types.md#asset), [`Asset`](../../../../../modules/API/Entities/Asset/Types/Types.md#asset)\>\>

Modify some properties of the Asset

#### Parameters

| Name    | Type                                                                                             |
| :------ | :----------------------------------------------------------------------------------------------- |
| `args`  | [`ModifyAssetParams`](../../../../../modules/API/Procedures/Types/Types.md#modifyassetparams)    |
| `opts?` | [`ProcedureOpts`](../../../../../interfaces/API/Procedures/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction) \<[`Asset`](../../../../../modules/API/Entities/Asset/Types/Types.md#asset), [`Asset`](../../../../../modules/API/Entities/Asset/Types/Types.md#asset)\>\>

**`Throws`**

if the passed values result in no changes being made to the Asset

**`Note`**

this method is of type [ProcedureMethod](../../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [modify.checkAuthorization](../../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Inherited from

[BaseAsset](../Base/BaseAsset/BaseAsset.md).[modify](../Base/BaseAsset/BaseAsset.md#modify)

#### Defined in

[api/entities/Asset/Base/BaseAsset.ts:124](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fedc4714f/src/api/entities/Asset/Base/BaseAsset.ts#L124)

---

### redeem

▸ **redeem**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

Redeem (burn) an amount of this Asset's tokens

#### Parameters

| Name    | Type                                                                                                            |
| :------ | :-------------------------------------------------------------------------------------------------------------- |
| `args`  | [`RedeemTokensParams`](../../../../../interfaces/API/Procedures/Types/RedeemTokensParams/RedeemTokensParams.md) |
| `opts?` | [`ProcedureOpts`](../../../../../interfaces/API/Procedures/Types/ProcedureOpts/ProcedureOpts.md)                |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

**`Note`**

tokens are removed from the caller's Default Portfolio

**`Note`**

this method is of type [ProcedureMethod](../../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [redeem.checkAuthorization](../../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/entities/Asset/Fungible/index.ts:114](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fedc4714f/src/api/entities/Asset/Fungible/index.ts#L114)

---

### removeRequiredMediators

▸ **removeRequiredMediators**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

Remove required mediators

#### Parameters

| Name    | Type                                                                                                               |
| :------ | :----------------------------------------------------------------------------------------------------------------- |
| `args`  | [`AssetMediatorParams`](../../../../../interfaces/API/Procedures/Types/AssetMediatorParams/AssetMediatorParams.md) |
| `opts?` | [`ProcedureOpts`](../../../../../interfaces/API/Procedures/Types/ProcedureOpts/ProcedureOpts.md)                   |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

**`Note`**

this method is of type [ProcedureMethod](../../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [removeRequiredMediators.checkAuthorization](../../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Inherited from

[BaseAsset](../Base/BaseAsset/BaseAsset.md).[removeRequiredMediators](../Base/BaseAsset/BaseAsset.md#removerequiredmediators)

#### Defined in

[api/entities/Asset/Base/BaseAsset.ts:228](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fedc4714f/src/api/entities/Asset/Base/BaseAsset.ts#L228)

---

### setVenueFiltering

▸ **setVenueFiltering**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

Enable/disable venue filtering for this Asset and/or set allowed/disallowed venues

#### Parameters

| Name    | Type                                                                                                      |
| :------ | :-------------------------------------------------------------------------------------------------------- |
| `args`  | [`SetVenueFilteringParams`](../../../../../modules/API/Procedures/Types/Types.md#setvenuefilteringparams) |
| `opts?` | [`ProcedureOpts`](../../../../../interfaces/API/Procedures/Types/ProcedureOpts/ProcedureOpts.md)          |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

**`Note`**

this method is of type [ProcedureMethod](../../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [setVenueFiltering.checkAuthorization](../../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Inherited from

[BaseAsset](../Base/BaseAsset/BaseAsset.md).[setVenueFiltering](../Base/BaseAsset/BaseAsset.md#setvenuefiltering)

#### Defined in

[api/entities/Asset/Base/BaseAsset.ts:102](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fedc4714f/src/api/entities/Asset/Base/BaseAsset.ts#L102)

---

### toHuman

▸ **toHuman**(): `string`

Return the NftCollection's ticker

#### Returns

`string`

#### Inherited from

[BaseAsset](../Base/BaseAsset/BaseAsset.md).[toHuman](../Base/BaseAsset/BaseAsset.md#tohuman)

#### Defined in

[api/entities/Asset/Base/BaseAsset.ts:510](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fedc4714f/src/api/entities/Asset/Base/BaseAsset.ts#L510)

---

### transferOwnership

▸ **transferOwnership**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction) \<[`AuthorizationRequest`](../../AuthorizationRequest/AuthorizationRequest.md), [`AuthorizationRequest`](../../AuthorizationRequest/AuthorizationRequest.md)\>\>

Transfer ownership of the Asset to another Identity. This generates an authorization request that must be accepted
by the recipient

#### Parameters

| Name    | Type                                                                                                                                          |
| :------ | :-------------------------------------------------------------------------------------------------------------------------------------------- |
| `args`  | [`TransferAssetOwnershipParams`](../../../../../interfaces/API/Procedures/Types/TransferAssetOwnershipParams/TransferAssetOwnershipParams.md) |
| `opts?` | [`ProcedureOpts`](../../../../../interfaces/API/Procedures/Types/ProcedureOpts/ProcedureOpts.md)                                              |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction) \<[`AuthorizationRequest`](../../AuthorizationRequest/AuthorizationRequest.md), [`AuthorizationRequest`](../../AuthorizationRequest/AuthorizationRequest.md)\>\>

**`Note`**

this will create [Authorization Request](../../AuthorizationRequest/AuthorizationRequest.md) which has to be accepted by the `target` Identity.
An [Account](../../Account/Account.md) or [Identity](../../Identity/Identity.md) can fetch its pending Authorization Requests by calling [authorizations.getReceived](../../Common/Namespaces/Authorizations/Authorizations.md#getreceived).
Also, an Account or Identity can directly fetch the details of an Authorization Request by calling [authorizations.getOne](../../Common/Namespaces/Authorizations/Authorizations.md#getone)

**`Note`**

this method is of type [ProcedureMethod](../../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [transferOwnership.checkAuthorization](../../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Inherited from

[BaseAsset](../Base/BaseAsset/BaseAsset.md).[transferOwnership](../Base/BaseAsset/BaseAsset.md#transferownership)

#### Defined in

[api/entities/Asset/Base/BaseAsset.ts:92](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fedc4714f/src/api/entities/Asset/Base/BaseAsset.ts#L92)

---

### unfreeze

▸ **unfreeze**(`opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

Unfreeze transfers of the Asset

#### Parameters

| Name    | Type                                                                                             |
| :------ | :----------------------------------------------------------------------------------------------- |
| `opts?` | [`ProcedureOpts`](../../../../../interfaces/API/Procedures/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

**`Note`**

this method is of type [NoArgsProcedureMethod](../../../../../interfaces/API/Procedures/Types/NoArgsProcedureMethod/NoArgsProcedureMethod.md), which means you can call [unfreeze.checkAuthorization](../../../../../interfaces/API/Procedures/Types/NoArgsProcedureMethod/NoArgsProcedureMethod.md#checkauthorization)
on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Inherited from

[BaseAsset](../Base/BaseAsset/BaseAsset.md).[unfreeze](../Base/BaseAsset/BaseAsset.md#unfreeze)

#### Defined in

[api/entities/Asset/Base/BaseAsset.ts:208](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fedc4714f/src/api/entities/Asset/Base/BaseAsset.ts#L208)

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

[BaseAsset](../Base/BaseAsset/BaseAsset.md).[generateUuid](../Base/BaseAsset/BaseAsset.md#generateuuid)

#### Defined in

[api/entities/Entity.ts:14](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fedc4714f/src/api/entities/Entity.ts#L14)

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

[BaseAsset](../Base/BaseAsset/BaseAsset.md).[unserialize](../Base/BaseAsset/BaseAsset.md#unserialize)

#### Defined in

[api/entities/Entity.ts:23](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fedc4714f/src/api/entities/Entity.ts#L23)
