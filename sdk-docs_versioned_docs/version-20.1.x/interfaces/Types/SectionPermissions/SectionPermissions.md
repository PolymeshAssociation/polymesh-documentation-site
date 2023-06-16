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
| `T` |  |

## Hierarchy

- **`SectionPermissions`**

  ↳ [`TransactionPermissions`](../TransactionPermissions/TransactionPermissions.md)

## Properties

### type

• **type**: [`PermissionType`](../../../enums/Types/PermissionType/PermissionType.md)

Whether the permissions are inclusive or exclusive

#### Defined in

[types/index.ts:935](https://github.com/F-OBrien/polymesh-sdk/blob/012f1745/src/types/index.ts#L935)

___

### values

• **values**: `T`[]

Values to be included/excluded

#### Defined in

[types/index.ts:931](https://github.com/F-OBrien/polymesh-sdk/blob/012f1745/src/types/index.ts#L931)
