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

• **asset**: [`FungibleAsset`](../Asset/Fungible/FungibleAsset.md)

Asset for which this Identity is a Default Trusted Claim Issuer

#### Defined in

[api/entities/DefaultTrustedClaimIssuer.ts:35](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/api/entities/DefaultTrustedClaimIssuer.ts#L35)

---

### assetPermissions

• **assetPermissions**: [`AssetPermissions`](../Identity/AssetPermissions/AssetPermissions.md)

#### Inherited from

[Identity](../Identity/Identity.md).[assetPermissions](../Identity/Identity.md#assetpermissions)

#### Defined in

[api/entities/Identity/index.ts:119](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/api/entities/Identity/index.ts#L119)

---

### authorizations

• **authorizations**: [`IdentityAuthorizations`](../Identity/IdentityAuthorizations/IdentityAuthorizations.md)

#### Inherited from

[Identity](../Identity/Identity.md).[authorizations](../Identity/Identity.md#authorizations)

#### Defined in

[api/entities/Identity/index.ts:117](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/api/entities/Identity/index.ts#L117)

---

### did

• **did**: `string`

Identity ID as stored in the blockchain

#### Inherited from

[Identity](../Identity/Identity.md).[did](../Identity/Identity.md#did)

#### Defined in

[api/entities/Identity/index.ts:114](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/api/entities/Identity/index.ts#L114)

---

### portfolios

• **portfolios**: [`Portfolios`](../Identity/Portfolios/Portfolios.md)

#### Inherited from

[Identity](../Identity/Identity.md).[portfolios](../Identity/Identity.md#portfolios)

#### Defined in

[api/entities/Identity/index.ts:118](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/api/entities/Identity/index.ts#L118)

---

### uuid

• **uuid**: `string`

#### Inherited from

[Identity](../Identity/Identity.md).[uuid](../Identity/Identity.md#uuid)

#### Defined in

[api/entities/Entity.ts:46](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/api/entities/Entity.ts#L46)

## Methods

### addedAt

▸ **addedAt**(): `Promise`\<`null` \| [`EventIdentifier`](../../../../interfaces/Types/EventIdentifier/EventIdentifier.md)\>

Retrieve the identifier data (block number, date and event index) of the event that was emitted when the trusted claim issuer was added

#### Returns

`Promise`\<`null` \| [`EventIdentifier`](../../../../interfaces/Types/EventIdentifier/EventIdentifier.md)\>

**`Note`**

uses the middlewareV2

**`Note`**

there is a possibility that the data is not ready by the time it is requested. In that case, `null` is returned

#### Defined in

[api/entities/DefaultTrustedClaimIssuer.ts:54](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/api/entities/DefaultTrustedClaimIssuer.ts#L54)

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

[api/entities/Identity/index.ts:658](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/api/entities/Identity/index.ts#L658)

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

[api/entities/Identity/index.ts:659](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/api/entities/Identity/index.ts#L659)

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

[api/entities/Identity/index.ts:441](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/api/entities/Identity/index.ts#L441)

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

[api/entities/Identity/index.ts:824](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/api/entities/Identity/index.ts#L824)

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

[api/entities/Identity/index.ts:195](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/api/entities/Identity/index.ts#L195)

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

[api/entities/Identity/index.ts:196](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/api/entities/Identity/index.ts#L196)

---

### getChildIdentities

▸ **getChildIdentities**(): `Promise`\<[`ChildIdentity`](../Identity/ChildIdentity/ChildIdentity.md)[]\>

Returns the list of all child identities

#### Returns

`Promise`\<[`ChildIdentity`](../Identity/ChildIdentity/ChildIdentity.md)[]\>

**`Note`**

this query can be potentially **SLOW** depending on the number of parent Identities present on the chain

#### Inherited from

[Identity](../Identity/Identity.md).[getChildIdentities](../Identity/Identity.md#getchildidentities)

#### Defined in

[api/entities/Identity/index.ts:876](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/api/entities/Identity/index.ts#L876)

---

### getHeldAssets

▸ **getHeldAssets**(`opts?`): `Promise`\<[`ResultSet`](../../../../interfaces/Types/ResultSet/ResultSet.md) \<[`FungibleAsset`](../Asset/Fungible/FungibleAsset.md)\>\>

Retrieve a list of all Assets which were held at one point by this Identity

#### Parameters

| Name          | Type                                                                                        |
| :------------ | :------------------------------------------------------------------------------------------ |
| `opts`        | `Object`                                                                                    |
| `opts.order?` | [`AssetHoldersOrderBy`](../../../../enums/Types/AssetHoldersOrderBy/AssetHoldersOrderBy.md) |
| `opts.size?`  | `BigNumber`                                                                                 |
| `opts.start?` | `BigNumber`                                                                                 |

#### Returns

`Promise`\<[`ResultSet`](../../../../interfaces/Types/ResultSet/ResultSet.md) \<[`FungibleAsset`](../Asset/Fungible/FungibleAsset.md)\>\>

**`Note`**

uses the middlewareV2

**`Note`**

supports pagination

#### Inherited from

[Identity](../Identity/Identity.md).[getHeldAssets](../Identity/Identity.md#getheldassets)

#### Defined in

[api/entities/Identity/index.ts:349](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/api/entities/Identity/index.ts#L349)

---

### getHeldNfts

▸ **getHeldNfts**(`opts?`): `Promise`\<[`ResultSet`](../../../../interfaces/Types/ResultSet/ResultSet.md) \<[`HeldNfts`](../../../../interfaces/Types/HeldNfts/HeldNfts.md)\>\>

Retrieve a list of all NftCollections which were held at one point by this Identity

#### Parameters

| Name          | Type                                                                                  |
| :------------ | :------------------------------------------------------------------------------------ |
| `opts`        | `Object`                                                                              |
| `opts.order?` | [`NftHoldersOrderBy`](../../../../enums/Types/NftHoldersOrderBy/NftHoldersOrderBy.md) |
| `opts.size?`  | `BigNumber`                                                                           |
| `opts.start?` | `BigNumber`                                                                           |

#### Returns

`Promise`\<[`ResultSet`](../../../../interfaces/Types/ResultSet/ResultSet.md) \<[`HeldNfts`](../../../../interfaces/Types/HeldNfts/HeldNfts.md)\>\>

**`Note`**

uses the middlewareV2

**`Note`**

supports pagination

#### Inherited from

[Identity](../Identity/Identity.md).[getHeldNfts](../Identity/Identity.md#getheldnfts)

#### Defined in

[api/entities/Identity/index.ts:394](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/api/entities/Identity/index.ts#L394)

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

[api/entities/Identity/index.ts:856](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/api/entities/Identity/index.ts#L856)

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

[api/entities/Identity/index.ts:512](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/api/entities/Identity/index.ts#L512)

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

[api/entities/Identity/index.ts:599](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/api/entities/Identity/index.ts#L599)

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

[api/entities/Identity/index.ts:695](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/api/entities/Identity/index.ts#L695)

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

[api/entities/Identity/index.ts:296](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/api/entities/Identity/index.ts#L296)

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

[api/entities/Identity/index.ts:297](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/api/entities/Identity/index.ts#L297)

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

[api/entities/Identity/index.ts:750](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/api/entities/Identity/index.ts#L750)

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

[api/entities/Identity/index.ts:754](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/api/entities/Identity/index.ts#L754)

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

[api/entities/Identity/index.ts:758](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/api/entities/Identity/index.ts#L758)

---

### getTrustingAssets

▸ **getTrustingAssets**(): `Promise`\<[`FungibleAsset`](../Asset/Fungible/FungibleAsset.md)[]\>

Get the list of Assets for which this Identity is a trusted claim issuer

#### Returns

`Promise`\<[`FungibleAsset`](../Asset/Fungible/FungibleAsset.md)[]\>

**`Note`**

uses the middlewareV2

#### Inherited from

[Identity](../Identity/Identity.md).[getTrustingAssets](../Identity/Identity.md#gettrustingassets)

#### Defined in

[api/entities/Identity/index.ts:465](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/api/entities/Identity/index.ts#L465)

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

[api/entities/Identity/index.ts:484](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/api/entities/Identity/index.ts#L484)

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

[api/entities/Identity/index.ts:147](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/api/entities/Identity/index.ts#L147)

---

### hasValidCdd

▸ **hasValidCdd**(): `Promise`\<`boolean`\>

Check whether this Identity has a valid CDD claim

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

[Identity](../Identity/Identity.md).[hasValidCdd](../Identity/Identity.md#hasvalidcdd)

#### Defined in

[api/entities/Identity/index.ts:244](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/api/entities/Identity/index.ts#L244)

---

### isCddProvider

▸ **isCddProvider**(): `Promise`\<`boolean`\>

Check whether this Identity is a CDD provider

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

[Identity](../Identity/Identity.md).[isCddProvider](../Identity/Identity.md#iscddprovider)

#### Defined in

[api/entities/Identity/index.ts:277](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/api/entities/Identity/index.ts#L277)

---

### isChild

▸ **isChild**(): `Promise`\<`boolean`\>

Check whether this Identity is a child Identity

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

[Identity](../Identity/Identity.md).[isChild](../Identity/Identity.md#ischild)

#### Defined in

[api/entities/Identity/index.ts:917](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/api/entities/Identity/index.ts#L917)

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

[api/entities/Entity.ts:61](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/api/entities/Entity.ts#L61)

---

### isGcMember

▸ **isGcMember**(): `Promise`\<`boolean`\>

Check whether this Identity is Governance Committee member

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

[Identity](../Identity/Identity.md).[isGcMember](../Identity/Identity.md#isgcmember)

#### Defined in

[api/entities/Identity/index.ts:260](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/api/entities/Identity/index.ts#L260)

---

### toHuman

▸ **toHuman**(): `string`

Return the Identity's DID

#### Returns

`string`

#### Inherited from

[Identity](../Identity/Identity.md).[toHuman](../Identity/Identity.md#tohuman)

#### Defined in

[api/entities/Identity/index.ts:847](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/api/entities/Identity/index.ts#L847)

---

### trustedFor

▸ **trustedFor**(): `Promise`\<`null` \| [`ClaimType`](../../../../enums/Types/ClaimType/ClaimType.md)[]\>

Retrieve claim types for which this Claim Issuer is trusted. A null value means that the issuer is trusted for all claim types

#### Returns

`Promise`\<`null` \| [`ClaimType`](../../../../enums/Types/ClaimType/ClaimType.md)[]\>

#### Defined in

[api/entities/DefaultTrustedClaimIssuer.ts:80](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/api/entities/DefaultTrustedClaimIssuer.ts#L80)

---

### unlinkChild

▸ **unlinkChild**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

Unlinks a child identity

#### Parameters

| Name    | Type                                                                                                      |
| :------ | :-------------------------------------------------------------------------------------------------------- |
| `args`  | [`UnlinkChildParams`](../../../../interfaces/API/Procedures/Types/UnlinkChildParams/UnlinkChildParams.md) |
| `opts?` | [`ProcedureOpts`](../../../../interfaces/Types/ProcedureOpts/ProcedureOpts.md)                            |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

**`Throws`**

if

- the `child` is not a child of this identity
- the transaction signer is not the primary key of the parent identity

**`Note`**

this method is of type [ProcedureMethod](../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [unlinkChild.checkAuthorization](../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Inherited from

[Identity](../Identity/Identity.md).[unlinkChild](../Identity/Identity.md#unlinkchild)

#### Defined in

[api/entities/Identity/index.ts:910](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/api/entities/Identity/index.ts#L910)

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

[api/entities/Entity.ts:14](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/api/entities/Entity.ts#L14)

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

[api/entities/Entity.ts:23](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/api/entities/Entity.ts#L23)
