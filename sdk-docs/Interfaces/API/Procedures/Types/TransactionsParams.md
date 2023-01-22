[api/procedures/types](../../../../Modules/API/Procedures/Types.md).TransactionsParams

## Hierarchy

- [`AssetBase`](AssetBase.md)

  ↳ **`TransactionsParams`**

## Properties

### asset

• **asset**: `string` \| [`Asset`](../../../../Classes/API/Entities/Asset/Asset.md)

Asset over which the Identity will be granted permissions

#### Inherited from

[AssetBase](AssetBase.md).[asset](AssetBase.md#asset)

#### Defined in

[api/procedures/types.ts:885](https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/api/procedures/types.ts#L885)

___

### transactions

• **transactions**: ``null`` \| [`TransactionPermissions`](../../../Types/TransactionPermissions.md)

a null value means full permissions

#### Defined in

[api/procedures/types.ts:892](https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/api/procedures/types.ts#L892)
