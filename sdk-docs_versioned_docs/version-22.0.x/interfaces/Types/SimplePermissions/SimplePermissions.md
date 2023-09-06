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

• `Optional` **assets**: ``null`` \| [`Asset`](../../../classes/API/Entities/Asset/Asset.md)[]

list of required Asset permissions

#### Defined in

[types/index.ts:1020](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95f248df/src/types/index.ts#L1020)

___

### portfolios

• `Optional` **portfolios**: ``null`` \| ([`NumberedPortfolio`](../../../classes/API/Entities/NumberedPortfolio/NumberedPortfolio.md) \| [`DefaultPortfolio`](../../../classes/API/Entities/DefaultPortfolio/DefaultPortfolio.md))[]

#### Defined in

[types/index.ts:1026](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95f248df/src/types/index.ts#L1026)

___

### transactions

• `Optional` **transactions**: ``null`` \| [`TxTag`](../../../modules/Generated/Types/Types.md#txtag)[]

list of required Transaction permissions

#### Defined in

[types/index.ts:1024](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95f248df/src/types/index.ts#L1024)
