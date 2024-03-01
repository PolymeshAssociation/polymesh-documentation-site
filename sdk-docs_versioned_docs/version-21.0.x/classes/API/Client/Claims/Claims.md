---
id: 'Claims'
title: 'Class: Claims'
sidebar_label: 'Claims'
---

[api/client/Claims](../../../../modules/API/Client/Claims/Claims.md).Claims

Handles all Claims related functionality

## Methods

### addClaims

▸ **addClaims**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

Add claims to Identities

#### Parameters

| Name    | Type                                                                                                               |
| :------ | :----------------------------------------------------------------------------------------------------------------- |
| `args`  | `Pick`\<[`ModifyClaimsParams`](../../../../modules/API/Procedures/Types/Types.md#modifyclaimsparams), `"claims"`\> |
| `opts?` | [`ProcedureOpts`](../../../../interfaces/Types/ProcedureOpts/ProcedureOpts.md)                                     |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

**`Note`**

required roles:

- Customer Due Diligence Provider: if there is at least one CDD claim in the arguments

**`Note`**

this method is of type [ProcedureMethod](../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [addClaims.checkAuthorization](../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/client/Claims.ts:125](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/client/Claims.ts#L125)

---

### addInvestorUniquenessClaim

▸ **addInvestorUniquenessClaim**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

Add an Investor Uniqueness Claim to the signing Identity

#### Parameters

| Name    | Type                                                                                                                                                   |
| :------ | :----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `args`  | [`AddInvestorUniquenessClaimParams`](../../../../interfaces/API/Procedures/Types/AddInvestorUniquenessClaimParams/AddInvestorUniquenessClaimParams.md) |
| `opts?` | [`ProcedureOpts`](../../../../interfaces/Types/ProcedureOpts/ProcedureOpts.md)                                                                         |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

**`Note`**

this method is of type [ProcedureMethod](../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [addInvestorUniquenessClaim.checkAuthorization](../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/client/Claims.ts:112](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/client/Claims.ts#L112)

---

### editClaims

▸ **editClaims**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

Edit claims associated to Identities (only the expiry date can be modified)

#### Parameters

| Name    | Type                                                                                                               |
| :------ | :----------------------------------------------------------------------------------------------------------------- |
| `args`  | `Pick`\<[`ModifyClaimsParams`](../../../../modules/API/Procedures/Types/Types.md#modifyclaimsparams), `"claims"`\> |
| `opts?` | [`ProcedureOpts`](../../../../interfaces/Types/ProcedureOpts/ProcedureOpts.md)                                     |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

**`Note`**

required roles:

- Customer Due Diligence Provider: if there is at least one CDD claim in the arguments

**`Note`**

this method is of type [ProcedureMethod](../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [editClaims.checkAuthorization](../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/client/Claims.ts:138](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/client/Claims.ts#L138)

---

### getCddClaims

▸ **getCddClaims**(`opts?`): `Promise`\<[`ClaimData`](../../../../interfaces/Types/ClaimData/ClaimData.md) \<[`CddClaim`](../../../../interfaces/Types/CddClaim/CddClaim.md)\>[]\>

Retrieve the list of CDD claims for a target Identity

#### Parameters

| Name                   | Type                                                          | Description                                                                         |
| :--------------------- | :------------------------------------------------------------ | :---------------------------------------------------------------------------------- |
| `opts`                 | `Object`                                                      | -                                                                                   |
| `opts.includeExpired?` | `boolean`                                                     | whether to include expired claims. Defaults to true                                 |
| `opts.target?`         | `string` \| [`Identity`](../../Entities/Identity/Identity.md) | Identity for which to fetch CDD claims (optional, defaults to the signing Identity) |

#### Returns

`Promise`\<[`ClaimData`](../../../../interfaces/Types/ClaimData/ClaimData.md) \<[`CddClaim`](../../../../interfaces/Types/CddClaim/CddClaim.md)\>[]\>

#### Defined in

[api/client/Claims.ts:440](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/client/Claims.ts#L440)

---

### getClaimScopes

▸ **getClaimScopes**(`opts?`): `Promise`\<[`ClaimScope`](../../../../interfaces/Types/ClaimScope/ClaimScope.md)[]\>

Retrieve all scopes in which claims have been made for the target Identity.
If the scope is an asset DID, the corresponding ticker is returned as well

#### Parameters

| Name           | Type                                                          | Description                                                                           |
| :------------- | :------------------------------------------------------------ | :------------------------------------------------------------------------------------ |
| `opts`         | `Object`                                                      | -                                                                                     |
| `opts.target?` | `string` \| [`Identity`](../../Entities/Identity/Identity.md) | Identity for which to fetch claim scopes (optional, defaults to the signing Identity) |

#### Returns

`Promise`\<[`ClaimScope`](../../../../interfaces/Types/ClaimScope/ClaimScope.md)[]\>

#### Defined in

[api/client/Claims.ts:390](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/client/Claims.ts#L390)

---

### getIdentitiesWithClaims

▸ **getIdentitiesWithClaims**(`opts?`): `Promise`\<[`ResultSet`](../../../../interfaces/Types/ResultSet/ResultSet.md) \<[`IdentityWithClaims`](../../../../interfaces/Types/IdentityWithClaims/IdentityWithClaims.md)\>\>

Retrieve a list of Identities with claims associated to them. Can be filtered using parameters

#### Parameters

| Name                        | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Description                                                                               |
| :-------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------- |
| `opts`                      | `Object`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | -                                                                                         |
| `opts.claimTypes?`          | ([`Accredited`](../../../../enums/Types/ClaimType/ClaimType.md#accredited) \| [`Affiliate`](../../../../enums/Types/ClaimType/ClaimType.md#affiliate) \| [`BuyLockup`](../../../../enums/Types/ClaimType/ClaimType.md#buylockup) \| [`SellLockup`](../../../../enums/Types/ClaimType/ClaimType.md#selllockup) \| [`CustomerDueDiligence`](../../../../enums/Types/ClaimType/ClaimType.md#customerduediligence) \| [`KnowYourCustomer`](../../../../enums/Types/ClaimType/ClaimType.md#knowyourcustomer) \| [`Jurisdiction`](../../../../enums/Types/ClaimType/ClaimType.md#jurisdiction) \| [`Exempted`](../../../../enums/Types/ClaimType/ClaimType.md#exempted) \| [`Blocked`](../../../../enums/Types/ClaimType/ClaimType.md#blocked) \| [`InvestorUniqueness`](../../../../enums/Types/ClaimType/ClaimType.md#investoruniqueness) \| [`NoType`](../../../../enums/Types/ClaimType/ClaimType.md#notype) \| [`NoData`](../../../../enums/Types/ClaimType/ClaimType.md#nodata))[] | types of the claims to fetch. Defaults to any type                                        |
| `opts.includeExpired?`      | `boolean`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | whether to include expired claims. Defaults to true                                       |
| `opts.scope?`               | [`Scope`](../../../../interfaces/Types/Scope/Scope.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | scope of the claims to fetch. Defaults to any scope                                       |
| `opts.size?`                | `BigNumber`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | page size                                                                                 |
| `opts.start?`               | `BigNumber`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | page offset                                                                               |
| `opts.targets?`             | (`string` \| [`Identity`](../../Entities/Identity/Identity.md))[]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Identities (or Identity IDs) for which to fetch targeting claims. Defaults to all targets |
| `opts.trustedClaimIssuers?` | (`string` \| [`Identity`](../../Entities/Identity/Identity.md))[]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Identity IDs of claim issuers. Defaults to all claim issuers                              |

#### Returns

`Promise`\<[`ResultSet`](../../../../interfaces/Types/ResultSet/ResultSet.md) \<[`IdentityWithClaims`](../../../../interfaces/Types/IdentityWithClaims/IdentityWithClaims.md)\>\>

**`Note`**

supports pagination

**`Note`**

uses the middleware

#### Defined in

[api/client/Claims.ts:233](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/client/Claims.ts#L233)

---

### getIdentitiesWithClaimsV2

▸ **getIdentitiesWithClaimsV2**(`opts?`): `Promise`\<[`ResultSet`](../../../../interfaces/Types/ResultSet/ResultSet.md) \<[`IdentityWithClaims`](../../../../interfaces/Types/IdentityWithClaims/IdentityWithClaims.md)\>\>

Retrieve a list of Identities with claims associated to them. Can be filtered using parameters

#### Parameters

| Name                        | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Description                                                                               |
| :-------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------- |
| `opts`                      | `Object`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | -                                                                                         |
| `opts.claimTypes?`          | ([`Accredited`](../../../../enums/Types/ClaimType/ClaimType.md#accredited) \| [`Affiliate`](../../../../enums/Types/ClaimType/ClaimType.md#affiliate) \| [`BuyLockup`](../../../../enums/Types/ClaimType/ClaimType.md#buylockup) \| [`SellLockup`](../../../../enums/Types/ClaimType/ClaimType.md#selllockup) \| [`CustomerDueDiligence`](../../../../enums/Types/ClaimType/ClaimType.md#customerduediligence) \| [`KnowYourCustomer`](../../../../enums/Types/ClaimType/ClaimType.md#knowyourcustomer) \| [`Jurisdiction`](../../../../enums/Types/ClaimType/ClaimType.md#jurisdiction) \| [`Exempted`](../../../../enums/Types/ClaimType/ClaimType.md#exempted) \| [`Blocked`](../../../../enums/Types/ClaimType/ClaimType.md#blocked) \| [`InvestorUniqueness`](../../../../enums/Types/ClaimType/ClaimType.md#investoruniqueness) \| [`NoType`](../../../../enums/Types/ClaimType/ClaimType.md#notype) \| [`NoData`](../../../../enums/Types/ClaimType/ClaimType.md#nodata))[] | types of the claims to fetch. Defaults to any type                                        |
| `opts.includeExpired?`      | `boolean`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | whether to include expired claims. Defaults to true                                       |
| `opts.scope?`               | [`Scope`](../../../../interfaces/Types/Scope/Scope.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | scope of the claims to fetch. Defaults to any scope                                       |
| `opts.size?`                | `BigNumber`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | page size                                                                                 |
| `opts.start?`               | `BigNumber`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | page offset                                                                               |
| `opts.targets?`             | (`string` \| [`Identity`](../../Entities/Identity/Identity.md))[]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Identities (or Identity IDs) for which to fetch targeting claims. Defaults to all targets |
| `opts.trustedClaimIssuers?` | (`string` \| [`Identity`](../../Entities/Identity/Identity.md))[]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Identity IDs of claim issuers. Defaults to all claim issuers                              |

#### Returns

`Promise`\<[`ResultSet`](../../../../interfaces/Types/ResultSet/ResultSet.md) \<[`IdentityWithClaims`](../../../../interfaces/Types/IdentityWithClaims/IdentityWithClaims.md)\>\>

**`Note`**

supports pagination

**`Note`**

uses the middleware V2

#### Defined in

[api/client/Claims.ts:305](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/client/Claims.ts#L305)

---

### getInvestorUniquenessClaims

▸ **getInvestorUniquenessClaims**(`opts?`): `Promise`\<[`ClaimData`](../../../../interfaces/Types/ClaimData/ClaimData.md) \<[`InvestorUniquenessClaim`](../../../../interfaces/Types/InvestorUniquenessClaim/InvestorUniquenessClaim.md)\>[]\>

Retrieve the list of InvestorUniqueness claims for a target Identity

#### Parameters

| Name                   | Type                                                          | Description                                                                         |
| :--------------------- | :------------------------------------------------------------ | :---------------------------------------------------------------------------------- |
| `opts`                 | `Object`                                                      | -                                                                                   |
| `opts.includeExpired?` | `boolean`                                                     | whether to include expired claims. Defaults to true                                 |
| `opts.target?`         | `string` \| [`Identity`](../../Entities/Identity/Identity.md) | Identity for which to fetch CDD claims (optional, defaults to the signing Identity) |

#### Returns

`Promise`\<[`ClaimData`](../../../../interfaces/Types/ClaimData/ClaimData.md) \<[`InvestorUniquenessClaim`](../../../../interfaces/Types/InvestorUniquenessClaim/InvestorUniquenessClaim.md)\>[]\>

#### Defined in

[api/client/Claims.ts:464](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/client/Claims.ts#L464)

---

### getIssuedClaims

▸ **getIssuedClaims**(`opts?`): `Promise`\<[`ResultSet`](../../../../interfaces/Types/ResultSet/ResultSet.md) \<[`ClaimData`](../../../../interfaces/Types/ClaimData/ClaimData.md) \<[`Claim`](../../../../modules/Types/Types.md#claim)\>\>\>

Retrieve all claims issued by an Identity

#### Parameters

| Name                   | Type                                                          | Description                                           |
| :--------------------- | :------------------------------------------------------------ | :---------------------------------------------------- |
| `opts`                 | `Object`                                                      | -                                                     |
| `opts.includeExpired?` | `boolean`                                                     | whether to include expired claims. Defaults to true   |
| `opts.size?`           | `BigNumber`                                                   | -                                                     |
| `opts.start?`          | `BigNumber`                                                   | -                                                     |
| `opts.target?`         | `string` \| [`Identity`](../../Entities/Identity/Identity.md) | Identity (optional, defaults to the signing Identity) |

#### Returns

`Promise`\<[`ResultSet`](../../../../interfaces/Types/ResultSet/ResultSet.md) \<[`ClaimData`](../../../../interfaces/Types/ClaimData/ClaimData.md) \<[`Claim`](../../../../modules/Types/Types.md#claim)\>\>\>

**`Note`**

supports pagination

**`Note`**

uses the middleware

#### Defined in

[api/client/Claims.ts:164](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/client/Claims.ts#L164)

---

### getIssuedClaimsV2

▸ **getIssuedClaimsV2**(`opts?`): `Promise`\<[`ResultSet`](../../../../interfaces/Types/ResultSet/ResultSet.md) \<[`ClaimData`](../../../../interfaces/Types/ClaimData/ClaimData.md) \<[`Claim`](../../../../modules/Types/Types.md#claim)\>\>\>

Retrieve all claims issued by an Identity

#### Parameters

| Name                   | Type                                                          | Description                                           |
| :--------------------- | :------------------------------------------------------------ | :---------------------------------------------------- |
| `opts`                 | `Object`                                                      | -                                                     |
| `opts.includeExpired?` | `boolean`                                                     | whether to include expired claims. Defaults to true   |
| `opts.size?`           | `BigNumber`                                                   | -                                                     |
| `opts.start?`          | `BigNumber`                                                   | -                                                     |
| `opts.target?`         | `string` \| [`Identity`](../../Entities/Identity/Identity.md) | Identity (optional, defaults to the signing Identity) |

#### Returns

`Promise`\<[`ResultSet`](../../../../interfaces/Types/ResultSet/ResultSet.md) \<[`ClaimData`](../../../../interfaces/Types/ClaimData/ClaimData.md) \<[`Claim`](../../../../modules/Types/Types.md#claim)\>\>\>

**`Note`**

supports pagination

**`Note`**

uses the middlewareV2

#### Defined in

[api/client/Claims.ts:198](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/client/Claims.ts#L198)

---

### getTargetingClaims

▸ **getTargetingClaims**(`opts?`): `Promise`\<[`ResultSet`](../../../../interfaces/Types/ResultSet/ResultSet.md) \<[`IdentityWithClaims`](../../../../interfaces/Types/IdentityWithClaims/IdentityWithClaims.md)\>\>

Retrieve all claims issued about an Identity, grouped by claim issuer

#### Parameters

| Name                        | Type                                                              | Description                                                                               |
| :-------------------------- | :---------------------------------------------------------------- | :---------------------------------------------------------------------------------------- |
| `opts`                      | `Object`                                                          | -                                                                                         |
| `opts.includeExpired?`      | `boolean`                                                         | whether to include expired claims. Defaults to true                                       |
| `opts.scope?`               | [`Scope`](../../../../interfaces/Types/Scope/Scope.md)            | -                                                                                         |
| `opts.size?`                | `BigNumber`                                                       | -                                                                                         |
| `opts.start?`               | `BigNumber`                                                       | -                                                                                         |
| `opts.target?`              | `string` \| [`Identity`](../../Entities/Identity/Identity.md)     | Identity for which to fetch targeting claims (optional, defaults to the signing Identity) |
| `opts.trustedClaimIssuers?` | (`string` \| [`Identity`](../../Entities/Identity/Identity.md))[] | -                                                                                         |

#### Returns

`Promise`\<[`ResultSet`](../../../../interfaces/Types/ResultSet/ResultSet.md) \<[`IdentityWithClaims`](../../../../interfaces/Types/IdentityWithClaims/IdentityWithClaims.md)\>\>

**`Note`**

supports pagination

**`Note`**

uses the middleware (optional)

#### Defined in

[api/client/Claims.ts:491](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/client/Claims.ts#L491)

---

### getTargetingClaimsV2

▸ **getTargetingClaimsV2**(`opts?`): `Promise`\<[`ResultSet`](../../../../interfaces/Types/ResultSet/ResultSet.md) \<[`IdentityWithClaims`](../../../../interfaces/Types/IdentityWithClaims/IdentityWithClaims.md)\>\>

Retrieve all claims issued about an Identity, grouped by claim issuer

#### Parameters

| Name                        | Type                                                              | Description                                                                               |
| :-------------------------- | :---------------------------------------------------------------- | :---------------------------------------------------------------------------------------- |
| `opts`                      | `Object`                                                          | -                                                                                         |
| `opts.includeExpired?`      | `boolean`                                                         | whether to include expired claims. Defaults to true                                       |
| `opts.scope?`               | [`Scope`](../../../../interfaces/Types/Scope/Scope.md)            | -                                                                                         |
| `opts.size?`                | `BigNumber`                                                       | -                                                                                         |
| `opts.start?`               | `BigNumber`                                                       | -                                                                                         |
| `opts.target?`              | `string` \| [`Identity`](../../Entities/Identity/Identity.md)     | Identity for which to fetch targeting claims (optional, defaults to the signing Identity) |
| `opts.trustedClaimIssuers?` | (`string` \| [`Identity`](../../Entities/Identity/Identity.md))[] | -                                                                                         |

#### Returns

`Promise`\<[`ResultSet`](../../../../interfaces/Types/ResultSet/ResultSet.md) \<[`IdentityWithClaims`](../../../../interfaces/Types/IdentityWithClaims/IdentityWithClaims.md)\>\>

**`Note`**

supports pagination

**`Note`**

uses the middlewareV2 (optional)

#### Defined in

[api/client/Claims.ts:586](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/client/Claims.ts#L586)

---

### revokeClaims

▸ **revokeClaims**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

Revoke claims from Identities

#### Parameters

| Name    | Type                                                                                                               |
| :------ | :----------------------------------------------------------------------------------------------------------------- |
| `args`  | `Pick`\<[`ModifyClaimsParams`](../../../../modules/API/Procedures/Types/Types.md#modifyclaimsparams), `"claims"`\> |
| `opts?` | [`ProcedureOpts`](../../../../interfaces/Types/ProcedureOpts/ProcedureOpts.md)                                     |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

**`Note`**

required roles:

- Customer Due Diligence Provider: if there is at least one CDD claim in the arguments

**`Note`**

this method is of type [ProcedureMethod](../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [revokeClaims.checkAuthorization](../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/client/Claims.ts:151](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/client/Claims.ts#L151)
