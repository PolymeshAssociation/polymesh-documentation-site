[api/entities/Identity/IdentityAuthorizations](../../../../../Modules/API/Entities/Identity/IdentityAuthorizations.md).IdentityAuthorizations

Handles all Identity Authorization related functionality

## Hierarchy

- [`Authorizations`](../../Common/Namespaces/Authorizations/Authorizations.md)<[`Identity`](../Identity.md)\>

  ↳ **`IdentityAuthorizations`**

## Methods

### getOne

▸ **getOne**(`args`): `Promise`<[`AuthorizationRequest`](../../AuthorizationRequest/AuthorizationRequest.md)\>

Retrieve a single Authorization Request targeting or issued by this Identity by its ID

**`Throws`**

if there is no Authorization Request with the passed ID targeting or issued by this Identity

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.id` | `BigNumber` |

#### Returns

`Promise`<[`AuthorizationRequest`](../../AuthorizationRequest/AuthorizationRequest.md)\>

#### Overrides

[Authorizations](../../Common/Namespaces/Authorizations/Authorizations.md).[getOne](../../Common/Namespaces/Authorizations/Authorizations.md#getone)

___

### getReceived

▸ **getReceived**(`opts?`): `Promise`<[`AuthorizationRequest`](../../AuthorizationRequest/AuthorizationRequest.md)[]\>

Fetch all pending Authorization Requests for which this Signer is the target

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `Object` | - |
| `opts.includeExpired?` | `boolean` | whether to include expired authorizations. Defaults to true |
| `opts.type?` | [`AuthorizationType`](../../../../../Enums/Types/AuthorizationType.md) | fetch only authorizations of this type. Fetches all types if not passed |

#### Returns

`Promise`<[`AuthorizationRequest`](../../AuthorizationRequest/AuthorizationRequest.md)[]\>

#### Inherited from

[Authorizations](../../Common/Namespaces/Authorizations/Authorizations.md).[getReceived](../../Common/Namespaces/Authorizations/Authorizations.md#getreceived)

___

### getSent

▸ **getSent**(`paginationOpts?`): `Promise`<[`ResultSet`](../../../../../Interfaces/Types/ResultSet.md)<[`AuthorizationRequest`](../../AuthorizationRequest/AuthorizationRequest.md)\>\>

Fetch all pending authorization requests issued by this Identity

**`Note`**

supports pagination

#### Parameters

| Name | Type |
| :------ | :------ |
| `paginationOpts?` | [`PaginationOptions`](../../../../../Interfaces/Types/PaginationOptions.md) |

#### Returns

`Promise`<[`ResultSet`](../../../../../Interfaces/Types/ResultSet.md)<[`AuthorizationRequest`](../../AuthorizationRequest/AuthorizationRequest.md)\>\>
