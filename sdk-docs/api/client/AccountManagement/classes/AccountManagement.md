# Class: AccountManagement

> Defined in: [src/api/client/AccountManagement.ts:52](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/client/AccountManagement.ts#L52)

# Class: AccountManagement

Defined in: [src/api/client/AccountManagement.ts:52](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/client/AccountManagement.ts#L52)

Handles functionality related to Account Management

## Methods

### acceptPrimaryKey()

> **acceptPrimaryKey**(`args`: [`AcceptPrimaryKeyRotationParams`](../../../procedures/types/interfaces/AcceptPrimaryKeyRotationParams.mdx), `opts?`: [`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)): `Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

Defined in: [src/api/client/AccountManagement.ts:383](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/client/AccountManagement.ts#L383)

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

Defined in: [src/api/client/AccountManagement.ts:230](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/client/AccountManagement.ts#L230)

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

Only the beneficiary can accept an already approved subsidy request. Pending subsidies for a beneficiary can be fetched by calling [subsides.getPendingSubsidies](../../../entities/Subsidies/classes/Subsidies.mdx#getpendingsubsidies).

#### Note

this is only available from chain v8

#### Note

this method is of type [ProcedureMethod](../../../procedures/types/interfaces/ProcedureMethod.mdx), which means you can call [acceptSubsidy.checkAuthorization](../../../procedures/types/interfaces/ProcedureMethod.mdx#checkauthorization) on it to see whether the signing Account and Identity have the required roles and permissions to run it

***

### addSecondaryAccounts()

> **addSecondaryAccounts**(`args`: [`AddSecondaryAccountsParams`](../../../procedures/types/interfaces/AddSecondaryAccountsParams.mdx), `opts?`: [`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)): `Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<[`Identity`](../../../entities/Identity/classes/Identity.mdx), [`Identity`](../../../entities/Identity/classes/Identity.mdx)\>\>

Defined in: [src/api/client/AccountManagement.ts:165](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/client/AccountManagement.ts#L165)

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

Defined in: [src/api/client/AccountManagement.ts:222](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/client/AccountManagement.ts#L222)

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

this will create a pending subsidies entry, which has to be accepted by the `beneficiary` Account. Pending subsidies for a beneficiary can be fetched by calling [subsides.getPendingSubsidies](../../../entities/Subsidies/classes/Subsidies.mdx#getpendingsubsidies).

#### Throws

- if called for a v7 chain
 - if same allowance amount is pending for acceptance with respect to same beneficiary

#### Note

this method is of type [ProcedureMethod](../../../procedures/types/interfaces/ProcedureMethod.mdx), which means you can call [approveSubsidy.checkAuthorization](../../../procedures/types/interfaces/ProcedureMethod.mdx#checkauthorization) on it to see whether the signing Account and Identity have the required roles and permissions to run it

***

### createMultiSigAccount()

> **createMultiSigAccount**(`args`: [`CreateMultiSigParams`](../../../procedures/types/interfaces/CreateMultiSigParams.mdx), `opts?`: [`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)): `Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<[`MultiSig`](../../../entities/Account/MultiSig/classes/MultiSig.mdx), [`MultiSig`](../../../entities/Account/MultiSig/classes/MultiSig.mdx)\>\>

Defined in: [src/api/client/AccountManagement.ts:247](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/client/AccountManagement.ts#L247)

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

Defined in: [src/api/client/AccountManagement.ts:193](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/client/AccountManagement.ts#L193)

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

Defined in: [src/api/client/AccountManagement.ts:392](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/client/AccountManagement.ts#L392)

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

Defined in: [src/api/client/AccountManagement.ts:321](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/client/AccountManagement.ts#L321)

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

> **getAccountBalance**(`args?`: `object`): `Promise`\<[`Balance`](../../../entities/Account/types/interfaces/Balance.mdx)\>

Defined in: [src/api/client/AccountManagement.ts:256](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/client/AccountManagement.ts#L256)

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

`Promise`\<[`Balance`](../../../entities/Account/types/interfaces/Balance.mdx)\>

The account's POLYX balance information

##### Note

can be subscribed to, if connected to node using a web socket

#### Call Signature

> **getAccountBalance**(`callback`: [`SubCallback`](../../../entities/types/type-aliases/SubCallback.mdx)\<[`Balance`](../../../entities/Account/types/interfaces/Balance.mdx)\>): `Promise`\<[`UnsubCallback`](../../../entities/types/type-aliases/UnsubCallback.mdx)\>

Defined in: [src/api/client/AccountManagement.ts:265](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/client/AccountManagement.ts#L265)

Get the free/locked POLYX balance of the signing Account (with subscription)

##### Parameters

Parameter
Type
Description

`callback`

[`SubCallback`](../../../entities/types/type-aliases/SubCallback.mdx)\<[`Balance`](../../../entities/Account/types/interfaces/Balance.mdx)\>

Callback function to receive balance updates

##### Returns

`Promise`\<[`UnsubCallback`](../../../entities/types/type-aliases/UnsubCallback.mdx)\>

An unsubscribe function

##### Note

can be subscribed to, if connected to node using a web socket

#### Call Signature

> **getAccountBalance**(`args`: `object`, `callback`: [`SubCallback`](../../../entities/types/type-aliases/SubCallback.mdx)\<[`Balance`](../../../entities/Account/types/interfaces/Balance.mdx)\>): `Promise`\<[`UnsubCallback`](../../../entities/types/type-aliases/UnsubCallback.mdx)\>

Defined in: [src/api/client/AccountManagement.ts:275](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/client/AccountManagement.ts#L275)

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

[`SubCallback`](../../../entities/types/type-aliases/SubCallback.mdx)\<[`Balance`](../../../entities/Account/types/interfaces/Balance.mdx)\>

Callback function to receive balance updates

##### Returns

`Promise`\<[`UnsubCallback`](../../../entities/types/type-aliases/UnsubCallback.mdx)\>

An unsubscribe function

##### Note

can be subscribed to, if connected to node using a web socket

***

### getSigningAccount()

> **getSigningAccount**(): [`Account`](../../../entities/Account/classes/Account.mdx) \| `null`

Defined in: [src/api/client/AccountManagement.ts:328](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/client/AccountManagement.ts#L328)

Return the signing Account, or null if no signing Account has been set

#### Returns

[`Account`](../../../entities/Account/classes/Account.mdx) \| `null`

***

### getSigningAccounts()

> **getSigningAccounts**(): `Promise`\<[`Account`](../../../entities/Account/classes/Account.mdx)[]\>

Defined in: [src/api/client/AccountManagement.ts:341](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/client/AccountManagement.ts#L341)

Return a list that contains all the signing Accounts associated to the SDK instance's Signing Manager

#### Returns

`Promise`\<[`Account`](../../../entities/Account/classes/Account.mdx)[]\>

#### Throws

— if there is no Signing Manager attached to the SDK

***

### getSubsidy()

> **getSubsidy**(`args`: `object`): [`Subsidy`](../../../entities/Subsidy/classes/Subsidy.mdx)

Defined in: [src/api/client/AccountManagement.ts:348](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/client/AccountManagement.ts#L348)

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

Defined in: [src/api/client/AccountManagement.ts:188](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/client/AccountManagement.ts#L188)

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

Defined in: [src/api/client/AccountManagement.ts:365](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/client/AccountManagement.ts#L365)

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

Defined in: [src/api/client/AccountManagement.ts:153](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/client/AccountManagement.ts#L153)

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

Defined in: [src/api/client/AccountManagement.ts:179](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/client/AccountManagement.ts#L179)

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

Defined in: [src/api/client/AccountManagement.ts:158](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/client/AccountManagement.ts#L158)

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

Defined in: [src/api/client/AccountManagement.ts:172](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/client/AccountManagement.ts#L172)

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

Defined in: [src/api/client/AccountManagement.ts:238](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/client/AccountManagement.ts#L238)

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

Only the subsidizer can revoke an already approved subsidy request. Pending subsidies for a beneficiary can be fetched by calling [subsides.getPendingSubsidies](../../../entities/Subsidies/classes/Subsidies.mdx#getpendingsubsidies).

#### Note

this is only available from chain v8

#### Note

this method is of type [ProcedureMethod](../../../procedures/types/interfaces/ProcedureMethod.mdx), which means you can call [revokeSubsidy.checkAuthorization](../../../procedures/types/interfaces/ProcedureMethod.mdx#checkauthorization) on it to see whether the signing Account and Identity have the required roles and permissions to run it

***

### ~~subsidizeAccount()~~

> **subsidizeAccount**(`args`: [`SubsidizeAccountParams`](../../../procedures/types/interfaces/SubsidizeAccountParams.mdx), `opts?`: [`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)): `Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<[`AuthorizationRequest`](../../../entities/AuthorizationRequest/classes/AuthorizationRequest.mdx), [`AuthorizationRequest`](../../../entities/AuthorizationRequest/classes/AuthorizationRequest.mdx)\>\>

Defined in: [src/api/client/AccountManagement.ts:209](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/client/AccountManagement.ts#L209)

Send an Authorization Request to an Account to subsidize its transaction fees

#### Parameters

Parameter
Type

`args`

[`SubsidizeAccountParams`](../../../procedures/types/interfaces/SubsidizeAccountParams.mdx)

`opts?`

[`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<[`AuthorizationRequest`](../../../entities/AuthorizationRequest/classes/AuthorizationRequest.mdx), [`AuthorizationRequest`](../../../entities/AuthorizationRequest/classes/AuthorizationRequest.mdx)\>\>

#### Note

this will create an [Authorization Request](../../../entities/AuthorizationRequest/classes/AuthorizationRequest.mdx) which has to be accepted by the `beneficiary` Account.
  An [Account](../../../entities/Account/classes/Account.mdx) or [Identity](../../../entities/types/type-aliases/Identity.mdx) can fetch its pending Authorization Requests by calling [authorizations.getReceived](../../../entities/common/namespaces/Authorizations/classes/Authorizations.mdx#getreceived).
  Also, an Account or Identity can directly fetch the details of an Authorization Request by calling [authorizations.getOne](../../../entities/common/namespaces/Authorizations/classes/Authorizations.mdx#getone)

#### Deprecated

use [approveSubsidy](#approvesubsidy) instead from chain v8

#### Note

this method is of type [ProcedureMethod](../../../procedures/types/interfaces/ProcedureMethod.mdx), which means you can call [subsidizeAccount.checkAuthorization](../../../procedures/types/interfaces/ProcedureMethod.mdx#checkauthorization) on it to see whether the signing Account and Identity have the required roles and permissions to run it

***

### unfreezeSecondaryAccounts()

> **unfreezeSecondaryAccounts**(`opts?`: [`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)): `Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

Defined in: [src/api/client/AccountManagement.ts:198](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/client/AccountManagement.ts#L198)

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
