---
id: "TransactionPermissions"
title: "Interface: TransactionPermissions"
sidebar_label: "TransactionPermissions"
---

[types](../../../modules/Types/Types.md).TransactionPermissions

Permissions related to Transactions. Can include/exclude individual transactions or entire modules

## Hierarchy

- [`SectionPermissions`](../SectionPermissions/SectionPermissions.md)<[`TxTag`](../../../modules/Generated/Types/Types.md#txtag) \| [`ModuleName`](../../../enums/Generated/Types/ModuleName/ModuleName.md)\>

  ↳ **`TransactionPermissions`**

## Properties

### exceptions

• `Optional` **exceptions**: [`TxTag`](../../../modules/Generated/Types/Types.md#txtag)[]

Transactions to be exempted from inclusion/exclusion. This allows more granularity when
  setting permissions. For example, let's say we want to include only the `asset` and `staking` modules,
  but exclude the `asset.registerTicker` transaction. We could add both modules to `values`, and add
  `TxTags.asset.registerTicker` to `exceptions`

#### Defined in

[types/index.ts:969](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95f248df/src/types/index.ts#L969)

___

### type

• **type**: [`PermissionType`](../../../enums/Types/PermissionType/PermissionType.md)

Whether the permissions are inclusive or exclusive

#### Inherited from

[SectionPermissions](../SectionPermissions/SectionPermissions.md).[type](../SectionPermissions/SectionPermissions.md#type)

#### Defined in

[types/index.ts:956](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95f248df/src/types/index.ts#L956)

___

### values

• **values**: ([`TxTag`](../../../modules/Generated/Types/Types.md#txtag) \| [`ModuleName`](../../../enums/Generated/Types/ModuleName/ModuleName.md))[]

Values to be included/excluded

#### Inherited from

[SectionPermissions](../SectionPermissions/SectionPermissions.md).[values](../SectionPermissions/SectionPermissions.md#values)

#### Defined in

[types/index.ts:952](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95f248df/src/types/index.ts#L952)
