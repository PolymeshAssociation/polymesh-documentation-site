---
id: "SimplePermissions"
title: "Interface: SimplePermissions"
sidebar_label: "SimplePermissions"
---

[types](../../../modules/Types/Types.md).SimplePermissions

This represents positive permissions (i.e. only "includes"). It is used
  for specifying procedure requirements and querying if an Account has certain
  permissions. Null values represent full permissions in that category

## Properties

### assets

• `Optional` **assets**: ``null`` \| [`BaseAsset`](../../../classes/API/Entities/Asset/Base/BaseAsset/BaseAsset.md)[]

list of required Asset permissions

#### Defined in

[types/index.ts:1058](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2c78f6c34/src/types/index.ts#L1058)

___

### portfolios

• `Optional` **portfolios**: ``null`` \| ([`NumberedPortfolio`](../../../classes/API/Entities/NumberedPortfolio/NumberedPortfolio.md) \| [`DefaultPortfolio`](../../../classes/API/Entities/DefaultPortfolio/DefaultPortfolio.md))[]

#### Defined in

[types/index.ts:1064](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2c78f6c34/src/types/index.ts#L1064)

___

### transactions

• `Optional` **transactions**: ``null`` \| [`TxTag`](../../../modules/Generated/Types/Types.md#txtag)[]

list of required Transaction permissions

#### Defined in

[types/index.ts:1062](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2c78f6c34/src/types/index.ts#L1062)
