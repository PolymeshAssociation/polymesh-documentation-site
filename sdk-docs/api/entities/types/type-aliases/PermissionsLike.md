# Type Alias: PermissionsLike

> > **PermissionsLike** = `object` & \{ `transactions?`: [`TransactionPermissions`](../interfaces/TransactionPermissions.mdx) \| `null`; \} \| \{ `transactionGroups?`: [`TxGroup`](../../../procedures/types/enumerations/TxGroup.mdx)[]; \}

# Type Alias: PermissionsLike

> **PermissionsLike** = `object` & \{ `transactions?`: [`TransactionPermissions`](../interfaces/TransactionPermissions.mdx) \| `null`; \} \| \{ `transactionGroups?`: [`TxGroup`](../../../procedures/types/enumerations/TxGroup.mdx)[]; \}

Defined in: [src/api/entities/types.ts:831](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/types.ts#L831)

Permissions to grant to a Signer over an Identity

[Permissions](../interfaces/Permissions.mdx)

## Type Declaration

Name
Type
Description
Defined in

`assets?`

[`SectionPermissions`](../interfaces/SectionPermissions.mdx)\<`string` \| [`FungibleAsset`](FungibleAsset.mdx)\> \| `null`

Assets on which to grant permissions. A null value represents full permissions

[src/api/entities/types.ts:835](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/types.ts#L835)

`portfolios?`

[`SectionPermissions`](../interfaces/SectionPermissions.mdx)\<[`PortfolioLike`](PortfolioLike.mdx)\> \| `null`

Portfolios on which to grant permissions. A null value represents full permissions

[src/api/entities/types.ts:839](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/types.ts#L839)

## Note

TxGroups in the `transactionGroups` array will be transformed into their corresponding `TxTag`s
