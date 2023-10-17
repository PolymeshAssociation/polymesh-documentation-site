---
id: "NonFungibleSettlements"
title: "Class: NonFungibleSettlements"
sidebar_label: "NonFungibleSettlements"
---

[api/entities/Asset/Base/Settlements](../../../../../../modules/API/Entities/Asset/Base/Settlements/Settlements.md).NonFungibleSettlements

Handles all Asset Settlements related functionality

## Hierarchy

- `BaseSettlements`<`NftCollection`\>

  ↳ **`NonFungibleSettlements`**

## Methods

### canTransfer

▸ **canTransfer**(`args`): `Promise`<[`TransferBreakdown`](../../../../../../interfaces/API/Entities/Asset/Types/TransferBreakdown/TransferBreakdown.md)\>

Check whether it is possible to create a settlement instruction to transfer an NFT between two Portfolios. Returns a breakdown of
  the transaction containing general errors (such as insufficient balance or invalid receiver), any broken transfer restrictions, and any compliance
  failures

**`Note`**

 this takes locked tokens into account. For example, if portfolio A has NFTs 1, 2 and 3 of a collection and this function is called to check if 1 of them can be
  transferred to portfolio B (assuming everything else checks out) the result will be success. If an instruction is created and authorized to transfer that token,
  they would become locked. From that point, further calls to this function would return failed results because of the funds being locked, even though it hasn't been
  transferred yet

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | `Object` | - |
| `args.from?` | [`PortfolioLike`](../../../../../../modules/Types/Types.md#portfoliolike) | sender Portfolio (optional, defaults to the signing Identity's Default Portfolio) |
| `args.nfts` | (`BigNumber` \| [`Nft`](../../NonFungible/Nft/Nft.md))[] | the NFTs to transfer |
| `args.to` | [`PortfolioLike`](../../../../../../modules/Types/Types.md#portfoliolike) | receiver Portfolio |

#### Returns

`Promise`<[`TransferBreakdown`](../../../../../../interfaces/API/Entities/Asset/Types/TransferBreakdown/TransferBreakdown.md)\>
