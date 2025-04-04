---
id: "IdentityAuthorizations"
title: "Class: IdentityAuthorizations"
sidebar_label: "IdentityAuthorizations"
---

[api/entities/Identity/IdentityAuthorizations](../../../../../modules/API/Entities/Identity/IdentityAuthorizations/IdentityAuthorizations.md).IdentityAuthorizations

Handles all Identity Authorization related functionality

## Hierarchy

- [`Authorizations`](../../Common/Namespaces/Authorizations/Authorizations.md)\<[`Identity`](../Identity.md)\>

  ↳ **`IdentityAuthorizations`**

## Methods

### getHistoricalAuthorizations

▸ **getHistoricalAuthorizations**(`opts?`): `Promise`\<[`ResultSet`](../../../../../interfaces/API/Entities/Types/ResultSet/ResultSet.md)\<[`AuthorizationRequest`](../../AuthorizationRequest/AuthorizationRequest.md)\>\>

Fetch all historical Authorization Requests for which this Signer is the target

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `Object` | - |
| `opts.size?` | `BigNumber` | page size |
| `opts.start?` | `BigNumber` | page offset |
| `opts.status?` | [`AuthorizationStatusEnum`](../../../../../enums/Types/AuthorizationStatusEnum/AuthorizationStatusEnum.md) | fetch only authorizations with this status. Fetches all statuses if not passed |
| `opts.type?` | [`AuthTypeEnum`](../../../../../enums/Types/AuthTypeEnum/AuthTypeEnum.md) | fetch only authorizations of this type. Fetches all types if not passed |

#### Returns

`Promise`\<[`ResultSet`](../../../../../interfaces/API/Entities/Types/ResultSet/ResultSet.md)\<[`AuthorizationRequest`](../../AuthorizationRequest/AuthorizationRequest.md)\>\>

**`Note`**

supports pagination

**`Note`**

uses the middlewareV2

#### Inherited from

[Authorizations](../../Common/Namespaces/Authorizations/Authorizations.md).[getHistoricalAuthorizations](../../Common/Namespaces/Authorizations/Authorizations.md#gethistoricalauthorizations)

#### Defined in

[api/entities/common/namespaces/Authorizations.ts:150](https://github.com/PolymeshAssociation/polymesh-sdk/blob/49a0066c3/src/api/entities/common/namespaces/Authorizations.ts#L150)

___

### getOne

▸ **getOne**(`args`): `Promise`\<[`AuthorizationRequest`](../../AuthorizationRequest/AuthorizationRequest.md)\>

Retrieve a single Authorization Request targeting or issued by this Identity by its ID

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.id` | `BigNumber` |

#### Returns

`Promise`\<[`AuthorizationRequest`](../../AuthorizationRequest/AuthorizationRequest.md)\>

**`Throws`**

if there is no Authorization Request with the passed ID targeting or issued by this Identity

#### Overrides

[Authorizations](../../Common/Namespaces/Authorizations/Authorizations.md).[getOne](../../Common/Namespaces/Authorizations/Authorizations.md#getone)

#### Defined in

[api/entities/Identity/IdentityAuthorizations.ts:60](https://github.com/PolymeshAssociation/polymesh-sdk/blob/49a0066c3/src/api/entities/Identity/IdentityAuthorizations.ts#L60)

___

### getReceived

▸ **getReceived**(`opts?`): `Promise`\<[`AuthorizationRequest`](../../AuthorizationRequest/AuthorizationRequest.md)[]\>

Fetch all pending Authorization Requests for which this Signer is the target

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `Object` | - |
| `opts.includeExpired?` | `boolean` | whether to include expired authorizations. Defaults to true |
| `opts.type?` | [`AuthorizationType`](../../../../../enums/API/Entities/Types/AuthorizationType/AuthorizationType.md) | fetch only authorizations of this type. Fetches all types if not passed |

#### Returns

`Promise`\<[`AuthorizationRequest`](../../AuthorizationRequest/AuthorizationRequest.md)[]\>

#### Inherited from

[Authorizations](../../Common/Namespaces/Authorizations/Authorizations.md).[getReceived](../../Common/Namespaces/Authorizations/Authorizations.md#getreceived)

#### Defined in

[api/entities/common/namespaces/Authorizations.ts:42](https://github.com/PolymeshAssociation/polymesh-sdk/blob/49a0066c3/src/api/entities/common/namespaces/Authorizations.ts#L42)

___

### getSent

▸ **getSent**(`paginationOpts?`): `Promise`\<[`ResultSet`](../../../../../interfaces/API/Entities/Types/ResultSet/ResultSet.md)\<[`AuthorizationRequest`](../../AuthorizationRequest/AuthorizationRequest.md)\>\>

Fetch all pending authorization requests issued by this Identity

#### Parameters

| Name | Type |
| :------ | :------ |
| `paginationOpts?` | [`PaginationOptions`](../../../../../interfaces/API/Entities/Types/PaginationOptions/PaginationOptions.md) |

#### Returns

`Promise`\<[`ResultSet`](../../../../../interfaces/API/Entities/Types/ResultSet/ResultSet.md)\<[`AuthorizationRequest`](../../AuthorizationRequest/AuthorizationRequest.md)\>\>

**`Note`**

supports pagination

#### Defined in

[api/entities/Identity/IdentityAuthorizations.ts:18](https://github.com/PolymeshAssociation/polymesh-sdk/blob/49a0066c3/src/api/entities/Identity/IdentityAuthorizations.ts#L18)
