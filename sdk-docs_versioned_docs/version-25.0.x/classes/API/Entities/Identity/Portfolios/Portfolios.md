---
id: "Portfolios"
title: "Class: Portfolios"
sidebar_label: "Portfolios"
---

[api/entities/Identity/Portfolios](../../../../../modules/API/Entities/Identity/Portfolios/Portfolios.md).Portfolios

Handles all Portfolio related functionality on the Identity side

## Hierarchy

- `Namespace`\<[`Identity`](../Identity.md)\>

  ↳ **`Portfolios`**

## Methods

### delete

▸ **delete**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

Delete a Portfolio by ID

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.portfolio` | `BigNumber` \| [`NumberedPortfolio`](../../NumberedPortfolio/NumberedPortfolio.md) |
| `opts?` | [`ProcedureOpts`](../../../../../interfaces/API/Procedures/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

**`Note`**

required role:
  - Portfolio Custodian

**`Note`**

this method is of type [ProcedureMethod](../../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [delete.checkAuthorization](../../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/entities/Identity/Portfolios.ts:189](https://github.com/PolymeshAssociation/polymesh-sdk/blob/978e4ded6/src/api/entities/Identity/Portfolios.ts#L189)

___

### getCustodiedPortfolios

▸ **getCustodiedPortfolios**(`paginationOpts?`): `Promise`\<[`ResultSet`](../../../../../interfaces/API/Entities/Types/ResultSet/ResultSet.md)\<[`NumberedPortfolio`](../../NumberedPortfolio/NumberedPortfolio.md) \| [`DefaultPortfolio`](../../DefaultPortfolio/DefaultPortfolio.md)\>\>

Retrieve all Portfolios custodied by this Identity.
  This only includes portfolios owned by a different Identity but custodied by this one.
  To fetch Portfolios owned by this Identity, use [getPortfolios](Portfolios.md#getportfolios)

#### Parameters

| Name | Type |
| :------ | :------ |
| `paginationOpts?` | [`PaginationOptions`](../../../../../interfaces/API/Entities/Types/PaginationOptions/PaginationOptions.md) |

#### Returns

`Promise`\<[`ResultSet`](../../../../../interfaces/API/Entities/Types/ResultSet/ResultSet.md)\<[`NumberedPortfolio`](../../NumberedPortfolio/NumberedPortfolio.md) \| [`DefaultPortfolio`](../../DefaultPortfolio/DefaultPortfolio.md)\>\>

**`Note`**

supports pagination

#### Defined in

[api/entities/Identity/Portfolios.ts:102](https://github.com/PolymeshAssociation/polymesh-sdk/blob/978e4ded6/src/api/entities/Identity/Portfolios.ts#L102)

___

### getPortfolio

▸ **getPortfolio**(): `Promise`\<[`DefaultPortfolio`](../../DefaultPortfolio/DefaultPortfolio.md)\>

Retrieve a Numbered Portfolio or the Default Portfolio if Portfolio ID is not passed

#### Returns

`Promise`\<[`DefaultPortfolio`](../../DefaultPortfolio/DefaultPortfolio.md)\>

#### Defined in

[api/entities/Identity/Portfolios.ts:149](https://github.com/PolymeshAssociation/polymesh-sdk/blob/978e4ded6/src/api/entities/Identity/Portfolios.ts#L149)

▸ **getPortfolio**(`args`): `Promise`\<[`NumberedPortfolio`](../../NumberedPortfolio/NumberedPortfolio.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.portfolioId` | `BigNumber` |

#### Returns

`Promise`\<[`NumberedPortfolio`](../../NumberedPortfolio/NumberedPortfolio.md)\>

#### Defined in

[api/entities/Identity/Portfolios.ts:150](https://github.com/PolymeshAssociation/polymesh-sdk/blob/978e4ded6/src/api/entities/Identity/Portfolios.ts#L150)

___

### getPortfolios

▸ **getPortfolios**(): `Promise`\<[[`DefaultPortfolio`](../../DefaultPortfolio/DefaultPortfolio.md), ...NumberedPortfolio[]]\>

Retrieve all the Portfolios owned by this Identity

#### Returns

`Promise`\<[[`DefaultPortfolio`](../../DefaultPortfolio/DefaultPortfolio.md), ...NumberedPortfolio[]]\>

#### Defined in

[api/entities/Identity/Portfolios.ts:71](https://github.com/PolymeshAssociation/polymesh-sdk/blob/978e4ded6/src/api/entities/Identity/Portfolios.ts#L71)

___

### getTransactionHistory

▸ **getTransactionHistory**(`filters?`): `Promise`\<[`HistoricSettlement`](../../../../../interfaces/API/Entities/Portfolio/Types/HistoricSettlement/HistoricSettlement.md)[]\>

Retrieve a list of transactions where this identity was involved. Can be filtered using parameters

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filters` | `Object` | - |
| `filters.account?` | `string` | Account involved in the settlement |
| `filters.ticker?` | `string` | ticker involved in the transaction |

#### Returns

`Promise`\<[`HistoricSettlement`](../../../../../interfaces/API/Entities/Portfolio/Types/HistoricSettlement/HistoricSettlement.md)[]\>

**`Note`**

uses the middlewareV2

#### Defined in

[api/entities/Identity/Portfolios.ts:201](https://github.com/PolymeshAssociation/polymesh-sdk/blob/978e4ded6/src/api/entities/Identity/Portfolios.ts#L201)
