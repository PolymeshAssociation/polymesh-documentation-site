---
id: "Permissions"
title: "Interface: Permissions"
sidebar_label: "Permissions"
---

[types](../../../modules/Types/Types.md).Permissions

Permissions a Secondary Key has over the Identity. A null value means the key has
  all permissions of that type (e.g. if `assets` is null, the key has permissions over all
  of the Identity's Assets)

## Properties

### assets

• **assets**: ``null`` \| [`SectionPermissions`](../SectionPermissions/SectionPermissions.md)<[`FungibleAsset`](../../../classes/API/Entities/Asset/Fungible/FungibleAsset.md)\>

Assets over which this key has permissions

#### Defined in

[types/index.ts:998](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b6f9fb883/src/types/index.ts#L998)

___

### portfolios

• **portfolios**: ``null`` \| [`SectionPermissions`](../SectionPermissions/SectionPermissions.md)<[`NumberedPortfolio`](../../../classes/API/Entities/NumberedPortfolio/NumberedPortfolio.md) \| [`DefaultPortfolio`](../../../classes/API/Entities/DefaultPortfolio/DefaultPortfolio.md)\>

#### Defined in

[types/index.ts:1012](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b6f9fb883/src/types/index.ts#L1012)

___

### transactionGroups

• **transactionGroups**: [`TxGroup`](../../../enums/Types/TxGroup/TxGroup.md)[]

list of Transaction Groups this key can execute. Having permissions over a TxGroup
  means having permissions over every TxTag in said group. Partial group permissions are not
  covered by this value. For a full picture of transaction permissions, see the `transactions` property

NOTE: If transactions is null, ignore this value

#### Defined in

[types/index.ts:1010](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b6f9fb883/src/types/index.ts#L1010)

___

### transactions

• **transactions**: ``null`` \| [`TransactionPermissions`](../TransactionPermissions/TransactionPermissions.md)

Transactions this key can execute

#### Defined in

[types/index.ts:1002](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b6f9fb883/src/types/index.ts#L1002)
