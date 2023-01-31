---
id: "Identity"
title: "Class: Identity"
sidebar_label: "Identity"
---

# Class: Identity

[api/entities/Identity](../../../../modules/API/Entities/Identity/Identity.md).Identity

Represents an Identity in the Polymesh blockchain

## Hierarchy

- [`Entity`](../Entity/Entity.md)<[`UniqueIdentifiers`](../../../../interfaces/API/Entities/Identity/UniqueIdentifiers/UniqueIdentifiers.md), `string`\>

  ↳ **`Identity`**

  ↳↳ [`DefaultTrustedClaimIssuer`](../DefaultTrustedClaimIssuer/DefaultTrustedClaimIssuer.md)

## Properties

### assetPermissions

• **assetPermissions**: [`AssetPermissions`](AssetPermissions/AssetPermissions.md)

#### Defined in

[api/entities/Identity/index.ts:110](https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/api/entities/Identity/index.ts#L110)

___

### authorizations

• **authorizations**: [`IdentityAuthorizations`](IdentityAuthorizations/IdentityAuthorizations.md)

#### Defined in

[api/entities/Identity/index.ts:108](https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/api/entities/Identity/index.ts#L108)

___

### did

• **did**: `string`

Identity ID as stored in the blockchain

#### Defined in

[api/entities/Identity/index.ts:105](https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/api/entities/Identity/index.ts#L105)

___

### portfolios

• **portfolios**: [`Portfolios`](Portfolios/Portfolios.md)

#### Defined in

[api/entities/Identity/index.ts:109](https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/api/entities/Identity/index.ts#L109)

___

### uuid

• **uuid**: `string`

#### Inherited from

[Entity](../Entity/Entity.md).[uuid](../Entity/Entity.md#uuid)

#### Defined in

[api/entities/Entity.ts:46](https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/api/entities/Entity.ts#L46)

## Methods

### areSecondaryAccountsFrozen

▸ **areSecondaryAccountsFrozen**(): `Promise`<`boolean`\>

Check whether secondary Accounts are frozen

**`Note`**

can be subscribed to

#### Returns

`Promise`<`boolean`\>

▸ **areSecondaryAccountsFrozen**(`callback`): `Promise`<[`UnsubCallback`](../../../../modules/Types/Types.md#unsubcallback)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`SubCallback`](../../../../modules/Types/Types.md#subcallback)<`boolean`\> |

#### Returns

`Promise`<[`UnsubCallback`](../../../../modules/Types/Types.md#unsubcallback)\>

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

___

### exists

▸ **exists**(): `Promise`<`boolean`\>

Determine whether this Identity exists on chain

**`Note`**

asset Identities aren't considered to exist for this check

#### Returns

`Promise`<`boolean`\>

#### Overrides

[Entity](../Entity/Entity.md).[exists](../Entity/Entity.md#exists)

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

▸ **getAssetBalance**(`args`, `callback`): `Promise`<[`UnsubCallback`](../../../../modules/Types/Types.md#unsubcallback)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.ticker` | `string` |
| `callback` | [`SubCallback`](../../../../modules/Types/Types.md#subcallback)<`BigNumber`\> |

#### Returns

`Promise`<[`UnsubCallback`](../../../../modules/Types/Types.md#unsubcallback)\>

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

___

### getHistoricalInstructions

▸ **getHistoricalInstructions**(): `Promise`<[`HistoricInstruction`](../../../../modules/API/Entities/Venue/Types/Types.md#historicinstruction)[]\>

Retrieve all Instructions that have been associated with this Identity's DID

**`Note`**

uses the middleware V2

#### Returns

`Promise`<[`HistoricInstruction`](../../../../modules/API/Entities/Venue/Types/Types.md#historicinstruction)[]\>

___

### getInstructions

▸ **getInstructions**(): `Promise`<[`GroupedInstructions`](../../../../interfaces/Types/GroupedInstructions/GroupedInstructions.md)\>

Retrieve all Instructions where this Identity is a participant,
  grouped by status

#### Returns

`Promise`<[`GroupedInstructions`](../../../../interfaces/Types/GroupedInstructions/GroupedInstructions.md)\>

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

___

### getPrimaryAccount

▸ **getPrimaryAccount**(): `Promise`<[`PermissionedAccount`](../../../../interfaces/Types/PermissionedAccount/PermissionedAccount.md)\>

Retrieve the primary Account associated with the Identity

**`Note`**

can be subscribed to

#### Returns

`Promise`<[`PermissionedAccount`](../../../../interfaces/Types/PermissionedAccount/PermissionedAccount.md)\>

▸ **getPrimaryAccount**(`callback`): `Promise`<[`UnsubCallback`](../../../../modules/Types/Types.md#unsubcallback)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`SubCallback`](../../../../modules/Types/Types.md#subcallback)<[`PermissionedAccount`](../../../../interfaces/Types/PermissionedAccount/PermissionedAccount.md)\> |

#### Returns

`Promise`<[`UnsubCallback`](../../../../modules/Types/Types.md#unsubcallback)\>

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

▸ **getSecondaryAccounts**(`callback`): `Promise`<[`UnsubCallback`](../../../../modules/Types/Types.md#unsubcallback)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`SubCallback`](../../../../modules/Types/Types.md#subcallback)<[`PermissionedAccount`](../../../../interfaces/Types/PermissionedAccount/PermissionedAccount.md)[]\> |

#### Returns

`Promise`<[`UnsubCallback`](../../../../modules/Types/Types.md#unsubcallback)\>

▸ **getSecondaryAccounts**(`paginationOpts`, `callback`): `Promise`<[`UnsubCallback`](../../../../modules/Types/Types.md#unsubcallback)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `paginationOpts` | [`PaginationOptions`](../../../../interfaces/Types/PaginationOptions/PaginationOptions.md) |
| `callback` | [`SubCallback`](../../../../modules/Types/Types.md#subcallback)<[`PermissionedAccount`](../../../../interfaces/Types/PermissionedAccount/PermissionedAccount.md)[]\> |

#### Returns

`Promise`<[`UnsubCallback`](../../../../modules/Types/Types.md#unsubcallback)\>

___

### getTrustingAssets

▸ **getTrustingAssets**(): `Promise`<[`Asset`](../Asset/Asset.md)[]\>

Get the list of Assets for which this Identity is a trusted claim issuer

**`Note`**

uses the middleware

#### Returns

`Promise`<[`Asset`](../Asset/Asset.md)[]\>

___

### getTrustingAssetsV2

▸ **getTrustingAssetsV2**(): `Promise`<[`Asset`](../Asset/Asset.md)[]\>

Get the list of Assets for which this Identity is a trusted claim issuer

**`Note`**

uses the middlewareV2

#### Returns

`Promise`<[`Asset`](../Asset/Asset.md)[]\>

___

### getVenues

▸ **getVenues**(): `Promise`<[`Venue`](../Venue/Venue.md)[]\>

Retrieve all Venues created by this Identity

**`Note`**

can be subscribed to

#### Returns

`Promise`<[`Venue`](../Venue/Venue.md)[]\>

▸ **getVenues**(`callback`): `Promise`<[`UnsubCallback`](../../../../modules/Types/Types.md#unsubcallback)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`SubCallback`](../../../../modules/Types/Types.md#subcallback)<[`Venue`](../Venue/Venue.md)[]\> |

#### Returns

`Promise`<[`UnsubCallback`](../../../../modules/Types/Types.md#unsubcallback)\>

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

___

### hasValidCdd

▸ **hasValidCdd**(): `Promise`<`boolean`\>

Check whether this Identity has a valid CDD claim

#### Returns

`Promise`<`boolean`\>

___

### isCddProvider

▸ **isCddProvider**(): `Promise`<`boolean`\>

Check whether this Identity is a CDD provider

#### Returns

`Promise`<`boolean`\>

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

[Entity](../Entity/Entity.md).[isEqual](../Entity/Entity.md#isequal)

___

### isGcMember

▸ **isGcMember**(): `Promise`<`boolean`\>

Check whether this Identity is Governance Committee member

#### Returns

`Promise`<`boolean`\>

___

### toHuman

▸ **toHuman**(): `string`

Return the Identity's DID

#### Returns

`string`

#### Overrides

[Entity](../Entity/Entity.md).[toHuman](../Entity/Entity.md#tohuman)

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

[Entity](../Entity/Entity.md).[generateUuid](../Entity/Entity.md#generateuuid)

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

[Entity](../Entity/Entity.md).[unserialize](../Entity/Entity.md#unserialize)
