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

• **asset**: `string` \| [`Asset`](../../../../../classes/API/Entities/Asset/Asset.md)

Asset over which the Identity will be granted permissions

#### Inherited from

[AssetBase](../AssetBase/AssetBase.md).[asset](../AssetBase/AssetBase.md#asset)

#### Defined in

[api/procedures/types.ts:962](https://github.com/PolymeshAssociation/polymesh-sdk/blob/acc2284c/src/api/procedures/types.ts#L962)

___

### transactions

• **transactions**: ``null`` \| [`TransactionPermissions`](../../../../Types/TransactionPermissions/TransactionPermissions.md)

a null value means full permissions

#### Defined in

[api/procedures/types.ts:969](https://github.com/PolymeshAssociation/polymesh-sdk/blob/acc2284c/src/api/procedures/types.ts#L969)
