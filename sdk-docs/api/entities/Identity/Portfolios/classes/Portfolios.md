# Class: Portfolios

> Defined in: [src/api/entities/Identity/Portfolios.ts:35](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Identity/Portfolios.ts#L35)

# Class: Portfolios

Defined in: [src/api/entities/Identity/Portfolios.ts:35](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Identity/Portfolios.ts#L35)

Handles all Portfolio related functionality on the Identity side

## Extends

- `Namespace`\<[`Identity`](../../classes/Identity.mdx)\>

## Methods

### delete()

> **delete**(`args`: `object`, `opts?`: [`ProcedureOpts`](../../../../procedures/types/interfaces/ProcedureOpts.mdx)): `Promise`\<[`GenericPolymeshTransaction`](../../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

Defined in: [src/api/entities/Identity/Portfolios.ts:224](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Identity/Portfolios.ts#L224)

Delete a Portfolio by ID

#### Parameters

Parameter
Type
Description

`args`

\{ `portfolio`: `BigNumber` \| [`NumberedPortfolio`](../../../NumberedPortfolio/classes/NumberedPortfolio.mdx); \}

&hyphen;

`args.portfolio`

`BigNumber` \| [`NumberedPortfolio`](../../../NumberedPortfolio/classes/NumberedPortfolio.mdx)

Portfolio instance or portfolio ID to delete

`opts?`

[`ProcedureOpts`](../../../../procedures/types/interfaces/ProcedureOpts.mdx)

&hyphen;

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

#### Note

The calling Identity must be the custodian of the Portfolio

#### Note

this method is of type [ProcedureMethod](../../../../procedures/types/interfaces/ProcedureMethod.mdx), which means you can call [delete.checkAuthorization](../../../../procedures/types/interfaces/ProcedureMethod.mdx#checkauthorization) on it to see whether the signing Account and Identity have the required roles and permissions to run it

***

### getCustodiedPortfolios()

> **getCustodiedPortfolios**(`paginationOpts?`: [`PaginationOptions`](../../../types/interfaces/PaginationOptions.mdx)): `Promise`\<[`ResultSet`](../../../types/interfaces/ResultSet.mdx)\<[`DefaultPortfolio`](../../../DefaultPortfolio/classes/DefaultPortfolio.mdx) \| [`NumberedPortfolio`](../../../NumberedPortfolio/classes/NumberedPortfolio.mdx)\>\>

Defined in: [src/api/entities/Identity/Portfolios.ts:96](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Identity/Portfolios.ts#L96)

Retrieve all Portfolios custodied by this Identity.
This only includes portfolios owned by a different Identity but custodied by this one.
To fetch Portfolios owned by this Identity, use [getPortfolios](#getportfolios)

#### Parameters

Parameter
Type
Description

`paginationOpts?`

[`PaginationOptions`](../../../types/interfaces/PaginationOptions.mdx)

Optional pagination options

#### Returns

`Promise`\<[`ResultSet`](../../../types/interfaces/ResultSet.mdx)\<[`DefaultPortfolio`](../../../DefaultPortfolio/classes/DefaultPortfolio.mdx) \| [`NumberedPortfolio`](../../../NumberedPortfolio/classes/NumberedPortfolio.mdx)\>\>

A ResultSet of portfolios (Default or Numbered) and pagination metadata

#### Note

supports pagination

***

### getPortfolio()

#### Call Signature

> **getPortfolio**(): `Promise`\<[`DefaultPortfolio`](../../../DefaultPortfolio/classes/DefaultPortfolio.mdx)\>

Defined in: [src/api/entities/Identity/Portfolios.ts:143](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Identity/Portfolios.ts#L143)

Retrieve the Default Portfolio for this Identity

##### Returns

`Promise`\<[`DefaultPortfolio`](../../../DefaultPortfolio/classes/DefaultPortfolio.mdx)\>

Promise that resolves to the Default Portfolio

#### Call Signature

> **getPortfolio**(`args`: `object`): `Promise`\<[`NumberedPortfolio`](../../../NumberedPortfolio/classes/NumberedPortfolio.mdx)\>

Defined in: [src/api/entities/Identity/Portfolios.ts:151](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Identity/Portfolios.ts#L151)

Retrieve a Numbered Portfolio by its ID

##### Parameters

Parameter
Type
Description

`args`

\{ `portfolioId`: `BigNumber`; \}

&hyphen;

`args.portfolioId`

`BigNumber`

ID of the Portfolio to retrieve

##### Returns

`Promise`\<[`NumberedPortfolio`](../../../NumberedPortfolio/classes/NumberedPortfolio.mdx)\>

Promise that resolves to the requested Numbered Portfolio

***

### getPortfolioByName()

> **getPortfolioByName**(`args`: `object`): `Promise`\<[`NumberedPortfolio`](../../../NumberedPortfolio/classes/NumberedPortfolio.mdx)\>

Defined in: [src/api/entities/Identity/Portfolios.ts:188](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Identity/Portfolios.ts#L188)

Retrieve a Numbered Portfolio by its name

#### Parameters

Parameter
Type
Description

`args`

\{ `name`: `string`; \}

&hyphen;

`args.name`

`string`

Name of the Portfolio to fetch

#### Returns

`Promise`\<[`NumberedPortfolio`](../../../NumberedPortfolio/classes/NumberedPortfolio.mdx)\>

Promise that resolves to the Portfolio with the given name

#### Throws

if no Portfolio exists with the given name

***

### getPortfolios()

> **getPortfolios**(): `Promise`\<\[[`DefaultPortfolio`](../../../DefaultPortfolio/classes/DefaultPortfolio.mdx), `...NumberedPortfolio[]`\]\>

Defined in: [src/api/entities/Identity/Portfolios.ts:62](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Identity/Portfolios.ts#L62)

Retrieve all the Portfolios owned by this Identity

#### Returns

`Promise`\<\[[`DefaultPortfolio`](../../../DefaultPortfolio/classes/DefaultPortfolio.mdx), `...NumberedPortfolio[]`\]\>

An array where the first item is always the Default Portfolio, followed by any Numbered Portfolios owned by this Identity

***

### getTransactionHistory()

> **getTransactionHistory**(`filters?`: `object`): `Promise`\<[`HistoricSettlement`](../../../Portfolio/types/interfaces/HistoricSettlement.mdx)[]\>

Defined in: [src/api/entities/Identity/Portfolios.ts:236](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Identity/Portfolios.ts#L236)

Retrieve a list of transactions where this identity was involved. Can be filtered using parameters

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

Asset ID to filter by (overrides ticker if both provided)

`filters.ticker?`

`string`

ticker involved in the transaction

#### Returns

`Promise`\<[`HistoricSettlement`](../../../Portfolio/types/interfaces/HistoricSettlement.mdx)[]\>

Promise that resolves to an array of historical settlements

#### Note

uses the middlewareV2
