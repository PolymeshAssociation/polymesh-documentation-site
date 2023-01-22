[api/entities/Asset/Compliance/TrustedClaimIssuers](../../../../../../Modules/API/Entities/Asset/Compliance/TrustedClaimIssuers.md).TrustedClaimIssuers

Handles all Asset Default Trusted Claim Issuers related functionality

## Hierarchy

- `Namespace`<[`Asset`](../../Asset.md)\>

  ↳ **`TrustedClaimIssuers`**

## Methods

### add

▸ **add**(`args`, `opts?`): `Promise`<[`GenericPolymeshTransaction`](../../../../../../Modules/Types/Types.md#genericpolymeshtransaction)<[`Asset`](../../Asset.md), [`Asset`](../../Asset.md)\>\>

Add the supplied Identities to the Asset's list of trusted claim issuers

**`Note`**

this method is of type [ProcedureMethod](../../../../../../Interfaces/Types/ProcedureMethod.md), which means you can call [add.checkAuthorization](../../../../../../Interfaces/Types/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`ModifyAssetTrustedClaimIssuersAddSetParams`](../../../../../../Interfaces/API/Procedures/Types/ModifyAssetTrustedClaimIssuersAddSetParams.md) |
| `opts?` | [`ProcedureOpts`](../../../../../../Interfaces/Types/ProcedureOpts.md) |

#### Returns

`Promise`<[`GenericPolymeshTransaction`](../../../../../../Modules/Types/Types.md#genericpolymeshtransaction)<[`Asset`](../../Asset.md), [`Asset`](../../Asset.md)\>\>

___

### get

▸ **get**(): `Promise`<[`TrustedClaimIssuer`](../../../../../../Interfaces/Types/TrustedClaimIssuer.md)<``true``\>[]\>

Retrieve the current Default Trusted Claim Issuers of the Asset

**`Note`**

can be subscribed to

#### Returns

`Promise`<[`TrustedClaimIssuer`](../../../../../../Interfaces/Types/TrustedClaimIssuer.md)<``true``\>[]\>

▸ **get**(`callback`): `Promise`<[`UnsubCallback`](../../../../../../Modules/Types/Types.md#unsubcallback)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`SubCallback`](../../../../../../Modules/Types/Types.md#subcallback)<[`TrustedClaimIssuer`](../../../../../../Interfaces/Types/TrustedClaimIssuer.md)<``true``\>[]\> |

#### Returns

`Promise`<[`UnsubCallback`](../../../../../../Modules/Types/Types.md#unsubcallback)\>

___

### remove

▸ **remove**(`args`, `opts?`): `Promise`<[`GenericPolymeshTransaction`](../../../../../../Modules/Types/Types.md#genericpolymeshtransaction)<[`Asset`](../../Asset.md), [`Asset`](../../Asset.md)\>\>

Remove the supplied Identities from the Asset's list of trusted claim issuers   *

**`Note`**

this method is of type [ProcedureMethod](../../../../../../Interfaces/Types/ProcedureMethod.md), which means you can call [remove.checkAuthorization](../../../../../../Interfaces/Types/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`ModifyAssetTrustedClaimIssuersRemoveParams`](../../../../../../Interfaces/API/Procedures/Types/ModifyAssetTrustedClaimIssuersRemoveParams.md) |
| `opts?` | [`ProcedureOpts`](../../../../../../Interfaces/Types/ProcedureOpts.md) |

#### Returns

`Promise`<[`GenericPolymeshTransaction`](../../../../../../Modules/Types/Types.md#genericpolymeshtransaction)<[`Asset`](../../Asset.md), [`Asset`](../../Asset.md)\>\>

___

### set

▸ **set**(`args`, `opts?`): `Promise`<[`GenericPolymeshTransaction`](../../../../../../Modules/Types/Types.md#genericpolymeshtransaction)<[`Asset`](../../Asset.md), [`Asset`](../../Asset.md)\>\>

Assign a new default list of trusted claim issuers to the Asset by replacing the existing ones with the list passed as a parameter

This requires two transactions

**`Note`**

this method is of type [ProcedureMethod](../../../../../../Interfaces/Types/ProcedureMethod.md), which means you can call [set.checkAuthorization](../../../../../../Interfaces/Types/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`ModifyAssetTrustedClaimIssuersAddSetParams`](../../../../../../Interfaces/API/Procedures/Types/ModifyAssetTrustedClaimIssuersAddSetParams.md) |
| `opts?` | [`ProcedureOpts`](../../../../../../Interfaces/Types/ProcedureOpts.md) |

#### Returns

`Promise`<[`GenericPolymeshTransaction`](../../../../../../Modules/Types/Types.md#genericpolymeshtransaction)<[`Asset`](../../Asset.md), [`Asset`](../../Asset.md)\>\>
