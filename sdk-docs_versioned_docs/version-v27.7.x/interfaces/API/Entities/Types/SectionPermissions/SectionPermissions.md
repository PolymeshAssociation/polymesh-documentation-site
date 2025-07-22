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

[api/entities/types.ts:629](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9e72221/src/api/entities/types.ts#L629)

___

### values

• **values**: `T`[]

Values to be included/excluded

#### Defined in

[api/entities/types.ts:625](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9e72221/src/api/entities/types.ts#L625)
