# Type Alias: InitiateCorporateActionParams

> > **InitiateCorporateActionParams** = `object`

# Type Alias: InitiateCorporateActionParams

> **InitiateCorporateActionParams** = `object`

Defined in: [src/api/procedures/types.ts:1981](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/procedures/types.ts#L1981)

## Properties

Property
Type
Description
Defined in

 `checkpoint`

[`InputCaCheckpoint`](../../../entities/Asset/Fungible/Checkpoints/types/type-aliases/InputCaCheckpoint.mdx) \| `null`

The checkpoint of the Corporate Action (the record date on which the Corporate Action is applied)

[src/api/procedures/types.ts:2000](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/procedures/types.ts#L2000)

 `declarationDate`

`Date`

The date on which the Corporate Action is declared

[src/api/procedures/types.ts:1990](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/procedures/types.ts#L1990)

 `defaultTaxWithholding`

`BigNumber` \| `null`

The default tax withholding to be applied to the Corporate Action

[src/api/procedures/types.ts:2015](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/procedures/types.ts#L2015)

 `description`

`string`

The description of the Corporate Action

[src/api/procedures/types.ts:1995](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/procedures/types.ts#L1995)

 `kind`

[`CorporateActionKind`](../../../entities/CorporateActionBase/types/enumerations/CorporateActionKind.mdx)

The kind of Corporate Action to initiate

[src/api/procedures/types.ts:1985](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/procedures/types.ts#L1985)

 `targets`

[`InputCorporateActionTargets`](InputCorporateActionTargets.mdx) \| `null`

The targets of the Corporate Action

[src/api/procedures/types.ts:2010](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/procedures/types.ts#L2010)

 `taxWithholdings`

[`InputTaxWithholding`](../../../entities/CorporateActionBase/types/type-aliases/InputTaxWithholding.mdx)[]

The tax withholdings to be applied to the Corporate Action

[src/api/procedures/types.ts:2005](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/procedures/types.ts#L2005)
