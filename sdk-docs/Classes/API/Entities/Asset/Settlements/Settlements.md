[api/entities/Asset/Settlements](../../../../../Modules/API/Entities/Asset/Settlements.md).Settlements

Handles all Asset Settlements related functionality

## Hierarchy

- `Namespace`<[`Asset`](../Asset.md)\>

  ↳ **`Settlements`**

## Methods

### canTransfer

▸ **canTransfer**(`args`): `Promise`<[`TransferBreakdown`](../../../../../Interfaces/API/Entities/Asset/Types/TransferBreakdown.md)\>

Check whether it is possible to create a settlement instruction to transfer a certain amount of this asset between two Portfolios. Returns a breakdown of
  the transaction containing general errors (such as insufficient balance or invalid receiver), any broken transfer restrictions, and any compliance
  failures

**`Note`**

this takes locked tokens into account. For example, if portfolio A has 1000 tokens and this function is called to check if 700 of them can be
  transferred to portfolio B (assuming everything else checks out) the result will be success. If an instruction is created and authorized to transfer those 700 tokens,
  they would become locked. From that point, further calls to this function would return failed results because of the funds being locked, even though they haven't been
  transferred yet

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | `Object` | - |
| `args.amount` | `BigNumber` | amount of tokens to transfer |
| `args.from?` | [`PortfolioLike`](../../../../../Modules/Types/Types.md#portfoliolike) | sender Portfolio (optional, defaults to the signing Identity's Default Portfolio) |
| `args.to` | [`PortfolioLike`](../../../../../Modules/Types/Types.md#portfoliolike) | receiver Portfolio |

#### Returns

`Promise`<[`TransferBreakdown`](../../../../../Interfaces/API/Entities/Asset/Types/TransferBreakdown.md)\>
