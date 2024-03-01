---
id: "Settlements"
title: "Class: Settlements"
sidebar_label: "Settlements"
---

[api/entities/Asset/Settlements](../../../../../modules/API/Entities/Asset/Settlements/Settlements.md).Settlements

Handles all Asset Settlements related functionality

## Hierarchy

- `Namespace`\<[`Asset`](../Asset.md)\>

  ↳ **`Settlements`**

## Methods

### canTransfer

▸ **canTransfer**(`args`): `Promise`\<[`TransferBreakdown`](../../../../../interfaces/API/Entities/Asset/Types/TransferBreakdown/TransferBreakdown.md)\>

Check whether it is possible to create a settlement instruction to transfer a certain amount of this asset between two Portfolios. Returns a breakdown of
  the transaction containing general errors (such as insufficient balance or invalid receiver), any broken transfer restrictions, and any compliance
  failures

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | `Object` | - |
| `args.amount` | `BigNumber` | amount of tokens to transfer |
| `args.from?` | [`PortfolioLike`](../../../../../modules/Types/Types.md#portfoliolike) | sender Portfolio (optional, defaults to the signing Identity's Default Portfolio) |
| `args.to` | [`PortfolioLike`](../../../../../modules/Types/Types.md#portfoliolike) | receiver Portfolio |

#### Returns

`Promise`\<[`TransferBreakdown`](../../../../../interfaces/API/Entities/Asset/Types/TransferBreakdown/TransferBreakdown.md)\>

**`Note`**

this takes locked tokens into account. For example, if portfolio A has 1000 tokens and this function is called to check if 700 of them can be
  transferred to portfolio B (assuming everything else checks out) the result will be success. If an instruction is created and authorized to transfer those 700 tokens,
  they would become locked. From that point, further calls to this function would return failed results because of the funds being locked, even though they haven't been
  transferred yet

#### Defined in

[api/entities/Asset/Settlements.ts:36](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/Asset/Settlements.ts#L36)
