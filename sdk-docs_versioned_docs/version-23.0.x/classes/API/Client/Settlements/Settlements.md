---
id: 'Settlements'
title: 'Class: Settlements'
sidebar_label: 'Settlements'
---

[api/client/Settlements](../../../../modules/API/Client/Settlements/Settlements.md).Settlements

Handles all Settlement related functionality

## Methods

### addInstruction

▸ **addInstruction**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction) \<[`Instruction`](../../Entities/Instruction/Instruction.md),[`Instruction`](../../Entities/Instruction/Instruction.md)\>\>

▸ [`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction) \<[`Instruction`](../../Entities/Instruction/Instruction.md)

#### Parameters

| Name    | Type                                                                                                                   |
| :------ | :--------------------------------------------------------------------------------------------------------------------- |
| `args`  | [`AddInstructionWithVenueIdParams`](../../../../modules/API/Procedures/Types/Types.md#addinstructionwithvenueidparams) |
| `opts?` | [`ProcedureOpts`](../../../../interfaces/Types/ProcedureOpts/ProcedureOpts.md)                                         |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction) \<[`Instruction`](../../Entities/Instruction/Instruction.md)[], [`Instruction`](../../Entities/Instruction/Instruction.md)\>\>

**`Note`**

this method is of type [ProcedureMethod](../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [addInstruction.checkAuthorization](../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/client/Settlements.ts:121](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2c78f6c34/src/api/client/Settlements.ts#L121)

---

### affirmInstruction

▸ **affirmInstruction**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction) \<[`Instruction`](../../Entities/Instruction/Instruction.md), [`Instruction`](../../Entities/Instruction/Instruction.md)\>\>

Affirm an Instruction (authorize)

#### Parameters

| Name    | Type                                                                                                            |
| :------ | :-------------------------------------------------------------------------------------------------------------- |
| `args`  | [`InstructionIdParams`](../../../../interfaces/API/Procedures/Types/InstructionIdParams/InstructionIdParams.md) |
| `opts?` | [`ProcedureOpts`](../../../../interfaces/Types/ProcedureOpts/ProcedureOpts.md)                                  |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction) \<[`Instruction`](../../Entities/Instruction/Instruction.md), [`Instruction`](../../Entities/Instruction/Instruction.md)\>\>

**`Note`**

this method is of type [ProcedureMethod](../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [affirmInstruction.checkAuthorization](../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/client/Settlements.ts:131](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2c78f6c34/src/api/client/Settlements.ts#L131)

---

### createVenue

▸ **createVenue**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction) \<[`Venue`](../../Entities/Venue/Venue.md), [`Venue`](../../Entities/Venue/Venue.md)\>\>

Create a Venue under the ownership of the signing Identity

#### Parameters

| Name    | Type                                                                                                      |
| :------ | :-------------------------------------------------------------------------------------------------------- |
| `args`  | [`CreateVenueParams`](../../../../interfaces/API/Procedures/Types/CreateVenueParams/CreateVenueParams.md) |
| `opts?` | [`ProcedureOpts`](../../../../interfaces/Types/ProcedureOpts/ProcedureOpts.md)                            |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction) \<[`Venue`](../../Entities/Venue/Venue.md), [`Venue`](../../Entities/Venue/Venue.md)\>\>

**`Note`**

this method is of type [ProcedureMethod](../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [createVenue.checkAuthorization](../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/client/Settlements.ts:111](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2c78f6c34/src/api/client/Settlements.ts#L111)

---

### getInstruction

▸ **getInstruction**(`args`): `Promise`\<[`Instruction`](../../Entities/Instruction/Instruction.md)\>

Retrieve an Instruction by its ID

#### Parameters

| Name      | Type        | Description                          |
| :-------- | :---------- | :----------------------------------- |
| `args`    | `Object`    | -                                    |
| `args.id` | `BigNumber` | identifier number of the Instruction |

#### Returns

`Promise`\<[`Instruction`](../../Entities/Instruction/Instruction.md)\>

#### Defined in

[api/client/Settlements.ts:89](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2c78f6c34/src/api/client/Settlements.ts#L89)

---

### getVenue

▸ **getVenue**(`args`): `Promise`\<[`Venue`](../../Entities/Venue/Venue.md)\>

Retrieve a Venue by its ID

#### Parameters

| Name      | Type        | Description                    |
| :-------- | :---------- | :----------------------------- |
| `args`    | `Object`    | -                              |
| `args.id` | `BigNumber` | identifier number of the Venue |

#### Returns

`Promise`\<[`Venue`](../../Entities/Venue/Venue.md)\>

#### Defined in

[api/client/Settlements.ts:68](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2c78f6c34/src/api/client/Settlements.ts#L68)
