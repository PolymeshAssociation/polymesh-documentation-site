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

[types/index.ts:964](https://github.com/PolymeshAssociation/polymesh-sdk/blob/de58d40fd/src/types/index.ts#L964)

___

### values

• **values**: `T`[]

Values to be included/excluded

#### Defined in

[types/index.ts:960](https://github.com/PolymeshAssociation/polymesh-sdk/blob/de58d40fd/src/types/index.ts#L960)
