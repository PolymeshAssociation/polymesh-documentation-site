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

[types/index.ts:994](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2c78f6c34/src/types/index.ts#L994)

___

### values

• **values**: `T`[]

Values to be included/excluded

#### Defined in

[types/index.ts:990](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2c78f6c34/src/types/index.ts#L990)
