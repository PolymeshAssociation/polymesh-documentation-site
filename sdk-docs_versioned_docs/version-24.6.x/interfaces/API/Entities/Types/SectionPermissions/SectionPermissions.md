---
id: "SectionPermissions"
title: "Interface: SectionPermissions<T>"
sidebar_label: "SectionPermissions"
---

[api/entities/types](../../../../../modules/API/Entities/Types/Types.md).SectionPermissions

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

• **type**: [`PermissionType`](../../../../../enums/API/Entities/Types/PermissionType/PermissionType.md)

Whether the permissions are inclusive or exclusive

#### Defined in

[api/entities/types.ts:613](https://github.com/PolymeshAssociation/polymesh-sdk/blob/654b99c8d/src/api/entities/types.ts#L613)

___

### values

• **values**: `T`[]

Values to be included/excluded

#### Defined in

[api/entities/types.ts:609](https://github.com/PolymeshAssociation/polymesh-sdk/blob/654b99c8d/src/api/entities/types.ts#L609)
