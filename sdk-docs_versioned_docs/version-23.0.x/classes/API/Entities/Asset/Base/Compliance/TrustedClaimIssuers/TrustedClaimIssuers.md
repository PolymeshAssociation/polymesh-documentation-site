---
id: "TrustedClaimIssuers"
title: "Class: TrustedClaimIssuers"
sidebar_label: "TrustedClaimIssuers"
---

[api/entities/Asset/Base/Compliance/TrustedClaimIssuers](../../../../../../../modules/API/Entities/Asset/Base/Compliance/TrustedClaimIssuers/TrustedClaimIssuers.md).TrustedClaimIssuers

Handles all Asset Default Trusted Claim Issuers related functionality

## Hierarchy

- `Namespace`<[`BaseAsset`](../../BaseAsset/BaseAsset.md)\>

  ↳ **`TrustedClaimIssuers`**

## Methods

### add

▸ **add**(`args`, `opts?`): `Promise`<[`GenericPolymeshTransaction`](../../../../../../../modules/Types/Types.md#genericpolymeshtransaction)<`void`, `void`\>\>

Add the supplied Identities to the Asset's list of trusted claim issuers

**`Note`**

 this method is of type [ProcedureMethod](../../../../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [add.checkAuthorization](../../../../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`ModifyAssetTrustedClaimIssuersAddSetParams`](../../../../../../../interfaces/API/Procedures/Types/ModifyAssetTrustedClaimIssuersAddSetParams/ModifyAssetTrustedClaimIssuersAddSetParams.md) |
| `opts?` | [`ProcedureOpts`](../../../../../../../interfaces/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`<[`GenericPolymeshTransaction`](../../../../../../../modules/Types/Types.md#genericpolymeshtransaction)<`void`, `void`\>\>

___

### get

▸ **get**(): `Promise`<[`TrustedClaimIssuer`](../../../../../../../interfaces/Types/TrustedClaimIssuer/TrustedClaimIssuer.md)<``true``\>[]\>

Retrieve the current Default Trusted Claim Issuers of the Asset

**`Note`**

 can be subscribed to

#### Returns

`Promise`<[`TrustedClaimIssuer`](../../../../../../../interfaces/Types/TrustedClaimIssuer/TrustedClaimIssuer.md)<``true``\>[]\>

▸ **get**(`callback`): `Promise`<[`UnsubCallback`](../../../../../../../modules/Types/Types.md#unsubcallback)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`SubCallback`](../../../../../../../modules/Types/Types.md#subcallback)<[`TrustedClaimIssuer`](../../../../../../../interfaces/Types/TrustedClaimIssuer/TrustedClaimIssuer.md)<``true``\>[]\> |

#### Returns

`Promise`<[`UnsubCallback`](../../../../../../../modules/Types/Types.md#unsubcallback)\>

___

### remove

▸ **remove**(`args`, `opts?`): `Promise`<[`GenericPolymeshTransaction`](../../../../../../../modules/Types/Types.md#genericpolymeshtransaction)<`void`, `void`\>\>

Remove the supplied Identities from the Asset's list of trusted claim issuers   *

**`Note`**

 this method is of type [ProcedureMethod](../../../../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [remove.checkAuthorization](../../../../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`ModifyAssetTrustedClaimIssuersRemoveParams`](../../../../../../../interfaces/API/Procedures/Types/ModifyAssetTrustedClaimIssuersRemoveParams/ModifyAssetTrustedClaimIssuersRemoveParams.md) |
| `opts?` | [`ProcedureOpts`](../../../../../../../interfaces/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`<[`GenericPolymeshTransaction`](../../../../../../../modules/Types/Types.md#genericpolymeshtransaction)<`void`, `void`\>\>

___

### set

▸ **set**(`args`, `opts?`): `Promise`<[`GenericPolymeshTransaction`](../../../../../../../modules/Types/Types.md#genericpolymeshtransaction)<`void`, `void`\>\>

Assign a new default list of trusted claim issuers to the Asset by replacing the existing ones with the list passed as a parameter

This requires two transactions

**`Note`**

 this method is of type [ProcedureMethod](../../../../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [set.checkAuthorization](../../../../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`ModifyAssetTrustedClaimIssuersAddSetParams`](../../../../../../../interfaces/API/Procedures/Types/ModifyAssetTrustedClaimIssuersAddSetParams/ModifyAssetTrustedClaimIssuersAddSetParams.md) |
| `opts?` | [`ProcedureOpts`](../../../../../../../interfaces/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`<[`GenericPolymeshTransaction`](../../../../../../../modules/Types/Types.md#genericpolymeshtransaction)<`void`, `void`\>\>
