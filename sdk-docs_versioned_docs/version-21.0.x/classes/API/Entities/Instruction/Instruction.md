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

[api/entities/Instruction/index.ts:89](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/Instruction/index.ts#L89)

---

### uuid

• **uuid**: `string`

#### Inherited from

[Entity](../Entity/Entity.md).[uuid](../Entity/Entity.md#uuid)

#### Defined in

[api/entities/Entity.ts:46](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/Entity.ts#L46)

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

[api/entities/Instruction/index.ts:500](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/Instruction/index.ts#L500)

---

### details

▸ **details**(): `Promise`\<[`InstructionDetails`](../../../../modules/API/Entities/Instruction/Types/Types.md#instructiondetails)\>

Retrieve information specific to this Instruction

#### Returns

`Promise`\<[`InstructionDetails`](../../../../modules/API/Entities/Instruction/Types/Types.md#instructiondetails)\>

#### Defined in

[api/entities/Instruction/index.ts:256](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/Instruction/index.ts#L256)

---

### executeManually

▸ **executeManually**(`args?`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction) \<[`Instruction`](Instruction.md), [`Instruction`](Instruction.md)\>\>

Executes an Instruction of type `SettleManual`

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

[api/entities/Instruction/index.ts:532](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/Instruction/index.ts#L532)

---

### exists

▸ **exists**(): `Promise`\<`boolean`\>

Determine whether this Instruction exists on chain (or existed and was pruned)

#### Returns

`Promise`\<`boolean`\>

#### Overrides

[Entity](../Entity/Entity.md).[exists](../Entity/Entity.md#exists)

#### Defined in

[api/entities/Instruction/index.ts:238](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/Instruction/index.ts#L238)

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

[api/entities/Instruction/index.ts:307](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/Instruction/index.ts#L307)

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

[api/entities/Instruction/index.ts:600](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/Instruction/index.ts#L600)

---

### getLegs

▸ **getLegs**(`paginationOpts?`): `Promise`\<[`ResultSet`](../../../../interfaces/Types/ResultSet/ResultSet.md) \<[`Leg`](../../../../interfaces/API/Entities/Instruction/Types/Leg/Leg.md)\>\>

Retrieve all legs of this Instruction

#### Parameters

| Name              | Type                                                                                       |
| :---------------- | :----------------------------------------------------------------------------------------- |
| `paginationOpts?` | [`PaginationOptions`](../../../../interfaces/Types/PaginationOptions/PaginationOptions.md) |

#### Returns

`Promise`\<[`ResultSet`](../../../../interfaces/Types/ResultSet/ResultSet.md) \<[`Leg`](../../../../interfaces/API/Entities/Instruction/Types/Leg/Leg.md)\>\>

**`Note`**

supports pagination

#### Defined in

[api/entities/Instruction/index.ts:353](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/Instruction/index.ts#L353)

---

### getStatus

▸ **getStatus**(): `Promise`\<[`InstructionStatusResult`](../../../../modules/API/Entities/Instruction/Types/Types.md#instructionstatusresult)\>

Retrieve current status of this Instruction

#### Returns

`Promise`\<[`InstructionStatusResult`](../../../../modules/API/Entities/Instruction/Types/Types.md#instructionstatusresult)\>

**`Note`**

uses the middleware

#### Defined in

[api/entities/Instruction/index.ts:404](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/Instruction/index.ts#L404)

---

### getStatusV2

▸ **getStatusV2**(): `Promise`\<[`InstructionStatusResult`](../../../../modules/API/Entities/Instruction/Types/Types.md#instructionstatusresult)\>

Retrieve current status of this Instruction

#### Returns

`Promise`\<[`InstructionStatusResult`](../../../../modules/API/Entities/Instruction/Types/Types.md#instructionstatusresult)\>

**`Note`**

uses the middlewareV2

#### Defined in

[api/entities/Instruction/index.ts:446](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/Instruction/index.ts#L446)

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

### isExecuted

▸ **isExecuted**(): `Promise`\<`boolean`\>

Retrieve whether the Instruction has already been executed and pruned from
the chain.

#### Returns

`Promise`\<`boolean`\>

#### Defined in

[api/entities/Instruction/index.ts:155](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/Instruction/index.ts#L155)

---

### isPending

▸ **isPending**(): `Promise`\<`boolean`\>

Retrieve whether the Instruction is still pending on chain

#### Returns

`Promise`\<`boolean`\>

#### Defined in

[api/entities/Instruction/index.ts:179](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/Instruction/index.ts#L179)

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

[api/entities/Instruction/index.ts:204](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/Instruction/index.ts#L204)

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

[api/entities/Instruction/index.ts:490](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/Instruction/index.ts#L490)

---

### reschedule

▸ **reschedule**(`opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction) \<[`Instruction`](Instruction.md), [`Instruction`](Instruction.md)\>\>

Reschedules a failed Instruction to be tried again

#### Parameters

| Name    | Type                                                                           |
| :------ | :----------------------------------------------------------------------------- |
| `opts?` | [`ProcedureOpts`](../../../../interfaces/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction) \<[`Instruction`](Instruction.md), [`Instruction`](Instruction.md)\>\>

**`Throws`**

if the Instruction status is not `InstructionStatus.Failed`

**`Note`**

this method is of type [NoArgsProcedureMethod](../../../../interfaces/Types/NoArgsProcedureMethod/NoArgsProcedureMethod.md), which means you can call [reschedule.checkAuthorization](../../../../interfaces/Types/NoArgsProcedureMethod/NoArgsProcedureMethod.md#checkauthorization)
on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/entities/Instruction/index.ts:522](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/Instruction/index.ts#L522)

---

### toHuman

▸ **toHuman**(): `string`

Return the Instruction's ID

#### Returns

`string`

#### Overrides

[Entity](../Entity/Entity.md).[toHuman](../Entity/Entity.md#tohuman)

#### Defined in

[api/entities/Instruction/index.ts:593](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/Instruction/index.ts#L593)

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

[api/entities/Instruction/index.ts:510](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/Instruction/index.ts#L510)

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
