---
id: "Authorizations"
title: "Class: Authorizations<Parent>"
sidebar_label: "Authorizations"
---

[api/entities/common/namespaces/Authorizations](../../../../../../modules/API/Entities/Common/Namespaces/Authorizations/Authorizations.md).Authorizations

Handles all Authorization related functionality

## Type parameters

| Name | Type |
| :------ | :------ |
| `Parent` | extends [`Signer`](../../../../../../modules/Types/Types.md#signer) |

## Hierarchy

- `Namespace`<`Parent`\>

  ↳ **`Authorizations`**

  ↳↳ [`IdentityAuthorizations`](../../../Identity/IdentityAuthorizations/IdentityAuthorizations.md)

## Methods

### getHistoricalAuthorizations

▸ **getHistoricalAuthorizations**(`opts?`): `Promise`<[`ResultSet`](../../../../../../interfaces/Types/ResultSet/ResultSet.md)<[`AuthorizationRequest`](../../../AuthorizationRequest/AuthorizationRequest.md)\>\>

Fetch all historical Authorization Requests for which this Signer is the target

**`Note`**

 supports pagination

**`Note`**

 uses the middlewareV2

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `Object` | - |
| `opts.size?` | `BigNumber` | page size |
| `opts.start?` | `BigNumber` | page offset |
| `opts.status?` | [`AuthorizationStatusEnum`](../../../../../../enums/Types/AuthorizationStatusEnum/AuthorizationStatusEnum.md) | fetch only authorizations with this status. Fetches all statuses if not passed |
| `opts.type?` | [`AuthTypeEnum`](../../../../../../enums/Types/AuthTypeEnum/AuthTypeEnum.md) | fetch only authorizations of this type. Fetches all types if not passed |

#### Returns

`Promise`<[`ResultSet`](../../../../../../interfaces/Types/ResultSet/ResultSet.md)<[`AuthorizationRequest`](../../../AuthorizationRequest/AuthorizationRequest.md)\>\>

___

### getOne

▸ **getOne**(`args`): `Promise`<[`AuthorizationRequest`](../../../AuthorizationRequest/AuthorizationRequest.md)\>

Retrieve a single Authorization Request targeting this Signer by its ID

**`Throws`**

 if there is no Authorization Request with the passed ID targeting this Signer

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.id` | `BigNumber` |

#### Returns

`Promise`<[`AuthorizationRequest`](../../../AuthorizationRequest/AuthorizationRequest.md)\>

___

### getReceived

▸ **getReceived**(`opts?`): `Promise`<[`AuthorizationRequest`](../../../AuthorizationRequest/AuthorizationRequest.md)[]\>

Fetch all pending Authorization Requests for which this Signer is the target

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `Object` | - |
| `opts.includeExpired?` | `boolean` | whether to include expired authorizations. Defaults to true |
| `opts.type?` | [`AuthorizationType`](../../../../../../enums/Types/AuthorizationType/AuthorizationType.md) | fetch only authorizations of this type. Fetches all types if not passed |

#### Returns

`Promise`<[`AuthorizationRequest`](../../../AuthorizationRequest/AuthorizationRequest.md)[]\>
