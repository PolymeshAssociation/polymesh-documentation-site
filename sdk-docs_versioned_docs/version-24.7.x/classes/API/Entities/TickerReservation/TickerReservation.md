---
id: "TickerReservation"
title: "Class: TickerReservation"
sidebar_label: "TickerReservation"
---

[api/entities/TickerReservation](../../../../modules/API/Entities/TickerReservation/TickerReservation.md).TickerReservation

Represents a reserved Asset symbol in the Polymesh blockchain. Ticker reservations expire
  after a set length of time, after which they can be reserved by another Identity.
  A Ticker must be previously reserved by an Identity for that Identity to be able create an Asset with it

## Hierarchy

- [`Entity`](../Entity/Entity.md)\<[`UniqueIdentifiers`](../../../../interfaces/API/Entities/TickerReservation/UniqueIdentifiers/UniqueIdentifiers.md), `string`\>

  ↳ **`TickerReservation`**

## Properties

### ticker

• **ticker**: `string`

reserved ticker

#### Defined in

[api/entities/TickerReservation/index.ts:54](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fe2e6dd1d/src/api/entities/TickerReservation/index.ts#L54)

___

### uuid

• **uuid**: `string`

#### Inherited from

[Entity](../Entity/Entity.md).[uuid](../Entity/Entity.md#uuid)

#### Defined in

[api/entities/Entity.ts:46](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fe2e6dd1d/src/api/entities/Entity.ts#L46)

## Methods

### createAsset

▸ **createAsset**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<[`FungibleAsset`](../Asset/Fungible/FungibleAsset.md), [`FungibleAsset`](../Asset/Fungible/FungibleAsset.md)\>\>

Create an Asset using the reserved ticker

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`CreateAssetParams`](../../../../interfaces/API/Procedures/Types/CreateAssetParams/CreateAssetParams.md) |
| `opts?` | [`ProcedureOpts`](../../../../interfaces/API/Procedures/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<[`FungibleAsset`](../Asset/Fungible/FungibleAsset.md), [`FungibleAsset`](../Asset/Fungible/FungibleAsset.md)\>\>

**`Note`**

required role:
  - Ticker Owner

**`Note`**

this method is of type [ProcedureMethod](../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [createAsset.checkAuthorization](../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/entities/TickerReservation/index.ts:191](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fe2e6dd1d/src/api/entities/TickerReservation/index.ts#L191)

___

### details

▸ **details**(): `Promise`\<[`TickerReservationDetails`](../../../../interfaces/API/Entities/TickerReservation/Types/TickerReservationDetails/TickerReservationDetails.md)\>

Retrieve the Reservation's owner, expiry date and status

#### Returns

`Promise`\<[`TickerReservationDetails`](../../../../interfaces/API/Entities/TickerReservation/Types/TickerReservationDetails/TickerReservationDetails.md)\>

**`Note`**

can be subscribed to, if connected to node using a web socket

#### Defined in

[api/entities/TickerReservation/index.ts:94](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fe2e6dd1d/src/api/entities/TickerReservation/index.ts#L94)

▸ **details**(`callback`): `Promise`\<[`UnsubCallback`](../../../../modules/API/Entities/Types/Types.md#unsubcallback)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`SubCallback`](../../../../modules/API/Entities/Types/Types.md#subcallback)\<[`TickerReservationDetails`](../../../../interfaces/API/Entities/TickerReservation/Types/TickerReservationDetails/TickerReservationDetails.md)\> |

#### Returns

`Promise`\<[`UnsubCallback`](../../../../modules/API/Entities/Types/Types.md#unsubcallback)\>

#### Defined in

[api/entities/TickerReservation/index.ts:95](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fe2e6dd1d/src/api/entities/TickerReservation/index.ts#L95)

___

### exists

▸ **exists**(): `Promise`\<`boolean`\>

Determine whether this Ticker Reservation exists on chain

#### Returns

`Promise`\<`boolean`\>

#### Overrides

[Entity](../Entity/Entity.md).[exists](../Entity/Entity.md#exists)

#### Defined in

[api/entities/TickerReservation/index.ts:216](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fe2e6dd1d/src/api/entities/TickerReservation/index.ts#L216)

___

### extend

▸ **extend**(`opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<[`TickerReservation`](TickerReservation.md), [`TickerReservation`](TickerReservation.md)\>\>

Extend the Reservation time period of the ticker for 60 days from now
to later use it in the creation of an Asset.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`ProcedureOpts`](../../../../interfaces/API/Procedures/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<[`TickerReservation`](TickerReservation.md), [`TickerReservation`](TickerReservation.md)\>\>

**`Note`**

required role:
  - Ticker Owner

**`Note`**

this method is of type [NoArgsProcedureMethod](../../../../interfaces/API/Procedures/Types/NoArgsProcedureMethod/NoArgsProcedureMethod.md), which means you can call [extend.checkAuthorization](../../../../interfaces/API/Procedures/Types/NoArgsProcedureMethod/NoArgsProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/entities/TickerReservation/index.ts:178](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fe2e6dd1d/src/api/entities/TickerReservation/index.ts#L178)

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

[api/entities/Entity.ts:61](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fe2e6dd1d/src/api/entities/Entity.ts#L61)

___

### toHuman

▸ **toHuman**(): `string`

Return the Reservation's ticker

#### Returns

`string`

#### Overrides

[Entity](../Entity/Entity.md).[toHuman](../Entity/Entity.md#tohuman)

#### Defined in

[api/entities/TickerReservation/index.ts:229](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fe2e6dd1d/src/api/entities/TickerReservation/index.ts#L229)

___

### transferOwnership

▸ **transferOwnership**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<[`AuthorizationRequest`](../AuthorizationRequest/AuthorizationRequest.md), [`AuthorizationRequest`](../AuthorizationRequest/AuthorizationRequest.md)\>\>

Transfer ownership of the Ticker Reservation to another Identity. This generates an authorization request that must be accepted
  by the target

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`TransferTickerOwnershipParams`](../../../../interfaces/API/Procedures/Types/TransferTickerOwnershipParams/TransferTickerOwnershipParams.md) |
| `opts?` | [`ProcedureOpts`](../../../../interfaces/API/Procedures/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<[`AuthorizationRequest`](../AuthorizationRequest/AuthorizationRequest.md), [`AuthorizationRequest`](../AuthorizationRequest/AuthorizationRequest.md)\>\>

**`Note`**

this will create [Authorization Request](../AuthorizationRequest/AuthorizationRequest.md) which has to be accepted by the `target` Identity.
  An [Account](../Account/Account.md) or [Identity](../Identity/Identity.md) can fetch its pending Authorization Requests by calling [authorizations.getReceived](../Common/Namespaces/Authorizations/Authorizations.md#getreceived).
  Also, an Account or Identity can directly fetch the details of an Authorization Request by calling [authorizations.getOne](../Common/Namespaces/Authorizations/Authorizations.md#getone)

**`Note`**

required role:
  - Ticker Owner

**`Note`**

this method is of type [ProcedureMethod](../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [transferOwnership.checkAuthorization](../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/entities/TickerReservation/index.ts:209](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fe2e6dd1d/src/api/entities/TickerReservation/index.ts#L209)

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

[api/entities/Entity.ts:14](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fe2e6dd1d/src/api/entities/Entity.ts#L14)

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

[api/entities/Entity.ts:23](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fe2e6dd1d/src/api/entities/Entity.ts#L23)
