# Abstract Class: CorporateActionBase

> Defined in: [src/api/entities/CorporateActionBase/index.ts:66](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/CorporateActionBase/index.ts#L66)

# Abstract Class: CorporateActionBase

Defined in: [src/api/entities/CorporateActionBase/index.ts:66](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/CorporateActionBase/index.ts#L66)

Represents an action initiated by the issuer of an Asset which may affect the positions of
  the Asset Holders

## Extends

- [`Entity`](../../Entity/classes/Entity.mdx)\<[`UniqueIdentifiers`](../interfaces/UniqueIdentifiers.mdx), `unknown`\>

## Extended by

- [`CorporateAction`](../../CorporateAction/classes/CorporateAction.mdx)
- [`CorporateBallot`](../../CorporateBallot/classes/CorporateBallot.mdx)
- [`DividendDistribution`](../../DividendDistribution/classes/DividendDistribution.mdx)

## Properties

### asset

> **asset**: [`FungibleAsset`](../../Asset/Fungible/classes/FungibleAsset.mdx)

Defined in: [src/api/entities/CorporateActionBase/index.ts:85](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/CorporateActionBase/index.ts#L85)

Asset affected by this Corporate Action

***

### declarationDate

> **declarationDate**: `Date`

Defined in: [src/api/entities/CorporateActionBase/index.ts:90](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/CorporateActionBase/index.ts#L90)

date at which the Corporate Action was created

***

### defaultTaxWithholding

> **defaultTaxWithholding**: `BigNumber`

Defined in: [src/api/entities/CorporateActionBase/index.ts:106](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/CorporateActionBase/index.ts#L106)

default percentage (0-100) of tax withholding for this Corporate Action

***

### description

> **description**: `string`

Defined in: [src/api/entities/CorporateActionBase/index.ts:95](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/CorporateActionBase/index.ts#L95)

brief text description of the Corporate Action

***

### id

> **id**: `BigNumber`

Defined in: [src/api/entities/CorporateActionBase/index.ts:80](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/CorporateActionBase/index.ts#L80)

internal Corporate Action ID

***

### targets

> **targets**: [`CorporateActionTargets`](../types/interfaces/CorporateActionTargets.mdx)

Defined in: [src/api/entities/CorporateActionBase/index.ts:101](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/CorporateActionBase/index.ts#L101)

Asset Holder Identities related to this Corporate action. If the treatment is `Exclude`, the Identities
  in the array will not be targeted by the Action, Identities not in the array will be targeted, and vice versa

***

### taxWithholdings

> **taxWithholdings**: [`TaxWithholding`](../types/interfaces/TaxWithholding.mdx)[]

Defined in: [src/api/entities/CorporateActionBase/index.ts:112](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/CorporateActionBase/index.ts#L112)

percentage (0-100) of tax withholding per Identity. Any Identity not present
  in this array uses the default tax withholding percentage

***

### uuid

> **uuid**: `string`

Defined in: [src/api/entities/Entity.ts:46](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Entity.ts#L46)

#### Inherited from

[`Entity`](../../Entity/classes/Entity.mdx).[`uuid`](../../Entity/classes/Entity.mdx#uuid)

## Methods

### checkpoint()

> **checkpoint**(): `Promise`\<[`Checkpoint`](../../Checkpoint/classes/Checkpoint.mdx) \| [`CheckpointSchedule`](../../CheckpointSchedule/classes/CheckpointSchedule.mdx) \| `null`\>

Defined in: [src/api/entities/CorporateActionBase/index.ts:229](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/CorporateActionBase/index.ts#L229)

Retrieve the Checkpoint associated with this Corporate Action. If the Checkpoint is scheduled and has
  not been created yet, the corresponding CheckpointSchedule is returned instead. A null value means
  the Corporate Action was created without an associated Checkpoint

#### Returns

`Promise`\<[`Checkpoint`](../../Checkpoint/classes/Checkpoint.mdx) \| [`CheckpointSchedule`](../../CheckpointSchedule/classes/CheckpointSchedule.mdx) \| `null`\>

***

### exists()

> **exists**(): `Promise`\<`boolean`\>

Defined in: [src/api/entities/CorporateActionBase/index.ts:218](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/CorporateActionBase/index.ts#L218)

Determine whether this Corporate Action exists on chain

#### Returns

`Promise`\<`boolean`\>

#### Overrides

[`Entity`](../../Entity/classes/Entity.mdx).[`exists`](../../Entity/classes/Entity.mdx#exists)

***

### getDocuments()

> **getDocuments**(): `Promise`\<[`AssetDocumentWithId`](../../Asset/types/interfaces/AssetDocumentWithId.mdx)[]\>

Defined in: [src/api/entities/CorporateActionBase/index.ts:167](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/CorporateActionBase/index.ts#L167)

Retrieve the documents linked to this Corporate Action

#### Returns

`Promise`\<[`AssetDocumentWithId`](../../Asset/types/interfaces/AssetDocumentWithId.mdx)[]\>

***

### isEqual()

> **isEqual**(`entity`: [`Entity`](../../Entity/classes/Entity.mdx)\<`unknown`, `unknown`\>): `boolean`

Defined in: [src/api/entities/Entity.ts:61](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Entity.ts#L61)

Determine whether this Entity is the same as another one

#### Parameters

Parameter
Type

`entity`

[`Entity`](../../Entity/classes/Entity.mdx)\<`unknown`, `unknown`\>

#### Returns

`boolean`

#### Inherited from

[`Entity`](../../Entity/classes/Entity.mdx).[`isEqual`](../../Entity/classes/Entity.mdx#isequal)

***

### linkDocuments()

> **linkDocuments**(`args`: [`LinkCaDocsParams`](../../../procedures/types/interfaces/LinkCaDocsParams.mdx), `opts?`: [`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)): `Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

Defined in: [src/api/entities/CorporateActionBase/index.ts:162](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/CorporateActionBase/index.ts#L162)

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

***

### modifyCheckpoint()

> `abstract` **modifyCheckpoint**(`args`: [`Modify`](../../../../types/utils/type-aliases/Modify.mdx)\<[`ModifyCaCheckpointParams`](../../../procedures/types/interfaces/ModifyCaCheckpointParams.mdx), \{ `checkpoint`: [`InputCaCheckpoint`](../../Asset/Fungible/Checkpoints/types/type-aliases/InputCaCheckpoint.mdx); \}\>, `opts?`: [`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)): `Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

Defined in: [src/api/entities/CorporateActionBase/index.ts:205](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/CorporateActionBase/index.ts#L205)

Modify the Corporate Action's Checkpoint

#### Parameters

Parameter
Type

`args`

[`Modify`](../../../../types/utils/type-aliases/Modify.mdx)\<[`ModifyCaCheckpointParams`](../../../procedures/types/interfaces/ModifyCaCheckpointParams.mdx), \{ `checkpoint`: [`InputCaCheckpoint`](../../Asset/Fungible/Checkpoints/types/type-aliases/InputCaCheckpoint.mdx); \}\>

`opts?`

[`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

#### Note

this method is of type [ProcedureMethod](../../../procedures/types/interfaces/ProcedureMethod.mdx), which means you can call [modifyCheckpoint.checkAuthorization](../../../procedures/types/interfaces/ProcedureMethod.mdx#checkauthorization) on it to see whether the signing Account and Identity have the required roles and permissions to run it

***

### toHuman()

> **toHuman**(): [`HumanReadable`](../interfaces/HumanReadable.mdx)

Defined in: [src/api/entities/CorporateActionBase/index.ts:315](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/CorporateActionBase/index.ts#L315)

Return the Corporate Action's static data

#### Returns

[`HumanReadable`](../interfaces/HumanReadable.mdx)

#### Overrides

[`Entity`](../../Entity/classes/Entity.mdx).[`toHuman`](../../Entity/classes/Entity.mdx#tohuman)

***

### generateUuid()

> `static` **generateUuid**\<`Identifiers`\>(`identifiers`: `Identifiers`): `string`

Defined in: [src/api/entities/Entity.ts:14](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Entity.ts#L14)

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

[`Entity`](../../Entity/classes/Entity.mdx).[`generateUuid`](../../Entity/classes/Entity.mdx#generateuuid)

***

### unserialize()

> `static` **unserialize**\<`Identifiers`\>(`serialized`: `string`): `Identifiers`

Defined in: [src/api/entities/Entity.ts:23](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Entity.ts#L23)

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

[`Entity`](../../Entity/classes/Entity.mdx).[`unserialize`](../../Entity/classes/Entity.mdx#unserialize)
