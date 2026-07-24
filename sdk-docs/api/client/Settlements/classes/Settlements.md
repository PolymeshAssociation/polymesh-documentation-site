# Class: Settlements

> Defined in: [src/api/client/Settlements.ts:33](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/client/Settlements.ts#L33)

# Class: Settlements

Defined in: [src/api/client/Settlements.ts:33](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/client/Settlements.ts#L33)

Handles all Settlement related functionality

## Methods

### addInstruction()

> **addInstruction**(`args`: [`AddInstructionWithVenueIdParams`](../../../procedures/types/type-aliases/AddInstructionWithVenueIdParams.mdx), `opts?`: [`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)): `Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<[`Instruction`](../../../entities/Instruction/classes/Instruction.mdx)[], [`Instruction`](../../../entities/Instruction/classes/Instruction.mdx)\>\>

Defined in: [src/api/client/Settlements.ts:119](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/client/Settlements.ts#L119)

Create an Instruction to exchange Assets

#### Parameters

Parameter
Type

`args`

[`AddInstructionWithVenueIdParams`](../../../procedures/types/type-aliases/AddInstructionWithVenueIdParams.mdx)

`opts?`

[`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<[`Instruction`](../../../entities/Instruction/classes/Instruction.mdx)[], [`Instruction`](../../../entities/Instruction/classes/Instruction.mdx)\>\>

#### Note

this method is of type [ProcedureMethod](../../../procedures/types/interfaces/ProcedureMethod.mdx), which means you can call [addInstruction.checkAuthorization](../../../procedures/types/interfaces/ProcedureMethod.mdx#checkauthorization) on it to see whether the signing Account and Identity have the required roles and permissions to run it

***

### affirmInstruction()

> **affirmInstruction**(`args`: [`InstructionIdParams`](../../../procedures/types/interfaces/InstructionIdParams.mdx), `opts?`: [`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)): `Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<[`Instruction`](../../../entities/Instruction/classes/Instruction.mdx), [`Instruction`](../../../entities/Instruction/classes/Instruction.mdx)\>\>

Defined in: [src/api/client/Settlements.ts:128](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/client/Settlements.ts#L128)

Affirm an Instruction (authorize)

#### Parameters

Parameter
Type

`args`

[`InstructionIdParams`](../../../procedures/types/interfaces/InstructionIdParams.mdx)

`opts?`

[`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<[`Instruction`](../../../entities/Instruction/classes/Instruction.mdx), [`Instruction`](../../../entities/Instruction/classes/Instruction.mdx)\>\>

#### Note

this method is of type [ProcedureMethod](../../../procedures/types/interfaces/ProcedureMethod.mdx), which means you can call [affirmInstruction.checkAuthorization](../../../procedures/types/interfaces/ProcedureMethod.mdx#checkauthorization) on it to see whether the signing Account and Identity have the required roles and permissions to run it

***

### createVenue()

> **createVenue**(`args`: [`CreateVenueParams`](../../../procedures/types/interfaces/CreateVenueParams.mdx), `opts?`: [`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)): `Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<[`Venue`](../../../entities/Venue/classes/Venue.mdx), [`Venue`](../../../entities/Venue/classes/Venue.mdx)\>\>

Defined in: [src/api/client/Settlements.ts:114](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/client/Settlements.ts#L114)

Create a Venue under the ownership of the signing Identity

#### Parameters

Parameter
Type

`args`

[`CreateVenueParams`](../../../procedures/types/interfaces/CreateVenueParams.mdx)

`opts?`

[`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<[`Venue`](../../../entities/Venue/classes/Venue.mdx), [`Venue`](../../../entities/Venue/classes/Venue.mdx)\>\>

#### Note

this method is of type [ProcedureMethod](../../../procedures/types/interfaces/ProcedureMethod.mdx), which means you can call [createVenue.checkAuthorization](../../../procedures/types/interfaces/ProcedureMethod.mdx#checkauthorization) on it to see whether the signing Account and Identity have the required roles and permissions to run it

***

### getHistoricalInstructions()

> **getHistoricalInstructions**(`filter`: [`HistoricalInstructionFilters`](../../types/interfaces/HistoricalInstructionFilters.mdx)): `Promise`\<[`ResultSet`](../../../entities/types/interfaces/ResultSet.mdx)\<[`HistoricInstruction`](../../../entities/Venue/types/type-aliases/HistoricInstruction.mdx)\>\>

Defined in: [src/api/client/Settlements.ts:137](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/client/Settlements.ts#L137)

Retrieve all Instructions that have been associated with this Identity's DID

#### Parameters

Parameter
Type

`filter`

[`HistoricalInstructionFilters`](../../types/interfaces/HistoricalInstructionFilters.mdx)

#### Returns

`Promise`\<[`ResultSet`](../../../entities/types/interfaces/ResultSet.mdx)\<[`HistoricInstruction`](../../../entities/Venue/types/type-aliases/HistoricInstruction.mdx)\>\>

#### Note

uses the middleware V2

#### Note

supports pagination

***

### getInstruction()

> **getInstruction**(`args`: `object`): `Promise`\<[`Instruction`](../../../entities/Instruction/classes/Instruction.mdx)\>

Defined in: [src/api/client/Settlements.ts:95](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/client/Settlements.ts#L95)

Retrieve an Instruction by its ID

#### Parameters

Parameter
Type
Description

`args`

\{ `id`: `BigNumber`; \}

&hyphen;

`args.id`

`BigNumber`

identifier number of the Instruction

#### Returns

`Promise`\<[`Instruction`](../../../entities/Instruction/classes/Instruction.mdx)\>

***

### getVenue()

> **getVenue**(`args`: `object`): `Promise`\<[`Venue`](../../../entities/Venue/classes/Venue.mdx)\>

Defined in: [src/api/client/Settlements.ts:74](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/client/Settlements.ts#L74)

Retrieve a Venue by its ID

#### Parameters

Parameter
Type
Description

`args`

\{ `id`: `BigNumber`; \}

&hyphen;

`args.id`

`BigNumber`

identifier number of the Venue

#### Returns

`Promise`\<[`Venue`](../../../entities/Venue/classes/Venue.mdx)\>
