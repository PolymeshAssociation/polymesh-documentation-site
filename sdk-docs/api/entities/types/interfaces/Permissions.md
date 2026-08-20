# Interface: Permissions

> Defined in: [src/api/entities/types.ts:671](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/types.ts#L671)

# Interface: Permissions

Defined in: [src/api/entities/types.ts:671](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/types.ts#L671)

Permissions a Secondary Key has over the Identity. A null value means the key has
  all permissions of that type (e.g. if `assets` is null, the key has permissions over all
  of the Identity's Assets)

## Properties

### assets

> **assets**: [`SectionPermissions`](SectionPermissions.mdx)\<[`FungibleAsset`](../../Asset/Fungible/classes/FungibleAsset.mdx)\> \| `null`

Defined in: [src/api/entities/types.ts:675](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/types.ts#L675)

Assets over which this key has permissions

***

### portfolios

> **portfolios**: [`SectionPermissions`](SectionPermissions.mdx)\<[`DefaultPortfolio`](../../DefaultPortfolio/classes/DefaultPortfolio.mdx) \| [`NumberedPortfolio`](../../NumberedPortfolio/classes/NumberedPortfolio.mdx)\> \| `null`

Defined in: [src/api/entities/types.ts:689](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/types.ts#L689)

***

### transactionGroups

> **transactionGroups**: [`TxGroup`](../../../procedures/types/enumerations/TxGroup.mdx)[]

Defined in: [src/api/entities/types.ts:687](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/types.ts#L687)

list of Transaction Groups this key can execute. Having permissions over a TxGroup
  means having permissions over every TxTag in said group. Partial group permissions are not
  covered by this value. For a full picture of transaction permissions, see the `transactions` property

NOTE: If transactions is null, ignore this value

***

### transactions

> **transactions**: [`TransactionPermissions`](TransactionPermissions.mdx) \| `null`

Defined in: [src/api/entities/types.ts:679](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/types.ts#L679)

Transactions this key can execute
