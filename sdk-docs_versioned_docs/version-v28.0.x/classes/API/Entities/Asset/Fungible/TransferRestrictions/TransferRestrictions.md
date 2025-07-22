---
id: "TransferRestrictions"
title: "Class: TransferRestrictions"
sidebar_label: "TransferRestrictions"
---

[api/entities/Asset/Fungible/TransferRestrictions](../../../../../../modules/API/Entities/Asset/Fungible/TransferRestrictions/TransferRestrictions.md).TransferRestrictions

Handles all Transfer Restriction related functionality.

## Hierarchy

- `Namespace`\<[`FungibleAsset`](../FungibleAsset.md)\>

  ↳ **`TransferRestrictions`**

## Methods

### addExemptions

▸ **addExemptions**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

Exempt identities from Transfer Restrictions. These identities will not be subject to Transfer Restriction rules.

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`TransferRestrictionExemptionParams`](../../../../../../modules/API/Procedures/Types/Types.md#transferrestrictionexemptionparams) |
| `opts?` | [`ProcedureOpts`](../../../../../../interfaces/API/Procedures/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

**`Note`**

this method is of type [ProcedureMethod](../../../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [addExemptions.checkAuthorization](../../../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/entities/Asset/Fungible/TransferRestrictions/index.ts:446](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/Asset/Fungible/TransferRestrictions/index.ts#L446)

___

### getExemptions

▸ **getExemptions**(): `Promise`\<[`TransferRestrictionExemption`](../../../../../../interfaces/API/Entities/Asset/Types/TransferRestrictionExemption/TransferRestrictionExemption.md)[]\>

Return identities with exemptions.

#### Returns

`Promise`\<[`TransferRestrictionExemption`](../../../../../../interfaces/API/Entities/Asset/Types/TransferRestrictionExemption/TransferRestrictionExemption.md)[]\>

#### Defined in

[api/entities/Asset/Fungible/TransferRestrictions/index.ts:376](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/Asset/Fungible/TransferRestrictions/index.ts#L376)

___

### getRestrictions

▸ **getRestrictions**(): `Promise`\<[`ActiveTransferRestrictions`](../../../../../../interfaces/API/Entities/Asset/Types/ActiveTransferRestrictions/ActiveTransferRestrictions.md)\>

Get all current restrictions for this asset.

#### Returns

`Promise`\<[`ActiveTransferRestrictions`](../../../../../../interfaces/API/Entities/Asset/Types/ActiveTransferRestrictions/ActiveTransferRestrictions.md)\>

#### Defined in

[api/entities/Asset/Fungible/TransferRestrictions/index.ts:129](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/Asset/Fungible/TransferRestrictions/index.ts#L129)

___

### getStats

▸ **getStats**(): `Promise`\<[`AssetStat`](../../../../../../interfaces/API/Entities/Asset/Types/AssetStat/AssetStat.md)[]\>

Return active asset stats.

#### Returns

`Promise`\<[`AssetStat`](../../../../../../interfaces/API/Entities/Asset/Types/AssetStat/AssetStat.md)[]\>

#### Defined in

[api/entities/Asset/Fungible/TransferRestrictions/index.ts:149](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/Asset/Fungible/TransferRestrictions/index.ts#L149)

___

### getValues

▸ **getValues**(): `Promise`\<[`TransferRestrictionStatValues`](../../../../../../interfaces/API/Entities/Asset/Types/TransferRestrictionStatValues/TransferRestrictionStatValues.md)[]\>

Get the values of all active transfer restrictions for this Asset.

#### Returns

`Promise`\<[`TransferRestrictionStatValues`](../../../../../../interfaces/API/Entities/Asset/Types/TransferRestrictionStatValues/TransferRestrictionStatValues.md)[]\>

an array of objects containing the values of all active transfer restrictions for this Asset.

#### Defined in

[api/entities/Asset/Fungible/TransferRestrictions/index.ts:172](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/Asset/Fungible/TransferRestrictions/index.ts#L172)

___

### removeExemptions

▸ **removeExemptions**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

Remove identities from Transfer Restriction exemptions.

The given identities will no longer be exempt from Transfer Restrictions.

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`TransferRestrictionExemptionParams`](../../../../../../modules/API/Procedures/Types/Types.md#transferrestrictionexemptionparams) |
| `opts?` | [`ProcedureOpts`](../../../../../../interfaces/API/Procedures/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

**`Note`**

this method is of type [ProcedureMethod](../../../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [removeExemptions.checkAuthorization](../../../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/entities/Asset/Fungible/TransferRestrictions/index.ts:458](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/Asset/Fungible/TransferRestrictions/index.ts#L458)

___

### setRestrictions

▸ **setRestrictions**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

Set all Transfer Restrictions on this Asset.

Transfer Restrictions control ownership requirements based on investor statistics.
For example, TransferRestrictionType.Count can limit the number of investors.
TransferRestrictionType.Percentage can limit the maximum percentage an individual investor may hold.

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`TransferRestrictionParams`](../../../../../../modules/API/Procedures/Types/Types.md#transferrestrictionparams) |
| `opts?` | [`ProcedureOpts`](../../../../../../interfaces/API/Procedures/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

**`Note`**

The relevant stat must be enabled by including it in setStats before the restriction can be created.

**`Note`**

this method is of type [ProcedureMethod](../../../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [setRestrictions.checkAuthorization](../../../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/entities/Asset/Fungible/TransferRestrictions/index.ts:416](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/Asset/Fungible/TransferRestrictions/index.ts#L416)

___

### setStats

▸ **setStats**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

Set the enabled statistics for an Asset.

Transfer Restrictions require the relevant stat to be enabled before they can be set.
Calling this method will override the currently enabled stats with the provided set,
which means it can also be used to remove previously enabled stats.

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`SetTransferRestrictionStatParams`](../../../../../../modules/API/Procedures/Types/Types.md#settransferrestrictionstatparams) |
| `opts?` | [`ProcedureOpts`](../../../../../../interfaces/API/Procedures/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

**`Note`**

If you attempt to remove a stat that is currently required by an active transfer restriction,
the chain will throw an error.

**`Note`**

Count-based stats must be given an initial value. The counter is only updated automatically with each transfer of tokens after the stat has been enabled.
As such, the initial value for the stat should be passed in, which can be fetched with [FungibleAsset.investorCount](../FungibleAsset.md#investorcount).

**`Note`**

this method is of type [ProcedureMethod](../../../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [setStats.checkAuthorization](../../../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/entities/Asset/Fungible/TransferRestrictions/index.ts:436](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/Asset/Fungible/TransferRestrictions/index.ts#L436)
