[types](../../Modules/Types/Types.md).TransactionPermissions

Permissions related to Transactions. Can include/exclude individual transactions or entire modules

## Hierarchy

- [`SectionPermissions`](SectionPermissions.md)<[`TxTag`](../../Modules/Generated/Types.md#txtag) \| [`ModuleName`](../../Enums/Generated/Types/ModuleName.md)\>

  ↳ **`TransactionPermissions`**

## Properties

### exceptions

• `Optional` **exceptions**: [`TxTag`](../../Modules/Generated/Types.md#txtag)[]

Transactions to be exempted from inclusion/exclusion. This allows more granularity when
  setting permissions. For example, let's say we want to include only the `asset` and `staking` modules,
  but exclude the `asset.registerTicker` transaction. We could add both modules to `values`, and add
  `TxTags.asset.registerTicker` to `exceptions`

#### Defined in

[types/index.ts:945](https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/types/index.ts#L945)

___

### type

• **type**: [`PermissionType`](../../Enums/Types/PermissionType.md)

Whether the permissions are inclusive or exclusive

#### Inherited from

[SectionPermissions](SectionPermissions.md).[type](SectionPermissions.md#type)

#### Defined in

[types/index.ts:932](https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/types/index.ts#L932)

___

### values

• **values**: ([`TxTag`](../../Modules/Generated/Types.md#txtag) \| [`ModuleName`](../../Enums/Generated/Types/ModuleName.md))[]

Values to be included/excluded

#### Inherited from

[SectionPermissions](SectionPermissions.md).[values](SectionPermissions.md#values)

#### Defined in

[types/index.ts:928](https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/types/index.ts#L928)
