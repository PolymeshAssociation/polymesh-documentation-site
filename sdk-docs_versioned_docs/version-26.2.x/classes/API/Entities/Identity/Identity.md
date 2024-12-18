---
id: "Identity"
title: "Class: Identity"
sidebar_label: "Identity"
---

[api/entities/Identity](../../../../modules/API/Entities/Identity/Identity.md).Identity

Represents an Identity in the Polymesh blockchain

## Hierarchy

- [`Entity`](../Entity/Entity.md)\<[`UniqueIdentifiers`](../../../../interfaces/API/Entities/Identity/UniqueIdentifiers/UniqueIdentifiers.md), `string`\>

  ↳ **`Identity`**

  ↳↳ [`DefaultTrustedClaimIssuer`](../DefaultTrustedClaimIssuer/DefaultTrustedClaimIssuer.md)

  ↳↳ [`ChildIdentity`](ChildIdentity/ChildIdentity.md)

## Properties

### assetPermissions

• **assetPermissions**: [`AssetPermissions`](AssetPermissions/AssetPermissions.md)

#### Defined in

[api/entities/Identity/index.ts:132](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c8da9dfce/src/api/entities/Identity/index.ts#L132)

___

### authorizations

• **authorizations**: [`IdentityAuthorizations`](IdentityAuthorizations/IdentityAuthorizations.md)

#### Defined in

[api/entities/Identity/index.ts:130](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c8da9dfce/src/api/entities/Identity/index.ts#L130)

___

### did

• **did**: `string`

Identity ID as stored in the blockchain

#### Defined in

[api/entities/Identity/index.ts:127](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c8da9dfce/src/api/entities/Identity/index.ts#L127)

___

### portfolios

• **portfolios**: [`Portfolios`](Portfolios/Portfolios.md)

#### Defined in

[api/entities/Identity/index.ts:131](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c8da9dfce/src/api/entities/Identity/index.ts#L131)

___

### uuid

• **uuid**: `string`

#### Inherited from

[Entity](../Entity/Entity.md).[uuid](../Entity/Entity.md#uuid)

#### Defined in

[api/entities/Entity.ts:46](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c8da9dfce/src/api/entities/Entity.ts#L46)

## Methods

### areSecondaryAccountsFrozen

▸ **areSecondaryAccountsFrozen**(): `Promise`\<`boolean`\>

Check whether secondary Accounts are frozen

#### Returns

`Promise`\<`boolean`\>

**`Note`**

can be subscribed to, if connected to node using a web socket

#### Defined in

[api/entities/Identity/index.ts:713](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c8da9dfce/src/api/entities/Identity/index.ts#L713)

▸ **areSecondaryAccountsFrozen**(`callback`): `Promise`\<[`UnsubCallback`](../../../../modules/API/Entities/Types/Types.md#unsubcallback)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`SubCallback`](../../../../modules/API/Entities/Types/Types.md#subcallback)\<`boolean`\> |

#### Returns

`Promise`\<[`UnsubCallback`](../../../../modules/API/Entities/Types/Types.md#unsubcallback)\>

#### Defined in

[api/entities/Identity/index.ts:714](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c8da9dfce/src/api/entities/Identity/index.ts#L714)

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

#### Defined in

[api/entities/Identity/index.ts:495](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c8da9dfce/src/api/entities/Identity/index.ts#L495)

___

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

[api/entities/Identity/index.ts:885](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c8da9dfce/src/api/entities/Identity/index.ts#L885)

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

#### Defined in

[api/entities/Identity/index.ts:208](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c8da9dfce/src/api/entities/Identity/index.ts#L208)

▸ **getAssetBalance**(`args`): `Promise`\<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.assetId` | `string` |

#### Returns

`Promise`\<`BigNumber`\>

#### Defined in

[api/entities/Identity/index.ts:209](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c8da9dfce/src/api/entities/Identity/index.ts#L209)

▸ **getAssetBalance**(`args`, `callback`): `Promise`\<[`UnsubCallback`](../../../../modules/API/Entities/Types/Types.md#unsubcallback)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.ticker` | `string` |
| `callback` | [`SubCallback`](../../../../modules/API/Entities/Types/Types.md#subcallback)\<`BigNumber`\> |

#### Returns

`Promise`\<[`UnsubCallback`](../../../../modules/API/Entities/Types/Types.md#unsubcallback)\>

#### Defined in

[api/entities/Identity/index.ts:210](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c8da9dfce/src/api/entities/Identity/index.ts#L210)

▸ **getAssetBalance**(`args`, `callback`): `Promise`\<[`UnsubCallback`](../../../../modules/API/Entities/Types/Types.md#unsubcallback)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.assetId` | `string` |
| `callback` | [`SubCallback`](../../../../modules/API/Entities/Types/Types.md#subcallback)\<`BigNumber`\> |

#### Returns

`Promise`\<[`UnsubCallback`](../../../../modules/API/Entities/Types/Types.md#unsubcallback)\>

#### Defined in

[api/entities/Identity/index.ts:215](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c8da9dfce/src/api/entities/Identity/index.ts#L215)

___

### getChildIdentities

▸ **getChildIdentities**(): `Promise`\<[`ChildIdentity`](ChildIdentity/ChildIdentity.md)[]\>

Returns the list of all child identities

#### Returns

`Promise`\<[`ChildIdentity`](ChildIdentity/ChildIdentity.md)[]\>

**`Note`**

this query can be potentially **SLOW** depending on the number of parent Identities present on the chain

#### Defined in

[api/entities/Identity/index.ts:943](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c8da9dfce/src/api/entities/Identity/index.ts#L943)

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

#### Defined in

[api/entities/Identity/index.ts:391](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c8da9dfce/src/api/entities/Identity/index.ts#L391)

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

#### Defined in

[api/entities/Identity/index.ts:438](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c8da9dfce/src/api/entities/Identity/index.ts#L438)

___

### getHistoricalInstructions

▸ **getHistoricalInstructions**(`filter?`): `Promise`\<[`HistoricInstruction`](../../../../modules/API/Entities/Venue/Types/Types.md#historicinstruction)[]\>

Retrieve all Instructions that have been associated with this Identity's DID

#### Parameters

| Name | Type |
| :------ | :------ |
| `filter?` | `Omit`\<[`InstructionPartiesFilters`](../../../../interfaces/API/Client/Types/InstructionPartiesFilters/InstructionPartiesFilters.md), ``"identity"``\> |

#### Returns

`Promise`\<[`HistoricInstruction`](../../../../modules/API/Entities/Venue/Types/Types.md#historicinstruction)[]\>

**`Note`**

uses the middleware V2

**`Note`**

supports pagination

#### Defined in

[api/entities/Identity/index.ts:919](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c8da9dfce/src/api/entities/Identity/index.ts#L919)

___

### getInstructions

▸ **getInstructions**(): `Promise`\<[`GroupedInstructions`](../../../../interfaces/API/Entities/Instruction/Types/GroupedInstructions/GroupedInstructions.md)\>

Retrieve all Instructions where this Identity is a custodian of one or more portfolios in the legs,
  grouped by status

#### Returns

`Promise`\<[`GroupedInstructions`](../../../../interfaces/API/Entities/Instruction/Types/GroupedInstructions/GroupedInstructions.md)\>

#### Defined in

[api/entities/Identity/index.ts:567](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c8da9dfce/src/api/entities/Identity/index.ts#L567)

___

### getInvolvedInstructions

▸ **getInvolvedInstructions**(): `Promise`\<[`GroupedInvolvedInstructions`](../../../../interfaces/API/Entities/Instruction/Types/GroupedInvolvedInstructions/GroupedInvolvedInstructions.md)\>

Retrieve all Instructions where this Identity is a participant (owner/custodian),
  grouped by the role of the Identity and Instruction status

#### Returns

`Promise`\<[`GroupedInvolvedInstructions`](../../../../interfaces/API/Entities/Instruction/Types/GroupedInvolvedInstructions/GroupedInvolvedInstructions.md)\>

#### Defined in

[api/entities/Identity/index.ts:654](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c8da9dfce/src/api/entities/Identity/index.ts#L654)

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

#### Defined in

[api/entities/Identity/index.ts:1073](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c8da9dfce/src/api/entities/Identity/index.ts#L1073)

___

### getOffChainAuthorizationNonce

▸ **getOffChainAuthorizationNonce**(): `Promise`\<`BigNumber`\>

Returns the off chain authorization nonce for this Identity

#### Returns

`Promise`\<`BigNumber`\>

#### Defined in

[api/entities/Identity/index.ts:1208](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c8da9dfce/src/api/entities/Identity/index.ts#L1208)

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

#### Defined in

[api/entities/Identity/index.ts:752](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c8da9dfce/src/api/entities/Identity/index.ts#L752)

___

### getPrimaryAccount

▸ **getPrimaryAccount**(): `Promise`\<[`PermissionedAccount`](../../../../interfaces/API/Entities/Types/PermissionedAccount/PermissionedAccount.md)\>

Retrieve the primary Account associated with the Identity

#### Returns

`Promise`\<[`PermissionedAccount`](../../../../interfaces/API/Entities/Types/PermissionedAccount/PermissionedAccount.md)\>

**`Note`**

can be subscribed to, if connected to node using a web socket

#### Defined in

[api/entities/Identity/index.ts:327](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c8da9dfce/src/api/entities/Identity/index.ts#L327)

▸ **getPrimaryAccount**(`callback`): `Promise`\<[`UnsubCallback`](../../../../modules/API/Entities/Types/Types.md#unsubcallback)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`SubCallback`](../../../../modules/API/Entities/Types/Types.md#subcallback)\<[`PermissionedAccount`](../../../../interfaces/API/Entities/Types/PermissionedAccount/PermissionedAccount.md)\> |

#### Returns

`Promise`\<[`UnsubCallback`](../../../../modules/API/Entities/Types/Types.md#unsubcallback)\>

#### Defined in

[api/entities/Identity/index.ts:328](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c8da9dfce/src/api/entities/Identity/index.ts#L328)

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

#### Defined in

[api/entities/Identity/index.ts:802](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c8da9dfce/src/api/entities/Identity/index.ts#L802)

▸ **getSecondaryAccounts**(`callback`): `Promise`\<[`UnsubCallback`](../../../../modules/API/Entities/Types/Types.md#unsubcallback)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`SubCallback`](../../../../modules/API/Entities/Types/Types.md#subcallback)\<[`PermissionedAccount`](../../../../interfaces/API/Entities/Types/PermissionedAccount/PermissionedAccount.md)[]\> |

#### Returns

`Promise`\<[`UnsubCallback`](../../../../modules/API/Entities/Types/Types.md#unsubcallback)\>

#### Defined in

[api/entities/Identity/index.ts:806](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c8da9dfce/src/api/entities/Identity/index.ts#L806)

▸ **getSecondaryAccounts**(`paginationOpts`, `callback`): `Promise`\<[`UnsubCallback`](../../../../modules/API/Entities/Types/Types.md#unsubcallback)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `paginationOpts` | [`PaginationOptions`](../../../../interfaces/API/Entities/Types/PaginationOptions/PaginationOptions.md) |
| `callback` | [`SubCallback`](../../../../modules/API/Entities/Types/Types.md#subcallback)\<[`PermissionedAccount`](../../../../interfaces/API/Entities/Types/PermissionedAccount/PermissionedAccount.md)[]\> |

#### Returns

`Promise`\<[`UnsubCallback`](../../../../modules/API/Entities/Types/Types.md#unsubcallback)\>

#### Defined in

[api/entities/Identity/index.ts:810](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c8da9dfce/src/api/entities/Identity/index.ts#L810)

___

### getTrustingAssets

▸ **getTrustingAssets**(): `Promise`\<[`FungibleAsset`](../Asset/Fungible/FungibleAsset.md)[]\>

Get the list of Assets for which this Identity is a trusted claim issuer

#### Returns

`Promise`\<[`FungibleAsset`](../Asset/Fungible/FungibleAsset.md)[]\>

**`Note`**

uses the middlewareV2

#### Defined in

[api/entities/Identity/index.ts:519](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c8da9dfce/src/api/entities/Identity/index.ts#L519)

___

### getVenues

▸ **getVenues**(): `Promise`\<[`Venue`](../Venue/Venue.md)[]\>

Retrieve all Venues created by this Identity

#### Returns

`Promise`\<[`Venue`](../Venue/Venue.md)[]\>

#### Defined in

[api/entities/Identity/index.ts:539](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c8da9dfce/src/api/entities/Identity/index.ts#L539)

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

#### Defined in

[api/entities/Identity/index.ts:160](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c8da9dfce/src/api/entities/Identity/index.ts#L160)

___

### hasValidCdd

▸ **hasValidCdd**(): `Promise`\<`boolean`\>

Check whether this Identity has a valid CDD claim

#### Returns

`Promise`\<`boolean`\>

#### Defined in

[api/entities/Identity/index.ts:275](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c8da9dfce/src/api/entities/Identity/index.ts#L275)

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

#### Defined in

[api/entities/Identity/index.ts:1037](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c8da9dfce/src/api/entities/Identity/index.ts#L1037)

___

### isCddProvider

▸ **isCddProvider**(): `Promise`\<`boolean`\>

Check whether this Identity is a CDD provider

#### Returns

`Promise`\<`boolean`\>

#### Defined in

[api/entities/Identity/index.ts:308](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c8da9dfce/src/api/entities/Identity/index.ts#L308)

___

### isChild

▸ **isChild**(): `Promise`\<`boolean`\>

Check whether this Identity is a child Identity

#### Returns

`Promise`\<`boolean`\>

#### Defined in

[api/entities/Identity/index.ts:984](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c8da9dfce/src/api/entities/Identity/index.ts#L984)

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

[Entity](../Entity/Entity.md).[isEqual](../Entity/Entity.md#isequal)

#### Defined in

[api/entities/Entity.ts:61](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c8da9dfce/src/api/entities/Entity.ts#L61)

___

### isGcMember

▸ **isGcMember**(): `Promise`\<`boolean`\>

Check whether this Identity is Governance Committee member

#### Returns

`Promise`\<`boolean`\>

#### Defined in

[api/entities/Identity/index.ts:291](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c8da9dfce/src/api/entities/Identity/index.ts#L291)

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

#### Defined in

[api/entities/Identity/index.ts:995](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c8da9dfce/src/api/entities/Identity/index.ts#L995)

___

### toHuman

▸ **toHuman**(): `string`

Return the Identity's DID

#### Returns

`string`

#### Overrides

[Entity](../Entity/Entity.md).[toHuman](../Entity/Entity.md#tohuman)

#### Defined in

[api/entities/Identity/index.ts:908](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c8da9dfce/src/api/entities/Identity/index.ts#L908)

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

#### Defined in

[api/entities/Identity/index.ts:977](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c8da9dfce/src/api/entities/Identity/index.ts#L977)

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

[Entity](../Entity/Entity.md).[generateUuid](../Entity/Entity.md#generateuuid)

#### Defined in

[api/entities/Entity.ts:14](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c8da9dfce/src/api/entities/Entity.ts#L14)

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

[Entity](../Entity/Entity.md).[unserialize](../Entity/Entity.md#unserialize)

#### Defined in

[api/entities/Entity.ts:23](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c8da9dfce/src/api/entities/Entity.ts#L23)