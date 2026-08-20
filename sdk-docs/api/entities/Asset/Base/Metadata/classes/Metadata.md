# Class: Metadata

> Defined in: [src/api/entities/Asset/Base/Metadata/index.ts:37](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Asset/Base/Metadata/index.ts#L37)

# Class: Metadata

Defined in: [src/api/entities/Asset/Base/Metadata/index.ts:37](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Asset/Base/Metadata/index.ts#L37)

Handles all Asset Metadata related functionality

## Extends

- `Namespace`\<[`BaseAsset`](../../BaseAsset/classes/BaseAsset.mdx)\>

## Methods

### get()

> **get**(): `Promise`\<[`MetadataEntry`](../../../../MetadataEntry/classes/MetadataEntry.mdx)[]\>

Defined in: [src/api/entities/Asset/Base/Metadata/index.ts:63](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Asset/Base/Metadata/index.ts#L63)

Retrieve all (global + local) the MetadataEntry for this Asset

#### Returns

`Promise`\<[`MetadataEntry`](../../../../MetadataEntry/classes/MetadataEntry.mdx)[]\>

#### Note

this returns all available metadata entries for this Asset, with or without any value being associated with the metadata

***

### getDetails()

> **getDetails**(): `Promise`\<[`MetadataWithValue`](../../../../MetadataEntry/types/type-aliases/MetadataWithValue.mdx)[]\>

Defined in: [src/api/entities/Asset/Base/Metadata/index.ts:177](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Asset/Base/Metadata/index.ts#L177)

Retrieve all (local + global) the MetadataEntry details whose value is set for this Asset

#### Returns

`Promise`\<[`MetadataWithValue`](../../../../MetadataEntry/types/type-aliases/MetadataWithValue.mdx)[]\>

***

### getOne()

> **getOne**(`args`: `object`): `Promise`\<[`MetadataEntry`](../../../../MetadataEntry/classes/MetadataEntry.mdx)\>

Defined in: [src/api/entities/Asset/Base/Metadata/index.ts:109](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Asset/Base/Metadata/index.ts#L109)

Retrieve a single MetadataEntry by its ID and type

#### Parameters

Parameter
Type

`args`

\{ `id`: `BigNumber`; `type`: [`MetadataType`](../../../../MetadataEntry/types/enumerations/MetadataType.mdx); \}

`args.id`

`BigNumber`

`args.type`

[`MetadataType`](../../../../MetadataEntry/types/enumerations/MetadataType.mdx)

#### Returns

`Promise`\<[`MetadataEntry`](../../../../MetadataEntry/classes/MetadataEntry.mdx)\>

#### Throws

if there is no MetadataEntry with the passed ID and specified type

***

### register()

> **register**(`args`: [`RegisterMetadataParams`](../../../../../procedures/types/type-aliases/RegisterMetadataParams.mdx), `opts?`: [`ProcedureOpts`](../../../../../procedures/types/interfaces/ProcedureOpts.mdx)): `Promise`\<[`GenericPolymeshTransaction`](../../../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<[`MetadataEntry`](../../../../MetadataEntry/classes/MetadataEntry.mdx), [`MetadataEntry`](../../../../MetadataEntry/classes/MetadataEntry.mdx)\>\>

Defined in: [src/api/entities/Asset/Base/Metadata/index.ts:56](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Asset/Base/Metadata/index.ts#L56)

Register a metadata for this Asset and optionally set its value.
The metadata value can be set by passing `value` parameter and specifying other optional `details` about the value

#### Parameters

Parameter
Type

`args`

[`RegisterMetadataParams`](../../../../../procedures/types/type-aliases/RegisterMetadataParams.mdx)

`opts?`

[`ProcedureOpts`](../../../../../procedures/types/interfaces/ProcedureOpts.mdx)

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<[`MetadataEntry`](../../../../MetadataEntry/classes/MetadataEntry.mdx), [`MetadataEntry`](../../../../MetadataEntry/classes/MetadataEntry.mdx)\>\>

#### Note

This registers a metadata of type `Local`

#### Note

this method is of type [ProcedureMethod](../../../../../procedures/types/interfaces/ProcedureMethod.mdx), which means you can call [register.checkAuthorization](../../../../../procedures/types/interfaces/ProcedureMethod.mdx#checkauthorization) on it to see whether the signing Account and Identity have the required roles and permissions to run it
