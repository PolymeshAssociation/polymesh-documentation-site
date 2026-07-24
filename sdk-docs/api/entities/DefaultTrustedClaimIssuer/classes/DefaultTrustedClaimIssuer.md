# Class: DefaultTrustedClaimIssuer

> Defined in: [src/api/entities/DefaultTrustedClaimIssuer.ts:21](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/DefaultTrustedClaimIssuer.ts#L21)

# Class: DefaultTrustedClaimIssuer

Defined in: [src/api/entities/DefaultTrustedClaimIssuer.ts:21](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/DefaultTrustedClaimIssuer.ts#L21)

Represents a default trusted claim issuer for a specific Asset in the Polymesh blockchain

## Extends

- [`Identity`](../../Identity/classes/Identity.mdx)

## Properties

### asset

> **asset**: [`FungibleAsset`](../../Asset/Fungible/classes/FungibleAsset.mdx)

Defined in: [src/api/entities/DefaultTrustedClaimIssuer.ts:35](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/DefaultTrustedClaimIssuer.ts#L35)

Asset for which this Identity is a Default Trusted Claim Issuer

***

### assetPermissions

> **assetPermissions**: [`AssetPermissions`](../../Identity/AssetPermissions/classes/AssetPermissions.mdx)

Defined in: [src/api/entities/Identity/index.ts:127](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Identity/index.ts#L127)

#### Inherited from

[`Identity`](../../Identity/classes/Identity.mdx).[`assetPermissions`](../../Identity/classes/Identity.mdx#assetpermissions)

***

### authorizations

> **authorizations**: [`IdentityAuthorizations`](../../Identity/IdentityAuthorizations/classes/IdentityAuthorizations.mdx)

Defined in: [src/api/entities/Identity/index.ts:125](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Identity/index.ts#L125)

#### Inherited from

[`Identity`](../../Identity/classes/Identity.mdx).[`authorizations`](../../Identity/classes/Identity.mdx#authorizations)

***

### did

> **did**: `string`

Defined in: [src/api/entities/Identity/index.ts:122](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Identity/index.ts#L122)

Identity ID as stored in the blockchain

#### Inherited from

[`Identity`](../../Identity/classes/Identity.mdx).[`did`](../../Identity/classes/Identity.mdx#did)

***

### portfolios

> **portfolios**: [`Portfolios`](../../Identity/Portfolios/classes/Portfolios.mdx)

Defined in: [src/api/entities/Identity/index.ts:126](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Identity/index.ts#L126)

#### Inherited from

[`Identity`](../../Identity/classes/Identity.mdx).[`portfolios`](../../Identity/classes/Identity.mdx#portfolios)

***

### uuid

> **uuid**: `string`

Defined in: [src/api/entities/Entity.ts:46](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Entity.ts#L46)

#### Inherited from

[`Identity`](../../Identity/classes/Identity.mdx).[`uuid`](../../Identity/classes/Identity.mdx#uuid)

## Methods

### addedAt()

> **addedAt**(): `Promise`\<[`EventIdentifier`](../../../client/types/interfaces/EventIdentifier.mdx) \| `null`\>

Defined in: [src/api/entities/DefaultTrustedClaimIssuer.ts:54](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/DefaultTrustedClaimIssuer.ts#L54)

Retrieve the identifier data (block number, date and event index) of the event that was emitted when the trusted claim issuer was added

#### Returns

`Promise`\<[`EventIdentifier`](../../../client/types/interfaces/EventIdentifier.mdx) \| `null`\>

#### Note

uses the middlewareV2

#### Note

there is a possibility that the data is not ready by the time it is requested. In that case, `null` is returned

***

### areSecondaryAccountsFrozen()

#### Call Signature

> **areSecondaryAccountsFrozen**(): `Promise`\<`boolean`\>

Defined in: [src/api/entities/Identity/index.ts:805](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Identity/index.ts#L805)

Check whether secondary Accounts are frozen

##### Returns

`Promise`\<`boolean`\>

Promise that resolves to true if secondary accounts are frozen, false otherwise

##### Inherited from

[`Identity`](../../Identity/classes/Identity.mdx).[`areSecondaryAccountsFrozen`](../../Identity/classes/Identity.mdx#aresecondaryaccountsfrozen)

#### Call Signature

> **areSecondaryAccountsFrozen**(`callback`: [`SubCallback`](../../types/type-aliases/SubCallback.mdx)\<`boolean`\>): `Promise`\<[`UnsubCallback`](../../types/type-aliases/UnsubCallback.mdx)\>

Defined in: [src/api/entities/Identity/index.ts:816](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Identity/index.ts#L816)

Check whether secondary Accounts are frozen (with subscription support)

##### Parameters

Parameter
Type
Description

`callback`

[`SubCallback`](../../types/type-aliases/SubCallback.mdx)\<`boolean`\>

Callback function that receives frozen status updates

##### Returns

`Promise`\<[`UnsubCallback`](../../types/type-aliases/UnsubCallback.mdx)\>

Promise that resolves to an unsubscribe function

##### Note

can be subscribed to, if connected to node using a web socket

##### Inherited from

[`Identity`](../../Identity/classes/Identity.mdx).[`areSecondaryAccountsFrozen`](../../Identity/classes/Identity.mdx#aresecondaryaccountsfrozen)

***

### checkRoles()

> **checkRoles**(`roles`: [`Role`](../../../procedures/types/type-aliases/Role.mdx)[]): `Promise`\<[`CheckRolesResult`](../../types/interfaces/CheckRolesResult.mdx)\>

Defined in: [src/api/entities/Identity/index.ts:545](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Identity/index.ts#L545)

Check whether this Identity possesses all specified roles

#### Parameters

Parameter
Type

`roles`

[`Role`](../../../procedures/types/type-aliases/Role.mdx)[]

#### Returns

`Promise`\<[`CheckRolesResult`](../../types/interfaces/CheckRolesResult.mdx)\>

#### Inherited from

[`Identity`](../../Identity/classes/Identity.mdx).[`checkRoles`](../../Identity/classes/Identity.mdx#checkroles)

***

### exists()

> **exists**(): `Promise`\<`boolean`\>

Defined in: [src/api/entities/Identity/index.ts:1016](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Identity/index.ts#L1016)

Determine whether this Identity exists on chain

#### Returns

`Promise`\<`boolean`\>

#### Note

asset Identities aren't considered to exist for this check

#### Inherited from

[`Identity`](../../Identity/classes/Identity.mdx).[`exists`](../../Identity/classes/Identity.mdx#exists)

***

### getAssetBalance()

#### Call Signature

> **getAssetBalance**(`args`: `object`): `Promise`\<`BigNumber`\>

Defined in: [src/api/entities/Identity/index.ts:215](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Identity/index.ts#L215)

Retrieve the balance of a particular Asset by ticker

##### Parameters

Parameter
Type
Description

`args`

\{ `ticker`: `string`; \}

&hyphen;

`args.ticker`

`string`

Asset ticker

##### Returns

`Promise`\<`BigNumber`\>

Promise that resolves to the Asset balance

##### Inherited from

[`Identity`](../../Identity/classes/Identity.mdx).[`getAssetBalance`](../../Identity/classes/Identity.mdx#getassetbalance)

#### Call Signature

> **getAssetBalance**(`args`: `object`): `Promise`\<`BigNumber`\>

Defined in: [src/api/entities/Identity/index.ts:224](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Identity/index.ts#L224)

Retrieve the balance of a particular Asset by Asset ID

##### Parameters

Parameter
Type
Description

`args`

\{ `assetId`: `string`; \}

&hyphen;

`args.assetId`

`string`

Asset identifier

##### Returns

`Promise`\<`BigNumber`\>

Promise that resolves to the Asset balance

##### Inherited from

[`Identity`](../../Identity/classes/Identity.mdx).[`getAssetBalance`](../../Identity/classes/Identity.mdx#getassetbalance)

#### Call Signature

> **getAssetBalance**(`args`: `object`, `callback`: [`SubCallback`](../../types/type-aliases/SubCallback.mdx)\<`BigNumber`\>): `Promise`\<[`UnsubCallback`](../../types/type-aliases/UnsubCallback.mdx)\>

Defined in: [src/api/entities/Identity/index.ts:236](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Identity/index.ts#L236)

Retrieve the balance of a particular Asset by ticker (with subscription support)

##### Parameters

Parameter
Type
Description

`args`

\{ `ticker`: `string`; \}

&hyphen;

`args.ticker`

`string`

Asset ticker

`callback`

[`SubCallback`](../../types/type-aliases/SubCallback.mdx)\<`BigNumber`\>

Callback function that receives balance updates

##### Returns

`Promise`\<[`UnsubCallback`](../../types/type-aliases/UnsubCallback.mdx)\>

Promise that resolves to an unsubscribe function

##### Note

can be subscribed to, if connected to node using a web socket

##### Inherited from

[`Identity`](../../Identity/classes/Identity.mdx).[`getAssetBalance`](../../Identity/classes/Identity.mdx#getassetbalance)

#### Call Signature

> **getAssetBalance**(`args`: `object`, `callback`: [`SubCallback`](../../types/type-aliases/SubCallback.mdx)\<`BigNumber`\>): `Promise`\<[`UnsubCallback`](../../types/type-aliases/UnsubCallback.mdx)\>

Defined in: [src/api/entities/Identity/index.ts:251](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Identity/index.ts#L251)

Retrieve the balance of a particular Asset by Asset ID (with subscription support)

##### Parameters

Parameter
Type
Description

`args`

\{ `assetId`: `string`; \}

&hyphen;

`args.assetId`

`string`

Asset identifier

`callback`

[`SubCallback`](../../types/type-aliases/SubCallback.mdx)\<`BigNumber`\>

Callback function that receives balance updates

##### Returns

`Promise`\<[`UnsubCallback`](../../types/type-aliases/UnsubCallback.mdx)\>

Promise that resolves to an unsubscribe function

##### Note

can be subscribed to, if connected to node using a web socket

##### Inherited from

[`Identity`](../../Identity/classes/Identity.mdx).[`getAssetBalance`](../../Identity/classes/Identity.mdx#getassetbalance)

***

### ~~getChildIdentities()~~

> **getChildIdentities**(): `Promise`\<[`ChildIdentity`](../../Identity/ChildIdentity/classes/ChildIdentity.mdx)[]\>

Defined in: [src/api/entities/Identity/index.ts:1082](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Identity/index.ts#L1082)

Returns the list of all child identities

#### Returns

`Promise`\<[`ChildIdentity`](../../Identity/ChildIdentity/classes/ChildIdentity.mdx)[]\>

#### Note

this query can be potentially **SLOW** depending on the number of parent Identities present on the chain

#### Deprecated

Child identites are no longer supported in chain v8

#### Inherited from

[`Identity`](../../Identity/classes/Identity.mdx).[`getChildIdentities`](../../Identity/classes/Identity.mdx#getchildidentities)

***

### getHeldAssets()

> **getHeldAssets**(`opts?`: `object`): `Promise`\<[`ResultSet`](../../types/interfaces/ResultSet.mdx)\<[`FungibleAsset`](../../Asset/Fungible/classes/FungibleAsset.mdx)\>\>

Defined in: [src/api/entities/Identity/index.ts:440](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Identity/index.ts#L440)

Retrieve a list of all Assets which were held at one point by this Identity

#### Parameters

Parameter
Type

`opts`

\{ `order?`: [`AssetHoldersOrderBy`](../../../../types/enumerations/AssetHoldersOrderBy.mdx); `size?`: `BigNumber`; `start?`: `BigNumber`; \}

`opts.order?`

[`AssetHoldersOrderBy`](../../../../types/enumerations/AssetHoldersOrderBy.mdx)

`opts.size?`

`BigNumber`

`opts.start?`

`BigNumber`

#### Returns

`Promise`\<[`ResultSet`](../../types/interfaces/ResultSet.mdx)\<[`FungibleAsset`](../../Asset/Fungible/classes/FungibleAsset.mdx)\>\>

#### Note

uses the middlewareV2

#### Note

supports pagination

#### Inherited from

[`Identity`](../../Identity/classes/Identity.mdx).[`getHeldAssets`](../../Identity/classes/Identity.mdx#getheldassets)

***

### getHeldNfts()

> **getHeldNfts**(`opts?`: `object`): `Promise`\<[`ResultSet`](../../types/interfaces/ResultSet.mdx)\<[`HeldNfts`](../../Asset/types/interfaces/HeldNfts.mdx)\>\>

Defined in: [src/api/entities/Identity/index.ts:487](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Identity/index.ts#L487)

Retrieve a list of all NftCollections which were held at one point by this Identity

#### Parameters

Parameter
Type

`opts`

\{ `order?`: [`NftHoldersOrderBy`](../../../../types/enumerations/NftHoldersOrderBy.mdx); `size?`: `BigNumber`; `start?`: `BigNumber`; \}

`opts.order?`

[`NftHoldersOrderBy`](../../../../types/enumerations/NftHoldersOrderBy.mdx)

`opts.size?`

`BigNumber`

`opts.start?`

`BigNumber`

#### Returns

`Promise`\<[`ResultSet`](../../types/interfaces/ResultSet.mdx)\<[`HeldNfts`](../../Asset/types/interfaces/HeldNfts.mdx)\>\>

#### Note

uses the middlewareV2

#### Note

supports pagination

#### Inherited from

[`Identity`](../../Identity/classes/Identity.mdx).[`getHeldNfts`](../../Identity/classes/Identity.mdx#getheldnfts)

***

### getHistoricalInstructions()

> **getHistoricalInstructions**(`filter?`: `Omit`\<[`HistoricalInstructionFilters`](../../../client/types/interfaces/HistoricalInstructionFilters.mdx), `"identity"`\>): `Promise`\<[`ResultSet`](../../types/interfaces/ResultSet.mdx)\<[`HistoricInstruction`](../../Venue/types/type-aliases/HistoricInstruction.mdx)\>\>

Defined in: [src/api/entities/Identity/index.ts:1050](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Identity/index.ts#L1050)

Retrieve all Instructions that have been associated with this Identity's DID

#### Parameters

Parameter
Type

`filter?`

`Omit`\<[`HistoricalInstructionFilters`](../../../client/types/interfaces/HistoricalInstructionFilters.mdx), `"identity"`\>

#### Returns

`Promise`\<[`ResultSet`](../../types/interfaces/ResultSet.mdx)\<[`HistoricInstruction`](../../Venue/types/type-aliases/HistoricInstruction.mdx)\>\>

#### Note

uses the middleware V2

#### Note

supports pagination

#### Inherited from

[`Identity`](../../Identity/classes/Identity.mdx).[`getHistoricalInstructions`](../../Identity/classes/Identity.mdx#gethistoricalinstructions)

***

### getInstructions()

> **getInstructions**(): `Promise`\<[`GroupedInstructions`](../../Instruction/types/interfaces/GroupedInstructions.mdx)\>

Defined in: [src/api/entities/Identity/index.ts:618](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Identity/index.ts#L618)

Retrieve all Instructions where this Identity is either the custodian of one or more portfolios in the legs or owns one or more accounts in the legs,
  grouped by status

#### Returns

`Promise`\<[`GroupedInstructions`](../../Instruction/types/interfaces/GroupedInstructions.mdx)\>

#### Inherited from

[`Identity`](../../Identity/classes/Identity.mdx).[`getInstructions`](../../Identity/classes/Identity.mdx#getinstructions)

***

### getInvolvedInstructions()

> **getInvolvedInstructions**(): `Promise`\<[`GroupedInvolvedInstructions`](../../Instruction/types/interfaces/GroupedInvolvedInstructions.mdx)\>

Defined in: [src/api/entities/Identity/index.ts:731](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Identity/index.ts#L731)

Retrieve all Instructions where this Identity is a participant (owner/custodian),
  grouped by the role of the Identity and Instruction status

#### Returns

`Promise`\<[`GroupedInvolvedInstructions`](../../Instruction/types/interfaces/GroupedInvolvedInstructions.mdx)\>

#### Inherited from

[`Identity`](../../Identity/classes/Identity.mdx).[`getInvolvedInstructions`](../../Identity/classes/Identity.mdx#getinvolvedinstructions)

***

### getMultiSigSigners()

> **getMultiSigSigners**(): `Promise`\<[`MultiSigSigners`](../../Account/MultiSig/types/interfaces/MultiSigSigners.mdx)[]\>

Defined in: [src/api/entities/Identity/index.ts:1232](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Identity/index.ts#L1232)

Returns the list of MultiSig accounts along with their signatories this identity has responsibility for.
The roles possible are:
- Admin: The identity is able to unilaterally modify the MultiSig properties, such as the signers and signatures required for a proposal
- Payer: The identity's primary key will be deducted any POLYX fees the MultiSig may incur

#### Returns

`Promise`\<[`MultiSigSigners`](../../Account/MultiSig/types/interfaces/MultiSigSigners.mdx)[]\>

#### Note

this query can be potentially **SLOW** depending on the number of MultiSigs present on the chain

#### Inherited from

[`Identity`](../../Identity/classes/Identity.mdx).[`getMultiSigSigners`](../../Identity/classes/Identity.mdx#getmultisigsigners)

***

### getOffChainAuthorizationNonce()

> **getOffChainAuthorizationNonce**(): `Promise`\<`BigNumber`\>

Defined in: [src/api/entities/Identity/index.ts:1310](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Identity/index.ts#L1310)

Returns the off chain authorization nonce for this Identity

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

[`Identity`](../../Identity/classes/Identity.mdx).[`getOffChainAuthorizationNonce`](../../Identity/classes/Identity.mdx#getoffchainauthorizationnonce)

***

### getPendingDistributions()

> **getPendingDistributions**(): `Promise`\<[`DistributionWithDetails`](../../types/interfaces/DistributionWithDetails.mdx)[]\>

Defined in: [src/api/entities/Identity/index.ts:854](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Identity/index.ts#L854)

Retrieve every Dividend Distribution for which this Identity is eligible and hasn't been paid

#### Returns

`Promise`\<[`DistributionWithDetails`](../../types/interfaces/DistributionWithDetails.mdx)[]\>

#### Note

uses the middleware

#### Note

this query can be potentially **SLOW** depending on which Assets this Identity has held

#### Inherited from

[`Identity`](../../Identity/classes/Identity.mdx).[`getPendingDistributions`](../../Identity/classes/Identity.mdx#getpendingdistributions)

***

### getPrimaryAccount()

#### Call Signature

> **getPrimaryAccount**(): `Promise`\<[`PermissionedAccount`](../../types/interfaces/PermissionedAccount.mdx)\>

Defined in: [src/api/entities/Identity/index.ts:366](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Identity/index.ts#L366)

Retrieve the primary Account associated with the Identity

##### Returns

`Promise`\<[`PermissionedAccount`](../../types/interfaces/PermissionedAccount.mdx)\>

Promise that resolves to the primary Account information

##### Inherited from

[`Identity`](../../Identity/classes/Identity.mdx).[`getPrimaryAccount`](../../Identity/classes/Identity.mdx#getprimaryaccount)

#### Call Signature

> **getPrimaryAccount**(`callback`: [`SubCallback`](../../types/type-aliases/SubCallback.mdx)\<[`PermissionedAccount`](../../types/interfaces/PermissionedAccount.mdx)\>): `Promise`\<[`UnsubCallback`](../../types/type-aliases/UnsubCallback.mdx)\>

Defined in: [src/api/entities/Identity/index.ts:377](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Identity/index.ts#L377)

Retrieve the primary Account associated with the Identity (with subscription support)

##### Parameters

Parameter
Type
Description

`callback`

[`SubCallback`](../../types/type-aliases/SubCallback.mdx)\<[`PermissionedAccount`](../../types/interfaces/PermissionedAccount.mdx)\>

Callback function that receives primary Account updates

##### Returns

`Promise`\<[`UnsubCallback`](../../types/type-aliases/UnsubCallback.mdx)\>

Promise that resolves to an unsubscribe function

##### Note

can be subscribed to, if connected to node using a web socket

##### Inherited from

[`Identity`](../../Identity/classes/Identity.mdx).[`getPrimaryAccount`](../../Identity/classes/Identity.mdx#getprimaryaccount)

***

### getSecondaryAccounts()

#### Call Signature

> **getSecondaryAccounts**(`paginationOpts?`: [`PaginationOptions`](../../types/interfaces/PaginationOptions.mdx)): `Promise`\<[`ResultSet`](../../types/interfaces/ResultSet.mdx)\<[`PermissionedAccount`](../../types/interfaces/PermissionedAccount.mdx)\>\>

Defined in: [src/api/entities/Identity/index.ts:913](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Identity/index.ts#L913)

Get the list of secondary Accounts related to the Identity

##### Parameters

Parameter
Type
Description

`paginationOpts?`

[`PaginationOptions`](../../types/interfaces/PaginationOptions.mdx)

Options for pagination

##### Returns

`Promise`\<[`ResultSet`](../../types/interfaces/ResultSet.mdx)\<[`PermissionedAccount`](../../types/interfaces/PermissionedAccount.mdx)\>\>

Promise that resolves to a paginated result of secondary accounts

##### Note

supports pagination

##### Inherited from

[`Identity`](../../Identity/classes/Identity.mdx).[`getSecondaryAccounts`](../../Identity/classes/Identity.mdx#getsecondaryaccounts)

#### Call Signature

> **getSecondaryAccounts**(`callback`: [`SubCallback`](../../types/type-aliases/SubCallback.mdx)\<[`PermissionedAccount`](../../types/interfaces/PermissionedAccount.mdx)[]\>): `Promise`\<[`UnsubCallback`](../../types/type-aliases/UnsubCallback.mdx)\>

Defined in: [src/api/entities/Identity/index.ts:926](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Identity/index.ts#L926)

Get the list of secondary Accounts related to the Identity (with subscription support)

##### Parameters

Parameter
Type
Description

`callback`

[`SubCallback`](../../types/type-aliases/SubCallback.mdx)\<[`PermissionedAccount`](../../types/interfaces/PermissionedAccount.mdx)[]\>

Callback function that receives secondary account updates

##### Returns

`Promise`\<[`UnsubCallback`](../../types/type-aliases/UnsubCallback.mdx)\>

Promise that resolves to an unsubscribe function

##### Note

can be subscribed to, if connected to node using a web socket

##### Inherited from

[`Identity`](../../Identity/classes/Identity.mdx).[`getSecondaryAccounts`](../../Identity/classes/Identity.mdx#getsecondaryaccounts)

#### Call Signature

> **getSecondaryAccounts**(`paginationOpts`: [`PaginationOptions`](../../types/interfaces/PaginationOptions.mdx), `callback`: [`SubCallback`](../../types/type-aliases/SubCallback.mdx)\<[`PermissionedAccount`](../../types/interfaces/PermissionedAccount.mdx)[]\>): `Promise`\<[`UnsubCallback`](../../types/type-aliases/UnsubCallback.mdx)\>

Defined in: [src/api/entities/Identity/index.ts:941](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Identity/index.ts#L941)

Get the list of secondary Accounts related to the Identity (with pagination and subscription support)

##### Parameters

Parameter
Type
Description

`paginationOpts`

[`PaginationOptions`](../../types/interfaces/PaginationOptions.mdx)

Options for pagination

`callback`

[`SubCallback`](../../types/type-aliases/SubCallback.mdx)\<[`PermissionedAccount`](../../types/interfaces/PermissionedAccount.mdx)[]\>

Callback function that receives secondary account updates

##### Returns

`Promise`\<[`UnsubCallback`](../../types/type-aliases/UnsubCallback.mdx)\>

Promise that resolves to an unsubscribe function

##### Note

supports pagination

##### Note

can be subscribed to, if connected to node using a web socket

##### Inherited from

[`Identity`](../../Identity/classes/Identity.mdx).[`getSecondaryAccounts`](../../Identity/classes/Identity.mdx#getsecondaryaccounts)

***

### getTrustingAssets()

> **getTrustingAssets**(): `Promise`\<[`FungibleAsset`](../../Asset/Fungible/classes/FungibleAsset.mdx)[]\>

Defined in: [src/api/entities/Identity/index.ts:571](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Identity/index.ts#L571)

Get the list of Assets for which this Identity is a trusted claim issuer

#### Returns

`Promise`\<[`FungibleAsset`](../../Asset/Fungible/classes/FungibleAsset.mdx)[]\>

#### Note

uses the middlewareV2

#### Inherited from

[`Identity`](../../Identity/classes/Identity.mdx).[`getTrustingAssets`](../../Identity/classes/Identity.mdx#gettrustingassets)

***

### getVenues()

> **getVenues**(): `Promise`\<[`Venue`](../../Venue/classes/Venue.mdx)[]\>

Defined in: [src/api/entities/Identity/index.ts:590](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Identity/index.ts#L590)

Retrieve all Venues created by this Identity

#### Returns

`Promise`\<[`Venue`](../../Venue/classes/Venue.mdx)[]\>

#### Inherited from

[`Identity`](../../Identity/classes/Identity.mdx).[`getVenues`](../../Identity/classes/Identity.mdx#getvenues)

***

### hasRole()

> **hasRole**(`role`: [`Role`](../../../procedures/types/type-aliases/Role.mdx)): `Promise`\<`boolean`\>

Defined in: [src/api/entities/Identity/index.ts:162](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Identity/index.ts#L162)

Check whether this Identity possesses the specified Role

#### Parameters

Parameter
Type

`role`

[`Role`](../../../procedures/types/type-aliases/Role.mdx)

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

[`Identity`](../../Identity/classes/Identity.mdx).[`hasRole`](../../Identity/classes/Identity.mdx#hasrole)

***

### ~~hasValidCdd()~~

> **hasValidCdd**(): `Promise`\<`boolean`\>

Defined in: [src/api/entities/Identity/index.ts:304](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Identity/index.ts#L304)

Check whether this Identity has a valid CDD claim

#### Returns

`Promise`\<`boolean`\>

#### Deprecated

CDD claims are discontinued from chain v8. If invoked with a v8 chain, this returns true if DID exists

#### Inherited from

[`Identity`](../../Identity/classes/Identity.mdx).[`hasValidCdd`](../../Identity/classes/Identity.mdx#hasvalidcdd)

***

### isAssetPreApproved()

> **isAssetPreApproved**(`asset`: `string` \| [`BaseAsset`](../../Asset/Base/BaseAsset/classes/BaseAsset.mdx)): `Promise`\<`boolean`\>

Defined in: [src/api/entities/Identity/index.ts:1171](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Identity/index.ts#L1171)

Returns whether or not this Identity has pre-approved a particular asset

#### Parameters

Parameter
Type

`asset`

`string` \| [`BaseAsset`](../../Asset/Base/BaseAsset/classes/BaseAsset.mdx)

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

[`Identity`](../../Identity/classes/Identity.mdx).[`isAssetPreApproved`](../../Identity/classes/Identity.mdx#isassetpreapproved)

***

### isCddProvider()

> **isCddProvider**(): `Promise`\<`boolean`\>

Defined in: [src/api/entities/Identity/index.ts:343](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Identity/index.ts#L343)

Check whether this Identity is a CDD provider

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

[`Identity`](../../Identity/classes/Identity.mdx).[`isCddProvider`](../../Identity/classes/Identity.mdx#iscddprovider)

***

### isChild()

> **isChild**(): `Promise`\<`boolean`\>

Defined in: [src/api/entities/Identity/index.ts:1126](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Identity/index.ts#L1126)

Check whether this Identity is a child Identity

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

[`Identity`](../../Identity/classes/Identity.mdx).[`isChild`](../../Identity/classes/Identity.mdx#ischild)

***

### isEqual()

> **isEqual**(`entity`: [`Entity`](../../Entity/classes/Entity.mdx)\<`unknown`, `unknown`\>): `boolean`

Defined in: [src/api/entities/Entity.ts:61](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Entity.ts#L61)

Determine whether this Entity is the same as another one

#### Parameters

Parameter
Type

`entity`

[`Entity`](../../Entity/classes/Entity.mdx)\<`unknown`, `unknown`\>

#### Returns

`boolean`

#### Inherited from

[`Identity`](../../Identity/classes/Identity.mdx).[`isEqual`](../../Identity/classes/Identity.mdx#isequal)

***

### isGcMember()

> **isGcMember**(): `Promise`\<`boolean`\>

Defined in: [src/api/entities/Identity/index.ts:326](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Identity/index.ts#L326)

Check whether this Identity is Governance Committee member

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

[`Identity`](../../Identity/classes/Identity.mdx).[`isGcMember`](../../Identity/classes/Identity.mdx#isgcmember)

***

### isMandatoryReceiverAffirmationEnabled()

> **isMandatoryReceiverAffirmationEnabled**(): `Promise`\<`boolean`\>

Defined in: [src/api/entities/Identity/index.ts:1196](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Identity/index.ts#L1196)

Returns whether or not this Identity has opted in to mandatory receiver affirmation.
When `true`, the identity must explicitly affirm incoming asset transfer in settlements
unless an asset level or portfolio level exemption applies.

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

[`Identity`](../../Identity/classes/Identity.mdx).[`isMandatoryReceiverAffirmationEnabled`](../../Identity/classes/Identity.mdx#ismandatoryreceiveraffirmationenabled)

***

### preApprovedAssets()

> **preApprovedAssets**(`paginationOpts?`: [`PaginationOptions`](../../types/interfaces/PaginationOptions.mdx)): `Promise`\<[`ResultSet`](../../types/interfaces/ResultSet.mdx)\<[`Asset`](../../Asset/types/type-aliases/Asset.mdx)\>\>

Defined in: [src/api/entities/Identity/index.ts:1137](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Identity/index.ts#L1137)

Returns a list of all assets this Identity has pre-approved. These assets will not require affirmation when being received in settlements

#### Parameters

Parameter
Type

`paginationOpts?`

[`PaginationOptions`](../../types/interfaces/PaginationOptions.mdx)

#### Returns

`Promise`\<[`ResultSet`](../../types/interfaces/ResultSet.mdx)\<[`Asset`](../../Asset/types/type-aliases/Asset.mdx)\>\>

#### Inherited from

[`Identity`](../../Identity/classes/Identity.mdx).[`preApprovedAssets`](../../Identity/classes/Identity.mdx#preapprovedassets)

***

### setMandatoryReceiverAffirmation()

> **setMandatoryReceiverAffirmation**(`args`: `object`, `opts?`: [`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)): `Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

Defined in: [src/api/entities/Identity/index.ts:1219](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Identity/index.ts#L1219)

Enable or disable mandatory receiver affirmation for incoming settlement transfers.
When enabled (`ReceiverAffirmationRequirement.Required`), the signing identity must explicitly affirm
any incoming asset transfer unless an asset level or portfolio level exemption applies.
When disabled (`ReceiverAffirmationRequirement.Automatic`), all incoming transfers are auto-affirmed.

#### Parameters

Parameter
Type

`args`

\{ `requirement`: [`ReceiverAffirmationRequirement`](../../Instruction/types/enumerations/ReceiverAffirmationRequirement.mdx); \}

`args.requirement`

[`ReceiverAffirmationRequirement`](../../Instruction/types/enumerations/ReceiverAffirmationRequirement.mdx)

`opts?`

[`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

#### Note

this method is of type [ProcedureMethod](../../../procedures/types/interfaces/ProcedureMethod.mdx), which means you can call [setMandatoryReceiverAffirmation.checkAuthorization](../../../procedures/types/interfaces/ProcedureMethod.mdx#checkauthorization) on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Inherited from

[`Identity`](../../Identity/classes/Identity.mdx).[`setMandatoryReceiverAffirmation`](../../Identity/classes/Identity.mdx#setmandatoryreceiveraffirmation)

***

### toHuman()

> **toHuman**(): `string`

Defined in: [src/api/entities/Identity/index.ts:1039](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Identity/index.ts#L1039)

Return the Identity's DID

#### Returns

`string`

#### Inherited from

[`Identity`](../../Identity/classes/Identity.mdx).[`toHuman`](../../Identity/classes/Identity.mdx#tohuman)

***

### trustedFor()

> **trustedFor**(): `Promise`\<[`TrustedFor`](../../types/type-aliases/TrustedFor.mdx)[] \| `null`\>

Defined in: [src/api/entities/DefaultTrustedClaimIssuer.ts:81](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/DefaultTrustedClaimIssuer.ts#L81)

Retrieve claim types for which this Claim Issuer is trusted. A null value means that the issuer is trusted for all claim types

#### Returns

`Promise`\<[`TrustedFor`](../../types/type-aliases/TrustedFor.mdx)[] \| `null`\>

***

### unlinkChild()

> **unlinkChild**(`args`: [`UnlinkChildParams`](../../../procedures/types/interfaces/UnlinkChildParams.mdx), `opts?`: [`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)): `Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

Defined in: [src/api/entities/Identity/index.ts:1121](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Identity/index.ts#L1121)

Unlinks a child identity

#### Parameters

Parameter
Type

`args`

[`UnlinkChildParams`](../../../procedures/types/interfaces/UnlinkChildParams.mdx)

`opts?`

[`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

#### Throws

if
 - the `child` is not a child of this identity
 - the transaction signer is not the primary key of the parent identity

#### Note

this method is of type [ProcedureMethod](../../../procedures/types/interfaces/ProcedureMethod.mdx), which means you can call [unlinkChild.checkAuthorization](../../../procedures/types/interfaces/ProcedureMethod.mdx#checkauthorization) on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Inherited from

[`Identity`](../../Identity/classes/Identity.mdx).[`unlinkChild`](../../Identity/classes/Identity.mdx#unlinkchild)

***

### generateUuid()

> `static` **generateUuid**\<`Identifiers`\>(`identifiers`: `Identifiers`): `string`

Defined in: [src/api/entities/Entity.ts:14](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Entity.ts#L14)

Generate the Entity's UUID from its identifying properties

#### Type Parameters

Type Parameter

`Identifiers`

#### Parameters

Parameter
Type
Description

`identifiers`

`Identifiers`

&hyphen;

#### Returns

`string`

#### Inherited from

[`Identity`](../../Identity/classes/Identity.mdx).[`generateUuid`](../../Identity/classes/Identity.mdx#generateuuid)

***

### unserialize()

> `static` **unserialize**\<`Identifiers`\>(`serialized`: `string`): `Identifiers`

Defined in: [src/api/entities/Entity.ts:23](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Entity.ts#L23)

Unserialize a UUID into its Unique Identifiers

#### Type Parameters

Type Parameter

`Identifiers`

#### Parameters

Parameter
Type
Description

`serialized`

`string`

UUID to unserialize

#### Returns

`Identifiers`

#### Inherited from

[`Identity`](../../Identity/classes/Identity.mdx).[`unserialize`](../../Identity/classes/Identity.mdx#unserialize)
