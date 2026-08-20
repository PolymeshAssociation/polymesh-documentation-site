# Interface: CheckRolesResult

> Defined in: [src/api/entities/types.ts:726](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/types.ts#L726)

# Interface: CheckRolesResult

Defined in: [src/api/entities/types.ts:726](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/types.ts#L726)

Result of a `checkRoles` call

## Properties

### message?

> `optional` **message?**: `string`

Defined in: [src/api/entities/types.ts:738](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/types.ts#L738)

optional message explaining the reason for failure in special cases

***

### missingRoles?

> `optional` **missingRoles?**: [`Role`](../../../procedures/types/type-aliases/Role.mdx)[]

Defined in: [src/api/entities/types.ts:730](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/types.ts#L730)

required roles which the Identity *DOESN'T* have. Only present if `result` is `false`

***

### result

> **result**: `boolean`

Defined in: [src/api/entities/types.ts:734](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/types.ts#L734)

whether the signer possesses all the required roles or not
