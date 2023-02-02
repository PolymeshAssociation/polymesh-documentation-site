---
id: "Subsidy"
title: "Class: Subsidy"
sidebar_label: "Subsidy"
---

[api/entities/Subsidy](../../../../modules/API/Entities/Subsidy/Subsidy.md).Subsidy

Represents a Subsidy relationship on chain

## Hierarchy

- [`Entity`](../Entity/Entity.md)<[`UniqueIdentifiers`](../../../../interfaces/API/Entities/Subsidy/UniqueIdentifiers/UniqueIdentifiers.md), `HumanReadable`\>

  ↳ **`Subsidy`**

## Properties

### beneficiary

• **beneficiary**: [`Account`](../Account/Account.md)

Account whose transactions are being paid for

#### Defined in

[api/entities/Subsidy/index.ts:54](https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/api/entities/Subsidy/index.ts#L54)

___

### subsidizer

• **subsidizer**: [`Account`](../Account/Account.md)

Account that is paying for the transactions

#### Defined in

[api/entities/Subsidy/index.ts:58](https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/api/entities/Subsidy/index.ts#L58)

___

### uuid

• **uuid**: `string`

#### Inherited from

[Entity](../Entity/Entity.md).[uuid](../Entity/Entity.md#uuid)

#### Defined in

[api/entities/Entity.ts:46](https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/api/entities/Entity.ts#L46)

## Methods

### decreaseAllowance

▸ **decreaseAllowance**(`args`, `opts?`): `Promise`<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction)<`void`, `void`\>\>

Decrease allowance for this Subsidy relationship

**`Note`**

Only the subsidizer is allowed to decrease the allowance

**`Throws`**

if the amount to decrease by is more than the existing allowance

**`Note`**

this method is of type [ProcedureMethod](../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [decreaseAllowance.checkAuthorization](../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Pick`<[`DecreaseAllowanceParams`](../../../../interfaces/API/Procedures/Types/DecreaseAllowanceParams/DecreaseAllowanceParams.md), ``"allowance"``\> |
| `opts?` | [`ProcedureOpts`](../../../../interfaces/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction)<`void`, `void`\>\>

___

### exists

▸ **exists**(): `Promise`<`boolean`\>

Determine whether this Subsidy relationship exists on chain

#### Returns

`Promise`<`boolean`\>

#### Overrides

[Entity](../Entity/Entity.md).[exists](../Entity/Entity.md#exists)

___

### getAllowance

▸ **getAllowance**(): `Promise`<`BigNumber`\>

Get amount of POLYX subsidized for this Subsidy relationship

**`Throws`**

if the Subsidy does not exist

#### Returns

`Promise`<`BigNumber`\>

___

### increaseAllowance

▸ **increaseAllowance**(`args`, `opts?`): `Promise`<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction)<`void`, `void`\>\>

Increase allowance for this Subsidy relationship

**`Note`**

Only the subsidizer is allowed to increase the allowance

**`Note`**

this method is of type [ProcedureMethod](../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [increaseAllowance.checkAuthorization](../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Pick`<[`IncreaseAllowanceParams`](../../../../interfaces/API/Procedures/Types/IncreaseAllowanceParams/IncreaseAllowanceParams.md), ``"allowance"``\> |
| `opts?` | [`ProcedureOpts`](../../../../interfaces/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction)<`void`, `void`\>\>

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

### quit

▸ **quit**(`opts?`): `Promise`<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction)<`void`, `void`\>\>

Terminate this Subsidy relationship. The beneficiary Account will be forced to pay for their own transactions

**`Note`**

both the beneficiary and the subsidizer are allowed to unilaterally quit the Subsidy

**`Note`**

this method is of type [NoArgsProcedureMethod](../../../../interfaces/Types/NoArgsProcedureMethod/NoArgsProcedureMethod.md), which means you can call [quit.checkAuthorization](../../../../interfaces/Types/NoArgsProcedureMethod/NoArgsProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`ProcedureOpts`](../../../../interfaces/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction)<`void`, `void`\>\>

___

### setAllowance

▸ **setAllowance**(`args`, `opts?`): `Promise`<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction)<`void`, `void`\>\>

Set allowance for this Subsidy relationship

**`Note`**

Only the subsidizer is allowed to set the allowance

**`Throws`**

if the allowance to set is equal to the current allowance

**`Note`**

this method is of type [ProcedureMethod](../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [setAllowance.checkAuthorization](../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Pick`<[`SetAllowanceParams`](../../../../interfaces/API/Procedures/Types/SetAllowanceParams/SetAllowanceParams.md), ``"allowance"``\> |
| `opts?` | [`ProcedureOpts`](../../../../interfaces/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction)<`void`, `void`\>\>

___

### toHuman

▸ **toHuman**(): [`UniqueIdentifiers`](../../../../interfaces/API/Entities/Subsidy/UniqueIdentifiers/UniqueIdentifiers.md)

Return the Subsidy's static data

#### Returns

[`UniqueIdentifiers`](../../../../interfaces/API/Entities/Subsidy/UniqueIdentifiers/UniqueIdentifiers.md)

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
