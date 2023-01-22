[api/entities/Asset/TransferRestrictions/TransferRestrictionBase](../../../../../../Modules/API/Entities/Asset/TransferRestrictions/TransferRestrictionBase.md).TransferRestrictionBase

Base class for managing Transfer Restrictions

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`TransferRestrictionType`](../../../../../../Enums/Types/TransferRestrictionType.md) |

## Hierarchy

- `Namespace`<[`Asset`](../../Asset.md)\>

  ↳ **`TransferRestrictionBase`**

  ↳↳ [`ClaimCount`](../ClaimCount/ClaimCount.md)

  ↳↳ [`ClaimPercentage`](../ClaimPercentage/ClaimPercentage.md)

  ↳↳ [`Count`](../Count/Count.md)

  ↳↳ [`Percentage`](../Percentage/Percentage.md)

## Methods

### addRestriction

▸ **addRestriction**(`args`, `opts?`): `Promise`<[`GenericPolymeshTransaction`](../../../../../../Modules/Types/Types.md#genericpolymeshtransaction)<`BigNumber`, `BigNumber`\>\>

Add a Transfer Restriction of the corresponding type to this Asset

**`Note`**

the result is the total amount of restrictions after the procedure has run

**`Note`**

this method is of type [ProcedureMethod](../../../../../../Interfaces/Types/ProcedureMethod.md), which means you can call [addRestriction.checkAuthorization](../../../../../../Interfaces/Types/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`AddRestrictionParams`](../../../../../../Modules/API/Procedures/Types.md#addrestrictionparams)<`T`\> |
| `opts?` | [`ProcedureOpts`](../../../../../../Interfaces/Types/ProcedureOpts.md) |

#### Returns

`Promise`<[`GenericPolymeshTransaction`](../../../../../../Modules/Types/Types.md#genericpolymeshtransaction)<`BigNumber`, `BigNumber`\>\>

___

### disableStat

▸ **disableStat**(`args`, `opts?`): `Promise`<[`GenericPolymeshTransaction`](../../../../../../Modules/Types/Types.md#genericpolymeshtransaction)<`void`, `void`\>\>

Removes an Asset statistic

**`Throws`**

if the statistic is being used or is not set

**`Note`**

this method is of type [ProcedureMethod](../../../../../../Interfaces/Types/ProcedureMethod.md), which means you can call [disableStat.checkAuthorization](../../../../../../Interfaces/Types/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`RemoveAssetStatParamsBase`](../../../../../../Modules/API/Entities/Asset/TransferRestrictions/TransferRestrictionBase.md#removeassetstatparamsbase)<`T`\> |
| `opts?` | [`ProcedureOpts`](../../../../../../Interfaces/Types/ProcedureOpts.md) |

#### Returns

`Promise`<[`GenericPolymeshTransaction`](../../../../../../Modules/Types/Types.md#genericpolymeshtransaction)<`void`, `void`\>\>

___

### enableStat

▸ **enableStat**(`args`, `opts?`): `Promise`<[`GenericPolymeshTransaction`](../../../../../../Modules/Types/Types.md#genericpolymeshtransaction)<`void`, `void`\>\>

Enables statistic of the corresponding type for this Asset, which are required for restrictions to be created

**`Note`**

this method is of type [ProcedureMethod](../../../../../../Interfaces/Types/ProcedureMethod.md), which means you can call [enableStat.checkAuthorization](../../../../../../Interfaces/Types/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`SetAssetStatParams`](../../../../../../Modules/API/Procedures/Types.md#setassetstatparams)<`T`\> |
| `opts?` | [`ProcedureOpts`](../../../../../../Interfaces/Types/ProcedureOpts.md) |

#### Returns

`Promise`<[`GenericPolymeshTransaction`](../../../../../../Modules/Types/Types.md#genericpolymeshtransaction)<`void`, `void`\>\>

___

### get

▸ **get**(): `Promise`<[`GetTransferRestrictionReturnType`](../../../../../../Modules/API/Procedures/Types.md#gettransferrestrictionreturntype)<`T`\>\>

Retrieve all active Transfer Restrictions of the corresponding type

**`Note`**

there is a maximum number of restrictions allowed across all types.
  The `availableSlots` property of the result represents how many more restrictions can be added
  before reaching that limit

#### Returns

`Promise`<[`GetTransferRestrictionReturnType`](../../../../../../Modules/API/Procedures/Types.md#gettransferrestrictionreturntype)<`T`\>\>

___

### removeRestrictions

▸ **removeRestrictions**(`opts?`): `Promise`<[`GenericPolymeshTransaction`](../../../../../../Modules/Types/Types.md#genericpolymeshtransaction)<`BigNumber`, `BigNumber`\>\>

Removes all Transfer Restrictions of the corresponding type from this Asset

**`Note`**

the result is the total amount of restrictions after the procedure has run

**`Note`**

this method is of type [NoArgsProcedureMethod](../../../../../../Interfaces/Types/NoArgsProcedureMethod.md), which means you can call [removeRestrictions.checkAuthorization](../../../../../../Interfaces/Types/NoArgsProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`ProcedureOpts`](../../../../../../Interfaces/Types/ProcedureOpts.md) |

#### Returns

`Promise`<[`GenericPolymeshTransaction`](../../../../../../Modules/Types/Types.md#genericpolymeshtransaction)<`BigNumber`, `BigNumber`\>\>

___

### setRestrictions

▸ **setRestrictions**(`args`, `opts?`): `Promise`<[`GenericPolymeshTransaction`](../../../../../../Modules/Types/Types.md#genericpolymeshtransaction)<`BigNumber`, `BigNumber`\>\>

Sets all Transfer Restrictions of the corresponding type on this Asset

**`Note`**

the result is the total amount of restrictions after the procedure has run

**`Note`**

this method is of type [ProcedureMethod](../../../../../../Interfaces/Types/ProcedureMethod.md), which means you can call [setRestrictions.checkAuthorization](../../../../../../Interfaces/Types/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`SetRestrictionsParams`](../../../../../../Modules/API/Procedures/Types.md#setrestrictionsparams)<`T`\> |
| `opts?` | [`ProcedureOpts`](../../../../../../Interfaces/Types/ProcedureOpts.md) |

#### Returns

`Promise`<[`GenericPolymeshTransaction`](../../../../../../Modules/Types/Types.md#genericpolymeshtransaction)<`BigNumber`, `BigNumber`\>\>
