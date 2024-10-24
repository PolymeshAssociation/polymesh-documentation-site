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

• **asset**: [`FungibleAsset`](../Asset/Fungible/FungibleAsset.md)

Asset for which this Identity is a Default Trusted Claim Issuer

#### Defined in

[api/entities/DefaultTrustedClaimIssuer.ts:35](https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/entities/DefaultTrustedClaimIssuer.ts#L35)

___

### assetPermissions

• **assetPermissions**: [`AssetPermissions`](../Identity/AssetPermissions/AssetPermissions.md)

#### Inherited from

[Identity](../Identity/Identity.md).[assetPermissions](../Identity/Identity.md#assetpermissions)

#### Defined in

[api/entities/Identity/index.ts:131](https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/entities/Identity/index.ts#L131)

___

### authorizations

• **authorizations**: [`IdentityAuthorizations`](../Identity/IdentityAuthorizations/IdentityAuthorizations.md)

#### Inherited from

[Identity](../Identity/Identity.md).[authorizations](../Identity/Identity.md#authorizations)

#### Defined in

[api/entities/Identity/index.ts:129](https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/entities/Identity/index.ts#L129)

___

### did

• **did**: `string`

Identity ID as stored in the blockchain

#### Inherited from

[Identity](../Identity/Identity.md).[did](../Identity/Identity.md#did)

#### Defined in

[api/entities/Identity/index.ts:126](https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/entities/Identity/index.ts#L126)

___

### portfolios

• **portfolios**: [`Portfolios`](../Identity/Portfolios/Portfolios.md)

#### Inherited from

[Identity](../Identity/Identity.md).[portfolios](../Identity/Identity.md#portfolios)

#### Defined in

[api/entities/Identity/index.ts:130](https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/entities/Identity/index.ts#L130)

___

### uuid

• **uuid**: `string`

#### Inherited from

[Identity](../Identity/Identity.md).[uuid](../Identity/Identity.md#uuid)

#### Defined in

[api/entities/Entity.ts:46](https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/entities/Entity.ts#L46)

## Methods

### addedAt

▸ **addedAt**(): `Promise`\<``null`` \| [`EventIdentifier`](../../../../interfaces/API/Client/Types/EventIdentifier/EventIdentifier.md)\>

Retrieve the identifier data (block number, date and event index) of the event that was emitted when the trusted claim issuer was added

#### Returns

`Promise`\<``null`` \| [`EventIdentifier`](../../../../interfaces/API/Client/Types/EventIdentifier/EventIdentifier.md)\>

**`Note`**

uses the middlewareV2

**`Note`**

there is a possibility that the data is not ready by the time it is requested. In that case, `null` is returned

#### Defined in

[api/entities/DefaultTrustedClaimIssuer.ts:54](https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/entities/DefaultTrustedClaimIssuer.ts#L54)

___

### areSecondaryAccountsFrozen

▸ **areSecondaryAccountsFrozen**(): `Promise`\<`boolean`\>

Check whether secondary Accounts are frozen

#### Returns

`Promise`\<`boolean`\>

**`Note`**

can be subscribed to, if connected to node using a web socket

#### Inherited from

[Identity](../Identity/Identity.md).[areSecondaryAccountsFrozen](../Identity/Identity.md#aresecondaryaccountsfrozen)

#### Defined in

[api/entities/Identity/index.ts:712](https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/entities/Identity/index.ts#L712)

▸ **areSecondaryAccountsFrozen**(`callback`): `Promise`\<[`UnsubCallback`](../../../../modules/API/Entities/Types/Types.md#unsubcallback)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`SubCallback`](../../../../modules/API/Entities/Types/Types.md#subcallback)\<`boolean`\> |

#### Returns

`Promise`\<[`UnsubCallback`](../../../../modules/API/Entities/Types/Types.md#unsubcallback)\>

#### Inherited from

[Identity](../Identity/Identity.md).[areSecondaryAccountsFrozen](../Identity/Identity.md#aresecondaryaccountsfrozen)

#### Defined in

[api/entities/Identity/index.ts:713](https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/entities/Identity/index.ts#L713)

___

### checkRoles

▸ **checkRoles**(`roles`): `Promise`\<[`CheckRolesResult`](../../../../interfaces/API/Entities/Types/CheckRolesResult/CheckRolesResult.md)\>

Check whether this Identity possesses all specified roles

#### Parameters

| Name | Type |
| :------ | :------ |
| `roles` | [`Role`](../../../../modules/API/Procedures/Types/Types.md#role)[] |

#### Returns

`Promise`\<[`CheckRolesResult`](../../../../interfaces/API/Entities/Types/CheckRolesResult/CheckRolesResult.md)\>

#### Inherited from

[Identity](../Identity/Identity.md).[checkRoles](../Identity/Identity.md#checkroles)

#### Defined in

[api/entities/Identity/index.ts:494](https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/entities/Identity/index.ts#L494)

___

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

[api/entities/Identity/index.ts:884](https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/entities/Identity/index.ts#L884)

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

[Identity](../Identity/Identity.md).[getAssetBalance](../Identity/Identity.md#getassetbalance)

#### Defined in

[api/entities/Identity/index.ts:207](https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/entities/Identity/index.ts#L207)

▸ **getAssetBalance**(`args`): `Promise`\<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.assetId` | `string` |

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

[Identity](../Identity/Identity.md).[getAssetBalance](../Identity/Identity.md#getassetbalance)

#### Defined in

[api/entities/Identity/index.ts:208](https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/entities/Identity/index.ts#L208)

▸ **getAssetBalance**(`args`, `callback`): `Promise`\<[`UnsubCallback`](../../../../modules/API/Entities/Types/Types.md#unsubcallback)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.ticker` | `string` |
| `callback` | [`SubCallback`](../../../../modules/API/Entities/Types/Types.md#subcallback)\<`BigNumber`\> |

#### Returns

`Promise`\<[`UnsubCallback`](../../../../modules/API/Entities/Types/Types.md#unsubcallback)\>

#### Inherited from

[Identity](../Identity/Identity.md).[getAssetBalance](../Identity/Identity.md#getassetbalance)

#### Defined in

[api/entities/Identity/index.ts:209](https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/entities/Identity/index.ts#L209)

▸ **getAssetBalance**(`args`, `callback`): `Promise`\<[`UnsubCallback`](../../../../modules/API/Entities/Types/Types.md#unsubcallback)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.assetId` | `string` |
| `callback` | [`SubCallback`](../../../../modules/API/Entities/Types/Types.md#subcallback)\<`BigNumber`\> |

#### Returns

`Promise`\<[`UnsubCallback`](../../../../modules/API/Entities/Types/Types.md#unsubcallback)\>

#### Inherited from

[Identity](../Identity/Identity.md).[getAssetBalance](../Identity/Identity.md#getassetbalance)

#### Defined in

[api/entities/Identity/index.ts:214](https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/entities/Identity/index.ts#L214)

___

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

[api/entities/Identity/index.ts:938](https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/entities/Identity/index.ts#L938)

___

### getHeldAssets

▸ **getHeldAssets**(`opts?`): `Promise`\<[`ResultSet`](../../../../interfaces/API/Entities/Types/ResultSet/ResultSet.md)\<[`FungibleAsset`](../Asset/Fungible/FungibleAsset.md)\>\>

Retrieve a list of all Assets which were held at one point by this Identity

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `Object` |
| `opts.order?` | [`AssetHoldersOrderBy`](../../../../enums/Types/AssetHoldersOrderBy/AssetHoldersOrderBy.md) |
| `opts.size?` | `BigNumber` |
| `opts.start?` | `BigNumber` |

#### Returns

`Promise`\<[`ResultSet`](../../../../interfaces/API/Entities/Types/ResultSet/ResultSet.md)\<[`FungibleAsset`](../Asset/Fungible/FungibleAsset.md)\>\>

**`Note`**

uses the middlewareV2

**`Note`**

supports pagination

#### Inherited from

[Identity](../Identity/Identity.md).[getHeldAssets](../Identity/Identity.md#getheldassets)

#### Defined in

[api/entities/Identity/index.ts:390](https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/entities/Identity/index.ts#L390)

___

### getHeldNfts

▸ **getHeldNfts**(`opts?`): `Promise`\<[`ResultSet`](../../../../interfaces/API/Entities/Types/ResultSet/ResultSet.md)\<[`HeldNfts`](../../../../interfaces/API/Entities/Asset/Types/HeldNfts/HeldNfts.md)\>\>

Retrieve a list of all NftCollections which were held at one point by this Identity

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `Object` |
| `opts.order?` | [`NftHoldersOrderBy`](../../../../enums/Types/NftHoldersOrderBy/NftHoldersOrderBy.md) |
| `opts.size?` | `BigNumber` |
| `opts.start?` | `BigNumber` |

#### Returns

`Promise`\<[`ResultSet`](../../../../interfaces/API/Entities/Types/ResultSet/ResultSet.md)\<[`HeldNfts`](../../../../interfaces/API/Entities/Asset/Types/HeldNfts/HeldNfts.md)\>\>

**`Note`**

uses the middlewareV2

**`Note`**

supports pagination

#### Inherited from

[Identity](../Identity/Identity.md).[getHeldNfts](../Identity/Identity.md#getheldnfts)

#### Defined in

[api/entities/Identity/index.ts:437](https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/entities/Identity/index.ts#L437)

___

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

[api/entities/Identity/index.ts:916](https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/entities/Identity/index.ts#L916)

___

### getInstructions

▸ **getInstructions**(): `Promise`\<[`GroupedInstructions`](../../../../interfaces/API/Entities/Instruction/Types/GroupedInstructions/GroupedInstructions.md)\>

Retrieve all Instructions where this Identity is a custodian of one or more portfolios in the legs,
  grouped by status

#### Returns

`Promise`\<[`GroupedInstructions`](../../../../interfaces/API/Entities/Instruction/Types/GroupedInstructions/GroupedInstructions.md)\>

#### Inherited from

[Identity](../Identity/Identity.md).[getInstructions](../Identity/Identity.md#getinstructions)

#### Defined in

[api/entities/Identity/index.ts:566](https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/entities/Identity/index.ts#L566)

___

### getInvolvedInstructions

▸ **getInvolvedInstructions**(): `Promise`\<[`GroupedInvolvedInstructions`](../../../../interfaces/API/Entities/Instruction/Types/GroupedInvolvedInstructions/GroupedInvolvedInstructions.md)\>

Retrieve all Instructions where this Identity is a participant (owner/custodian),
  grouped by the role of the Identity and Instruction status

#### Returns

`Promise`\<[`GroupedInvolvedInstructions`](../../../../interfaces/API/Entities/Instruction/Types/GroupedInvolvedInstructions/GroupedInvolvedInstructions.md)\>

#### Inherited from

[Identity](../Identity/Identity.md).[getInvolvedInstructions](../Identity/Identity.md#getinvolvedinstructions)

#### Defined in

[api/entities/Identity/index.ts:653](https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/entities/Identity/index.ts#L653)

___

### getMultiSigSigners

▸ **getMultiSigSigners**(): `Promise`\<[`MultiSigSigners`](../../../../interfaces/API/Entities/Account/MultiSig/Types/MultiSigSigners/MultiSigSigners.md)[]\>

Returns the list of MultiSig accounts along with their signatories this identity has responsibility for.
The roles possible are:
- Admin: The identity is able to unilaterally modify the MultiSig properties, such as the signers and signatures required for a proposal
- Payer: The identity's primary key will be deducted any POLYX fees the MultiSig may incur

#### Returns

`Promise`\<[`MultiSigSigners`](../../../../interfaces/API/Entities/Account/MultiSig/Types/MultiSigSigners/MultiSigSigners.md)[]\>

**`Note`**

this query can be potentially **SLOW** depending on the number of MultiSigs present on the chain

#### Inherited from

[Identity](../Identity/Identity.md).[getMultiSigSigners](../Identity/Identity.md#getmultisigsigners)

#### Defined in

[api/entities/Identity/index.ts:1068](https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/entities/Identity/index.ts#L1068)

___

### getOffChainAuthorizationNonce

▸ **getOffChainAuthorizationNonce**(): `Promise`\<`BigNumber`\>

Returns the off chain authorization nonce for this Identity

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

[Identity](../Identity/Identity.md).[getOffChainAuthorizationNonce](../Identity/Identity.md#getoffchainauthorizationnonce)

#### Defined in

[api/entities/Identity/index.ts:1203](https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/entities/Identity/index.ts#L1203)

___

### getPendingDistributions

▸ **getPendingDistributions**(): `Promise`\<[`DistributionWithDetails`](../../../../interfaces/API/Entities/Types/DistributionWithDetails/DistributionWithDetails.md)[]\>

Retrieve every Dividend Distribution for which this Identity is eligible and hasn't been paid

#### Returns

`Promise`\<[`DistributionWithDetails`](../../../../interfaces/API/Entities/Types/DistributionWithDetails/DistributionWithDetails.md)[]\>

**`Note`**

uses the middleware

**`Note`**

this query can be potentially **SLOW** depending on which Assets this Identity has held

#### Inherited from

[Identity](../Identity/Identity.md).[getPendingDistributions](../Identity/Identity.md#getpendingdistributions)

#### Defined in

[api/entities/Identity/index.ts:751](https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/entities/Identity/index.ts#L751)

___

### getPrimaryAccount

▸ **getPrimaryAccount**(): `Promise`\<[`PermissionedAccount`](../../../../interfaces/API/Entities/Types/PermissionedAccount/PermissionedAccount.md)\>

Retrieve the primary Account associated with the Identity

#### Returns

`Promise`\<[`PermissionedAccount`](../../../../interfaces/API/Entities/Types/PermissionedAccount/PermissionedAccount.md)\>

**`Note`**

can be subscribed to, if connected to node using a web socket

#### Inherited from

[Identity](../Identity/Identity.md).[getPrimaryAccount](../Identity/Identity.md#getprimaryaccount)

#### Defined in

[api/entities/Identity/index.ts:326](https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/entities/Identity/index.ts#L326)

▸ **getPrimaryAccount**(`callback`): `Promise`\<[`UnsubCallback`](../../../../modules/API/Entities/Types/Types.md#unsubcallback)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`SubCallback`](../../../../modules/API/Entities/Types/Types.md#subcallback)\<[`PermissionedAccount`](../../../../interfaces/API/Entities/Types/PermissionedAccount/PermissionedAccount.md)\> |

#### Returns

`Promise`\<[`UnsubCallback`](../../../../modules/API/Entities/Types/Types.md#unsubcallback)\>

#### Inherited from

[Identity](../Identity/Identity.md).[getPrimaryAccount](../Identity/Identity.md#getprimaryaccount)

#### Defined in

[api/entities/Identity/index.ts:327](https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/entities/Identity/index.ts#L327)

___

### getSecondaryAccounts

▸ **getSecondaryAccounts**(`paginationOpts?`): `Promise`\<[`ResultSet`](../../../../interfaces/API/Entities/Types/ResultSet/ResultSet.md)\<[`PermissionedAccount`](../../../../interfaces/API/Entities/Types/PermissionedAccount/PermissionedAccount.md)\>\>

Get the list of secondary Accounts related to the Identity

#### Parameters

| Name | Type |
| :------ | :------ |
| `paginationOpts?` | [`PaginationOptions`](../../../../interfaces/API/Entities/Types/PaginationOptions/PaginationOptions.md) |

#### Returns

`Promise`\<[`ResultSet`](../../../../interfaces/API/Entities/Types/ResultSet/ResultSet.md)\<[`PermissionedAccount`](../../../../interfaces/API/Entities/Types/PermissionedAccount/PermissionedAccount.md)\>\>

**`Note`**

supports pagination

**`Note`**

can be subscribed to, if connected to node using a web socket

#### Inherited from

[Identity](../Identity/Identity.md).[getSecondaryAccounts](../Identity/Identity.md#getsecondaryaccounts)

#### Defined in

[api/entities/Identity/index.ts:801](https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/entities/Identity/index.ts#L801)

▸ **getSecondaryAccounts**(`callback`): `Promise`\<[`UnsubCallback`](../../../../modules/API/Entities/Types/Types.md#unsubcallback)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`SubCallback`](../../../../modules/API/Entities/Types/Types.md#subcallback)\<[`PermissionedAccount`](../../../../interfaces/API/Entities/Types/PermissionedAccount/PermissionedAccount.md)[]\> |

#### Returns

`Promise`\<[`UnsubCallback`](../../../../modules/API/Entities/Types/Types.md#unsubcallback)\>

#### Inherited from

[Identity](../Identity/Identity.md).[getSecondaryAccounts](../Identity/Identity.md#getsecondaryaccounts)

#### Defined in

[api/entities/Identity/index.ts:805](https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/entities/Identity/index.ts#L805)

▸ **getSecondaryAccounts**(`paginationOpts`, `callback`): `Promise`\<[`UnsubCallback`](../../../../modules/API/Entities/Types/Types.md#unsubcallback)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `paginationOpts` | [`PaginationOptions`](../../../../interfaces/API/Entities/Types/PaginationOptions/PaginationOptions.md) |
| `callback` | [`SubCallback`](../../../../modules/API/Entities/Types/Types.md#subcallback)\<[`PermissionedAccount`](../../../../interfaces/API/Entities/Types/PermissionedAccount/PermissionedAccount.md)[]\> |

#### Returns

`Promise`\<[`UnsubCallback`](../../../../modules/API/Entities/Types/Types.md#unsubcallback)\>

#### Inherited from

[Identity](../Identity/Identity.md).[getSecondaryAccounts](../Identity/Identity.md#getsecondaryaccounts)

#### Defined in

[api/entities/Identity/index.ts:809](https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/entities/Identity/index.ts#L809)

___

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

[api/entities/Identity/index.ts:518](https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/entities/Identity/index.ts#L518)

___

### getVenues

▸ **getVenues**(): `Promise`\<[`Venue`](../Venue/Venue.md)[]\>

Retrieve all Venues created by this Identity

#### Returns

`Promise`\<[`Venue`](../Venue/Venue.md)[]\>

#### Inherited from

[Identity](../Identity/Identity.md).[getVenues](../Identity/Identity.md#getvenues)

#### Defined in

[api/entities/Identity/index.ts:538](https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/entities/Identity/index.ts#L538)

___

### hasRole

▸ **hasRole**(`role`): `Promise`\<`boolean`\>

Check whether this Identity possesses the specified Role

#### Parameters

| Name | Type |
| :------ | :------ |
| `role` | [`Role`](../../../../modules/API/Procedures/Types/Types.md#role) |

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

[Identity](../Identity/Identity.md).[hasRole](../Identity/Identity.md#hasrole)

#### Defined in

[api/entities/Identity/index.ts:159](https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/entities/Identity/index.ts#L159)

___

### hasValidCdd

▸ **hasValidCdd**(): `Promise`\<`boolean`\>

Check whether this Identity has a valid CDD claim

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

[Identity](../Identity/Identity.md).[hasValidCdd](../Identity/Identity.md#hasvalidcdd)

#### Defined in

[api/entities/Identity/index.ts:274](https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/entities/Identity/index.ts#L274)

___

### isAssetPreApproved

▸ **isAssetPreApproved**(`asset`): `Promise`\<`boolean`\>

Returns whether or not this Identity has pre-approved a particular asset

#### Parameters

| Name | Type |
| :------ | :------ |
| `asset` | `string` \| [`BaseAsset`](../Asset/Base/BaseAsset/BaseAsset.md) |

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

[Identity](../Identity/Identity.md).[isAssetPreApproved](../Identity/Identity.md#isassetpreapproved)

#### Defined in

[api/entities/Identity/index.ts:1032](https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/entities/Identity/index.ts#L1032)

___

### isCddProvider

▸ **isCddProvider**(): `Promise`\<`boolean`\>

Check whether this Identity is a CDD provider

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

[Identity](../Identity/Identity.md).[isCddProvider](../Identity/Identity.md#iscddprovider)

#### Defined in

[api/entities/Identity/index.ts:307](https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/entities/Identity/index.ts#L307)

___

### isChild

▸ **isChild**(): `Promise`\<`boolean`\>

Check whether this Identity is a child Identity

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

[Identity](../Identity/Identity.md).[isChild](../Identity/Identity.md#ischild)

#### Defined in

[api/entities/Identity/index.ts:979](https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/entities/Identity/index.ts#L979)

___

### isEqual

▸ **isEqual**(`entity`): `boolean`

Determine whether this Entity is the same as another one

#### Parameters

| Name | Type |
| :------ | :------ |
| `entity` | [`Entity`](../Entity/Entity.md)\<`unknown`, `unknown`\> |

#### Returns

`boolean`

#### Inherited from

[Identity](../Identity/Identity.md).[isEqual](../Identity/Identity.md#isequal)

#### Defined in

[api/entities/Entity.ts:61](https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/entities/Entity.ts#L61)

___

### isGcMember

▸ **isGcMember**(): `Promise`\<`boolean`\>

Check whether this Identity is Governance Committee member

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

[Identity](../Identity/Identity.md).[isGcMember](../Identity/Identity.md#isgcmember)

#### Defined in

[api/entities/Identity/index.ts:290](https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/entities/Identity/index.ts#L290)

___

### preApprovedAssets

▸ **preApprovedAssets**(`paginationOpts?`): `Promise`\<[`ResultSet`](../../../../interfaces/API/Entities/Types/ResultSet/ResultSet.md)\<[`Asset`](../../../../modules/API/Entities/Asset/Types/Types.md#asset)\>\>

Returns a list of all assets this Identity has pre-approved. These assets will not require affirmation when being received in settlements

#### Parameters

| Name | Type |
| :------ | :------ |
| `paginationOpts?` | [`PaginationOptions`](../../../../interfaces/API/Entities/Types/PaginationOptions/PaginationOptions.md) |

#### Returns

`Promise`\<[`ResultSet`](../../../../interfaces/API/Entities/Types/ResultSet/ResultSet.md)\<[`Asset`](../../../../modules/API/Entities/Asset/Types/Types.md#asset)\>\>

#### Inherited from

[Identity](../Identity/Identity.md).[preApprovedAssets](../Identity/Identity.md#preapprovedassets)

#### Defined in

[api/entities/Identity/index.ts:990](https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/entities/Identity/index.ts#L990)

___

### toHuman

▸ **toHuman**(): `string`

Return the Identity's DID

#### Returns

`string`

#### Inherited from

[Identity](../Identity/Identity.md).[toHuman](../Identity/Identity.md#tohuman)

#### Defined in

[api/entities/Identity/index.ts:907](https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/entities/Identity/index.ts#L907)

___

### trustedFor

▸ **trustedFor**(): `Promise`\<``null`` \| [`ClaimType`](../../../../enums/API/Entities/Types/ClaimType/ClaimType.md)[]\>

Retrieve claim types for which this Claim Issuer is trusted. A null value means that the issuer is trusted for all claim types

#### Returns

`Promise`\<``null`` \| [`ClaimType`](../../../../enums/API/Entities/Types/ClaimType/ClaimType.md)[]\>

#### Defined in

[api/entities/DefaultTrustedClaimIssuer.ts:81](https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/entities/DefaultTrustedClaimIssuer.ts#L81)

___

### unlinkChild

▸ **unlinkChild**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

Unlinks a child identity

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`UnlinkChildParams`](../../../../interfaces/API/Procedures/Types/UnlinkChildParams/UnlinkChildParams.md) |
| `opts?` | [`ProcedureOpts`](../../../../interfaces/API/Procedures/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

**`Throws`**

if
 - the `child` is not a child of this identity
 - the transaction signer is not the primary key of the parent identity

**`Note`**

this method is of type [ProcedureMethod](../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [unlinkChild.checkAuthorization](../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Inherited from

[Identity](../Identity/Identity.md).[unlinkChild](../Identity/Identity.md#unlinkchild)

#### Defined in

[api/entities/Identity/index.ts:972](https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/entities/Identity/index.ts#L972)

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

[Identity](../Identity/Identity.md).[generateUuid](../Identity/Identity.md#generateuuid)

#### Defined in

[api/entities/Entity.ts:14](https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/entities/Entity.ts#L14)

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

[Identity](../Identity/Identity.md).[unserialize](../Identity/Identity.md#unserialize)

#### Defined in

[api/entities/Entity.ts:23](https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/entities/Entity.ts#L23)
