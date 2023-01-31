---
id: "Requirements"
title: "Class: Requirements"
sidebar_label: "Requirements"
---

# Class: Requirements

[api/entities/Asset/Compliance/Requirements](../../../../../../modules/API/Entities/Asset/Compliance/Requirements/Requirements.md).Requirements

Handles all Asset Compliance Requirements related functionality

## Hierarchy

- `Namespace`<[`Asset`](../../Asset.md)\>

  ↳ **`Requirements`**

## Methods

### add

▸ **add**(`args`, `opts?`): `Promise`<[`GenericPolymeshTransaction`](../../../../../../modules/Types/Types.md#genericpolymeshtransaction)<[`Asset`](../../Asset.md), [`Asset`](../../Asset.md)\>\>

Add a new compliance requirement to the the Asset. This doesn't modify existing requirements

**`Note`**

this method is of type [ProcedureMethod](../../../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [add.checkAuthorization](../../../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`AddAssetRequirementParams`](../../../../../../interfaces/API/Procedures/Types/AddAssetRequirementParams/AddAssetRequirementParams.md) |
| `opts?` | [`ProcedureOpts`](../../../../../../interfaces/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`<[`GenericPolymeshTransaction`](../../../../../../modules/Types/Types.md#genericpolymeshtransaction)<[`Asset`](../../Asset.md), [`Asset`](../../Asset.md)\>\>

___

### arePaused

▸ **arePaused**(): `Promise`<`boolean`\>

Check whether Asset compliance requirements are paused or not

#### Returns

`Promise`<`boolean`\>

___

### get

▸ **get**(): `Promise`<[`ComplianceRequirements`](../../../../../../interfaces/Types/ComplianceRequirements/ComplianceRequirements.md)\>

Retrieve all of the Asset's compliance requirements, together with the Default Trusted Claim Issuers

**`Note`**

can be subscribed to

#### Returns

`Promise`<[`ComplianceRequirements`](../../../../../../interfaces/Types/ComplianceRequirements/ComplianceRequirements.md)\>

▸ **get**(`callback`): `Promise`<[`UnsubCallback`](../../../../../../modules/Types/Types.md#unsubcallback)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`SubCallback`](../../../../../../modules/Types/Types.md#subcallback)<[`ComplianceRequirements`](../../../../../../interfaces/Types/ComplianceRequirements/ComplianceRequirements.md)\> |

#### Returns

`Promise`<[`UnsubCallback`](../../../../../../modules/Types/Types.md#unsubcallback)\>

___

### modify

▸ **modify**(`args`, `opts?`): `Promise`<[`GenericPolymeshTransaction`](../../../../../../modules/Types/Types.md#genericpolymeshtransaction)<`void`, `void`\>\>

Modify a compliance requirement for the Asset

**`Note`**

this method is of type [ProcedureMethod](../../../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [modify.checkAuthorization](../../../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`ModifyComplianceRequirementParams`](../../../../../../modules/API/Procedures/Types/Types.md#modifycompliancerequirementparams) |
| `opts?` | [`ProcedureOpts`](../../../../../../interfaces/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`<[`GenericPolymeshTransaction`](../../../../../../modules/Types/Types.md#genericpolymeshtransaction)<`void`, `void`\>\>

___

### pause

▸ **pause**(`opts?`): `Promise`<[`GenericPolymeshTransaction`](../../../../../../modules/Types/Types.md#genericpolymeshtransaction)<[`Asset`](../../Asset.md), [`Asset`](../../Asset.md)\>\>

Pause all the Asset's requirements. This means that all transfers will be allowed until requirements are unpaused

**`Note`**

this method is of type [NoArgsProcedureMethod](../../../../../../interfaces/Types/NoArgsProcedureMethod/NoArgsProcedureMethod.md), which means you can call [pause.checkAuthorization](../../../../../../interfaces/Types/NoArgsProcedureMethod/NoArgsProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`ProcedureOpts`](../../../../../../interfaces/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`<[`GenericPolymeshTransaction`](../../../../../../modules/Types/Types.md#genericpolymeshtransaction)<[`Asset`](../../Asset.md), [`Asset`](../../Asset.md)\>\>

___

### remove

▸ **remove**(`args`, `opts?`): `Promise`<[`GenericPolymeshTransaction`](../../../../../../modules/Types/Types.md#genericpolymeshtransaction)<[`Asset`](../../Asset.md), [`Asset`](../../Asset.md)\>\>

Remove an existing compliance requirement from the Asset

**`Note`**

this method is of type [ProcedureMethod](../../../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [remove.checkAuthorization](../../../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`RemoveAssetRequirementParams`](../../../../../../interfaces/API/Procedures/Types/RemoveAssetRequirementParams/RemoveAssetRequirementParams.md) |
| `opts?` | [`ProcedureOpts`](../../../../../../interfaces/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`<[`GenericPolymeshTransaction`](../../../../../../modules/Types/Types.md#genericpolymeshtransaction)<[`Asset`](../../Asset.md), [`Asset`](../../Asset.md)\>\>

___

### reset

▸ **reset**(`opts?`): `Promise`<[`GenericPolymeshTransaction`](../../../../../../modules/Types/Types.md#genericpolymeshtransaction)<[`Asset`](../../Asset.md), [`Asset`](../../Asset.md)\>\>

Delete all the current requirements for the Asset.

**`Note`**

this method is of type [NoArgsProcedureMethod](../../../../../../interfaces/Types/NoArgsProcedureMethod/NoArgsProcedureMethod.md), which means you can call [reset.checkAuthorization](../../../../../../interfaces/Types/NoArgsProcedureMethod/NoArgsProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`ProcedureOpts`](../../../../../../interfaces/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`<[`GenericPolymeshTransaction`](../../../../../../modules/Types/Types.md#genericpolymeshtransaction)<[`Asset`](../../Asset.md), [`Asset`](../../Asset.md)\>\>

___

### set

▸ **set**(`args`, `opts?`): `Promise`<[`GenericPolymeshTransaction`](../../../../../../modules/Types/Types.md#genericpolymeshtransaction)<[`Asset`](../../Asset.md), [`Asset`](../../Asset.md)\>\>

Configure compliance requirements for the Asset. This operation will replace all existing requirements with a new requirement set

**`Example`**

Say A, B, C, D and E are requirements and we arrange them as `[[A, B], [C, D], [E]]`.
For a transfer to succeed, it must either comply with A AND B, C AND D, OR E.

**`Note`**

this method is of type [ProcedureMethod](../../../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [set.checkAuthorization](../../../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`SetAssetRequirementsParams`](../../../../../../interfaces/API/Procedures/Types/SetAssetRequirementsParams/SetAssetRequirementsParams.md) |
| `opts?` | [`ProcedureOpts`](../../../../../../interfaces/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`<[`GenericPolymeshTransaction`](../../../../../../modules/Types/Types.md#genericpolymeshtransaction)<[`Asset`](../../Asset.md), [`Asset`](../../Asset.md)\>\>

___

### unpause

▸ **unpause**(`opts?`): `Promise`<[`GenericPolymeshTransaction`](../../../../../../modules/Types/Types.md#genericpolymeshtransaction)<[`Asset`](../../Asset.md), [`Asset`](../../Asset.md)\>\>

Un-pause all the Asset's current requirements

**`Note`**

this method is of type [NoArgsProcedureMethod](../../../../../../interfaces/Types/NoArgsProcedureMethod/NoArgsProcedureMethod.md), which means you can call [unpause.checkAuthorization](../../../../../../interfaces/Types/NoArgsProcedureMethod/NoArgsProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`ProcedureOpts`](../../../../../../interfaces/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`<[`GenericPolymeshTransaction`](../../../../../../modules/Types/Types.md#genericpolymeshtransaction)<[`Asset`](../../Asset.md), [`Asset`](../../Asset.md)\>\>
