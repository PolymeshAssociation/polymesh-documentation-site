---
id: "DefaultTrustedClaimIssuer"
title: "Class: DefaultTrustedClaimIssuer"
sidebar_label: "DefaultTrustedClaimIssuer"
---

[api/entities/DefaultTrustedClaimIssuer](../../../../modules/API/Entities/DefaultTrustedClaimIssuer/DefaultTrustedClaimIssuer.md).DefaultTrustedClaimIssuer

Represents a default trusted claim issuer for a specific Asset in the Polymesh blockchain

## Hierarchy

- [`Identity`](../Identity/Identity.md)

  ↳ **`DefaultTrustedClaimIssuer`**

## Properties

### asset

• **asset**: [`Asset`](../Asset/Asset.md)

Asset for which this Identity is a Default Trusted Claim Issuer

#### Defined in

[api/entities/DefaultTrustedClaimIssuer.ts:39](https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/api/entities/DefaultTrustedClaimIssuer.ts#L39)

___

### assetPermissions

• **assetPermissions**: [`AssetPermissions`](../Identity/AssetPermissions/AssetPermissions.md)

#### Inherited from

[Identity](../Identity/Identity.md).[assetPermissions](../Identity/Identity.md#assetpermissions)

#### Defined in

[api/entities/Identity/index.ts:110](https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/api/entities/Identity/index.ts#L110)

___

### authorizations

• **authorizations**: [`IdentityAuthorizations`](../Identity/IdentityAuthorizations/IdentityAuthorizations.md)

#### Inherited from

[Identity](../Identity/Identity.md).[authorizations](../Identity/Identity.md#authorizations)

#### Defined in

[api/entities/Identity/index.ts:108](https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/api/entities/Identity/index.ts#L108)

___

### did

• **did**: `string`

Identity ID as stored in the blockchain

#### Inherited from

[Identity](../Identity/Identity.md).[did](../Identity/Identity.md#did)

#### Defined in

[api/entities/Identity/index.ts:105](https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/api/entities/Identity/index.ts#L105)

___

### portfolios

• **portfolios**: [`Portfolios`](../Identity/Portfolios/Portfolios.md)

#### Inherited from

[Identity](../Identity/Identity.md).[portfolios](../Identity/Identity.md#portfolios)

#### Defined in

[api/entities/Identity/index.ts:109](https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/api/entities/Identity/index.ts#L109)

___

### uuid

• **uuid**: `string`

#### Inherited from

[Identity](../Identity/Identity.md).[uuid](../Identity/Identity.md#uuid)

#### Defined in

[api/entities/Entity.ts:46](https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/api/entities/Entity.ts#L46)

## Methods

### addedAt

▸ **addedAt**(): `Promise`<``null`` \| [`EventIdentifier`](../../../../interfaces/Types/EventIdentifier/EventIdentifier.md)\>

Retrieve the identifier data (block number, date and event index) of the event that was emitted when the trusted claim issuer was added

**`Note`**

uses the middleware

**`Note`**

there is a possibility that the data is not ready by the time it is requested. In that case, `null` is returned

#### Returns

`Promise`<``null`` \| [`EventIdentifier`](../../../../interfaces/Types/EventIdentifier/EventIdentifier.md)\>

___

### addedAtV2

▸ **addedAtV2**(): `Promise`<``null`` \| [`EventIdentifier`](../../../../interfaces/Types/EventIdentifier/EventIdentifier.md)\>

Retrieve the identifier data (block number, date and event index) of the event that was emitted when the trusted claim issuer was added

**`Note`**

uses the middlewareV2

**`Note`**

there is a possibility that the data is not ready by the time it is requested. In that case, `null` is returned

#### Returns

`Promise`<``null`` \| [`EventIdentifier`](../../../../interfaces/Types/EventIdentifier/EventIdentifier.md)\>

___

### areSecondaryAccountsFrozen

▸ **areSecondaryAccountsFrozen**(): `Promise`<`boolean`\>

Check whether secondary Accounts are frozen

**`Note`**

can be subscribed to

#### Returns

`Promise`<`boolean`\>

#### Inherited from

[Identity](../Identity/Identity.md).[areSecondaryAccountsFrozen](../Identity/Identity.md#aresecondaryaccountsfrozen)

▸ **areSecondaryAccountsFrozen**(`callback`): `Promise`<[`UnsubCallback`](../../../../modules/Types/Types.md#unsubcallback)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`SubCallback`](../../../../modules/Types/Types.md#subcallback)<`boolean`\> |

#### Returns

`Promise`<[`UnsubCallback`](../../../../modules/Types/Types.md#unsubcallback)\>

#### Inherited from

[Identity](../Identity/Identity.md).[areSecondaryAccountsFrozen](../Identity/Identity.md#aresecondaryaccountsfrozen)

___

### checkRoles

▸ **checkRoles**(`roles`): `Promise`<[`CheckRolesResult`](../../../../interfaces/Types/CheckRolesResult/CheckRolesResult.md)\>

Check whether this Identity possesses all specified roles

#### Parameters

| Name | Type |
| :------ | :------ |
| `roles` | [`Role`](../../../../modules/Types/Types.md#role)[] |

#### Returns

`Promise`<[`CheckRolesResult`](../../../../interfaces/Types/CheckRolesResult/CheckRolesResult.md)\>

#### Inherited from

[Identity](../Identity/Identity.md).[checkRoles](../Identity/Identity.md#checkroles)

___

### exists

▸ **exists**(): `Promise`<`boolean`\>

Determine whether this Identity exists on chain

**`Note`**

asset Identities aren't considered to exist for this check

#### Returns

`Promise`<`boolean`\>

#### Inherited from

[Identity](../Identity/Identity.md).[exists](../Identity/Identity.md#exists)

___

### getAssetBalance

▸ **getAssetBalance**(`args`): `Promise`<`BigNumber`\>

Retrieve the balance of a particular Asset

**`Note`**

can be subscribed to

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.ticker` | `string` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

[Identity](../Identity/Identity.md).[getAssetBalance](../Identity/Identity.md#getassetbalance)

▸ **getAssetBalance**(`args`, `callback`): `Promise`<[`UnsubCallback`](../../../../modules/Types/Types.md#unsubcallback)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.ticker` | `string` |
| `callback` | [`SubCallback`](../../../../modules/Types/Types.md#subcallback)<`BigNumber`\> |

#### Returns

`Promise`<[`UnsubCallback`](../../../../modules/Types/Types.md#unsubcallback)\>

#### Inherited from

[Identity](../Identity/Identity.md).[getAssetBalance](../Identity/Identity.md#getassetbalance)

___

### getHeldAssets

▸ **getHeldAssets**(`opts?`): `Promise`<[`ResultSet`](../../../../interfaces/Types/ResultSet/ResultSet.md)<[`Asset`](../Asset/Asset.md)\>\>

Retrieve a list of all Assets which were held at one point by this Identity

**`Note`**

uses the middleware

**`Note`**

supports pagination

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `Object` |
| `opts.order?` | [`Order`](../../../../enums/Types/Order/Order.md) |
| `opts.size?` | `BigNumber` |
| `opts.start?` | `BigNumber` |

#### Returns

`Promise`<[`ResultSet`](../../../../interfaces/Types/ResultSet/ResultSet.md)<[`Asset`](../Asset/Asset.md)\>\>

#### Inherited from

[Identity](../Identity/Identity.md).[getHeldAssets](../Identity/Identity.md#getheldassets)

___

### getHeldAssetsV2

▸ **getHeldAssetsV2**(`opts?`): `Promise`<[`ResultSet`](../../../../interfaces/Types/ResultSet/ResultSet.md)<[`Asset`](../Asset/Asset.md)\>\>

Retrieve a list of all Assets which were held at one point by this Identity

**`Note`**

uses the middlewareV2

**`Note`**

supports pagination

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `Object` |
| `opts.order?` | [`AssetHoldersOrderBy`](../../../../enums/Types/AssetHoldersOrderBy/AssetHoldersOrderBy.md) |
| `opts.size?` | `BigNumber` |
| `opts.start?` | `BigNumber` |

#### Returns

`Promise`<[`ResultSet`](../../../../interfaces/Types/ResultSet/ResultSet.md)<[`Asset`](../Asset/Asset.md)\>\>

#### Inherited from

[Identity](../Identity/Identity.md).[getHeldAssetsV2](../Identity/Identity.md#getheldassetsv2)

___

### getHistoricalInstructions

▸ **getHistoricalInstructions**(): `Promise`<[`HistoricInstruction`](../../../../modules/API/Entities/Venue/Types/Types.md#historicinstruction)[]\>

Retrieve all Instructions that have been associated with this Identity's DID

**`Note`**

uses the middleware V2

#### Returns

`Promise`<[`HistoricInstruction`](../../../../modules/API/Entities/Venue/Types/Types.md#historicinstruction)[]\>

#### Inherited from

[Identity](../Identity/Identity.md).[getHistoricalInstructions](../Identity/Identity.md#gethistoricalinstructions)

___

### getInstructions

▸ **getInstructions**(): `Promise`<[`GroupedInstructions`](../../../../interfaces/Types/GroupedInstructions/GroupedInstructions.md)\>

Retrieve all Instructions where this Identity is a participant,
  grouped by status

#### Returns

`Promise`<[`GroupedInstructions`](../../../../interfaces/Types/GroupedInstructions/GroupedInstructions.md)\>

#### Inherited from

[Identity](../Identity/Identity.md).[getInstructions](../Identity/Identity.md#getinstructions)

___

### getPendingDistributions

▸ **getPendingDistributions**(): `Promise`<[`DistributionWithDetails`](../../../../interfaces/Types/DistributionWithDetails/DistributionWithDetails.md)[]\>

Retrieve every Dividend Distribution for which this Identity is eligible and hasn't been paid

**`Note`**

uses the middleware

**`Note`**

this query can be potentially **SLOW** depending on which Assets this Identity has held

#### Returns

`Promise`<[`DistributionWithDetails`](../../../../interfaces/Types/DistributionWithDetails/DistributionWithDetails.md)[]\>

#### Inherited from

[Identity](../Identity/Identity.md).[getPendingDistributions](../Identity/Identity.md#getpendingdistributions)

___

### getPrimaryAccount

▸ **getPrimaryAccount**(): `Promise`<[`PermissionedAccount`](../../../../interfaces/Types/PermissionedAccount/PermissionedAccount.md)\>

Retrieve the primary Account associated with the Identity

**`Note`**

can be subscribed to

#### Returns

`Promise`<[`PermissionedAccount`](../../../../interfaces/Types/PermissionedAccount/PermissionedAccount.md)\>

#### Inherited from

[Identity](../Identity/Identity.md).[getPrimaryAccount](../Identity/Identity.md#getprimaryaccount)

▸ **getPrimaryAccount**(`callback`): `Promise`<[`UnsubCallback`](../../../../modules/Types/Types.md#unsubcallback)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`SubCallback`](../../../../modules/Types/Types.md#subcallback)<[`PermissionedAccount`](../../../../interfaces/Types/PermissionedAccount/PermissionedAccount.md)\> |

#### Returns

`Promise`<[`UnsubCallback`](../../../../modules/Types/Types.md#unsubcallback)\>

#### Inherited from

[Identity](../Identity/Identity.md).[getPrimaryAccount](../Identity/Identity.md#getprimaryaccount)

___

### getScopeId

▸ **getScopeId**(`args`): `Promise`<``null`` \| `string`\>

Retrieve the Scope ID associated to this Identity's Investor Uniqueness Claim for a specific Asset, or null
  if there is none

**`Note`**

more on Investor Uniqueness [here](https://developers.polymesh.network/introduction/identity#polymesh-unique-identity-system-puis) and
  [here](https://developers.polymesh.network/polymesh-docs/primitives/confidential-identity)

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.asset` | `string` \| [`Asset`](../Asset/Asset.md) |

#### Returns

`Promise`<``null`` \| `string`\>

#### Inherited from

[Identity](../Identity/Identity.md).[getScopeId](../Identity/Identity.md#getscopeid)

___

### getSecondaryAccounts

▸ **getSecondaryAccounts**(`paginationOpts?`): `Promise`<[`ResultSet`](../../../../interfaces/Types/ResultSet/ResultSet.md)<[`PermissionedAccount`](../../../../interfaces/Types/PermissionedAccount/PermissionedAccount.md)\>\>

Get the list of secondary Accounts related to the Identity

**`Note`**

supports pagination

**`Note`**

can be subscribed to

#### Parameters

| Name | Type |
| :------ | :------ |
| `paginationOpts?` | [`PaginationOptions`](../../../../interfaces/Types/PaginationOptions/PaginationOptions.md) |

#### Returns

`Promise`<[`ResultSet`](../../../../interfaces/Types/ResultSet/ResultSet.md)<[`PermissionedAccount`](../../../../interfaces/Types/PermissionedAccount/PermissionedAccount.md)\>\>

#### Inherited from

[Identity](../Identity/Identity.md).[getSecondaryAccounts](../Identity/Identity.md#getsecondaryaccounts)

▸ **getSecondaryAccounts**(`callback`): `Promise`<[`UnsubCallback`](../../../../modules/Types/Types.md#unsubcallback)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`SubCallback`](../../../../modules/Types/Types.md#subcallback)<[`PermissionedAccount`](../../../../interfaces/Types/PermissionedAccount/PermissionedAccount.md)[]\> |

#### Returns

`Promise`<[`UnsubCallback`](../../../../modules/Types/Types.md#unsubcallback)\>

#### Inherited from

[Identity](../Identity/Identity.md).[getSecondaryAccounts](../Identity/Identity.md#getsecondaryaccounts)

▸ **getSecondaryAccounts**(`paginationOpts`, `callback`): `Promise`<[`UnsubCallback`](../../../../modules/Types/Types.md#unsubcallback)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `paginationOpts` | [`PaginationOptions`](../../../../interfaces/Types/PaginationOptions/PaginationOptions.md) |
| `callback` | [`SubCallback`](../../../../modules/Types/Types.md#subcallback)<[`PermissionedAccount`](../../../../interfaces/Types/PermissionedAccount/PermissionedAccount.md)[]\> |

#### Returns

`Promise`<[`UnsubCallback`](../../../../modules/Types/Types.md#unsubcallback)\>

#### Inherited from

[Identity](../Identity/Identity.md).[getSecondaryAccounts](../Identity/Identity.md#getsecondaryaccounts)

___

### getTrustingAssets

▸ **getTrustingAssets**(): `Promise`<[`Asset`](../Asset/Asset.md)[]\>

Get the list of Assets for which this Identity is a trusted claim issuer

**`Note`**

uses the middleware

#### Returns

`Promise`<[`Asset`](../Asset/Asset.md)[]\>

#### Inherited from

[Identity](../Identity/Identity.md).[getTrustingAssets](../Identity/Identity.md#gettrustingassets)

___

### getTrustingAssetsV2

▸ **getTrustingAssetsV2**(): `Promise`<[`Asset`](../Asset/Asset.md)[]\>

Get the list of Assets for which this Identity is a trusted claim issuer

**`Note`**

uses the middlewareV2

#### Returns

`Promise`<[`Asset`](../Asset/Asset.md)[]\>

#### Inherited from

[Identity](../Identity/Identity.md).[getTrustingAssetsV2](../Identity/Identity.md#gettrustingassetsv2)

___

### getVenues

▸ **getVenues**(): `Promise`<[`Venue`](../Venue/Venue.md)[]\>

Retrieve all Venues created by this Identity

**`Note`**

can be subscribed to

#### Returns

`Promise`<[`Venue`](../Venue/Venue.md)[]\>

#### Inherited from

[Identity](../Identity/Identity.md).[getVenues](../Identity/Identity.md#getvenues)

▸ **getVenues**(`callback`): `Promise`<[`UnsubCallback`](../../../../modules/Types/Types.md#unsubcallback)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`SubCallback`](../../../../modules/Types/Types.md#subcallback)<[`Venue`](../Venue/Venue.md)[]\> |

#### Returns

`Promise`<[`UnsubCallback`](../../../../modules/Types/Types.md#unsubcallback)\>

#### Inherited from

[Identity](../Identity/Identity.md).[getVenues](../Identity/Identity.md#getvenues)

___

### hasRole

▸ **hasRole**(`role`): `Promise`<`boolean`\>

Check whether this Identity possesses the specified Role

#### Parameters

| Name | Type |
| :------ | :------ |
| `role` | [`Role`](../../../../modules/Types/Types.md#role) |

#### Returns

`Promise`<`boolean`\>

#### Inherited from

[Identity](../Identity/Identity.md).[hasRole](../Identity/Identity.md#hasrole)

___

### hasValidCdd

▸ **hasValidCdd**(): `Promise`<`boolean`\>

Check whether this Identity has a valid CDD claim

#### Returns

`Promise`<`boolean`\>

#### Inherited from

[Identity](../Identity/Identity.md).[hasValidCdd](../Identity/Identity.md#hasvalidcdd)

___

### isCddProvider

▸ **isCddProvider**(): `Promise`<`boolean`\>

Check whether this Identity is a CDD provider

#### Returns

`Promise`<`boolean`\>

#### Inherited from

[Identity](../Identity/Identity.md).[isCddProvider](../Identity/Identity.md#iscddprovider)

___

### isEqual

▸ **isEqual**(`entity`): `boolean`

Determine whether this Entity is the same as another one

#### Parameters

| Name | Type |
| :------ | :------ |
| `entity` | [`Entity`](../Entity/Entity.md)<`unknown`, `unknown`\> |

#### Returns

`boolean`

#### Inherited from

[Identity](../Identity/Identity.md).[isEqual](../Identity/Identity.md#isequal)

___

### isGcMember

▸ **isGcMember**(): `Promise`<`boolean`\>

Check whether this Identity is Governance Committee member

#### Returns

`Promise`<`boolean`\>

#### Inherited from

[Identity](../Identity/Identity.md).[isGcMember](../Identity/Identity.md#isgcmember)

___

### toHuman

▸ **toHuman**(): `string`

Return the Identity's DID

#### Returns

`string`

#### Inherited from

[Identity](../Identity/Identity.md).[toHuman](../Identity/Identity.md#tohuman)

___

### trustedFor

▸ **trustedFor**(): `Promise`<``null`` \| [`ClaimType`](../../../../enums/Types/ClaimType/ClaimType.md)[]\>

Retrieve claim types for which this Claim Issuer is trusted. A null value means that the issuer is trusted for all claim types

#### Returns

`Promise`<``null`` \| [`ClaimType`](../../../../enums/Types/ClaimType/ClaimType.md)[]\>

___

### generateUuid

▸ `Static` **generateUuid**<`Identifiers`\>(`identifiers`): `string`

Generate the Entity's UUID from its identifying properties

#### Type parameters

| Name |
| :------ |
| `Identifiers` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `identifiers` | `Identifiers` |

#### Returns

`string`

#### Inherited from

[Identity](../Identity/Identity.md).[generateUuid](../Identity/Identity.md#generateuuid)

___

### unserialize

▸ `Static` **unserialize**<`Identifiers`\>(`serialized`): `Identifiers`

Unserialize a UUID into its Unique Identifiers

#### Type parameters

| Name |
| :------ |
| `Identifiers` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `serialized` | `string` | UUID to unserialize |

#### Returns

`Identifiers`

#### Inherited from

[Identity](../Identity/Identity.md).[unserialize](../Identity/Identity.md#unserialize)
