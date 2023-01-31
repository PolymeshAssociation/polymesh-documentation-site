---
id: "Offering"
title: "Class: Offering"
sidebar_label: "Offering"
---

# Class: Offering

[api/entities/Offering](../../../../modules/API/Entities/Offering/Offering.md).Offering

Represents an Asset Offering in the Polymesh blockchain

## Hierarchy

- [`Entity`](../Entity/Entity.md)<[`UniqueIdentifiers`](../../../../interfaces/API/Entities/Offering/UniqueIdentifiers/UniqueIdentifiers.md), [`HumanReadable`](../../../../interfaces/API/Entities/Offering/HumanReadable/HumanReadable.md)\>

  ↳ **`Offering`**

## Properties

### asset

• **asset**: [`Asset`](../Asset/Asset.md)

Asset being offered

#### Defined in

[api/entities/Offering/index.ts:67](https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/api/entities/Offering/index.ts#L67)

___

### id

• **id**: `BigNumber`

identifier number of the Offering

#### Defined in

[api/entities/Offering/index.ts:62](https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/api/entities/Offering/index.ts#L62)

___

### uuid

• **uuid**: `string`

#### Inherited from

[Entity](../Entity/Entity.md).[uuid](../Entity/Entity.md#uuid)

#### Defined in

[api/entities/Entity.ts:46](https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/api/entities/Entity.ts#L46)

## Methods

### close

▸ **close**(`opts?`): `Promise`<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction)<`void`, `void`\>\>

Close the Offering

**`Note`**

this method is of type [NoArgsProcedureMethod](../../../../interfaces/Types/NoArgsProcedureMethod/NoArgsProcedureMethod.md), which means you can call [close.checkAuthorization](../../../../interfaces/Types/NoArgsProcedureMethod/NoArgsProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`ProcedureOpts`](../../../../interfaces/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction)<`void`, `void`\>\>

___

### details

▸ **details**(): `Promise`<[`OfferingDetails`](../../../../interfaces/API/Entities/Offering/Types/OfferingDetails/OfferingDetails.md)\>

Retrieve the Offering's details

**`Note`**

can be subscribed to

#### Returns

`Promise`<[`OfferingDetails`](../../../../interfaces/API/Entities/Offering/Types/OfferingDetails/OfferingDetails.md)\>

▸ **details**(`callback`): `Promise`<[`UnsubCallback`](../../../../modules/Types/Types.md#unsubcallback)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`SubCallback`](../../../../modules/Types/Types.md#subcallback)<[`OfferingDetails`](../../../../interfaces/API/Entities/Offering/Types/OfferingDetails/OfferingDetails.md)\> |

#### Returns

`Promise`<[`UnsubCallback`](../../../../modules/Types/Types.md#unsubcallback)\>

___

### exists

▸ **exists**(): `Promise`<`boolean`\>

Determine whether this Offering exists on chain

#### Returns

`Promise`<`boolean`\>

#### Overrides

[Entity](../Entity/Entity.md).[exists](../Entity/Entity.md#exists)

___

### freeze

▸ **freeze**(`opts?`): `Promise`<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction)<[`Offering`](Offering.md), [`Offering`](Offering.md)\>\>

Freeze the Offering

**`Note`**

this method is of type [NoArgsProcedureMethod](../../../../interfaces/Types/NoArgsProcedureMethod/NoArgsProcedureMethod.md), which means you can call [freeze.checkAuthorization](../../../../interfaces/Types/NoArgsProcedureMethod/NoArgsProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`ProcedureOpts`](../../../../interfaces/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction)<[`Offering`](Offering.md), [`Offering`](Offering.md)\>\>

___

### getInvestments

▸ **getInvestments**(`opts?`): `Promise`<[`ResultSet`](../../../../interfaces/Types/ResultSet/ResultSet.md)<[`Investment`](../../../../interfaces/API/Entities/Offering/Types/Investment/Investment.md)\>\>

Retrieve all investments made on this Offering

**`Note`**

supports pagination

**`Note`**

uses the middleware

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `Object` | - |
| `opts.size?` | `BigNumber` | page size |
| `opts.start?` | `BigNumber` | page offset |

#### Returns

`Promise`<[`ResultSet`](../../../../interfaces/Types/ResultSet/ResultSet.md)<[`Investment`](../../../../interfaces/API/Entities/Offering/Types/Investment/Investment.md)\>\>

___

### getInvestmentsV2

▸ **getInvestmentsV2**(`opts?`): `Promise`<[`ResultSet`](../../../../interfaces/Types/ResultSet/ResultSet.md)<[`Investment`](../../../../interfaces/API/Entities/Offering/Types/Investment/Investment.md)\>\>

Retrieve all investments made on this Offering

**`Note`**

supports pagination

**`Note`**

uses the middleware V2

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `Object` | - |
| `opts.size?` | `BigNumber` | page size |
| `opts.start?` | `BigNumber` | page offset |

#### Returns

`Promise`<[`ResultSet`](../../../../interfaces/Types/ResultSet/ResultSet.md)<[`Investment`](../../../../interfaces/API/Entities/Offering/Types/Investment/Investment.md)\>\>

___

### invest

▸ **invest**(`args`, `opts?`): `Promise`<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction)<`void`, `void`\>\>

Invest in the Offering

**`Note`**

required roles:
  - Purchase Portfolio Custodian
  - Funding Portfolio Custodian

**`Note`**

this method is of type [ProcedureMethod](../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [invest.checkAuthorization](../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`InvestInOfferingParams`](../../../../interfaces/API/Procedures/Types/InvestInOfferingParams/InvestInOfferingParams.md) |
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

### modifyTimes

▸ **modifyTimes**(`args`, `opts?`): `Promise`<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction)<`void`, `void`\>\>

Modify the start/end time of the Offering

**`Throws`**

if:
  - Trying to modify the start time on an Offering that already started
  - Trying to modify anything on an Offering that already ended
  - Trying to change start or end time to a past date

**`Note`**

this method is of type [ProcedureMethod](../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [modifyTimes.checkAuthorization](../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`ModifyOfferingTimesParams`](../../../../modules/API/Procedures/Types/Types.md#modifyofferingtimesparams) |
| `opts?` | [`ProcedureOpts`](../../../../interfaces/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction)<`void`, `void`\>\>

___

### toHuman

▸ **toHuman**(): [`HumanReadable`](../../../../interfaces/API/Entities/Offering/HumanReadable/HumanReadable.md)

Return the Offering's ID and Asset ticker

#### Returns

[`HumanReadable`](../../../../interfaces/API/Entities/Offering/HumanReadable/HumanReadable.md)

#### Overrides

[Entity](../Entity/Entity.md).[toHuman](../Entity/Entity.md#tohuman)

___

### unfreeze

▸ **unfreeze**(`opts?`): `Promise`<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction)<[`Offering`](Offering.md), [`Offering`](Offering.md)\>\>

Unfreeze the Offering

**`Note`**

this method is of type [NoArgsProcedureMethod](../../../../interfaces/Types/NoArgsProcedureMethod/NoArgsProcedureMethod.md), which means you can call [unfreeze.checkAuthorization](../../../../interfaces/Types/NoArgsProcedureMethod/NoArgsProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`ProcedureOpts`](../../../../interfaces/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction)<[`Offering`](Offering.md), [`Offering`](Offering.md)\>\>

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
