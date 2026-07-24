# Class: Instruction

> Defined in: [src/api/entities/Instruction/index.ts:112](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Instruction/index.ts#L112)

# Class: Instruction

Defined in: [src/api/entities/Instruction/index.ts:112](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Instruction/index.ts#L112)

Represents a settlement Instruction to be executed on a certain Venue

## Extends

- [`Entity`](../../Entity/classes/Entity.mdx)\<[`UniqueIdentifiers`](../interfaces/UniqueIdentifiers.mdx), `string`\>

## Properties

### id

> **id**: `BigNumber`

Defined in: [src/api/entities/Instruction/index.ts:126](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Instruction/index.ts#L126)

Unique identifier number of the instruction

***

### uuid

> **uuid**: `string`

Defined in: [src/api/entities/Entity.ts:46](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Entity.ts#L46)

#### Inherited from

[`Entity`](../../Entity/classes/Entity.mdx).[`uuid`](../../Entity/classes/Entity.mdx#uuid)

## Methods

### affirm()

> **affirm**(`args?`: [`AffirmInstructionParams`](../../../procedures/types/type-aliases/AffirmInstructionParams.mdx), `opts?`: [`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)): `Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`Instruction`, `Instruction`\>\>

Defined in: [src/api/entities/Instruction/index.ts:910](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Instruction/index.ts#L910)

Affirm this instruction (authorize)

#### Parameters

Parameter
Type

`args?`

[`AffirmInstructionParams`](../../../procedures/types/type-aliases/AffirmInstructionParams.mdx)

`opts?`

[`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`Instruction`, `Instruction`\>\>

#### Note

this method is of type [OptionalArgsProcedureMethod](../../../procedures/types/interfaces/OptionalArgsProcedureMethod.mdx), which means you can call [affirm.checkAuthorization](../../../procedures/types/interfaces/OptionalArgsProcedureMethod.mdx#checkauthorization) on it to see whether the signing Account and Identity have the required roles and permissions to run it

***

### affirmAsMediator()

> **affirmAsMediator**(`args?`: [`AffirmAsMediatorParams`](../../../procedures/types/type-aliases/AffirmAsMediatorParams.mdx), `opts?`: [`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)): `Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`Instruction`, `Instruction`\>\>

Defined in: [src/api/entities/Instruction/index.ts:931](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Instruction/index.ts#L931)

Affirm this instruction as a mediator (authorize)

#### Parameters

Parameter
Type

`args?`

[`AffirmAsMediatorParams`](../../../procedures/types/type-aliases/AffirmAsMediatorParams.mdx)

`opts?`

[`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`Instruction`, `Instruction`\>\>

#### Note

this method is of type [OptionalArgsProcedureMethod](../../../procedures/types/interfaces/OptionalArgsProcedureMethod.mdx), which means you can call [affirmAsMediator.checkAuthorization](../../../procedures/types/interfaces/OptionalArgsProcedureMethod.mdx#checkauthorization) on it to see whether the signing Account and Identity have the required roles and permissions to run it

***

### details()

> **details**(): `Promise`\<[`InstructionDetails`](../types/type-aliases/InstructionDetails.mdx)\>

Defined in: [src/api/entities/Instruction/index.ts:549](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Instruction/index.ts#L549)

Retrieve information specific to this Instruction

#### Returns

`Promise`\<[`InstructionDetails`](../types/type-aliases/InstructionDetails.mdx)\>

#### Note

uses middleware (if available) to retrieve information, otherwise directly queries from the chain

#### Throws

if
 - instruction does not exists
 - instruction is not yet processed by the middleware (when querying from middleware)
 - instruction is executed/rejected and was pruned from chain (when querying from chain)

***

### executeManually()

> **executeManually**(`args?`: [`ExecuteManualInstructionParams`](../../../procedures/types/interfaces/ExecuteManualInstructionParams.mdx), `opts?`: [`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)): `Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`Instruction`, `Instruction`\>\>

Defined in: [src/api/entities/Instruction/index.ts:943](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Instruction/index.ts#L943)

Executes an Instruction either of type `SettleManual` or a `Failed` instruction

#### Parameters

Parameter
Type

`args?`

[`ExecuteManualInstructionParams`](../../../procedures/types/interfaces/ExecuteManualInstructionParams.mdx)

`opts?`

[`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`Instruction`, `Instruction`\>\>

#### Note

this method is of type [OptionalArgsProcedureMethod](../../../procedures/types/interfaces/OptionalArgsProcedureMethod.mdx), which means you can call [executeManually.checkAuthorization](../../../procedures/types/interfaces/OptionalArgsProcedureMethod.mdx#checkauthorization) on it to see whether the signing Account and Identity have the required roles and permissions to run it

***

### exists()

> **exists**(): `Promise`\<`boolean`\>

Defined in: [src/api/entities/Instruction/index.ts:390](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Instruction/index.ts#L390)

Determine whether this Instruction exists on chain (or existed and was pruned)

#### Returns

`Promise`\<`boolean`\>

#### Overrides

[`Entity`](../../Entity/classes/Entity.mdx).[`exists`](../../Entity/classes/Entity.mdx#exists)

***

### generateOffChainAffirmationReceipt()

> **generateOffChainAffirmationReceipt**(`args`: `object`): `Promise`\<[`OffChainAffirmationReceipt`](../../../procedures/types/interfaces/OffChainAffirmationReceipt.mdx)\>

Defined in: [src/api/entities/Instruction/index.ts:1289](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Instruction/index.ts#L1289)

Generate an offchain affirmation receipt for a specific leg and UID

#### Parameters

Parameter
Type
Description

`args`

\{ `expiresAt?`: `Date`; `legId`: `BigNumber`; `metadata?`: `string`; `signer?`: `string` \| [`Account`](../../Account/classes/Account.mdx); `signerKeyRingType?`: [`SignerKeyRingType`](../../../procedures/types/enumerations/SignerKeyRingType.mdx); `uid`: `BigNumber`; \}

&hyphen;

`args.expiresAt?`

`Date`

&hyphen;

`args.legId`

`BigNumber`

index of the offchain leg in this instruction

`args.metadata?`

`string`

(optional) metadata to be associated with the receipt

`args.signer?`

`string` \| [`Account`](../../Account/classes/Account.mdx)

(optional) Signer to be used to generate receipt signature. Defaults to signing Account associated with the SDK

`args.signerKeyRingType?`

[`SignerKeyRingType`](../../../procedures/types/enumerations/SignerKeyRingType.mdx)

(optional) keyring type of the signer. Defaults to 'Sr25519'

`args.uid`

`BigNumber`

UID of the receipt

#### Returns

`Promise`\<[`OffChainAffirmationReceipt`](../../../procedures/types/interfaces/OffChainAffirmationReceipt.mdx)\>

***

### getAffirmations()

> **getAffirmations**(`paginationOpts?`: [`PaginationOptions`](../../types/interfaces/PaginationOptions.mdx) \| [`MiddlewarePaginationOptions`](../../types/interfaces/MiddlewarePaginationOptions.mdx)): `Promise`\<[`ResultSet`](../../types/interfaces/ResultSet.mdx)\<[`InstructionAffirmation`](../types/interfaces/InstructionAffirmation.mdx)\>\>

Defined in: [src/api/entities/Instruction/index.ts:585](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Instruction/index.ts#L585)

Retrieve every authorization generated by this Instruction (status and authorizing Identity or Account)

#### Parameters

Parameter
Type

`paginationOpts?`

[`PaginationOptions`](../../types/interfaces/PaginationOptions.mdx) \| [`MiddlewarePaginationOptions`](../../types/interfaces/MiddlewarePaginationOptions.mdx)

#### Returns

`Promise`\<[`ResultSet`](../../types/interfaces/ResultSet.mdx)\<[`InstructionAffirmation`](../types/interfaces/InstructionAffirmation.mdx)\>\>

#### Note

supports pagination.

#### Note

uses middleware (if available) to retrieve information, otherwise directly queries from the chain

#### Throws

if
 - instruction does not exists
 - instruction is executed/rejected and was pruned from chain (when querying from chain)

***

### getInvolvedPortfolios()

> **getInvolvedPortfolios**(`args`: `object`): `Promise`\<([`DefaultPortfolio`](../../DefaultPortfolio/classes/DefaultPortfolio.mdx) \| [`NumberedPortfolio`](../../NumberedPortfolio/classes/NumberedPortfolio.mdx))[]\>

Defined in: [src/api/entities/Instruction/index.ts:1010](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Instruction/index.ts#L1010)

Retrieve all the involved portfolios in this Instruction where the given identity is a custodian of

#### Parameters

Parameter
Type

`args`

\{ `did`: `string`; \}

`args.did`

`string`

#### Returns

`Promise`\<([`DefaultPortfolio`](../../DefaultPortfolio/classes/DefaultPortfolio.mdx) \| [`NumberedPortfolio`](../../NumberedPortfolio/classes/NumberedPortfolio.mdx))[]\>

***

### getLegs()

> **getLegs**(`paginationOpts?`: [`PaginationOptions`](../../types/interfaces/PaginationOptions.mdx) \| [`MiddlewarePaginationOptions`](../../types/interfaces/MiddlewarePaginationOptions.mdx)): `Promise`\<[`ResultSet`](../../types/interfaces/ResultSet.mdx)\<[`Leg`](../types/type-aliases/Leg.mdx)\>\>

Defined in: [src/api/entities/Instruction/index.ts:789](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Instruction/index.ts#L789)

Retrieve all legs of this Instruction

#### Parameters

Parameter
Type

`paginationOpts?`

[`PaginationOptions`](../../types/interfaces/PaginationOptions.mdx) \| [`MiddlewarePaginationOptions`](../../types/interfaces/MiddlewarePaginationOptions.mdx)

#### Returns

`Promise`\<[`ResultSet`](../../types/interfaces/ResultSet.mdx)\<[`Leg`](../types/type-aliases/Leg.mdx)\>\>

#### Note

supports pagination

#### Note

uses middleware (if available) to retrieve information, otherwise directly queries from the chain

#### Throws

if
 - instruction does not exists
 - instruction is not yet processed by the middleware (when querying from middleware)
 - instruction is executed/rejected and was pruned from chain (when querying from chain)

***

### getLockedInfo()

> **getLockedInfo**(): `Promise`\<[`InstructionLockedInfo`](../types/interfaces/InstructionLockedInfo.mdx)\>

Defined in: [src/api/entities/Instruction/index.ts:302](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Instruction/index.ts#L302)

Retrieve whether the Instruction is locked for execution on chain

#### Returns

`Promise`\<[`InstructionLockedInfo`](../types/interfaces/InstructionLockedInfo.mdx)\>

***

### getMediators()

> **getMediators**(): `Promise`\<[`MediatorAffirmation`](../types/type-aliases/MediatorAffirmation.mdx)[]\>

Defined in: [src/api/entities/Instruction/index.ts:1062](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Instruction/index.ts#L1062)

Returns the mediators for the Instruction, along with their affirmation status

#### Returns

`Promise`\<[`MediatorAffirmation`](../types/type-aliases/MediatorAffirmation.mdx)[]\>

#### Note

uses middleware (if available) to retrieve information, otherwise directly queries from the chain

#### Throws

if
 - instruction does not exists
 - instruction is not yet processed by the middleware (when querying from middleware)
 - instruction is executed/rejected and was pruned from chain (when querying from chain)

***

### getOffChainAffirmationForLeg()

> **getOffChainAffirmationForLeg**(`args`: `object`): `Promise`\<[`AffirmationStatus`](../types/enumerations/AffirmationStatus.mdx)\>

Defined in: [src/api/entities/Instruction/index.ts:1207](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Instruction/index.ts#L1207)

Returns affirmation status for a specific offchain leg in this Instruction

#### Parameters

Parameter
Type
Description

`args`

\{ `legId`: `BigNumber`; \}

&hyphen;

`args.legId`

`BigNumber`

index of the leg whose affirmation status is to be fetched

#### Returns

`Promise`\<[`AffirmationStatus`](../types/enumerations/AffirmationStatus.mdx)\>

#### Note

uses middleware (if available) to retrieve information, otherwise directly queries from the chain

#### Throws

if
 - instruction does not exists
 - legId provided is not an off-chain leg
 - instruction is not yet processed by the middleware (when querying from middleware)
 - instruction is executed/rejected and was pruned from chain (when querying from chain)

***

### getOffChainAffirmations()

> **getOffChainAffirmations**(): `Promise`\<[`OffChainAffirmation`](../types/interfaces/OffChainAffirmation.mdx)[]\>

Defined in: [src/api/entities/Instruction/index.ts:1142](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Instruction/index.ts#L1142)

Returns affirmation statuses for offchain legs in this Instruction

#### Returns

`Promise`\<[`OffChainAffirmation`](../types/interfaces/OffChainAffirmation.mdx)[]\>

#### Note

uses middleware (if available) to retrieve information, otherwise directly queries from the chain

#### Throws

if
 - instruction does not exists
 - instruction is not yet processed by the middleware (when querying from middleware)
 - instruction is executed/rejected and was pruned from chain (when querying from chain)

***

### getPendingAffirmationCount()

> **getPendingAffirmationCount**(): `Promise`\<`BigNumber`\>

Defined in: [src/api/entities/Instruction/index.ts:260](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Instruction/index.ts#L260)

Get the number of affirmations pending before instruction can be executed

#### Returns

`Promise`\<`BigNumber`\>

#### Note

The count is returned as 0 for pruned instructions as well

***

### getStatus()

> **getStatus**(): `Promise`\<[`InstructionStatusResult`](../types/type-aliases/InstructionStatusResult.mdx)\>

Defined in: [src/api/entities/Instruction/index.ts:834](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Instruction/index.ts#L834)

Retrieve current status of this Instruction

#### Returns

`Promise`\<[`InstructionStatusResult`](../types/type-aliases/InstructionStatusResult.mdx)\>

#### Note

uses the middlewareV2

***

### isEqual()

> **isEqual**(`entity`: [`Entity`](../../Entity/classes/Entity.mdx)\<`unknown`, `unknown`\>): `boolean`

Defined in: [src/api/entities/Entity.ts:61](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Entity.ts#L61)

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

### isExecuted()

> **isExecuted**(): `Promise`\<`boolean`\>

Defined in: [src/api/entities/Instruction/index.ts:229](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Instruction/index.ts#L229)

Retrieve whether the Instruction has already been executed and pruned from
  the chain.

#### Returns

`Promise`\<`boolean`\>

***

### isPending()

> **isPending**(): `Promise`\<`boolean`\>

Defined in: [src/api/entities/Instruction/index.ts:281](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Instruction/index.ts#L281)

Retrieve whether the Instruction is still pending on chain

#### Returns

`Promise`\<`boolean`\>

***

### lockForExecution()

> **lockForExecution**(`opts?`: [`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)): `Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`Instruction`, `Instruction`\>\>

Defined in: [src/api/entities/Instruction/index.ts:960](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Instruction/index.ts#L960)

Locks an Instruction of type `SettleAfterLock` for execution. Only a mediator of the instruction can lock the instruction.

#### Parameters

Parameter
Type

`opts?`

[`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`Instruction`, `Instruction`\>\>

#### Note

An Instruction can only be locked if
 - it has been affirmed by all parties
 - it is pending or has failed at least one time
 - all mediator affirmations are valid
 - all assets are in allowed venue list
 - all senders have the right amount of assets being transferred
 - all senders and receivers are compliant and have valid CDD claims
 - all assets' statistics are still valid
 - there are no frozen assets

#### Throws

if any of the above conditions are not met

#### Note

this method is of type [NoArgsProcedureMethod](../../../procedures/types/interfaces/NoArgsProcedureMethod.mdx), which means you can call [lockForExecution.checkAuthorization](../../../procedures/types/interfaces/NoArgsProcedureMethod.mdx#checkauthorization) on it to see whether the signing Account and Identity have the required roles and permissions to run it

***

### onStatusChange()

> **onStatusChange**(`callback`: [`SubCallback`](../../types/type-aliases/SubCallback.mdx)\<[`InstructionStatus`](../types/enumerations/InstructionStatus.mdx)\>): `Promise`\<[`UnsubCallback`](../../types/type-aliases/UnsubCallback.mdx)\>

Defined in: [src/api/entities/Instruction/index.ts:356](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Instruction/index.ts#L356)

Retrieve current status of the Instruction. This can be subscribed to know if instruction fails

#### Parameters

Parameter
Type

`callback`

[`SubCallback`](../../types/type-aliases/SubCallback.mdx)\<[`InstructionStatus`](../types/enumerations/InstructionStatus.mdx)\>

#### Returns

`Promise`\<[`UnsubCallback`](../../types/type-aliases/UnsubCallback.mdx)\>

#### Note

can be subscribed to, if connected to node using a web socket

#### Note

current status as `Executed` means that the Instruction has been executed/rejected and pruned from
  the chain.

***

### reject()

> **reject**(`args?`: [`RejectInstructionParams`](../../../procedures/types/type-aliases/RejectInstructionParams.mdx), `opts?`: [`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)): `Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`Instruction`, `Instruction`\>\>

Defined in: [src/api/entities/Instruction/index.ts:905](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Instruction/index.ts#L905)

Reject this instruction

#### Parameters

Parameter
Type

`args?`

[`RejectInstructionParams`](../../../procedures/types/type-aliases/RejectInstructionParams.mdx)

`opts?`

[`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`Instruction`, `Instruction`\>\>

#### Note

reject on `SettleOnAffirmation` will execute the settlement and it will fail immediately.

#### Note

reject on `SettleOnBlock` behaves just like unauthorize

#### Note

reject on `SettleManual` behaves just like unauthorize

#### Note

this method is of type [OptionalArgsProcedureMethod](../../../procedures/types/interfaces/OptionalArgsProcedureMethod.mdx), which means you can call [reject.checkAuthorization](../../../procedures/types/interfaces/OptionalArgsProcedureMethod.mdx#checkauthorization) on it to see whether the signing Account and Identity have the required roles and permissions to run it

***

### rejectAsMediator()

> **rejectAsMediator**(`opts?`: [`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)): `Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`Instruction`, `Instruction`\>\>

Defined in: [src/api/entities/Instruction/index.ts:926](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Instruction/index.ts#L926)

Reject this instruction as a mediator

#### Parameters

Parameter
Type

`opts?`

[`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`Instruction`, `Instruction`\>\>

#### Note

reject on `SettleOnAffirmation` will execute the settlement and it will fail immediately.

#### Note

reject on `SettleOnBlock` behaves just like unauthorize

#### Note

reject on `SettleManual` behaves just like unauthorize

#### Note

this method is of type [NoArgsProcedureMethod](../../../procedures/types/interfaces/NoArgsProcedureMethod.mdx), which means you can call [rejectAsMediator.checkAuthorization](../../../procedures/types/interfaces/NoArgsProcedureMethod.mdx#checkauthorization) on it to see whether the signing Account and Identity have the required roles and permissions to run it

***

### toHuman()

> **toHuman**(): `string`

Defined in: [src/api/entities/Instruction/index.ts:1003](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Instruction/index.ts#L1003)

Return the Instruction's ID

#### Returns

`string`

#### Overrides

[`Entity`](../../Entity/classes/Entity.mdx).[`toHuman`](../../Entity/classes/Entity.mdx#tohuman)

***

### ~~withdraw()~~

> **withdraw**(`args?`: [`WithdrawInstructionParams`](../../../procedures/types/type-aliases/WithdrawInstructionParams.mdx), `opts?`: [`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)): `Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`Instruction`, `Instruction`\>\>

Defined in: [src/api/entities/Instruction/index.ts:917](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Instruction/index.ts#L917)

Withdraw affirmation from this instruction (unauthorize)

#### Parameters

Parameter
Type

`args?`

[`WithdrawInstructionParams`](../../../procedures/types/type-aliases/WithdrawInstructionParams.mdx)

`opts?`

[`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`Instruction`, `Instruction`\>\>

#### Deprecated

Withdrawing affirmation is no longer supported in chain v8. If you need to revoke the affirmation, you can do that by using `reject` method.

#### Note

this method is of type [OptionalArgsProcedureMethod](../../../procedures/types/interfaces/OptionalArgsProcedureMethod.mdx), which means you can call [withdraw.checkAuthorization](../../../procedures/types/interfaces/OptionalArgsProcedureMethod.mdx#checkauthorization) on it to see whether the signing Account and Identity have the required roles and permissions to run it

***

### ~~withdrawAsMediator()~~

> **withdrawAsMediator**(`opts?`: [`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)): `Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`Instruction`, `Instruction`\>\>

Defined in: [src/api/entities/Instruction/index.ts:938](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Instruction/index.ts#L938)

Withdraw affirmation from this instruction as a mediator (unauthorize)

#### Parameters

Parameter
Type

`opts?`

[`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`Instruction`, `Instruction`\>\>

#### Deprecated

Withdrawing affirmation is no longer supported in chain v8. If you need to revoke the affirmation, you can do that by using `rejectAsMediator` method.

#### Note

this method is of type [NoArgsProcedureMethod](../../../procedures/types/interfaces/NoArgsProcedureMethod.mdx), which means you can call [withdrawAsMediator.checkAuthorization](../../../procedures/types/interfaces/NoArgsProcedureMethod.mdx#checkauthorization) on it to see whether the signing Account and Identity have the required roles and permissions to run it

***

### generateUuid()

> `static` **generateUuid**\<`Identifiers`\>(`identifiers`: `Identifiers`): `string`

Defined in: [src/api/entities/Entity.ts:14](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Entity.ts#L14)

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

Defined in: [src/api/entities/Entity.ts:23](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Entity.ts#L23)

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
