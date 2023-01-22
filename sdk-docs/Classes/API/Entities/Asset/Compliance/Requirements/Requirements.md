[api/entities/Asset/Compliance/Requirements](../../../../../../Modules/API/Entities/Asset/Compliance/Requirements.md).Requirements

Handles all Asset Compliance Requirements related functionality

## Hierarchy

- `Namespace`<[`Asset`](../../Asset.md)\>

  ↳ **`Requirements`**

## Methods

### add

▸ **add**(`args`, `opts?`): `Promise`<[`GenericPolymeshTransaction`](../../../../../../Modules/Types/Types.md#genericpolymeshtransaction)<[`Asset`](../../Asset.md), [`Asset`](../../Asset.md)\>\>

Add a new compliance requirement to the the Asset. This doesn't modify existing requirements

**`Note`**

this method is of type [ProcedureMethod](../../../../../../Interfaces/Types/ProcedureMethod.md), which means you can call [add.checkAuthorization](../../../../../../Interfaces/Types/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`AddAssetRequirementParams`](../../../../../../Interfaces/API/Procedures/Types/AddAssetRequirementParams.md) |
| `opts?` | [`ProcedureOpts`](../../../../../../Interfaces/Types/ProcedureOpts.md) |

#### Returns

`Promise`<[`GenericPolymeshTransaction`](../../../../../../Modules/Types/Types.md#genericpolymeshtransaction)<[`Asset`](../../Asset.md), [`Asset`](../../Asset.md)\>\>

___

### arePaused

▸ **arePaused**(): `Promise`<`boolean`\>

Check whether Asset compliance requirements are paused or not

#### Returns

`Promise`<`boolean`\>

___

### get

▸ **get**(): `Promise`<[`ComplianceRequirements`](../../../../../../Interfaces/Types/ComplianceRequirements.md)\>

Retrieve all of the Asset's compliance requirements, together with the Default Trusted Claim Issuers

**`Note`**

can be subscribed to

#### Returns

`Promise`<[`ComplianceRequirements`](../../../../../../Interfaces/Types/ComplianceRequirements.md)\>

▸ **get**(`callback`): `Promise`<[`UnsubCallback`](../../../../../../Modules/Types/Types.md#unsubcallback)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`SubCallback`](../../../../../../Modules/Types/Types.md#subcallback)<[`ComplianceRequirements`](../../../../../../Interfaces/Types/ComplianceRequirements.md)\> |

#### Returns

`Promise`<[`UnsubCallback`](../../../../../../Modules/Types/Types.md#unsubcallback)\>

___

### modify

▸ **modify**(`args`, `opts?`): `Promise`<[`GenericPolymeshTransaction`](../../../../../../Modules/Types/Types.md#genericpolymeshtransaction)<`void`, `void`\>\>

Modify a compliance requirement for the Asset

**`Note`**

this method is of type [ProcedureMethod](../../../../../../Interfaces/Types/ProcedureMethod.md), which means you can call [modify.checkAuthorization](../../../../../../Interfaces/Types/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`ModifyComplianceRequirementParams`](../../../../../../Modules/API/Procedures/Types.md#modifycompliancerequirementparams) |
| `opts?` | [`ProcedureOpts`](../../../../../../Interfaces/Types/ProcedureOpts.md) |

#### Returns

`Promise`<[`GenericPolymeshTransaction`](../../../../../../Modules/Types/Types.md#genericpolymeshtransaction)<`void`, `void`\>\>

___

### pause

▸ **pause**(`opts?`): `Promise`<[`GenericPolymeshTransaction`](../../../../../../Modules/Types/Types.md#genericpolymeshtransaction)<[`Asset`](../../Asset.md), [`Asset`](../../Asset.md)\>\>

Pause all the Asset's requirements. This means that all transfers will be allowed until requirements are unpaused

**`Note`**

this method is of type [NoArgsProcedureMethod](../../../../../../Interfaces/Types/NoArgsProcedureMethod.md), which means you can call [pause.checkAuthorization](../../../../../../Interfaces/Types/NoArgsProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`ProcedureOpts`](../../../../../../Interfaces/Types/ProcedureOpts.md) |

#### Returns

`Promise`<[`GenericPolymeshTransaction`](../../../../../../Modules/Types/Types.md#genericpolymeshtransaction)<[`Asset`](../../Asset.md), [`Asset`](../../Asset.md)\>\>

___

### remove

▸ **remove**(`args`, `opts?`): `Promise`<[`GenericPolymeshTransaction`](../../../../../../Modules/Types/Types.md#genericpolymeshtransaction)<[`Asset`](../../Asset.md), [`Asset`](../../Asset.md)\>\>

Remove an existing compliance requirement from the Asset

**`Note`**

this method is of type [ProcedureMethod](../../../../../../Interfaces/Types/ProcedureMethod.md), which means you can call [remove.checkAuthorization](../../../../../../Interfaces/Types/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`RemoveAssetRequirementParams`](../../../../../../Interfaces/API/Procedures/Types/RemoveAssetRequirementParams.md) |
| `opts?` | [`ProcedureOpts`](../../../../../../Interfaces/Types/ProcedureOpts.md) |

#### Returns

`Promise`<[`GenericPolymeshTransaction`](../../../../../../Modules/Types/Types.md#genericpolymeshtransaction)<[`Asset`](../../Asset.md), [`Asset`](../../Asset.md)\>\>

___

### reset

▸ **reset**(`opts?`): `Promise`<[`GenericPolymeshTransaction`](../../../../../../Modules/Types/Types.md#genericpolymeshtransaction)<[`Asset`](../../Asset.md), [`Asset`](../../Asset.md)\>\>

Delete all the current requirements for the Asset.

**`Note`**

this method is of type [NoArgsProcedureMethod](../../../../../../Interfaces/Types/NoArgsProcedureMethod.md), which means you can call [reset.checkAuthorization](../../../../../../Interfaces/Types/NoArgsProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`ProcedureOpts`](../../../../../../Interfaces/Types/ProcedureOpts.md) |

#### Returns

`Promise`<[`GenericPolymeshTransaction`](../../../../../../Modules/Types/Types.md#genericpolymeshtransaction)<[`Asset`](../../Asset.md), [`Asset`](../../Asset.md)\>\>

___

### set

▸ **set**(`args`, `opts?`): `Promise`<[`GenericPolymeshTransaction`](../../../../../../Modules/Types/Types.md#genericpolymeshtransaction)<[`Asset`](../../Asset.md), [`Asset`](../../Asset.md)\>\>

Configure compliance requirements for the Asset. This operation will replace all existing requirements with a new requirement set

**`Example`**

Say A, B, C, D and E are requirements and we arrange them as `[[A, B], [C, D], [E]]`.
For a transfer to succeed, it must either comply with A AND B, C AND D, OR E.

**`Note`**

this method is of type [ProcedureMethod](../../../../../../Interfaces/Types/ProcedureMethod.md), which means you can call [set.checkAuthorization](../../../../../../Interfaces/Types/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`SetAssetRequirementsParams`](../../../../../../Interfaces/API/Procedures/Types/SetAssetRequirementsParams.md) |
| `opts?` | [`ProcedureOpts`](../../../../../../Interfaces/Types/ProcedureOpts.md) |

#### Returns

`Promise`<[`GenericPolymeshTransaction`](../../../../../../Modules/Types/Types.md#genericpolymeshtransaction)<[`Asset`](../../Asset.md), [`Asset`](../../Asset.md)\>\>

___

### unpause

▸ **unpause**(`opts?`): `Promise`<[`GenericPolymeshTransaction`](../../../../../../Modules/Types/Types.md#genericpolymeshtransaction)<[`Asset`](../../Asset.md), [`Asset`](../../Asset.md)\>\>

Un-pause all the Asset's current requirements

**`Note`**

this method is of type [NoArgsProcedureMethod](../../../../../../Interfaces/Types/NoArgsProcedureMethod.md), which means you can call [unpause.checkAuthorization](../../../../../../Interfaces/Types/NoArgsProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`ProcedureOpts`](../../../../../../Interfaces/Types/ProcedureOpts.md) |

#### Returns

`Promise`<[`GenericPolymeshTransaction`](../../../../../../Modules/Types/Types.md#genericpolymeshtransaction)<[`Asset`](../../Asset.md), [`Asset`](../../Asset.md)\>\>
