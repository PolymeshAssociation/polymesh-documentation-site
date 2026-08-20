# Abstract Class: Portfolio

> Defined in: [src/api/entities/Portfolio/index.ts:76](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Portfolio/index.ts#L76)

# Abstract Class: Portfolio

Defined in: [src/api/entities/Portfolio/index.ts:76](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Portfolio/index.ts#L76)

Represents a base Portfolio for a specific Identity in the Polymesh blockchain

## Extends

- [`Entity`](../../Entity/classes/Entity.mdx)\<[`UniqueIdentifiers`](../interfaces/UniqueIdentifiers.mdx), [`HumanReadable`](../interfaces/HumanReadable.mdx)\>

## Extended by

- [`DefaultPortfolio`](../../DefaultPortfolio/classes/DefaultPortfolio.mdx)
- [`NumberedPortfolio`](../../NumberedPortfolio/classes/NumberedPortfolio.mdx)

## Properties

### owner

> **owner**: [`Identity`](../../Identity/classes/Identity.mdx)

Defined in: [src/api/entities/Portfolio/index.ts:90](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Portfolio/index.ts#L90)

Identity of the Portfolio's owner

***

### uuid

> **uuid**: `string`

Defined in: [src/api/entities/Entity.ts:46](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Entity.ts#L46)

#### Inherited from

[`Entity`](../../Entity/classes/Entity.mdx).[`uuid`](../../Entity/classes/Entity.mdx#uuid)

## Methods

### exists()

> `abstract` **exists**(): `Promise`\<`boolean`\>

Defined in: [src/api/entities/Entity.ts:68](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Entity.ts#L68)

Determine whether this Entity exists on chain

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

[`Entity`](../../Entity/classes/Entity.mdx).[`exists`](../../Entity/classes/Entity.mdx#exists)

***

### getAssetBalances()

> **getAssetBalances**(`args?`: `object`): `Promise`\<[`PortfolioBalance`](../types/interfaces/PortfolioBalance.mdx)[]\>

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

`Promise`\<[`PortfolioBalance`](../types/interfaces/PortfolioBalance.mdx)[]\>

***

### getCollections()

> **getCollections**(`args?`: `object`): `Promise`\<[`PortfolioCollection`](../types/interfaces/PortfolioCollection.mdx)[]\>

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

`Promise`\<[`PortfolioCollection`](../types/interfaces/PortfolioCollection.mdx)[]\>

***

### getCustodian()

> **getCustodian**(): `Promise`\<[`Identity`](../../Identity/classes/Identity.mdx)\>

Defined in: [src/api/entities/Portfolio/index.ts:427](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Portfolio/index.ts#L427)

Retrieve the custodian Identity of this Portfolio

#### Returns

`Promise`\<[`Identity`](../../Identity/classes/Identity.mdx)\>

#### Note

if no custodian is set, the owner Identity is returned

***

### getTransactionHistory()

> **getTransactionHistory**(`filters?`: `object`): `Promise`\<[`HistoricSettlement`](../types/interfaces/HistoricSettlement.mdx)[]\>

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

`Promise`\<[`HistoricSettlement`](../types/interfaces/HistoricSettlement.mdx)[]\>

#### Note

uses the middlewareV2

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

[`Entity`](../../Entity/classes/Entity.mdx).[`isEqual`](../../Entity/classes/Entity.mdx#isequal)

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

***

### toHuman()

> **toHuman**(): [`HumanReadable`](../interfaces/HumanReadable.mdx)

Defined in: [src/api/entities/Portfolio/index.ts:544](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Portfolio/index.ts#L544)

Return the Portfolio ID and owner DID

#### Returns

[`HumanReadable`](../interfaces/HumanReadable.mdx)

#### Overrides

[`Entity`](../../Entity/classes/Entity.mdx).[`toHuman`](../../Entity/classes/Entity.mdx#tohuman)

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

[`Entity`](../../Entity/classes/Entity.mdx).[`generateUuid`](../../Entity/classes/Entity.mdx#generateuuid)

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

[`Entity`](../../Entity/classes/Entity.mdx).[`unserialize`](../../Entity/classes/Entity.mdx#unserialize)
