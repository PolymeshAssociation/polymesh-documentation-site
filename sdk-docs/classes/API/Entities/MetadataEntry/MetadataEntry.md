---
id: "MetadataEntry"
title: "Class: MetadataEntry"
sidebar_label: "MetadataEntry"
---

[api/entities/MetadataEntry](../../../../modules/API/Entities/MetadataEntry/MetadataEntry.md).MetadataEntry

Represents an Asset MetadataEntry in the Polymesh blockchain

## Hierarchy

- [`Entity`](../Entity/Entity.md)\<[`UniqueIdentifiers`](../../../../interfaces/API/Entities/MetadataEntry/UniqueIdentifiers/UniqueIdentifiers.md), [`HumanReadable`](../../../../interfaces/API/Entities/MetadataEntry/HumanReadable/HumanReadable.md)\>

  ↳ **`MetadataEntry`**

## Properties

### asset

• **asset**: [`BaseAsset`](../Asset/Base/BaseAsset/BaseAsset.md)

Asset for which this is the metadata

#### Defined in

[api/entities/MetadataEntry/index.ts:50](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c53723bab/src/api/entities/MetadataEntry/index.ts#L50)

___

### id

• **id**: `BigNumber`

identifier number of the MetadataEntry

#### Defined in

[api/entities/MetadataEntry/index.ts:60](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c53723bab/src/api/entities/MetadataEntry/index.ts#L60)

___

### type

• **type**: [`MetadataType`](../../../../enums/API/Entities/MetadataEntry/Types/MetadataType/MetadataType.md)

Type of metadata represented by this instance

#### Defined in

[api/entities/MetadataEntry/index.ts:55](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c53723bab/src/api/entities/MetadataEntry/index.ts#L55)

___

### uuid

• **uuid**: `string`

#### Inherited from

[Entity](../Entity/Entity.md).[uuid](../Entity/Entity.md#uuid)

#### Defined in

[api/entities/Entity.ts:46](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c53723bab/src/api/entities/Entity.ts#L46)

## Methods

### clear

▸ **clear**(`opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

Removes the asset metadata value

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`ProcedureOpts`](../../../../interfaces/API/Procedures/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

**`Throws`**

- if the Metadata doesn't exists
  - if the Metadata value is locked

**`Note`**

this method is of type [NoArgsProcedureMethod](../../../../interfaces/API/Procedures/Types/NoArgsProcedureMethod/NoArgsProcedureMethod.md), which means you can call [clear.checkAuthorization](../../../../interfaces/API/Procedures/Types/NoArgsProcedureMethod/NoArgsProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/entities/MetadataEntry/index.ts:120](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c53723bab/src/api/entities/MetadataEntry/index.ts#L120)

___

### details

▸ **details**(): `Promise`\<[`MetadataDetails`](../../../../interfaces/API/Entities/MetadataEntry/Types/MetadataDetails/MetadataDetails.md)\>

Retrieve name and specs for this MetadataEntry

#### Returns

`Promise`\<[`MetadataDetails`](../../../../interfaces/API/Entities/MetadataEntry/Types/MetadataDetails/MetadataDetails.md)\>

#### Defined in

[api/entities/MetadataEntry/index.ts:145](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c53723bab/src/api/entities/MetadataEntry/index.ts#L145)

___

### exists

▸ **exists**(): `Promise`\<`boolean`\>

Determine whether this MetadataEntry exists on chain

#### Returns

`Promise`\<`boolean`\>

#### Overrides

[Entity](../Entity/Entity.md).[exists](../Entity/Entity.md#exists)

#### Defined in

[api/entities/MetadataEntry/index.ts:221](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c53723bab/src/api/entities/MetadataEntry/index.ts#L221)

___

### isEqual

▸ **isEqual**(`entity`): `boolean`

Determine whether this Entity is the same as another one

#### Parameters

| Name | Type |
| :------ | :------ |
| `entity` | [`Entity`](../Entity/Entity.md)\<`unknown`, `unknown`\> |

#### Returns

`boolean`

#### Inherited from

[Entity](../Entity/Entity.md).[isEqual](../Entity/Entity.md#isequal)

#### Defined in

[api/entities/Entity.ts:61](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c53723bab/src/api/entities/Entity.ts#L61)

___

### isModifiable

▸ **isModifiable**(): `Promise`\<\{ `canModify`: `boolean` ; `reason?`: [`PolymeshError`](../../../Base/PolymeshError/PolymeshError.md)  }\>

Check if the MetadataEntry can be modified.
A MetadataEntry is modifiable if it exists and is not locked

#### Returns

`Promise`\<\{ `canModify`: `boolean` ; `reason?`: [`PolymeshError`](../../../Base/PolymeshError/PolymeshError.md)  }\>

#### Defined in

[api/entities/MetadataEntry/index.ts:254](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c53723bab/src/api/entities/MetadataEntry/index.ts#L254)

___

### remove

▸ **remove**(`opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

Removes a local Asset Metadata key along with its value

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`ProcedureOpts`](../../../../interfaces/API/Procedures/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

**`Note`**

A global Metadata key cannot be deleted

**`Throws`**

- if the Metadata type is global
  - if the Metadata doesn't exists
  - if the Metadata value is locked
  - if the Metadata is a mandatory key for any NFT Collection

**`Note`**

this method is of type [NoArgsProcedureMethod](../../../../interfaces/API/Procedures/Types/NoArgsProcedureMethod/NoArgsProcedureMethod.md), which means you can call [remove.checkAuthorization](../../../../interfaces/API/Procedures/Types/NoArgsProcedureMethod/NoArgsProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/entities/MetadataEntry/index.ts:138](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c53723bab/src/api/entities/MetadataEntry/index.ts#L138)

___

### set

▸ **set**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<[`MetadataEntry`](MetadataEntry.md), [`MetadataEntry`](MetadataEntry.md)\>\>

Assign new value for the MetadataEntry along with its details or optionally only set the details (expiry + lock status) of any Metadata value

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`SetMetadataParams`](../../../../modules/API/Procedures/Types/Types.md#setmetadataparams) |
| `opts?` | [`ProcedureOpts`](../../../../interfaces/API/Procedures/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<[`MetadataEntry`](MetadataEntry.md), [`MetadataEntry`](MetadataEntry.md)\>\>

**`Note`**

- Value or the details can only be set if the MetadataEntry is not locked

**`Note`**

this method is of type [ProcedureMethod](../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [set.checkAuthorization](../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/entities/MetadataEntry/index.ts:106](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c53723bab/src/api/entities/MetadataEntry/index.ts#L106)

___

### toHuman

▸ **toHuman**(): [`HumanReadable`](../../../../interfaces/API/Entities/MetadataEntry/HumanReadable/HumanReadable.md)

Return the MetadataEntry's ID, Asset ticker and Metadata type

#### Returns

[`HumanReadable`](../../../../interfaces/API/Entities/MetadataEntry/HumanReadable/HumanReadable.md)

#### Overrides

[Entity](../Entity/Entity.md).[toHuman](../Entity/Entity.md#tohuman)

#### Defined in

[api/entities/MetadataEntry/index.ts:317](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c53723bab/src/api/entities/MetadataEntry/index.ts#L317)

___

### value

▸ **value**(): `Promise`\<``null`` \| [`MetadataValue`](../../../../modules/API/Entities/MetadataEntry/Types/Types.md#metadatavalue)\>

Retrieve the value and details (expiry + lock status) for this MetadataEntry

#### Returns

`Promise`\<``null`` \| [`MetadataValue`](../../../../modules/API/Entities/MetadataEntry/Types/Types.md#metadatavalue)\>

**`Note`**

- This returns `null` if no value is yet specified for this MetadataEntry

#### Defined in

[api/entities/MetadataEntry/index.ts:192](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c53723bab/src/api/entities/MetadataEntry/index.ts#L192)

___

### generateUuid

▸ `Static` **generateUuid**\<`Identifiers`\>(`identifiers`): `string`

Generate the Entity's UUID from its identifying properties

#### Type parameters

| Name |
| :------ |
| `Identifiers` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `identifiers` | `Identifiers` |

#### Returns

`string`

#### Inherited from

[Entity](../Entity/Entity.md).[generateUuid](../Entity/Entity.md#generateuuid)

#### Defined in

[api/entities/Entity.ts:14](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c53723bab/src/api/entities/Entity.ts#L14)

___

### unserialize

▸ `Static` **unserialize**\<`Identifiers`\>(`serialized`): `Identifiers`

Unserialize a UUID into its Unique Identifiers

#### Type parameters

| Name |
| :------ |
| `Identifiers` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `serialized` | `string` | UUID to unserialize |

#### Returns

`Identifiers`

#### Inherited from

[Entity](../Entity/Entity.md).[unserialize](../Entity/Entity.md#unserialize)

#### Defined in

[api/entities/Entity.ts:23](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c53723bab/src/api/entities/Entity.ts#L23)
