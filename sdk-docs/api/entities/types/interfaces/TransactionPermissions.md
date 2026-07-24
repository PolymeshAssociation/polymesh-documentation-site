# Interface: TransactionPermissions

> Defined in: [src/api/entities/types.ts:672](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/types.ts#L672)

# Interface: TransactionPermissions

Defined in: [src/api/entities/types.ts:672](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/types.ts#L672)

Permissions related to Transactions. Can include/exclude individual transactions or entire modules

## Extends

- [`SectionPermissions`](SectionPermissions.mdx)\<[`TxTag`](../../../../types/type-aliases/TxTag.mdx) \| [`ModuleName`](../../../../types/enumerations/ModuleName.mdx)\>

## Properties

### exceptions?

> `optional` **exceptions?**: [`TxTag`](../../../../types/type-aliases/TxTag.mdx)[]

Defined in: [src/api/entities/types.ts:679](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/types.ts#L679)

Transactions to be exempted from inclusion/exclusion. This allows more granularity when
  setting permissions. For example, let's say we want to include only the `asset` and `staking` modules,
  but exclude the `asset.registerTicker` transaction. We could add both modules to `values`, and add
  `TxTags.asset.registerTicker` to `exceptions`

***

### type

> **type**: [`PermissionType`](../enumerations/PermissionType.mdx)

Defined in: [src/api/entities/types.ts:666](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/types.ts#L666)

Whether the permissions are inclusive or exclusive

#### Inherited from

[`SectionPermissions`](SectionPermissions.mdx).[`type`](SectionPermissions.mdx#type)

***

### values

> **values**: ([`TxTag`](../../../../types/type-aliases/TxTag.mdx) \| [`ModuleName`](../../../../types/enumerations/ModuleName.mdx))[]

Defined in: [src/api/entities/types.ts:662](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/types.ts#L662)

Values to be included/excluded

#### Inherited from

[`SectionPermissions`](SectionPermissions.mdx).[`values`](SectionPermissions.mdx#values)
