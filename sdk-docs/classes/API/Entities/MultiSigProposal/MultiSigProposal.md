---
id: "MultiSigProposal"
title: "Class: MultiSigProposal"
sidebar_label: "MultiSigProposal"
---

[api/entities/MultiSigProposal](../../../../modules/API/Entities/MultiSigProposal/MultiSigProposal.md).MultiSigProposal

A proposal for a MultiSig transaction. This is a wrapper around an extrinsic that will be executed when the amount of approvals reaches the signature threshold set on the MultiSig Account

## Hierarchy

- [`Entity`](../Entity/Entity.md)<`UniqueIdentifiers`, [`HumanReadable`](../../../../interfaces/API/Entities/MultiSigProposal/HumanReadable/HumanReadable.md)\>

  ↳ **`MultiSigProposal`**

## Properties

### id

• **id**: `BigNumber`

#### Defined in

[api/entities/MultiSigProposal/index.ts:30](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b6f9fb883/src/api/entities/MultiSigProposal/index.ts#L30)

___

### multiSig

• **multiSig**: [`MultiSig`](../Account/MultiSig/MultiSig.md)

#### Defined in

[api/entities/MultiSigProposal/index.ts:29](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b6f9fb883/src/api/entities/MultiSigProposal/index.ts#L29)

___

### uuid

• **uuid**: `string`

#### Inherited from

[Entity](../Entity/Entity.md).[uuid](../Entity/Entity.md#uuid)

#### Defined in

[api/entities/Entity.ts:46](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b6f9fb883/src/api/entities/Entity.ts#L46)

## Methods

### details

▸ **details**(): `Promise`<[`MultiSigProposalDetails`](../../../../interfaces/API/Entities/MultiSigProposal/Types/MultiSigProposalDetails/MultiSigProposalDetails.md)\>

Fetches the details of the Proposal. This includes the amount of approvals and rejections, the expiry, and details of the wrapped extrinsic

#### Returns

`Promise`<[`MultiSigProposalDetails`](../../../../interfaces/API/Entities/MultiSigProposal/Types/MultiSigProposalDetails/MultiSigProposalDetails.md)\>

___

### exists

▸ **exists**(): `Promise`<`boolean`\>

Determines whether this Proposal exists on chain

#### Returns

`Promise`<`boolean`\>

#### Overrides

[Entity](../Entity/Entity.md).[exists](../Entity/Entity.md#exists)

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

### toHuman

▸ **toHuman**(): [`HumanReadable`](../../../../interfaces/API/Entities/MultiSigProposal/HumanReadable/HumanReadable.md)

Returns a human readable representation

#### Returns

[`HumanReadable`](../../../../interfaces/API/Entities/MultiSigProposal/HumanReadable/HumanReadable.md)

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
