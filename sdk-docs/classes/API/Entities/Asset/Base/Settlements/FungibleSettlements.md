---
id: "FungibleSettlements"
title: "Class: FungibleSettlements"
sidebar_label: "FungibleSettlements"
---

[api/entities/Asset/Base/Settlements](../../../../../../modules/API/Entities/Asset/Base/Settlements/Settlements.md).FungibleSettlements

Handles all Asset Settlements related functionality

## Hierarchy

- `BaseSettlements`\<[`FungibleAsset`](../../Fungible/FungibleAsset.md)\>

  ↳ **`FungibleSettlements`**

## Methods

### canTransfer

▸ **canTransfer**(`args`): `Promise`\<[`TransferBreakdown`](../../../../../../interfaces/API/Entities/Asset/Types/TransferBreakdown/TransferBreakdown.md)\>

Check whether it is possible to create a settlement instruction to transfer a certain amount of this asset between two Portfolios. Returns a breakdown of
  the transaction containing general errors (such as insufficient balance or invalid receiver), any broken transfer restrictions, and any compliance
  failures

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | `Object` | - |
| `args.amount` | `BigNumber` | amount of tokens to transfer |
| `args.from?` | [`PortfolioLike`](../../../../../../modules/API/Entities/Types/Types.md#portfoliolike) | sender Portfolio (optional, defaults to the signing Identity's Default Portfolio) |
| `args.to` | [`PortfolioLike`](../../../../../../modules/API/Entities/Types/Types.md#portfoliolike) | receiver Portfolio |

#### Returns

`Promise`\<[`TransferBreakdown`](../../../../../../interfaces/API/Entities/Asset/Types/TransferBreakdown/TransferBreakdown.md)\>

**`Note`**

this takes locked tokens into account. For example, if portfolio A has 1000 tokens and this function is called to check if 700 of them can be
  transferred to portfolio B (assuming everything else checks out) the result will be success. If an instruction is created and authorized to transfer those 700 tokens,
  they would become locked. From that point, further calls to this function would return failed results because of the funds being locked, even though they haven't been
  transferred yet

#### Defined in

[api/entities/Asset/Base/Settlements/index.ts:281](https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/entities/Asset/Base/Settlements/index.ts#L281)

___

### preApprove

▸ **preApprove**(`opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

Pre-approves receiving this asset for the signing identity. Receiving this asset in a settlement will not require manual affirmation

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`ProcedureOpts`](../../../../../../interfaces/API/Procedures/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

**`Note`**

this method is of type [NoArgsProcedureMethod](../../../../../../interfaces/API/Procedures/Types/NoArgsProcedureMethod/NoArgsProcedureMethod.md), which means you can call [preApprove.checkAuthorization](../../../../../../interfaces/API/Procedures/Types/NoArgsProcedureMethod/NoArgsProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Inherited from

BaseSettlements.preApprove

#### Defined in

[api/entities/Asset/Base/Settlements/index.ts:53](https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/entities/Asset/Base/Settlements/index.ts#L53)

___

### removePreApproval

▸ **removePreApproval**(`opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

Removes pre-approval for this asset

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`ProcedureOpts`](../../../../../../interfaces/API/Procedures/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

**`Note`**

this method is of type [NoArgsProcedureMethod](../../../../../../interfaces/API/Procedures/Types/NoArgsProcedureMethod/NoArgsProcedureMethod.md), which means you can call [removePreApproval.checkAuthorization](../../../../../../interfaces/API/Procedures/Types/NoArgsProcedureMethod/NoArgsProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Inherited from

BaseSettlements.removePreApproval

#### Defined in

[api/entities/Asset/Base/Settlements/index.ts:63](https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/entities/Asset/Base/Settlements/index.ts#L63)
