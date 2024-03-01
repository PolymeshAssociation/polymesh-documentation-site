---
id: 'DefaultTrustedClaimIssuer'
title: 'Class: DefaultTrustedClaimIssuer'
sidebar_label: 'DefaultTrustedClaimIssuer'
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

[api/entities/DefaultTrustedClaimIssuer.ts:39](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/DefaultTrustedClaimIssuer.ts#L39)

---

### assetPermissions

• **assetPermissions**: [`AssetPermissions`](../Identity/AssetPermissions/AssetPermissions.md)

#### Inherited from

[Identity](../Identity/Identity.md).[assetPermissions](../Identity/Identity.md#assetpermissions)

#### Defined in

[api/entities/Identity/index.ts:114](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/Identity/index.ts#L114)

---

### authorizations

• **authorizations**: [`IdentityAuthorizations`](../Identity/IdentityAuthorizations/IdentityAuthorizations.md)

#### Inherited from

[Identity](../Identity/Identity.md).[authorizations](../Identity/Identity.md#authorizations)

#### Defined in

[api/entities/Identity/index.ts:112](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/Identity/index.ts#L112)

---

### did

• **did**: `string`

Identity ID as stored in the blockchain

#### Inherited from

[Identity](../Identity/Identity.md).[did](../Identity/Identity.md#did)

#### Defined in

[api/entities/Identity/index.ts:109](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/Identity/index.ts#L109)

---

### portfolios

• **portfolios**: [`Portfolios`](../Identity/Portfolios/Portfolios.md)

#### Inherited from

[Identity](../Identity/Identity.md).[portfolios](../Identity/Identity.md#portfolios)

#### Defined in

[api/entities/Identity/index.ts:113](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/Identity/index.ts#L113)

---

### uuid

• **uuid**: `string`

#### Inherited from

[Identity](../Identity/Identity.md).[uuid](../Identity/Identity.md#uuid)

#### Defined in

[api/entities/Entity.ts:46](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/Entity.ts#L46)

## Methods

### addedAt

▸ **addedAt**(): `Promise`\<`null` \| [`EventIdentifier`](../../../../interfaces/Types/EventIdentifier/EventIdentifier.md)\>

Retrieve the identifier data (block number, date and event index) of the event that was emitted when the trusted claim issuer was added

#### Returns

`Promise`\<`null` \| [`EventIdentifier`](../../../../interfaces/Types/EventIdentifier/EventIdentifier.md)\>

**`Note`**

uses the middleware

**`Note`**

there is a possibility that the data is not ready by the time it is requested. In that case, `null` is returned

#### Defined in

[api/entities/DefaultTrustedClaimIssuer.ts:58](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/DefaultTrustedClaimIssuer.ts#L58)

---

### addedAtV2

▸ **addedAtV2**(): `Promise`\<`null` \| [`EventIdentifier`](../../../../interfaces/Types/EventIdentifier/EventIdentifier.md)\>

Retrieve the identifier data (block number, date and event index) of the event that was emitted when the trusted claim issuer was added

#### Returns

`Promise`\<`null` \| [`EventIdentifier`](../../../../interfaces/Types/EventIdentifier/EventIdentifier.md)\>

**`Note`**

uses the middlewareV2

**`Note`**

there is a possibility that the data is not ready by the time it is requested. In that case, `null` is returned

#### Defined in

[api/entities/DefaultTrustedClaimIssuer.ts:87](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/DefaultTrustedClaimIssuer.ts#L87)

---

### areSecondaryAccountsFrozen

▸ **areSecondaryAccountsFrozen**(): `Promise`\<`boolean`\>

Check whether secondary Accounts are frozen

#### Returns

`Promise`\<`boolean`\>

**`Note`**

can be subscribed to

#### Inherited from

[Identity](../Identity/Identity.md).[areSecondaryAccountsFrozen](../Identity/Identity.md#aresecondaryaccountsfrozen)

#### Defined in

[api/entities/Identity/index.ts:700](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/Identity/index.ts#L700)

▸ **areSecondaryAccountsFrozen**(`callback`): `Promise`\<[`UnsubCallback`](../../../../modules/Types/Types.md#unsubcallback)\>

#### Parameters

| Name       | Type                                                                         |
| :--------- | :--------------------------------------------------------------------------- |
| `callback` | [`SubCallback`](../../../../modules/Types/Types.md#subcallback)\<`boolean`\> |

#### Returns

`Promise`\<[`UnsubCallback`](../../../../modules/Types/Types.md#unsubcallback)\>

#### Inherited from

[Identity](../Identity/Identity.md).[areSecondaryAccountsFrozen](../Identity/Identity.md#aresecondaryaccountsfrozen)

#### Defined in

[api/entities/Identity/index.ts:701](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/Identity/index.ts#L701)

---

### checkRoles

▸ **checkRoles**(`roles`): `Promise`\<[`CheckRolesResult`](../../../../interfaces/Types/CheckRolesResult/CheckRolesResult.md)\>

Check whether this Identity possesses all specified roles

#### Parameters

| Name    | Type                                                |
| :------ | :-------------------------------------------------- |
| `roles` | [`Role`](../../../../modules/Types/Types.md#role)[] |

#### Returns

`Promise`\<[`CheckRolesResult`](../../../../interfaces/Types/CheckRolesResult/CheckRolesResult.md)\>

#### Inherited from

[Identity](../Identity/Identity.md).[checkRoles](../Identity/Identity.md#checkroles)

#### Defined in

[api/entities/Identity/index.ts:433](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/Identity/index.ts#L433)

---

### exists

▸ **exists**(): `Promise`\<`boolean`\>

Determine whether this Identity exists on chain

#### Returns

`Promise`\<`boolean`\>

**`Note`**

asset Identities aren't considered to exist for this check

#### Inherited from

[Identity](../Identity/Identity.md).[exists](../Identity/Identity.md#exists)

#### Defined in

[api/entities/Identity/index.ts:866](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/Identity/index.ts#L866)

---

### getAssetBalance

▸ **getAssetBalance**(`args`): `Promise`\<`BigNumber`\>

Retrieve the balance of a particular Asset

#### Parameters

| Name          | Type     |
| :------------ | :------- |
| `args`        | `Object` |
| `args.ticker` | `string` |

#### Returns

`Promise`\<`BigNumber`\>

**`Note`**

can be subscribed to

#### Inherited from

[Identity](../Identity/Identity.md).[getAssetBalance](../Identity/Identity.md#getassetbalance)

#### Defined in

[api/entities/Identity/index.ts:183](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/Identity/index.ts#L183)

▸ **getAssetBalance**(`args`, `callback`): `Promise`\<[`UnsubCallback`](../../../../modules/Types/Types.md#unsubcallback)\>

#### Parameters

| Name          | Type                                                                           |
| :------------ | :----------------------------------------------------------------------------- |
| `args`        | `Object`                                                                       |
| `args.ticker` | `string`                                                                       |
| `callback`    | [`SubCallback`](../../../../modules/Types/Types.md#subcallback)\<`BigNumber`\> |

#### Returns

`Promise`\<[`UnsubCallback`](../../../../modules/Types/Types.md#unsubcallback)\>

#### Inherited from

[Identity](../Identity/Identity.md).[getAssetBalance](../Identity/Identity.md#getassetbalance)

#### Defined in

[api/entities/Identity/index.ts:184](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/Identity/index.ts#L184)

---

### getHeldAssets

▸ **getHeldAssets**(`opts?`): `Promise`\<[`ResultSet`](../../../../interfaces/Types/ResultSet/ResultSet.md) \<[`Asset`](../Asset/Asset.md)\>\>

Retrieve a list of all Assets which were held at one point by this Identity

#### Parameters

| Name          | Type                                              |
| :------------ | :------------------------------------------------ |
| `opts`        | `Object`                                          |
| `opts.order?` | [`Order`](../../../../enums/Types/Order/Order.md) |
| `opts.size?`  | `BigNumber`                                       |
| `opts.start?` | `BigNumber`                                       |

#### Returns

`Promise`\<[`ResultSet`](../../../../interfaces/Types/ResultSet/ResultSet.md) \<[`Asset`](../Asset/Asset.md)\>\>

**`Note`**

uses the middleware

**`Note`**

supports pagination

#### Inherited from

[Identity](../Identity/Identity.md).[getHeldAssets](../Identity/Identity.md#getheldassets)

#### Defined in

[api/entities/Identity/index.ts:337](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/Identity/index.ts#L337)

---

### getHeldAssetsV2

▸ **getHeldAssetsV2**(`opts?`): `Promise`\<[`ResultSet`](../../../../interfaces/Types/ResultSet/ResultSet.md) \<[`Asset`](../Asset/Asset.md)\>\>

Retrieve a list of all Assets which were held at one point by this Identity

#### Parameters

| Name          | Type                                                                                        |
| :------------ | :------------------------------------------------------------------------------------------ |
| `opts`        | `Object`                                                                                    |
| `opts.order?` | [`AssetHoldersOrderBy`](../../../../enums/Types/AssetHoldersOrderBy/AssetHoldersOrderBy.md) |
| `opts.size?`  | `BigNumber`                                                                                 |
| `opts.start?` | `BigNumber`                                                                                 |

#### Returns

`Promise`\<[`ResultSet`](../../../../interfaces/Types/ResultSet/ResultSet.md) \<[`Asset`](../Asset/Asset.md)\>\>

**`Note`**

uses the middlewareV2

**`Note`**

supports pagination

#### Inherited from

[Identity](../Identity/Identity.md).[getHeldAssetsV2](../Identity/Identity.md#getheldassetsv2)

#### Defined in

[api/entities/Identity/index.ts:391](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/Identity/index.ts#L391)

---

### getHistoricalInstructions

▸ **getHistoricalInstructions**(): `Promise`\<[`HistoricInstruction`](../../../../modules/API/Entities/Venue/Types/Types.md#historicinstruction)[]\>

Retrieve all Instructions that have been associated with this Identity's DID

#### Returns

`Promise`\<[`HistoricInstruction`](../../../../modules/API/Entities/Venue/Types/Types.md#historicinstruction)[]\>

**`Note`**

uses the middleware V2

#### Inherited from

[Identity](../Identity/Identity.md).[getHistoricalInstructions](../Identity/Identity.md#gethistoricalinstructions)

#### Defined in

[api/entities/Identity/index.ts:898](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/Identity/index.ts#L898)

---

### getInstructions

▸ **getInstructions**(): `Promise`\<[`GroupedInstructions`](../../../../interfaces/Types/GroupedInstructions/GroupedInstructions.md)\>

Retrieve all Instructions where this Identity is a custodian of one or more portfolios in the legs,
grouped by status

#### Returns

`Promise`\<[`GroupedInstructions`](../../../../interfaces/Types/GroupedInstructions/GroupedInstructions.md)\>

#### Inherited from

[Identity](../Identity/Identity.md).[getInstructions](../Identity/Identity.md#getinstructions)

#### Defined in

[api/entities/Identity/index.ts:555](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/Identity/index.ts#L555)

---

### getInvolvedInstructions

▸ **getInvolvedInstructions**(): `Promise`\<[`GroupedInvolvedInstructions`](../../../../interfaces/Types/GroupedInvolvedInstructions/GroupedInvolvedInstructions.md)\>

Retrieve all Instructions where this Identity is a participant (owner/custodian),
grouped by the role of the Identity and Instruction status

#### Returns

`Promise`\<[`GroupedInvolvedInstructions`](../../../../interfaces/Types/GroupedInvolvedInstructions/GroupedInvolvedInstructions.md)\>

#### Inherited from

[Identity](../Identity/Identity.md).[getInvolvedInstructions](../Identity/Identity.md#getinvolvedinstructions)

#### Defined in

[api/entities/Identity/index.ts:641](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/Identity/index.ts#L641)

---

### getPendingDistributions

▸ **getPendingDistributions**(): `Promise`\<[`DistributionWithDetails`](../../../../interfaces/Types/DistributionWithDetails/DistributionWithDetails.md)[]\>

Retrieve every Dividend Distribution for which this Identity is eligible and hasn't been paid

#### Returns

`Promise`\<[`DistributionWithDetails`](../../../../interfaces/Types/DistributionWithDetails/DistributionWithDetails.md)[]\>

**`Note`**

uses the middleware

**`Note`**

this query can be potentially **SLOW** depending on which Assets this Identity has held

#### Inherited from

[Identity](../Identity/Identity.md).[getPendingDistributions](../Identity/Identity.md#getpendingdistributions)

#### Defined in

[api/entities/Identity/index.ts:737](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/Identity/index.ts#L737)

---

### getPrimaryAccount

▸ **getPrimaryAccount**(): `Promise`\<[`PermissionedAccount`](../../../../interfaces/Types/PermissionedAccount/PermissionedAccount.md)\>

Retrieve the primary Account associated with the Identity

#### Returns

`Promise`\<[`PermissionedAccount`](../../../../interfaces/Types/PermissionedAccount/PermissionedAccount.md)\>

**`Note`**

can be subscribed to

#### Inherited from

[Identity](../Identity/Identity.md).[getPrimaryAccount](../Identity/Identity.md#getprimaryaccount)

#### Defined in

[api/entities/Identity/index.ts:284](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/Identity/index.ts#L284)

▸ **getPrimaryAccount**(`callback`): `Promise`\<[`UnsubCallback`](../../../../modules/Types/Types.md#unsubcallback)\>

#### Parameters

| Name       | Type                                                                                                                                                                 |
| :--------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `callback` | [`SubCallback`](../../../../modules/Types/Types.md#subcallback) \<[`PermissionedAccount`](../../../../interfaces/Types/PermissionedAccount/PermissionedAccount.md)\> |

#### Returns

`Promise`\<[`UnsubCallback`](../../../../modules/Types/Types.md#unsubcallback)\>

#### Inherited from

[Identity](../Identity/Identity.md).[getPrimaryAccount](../Identity/Identity.md#getprimaryaccount)

#### Defined in

[api/entities/Identity/index.ts:285](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/Identity/index.ts#L285)

---

### getScopeId

▸ **getScopeId**(`args`): `Promise`\<`null` \| `string`\>

Retrieve the Scope ID associated to this Identity's Investor Uniqueness Claim for a specific Asset, or null
if there is none

#### Parameters

| Name         | Type                                     |
| :----------- | :--------------------------------------- |
| `args`       | `Object`                                 |
| `args.asset` | `string` \| [`Asset`](../Asset/Asset.md) |

#### Returns

`Promise`\<`null` \| `string`\>

**`Note`**

more on Investor Uniqueness [here](https://developers.polymesh.network/introduction/identity#polymesh-unique-identity-system-puis) and
[here](https://developers.polymesh.network/polymesh-docs/primitives/confidential-identity)

#### Inherited from

[Identity](../Identity/Identity.md).[getScopeId](../Identity/Identity.md#getscopeid)

#### Defined in

[api/entities/Identity/index.ts:533](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/Identity/index.ts#L533)

---

### getSecondaryAccounts

▸ **getSecondaryAccounts**(`paginationOpts?`): `Promise`\<[`ResultSet`](../../../../interfaces/Types/ResultSet/ResultSet.md) \<[`PermissionedAccount`](../../../../interfaces/Types/PermissionedAccount/PermissionedAccount.md)\>\>

Get the list of secondary Accounts related to the Identity

#### Parameters

| Name              | Type                                                                                       |
| :---------------- | :----------------------------------------------------------------------------------------- |
| `paginationOpts?` | [`PaginationOptions`](../../../../interfaces/Types/PaginationOptions/PaginationOptions.md) |

#### Returns

`Promise`\<[`ResultSet`](../../../../interfaces/Types/ResultSet/ResultSet.md) \<[`PermissionedAccount`](../../../../interfaces/Types/PermissionedAccount/PermissionedAccount.md)\>\>

**`Note`**

supports pagination

**`Note`**

can be subscribed to

#### Inherited from

[Identity](../Identity/Identity.md).[getSecondaryAccounts](../Identity/Identity.md#getsecondaryaccounts)

#### Defined in

[api/entities/Identity/index.ts:792](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/Identity/index.ts#L792)

▸ **getSecondaryAccounts**(`callback`): `Promise`\<[`UnsubCallback`](../../../../modules/Types/Types.md#unsubcallback)\>

#### Parameters

| Name       | Type                                                                                                                                                                   |
| :--------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `callback` | [`SubCallback`](../../../../modules/Types/Types.md#subcallback) \<[`PermissionedAccount`](../../../../interfaces/Types/PermissionedAccount/PermissionedAccount.md)[]\> |

#### Returns

`Promise`\<[`UnsubCallback`](../../../../modules/Types/Types.md#unsubcallback)\>

#### Inherited from

[Identity](../Identity/Identity.md).[getSecondaryAccounts](../Identity/Identity.md#getsecondaryaccounts)

#### Defined in

[api/entities/Identity/index.ts:796](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/Identity/index.ts#L796)

▸ **getSecondaryAccounts**(`paginationOpts`, `callback`): `Promise`\<[`UnsubCallback`](../../../../modules/Types/Types.md#unsubcallback)\>

#### Parameters

| Name             | Type                                                                                                                                                                   |
| :--------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `paginationOpts` | [`PaginationOptions`](../../../../interfaces/Types/PaginationOptions/PaginationOptions.md)                                                                             |
| `callback`       | [`SubCallback`](../../../../modules/Types/Types.md#subcallback) \<[`PermissionedAccount`](../../../../interfaces/Types/PermissionedAccount/PermissionedAccount.md)[]\> |

#### Returns

`Promise`\<[`UnsubCallback`](../../../../modules/Types/Types.md#unsubcallback)\>

#### Inherited from

[Identity](../Identity/Identity.md).[getSecondaryAccounts](../Identity/Identity.md#getsecondaryaccounts)

#### Defined in

[api/entities/Identity/index.ts:800](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/Identity/index.ts#L800)

---

### getTrustingAssets

▸ **getTrustingAssets**(): `Promise`\<[`Asset`](../Asset/Asset.md)[]\>

Get the list of Assets for which this Identity is a trusted claim issuer

#### Returns

`Promise`\<[`Asset`](../Asset/Asset.md)[]\>

**`Note`**

uses the middleware

#### Inherited from

[Identity](../Identity/Identity.md).[getTrustingAssets](../Identity/Identity.md#gettrustingassets)

#### Defined in

[api/entities/Identity/index.ts:457](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/Identity/index.ts#L457)

---

### getTrustingAssetsV2

▸ **getTrustingAssetsV2**(): `Promise`\<[`Asset`](../Asset/Asset.md)[]\>

Get the list of Assets for which this Identity is a trusted claim issuer

#### Returns

`Promise`\<[`Asset`](../Asset/Asset.md)[]\>

**`Note`**

uses the middlewareV2

#### Inherited from

[Identity](../Identity/Identity.md).[getTrustingAssetsV2](../Identity/Identity.md#gettrustingassetsv2)

#### Defined in

[api/entities/Identity/index.ts:478](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/Identity/index.ts#L478)

---

### getVenues

▸ **getVenues**(): `Promise`\<[`Venue`](../Venue/Venue.md)[]\>

Retrieve all Venues created by this Identity

#### Returns

`Promise`\<[`Venue`](../Venue/Venue.md)[]\>

**`Note`**

can be subscribed to

#### Inherited from

[Identity](../Identity/Identity.md).[getVenues](../Identity/Identity.md#getvenues)

#### Defined in

[api/entities/Identity/index.ts:497](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/Identity/index.ts#L497)

▸ **getVenues**(`callback`): `Promise`\<[`UnsubCallback`](../../../../modules/Types/Types.md#unsubcallback)\>

#### Parameters

| Name       | Type                                                                                               |
| :--------- | :------------------------------------------------------------------------------------------------- |
| `callback` | [`SubCallback`](../../../../modules/Types/Types.md#subcallback) \<[`Venue`](../Venue/Venue.md)[]\> |

#### Returns

`Promise`\<[`UnsubCallback`](../../../../modules/Types/Types.md#unsubcallback)\>

#### Inherited from

[Identity](../Identity/Identity.md).[getVenues](../Identity/Identity.md#getvenues)

#### Defined in

[api/entities/Identity/index.ts:498](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/Identity/index.ts#L498)

---

### hasRole

▸ **hasRole**(`role`): `Promise`\<`boolean`\>

Check whether this Identity possesses the specified Role

#### Parameters

| Name   | Type                                              |
| :----- | :------------------------------------------------ |
| `role` | [`Role`](../../../../modules/Types/Types.md#role) |

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

[Identity](../Identity/Identity.md).[hasRole](../Identity/Identity.md#hasrole)

#### Defined in

[api/entities/Identity/index.ts:135](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/Identity/index.ts#L135)

---

### hasValidCdd

▸ **hasValidCdd**(): `Promise`\<`boolean`\>

Check whether this Identity has a valid CDD claim

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

[Identity](../Identity/Identity.md).[hasValidCdd](../Identity/Identity.md#hasvalidcdd)

#### Defined in

[api/entities/Identity/index.ts:232](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/Identity/index.ts#L232)

---

### isCddProvider

▸ **isCddProvider**(): `Promise`\<`boolean`\>

Check whether this Identity is a CDD provider

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

[Identity](../Identity/Identity.md).[isCddProvider](../Identity/Identity.md#iscddprovider)

#### Defined in

[api/entities/Identity/index.ts:265](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/Identity/index.ts#L265)

---

### isEqual

▸ **isEqual**(`entity`): `boolean`

Determine whether this Entity is the same as another one

#### Parameters

| Name     | Type                                                    |
| :------- | :------------------------------------------------------ |
| `entity` | [`Entity`](../Entity/Entity.md)\<`unknown`, `unknown`\> |

#### Returns

`boolean`

#### Inherited from

[Identity](../Identity/Identity.md).[isEqual](../Identity/Identity.md#isequal)

#### Defined in

[api/entities/Entity.ts:61](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/Entity.ts#L61)

---

### isGcMember

▸ **isGcMember**(): `Promise`\<`boolean`\>

Check whether this Identity is Governance Committee member

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

[Identity](../Identity/Identity.md).[isGcMember](../Identity/Identity.md#isgcmember)

#### Defined in

[api/entities/Identity/index.ts:248](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/Identity/index.ts#L248)

---

### toHuman

▸ **toHuman**(): `string`

Return the Identity's DID

#### Returns

`string`

#### Inherited from

[Identity](../Identity/Identity.md).[toHuman](../Identity/Identity.md#tohuman)

#### Defined in

[api/entities/Identity/index.ts:889](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/Identity/index.ts#L889)

---

### trustedFor

▸ **trustedFor**(): `Promise`\<`null` \| [`ClaimType`](../../../../enums/Types/ClaimType/ClaimType.md)[]\>

Retrieve claim types for which this Claim Issuer is trusted. A null value means that the issuer is trusted for all claim types

#### Returns

`Promise`\<`null` \| [`ClaimType`](../../../../enums/Types/ClaimType/ClaimType.md)[]\>

#### Defined in

[api/entities/DefaultTrustedClaimIssuer.ts:113](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/DefaultTrustedClaimIssuer.ts#L113)

---

### generateUuid

▸ `Static` **generateUuid**\<`Identifiers`\>(`identifiers`): `string`

Generate the Entity's UUID from its identifying properties

#### Type parameters

| Name          |
| :------------ |
| `Identifiers` |

#### Parameters

| Name          | Type          |
| :------------ | :------------ |
| `identifiers` | `Identifiers` |

#### Returns

`string`

#### Inherited from

[Identity](../Identity/Identity.md).[generateUuid](../Identity/Identity.md#generateuuid)

#### Defined in

[api/entities/Entity.ts:14](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/Entity.ts#L14)

---

### unserialize

▸ `Static` **unserialize**\<`Identifiers`\>(`serialized`): `Identifiers`

Unserialize a UUID into its Unique Identifiers

#### Type parameters

| Name          |
| :------------ |
| `Identifiers` |

#### Parameters

| Name         | Type     | Description         |
| :----------- | :------- | :------------------ |
| `serialized` | `string` | UUID to unserialize |

#### Returns

`Identifiers`

#### Inherited from

[Identity](../Identity/Identity.md).[unserialize](../Identity/Identity.md#unserialize)

#### Defined in

[api/entities/Entity.ts:23](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/Entity.ts#L23)
