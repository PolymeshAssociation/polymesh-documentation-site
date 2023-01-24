[types](../../Modules/Types/Types.md).SectionPermissions

Signer/agent permissions for a specific type

## Type parameters

| Name | Description |
| :------ | :------ |
| `T` | type of Permissions (Asset, Transaction, Portfolio, etc) |

## Hierarchy

- **`SectionPermissions`**

  ↳ [`TransactionPermissions`](TransactionPermissions.md)

## Properties

### type

• **type**: [`PermissionType`](../../Enums/Types/PermissionType.md)

Whether the permissions are inclusive or exclusive

#### Defined in

[types/index.ts:932](https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/types/index.ts#L932)

___

### values

• **values**: `T`[]

Values to be included/excluded

#### Defined in

[types/index.ts:928](https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/types/index.ts#L928)
