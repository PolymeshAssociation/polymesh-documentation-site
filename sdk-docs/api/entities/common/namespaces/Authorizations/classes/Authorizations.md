# Class: Authorizations\<Parent\>

> Defined in: [src/api/entities/common/namespaces/Authorizations.ts:35](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/common/namespaces/Authorizations.ts#L35)

# Class: Authorizations\

Defined in: [src/api/entities/common/namespaces/Authorizations.ts:35](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/common/namespaces/Authorizations.ts#L35)

Handles all Authorization related functionality

## Extends

- `Namespace`\<`Parent`\>

## Extended by

- [`IdentityAuthorizations`](../../../../Identity/IdentityAuthorizations/classes/IdentityAuthorizations.mdx)

## Type Parameters

Type Parameter

`Parent` *extends* [`Signer`](../../../../types/type-aliases/Signer.mdx)

## Methods

### getHistoricalAuthorizations()

> **getHistoricalAuthorizations**(`opts?`: `object`): `Promise`\<[`ResultSet`](../../../../types/interfaces/ResultSet.mdx)\<[`AuthorizationRequest`](../../../../AuthorizationRequest/classes/AuthorizationRequest.mdx)\>\>

Defined in: [src/api/entities/common/namespaces/Authorizations.ts:150](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/common/namespaces/Authorizations.ts#L150)

Fetch all historical Authorization Requests for which this Signer is the target

#### Parameters

Parameter
Type
Description

`opts`

\{ `size?`: `BigNumber`; `start?`: `BigNumber`; `status?`: [`AuthorizationStatusEnum`](../../../../../../types/enumerations/AuthorizationStatusEnum.mdx); `type?`: [`AuthTypeEnum`](../../../../../../types/enumerations/AuthTypeEnum.mdx); \}

&hyphen;

`opts.size?`

`BigNumber`

page size

`opts.start?`

`BigNumber`

page offset

`opts.status?`

[`AuthorizationStatusEnum`](../../../../../../types/enumerations/AuthorizationStatusEnum.mdx)

fetch only authorizations with this status. Fetches all statuses if not passed

`opts.type?`

[`AuthTypeEnum`](../../../../../../types/enumerations/AuthTypeEnum.mdx)

fetch only authorizations of this type. Fetches all types if not passed

#### Returns

`Promise`\<[`ResultSet`](../../../../types/interfaces/ResultSet.mdx)\<[`AuthorizationRequest`](../../../../AuthorizationRequest/classes/AuthorizationRequest.mdx)\>\>

#### Note

supports pagination

#### Note

uses the middlewareV2

***

### getOne()

> **getOne**(`args`: `object`): `Promise`\<[`AuthorizationRequest`](../../../../AuthorizationRequest/classes/AuthorizationRequest.mdx)\>

Defined in: [src/api/entities/common/namespaces/Authorizations.ts:80](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/common/namespaces/Authorizations.ts#L80)

Retrieve a single Authorization Request targeting this Signer by its ID

#### Parameters

Parameter
Type

`args`

\{ `id`: `BigNumber`; \}

`args.id`

`BigNumber`

#### Returns

`Promise`\<[`AuthorizationRequest`](../../../../AuthorizationRequest/classes/AuthorizationRequest.mdx)\>

#### Throws

if there is no Authorization Request with the passed ID targeting this Signer

***

### getReceived()

> **getReceived**(`opts?`: `object`): `Promise`\<[`AuthorizationRequest`](../../../../AuthorizationRequest/classes/AuthorizationRequest.mdx)[]\>

Defined in: [src/api/entities/common/namespaces/Authorizations.ts:42](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/common/namespaces/Authorizations.ts#L42)

Fetch all pending Authorization Requests for which this Signer is the target

#### Parameters

Parameter
Type
Description

`opts?`

\{ `includeExpired?`: `boolean`; `type?`: [`AuthorizationType`](../../../../types/enumerations/AuthorizationType.mdx); \}

&hyphen;

`opts.includeExpired?`

`boolean`

whether to include expired authorizations. Defaults to true

`opts.type?`

[`AuthorizationType`](../../../../types/enumerations/AuthorizationType.mdx)

fetch only authorizations of this type. Fetches all types if not passed

#### Returns

`Promise`\<[`AuthorizationRequest`](../../../../AuthorizationRequest/classes/AuthorizationRequest.mdx)[]\>
