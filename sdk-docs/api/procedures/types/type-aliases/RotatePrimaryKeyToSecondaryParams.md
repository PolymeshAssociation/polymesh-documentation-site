# Type Alias: RotatePrimaryKeyToSecondaryParams

> > **RotatePrimaryKeyToSecondaryParams** = `object`

# Type Alias: RotatePrimaryKeyToSecondaryParams

> **RotatePrimaryKeyToSecondaryParams** = `object`

Defined in: [src/api/procedures/types.ts:1016](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/procedures/types.ts#L1016)

## Properties

Property
Type
Description
Defined in

 `expiry?`

`Date`

(optional) when the generated authorization should expire

[src/api/procedures/types.ts:1025](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/procedures/types.ts#L1025)

 `permissions`

[`PermissionsLike`](../../../entities/types/type-aliases/PermissionsLike.mdx)

&hyphen;

[src/api/procedures/types.ts:1017](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/procedures/types.ts#L1017)

 `targetAccount`

`string` \| [`Account`](../../../entities/Account/classes/Account.mdx)

The Account that should function as the primary key of the newly created Identity. Can be ss58 encoded address or an instance of Account

[src/api/procedures/types.ts:1021](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/procedures/types.ts#L1021)
