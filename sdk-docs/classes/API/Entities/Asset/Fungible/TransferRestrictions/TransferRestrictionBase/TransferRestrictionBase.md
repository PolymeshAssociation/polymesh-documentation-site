---
id: "TransferRestrictionBase"
title: "Class: TransferRestrictionBase<T>"
sidebar_label: "TransferRestrictionBase"
---

[api/entities/Asset/Fungible/TransferRestrictions/TransferRestrictionBase](../../../../../../../modules/API/Entities/Asset/Fungible/TransferRestrictions/TransferRestrictionBase/TransferRestrictionBase.md).TransferRestrictionBase

Base class for managing Transfer Restrictions

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`TransferRestrictionType`](../../../../../../../enums/API/Procedures/Types/TransferRestrictionType/TransferRestrictionType.md) |

## Hierarchy

- `Namespace`\<[`FungibleAsset`](../../FungibleAsset.md)\>

  ↳ **`TransferRestrictionBase`**

  ↳↳ [`ClaimCount`](../ClaimCount/ClaimCount.md)

  ↳↳ [`ClaimPercentage`](../ClaimPercentage/ClaimPercentage.md)

  ↳↳ [`Count`](../Count/Count.md)

  ↳↳ [`Percentage`](../Percentage/Percentage.md)

## Methods

### addRestriction

▸ **addRestriction**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<`BigNumber`, `BigNumber`\>\>

Add a Transfer Restriction of the corresponding type to this Asset

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`AddRestrictionParams`](../../../../../../../modules/API/Procedures/Types/Types.md#addrestrictionparams)\<`T`\> |
| `opts?` | [`ProcedureOpts`](../../../../../../../interfaces/API/Procedures/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<`BigNumber`, `BigNumber`\>\>

**`Note`**

the result is the total amount of restrictions after the procedure has run

**`Note`**

this method is of type [ProcedureMethod](../../../../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [addRestriction.checkAuthorization](../../../../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/entities/Asset/Fungible/TransferRestrictions/TransferRestrictionBase.ts:178](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c53723bab/src/api/entities/Asset/Fungible/TransferRestrictions/TransferRestrictionBase.ts#L178)

___

### disableStat

▸ **disableStat**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

Removes an Asset statistic

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`RemoveAssetStatParamsBase`](../../../../../../../modules/API/Entities/Asset/Fungible/TransferRestrictions/TransferRestrictionBase/TransferRestrictionBase.md#removeassetstatparamsbase)\<`T`\> |
| `opts?` | [`ProcedureOpts`](../../../../../../../interfaces/API/Procedures/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

**`Throws`**

if the statistic is being used or is not set

**`Note`**

this method is of type [ProcedureMethod](../../../../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [disableStat.checkAuthorization](../../../../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/entities/Asset/Fungible/TransferRestrictions/TransferRestrictionBase.ts:224](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c53723bab/src/api/entities/Asset/Fungible/TransferRestrictions/TransferRestrictionBase.ts#L224)

___

### enableStat

▸ **enableStat**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

Enables statistic of the corresponding type for this Asset, which are required for restrictions to be created

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`SetAssetStatParams`](../../../../../../../modules/API/Procedures/Types/Types.md#setassetstatparams)\<`T`\> |
| `opts?` | [`ProcedureOpts`](../../../../../../../interfaces/API/Procedures/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

**`Note`**

this method is of type [ProcedureMethod](../../../../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [enableStat.checkAuthorization](../../../../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/entities/Asset/Fungible/TransferRestrictions/TransferRestrictionBase.ts:212](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c53723bab/src/api/entities/Asset/Fungible/TransferRestrictions/TransferRestrictionBase.ts#L212)

___

### get

▸ **get**(): `Promise`\<[`GetTransferRestrictionReturnType`](../../../../../../../modules/API/Procedures/Types/Types.md#gettransferrestrictionreturntype)\<`T`\>\>

Retrieve all active Transfer Restrictions of the corresponding type

#### Returns

`Promise`\<[`GetTransferRestrictionReturnType`](../../../../../../../modules/API/Procedures/Types/Types.md#gettransferrestrictionreturntype)\<`T`\>\>

**`Note`**

there is a maximum number of restrictions allowed across all types.
  The `availableSlots` property of the result represents how many more restrictions can be added
  before reaching that limit

#### Defined in

[api/entities/Asset/Fungible/TransferRestrictions/TransferRestrictionBase.ts:235](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c53723bab/src/api/entities/Asset/Fungible/TransferRestrictions/TransferRestrictionBase.ts#L235)

___

### getStat

▸ **getStat**(): `Promise`\<[`ActiveStats`](../../../../../../../modules/API/Entities/Types/Types.md#activestats)\>

Retrieve all active Transfer Restrictions of the corresponding type

#### Returns

`Promise`\<[`ActiveStats`](../../../../../../../modules/API/Entities/Types/Types.md#activestats)\>

**`Note`**

there is a maximum number of restrictions allowed across all types.
  The `availableSlots` property of the result represents how many more restrictions can be added
  before reaching that limit

#### Defined in

[api/entities/Asset/Fungible/TransferRestrictions/TransferRestrictionBase.ts:357](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c53723bab/src/api/entities/Asset/Fungible/TransferRestrictions/TransferRestrictionBase.ts#L357)

___

### removeRestrictions

▸ **removeRestrictions**(`opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<`BigNumber`, `BigNumber`\>\>

Removes all Transfer Restrictions of the corresponding type from this Asset

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`ProcedureOpts`](../../../../../../../interfaces/API/Procedures/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<`BigNumber`, `BigNumber`\>\>

**`Note`**

the result is the total amount of restrictions after the procedure has run

**`Note`**

this method is of type [NoArgsProcedureMethod](../../../../../../../interfaces/API/Procedures/Types/NoArgsProcedureMethod/NoArgsProcedureMethod.md), which means you can call [removeRestrictions.checkAuthorization](../../../../../../../interfaces/API/Procedures/Types/NoArgsProcedureMethod/NoArgsProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/entities/Asset/Fungible/TransferRestrictions/TransferRestrictionBase.ts:202](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c53723bab/src/api/entities/Asset/Fungible/TransferRestrictions/TransferRestrictionBase.ts#L202)

___

### setRestrictions

▸ **setRestrictions**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<`BigNumber`, `BigNumber`\>\>

Sets all Transfer Restrictions of the corresponding type on this Asset

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`SetRestrictionsParams`](../../../../../../../modules/API/Procedures/Types/Types.md#setrestrictionsparams)\<`T`\> |
| `opts?` | [`ProcedureOpts`](../../../../../../../interfaces/API/Procedures/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<`BigNumber`, `BigNumber`\>\>

**`Note`**

the result is the total amount of restrictions after the procedure has run

**`Note`**

this method is of type [ProcedureMethod](../../../../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [setRestrictions.checkAuthorization](../../../../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/entities/Asset/Fungible/TransferRestrictions/TransferRestrictionBase.ts:190](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c53723bab/src/api/entities/Asset/Fungible/TransferRestrictions/TransferRestrictionBase.ts#L190)
