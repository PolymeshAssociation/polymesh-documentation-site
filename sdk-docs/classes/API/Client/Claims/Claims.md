---
id: "Claims"
title: "Class: Claims"
sidebar_label: "Claims"
---

[api/client/Claims](../../../../modules/API/Client/Claims/Claims.md).Claims

Handles all Claims related functionality

## Methods

### addClaims

▸ **addClaims**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

Add claims to Identities

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Pick`\<[`ModifyClaimsParams`](../../../../modules/API/Procedures/Types/Types.md#modifyclaimsparams), ``"claims"``\> |
| `opts?` | [`ProcedureOpts`](../../../../interfaces/API/Procedures/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

**`Note`**

required roles:
  - Customer Due Diligence Provider: if there is at least one CDD claim in the arguments

**`Note`**

this method is of type [ProcedureMethod](../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [addClaims.checkAuthorization](../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/client/Claims.ts:133](https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/client/Claims.ts#L133)

___

### editClaims

▸ **editClaims**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

Edit claims associated to Identities (only the expiry date can be modified)

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Pick`\<[`ModifyClaimsParams`](../../../../modules/API/Procedures/Types/Types.md#modifyclaimsparams), ``"claims"``\> |
| `opts?` | [`ProcedureOpts`](../../../../interfaces/API/Procedures/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

**`Note`**

required roles:
  - Customer Due Diligence Provider: if there is at least one CDD claim in the arguments

**`Note`**

this method is of type [ProcedureMethod](../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [editClaims.checkAuthorization](../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/client/Claims.ts:146](https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/client/Claims.ts#L146)

___

### getAllCustomClaimTypes

▸ **getAllCustomClaimTypes**(`opts?`): `Promise`\<[`ResultSet`](../../../../interfaces/API/Entities/Types/ResultSet/ResultSet.md)\<[`CustomClaimTypeWithDid`](../../../../modules/API/Client/Types/Types.md#customclaimtypewithdid)\>\>

Retrieve registered CustomClaimTypes

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `Object` | - |
| `opts.dids?` | `string`[] | Fetch CustomClaimTypes issued by the given `dids` |
| `opts.size?` | `BigNumber` | - |
| `opts.start?` | `BigNumber` | - |

#### Returns

`Promise`\<[`ResultSet`](../../../../interfaces/API/Entities/Types/ResultSet/ResultSet.md)\<[`CustomClaimTypeWithDid`](../../../../modules/API/Client/Types/Types.md#customclaimtypewithdid)\>\>

**`Note`**

supports pagination

**`Note`**

uses the middlewareV2 (Required)

#### Defined in

[api/client/Claims.ts:580](https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/client/Claims.ts#L580)

___

### getCddClaims

▸ **getCddClaims**(`opts?`): `Promise`\<[`ClaimData`](../../../../interfaces/API/Entities/Types/ClaimData/ClaimData.md)\<[`CddClaim`](../../../../interfaces/API/Entities/Types/CddClaim/CddClaim.md)\>[]\>

Retrieve the list of CDD claims for a target Identity

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `Object` | - |
| `opts.includeExpired?` | `boolean` | whether to include expired claims. Defaults to true |
| `opts.target?` | `string` \| [`Identity`](../../Entities/Identity/Identity.md) | Identity for which to fetch CDD claims (optional, defaults to the signing Identity) |

#### Returns

`Promise`\<[`ClaimData`](../../../../interfaces/API/Entities/Types/ClaimData/ClaimData.md)\<[`CddClaim`](../../../../interfaces/API/Entities/Types/CddClaim/CddClaim.md)\>[]\>

#### Defined in

[api/client/Claims.ts:343](https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/client/Claims.ts#L343)

___

### getClaimScopes

▸ **getClaimScopes**(`opts?`): `Promise`\<[`ClaimScope`](../../../../interfaces/API/Entities/Types/ClaimScope/ClaimScope.md)[]\>

Retrieve all scopes in which claims have been made for the target Identity.
  If the scope is an asset DID, the corresponding ticker is returned as well

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `Object` | - |
| `opts.target?` | `string` \| [`Identity`](../../Entities/Identity/Identity.md) | Identity for which to fetch claim scopes (optional, defaults to the signing Identity) |

#### Returns

`Promise`\<[`ClaimScope`](../../../../interfaces/API/Entities/Types/ClaimScope/ClaimScope.md)[]\>

#### Defined in

[api/client/Claims.ts:292](https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/client/Claims.ts#L292)

___

### getCustomClaimTypeById

▸ **getCustomClaimTypeById**(`id`): `Promise`\<``null`` \| [`CustomClaimType`](../../../../modules/API/Client/Types/Types.md#customclaimtype)\>

Retrieves a custom claim type based on its ID

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `BigNumber` | The ID of the custom claim type to retrieve |

#### Returns

`Promise`\<``null`` \| [`CustomClaimType`](../../../../modules/API/Client/Types/Types.md#customclaimtype)\>

#### Defined in

[api/client/Claims.ts:555](https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/client/Claims.ts#L555)

___

### getCustomClaimTypeByName

▸ **getCustomClaimTypeByName**(`name`): `Promise`\<``null`` \| [`CustomClaimType`](../../../../modules/API/Client/Types/Types.md#customclaimtype)\>

Retrieves a custom claim type based on its name

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The name of the custom claim type to retrieve |

#### Returns

`Promise`\<``null`` \| [`CustomClaimType`](../../../../modules/API/Client/Types/Types.md#customclaimtype)\>

#### Defined in

[api/client/Claims.ts:532](https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/client/Claims.ts#L532)

___

### getIdentitiesWithClaims

▸ **getIdentitiesWithClaims**(`opts?`): `Promise`\<[`ResultSet`](../../../../interfaces/API/Entities/Types/ResultSet/ResultSet.md)\<[`IdentityWithClaims`](../../../../interfaces/API/Entities/Types/IdentityWithClaims/IdentityWithClaims.md)\>\>

Retrieve a list of Identities with claims associated to them. Can be filtered using parameters

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `Object` | - |
| `opts.claimTypes?` | [`ClaimType`](../../../../enums/API/Entities/Types/ClaimType/ClaimType.md)[] | types of the claims to fetch. Defaults to any type |
| `opts.includeExpired?` | `boolean` | whether to include expired claims. Defaults to true |
| `opts.scope?` | [`Scope`](../../../../interfaces/API/Entities/Types/Scope/Scope.md) | scope of the claims to fetch. Defaults to any scope |
| `opts.size?` | `BigNumber` | page size |
| `opts.start?` | `BigNumber` | page offset |
| `opts.targets?` | (`string` \| [`Identity`](../../Entities/Identity/Identity.md))[] | Identities (or Identity IDs) for which to fetch targeting claims. Defaults to all targets |
| `opts.trustedClaimIssuers?` | (`string` \| [`Identity`](../../Entities/Identity/Identity.md))[] | Identity IDs of claim issuers. Defaults to all claim issuers |

#### Returns

`Promise`\<[`ResultSet`](../../../../interfaces/API/Entities/Types/ResultSet/ResultSet.md)\<[`IdentityWithClaims`](../../../../interfaces/API/Entities/Types/IdentityWithClaims/IdentityWithClaims.md)\>\>

**`Note`**

supports pagination

**`Note`**

uses the middleware V2

#### Defined in

[api/client/Claims.ts:207](https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/client/Claims.ts#L207)

___

### getIssuedClaims

▸ **getIssuedClaims**(`opts?`): `Promise`\<[`ResultSet`](../../../../interfaces/API/Entities/Types/ResultSet/ResultSet.md)\<[`ClaimData`](../../../../interfaces/API/Entities/Types/ClaimData/ClaimData.md)\<[`Claim`](../../../../modules/API/Entities/Types/Types.md#claim)\>\>\>

Retrieve all claims issued by an Identity

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `Object` | - |
| `opts.includeExpired?` | `boolean` | whether to include expired claims. Defaults to true |
| `opts.size?` | `BigNumber` | - |
| `opts.start?` | `BigNumber` | - |
| `opts.target?` | `string` \| [`Identity`](../../Entities/Identity/Identity.md) | Identity (optional, defaults to the signing Identity) |

#### Returns

`Promise`\<[`ResultSet`](../../../../interfaces/API/Entities/Types/ResultSet/ResultSet.md)\<[`ClaimData`](../../../../interfaces/API/Entities/Types/ClaimData/ClaimData.md)\<[`Claim`](../../../../modules/API/Entities/Types/Types.md#claim)\>\>\>

**`Note`**

supports pagination

**`Note`**

uses the middlewareV2

#### Defined in

[api/client/Claims.ts:172](https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/client/Claims.ts#L172)

___

### getTargetingClaims

▸ **getTargetingClaims**(`opts?`): `Promise`\<[`ResultSet`](../../../../interfaces/API/Entities/Types/ResultSet/ResultSet.md)\<[`IdentityWithClaims`](../../../../interfaces/API/Entities/Types/IdentityWithClaims/IdentityWithClaims.md)\>\>

Retrieve all claims issued about an Identity, grouped by claim issuer

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `Object` | - |
| `opts.includeExpired?` | `boolean` | whether to include expired claims. Defaults to true |
| `opts.scope?` | [`Scope`](../../../../interfaces/API/Entities/Types/Scope/Scope.md) | - |
| `opts.size?` | `BigNumber` | - |
| `opts.start?` | `BigNumber` | - |
| `opts.target?` | `string` \| [`Identity`](../../Entities/Identity/Identity.md) | Identity for which to fetch targeting claims (optional, defaults to the signing Identity) |
| `opts.trustedClaimIssuers?` | (`string` \| [`Identity`](../../Entities/Identity/Identity.md))[] | - |

#### Returns

`Promise`\<[`ResultSet`](../../../../interfaces/API/Entities/Types/ResultSet/ResultSet.md)\<[`IdentityWithClaims`](../../../../interfaces/API/Entities/Types/IdentityWithClaims/IdentityWithClaims.md)\>\>

**`Note`**

supports pagination

**`Note`**

uses the middlewareV2 (optional)

#### Defined in

[api/client/Claims.ts:435](https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/client/Claims.ts#L435)

___

### registerCustomClaimType

▸ **registerCustomClaimType**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<`BigNumber`, `BigNumber`\>\>

Creates a custom claim type using the `name` and returns the `id` of the created claim type

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`RegisterCustomClaimTypeParams`](../../../../interfaces/API/Procedures/Types/RegisterCustomClaimTypeParams/RegisterCustomClaimTypeParams.md) |
| `opts?` | [`ProcedureOpts`](../../../../interfaces/API/Procedures/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<`BigNumber`, `BigNumber`\>\>

**`Throws`**

if
 - the `name` is longer than allowed
 - a custom claim type with the same `name` already exists

**`Note`**

this method is of type [ProcedureMethod](../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [registerCustomClaimType.checkAuthorization](../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/client/Claims.ts:523](https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/client/Claims.ts#L523)

___

### revokeClaims

▸ **revokeClaims**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

Revoke claims from Identities

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Pick`\<[`ModifyClaimsParams`](../../../../modules/API/Procedures/Types/Types.md#modifyclaimsparams), ``"claims"``\> |
| `opts?` | [`ProcedureOpts`](../../../../interfaces/API/Procedures/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

**`Note`**

required roles:
  - Customer Due Diligence Provider: if there is at least one CDD claim in the arguments

**`Note`**

this method is of type [ProcedureMethod](../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [revokeClaims.checkAuthorization](../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/client/Claims.ts:159](https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/client/Claims.ts#L159)
