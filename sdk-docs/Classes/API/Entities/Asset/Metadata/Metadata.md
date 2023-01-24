[api/entities/Asset/Metadata](../../../../../Modules/API/Entities/Asset/Metadata.md).Metadata

Handles all Asset Metadata related functionality

## Hierarchy

- `Namespace`<[`Asset`](../Asset.md)\>

  ↳ **`Metadata`**

## Methods

### get

▸ **get**(): `Promise`<[`MetadataEntry`](../../MetadataEntry/MetadataEntry.md)[]\>

Retrieve all the MetadataEntry for this Asset

#### Returns

`Promise`<[`MetadataEntry`](../../MetadataEntry/MetadataEntry.md)[]\>

___

### getOne

▸ **getOne**(`args`): `Promise`<[`MetadataEntry`](../../MetadataEntry/MetadataEntry.md)\>

Retrieve a single MetadataEntry by its ID and type

**`Throws`**

if there is no MetadataEntry with the passed ID and specified type

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.id` | `BigNumber` |
| `args.type` | [`MetadataType`](../../../../../Enums/API/Entities/MetadataEntry/Types/MetadataType.md) |

#### Returns

`Promise`<[`MetadataEntry`](../../MetadataEntry/MetadataEntry.md)\>

___

### register

▸ **register**(`args`, `opts?`): `Promise`<[`GenericPolymeshTransaction`](../../../../../Modules/Types/Types.md#genericpolymeshtransaction)<[`MetadataEntry`](../../MetadataEntry/MetadataEntry.md), [`MetadataEntry`](../../MetadataEntry/MetadataEntry.md)\>\>

Register a metadata for this Asset and optionally set its value.
The metadata value can be set by passing `value` parameter and specifying other optional `details` about the value

**`Note`**

This registers a metadata of type `Local`

**`Note`**

this method is of type [ProcedureMethod](../../../../../Interfaces/Types/ProcedureMethod.md), which means you can call [register.checkAuthorization](../../../../../Interfaces/Types/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`RegisterMetadataParams`](../../../../../Modules/API/Procedures/Types.md#registermetadataparams) |
| `opts?` | [`ProcedureOpts`](../../../../../Interfaces/Types/ProcedureOpts.md) |

#### Returns

`Promise`<[`GenericPolymeshTransaction`](../../../../../Modules/Types/Types.md#genericpolymeshtransaction)<[`MetadataEntry`](../../MetadataEntry/MetadataEntry.md), [`MetadataEntry`](../../MetadataEntry/MetadataEntry.md)\>\>
