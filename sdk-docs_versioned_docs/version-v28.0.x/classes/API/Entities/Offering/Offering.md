---
id: "Offering"
title: "Class: Offering"
sidebar_label: "Offering"
---

[api/entities/Offering](../../../../modules/API/Entities/Offering/Offering.md).Offering

Represents an Asset Offering in the Polymesh blockchain

## Hierarchy

- [`Entity`](../Entity/Entity.md)\<[`UniqueIdentifiers`](../../../../interfaces/API/Entities/Offering/UniqueIdentifiers/UniqueIdentifiers.md), [`HumanReadable`](../../../../interfaces/API/Entities/Offering/HumanReadable/HumanReadable.md)\>

  ↳ **`Offering`**

## Properties

### asset

• **asset**: [`FungibleAsset`](../Asset/Fungible/FungibleAsset.md)

Asset being offered

#### Defined in

[api/entities/Offering/index.ts:74](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/Offering/index.ts#L74)

___

### id

• **id**: `BigNumber`

identifier number of the Offering

#### Defined in

[api/entities/Offering/index.ts:69](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/Offering/index.ts#L69)

___

### uuid

• **uuid**: `string`

#### Inherited from

[Entity](../Entity/Entity.md).[uuid](../Entity/Entity.md#uuid)

#### Defined in

[api/entities/Entity.ts:46](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/Entity.ts#L46)

## Methods

### close

▸ **close**(`opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

Close the Offering

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`ProcedureOpts`](../../../../interfaces/API/Procedures/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

**`Note`**

this method is of type [NoArgsProcedureMethod](../../../../interfaces/API/Procedures/Types/NoArgsProcedureMethod/NoArgsProcedureMethod.md), which means you can call [close.checkAuthorization](../../../../interfaces/API/Procedures/Types/NoArgsProcedureMethod/NoArgsProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/entities/Offering/index.ts:174](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/Offering/index.ts#L174)

___

### details

▸ **details**(): `Promise`\<[`OfferingDetails`](../../../../interfaces/API/Entities/Offering/Types/OfferingDetails/OfferingDetails.md)\>

Retrieve the Offering's details

#### Returns

`Promise`\<[`OfferingDetails`](../../../../interfaces/API/Entities/Offering/Types/OfferingDetails/OfferingDetails.md)\>

**`Note`**

can be subscribed to, if connected to node using a web socket

#### Defined in

[api/entities/Offering/index.ts:120](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/Offering/index.ts#L120)

▸ **details**(`callback`): `Promise`\<[`UnsubCallback`](../../../../modules/API/Entities/Types/Types.md#unsubcallback)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`SubCallback`](../../../../modules/API/Entities/Types/Types.md#subcallback)\<[`OfferingDetails`](../../../../interfaces/API/Entities/Offering/Types/OfferingDetails/OfferingDetails.md)\> |

#### Returns

`Promise`\<[`UnsubCallback`](../../../../modules/API/Entities/Types/Types.md#unsubcallback)\>

#### Defined in

[api/entities/Offering/index.ts:121](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/Offering/index.ts#L121)

___

### exists

▸ **exists**(): `Promise`\<`boolean`\>

Determine whether this Offering exists on chain

#### Returns

`Promise`\<`boolean`\>

#### Overrides

[Entity](../Entity/Entity.md).[exists](../Entity/Entity.md#exists)

#### Defined in

[api/entities/Offering/index.ts:288](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/Offering/index.ts#L288)

___

### freeze

▸ **freeze**(`opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<[`Offering`](Offering.md), [`Offering`](Offering.md)\>\>

Freeze the Offering

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`ProcedureOpts`](../../../../interfaces/API/Procedures/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<[`Offering`](Offering.md), [`Offering`](Offering.md)\>\>

**`Note`**

this method is of type [NoArgsProcedureMethod](../../../../interfaces/API/Procedures/Types/NoArgsProcedureMethod/NoArgsProcedureMethod.md), which means you can call [freeze.checkAuthorization](../../../../interfaces/API/Procedures/Types/NoArgsProcedureMethod/NoArgsProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/entities/Offering/index.ts:184](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/Offering/index.ts#L184)

___

### getInvestments

▸ **getInvestments**(`opts?`): `Promise`\<[`ResultSet`](../../../../interfaces/API/Entities/Types/ResultSet/ResultSet.md)\<[`Investment`](../../../../interfaces/API/Entities/Offering/Types/Investment/Investment.md)\>\>

Retrieve all investments made on this Offering

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `Object` | - |
| `opts.size?` | `BigNumber` | page size |
| `opts.start?` | `BigNumber` | page offset |

#### Returns

`Promise`\<[`ResultSet`](../../../../interfaces/API/Entities/Types/ResultSet/ResultSet.md)\<[`Investment`](../../../../interfaces/API/Entities/Offering/Types/Investment/Investment.md)\>\>

**`Note`**

supports pagination

**`Note`**

uses the middleware V2

#### Defined in

[api/entities/Offering/index.ts:236](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/Offering/index.ts#L236)

___

### invest

▸ **invest**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

Invest in the Offering

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`InvestInOfferingParams`](../../../../interfaces/API/Procedures/Types/InvestInOfferingParams/InvestInOfferingParams.md) |
| `opts?` | [`ProcedureOpts`](../../../../interfaces/API/Procedures/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

**`Note`**

required roles:
  - Purchase Portfolio Custodian
  - Funding Portfolio Custodian

**`Note`**

this method is of type [ProcedureMethod](../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [invest.checkAuthorization](../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/entities/Offering/index.ts:223](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/Offering/index.ts#L223)

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

[api/entities/Entity.ts:61](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/Entity.ts#L61)

___

### modifyTimes

▸ **modifyTimes**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

Modify the start/end time of the Offering

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`ModifyOfferingTimesParams`](../../../../modules/API/Procedures/Types/Types.md#modifyofferingtimesparams) |
| `opts?` | [`ProcedureOpts`](../../../../interfaces/API/Procedures/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

**`Throws`**

if:
  - Trying to modify the start time on an Offering that already started
  - Trying to modify anything on an Offering that already ended
  - Trying to change start or end time to a past date

**`Note`**

this method is of type [ProcedureMethod](../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [modifyTimes.checkAuthorization](../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/entities/Offering/index.ts:209](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/Offering/index.ts#L209)

___

### toHuman

▸ **toHuman**(): [`HumanReadable`](../../../../interfaces/API/Entities/Offering/HumanReadable/HumanReadable.md)

Return the Offering's ID and Asset ticker

#### Returns

[`HumanReadable`](../../../../interfaces/API/Entities/Offering/HumanReadable/HumanReadable.md)

#### Overrides

[Entity](../Entity/Entity.md).[toHuman](../Entity/Entity.md#tohuman)

#### Defined in

[api/entities/Offering/index.ts:304](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/Offering/index.ts#L304)

___

### unfreeze

▸ **unfreeze**(`opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<[`Offering`](Offering.md), [`Offering`](Offering.md)\>\>

Unfreeze the Offering

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`ProcedureOpts`](../../../../interfaces/API/Procedures/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<[`Offering`](Offering.md), [`Offering`](Offering.md)\>\>

**`Note`**

this method is of type [NoArgsProcedureMethod](../../../../interfaces/API/Procedures/Types/NoArgsProcedureMethod/NoArgsProcedureMethod.md), which means you can call [unfreeze.checkAuthorization](../../../../interfaces/API/Procedures/Types/NoArgsProcedureMethod/NoArgsProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/entities/Offering/index.ts:194](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/Offering/index.ts#L194)

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

[api/entities/Entity.ts:14](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/Entity.ts#L14)

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

[api/entities/Entity.ts:23](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/Entity.ts#L23)
