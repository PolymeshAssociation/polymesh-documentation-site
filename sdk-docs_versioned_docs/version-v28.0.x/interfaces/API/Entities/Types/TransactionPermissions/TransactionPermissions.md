---
id: "TransactionPermissions"
title: "Interface: TransactionPermissions"
sidebar_label: "TransactionPermissions"
---

[api/entities/types](../../../../../modules/API/Entities/Types/Types.md).TransactionPermissions

Permissions related to Transactions. Can include/exclude individual transactions or entire modules

## Hierarchy

- [`SectionPermissions`](../SectionPermissions/SectionPermissions.md)\<`TxTag` \| `ModuleName`\>

  ↳ **`TransactionPermissions`**

## Properties

### exceptions

• `Optional` **exceptions**: `TxTag`[]

Transactions to be exempted from inclusion/exclusion. This allows more granularity when
  setting permissions. For example, let's say we want to include only the `asset` and `staking` modules,
  but exclude the `asset.registerTicker` transaction. We could add both modules to `values`, and add
  `TxTags.asset.registerTicker` to `exceptions`

#### Defined in

[api/entities/types.ts:637](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/types.ts#L637)

___

### type

• **type**: [`PermissionType`](../../../../../enums/API/Entities/Types/PermissionType/PermissionType.md)

Whether the permissions are inclusive or exclusive

#### Inherited from

[SectionPermissions](../SectionPermissions/SectionPermissions.md).[type](../SectionPermissions/SectionPermissions.md#type)

#### Defined in

[api/entities/types.ts:624](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/types.ts#L624)

___

### values

• **values**: (`TxTag` \| `ModuleName`)[]

Values to be included/excluded

#### Inherited from

[SectionPermissions](../SectionPermissions/SectionPermissions.md).[values](../SectionPermissions/SectionPermissions.md#values)

#### Defined in

[api/entities/types.ts:620](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/types.ts#L620)
