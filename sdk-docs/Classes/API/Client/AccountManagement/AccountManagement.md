[api/client/AccountManagement](../../../../Modules/API/Client/AccountManagement.md).AccountManagement

Handles functionality related to Account Management

## Methods

### createMultiSigAccount

▸ **createMultiSigAccount**(`args`, `opts?`): `Promise`<[`GenericPolymeshTransaction`](../../../../Modules/Types/Types.md#genericpolymeshtransaction)<[`MultiSig`](../../Entities/MultiSig/MultiSig.md), [`MultiSig`](../../Entities/MultiSig/MultiSig.md)\>\>

Create a MultiSig Account

**`Note`**

this will create an [Authorization Request](../../Entities/AuthorizationRequest/AuthorizationRequest.md) for each signing Account which will have to be accepted before they can approve transactions. None of the signing Accounts can be associated with an Identity when accepting the Authorization
  An [Account](../../Entities/Account/Account.md) or [Identity](../../Entities/Identity/Identity.md) can fetch its pending Authorization Requests by calling [authorizations.getReceived](../../Entities/Common/Namespaces/Authorizations/Authorizations.md#getreceived).
  Also, an Account or Identity can directly fetch the details of an Authorization Request by calling [authorizations.getOne](../../Entities/Common/Namespaces/Authorizations/Authorizations.md#getone)

**`Note`**

this method is of type [ProcedureMethod](../../../../Interfaces/Types/ProcedureMethod.md), which means you can call [createMultiSigAccount.checkAuthorization](../../../../Interfaces/Types/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`CreateMultiSigParams`](../../../../Interfaces/API/Procedures/Types/CreateMultiSigParams.md) |
| `opts?` | [`ProcedureOpts`](../../../../Interfaces/Types/ProcedureOpts.md) |

#### Returns

`Promise`<[`GenericPolymeshTransaction`](../../../../Modules/Types/Types.md#genericpolymeshtransaction)<[`MultiSig`](../../Entities/MultiSig/MultiSig.md), [`MultiSig`](../../Entities/MultiSig/MultiSig.md)\>\>

___

### freezeSecondaryAccounts

▸ **freezeSecondaryAccounts**(`opts?`): `Promise`<[`GenericPolymeshTransaction`](../../../../Modules/Types/Types.md#genericpolymeshtransaction)<`void`, `void`\>\>

Freeze all of the secondary Accounts in the signing Identity. This means revoking their permission to perform any operation on the blockchain and freezing their funds until the Accounts are unfrozen via [unfreezeSecondaryAccounts](AccountManagement.md#unfreezesecondaryaccounts)

**`Note`**

this method is of type [NoArgsProcedureMethod](../../../../Interfaces/Types/NoArgsProcedureMethod.md), which means you can call [freezeSecondaryAccounts.checkAuthorization](../../../../Interfaces/Types/NoArgsProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`ProcedureOpts`](../../../../Interfaces/Types/ProcedureOpts.md) |

#### Returns

`Promise`<[`GenericPolymeshTransaction`](../../../../Modules/Types/Types.md#genericpolymeshtransaction)<`void`, `void`\>\>

___

### getAccount

▸ **getAccount**(`args`): `Promise`<[`Account`](../../Entities/Account/Account.md) \| [`MultiSig`](../../Entities/MultiSig/MultiSig.md)\>

Return an Account instance from an address. If the Account has multiSig signers, the returned value will be a [MultiSig](../../Entities/MultiSig/MultiSig.md) instance

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.address` | `string` |

#### Returns

`Promise`<[`Account`](../../Entities/Account/Account.md) \| [`MultiSig`](../../Entities/MultiSig/MultiSig.md)\>

___

### getAccountBalance

▸ **getAccountBalance**(`args?`): `Promise`<[`Balance`](../../../../Interfaces/Types/Balance.md)\>

Get the free/locked POLYX balance of an Account

**`Note`**

can be subscribed to

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args?` | `Object` | - |
| `args.account` | `string` \| [`Account`](../../Entities/Account/Account.md) | defaults to the signing Account |

#### Returns

`Promise`<[`Balance`](../../../../Interfaces/Types/Balance.md)\>

▸ **getAccountBalance**(`callback`): `Promise`<[`UnsubCallback`](../../../../Modules/Types/Types.md#unsubcallback)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`SubCallback`](../../../../Modules/Types/Types.md#subcallback)<[`Balance`](../../../../Interfaces/Types/Balance.md)\> |

#### Returns

`Promise`<[`UnsubCallback`](../../../../Modules/Types/Types.md#unsubcallback)\>

▸ **getAccountBalance**(`args`, `callback`): `Promise`<[`UnsubCallback`](../../../../Modules/Types/Types.md#unsubcallback)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.account` | `string` \| [`Account`](../../Entities/Account/Account.md) |
| `callback` | [`SubCallback`](../../../../Modules/Types/Types.md#subcallback)<[`Balance`](../../../../Interfaces/Types/Balance.md)\> |

#### Returns

`Promise`<[`UnsubCallback`](../../../../Modules/Types/Types.md#unsubcallback)\>

___

### getSigningAccount

▸ **getSigningAccount**(): ``null`` \| [`Account`](../../Entities/Account/Account.md)

Return the signing Account, or null if no signing Account has been set

#### Returns

``null`` \| [`Account`](../../Entities/Account/Account.md)

___

### getSigningAccounts

▸ **getSigningAccounts**(): `Promise`<[`Account`](../../Entities/Account/Account.md)[]\>

Return a list that contains all the signing Accounts associated to the SDK instance's Signing Manager

**`Throws`**

— if there is no Signing Manager attached to the SDK

#### Returns

`Promise`<[`Account`](../../Entities/Account/Account.md)[]\>

___

### getSubsidy

▸ **getSubsidy**(`args`): [`Subsidy`](../../Entities/Subsidy/Subsidy.md)

Return an Subsidy instance for a pair of beneficiary and subsidizer Account

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.beneficiary` | `string` \| [`Account`](../../Entities/Account/Account.md) |
| `args.subsidizer` | `string` \| [`Account`](../../Entities/Account/Account.md) |

#### Returns

[`Subsidy`](../../Entities/Subsidy/Subsidy.md)

___

### inviteAccount

▸ **inviteAccount**(`args`, `opts?`): `Promise`<[`GenericPolymeshTransaction`](../../../../Modules/Types/Types.md#genericpolymeshtransaction)<[`AuthorizationRequest`](../../Entities/AuthorizationRequest/AuthorizationRequest.md), [`AuthorizationRequest`](../../Entities/AuthorizationRequest/AuthorizationRequest.md)\>\>

Send an invitation to an Account to join the signing Identity as a secondary Account

**`Note`**

this will create an [Authorization Request](../../Entities/AuthorizationRequest/AuthorizationRequest.md) which has to be accepted by the `targetAccount`.
  An [Account](../../Entities/Account/Account.md) or [Identity](../../Entities/Identity/Identity.md) can fetch its pending Authorization Requests by calling [authorizations.getReceived](../../Entities/Common/Namespaces/Authorizations/Authorizations.md#getreceived).
  Also, an Account or Identity can directly fetch the details of an Authorization Request by calling [authorizations.getOne](../../Entities/Common/Namespaces/Authorizations/Authorizations.md#getone)

**`Note`**

this method is of type [ProcedureMethod](../../../../Interfaces/Types/ProcedureMethod.md), which means you can call [inviteAccount.checkAuthorization](../../../../Interfaces/Types/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`InviteAccountParams`](../../../../Interfaces/API/Procedures/Types/InviteAccountParams.md) |
| `opts?` | [`ProcedureOpts`](../../../../Interfaces/Types/ProcedureOpts.md) |

#### Returns

`Promise`<[`GenericPolymeshTransaction`](../../../../Modules/Types/Types.md#genericpolymeshtransaction)<[`AuthorizationRequest`](../../Entities/AuthorizationRequest/AuthorizationRequest.md), [`AuthorizationRequest`](../../Entities/AuthorizationRequest/AuthorizationRequest.md)\>\>

___

### leaveIdentity

▸ **leaveIdentity**(`opts?`): `Promise`<[`GenericPolymeshTransaction`](../../../../Modules/Types/Types.md#genericpolymeshtransaction)<`void`, `void`\>\>

Disassociate the signing Account from its Identity. This operation can only be done if the signing Account is a secondary Account

**`Note`**

this method is of type [NoArgsProcedureMethod](../../../../Interfaces/Types/NoArgsProcedureMethod.md), which means you can call [leaveIdentity.checkAuthorization](../../../../Interfaces/Types/NoArgsProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`ProcedureOpts`](../../../../Interfaces/Types/ProcedureOpts.md) |

#### Returns

`Promise`<[`GenericPolymeshTransaction`](../../../../Modules/Types/Types.md#genericpolymeshtransaction)<`void`, `void`\>\>

___

### modifyPermissions

▸ **modifyPermissions**(`args`, `opts?`): `Promise`<[`GenericPolymeshTransaction`](../../../../Modules/Types/Types.md#genericpolymeshtransaction)<`void`, `void`\>\>

Modify all permissions of a list of secondary Accounts associated with the signing Identity

**`Throws`**

if the signing Account is not the primary Account of the Identity whose secondary Account permissions are being modified

**`Note`**

this method is of type [ProcedureMethod](../../../../Interfaces/Types/ProcedureMethod.md), which means you can call [modifyPermissions.checkAuthorization](../../../../Interfaces/Types/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`ModifySignerPermissionsParams`](../../../../Interfaces/API/Procedures/Types/ModifySignerPermissionsParams.md) |
| `opts?` | [`ProcedureOpts`](../../../../Interfaces/Types/ProcedureOpts.md) |

#### Returns

`Promise`<[`GenericPolymeshTransaction`](../../../../Modules/Types/Types.md#genericpolymeshtransaction)<`void`, `void`\>\>

___

### removeSecondaryAccounts

▸ **removeSecondaryAccounts**(`args`, `opts?`): `Promise`<[`GenericPolymeshTransaction`](../../../../Modules/Types/Types.md#genericpolymeshtransaction)<`void`, `void`\>\>

Remove a list of secondary Accounts associated with the signing Identity

**`Note`**

this method is of type [ProcedureMethod](../../../../Interfaces/Types/ProcedureMethod.md), which means you can call [removeSecondaryAccounts.checkAuthorization](../../../../Interfaces/Types/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`RemoveSecondaryAccountsParams`](../../../../Interfaces/API/Procedures/Types/RemoveSecondaryAccountsParams.md) |
| `opts?` | [`ProcedureOpts`](../../../../Interfaces/Types/ProcedureOpts.md) |

#### Returns

`Promise`<[`GenericPolymeshTransaction`](../../../../Modules/Types/Types.md#genericpolymeshtransaction)<`void`, `void`\>\>

___

### revokePermissions

▸ **revokePermissions**(`args`, `opts?`): `Promise`<[`GenericPolymeshTransaction`](../../../../Modules/Types/Types.md#genericpolymeshtransaction)<`void`, `void`\>\>

Revoke all permissions of a list of secondary Accounts associated with the signing Identity

**`Throws`**

if the signing Account is not the primary Account of the Identity whose secondary Account permissions are being revoked

**`Note`**

this method is of type [ProcedureMethod](../../../../Interfaces/Types/ProcedureMethod.md), which means you can call [revokePermissions.checkAuthorization](../../../../Interfaces/Types/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.secondaryAccounts` | (`string` \| [`Account`](../../Entities/Account/Account.md))[] |
| `opts?` | [`ProcedureOpts`](../../../../Interfaces/Types/ProcedureOpts.md) |

#### Returns

`Promise`<[`GenericPolymeshTransaction`](../../../../Modules/Types/Types.md#genericpolymeshtransaction)<`void`, `void`\>\>

___

### subsidizeAccount

▸ **subsidizeAccount**(`args`, `opts?`): `Promise`<[`GenericPolymeshTransaction`](../../../../Modules/Types/Types.md#genericpolymeshtransaction)<[`AuthorizationRequest`](../../Entities/AuthorizationRequest/AuthorizationRequest.md), [`AuthorizationRequest`](../../Entities/AuthorizationRequest/AuthorizationRequest.md)\>\>

Send an Authorization Request to an Account to subsidize its transaction fees

**`Note`**

this will create an [Authorization Request](../../Entities/AuthorizationRequest/AuthorizationRequest.md) which has to be accepted by the `beneficiary` Account.
  An [Account](../../Entities/Account/Account.md) or [Identity](../../Entities/Identity/Identity.md) can fetch its pending Authorization Requests by calling [authorizations.getReceived](../../Entities/Common/Namespaces/Authorizations/Authorizations.md#getreceived).
  Also, an Account or Identity can directly fetch the details of an Authorization Request by calling [authorizations.getOne](../../Entities/Common/Namespaces/Authorizations/Authorizations.md#getone)

**`Note`**

this method is of type [ProcedureMethod](../../../../Interfaces/Types/ProcedureMethod.md), which means you can call [subsidizeAccount.checkAuthorization](../../../../Interfaces/Types/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`SubsidizeAccountParams`](../../../../Interfaces/API/Procedures/Types/SubsidizeAccountParams.md) |
| `opts?` | [`ProcedureOpts`](../../../../Interfaces/Types/ProcedureOpts.md) |

#### Returns

`Promise`<[`GenericPolymeshTransaction`](../../../../Modules/Types/Types.md#genericpolymeshtransaction)<[`AuthorizationRequest`](../../Entities/AuthorizationRequest/AuthorizationRequest.md), [`AuthorizationRequest`](../../Entities/AuthorizationRequest/AuthorizationRequest.md)\>\>

___

### unfreezeSecondaryAccounts

▸ **unfreezeSecondaryAccounts**(`opts?`): `Promise`<[`GenericPolymeshTransaction`](../../../../Modules/Types/Types.md#genericpolymeshtransaction)<`void`, `void`\>\>

Unfreeze all of the secondary Accounts in the signing Identity. This will restore their permissions as they were before being frozen

**`Note`**

this method is of type [NoArgsProcedureMethod](../../../../Interfaces/Types/NoArgsProcedureMethod.md), which means you can call [unfreezeSecondaryAccounts.checkAuthorization](../../../../Interfaces/Types/NoArgsProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`ProcedureOpts`](../../../../Interfaces/Types/ProcedureOpts.md) |

#### Returns

`Promise`<[`GenericPolymeshTransaction`](../../../../Modules/Types/Types.md#genericpolymeshtransaction)<`void`, `void`\>\>
