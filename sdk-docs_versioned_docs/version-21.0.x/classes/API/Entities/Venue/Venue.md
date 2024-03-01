---
id: 'Venue'
title: 'Class: Venue'
sidebar_label: 'Venue'
---

[api/entities/Venue](../../../../modules/API/Entities/Venue/Venue.md).Venue

Represents a Venue through which settlements are handled

## Hierarchy

- [`Entity`](../Entity/Entity.md) \<[`UniqueIdentifiers`](../../../../interfaces/API/Entities/Venue/UniqueIdentifiers/UniqueIdentifiers.md), `string`\>

  ↳ **`Venue`**

## Properties

### id

• **id**: `BigNumber`

identifier number of the Venue

#### Defined in

[api/entities/Venue/index.ts:66](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/Venue/index.ts#L66)

---

### uuid

• **uuid**: `string`

#### Inherited from

[Entity](../Entity/Entity.md).[uuid](../Entity/Entity.md#uuid)

#### Defined in

[api/entities/Entity.ts:46](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/Entity.ts#L46)

## Methods

### addInstruction

▸ **addInstruction**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction) \<[`Instruction`](../Instruction/Instruction.md)[], [`Instruction`](../Instruction/Instruction.md)\>\>

Creates a settlement Instruction in this Venue

#### Parameters

| Name    | Type                                                                                             |
| :------ | :----------------------------------------------------------------------------------------------- |
| `args`  | [`AddInstructionParams`](../../../../modules/API/Procedures/Types/Types.md#addinstructionparams) |
| `opts?` | [`ProcedureOpts`](../../../../interfaces/Types/ProcedureOpts/ProcedureOpts.md)                   |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction) \<[`Instruction`](../Instruction/Instruction.md)[], [`Instruction`](../Instruction/Instruction.md)\>\>

**`Note`**

required role:

- Venue Owner

**`Note`**

this method is of type [ProcedureMethod](../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [addInstruction.checkAuthorization](../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/entities/Venue/index.ts:256](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/Venue/index.ts#L256)

---

### addInstructions

▸ **addInstructions**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction) \<[`Instruction`](../Instruction/Instruction.md)[], [`Instruction`](../Instruction/Instruction.md)[]\>\>

Creates a batch of settlement Instructions in this Venue

#### Parameters

| Name    | Type                                                                                                                  |
| :------ | :-------------------------------------------------------------------------------------------------------------------- |
| `args`  | [`AddInstructionsParams`](../../../../interfaces/API/Procedures/Types/AddInstructionsParams/AddInstructionsParams.md) |
| `opts?` | [`ProcedureOpts`](../../../../interfaces/Types/ProcedureOpts/ProcedureOpts.md)                                        |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction) \<[`Instruction`](../Instruction/Instruction.md)[], [`Instruction`](../Instruction/Instruction.md)[]\>\>

**`Note`**

required role:

- Venue Owner

**`Note`**

this method is of type [ProcedureMethod](../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [addInstructions.checkAuthorization](../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/entities/Venue/index.ts:269](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/Venue/index.ts#L269)

---

### details

▸ **details**(): `Promise`\<[`VenueDetails`](../../../../interfaces/API/Entities/Venue/Types/VenueDetails/VenueDetails.md)\>

Retrieve information specific to this Venue

#### Returns

`Promise`\<[`VenueDetails`](../../../../interfaces/API/Entities/Venue/Types/VenueDetails/VenueDetails.md)\>

#### Defined in

[api/entities/Venue/index.ts:119](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/Venue/index.ts#L119)

---

### exists

▸ **exists**(): `Promise`\<`boolean`\>

Determine whether this Venue exists on chain

#### Returns

`Promise`\<`boolean`\>

#### Overrides

[Entity](../Entity/Entity.md).[exists](../Entity/Entity.md#exists)

#### Defined in

[api/entities/Venue/index.ts:100](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/Venue/index.ts#L100)

---

### getHistoricalInstructions

▸ **getHistoricalInstructions**(`opts?`): `Promise`\<[`ResultSet`](../../../../interfaces/Types/ResultSet/ResultSet.md) \<[`HistoricInstruction`](../../../../modules/API/Entities/Venue/Types/Types.md#historicinstruction)\>\>

Retrieve all Instructions that have been associated with this Venue instance

#### Parameters

| Name          | Type        | Description |
| :------------ | :---------- | :---------- |
| `opts`        | `Object`    | -           |
| `opts.size?`  | `BigNumber` | page size   |
| `opts.start?` | `BigNumber` | page offset |

#### Returns

`Promise`\<[`ResultSet`](../../../../interfaces/Types/ResultSet/ResultSet.md) \<[`HistoricInstruction`](../../../../modules/API/Entities/Venue/Types/Types.md#historicinstruction)\>\>

**`Note`**

uses the middleware V2

**`Note`**

supports pagination

#### Defined in

[api/entities/Venue/index.ts:208](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/Venue/index.ts#L208)

---

### getInstructions

▸ **getInstructions**(): `Promise`\<`Pick`\<[`GroupedInstructions`](../../../../interfaces/Types/GroupedInstructions/GroupedInstructions.md), `"pending"` \| `"failed"`\>\>

Retrieve all pending and failed Instructions in this Venue

#### Returns

`Promise`\<`Pick`\<[`GroupedInstructions`](../../../../interfaces/Types/GroupedInstructions/GroupedInstructions.md), `"pending"` \| `"failed"`\>\>

#### Defined in

[api/entities/Venue/index.ts:148](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/Venue/index.ts#L148)

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

[api/entities/Entity.ts:61](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/Entity.ts#L61)

---

### modify

▸ **modify**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

Modify description and type

#### Parameters

| Name    | Type                                                                                       |
| :------ | :----------------------------------------------------------------------------------------- |
| `args`  | [`ModifyVenueParams`](../../../../modules/API/Procedures/Types/Types.md#modifyvenueparams) |
| `opts?` | [`ProcedureOpts`](../../../../interfaces/Types/ProcedureOpts/ProcedureOpts.md)             |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

**`Note`**

required role:

- Venue Owner

**`Note`**

this method is of type [ProcedureMethod](../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [modify.checkAuthorization](../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/entities/Venue/index.ts:282](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/Venue/index.ts#L282)

---

### toHuman

▸ **toHuman**(): `string`

Return the Venue's ID

#### Returns

`string`

#### Overrides

[Entity](../Entity/Entity.md).[toHuman](../Entity/Entity.md#tohuman)

#### Defined in

[api/entities/Venue/index.ts:289](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/Venue/index.ts#L289)

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

[api/entities/Entity.ts:14](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/Entity.ts#L14)

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

[api/entities/Entity.ts:23](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/Entity.ts#L23)
