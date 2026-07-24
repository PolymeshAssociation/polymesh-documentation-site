# Type Alias: InitiateCorporateActionParams

> > **InitiateCorporateActionParams** = `object`

# Type Alias: InitiateCorporateActionParams

> **InitiateCorporateActionParams** = `object`

Defined in: [src/api/procedures/types.ts:2110](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L2110)

## Properties

Property
Type
Description
Defined in

 `checkpoint`

[`InputCaCheckpoint`](../../../entities/Asset/Fungible/Checkpoints/types/type-aliases/InputCaCheckpoint.mdx) \| `null`

The checkpoint of the Corporate Action (the record date on which the Corporate Action is applied)

[src/api/procedures/types.ts:2129](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L2129)

 `declarationDate`

`Date`

The date on which the Corporate Action is declared

[src/api/procedures/types.ts:2119](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L2119)

 `defaultTaxWithholding`

`BigNumber` \| `null`

The default tax withholding to be applied to the Corporate Action

[src/api/procedures/types.ts:2144](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L2144)

 `description`

`string`

The description of the Corporate Action

[src/api/procedures/types.ts:2124](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L2124)

 `kind`

[`CorporateActionKind`](../../../entities/CorporateActionBase/types/enumerations/CorporateActionKind.mdx)

The kind of Corporate Action to initiate

[src/api/procedures/types.ts:2114](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L2114)

 `targets`

[`InputCorporateActionTargets`](InputCorporateActionTargets.mdx) \| `null`

The targets of the Corporate Action

[src/api/procedures/types.ts:2139](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L2139)

 `taxWithholdings`

[`InputTaxWithholding`](../../../entities/CorporateActionBase/types/type-aliases/InputTaxWithholding.mdx)[]

The tax withholdings to be applied to the Corporate Action

[src/api/procedures/types.ts:2134](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L2134)
