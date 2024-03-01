---
id: 'AuthorizationRequest'
title: 'Class: AuthorizationRequest'
sidebar_label: 'AuthorizationRequest'
---

[api/entities/AuthorizationRequest](../../../../modules/API/Entities/AuthorizationRequest/AuthorizationRequest.md).AuthorizationRequest

Represents a request made by an Identity to another Identity (or Account) for some sort of authorization. This has multiple uses. For example, if Alice
wants to transfer ownership of one of her Assets to Bob, this method emits an authorization request for Bob,
who then has to accept it in order to complete the ownership transfer

## Hierarchy

- [`Entity`](../Entity/Entity.md) \<[`UniqueIdentifiers`](../../../../interfaces/API/Entities/AuthorizationRequest/UniqueIdentifiers/UniqueIdentifiers.md), [`HumanReadable`](../../../../interfaces/API/Entities/AuthorizationRequest/HumanReadable/HumanReadable.md)\>

  ↳ **`AuthorizationRequest`**

## Properties

### authId

• **authId**: `BigNumber`

internal identifier for the Request (used to accept/reject/cancel)

#### Defined in

[api/entities/AuthorizationRequest.ts:100](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2c78f6c34/src/api/entities/AuthorizationRequest.ts#L100)

---

### data

• **data**: [`Authorization`](../../../../modules/Types/Types.md#authorization)

Authorization Request data corresponding to type of Authorization

| Type                            | Data                            |
| ------------------------------- | ------------------------------- |
| Add Relayer Paying Key          | Beneficiary, Relayer, Allowance |
| Become Agent                    | Permission Group                |
| Attest Primary Key Rotation     | DID                             |
| Rotate Primary Key              | N/A                             |
| Rotate Primary Key to Secondary | Permissions                     |
| Transfer Ticker                 | Ticker                          |
| Add MultiSig Signer             | Account                         |
| Transfer Asset Ownership        | Ticker                          |
| Join Identity                   | Permissions                     |
| Portfolio Custody               | Portfolio                       |

#### Defined in

[api/entities/AuthorizationRequest.ts:89](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2c78f6c34/src/api/entities/AuthorizationRequest.ts#L89)

---

### expiry

• **expiry**: `null` \| `Date`

date at which the Authorization Request expires and can no longer be accepted.
At this point, a new Authorization Request must be emitted. Null if the Request never expires

#### Defined in

[api/entities/AuthorizationRequest.ts:95](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2c78f6c34/src/api/entities/AuthorizationRequest.ts#L95)

---

### issuer

• **issuer**: [`Identity`](../Identity/Identity.md)

Identity that emitted the request

#### Defined in

[api/entities/AuthorizationRequest.ts:71](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2c78f6c34/src/api/entities/AuthorizationRequest.ts#L71)

---

### target

• **target**: [`Signer`](../../../../modules/Types/Types.md#signer)

Identity or Account to which the request was emitted

#### Defined in

[api/entities/AuthorizationRequest.ts:66](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2c78f6c34/src/api/entities/AuthorizationRequest.ts#L66)

---

### uuid

• **uuid**: `string`

#### Inherited from

[Entity](../Entity/Entity.md).[uuid](../Entity/Entity.md#uuid)

#### Defined in

[api/entities/Entity.ts:46](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2c78f6c34/src/api/entities/Entity.ts#L46)

## Methods

### accept

▸ **accept**(`opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

Accept the Authorization Request. You must be the target of the Request to be able to accept it

#### Parameters

| Name    | Type                                                                           |
| :------ | :----------------------------------------------------------------------------- |
| `opts?` | [`ProcedureOpts`](../../../../interfaces/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

**`Note`**

this method is of type [NoArgsProcedureMethod](../../../../interfaces/Types/NoArgsProcedureMethod/NoArgsProcedureMethod.md), which means you can call [accept.checkAuthorization](../../../../interfaces/Types/NoArgsProcedureMethod/NoArgsProcedureMethod.md#checkauthorization)
on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/entities/AuthorizationRequest.ts:193](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2c78f6c34/src/api/entities/AuthorizationRequest.ts#L193)

---

### exists

▸ **exists**(): `Promise`\<`boolean`\>

Determine whether this Authorization Request exists on chain

#### Returns

`Promise`\<`boolean`\>

#### Overrides

[Entity](../Entity/Entity.md).[exists](../Entity/Entity.md#exists)

#### Defined in

[api/entities/AuthorizationRequest.ts:222](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2c78f6c34/src/api/entities/AuthorizationRequest.ts#L222)

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

### isExpired

▸ **isExpired**(): `boolean`

Returns whether the Authorization Request has expired

#### Returns

`boolean`

#### Defined in

[api/entities/AuthorizationRequest.ts:213](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2c78f6c34/src/api/entities/AuthorizationRequest.ts#L213)

---

### remove

▸ **remove**(`opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

Remove the Authorization Request

- If you are the Request issuer, this will cancel the Authorization
- If you are the Request target, this will reject the Authorization

#### Parameters

| Name    | Type                                                                           |
| :------ | :----------------------------------------------------------------------------- |
| `opts?` | [`ProcedureOpts`](../../../../interfaces/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

**`Note`**

this method is of type [NoArgsProcedureMethod](../../../../interfaces/Types/NoArgsProcedureMethod/NoArgsProcedureMethod.md), which means you can call [remove.checkAuthorization](../../../../interfaces/Types/NoArgsProcedureMethod/NoArgsProcedureMethod.md#checkauthorization)
on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/entities/AuthorizationRequest.ts:206](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2c78f6c34/src/api/entities/AuthorizationRequest.ts#L206)

---

### toHuman

▸ **toHuman**(): [`HumanReadable`](../../../../interfaces/API/Entities/AuthorizationRequest/HumanReadable/HumanReadable.md)

Return the Authorization's static data

#### Returns

[`HumanReadable`](../../../../interfaces/API/Entities/AuthorizationRequest/HumanReadable/HumanReadable.md)

#### Overrides

[Entity](../Entity/Entity.md).[toHuman](../Entity/Entity.md#tohuman)

#### Defined in

[api/entities/AuthorizationRequest.ts:236](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2c78f6c34/src/api/entities/AuthorizationRequest.ts#L236)

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
