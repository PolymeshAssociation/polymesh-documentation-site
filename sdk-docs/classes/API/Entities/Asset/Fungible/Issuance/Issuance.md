---
id: "Issuance"
title: "Class: Issuance"
sidebar_label: "Issuance"
---

[api/entities/Asset/Fungible/Issuance](../../../../../../modules/API/Entities/Asset/Fungible/Issuance/Issuance.md).Issuance

Handles all Asset Issuance related functionality

## Hierarchy

- `Namespace`\<[`FungibleAsset`](../FungibleAsset.md)\>

  ↳ **`Issuance`**

## Methods

### issue

▸ **issue**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<[`FungibleAsset`](../FungibleAsset.md), [`FungibleAsset`](../FungibleAsset.md)\>\>

Issue a certain amount of Asset tokens to the caller's default portfolio

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`IssueTokensParams`](../../../../../../interfaces/API/Procedures/Types/IssueTokensParams/IssueTokensParams.md) |
| `opts?` | [`ProcedureOpts`](../../../../../../interfaces/API/Procedures/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<[`FungibleAsset`](../FungibleAsset.md), [`FungibleAsset`](../FungibleAsset.md)\>\>

**`Note`**

this method is of type [ProcedureMethod](../../../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [issue.checkAuthorization](../../../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/entities/Asset/Fungible/Issuance/index.ts:28](https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/entities/Asset/Fungible/Issuance/index.ts#L28)
