---
id: 'Permissions'
title: 'Interface: Permissions'
sidebar_label: 'Permissions'
---

[api/entities/types](../../../../../modules/API/Entities/Types/Types.md).Permissions

Permissions a Secondary Key has over the Identity. A null value means the key has
all permissions of that type (e.g. if `assets` is null, the key has permissions over all
of the Identity's Assets)

## Properties

### assets

• **assets**: `null` \| [`SectionPermissions`](../SectionPermissions/SectionPermissions.md) \<[`FungibleAsset`](../../../../../classes/API/Entities/Asset/Fungible/FungibleAsset.md)\>

Assets over which this key has permissions

#### Defined in

[api/entities/types.ts:638](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fedc4714f/src/api/entities/types.ts#L638)

---

### portfolios

• **portfolios**: `null` \| [`SectionPermissions`](../SectionPermissions/SectionPermissions.md) \<[`NumberedPortfolio`](../../../../../classes/API/Entities/NumberedPortfolio/NumberedPortfolio.md) \| [`DefaultPortfolio`](../../../../../classes/API/Entities/DefaultPortfolio/DefaultPortfolio.md)\>

#### Defined in

[api/entities/types.ts:652](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fedc4714f/src/api/entities/types.ts#L652)

---

### transactionGroups

• **transactionGroups**: [`TxGroup`](../../../../../enums/API/Procedures/Types/TxGroup/TxGroup.md)[]

list of Transaction Groups this key can execute. Having permissions over a TxGroup
means having permissions over every TxTag in said group. Partial group permissions are not
covered by this value. For a full picture of transaction permissions, see the `transactions` property

NOTE: If transactions is null, ignore this value

#### Defined in

[api/entities/types.ts:650](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fedc4714f/src/api/entities/types.ts#L650)

---

### transactions

• **transactions**: `null` \| [`TransactionPermissions`](../TransactionPermissions/TransactionPermissions.md)

Transactions this key can execute

#### Defined in

[api/entities/types.ts:642](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fedc4714f/src/api/entities/types.ts#L642)
