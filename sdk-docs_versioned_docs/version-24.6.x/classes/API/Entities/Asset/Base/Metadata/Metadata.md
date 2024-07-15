---
id: "Metadata"
title: "Class: Metadata"
sidebar_label: "Metadata"
---

[api/entities/Asset/Base/Metadata](../../../../../../modules/API/Entities/Asset/Base/Metadata/Metadata.md).Metadata

Handles all Asset Metadata related functionality

## Hierarchy

- `Namespace`\<[`BaseAsset`](../BaseAsset/BaseAsset.md)\>

  ↳ **`Metadata`**

## Methods

### get

▸ **get**(): `Promise`\<[`MetadataEntry`](../../../MetadataEntry/MetadataEntry.md)[]\>

Retrieve all (global + local) the MetadataEntry for this Asset

#### Returns

`Promise`\<[`MetadataEntry`](../../../MetadataEntry/MetadataEntry.md)[]\>

**`Note`**

this returns all available metadata entries for this Asset, with or without any value being associated with the metadata

#### Defined in

[api/entities/Asset/Base/Metadata/index.ts:71](https://github.com/PolymeshAssociation/polymesh-sdk/blob/654b99c8d/src/api/entities/Asset/Base/Metadata/index.ts#L71)

___

### getDetails

▸ **getDetails**(): `Promise`\<[`MetadataWithValue`](../../../../../../modules/API/Entities/MetadataEntry/Types/Types.md#metadatawithvalue)[]\>

Retrieve all (local + global) the MetadataEntry details whose value is set for this Asset

#### Returns

`Promise`\<[`MetadataWithValue`](../../../../../../modules/API/Entities/MetadataEntry/Types/Types.md#metadatawithvalue)[]\>

#### Defined in

[api/entities/Asset/Base/Metadata/index.ts:178](https://github.com/PolymeshAssociation/polymesh-sdk/blob/654b99c8d/src/api/entities/Asset/Base/Metadata/index.ts#L178)

___

### getOne

▸ **getOne**(`args`): `Promise`\<[`MetadataEntry`](../../../MetadataEntry/MetadataEntry.md)\>

Retrieve a single MetadataEntry by its ID and type

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.id` | `BigNumber` |
| `args.type` | [`MetadataType`](../../../../../../enums/API/Entities/MetadataEntry/Types/MetadataType/MetadataType.md) |

#### Returns

`Promise`\<[`MetadataEntry`](../../../MetadataEntry/MetadataEntry.md)\>

**`Throws`**

if there is no MetadataEntry with the passed ID and specified type

#### Defined in

[api/entities/Asset/Base/Metadata/index.ts:117](https://github.com/PolymeshAssociation/polymesh-sdk/blob/654b99c8d/src/api/entities/Asset/Base/Metadata/index.ts#L117)

___

### register

▸ **register**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<[`MetadataEntry`](../../../MetadataEntry/MetadataEntry.md), [`MetadataEntry`](../../../MetadataEntry/MetadataEntry.md)\>\>

Register a metadata for this Asset and optionally set its value.
The metadata value can be set by passing `value` parameter and specifying other optional `details` about the value

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`RegisterMetadataParams`](../../../../../../modules/API/Procedures/Types/Types.md#registermetadataparams) |
| `opts?` | [`ProcedureOpts`](../../../../../../interfaces/API/Procedures/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<[`MetadataEntry`](../../../MetadataEntry/MetadataEntry.md), [`MetadataEntry`](../../../MetadataEntry/MetadataEntry.md)\>\>

**`Note`**

This registers a metadata of type `Local`

**`Note`**

this method is of type [ProcedureMethod](../../../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [register.checkAuthorization](../../../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/entities/Asset/Base/Metadata/index.ts:62](https://github.com/PolymeshAssociation/polymesh-sdk/blob/654b99c8d/src/api/entities/Asset/Base/Metadata/index.ts#L62)
