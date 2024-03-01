---
id: 'Metadata'
title: 'Class: Metadata'
sidebar_label: 'Metadata'
---

[api/entities/Asset/Base/Metadata](../../../../../../modules/API/Entities/Asset/Base/Metadata/Metadata.md).Metadata

Handles all Asset Metadata related functionality

## Hierarchy

- `Namespace`\<[`BaseAsset`](../BaseAsset/BaseAsset.md)\>

  ↳ **`Metadata`**

## Methods

### get

▸ **get**(): `Promise`\<[`MetadataEntry`](../../../MetadataEntry/MetadataEntry.md)[]\>

Retrieve all the MetadataEntry for this Asset

#### Returns

`Promise`\<[`MetadataEntry`](../../../MetadataEntry/MetadataEntry.md)[]\>

#### Defined in

[api/entities/Asset/Base/Metadata/index.ts:51](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/api/entities/Asset/Base/Metadata/index.ts#L51)

---

### getOne

▸ **getOne**(`args`): `Promise`\<[`MetadataEntry`](../../../MetadataEntry/MetadataEntry.md)\>

Retrieve a single MetadataEntry by its ID and type

#### Parameters

| Name        | Type                                                                                                    |
| :---------- | :------------------------------------------------------------------------------------------------------ |
| `args`      | `Object`                                                                                                |
| `args.id`   | `BigNumber`                                                                                             |
| `args.type` | [`MetadataType`](../../../../../../enums/API/Entities/MetadataEntry/Types/MetadataType/MetadataType.md) |

#### Returns

`Promise`\<[`MetadataEntry`](../../../MetadataEntry/MetadataEntry.md)\>

**`Throws`**

if there is no MetadataEntry with the passed ID and specified type

#### Defined in

[api/entities/Asset/Base/Metadata/index.ts:97](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/api/entities/Asset/Base/Metadata/index.ts#L97)

---

### register

▸ **register**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../../../modules/Types/Types.md#genericpolymeshtransaction) \<[`MetadataEntry`](../../../MetadataEntry/MetadataEntry.md), [`MetadataEntry`](../../../MetadataEntry/MetadataEntry.md)\>\>

Register a metadata for this Asset and optionally set its value.
The metadata value can be set by passing `value` parameter and specifying other optional `details` about the value

#### Parameters

| Name    | Type                                                                                                       |
| :------ | :--------------------------------------------------------------------------------------------------------- |
| `args`  | [`RegisterMetadataParams`](../../../../../../modules/API/Procedures/Types/Types.md#registermetadataparams) |
| `opts?` | [`ProcedureOpts`](../../../../../../interfaces/Types/ProcedureOpts/ProcedureOpts.md)                       |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../../../modules/Types/Types.md#genericpolymeshtransaction) \<[`MetadataEntry`](../../../MetadataEntry/MetadataEntry.md), [`MetadataEntry`](../../../MetadataEntry/MetadataEntry.md)\>\>

**`Note`**

This registers a metadata of type `Local`

**`Note`**

this method is of type [ProcedureMethod](../../../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [register.checkAuthorization](../../../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/entities/Asset/Base/Metadata/index.ts:44](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/api/entities/Asset/Base/Metadata/index.ts#L44)
