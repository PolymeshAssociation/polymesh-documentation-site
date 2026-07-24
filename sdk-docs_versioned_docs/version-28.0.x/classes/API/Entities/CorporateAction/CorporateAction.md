---
id: "CorporateAction"
title: "Class: CorporateAction"
sidebar_label: "CorporateAction"
---

[api/entities/CorporateAction](../../../../modules/API/Entities/CorporateAction/CorporateAction.md).CorporateAction

Represents an action initiated by the issuer of an Asset which may affect the positions of
  the Asset Holders

## Hierarchy

- [`CorporateActionBase`](../CorporateActionBase/CorporateActionBase.md)

  ↳ **`CorporateAction`**

## Properties

### asset

• **asset**: [`FungibleAsset`](../Asset/Fungible/FungibleAsset.md)

Asset affected by this Corporate Action

#### Inherited from

[CorporateActionBase](../CorporateActionBase/CorporateActionBase.md).[asset](../CorporateActionBase/CorporateActionBase.md#asset)

#### Defined in

[api/entities/CorporateActionBase/index.ts:80](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/CorporateActionBase/index.ts#L80)

___

### declarationDate

• **declarationDate**: `Date`

date at which the Corporate Action was created

#### Inherited from

[CorporateActionBase](../CorporateActionBase/CorporateActionBase.md).[declarationDate](../CorporateActionBase/CorporateActionBase.md#declarationdate)

#### Defined in

[api/entities/CorporateActionBase/index.ts:85](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/CorporateActionBase/index.ts#L85)

___

### defaultTaxWithholding

• **defaultTaxWithholding**: `BigNumber`

default percentage (0-100) of tax withholding for this Corporate Action

#### Inherited from

[CorporateActionBase](../CorporateActionBase/CorporateActionBase.md).[defaultTaxWithholding](../CorporateActionBase/CorporateActionBase.md#defaulttaxwithholding)

#### Defined in

[api/entities/CorporateActionBase/index.ts:101](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/CorporateActionBase/index.ts#L101)

___

### description

• **description**: `string`

brief text description of the Corporate Action

#### Inherited from

[CorporateActionBase](../CorporateActionBase/CorporateActionBase.md).[description](../CorporateActionBase/CorporateActionBase.md#description)

#### Defined in

[api/entities/CorporateActionBase/index.ts:90](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/CorporateActionBase/index.ts#L90)

___

### id

• **id**: `BigNumber`

internal Corporate Action ID

#### Inherited from

[CorporateActionBase](../CorporateActionBase/CorporateActionBase.md).[id](../CorporateActionBase/CorporateActionBase.md#id)

#### Defined in

[api/entities/CorporateActionBase/index.ts:75](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/CorporateActionBase/index.ts#L75)

___

### targets

• **targets**: [`CorporateActionTargets`](../../../../interfaces/API/Entities/CorporateActionBase/Types/CorporateActionTargets/CorporateActionTargets.md)

Asset Holder Identities related to this Corporate action. If the treatment is `Exclude`, the Identities
  in the array will not be targeted by the Action, Identities not in the array will be targeted, and vice versa

#### Inherited from

[CorporateActionBase](../CorporateActionBase/CorporateActionBase.md).[targets](../CorporateActionBase/CorporateActionBase.md#targets)

#### Defined in

[api/entities/CorporateActionBase/index.ts:96](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/CorporateActionBase/index.ts#L96)

___

### taxWithholdings

• **taxWithholdings**: [`TaxWithholding`](../../../../interfaces/API/Entities/CorporateActionBase/Types/TaxWithholding/TaxWithholding.md)[]

percentage (0-100) of tax withholding per Identity. Any Identity not present
  in this array uses the default tax withholding percentage

#### Inherited from

[CorporateActionBase](../CorporateActionBase/CorporateActionBase.md).[taxWithholdings](../CorporateActionBase/CorporateActionBase.md#taxwithholdings)

#### Defined in

[api/entities/CorporateActionBase/index.ts:107](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/CorporateActionBase/index.ts#L107)

___

### uuid

• **uuid**: `string`

#### Inherited from

[CorporateActionBase](../CorporateActionBase/CorporateActionBase.md).[uuid](../CorporateActionBase/CorporateActionBase.md#uuid)

#### Defined in

[api/entities/Entity.ts:46](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/Entity.ts#L46)

## Methods

### checkpoint

▸ **checkpoint**(): `Promise`\<``null`` \| [`Checkpoint`](../Checkpoint/Checkpoint.md) \| [`CheckpointSchedule`](../CheckpointSchedule/CheckpointSchedule.md)\>

Retrieve the Checkpoint associated with this Corporate Action. If the Checkpoint is scheduled and has
  not been created yet, the corresponding CheckpointSchedule is returned instead. A null value means
  the Corporate Action was created without an associated Checkpoint

#### Returns

`Promise`\<``null`` \| [`Checkpoint`](../Checkpoint/Checkpoint.md) \| [`CheckpointSchedule`](../CheckpointSchedule/CheckpointSchedule.md)\>

#### Inherited from

[CorporateActionBase](../CorporateActionBase/CorporateActionBase.md).[checkpoint](../CorporateActionBase/CorporateActionBase.md#checkpoint)

#### Defined in

[api/entities/CorporateActionBase/index.ts:191](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/CorporateActionBase/index.ts#L191)

___

### exists

▸ **exists**(): `Promise`\<`boolean`\>

Determine whether this Corporate Action exists on chain

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

[CorporateActionBase](../CorporateActionBase/CorporateActionBase.md).[exists](../CorporateActionBase/CorporateActionBase.md#exists)

#### Defined in

[api/entities/CorporateActionBase/index.ts:180](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/CorporateActionBase/index.ts#L180)

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

[CorporateActionBase](../CorporateActionBase/CorporateActionBase.md).[isEqual](../CorporateActionBase/CorporateActionBase.md#isequal)

#### Defined in

[api/entities/Entity.ts:61](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/Entity.ts#L61)

___

### linkDocuments

▸ **linkDocuments**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

Link a list of documents to this corporate action

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`LinkCaDocsParams`](../../../../interfaces/API/Procedures/Types/LinkCaDocsParams/LinkCaDocsParams.md) |
| `opts?` | [`ProcedureOpts`](../../../../interfaces/API/Procedures/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

**`Note`**

any previous links are removed in favor of the new list

**`Note`**

this method is of type [ProcedureMethod](../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [linkDocuments.checkAuthorization](../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Inherited from

[CorporateActionBase](../CorporateActionBase/CorporateActionBase.md).[linkDocuments](../CorporateActionBase/CorporateActionBase.md#linkdocuments)

#### Defined in

[api/entities/CorporateActionBase/index.ts:160](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/CorporateActionBase/index.ts#L160)

___

### modifyCheckpoint

▸ **modifyCheckpoint**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

Modify the Corporate Action's Checkpoint

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`ModifyCaCheckpointParams`](../../../../interfaces/API/Procedures/Types/ModifyCaCheckpointParams/ModifyCaCheckpointParams.md) |
| `opts?` | [`ProcedureOpts`](../../../../interfaces/API/Procedures/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

**`Note`**

this method is of type [ProcedureMethod](../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [modifyCheckpoint.checkAuthorization](../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Overrides

[CorporateActionBase](../CorporateActionBase/CorporateActionBase.md).[modifyCheckpoint](../CorporateActionBase/CorporateActionBase.md#modifycheckpoint)

#### Defined in

[api/entities/CorporateAction.ts:67](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/CorporateAction.ts#L67)

___

### toHuman

▸ **toHuman**(): [`HumanReadable`](../../../../interfaces/API/Entities/CorporateActionBase/HumanReadable/HumanReadable.md)

Return the Corporate Action's static data

#### Returns

[`HumanReadable`](../../../../interfaces/API/Entities/CorporateActionBase/HumanReadable/HumanReadable.md)

#### Inherited from

[CorporateActionBase](../CorporateActionBase/CorporateActionBase.md).[toHuman](../CorporateActionBase/CorporateActionBase.md#tohuman)

#### Defined in

[api/entities/CorporateActionBase/index.ts:271](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/CorporateActionBase/index.ts#L271)

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

[CorporateActionBase](../CorporateActionBase/CorporateActionBase.md).[generateUuid](../CorporateActionBase/CorporateActionBase.md#generateuuid)

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

[CorporateActionBase](../CorporateActionBase/CorporateActionBase.md).[unserialize](../CorporateActionBase/CorporateActionBase.md#unserialize)

#### Defined in

[api/entities/Entity.ts:23](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/Entity.ts#L23)
