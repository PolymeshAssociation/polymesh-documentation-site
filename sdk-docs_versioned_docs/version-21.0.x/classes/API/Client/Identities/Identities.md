---
id: 'Identities'
title: 'Class: Identities'
sidebar_label: 'Identities'
---

[api/client/Identities](../../../../modules/API/Client/Identities/Identities.md).Identities

Handles all Identity related functionality

## Methods

### attestPrimaryKeyRotation

▸ **attestPrimaryKeyRotation**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction) \<[`AuthorizationRequest`](../../Entities/AuthorizationRequest/AuthorizationRequest.md), [`AuthorizationRequest`](../../Entities/AuthorizationRequest/AuthorizationRequest.md)\>\>

Get CDD Provider's attestation to change primary key

#### Parameters

| Name    | Type                                                                                                                                             |
| :------ | :----------------------------------------------------------------------------------------------------------------------------------------------- |
| `args`  | [`AttestPrimaryKeyRotationParams`](../../../../interfaces/API/Procedures/Types/AttestPrimaryKeyRotationParams/AttestPrimaryKeyRotationParams.md) |
| `opts?` | [`ProcedureOpts`](../../../../interfaces/Types/ProcedureOpts/ProcedureOpts.md)                                                                   |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction) \<[`AuthorizationRequest`](../../Entities/AuthorizationRequest/AuthorizationRequest.md), [`AuthorizationRequest`](../../Entities/AuthorizationRequest/AuthorizationRequest.md)\>\>

**`Note`**

the transaction signer must be a CDD provider

**`Note`**

