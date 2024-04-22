---
id: "SectionPermissions"
title: "Interface: SectionPermissions<T>"
sidebar_label: "SectionPermissions"
---

[types](../../../modules/Types/Types.md).SectionPermissions

Signer/agent permissions for a specific type

## Type parameters

| Name | Description |
| :------ | :------ |
| `T` | type of Permissions (Asset, Transaction, Portfolio, etc) |

## Hierarchy

- **`SectionPermissions`**

  ↳ [`TransactionPermissions`](../TransactionPermissions/TransactionPermissions.md)

## Properties

### type

• **type**: [`PermissionType`](../../../enums/Types/PermissionType/PermissionType.md)

Whether the permissions are inclusive or exclusive

#### Defined in

[types/index.ts:1000](https://github.com/PolymeshAssociation/polymesh-sdk/blob/968f8d70c/src/types/index.ts#L1000)

___

### values

• **values**: `T`[]

Values to be included/excluded

#### Defined in

[types/index.ts:996](https://github.com/PolymeshAssociation/polymesh-sdk/blob/968f8d70c/src/types/index.ts#L996)
