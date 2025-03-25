---
id: "MultiSigProposal"
title: "Class: MultiSigProposal"
sidebar_label: "MultiSigProposal"
---

[api/entities/MultiSigProposal](../../../../modules/API/Entities/MultiSigProposal/MultiSigProposal.md).MultiSigProposal

A proposal for a MultiSig transaction. This is a wrapper around an extrinsic that will be executed when the amount of approvals reaches the signature threshold set on the MultiSig Account

## Hierarchy

- [`Entity`](../Entity/Entity.md)\<`UniqueIdentifiers`, [`HumanReadable`](../../../../interfaces/API/Entities/MultiSigProposal/HumanReadable/HumanReadable.md)\>

  ↳ **`MultiSigProposal`**

## Properties

### id

• **id**: `BigNumber`

#### Defined in

[api/entities/MultiSigProposal/index.ts:52](https://github.com/PolymeshAssociation/polymesh-sdk/blob/f8a937f04/src/api/entities/MultiSigProposal/index.ts#L52)

___

### multiSig

• **multiSig**: [`MultiSig`](../Account/MultiSig/MultiSig.md)

#### Defined in

[api/entities/MultiSigProposal/index.ts:51](https://github.com/PolymeshAssociation/polymesh-sdk/blob/f8a937f04/src/api/entities/MultiSigProposal/index.ts#L51)

___

### uuid

• **uuid**: `string`

#### Inherited from

[Entity](../Entity/Entity.md).[uuid](../Entity/Entity.md#uuid)

#### Defined in

[api/entities/Entity.ts:46](https://github.com/PolymeshAssociation/polymesh-sdk/blob/f8a937f04/src/api/entities/Entity.ts#L46)

## Methods

### approve

▸ **approve**(`opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

Approve this MultiSig proposal

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`ProcedureOpts`](../../../../interfaces/API/Procedures/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

**`Note`**

this method is of type [NoArgsProcedureMethod](../../../../interfaces/API/Procedures/Types/NoArgsProcedureMethod/NoArgsProcedureMethod.md), which means you can call [approve.checkAuthorization](../../../../interfaces/API/Procedures/Types/NoArgsProcedureMethod/NoArgsProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/entities/MultiSigProposal/index.ts:96](https://github.com/PolymeshAssociation/polymesh-sdk/blob/f8a937f04/src/api/entities/MultiSigProposal/index.ts#L96)

___

### createdAt

▸ **createdAt**(): `Promise`\<``null`` \| [`EventIdentifier`](../../../../interfaces/API/Client/Types/EventIdentifier/EventIdentifier.md)\>

Retrieve the identifier data (block number, date and event index) of the event that was emitted when this MultiSig Proposal was created

#### Returns

`Promise`\<``null`` \| [`EventIdentifier`](../../../../interfaces/API/Client/Types/EventIdentifier/EventIdentifier.md)\>

**`Note`**

uses the middlewareV2

**`Note`**

there is a possibility that the data is not ready by the time it is requested. In that case, `null` is returned

#### Defined in

[api/entities/MultiSigProposal/index.ts:282](https://github.com/PolymeshAssociation/polymesh-sdk/blob/f8a937f04/src/api/entities/MultiSigProposal/index.ts#L282)

___

### creator

▸ **creator**(): `Promise`\<``null`` \| [`Account`](../Account/Account.md)\>

Retrieve the account which created this MultiSig Proposal

#### Returns

`Promise`\<``null`` \| [`Account`](../Account/Account.md)\>

**`Note`**

uses the middlewareV2

**`Note`**

there is a possibility that the data is not ready by the time it is requested. In that case, `null` is returned

#### Defined in

[api/entities/MultiSigProposal/index.ts:297](https://github.com/PolymeshAssociation/polymesh-sdk/blob/f8a937f04/src/api/entities/MultiSigProposal/index.ts#L297)

___

### details

▸ **details**(): `Promise`\<[`MultiSigProposalDetails`](../../../../interfaces/API/Entities/MultiSigProposal/Types/MultiSigProposalDetails/MultiSigProposalDetails.md)\>

Fetches the details of the Proposal. This includes the amount of approvals and rejections, the expiry, and details of the wrapped extrinsic

#### Returns

`Promise`\<[`MultiSigProposalDetails`](../../../../interfaces/API/Entities/MultiSigProposal/Types/MultiSigProposalDetails/MultiSigProposalDetails.md)\>

#### Defined in

[api/entities/MultiSigProposal/index.ts:113](https://github.com/PolymeshAssociation/polymesh-sdk/blob/f8a937f04/src/api/entities/MultiSigProposal/index.ts#L113)

___

### exists

▸ **exists**(): `Promise`\<`boolean`\>

Determines whether this Proposal exists on chain

#### Returns

`Promise`\<`boolean`\>

#### Overrides

[Entity](../Entity/Entity.md).[exists](../Entity/Entity.md#exists)

#### Defined in

[api/entities/MultiSigProposal/index.ts:179](https://github.com/PolymeshAssociation/polymesh-sdk/blob/f8a937f04/src/api/entities/MultiSigProposal/index.ts#L179)

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

[api/entities/Entity.ts:61](https://github.com/PolymeshAssociation/polymesh-sdk/blob/f8a937f04/src/api/entities/Entity.ts#L61)

___

### reject

▸ **reject**(`opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

Reject this MultiSig proposal

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`ProcedureOpts`](../../../../interfaces/API/Procedures/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

**`Note`**

this method is of type [NoArgsProcedureMethod](../../../../interfaces/API/Procedures/Types/NoArgsProcedureMethod/NoArgsProcedureMethod.md), which means you can call [reject.checkAuthorization](../../../../interfaces/API/Procedures/Types/NoArgsProcedureMethod/NoArgsProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/entities/MultiSigProposal/index.ts:106](https://github.com/PolymeshAssociation/polymesh-sdk/blob/f8a937f04/src/api/entities/MultiSigProposal/index.ts#L106)

___

### toHuman

▸ **toHuman**(): [`HumanReadable`](../../../../interfaces/API/Entities/MultiSigProposal/HumanReadable/HumanReadable.md)

Returns a human readable representation

#### Returns

[`HumanReadable`](../../../../interfaces/API/Entities/MultiSigProposal/HumanReadable/HumanReadable.md)

#### Overrides

[Entity](../Entity/Entity.md).[toHuman](../Entity/Entity.md#tohuman)

#### Defined in

[api/entities/MultiSigProposal/index.ts:201](https://github.com/PolymeshAssociation/polymesh-sdk/blob/f8a937f04/src/api/entities/MultiSigProposal/index.ts#L201)

___

### votes

▸ **votes**(): `Promise`\<[`MultiSigProposalVote`](../../../../modules/API/Entities/MultiSigProposal/Types/Types.md#multisigproposalvote)[]\>

Fetches the individual votes for this MultiSig proposal and their identifier data (block number, date and event index) of the event that was emitted when this MultiSig Proposal Vote was casted

#### Returns

`Promise`\<[`MultiSigProposalVote`](../../../../modules/API/Entities/MultiSigProposal/Types/Types.md#multisigproposalvote)[]\>

**`Note`**

uses the middlewareV2

#### Defined in

[api/entities/MultiSigProposal/index.ts:218](https://github.com/PolymeshAssociation/polymesh-sdk/blob/f8a937f04/src/api/entities/MultiSigProposal/index.ts#L218)

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

[api/entities/Entity.ts:14](https://github.com/PolymeshAssociation/polymesh-sdk/blob/f8a937f04/src/api/entities/Entity.ts#L14)

___

### isUniqueIdentifiers

▸ `Static` **isUniqueIdentifiers**(`identifiers`): `boolean`

Typeguard that checks whether the object passed corresponds to the unique identifiers of the class. Must be overridden

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifiers` | `unknown` | object to type check |

#### Returns

`boolean`

#### Inherited from

[Entity](../Entity/Entity.md).[isUniqueIdentifiers](../Entity/Entity.md#isuniqueidentifiers)

#### Defined in

[api/entities/Entity.ts:42](https://github.com/PolymeshAssociation/polymesh-sdk/blob/f8a937f04/src/api/entities/Entity.ts#L42)

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

[api/entities/Entity.ts:23](https://github.com/PolymeshAssociation/polymesh-sdk/blob/f8a937f04/src/api/entities/Entity.ts#L23)
