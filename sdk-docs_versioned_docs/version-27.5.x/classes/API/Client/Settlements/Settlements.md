---
id: "Settlements"
title: "Class: Settlements"
sidebar_label: "Settlements"
---

[api/client/Settlements](../../../../modules/API/Client/Settlements/Settlements.md).Settlements

Handles all Settlement related functionality

## Methods

### addInstruction

▸ **addInstruction**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<[`Instruction`](../../Entities/Instruction/Instruction.md)[], [`Instruction`](../../Entities/Instruction/Instruction.md)\>\>

Create an Instruction to exchange Assets

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`AddInstructionWithVenueIdParams`](../../../../modules/API/Procedures/Types/Types.md#addinstructionwithvenueidparams) |
| `opts?` | [`ProcedureOpts`](../../../../interfaces/API/Procedures/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<[`Instruction`](../../Entities/Instruction/Instruction.md)[], [`Instruction`](../../Entities/Instruction/Instruction.md)\>\>

**`Note`**

this method is of type [ProcedureMethod](../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [addInstruction.checkAuthorization](../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/client/Settlements.ts:127](https://github.com/PolymeshAssociation/polymesh-sdk/blob/995f17653/src/api/client/Settlements.ts#L127)

___

### affirmInstruction

▸ **affirmInstruction**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<[`Instruction`](../../Entities/Instruction/Instruction.md), [`Instruction`](../../Entities/Instruction/Instruction.md)\>\>

Affirm an Instruction (authorize)

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`InstructionIdParams`](../../../../interfaces/API/Procedures/Types/InstructionIdParams/InstructionIdParams.md) |
| `opts?` | [`ProcedureOpts`](../../../../interfaces/API/Procedures/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<[`Instruction`](../../Entities/Instruction/Instruction.md), [`Instruction`](../../Entities/Instruction/Instruction.md)\>\>

**`Note`**

this method is of type [ProcedureMethod](../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [affirmInstruction.checkAuthorization](../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/client/Settlements.ts:137](https://github.com/PolymeshAssociation/polymesh-sdk/blob/995f17653/src/api/client/Settlements.ts#L137)

___

### createVenue

▸ **createVenue**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<[`Venue`](../../Entities/Venue/Venue.md), [`Venue`](../../Entities/Venue/Venue.md)\>\>

Create a Venue under the ownership of the signing Identity

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`CreateVenueParams`](../../../../interfaces/API/Procedures/Types/CreateVenueParams/CreateVenueParams.md) |
| `opts?` | [`ProcedureOpts`](../../../../interfaces/API/Procedures/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<[`Venue`](../../Entities/Venue/Venue.md), [`Venue`](../../Entities/Venue/Venue.md)\>\>

**`Note`**

this method is of type [ProcedureMethod](../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [createVenue.checkAuthorization](../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/client/Settlements.ts:117](https://github.com/PolymeshAssociation/polymesh-sdk/blob/995f17653/src/api/client/Settlements.ts#L117)

___

### getHistoricalInstructions

▸ **getHistoricalInstructions**(`filter`): `Promise`\<[`HistoricInstruction`](../../../../modules/API/Entities/Venue/Types/Types.md#historicinstruction)[]\>

Retrieve all Instructions that have been associated with this Identity's DID

#### Parameters

| Name | Type |
| :------ | :------ |
| `filter` | [`HistoricalInstructionFilters`](../../../../interfaces/API/Client/Types/HistoricalInstructionFilters/HistoricalInstructionFilters.md) |

#### Returns

`Promise`\<[`HistoricInstruction`](../../../../modules/API/Entities/Venue/Types/Types.md#historicinstruction)[]\>

**`Note`**

uses the middleware V2

**`Note`**

supports pagination

#### Defined in

[api/client/Settlements.ts:148](https://github.com/PolymeshAssociation/polymesh-sdk/blob/995f17653/src/api/client/Settlements.ts#L148)

___

### getInstruction

▸ **getInstruction**(`args`): `Promise`\<[`Instruction`](../../Entities/Instruction/Instruction.md)\>

Retrieve an Instruction by its ID

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | `Object` | - |
| `args.id` | `BigNumber` | identifier number of the Instruction |

#### Returns

`Promise`\<[`Instruction`](../../Entities/Instruction/Instruction.md)\>

#### Defined in

[api/client/Settlements.ts:95](https://github.com/PolymeshAssociation/polymesh-sdk/blob/995f17653/src/api/client/Settlements.ts#L95)

___

### getVenue

▸ **getVenue**(`args`): `Promise`\<[`Venue`](../../Entities/Venue/Venue.md)\>

Retrieve a Venue by its ID

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | `Object` | - |
| `args.id` | `BigNumber` | identifier number of the Venue |

#### Returns

`Promise`\<[`Venue`](../../Entities/Venue/Venue.md)\>

#### Defined in

[api/client/Settlements.ts:74](https://github.com/PolymeshAssociation/polymesh-sdk/blob/995f17653/src/api/client/Settlements.ts#L74)
