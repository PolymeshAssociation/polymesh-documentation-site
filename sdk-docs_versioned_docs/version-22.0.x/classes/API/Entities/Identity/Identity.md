---
id: 'Identity'
title: 'Class: Identity'
sidebar_label: 'Identity'
---

[api/entities/Identity](../../../../modules/API/Entities/Identity/Identity.md).Identity

Represents an Identity in the Polymesh blockchain

## Hierarchy

- [`Entity`](../Entity/Entity.md) \<[`UniqueIdentifiers`](../../../../interfaces/API/Entities/Identity/UniqueIdentifiers/UniqueIdentifiers.md), `string`\>

  ↳ **`Identity`**

  ↳↳ [`DefaultTrustedClaimIssuer`](../DefaultTrustedClaimIssuer/DefaultTrustedClaimIssuer.md)

## Properties

### assetPermissions

• **assetPermissions**: [`AssetPermissions`](AssetPermissions/AssetPermissions.md)

#### Defined in

[api/entities/Identity/index.ts:110](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2d3ac2aea/src/api/entities/Identity/index.ts#L110)

---

### authorizations

• **authorizations**: [`IdentityAuthorizations`](IdentityAuthorizations/IdentityAuthorizations.md)

#### Defined in

[api/entities/Identity/index.ts:108](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2d3ac2aea/src/api/entities/Identity/index.ts#L108)

---

### did

• **did**: `string`

Identity ID as stored in the blockchain

#### Defined in

[api/entities/Identity/index.ts:105](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2d3ac2aea/src/api/entities/Identity/index.ts#L105)

---

### portfolios

• **portfolios**: [`Portfolios`](Portfolios/Portfolios.md)

#### Defined in

[api/entities/Identity/index.ts:109](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2d3ac2aea/src/api/entities/Identity/index.ts#L109)

---

### uuid

• **uuid**: `string`

#### Inherited from

[Entity](../Entity/Entity.md).[uuid](../Entity/Entity.md#uuid)

#### Defined in

[api/entities/Entity.ts:46](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2d3ac2aea/src/api/entities/Entity.ts#L46)

## Methods

### areSecondaryAccountsFrozen

▸ **areSecondaryAccountsFrozen**(): `Promise`\<`boolean`\>

Check whether secondary Accounts are frozen

#### Returns

`Promise`\<`boolean`\>

**`Note`**

can be subscribed to

#### Defined in

[api/entities/Identity/index.ts:642](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2d3ac2aea/src/api/entities/Identity/index.ts#L642)

▸ **areSecondaryAccountsFrozen**(`callback`): `Promise`\<[`UnsubCallback`](../../../../modules/Types/Types.md#unsubcallback)\>

#### Parameters

| Name       | Type                                                                         |
| :--------- | :--------------------------------------------------------------------------- |
| `callback` | [`SubCallback`](../../../../modules/Types/Types.md#subcallback)\<`boolean`\> |

#### Returns

`Promise`\<[`UnsubCallback`](../../../../modules/Types/Types.md#unsubcallback)\>

#### Defined in

[api/entities/Identity/index.ts:643](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2d3ac2aea/src/api/entities/Identity/index.ts#L643)

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

#### Defined in

[api/entities/Identity/index.ts:385](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2d3ac2aea/src/api/entities/Identity/index.ts#L385)

---

### exists

▸ **exists**(): `Promise`\<`boolean`\>

Determine whether this Identity exists on chain

#### Returns

`Promise`\<`boolean`\>

**`Note`**

asset Identities aren't considered to exist for this check

#### Overrides

[Entity](../Entity/Entity.md).[exists](../Entity/Entity.md#exists)

#### Defined in

[api/entities/Identity/index.ts:808](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2d3ac2aea/src/api/entities/Identity/index.ts#L808)

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

#### Defined in

[api/entities/Identity/index.ts:179](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2d3ac2aea/src/api/entities/Identity/index.ts#L179)

▸ **getAssetBalance**(`args`, `callback`): `Promise`\<[`UnsubCallback`](../../../../modules/Types/Types.md#unsubcallback)\>

#### Parameters

| Name          | Type                                                                           |
| :------------ | :----------------------------------------------------------------------------- |
| `args`        | `Object`                                                                       |
| `args.ticker` | `string`                                                                       |
| `callback`    | [`SubCallback`](../../../../modules/Types/Types.md#subcallback)\<`BigNumber`\> |

#### Returns

`Promise`\<[`UnsubCallback`](../../../../modules/Types/Types.md#unsubcallback)\>

#### Defined in

[api/entities/Identity/index.ts:180](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2d3ac2aea/src/api/entities/Identity/index.ts#L180)

---

### getHeldAssets

▸ **getHeldAssets**(`opts?`): `Promise`\<[`ResultSet`](../../../../interfaces/Types/ResultSet/ResultSet.md) \<[`Asset`](../Asset/Asset.md)\>\>

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

#### Defined in

[api/entities/Identity/index.ts:343](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2d3ac2aea/src/api/entities/Identity/index.ts#L343)

---

### getHistoricalInstructions

▸ **getHistoricalInstructions**(): `Promise`\<[`HistoricInstruction`](../../../../modules/API/Entities/Venue/Types/Types.md#historicinstruction)[]\>

Retrieve all Instructions that have been associated with this Identity's DID

#### Returns

`Promise`\<[`HistoricInstruction`](../../../../modules/API/Entities/Venue/Types/Types.md#historicinstruction)[]\>

**`Note`**

uses the middleware V2

#### Defined in

[api/entities/Identity/index.ts:840](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2d3ac2aea/src/api/entities/Identity/index.ts#L840)

---

### getInstructions

▸ **getInstructions**(): `Promise`\<[`GroupedInstructions`](../../../../interfaces/Types/GroupedInstructions/GroupedInstructions.md)\>

Retrieve all Instructions where this Identity is a custodian of one or more portfolios in the legs,
grouped by status

#### Returns

`Promise`\<[`GroupedInstructions`](../../../../interfaces/Types/GroupedInstructions/GroupedInstructions.md)\>

#### Defined in

[api/entities/Identity/index.ts:465](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2d3ac2aea/src/api/entities/Identity/index.ts#L465)

---

### getInvolvedInstructions

▸ **getInvolvedInstructions**(): `Promise`\<[`GroupedInvolvedInstructions`](../../../../interfaces/Types/GroupedInvolvedInstructions/GroupedInvolvedInstructions.md)\>

Retrieve all Instructions where this Identity is a participant (owner/custodian),
grouped by the role of the Identity and Instruction status

#### Returns

`Promise`\<[`GroupedInvolvedInstructions`](../../../../interfaces/Types/GroupedInvolvedInstructions/GroupedInvolvedInstructions.md)\>

#### Defined in

[api/entities/Identity/index.ts:583](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2d3ac2aea/src/api/entities/Identity/index.ts#L583)

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

#### Defined in

[api/entities/Identity/index.ts:679](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2d3ac2aea/src/api/entities/Identity/index.ts#L679)

---

### getPrimaryAccount

▸ **getPrimaryAccount**(): `Promise`\<[`PermissionedAccount`](../../../../interfaces/Types/PermissionedAccount/PermissionedAccount.md)\>

Retrieve the primary Account associated with the Identity

#### Returns

`Promise`\<[`PermissionedAccount`](../../../../interfaces/Types/PermissionedAccount/PermissionedAccount.md)\>

**`Note`**

can be subscribed to

#### Defined in

[api/entities/Identity/index.ts:290](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2d3ac2aea/src/api/entities/Identity/index.ts#L290)

▸ **getPrimaryAccount**(`callback`): `Promise`\<[`UnsubCallback`](../../../../modules/Types/Types.md#unsubcallback)\>

#### Parameters

| Name       | Type                                                                                                                                                                 |
| :--------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `callback` | [`SubCallback`](../../../../modules/Types/Types.md#subcallback) \<[`PermissionedAccount`](../../../../interfaces/Types/PermissionedAccount/PermissionedAccount.md)\> |

#### Returns

`Promise`\<[`UnsubCallback`](../../../../modules/Types/Types.md#unsubcallback)\>

#### Defined in

[api/entities/Identity/index.ts:291](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2d3ac2aea/src/api/entities/Identity/index.ts#L291)

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

#### Defined in

[api/entities/Identity/index.ts:734](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2d3ac2aea/src/api/entities/Identity/index.ts#L734)

▸ **getSecondaryAccounts**(`callback`): `Promise`\<[`UnsubCallback`](../../../../modules/Types/Types.md#unsubcallback)\>

#### Parameters

| Name       | Type                                                                                                                                                                   |
| :--------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `callback` | [`SubCallback`](../../../../modules/Types/Types.md#subcallback) \<[`PermissionedAccount`](../../../../interfaces/Types/PermissionedAccount/PermissionedAccount.md)[]\> |

#### Returns

`Promise`\<[`UnsubCallback`](../../../../modules/Types/Types.md#unsubcallback)\>

#### Defined in

[api/entities/Identity/index.ts:738](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2d3ac2aea/src/api/entities/Identity/index.ts#L738)

▸ **getSecondaryAccounts**(`paginationOpts`, `callback`): `Promise`\<[`UnsubCallback`](../../../../modules/Types/Types.md#unsubcallback)\>

#### Parameters

| Name             | Type                                                                                                                                                                   |
| :--------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `paginationOpts` | [`PaginationOptions`](../../../../interfaces/Types/PaginationOptions/PaginationOptions.md)                                                                             |
| `callback`       | [`SubCallback`](../../../../modules/Types/Types.md#subcallback) \<[`PermissionedAccount`](../../../../interfaces/Types/PermissionedAccount/PermissionedAccount.md)[]\> |

#### Returns

`Promise`\<[`UnsubCallback`](../../../../modules/Types/Types.md#unsubcallback)\>

#### Defined in

[api/entities/Identity/index.ts:742](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2d3ac2aea/src/api/entities/Identity/index.ts#L742)

---

### getTrustingAssets

▸ **getTrustingAssets**(): `Promise`\<[`Asset`](../Asset/Asset.md)[]\>

Get the list of Assets for which this Identity is a trusted claim issuer

#### Returns

`Promise`\<[`Asset`](../Asset/Asset.md)[]\>

**`Note`**

uses the middlewareV2

#### Defined in

[api/entities/Identity/index.ts:409](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2d3ac2aea/src/api/entities/Identity/index.ts#L409)

---

### getVenues

▸ **getVenues**(): `Promise`\<[`Venue`](../Venue/Venue.md)[]\>

Retrieve all Venues created by this Identity

#### Returns

`Promise`\<[`Venue`](../Venue/Venue.md)[]\>

**`Note`**

can be subscribed to

#### Defined in

[api/entities/Identity/index.ts:428](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2d3ac2aea/src/api/entities/Identity/index.ts#L428)

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

#### Defined in

[api/entities/Identity/index.ts:131](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2d3ac2aea/src/api/entities/Identity/index.ts#L131)

---

### hasValidCdd

▸ **hasValidCdd**(): `Promise`\<`boolean`\>

Check whether this Identity has a valid CDD claim

#### Returns

`Promise`\<`boolean`\>

#### Defined in

[api/entities/Identity/index.ts:238](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2d3ac2aea/src/api/entities/Identity/index.ts#L238)

---

### isCddProvider

▸ **isCddProvider**(): `Promise`\<`boolean`\>

Check whether this Identity is a CDD provider

#### Returns

`Promise`\<`boolean`\>

#### Defined in

[api/entities/Identity/index.ts:271](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2d3ac2aea/src/api/entities/Identity/index.ts#L271)

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

[Entity](../Entity/Entity.md).[isEqual](../Entity/Entity.md#isequal)

#### Defined in

[api/entities/Entity.ts:61](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2d3ac2aea/src/api/entities/Entity.ts#L61)

---

### isGcMember

▸ **isGcMember**(): `Promise`\<`boolean`\>

Check whether this Identity is Governance Committee member

#### Returns

`Promise`\<`boolean`\>

#### Defined in

[api/entities/Identity/index.ts:254](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2d3ac2aea/src/api/entities/Identity/index.ts#L254)

---

### toHuman

▸ **toHuman**(): `string`

Return the Identity's DID

#### Returns

`string`

#### Overrides

[Entity](../Entity/Entity.md).[toHuman](../Entity/Entity.md#tohuman)

#### Defined in

[api/entities/Identity/index.ts:831](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2d3ac2aea/src/api/entities/Identity/index.ts#L831)

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

[Entity](../Entity/Entity.md).[generateUuid](../Entity/Entity.md#generateuuid)

#### Defined in

[api/entities/Entity.ts:14](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2d3ac2aea/src/api/entities/Entity.ts#L14)

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

[Entity](../Entity/Entity.md).[unserialize](../Entity/Entity.md#unserialize)

#### Defined in

[api/entities/Entity.ts:23](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2d3ac2aea/src/api/entities/Entity.ts#L23)
