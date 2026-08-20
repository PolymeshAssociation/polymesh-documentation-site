# Interface: CheckPermissionsResult\<Type\>

> Defined in: [src/api/entities/types.ts:746](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/types.ts#L746)

# Interface: CheckPermissionsResult\

Defined in: [src/api/entities/types.ts:746](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/types.ts#L746)

Result of a `checkPermissions` call. If `Type` is `Account`, represents whether the Account
  has all the necessary secondary key Permissions. If `Type` is `Identity`, represents whether the
  Identity has all the necessary external agent Permissions

## Type Parameters

Type Parameter

`Type` *extends* [`SignerType`](../enumerations/SignerType.mdx)

## Properties

### message?

> `optional` **message?**: `string`

Defined in: [src/api/entities/types.ts:758](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/types.ts#L758)

optional message explaining the reason for failure in special cases

***

### missingPermissions?

> `optional` **missingPermissions?**: `Type` *extends* [`Account`](../enumerations/SignerType.mdx#account) ? [`SimplePermissions`](SimplePermissions.mdx) : [`TxTag`](../../../../types/type-aliases/TxTag.mdx)[] \| `null`

Defined in: [src/api/entities/types.ts:750](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/types.ts#L750)

required permissions which the signer *DOESN'T* have. Only present if `result` is `false`

***

### result

> **result**: `boolean`

Defined in: [src/api/entities/types.ts:754](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/types.ts#L754)

whether the signer complies with the required permissions or not
