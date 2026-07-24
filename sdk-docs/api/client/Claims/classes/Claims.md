# Class: Claims

> Defined in: [src/api/client/Claims.ts:61](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/client/Claims.ts#L61)

# Class: Claims

Defined in: [src/api/client/Claims.ts:61](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/client/Claims.ts#L61)

Handles all Claims related functionality

## Methods

### addClaims()

> **addClaims**(`args`: `Pick`\<[`ModifyClaimsParams`](../../../procedures/types/type-aliases/ModifyClaimsParams.mdx), `"claims"`\>, `opts?`: [`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)): `Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

Defined in: [src/api/client/Claims.ts:133](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/client/Claims.ts#L133)

Add claims to Identities

#### Parameters

Parameter
Type

`args`

`Pick`\<[`ModifyClaimsParams`](../../../procedures/types/type-aliases/ModifyClaimsParams.mdx), `"claims"`\>

`opts?`

[`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

#### Note

required roles:
  - Customer Due Diligence Provider: if there is at least one CDD claim in the arguments

#### Note

this method is of type [ProcedureMethod](../../../procedures/types/interfaces/ProcedureMethod.mdx), which means you can call [addClaims.checkAuthorization](../../../procedures/types/interfaces/ProcedureMethod.mdx#checkauthorization) on it to see whether the signing Account and Identity have the required roles and permissions to run it

***

### editClaims()

> **editClaims**(`args`: `Pick`\<[`ModifyClaimsParams`](../../../procedures/types/type-aliases/ModifyClaimsParams.mdx), `"claims"`\>, `opts?`: [`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)): `Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

Defined in: [src/api/client/Claims.ts:141](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/client/Claims.ts#L141)

Edit claims associated to Identities (only the expiry date can be modified)

#### Parameters

Parameter
Type

`args`

`Pick`\<[`ModifyClaimsParams`](../../../procedures/types/type-aliases/ModifyClaimsParams.mdx), `"claims"`\>

`opts?`

[`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

#### Note

required roles:
  - Customer Due Diligence Provider: if there is at least one CDD claim in the arguments

#### Note

this method is of type [ProcedureMethod](../../../procedures/types/interfaces/ProcedureMethod.mdx), which means you can call [editClaims.checkAuthorization](../../../procedures/types/interfaces/ProcedureMethod.mdx#checkauthorization) on it to see whether the signing Account and Identity have the required roles and permissions to run it

***

### getAllCustomClaimTypes()

> **getAllCustomClaimTypes**(`opts?`: `object`): `Promise`\<[`ResultSet`](../../../entities/types/interfaces/ResultSet.mdx)\<[`CustomClaimTypeWithDid`](../../types/type-aliases/CustomClaimTypeWithDid.mdx)\>\>

Defined in: [src/api/client/Claims.ts:637](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/client/Claims.ts#L637)

Retrieve registered CustomClaimTypes

#### Parameters

Parameter
Type
Description

`opts`

\{ `dids?`: `string`[]; `size?`: `BigNumber`; `start?`: `BigNumber`; \}

&hyphen;

`opts.dids?`

`string`[]

Fetch CustomClaimTypes issued by the given `dids`

`opts.size?`

`BigNumber`

&hyphen;

`opts.start?`

`BigNumber`

&hyphen;

#### Returns

`Promise`\<[`ResultSet`](../../../entities/types/interfaces/ResultSet.mdx)\<[`CustomClaimTypeWithDid`](../../types/type-aliases/CustomClaimTypeWithDid.mdx)\>\>

#### Note

supports pagination

#### Note

uses the middlewareV2 (Required)

***

### ~~getCddClaims()~~

> **getCddClaims**(`opts?`: `object`): `Promise`\<[`ClaimData`](../../../entities/types/interfaces/ClaimData.mdx)\<[`CddClaim`](../../../entities/types/interfaces/CddClaim.mdx)\>[]\>

Defined in: [src/api/client/Claims.ts:397](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/client/Claims.ts#L397)

Retrieve the list of CDD claims for a target Identity

#### Parameters

Parameter
Type
Description

`opts`

\{ `includeExpired?`: `boolean`; `target?`: `string` \| [`Identity`](../../../entities/Identity/classes/Identity.mdx); \}

&hyphen;

`opts.includeExpired?`

`boolean`

whether to include expired claims. Defaults to true

`opts.target?`

`string` \| [`Identity`](../../../entities/Identity/classes/Identity.mdx)

Identity for which to fetch CDD claims (optional, defaults to the signing Identity)

#### Returns

`Promise`\<[`ClaimData`](../../../entities/types/interfaces/ClaimData.mdx)\<[`CddClaim`](../../../entities/types/interfaces/CddClaim.mdx)\>[]\>

#### Deprecated

CDD claims are no longer supported with v8 chains

***

### getClaimScopes()

> **getClaimScopes**(`opts?`: `object`): `Promise`\<[`ClaimScope`](../../../entities/types/interfaces/ClaimScope.mdx)[]\>

Defined in: [src/api/client/Claims.ts:281](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/client/Claims.ts#L281)

Retrieve all scopes in which claims have been made for the target Identity.
  If the scope is an asset DID, the corresponding ticker is returned as well

#### Parameters

Parameter
Type
Description

`opts`

\{ `target?`: `string` \| [`Identity`](../../../entities/Identity/classes/Identity.mdx); \}

&hyphen;

`opts.target?`

`string` \| [`Identity`](../../../entities/Identity/classes/Identity.mdx)

Identity for which to fetch claim scopes (optional, defaults to the signing Identity)

#### Returns

`Promise`\<[`ClaimScope`](../../../entities/types/interfaces/ClaimScope.mdx)[]\>

#### Note

in order for scopes to include scopes for custom claims, middlewareV2 is required

***

### getCustomClaimTypeById()

> **getCustomClaimTypeById**(`id`: `BigNumber`): `Promise`\<[`CustomClaimType`](../../types/type-aliases/CustomClaimType.mdx) \| `null`\>

Defined in: [src/api/client/Claims.ts:612](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/client/Claims.ts#L612)

Retrieves a custom claim type based on its ID

#### Parameters

Parameter
Type
Description

`id`

`BigNumber`

The ID of the custom claim type to retrieve

#### Returns

`Promise`\<[`CustomClaimType`](../../types/type-aliases/CustomClaimType.mdx) \| `null`\>

***

### getCustomClaimTypeByName()

> **getCustomClaimTypeByName**(`name`: `string`): `Promise`\<[`CustomClaimType`](../../types/type-aliases/CustomClaimType.mdx) \| `null`\>

Defined in: [src/api/client/Claims.ts:589](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/client/Claims.ts#L589)

Retrieves a custom claim type based on its name

#### Parameters

Parameter
Type
Description

`name`

`string`

The name of the custom claim type to retrieve

#### Returns

`Promise`\<[`CustomClaimType`](../../types/type-aliases/CustomClaimType.mdx) \| `null`\>

***

### getIdentitiesWithClaims()

> **getIdentitiesWithClaims**(`opts?`: `object`): `Promise`\<[`ResultSet`](../../../entities/types/interfaces/ResultSet.mdx)\<[`IdentityWithClaims`](../../../entities/types/interfaces/IdentityWithClaims.mdx)\>\>

Defined in: [src/api/client/Claims.ts:195](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/client/Claims.ts#L195)

Retrieve a list of Identities with claims associated to them. Can be filtered using parameters

#### Parameters

Parameter
Type
Description

`opts`

\{ `claimTypes?`: [`TrustedFor`](../../../entities/types/type-aliases/TrustedFor.mdx)[]; `includeExpired?`: `boolean`; `scope?`: [`Scope`](../../../entities/types/interfaces/Scope.mdx); `size?`: `BigNumber`; `start?`: `BigNumber`; `targets?`: (`string` \| [`Identity`](../../../entities/Identity/classes/Identity.mdx))[]; `trustedClaimIssuers?`: (`string` \| [`Identity`](../../../entities/Identity/classes/Identity.mdx))[]; \}

&hyphen;

`opts.claimTypes?`

[`TrustedFor`](../../../entities/types/type-aliases/TrustedFor.mdx)[]

types of the claims to fetch. Defaults to any type

`opts.includeExpired?`

`boolean`

whether to include expired claims. Defaults to true

`opts.scope?`

[`Scope`](../../../entities/types/interfaces/Scope.mdx)

scope of the claims to fetch. Defaults to any scope

`opts.size?`

`BigNumber`

page size

`opts.start?`

`BigNumber`

page offset

`opts.targets?`

(`string` \| [`Identity`](../../../entities/Identity/classes/Identity.mdx))[]

Identities (or Identity IDs) for which to fetch targeting claims. Defaults to all targets

`opts.trustedClaimIssuers?`

(`string` \| [`Identity`](../../../entities/Identity/classes/Identity.mdx))[]

Identity IDs of claim issuers. Defaults to all claim issuers

#### Returns

`Promise`\<[`ResultSet`](../../../entities/types/interfaces/ResultSet.mdx)\<[`IdentityWithClaims`](../../../entities/types/interfaces/IdentityWithClaims.mdx)\>\>

#### Note

supports pagination

#### Note

uses the middleware V2

***

### getIssuedClaims()

> **getIssuedClaims**(`opts?`: `object`): `Promise`\<[`ResultSet`](../../../entities/types/interfaces/ResultSet.mdx)\<[`ClaimData`](../../../entities/types/interfaces/ClaimData.mdx)\<[`Claim`](../../../entities/types/type-aliases/Claim.mdx)\>\>\>

Defined in: [src/api/client/Claims.ts:160](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/client/Claims.ts#L160)

Retrieve all claims issued by an Identity

#### Parameters

Parameter
Type
Description

`opts`

\{ `includeExpired?`: `boolean`; `size?`: `BigNumber`; `start?`: `BigNumber`; `target?`: `string` \| [`Identity`](../../../entities/Identity/classes/Identity.mdx); \}

&hyphen;

`opts.includeExpired?`

`boolean`

whether to include expired claims. Defaults to true

`opts.size?`

`BigNumber`

&hyphen;

`opts.start?`

`BigNumber`

&hyphen;

`opts.target?`

`string` \| [`Identity`](../../../entities/Identity/classes/Identity.mdx)

Identity (optional, defaults to the signing Identity)

#### Returns

`Promise`\<[`ResultSet`](../../../entities/types/interfaces/ResultSet.mdx)\<[`ClaimData`](../../../entities/types/interfaces/ClaimData.mdx)\<[`Claim`](../../../entities/types/type-aliases/Claim.mdx)\>\>\>

#### Note

supports pagination

#### Note

uses the middlewareV2

***

### getTargetingClaims()

> **getTargetingClaims**(`opts?`: `object`): `Promise`\<[`ResultSet`](../../../entities/types/interfaces/ResultSet.mdx)\<[`IdentityWithClaims`](../../../entities/types/interfaces/IdentityWithClaims.mdx)\>\>

Defined in: [src/api/client/Claims.ts:497](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/client/Claims.ts#L497)

Retrieve all claims issued about an Identity, grouped by claim issuer

#### Parameters

Parameter
Type
Description

`opts`

\{ `includeExpired?`: `boolean`; `scope?`: [`Scope`](../../../entities/types/interfaces/Scope.mdx); `size?`: `BigNumber`; `start?`: `BigNumber`; `target?`: `string` \| [`Identity`](../../../entities/Identity/classes/Identity.mdx); `trustedClaimIssuers?`: (`string` \| [`Identity`](../../../entities/Identity/classes/Identity.mdx))[]; \}

&hyphen;

`opts.includeExpired?`

`boolean`

whether to include expired claims. Defaults to true

`opts.scope?`

[`Scope`](../../../entities/types/interfaces/Scope.mdx)

&hyphen;

`opts.size?`

`BigNumber`

&hyphen;

`opts.start?`

`BigNumber`

&hyphen;

`opts.target?`

`string` \| [`Identity`](../../../entities/Identity/classes/Identity.mdx)

Identity for which to fetch targeting claims (optional, defaults to the signing Identity)

`opts.trustedClaimIssuers?`

(`string` \| [`Identity`](../../../entities/Identity/classes/Identity.mdx))[]

&hyphen;

#### Returns

`Promise`\<[`ResultSet`](../../../entities/types/interfaces/ResultSet.mdx)\<[`IdentityWithClaims`](../../../entities/types/interfaces/IdentityWithClaims.mdx)\>\>

#### Note

supports pagination

#### Note

uses the middlewareV2 (optional)

***

### registerCustomClaimType()

> **registerCustomClaimType**(`args`: [`RegisterCustomClaimTypeParams`](../../../procedures/types/interfaces/RegisterCustomClaimTypeParams.mdx), `opts?`: [`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)): `Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`BigNumber`, `BigNumber`\>\>

Defined in: [src/api/client/Claims.ts:582](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/client/Claims.ts#L582)

Creates a custom claim type using the `name` and returns the `id` of the created claim type

#### Parameters

Parameter
Type

`args`

[`RegisterCustomClaimTypeParams`](../../../procedures/types/interfaces/RegisterCustomClaimTypeParams.mdx)

`opts?`

[`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`BigNumber`, `BigNumber`\>\>

#### Throws

if
 - the `name` is longer than allowed
 - a custom claim type with the same `name` already exists

#### Note

this method is of type [ProcedureMethod](../../../procedures/types/interfaces/ProcedureMethod.mdx), which means you can call [registerCustomClaimType.checkAuthorization](../../../procedures/types/interfaces/ProcedureMethod.mdx#checkauthorization) on it to see whether the signing Account and Identity have the required roles and permissions to run it

***

### revokeClaims()

> **revokeClaims**(`args`: `Pick`\<[`ModifyClaimsParams`](../../../procedures/types/type-aliases/ModifyClaimsParams.mdx), `"claims"`\>, `opts?`: [`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)): `Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

Defined in: [src/api/client/Claims.ts:149](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/client/Claims.ts#L149)

Revoke claims from Identities

#### Parameters

Parameter
Type

`args`

`Pick`\<[`ModifyClaimsParams`](../../../procedures/types/type-aliases/ModifyClaimsParams.mdx), `"claims"`\>

`opts?`

[`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

#### Note

required roles:
  - Customer Due Diligence Provider: if there is at least one CDD claim in the arguments

#### Note

this method is of type [ProcedureMethod](../../../procedures/types/interfaces/ProcedureMethod.mdx), which means you can call [revokeClaims.checkAuthorization](../../../procedures/types/interfaces/ProcedureMethod.mdx#checkauthorization) on it to see whether the signing Account and Identity have the required roles and permissions to run it
