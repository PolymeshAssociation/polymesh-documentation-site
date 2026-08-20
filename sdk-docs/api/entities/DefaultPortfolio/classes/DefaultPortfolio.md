# Class: DefaultPortfolio

> Defined in: [src/api/entities/DefaultPortfolio.ts:10](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/DefaultPortfolio.ts#L10)

# Class: DefaultPortfolio

Defined in: [src/api/entities/DefaultPortfolio.ts:10](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/DefaultPortfolio.ts#L10)

Represents the default Portfolio for an Identity

## Extends

- [`Portfolio`](../../Portfolio/classes/Portfolio.mdx)

## Properties

### owner

> **owner**: [`Identity`](../../Identity/classes/Identity.mdx)

Defined in: [src/api/entities/Portfolio/index.ts:90](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Portfolio/index.ts#L90)

Identity of the Portfolio's owner

#### Inherited from

[`Portfolio`](../../Portfolio/classes/Portfolio.mdx).[`owner`](../../Portfolio/classes/Portfolio.mdx#owner)

***

### uuid

> **uuid**: `string`

Defined in: [src/api/entities/Entity.ts:46](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Entity.ts#L46)

#### Inherited from

[`Portfolio`](../../Portfolio/classes/Portfolio.mdx).[`uuid`](../../Portfolio/classes/Portfolio.mdx#uuid)

## Methods

### exists()

> **exists**(): `Promise`\<`boolean`\>

Defined in: [src/api/entities/DefaultPortfolio.ts:21](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/DefaultPortfolio.ts#L21)

Determine whether this Portfolio exists on chain

#### Returns

`Promise`\<`boolean`\>

#### Overrides

[`Portfolio`](../../Portfolio/classes/Portfolio.mdx).[`exists`](../../Portfolio/classes/Portfolio.mdx#exists)

***

### getAssetBalances()

> **getAssetBalances**(`args?`: `object`): `Promise`\<[`PortfolioBalance`](../../Portfolio/types/interfaces/PortfolioBalance.mdx)[]\>

Defined in: [src/api/entities/Portfolio/index.ts:231](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Portfolio/index.ts#L231)

Retrieve the balances of all fungible assets in this Portfolio

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

#### Inherited from

[`Portfolio`](../../Portfolio/classes/Portfolio.mdx).[`getAssetBalances`](../../Portfolio/classes/Portfolio.mdx#getassetbalances)

***

### getCollections()

> **getCollections**(`args?`: `object`): `Promise`\<[`PortfolioCollection`](../../Portfolio/types/interfaces/PortfolioCollection.mdx)[]\>

Defined in: [src/api/entities/Portfolio/index.ts:310](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Portfolio/index.ts#L310)

Retrieve the NFTs held in this portfolio

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

#### Inherited from

[`Portfolio`](../../Portfolio/classes/Portfolio.mdx).[`getCollections`](../../Portfolio/classes/Portfolio.mdx#getcollections)

***

### getCustodian()

> **getCustodian**(): `Promise`\<[`Identity`](../../Identity/classes/Identity.mdx)\>

Defined in: [src/api/entities/Portfolio/index.ts:427](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Portfolio/index.ts#L427)

Retrieve the custodian Identity of this Portfolio

#### Returns

`Promise`\<[`Identity`](../../Identity/classes/Identity.mdx)\>

#### Note

if no custodian is set, the owner Identity is returned

#### Inherited from

[`Portfolio`](../../Portfolio/classes/Portfolio.mdx).[`getCustodian`](../../Portfolio/classes/Portfolio.mdx#getcustodian)

***

### getTransactionHistory()

> **getTransactionHistory**(`filters?`: `object`): `Promise`\<[`HistoricSettlement`](../../Portfolio/types/interfaces/HistoricSettlement.mdx)[]\>

Defined in: [src/api/entities/Portfolio/index.ts:469](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Portfolio/index.ts#L469)

Retrieve a list of transactions where this portfolio was involved. Can be filtered using parameters

#### Parameters

Parameter
Type
Description

`filters`

\{ `account?`: `string`; `assetId?`: `string`; `ticker?`: `string`; \}

&hyphen;

`filters.account?`

`string`

Account involved in the settlement

`filters.assetId?`

`string`

&hyphen;

`filters.ticker?`

`string`

ticker involved in the transaction

#### Returns

`Promise`\<[`HistoricSettlement`](../../Portfolio/types/interfaces/HistoricSettlement.mdx)[]\>

#### Note

uses the middlewareV2

#### Inherited from

[`Portfolio`](../../Portfolio/classes/Portfolio.mdx).[`getTransactionHistory`](../../Portfolio/classes/Portfolio.mdx#gettransactionhistory)

***

### isAssetPreApproved()

> **isAssetPreApproved**(`asset`: `string` \| [`BaseAsset`](../../Asset/Base/BaseAsset/classes/BaseAsset.mdx)): `Promise`\<`boolean`\>

Defined in: [src/api/entities/Portfolio/index.ts:168](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Portfolio/index.ts#L168)

Returns whether or not this Portfolio has pre-approved a particular asset

#### Parameters

Parameter
Type

`asset`

`string` \| [`BaseAsset`](../../Asset/Base/BaseAsset/classes/BaseAsset.mdx)

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

[`Portfolio`](../../Portfolio/classes/Portfolio.mdx).[`isAssetPreApproved`](../../Portfolio/classes/Portfolio.mdx#isassetpreapproved)

***

### isCustodiedBy()

> **isCustodiedBy**(`args?`: `object`): `Promise`\<`boolean`\>

Defined in: [src/api/entities/Portfolio/index.ts:154](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Portfolio/index.ts#L154)

Return whether an Identity is the Portfolio custodian

#### Parameters

Parameter
Type
Description

`args?`

\{ `identity`: `string` \| [`Identity`](../../Identity/classes/Identity.mdx); \}

&hyphen;

`args.identity?`

`string` \| [`Identity`](../../Identity/classes/Identity.mdx)

optional, defaults to the signing Identity

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

[`Portfolio`](../../Portfolio/classes/Portfolio.mdx).[`isCustodiedBy`](../../Portfolio/classes/Portfolio.mdx#iscustodiedby)

***

### isEqual()

> **isEqual**(`entity`: [`Entity`](../../Entity/classes/Entity.mdx)\<`unknown`, `unknown`\>): `boolean`

Defined in: [src/api/entities/Entity.ts:61](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Entity.ts#L61)

Determine whether this Entity is the same as another one

#### Parameters

Parameter
Type

`entity`

[`Entity`](../../Entity/classes/Entity.mdx)\<`unknown`, `unknown`\>

#### Returns

`boolean`

#### Inherited from

[`Portfolio`](../../Portfolio/classes/Portfolio.mdx).[`isEqual`](../../Portfolio/classes/Portfolio.mdx#isequal)

***

### isOwnedBy()

> **isOwnedBy**(`args?`: `object`): `Promise`\<`boolean`\>

Defined in: [src/api/entities/Portfolio/index.ts:141](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Portfolio/index.ts#L141)

Return whether an Identity is the Portfolio owner

#### Parameters

Parameter
Type
Description

`args?`

\{ `identity`: `string` \| [`Identity`](../../Identity/classes/Identity.mdx); \}

&hyphen;

`args.identity?`

`string` \| [`Identity`](../../Identity/classes/Identity.mdx)

defaults to the signing Identity

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

[`Portfolio`](../../Portfolio/classes/Portfolio.mdx).[`isOwnedBy`](../../Portfolio/classes/Portfolio.mdx#isownedby)

***

### moveFunds()

> **moveFunds**(`args`: [`MoveFundsParams`](../../../procedures/types/interfaces/MoveFundsParams.mdx), `opts?`: [`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)): `Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

Defined in: [src/api/entities/Portfolio/index.ts:402](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Portfolio/index.ts#L402)

Moves funds from this Portfolio to another one owned by the same Identity

#### Parameters

Parameter
Type

`args`

[`MoveFundsParams`](../../../procedures/types/interfaces/MoveFundsParams.mdx)

`opts?`

[`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

#### Note

required role:
  - Portfolio Custodian

#### Note

this method is of type [ProcedureMethod](../../../procedures/types/interfaces/ProcedureMethod.mdx), which means you can call [moveFunds.checkAuthorization](../../../procedures/types/interfaces/ProcedureMethod.mdx#checkauthorization) on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Inherited from

[`Portfolio`](../../Portfolio/classes/Portfolio.mdx).[`moveFunds`](../../Portfolio/classes/Portfolio.mdx#movefunds)

***

### preApproveAsset()

> **preApproveAsset**(`args`: `object`, `opts?`: [`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)): `Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

Defined in: [src/api/entities/Portfolio/index.ts:415](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Portfolio/index.ts#L415)

Pre-approves receiving an asset for this Portfolio. Receiving this asset in a settlement will not require manual affirmation

#### Parameters

Parameter
Type

`args`

\{ `asset`: `string` \| [`BaseAsset`](../../Asset/Base/BaseAsset/classes/BaseAsset.mdx); \}

`args.asset`

`string` \| [`BaseAsset`](../../Asset/Base/BaseAsset/classes/BaseAsset.mdx)

`opts?`

[`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

#### Note

this method is of type [ProcedureMethod](../../../procedures/types/interfaces/ProcedureMethod.mdx), which means you can call [preApproveAsset.checkAuthorization](../../../procedures/types/interfaces/ProcedureMethod.mdx#checkauthorization) on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Inherited from

[`Portfolio`](../../Portfolio/classes/Portfolio.mdx).[`preApproveAsset`](../../Portfolio/classes/Portfolio.mdx#preapproveasset)

***

### preApprovedAssets()

> **preApprovedAssets**(`paginationOpts?`: [`PaginationOptions`](../../types/interfaces/PaginationOptions.mdx)): `Promise`\<[`ResultSet`](../../types/interfaces/ResultSet.mdx)\<[`Asset`](../../Asset/types/type-aliases/Asset.mdx)\>\>

Defined in: [src/api/entities/Portfolio/index.ts:193](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Portfolio/index.ts#L193)

Returns a list of all assets this Portfolio has pre-approved. These assets will not require affirmation when being received in settlements

#### Parameters

Parameter
Type

`paginationOpts?`

[`PaginationOptions`](../../types/interfaces/PaginationOptions.mdx)

#### Returns

`Promise`\<[`ResultSet`](../../types/interfaces/ResultSet.mdx)\<[`Asset`](../../Asset/types/type-aliases/Asset.mdx)\>\>

#### Inherited from

[`Portfolio`](../../Portfolio/classes/Portfolio.mdx).[`preApprovedAssets`](../../Portfolio/classes/Portfolio.mdx#preapprovedassets)

***

### quitCustody()

> **quitCustody**(`opts?`: [`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)): `Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

Defined in: [src/api/entities/Portfolio/index.ts:410](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Portfolio/index.ts#L410)

Returns the custody of the portfolio to the portfolio owner unilaterally

#### Parameters

Parameter
Type

`opts?`

[`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

#### Note

required role:
  - Portfolio Custodian

#### Note

this method is of type [NoArgsProcedureMethod](../../../procedures/types/interfaces/NoArgsProcedureMethod.mdx), which means you can call [quitCustody.checkAuthorization](../../../procedures/types/interfaces/NoArgsProcedureMethod.mdx#checkauthorization) on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Inherited from

[`Portfolio`](../../Portfolio/classes/Portfolio.mdx).[`quitCustody`](../../Portfolio/classes/Portfolio.mdx#quitcustody)

***

### removeAssetPreApproval()

> **removeAssetPreApproval**(`args`: `object`, `opts?`: [`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)): `Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

Defined in: [src/api/entities/Portfolio/index.ts:420](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Portfolio/index.ts#L420)

Removes pre-approval of an asset for this Portfolio

#### Parameters

Parameter
Type

`args`

\{ `asset`: `string` \| [`BaseAsset`](../../Asset/Base/BaseAsset/classes/BaseAsset.mdx); \}

`args.asset`

`string` \| [`BaseAsset`](../../Asset/Base/BaseAsset/classes/BaseAsset.mdx)

`opts?`

[`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

#### Note

this method is of type [ProcedureMethod](../../../procedures/types/interfaces/ProcedureMethod.mdx), which means you can call [removeAssetPreApproval.checkAuthorization](../../../procedures/types/interfaces/ProcedureMethod.mdx#checkauthorization) on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Inherited from

[`Portfolio`](../../Portfolio/classes/Portfolio.mdx).[`removeAssetPreApproval`](../../Portfolio/classes/Portfolio.mdx#removeassetpreapproval)

***

### toHuman()

> **toHuman**(): [`HumanReadable`](../../Portfolio/interfaces/HumanReadable.mdx)

Defined in: [src/api/entities/Portfolio/index.ts:544](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Portfolio/index.ts#L544)

Return the Portfolio ID and owner DID

#### Returns

[`HumanReadable`](../../Portfolio/interfaces/HumanReadable.mdx)

#### Inherited from

[`Portfolio`](../../Portfolio/classes/Portfolio.mdx).[`toHuman`](../../Portfolio/classes/Portfolio.mdx#tohuman)

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

[`Portfolio`](../../Portfolio/classes/Portfolio.mdx).[`generateUuid`](../../Portfolio/classes/Portfolio.mdx#generateuuid)

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

[`Portfolio`](../../Portfolio/classes/Portfolio.mdx).[`unserialize`](../../Portfolio/classes/Portfolio.mdx#unserialize)
