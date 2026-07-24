# Class: CorporateAction

> Defined in: [src/api/entities/CorporateAction.ts:42](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/CorporateAction.ts#L42)

# Class: CorporateAction

Defined in: [src/api/entities/CorporateAction.ts:42](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/CorporateAction.ts#L42)

Represents an action initiated by the issuer of an Asset which may affect the positions of
  the Asset Holders

## Extends

- [`CorporateActionBase`](../../CorporateActionBase/classes/CorporateActionBase.mdx)

## Properties

### asset

> **asset**: [`FungibleAsset`](../../Asset/Fungible/classes/FungibleAsset.mdx)

Defined in: [src/api/entities/CorporateActionBase/index.ts:82](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/CorporateActionBase/index.ts#L82)

Asset affected by this Corporate Action

#### Inherited from

[`CorporateActionBase`](../../CorporateActionBase/classes/CorporateActionBase.mdx).[`asset`](../../CorporateActionBase/classes/CorporateActionBase.mdx#asset)

***

### declarationDate

> **declarationDate**: `Date`

Defined in: [src/api/entities/CorporateActionBase/index.ts:87](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/CorporateActionBase/index.ts#L87)

date at which the Corporate Action was created

#### Inherited from

[`CorporateActionBase`](../../CorporateActionBase/classes/CorporateActionBase.mdx).[`declarationDate`](../../CorporateActionBase/classes/CorporateActionBase.mdx#declarationdate)

***

### defaultTaxWithholding

> **defaultTaxWithholding**: `BigNumber`

Defined in: [src/api/entities/CorporateActionBase/index.ts:103](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/CorporateActionBase/index.ts#L103)

default percentage (0-100) of tax withholding for this Corporate Action

#### Inherited from

[`CorporateActionBase`](../../CorporateActionBase/classes/CorporateActionBase.mdx).[`defaultTaxWithholding`](../../CorporateActionBase/classes/CorporateActionBase.mdx#defaulttaxwithholding)

***

### description

> **description**: `string`

Defined in: [src/api/entities/CorporateActionBase/index.ts:92](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/CorporateActionBase/index.ts#L92)

brief text description of the Corporate Action

#### Inherited from

[`CorporateActionBase`](../../CorporateActionBase/classes/CorporateActionBase.mdx).[`description`](../../CorporateActionBase/classes/CorporateActionBase.mdx#description)

***

### id

> **id**: `BigNumber`

Defined in: [src/api/entities/CorporateActionBase/index.ts:77](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/CorporateActionBase/index.ts#L77)

internal Corporate Action ID

#### Inherited from

[`CorporateActionBase`](../../CorporateActionBase/classes/CorporateActionBase.mdx).[`id`](../../CorporateActionBase/classes/CorporateActionBase.mdx#id)

***

### targets

> **targets**: [`CorporateActionTargets`](../../CorporateActionBase/types/interfaces/CorporateActionTargets.mdx)

Defined in: [src/api/entities/CorporateActionBase/index.ts:98](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/CorporateActionBase/index.ts#L98)

Asset Holder Identities related to this Corporate action. If the treatment is `Exclude`, the Identities
  in the array will not be targeted by the Action, Identities not in the array will be targeted, and vice versa

#### Inherited from

[`CorporateActionBase`](../../CorporateActionBase/classes/CorporateActionBase.mdx).[`targets`](../../CorporateActionBase/classes/CorporateActionBase.mdx#targets)

***

### taxWithholdings

> **taxWithholdings**: [`TaxWithholding`](../../CorporateActionBase/types/interfaces/TaxWithholding.mdx)[]

Defined in: [src/api/entities/CorporateActionBase/index.ts:109](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/CorporateActionBase/index.ts#L109)

percentage (0-100) of tax withholding per Identity. Any Identity not present
  in this array uses the default tax withholding percentage

#### Inherited from

[`CorporateActionBase`](../../CorporateActionBase/classes/CorporateActionBase.mdx).[`taxWithholdings`](../../CorporateActionBase/classes/CorporateActionBase.mdx#taxwithholdings)

***

### uuid

> **uuid**: `string`

Defined in: [src/api/entities/Entity.ts:46](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Entity.ts#L46)

#### Inherited from

[`CorporateActionBase`](../../CorporateActionBase/classes/CorporateActionBase.mdx).[`uuid`](../../CorporateActionBase/classes/CorporateActionBase.mdx#uuid)

## Methods

### checkpoint()

> **checkpoint**(): `Promise`\<[`Checkpoint`](../../Checkpoint/classes/Checkpoint.mdx) \| [`CheckpointSchedule`](../../CheckpointSchedule/classes/CheckpointSchedule.mdx) \| `null`\>

Defined in: [src/api/entities/CorporateActionBase/index.ts:188](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/CorporateActionBase/index.ts#L188)

Retrieve the Checkpoint associated with this Corporate Action. If the Checkpoint is scheduled and has
  not been created yet, the corresponding CheckpointSchedule is returned instead. A null value means
  the Corporate Action was created without an associated Checkpoint

#### Returns

`Promise`\<[`Checkpoint`](../../Checkpoint/classes/Checkpoint.mdx) \| [`CheckpointSchedule`](../../CheckpointSchedule/classes/CheckpointSchedule.mdx) \| `null`\>

#### Inherited from

[`CorporateActionBase`](../../CorporateActionBase/classes/CorporateActionBase.mdx).[`checkpoint`](../../CorporateActionBase/classes/CorporateActionBase.mdx#checkpoint)

***

### exists()

> **exists**(): `Promise`\<`boolean`\>

Defined in: [src/api/entities/CorporateActionBase/index.ts:177](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/CorporateActionBase/index.ts#L177)

Determine whether this Corporate Action exists on chain

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

[`CorporateActionBase`](../../CorporateActionBase/classes/CorporateActionBase.mdx).[`exists`](../../CorporateActionBase/classes/CorporateActionBase.mdx#exists)

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

[`CorporateActionBase`](../../CorporateActionBase/classes/CorporateActionBase.mdx).[`isEqual`](../../CorporateActionBase/classes/CorporateActionBase.mdx#isequal)

***

### linkDocuments()

> **linkDocuments**(`args`: [`LinkCaDocsParams`](../../../procedures/types/interfaces/LinkCaDocsParams.mdx), `opts?`: [`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)): `Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

Defined in: [src/api/entities/CorporateActionBase/index.ts:159](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/CorporateActionBase/index.ts#L159)

Link a list of documents to this corporate action

#### Parameters

Parameter
Type

`args`

[`LinkCaDocsParams`](../../../procedures/types/interfaces/LinkCaDocsParams.mdx)

`opts?`

[`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

#### Note

any previous links are removed in favor of the new list

#### Note

this method is of type [ProcedureMethod](../../../procedures/types/interfaces/ProcedureMethod.mdx), which means you can call [linkDocuments.checkAuthorization](../../../procedures/types/interfaces/ProcedureMethod.mdx#checkauthorization) on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Inherited from

[`CorporateActionBase`](../../CorporateActionBase/classes/CorporateActionBase.mdx).[`linkDocuments`](../../CorporateActionBase/classes/CorporateActionBase.mdx#linkdocuments)

***

### modifyCheckpoint()

> **modifyCheckpoint**(`args`: [`ModifyCaCheckpointParams`](../../../procedures/types/interfaces/ModifyCaCheckpointParams.mdx), `opts?`: [`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)): `Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

Defined in: [src/api/entities/CorporateAction.ts:63](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/CorporateAction.ts#L63)

Modify the Corporate Action's Checkpoint

#### Parameters

Parameter
Type

`args`

[`ModifyCaCheckpointParams`](../../../procedures/types/interfaces/ModifyCaCheckpointParams.mdx)

`opts?`

[`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

#### Note

this method is of type [ProcedureMethod](../../../procedures/types/interfaces/ProcedureMethod.mdx), which means you can call [modifyCheckpoint.checkAuthorization](../../../procedures/types/interfaces/ProcedureMethod.mdx#checkauthorization) on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Overrides

[`CorporateActionBase`](../../CorporateActionBase/classes/CorporateActionBase.mdx).[`modifyCheckpoint`](../../CorporateActionBase/classes/CorporateActionBase.mdx#modifycheckpoint)

***

### toHuman()

> **toHuman**(): [`HumanReadable`](../../CorporateActionBase/interfaces/HumanReadable.mdx)

Defined in: [src/api/entities/CorporateActionBase/index.ts:274](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/CorporateActionBase/index.ts#L274)

Return the Corporate Action's static data

#### Returns

[`HumanReadable`](../../CorporateActionBase/interfaces/HumanReadable.mdx)

#### Inherited from

[`CorporateActionBase`](../../CorporateActionBase/classes/CorporateActionBase.mdx).[`toHuman`](../../CorporateActionBase/classes/CorporateActionBase.mdx#tohuman)

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

[`CorporateActionBase`](../../CorporateActionBase/classes/CorporateActionBase.mdx).[`generateUuid`](../../CorporateActionBase/classes/CorporateActionBase.mdx#generateuuid)

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

[`CorporateActionBase`](../../CorporateActionBase/classes/CorporateActionBase.mdx).[`unserialize`](../../CorporateActionBase/classes/CorporateActionBase.mdx#unserialize)
