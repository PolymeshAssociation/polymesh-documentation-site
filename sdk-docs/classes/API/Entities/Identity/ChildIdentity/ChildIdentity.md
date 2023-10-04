---
id: "ChildIdentity"
title: "Class: ChildIdentity"
sidebar_label: "ChildIdentity"
---

[api/entities/Identity/ChildIdentity](../../../../../modules/API/Entities/Identity/ChildIdentity/ChildIdentity.md).ChildIdentity

Represents a child identity

## Hierarchy

- [`Identity`](../Identity.md)

  ↳ **`ChildIdentity`**

## Properties

### assetPermissions

• **assetPermissions**: [`AssetPermissions`](../AssetPermissions/AssetPermissions.md)

#### Inherited from

[Identity](../Identity.md).[assetPermissions](../Identity.md#assetpermissions)

#### Defined in

[api/entities/Identity/index.ts:115](https://github.com/PolymeshAssociation/polymesh-sdk/blob/de58d40fd/src/api/entities/Identity/index.ts#L115)

___

### authorizations

• **authorizations**: [`IdentityAuthorizations`](../IdentityAuthorizations/IdentityAuthorizations.md)

#### Inherited from

[Identity](../Identity.md).[authorizations](../Identity.md#authorizations)

#### Defined in

[api/entities/Identity/index.ts:113](https://github.com/PolymeshAssociation/polymesh-sdk/blob/de58d40fd/src/api/entities/Identity/index.ts#L113)

___

### did

• **did**: `string`

Identity ID as stored in the blockchain

#### Inherited from

[Identity](../Identity.md).[did](../Identity.md#did)

#### Defined in

[api/entities/Identity/index.ts:110](https://github.com/PolymeshAssociation/polymesh-sdk/blob/de58d40fd/src/api/entities/Identity/index.ts#L110)

___

### portfolios

• **portfolios**: [`Portfolios`](../Portfolios/Portfolios.md)

#### Inherited from

[Identity](../Identity.md).[portfolios](../Identity.md#portfolios)

#### Defined in

[api/entities/Identity/index.ts:114](https://github.com/PolymeshAssociation/polymesh-sdk/blob/de58d40fd/src/api/entities/Identity/index.ts#L114)

___

### uuid

• **uuid**: `string`

#### Inherited from

[Identity](../Identity.md).[uuid](../Identity.md#uuid)

#### Defined in

[api/entities/Entity.ts:46](https://github.com/PolymeshAssociation/polymesh-sdk/blob/de58d40fd/src/api/entities/Entity.ts#L46)

## Methods

### areSecondaryAccountsFrozen

▸ **areSecondaryAccountsFrozen**(): `Promise`<`boolean`\>

Check whether secondary Accounts are frozen

**`Note`**

 can be subscribed to

#### Returns

`Promise`<`boolean`\>

#### Inherited from

[Identity](../Identity.md).[areSecondaryAccountsFrozen](../Identity.md#aresecondaryaccountsfrozen)

▸ **areSecondaryAccountsFrozen**(`callback`): `Promise`<[`UnsubCallback`](../../../../../modules/Types/Types.md#unsubcallback)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`SubCallback`](../../../../../modules/Types/Types.md#subcallback)<`boolean`\> |

#### Returns

`Promise`<[`UnsubCallback`](../../../../../modules/Types/Types.md#unsubcallback)\>

#### Inherited from

[Identity](../Identity.md).[areSecondaryAccountsFrozen](../Identity.md#aresecondaryaccountsfrozen)

___

### checkRoles

▸ **checkRoles**(`roles`): `Promise`<[`CheckRolesResult`](../../../../../interfaces/Types/CheckRolesResult/CheckRolesResult.md)\>

Check whether this Identity possesses all specified roles

#### Parameters

| Name | Type |
| :------ | :------ |
| `roles` | [`Role`](../../../../../modules/Types/Types.md#role)[] |

#### Returns

`Promise`<[`CheckRolesResult`](../../../../../interfaces/Types/CheckRolesResult/CheckRolesResult.md)\>

#### Inherited from

[Identity](../Identity.md).[checkRoles](../Identity.md#checkroles)

___

### exists

▸ **exists**(): `Promise`<`boolean`\>

Determine whether this child Identity exists

**`Note`**

 asset Identities aren't considered to exist for this check

#### Returns

`Promise`<`boolean`\>

#### Overrides

[Identity](../Identity.md).[exists](../Identity.md#exists)

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

[Identity](../Identity.md).[getAssetBalance](../Identity.md#getassetbalance)

▸ **getAssetBalance**(`args`, `callback`): `Promise`<[`UnsubCallback`](../../../../../modules/Types/Types.md#unsubcallback)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.ticker` | `string` |
| `callback` | [`SubCallback`](../../../../../modules/Types/Types.md#subcallback)<`BigNumber`\> |

#### Returns

`Promise`<[`UnsubCallback`](../../../../../modules/Types/Types.md#unsubcallback)\>

#### Inherited from

[Identity](../Identity.md).[getAssetBalance](../Identity.md#getassetbalance)

___

### getHeldAssets

▸ **getHeldAssets**(`opts?`): `Promise`<[`ResultSet`](../../../../../interfaces/Types/ResultSet/ResultSet.md)<[`FungibleAsset`](../../Asset/Fungible/FungibleAsset.md)\>\>

Retrieve a list of all Assets which were held at one point by this Identity

**`Note`**

 uses the middlewareV2

**`Note`**

 supports pagination

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `Object` |
| `opts.order?` | [`AssetHoldersOrderBy`](../../../../../enums/Types/AssetHoldersOrderBy/AssetHoldersOrderBy.md) |
| `opts.size?` | `BigNumber` |
| `opts.start?` | `BigNumber` |

#### Returns

`Promise`<[`ResultSet`](../../../../../interfaces/Types/ResultSet/ResultSet.md)<[`FungibleAsset`](../../Asset/Fungible/FungibleAsset.md)\>\>

#### Inherited from

[Identity](../Identity.md).[getHeldAssets](../Identity.md#getheldassets)

___

### getHistoricalInstructions

▸ **getHistoricalInstructions**(): `Promise`<[`HistoricInstruction`](../../../../../modules/API/Entities/Venue/Types/Types.md#historicinstruction)[]\>

Retrieve all Instructions that have been associated with this Identity's DID

**`Note`**

 uses the middleware V2

#### Returns

`Promise`<[`HistoricInstruction`](../../../../../modules/API/Entities/Venue/Types/Types.md#historicinstruction)[]\>

#### Inherited from

[Identity](../Identity.md).[getHistoricalInstructions](../Identity.md#gethistoricalinstructions)

___

### getInstructions

▸ **getInstructions**(): `Promise`<[`GroupedInstructions`](../../../../../interfaces/Types/GroupedInstructions/GroupedInstructions.md)\>

Retrieve all Instructions where this Identity is a custodian of one or more portfolios in the legs,
  grouped by status

#### Returns

`Promise`<[`GroupedInstructions`](../../../../../interfaces/Types/GroupedInstructions/GroupedInstructions.md)\>

#### Inherited from

[Identity](../Identity.md).[getInstructions](../Identity.md#getinstructions)

___

### getInvolvedInstructions

▸ **getInvolvedInstructions**(): `Promise`<[`GroupedInvolvedInstructions`](../../../../../interfaces/Types/GroupedInvolvedInstructions/GroupedInvolvedInstructions.md)\>

Retrieve all Instructions where this Identity is a participant (owner/custodian),
  grouped by the role of the Identity and Instruction status

#### Returns

`Promise`<[`GroupedInvolvedInstructions`](../../../../../interfaces/Types/GroupedInvolvedInstructions/GroupedInvolvedInstructions.md)\>

#### Inherited from

[Identity](../Identity.md).[getInvolvedInstructions](../Identity.md#getinvolvedinstructions)

___

### getParentDid

▸ **getParentDid**(): `Promise`<``null`` \| [`Identity`](../Identity.md)\>

Returns the parent of this Identity (if any)

#### Returns

`Promise`<``null`` \| [`Identity`](../Identity.md)\>

___

### getPendingDistributions

▸ **getPendingDistributions**(): `Promise`<[`DistributionWithDetails`](../../../../../interfaces/Types/DistributionWithDetails/DistributionWithDetails.md)[]\>

Retrieve every Dividend Distribution for which this Identity is eligible and hasn't been paid

**`Note`**

 uses the middleware

**`Note`**

 this query can be potentially **SLOW** depending on which Assets this Identity has held

#### Returns

`Promise`<[`DistributionWithDetails`](../../../../../interfaces/Types/DistributionWithDetails/DistributionWithDetails.md)[]\>

#### Inherited from

[Identity](../Identity.md).[getPendingDistributions](../Identity.md#getpendingdistributions)

___

### getPrimaryAccount

▸ **getPrimaryAccount**(): `Promise`<[`PermissionedAccount`](../../../../../interfaces/Types/PermissionedAccount/PermissionedAccount.md)\>

Retrieve the primary Account associated with the Identity

**`Note`**

 can be subscribed to

#### Returns

`Promise`<[`PermissionedAccount`](../../../../../interfaces/Types/PermissionedAccount/PermissionedAccount.md)\>

#### Inherited from

[Identity](../Identity.md).[getPrimaryAccount](../Identity.md#getprimaryaccount)

▸ **getPrimaryAccount**(`callback`): `Promise`<[`UnsubCallback`](../../../../../modules/Types/Types.md#unsubcallback)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`SubCallback`](../../../../../modules/Types/Types.md#subcallback)<[`PermissionedAccount`](../../../../../interfaces/Types/PermissionedAccount/PermissionedAccount.md)\> |

#### Returns

`Promise`<[`UnsubCallback`](../../../../../modules/Types/Types.md#unsubcallback)\>

#### Inherited from

[Identity](../Identity.md).[getPrimaryAccount](../Identity.md#getprimaryaccount)

___

### getSecondaryAccounts

▸ **getSecondaryAccounts**(`paginationOpts?`): `Promise`<[`ResultSet`](../../../../../interfaces/Types/ResultSet/ResultSet.md)<[`PermissionedAccount`](../../../../../interfaces/Types/PermissionedAccount/PermissionedAccount.md)\>\>

Get the list of secondary Accounts related to the Identity

**`Note`**

 supports pagination

**`Note`**

 can be subscribed to

#### Parameters

| Name | Type |
| :------ | :------ |
| `paginationOpts?` | [`PaginationOptions`](../../../../../interfaces/Types/PaginationOptions/PaginationOptions.md) |

#### Returns

`Promise`<[`ResultSet`](../../../../../interfaces/Types/ResultSet/ResultSet.md)<[`PermissionedAccount`](../../../../../interfaces/Types/PermissionedAccount/PermissionedAccount.md)\>\>

#### Inherited from

[Identity](../Identity.md).[getSecondaryAccounts](../Identity.md#getsecondaryaccounts)

▸ **getSecondaryAccounts**(`callback`): `Promise`<[`UnsubCallback`](../../../../../modules/Types/Types.md#unsubcallback)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`SubCallback`](../../../../../modules/Types/Types.md#subcallback)<[`PermissionedAccount`](../../../../../interfaces/Types/PermissionedAccount/PermissionedAccount.md)[]\> |

#### Returns

`Promise`<[`UnsubCallback`](../../../../../modules/Types/Types.md#unsubcallback)\>

#### Inherited from

[Identity](../Identity.md).[getSecondaryAccounts](../Identity.md#getsecondaryaccounts)

▸ **getSecondaryAccounts**(`paginationOpts`, `callback`): `Promise`<[`UnsubCallback`](../../../../../modules/Types/Types.md#unsubcallback)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `paginationOpts` | [`PaginationOptions`](../../../../../interfaces/Types/PaginationOptions/PaginationOptions.md) |
| `callback` | [`SubCallback`](../../../../../modules/Types/Types.md#subcallback)<[`PermissionedAccount`](../../../../../interfaces/Types/PermissionedAccount/PermissionedAccount.md)[]\> |

#### Returns

`Promise`<[`UnsubCallback`](../../../../../modules/Types/Types.md#unsubcallback)\>

#### Inherited from

[Identity](../Identity.md).[getSecondaryAccounts](../Identity.md#getsecondaryaccounts)

___

### getTrustingAssets

▸ **getTrustingAssets**(): `Promise`<[`FungibleAsset`](../../Asset/Fungible/FungibleAsset.md)[]\>

Get the list of Assets for which this Identity is a trusted claim issuer

**`Note`**

 uses the middlewareV2

#### Returns

`Promise`<[`FungibleAsset`](../../Asset/Fungible/FungibleAsset.md)[]\>

#### Inherited from

[Identity](../Identity.md).[getTrustingAssets](../Identity.md#gettrustingassets)

___

### getVenues

▸ **getVenues**(): `Promise`<[`Venue`](../../Venue/Venue.md)[]\>

Retrieve all Venues created by this Identity

**`Note`**

 can be subscribed to

#### Returns

`Promise`<[`Venue`](../../Venue/Venue.md)[]\>

#### Inherited from

[Identity](../Identity.md).[getVenues](../Identity.md#getvenues)

___

### hasRole

▸ **hasRole**(`role`): `Promise`<`boolean`\>

Check whether this Identity possesses the specified Role

#### Parameters

| Name | Type |
| :------ | :------ |
| `role` | [`Role`](../../../../../modules/Types/Types.md#role) |

#### Returns

`Promise`<`boolean`\>

#### Inherited from

[Identity](../Identity.md).[hasRole](../Identity.md#hasrole)

___

### hasValidCdd

▸ **hasValidCdd**(): `Promise`<`boolean`\>

Check whether this Identity has a valid CDD claim

#### Returns

`Promise`<`boolean`\>

#### Inherited from

[Identity](../Identity.md).[hasValidCdd](../Identity.md#hasvalidcdd)

___

### isCddProvider

▸ **isCddProvider**(): `Promise`<`boolean`\>

Check whether this Identity is a CDD provider

#### Returns

`Promise`<`boolean`\>

#### Inherited from

[Identity](../Identity.md).[isCddProvider](../Identity.md#iscddprovider)

___

### isEqual

▸ **isEqual**(`entity`): `boolean`

Determine whether this Entity is the same as another one

#### Parameters

| Name | Type |
| :------ | :------ |
| `entity` | [`Entity`](../../Entity/Entity.md)<`unknown`, `unknown`\> |

#### Returns

`boolean`

#### Inherited from

[Identity](../Identity.md).[isEqual](../Identity.md#isequal)

___

### isGcMember

▸ **isGcMember**(): `Promise`<`boolean`\>

Check whether this Identity is Governance Committee member

#### Returns

`Promise`<`boolean`\>

#### Inherited from

[Identity](../Identity.md).[isGcMember](../Identity.md#isgcmember)

___

### toHuman

▸ **toHuman**(): `string`

Return the Identity's DID

#### Returns

`string`

#### Inherited from

[Identity](../Identity.md).[toHuman](../Identity.md#tohuman)

___

### unlinkChild

▸ **unlinkChild**(`args`, `opts?`): `Promise`<[`GenericPolymeshTransaction`](../../../../../modules/Types/Types.md#genericpolymeshtransaction)<`void`, `void`\>\>

Unlinks a child identity

**`Throws`**

 if
 - the `child` is not a child of this identity
 - the transaction signer is not the primary key of the parent identity

**`Note`**

 this method is of type [ProcedureMethod](../../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [unlinkChild.checkAuthorization](../../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`UnlinkChildParams`](../../../../../interfaces/API/Procedures/Types/UnlinkChildParams/UnlinkChildParams.md) |
| `opts?` | [`ProcedureOpts`](../../../../../interfaces/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`<[`GenericPolymeshTransaction`](../../../../../modules/Types/Types.md#genericpolymeshtransaction)<`void`, `void`\>\>

#### Inherited from

[Identity](../Identity.md).[unlinkChild](../Identity.md#unlinkchild)

___

### unlinkFromParent

▸ **unlinkFromParent**(`opts?`): `Promise`<[`GenericPolymeshTransaction`](../../../../../modules/Types/Types.md#genericpolymeshtransaction)<`void`, `void`\>\>

Unlinks this child identity from its parent

**`Throws`**

 if
 - this identity doesn't have a parent
 - the transaction signer is not the primary key of the child identity

**`Note`**

 this method is of type [NoArgsProcedureMethod](../../../../../interfaces/Types/NoArgsProcedureMethod/NoArgsProcedureMethod.md), which means you can call [unlinkFromParent.checkAuthorization](../../../../../interfaces/Types/NoArgsProcedureMethod/NoArgsProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`ProcedureOpts`](../../../../../interfaces/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`<[`GenericPolymeshTransaction`](../../../../../modules/Types/Types.md#genericpolymeshtransaction)<`void`, `void`\>\>

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

[Identity](../Identity.md).[generateUuid](../Identity.md#generateuuid)

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

[Identity](../Identity.md).[unserialize](../Identity.md#unserialize)
