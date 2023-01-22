[api/entities/Venue](../../../../Modules/API/Entities/Venue.md).Venue

Represents a Venue through which settlements are handled

## Hierarchy

- [`Entity`](../Entity/Entity.md)<[`UniqueIdentifiers`](../../../../Interfaces/API/Entities/Venue/UniqueIdentifiers.md), `string`\>

  ↳ **`Venue`**

## Properties

### id

• **id**: `BigNumber`

identifier number of the Venue

#### Defined in

[api/entities/Venue/index.ts:66](https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/api/entities/Venue/index.ts#L66)

___

### uuid

• **uuid**: `string`

#### Inherited from

[Entity](../Entity/Entity.md).[uuid](../Entity/Entity.md#uuid)

#### Defined in

[api/entities/Entity.ts:46](https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/api/entities/Entity.ts#L46)

## Methods

### addInstruction

▸ **addInstruction**(`args`, `opts?`): `Promise`<[`GenericPolymeshTransaction`](../../../../Modules/Types/Types.md#genericpolymeshtransaction)<[`Instruction`](../Instruction/Instruction.md)[], [`Instruction`](../Instruction/Instruction.md)\>\>

Creates a settlement Instruction in this Venue

**`Note`**

required role:
  - Venue Owner

**`Note`**

this method is of type [ProcedureMethod](../../../../Interfaces/Types/ProcedureMethod.md), which means you can call [addInstruction.checkAuthorization](../../../../Interfaces/Types/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`AddInstructionParams`](../../../../Interfaces/API/Procedures/Types/AddInstructionParams.md) |
| `opts?` | [`ProcedureOpts`](../../../../Interfaces/Types/ProcedureOpts.md) |

#### Returns

`Promise`<[`GenericPolymeshTransaction`](../../../../Modules/Types/Types.md#genericpolymeshtransaction)<[`Instruction`](../Instruction/Instruction.md)[], [`Instruction`](../Instruction/Instruction.md)\>\>

___

### addInstructions

▸ **addInstructions**(`args`, `opts?`): `Promise`<[`GenericPolymeshTransaction`](../../../../Modules/Types/Types.md#genericpolymeshtransaction)<[`Instruction`](../Instruction/Instruction.md)[], [`Instruction`](../Instruction/Instruction.md)[]\>\>

Creates a batch of settlement Instructions in this Venue

**`Note`**

required role:
  - Venue Owner

**`Note`**

this method is of type [ProcedureMethod](../../../../Interfaces/Types/ProcedureMethod.md), which means you can call [addInstructions.checkAuthorization](../../../../Interfaces/Types/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`AddInstructionsParams`](../../../../Interfaces/API/Procedures/Types/AddInstructionsParams.md) |
| `opts?` | [`ProcedureOpts`](../../../../Interfaces/Types/ProcedureOpts.md) |

#### Returns

`Promise`<[`GenericPolymeshTransaction`](../../../../Modules/Types/Types.md#genericpolymeshtransaction)<[`Instruction`](../Instruction/Instruction.md)[], [`Instruction`](../Instruction/Instruction.md)[]\>\>

___

### details

▸ **details**(): `Promise`<[`VenueDetails`](../../../../Interfaces/API/Entities/Venue/Types/VenueDetails.md)\>

Retrieve information specific to this Venue

#### Returns

`Promise`<[`VenueDetails`](../../../../Interfaces/API/Entities/Venue/Types/VenueDetails.md)\>

___

### exists

▸ **exists**(): `Promise`<`boolean`\>

Determine whether this Venue exists on chain

#### Returns

`Promise`<`boolean`\>

#### Overrides

[Entity](../Entity/Entity.md).[exists](../Entity/Entity.md#exists)

___

### getHistoricalInstructions

▸ **getHistoricalInstructions**(`opts?`): `Promise`<[`ResultSet`](../../../../Interfaces/Types/ResultSet.md)<[`HistoricInstruction`](../../../../Modules/API/Entities/Venue/Types.md#historicinstruction)\>\>

Retrieve all Instructions that have been associated with this Venue instance

**`Note`**

uses the middleware V2

**`Note`**

supports pagination

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `Object` | - |
| `opts.size?` | `BigNumber` | page size |
| `opts.start?` | `BigNumber` | page offset |

#### Returns

`Promise`<[`ResultSet`](../../../../Interfaces/Types/ResultSet.md)<[`HistoricInstruction`](../../../../Modules/API/Entities/Venue/Types.md#historicinstruction)\>\>

___

### getInstructions

▸ **getInstructions**(): `Promise`<`Pick`<[`GroupedInstructions`](../../../../Interfaces/Types/GroupedInstructions.md), ``"pending"`` \| ``"failed"``\>\>

Retrieve all pending and failed Instructions in this Venue

#### Returns

`Promise`<`Pick`<[`GroupedInstructions`](../../../../Interfaces/Types/GroupedInstructions.md), ``"pending"`` \| ``"failed"``\>\>

___

### isEqual

▸ **isEqual**(`entity`): `boolean`

Determine whether this Entity is the same as another one

#### Parameters

| Name | Type |
| :------ | :------ |
| `entity` | [`Entity`](../Entity/Entity.md)<`unknown`, `unknown`\> |

#### Returns

`boolean`

#### Inherited from

[Entity](../Entity/Entity.md).[isEqual](../Entity/Entity.md#isequal)

___

### modify

▸ **modify**(`args`, `opts?`): `Promise`<[`GenericPolymeshTransaction`](../../../../Modules/Types/Types.md#genericpolymeshtransaction)<`void`, `void`\>\>

Modify description and type

**`Note`**

required role:
  - Venue Owner

**`Note`**

this method is of type [ProcedureMethod](../../../../Interfaces/Types/ProcedureMethod.md), which means you can call [modify.checkAuthorization](../../../../Interfaces/Types/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`ModifyVenueParams`](../../../../Modules/API/Procedures/Types.md#modifyvenueparams) |
| `opts?` | [`ProcedureOpts`](../../../../Interfaces/Types/ProcedureOpts.md) |

#### Returns

`Promise`<[`GenericPolymeshTransaction`](../../../../Modules/Types/Types.md#genericpolymeshtransaction)<`void`, `void`\>\>

___

### toHuman

▸ **toHuman**(): `string`

Return the Venue's ID

#### Returns

`string`

#### Overrides

[Entity](../Entity/Entity.md).[toHuman](../Entity/Entity.md#tohuman)

___

### generateUuid

▸ `Static` **generateUuid**<`Identifiers`\>(`identifiers`): `string`

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

___

### unserialize

▸ `Static` **unserialize**<`Identifiers`\>(`serialized`): `Identifiers`

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
