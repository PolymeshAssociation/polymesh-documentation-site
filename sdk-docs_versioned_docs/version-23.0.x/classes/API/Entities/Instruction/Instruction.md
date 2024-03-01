---
id: 'Instruction'
title: 'Class: Instruction'
sidebar_label: 'Instruction'
---

[api/entities/Instruction](../../../../modules/API/Entities/Instruction/Instruction.md).Instruction

Represents a settlement Instruction to be executed on a certain Venue

## Hierarchy

- [`Entity`](../Entity/Entity.md) \<[`UniqueIdentifiers`](../../../../interfaces/API/Entities/Instruction/UniqueIdentifiers/UniqueIdentifiers.md), `string`\>

  ↳ **`Instruction`**

## Properties

### id

• **id**: `BigNumber`

Unique identifier number of the instruction

#### Defined in

[api/entities/Instruction/index.ts:89](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2c78f6c34/src/api/entities/Instruction/index.ts#L89)

---

### uuid

• **uuid**: `string`

#### Inherited from

[Entity](../Entity/Entity.md).[uuid](../Entity/Entity.md#uuid)

#### Defined in

[api/entities/Entity.ts:46](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2c78f6c34/src/api/entities/Entity.ts#L46)

## Methods

### affirm

▸ **affirm**(`args?`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction) \<[`Instruction`](Instruction.md), [`Instruction`](Instruction.md)\>\>

Affirm this instruction (authorize)

#### Parameters

| Name    | Type                                                                                                                       |
| :------ | :------------------------------------------------------------------------------------------------------------------------- |
| `args?` | [`AffirmOrWithdrawInstructionParams`](../../../../modules/API/Procedures/Types/Types.md#affirmorwithdrawinstructionparams) |
| `opts?` | [`ProcedureOpts`](../../../../interfaces/Types/ProcedureOpts/ProcedureOpts.md)                                             |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction) \<[`Instruction`](Instruction.md), [`Instruction`](Instruction.md)\>\>

**`Note`**

this method is of type [OptionalArgsProcedureMethod](../../../../interfaces/Types/OptionalArgsProcedureMethod/OptionalArgsProcedureMethod.md), which means you can call [affirm.checkAuthorization](../../../../interfaces/Types/OptionalArgsProcedureMethod/OptionalArgsProcedureMethod.md#checkauthorization)
on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/entities/Instruction/index.ts:479](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2c78f6c34/src/api/entities/Instruction/index.ts#L479)

---

### details

▸ **details**(): `Promise`\<[`InstructionDetails`](../../../../modules/API/Entities/Instruction/Types/Types.md#instructiondetails)\>

Retrieve information specific to this Instruction

#### Returns

`Promise`\<[`InstructionDetails`](../../../../modules/API/Entities/Instruction/Types/Types.md#instructiondetails)\>

#### Defined in

[api/entities/Instruction/index.ts:251](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2c78f6c34/src/api/entities/Instruction/index.ts#L251)

---

### executeManually

▸ **executeManually**(`args?`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction) \<[`Instruction`](Instruction.md), [`Instruction`](Instruction.md)\>\>

Executes an Instruction either of type `SettleManual` or a `Failed` instruction

#### Parameters

| Name    | Type                                                                                                                 |
| :------ | :------------------------------------------------------------------------------------------------------------------- |
| `args?` | [`ExecuteManualInstructionParams`](../../../../modules/API/Procedures/Types/Types.md#executemanualinstructionparams) |
| `opts?` | [`ProcedureOpts`](../../../../interfaces/Types/ProcedureOpts/ProcedureOpts.md)                                       |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction) \<[`Instruction`](Instruction.md), [`Instruction`](Instruction.md)\>\>

**`Note`**

this method is of type [OptionalArgsProcedureMethod](../../../../interfaces/Types/OptionalArgsProcedureMethod/OptionalArgsProcedureMethod.md), which means you can call [executeManually.checkAuthorization](../../../../interfaces/Types/OptionalArgsProcedureMethod/OptionalArgsProcedureMethod.md#checkauthorization)
on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/entities/Instruction/index.ts:499](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2c78f6c34/src/api/entities/Instruction/index.ts#L499)

---

### exists

▸ **exists**(): `Promise`\<`boolean`\>

Determine whether this Instruction exists on chain (or existed and was pruned)

#### Returns

`Promise`\<`boolean`\>

#### Overrides

[Entity](../Entity/Entity.md).[exists](../Entity/Entity.md#exists)

#### Defined in

[api/entities/Instruction/index.ts:233](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2c78f6c34/src/api/entities/Instruction/index.ts#L233)

---

### getAffirmations

▸ **getAffirmations**(`paginationOpts?`): `Promise`\<[`ResultSet`](../../../../interfaces/Types/ResultSet/ResultSet.md) \<[`InstructionAffirmation`](../../../../interfaces/API/Entities/Instruction/Types/InstructionAffirmation/InstructionAffirmation.md)\>\>

Retrieve every authorization generated by this Instruction (status and authorizing Identity)

#### Parameters

| Name              | Type                                                                                       |
| :---------------- | :----------------------------------------------------------------------------------------- |
| `paginationOpts?` | [`PaginationOptions`](../../../../interfaces/Types/PaginationOptions/PaginationOptions.md) |

#### Returns

`Promise`\<[`ResultSet`](../../../../interfaces/Types/ResultSet/ResultSet.md) \<[`InstructionAffirmation`](../../../../interfaces/API/Entities/Instruction/Types/InstructionAffirmation/InstructionAffirmation.md)\>\>

**`Note`**

supports pagination

#### Defined in

[api/entities/Instruction/index.ts:303](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2c78f6c34/src/api/entities/Instruction/index.ts#L303)

---

### getInvolvedPortfolios

▸ **getInvolvedPortfolios**(`args`): `Promise`\<([`NumberedPortfolio`](../NumberedPortfolio/NumberedPortfolio.md) \| [`DefaultPortfolio`](../DefaultPortfolio/DefaultPortfolio.md))[]\>

Retrieve all the involved portfolios in this Instruction where the given identity is a custodian of

#### Parameters

| Name       | Type     |
| :--------- | :------- |
| `args`     | `Object` |
| `args.did` | `string` |

#### Returns

`Promise`\<([`NumberedPortfolio`](../NumberedPortfolio/NumberedPortfolio.md) \| [`DefaultPortfolio`](../DefaultPortfolio/DefaultPortfolio.md))[]\>

#### Defined in

[api/entities/Instruction/index.ts:545](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2c78f6c34/src/api/entities/Instruction/index.ts#L545)

---

### getLegs

▸ **getLegs**(`paginationOpts?`): `Promise`\<[`ResultSet`](../../../../interfaces/Types/ResultSet/ResultSet.md) \<[`Leg`](../../../../modules/API/Entities/Instruction/Types/Types.md#leg)\>\>

Retrieve all legs of this Instruction

#### Parameters

| Name              | Type                                                                                       |
| :---------------- | :----------------------------------------------------------------------------------------- |
| `paginationOpts?` | [`PaginationOptions`](../../../../interfaces/Types/PaginationOptions/PaginationOptions.md) |

#### Returns

`Promise`\<[`ResultSet`](../../../../interfaces/Types/ResultSet/ResultSet.md) \<[`Leg`](../../../../modules/API/Entities/Instruction/Types/Types.md#leg)\>\>

**`Note`**

supports pagination

#### Defined in

[api/entities/Instruction/index.ts:349](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2c78f6c34/src/api/entities/Instruction/index.ts#L349)

---

### getStatus

▸ **getStatus**(): `Promise`\<[`InstructionStatusResult`](../../../../modules/API/Entities/Instruction/Types/Types.md#instructionstatusresult)\>

Retrieve current status of this Instruction

#### Returns

`Promise`\<[`InstructionStatusResult`](../../../../modules/API/Entities/Instruction/Types/Types.md#instructionstatusresult)\>

**`Note`**

uses the middlewareV2

#### Defined in

[api/entities/Instruction/index.ts:425](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2c78f6c34/src/api/entities/Instruction/index.ts#L425)

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

[api/entities/Entity.ts:61](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2c78f6c34/src/api/entities/Entity.ts#L61)

---

### isExecuted

▸ **isExecuted**(): `Promise`\<`boolean`\>

Retrieve whether the Instruction has already been executed and pruned from
the chain.

#### Returns

`Promise`\<`boolean`\>

#### Defined in

[api/entities/Instruction/index.ts:147](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2c78f6c34/src/api/entities/Instruction/index.ts#L147)

---

### isPending

▸ **isPending**(): `Promise`\<`boolean`\>

Retrieve whether the Instruction is still pending on chain

#### Returns

`Promise`\<`boolean`\>

#### Defined in

[api/entities/Instruction/index.ts:176](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2c78f6c34/src/api/entities/Instruction/index.ts#L176)

---

### onStatusChange

▸ **onStatusChange**(`callback`): `Promise`\<[`UnsubCallback`](../../../../modules/Types/Types.md#unsubcallback)\>

Retrieve current status of the Instruction. This can be subscribed to know if instruction fails

#### Parameters

| Name       | Type                                                                                                                                                                               |
| :--------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `callback` | [`SubCallback`](../../../../modules/Types/Types.md#subcallback) \<[`InstructionStatus`](../../../../enums/API/Entities/Instruction/Types/InstructionStatus/InstructionStatus.md)\> |

#### Returns

`Promise`\<[`UnsubCallback`](../../../../modules/Types/Types.md#unsubcallback)\>

**`Note`**

can be subscribed to

**`Note`**

current status as `Executed` means that the Instruction has been executed/rejected and pruned from
the chain.

#### Defined in

[api/entities/Instruction/index.ts:201](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2c78f6c34/src/api/entities/Instruction/index.ts#L201)

---

### reject

▸ **reject**(`args?`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction) \<[`Instruction`](Instruction.md), [`Instruction`](Instruction.md)\>\>

Reject this instruction

#### Parameters

| Name    | Type                                                                                                   |
| :------ | :----------------------------------------------------------------------------------------------------- |
| `args?` | [`RejectInstructionParams`](../../../../modules/API/Procedures/Types/Types.md#rejectinstructionparams) |
| `opts?` | [`ProcedureOpts`](../../../../interfaces/Types/ProcedureOpts/ProcedureOpts.md)                         |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction) \<[`Instruction`](Instruction.md), [`Instruction`](Instruction.md)\>\>

**`Note`**

reject on `SettleOnAffirmation` will execute the settlement and it will fail immediately.

**`Note`**

reject on `SettleOnBlock` behaves just like unauthorize

**`Note`**

reject on `SettleManual` behaves just like unauthorize

**`Note`**

this method is of type [OptionalArgsProcedureMethod](../../../../interfaces/Types/OptionalArgsProcedureMethod/OptionalArgsProcedureMethod.md), which means you can call [reject.checkAuthorization](../../../../interfaces/Types/OptionalArgsProcedureMethod/OptionalArgsProcedureMethod.md#checkauthorization)
on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/entities/Instruction/index.ts:469](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2c78f6c34/src/api/entities/Instruction/index.ts#L469)

---

### toHuman

▸ **toHuman**(): `string`

Return the Instruction's ID

#### Returns

`string`

#### Overrides

[Entity](../Entity/Entity.md).[toHuman](../Entity/Entity.md#tohuman)

#### Defined in

[api/entities/Instruction/index.ts:538](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2c78f6c34/src/api/entities/Instruction/index.ts#L538)

---

### withdraw

▸ **withdraw**(`args?`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction) \<[`Instruction`](Instruction.md), [`Instruction`](Instruction.md)\>\>

Withdraw affirmation from this instruction (unauthorize)

#### Parameters

| Name    | Type                                                                                                                       |
| :------ | :------------------------------------------------------------------------------------------------------------------------- |
| `args?` | [`AffirmOrWithdrawInstructionParams`](../../../../modules/API/Procedures/Types/Types.md#affirmorwithdrawinstructionparams) |
| `opts?` | [`ProcedureOpts`](../../../../interfaces/Types/ProcedureOpts/ProcedureOpts.md)                                             |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction) \<[`Instruction`](Instruction.md), [`Instruction`](Instruction.md)\>\>

**`Note`**

this method is of type [OptionalArgsProcedureMethod](../../../../interfaces/Types/OptionalArgsProcedureMethod/OptionalArgsProcedureMethod.md), which means you can call [withdraw.checkAuthorization](../../../../interfaces/Types/OptionalArgsProcedureMethod/OptionalArgsProcedureMethod.md#checkauthorization)
on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/entities/Instruction/index.ts:489](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2c78f6c34/src/api/entities/Instruction/index.ts#L489)

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

[api/entities/Entity.ts:14](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2c78f6c34/src/api/entities/Entity.ts#L14)

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

[api/entities/Entity.ts:23](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2c78f6c34/src/api/entities/Entity.ts#L23)
