---
id: "Identities"
title: "Class: Identities"
sidebar_label: "Identities"
---

[api/client/Identities](../../../../modules/API/Client/Identities/Identities.md).Identities

Handles all Identity related functionality

## Methods

### allowIdentityToCreatePortfolios

▸ **allowIdentityToCreatePortfolios**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

Gives permission to the Identity to create Portfolios on behalf of the signing Identity

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`AllowIdentityToCreatePortfoliosParams`](../../../../modules/API/Procedures/Types/Types.md#allowidentitytocreateportfoliosparams) |
| `opts?` | [`ProcedureOpts`](../../../../interfaces/API/Procedures/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

**`Throws`**

if
 - the provided Identity already has permissions to create portfolios for signing Identity
 - the provided Identity does not exist

**`Note`**

this method is of type [ProcedureMethod](../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [allowIdentityToCreatePortfolios.checkAuthorization](../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/client/Identities.ts:274](https://github.com/PolymeshAssociation/polymesh-sdk/blob/49a0066c3/src/api/client/Identities.ts#L274)

___

### attestPrimaryKeyRotation

▸ **attestPrimaryKeyRotation**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<[`AuthorizationRequest`](../../Entities/AuthorizationRequest/AuthorizationRequest.md), [`AuthorizationRequest`](../../Entities/AuthorizationRequest/AuthorizationRequest.md)\>\>

Get CDD Provider's attestation to change primary key

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`AttestPrimaryKeyRotationParams`](../../../../interfaces/API/Procedures/Types/AttestPrimaryKeyRotationParams/AttestPrimaryKeyRotationParams.md) |
| `opts?` | [`ProcedureOpts`](../../../../interfaces/API/Procedures/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<[`AuthorizationRequest`](../../Entities/AuthorizationRequest/AuthorizationRequest.md), [`AuthorizationRequest`](../../Entities/AuthorizationRequest/AuthorizationRequest.md)\>\>

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

this method is of type [ProcedureMethod](../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [attestPrimaryKeyRotation.checkAuthorization](../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/client/Identities.ts:145](https://github.com/PolymeshAssociation/polymesh-sdk/blob/49a0066c3/src/api/client/Identities.ts#L145)

___

### createChild

▸ **createChild**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<[`ChildIdentity`](../../Entities/Identity/ChildIdentity/ChildIdentity.md), [`ChildIdentity`](../../Entities/Identity/ChildIdentity/ChildIdentity.md)\>\>

Creates a child identity and makes the `secondaryKey` as the primary key of the child identity

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`CreateChildIdentityParams`](../../../../interfaces/API/Procedures/Types/CreateChildIdentityParams/CreateChildIdentityParams.md) |
| `opts?` | [`ProcedureOpts`](../../../../interfaces/API/Procedures/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<[`ChildIdentity`](../../Entities/Identity/ChildIdentity/ChildIdentity.md), [`ChildIdentity`](../../Entities/Identity/ChildIdentity/ChildIdentity.md)\>\>

**`Note`**

the given `secondaryKey` is removed as secondary key from the signing Identity

**`Throws`**

if
 - the transaction signer is not the primary account of which the `secondaryKey` is a secondary key
 - the `secondaryKey` can't be unlinked (can happen when it's part of a multisig with some balance)
 - the signing account is not a primary key
 - the signing Identity is already a child of some other identity

**`Note`**

this method is of type [ProcedureMethod](../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [createChild.checkAuthorization](../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/client/Identities.ts:242](https://github.com/PolymeshAssociation/polymesh-sdk/blob/49a0066c3/src/api/client/Identities.ts#L242)

___

### createChildren

▸ **createChildren**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<[`ChildIdentity`](../../Entities/Identity/ChildIdentity/ChildIdentity.md)[], [`ChildIdentity`](../../Entities/Identity/ChildIdentity/ChildIdentity.md)[]\>\>

Create child identities using off chain authorization

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`CreateChildIdentitiesParams`](../../../../interfaces/API/Procedures/Types/CreateChildIdentitiesParams/CreateChildIdentitiesParams.md) |
| `opts?` | [`ProcedureOpts`](../../../../interfaces/API/Procedures/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<[`ChildIdentity`](../../Entities/Identity/ChildIdentity/ChildIdentity.md)[], [`ChildIdentity`](../../Entities/Identity/ChildIdentity/ChildIdentity.md)[]\>\>

**`Note`**

the list of `key` provided in the params should not be linked to any other account

**`Throws`**

if
 - the signing account is not a primary key
 - the signing Identity is already a child of some other identity
 - `expiresAt` is not a future date
 - the any `key` in `childKeyAuths` is already linked to an Identity

**`Note`**

this method is of type [ProcedureMethod](../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [createChildren.checkAuthorization](../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/client/Identities.ts:260](https://github.com/PolymeshAssociation/polymesh-sdk/blob/49a0066c3/src/api/client/Identities.ts#L260)

___

### createPortfolio

▸ **createPortfolio**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<[`NumberedPortfolio`](../../Entities/NumberedPortfolio/NumberedPortfolio.md)[], [`NumberedPortfolio`](../../Entities/NumberedPortfolio/NumberedPortfolio.md)\>\>

Create a new Portfolio under the ownership of the signing Identity

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.name` | `string` |
| `args.ownerDid?` | `string` |
| `opts?` | [`ProcedureOpts`](../../../../interfaces/API/Procedures/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<[`NumberedPortfolio`](../../Entities/NumberedPortfolio/NumberedPortfolio.md)[], [`NumberedPortfolio`](../../Entities/NumberedPortfolio/NumberedPortfolio.md)\>\>

**`Note`**

the `ownerDid` is optional. If provided portfolios will be created as Custody Portfolios under the `ownerDid`

**`Note`**

this method is of type [ProcedureMethod](../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [createPortfolio.checkAuthorization](../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/client/Identities.ts:188](https://github.com/PolymeshAssociation/polymesh-sdk/blob/49a0066c3/src/api/client/Identities.ts#L188)

___

### createPortfolios

▸ **createPortfolios**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<[`NumberedPortfolio`](../../Entities/NumberedPortfolio/NumberedPortfolio.md)[], [`NumberedPortfolio`](../../Entities/NumberedPortfolio/NumberedPortfolio.md)[]\>\>

Creates a set of new Portfolios under the ownership of the signing Identity

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.names` | `string`[] |
| `args.ownerDid?` | `string` |
| `opts?` | [`ProcedureOpts`](../../../../interfaces/API/Procedures/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<[`NumberedPortfolio`](../../Entities/NumberedPortfolio/NumberedPortfolio.md)[], [`NumberedPortfolio`](../../Entities/NumberedPortfolio/NumberedPortfolio.md)[]\>\>

**`Note`**

the `ownerDid` is optional. If provided portfolios will be created as Custody Portfolios under the `ownerDid`

**`Note`**

this method is of type [ProcedureMethod](../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [createPortfolios.checkAuthorization](../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/client/Identities.ts:199](https://github.com/PolymeshAssociation/polymesh-sdk/blob/49a0066c3/src/api/client/Identities.ts#L199)

___

### getAllowedCustodians

▸ **getAllowedCustodians**(`did`): `Promise`\<`string`[]\>

Returns a list of allowed custodian did(s) for Identity

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `string` \| [`Identity`](../../Entities/Identity/Identity.md) |

#### Returns

`Promise`\<`string`[]\>

**`Throws`**

if
- the provided Identity does not exist

#### Defined in

[api/client/Identities.ts:297](https://github.com/PolymeshAssociation/polymesh-sdk/blob/49a0066c3/src/api/client/Identities.ts#L297)

___

### getChildIdentity

▸ **getChildIdentity**(`args`): `Promise`\<[`ChildIdentity`](../../Entities/Identity/ChildIdentity/ChildIdentity.md)\>

Create a ChildIdentity instance from a DID

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.did` | `string` |

#### Returns

`Promise`\<[`ChildIdentity`](../../Entities/Identity/ChildIdentity/ChildIdentity.md)\>

**`Throws`**

if there is no ChildIdentity with the passed DID

#### Defined in

[api/client/Identities.ts:217](https://github.com/PolymeshAssociation/polymesh-sdk/blob/49a0066c3/src/api/client/Identities.ts#L217)

___

### getIdentity

▸ **getIdentity**(`args`): `Promise`\<[`Identity`](../../Entities/Identity/Identity.md)\>

Create an Identity instance from a DID

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.did` | `string` |

#### Returns

`Promise`\<[`Identity`](../../Entities/Identity/Identity.md)\>

**`Throws`**

if there is no Identity with the passed DID

#### Defined in

[api/client/Identities.ts:208](https://github.com/PolymeshAssociation/polymesh-sdk/blob/49a0066c3/src/api/client/Identities.ts#L208)

___

### isIdentityValid

▸ **isIdentityValid**(`args`): `Promise`\<`boolean`\>

Return whether the supplied Identity/DID exists

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.identity` | `string` \| [`Identity`](../../Entities/Identity/Identity.md) |

#### Returns

`Promise`\<`boolean`\>

#### Defined in

[api/client/Identities.ts:224](https://github.com/PolymeshAssociation/polymesh-sdk/blob/49a0066c3/src/api/client/Identities.ts#L224)

___

### registerIdentity

▸ **registerIdentity**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<[`Identity`](../../Entities/Identity/Identity.md), [`Identity`](../../Entities/Identity/Identity.md)\>\>

Register an Identity, possibly with a CDD claim

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`RegisterIdentityParams`](../../../../interfaces/API/Procedures/Types/RegisterIdentityParams/RegisterIdentityParams.md) |
| `opts?` | [`ProcedureOpts`](../../../../interfaces/API/Procedures/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<[`Identity`](../../Entities/Identity/Identity.md), [`Identity`](../../Entities/Identity/Identity.md)\>\>

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

this method is of type [ProcedureMethod](../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [registerIdentity.checkAuthorization](../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/client/Identities.ts:127](https://github.com/PolymeshAssociation/polymesh-sdk/blob/49a0066c3/src/api/client/Identities.ts#L127)

___

### revokeIdentityToCreatePortfolios

▸ **revokeIdentityToCreatePortfolios**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

Revokes permission from the Identity to create Portfolios on behalf of the signing Identity

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`RevokeIdentityToCreatePortfoliosParams`](../../../../modules/API/Procedures/Types/Types.md#revokeidentitytocreateportfoliosparams) |
| `opts?` | [`ProcedureOpts`](../../../../interfaces/API/Procedures/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

**`Throws`**

if
 - the provided Identity already does not have permissions to create portfolios for signing Identity
 - the provided Identity does not exist

**`Note`**

this method is of type [ProcedureMethod](../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [revokeIdentityToCreatePortfolios.checkAuthorization](../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/client/Identities.ts:288](https://github.com/PolymeshAssociation/polymesh-sdk/blob/49a0066c3/src/api/client/Identities.ts#L288)

___

### rotatePrimaryKey

▸ **rotatePrimaryKey**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<[`AuthorizationRequest`](../../Entities/AuthorizationRequest/AuthorizationRequest.md), [`AuthorizationRequest`](../../Entities/AuthorizationRequest/AuthorizationRequest.md)\>\>

Creates an Authorization to rotate primary key of the signing Identity by the `targetAccount`

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`RotatePrimaryKeyParams`](../../../../interfaces/API/Procedures/Types/RotatePrimaryKeyParams/RotatePrimaryKeyParams.md) |
| `opts?` | [`ProcedureOpts`](../../../../interfaces/API/Procedures/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<[`AuthorizationRequest`](../../Entities/AuthorizationRequest/AuthorizationRequest.md), [`AuthorizationRequest`](../../Entities/AuthorizationRequest/AuthorizationRequest.md)\>\>

**`Note`**

this creates an [Authorization Requests](../../Entities/AuthorizationRequest/AuthorizationRequest.md) which have to be accepted by the `targetAccount` along with the optional CDD authorization generated by CDD provider attesting the rotation of primary key
  An [Account](../../Entities/Account/Account.md) or [Identity](../../Entities/Identity/Identity.md) can fetch its pending Authorization Requests by calling [authorizations.getReceived](../../Entities/Common/Namespaces/Authorizations/Authorizations.md#getreceived).
  Also, an Account or Identity can directly fetch the details of an Authorization Request by calling [authorizations.getOne](../../Entities/Common/Namespaces/Authorizations/Authorizations.md#getone)

**`Note`**

this method is of type [ProcedureMethod](../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [rotatePrimaryKey.checkAuthorization](../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/client/Identities.ts:159](https://github.com/PolymeshAssociation/polymesh-sdk/blob/49a0066c3/src/api/client/Identities.ts#L159)

___

### rotatePrimaryKeyToSecondary

▸ **rotatePrimaryKeyToSecondary**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<[`AuthorizationRequest`](../../Entities/AuthorizationRequest/AuthorizationRequest.md), [`AuthorizationRequest`](../../Entities/AuthorizationRequest/AuthorizationRequest.md)\>\>

Creates an Authorization to rotate primary key of the signing Identity to an existing secondary key identified by the `targetAccount`

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`RotatePrimaryKeyToSecondaryParams`](../../../../modules/API/Procedures/Types/Types.md#rotateprimarykeytosecondaryparams) |
| `opts?` | [`ProcedureOpts`](../../../../interfaces/API/Procedures/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<[`AuthorizationRequest`](../../Entities/AuthorizationRequest/AuthorizationRequest.md), [`AuthorizationRequest`](../../Entities/AuthorizationRequest/AuthorizationRequest.md)\>\>

**`Note`**

the given `targetAccount` must be an existing secondaryKey or unlinked to any other Identity

**`Note`**

this creates an [Authorization Requests](../../Entities/AuthorizationRequest/AuthorizationRequest.md) which have to be accepted by the `targetAccount` along with the optional CDD authorization generated by CDD provider attesting the rotation of primary key
  An [Account](../../Entities/Account/Account.md) or [Identity](../../Entities/Identity/Identity.md) can fetch its pending Authorization Requests by calling [authorizations.getReceived](../../Entities/Common/Namespaces/Authorizations/Authorizations.md#getreceived).
  Also, an Account or Identity can directly fetch the details of an Authorization Request by calling [authorizations.getOne](../../Entities/Common/Namespaces/Authorizations/Authorizations.md#getone)

**`Throws`**

if the given `targetAccount` is linked with another Identity

**`Throws`**

if the given `targetAccount` is already the primary key of the signing Identity

**`Throws`**

if the given `targetAccount` already has a pending invitation to become the primary key of the signing Identity

**`Note`**

this method is of type [ProcedureMethod](../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [rotatePrimaryKeyToSecondary.checkAuthorization](../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/client/Identities.ts:177](https://github.com/PolymeshAssociation/polymesh-sdk/blob/49a0066c3/src/api/client/Identities.ts#L177)
