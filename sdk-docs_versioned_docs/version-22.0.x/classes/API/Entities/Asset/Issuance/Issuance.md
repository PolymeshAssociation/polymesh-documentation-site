---
id: 'Issuance'
title: 'Class: Issuance'
sidebar_label: 'Issuance'
---

[api/entities/Asset/Issuance](../../../../../modules/API/Entities/Asset/Issuance/Issuance.md).Issuance

Handles all Asset Issuance related functionality

## Hierarchy

- `Namespace`\<[`Asset`](../Asset.md)\>

  ↳ **`Issuance`**

## Methods

### issue

▸ **issue**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../../modules/Types/Types.md#genericpolymeshtransaction) \<[`Asset`](../Asset.md), [`Asset`](../Asset.md)\>\>

Issue a certain amount of Asset tokens to the caller's default portfolio

#### Parameters

| Name          | Type                                                                              | Description                         |
| :------------ | :-------------------------------------------------------------------------------- | :---------------------------------- |
| `args`        | `Object`                                                                          | -                                   |
| `args.amount` | `BigNumber`                                                                       | amount of Asset tokens to be issued |
| `opts?`       | [`ProcedureOpts`](../../../../../interfaces/Types/ProcedureOpts/ProcedureOpts.md) | -                                   |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../../modules/Types/Types.md#genericpolymeshtransaction) \<[`Asset`](../Asset.md), [`Asset`](../Asset.md)\>\>

**`Note`**

this method is of type [ProcedureMethod](../../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [issue.checkAuthorization](../../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/entities/Asset/Issuance.ts:34](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2d3ac2aea/src/api/entities/Asset/Issuance.ts#L34)
