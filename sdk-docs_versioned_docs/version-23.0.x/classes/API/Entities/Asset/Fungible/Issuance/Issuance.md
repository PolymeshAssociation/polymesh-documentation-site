---
id: "Issuance"
title: "Class: Issuance"
sidebar_label: "Issuance"
---

[api/entities/Asset/Fungible/Issuance](../../../../../../modules/API/Entities/Asset/Fungible/Issuance/Issuance.md).Issuance

Handles all Asset Issuance related functionality

## Hierarchy

- `Namespace`<[`FungibleAsset`](../FungibleAsset.md)\>

  ↳ **`Issuance`**

## Methods

### issue

▸ **issue**(`args`, `opts?`): `Promise`<[`GenericPolymeshTransaction`](../../../../../../modules/Types/Types.md#genericpolymeshtransaction)<[`FungibleAsset`](../FungibleAsset.md), [`FungibleAsset`](../FungibleAsset.md)\>\>

Issue a certain amount of Asset tokens to the caller's default portfolio

**`Note`**

 this method is of type [ProcedureMethod](../../../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [issue.checkAuthorization](../../../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | `Object` | - |
| `args.amount` | `BigNumber` | amount of Asset tokens to be issued |
| `opts?` | [`ProcedureOpts`](../../../../../../interfaces/Types/ProcedureOpts/ProcedureOpts.md) | - |

#### Returns

`Promise`<[`GenericPolymeshTransaction`](../../../../../../modules/Types/Types.md#genericpolymeshtransaction)<[`FungibleAsset`](../FungibleAsset.md), [`FungibleAsset`](../FungibleAsset.md)\>\>
