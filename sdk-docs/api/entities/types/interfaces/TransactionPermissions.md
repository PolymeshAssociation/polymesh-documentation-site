# Interface: TransactionPermissions

> Defined in: [src/api/entities/types.ts:656](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/types.ts#L656)

# Interface: TransactionPermissions

Defined in: [src/api/entities/types.ts:656](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/types.ts#L656)

Permissions related to Transactions. Can include/exclude individual transactions or entire modules

## Extends

- [`SectionPermissions`](SectionPermissions.mdx)\<[`TxTag`](../../../../types/type-aliases/TxTag.mdx) \| [`ModuleName`](../../../../types/enumerations/ModuleName.mdx)\>

## Properties

### exceptions?

> `optional` **exceptions?**: [`TxTag`](../../../../types/type-aliases/TxTag.mdx)[]

Defined in: [src/api/entities/types.ts:663](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/types.ts#L663)

Transactions to be exempted from inclusion/exclusion. This allows more granularity when
  setting permissions. For example, let's say we want to include only the `asset` and `staking` modules,
  but exclude the `asset.registerUniqueTicker` transaction. We could add both modules to `values`, and add
  `TxTags.asset.RegisterUniqueTicker` to `exceptions`

***

### type

> **type**: [`PermissionType`](../enumerations/PermissionType.mdx)

Defined in: [src/api/entities/types.ts:650](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/types.ts#L650)

Whether the permissions are inclusive or exclusive

#### Inherited from

[`SectionPermissions`](SectionPermissions.mdx).[`type`](SectionPermissions.mdx#type)

***

### values

> **values**: ([`TxTag`](../../../../types/type-aliases/TxTag.mdx) \| [`ModuleName`](../../../../types/enumerations/ModuleName.mdx))[]

Defined in: [src/api/entities/types.ts:646](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/types.ts#L646)

Values to be included/excluded

#### Inherited from

[`SectionPermissions`](SectionPermissions.mdx).[`values`](SectionPermissions.mdx#values)
