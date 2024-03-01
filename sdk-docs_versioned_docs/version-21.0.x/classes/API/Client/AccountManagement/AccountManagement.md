---
id: 'AccountManagement'
title: 'Class: AccountManagement'
sidebar_label: 'AccountManagement'
---

[api/client/AccountManagement](../../../../modules/API/Client/AccountManagement/AccountManagement.md).AccountManagement

Handles functionality related to Account Management

## Methods

### acceptPrimaryKey

▸ **acceptPrimaryKey**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

Accepts the authorization to become the new primary key of the issuing identity.

If a CDD service provider approved this change (or this is not required), primary key of the Identity is updated.

#### Parameters

| Name    | Type                                                                                                                                             |
| :------ | :----------------------------------------------------------------------------------------------------------------------------------------------- |
| `args`  | [`AcceptPrimaryKeyRotationParams`](../../../../interfaces/API/Procedures/Types/AcceptPrimaryKeyRotationParams/AcceptPrimaryKeyRotationParams.md) |
| `opts?` | [`ProcedureOpts`](../../../../interfaces/Types/ProcedureOpts/ProcedureOpts.md)                                                                   |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

**`Note`**

The caller (new primary key) must be either a secondary key of the issuing identity, or
unlinked to any identity.

**`Note`**

this method is of type [ProcedureMethod](../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [acceptPrimaryKey.checkAuthorization](../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/client/AccountManagement.ts:356](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/client/AccountManagement.ts#L356)

---

### createMultiSigAccount

▸ **createMultiSigAccount**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction) \<[`MultiSig`](../../Entities/Account/MultiSig/MultiSig.md), [`MultiSig`](../../Entities/Account/MultiSig/MultiSig.md)\>\>

Create a MultiSig Account

#### Parameters

| Name    | Type                                                                                                               |
| :------ | :----------------------------------------------------------------------------------------------------------------- |
| `args`  | [`CreateMultiSigParams`](../../../../interfaces/API/Procedures/Types/CreateMultiSigParams/CreateMultiSigParams.md) |
| `opts?` | [`ProcedureOpts`](../../../../interfaces/Types/ProcedureOpts/ProcedureOpts.md)                                     |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction) \<[`MultiSig`](../../Entities/Account/MultiSig/MultiSig.md), [`MultiSig`](../../Entities/Account/MultiSig/MultiSig.md)\>\>

**`Note`**

