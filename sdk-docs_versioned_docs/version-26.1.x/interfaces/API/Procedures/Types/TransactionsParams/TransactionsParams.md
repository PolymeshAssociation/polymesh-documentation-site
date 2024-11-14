---
id: "TransactionsParams"
title: "Interface: TransactionsParams"
sidebar_label: "TransactionsParams"
---

[api/procedures/types](../../../../../modules/API/Procedures/Types/Types.md).TransactionsParams

## Hierarchy

- [`AssetBase`](../AssetBase/AssetBase.md)

  ↳ **`TransactionsParams`**

## Properties

### asset

• **asset**: `string` \| [`FungibleAsset`](../../../../../classes/API/Entities/Asset/Fungible/FungibleAsset.md)

Asset over which the Identity will be granted permissions

#### Inherited from

[AssetBase](../AssetBase/AssetBase.md).[asset](../AssetBase/AssetBase.md#asset)

#### Defined in

[api/procedures/types.ts:1569](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b55e63737/src/api/procedures/types.ts#L1569)

___

### transactions

• **transactions**: ``null`` \| [`TransactionPermissions`](../../../Entities/Types/TransactionPermissions/TransactionPermissions.md)

a null value means full permissions

#### Defined in

[api/procedures/types.ts:1576](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b55e63737/src/api/procedures/types.ts#L1576)
