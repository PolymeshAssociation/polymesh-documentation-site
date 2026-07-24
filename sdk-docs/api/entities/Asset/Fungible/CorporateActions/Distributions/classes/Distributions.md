# Class: Distributions

> Defined in: [src/api/entities/Asset/Fungible/CorporateActions/Distributions.ts:31](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Asset/Fungible/CorporateActions/Distributions.ts#L31)

# Class: Distributions

Defined in: [src/api/entities/Asset/Fungible/CorporateActions/Distributions.ts:31](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Asset/Fungible/CorporateActions/Distributions.ts#L31)

Handles all Asset Distributions related functionality

## Extends

- `Namespace`\<[`FungibleAsset`](../../../classes/FungibleAsset.mdx)\>

## Methods

### configureDividendDistribution()

> **configureDividendDistribution**(`args`: [`ConfigureDividendDistributionParams`](../../../../../../procedures/types/interfaces/ConfigureDividendDistributionParams.mdx), `opts?`: [`ProcedureOpts`](../../../../../../procedures/types/interfaces/ProcedureOpts.mdx)): `Promise`\<[`GenericPolymeshTransaction`](../../../../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<[`DividendDistribution`](../../../../../DividendDistribution/classes/DividendDistribution.mdx), [`DividendDistribution`](../../../../../DividendDistribution/classes/DividendDistribution.mdx)\>\>

Defined in: [src/api/entities/Asset/Fungible/CorporateActions/Distributions.ts:38](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Asset/Fungible/CorporateActions/Distributions.ts#L38)

Create a Dividend Distribution for a subset of the Asset Holders at a certain (existing or future) Checkpoint

#### Parameters

Parameter
Type

`args`

[`ConfigureDividendDistributionParams`](../../../../../../procedures/types/interfaces/ConfigureDividendDistributionParams.mdx)

`opts?`

[`ProcedureOpts`](../../../../../../procedures/types/interfaces/ProcedureOpts.mdx)

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<[`DividendDistribution`](../../../../../DividendDistribution/classes/DividendDistribution.mdx), [`DividendDistribution`](../../../../../DividendDistribution/classes/DividendDistribution.mdx)\>\>

#### Note

required role:
  - Origin Portfolio Custodian

#### Note

this method is of type [ProcedureMethod](../../../../../../procedures/types/interfaces/ProcedureMethod.mdx), which means you can call [configureDividendDistribution.checkAuthorization](../../../../../../procedures/types/interfaces/ProcedureMethod.mdx#checkauthorization) on it to see whether the signing Account and Identity have the required roles and permissions to run it

***

### get()

> **get**(): `Promise`\<[`DistributionWithDetails`](../../../../../types/interfaces/DistributionWithDetails.mdx)[]\>

Defined in: [src/api/entities/Asset/Fungible/CorporateActions/Distributions.ts:113](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Asset/Fungible/CorporateActions/Distributions.ts#L113)

Retrieve all Dividend Distributions associated to this Asset, along with their details

#### Returns

`Promise`\<[`DistributionWithDetails`](../../../../../types/interfaces/DistributionWithDetails.mdx)[]\>

***

### getOne()

> **getOne**(`args`: `object`): `Promise`\<[`DistributionWithDetails`](../../../../../types/interfaces/DistributionWithDetails.mdx)\>

Defined in: [src/api/entities/Asset/Fungible/CorporateActions/Distributions.ts:60](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Asset/Fungible/CorporateActions/Distributions.ts#L60)

Retrieve a single Dividend Distribution associated to this Asset by its ID

#### Parameters

Parameter
Type

`args`

\{ `id`: `BigNumber`; \}

`args.id`

`BigNumber`

#### Returns

`Promise`\<[`DistributionWithDetails`](../../../../../types/interfaces/DistributionWithDetails.mdx)\>

#### Throws

if there is no Distribution with the passed ID
