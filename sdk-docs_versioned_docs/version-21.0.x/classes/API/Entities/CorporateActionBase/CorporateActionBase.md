---
id: 'CorporateActionBase'
title: 'Class: CorporateActionBase'
sidebar_label: 'CorporateActionBase'
---

[api/entities/CorporateActionBase](../../../../modules/API/Entities/CorporateActionBase/CorporateActionBase.md).CorporateActionBase

Represents an action initiated by the issuer of an Asset which may affect the positions of
the Asset Holders

## Hierarchy

- [`Entity`](../Entity/Entity.md) \<[`UniqueIdentifiers`](../../../../interfaces/API/Entities/CorporateActionBase/UniqueIdentifiers/UniqueIdentifiers.md), `unknown`\>

  ↳ **`CorporateActionBase`**

  ↳↳ [`CorporateAction`](../CorporateAction/CorporateAction.md)

  ↳↳ [`DividendDistribution`](../DividendDistribution/DividendDistribution.md)

## Properties

### asset

• **asset**: [`Asset`](../Asset/Asset.md)

Asset affected by this Corporate Action

#### Defined in

[api/entities/CorporateActionBase/index.ts:80](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/CorporateActionBase/index.ts#L80)

---

### declarationDate

• **declarationDate**: `Date`

date at which the Corporate Action was created

#### Defined in

[api/entities/CorporateActionBase/index.ts:85](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/CorporateActionBase/index.ts#L85)

---

### defaultTaxWithholding

• **defaultTaxWithholding**: `BigNumber`

default percentage (0-100) of tax withholding for this Corporate Action

#### Defined in

[api/entities/CorporateActionBase/index.ts:101](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/CorporateActionBase/index.ts#L101)

---

### description

• **description**: `string`

brief text description of the Corporate Action

#### Defined in

[api/entities/CorporateActionBase/index.ts:90](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/CorporateActionBase/index.ts#L90)

---

### id

• **id**: `BigNumber`

internal Corporate Action ID

#### Defined in

[api/entities/CorporateActionBase/index.ts:75](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/CorporateActionBase/index.ts#L75)

---

### targets

• **targets**: [`CorporateActionTargets`](../../../../interfaces/API/Entities/CorporateActionBase/Types/CorporateActionTargets/CorporateActionTargets.md)

Asset Holder Identities related to this Corporate action. If the treatment is `Exclude`, the Identities
in the array will not be targeted by the Action, Identities not in the array will be targeted, and vice versa

#### Defined in

[api/entities/CorporateActionBase/index.ts:96](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/CorporateActionBase/index.ts#L96)

---

### taxWithholdings

• **taxWithholdings**: [`TaxWithholding`](../../../../interfaces/API/Entities/CorporateActionBase/Types/TaxWithholding/TaxWithholding.md)[]

percentage (0-100) of tax withholding per Identity. Any Identity not present
in this array uses the default tax withholding percentage

#### Defined in

[api/entities/CorporateActionBase/index.ts:107](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/CorporateActionBase/index.ts#L107)

---

### uuid

• **uuid**: `string`

#### Inherited from

[Entity](../Entity/Entity.md).[uuid](../Entity/Entity.md#uuid)

#### Defined in

[api/entities/Entity.ts:46](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/Entity.ts#L46)

## Methods

### checkpoint

▸ **checkpoint**(): `Promise`\<`null` \| [`CheckpointSchedule`](../CheckpointSchedule/CheckpointSchedule.md) \| [`Checkpoint`](../Checkpoint/Checkpoint.md)\>

Retrieve the Checkpoint associated with this Corporate Action. If the Checkpoint is scheduled and has
not been created yet, the corresponding CheckpointSchedule is returned instead. A null value means
the Corporate Action was created without an associated Checkpoint

#### Returns

`Promise`\<`null` \| [`CheckpointSchedule`](../CheckpointSchedule/CheckpointSchedule.md) \| [`Checkpoint`](../Checkpoint/Checkpoint.md)\>

#### Defined in

[api/entities/CorporateActionBase/index.ts:186](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/CorporateActionBase/index.ts#L186)

---

### exists

▸ **exists**(): `Promise`\<`boolean`\>

Determine whether this Corporate Action exists on chain

#### Returns

`Promise`\<`boolean`\>

#### Overrides

[Entity](../Entity/Entity.md).[exists](../Entity/Entity.md#exists)

#### Defined in

[api/entities/CorporateActionBase/index.ts:175](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/CorporateActionBase/index.ts#L175)

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

### linkDocuments

▸ **linkDocuments**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

Link a list of documents to this corporate action

#### Parameters

| Name    | Type                                                                                                   |
| :------ | :----------------------------------------------------------------------------------------------------- |
| `args`  | [`LinkCaDocsParams`](../../../../interfaces/API/Procedures/Types/LinkCaDocsParams/LinkCaDocsParams.md) |
| `opts?` | [`ProcedureOpts`](../../../../interfaces/Types/ProcedureOpts/ProcedureOpts.md)                         |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

**`Note`**

any previous links are removed in favor of the new list

**`Note`**

this method is of type [ProcedureMethod](../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [linkDocuments.checkAuthorization](../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/entities/CorporateActionBase/index.ts:155](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/CorporateActionBase/index.ts#L155)

---

### modifyCheckpoint

▸ `Abstract` **modifyCheckpoint**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

Modify the Corporate Action's Checkpoint

#### Parameters

| Name    | Type                                                                                                                                                                                                                                                                                                                          |
| :------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `args`  | [`Modify`](../../../../modules/Types/Utils/Utils.md#modify) \<[`ModifyCaCheckpointParams`](../../../../interfaces/API/Procedures/Types/ModifyCaCheckpointParams/ModifyCaCheckpointParams.md), \{ `checkpoint`: [`InputCaCheckpoint`](../../../../modules/API/Entities/Asset/Checkpoints/Types/Types.md#inputcacheckpoint) }\> |
| `opts?` | [`ProcedureOpts`](../../../../interfaces/Types/ProcedureOpts/ProcedureOpts.md)                                                                                                                                                                                                                                                |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

**`Note`**

this method is of type [ProcedureMethod](../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [modifyCheckpoint.checkAuthorization](../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/entities/CorporateActionBase/index.ts:165](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/CorporateActionBase/index.ts#L165)

---

### toHuman

▸ **toHuman**(): [`HumanReadable`](../../../../interfaces/API/Entities/CorporateActionBase/HumanReadable/HumanReadable.md)

Return the Corporate Action's static data

#### Returns

[`HumanReadable`](../../../../interfaces/API/Entities/CorporateActionBase/HumanReadable/HumanReadable.md)

#### Overrides

[Entity](../Entity/Entity.md).[toHuman](../Entity/Entity.md#tohuman)

#### Defined in

[api/entities/CorporateActionBase/index.ts:265](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/CorporateActionBase/index.ts#L265)

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
