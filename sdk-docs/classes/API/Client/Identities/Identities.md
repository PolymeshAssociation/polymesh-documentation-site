---
id: "Identities"
title: "Class: Identities"
sidebar_label: "Identities"
---

[api/client/Identities](../../../../modules/API/Client/Identities/Identities.md).Identities

Handles all Identity related functionality

## Methods

### createPortfolio

▸ **createPortfolio**(`args`, `opts?`): `Promise`<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction)<[`NumberedPortfolio`](../../Entities/NumberedPortfolio/NumberedPortfolio.md)[], [`NumberedPortfolio`](../../Entities/NumberedPortfolio/NumberedPortfolio.md)\>\>

Create a new Portfolio under the ownership of the signing Identity

**`Note`**

this method is of type [ProcedureMethod](../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [createPortfolio.checkAuthorization](../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.name` | `string` |
| `opts?` | [`ProcedureOpts`](../../../../interfaces/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction)<[`NumberedPortfolio`](../../Entities/NumberedPortfolio/NumberedPortfolio.md)[], [`NumberedPortfolio`](../../Entities/NumberedPortfolio/NumberedPortfolio.md)\>\>

___

### createPortfolios

▸ **createPortfolios**(`args`, `opts?`): `Promise`<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction)<[`NumberedPortfolio`](../../Entities/NumberedPortfolio/NumberedPortfolio.md)[], [`NumberedPortfolio`](../../Entities/NumberedPortfolio/NumberedPortfolio.md)[]\>\>

Creates a set of new Portfolios under the ownership of the signing Identity

**`Note`**

this method is of type [ProcedureMethod](../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [createPortfolios.checkAuthorization](../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.names` | `string`[] |
| `opts?` | [`ProcedureOpts`](../../../../interfaces/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction)<[`NumberedPortfolio`](../../Entities/NumberedPortfolio/NumberedPortfolio.md)[], [`NumberedPortfolio`](../../Entities/NumberedPortfolio/NumberedPortfolio.md)[]\>\>

___

### getIdentity

▸ **getIdentity**(`args`): `Promise`<[`Identity`](../../Entities/Identity/Identity.md)\>

Create an Identity instance from a DID

**`Throws`**

if there is no Identity with the passed DID

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.did` | `string` |

#### Returns

`Promise`<[`Identity`](../../Entities/Identity/Identity.md)\>

___

### isIdentityValid

▸ **isIdentityValid**(`args`): `Promise`<`boolean`\>

Return whether the supplied Identity/DID exists

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.identity` | `string` \| [`Identity`](../../Entities/Identity/Identity.md) |

#### Returns

`Promise`<`boolean`\>

___

### registerIdentity

▸ **registerIdentity**(`args`, `opts?`): `Promise`<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction)<[`Identity`](../../Entities/Identity/Identity.md), [`Identity`](../../Entities/Identity/Identity.md)\>\>

Register an Identity

**`Note`**

must be a CDD provider

**`Note`**

this may create [Authorization Requests](../../Entities/AuthorizationRequest/AuthorizationRequest.md) which have to be accepted by the `targetAccount`.
  An [Account](../../Entities/Account/Account.md) or [Identity](../../Entities/Identity/Identity.md) can fetch its pending Authorization Requests by calling [authorizations.getReceived](../../Entities/Common/Namespaces/Authorizations/Authorizations.md#getreceived).
  Also, an Account or Identity can directly fetch the details of an Authorization Request by calling [authorizations.getOne](../../Entities/Common/Namespaces/Authorizations/Authorizations.md#getone)

**`Note`**

required role:
  - Customer Due Diligence Provider

**`Note`**

this method is of type [ProcedureMethod](../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [registerIdentity.checkAuthorization](../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`RegisterIdentityParams`](../../../../interfaces/API/Procedures/Types/RegisterIdentityParams/RegisterIdentityParams.md) |
| `opts?` | [`ProcedureOpts`](../../../../interfaces/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction)<[`Identity`](../../Entities/Identity/Identity.md), [`Identity`](../../Entities/Identity/Identity.md)\>\>
