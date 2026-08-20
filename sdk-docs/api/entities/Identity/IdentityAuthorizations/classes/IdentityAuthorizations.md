# Class: IdentityAuthorizations

> Defined in: [src/api/entities/Identity/IdentityAuthorizations.ts:12](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Identity/IdentityAuthorizations.ts#L12)

# Class: IdentityAuthorizations

Defined in: [src/api/entities/Identity/IdentityAuthorizations.ts:12](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Identity/IdentityAuthorizations.ts#L12)

Handles all Identity Authorization related functionality

## Extends

- [`Authorizations`](../../../common/namespaces/Authorizations/classes/Authorizations.mdx)\<[`Identity`](../../classes/Identity.mdx)\>

## Methods

### getHistoricalAuthorizations()

> **getHistoricalAuthorizations**(`opts?`: `object`): `Promise`\<[`ResultSet`](../../../types/interfaces/ResultSet.mdx)\<[`AuthorizationRequest`](../../../AuthorizationRequest/classes/AuthorizationRequest.mdx)\>\>

Defined in: [src/api/entities/common/namespaces/Authorizations.ts:150](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/common/namespaces/Authorizations.ts#L150)

Fetch all historical Authorization Requests for which this Signer is the target

#### Parameters

Parameter
Type
Description

`opts`

\{ `size?`: `BigNumber`; `start?`: `BigNumber`; `status?`: [`AuthorizationStatusEnum`](../../../../../types/enumerations/AuthorizationStatusEnum.mdx); `type?`: [`AuthTypeEnum`](../../../../../types/enumerations/AuthTypeEnum.mdx); \}

&hyphen;

`opts.size?`

`BigNumber`

page size

`opts.start?`

`BigNumber`

page offset

`opts.status?`

[`AuthorizationStatusEnum`](../../../../../types/enumerations/AuthorizationStatusEnum.mdx)

fetch only authorizations with this status. Fetches all statuses if not passed

`opts.type?`

[`AuthTypeEnum`](../../../../../types/enumerations/AuthTypeEnum.mdx)

fetch only authorizations of this type. Fetches all types if not passed

#### Returns

`Promise`\<[`ResultSet`](../../../types/interfaces/ResultSet.mdx)\<[`AuthorizationRequest`](../../../AuthorizationRequest/classes/AuthorizationRequest.mdx)\>\>

#### Note

supports pagination

#### Note

uses the middlewareV2

#### Inherited from

[`Authorizations`](../../../common/namespaces/Authorizations/classes/Authorizations.mdx).[`getHistoricalAuthorizations`](../../../common/namespaces/Authorizations/classes/Authorizations.mdx#gethistoricalauthorizations)

***

### getOne()

> **getOne**(`args`: `object`): `Promise`\<[`AuthorizationRequest`](../../../AuthorizationRequest/classes/AuthorizationRequest.mdx)\>

Defined in: [src/api/entities/Identity/IdentityAuthorizations.ts:60](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Identity/IdentityAuthorizations.ts#L60)

Retrieve a single Authorization Request targeting or issued by this Identity by its ID

#### Parameters

Parameter
Type

`args`

\{ `id`: `BigNumber`; \}

`args.id`

`BigNumber`

#### Returns

`Promise`\<[`AuthorizationRequest`](../../../AuthorizationRequest/classes/AuthorizationRequest.mdx)\>

#### Throws

if there is no Authorization Request with the passed ID targeting or issued by this Identity

#### Overrides

[`Authorizations`](../../../common/namespaces/Authorizations/classes/Authorizations.mdx).[`getOne`](../../../common/namespaces/Authorizations/classes/Authorizations.mdx#getone)

***

### getReceived()

> **getReceived**(`opts?`: `object`): `Promise`\<[`AuthorizationRequest`](../../../AuthorizationRequest/classes/AuthorizationRequest.mdx)[]\>

Defined in: [src/api/entities/common/namespaces/Authorizations.ts:42](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/common/namespaces/Authorizations.ts#L42)

Fetch all pending Authorization Requests for which this Signer is the target

#### Parameters

Parameter
Type
Description

`opts?`

\{ `includeExpired?`: `boolean`; `type?`: [`AuthorizationType`](../../../types/enumerations/AuthorizationType.mdx); \}

&hyphen;

`opts.includeExpired?`

`boolean`

whether to include expired authorizations. Defaults to true

`opts.type?`

[`AuthorizationType`](../../../types/enumerations/AuthorizationType.mdx)

fetch only authorizations of this type. Fetches all types if not passed

#### Returns

`Promise`\<[`AuthorizationRequest`](../../../AuthorizationRequest/classes/AuthorizationRequest.mdx)[]\>

#### Inherited from

[`Authorizations`](../../../common/namespaces/Authorizations/classes/Authorizations.mdx).[`getReceived`](../../../common/namespaces/Authorizations/classes/Authorizations.mdx#getreceived)

***

### getSent()

> **getSent**(`paginationOpts?`: [`PaginationOptions`](../../../types/interfaces/PaginationOptions.mdx)): `Promise`\<[`ResultSet`](../../../types/interfaces/ResultSet.mdx)\<[`AuthorizationRequest`](../../../AuthorizationRequest/classes/AuthorizationRequest.mdx)\>\>

Defined in: [src/api/entities/Identity/IdentityAuthorizations.ts:18](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Identity/IdentityAuthorizations.ts#L18)

Fetch all pending authorization requests issued by this Identity

#### Parameters

Parameter
Type

`paginationOpts?`

[`PaginationOptions`](../../../types/interfaces/PaginationOptions.mdx)

#### Returns

`Promise`\<[`ResultSet`](../../../types/interfaces/ResultSet.mdx)\<[`AuthorizationRequest`](../../../AuthorizationRequest/classes/AuthorizationRequest.mdx)\>\>

#### Note

supports pagination
