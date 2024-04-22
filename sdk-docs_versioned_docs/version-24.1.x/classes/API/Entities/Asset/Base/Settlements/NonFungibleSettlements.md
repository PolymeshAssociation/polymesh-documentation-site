---
id: "NonFungibleSettlements"
title: "Class: NonFungibleSettlements"
sidebar_label: "NonFungibleSettlements"
---

[api/entities/Asset/Base/Settlements](../../../../../../modules/API/Entities/Asset/Base/Settlements/Settlements.md).NonFungibleSettlements

Handles all Asset Settlements related functionality

## Hierarchy

- `BaseSettlements`\<`NftCollection`\>

  ↳ **`NonFungibleSettlements`**

## Methods

### canTransfer

▸ **canTransfer**(`args`): `Promise`\<[`TransferBreakdown`](../../../../../../interfaces/API/Entities/Asset/Types/TransferBreakdown/TransferBreakdown.md)\>

Check whether it is possible to create a settlement instruction to transfer an NFT between two Portfolios. Returns a breakdown of
  the transaction containing general errors (such as insufficient balance or invalid receiver), any broken transfer restrictions, and any compliance
  failures

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | `Object` | - |
| `args.from?` | [`PortfolioLike`](../../../../../../modules/Types/Types.md#portfoliolike) | sender Portfolio (optional, defaults to the signing Identity's Default Portfolio) |
| `args.nfts` | (`BigNumber` \| [`Nft`](../../NonFungible/Nft/Nft.md))[] | the NFTs to transfer |
| `args.to` | [`PortfolioLike`](../../../../../../modules/Types/Types.md#portfoliolike) | receiver Portfolio |

#### Returns

`Promise`\<[`TransferBreakdown`](../../../../../../interfaces/API/Entities/Asset/Types/TransferBreakdown/TransferBreakdown.md)\>

**`Note`**

this takes locked tokens into account. For example, if portfolio A has NFTs 1, 2 and 3 of a collection and this function is called to check if 1 of them can be
  transferred to portfolio B (assuming everything else checks out) the result will be success. If an instruction is created and authorized to transfer that token,
  they would become locked. From that point, further calls to this function would return failed results because of the funds being locked, even though it hasn't been
  transferred yet

#### Defined in

[api/entities/Asset/Base/Settlements/index.ts:230](https://github.com/PolymeshAssociation/polymesh-sdk/blob/968f8d70c/src/api/entities/Asset/Base/Settlements/index.ts#L230)

___

### preApprove

▸ **preApprove**(`opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../../../modules/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

Pre-approves receiving this asset for the signing identity. Receiving this asset in a settlement will not require manual affirmation

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`ProcedureOpts`](../../../../../../interfaces/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../../../modules/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

**`Note`**

this method is of type [NoArgsProcedureMethod](../../../../../../interfaces/Types/NoArgsProcedureMethod/NoArgsProcedureMethod.md), which means you can call [preApprove.checkAuthorization](../../../../../../interfaces/Types/NoArgsProcedureMethod/NoArgsProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Inherited from

BaseSettlements.preApprove

#### Defined in

[api/entities/Asset/Base/Settlements/index.ts:37](https://github.com/PolymeshAssociation/polymesh-sdk/blob/968f8d70c/src/api/entities/Asset/Base/Settlements/index.ts#L37)

___

### removePreApproval

▸ **removePreApproval**(`opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../../../modules/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

Removes pre-approval for this asset

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`ProcedureOpts`](../../../../../../interfaces/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../../../modules/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

**`Note`**

this method is of type [NoArgsProcedureMethod](../../../../../../interfaces/Types/NoArgsProcedureMethod/NoArgsProcedureMethod.md), which means you can call [removePreApproval.checkAuthorization](../../../../../../interfaces/Types/NoArgsProcedureMethod/NoArgsProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Inherited from

BaseSettlements.removePreApproval

#### Defined in

[api/entities/Asset/Base/Settlements/index.ts:47](https://github.com/PolymeshAssociation/polymesh-sdk/blob/968f8d70c/src/api/entities/Asset/Base/Settlements/index.ts#L47)