this creates an [Authorization Requests](../../Entities/AuthorizationRequest/AuthorizationRequest.md) which have to be accepted by the `targetAccount` along with the authorization for `RotatingPrimaryKey`.
An [Account](../../Entities/Account/Account.md) or [Identity](../../Entities/Identity/Identity.md) can fetch its pending Authorization Requests by calling [authorizations.getReceived](../../Entities/Common/Namespaces/Authorizations/Authorizations.md#getreceived).
Also, an Account or Identity can directly fetch the details of an Authorization Request by calling [authorizations.getOne](../../Entities/Common/Namespaces/Authorizations/Authorizations.md#getone)

**`Note`**

required role:

- Customer Due Diligence Provider

**`Note`**

this method is of type [ProcedureMethod](../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [attestPrimaryKeyRotation.checkAuthorization](../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/client/Identities.ts:106](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/client/Identities.ts#L106)

---

### createPortfolio

▸ **createPortfolio**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction) \<[`NumberedPortfolio`](../../Entities/NumberedPortfolio/NumberedPortfolio.md)[], [`NumberedPortfolio`](../../Entities/NumberedPortfolio/NumberedPortfolio.md)\>\>

Create a new Portfolio under the ownership of the signing Identity

#### Parameters

| Name        | Type                                                                           |
| :---------- | :----------------------------------------------------------------------------- |
| `args`      | `Object`                                                                       |
| `args.name` | `string`                                                                       |
| `opts?`     | [`ProcedureOpts`](../../../../interfaces/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction) \<[`NumberedPortfolio`](../../Entities/NumberedPortfolio/NumberedPortfolio.md)[], [`NumberedPortfolio`](../../Entities/NumberedPortfolio/NumberedPortfolio.md)\>\>

**`Note`**

this method is of type [ProcedureMethod](../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [createPortfolio.checkAuthorization](../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/client/Identities.ts:130](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/client/Identities.ts#L130)

---

### createPortfolios

▸ **createPortfolios**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction) \<[`NumberedPortfolio`](../../Entities/NumberedPortfolio/NumberedPortfolio.md)[], [`NumberedPortfolio`](../../Entities/NumberedPortfolio/NumberedPortfolio.md)[]\>\>

Creates a set of new Portfolios under the ownership of the signing Identity

#### Parameters

| Name         | Type                                                                           |
| :----------- | :----------------------------------------------------------------------------- |
| `args`       | `Object`                                                                       |
| `args.names` | `string`[]                                                                     |
| `opts?`      | [`ProcedureOpts`](../../../../interfaces/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction) \<[`NumberedPortfolio`](../../Entities/NumberedPortfolio/NumberedPortfolio.md)[], [`NumberedPortfolio`](../../Entities/NumberedPortfolio/NumberedPortfolio.md)[]\>\>

**`Note`**

this method is of type [ProcedureMethod](../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [createPortfolios.checkAuthorization](../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/client/Identities.ts:140](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/client/Identities.ts#L140)

---

### getIdentity

▸ **getIdentity**(`args`): `Promise`\<[`Identity`](../../Entities/Identity/Identity.md)\>

Create an Identity instance from a DID

#### Parameters

| Name       | Type     |
| :--------- | :------- |
| `args`     | `Object` |
| `args.did` | `string` |

#### Returns

`Promise`\<[`Identity`](../../Entities/Identity/Identity.md)\>

**`Throws`**

if there is no Identity with the passed DID

#### Defined in

[api/client/Identities.ts:149](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/client/Identities.ts#L149)

---

### isIdentityValid

▸ **isIdentityValid**(`args`): `Promise`\<`boolean`\>

Return whether the supplied Identity/DID exists

#### Parameters

| Name            | Type                                                          |
| :-------------- | :------------------------------------------------------------ |
| `args`          | `Object`                                                      |
| `args.identity` | `string` \| [`Identity`](../../Entities/Identity/Identity.md) |

#### Returns

`Promise`\<`boolean`\>

#### Defined in

[api/client/Identities.ts:156](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/client/Identities.ts#L156)

---

### registerIdentity

▸ **registerIdentity**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction) \<[`Identity`](../../Entities/Identity/Identity.md), [`Identity`](../../Entities/Identity/Identity.md)\>\>

Register an Identity, possibly with a CDD claim

#### Parameters

| Name    | Type                                                                                                                     |
| :------ | :----------------------------------------------------------------------------------------------------------------------- |
| `args`  | [`RegisterIdentityParams`](../../../../interfaces/API/Procedures/Types/RegisterIdentityParams/RegisterIdentityParams.md) |
| `opts?` | [`ProcedureOpts`](../../../../interfaces/Types/ProcedureOpts/ProcedureOpts.md)                                           |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction) \<[`Identity`](../../Entities/Identity/Identity.md), [`Identity`](../../Entities/Identity/Identity.md)\>\>

**`Note`**

the transaction signer must be a CDD provider

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

#### Defined in

[api/client/Identities.ts:88](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/client/Identities.ts#L88)

---

### rotatePrimaryKey

▸ **rotatePrimaryKey**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction) \<[`AuthorizationRequest`](../../Entities/AuthorizationRequest/AuthorizationRequest.md), [`AuthorizationRequest`](../../Entities/AuthorizationRequest/AuthorizationRequest.md)\>\>

Creates an Authorization to rotate primary key of the signing Identity by the `targetAccount`

#### Parameters

| Name    | Type                                                                                                                     |
| :------ | :----------------------------------------------------------------------------------------------------------------------- |
| `args`  | [`RotatePrimaryKeyParams`](../../../../interfaces/API/Procedures/Types/RotatePrimaryKeyParams/RotatePrimaryKeyParams.md) |
| `opts?` | [`ProcedureOpts`](../../../../interfaces/Types/ProcedureOpts/ProcedureOpts.md)                                           |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction) \<[`AuthorizationRequest`](../../Entities/AuthorizationRequest/AuthorizationRequest.md), [`AuthorizationRequest`](../../Entities/AuthorizationRequest/AuthorizationRequest.md)\>\>

**`Note`**

this creates an [Authorization Requests](../../Entities/AuthorizationRequest/AuthorizationRequest.md) which have to be accepted by the `targetAccount` along with the optional CDD authorization generated by CDD provider attesting the rotation of primary key
An [Account](../../Entities/Account/Account.md) or [Identity](../../Entities/Identity/Identity.md) can fetch its pending Authorization Requests by calling [authorizations.getReceived](../../Entities/Common/Namespaces/Authorizations/Authorizations.md#getreceived).
Also, an Account or Identity can directly fetch the details of an Authorization Request by calling [authorizations.getOne](../../Entities/Common/Namespaces/Authorizations/Authorizations.md#getone)

**`Note`**

this method is of type [ProcedureMethod](../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [rotatePrimaryKey.checkAuthorization](../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/client/Identities.ts:120](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/client/Identities.ts#L120)
