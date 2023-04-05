---
id: "CorporateActions"
title: "Class: CorporateActions"
sidebar_label: "CorporateActions"
---

[api/entities/Asset/CorporateActions](../../../../../modules/API/Entities/Asset/CorporateActions/CorporateActions.md).CorporateActions

Handles all Asset Corporate Actions related functionality

## Hierarchy

- `Namespace`<[`Asset`](../Asset.md)\>

  ↳ **`CorporateActions`**

## Properties

### distributions

• **distributions**: [`Distributions`](Distributions/Distributions.md)

#### Defined in

[api/entities/Asset/CorporateActions/index.ts:26](https://github.com/PolymeshAssociation/polymesh-sdk/blob/91c2d2d8/src/api/entities/Asset/CorporateActions/index.ts#L26)

## Methods

### getAgents

▸ **getAgents**(): `Promise`<[`Identity`](../../Identity/Identity.md)[]\>

Retrieve a list of agent Identities

#### Returns

`Promise`<[`Identity`](../../Identity/Identity.md)[]\>

___

### getDefaultConfig

▸ **getDefaultConfig**(): `Promise`<[`CorporateActionDefaultConfig`](../../../../../interfaces/API/Entities/Asset/CorporateActions/Types/CorporateActionDefaultConfig/CorporateActionDefaultConfig.md)\>

Retrieve default config comprising of targets, global tax withholding percentage and per-Identity tax withholding percentages.

**`Note`**

 This config is applied to every Corporate Action that is created until they are modified. Modifying the default config
  does not impact existing Corporate Actions.
  When creating a Corporate Action, values passed explicitly will override this default config

#### Returns

`Promise`<[`CorporateActionDefaultConfig`](../../../../../interfaces/API/Entities/Asset/CorporateActions/Types/CorporateActionDefaultConfig/CorporateActionDefaultConfig.md)\>

___

### remove

▸ **remove**(`args`, `opts?`): `Promise`<[`GenericPolymeshTransaction`](../../../../../modules/Types/Types.md#genericpolymeshtransaction)<`void`, `void`\>\>

Remove a Corporate Action

**`Note`**

 this method is of type [ProcedureMethod](../../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [remove.checkAuthorization](../../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`RemoveCorporateActionParams`](../../../../../interfaces/API/Procedures/Types/RemoveCorporateActionParams/RemoveCorporateActionParams.md) |
| `opts?` | [`ProcedureOpts`](../../../../../interfaces/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`<[`GenericPolymeshTransaction`](../../../../../modules/Types/Types.md#genericpolymeshtransaction)<`void`, `void`\>\>

___

### setDefaultConfig

▸ **setDefaultConfig**(`args`, `opts?`): `Promise`<[`GenericPolymeshTransaction`](../../../../../modules/Types/Types.md#genericpolymeshtransaction)<`void`, `void`\>\>

Assign default config values(targets, global tax withholding percentage and per-Identity tax withholding percentages)

**`Note`**

 These config values are applied to every Corporate Action that is created until they are modified. Modifying these values
  does not impact existing Corporate Actions.
  When creating a Corporate Action, values passed explicitly will override these default config values

**`Note`**

 this method is of type [ProcedureMethod](../../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [setDefaultConfig.checkAuthorization](../../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`ModifyCaDefaultConfigParams`](../../../../../modules/API/Procedures/Types/Types.md#modifycadefaultconfigparams) |
| `opts?` | [`ProcedureOpts`](../../../../../interfaces/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`<[`GenericPolymeshTransaction`](../../../../../modules/Types/Types.md#genericpolymeshtransaction)<`void`, `void`\>\>
