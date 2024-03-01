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

- `Namespace`\<`Parent`\>

  ↳ **`Authorizations`**

  ↳↳ [`IdentityAuthorizations`](../../../Identity/IdentityAuthorizations/IdentityAuthorizations.md)

## Methods

### getOne

▸ **getOne**(`args`): `Promise`\<[`AuthorizationRequest`](../../../AuthorizationRequest/AuthorizationRequest.md)\>

Retrieve a single Authorization Request targeting this Signer by its ID

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.id` | `BigNumber` |

#### Returns

`Promise`\<[`AuthorizationRequest`](../../../AuthorizationRequest/AuthorizationRequest.md)\>

**`Throws`**

if there is no Authorization Request with the passed ID targeting this Signer

#### Defined in

[api/entities/common/namespaces/Authorizations.ts:65](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/common/namespaces/Authorizations.ts#L65)

___

### getReceived

▸ **getReceived**(`opts?`): `Promise`\<[`AuthorizationRequest`](../../../AuthorizationRequest/AuthorizationRequest.md)[]\>

Fetch all pending Authorization Requests for which this Signer is the target

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `Object` | - |
| `opts.includeExpired?` | `boolean` | whether to include expired authorizations. Defaults to true |
| `opts.type?` | [`AuthorizationType`](../../../../../../enums/Types/AuthorizationType/AuthorizationType.md) | fetch only authorizations of this type. Fetches all types if not passed |

#### Returns

`Promise`\<[`AuthorizationRequest`](../../../AuthorizationRequest/AuthorizationRequest.md)[]\>

#### Defined in

[api/entities/common/namespaces/Authorizations.ts:29](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/common/namespaces/Authorizations.ts#L29)
