# Interface: SetPermissionGroupParams

> Defined in: [src/api/procedures/types.ts:1775](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/procedures/types.ts#L1775)

# Interface: SetPermissionGroupParams

Defined in: [src/api/procedures/types.ts:1775](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/procedures/types.ts#L1775)

This procedure can be called with:
  - An Asset's existing Custom Permission Group. The Identity will be assigned as an Agent of that Group for that Asset
  - A Known Permission Group and an Asset. The Identity will be assigned as an Agent of that Group for that Asset
  - A set of Transaction Permissions and an Asset. If there is no Custom Permission Group with those permissions, a Custom Permission Group will be created for that Asset with those permissions, and
    the Identity will be assigned as an Agent of that Group for that Asset. Otherwise, the existing Group will be used
  - An array of [Agent Transaction Groups](../type-aliases/AgentTxGroup.mdx) that represent a set of permissions. If there is no Custom Permission Group with those permissions, a Custom Permission Group will be created with those permissions, and
    the Identity will be assigned as an Agent of that Group for that Asset. Otherwise, the existing Group will be used

## Properties

### group

> **group**: [`CustomPermissionGroup`](../../../entities/CustomPermissionGroup/classes/CustomPermissionGroup.mdx) \| [`KnownPermissionGroup`](../../../entities/KnownPermissionGroup/classes/KnownPermissionGroup.mdx) \| [`TransactionsParams`](TransactionsParams.mdx) \| [`TxGroupParams`](TxGroupParams.mdx)

Defined in: [src/api/procedures/types.ts:1776](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/procedures/types.ts#L1776)
