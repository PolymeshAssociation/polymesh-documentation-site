---
id: 'MetadataEntry'
title: 'Class: MetadataEntry'
sidebar_label: 'MetadataEntry'
---

[api/entities/MetadataEntry](../../../../modules/API/Entities/MetadataEntry/MetadataEntry.md).MetadataEntry

Represents an Asset MetadataEntry in the Polymesh blockchain

## Hierarchy

- [`Entity`](../Entity/Entity.md) \<[`UniqueIdentifiers`](../../../../interfaces/API/Entities/MetadataEntry/UniqueIdentifiers/UniqueIdentifiers.md), [`HumanReadable`](../../../../interfaces/API/Entities/MetadataEntry/HumanReadable/HumanReadable.md)\>

  ↳ **`MetadataEntry`**

## Properties

### asset

• **asset**: [`Asset`](../Asset/Asset.md)

Asset for which this is the metadata

#### Defined in

[api/entities/MetadataEntry/index.ts:37](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2d3ac2aea/src/api/entities/MetadataEntry/index.ts#L37)

---

### id

• **id**: `BigNumber`

identifier number of the MetadataEntry

#### Defined in

[api/entities/MetadataEntry/index.ts:47](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2d3ac2aea/src/api/entities/MetadataEntry/index.ts#L47)

---

### type

• **type**: [`MetadataType`](../../../../enums/API/Entities/MetadataEntry/Types/MetadataType/MetadataType.md)

Type of metadata represented by this instance

#### Defined in

[api/entities/MetadataEntry/index.ts:42](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2d3ac2aea/src/api/entities/MetadataEntry/index.ts#L42)

---

### uuid

• **uuid**: `string`

#### Inherited from

[Entity](../Entity/Entity.md).[uuid](../Entity/Entity.md#uuid)

#### Defined in

[api/entities/Entity.ts:46](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2d3ac2aea/src/api/entities/Entity.ts#L46)

## Methods

### details

▸ **details**(): `Promise`\<[`MetadataDetails`](../../../../interfaces/API/Entities/MetadataEntry/Types/MetadataDetails/MetadataDetails.md)\>

Retrieve name and specs for this MetadataEntry

#### Returns

`Promise`\<[`MetadataDetails`](../../../../interfaces/API/Entities/MetadataEntry/Types/MetadataDetails/MetadataDetails.md)\>

#### Defined in

[api/entities/MetadataEntry/index.ts:92](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2d3ac2aea/src/api/entities/MetadataEntry/index.ts#L92)

---

### exists

▸ **exists**(): `Promise`\<`boolean`\>

Determine whether this MetadataEntry exists on chain

#### Returns

`Promise`\<`boolean`\>

#### Overrides

[Entity](../Entity/Entity.md).[exists](../Entity/Entity.md#exists)

#### Defined in

[api/entities/MetadataEntry/index.ts:168](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2d3ac2aea/src/api/entities/MetadataEntry/index.ts#L168)

---

### isEqual

▸ **isEqual**(`entity`): `boolean`

Determine whether this Entity is the same as another one

#### Parameters

| Name     | Type                                                    |
| :------- | :------------------------------------------------------ |
| `entity` | [`Entity`](../Entity/Entity.md)\<`unknown`, `unknown`\> |

#### Returns

`boolean`

#### Inherited from

[Entity](../Entity/Entity.md).[isEqual](../Entity/Entity.md#isequal)

#### Defined in

[api/entities/Entity.ts:61](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2d3ac2aea/src/api/entities/Entity.ts#L61)

---

### set

▸ **set**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction) \<[`MetadataEntry`](MetadataEntry.md), [`MetadataEntry`](MetadataEntry.md)\>\>

Assign new value for the MetadataEntry along with its details or optionally only set the details (expiry + lock status) of any Metadata value

#### Parameters

| Name    | Type                                                                                       |
| :------ | :----------------------------------------------------------------------------------------- |
| `args`  | [`SetMetadataParams`](../../../../modules/API/Procedures/Types/Types.md#setmetadataparams) |
| `opts?` | [`ProcedureOpts`](../../../../interfaces/Types/ProcedureOpts/ProcedureOpts.md)             |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction) \<[`MetadataEntry`](MetadataEntry.md), [`MetadataEntry`](MetadataEntry.md)\>\>

**`Note`**

- Value or the details can only be set if the MetadataEntry is not locked

**`Note`**

this method is of type [ProcedureMethod](../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [set.checkAuthorization](../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/entities/MetadataEntry/index.ts:85](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2d3ac2aea/src/api/entities/MetadataEntry/index.ts#L85)

---

### toHuman

▸ **toHuman**(): [`HumanReadable`](../../../../interfaces/API/Entities/MetadataEntry/HumanReadable/HumanReadable.md)

Return the MetadataEntry's ID, Asset ticker and Metadata type

#### Returns

[`HumanReadable`](../../../../interfaces/API/Entities/MetadataEntry/HumanReadable/HumanReadable.md)

#### Overrides

[Entity](../Entity/Entity.md).[toHuman](../Entity/Entity.md#tohuman)

#### Defined in

[api/entities/MetadataEntry/index.ts:175](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2d3ac2aea/src/api/entities/MetadataEntry/index.ts#L175)

---

### value

▸ **value**(): `Promise`\<`null` \| [`MetadataValue`](../../../../modules/API/Entities/MetadataEntry/Types/Types.md#metadatavalue)\>

Retrieve the value and details (expiry + lock status) for this MetadataEntry

#### Returns

`Promise`\<`null` \| [`MetadataValue`](../../../../modules/API/Entities/MetadataEntry/Types/Types.md#metadatavalue)\>

**`Note`**

- This returns `null` if no value is yet specified for this MetadataEntry

#### Defined in

[api/entities/MetadataEntry/index.ts:139](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2d3ac2aea/src/api/entities/MetadataEntry/index.ts#L139)

---

### generateUuid

▸ `Static` **generateUuid**\<`Identifiers`\>(`identifiers`): `string`

Generate the Entity's UUID from its identifying properties

#### Type parameters

| Name          |
| :------------ |
| `Identifiers` |

#### Parameters

| Name          | Type          |
| :------------ | :------------ |
| `identifiers` | `Identifiers` |

#### Returns

`string`

#### Inherited from

[Entity](../Entity/Entity.md).[generateUuid](../Entity/Entity.md#generateuuid)

#### Defined in

[api/entities/Entity.ts:14](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2d3ac2aea/src/api/entities/Entity.ts#L14)

---

### unserialize

▸ `Static` **unserialize**\<`Identifiers`\>(`serialized`): `Identifiers`

Unserialize a UUID into its Unique Identifiers

#### Type parameters

| Name          |
| :------------ |
| `Identifiers` |

#### Parameters

| Name         | Type     | Description         |
| :----------- | :------- | :------------------ |
| `serialized` | `string` | UUID to unserialize |

#### Returns

`Identifiers`

#### Inherited from

[Entity](../Entity/Entity.md).[unserialize](../Entity/Entity.md#unserialize)

#### Defined in

[api/entities/Entity.ts:23](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2d3ac2aea/src/api/entities/Entity.ts#L23)
