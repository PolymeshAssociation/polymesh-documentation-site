# Class: Account

> Defined in: [src/api/entities/Account/index.ts:96](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Account/index.ts#L96)

# Class: Account

Defined in: [src/api/entities/Account/index.ts:96](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Account/index.ts#L96)

Represents an Account in the Polymesh blockchain. Accounts can hold POLYX, control Identities and vote on proposals (among other things)

## Extends

- [`Entity`](../../Entity/classes/Entity.mdx)\<`UniqueIdentifiers`, `string`\>

## Extended by

- [`MultiSig`](../MultiSig/classes/MultiSig.mdx)

## Properties

### address

> **address**: `string`

Defined in: [src/api/entities/Account/index.ts:110](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Account/index.ts#L110)

Polymesh-specific address of the Account. Serves as an identifier

***

### authorizations

> **authorizations**: [`Authorizations`](../../common/namespaces/Authorizations/classes/Authorizations.mdx)\<`Account`\>

Defined in: [src/api/entities/Account/index.ts:119](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Account/index.ts#L119)

***

### key

> **key**: `string`

Defined in: [src/api/entities/Account/index.ts:116](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Account/index.ts#L116)

A hex representation of the cryptographic public key of the Account. This is consistent across
Substrate chains, while the address depends on the chain as well.

***

### staking

> **staking**: [`Staking`](../Staking/classes/Staking.mdx)

Defined in: [src/api/entities/Account/index.ts:121](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Account/index.ts#L121)

***

### subsidies

> **subsidies**: [`Subsidies`](../../Subsidies/classes/Subsidies.mdx)

Defined in: [src/api/entities/Account/index.ts:120](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Account/index.ts#L120)

***

### uuid

> **uuid**: `string`

Defined in: [src/api/entities/Entity.ts:46](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Entity.ts#L46)

#### Inherited from

[`Entity`](../../Entity/classes/Entity.mdx).[`uuid`](../../Entity/classes/Entity.mdx#uuid)

## Methods

### checkPermissions()

> **checkPermissions**(`permissions`: [`SimplePermissions`](../../types/interfaces/SimplePermissions.mdx)): `Promise`\<[`CheckPermissionsResult`](../../types/interfaces/CheckPermissionsResult.mdx)\<[`Account`](../../types/enumerations/SignerType.mdx#account)\>\>

Defined in: [src/api/entities/Account/index.ts:395](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Account/index.ts#L395)

Check if this Account possesses certain Permissions to act on behalf of its corresponding Identity

#### Parameters

Parameter
Type

`permissions`

[`SimplePermissions`](../../types/interfaces/SimplePermissions.mdx)

#### Returns

`Promise`\<[`CheckPermissionsResult`](../../types/interfaces/CheckPermissionsResult.mdx)\<[`Account`](../../types/enumerations/SignerType.mdx#account)\>\>

which permissions the Account is missing (if any) and the final result

***

### exists()

> **exists**(): `Promise`\<`boolean`\>

Defined in: [src/api/entities/Account/index.ts:478](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Account/index.ts#L478)

Determine whether this Account exists on chain

#### Returns

`Promise`\<`boolean`\>

#### Overrides

[`Entity`](../../Entity/classes/Entity.mdx).[`exists`](../../Entity/classes/Entity.mdx#exists)

***

### getAssetBalances()

> **getAssetBalances**(`args?`: `object`): `Promise`\<[`PortfolioBalance`](../../Portfolio/types/interfaces/PortfolioBalance.mdx)[]\>

Defined in: [src/api/entities/Account/index.ts:684](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Account/index.ts#L684)

Retrieve the balances of all fungible assets in this Account

#### Parameters

Parameter
Type
Description

`args?`

\{ `assets`: (`string` \| [`FungibleAsset`](../../Asset/Fungible/classes/FungibleAsset.mdx))[]; \}

&hyphen;

`args.assets?`

(`string` \| [`FungibleAsset`](../../Asset/Fungible/classes/FungibleAsset.mdx))[]

array of FungibleAssets (or tickers) for which to fetch balances (optional, all balances are retrieved if not passed)

#### Returns

`Promise`\<[`PortfolioBalance`](../../Portfolio/types/interfaces/PortfolioBalance.mdx)[]\>

***

### getBalance()

#### Call Signature

> **getBalance**(): `Promise`\<[`Balance`](../types/interfaces/Balance.mdx)\>

Defined in: [src/api/entities/Account/index.ts:145](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Account/index.ts#L145)

Get the free/locked POLYX balance of the Account

##### Returns

`Promise`\<[`Balance`](../types/interfaces/Balance.mdx)\>

Promise that resolves to the Account's POLYX balance information

#### Call Signature

> **getBalance**(`callback`: [`SubCallback`](../../types/type-aliases/SubCallback.mdx)\<[`Balance`](../types/interfaces/Balance.mdx)\>): `Promise`\<[`UnsubCallback`](../../types/type-aliases/UnsubCallback.mdx)\>

Defined in: [src/api/entities/Account/index.ts:156](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Account/index.ts#L156)

Get the free/locked POLYX balance of the Account (with subscription support)

##### Parameters

Parameter
Type
Description

`callback`

[`SubCallback`](../../types/type-aliases/SubCallback.mdx)\<[`Balance`](../types/interfaces/Balance.mdx)\>

Callback function that receives balance updates

##### Returns

`Promise`\<[`UnsubCallback`](../../types/type-aliases/UnsubCallback.mdx)\>

Promise that resolves to an unsubscribe function

##### Note

can be subscribed to, if connected to node using a web socket

***

### getCollections()

> **getCollections**(`args?`: `object`): `Promise`\<[`PortfolioCollection`](../../Portfolio/types/interfaces/PortfolioCollection.mdx)[]\>

Defined in: [src/api/entities/Account/index.ts:764](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Account/index.ts#L764)

Retrieve the NFTs held in this Account

#### Parameters

Parameter
Type
Description

`args?`

\{ `collections`: (`string` \| [`NftCollection`](../../Asset/NonFungible/NftCollection/classes/NftCollection.mdx))[]; \}

&hyphen;

`args.collections?`

(`string` \| [`NftCollection`](../../Asset/NonFungible/NftCollection/classes/NftCollection.mdx))[]

array of NftCollection (or tickers) for which to fetch holdings (optional, all holdings are retrieved if not passed)

#### Returns

`Promise`\<[`PortfolioCollection`](../../Portfolio/types/interfaces/PortfolioCollection.mdx)[]\>

***

### getCurrentNonce()

> **getCurrentNonce**(): `Promise`\<`BigNumber`\>

Defined in: [src/api/entities/Account/index.ts:492](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Account/index.ts#L492)

Retrieve the current nonce for this Account

#### Returns

`Promise`\<`BigNumber`\>

***

### getIdentity()

> **getIdentity**(): `Promise`\<[`Identity`](../../Identity/classes/Identity.mdx) \| `null`\>

Defined in: [src/api/entities/Account/index.ts:175](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Account/index.ts#L175)

Retrieve the Identity associated to this Account (null if there is none)

#### Returns

`Promise`\<[`Identity`](../../Identity/classes/Identity.mdx) \| `null`\>

***

### getMultiSig()

> **getMultiSig**(): `Promise`\<[`MultiSig`](../MultiSig/classes/MultiSig.mdx) \| `null`\>

Defined in: [src/api/entities/Account/index.ts:450](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Account/index.ts#L450)

Fetch the MultiSig this Account is part of. If this Account is not a signer on any MultiSig, return null

#### Returns

`Promise`\<[`MultiSig`](../MultiSig/classes/MultiSig.mdx) \| `null`\>

***

### getNextAssetId()

> **getNextAssetId**(): `Promise`\<`string`\>

Defined in: [src/api/entities/Account/index.ts:637](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Account/index.ts#L637)

Returns next assetID that will be generated for this Identity

#### Returns

`Promise`\<`string`\>

***

### getOffChainReceipts()

> **getOffChainReceipts**(): `Promise`\<`BigNumber`[]\>

Defined in: [src/api/entities/Account/index.ts:610](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Account/index.ts#L610)

Returns all off chain receipts used by this Account

#### Returns

`Promise`\<`BigNumber`[]\>

***

### getPendingProposals()

> **getPendingProposals**(): `Promise`\<[`MultiSigProposal`](../../MultiSigProposal/classes/MultiSigProposal.mdx)[]\>

Defined in: [src/api/entities/Account/index.ts:594](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Account/index.ts#L594)

Returns pending MultiSig proposals for this Account

#### Returns

`Promise`\<[`MultiSigProposal`](../../MultiSigProposal/classes/MultiSigProposal.mdx)[]\>

#### Note

uses the middleware

#### Throws

if the Account is not a signer on any MultiSig

***

### getPermissions()

> **getPermissions**(): `Promise`\<[`Permissions`](../../types/interfaces/Permissions.mdx)\>

Defined in: [src/api/entities/Account/index.ts:342](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Account/index.ts#L342)

Retrieve the Permissions this Account has as a Permissioned Account for its corresponding Identity

#### Returns

`Promise`\<[`Permissions`](../../types/interfaces/Permissions.mdx)\>

#### Throws

if there is no Identity associated with the Account

***

### getPolyxTransactions()

> **getPolyxTransactions**(`filters`: `object`): `Promise`\<[`ResultSet`](../../types/interfaces/ResultSet.mdx)\<[`HistoricPolyxTransaction`](../types/interfaces/HistoricPolyxTransaction.mdx)\>\>

Defined in: [src/api/entities/Account/index.ts:576](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Account/index.ts#L576)

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

`Promise`\<[`ResultSet`](../../types/interfaces/ResultSet.mdx)\<[`HistoricPolyxTransaction`](../types/interfaces/HistoricPolyxTransaction.mdx)\>\>

#### Note

uses the middleware

***

### getTransactionHistory()

> **getTransactionHistory**(`filters?`: `object`): `Promise`\<[`ResultSet`](../../types/interfaces/ResultSet.mdx)\<[`ExtrinsicData`](../../../client/types/interfaces/ExtrinsicData.mdx)\>\>

Defined in: [src/api/entities/Account/index.ts:211](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Account/index.ts#L211)

Retrieve a list of transactions signed by this Account. Can be filtered using parameters

#### Parameters

Parameter
Type
Description

`filters`

\{ `blockHash?`: `string`; `blockNumber?`: `BigNumber`; `orderBy?`: [`ExtrinsicsOrderBy`](../../../../types/enumerations/ExtrinsicsOrderBy.mdx); `size?`: `BigNumber`; `start?`: `BigNumber`; `success?`: `boolean`; `tag?`: [`TxTag`](../../../../types/type-aliases/TxTag.mdx); \}

&hyphen;

`filters.blockHash?`

`string`

&hyphen;

`filters.blockNumber?`

`BigNumber`

&hyphen;

`filters.orderBy?`

[`ExtrinsicsOrderBy`](../../../../types/enumerations/ExtrinsicsOrderBy.mdx)

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

[`TxTag`](../../../../types/type-aliases/TxTag.mdx)

tag associated with the transaction

#### Returns

`Promise`\<[`ResultSet`](../../types/interfaces/ResultSet.mdx)\<[`ExtrinsicData`](../../../client/types/interfaces/ExtrinsicData.mdx)\>\>

#### Note

if both `blockNumber` and `blockHash` are passed, only `blockNumber` is taken into account.
Also, for ordering by block_id, one should pass `ExtrinsicsOrderBy.BlockIdAsc` or `ExtrinsicsOrderBy.BlockIdDesc`
in order of their choice (since block ID is a string field in middleware v2)

#### Note

uses the middleware v2

***

### getTypeInfo()

> **getTypeInfo**(): `Promise`\<[`AccountTypeInfo`](../types/interfaces/AccountTypeInfo.mdx)\>

Defined in: [src/api/entities/Account/index.ts:513](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Account/index.ts#L513)

Retrieve the type of Account, and its relation to an Identity, if applicable

#### Returns

`Promise`\<[`AccountTypeInfo`](../types/interfaces/AccountTypeInfo.mdx)\>

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

[`Entity`](../../Entity/classes/Entity.mdx).[`isEqual`](../../Entity/classes/Entity.mdx#isequal)

***

### isFrozen()

> **isFrozen**(): `Promise`\<`boolean`\>

Defined in: [src/api/entities/Account/index.ts:321](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Account/index.ts#L321)

Check whether this Account is frozen. If frozen, it cannot perform any Identity related action until the primary Account of the Identity unfreezes all secondary Accounts

#### Returns

`Promise`\<`boolean`\>

#### Note

returns false if the Account isn't associated to any Identity

***

### toHuman()

> **toHuman**(): `string`

Defined in: [src/api/entities/Account/index.ts:485](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Account/index.ts#L485)

Return the Account's address

#### Returns

`string`

#### Overrides

[`Entity`](../../Entity/classes/Entity.mdx).[`toHuman`](../../Entity/classes/Entity.mdx#tohuman)

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

[`Entity`](../../Entity/classes/Entity.mdx).[`generateUuid`](../../Entity/classes/Entity.mdx#generateuuid)

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

[`Entity`](../../Entity/classes/Entity.mdx).[`unserialize`](../../Entity/classes/Entity.mdx#unserialize)