this will create an [Authorization Request](../../Entities/AuthorizationRequest/AuthorizationRequest.md) for each signing Account which will have to be accepted before they can approve transactions. None of the signing Accounts can be associated with an Identity when accepting the Authorization
An [Account](../../Entities/Account/Account.md) or [Identity](../../Entities/Identity/Identity.md) can fetch its pending Authorization Requests by calling [authorizations.getReceived](../../Entities/Common/Namespaces/Authorizations/Authorizations.md#getreceived).
Also, an Account or Identity can directly fetch the details of an Authorization Request by calling [authorizations.getOne](../../Entities/Common/Namespaces/Authorizations/Authorizations.md#getone)

**`Note`**

this method is of type [ProcedureMethod](../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [createMultiSigAccount.checkAuthorization](../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/client/AccountManagement.ts:219](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/client/AccountManagement.ts#L219)

---

### freezeSecondaryAccounts

▸ **freezeSecondaryAccounts**(`opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

Freeze all of the secondary Accounts in the signing Identity. This means revoking their permission to perform any operation on the blockchain and freezing their funds until the Accounts are unfrozen via [unfreezeSecondaryAccounts](AccountManagement.md#unfreezesecondaryaccounts)

#### Parameters

| Name    | Type                                                                           |
| :------ | :----------------------------------------------------------------------------- |
| `opts?` | [`ProcedureOpts`](../../../../interfaces/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

**`Note`**

this method is of type [NoArgsProcedureMethod](../../../../interfaces/Types/NoArgsProcedureMethod/NoArgsProcedureMethod.md), which means you can call [freezeSecondaryAccounts.checkAuthorization](../../../../interfaces/Types/NoArgsProcedureMethod/NoArgsProcedureMethod.md#checkauthorization)
on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/client/AccountManagement.ts:181](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/client/AccountManagement.ts#L181)

---

### getAccount

▸ **getAccount**(`args`): `Promise`\<[`Account`](../../Entities/Account/Account.md) \| [`MultiSig`](../../Entities/Account/MultiSig/MultiSig.md)\>

Return an Account instance from an address. If the Account has multiSig signers, the returned value will be a api/entities/MultiSig!MultiSig instance

#### Parameters

| Name           | Type     |
| :------------- | :------- |
| `args`         | `Object` |
| `args.address` | `string` |

#### Returns

`Promise`\<[`Account`](../../Entities/Account/Account.md) \| [`MultiSig`](../../Entities/Account/MultiSig/MultiSig.md)\>

#### Defined in

[api/client/AccountManagement.ts:276](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/client/AccountManagement.ts#L276)

---

### getAccountBalance

▸ **getAccountBalance**(`args?`): `Promise`\<[`Balance`](../../../../interfaces/Types/Balance/Balance.md)\>

Get the free/locked POLYX balance of an Account

#### Parameters

| Name           | Type                                                       | Description                     |
| :------------- | :--------------------------------------------------------- | :------------------------------ |
| `args?`        | `Object`                                                   | -                               |
| `args.account` | `string` \| [`Account`](../../Entities/Account/Account.md) | defaults to the signing Account |

#### Returns

`Promise`\<[`Balance`](../../../../interfaces/Types/Balance/Balance.md)\>

**`Note`**

can be subscribed to

#### Defined in

[api/client/AccountManagement.ts:230](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/client/AccountManagement.ts#L230)

▸ **getAccountBalance**(`callback`): `Promise`\<[`UnsubCallback`](../../../../modules/Types/Types.md#unsubcallback)\>

#### Parameters

| Name       | Type                                                                                                                             |
| :--------- | :------------------------------------------------------------------------------------------------------------------------------- |
| `callback` | [`SubCallback`](../../../../modules/Types/Types.md#subcallback) \<[`Balance`](../../../../interfaces/Types/Balance/Balance.md)\> |

#### Returns

`Promise`\<[`UnsubCallback`](../../../../modules/Types/Types.md#unsubcallback)\>

#### Defined in

[api/client/AccountManagement.ts:231](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/client/AccountManagement.ts#L231)

▸ **getAccountBalance**(`args`, `callback`): `Promise`\<[`UnsubCallback`](../../../../modules/Types/Types.md#unsubcallback)\>

#### Parameters

| Name           | Type                                                                                                                             |
| :------------- | :------------------------------------------------------------------------------------------------------------------------------- |
| `args`         | `Object`                                                                                                                         |
| `args.account` | `string` \| [`Account`](../../Entities/Account/Account.md)                                                                       |
| `callback`     | [`SubCallback`](../../../../modules/Types/Types.md#subcallback) \<[`Balance`](../../../../interfaces/Types/Balance/Balance.md)\> |

#### Returns

`Promise`\<[`UnsubCallback`](../../../../modules/Types/Types.md#unsubcallback)\>

#### Defined in

[api/client/AccountManagement.ts:232](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/client/AccountManagement.ts#L232)

---

### getSigningAccount

▸ **getSigningAccount**(): `null` \| [`Account`](../../Entities/Account/Account.md)

Return the signing Account, or null if no signing Account has been set

#### Returns

`null` \| [`Account`](../../Entities/Account/Account.md)

#### Defined in

[api/client/AccountManagement.ts:298](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/client/AccountManagement.ts#L298)

---

### getSigningAccounts

▸ **getSigningAccounts**(): `Promise`\<[`Account`](../../Entities/Account/Account.md)[]\>

Return a list that contains all the signing Accounts associated to the SDK instance's Signing Manager

#### Returns

`Promise`\<[`Account`](../../Entities/Account/Account.md)[]\>

**`Throws`**

— if there is no Signing Manager attached to the SDK

#### Defined in

[api/client/AccountManagement.ts:311](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/client/AccountManagement.ts#L311)

---

### getSubsidy

▸ **getSubsidy**(`args`): [`Subsidy`](../../Entities/Subsidy/Subsidy.md)

Return an Subsidy instance for a pair of beneficiary and subsidizer Account

#### Parameters

| Name               | Type                                                       |
| :----------------- | :--------------------------------------------------------- |
| `args`             | `Object`                                                   |
| `args.beneficiary` | `string` \| [`Account`](../../Entities/Account/Account.md) |
| `args.subsidizer`  | `string` \| [`Account`](../../Entities/Account/Account.md) |

#### Returns

[`Subsidy`](../../Entities/Subsidy/Subsidy.md)

#### Defined in

[api/client/AccountManagement.ts:318](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/client/AccountManagement.ts#L318)

---

### inviteAccount

▸ **inviteAccount**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction) \<[`AuthorizationRequest`](../../Entities/AuthorizationRequest/AuthorizationRequest.md), [`AuthorizationRequest`](../../Entities/AuthorizationRequest/AuthorizationRequest.md)\>\>

Send an invitation to an Account to join the signing Identity as a secondary Account

#### Parameters

| Name    | Type                                                                                                            |
| :------ | :-------------------------------------------------------------------------------------------------------------- |
| `args`  | [`InviteAccountParams`](../../../../interfaces/API/Procedures/Types/InviteAccountParams/InviteAccountParams.md) |
| `opts?` | [`ProcedureOpts`](../../../../interfaces/Types/ProcedureOpts/ProcedureOpts.md)                                  |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction) \<[`AuthorizationRequest`](../../Entities/AuthorizationRequest/AuthorizationRequest.md), [`AuthorizationRequest`](../../Entities/AuthorizationRequest/AuthorizationRequest.md)\>\>

**`Note`**

this will create an [Authorization Request](../../Entities/AuthorizationRequest/AuthorizationRequest.md) which has to be accepted by the `targetAccount`.
An [Account](../../Entities/Account/Account.md) or [Identity](../../Entities/Identity/Identity.md) can fetch its pending Authorization Requests by calling [authorizations.getReceived](../../Entities/Common/Namespaces/Authorizations/Authorizations.md#getreceived).
Also, an Account or Identity can directly fetch the details of an Authorization Request by calling [authorizations.getOne](../../Entities/Common/Namespaces/Authorizations/Authorizations.md#getone)

**`Note`**

this method is of type [ProcedureMethod](../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [inviteAccount.checkAuthorization](../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/client/AccountManagement.ts:171](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/client/AccountManagement.ts#L171)

---

### isValidAddress

▸ **isValidAddress**(`args`): `boolean`

Returns `true`

#### Parameters

| Name           | Type     | Description                                       |
| :------------- | :------- | :------------------------------------------------ |
| `args`         | `Object` | -                                                 |
| `args.address` | `string` | is a valid ss58 address for the connected network |

#### Returns

`boolean`

#### Defined in

[api/client/AccountManagement.ts:335](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/client/AccountManagement.ts#L335)

---

### leaveIdentity

▸ **leaveIdentity**(`opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

Disassociate the signing Account from its Identity. This operation can only be done if the signing Account is a secondary Account

#### Parameters

| Name    | Type                                                                           |
| :------ | :----------------------------------------------------------------------------- |
| `opts?` | [`ProcedureOpts`](../../../../interfaces/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

**`Note`**

this method is of type [NoArgsProcedureMethod](../../../../interfaces/Types/NoArgsProcedureMethod/NoArgsProcedureMethod.md), which means you can call [leaveIdentity.checkAuthorization](../../../../interfaces/Types/NoArgsProcedureMethod/NoArgsProcedureMethod.md#checkauthorization)
on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/client/AccountManagement.ts:123](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/client/AccountManagement.ts#L123)

---

### modifyPermissions

▸ **modifyPermissions**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

Modify all permissions of a list of secondary Accounts associated with the signing Identity

#### Parameters

| Name    | Type                                                                                                                                          |
| :------ | :-------------------------------------------------------------------------------------------------------------------------------------------- |
| `args`  | [`ModifySignerPermissionsParams`](../../../../interfaces/API/Procedures/Types/ModifySignerPermissionsParams/ModifySignerPermissionsParams.md) |
| `opts?` | [`ProcedureOpts`](../../../../interfaces/Types/ProcedureOpts/ProcedureOpts.md)                                                                |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

**`Throws`**

if the signing Account is not the primary Account of the Identity whose secondary Account permissions are being modified

**`Note`**

this method is of type [ProcedureMethod](../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [modifyPermissions.checkAuthorization](../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/client/AccountManagement.ts:157](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/client/AccountManagement.ts#L157)

---

### removeSecondaryAccounts

▸ **removeSecondaryAccounts**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

Remove a list of secondary Accounts associated with the signing Identity

#### Parameters

| Name    | Type                                                                                                                                          |
| :------ | :-------------------------------------------------------------------------------------------------------------------------------------------- |
| `args`  | [`RemoveSecondaryAccountsParams`](../../../../interfaces/API/Procedures/Types/RemoveSecondaryAccountsParams/RemoveSecondaryAccountsParams.md) |
| `opts?` | [`ProcedureOpts`](../../../../interfaces/Types/ProcedureOpts/ProcedureOpts.md)                                                                |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

**`Note`**

this method is of type [ProcedureMethod](../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [removeSecondaryAccounts.checkAuthorization](../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/client/AccountManagement.ts:133](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/client/AccountManagement.ts#L133)

---

### revokePermissions

▸ **revokePermissions**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

Revoke all permissions of a list of secondary Accounts associated with the signing Identity

#### Parameters

| Name                     | Type                                                                           |
| :----------------------- | :----------------------------------------------------------------------------- |
| `args`                   | `Object`                                                                       |
| `args.secondaryAccounts` | (`string` \| [`Account`](../../Entities/Account/Account.md))[]                 |
| `opts?`                  | [`ProcedureOpts`](../../../../interfaces/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

**`Throws`**

if the signing Account is not the primary Account of the Identity whose secondary Account permissions are being revoked

**`Note`**

this method is of type [ProcedureMethod](../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [revokePermissions.checkAuthorization](../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/client/AccountManagement.ts:145](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/client/AccountManagement.ts#L145)

---

### subsidizeAccount

▸ **subsidizeAccount**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction) \<[`AuthorizationRequest`](../../Entities/AuthorizationRequest/AuthorizationRequest.md), [`AuthorizationRequest`](../../Entities/AuthorizationRequest/AuthorizationRequest.md)\>\>

Send an Authorization Request to an Account to subsidize its transaction fees

#### Parameters

| Name    | Type                                                                                                                     |
| :------ | :----------------------------------------------------------------------------------------------------------------------- |
| `args`  | [`SubsidizeAccountParams`](../../../../interfaces/API/Procedures/Types/SubsidizeAccountParams/SubsidizeAccountParams.md) |
| `opts?` | [`ProcedureOpts`](../../../../interfaces/Types/ProcedureOpts/ProcedureOpts.md)                                           |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction) \<[`AuthorizationRequest`](../../Entities/AuthorizationRequest/AuthorizationRequest.md), [`AuthorizationRequest`](../../Entities/AuthorizationRequest/AuthorizationRequest.md)\>\>

**`Note`**

this will create an [Authorization Request](../../Entities/AuthorizationRequest/AuthorizationRequest.md) which has to be accepted by the `beneficiary` Account.
An [Account](../../Entities/Account/Account.md) or [Identity](../../Entities/Identity/Identity.md) can fetch its pending Authorization Requests by calling [authorizations.getReceived](../../Entities/Common/Namespaces/Authorizations/Authorizations.md#getreceived).
Also, an Account or Identity can directly fetch the details of an Authorization Request by calling [authorizations.getOne](../../Entities/Common/Namespaces/Authorizations/Authorizations.md#getone)

**`Note`**

this method is of type [ProcedureMethod](../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [subsidizeAccount.checkAuthorization](../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/client/AccountManagement.ts:205](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/client/AccountManagement.ts#L205)

---

### unfreezeSecondaryAccounts

▸ **unfreezeSecondaryAccounts**(`opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

Unfreeze all of the secondary Accounts in the signing Identity. This will restore their permissions as they were before being frozen

#### Parameters

| Name    | Type                                                                           |
| :------ | :----------------------------------------------------------------------------- |
| `opts?` | [`ProcedureOpts`](../../../../interfaces/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

**`Note`**

this method is of type [NoArgsProcedureMethod](../../../../interfaces/Types/NoArgsProcedureMethod/NoArgsProcedureMethod.md), which means you can call [unfreezeSecondaryAccounts.checkAuthorization](../../../../interfaces/Types/NoArgsProcedureMethod/NoArgsProcedureMethod.md#checkauthorization)
on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/client/AccountManagement.ts:191](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/client/AccountManagement.ts#L191)
