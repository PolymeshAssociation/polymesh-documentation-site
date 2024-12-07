---
id: "Instruction"
title: "Class: Instruction"
sidebar_label: "Instruction"
---

[api/entities/Instruction](../../../../modules/API/Entities/Instruction/Instruction.md).Instruction

Represents a settlement Instruction to be executed on a certain Venue

## Hierarchy

- [`Entity`](../Entity/Entity.md)\<[`UniqueIdentifiers`](../../../../interfaces/API/Entities/Instruction/UniqueIdentifiers/UniqueIdentifiers.md), `string`\>

  ↳ **`Instruction`**

## Properties

### id

• **id**: `BigNumber`

Unique identifier number of the instruction

#### Defined in

[api/entities/Instruction/index.ts:102](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c8da9dfce/src/api/entities/Instruction/index.ts#L102)

___

### uuid

• **uuid**: `string`

#### Inherited from

[Entity](../Entity/Entity.md).[uuid](../Entity/Entity.md#uuid)

#### Defined in

[api/entities/Entity.ts:46](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c8da9dfce/src/api/entities/Entity.ts#L46)

## Methods

### affirm

▸ **affirm**(`args?`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<[`Instruction`](Instruction.md), [`Instruction`](Instruction.md)\>\>

Affirm this instruction (authorize)

#### Parameters

| Name | Type |
| :------ | :------ |
| `args?` | [`AffirmInstructionParams`](../../../../modules/API/Procedures/Types/Types.md#affirminstructionparams) |
| `opts?` | [`ProcedureOpts`](../../../../interfaces/API/Procedures/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<[`Instruction`](Instruction.md), [`Instruction`](Instruction.md)\>\>

**`Note`**

this method is of type [OptionalArgsProcedureMethod](../../../../interfaces/API/Procedures/Types/OptionalArgsProcedureMethod/OptionalArgsProcedureMethod.md), which means you can call [affirm.checkAuthorization](../../../../interfaces/API/Procedures/Types/OptionalArgsProcedureMethod/OptionalArgsProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/entities/Instruction/index.ts:560](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c8da9dfce/src/api/entities/Instruction/index.ts#L560)

___

### affirmAsMediator

▸ **affirmAsMediator**(`args?`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<[`Instruction`](Instruction.md), [`Instruction`](Instruction.md)\>\>

Affirm this instruction as a mediator (authorize)

#### Parameters

| Name | Type |
| :------ | :------ |
| `args?` | [`AffirmAsMediatorParams`](../../../../modules/API/Procedures/Types/Types.md#affirmasmediatorparams) |
| `opts?` | [`ProcedureOpts`](../../../../interfaces/API/Procedures/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<[`Instruction`](Instruction.md), [`Instruction`](Instruction.md)\>\>

**`Note`**

this method is of type [OptionalArgsProcedureMethod](../../../../interfaces/API/Procedures/Types/OptionalArgsProcedureMethod/OptionalArgsProcedureMethod.md), which means you can call [affirmAsMediator.checkAuthorization](../../../../interfaces/API/Procedures/Types/OptionalArgsProcedureMethod/OptionalArgsProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/entities/Instruction/index.ts:594](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c8da9dfce/src/api/entities/Instruction/index.ts#L594)

___

### details

▸ **details**(): `Promise`\<[`InstructionDetails`](../../../../modules/API/Entities/Instruction/Types/Types.md#instructiondetails)\>

Retrieve information specific to this Instruction

#### Returns

`Promise`\<[`InstructionDetails`](../../../../modules/API/Entities/Instruction/Types/Types.md#instructiondetails)\>

#### Defined in

[api/entities/Instruction/index.ts:299](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c8da9dfce/src/api/entities/Instruction/index.ts#L299)

___

### executeManually

▸ **executeManually**(`args?`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<[`Instruction`](Instruction.md), [`Instruction`](Instruction.md)\>\>

Executes an Instruction either of type `SettleManual` or a `Failed` instruction

#### Parameters

| Name | Type |
| :------ | :------ |
| `args?` | [`ExecuteManualInstructionParams`](../../../../interfaces/API/Procedures/Types/ExecuteManualInstructionParams/ExecuteManualInstructionParams.md) |
| `opts?` | [`ProcedureOpts`](../../../../interfaces/API/Procedures/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<[`Instruction`](Instruction.md), [`Instruction`](Instruction.md)\>\>

**`Note`**

this method is of type [OptionalArgsProcedureMethod](../../../../interfaces/API/Procedures/Types/OptionalArgsProcedureMethod/OptionalArgsProcedureMethod.md), which means you can call [executeManually.checkAuthorization](../../../../interfaces/API/Procedures/Types/OptionalArgsProcedureMethod/OptionalArgsProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/entities/Instruction/index.ts:614](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c8da9dfce/src/api/entities/Instruction/index.ts#L614)

___

### exists

▸ **exists**(): `Promise`\<`boolean`\>

Determine whether this Instruction exists on chain (or existed and was pruned)

#### Returns

`Promise`\<`boolean`\>

#### Overrides

[Entity](../Entity/Entity.md).[exists](../Entity/Entity.md#exists)

#### Defined in

[api/entities/Instruction/index.ts:281](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c8da9dfce/src/api/entities/Instruction/index.ts#L281)

___

### generateOffChainAffirmationReceipt

▸ **generateOffChainAffirmationReceipt**(`args`): `Promise`\<[`OffChainAffirmationReceipt`](../../../../interfaces/API/Procedures/Types/OffChainAffirmationReceipt/OffChainAffirmationReceipt.md)\>

Generate an offchain affirmation receipt for a specific leg and UID

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | `Object` | - |
| `args.legId` | `BigNumber` | index of the offchain leg in this instruction |
| `args.metadata?` | `string` | (optional) metadata to be associated with the receipt |
| `args.signer?` | `string` \| [`Account`](../Account/Account.md) | (optional) Signer to be used to generate receipt signature. Defaults to signing Account associated with the SDK |
| `args.signerKeyRingType?` | [`SignerKeyRingType`](../../../../enums/API/Procedures/Types/SignerKeyRingType/SignerKeyRingType.md) | (optional) keyring type of the signer. Defaults to 'Sr25519' |
| `args.uid` | `BigNumber` | UID of the receipt |

#### Returns

`Promise`\<[`OffChainAffirmationReceipt`](../../../../interfaces/API/Procedures/Types/OffChainAffirmationReceipt/OffChainAffirmationReceipt.md)\>

#### Defined in

[api/entities/Instruction/index.ts:826](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c8da9dfce/src/api/entities/Instruction/index.ts#L826)

___

### getAffirmations

▸ **getAffirmations**(`paginationOpts?`): `Promise`\<[`ResultSet`](../../../../interfaces/API/Entities/Types/ResultSet/ResultSet.md)\<[`InstructionAffirmation`](../../../../interfaces/API/Entities/Instruction/Types/InstructionAffirmation/InstructionAffirmation.md)\>\>

Retrieve every authorization generated by this Instruction (status and authorizing Identity)

#### Parameters

| Name | Type |
| :------ | :------ |
| `paginationOpts?` | [`PaginationOptions`](../../../../interfaces/API/Entities/Types/PaginationOptions/PaginationOptions.md) |

#### Returns

`Promise`\<[`ResultSet`](../../../../interfaces/API/Entities/Types/ResultSet/ResultSet.md)\<[`InstructionAffirmation`](../../../../interfaces/API/Entities/Instruction/Types/InstructionAffirmation/InstructionAffirmation.md)\>\>

**`Note`**

supports pagination

#### Defined in

[api/entities/Instruction/index.ts:351](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c8da9dfce/src/api/entities/Instruction/index.ts#L351)

___

### getInvolvedPortfolios

▸ **getInvolvedPortfolios**(`args`): `Promise`\<([`NumberedPortfolio`](../NumberedPortfolio/NumberedPortfolio.md) \| [`DefaultPortfolio`](../DefaultPortfolio/DefaultPortfolio.md))[]\>

Retrieve all the involved portfolios in this Instruction where the given identity is a custodian of

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.did` | `string` |

#### Returns

`Promise`\<([`NumberedPortfolio`](../NumberedPortfolio/NumberedPortfolio.md) \| [`DefaultPortfolio`](../DefaultPortfolio/DefaultPortfolio.md))[]\>

#### Defined in

[api/entities/Instruction/index.ts:664](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c8da9dfce/src/api/entities/Instruction/index.ts#L664)

___

### getLegs

▸ **getLegs**(`paginationOpts?`): `Promise`\<[`ResultSet`](../../../../interfaces/API/Entities/Types/ResultSet/ResultSet.md)\<[`Leg`](../../../../modules/API/Entities/Instruction/Types/Types.md#leg)\>\>

Retrieve all legs of this Instruction

#### Parameters

| Name | Type |
| :------ | :------ |
| `paginationOpts?` | [`PaginationOptions`](../../../../interfaces/API/Entities/Types/PaginationOptions/PaginationOptions.md) |

#### Returns

`Promise`\<[`ResultSet`](../../../../interfaces/API/Entities/Types/ResultSet/ResultSet.md)\<[`Leg`](../../../../modules/API/Entities/Instruction/Types/Types.md#leg)\>\>

**`Note`**

supports pagination

#### Defined in

[api/entities/Instruction/index.ts:397](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c8da9dfce/src/api/entities/Instruction/index.ts#L397)

___

### getMediators

▸ **getMediators**(): `Promise`\<[`MediatorAffirmation`](../../../../modules/API/Entities/Instruction/Types/Types.md#mediatoraffirmation)[]\>

Returns the mediators for the Instruction, along with their affirmation status

#### Returns

`Promise`\<[`MediatorAffirmation`](../../../../modules/API/Entities/Instruction/Types/Types.md#mediatoraffirmation)[]\>

#### Defined in

[api/entities/Instruction/index.ts:711](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c8da9dfce/src/api/entities/Instruction/index.ts#L711)

___

### getOffChainAffirmationForLeg

▸ **getOffChainAffirmationForLeg**(`args`): `Promise`\<[`AffirmationStatus`](../../../../enums/API/Entities/Instruction/Types/AffirmationStatus/AffirmationStatus.md)\>

Returns affirmation status for a specific offchain leg in this Instruction

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | `Object` | - |
| `args.legId` | `BigNumber` | index of the leg whose affirmation status is to be fetched |

#### Returns

`Promise`\<[`AffirmationStatus`](../../../../enums/API/Entities/Instruction/Types/AffirmationStatus/AffirmationStatus.md)\>

#### Defined in

[api/entities/Instruction/index.ts:775](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c8da9dfce/src/api/entities/Instruction/index.ts#L775)

___

### getOffChainAffirmations

▸ **getOffChainAffirmations**(): `Promise`\<[`OffChainAffirmation`](../../../../interfaces/API/Entities/Instruction/Types/OffChainAffirmation/OffChainAffirmation.md)[]\>

Returns affirmation statuses for offchain legs in this Instruction

#### Returns

`Promise`\<[`OffChainAffirmation`](../../../../interfaces/API/Entities/Instruction/Types/OffChainAffirmation/OffChainAffirmation.md)[]\>

#### Defined in

[api/entities/Instruction/index.ts:740](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c8da9dfce/src/api/entities/Instruction/index.ts#L740)

___

### getStatus

▸ **getStatus**(): `Promise`\<[`InstructionStatusResult`](../../../../modules/API/Entities/Instruction/Types/Types.md#instructionstatusresult)\>

Retrieve current status of this Instruction

#### Returns

`Promise`\<[`InstructionStatusResult`](../../../../modules/API/Entities/Instruction/Types/Types.md#instructionstatusresult)\>

**`Note`**

uses the middlewareV2

#### Defined in

[api/entities/Instruction/index.ts:497](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c8da9dfce/src/api/entities/Instruction/index.ts#L497)

___

### isEqual

▸ **isEqual**(`entity`): `boolean`

Determine whether this Entity is the same as another one

#### Parameters

| Name | Type |
| :------ | :------ |
| `entity` | [`Entity`](../Entity/Entity.md)\<`unknown`, `unknown`\> |

#### Returns

`boolean`

#### Inherited from

[Entity](../Entity/Entity.md).[isEqual](../Entity/Entity.md#isequal)

#### Defined in

[api/entities/Entity.ts:61](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c8da9dfce/src/api/entities/Entity.ts#L61)

___

### isExecuted

▸ **isExecuted**(): `Promise`\<`boolean`\>

Retrieve whether the Instruction has already been executed and pruned from
  the chain.

#### Returns

`Promise`\<`boolean`\>

#### Defined in

[api/entities/Instruction/index.ts:193](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c8da9dfce/src/api/entities/Instruction/index.ts#L193)

___

### isPending

▸ **isPending**(): `Promise`\<`boolean`\>

Retrieve whether the Instruction is still pending on chain

#### Returns

`Promise`\<`boolean`\>

#### Defined in

[api/entities/Instruction/index.ts:222](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c8da9dfce/src/api/entities/Instruction/index.ts#L222)

___

### onStatusChange

▸ **onStatusChange**(`callback`): `Promise`\<[`UnsubCallback`](../../../../modules/API/Entities/Types/Types.md#unsubcallback)\>

Retrieve current status of the Instruction. This can be subscribed to know if instruction fails

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`SubCallback`](../../../../modules/API/Entities/Types/Types.md#subcallback)\<[`InstructionStatus`](../../../../enums/API/Entities/Instruction/Types/InstructionStatus/InstructionStatus.md)\> |

#### Returns

`Promise`\<[`UnsubCallback`](../../../../modules/API/Entities/Types/Types.md#unsubcallback)\>

**`Note`**

can be subscribed to, if connected to node using a web socket

**`Note`**

current status as `Executed` means that the Instruction has been executed/rejected and pruned from
  the chain.

#### Defined in

[api/entities/Instruction/index.ts:247](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c8da9dfce/src/api/entities/Instruction/index.ts#L247)

___

### reject

▸ **reject**(`args?`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<[`Instruction`](Instruction.md), [`Instruction`](Instruction.md)\>\>

Reject this instruction

#### Parameters

| Name | Type |
| :------ | :------ |
| `args?` | [`RejectInstructionParams`](../../../../modules/API/Procedures/Types/Types.md#rejectinstructionparams) |
| `opts?` | [`ProcedureOpts`](../../../../interfaces/API/Procedures/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<[`Instruction`](Instruction.md), [`Instruction`](Instruction.md)\>\>

**`Note`**

reject on `SettleOnAffirmation` will execute the settlement and it will fail immediately.

**`Note`**

reject on `SettleOnBlock` behaves just like unauthorize

**`Note`**

reject on `SettleManual` behaves just like unauthorize

**`Note`**

this method is of type [OptionalArgsProcedureMethod](../../../../interfaces/API/Procedures/Types/OptionalArgsProcedureMethod/OptionalArgsProcedureMethod.md), which means you can call [reject.checkAuthorization](../../../../interfaces/API/Procedures/Types/OptionalArgsProcedureMethod/OptionalArgsProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/entities/Instruction/index.ts:550](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c8da9dfce/src/api/entities/Instruction/index.ts#L550)

___

### rejectAsMediator

▸ **rejectAsMediator**(`opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<[`Instruction`](Instruction.md), [`Instruction`](Instruction.md)\>\>

Reject this instruction as a mediator

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`ProcedureOpts`](../../../../interfaces/API/Procedures/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<[`Instruction`](Instruction.md), [`Instruction`](Instruction.md)\>\>

**`Note`**

reject on `SettleOnAffirmation` will execute the settlement and it will fail immediately.

**`Note`**

reject on `SettleOnBlock` behaves just like unauthorize

**`Note`**

reject on `SettleManual` behaves just like unauthorize

**`Note`**

this method is of type [NoArgsProcedureMethod](../../../../interfaces/API/Procedures/Types/NoArgsProcedureMethod/NoArgsProcedureMethod.md), which means you can call [rejectAsMediator.checkAuthorization](../../../../interfaces/API/Procedures/Types/NoArgsProcedureMethod/NoArgsProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/entities/Instruction/index.ts:584](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c8da9dfce/src/api/entities/Instruction/index.ts#L584)

___

### toHuman

▸ **toHuman**(): `string`

Return the Instruction's ID

#### Returns

`string`

#### Overrides

[Entity](../Entity/Entity.md).[toHuman](../Entity/Entity.md#tohuman)

#### Defined in

[api/entities/Instruction/index.ts:657](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c8da9dfce/src/api/entities/Instruction/index.ts#L657)

___

### withdraw

▸ **withdraw**(`args?`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<[`Instruction`](Instruction.md), [`Instruction`](Instruction.md)\>\>

Withdraw affirmation from this instruction (unauthorize)

#### Parameters

| Name | Type |
| :------ | :------ |
| `args?` | [`WithdrawInstructionParams`](../../../../modules/API/Procedures/Types/Types.md#withdrawinstructionparams) |
| `opts?` | [`ProcedureOpts`](../../../../interfaces/API/Procedures/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<[`Instruction`](Instruction.md), [`Instruction`](Instruction.md)\>\>

**`Note`**

this method is of type [OptionalArgsProcedureMethod](../../../../interfaces/API/Procedures/Types/OptionalArgsProcedureMethod/OptionalArgsProcedureMethod.md), which means you can call [withdraw.checkAuthorization](../../../../interfaces/API/Procedures/Types/OptionalArgsProcedureMethod/OptionalArgsProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/entities/Instruction/index.ts:570](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c8da9dfce/src/api/entities/Instruction/index.ts#L570)

___

### withdrawAsMediator

▸ **withdrawAsMediator**(`opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<[`Instruction`](Instruction.md), [`Instruction`](Instruction.md)\>\>

Withdraw affirmation from this instruction as a mediator (unauthorize)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`ProcedureOpts`](../../../../interfaces/API/Procedures/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<[`Instruction`](Instruction.md), [`Instruction`](Instruction.md)\>\>

**`Note`**

this method is of type [NoArgsProcedureMethod](../../../../interfaces/API/Procedures/Types/NoArgsProcedureMethod/NoArgsProcedureMethod.md), which means you can call [withdrawAsMediator.checkAuthorization](../../../../interfaces/API/Procedures/Types/NoArgsProcedureMethod/NoArgsProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/entities/Instruction/index.ts:604](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c8da9dfce/src/api/entities/Instruction/index.ts#L604)

___

### generateUuid

▸ `Static` **generateUuid**\<`Identifiers`\>(`identifiers`): `string`

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

#### Defined in

[api/entities/Entity.ts:14](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c8da9dfce/src/api/entities/Entity.ts#L14)

___

### unserialize

▸ `Static` **unserialize**\<`Identifiers`\>(`serialized`): `Identifiers`

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

#### Defined in

[api/entities/Entity.ts:23](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c8da9dfce/src/api/entities/Entity.ts#L23)
