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

[api/entities/Identity/index.ts:131](https://github.com/PolymeshAssociation/polymesh-sdk/blob/654b99c8d/src/api/entities/Identity/index.ts#L131)

___

### authorizations

• **authorizations**: [`IdentityAuthorizations`](../IdentityAuthorizations/IdentityAuthorizations.md)

#### Inherited from

[Identity](../Identity.md).[authorizations](../Identity.md#authorizations)

#### Defined in

[api/entities/Identity/index.ts:129](https://github.com/PolymeshAssociation/polymesh-sdk/blob/654b99c8d/src/api/entities/Identity/index.ts#L129)

___

### did

• **did**: `string`

Identity ID as stored in the blockchain

#### Inherited from

[Identity](../Identity.md).[did](../Identity.md#did)

#### Defined in

[api/entities/Identity/index.ts:126](https://github.com/PolymeshAssociation/polymesh-sdk/blob/654b99c8d/src/api/entities/Identity/index.ts#L126)

___

### portfolios

• **portfolios**: [`Portfolios`](../Portfolios/Portfolios.md)

#### Inherited from

[Identity](../Identity.md).[portfolios](../Identity.md#portfolios)

#### Defined in

[api/entities/Identity/index.ts:130](https://github.com/PolymeshAssociation/polymesh-sdk/blob/654b99c8d/src/api/entities/Identity/index.ts#L130)

___

### uuid

• **uuid**: `string`

#### Inherited from

[Identity](../Identity.md).[uuid](../Identity.md#uuid)

#### Defined in

[api/entities/Entity.ts:46](https://github.com/PolymeshAssociation/polymesh-sdk/blob/654b99c8d/src/api/entities/Entity.ts#L46)

## Methods

### areSecondaryAccountsFrozen

▸ **areSecondaryAccountsFrozen**(): `Promise`\<`boolean`\>

Check whether secondary Accounts are frozen

#### Returns

`Promise`\<`boolean`\>

**`Note`**

can be subscribed to, if connected to node using a web socket

#### Inherited from

[Identity](../Identity.md).[areSecondaryAccountsFrozen](../Identity.md#aresecondaryaccountsfrozen)

#### Defined in

[api/entities/Identity/index.ts:681](https://github.com/PolymeshAssociation/polymesh-sdk/blob/654b99c8d/src/api/entities/Identity/index.ts#L681)

▸ **areSecondaryAccountsFrozen**(`callback`): `Promise`\<[`UnsubCallback`](../../../../../modules/API/Entities/Types/Types.md#unsubcallback)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`SubCallback`](../../../../../modules/API/Entities/Types/Types.md#subcallback)\<`boolean`\> |

#### Returns

`Promise`\<[`UnsubCallback`](../../../../../modules/API/Entities/Types/Types.md#unsubcallback)\>

#### Inherited from

[Identity](../Identity.md).[areSecondaryAccountsFrozen](../Identity.md#aresecondaryaccountsfrozen)

#### Defined in

[api/entities/Identity/index.ts:682](https://github.com/PolymeshAssociation/polymesh-sdk/blob/654b99c8d/src/api/entities/Identity/index.ts#L682)

___

### checkRoles

▸ **checkRoles**(`roles`): `Promise`\<[`CheckRolesResult`](../../../../../interfaces/API/Entities/Types/CheckRolesResult/CheckRolesResult.md)\>

Check whether this Identity possesses all specified roles

#### Parameters

| Name | Type |
| :------ | :------ |
| `roles` | [`Role`](../../../../../modules/API/Procedures/Types/Types.md#role)[] |

#### Returns

`Promise`\<[`CheckRolesResult`](../../../../../interfaces/API/Entities/Types/CheckRolesResult/CheckRolesResult.md)\>

#### Inherited from

[Identity](../Identity.md).[checkRoles](../Identity.md#checkroles)

#### Defined in

[api/entities/Identity/index.ts:466](https://github.com/PolymeshAssociation/polymesh-sdk/blob/654b99c8d/src/api/entities/Identity/index.ts#L466)

___

### exists

▸ **exists**(): `Promise`\<`boolean`\>

Determine whether this child Identity exists

#### Returns

`Promise`\<`boolean`\>

**`Note`**

asset Identities aren't considered to exist for this check

#### Overrides

[Identity](../Identity.md).[exists](../Identity.md#exists)

#### Defined in

[api/entities/Identity/ChildIdentity.ts:67](https://github.com/PolymeshAssociation/polymesh-sdk/blob/654b99c8d/src/api/entities/Identity/ChildIdentity.ts#L67)

___

### getAssetBalance

▸ **getAssetBalance**(`args`): `Promise`\<`BigNumber`\>

Retrieve the balance of a particular Asset

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.ticker` | `string` |

#### Returns

`Promise`\<`BigNumber`\>

**`Note`**

can be subscribed to, if connected to node using a web socket

#### Inherited from

[Identity](../Identity.md).[getAssetBalance](../Identity.md#getassetbalance)

#### Defined in

[api/entities/Identity/index.ts:207](https://github.com/PolymeshAssociation/polymesh-sdk/blob/654b99c8d/src/api/entities/Identity/index.ts#L207)

▸ **getAssetBalance**(`args`, `callback`): `Promise`\<[`UnsubCallback`](../../../../../modules/API/Entities/Types/Types.md#unsubcallback)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.ticker` | `string` |
| `callback` | [`SubCallback`](../../../../../modules/API/Entities/Types/Types.md#subcallback)\<`BigNumber`\> |

#### Returns

`Promise`\<[`UnsubCallback`](../../../../../modules/API/Entities/Types/Types.md#unsubcallback)\>

#### Inherited from

[Identity](../Identity.md).[getAssetBalance](../Identity.md#getassetbalance)

#### Defined in

[api/entities/Identity/index.ts:208](https://github.com/PolymeshAssociation/polymesh-sdk/blob/654b99c8d/src/api/entities/Identity/index.ts#L208)

___

### getHeldAssets

▸ **getHeldAssets**(`opts?`): `Promise`\<[`ResultSet`](../../../../../interfaces/API/Entities/Types/ResultSet/ResultSet.md)\<[`FungibleAsset`](../../Asset/Fungible/FungibleAsset.md)\>\>

Retrieve a list of all Assets which were held at one point by this Identity

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `Object` |
| `opts.order?` | [`AssetHoldersOrderBy`](../../../../../enums/Types/AssetHoldersOrderBy/AssetHoldersOrderBy.md) |
| `opts.size?` | `BigNumber` |
| `opts.start?` | `BigNumber` |

#### Returns

`Promise`\<[`ResultSet`](../../../../../interfaces/API/Entities/Types/ResultSet/ResultSet.md)\<[`FungibleAsset`](../../Asset/Fungible/FungibleAsset.md)\>\>

**`Note`**

uses the middlewareV2

**`Note`**

supports pagination

#### Inherited from

[Identity](../Identity.md).[getHeldAssets](../Identity.md#getheldassets)

#### Defined in

[api/entities/Identity/index.ts:374](https://github.com/PolymeshAssociation/polymesh-sdk/blob/654b99c8d/src/api/entities/Identity/index.ts#L374)

___

### getHeldNfts

▸ **getHeldNfts**(`opts?`): `Promise`\<[`ResultSet`](../../../../../interfaces/API/Entities/Types/ResultSet/ResultSet.md)\<[`HeldNfts`](../../../../../interfaces/API/Entities/Asset/Types/HeldNfts/HeldNfts.md)\>\>

Retrieve a list of all NftCollections which were held at one point by this Identity

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `Object` |
| `opts.order?` | [`NftHoldersOrderBy`](../../../../../enums/Types/NftHoldersOrderBy/NftHoldersOrderBy.md) |
| `opts.size?` | `BigNumber` |
| `opts.start?` | `BigNumber` |

#### Returns

`Promise`\<[`ResultSet`](../../../../../interfaces/API/Entities/Types/ResultSet/ResultSet.md)\<[`HeldNfts`](../../../../../interfaces/API/Entities/Asset/Types/HeldNfts/HeldNfts.md)\>\>

**`Note`**

uses the middlewareV2

**`Note`**

supports pagination

#### Inherited from

[Identity](../Identity.md).[getHeldNfts](../Identity.md#getheldnfts)

#### Defined in

[api/entities/Identity/index.ts:419](https://github.com/PolymeshAssociation/polymesh-sdk/blob/654b99c8d/src/api/entities/Identity/index.ts#L419)

___

### getHistoricalInstructions

▸ **getHistoricalInstructions**(): `Promise`\<[`HistoricInstruction`](../../../../../modules/API/Entities/Venue/Types/Types.md#historicinstruction)[]\>

Retrieve all Instructions that have been associated with this Identity's DID

#### Returns

`Promise`\<[`HistoricInstruction`](../../../../../modules/API/Entities/Venue/Types/Types.md#historicinstruction)[]\>

**`Note`**

uses the middleware V2

#### Inherited from

[Identity](../Identity.md).[getHistoricalInstructions](../Identity.md#gethistoricalinstructions)

#### Defined in

[api/entities/Identity/index.ts:890](https://github.com/PolymeshAssociation/polymesh-sdk/blob/654b99c8d/src/api/entities/Identity/index.ts#L890)

___

### getInstructions

▸ **getInstructions**(): `Promise`\<[`GroupedInstructions`](../../../../../interfaces/API/Entities/Instruction/Types/GroupedInstructions/GroupedInstructions.md)\>

Retrieve all Instructions where this Identity is a custodian of one or more portfolios in the legs,
  grouped by status

#### Returns

`Promise`\<[`GroupedInstructions`](../../../../../interfaces/API/Entities/Instruction/Types/GroupedInstructions/GroupedInstructions.md)\>

#### Inherited from

[Identity](../Identity.md).[getInstructions](../Identity.md#getinstructions)

#### Defined in

[api/entities/Identity/index.ts:535](https://github.com/PolymeshAssociation/polymesh-sdk/blob/654b99c8d/src/api/entities/Identity/index.ts#L535)

___

### getInvolvedInstructions

▸ **getInvolvedInstructions**(): `Promise`\<[`GroupedInvolvedInstructions`](../../../../../interfaces/API/Entities/Instruction/Types/GroupedInvolvedInstructions/GroupedInvolvedInstructions.md)\>

Retrieve all Instructions where this Identity is a participant (owner/custodian),
  grouped by the role of the Identity and Instruction status

#### Returns

`Promise`\<[`GroupedInvolvedInstructions`](../../../../../interfaces/API/Entities/Instruction/Types/GroupedInvolvedInstructions/GroupedInvolvedInstructions.md)\>

#### Inherited from

[Identity](../Identity.md).[getInvolvedInstructions](../Identity.md#getinvolvedinstructions)

#### Defined in

[api/entities/Identity/index.ts:622](https://github.com/PolymeshAssociation/polymesh-sdk/blob/654b99c8d/src/api/entities/Identity/index.ts#L622)

___

### getMultiSigSigners

▸ **getMultiSigSigners**(): `Promise`\<[`MultiSigSigners`](../../../../../interfaces/API/Entities/Account/MultiSig/Types/MultiSigSigners/MultiSigSigners.md)[]\>

Returns the list of MultiSig accounts linked with this Identity along with the signatories

#### Returns

`Promise`\<[`MultiSigSigners`](../../../../../interfaces/API/Entities/Account/MultiSig/Types/MultiSigSigners/MultiSigSigners.md)[]\>

**`Note`**

this query can be potentially **SLOW** depending on the number of MultiSigs present on the chain

#### Inherited from

[Identity](../Identity.md).[getMultiSigSigners](../Identity.md#getmultisigsigners)

#### Defined in

[api/entities/Identity/index.ts:1025](https://github.com/PolymeshAssociation/polymesh-sdk/blob/654b99c8d/src/api/entities/Identity/index.ts#L1025)

___

### getParentDid

▸ **getParentDid**(): `Promise`\<``null`` \| [`Identity`](../Identity.md)\>

Returns the parent of this Identity (if any)

#### Returns

`Promise`\<``null`` \| [`Identity`](../Identity.md)\>

#### Defined in

[api/entities/Identity/ChildIdentity.ts:31](https://github.com/PolymeshAssociation/polymesh-sdk/blob/654b99c8d/src/api/entities/Identity/ChildIdentity.ts#L31)

___

### getPendingDistributions

▸ **getPendingDistributions**(): `Promise`\<[`DistributionWithDetails`](../../../../../interfaces/API/Entities/Types/DistributionWithDetails/DistributionWithDetails.md)[]\>

Retrieve every Dividend Distribution for which this Identity is eligible and hasn't been paid

#### Returns

`Promise`\<[`DistributionWithDetails`](../../../../../interfaces/API/Entities/Types/DistributionWithDetails/DistributionWithDetails.md)[]\>

**`Note`**

uses the middleware

**`Note`**

this query can be potentially **SLOW** depending on which Assets this Identity has held

#### Inherited from

[Identity](../Identity.md).[getPendingDistributions](../Identity.md#getpendingdistributions)

#### Defined in

[api/entities/Identity/index.ts:720](https://github.com/PolymeshAssociation/polymesh-sdk/blob/654b99c8d/src/api/entities/Identity/index.ts#L720)

___

### getPrimaryAccount

▸ **getPrimaryAccount**(): `Promise`\<[`PermissionedAccount`](../../../../../interfaces/API/Entities/Types/PermissionedAccount/PermissionedAccount.md)\>

Retrieve the primary Account associated with the Identity

#### Returns

`Promise`\<[`PermissionedAccount`](../../../../../interfaces/API/Entities/Types/PermissionedAccount/PermissionedAccount.md)\>

**`Note`**

can be subscribed to, if connected to node using a web socket

#### Inherited from

[Identity](../Identity.md).[getPrimaryAccount](../Identity.md#getprimaryaccount)

#### Defined in

[api/entities/Identity/index.ts:310](https://github.com/PolymeshAssociation/polymesh-sdk/blob/654b99c8d/src/api/entities/Identity/index.ts#L310)

▸ **getPrimaryAccount**(`callback`): `Promise`\<[`UnsubCallback`](../../../../../modules/API/Entities/Types/Types.md#unsubcallback)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`SubCallback`](../../../../../modules/API/Entities/Types/Types.md#subcallback)\<[`PermissionedAccount`](../../../../../interfaces/API/Entities/Types/PermissionedAccount/PermissionedAccount.md)\> |

#### Returns

`Promise`\<[`UnsubCallback`](../../../../../modules/API/Entities/Types/Types.md#unsubcallback)\>

#### Inherited from

[Identity](../Identity.md).[getPrimaryAccount](../Identity.md#getprimaryaccount)

#### Defined in

[api/entities/Identity/index.ts:311](https://github.com/PolymeshAssociation/polymesh-sdk/blob/654b99c8d/src/api/entities/Identity/index.ts#L311)

___

### getSecondaryAccounts

▸ **getSecondaryAccounts**(`paginationOpts?`): `Promise`\<[`ResultSet`](../../../../../interfaces/API/Entities/Types/ResultSet/ResultSet.md)\<[`PermissionedAccount`](../../../../../interfaces/API/Entities/Types/PermissionedAccount/PermissionedAccount.md)\>\>

Get the list of secondary Accounts related to the Identity

#### Parameters

| Name | Type |
| :------ | :------ |
| `paginationOpts?` | [`PaginationOptions`](../../../../../interfaces/API/Entities/Types/PaginationOptions/PaginationOptions.md) |

#### Returns

`Promise`\<[`ResultSet`](../../../../../interfaces/API/Entities/Types/ResultSet/ResultSet.md)\<[`PermissionedAccount`](../../../../../interfaces/API/Entities/Types/PermissionedAccount/PermissionedAccount.md)\>\>

**`Note`**

supports pagination

**`Note`**

can be subscribed to, if connected to node using a web socket

#### Inherited from

[Identity](../Identity.md).[getSecondaryAccounts](../Identity.md#getsecondaryaccounts)

#### Defined in

[api/entities/Identity/index.ts:775](https://github.com/PolymeshAssociation/polymesh-sdk/blob/654b99c8d/src/api/entities/Identity/index.ts#L775)

▸ **getSecondaryAccounts**(`callback`): `Promise`\<[`UnsubCallback`](../../../../../modules/API/Entities/Types/Types.md#unsubcallback)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`SubCallback`](../../../../../modules/API/Entities/Types/Types.md#subcallback)\<[`PermissionedAccount`](../../../../../interfaces/API/Entities/Types/PermissionedAccount/PermissionedAccount.md)[]\> |

#### Returns

`Promise`\<[`UnsubCallback`](../../../../../modules/API/Entities/Types/Types.md#unsubcallback)\>

#### Inherited from

[Identity](../Identity.md).[getSecondaryAccounts](../Identity.md#getsecondaryaccounts)

#### Defined in

[api/entities/Identity/index.ts:779](https://github.com/PolymeshAssociation/polymesh-sdk/blob/654b99c8d/src/api/entities/Identity/index.ts#L779)

▸ **getSecondaryAccounts**(`paginationOpts`, `callback`): `Promise`\<[`UnsubCallback`](../../../../../modules/API/Entities/Types/Types.md#unsubcallback)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `paginationOpts` | [`PaginationOptions`](../../../../../interfaces/API/Entities/Types/PaginationOptions/PaginationOptions.md) |
| `callback` | [`SubCallback`](../../../../../modules/API/Entities/Types/Types.md#subcallback)\<[`PermissionedAccount`](../../../../../interfaces/API/Entities/Types/PermissionedAccount/PermissionedAccount.md)[]\> |

#### Returns

`Promise`\<[`UnsubCallback`](../../../../../modules/API/Entities/Types/Types.md#unsubcallback)\>

#### Inherited from

[Identity](../Identity.md).[getSecondaryAccounts](../Identity.md#getsecondaryaccounts)

#### Defined in

[api/entities/Identity/index.ts:783](https://github.com/PolymeshAssociation/polymesh-sdk/blob/654b99c8d/src/api/entities/Identity/index.ts#L783)

___

### getTrustingAssets

▸ **getTrustingAssets**(): `Promise`\<[`FungibleAsset`](../../Asset/Fungible/FungibleAsset.md)[]\>

Get the list of Assets for which this Identity is a trusted claim issuer

#### Returns

`Promise`\<[`FungibleAsset`](../../Asset/Fungible/FungibleAsset.md)[]\>

**`Note`**

uses the middlewareV2

#### Inherited from

[Identity](../Identity.md).[getTrustingAssets](../Identity.md#gettrustingassets)

#### Defined in

[api/entities/Identity/index.ts:490](https://github.com/PolymeshAssociation/polymesh-sdk/blob/654b99c8d/src/api/entities/Identity/index.ts#L490)

___

### getVenues

▸ **getVenues**(): `Promise`\<[`Venue`](../../Venue/Venue.md)[]\>

Retrieve all Venues created by this Identity

#### Returns

`Promise`\<[`Venue`](../../Venue/Venue.md)[]\>

#### Inherited from

[Identity](../Identity.md).[getVenues](../Identity.md#getvenues)

#### Defined in

[api/entities/Identity/index.ts:507](https://github.com/PolymeshAssociation/polymesh-sdk/blob/654b99c8d/src/api/entities/Identity/index.ts#L507)

___

### hasRole

▸ **hasRole**(`role`): `Promise`\<`boolean`\>

Check whether this Identity possesses the specified Role

#### Parameters

| Name | Type |
| :------ | :------ |
| `role` | [`Role`](../../../../../modules/API/Procedures/Types/Types.md#role) |

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

[Identity](../Identity.md).[hasRole](../Identity.md#hasrole)

#### Defined in

[api/entities/Identity/index.ts:159](https://github.com/PolymeshAssociation/polymesh-sdk/blob/654b99c8d/src/api/entities/Identity/index.ts#L159)

___

### hasValidCdd

▸ **hasValidCdd**(): `Promise`\<`boolean`\>

Check whether this Identity has a valid CDD claim

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

[Identity](../Identity.md).[hasValidCdd](../Identity.md#hasvalidcdd)

#### Defined in

[api/entities/Identity/index.ts:258](https://github.com/PolymeshAssociation/polymesh-sdk/blob/654b99c8d/src/api/entities/Identity/index.ts#L258)

___

### isAssetPreApproved

▸ **isAssetPreApproved**(`asset`): `Promise`\<`boolean`\>

Returns whether or not this Identity has pre-approved a particular asset

#### Parameters

| Name | Type |
| :------ | :------ |
| `asset` | `string` \| [`BaseAsset`](../../Asset/Base/BaseAsset/BaseAsset.md) |

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

[Identity](../Identity.md).[isAssetPreApproved](../Identity.md#isassetpreapproved)

#### Defined in

[api/entities/Identity/index.ts:998](https://github.com/PolymeshAssociation/polymesh-sdk/blob/654b99c8d/src/api/entities/Identity/index.ts#L998)

___

### isCddProvider

▸ **isCddProvider**(): `Promise`\<`boolean`\>

Check whether this Identity is a CDD provider

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

[Identity](../Identity.md).[isCddProvider](../Identity.md#iscddprovider)

#### Defined in

[api/entities/Identity/index.ts:291](https://github.com/PolymeshAssociation/polymesh-sdk/blob/654b99c8d/src/api/entities/Identity/index.ts#L291)

___

### isChild

▸ **isChild**(): `Promise`\<`boolean`\>

Check whether this Identity is a child Identity

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

[Identity](../Identity.md).[isChild](../Identity.md#ischild)

#### Defined in

[api/entities/Identity/index.ts:951](https://github.com/PolymeshAssociation/polymesh-sdk/blob/654b99c8d/src/api/entities/Identity/index.ts#L951)

___

### isEqual

▸ **isEqual**(`entity`): `boolean`

Determine whether this Entity is the same as another one

#### Parameters

| Name | Type |
| :------ | :------ |
| `entity` | [`Entity`](../../Entity/Entity.md)\<`unknown`, `unknown`\> |

#### Returns

`boolean`

#### Inherited from

[Identity](../Identity.md).[isEqual](../Identity.md#isequal)

#### Defined in

[api/entities/Entity.ts:61](https://github.com/PolymeshAssociation/polymesh-sdk/blob/654b99c8d/src/api/entities/Entity.ts#L61)

___

### isGcMember

▸ **isGcMember**(): `Promise`\<`boolean`\>

Check whether this Identity is Governance Committee member

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

[Identity](../Identity.md).[isGcMember](../Identity.md#isgcmember)

#### Defined in

[api/entities/Identity/index.ts:274](https://github.com/PolymeshAssociation/polymesh-sdk/blob/654b99c8d/src/api/entities/Identity/index.ts#L274)

___

### preApprovedAssets

▸ **preApprovedAssets**(`paginationOpts?`): `Promise`\<[`ResultSet`](../../../../../interfaces/API/Entities/Types/ResultSet/ResultSet.md)\<[`Asset`](../../../../../modules/API/Entities/Asset/Types/Types.md#asset)\>\>

Returns a list of all assets this Identity has pre-approved. These assets will not require affirmation when being received in settlements

#### Parameters

| Name | Type |
| :------ | :------ |
| `paginationOpts?` | [`PaginationOptions`](../../../../../interfaces/API/Entities/Types/PaginationOptions/PaginationOptions.md) |

#### Returns

`Promise`\<[`ResultSet`](../../../../../interfaces/API/Entities/Types/ResultSet/ResultSet.md)\<[`Asset`](../../../../../modules/API/Entities/Asset/Types/Types.md#asset)\>\>

#### Inherited from

[Identity](../Identity.md).[preApprovedAssets](../Identity.md#preapprovedassets)

#### Defined in

[api/entities/Identity/index.ts:962](https://github.com/PolymeshAssociation/polymesh-sdk/blob/654b99c8d/src/api/entities/Identity/index.ts#L962)

___

### toHuman

▸ **toHuman**(): `string`

Return the Identity's DID

#### Returns

`string`

#### Inherited from

[Identity](../Identity.md).[toHuman](../Identity.md#tohuman)

#### Defined in

[api/entities/Identity/index.ts:881](https://github.com/PolymeshAssociation/polymesh-sdk/blob/654b99c8d/src/api/entities/Identity/index.ts#L881)

___

### unlinkChild

▸ **unlinkChild**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

Unlinks a child identity

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`UnlinkChildParams`](../../../../../interfaces/API/Procedures/Types/UnlinkChildParams/UnlinkChildParams.md) |
| `opts?` | [`ProcedureOpts`](../../../../../interfaces/API/Procedures/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

**`Throws`**

if
 - the `child` is not a child of this identity
 - the transaction signer is not the primary key of the parent identity

**`Note`**

this method is of type [ProcedureMethod](../../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [unlinkChild.checkAuthorization](../../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Inherited from

[Identity](../Identity.md).[unlinkChild](../Identity.md#unlinkchild)

#### Defined in

[api/entities/Identity/index.ts:944](https://github.com/PolymeshAssociation/polymesh-sdk/blob/654b99c8d/src/api/entities/Identity/index.ts#L944)

___

### unlinkFromParent

▸ **unlinkFromParent**(`opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

Unlinks this child identity from its parent

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`ProcedureOpts`](../../../../../interfaces/API/Procedures/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

**`Throws`**

if
 - this identity doesn't have a parent
 - the transaction signer is not the primary key of the child identity

**`Note`**

this method is of type [NoArgsProcedureMethod](../../../../../interfaces/API/Procedures/Types/NoArgsProcedureMethod/NoArgsProcedureMethod.md), which means you can call [unlinkFromParent.checkAuthorization](../../../../../interfaces/API/Procedures/Types/NoArgsProcedureMethod/NoArgsProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/entities/Identity/ChildIdentity.ts:83](https://github.com/PolymeshAssociation/polymesh-sdk/blob/654b99c8d/src/api/entities/Identity/ChildIdentity.ts#L83)

___

### generateUuid

▸ `Static` **generateUuid**\<`Identifiers`\>(`identifiers`): `string`

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

#### Defined in

[api/entities/Entity.ts:14](https://github.com/PolymeshAssociation/polymesh-sdk/blob/654b99c8d/src/api/entities/Entity.ts#L14)

___

### unserialize

▸ `Static` **unserialize**\<`Identifiers`\>(`serialized`): `Identifiers`

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

#### Defined in

[api/entities/Entity.ts:23](https://github.com/PolymeshAssociation/polymesh-sdk/blob/654b99c8d/src/api/entities/Entity.ts#L23)
