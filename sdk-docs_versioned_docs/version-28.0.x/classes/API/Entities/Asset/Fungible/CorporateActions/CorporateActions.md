---
id: "CorporateActions"
title: "Class: CorporateActions"
sidebar_label: "CorporateActions"
---

[api/entities/Asset/Fungible/CorporateActions](../../../../../../modules/API/Entities/Asset/Fungible/CorporateActions/CorporateActions.md).CorporateActions

Handles all Asset Corporate Actions related functionality

## Hierarchy

- `Namespace`\<[`FungibleAsset`](../FungibleAsset.md)\>

  ↳ **`CorporateActions`**

## Properties

### ballots

• **ballots**: [`Ballots`](Ballots/Ballots.md)

#### Defined in

[api/entities/Asset/Fungible/CorporateActions/index.ts:35](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/Asset/Fungible/CorporateActions/index.ts#L35)

___

### distributions

• **distributions**: [`Distributions`](Distributions/Distributions.md)

#### Defined in

[api/entities/Asset/Fungible/CorporateActions/index.ts:34](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/Asset/Fungible/CorporateActions/index.ts#L34)

___

### initiate

• **initiate**: [`ProcedureMethod`](../../../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md)\<[`InitiateCorporateActionParams`](../../../../../../modules/API/Procedures/Types/Types.md#initiatecorporateactionparams), [`CorporateAction`](../../../CorporateAction/CorporateAction.md), [`CorporateAction`](../../../CorporateAction/CorporateAction.md)\>

#### Defined in

[api/entities/Asset/Fungible/CorporateActions/index.ts:160](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/Asset/Fungible/CorporateActions/index.ts#L160)

## Methods

### getAgents

▸ **getAgents**(): `Promise`\<[`Identity`](../../../Identity/Identity.md)[]\>

Retrieve a list of agent Identities

#### Returns

`Promise`\<[`Identity`](../../../Identity/Identity.md)[]\>

#### Defined in

[api/entities/Asset/Fungible/CorporateActions/index.ts:89](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/Asset/Fungible/CorporateActions/index.ts#L89)

___

### getDefaultConfig

▸ **getDefaultConfig**(): `Promise`\<[`CorporateActionDefaultConfig`](../../../../../../interfaces/API/Entities/Asset/Fungible/CorporateActions/Types/CorporateActionDefaultConfig/CorporateActionDefaultConfig.md)\>

Retrieve default config comprising of targets, global tax withholding percentage and per-Identity tax withholding percentages.

#### Returns

`Promise`\<[`CorporateActionDefaultConfig`](../../../../../../interfaces/API/Entities/Asset/Fungible/CorporateActions/Types/CorporateActionDefaultConfig/CorporateActionDefaultConfig.md)\>

**`Note`**

This config is applied to every Corporate Action that is created until they are modified. Modifying the default config
  does not impact existing Corporate Actions.
  When creating a Corporate Action, values passed explicitly will override this default config

#### Defined in

[api/entities/Asset/Fungible/CorporateActions/index.ts:125](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/Asset/Fungible/CorporateActions/index.ts#L125)

___

### remove

▸ **remove**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

Remove a Corporate Action

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`RemoveCorporateActionParams`](../../../../../../interfaces/API/Procedures/Types/RemoveCorporateActionParams/RemoveCorporateActionParams.md) |
| `opts?` | [`ProcedureOpts`](../../../../../../interfaces/API/Procedures/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

**`Note`**

this method is of type [ProcedureMethod](../../../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [remove.checkAuthorization](../../../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/entities/Asset/Fungible/CorporateActions/index.ts:82](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/Asset/Fungible/CorporateActions/index.ts#L82)

___

### setDefaultConfig

▸ **setDefaultConfig**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

Assign default config values(targets, global tax withholding percentage and per-Identity tax withholding percentages)

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`ModifyCaDefaultConfigParams`](../../../../../../modules/API/Procedures/Types/Types.md#modifycadefaultconfigparams) |
| `opts?` | [`ProcedureOpts`](../../../../../../interfaces/API/Procedures/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

**`Note`**

These config values are applied to every Corporate Action that is created until they are modified. Modifying these values
  does not impact existing Corporate Actions.
  When creating a Corporate Action, values passed explicitly will override these default config values

**`Note`**

this method is of type [ProcedureMethod](../../../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [setDefaultConfig.checkAuthorization](../../../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/entities/Asset/Fungible/CorporateActions/index.ts:72](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/Asset/Fungible/CorporateActions/index.ts#L72)
