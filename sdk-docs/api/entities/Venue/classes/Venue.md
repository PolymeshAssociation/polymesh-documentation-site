# Class: Venue

> Defined in: [src/api/entities/Venue/index.ts:75](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Venue/index.ts#L75)

# Class: Venue

Defined in: [src/api/entities/Venue/index.ts:75](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Venue/index.ts#L75)

Represents a Venue through which settlements are handled

## Extends

- [`Entity`](../../Entity/classes/Entity.mdx)\<[`UniqueIdentifiers`](../interfaces/UniqueIdentifiers.mdx), `string`\>

## Properties

### id

> **id**: `BigNumber`

Defined in: [src/api/entities/Venue/index.ts:89](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Venue/index.ts#L89)

identifier number of the Venue

***

### uuid

> **uuid**: `string`

Defined in: [src/api/entities/Entity.ts:46](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Entity.ts#L46)

#### Inherited from

[`Entity`](../../Entity/classes/Entity.mdx).[`uuid`](../../Entity/classes/Entity.mdx#uuid)

## Methods

### addInstruction()

> **addInstruction**(`args`: [`AddInstructionParams`](../../../procedures/types/type-aliases/AddInstructionParams.mdx), `opts?`: [`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)): `Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<[`Instruction`](../../Instruction/classes/Instruction.mdx)[], [`Instruction`](../../Instruction/classes/Instruction.mdx)\>\>

Defined in: [src/api/entities/Venue/index.ts:345](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Venue/index.ts#L345)

Creates a settlement Instruction in this Venue

#### Parameters

Parameter
Type

`args`

[`AddInstructionParams`](../../../procedures/types/type-aliases/AddInstructionParams.mdx)

`opts?`

[`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<[`Instruction`](../../Instruction/classes/Instruction.mdx)[], [`Instruction`](../../Instruction/classes/Instruction.mdx)\>\>

#### Note

required role:
  - Venue Owner

#### Note

this method is of type [ProcedureMethod](../../../procedures/types/interfaces/ProcedureMethod.mdx), which means you can call [addInstruction.checkAuthorization](../../../procedures/types/interfaces/ProcedureMethod.mdx#checkauthorization) on it to see whether the signing Account and Identity have the required roles and permissions to run it

***

### addInstructions()

> **addInstructions**(`args`: [`AddInstructionsParams`](../../../procedures/types/interfaces/AddInstructionsParams.mdx), `opts?`: [`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)): `Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<[`Instruction`](../../Instruction/classes/Instruction.mdx)[], [`Instruction`](../../Instruction/classes/Instruction.mdx)[]\>\>

Defined in: [src/api/entities/Venue/index.ts:353](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Venue/index.ts#L353)

Creates a batch of settlement Instructions in this Venue

#### Parameters

Parameter
Type

`args`

[`AddInstructionsParams`](../../../procedures/types/interfaces/AddInstructionsParams.mdx)

`opts?`

[`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<[`Instruction`](../../Instruction/classes/Instruction.mdx)[], [`Instruction`](../../Instruction/classes/Instruction.mdx)[]\>\>

#### Note

required role:
  - Venue Owner

#### Note

this method is of type [ProcedureMethod](../../../procedures/types/interfaces/ProcedureMethod.mdx), which means you can call [addInstructions.checkAuthorization](../../../procedures/types/interfaces/ProcedureMethod.mdx#checkauthorization) on it to see whether the signing Account and Identity have the required roles and permissions to run it

***

### addSigners()

> **addSigners**(`args`: [`UpdateVenueSignersParams`](../../../procedures/types/interfaces/UpdateVenueSignersParams.mdx), `opts?`: [`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)): `Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

Defined in: [src/api/entities/Venue/index.ts:371](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Venue/index.ts#L371)

Adds a list of signers allowed to sign receipts for this Venue

#### Parameters

Parameter
Type

`args`

[`UpdateVenueSignersParams`](../../../procedures/types/interfaces/UpdateVenueSignersParams.mdx)

`opts?`

[`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

#### Note

required role:
  - Venue Owner

#### Throws

if one or more specified signers are already added to the Venue

#### Note

this method is of type [ProcedureMethod](../../../procedures/types/interfaces/ProcedureMethod.mdx), which means you can call [addSigners.checkAuthorization](../../../procedures/types/interfaces/ProcedureMethod.mdx#checkauthorization) on it to see whether the signing Account and Identity have the required roles and permissions to run it

***

### details()

> **details**(): `Promise`\<[`VenueDetails`](../types/interfaces/VenueDetails.mdx)\>

Defined in: [src/api/entities/Venue/index.ts:162](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Venue/index.ts#L162)

Retrieve information specific to this Venue

#### Returns

`Promise`\<[`VenueDetails`](../types/interfaces/VenueDetails.mdx)\>

***

### exists()

> **exists**(): `Promise`\<`boolean`\>

Defined in: [src/api/entities/Venue/index.ts:143](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Venue/index.ts#L143)

Determine whether this Venue exists on chain

#### Returns

`Promise`\<`boolean`\>

#### Overrides

[`Entity`](../../Entity/classes/Entity.mdx).[`exists`](../../Entity/classes/Entity.mdx#exists)

***

### getAllowedSigners()

> **getAllowedSigners**(): `Promise`\<[`Account`](../../Account/classes/Account.mdx)[]\>

Defined in: [src/api/entities/Venue/index.ts:298](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Venue/index.ts#L298)

Get all signers allowed by this Venue.
Only these signers are allowed to affirm off-chain instructions

#### Returns

`Promise`\<[`Account`](../../Account/classes/Account.mdx)[]\>

***

### getHistoricalInstructions()

> **getHistoricalInstructions**(`opts?`: `object`): `Promise`\<[`ResultSet`](../../types/interfaces/ResultSet.mdx)\<[`HistoricInstruction`](../types/type-aliases/HistoricInstruction.mdx)\>\>

Defined in: [src/api/entities/Venue/index.ts:255](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Venue/index.ts#L255)

Retrieve all Instructions that have been associated with this Venue instance

#### Parameters

Parameter
Type
Description

`opts`

\{ `size?`: `BigNumber`; `start?`: `BigNumber`; \}

&hyphen;

`opts.size?`

`BigNumber`

page size

`opts.start?`

`BigNumber`

page offset

#### Returns

`Promise`\<[`ResultSet`](../../types/interfaces/ResultSet.mdx)\<[`HistoricInstruction`](../types/type-aliases/HistoricInstruction.mdx)\>\>

#### Note

uses the middleware V2

#### Note

supports pagination

***

### getInstructions()

> **getInstructions**(): `Promise`\<`Pick`\<[`GroupedInstructions`](../../Instruction/types/interfaces/GroupedInstructions.mdx), `"failed"` \| `"pending"`\>\>

Defined in: [src/api/entities/Venue/index.ts:191](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Venue/index.ts#L191)

Retrieve all pending and failed Instructions in this Venue

#### Returns

`Promise`\<`Pick`\<[`GroupedInstructions`](../../Instruction/types/interfaces/GroupedInstructions.mdx), `"failed"` \| `"pending"`\>\>

***

### getSignerCount()

> **getSignerCount**(): `Promise`\<`BigNumber`\>

Defined in: [src/api/entities/Venue/index.ts:323](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Venue/index.ts#L323)

Get the number of signers allowed by this Venue

#### Returns

`Promise`\<`BigNumber`\>

***

### isEqual()

> **isEqual**(`entity`: [`Entity`](../../Entity/classes/Entity.mdx)\<`unknown`, `unknown`\>): `boolean`

Defined in: [src/api/entities/Entity.ts:61](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Entity.ts#L61)

Determine whether this Entity is the same as another one

#### Parameters

Parameter
Type

`entity`

[`Entity`](../../Entity/classes/Entity.mdx)\<`unknown`, `unknown`\>

#### Returns

`boolean`

#### Inherited from

[`Entity`](../../Entity/classes/Entity.mdx).[`isEqual`](../../Entity/classes/Entity.mdx#isequal)

***

### modify()

> **modify**(`args`: [`ModifyVenueParams`](../../../procedures/types/type-aliases/ModifyVenueParams.mdx), `opts?`: [`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)): `Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

Defined in: [src/api/entities/Venue/index.ts:361](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Venue/index.ts#L361)

Modify description and type

#### Parameters

Parameter
Type

`args`

[`ModifyVenueParams`](../../../procedures/types/type-aliases/ModifyVenueParams.mdx)

`opts?`

[`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

#### Note

required role:
  - Venue Owner

#### Note

this method is of type [ProcedureMethod](../../../procedures/types/interfaces/ProcedureMethod.mdx), which means you can call [modify.checkAuthorization](../../../procedures/types/interfaces/ProcedureMethod.mdx#checkauthorization) on it to see whether the signing Account and Identity have the required roles and permissions to run it

***

### removeSigners()

> **removeSigners**(`args`: [`UpdateVenueSignersParams`](../../../procedures/types/interfaces/UpdateVenueSignersParams.mdx), `opts?`: [`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)): `Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

Defined in: [src/api/entities/Venue/index.ts:381](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Venue/index.ts#L381)

Adds a list of signers allowed to sign receipts for this Venue

#### Parameters

Parameter
Type

`args`

[`UpdateVenueSignersParams`](../../../procedures/types/interfaces/UpdateVenueSignersParams.mdx)

`opts?`

[`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

#### Note

required role:
  - Venue Owner

#### Throws

if one or more specified signers are already added to the Venue

#### Note

this method is of type [ProcedureMethod](../../../procedures/types/interfaces/ProcedureMethod.mdx), which means you can call [removeSigners.checkAuthorization](../../../procedures/types/interfaces/ProcedureMethod.mdx#checkauthorization) on it to see whether the signing Account and Identity have the required roles and permissions to run it

***

### toHuman()

> **toHuman**(): `string`

Defined in: [src/api/entities/Venue/index.ts:386](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Venue/index.ts#L386)

Return the Venue's ID

#### Returns

`string`

#### Overrides

[`Entity`](../../Entity/classes/Entity.mdx).[`toHuman`](../../Entity/classes/Entity.mdx#tohuman)

***

### generateUuid()

> `static` **generateUuid**\<`Identifiers`\>(`identifiers`: `Identifiers`): `string`

Defined in: [src/api/entities/Entity.ts:14](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Entity.ts#L14)

Generate the Entity's UUID from its identifying properties

#### Type Parameters

Type Parameter

`Identifiers`

#### Parameters

Parameter
Type
Description

`identifiers`

`Identifiers`

&hyphen;

#### Returns

`string`

#### Inherited from

[`Entity`](../../Entity/classes/Entity.mdx).[`generateUuid`](../../Entity/classes/Entity.mdx#generateuuid)

***

### unserialize()

> `static` **unserialize**\<`Identifiers`\>(`serialized`: `string`): `Identifiers`

Defined in: [src/api/entities/Entity.ts:23](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Entity.ts#L23)

Unserialize a UUID into its Unique Identifiers

#### Type Parameters

Type Parameter

`Identifiers`

#### Parameters

Parameter
Type
Description

`serialized`

`string`

UUID to unserialize

#### Returns

`Identifiers`

#### Inherited from

[`Entity`](../../Entity/classes/Entity.mdx).[`unserialize`](../../Entity/classes/Entity.mdx#unserialize)
