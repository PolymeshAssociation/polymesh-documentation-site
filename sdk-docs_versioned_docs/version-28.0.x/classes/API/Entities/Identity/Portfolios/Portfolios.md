---
id: "Portfolios"
title: "Class: Portfolios"
sidebar_label: "Portfolios"
---

[api/entities/Identity/Portfolios](../../../../../modules/API/Entities/Identity/Portfolios/Portfolios.md).Portfolios

Handles all Portfolio-related functionality on the Identity side

## Hierarchy

- `Namespace`\<[`Identity`](../Identity.md)\>

  ↳ **`Portfolios`**

## Methods

### delete

▸ **delete**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

Delete a Portfolio

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | `Object` | - |
| `args.portfolio` | `BigNumber` \| [`NumberedPortfolio`](../../NumberedPortfolio/NumberedPortfolio.md) | Portfolio instance or portfolio ID to delete |
| `opts?` | [`ProcedureOpts`](../../../../../interfaces/API/Procedures/Types/ProcedureOpts/ProcedureOpts.md) | - |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

**`Note`**

The calling Identity must be the custodian of the Portfolio

**`Note`**

this method is of type [ProcedureMethod](../../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [delete.checkAuthorization](../../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/entities/Identity/Portfolios.ts:231](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/Identity/Portfolios.ts#L231)

___

### getCustodiedPortfolios

▸ **getCustodiedPortfolios**(`paginationOpts?`): `Promise`\<[`ResultSet`](../../../../../interfaces/API/Entities/Types/ResultSet/ResultSet.md)\<[`DefaultPortfolio`](../../DefaultPortfolio/DefaultPortfolio.md) \| [`NumberedPortfolio`](../../NumberedPortfolio/NumberedPortfolio.md)\>\>

Retrieve all Portfolios currently custodied by this Identity

These include portfolios owned by another Identity but with this one as custodian.
To fetch portfolios actually owned by this Identity, use `getPortfolios`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `paginationOpts?` | [`PaginationOptions`](../../../../../interfaces/API/Entities/Types/PaginationOptions/PaginationOptions.md) | Optional pagination options |

#### Returns

`Promise`\<[`ResultSet`](../../../../../interfaces/API/Entities/Types/ResultSet/ResultSet.md)\<[`DefaultPortfolio`](../../DefaultPortfolio/DefaultPortfolio.md) \| [`NumberedPortfolio`](../../NumberedPortfolio/NumberedPortfolio.md)\>\>

A ResultSet of portfolios (Default or Numbered) and pagination metadata

**`Note`**

supports pagination

#### Defined in

[api/entities/Identity/Portfolios.ts:97](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/Identity/Portfolios.ts#L97)

___

### getPortfolio

▸ **getPortfolio**(): `Promise`\<[`DefaultPortfolio`](../../DefaultPortfolio/DefaultPortfolio.md)\>

Retrieve the Default Portfolio owned by this Identity

#### Returns

`Promise`\<[`DefaultPortfolio`](../../DefaultPortfolio/DefaultPortfolio.md)\>

The Default Portfolio

#### Defined in

[api/entities/Identity/Portfolios.ts:144](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/Identity/Portfolios.ts#L144)

▸ **getPortfolio**(`args`): `Promise`\<[`NumberedPortfolio`](../../NumberedPortfolio/NumberedPortfolio.md)\>

Retrieve a Numbered Portfolio owned by this Identity

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | `Object` | - |
| `args.portfolioId` | `BigNumber` | The ID of the Numbered Portfolio to retrieve |

#### Returns

`Promise`\<[`NumberedPortfolio`](../../NumberedPortfolio/NumberedPortfolio.md)\>

The requested Numbered Portfolio

**`Throws`**

If the specified Numbered Portfolio does not exist

#### Defined in

[api/entities/Identity/Portfolios.ts:154](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/Identity/Portfolios.ts#L154)

___

### getPortfolioByName

▸ **getPortfolioByName**(`args`): `Promise`\<[`NumberedPortfolio`](../../NumberedPortfolio/NumberedPortfolio.md)\>

Retrieve a Numbered Portfolio by name

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | `Object` | - |
| `args.name` | `string` | Name of the Portfolio to fetch |

#### Returns

`Promise`\<[`NumberedPortfolio`](../../NumberedPortfolio/NumberedPortfolio.md)\>

The Portfolio with the given name

**`Throws`**

If no Portfolio exists with the specified name

#### Defined in

[api/entities/Identity/Portfolios.ts:192](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/Identity/Portfolios.ts#L192)

___

### getPortfolios

▸ **getPortfolios**(): `Promise`\<[[`DefaultPortfolio`](../../DefaultPortfolio/DefaultPortfolio.md), ...NumberedPortfolio[]]\>

Retrieve all Portfolios owned by this Identity

#### Returns

`Promise`\<[[`DefaultPortfolio`](../../DefaultPortfolio/DefaultPortfolio.md), ...NumberedPortfolio[]]\>

An array where the first item is always the Default Portfolio, followed by any Numbered Portfolios owned by this Identity

#### Defined in

[api/entities/Identity/Portfolios.ts:63](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/Identity/Portfolios.ts#L63)

___

### getTransactionHistory

▸ **getTransactionHistory**(`filters?`): `Promise`\<[`HistoricSettlement`](../../../../../interfaces/API/Entities/Portfolio/Types/HistoricSettlement/HistoricSettlement.md)[]\>

Retrieve historical transaction activity involving portfolios of this Identity

This includes transfers and settlements that involved any portfolio owned by this Identity.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filters` | `Object` | - |
| `filters.account?` | `string` | Account address involved in the settlement |
| `filters.assetId?` | `string` | Asset ID to filter by (overrides ticker if both provided) |
| `filters.ticker?` | `string` | Asset ticker to filter by |

#### Returns

`Promise`\<[`HistoricSettlement`](../../../../../interfaces/API/Entities/Portfolio/Types/HistoricSettlement/HistoricSettlement.md)[]\>

An array of historical settlements related to this Identity

#### Defined in

[api/entities/Identity/Portfolios.ts:245](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/Identity/Portfolios.ts#L245)
