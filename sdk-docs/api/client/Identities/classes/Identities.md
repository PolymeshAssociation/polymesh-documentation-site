# Class: Identities

> Defined in: [src/api/client/Identities.ts:37](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/client/Identities.ts#L37)

# Class: Identities

Defined in: [src/api/client/Identities.ts:37](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/client/Identities.ts#L37)

Handles all Identity related functionality

## Methods

### allowIdentityToCreatePortfolios()

> **allowIdentityToCreatePortfolios**(`args`: [`AllowIdentityToCreatePortfoliosParams`](../../../procedures/types/type-aliases/AllowIdentityToCreatePortfoliosParams.mdx), `opts?`: [`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)): `Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

Defined in: [src/api/client/Identities.ts:269](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/client/Identities.ts#L269)

Gives permission to the Identity to create Portfolios on behalf of the signing Identity

#### Parameters

Parameter
Type

`args`

[`AllowIdentityToCreatePortfoliosParams`](../../../procedures/types/type-aliases/AllowIdentityToCreatePortfoliosParams.mdx)

`opts?`

[`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

#### Throws

if
 - the provided Identity already has permissions to create portfolios for signing Identity
 - the provided Identity does not exist

#### Note

this method is of type [ProcedureMethod](../../../procedures/types/interfaces/ProcedureMethod.mdx), which means you can call [allowIdentityToCreatePortfolios.checkAuthorization](../../../procedures/types/interfaces/ProcedureMethod.mdx#checkauthorization) on it to see whether the signing Account and Identity have the required roles and permissions to run it

***

### attestPrimaryKeyRotation()

> **attestPrimaryKeyRotation**(`args`: [`AttestPrimaryKeyRotationParams`](../../../procedures/types/interfaces/AttestPrimaryKeyRotationParams.mdx), `opts?`: [`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)): `Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<[`AuthorizationRequest`](../../../entities/AuthorizationRequest/classes/AuthorizationRequest.mdx), [`AuthorizationRequest`](../../../entities/AuthorizationRequest/classes/AuthorizationRequest.mdx)\>\>

Defined in: [src/api/client/Identities.ts:155](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/client/Identities.ts#L155)

Get CDD Provider's attestation to change primary key

#### Parameters

Parameter
Type

`args`

[`AttestPrimaryKeyRotationParams`](../../../procedures/types/interfaces/AttestPrimaryKeyRotationParams.mdx)

`opts?`

[`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<[`AuthorizationRequest`](../../../entities/AuthorizationRequest/classes/AuthorizationRequest.mdx), [`AuthorizationRequest`](../../../entities/AuthorizationRequest/classes/AuthorizationRequest.mdx)\>\>

#### Note

the transaction signer must be a CDD provider

#### Note

this creates an [Authorization Requests](../../../entities/AuthorizationRequest/classes/AuthorizationRequest.mdx) which have to be accepted by the `targetAccount` along with the authorization for `RotatingPrimaryKey`.
  An [Account](../../../entities/Account/classes/Account.mdx) or [Identity](../../../entities/Identity/classes/Identity.mdx) can fetch its pending Authorization Requests by calling [authorizations.getReceived](../../../entities/common/namespaces/Authorizations/classes/Authorizations.mdx#getreceived).
  Also, an Account or Identity can directly fetch the details of an Authorization Request by calling [authorizations.getOne](../../../entities/common/namespaces/Authorizations/classes/Authorizations.mdx#getone)

#### Note

required role:
  - Customer Due Diligence Provider

#### Note

this method is of type [ProcedureMethod](../../../procedures/types/interfaces/ProcedureMethod.mdx), which means you can call [attestPrimaryKeyRotation.checkAuthorization](../../../procedures/types/interfaces/ProcedureMethod.mdx#checkauthorization) on it to see whether the signing Account and Identity have the required roles and permissions to run it

***

### ~~createChild()~~

> **createChild**(`args`: [`CreateChildIdentityParams`](../../../procedures/types/interfaces/CreateChildIdentityParams.mdx), `opts?`: [`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)): `Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<[`ChildIdentity`](../../../entities/Identity/ChildIdentity/classes/ChildIdentity.mdx), [`ChildIdentity`](../../../entities/Identity/ChildIdentity/classes/ChildIdentity.mdx)\>\>

Defined in: [src/api/client/Identities.ts:245](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/client/Identities.ts#L245)

Creates a child identity and makes the `secondaryKey` as the primary key of the child identity

#### Parameters

Parameter
Type

`args`

[`CreateChildIdentityParams`](../../../procedures/types/interfaces/CreateChildIdentityParams.mdx)

`opts?`

[`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<[`ChildIdentity`](../../../entities/Identity/ChildIdentity/classes/ChildIdentity.mdx), [`ChildIdentity`](../../../entities/Identity/ChildIdentity/classes/ChildIdentity.mdx)\>\>

#### Note

the given `secondaryKey` is removed as secondary key from the signing Identity

#### Throws

if
 - the transaction signer is not the primary account of which the `secondaryKey` is a secondary key
 - the `secondaryKey` can't be unlinked (can happen when it's part of a multisig with some balance)
 - the signing account is not a primary key
 - the signing Identity is already a child of some other identity

#### Deprecated

Child identities are no longer supported in chain v8

#### Note

this method is of type [ProcedureMethod](../../../procedures/types/interfaces/ProcedureMethod.mdx), which means you can call [createChild.checkAuthorization](../../../procedures/types/interfaces/ProcedureMethod.mdx#checkauthorization) on it to see whether the signing Account and Identity have the required roles and permissions to run it

***

### ~~createChildren()~~

> **createChildren**(`args`: [`CreateChildIdentitiesParams`](../../../procedures/types/interfaces/CreateChildIdentitiesParams.mdx), `opts?`: [`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)): `Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<[`ChildIdentity`](../../../entities/Identity/ChildIdentity/classes/ChildIdentity.mdx)[], [`ChildIdentity`](../../../entities/Identity/ChildIdentity/classes/ChildIdentity.mdx)[]\>\>

Defined in: [src/api/client/Identities.ts:260](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/client/Identities.ts#L260)

Create child identities using off chain authorization

#### Parameters

Parameter
Type

`args`

[`CreateChildIdentitiesParams`](../../../procedures/types/interfaces/CreateChildIdentitiesParams.mdx)

`opts?`

[`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<[`ChildIdentity`](../../../entities/Identity/ChildIdentity/classes/ChildIdentity.mdx)[], [`ChildIdentity`](../../../entities/Identity/ChildIdentity/classes/ChildIdentity.mdx)[]\>\>

#### Note

the list of `key` provided in the params should not be linked to any other account

#### Throws

if
 - the signing account is not a primary key
 - the signing Identity is already a child of some other identity
 - `expiresAt` is not a future date
 - the any `key` in `childKeyAuths` is already linked to an Identity

#### Deprecated

Child identities are no longer supported in chain v8

#### Note

this method is of type [ProcedureMethod](../../../procedures/types/interfaces/ProcedureMethod.mdx), which means you can call [createChildren.checkAuthorization](../../../procedures/types/interfaces/ProcedureMethod.mdx#checkauthorization) on it to see whether the signing Account and Identity have the required roles and permissions to run it

***

### createPortfolio()

> **createPortfolio**(`args`: `object`, `opts?`: [`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)): `Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<[`NumberedPortfolio`](../../../entities/NumberedPortfolio/classes/NumberedPortfolio.mdx)[], [`NumberedPortfolio`](../../../entities/NumberedPortfolio/classes/NumberedPortfolio.mdx)\>\>

Defined in: [src/api/client/Identities.ts:189](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/client/Identities.ts#L189)

Create a new Portfolio under the ownership of the signing Identity

#### Parameters

Parameter
Type

`args`

\{ `name`: `string`; `ownerDid?`: `string`; \}

`args.name`

`string`

`args.ownerDid?`

`string`

`opts?`

[`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<[`NumberedPortfolio`](../../../entities/NumberedPortfolio/classes/NumberedPortfolio.mdx)[], [`NumberedPortfolio`](../../../entities/NumberedPortfolio/classes/NumberedPortfolio.mdx)\>\>

#### Note

the `ownerDid` is optional. If provided portfolios will be created as Custody Portfolios under the `ownerDid`

#### Note

this method is of type [ProcedureMethod](../../../procedures/types/interfaces/ProcedureMethod.mdx), which means you can call [createPortfolio.checkAuthorization](../../../procedures/types/interfaces/ProcedureMethod.mdx#checkauthorization) on it to see whether the signing Account and Identity have the required roles and permissions to run it

***

### createPortfolios()

> **createPortfolios**(`args`: `object`, `opts?`: [`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)): `Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<[`NumberedPortfolio`](../../../entities/NumberedPortfolio/classes/NumberedPortfolio.mdx)[], [`NumberedPortfolio`](../../../entities/NumberedPortfolio/classes/NumberedPortfolio.mdx)[]\>\>

Defined in: [src/api/client/Identities.ts:199](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/client/Identities.ts#L199)

Creates a set of new Portfolios under the ownership of the signing Identity

#### Parameters

Parameter
Type

`args`

\{ `names`: `string`[]; `ownerDid?`: `string`; \}

`args.names`

`string`[]

`args.ownerDid?`

`string`

`opts?`

[`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<[`NumberedPortfolio`](../../../entities/NumberedPortfolio/classes/NumberedPortfolio.mdx)[], [`NumberedPortfolio`](../../../entities/NumberedPortfolio/classes/NumberedPortfolio.mdx)[]\>\>

#### Note

the `ownerDid` is optional. If provided portfolios will be created as Custody Portfolios under the `ownerDid`

#### Note

this method is of type [ProcedureMethod](../../../procedures/types/interfaces/ProcedureMethod.mdx), which means you can call [createPortfolios.checkAuthorization](../../../procedures/types/interfaces/ProcedureMethod.mdx#checkauthorization) on it to see whether the signing Account and Identity have the required roles and permissions to run it

***

### getAllowedCustodians()

> **getAllowedCustodians**(`did`: `string` \| [`Identity`](../../../entities/Identity/classes/Identity.mdx)): `Promise`\<`string`[]\>

Defined in: [src/api/client/Identities.ts:291](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/client/Identities.ts#L291)

Returns a list of allowed custodian did(s) for Identity

#### Parameters

Parameter
Type

`did`

`string` \| [`Identity`](../../../entities/Identity/classes/Identity.mdx)

#### Returns

`Promise`\<`string`[]\>

#### Throws

if
- the provided Identity does not exist

***

### ~~getChildIdentity()~~

> **getChildIdentity**(`args`: `object`): `Promise`\<[`ChildIdentity`](../../../entities/Identity/ChildIdentity/classes/ChildIdentity.mdx)\>

Defined in: [src/api/client/Identities.ts:220](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/client/Identities.ts#L220)

Create a ChildIdentity instance from a DID

#### Parameters

Parameter
Type

`args`

\{ `did`: `string`; \}

`args.did`

`string`

#### Returns

`Promise`\<[`ChildIdentity`](../../../entities/Identity/ChildIdentity/classes/ChildIdentity.mdx)\>

#### Throws

if there is no ChildIdentity with the passed DID

#### Deprecated

Child identities are no longer supported in chain v8

***

### getIdentity()

> **getIdentity**(`args`: `object`): `Promise`\<[`Identity`](../../../entities/Identity/classes/Identity.mdx)\>

Defined in: [src/api/client/Identities.ts:209](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/client/Identities.ts#L209)

Create an Identity instance from a DID

#### Parameters

Parameter
Type

`args`

\{ `did`: `string`; \}

`args.did`

`string`

#### Returns

`Promise`\<[`Identity`](../../../entities/Identity/classes/Identity.mdx)\>

#### Throws

if there is no Identity with the passed DID

***

### isIdentityValid()

> **isIdentityValid**(`args`: `object`): `Promise`\<`boolean`\>

Defined in: [src/api/client/Identities.ts:228](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/client/Identities.ts#L228)

Return whether the supplied Identity/DID exists

#### Parameters

Parameter
Type

`args`

\{ `identity`: `string` \| [`Identity`](../../../entities/Identity/classes/Identity.mdx); \}

`args.identity`

`string` \| [`Identity`](../../../entities/Identity/classes/Identity.mdx)

#### Returns

`Promise`\<`boolean`\>

***

### registerIdentity()

> **registerIdentity**(`args`: [`RegisterIdentityParams`](../../../procedures/types/interfaces/RegisterIdentityParams.mdx), `opts?`: [`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)): `Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<[`Identity`](../../../entities/Identity/classes/Identity.mdx), [`Identity`](../../../entities/Identity/classes/Identity.mdx)\>\>

Defined in: [src/api/client/Identities.ts:135](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/client/Identities.ts#L135)

Register an Identity

#### Parameters

Parameter
Type

`args`

[`RegisterIdentityParams`](../../../procedures/types/interfaces/RegisterIdentityParams.mdx)

`opts?`

[`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<[`Identity`](../../../entities/Identity/classes/Identity.mdx), [`Identity`](../../../entities/Identity/classes/Identity.mdx)\>\>

#### Note

the transaction signer must be a DID Registrar

#### Note

this may create [Authorization Requests](../../../entities/AuthorizationRequest/classes/AuthorizationRequest.mdx) which have to be accepted by the `targetAccount`.
  An [Account](../../../entities/Account/classes/Account.mdx) or [Identity](../../../entities/Identity/classes/Identity.mdx) can fetch its pending Authorization Requests by calling [authorizations.getReceived](../../../entities/common/namespaces/Authorizations/classes/Authorizations.mdx#getreceived).
  Also, an Account or Identity can directly fetch the details of an Authorization Request by calling [authorizations.getOne](../../../entities/common/namespaces/Authorizations/classes/Authorizations.mdx#getone)

#### Note

required role:
  - DID Registrar

#### Note

this method is of type [ProcedureMethod](../../../procedures/types/interfaces/ProcedureMethod.mdx), which means you can call [registerIdentity.checkAuthorization](../../../procedures/types/interfaces/ProcedureMethod.mdx#checkauthorization) on it to see whether the signing Account and Identity have the required roles and permissions to run it

***

### revokeIdentityToCreatePortfolios()

> **revokeIdentityToCreatePortfolios**(`args`: [`RevokeIdentityToCreatePortfoliosParams`](../../../procedures/types/type-aliases/RevokeIdentityToCreatePortfoliosParams.mdx), `opts?`: [`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)): `Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

Defined in: [src/api/client/Identities.ts:281](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/client/Identities.ts#L281)

Revokes permission from the Identity to create Portfolios on behalf of the signing Identity

#### Parameters

Parameter
Type

`args`

[`RevokeIdentityToCreatePortfoliosParams`](../../../procedures/types/type-aliases/RevokeIdentityToCreatePortfoliosParams.mdx)

`opts?`

[`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

#### Throws

if
 - the provided Identity already does not have permissions to create portfolios for signing Identity
 - the provided Identity does not exist

#### Note

this method is of type [ProcedureMethod](../../../procedures/types/interfaces/ProcedureMethod.mdx), which means you can call [revokeIdentityToCreatePortfolios.checkAuthorization](../../../procedures/types/interfaces/ProcedureMethod.mdx#checkauthorization) on it to see whether the signing Account and Identity have the required roles and permissions to run it

***

### rotatePrimaryKey()

> **rotatePrimaryKey**(`args`: [`RotatePrimaryKeyParams`](../../../procedures/types/interfaces/RotatePrimaryKeyParams.mdx), `opts?`: [`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)): `Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<[`AuthorizationRequest`](../../../entities/AuthorizationRequest/classes/AuthorizationRequest.mdx), [`AuthorizationRequest`](../../../entities/AuthorizationRequest/classes/AuthorizationRequest.mdx)\>\>

Defined in: [src/api/client/Identities.ts:167](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/client/Identities.ts#L167)

Creates an Authorization to rotate primary key of the signing Identity by the `targetAccount`

#### Parameters

Parameter
Type

`args`

[`RotatePrimaryKeyParams`](../../../procedures/types/interfaces/RotatePrimaryKeyParams.mdx)

`opts?`

[`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<[`AuthorizationRequest`](../../../entities/AuthorizationRequest/classes/AuthorizationRequest.mdx), [`AuthorizationRequest`](../../../entities/AuthorizationRequest/classes/AuthorizationRequest.mdx)\>\>

#### Note

this creates an [Authorization Requests](../../../entities/AuthorizationRequest/classes/AuthorizationRequest.mdx) which have to be accepted by the `targetAccount` along with the optional CDD authorization generated by CDD provider attesting the rotation of primary key
  An [Account](../../../entities/Account/classes/Account.mdx) or [Identity](../../../entities/Identity/classes/Identity.mdx) can fetch its pending Authorization Requests by calling [authorizations.getReceived](../../../entities/common/namespaces/Authorizations/classes/Authorizations.mdx#getreceived).
  Also, an Account or Identity can directly fetch the details of an Authorization Request by calling [authorizations.getOne](../../../entities/common/namespaces/Authorizations/classes/Authorizations.mdx#getone)

#### Note

this method is of type [ProcedureMethod](../../../procedures/types/interfaces/ProcedureMethod.mdx), which means you can call [rotatePrimaryKey.checkAuthorization](../../../procedures/types/interfaces/ProcedureMethod.mdx#checkauthorization) on it to see whether the signing Account and Identity have the required roles and permissions to run it

***

### rotatePrimaryKeyToSecondary()

> **rotatePrimaryKeyToSecondary**(`args`: [`RotatePrimaryKeyToSecondaryParams`](../../../procedures/types/type-aliases/RotatePrimaryKeyToSecondaryParams.mdx), `opts?`: [`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)): `Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<[`AuthorizationRequest`](../../../entities/AuthorizationRequest/classes/AuthorizationRequest.mdx), [`AuthorizationRequest`](../../../entities/AuthorizationRequest/classes/AuthorizationRequest.mdx)\>\>

Defined in: [src/api/client/Identities.ts:180](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/client/Identities.ts#L180)

Creates an Authorization to rotate primary key of the signing Identity to an existing secondary key identified by the `targetAccount`

#### Parameters

Parameter
Type

`args`

[`RotatePrimaryKeyToSecondaryParams`](../../../procedures/types/type-aliases/RotatePrimaryKeyToSecondaryParams.mdx)

`opts?`

[`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<[`AuthorizationRequest`](../../../entities/AuthorizationRequest/classes/AuthorizationRequest.mdx), [`AuthorizationRequest`](../../../entities/AuthorizationRequest/classes/AuthorizationRequest.mdx)\>\>

#### Note

the given `targetAccount` must be an existing secondaryKey or unlinked to any other Identity

#### Note

this creates an [Authorization Requests](../../../entities/AuthorizationRequest/classes/AuthorizationRequest.mdx) which have to be accepted by the `targetAccount` along with the optional CDD authorization generated by CDD provider attesting the rotation of primary key
  An [Account](../../../entities/Account/classes/Account.mdx) or [Identity](../../../entities/Identity/classes/Identity.mdx) can fetch its pending Authorization Requests by calling [authorizations.getReceived](../../../entities/common/namespaces/Authorizations/classes/Authorizations.mdx#getreceived).
  Also, an Account or Identity can directly fetch the details of an Authorization Request by calling [authorizations.getOne](../../../entities/common/namespaces/Authorizations/classes/Authorizations.mdx#getone)

#### Throws

if the given `targetAccount` is linked with another Identity

#### Throws

if the given `targetAccount` is already the primary key of the signing Identity

#### Throws

if the given `targetAccount` already has a pending invitation to become the primary key of the signing Identity

#### Note

this method is of type [ProcedureMethod](../../../procedures/types/interfaces/ProcedureMethod.mdx), which means you can call [rotatePrimaryKeyToSecondary.checkAuthorization](../../../procedures/types/interfaces/ProcedureMethod.mdx#checkauthorization) on it to see whether the signing Account and Identity have the required roles and permissions to run it

***

### selfRegisterDid()

> **selfRegisterDid**(`opts?`: [`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)): `Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<[`Identity`](../../../entities/Identity/classes/Identity.mdx), [`Identity`](../../../entities/Identity/classes/Identity.mdx)\>\>

Defined in: [src/api/client/Identities.ts:142](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/client/Identities.ts#L142)

Register a new DID for the signing Account

#### Parameters

Parameter
Type

`opts?`

[`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<[`Identity`](../../../entities/Identity/classes/Identity.mdx), [`Identity`](../../../entities/Identity/classes/Identity.mdx)\>\>

#### Throws

if the signing Account is already linked to an Identity

#### Note

this method is of type [NoArgsProcedureMethod](../../../procedures/types/interfaces/NoArgsProcedureMethod.mdx), which means you can call [selfRegisterDid.checkAuthorization](../../../procedures/types/interfaces/NoArgsProcedureMethod.mdx#checkauthorization) on it to see whether the signing Account and Identity have the required roles and permissions to run it
