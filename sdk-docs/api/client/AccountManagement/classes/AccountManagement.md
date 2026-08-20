# Class: AccountManagement

> Defined in: [src/api/client/AccountManagement.ts:52](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/client/AccountManagement.ts#L52)

# Class: AccountManagement

Defined in: [src/api/client/AccountManagement.ts:52](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/client/AccountManagement.ts#L52)

Handles functionality related to Account Management

## Methods

### acceptPrimaryKey()

> **acceptPrimaryKey**(`args`: [`AcceptPrimaryKeyRotationParams`](../../../procedures/types/interfaces/AcceptPrimaryKeyRotationParams.mdx), `opts?`: [`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)): `Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

Defined in: [src/api/client/AccountManagement.ts:364](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/client/AccountManagement.ts#L364)

Accepts the authorization to become the new primary key of the issuing identity.

If a CDD service provider approved this change (or this is not required), primary key of the Identity is updated.

#### Parameters

Parameter
Type

`args`

[`AcceptPrimaryKeyRotationParams`](../../../procedures/types/interfaces/AcceptPrimaryKeyRotationParams.mdx)

`opts?`

[`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

#### Note

The caller (new primary key) must be either a secondary key of the issuing identity, or
unlinked to any identity.

#### Note

this method is of type [ProcedureMethod](../../../procedures/types/interfaces/ProcedureMethod.mdx), which means you can call [acceptPrimaryKey.checkAuthorization](../../../procedures/types/interfaces/ProcedureMethod.mdx#checkauthorization) on it to see whether the signing Account and Identity have the required roles and permissions to run it

***

### acceptSubsidy()

> **acceptSubsidy**(`args`: [`AcceptSubsidyParams`](../../../procedures/types/interfaces/AcceptSubsidyParams.mdx), `opts?`: [`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)): `Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

Defined in: [src/api/client/AccountManagement.ts:212](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/client/AccountManagement.ts#L212)

Accepts a pending subsidy request from subsidizer

#### Parameters

Parameter
Type

`args`

[`AcceptSubsidyParams`](../../../procedures/types/interfaces/AcceptSubsidyParams.mdx)

`opts?`

[`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

#### Note

Only the beneficiary can accept an already approved subsidy request. Pending subsidies for a beneficiary can be fetched by calling [subsidies.getPendingSubsidies](../../../entities/Subsidies/classes/Subsidies.mdx#getpendingsubsidies).

#### Note

this method is of type [ProcedureMethod](../../../procedures/types/interfaces/ProcedureMethod.mdx), which means you can call [acceptSubsidy.checkAuthorization](../../../procedures/types/interfaces/ProcedureMethod.mdx#checkauthorization) on it to see whether the signing Account and Identity have the required roles and permissions to run it

***

### addSecondaryAccounts()

> **addSecondaryAccounts**(`args`: [`AddSecondaryAccountsParams`](../../../procedures/types/interfaces/AddSecondaryAccountsParams.mdx), `opts?`: [`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)): `Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<[`Identity`](../../../entities/Identity/classes/Identity.mdx), [`Identity`](../../../entities/Identity/classes/Identity.mdx)\>\>

Defined in: [src/api/client/AccountManagement.ts:161](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/client/AccountManagement.ts#L161)

Adds a list of secondary Accounts to the signing Identity

#### Parameters

Parameter
Type

`args`

[`AddSecondaryAccountsParams`](../../../procedures/types/interfaces/AddSecondaryAccountsParams.mdx)

`opts?`

[`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<[`Identity`](../../../entities/Identity/classes/Identity.mdx), [`Identity`](../../../entities/Identity/classes/Identity.mdx)\>\>

#### Throws

if the signing Account is not the primary Account of the Identity

#### Note

this method is of type [ProcedureMethod](../../../procedures/types/interfaces/ProcedureMethod.mdx), which means you can call [addSecondaryAccounts.checkAuthorization](../../../procedures/types/interfaces/ProcedureMethod.mdx#checkauthorization) on it to see whether the signing Account and Identity have the required roles and permissions to run it

***

### approveSubsidy()

> **approveSubsidy**(`args`: [`SubsidizeAccountParams`](../../../procedures/types/interfaces/SubsidizeAccountParams.mdx), `opts?`: [`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)): `Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

Defined in: [src/api/client/AccountManagement.ts:205](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/client/AccountManagement.ts#L205)

Approves a subsidy request

This is to be called in by the paying key to approve allowance with respect to a beneficiary key.

#### Parameters

Parameter
Type

`args`

[`SubsidizeAccountParams`](../../../procedures/types/interfaces/SubsidizeAccountParams.mdx)

`opts?`

[`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

#### Note

this will create a pending subsidies entry, which has to be accepted by the `beneficiary` Account. Pending subsidies for a beneficiary can be fetched by calling [subsidies.getPendingSubsidies](../../../entities/Subsidies/classes/Subsidies.mdx#getpendingsubsidies).

#### Throws

if same allowance amount is pending for acceptance with respect to same beneficiary

#### Note

this method is of type [ProcedureMethod](../../../procedures/types/interfaces/ProcedureMethod.mdx), which means you can call [approveSubsidy.checkAuthorization](../../../procedures/types/interfaces/ProcedureMethod.mdx#checkauthorization) on it to see whether the signing Account and Identity have the required roles and permissions to run it

***

### createMultiSigAccount()

> **createMultiSigAccount**(`args`: [`CreateMultiSigParams`](../../../procedures/types/interfaces/CreateMultiSigParams.mdx), `opts?`: [`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)): `Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<[`MultiSig`](../../../entities/Account/MultiSig/classes/MultiSig.mdx), [`MultiSig`](../../../entities/Account/MultiSig/classes/MultiSig.mdx)\>\>

Defined in: [src/api/client/AccountManagement.ts:228](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/client/AccountManagement.ts#L228)

Create a MultiSig Account

#### Parameters

Parameter
Type

`args`

[`CreateMultiSigParams`](../../../procedures/types/interfaces/CreateMultiSigParams.mdx)

`opts?`

[`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<[`MultiSig`](../../../entities/Account/MultiSig/classes/MultiSig.mdx), [`MultiSig`](../../../entities/Account/MultiSig/classes/MultiSig.mdx)\>\>

#### Note

this will create an [Authorization Request](../../../entities/AuthorizationRequest/classes/AuthorizationRequest.mdx) for each signing Account which will have to be accepted before they can approve transactions. None of the signing Accounts can be associated with an Identity when accepting the Authorization
  An [Account](../../../entities/Account/classes/Account.mdx) or [Identity](../../../entities/types/type-aliases/Identity.mdx) can fetch its pending Authorization Requests by calling [authorizations.getReceived](../../../entities/common/namespaces/Authorizations/classes/Authorizations.mdx#getreceived).
  Also, an Account or Identity can directly fetch the details of an Authorization Request by calling [authorizations.getOne](../../../entities/common/namespaces/Authorizations/classes/Authorizations.mdx#getone)

#### Note

this method is of type [ProcedureMethod](../../../procedures/types/interfaces/ProcedureMethod.mdx), which means you can call [createMultiSigAccount.checkAuthorization](../../../procedures/types/interfaces/ProcedureMethod.mdx#checkauthorization) on it to see whether the signing Account and Identity have the required roles and permissions to run it

***

### freezeSecondaryAccounts()

> **freezeSecondaryAccounts**(`opts?`: [`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)): `Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

Defined in: [src/api/client/AccountManagement.ts:189](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/client/AccountManagement.ts#L189)

Freeze all of the secondary Accounts in the signing Identity. This means revoking their permission to perform any operation on the blockchain and freezing their funds until the Accounts are unfrozen via [unfreezeSecondaryAccounts](#unfreezesecondaryaccounts)

#### Parameters

Parameter
Type

`opts?`

[`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

#### Note

this method is of type [NoArgsProcedureMethod](../../../procedures/types/interfaces/NoArgsProcedureMethod.mdx), which means you can call [freezeSecondaryAccounts.checkAuthorization](../../../procedures/types/interfaces/NoArgsProcedureMethod.mdx#checkauthorization) on it to see whether the signing Account and Identity have the required roles and permissions to run it

***

### generateOffChainAuthSignature()

> **generateOffChainAuthSignature**(`args`: `object`): `Promise`\<`` `0x${string}` ``\>

Defined in: [src/api/client/AccountManagement.ts:373](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/client/AccountManagement.ts#L373)

Generate an offchain authorization signature with a specified signer

#### Parameters

Parameter
Type
Description

`args`

\{ `expiry`: `Date`; `signer`: `string` \| [`Account`](../../../entities/Account/classes/Account.mdx); `target`: `string` \| [`Identity`](../../../entities/Identity/classes/Identity.mdx); \}

&hyphen;

`args.expiry`

`Date`

date after which the authorization expires

`args.signer`

`string` \| [`Account`](../../../entities/Account/classes/Account.mdx)

Signer to be used to generate the off chain auth signature

`args.target`

`string` \| [`Identity`](../../../entities/Identity/classes/Identity.mdx)

DID of the identity to which signer is targeting the authorization

#### Returns

`Promise`\<`` `0x${string}` ``\>

***

### getAccount()

> **getAccount**(`args`: `object`): `Promise`\<[`Account`](../../../entities/Account/classes/Account.mdx) \| [`MultiSig`](../../../entities/Account/MultiSig/classes/MultiSig.mdx)\>

Defined in: [src/api/client/AccountManagement.ts:302](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/client/AccountManagement.ts#L302)

Return an Account instance from an address. If the Account has multiSig signers, the returned value will be a [MultiSig](../../../entities/Account/MultiSig/classes/MultiSig.mdx) instance

#### Parameters

Parameter
Type

`args`

\{ `address`: `string`; \}

`args.address`

`string`

#### Returns

`Promise`\<[`Account`](../../../entities/Account/classes/Account.mdx) \| [`MultiSig`](../../../entities/Account/MultiSig/classes/MultiSig.mdx)\>

***

### getAccountBalance()

#### Call Signature

> **getAccountBalance**(`args?`: `object`): `Promise`\<[`AccountBalance`](../../../entities/Account/types/interfaces/AccountBalance.mdx)\>

Defined in: [src/api/client/AccountManagement.ts:237](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/client/AccountManagement.ts#L237)

Get the free/locked POLYX balance of an Account

##### Parameters

Parameter
Type
Description

`args?`

\{ `account`: `string` \| [`Account`](../../../entities/Account/classes/Account.mdx); \}

&hyphen;

`args.account?`

`string` \| [`Account`](../../../entities/Account/classes/Account.mdx)

The account to get balance for (defaults to the signing Account)

##### Returns

`Promise`\<[`AccountBalance`](../../../entities/Account/types/interfaces/AccountBalance.mdx)\>

The account's POLYX balance information

##### Note

can be subscribed to, if connected to node using a web socket

#### Call Signature

> **getAccountBalance**(`callback`: [`SubCallback`](../../../entities/types/type-aliases/SubCallback.mdx)\<[`AccountBalance`](../../../entities/Account/types/interfaces/AccountBalance.mdx)\>): `Promise`\<[`UnsubCallback`](../../../entities/types/type-aliases/UnsubCallback.mdx)\>

Defined in: [src/api/client/AccountManagement.ts:246](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/client/AccountManagement.ts#L246)

Get the free/locked POLYX balance of the signing Account (with subscription)

##### Parameters

Parameter
Type
Description

`callback`

[`SubCallback`](../../../entities/types/type-aliases/SubCallback.mdx)\<[`AccountBalance`](../../../entities/Account/types/interfaces/AccountBalance.mdx)\>

Callback function to receive balance updates

##### Returns

`Promise`\<[`UnsubCallback`](../../../entities/types/type-aliases/UnsubCallback.mdx)\>

An unsubscribe function

##### Note

can be subscribed to, if connected to node using a web socket

#### Call Signature

> **getAccountBalance**(`args`: `object`, `callback`: [`SubCallback`](../../../entities/types/type-aliases/SubCallback.mdx)\<[`AccountBalance`](../../../entities/Account/types/interfaces/AccountBalance.mdx)\>): `Promise`\<[`UnsubCallback`](../../../entities/types/type-aliases/UnsubCallback.mdx)\>

Defined in: [src/api/client/AccountManagement.ts:256](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/client/AccountManagement.ts#L256)

Get the free/locked POLYX balance of an Account (with subscription)

##### Parameters

Parameter
Type
Description

`args`

\{ `account`: `string` \| [`Account`](../../../entities/Account/classes/Account.mdx); \}

&hyphen;

`args.account`

`string` \| [`Account`](../../../entities/Account/classes/Account.mdx)

The account to get balance for

`callback`

[`SubCallback`](../../../entities/types/type-aliases/SubCallback.mdx)\<[`AccountBalance`](../../../entities/Account/types/interfaces/AccountBalance.mdx)\>

Callback function to receive balance updates

##### Returns

`Promise`\<[`UnsubCallback`](../../../entities/types/type-aliases/UnsubCallback.mdx)\>

An unsubscribe function

##### Note

can be subscribed to, if connected to node using a web socket

***

### getSigningAccount()

> **getSigningAccount**(): [`Account`](../../../entities/Account/classes/Account.mdx) \| `null`

Defined in: [src/api/client/AccountManagement.ts:309](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/client/AccountManagement.ts#L309)

Return the signing Account, or null if no signing Account has been set

#### Returns

[`Account`](../../../entities/Account/classes/Account.mdx) \| `null`

***

### getSigningAccounts()

> **getSigningAccounts**(): `Promise`\<[`Account`](../../../entities/Account/classes/Account.mdx)[]\>

Defined in: [src/api/client/AccountManagement.ts:322](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/client/AccountManagement.ts#L322)

Return a list that contains all the signing Accounts associated to the SDK instance's Signing Manager

#### Returns

`Promise`\<[`Account`](../../../entities/Account/classes/Account.mdx)[]\>

#### Throws

— if there is no Signing Manager attached to the SDK

***

### getSubsidy()

> **getSubsidy**(`args`: `object`): [`Subsidy`](../../../entities/Subsidy/classes/Subsidy.mdx)

Defined in: [src/api/client/AccountManagement.ts:329](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/client/AccountManagement.ts#L329)

Return an Subsidy instance for a pair of beneficiary and subsidizer Account

#### Parameters

Parameter
Type

`args`

\{ `beneficiary`: `string` \| [`Account`](../../../entities/Account/classes/Account.mdx); `subsidizer`: `string` \| [`Account`](../../../entities/Account/classes/Account.mdx); \}

`args.beneficiary`

`string` \| [`Account`](../../../entities/Account/classes/Account.mdx)

`args.subsidizer`

`string` \| [`Account`](../../../entities/Account/classes/Account.mdx)

#### Returns

[`Subsidy`](../../../entities/Subsidy/classes/Subsidy.mdx)

***

### inviteAccount()

> **inviteAccount**(`args`: [`InviteAccountParams`](../../../procedures/types/interfaces/InviteAccountParams.mdx), `opts?`: [`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)): `Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<[`AuthorizationRequest`](../../../entities/AuthorizationRequest/classes/AuthorizationRequest.mdx), [`AuthorizationRequest`](../../../entities/AuthorizationRequest/classes/AuthorizationRequest.mdx)\>\>

Defined in: [src/api/client/AccountManagement.ts:184](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/client/AccountManagement.ts#L184)

Send an invitation to an Account to join the signing Identity as a secondary Account

#### Parameters

Parameter
Type

`args`

[`InviteAccountParams`](../../../procedures/types/interfaces/InviteAccountParams.mdx)

`opts?`

[`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<[`AuthorizationRequest`](../../../entities/AuthorizationRequest/classes/AuthorizationRequest.mdx), [`AuthorizationRequest`](../../../entities/AuthorizationRequest/classes/AuthorizationRequest.mdx)\>\>

#### Note

this will create an [Authorization Request](../../../entities/AuthorizationRequest/classes/AuthorizationRequest.mdx) which has to be accepted by the `targetAccount`.
  An [Account](../../../entities/Account/classes/Account.mdx) or [Identity](../../../entities/types/type-aliases/Identity.mdx) can fetch its pending Authorization Requests by calling [authorizations.getReceived](../../../entities/common/namespaces/Authorizations/classes/Authorizations.mdx#getreceived).
  Also, an Account or Identity can directly fetch the details of an Authorization Request by calling [authorizations.getOne](../../../entities/common/namespaces/Authorizations/classes/Authorizations.mdx#getone)

#### Note

this method is of type [ProcedureMethod](../../../procedures/types/interfaces/ProcedureMethod.mdx), which means you can call [inviteAccount.checkAuthorization](../../../procedures/types/interfaces/ProcedureMethod.mdx#checkauthorization) on it to see whether the signing Account and Identity have the required roles and permissions to run it

***

### isValidAddress()

> **isValidAddress**(`args`: `object`): `boolean`

Defined in: [src/api/client/AccountManagement.ts:346](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/client/AccountManagement.ts#L346)

Returns `true`

#### Parameters

Parameter
Type
Description

`args`

\{ `address`: `string`; \}

&hyphen;

`args.address`

`string`

is a valid ss58 address for the connected network

#### Returns

`boolean`

***

### leaveIdentity()

> **leaveIdentity**(`opts?`: [`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)): `Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

Defined in: [src/api/client/AccountManagement.ts:149](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/client/AccountManagement.ts#L149)

Disassociate the signing Account from its Identity. This operation can only be done if the signing Account is a secondary Account

#### Parameters

Parameter
Type

`opts?`

[`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

#### Note

this method is of type [NoArgsProcedureMethod](../../../procedures/types/interfaces/NoArgsProcedureMethod.mdx), which means you can call [leaveIdentity.checkAuthorization](../../../procedures/types/interfaces/NoArgsProcedureMethod.mdx#checkauthorization) on it to see whether the signing Account and Identity have the required roles and permissions to run it

***

### modifyPermissions()

> **modifyPermissions**(`args`: [`ModifySignerPermissionsParams`](../../../procedures/types/interfaces/ModifySignerPermissionsParams.mdx), `opts?`: [`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)): `Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

Defined in: [src/api/client/AccountManagement.ts:175](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/client/AccountManagement.ts#L175)

Modify all permissions of a list of secondary Accounts associated with the signing Identity

#### Parameters

Parameter
Type

`args`

[`ModifySignerPermissionsParams`](../../../procedures/types/interfaces/ModifySignerPermissionsParams.mdx)

`opts?`

[`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

#### Throws

if the signing Account is not the primary Account of the Identity whose secondary Account permissions are being modified

#### Note

this method is of type [ProcedureMethod](../../../procedures/types/interfaces/ProcedureMethod.mdx), which means you can call [modifyPermissions.checkAuthorization](../../../procedures/types/interfaces/ProcedureMethod.mdx#checkauthorization) on it to see whether the signing Account and Identity have the required roles and permissions to run it

***

### removeSecondaryAccounts()

> **removeSecondaryAccounts**(`args`: [`RemoveSecondaryAccountsParams`](../../../procedures/types/interfaces/RemoveSecondaryAccountsParams.mdx), `opts?`: [`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)): `Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

Defined in: [src/api/client/AccountManagement.ts:154](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/client/AccountManagement.ts#L154)

Remove a list of secondary Accounts associated with the signing Identity

#### Parameters

Parameter
Type

`args`

[`RemoveSecondaryAccountsParams`](../../../procedures/types/interfaces/RemoveSecondaryAccountsParams.mdx)

`opts?`

[`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

#### Note

this method is of type [ProcedureMethod](../../../procedures/types/interfaces/ProcedureMethod.mdx), which means you can call [removeSecondaryAccounts.checkAuthorization](../../../procedures/types/interfaces/ProcedureMethod.mdx#checkauthorization) on it to see whether the signing Account and Identity have the required roles and permissions to run it

***

### revokePermissions()

> **revokePermissions**(`args`: `object`, `opts?`: [`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)): `Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

Defined in: [src/api/client/AccountManagement.ts:168](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/client/AccountManagement.ts#L168)

Revoke all permissions of a list of secondary Accounts associated with the signing Identity

#### Parameters

Parameter
Type

`args`

\{ `secondaryAccounts`: (`string` \| [`Account`](../../../entities/Account/classes/Account.mdx))[]; \}

`args.secondaryAccounts`

(`string` \| [`Account`](../../../entities/Account/classes/Account.mdx))[]

`opts?`

[`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

#### Throws

if the signing Account is not the primary Account of the Identity whose secondary Account permissions are being revoked

#### Note

this method is of type [ProcedureMethod](../../../procedures/types/interfaces/ProcedureMethod.mdx), which means you can call [revokePermissions.checkAuthorization](../../../procedures/types/interfaces/ProcedureMethod.mdx#checkauthorization) on it to see whether the signing Account and Identity have the required roles and permissions to run it

***

### revokeSubsidy()

> **revokeSubsidy**(`args`: [`RevokeSubsidyParams`](../../../procedures/types/interfaces/RevokeSubsidyParams.mdx), `opts?`: [`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)): `Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

Defined in: [src/api/client/AccountManagement.ts:219](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/client/AccountManagement.ts#L219)

Revokes an already approved subsidy request

#### Parameters

Parameter
Type

`args`

[`RevokeSubsidyParams`](../../../procedures/types/interfaces/RevokeSubsidyParams.mdx)

`opts?`

[`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

#### Note

Only the subsidizer can revoke an already approved subsidy request. Pending subsidies for a beneficiary can be fetched by calling [subsidies.getPendingSubsidies](../../../entities/Subsidies/classes/Subsidies.mdx#getpendingsubsidies).

#### Note

this method is of type [ProcedureMethod](../../../procedures/types/interfaces/ProcedureMethod.mdx), which means you can call [revokeSubsidy.checkAuthorization](../../../procedures/types/interfaces/ProcedureMethod.mdx#checkauthorization) on it to see whether the signing Account and Identity have the required roles and permissions to run it

***

### unfreezeSecondaryAccounts()

> **unfreezeSecondaryAccounts**(`opts?`: [`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)): `Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

Defined in: [src/api/client/AccountManagement.ts:194](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/client/AccountManagement.ts#L194)

Unfreeze all of the secondary Accounts in the signing Identity. This will restore their permissions as they were before being frozen

#### Parameters

Parameter
Type

`opts?`

[`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

#### Note

this method is of type [NoArgsProcedureMethod](../../../procedures/types/interfaces/NoArgsProcedureMethod.mdx), which means you can call [unfreezeSecondaryAccounts.checkAuthorization](../../../procedures/types/interfaces/NoArgsProcedureMethod.mdx#checkauthorization) on it to see whether the signing Account and Identity have the required roles and permissions to run it
