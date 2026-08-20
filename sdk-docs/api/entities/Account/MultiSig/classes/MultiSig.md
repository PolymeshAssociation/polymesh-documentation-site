# Class: MultiSig

> Defined in: [src/api/entities/Account/MultiSig/index.ts:49](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Account/MultiSig/index.ts#L49)

# Class: MultiSig

Defined in: [src/api/entities/Account/MultiSig/index.ts:49](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Account/MultiSig/index.ts#L49)

Represents a MultiSig Account. A MultiSig Account is composed of one or more signing Accounts. In order to submit a transaction, a specific amount of those signing Accounts must approve it first

## Extends

- [`Account`](../../classes/Account.mdx)

## Properties

### address

> **address**: `string`

Defined in: [src/api/entities/Account/index.ts:110](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Account/index.ts#L110)

Polymesh-specific address of the Account. Serves as an identifier

#### Inherited from

[`Account`](../../classes/Account.mdx).[`address`](../../classes/Account.mdx#address)

***

### authorizations

> **authorizations**: [`Authorizations`](../../../common/namespaces/Authorizations/classes/Authorizations.mdx)\<[`Account`](../../classes/Account.mdx)\>

Defined in: [src/api/entities/Account/index.ts:119](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Account/index.ts#L119)

#### Inherited from

[`Account`](../../classes/Account.mdx).[`authorizations`](../../classes/Account.mdx#authorizations)

***

### key

> **key**: `string`

Defined in: [src/api/entities/Account/index.ts:116](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Account/index.ts#L116)

A hex representation of the cryptographic public key of the Account. This is consistent across
Substrate chains, while the address depends on the chain as well.

#### Inherited from

[`Account`](../../classes/Account.mdx).[`key`](../../classes/Account.mdx#key)

***

### staking

> **staking**: [`Staking`](../../Staking/classes/Staking.mdx)

Defined in: [src/api/entities/Account/index.ts:121](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Account/index.ts#L121)

#### Inherited from

[`Account`](../../classes/Account.mdx).[`staking`](../../classes/Account.mdx#staking)

***

### subsidies

> **subsidies**: [`Subsidies`](../../../Subsidies/classes/Subsidies.mdx)

Defined in: [src/api/entities/Account/index.ts:120](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Account/index.ts#L120)

#### Inherited from

[`Account`](../../classes/Account.mdx).[`subsidies`](../../classes/Account.mdx#subsidies)

***

### uuid

> **uuid**: `string`

Defined in: [src/api/entities/Entity.ts:46](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Entity.ts#L46)

#### Inherited from

[`Account`](../../classes/Account.mdx).[`uuid`](../../classes/Account.mdx#uuid)

## Methods

### checkPermissions()

> **checkPermissions**(`permissions`: [`SimplePermissions`](../../../types/interfaces/SimplePermissions.mdx)): `Promise`\<[`CheckPermissionsResult`](../../../types/interfaces/CheckPermissionsResult.mdx)\<[`Account`](../../../types/enumerations/SignerType.mdx#account)\>\>

Defined in: [src/api/entities/Account/index.ts:394](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Account/index.ts#L394)

Check if this Account possesses certain Permissions to act on behalf of its corresponding Identity

#### Parameters

Parameter
Type

`permissions`

[`SimplePermissions`](../../../types/interfaces/SimplePermissions.mdx)

#### Returns

`Promise`\<[`CheckPermissionsResult`](../../../types/interfaces/CheckPermissionsResult.mdx)\<[`Account`](../../../types/enumerations/SignerType.mdx#account)\>\>

which permissions the Account is missing (if any) and the final result

#### Inherited from

[`Account`](../../classes/Account.mdx).[`checkPermissions`](../../classes/Account.mdx#checkpermissions)

***

### details()

> **details**(): `Promise`\<[`MultiSigDetails`](../types/interfaces/MultiSigDetails.mdx)\>

Defined in: [src/api/entities/Account/MultiSig/index.ts:80](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Account/MultiSig/index.ts#L80)

Return details about this MultiSig such as the signing Accounts and the required number of signatures to execute a MultiSigProposal

#### Returns

`Promise`\<[`MultiSigDetails`](../types/interfaces/MultiSigDetails.mdx)\>

***

### exists()

> **exists**(): `Promise`\<`boolean`\>

Defined in: [src/api/entities/Account/index.ts:477](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Account/index.ts#L477)

Determine whether this Account exists on chain

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

[`Account`](../../classes/Account.mdx).[`exists`](../../classes/Account.mdx#exists)

***

### getAdmin()

> **getAdmin**(): `Promise`\<[`Identity`](../../../Identity/classes/Identity.mdx) \| `null`\>

Defined in: [src/api/entities/Account/MultiSig/index.ts:264](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Account/MultiSig/index.ts#L264)

Returns the Identity of the MultiSig admin. This Identity can add or remove signers directly without creating a MultiSigProposal first.

#### Returns

`Promise`\<[`Identity`](../../../Identity/classes/Identity.mdx) \| `null`\>

***

### getAssetBalances()

> **getAssetBalances**(`args?`: `object`): `Promise`\<[`PortfolioBalance`](../../../Portfolio/types/interfaces/PortfolioBalance.mdx)[]\>

Defined in: [src/api/entities/Account/index.ts:676](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Account/index.ts#L676)

Retrieve the balances of all fungible assets in this Account

#### Parameters

Parameter
Type
Description

`args?`

\{ `assets`: (`string` \| [`FungibleAsset`](../../../Asset/Fungible/classes/FungibleAsset.mdx))[]; \}

&hyphen;

`args.assets?`

(`string` \| [`FungibleAsset`](../../../Asset/Fungible/classes/FungibleAsset.mdx))[]

array of FungibleAssets (or tickers) for which to fetch balances (optional, all balances are retrieved if not passed)

#### Returns

`Promise`\<[`PortfolioBalance`](../../../Portfolio/types/interfaces/PortfolioBalance.mdx)[]\>

#### Inherited from

[`Account`](../../classes/Account.mdx).[`getAssetBalances`](../../classes/Account.mdx#getassetbalances)

***

### getBalance()

#### Call Signature

> **getBalance**(): `Promise`\<[`AccountBalance`](../../types/interfaces/AccountBalance.mdx)\>

Defined in: [src/api/entities/Account/index.ts:145](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Account/index.ts#L145)

Get the free/locked POLYX balance of the Account

##### Returns

`Promise`\<[`AccountBalance`](../../types/interfaces/AccountBalance.mdx)\>

Promise that resolves to the Account's POLYX balance information

##### Inherited from

[`Account`](../../classes/Account.mdx).[`getBalance`](../../classes/Account.mdx#getbalance)

#### Call Signature

> **getBalance**(`callback`: [`SubCallback`](../../../types/type-aliases/SubCallback.mdx)\<[`AccountBalance`](../../types/interfaces/AccountBalance.mdx)\>): `Promise`\<[`UnsubCallback`](../../../types/type-aliases/UnsubCallback.mdx)\>

Defined in: [src/api/entities/Account/index.ts:156](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Account/index.ts#L156)

Get the free/locked POLYX balance of the Account (with subscription support)

##### Parameters

Parameter
Type
Description

`callback`

[`SubCallback`](../../../types/type-aliases/SubCallback.mdx)\<[`AccountBalance`](../../types/interfaces/AccountBalance.mdx)\>

Callback function that receives balance updates

##### Returns

`Promise`\<[`UnsubCallback`](../../../types/type-aliases/UnsubCallback.mdx)\>

Promise that resolves to an unsubscribe function

##### Note

can be subscribed to, if connected to node using a web socket

##### Inherited from

[`Account`](../../classes/Account.mdx).[`getBalance`](../../classes/Account.mdx#getbalance)

***

### getCollections()

> **getCollections**(`args?`: `object`): `Promise`\<[`PortfolioCollection`](../../../Portfolio/types/interfaces/PortfolioCollection.mdx)[]\>

Defined in: [src/api/entities/Account/index.ts:756](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Account/index.ts#L756)

Retrieve the NFTs held in this Account

#### Parameters

Parameter
Type
Description

`args?`

\{ `collections`: (`string` \| [`NftCollection`](../../../Asset/NonFungible/NftCollection/classes/NftCollection.mdx))[]; \}

&hyphen;

`args.collections?`

(`string` \| [`NftCollection`](../../../Asset/NonFungible/NftCollection/classes/NftCollection.mdx))[]

array of NftCollection (or tickers) for which to fetch holdings (optional, all holdings are retrieved if not passed)

#### Returns

`Promise`\<[`PortfolioCollection`](../../../Portfolio/types/interfaces/PortfolioCollection.mdx)[]\>

#### Inherited from

[`Account`](../../classes/Account.mdx).[`getCollections`](../../classes/Account.mdx#getcollections)

***

### getCurrentNonce()

> **getCurrentNonce**(): `Promise`\<`BigNumber`\>

Defined in: [src/api/entities/Account/index.ts:491](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Account/index.ts#L491)

Retrieve the current nonce for this Account

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

[`Account`](../../classes/Account.mdx).[`getCurrentNonce`](../../classes/Account.mdx#getcurrentnonce)

***

### getHistoricalProposals()

> **getHistoricalProposals**(`opts?`: `object`): `Promise`\<[`ResultSet`](../../../types/interfaces/ResultSet.mdx)\<[`HistoricalMultiSigProposal`](../types/interfaces/HistoricalMultiSigProposal.mdx)\>\>

Defined in: [src/api/entities/Account/MultiSig/index.ts:198](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Account/MultiSig/index.ts#L198)

Return a set of [MultiSigProposal](../../../MultiSigProposal/classes/MultiSigProposal.mdx) for this MultiSig Account

#### Parameters

Parameter
Type

`opts?`

\{ `size?`: `BigNumber`; `start?`: `BigNumber`; \}

`opts.size?`

`BigNumber`

`opts.start?`

`BigNumber`

#### Returns

`Promise`\<[`ResultSet`](../../../types/interfaces/ResultSet.mdx)\<[`HistoricalMultiSigProposal`](../types/interfaces/HistoricalMultiSigProposal.mdx)\>\>

#### Note

uses the middlewareV2

***

### getIdentity()

> **getIdentity**(): `Promise`\<[`Identity`](../../../Identity/classes/Identity.mdx) \| `null`\>

Defined in: [src/api/entities/Account/index.ts:175](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Account/index.ts#L175)

Retrieve the Identity associated to this Account (null if there is none)

#### Returns

`Promise`\<[`Identity`](../../../Identity/classes/Identity.mdx) \| `null`\>

#### Inherited from

[`Account`](../../classes/Account.mdx).[`getIdentity`](../../classes/Account.mdx#getidentity)

***

### getMultiSig()

> **getMultiSig**(): `Promise`\<`MultiSig` \| `null`\>

Defined in: [src/api/entities/Account/index.ts:449](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Account/index.ts#L449)

Fetch the MultiSig this Account is part of. If this Account is not a signer on any MultiSig, return null

#### Returns

`Promise`\<`MultiSig` \| `null`\>

#### Inherited from

[`Account`](../../classes/Account.mdx).[`getMultiSig`](../../classes/Account.mdx#getmultisig)

***

### getNextAssetId()

> **getNextAssetId**(): `Promise`\<`string`\>

Defined in: [src/api/entities/Account/index.ts:629](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Account/index.ts#L629)

Returns next assetID that will be generated for this Identity

#### Returns

`Promise`\<`string`\>

#### Inherited from

[`Account`](../../classes/Account.mdx).[`getNextAssetId`](../../classes/Account.mdx#getnextassetid)

***

### getOffChainReceipts()

> **getOffChainReceipts**(): `Promise`\<`BigNumber`[]\>

Defined in: [src/api/entities/Account/index.ts:602](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Account/index.ts#L602)

Returns all off chain receipts used by this Account

#### Returns

`Promise`\<`BigNumber`[]\>

#### Inherited from

[`Account`](../../classes/Account.mdx).[`getOffChainReceipts`](../../classes/Account.mdx#getoffchainreceipts)

***

### getPayer()

> **getPayer**(): `Promise`\<[`Identity`](../../../Identity/classes/Identity.mdx) \| `null`\>

Defined in: [src/api/entities/Account/MultiSig/index.ts:290](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Account/MultiSig/index.ts#L290)

Returns the payer for the MultiSig, if set the primary account of the identity will pay for any fees the MultiSig may incur

#### Returns

`Promise`\<[`Identity`](../../../Identity/classes/Identity.mdx) \| `null`\>

***

### getPendingProposals()

> **getPendingProposals**(): `Promise`\<[`MultiSigProposal`](../../../MultiSigProposal/classes/MultiSigProposal.mdx)[]\>

Defined in: [src/api/entities/Account/index.ts:586](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Account/index.ts#L586)

Returns pending MultiSig proposals for this Account

#### Returns

`Promise`\<[`MultiSigProposal`](../../../MultiSigProposal/classes/MultiSigProposal.mdx)[]\>

#### Note

uses the middleware

#### Throws

if the Account is not a signer on any MultiSig

#### Inherited from

[`Account`](../../classes/Account.mdx).[`getPendingProposals`](../../classes/Account.mdx#getpendingproposals)

***

### getPermissions()

> **getPermissions**(): `Promise`\<[`Permissions`](../../../types/interfaces/Permissions.mdx)\>

Defined in: [src/api/entities/Account/index.ts:341](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Account/index.ts#L341)

Retrieve the Permissions this Account has as a Permissioned Account for its corresponding Identity

#### Returns

`Promise`\<[`Permissions`](../../../types/interfaces/Permissions.mdx)\>

#### Throws

if there is no Identity associated with the Account

#### Inherited from

[`Account`](../../classes/Account.mdx).[`getPermissions`](../../classes/Account.mdx#getpermissions)

***

### getPolyxTransactions()

> **getPolyxTransactions**(`filters`: `object`): `Promise`\<[`ResultSet`](../../../types/interfaces/ResultSet.mdx)\<[`HistoricPolyxTransaction`](../../types/interfaces/HistoricPolyxTransaction.mdx)\>\>

Defined in: [src/api/entities/Account/index.ts:568](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Account/index.ts#L568)

Returns POLYX transactions associated with this account

#### Parameters

Parameter
Type
Description

`filters`

\{ `size?`: `BigNumber`; `start?`: `BigNumber`; \}

&hyphen;

`filters.size?`

`BigNumber`

page size

`filters.start?`

`BigNumber`

page offset

#### Returns

`Promise`\<[`ResultSet`](../../../types/interfaces/ResultSet.mdx)\<[`HistoricPolyxTransaction`](../../types/interfaces/HistoricPolyxTransaction.mdx)\>\>

#### Note

uses the middleware

#### Inherited from

[`Account`](../../classes/Account.mdx).[`getPolyxTransactions`](../../classes/Account.mdx#getpolyxtransactions)

***

### getProposal()

> **getProposal**(`args`: `object`): `Promise`\<[`MultiSigProposal`](../../../MultiSigProposal/classes/MultiSigProposal.mdx)\>

Defined in: [src/api/entities/Account/MultiSig/index.ts:116](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Account/MultiSig/index.ts#L116)

Given an ID, fetch a [MultiSigProposal](../../../MultiSigProposal/classes/MultiSigProposal.mdx) for this MultiSig

#### Parameters

Parameter
Type

`args`

\{ `id`: `BigNumber`; \}

`args.id`

`BigNumber`

#### Returns

`Promise`\<[`MultiSigProposal`](../../../MultiSigProposal/classes/MultiSigProposal.mdx)\>

#### Throws

if the MultiSigProposal is not found

***

### getProposals()

> **getProposals**(): `Promise`\<[`MultiSigProposal`](../../../MultiSigProposal/classes/MultiSigProposal.mdx)[]\>

Defined in: [src/api/entities/Account/MultiSig/index.ts:136](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Account/MultiSig/index.ts#L136)

Return all active [MultiSig Proposals](../../../MultiSigProposal/classes/MultiSigProposal.mdx) for this MultiSig Account

#### Returns

`Promise`\<[`MultiSigProposal`](../../../MultiSigProposal/classes/MultiSigProposal.mdx)[]\>

***

### getTransactionHistory()

> **getTransactionHistory**(`filters?`: `object`): `Promise`\<[`ResultSet`](../../../types/interfaces/ResultSet.mdx)\<[`ExtrinsicData`](../../../../client/types/interfaces/ExtrinsicData.mdx)\>\>

Defined in: [src/api/entities/Account/index.ts:211](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Account/index.ts#L211)

Retrieve a list of transactions signed by this Account. Can be filtered using parameters

#### Parameters

Parameter
Type
Description

`filters`

\{ `blockHash?`: `string`; `blockNumber?`: `BigNumber`; `orderBy?`: [`ExtrinsicsOrderBy`](../../../../../types/enumerations/ExtrinsicsOrderBy.mdx); `size?`: `BigNumber`; `start?`: `BigNumber`; `success?`: `boolean`; `tag?`: [`TxTag`](../../../../../types/type-aliases/TxTag.mdx); \}

&hyphen;

`filters.blockHash?`

`string`

&hyphen;

`filters.blockNumber?`

`BigNumber`

&hyphen;

`filters.orderBy?`

[`ExtrinsicsOrderBy`](../../../../../types/enumerations/ExtrinsicsOrderBy.mdx)

&hyphen;

`filters.size?`

`BigNumber`

page size

`filters.start?`

`BigNumber`

page offset

`filters.success?`

`boolean`

whether the transaction was successful or not

`filters.tag?`

[`TxTag`](../../../../../types/type-aliases/TxTag.mdx)

tag associated with the transaction

#### Returns

`Promise`\<[`ResultSet`](../../../types/interfaces/ResultSet.mdx)\<[`ExtrinsicData`](../../../../client/types/interfaces/ExtrinsicData.mdx)\>\>

#### Note

if both `blockNumber` and `blockHash` are passed, only `blockNumber` is taken into account.
Also, for ordering by block_id, one should pass `ExtrinsicsOrderBy.BlockIdAsc` or `ExtrinsicsOrderBy.BlockIdDesc`
in order of their choice (since block ID is a string field in middleware v2)

#### Note

uses the middleware v2

#### Inherited from

[`Account`](../../classes/Account.mdx).[`getTransactionHistory`](../../classes/Account.mdx#gettransactionhistory)

***

### getTypeInfo()

> **getTypeInfo**(): `Promise`\<[`AccountTypeInfo`](../../types/interfaces/AccountTypeInfo.mdx)\>

Defined in: [src/api/entities/Account/index.ts:512](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Account/index.ts#L512)

Retrieve the type of Account, and its relation to an Identity, if applicable

#### Returns

`Promise`\<[`AccountTypeInfo`](../../types/interfaces/AccountTypeInfo.mdx)\>

#### Inherited from

[`Account`](../../classes/Account.mdx).[`getTypeInfo`](../../classes/Account.mdx#gettypeinfo)

***

### isEqual()

> **isEqual**(`entity`: [`Entity`](../../../Entity/classes/Entity.mdx)\<`unknown`, `unknown`\>): `boolean`

Defined in: [src/api/entities/Entity.ts:61](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Entity.ts#L61)

Determine whether this Entity is the same as another one

#### Parameters

Parameter
Type

`entity`

[`Entity`](../../../Entity/classes/Entity.mdx)\<`unknown`, `unknown`\>

#### Returns

`boolean`

#### Inherited from

[`Account`](../../classes/Account.mdx).[`isEqual`](../../classes/Account.mdx#isequal)

***

### isFrozen()

> **isFrozen**(): `Promise`\<`boolean`\>

Defined in: [src/api/entities/Account/index.ts:320](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Account/index.ts#L320)

Check whether this Account is frozen. If frozen, it cannot perform any Identity related action until the primary Account of the Identity unfreezes all secondary Accounts

#### Returns

`Promise`\<`boolean`\>

#### Note

returns false if the Account isn't associated to any Identity

#### Inherited from

[`Account`](../../classes/Account.mdx).[`isFrozen`](../../classes/Account.mdx#isfrozen)

***

### modify()

> **modify**(`args`: `Pick`\<[`ModifyMultiSigParams`](../../../../procedures/types/interfaces/ModifyMultiSigParams.mdx), `"signers"` \| `"requiredSignatures"`\>, `opts?`: [`ProcedureOpts`](../../../../procedures/types/interfaces/ProcedureOpts.mdx)): `Promise`\<[`GenericPolymeshTransaction`](../../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

Defined in: [src/api/entities/Account/MultiSig/index.ts:315](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Account/MultiSig/index.ts#L315)

Modify the signers for the MultiSig. The signing Account must belong to the Identity of the creator of the MultiSig

#### Parameters

Parameter
Type

`args`

`Pick`\<[`ModifyMultiSigParams`](../../../../procedures/types/interfaces/ModifyMultiSigParams.mdx), `"signers"` \| `"requiredSignatures"`\>

`opts?`

[`ProcedureOpts`](../../../../procedures/types/interfaces/ProcedureOpts.mdx)

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

#### Note

this method is of type [ProcedureMethod](../../../../procedures/types/interfaces/ProcedureMethod.mdx), which means you can call [modify.checkAuthorization](../../../../procedures/types/interfaces/ProcedureMethod.mdx#checkauthorization) on it to see whether the signing Account and Identity have the required roles and permissions to run it

***

### removePayer()

> **removePayer**(`opts?`: [`ProcedureOpts`](../../../../procedures/types/interfaces/ProcedureOpts.mdx)): `Promise`\<[`GenericPolymeshTransaction`](../../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

Defined in: [src/api/entities/Account/MultiSig/index.ts:332](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Account/MultiSig/index.ts#L332)

A MultiSig's creator is initially responsible for any fees the MultiSig may incur. This method allows for the
MultiSig to pay for it's own fees.

#### Parameters

Parameter
Type

`opts?`

[`ProcedureOpts`](../../../../procedures/types/interfaces/ProcedureOpts.mdx)

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

#### Note

This method must be called by one of the MultiSig signer's or by the paying identity.

#### Note

this method is of type [NoArgsProcedureMethod](../../../../procedures/types/interfaces/NoArgsProcedureMethod.mdx), which means you can call [removePayer.checkAuthorization](../../../../procedures/types/interfaces/NoArgsProcedureMethod.mdx#checkauthorization) on it to see whether the signing Account and Identity have the required roles and permissions to run it

***

### setAdmin()

> **setAdmin**(`args`: [`SetMultiSigAdminParams`](../../../../procedures/types/interfaces/SetMultiSigAdminParams.mdx), `opts?`: [`ProcedureOpts`](../../../../procedures/types/interfaces/ProcedureOpts.mdx)): `Promise`\<[`GenericPolymeshTransaction`](../../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

Defined in: [src/api/entities/Account/MultiSig/index.ts:324](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Account/MultiSig/index.ts#L324)

Set an admin for the MultiSig. When setting an admin it must be signed by one of the MultiSig signers and ran
as a proposal. When removing an admin it must be called by account belonging to the admin's identity

#### Parameters

Parameter
Type

`args`

[`SetMultiSigAdminParams`](../../../../procedures/types/interfaces/SetMultiSigAdminParams.mdx)

`opts?`

[`ProcedureOpts`](../../../../procedures/types/interfaces/ProcedureOpts.mdx)

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

#### Note

this method is of type [ProcedureMethod](../../../../procedures/types/interfaces/ProcedureMethod.mdx), which means you can call [setAdmin.checkAuthorization](../../../../procedures/types/interfaces/ProcedureMethod.mdx#checkauthorization) on it to see whether the signing Account and Identity have the required roles and permissions to run it

***

### toHuman()

> **toHuman**(): `string`

Defined in: [src/api/entities/Account/index.ts:484](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Account/index.ts#L484)

Return the Account's address

#### Returns

`string`

#### Inherited from

[`Account`](../../classes/Account.mdx).[`toHuman`](../../classes/Account.mdx#tohuman)

***

### generateUuid()

> `static` **generateUuid**\<`Identifiers`\>(`identifiers`: `Identifiers`): `string`

Defined in: [src/api/entities/Entity.ts:14](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Entity.ts#L14)

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

[`Account`](../../classes/Account.mdx).[`generateUuid`](../../classes/Account.mdx#generateuuid)

***

### unserialize()

> `static` **unserialize**\<`Identifiers`\>(`serialized`: `string`): `Identifiers`

Defined in: [src/api/entities/Entity.ts:23](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Entity.ts#L23)

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

[`Account`](../../classes/Account.mdx).[`unserialize`](../../classes/Account.mdx#unserialize)
