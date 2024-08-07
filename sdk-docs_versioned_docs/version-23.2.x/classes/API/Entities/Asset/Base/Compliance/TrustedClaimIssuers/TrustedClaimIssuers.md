---
id: "TrustedClaimIssuers"
title: "Class: TrustedClaimIssuers"
sidebar_label: "TrustedClaimIssuers"
---

[api/entities/Asset/Base/Compliance/TrustedClaimIssuers](../../../../../../../modules/API/Entities/Asset/Base/Compliance/TrustedClaimIssuers/TrustedClaimIssuers.md).TrustedClaimIssuers

Handles all Asset Default Trusted Claim Issuers related functionality

## Hierarchy

- `Namespace`\<[`BaseAsset`](../../BaseAsset/BaseAsset.md)\>

  ↳ **`TrustedClaimIssuers`**

## Methods

### add

▸ **add**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../../../../modules/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

Add the supplied Identities to the Asset's list of trusted claim issuers

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`ModifyAssetTrustedClaimIssuersAddSetParams`](../../../../../../../interfaces/API/Procedures/Types/ModifyAssetTrustedClaimIssuersAddSetParams/ModifyAssetTrustedClaimIssuersAddSetParams.md) |
| `opts?` | [`ProcedureOpts`](../../../../../../../interfaces/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../../../../modules/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

**`Note`**

this method is of type [ProcedureMethod](../../../../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [add.checkAuthorization](../../../../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/entities/Asset/Base/Compliance/TrustedClaimIssuers.ts:95](https://github.com/PolymeshAssociation/polymesh-sdk/blob/daafaa68f/src/api/entities/Asset/Base/Compliance/TrustedClaimIssuers.ts#L95)

___

### get

▸ **get**(): `Promise`\<[`TrustedClaimIssuer`](../../../../../../../interfaces/Types/TrustedClaimIssuer/TrustedClaimIssuer.md)\<``true``\>[]\>

Retrieve the current Default Trusted Claim Issuers of the Asset

#### Returns

`Promise`\<[`TrustedClaimIssuer`](../../../../../../../interfaces/Types/TrustedClaimIssuer/TrustedClaimIssuer.md)\<``true``\>[]\>

**`Note`**

can be subscribed to

#### Defined in

[api/entities/Asset/Base/Compliance/TrustedClaimIssuers.ts:114](https://github.com/PolymeshAssociation/polymesh-sdk/blob/daafaa68f/src/api/entities/Asset/Base/Compliance/TrustedClaimIssuers.ts#L114)

▸ **get**(`callback`): `Promise`\<[`UnsubCallback`](../../../../../../../modules/Types/Types.md#unsubcallback)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`SubCallback`](../../../../../../../modules/Types/Types.md#subcallback)\<[`TrustedClaimIssuer`](../../../../../../../interfaces/Types/TrustedClaimIssuer/TrustedClaimIssuer.md)\<``true``\>[]\> |

#### Returns

`Promise`\<[`UnsubCallback`](../../../../../../../modules/Types/Types.md#unsubcallback)\>

#### Defined in

[api/entities/Asset/Base/Compliance/TrustedClaimIssuers.ts:115](https://github.com/PolymeshAssociation/polymesh-sdk/blob/daafaa68f/src/api/entities/Asset/Base/Compliance/TrustedClaimIssuers.ts#L115)

___

### remove

▸ **remove**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../../../../modules/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

Remove the supplied Identities from the Asset's list of trusted claim issuers   *

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`ModifyAssetTrustedClaimIssuersRemoveParams`](../../../../../../../interfaces/API/Procedures/Types/ModifyAssetTrustedClaimIssuersRemoveParams/ModifyAssetTrustedClaimIssuersRemoveParams.md) |
| `opts?` | [`ProcedureOpts`](../../../../../../../interfaces/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../../../../modules/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

**`Note`**

this method is of type [ProcedureMethod](../../../../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [remove.checkAuthorization](../../../../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/entities/Asset/Base/Compliance/TrustedClaimIssuers.ts:105](https://github.com/PolymeshAssociation/polymesh-sdk/blob/daafaa68f/src/api/entities/Asset/Base/Compliance/TrustedClaimIssuers.ts#L105)

___

### set

▸ **set**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../../../../modules/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

Assign a new default list of trusted claim issuers to the Asset by replacing the existing ones with the list passed as a parameter

This requires two transactions

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`ModifyAssetTrustedClaimIssuersAddSetParams`](../../../../../../../interfaces/API/Procedures/Types/ModifyAssetTrustedClaimIssuersAddSetParams/ModifyAssetTrustedClaimIssuersAddSetParams.md) |
| `opts?` | [`ProcedureOpts`](../../../../../../../interfaces/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../../../../modules/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

**`Note`**

this method is of type [ProcedureMethod](../../../../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [set.checkAuthorization](../../../../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/entities/Asset/Base/Compliance/TrustedClaimIssuers.ts:85](https://github.com/PolymeshAssociation/polymesh-sdk/blob/daafaa68f/src/api/entities/Asset/Base/Compliance/TrustedClaimIssuers.ts#L85)
