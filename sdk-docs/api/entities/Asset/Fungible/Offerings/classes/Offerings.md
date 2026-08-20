# Class: Offerings

> Defined in: [src/api/entities/Asset/Fungible/Offerings/index.ts:29](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Asset/Fungible/Offerings/index.ts#L29)

# Class: Offerings

Defined in: [src/api/entities/Asset/Fungible/Offerings/index.ts:29](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Asset/Fungible/Offerings/index.ts#L29)

Handles all Asset Offering related functionality

## Extends

- `Namespace`\<[`FungibleAsset`](../../classes/FungibleAsset.mdx)\>

## Methods

### get()

> **get**(`opts?`: `object`): `Promise`\<[`OfferingWithDetails`](../../../../types/interfaces/OfferingWithDetails.mdx)[]\>

Defined in: [src/api/entities/Asset/Fungible/Offerings/index.ts:78](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Asset/Fungible/Offerings/index.ts#L78)

Retrieve all of the Asset's Offerings and their details. Can be filtered using parameters

#### Parameters

Parameter
Type
Description

`opts`

\{ `status?`: `Partial`\<[`OfferingStatus`](../../../../Offering/types/interfaces/OfferingStatus.mdx)\>; \}

&hyphen;

`opts.status?`

`Partial`\<[`OfferingStatus`](../../../../Offering/types/interfaces/OfferingStatus.mdx)\>

status of the Offerings to fetch. If defined, only Offerings that have all passed statuses will be returned

#### Returns

`Promise`\<[`OfferingWithDetails`](../../../../types/interfaces/OfferingWithDetails.mdx)[]\>

***

### getOne()

> **getOne**(`args`: `object`): `Promise`\<[`Offering`](../../../../Offering/classes/Offering.mdx)\>

Defined in: [src/api/entities/Asset/Fungible/Offerings/index.ts:56](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Asset/Fungible/Offerings/index.ts#L56)

Retrieve a single Offering associated to this Asset by its ID

#### Parameters

Parameter
Type

`args`

\{ `id`: `BigNumber`; \}

`args.id`

`BigNumber`

#### Returns

`Promise`\<[`Offering`](../../../../Offering/classes/Offering.mdx)\>

#### Throws

if there is no Offering with the passed ID

***

### launch()

> **launch**(`args`: [`LaunchOfferingParams`](../../../../../procedures/types/interfaces/LaunchOfferingParams.mdx), `opts?`: [`ProcedureOpts`](../../../../../procedures/types/interfaces/ProcedureOpts.mdx)): `Promise`\<[`GenericPolymeshTransaction`](../../../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<[`Offering`](../../../../Offering/classes/Offering.mdx), [`Offering`](../../../../Offering/classes/Offering.mdx)\>\>

Defined in: [src/api/entities/Asset/Fungible/Offerings/index.ts:49](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Asset/Fungible/Offerings/index.ts#L49)

Launch an Asset Offering

#### Parameters

Parameter
Type

`args`

[`LaunchOfferingParams`](../../../../../procedures/types/interfaces/LaunchOfferingParams.mdx)

`opts?`

[`ProcedureOpts`](../../../../../procedures/types/interfaces/ProcedureOpts.mdx)

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<[`Offering`](../../../../Offering/classes/Offering.mdx), [`Offering`](../../../../Offering/classes/Offering.mdx)\>\>

#### Note

required roles:
  - Offering Portfolio Custodian
  - Raising Portfolio Custodian

#### Note

this method is of type [ProcedureMethod](../../../../../procedures/types/interfaces/ProcedureMethod.mdx), which means you can call [launch.checkAuthorization](../../../../../procedures/types/interfaces/ProcedureMethod.mdx#checkauthorization) on it to see whether the signing Account and Identity have the required roles and permissions to run it
