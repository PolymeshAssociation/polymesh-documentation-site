[api/entities/Asset/Issuance](../../../../../Modules/API/Entities/Asset/Issuance.md).Issuance

Handles all Asset Issuance related functionality

## Hierarchy

- `Namespace`<[`Asset`](../Asset.md)\>

  ↳ **`Issuance`**

## Methods

### issue

▸ **issue**(`args`, `opts?`): `Promise`<[`GenericPolymeshTransaction`](../../../../../Modules/Types/Types.md#genericpolymeshtransaction)<[`Asset`](../Asset.md), [`Asset`](../Asset.md)\>\>

Issue a certain amount of Asset tokens to the caller's default portfolio

**`Note`**

this method is of type [ProcedureMethod](../../../../../Interfaces/Types/ProcedureMethod.md), which means you can call [issue.checkAuthorization](../../../../../Interfaces/Types/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | `Object` | - |
| `args.amount` | `BigNumber` | amount of Asset tokens to be issued |
| `opts?` | [`ProcedureOpts`](../../../../../Interfaces/Types/ProcedureOpts.md) | - |

#### Returns

`Promise`<[`GenericPolymeshTransaction`](../../../../../Modules/Types/Types.md#genericpolymeshtransaction)<[`Asset`](../Asset.md), [`Asset`](../Asset.md)\>\>
