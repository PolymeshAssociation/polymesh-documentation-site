[api/client/Settlements](../../../../Modules/API/Client/Settlements.md).Settlements

Handles all Settlement related functionality

## Methods

### addInstruction

▸ **addInstruction**(`args`, `opts?`): `Promise`<[`GenericPolymeshTransaction`](../../../../Modules/Types/Types.md#genericpolymeshtransaction)<[`Instruction`](../../Entities/Instruction/Instruction.md)[], [`Instruction`](../../Entities/Instruction/Instruction.md)\>\>

Create an Instruction to exchange Assets

**`Note`**

this method is of type [ProcedureMethod](../../../../Interfaces/Types/ProcedureMethod.md), which means you can call [addInstruction.checkAuthorization](../../../../Interfaces/Types/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`AddInstructionWithVenueIdParams`](../../../../Interfaces/API/Procedures/Types/AddInstructionWithVenueIdParams.md) |
| `opts?` | [`ProcedureOpts`](../../../../Interfaces/Types/ProcedureOpts.md) |

#### Returns

`Promise`<[`GenericPolymeshTransaction`](../../../../Modules/Types/Types.md#genericpolymeshtransaction)<[`Instruction`](../../Entities/Instruction/Instruction.md)[], [`Instruction`](../../Entities/Instruction/Instruction.md)\>\>

___

### affirmInstruction

▸ **affirmInstruction**(`args`, `opts?`): `Promise`<[`GenericPolymeshTransaction`](../../../../Modules/Types/Types.md#genericpolymeshtransaction)<[`Instruction`](../../Entities/Instruction/Instruction.md), [`Instruction`](../../Entities/Instruction/Instruction.md)\>\>

Affirm an Instruction (authorize)

**`Note`**

this method is of type [ProcedureMethod](../../../../Interfaces/Types/ProcedureMethod.md), which means you can call [affirmInstruction.checkAuthorization](../../../../Interfaces/Types/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`AffirmInstructionParams`](../../../../Interfaces/API/Procedures/Types/AffirmInstructionParams.md) |
| `opts?` | [`ProcedureOpts`](../../../../Interfaces/Types/ProcedureOpts.md) |

#### Returns

`Promise`<[`GenericPolymeshTransaction`](../../../../Modules/Types/Types.md#genericpolymeshtransaction)<[`Instruction`](../../Entities/Instruction/Instruction.md), [`Instruction`](../../Entities/Instruction/Instruction.md)\>\>

___

### createVenue

▸ **createVenue**(`args`, `opts?`): `Promise`<[`GenericPolymeshTransaction`](../../../../Modules/Types/Types.md#genericpolymeshtransaction)<[`Venue`](../../Entities/Venue/Venue.md), [`Venue`](../../Entities/Venue/Venue.md)\>\>

Create a Venue under the ownership of the signing Identity

**`Note`**

this method is of type [ProcedureMethod](../../../../Interfaces/Types/ProcedureMethod.md), which means you can call [createVenue.checkAuthorization](../../../../Interfaces/Types/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`CreateVenueParams`](../../../../Interfaces/API/Procedures/Types/CreateVenueParams.md) |
| `opts?` | [`ProcedureOpts`](../../../../Interfaces/Types/ProcedureOpts.md) |

#### Returns

`Promise`<[`GenericPolymeshTransaction`](../../../../Modules/Types/Types.md#genericpolymeshtransaction)<[`Venue`](../../Entities/Venue/Venue.md), [`Venue`](../../Entities/Venue/Venue.md)\>\>

___

### getInstruction

▸ **getInstruction**(`args`): `Promise`<[`Instruction`](../../Entities/Instruction/Instruction.md)\>

Retrieve an Instruction by its ID

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | `Object` | - |
| `args.id` | `BigNumber` | identifier number of the Instruction |

#### Returns

`Promise`<[`Instruction`](../../Entities/Instruction/Instruction.md)\>

___

### getVenue

▸ **getVenue**(`args`): `Promise`<[`Venue`](../../Entities/Venue/Venue.md)\>

Retrieve a Venue by its ID

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | `Object` | - |
| `args.id` | `BigNumber` | identifier number of the Venue |

#### Returns

`Promise`<[`Venue`](../../Entities/Venue/Venue.md)\>
