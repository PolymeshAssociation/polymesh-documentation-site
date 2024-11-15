---
id: "SimplePermissions"
title: "Interface: SimplePermissions"
sidebar_label: "SimplePermissions"
---

[api/entities/types](../../../../../modules/API/Entities/Types/Types.md).SimplePermissions

This represents positive permissions (i.e. only "includes"). It is used
  for specifying procedure requirements and querying if an Account has certain
  permissions. Null values represent full permissions in that category

## Properties

### assets

• `Optional` **assets**: ``null`` \| [`BaseAsset`](../../../../../classes/API/Entities/Asset/Base/BaseAsset/BaseAsset.md)[]

list of required Asset permissions

#### Defined in

[api/entities/types.ts:685](https://github.com/PolymeshAssociation/polymesh-sdk/blob/3cc570ade/src/api/entities/types.ts#L685)

___

### portfolios

• `Optional` **portfolios**: ``null`` \| ([`NumberedPortfolio`](../../../../../classes/API/Entities/NumberedPortfolio/NumberedPortfolio.md) \| [`DefaultPortfolio`](../../../../../classes/API/Entities/DefaultPortfolio/DefaultPortfolio.md))[]

#### Defined in

[api/entities/types.ts:691](https://github.com/PolymeshAssociation/polymesh-sdk/blob/3cc570ade/src/api/entities/types.ts#L691)

___

### transactions

• `Optional` **transactions**: ``null`` \| [`TxTag`](../../../../../modules/Generated/Types/Types.md#txtag)[]

list of required Transaction permissions

#### Defined in

[api/entities/types.ts:689](https://github.com/PolymeshAssociation/polymesh-sdk/blob/3cc570ade/src/api/entities/types.ts#L689)
