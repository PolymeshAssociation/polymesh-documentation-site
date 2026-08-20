# Interface: AttestPrimaryKeyRotationParams

> Defined in: [src/api/procedures/types.ts:987](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/procedures/types.ts#L987)

# Interface: AttestPrimaryKeyRotationParams

Defined in: [src/api/procedures/types.ts:987](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/procedures/types.ts#L987)

## Properties

### expiry?

> `optional` **expiry?**: `Date`

Defined in: [src/api/procedures/types.ts:1001](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/procedures/types.ts#L1001)

(optional) when the generated authorization should expire

***

### identity

> **identity**: `string` \| [`Identity`](../../../entities/Identity/classes/Identity.mdx)

Defined in: [src/api/procedures/types.ts:996](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/procedures/types.ts#L996)

Identity or the DID of the Identity that is to be rotated

***

### targetAccount

> **targetAccount**: `string` \| [`Account`](../../../entities/Account/classes/Account.mdx)

Defined in: [src/api/procedures/types.ts:991](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/procedures/types.ts#L991)

The Account that will be attested to become the primary key of the `identity`. Can be ss58 encoded address or an instance of Account
