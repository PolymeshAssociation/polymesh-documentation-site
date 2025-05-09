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

[api/entities/Identity/index.ts:128](https://github.com/PolymeshAssociation/polymesh-sdk/blob/995f17653/src/api/entities/Identity/index.ts#L128)

___

### authorizations

• **authorizations**: [`IdentityAuthorizations`](../IdentityAuthorizations/IdentityAuthorizations.md)

#### Inherited from

[Identity](../Identity.md).[authorizations](../Identity.md#authorizations)

#### Defined in

[api/entities/Identity/index.ts:126](https://github.com/PolymeshAssociation/polymesh-sdk/blob/995f17653/src/api/entities/Identity/index.ts#L126)

___

### did

• **did**: `string`

Identity ID as stored in the blockchain

#### Inherited from

[Identity](../Identity.md).[did](../Identity.md#did)

#### Defined in

[api/entities/Identity/index.ts:123](https://github.com/PolymeshAssociation/polymesh-sdk/blob/995f17653/src/api/entities/Identity/index.ts#L123)

___

### portfolios

• **portfolios**: [`Portfolios`](../Portfolios/Portfolios.md)

#### Inherited from

[Identity](../Identity.md).[portfolios](../Identity.md#portfolios)

#### Defined in

[api/entities/Identity/index.ts:127](https://github.com/PolymeshAssociation/polymesh-sdk/blob/995f17653/src/api/entities/Identity/index.ts#L127)

___

### uuid

• **uuid**: `string`

#### Inherited from

[Identity](../Identity.md).[uuid](../Identity.md#uuid)

#### Defined in

[api/entities/Entity.ts:46](https://github.com/PolymeshAssociation/polymesh-sdk/blob/995f17653/src/api/entities/Entity.ts#L46)

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

[api/entities/Identity/index.ts:700](https://github.com/PolymeshAssociation/polymesh-sdk/blob/995f17653/src/api/entities/Identity/index.ts#L700)

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

[api/entities/Identity/index.ts:701](https://github.com/PolymeshAssociation/polymesh-sdk/blob/995f17653/src/api/entities/Identity/index.ts#L701)

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

[api/entities/Identity/index.ts:483](https://github.com/PolymeshAssociation/polymesh-sdk/blob/995f17653/src/api/entities/Identity/index.ts#L483)

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

[api/entities/Identity/ChildIdentity.ts:67](https://github.com/PolymeshAssociation/polymesh-sdk/blob/995f17653/src/api/entities/Identity/ChildIdentity.ts#L67)

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

[api/entities/Identity/index.ts:204](https://github.com/PolymeshAssociation/polymesh-sdk/blob/995f17653/src/api/entities/Identity/index.ts#L204)

▸ **getAssetBalance**(`args`): `Promise`\<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.assetId` | `string` |

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

[Identity](../Identity.md).[getAssetBalance](../Identity.md#getassetbalance)

#### Defined in

[api/entities/Identity/index.ts:205](https://github.com/PolymeshAssociation/polymesh-sdk/blob/995f17653/src/api/entities/Identity/index.ts#L205)

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

[api/entities/Identity/index.ts:206](https://github.com/PolymeshAssociation/polymesh-sdk/blob/995f17653/src/api/entities/Identity/index.ts#L206)

▸ **getAssetBalance**(`args`, `callback`): `Promise`\<[`UnsubCallback`](../../../../../modules/API/Entities/Types/Types.md#unsubcallback)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.assetId` | `string` |
| `callback` | [`SubCallback`](../../../../../modules/API/Entities/Types/Types.md#subcallback)\<`BigNumber`\> |

#### Returns

`Promise`\<[`UnsubCallback`](../../../../../modules/API/Entities/Types/Types.md#unsubcallback)\>

#### Inherited from

[Identity](../Identity.md).[getAssetBalance](../Identity.md#getassetbalance)

#### Defined in

[api/entities/Identity/index.ts:211](https://github.com/PolymeshAssociation/polymesh-sdk/blob/995f17653/src/api/entities/Identity/index.ts#L211)

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

[api/entities/Identity/index.ts:378](https://github.com/PolymeshAssociation/polymesh-sdk/blob/995f17653/src/api/entities/Identity/index.ts#L378)

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

[api/entities/Identity/index.ts:425](https://github.com/PolymeshAssociation/polymesh-sdk/blob/995f17653/src/api/entities/Identity/index.ts#L425)

___

### getHistoricalInstructions

▸ **getHistoricalInstructions**(`filter?`): `Promise`\<[`HistoricInstruction`](../../../../../modules/API/Entities/Venue/Types/Types.md#historicinstruction)[]\>

Retrieve all Instructions that have been associated with this Identity's DID

#### Parameters

| Name | Type |
| :------ | :------ |
| `filter?` | `Omit`\<[`HistoricalInstructionFilters`](../../../../../interfaces/API/Client/Types/HistoricalInstructionFilters/HistoricalInstructionFilters.md), ``"identity"``\> |

#### Returns

`Promise`\<[`HistoricInstruction`](../../../../../modules/API/Entities/Venue/Types/Types.md#historicinstruction)[]\>

**`Note`**

uses the middleware V2

**`Note`**

supports pagination

#### Inherited from

[Identity](../Identity.md).[getHistoricalInstructions](../Identity.md#gethistoricalinstructions)

#### Defined in

[api/entities/Identity/index.ts:909](https://github.com/PolymeshAssociation/polymesh-sdk/blob/995f17653/src/api/entities/Identity/index.ts#L909)

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

[api/entities/Identity/index.ts:554](https://github.com/PolymeshAssociation/polymesh-sdk/blob/995f17653/src/api/entities/Identity/index.ts#L554)

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

[api/entities/Identity/index.ts:641](https://github.com/PolymeshAssociation/polymesh-sdk/blob/995f17653/src/api/entities/Identity/index.ts#L641)

___

### getMultiSigSigners

▸ **getMultiSigSigners**(): `Promise`\<[`MultiSigSigners`](../../../../../interfaces/API/Entities/Account/MultiSig/Types/MultiSigSigners/MultiSigSigners.md)[]\>

Returns the list of MultiSig accounts along with their signatories this identity has responsibility for.
The roles possible are:
- Admin: The identity is able to unilaterally modify the MultiSig properties, such as the signers and signatures required for a proposal
- Payer: The identity's primary key will be deducted any POLYX fees the MultiSig may incur

#### Returns

`Promise`\<[`MultiSigSigners`](../../../../../interfaces/API/Entities/Account/MultiSig/Types/MultiSigSigners/MultiSigSigners.md)[]\>

**`Note`**

this query can be potentially **SLOW** depending on the number of MultiSigs present on the chain

#### Inherited from

[Identity](../Identity.md).[getMultiSigSigners](../Identity.md#getmultisigsigners)

#### Defined in

[api/entities/Identity/index.ts:1046](https://github.com/PolymeshAssociation/polymesh-sdk/blob/995f17653/src/api/entities/Identity/index.ts#L1046)

___

### getOffChainAuthorizationNonce

▸ **getOffChainAuthorizationNonce**(): `Promise`\<`BigNumber`\>

Returns the off chain authorization nonce for this Identity

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

[Identity](../Identity.md).[getOffChainAuthorizationNonce](../Identity.md#getoffchainauthorizationnonce)

#### Defined in

[api/entities/Identity/index.ts:1124](https://github.com/PolymeshAssociation/polymesh-sdk/blob/995f17653/src/api/entities/Identity/index.ts#L1124)

___

### getParentDid

▸ **getParentDid**(): `Promise`\<``null`` \| [`Identity`](../Identity.md)\>

Returns the parent of this Identity (if any)

#### Returns

`Promise`\<``null`` \| [`Identity`](../Identity.md)\>

#### Defined in

[api/entities/Identity/ChildIdentity.ts:31](https://github.com/PolymeshAssociation/polymesh-sdk/blob/995f17653/src/api/entities/Identity/ChildIdentity.ts#L31)

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

[api/entities/Identity/index.ts:739](https://github.com/PolymeshAssociation/polymesh-sdk/blob/995f17653/src/api/entities/Identity/index.ts#L739)

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

[api/entities/Identity/index.ts:314](https://github.com/PolymeshAssociation/polymesh-sdk/blob/995f17653/src/api/entities/Identity/index.ts#L314)

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

[api/entities/Identity/index.ts:315](https://github.com/PolymeshAssociation/polymesh-sdk/blob/995f17653/src/api/entities/Identity/index.ts#L315)

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

[api/entities/Identity/index.ts:792](https://github.com/PolymeshAssociation/polymesh-sdk/blob/995f17653/src/api/entities/Identity/index.ts#L792)

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

[api/entities/Identity/index.ts:796](https://github.com/PolymeshAssociation/polymesh-sdk/blob/995f17653/src/api/entities/Identity/index.ts#L796)

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

[api/entities/Identity/index.ts:800](https://github.com/PolymeshAssociation/polymesh-sdk/blob/995f17653/src/api/entities/Identity/index.ts#L800)

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

[api/entities/Identity/index.ts:507](https://github.com/PolymeshAssociation/polymesh-sdk/blob/995f17653/src/api/entities/Identity/index.ts#L507)

___

### getVenues

▸ **getVenues**(): `Promise`\<[`Venue`](../../Venue/Venue.md)[]\>

Retrieve all Venues created by this Identity

#### Returns

`Promise`\<[`Venue`](../../Venue/Venue.md)[]\>

#### Inherited from

[Identity](../Identity.md).[getVenues](../Identity.md#getvenues)

#### Defined in

[api/entities/Identity/index.ts:526](https://github.com/PolymeshAssociation/polymesh-sdk/blob/995f17653/src/api/entities/Identity/index.ts#L526)

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

[api/entities/Identity/index.ts:156](https://github.com/PolymeshAssociation/polymesh-sdk/blob/995f17653/src/api/entities/Identity/index.ts#L156)

___

### hasValidCdd

▸ **hasValidCdd**(): `Promise`\<`boolean`\>

Check whether this Identity has a valid CDD claim

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

[Identity](../Identity.md).[hasValidCdd](../Identity.md#hasvalidcdd)

#### Defined in

[api/entities/Identity/index.ts:262](https://github.com/PolymeshAssociation/polymesh-sdk/blob/995f17653/src/api/entities/Identity/index.ts#L262)

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

[api/entities/Identity/index.ts:1018](https://github.com/PolymeshAssociation/polymesh-sdk/blob/995f17653/src/api/entities/Identity/index.ts#L1018)

___

### isCddProvider

▸ **isCddProvider**(): `Promise`\<`boolean`\>

Check whether this Identity is a CDD provider

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

[Identity](../Identity.md).[isCddProvider](../Identity.md#iscddprovider)

#### Defined in

[api/entities/Identity/index.ts:295](https://github.com/PolymeshAssociation/polymesh-sdk/blob/995f17653/src/api/entities/Identity/index.ts#L295)

___

### isChild

▸ **isChild**(): `Promise`\<`boolean`\>

Check whether this Identity is a child Identity

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

[Identity](../Identity.md).[isChild](../Identity.md#ischild)

#### Defined in

[api/entities/Identity/index.ts:973](https://github.com/PolymeshAssociation/polymesh-sdk/blob/995f17653/src/api/entities/Identity/index.ts#L973)

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

[api/entities/Entity.ts:61](https://github.com/PolymeshAssociation/polymesh-sdk/blob/995f17653/src/api/entities/Entity.ts#L61)

___

### isGcMember

▸ **isGcMember**(): `Promise`\<`boolean`\>

Check whether this Identity is Governance Committee member

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

[Identity](../Identity.md).[isGcMember](../Identity.md#isgcmember)

#### Defined in

[api/entities/Identity/index.ts:278](https://github.com/PolymeshAssociation/polymesh-sdk/blob/995f17653/src/api/entities/Identity/index.ts#L278)

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

[api/entities/Identity/index.ts:984](https://github.com/PolymeshAssociation/polymesh-sdk/blob/995f17653/src/api/entities/Identity/index.ts#L984)

___

### toHuman

▸ **toHuman**(): `string`

Return the Identity's DID

#### Returns

`string`

#### Inherited from

[Identity](../Identity.md).[toHuman](../Identity.md#tohuman)

#### Defined in

[api/entities/Identity/index.ts:898](https://github.com/PolymeshAssociation/polymesh-sdk/blob/995f17653/src/api/entities/Identity/index.ts#L898)

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

[api/entities/Identity/index.ts:966](https://github.com/PolymeshAssociation/polymesh-sdk/blob/995f17653/src/api/entities/Identity/index.ts#L966)

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

[api/entities/Identity/ChildIdentity.ts:83](https://github.com/PolymeshAssociation/polymesh-sdk/blob/995f17653/src/api/entities/Identity/ChildIdentity.ts#L83)

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

[api/entities/Entity.ts:14](https://github.com/PolymeshAssociation/polymesh-sdk/blob/995f17653/src/api/entities/Entity.ts#L14)

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

[api/entities/Entity.ts:23](https://github.com/PolymeshAssociation/polymesh-sdk/blob/995f17653/src/api/entities/Entity.ts#L23)
