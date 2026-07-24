# Type Alias: PermissionsLike

> > **PermissionsLike** = `object` & \{ `transactions?`: [`TransactionPermissions`](../interfaces/TransactionPermissions.mdx) \| `null`; \} \| \{ `transactionGroups?`: [`TxGroup`](../../../procedures/types/enumerations/TxGroup.mdx)[]; \}

# Type Alias: PermissionsLike

> **PermissionsLike** = `object` & \{ `transactions?`: [`TransactionPermissions`](../interfaces/TransactionPermissions.mdx) \| `null`; \} \| \{ `transactionGroups?`: [`TxGroup`](../../../procedures/types/enumerations/TxGroup.mdx)[]; \}

Defined in: [src/api/entities/types.ts:847](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/types.ts#L847)

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

[src/api/entities/types.ts:851](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/types.ts#L851)

`portfolios?`

[`SectionPermissions`](../interfaces/SectionPermissions.mdx)\<[`PortfolioLike`](PortfolioLike.mdx)\> \| `null`

Portfolios on which to grant permissions. A null value represents full permissions

[src/api/entities/types.ts:855](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/types.ts#L855)

## Note

TxGroups in the `transactionGroups` array will be transformed into their corresponding `TxTag`s
