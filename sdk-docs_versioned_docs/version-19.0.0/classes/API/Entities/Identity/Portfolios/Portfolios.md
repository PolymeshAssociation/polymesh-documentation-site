---
id: "Portfolios"
title: "Class: Portfolios"
sidebar_label: "Portfolios"
---

[api/entities/Identity/Portfolios](../../../../../modules/API/Entities/Identity/Portfolios/Portfolios.md).Portfolios

Handles all Portfolio related functionality on the Identity side

## Hierarchy

- `Namespace`<[`Identity`](../Identity.md)\>

  ↳ **`Portfolios`**

## Methods

### delete

▸ **delete**(`args`, `opts?`): `Promise`<[`GenericPolymeshTransaction`](../../../../../modules/Types/Types.md#genericpolymeshtransaction)<`void`, `void`\>\>

Delete a Portfolio by ID

**`Note`**

 required role:
  - Portfolio Custodian

**`Note`**

 this method is of type [ProcedureMethod](../../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [delete.checkAuthorization](../../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.portfolio` | `BigNumber` \| [`NumberedPortfolio`](../../NumberedPortfolio/NumberedPortfolio.md) |
| `opts?` | [`ProcedureOpts`](../../../../../interfaces/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`<[`GenericPolymeshTransaction`](../../../../../modules/Types/Types.md#genericpolymeshtransaction)<`void`, `void`\>\>

___

### getCustodiedPortfolios

▸ **getCustodiedPortfolios**(`paginationOpts?`): `Promise`<[`ResultSet`](../../../../../interfaces/Types/ResultSet/ResultSet.md)<[`NumberedPortfolio`](../../NumberedPortfolio/NumberedPortfolio.md) \| [`DefaultPortfolio`](../../DefaultPortfolio/DefaultPortfolio.md)\>\>

Retrieve all Portfolios custodied by this Identity.
  This only includes portfolios owned by a different Identity but custodied by this one.
  To fetch Portfolios owned by this Identity, use [getPortfolios](Portfolios.md#getportfolios)

**`Note`**

 supports pagination

#### Parameters

| Name | Type |
| :------ | :------ |
| `paginationOpts?` | [`PaginationOptions`](../../../../../interfaces/Types/PaginationOptions/PaginationOptions.md) |

#### Returns

`Promise`<[`ResultSet`](../../../../../interfaces/Types/ResultSet/ResultSet.md)<[`NumberedPortfolio`](../../NumberedPortfolio/NumberedPortfolio.md) \| [`DefaultPortfolio`](../../DefaultPortfolio/DefaultPortfolio.md)\>\>

___

### getPortfolio

▸ **getPortfolio**(): `Promise`<[`DefaultPortfolio`](../../DefaultPortfolio/DefaultPortfolio.md)\>

Retrieve a Numbered Portfolio or the Default Portfolio if Portfolio ID is not passed

#### Returns

`Promise`<[`DefaultPortfolio`](../../DefaultPortfolio/DefaultPortfolio.md)\>

▸ **getPortfolio**(`args`): `Promise`<[`NumberedPortfolio`](../../NumberedPortfolio/NumberedPortfolio.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.portfolioId` | `BigNumber` |

#### Returns

`Promise`<[`NumberedPortfolio`](../../NumberedPortfolio/NumberedPortfolio.md)\>

___

### getPortfolios

▸ **getPortfolios**(): `Promise`<[[`DefaultPortfolio`](../../DefaultPortfolio/DefaultPortfolio.md), ...NumberedPortfolio[]]\>

Retrieve all the Portfolios owned by this Identity

#### Returns

`Promise`<[[`DefaultPortfolio`](../../DefaultPortfolio/DefaultPortfolio.md), ...NumberedPortfolio[]]\>
