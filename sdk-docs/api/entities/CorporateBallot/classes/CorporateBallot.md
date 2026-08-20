# Class: CorporateBallot

> Defined in: [src/api/entities/CorporateBallot/index.ts:69](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/CorporateBallot/index.ts#L69)

# Class: CorporateBallot

Defined in: [src/api/entities/CorporateBallot/index.ts:69](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/CorporateBallot/index.ts#L69)

Represents a Ballot

## Extends

- [`CorporateActionBase`](../../CorporateActionBase/classes/CorporateActionBase.mdx)

## Properties

### asset

> **asset**: [`FungibleAsset`](../../Asset/Fungible/classes/FungibleAsset.mdx)

Defined in: [src/api/entities/CorporateActionBase/index.ts:85](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/CorporateActionBase/index.ts#L85)

Asset affected by this Corporate Action

#### Inherited from

[`CorporateActionBase`](../../CorporateActionBase/classes/CorporateActionBase.mdx).[`asset`](../../CorporateActionBase/classes/CorporateActionBase.mdx#asset)

***

### declarationDate

> **declarationDate**: `Date`

Defined in: [src/api/entities/CorporateActionBase/index.ts:90](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/CorporateActionBase/index.ts#L90)

date at which the Corporate Action was created

#### Inherited from

[`CorporateActionBase`](../../CorporateActionBase/classes/CorporateActionBase.mdx).[`declarationDate`](../../CorporateActionBase/classes/CorporateActionBase.mdx#declarationdate)

***

### defaultTaxWithholding

> **defaultTaxWithholding**: `BigNumber`

Defined in: [src/api/entities/CorporateActionBase/index.ts:106](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/CorporateActionBase/index.ts#L106)

default percentage (0-100) of tax withholding for this Corporate Action

#### Inherited from

[`CorporateActionBase`](../../CorporateActionBase/classes/CorporateActionBase.mdx).[`defaultTaxWithholding`](../../CorporateActionBase/classes/CorporateActionBase.mdx#defaulttaxwithholding)

***

### description

> **description**: `string`

Defined in: [src/api/entities/CorporateActionBase/index.ts:95](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/CorporateActionBase/index.ts#L95)

brief text description of the Corporate Action

#### Inherited from

[`CorporateActionBase`](../../CorporateActionBase/classes/CorporateActionBase.mdx).[`description`](../../CorporateActionBase/classes/CorporateActionBase.mdx#description)

***

### id

> **id**: `BigNumber`

Defined in: [src/api/entities/CorporateActionBase/index.ts:80](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/CorporateActionBase/index.ts#L80)

internal Corporate Action ID

#### Inherited from

[`CorporateActionBase`](../../CorporateActionBase/classes/CorporateActionBase.mdx).[`id`](../../CorporateActionBase/classes/CorporateActionBase.mdx#id)

***

### targets

> **targets**: [`CorporateActionTargets`](../../CorporateActionBase/types/interfaces/CorporateActionTargets.mdx)

Defined in: [src/api/entities/CorporateActionBase/index.ts:101](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/CorporateActionBase/index.ts#L101)

Asset Holder Identities related to this Corporate action. If the treatment is `Exclude`, the Identities
  in the array will not be targeted by the Action, Identities not in the array will be targeted, and vice versa

#### Inherited from

[`CorporateActionBase`](../../CorporateActionBase/classes/CorporateActionBase.mdx).[`targets`](../../CorporateActionBase/classes/CorporateActionBase.mdx#targets)

***

### taxWithholdings

> **taxWithholdings**: [`TaxWithholding`](../../CorporateActionBase/types/interfaces/TaxWithholding.mdx)[]

Defined in: [src/api/entities/CorporateActionBase/index.ts:112](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/CorporateActionBase/index.ts#L112)

percentage (0-100) of tax withholding per Identity. Any Identity not present
  in this array uses the default tax withholding percentage

#### Inherited from

[`CorporateActionBase`](../../CorporateActionBase/classes/CorporateActionBase.mdx).[`taxWithholdings`](../../CorporateActionBase/classes/CorporateActionBase.mdx#taxwithholdings)

***

### uuid

> **uuid**: `string`

Defined in: [src/api/entities/Entity.ts:46](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Entity.ts#L46)

#### Inherited from

[`CorporateActionBase`](../../CorporateActionBase/classes/CorporateActionBase.mdx).[`uuid`](../../CorporateActionBase/classes/CorporateActionBase.mdx#uuid)

## Methods

### checkpoint()

> **checkpoint**(): `Promise`\<[`Checkpoint`](../../Checkpoint/classes/Checkpoint.mdx) \| [`CheckpointSchedule`](../../CheckpointSchedule/classes/CheckpointSchedule.mdx) \| `null`\>

Defined in: [src/api/entities/CorporateActionBase/index.ts:229](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/CorporateActionBase/index.ts#L229)

Retrieve the Checkpoint associated with this Corporate Action. If the Checkpoint is scheduled and has
  not been created yet, the corresponding CheckpointSchedule is returned instead. A null value means
  the Corporate Action was created without an associated Checkpoint

#### Returns

`Promise`\<[`Checkpoint`](../../Checkpoint/classes/Checkpoint.mdx) \| [`CheckpointSchedule`](../../CheckpointSchedule/classes/CheckpointSchedule.mdx) \| `null`\>

#### Inherited from

[`CorporateActionBase`](../../CorporateActionBase/classes/CorporateActionBase.mdx).[`checkpoint`](../../CorporateActionBase/classes/CorporateActionBase.mdx#checkpoint)

***

### details()

> **details**(): `Promise`\<[`CorporateBallotDetails`](../types/interfaces/CorporateBallotDetails.mdx)\>

Defined in: [src/api/entities/CorporateBallot/index.ts:136](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/CorporateBallot/index.ts#L136)

Retrieve details associated with this Ballot

#### Returns

`Promise`\<[`CorporateBallotDetails`](../types/interfaces/CorporateBallotDetails.mdx)\>

#### Throws

if the Ballot does not exist

***

### exists()

> **exists**(): `Promise`\<`boolean`\>

Defined in: [src/api/entities/CorporateBallot/index.ts:115](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/CorporateBallot/index.ts#L115)

Determine whether this Ballot exists on chain

#### Returns

`Promise`\<`boolean`\>

#### Overrides

[`CorporateActionBase`](../../CorporateActionBase/classes/CorporateActionBase.mdx).[`exists`](../../CorporateActionBase/classes/CorporateActionBase.mdx#exists)

***

### getDocuments()

> **getDocuments**(): `Promise`\<[`AssetDocumentWithId`](../../Asset/types/interfaces/AssetDocumentWithId.mdx)[]\>

Defined in: [src/api/entities/CorporateActionBase/index.ts:167](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/CorporateActionBase/index.ts#L167)

Retrieve the documents linked to this Corporate Action

#### Returns

`Promise`\<[`AssetDocumentWithId`](../../Asset/types/interfaces/AssetDocumentWithId.mdx)[]\>

#### Inherited from

[`CorporateActionBase`](../../CorporateActionBase/classes/CorporateActionBase.mdx).[`getDocuments`](../../CorporateActionBase/classes/CorporateActionBase.mdx#getdocuments)

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

[`CorporateActionBase`](../../CorporateActionBase/classes/CorporateActionBase.mdx).[`isEqual`](../../CorporateActionBase/classes/CorporateActionBase.mdx#isequal)

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

#### Inherited from

[`CorporateActionBase`](../../CorporateActionBase/classes/CorporateActionBase.mdx).[`linkDocuments`](../../CorporateActionBase/classes/CorporateActionBase.mdx#linkdocuments)

***

### modifyCheckpoint()

> **modifyCheckpoint**(`args`: `object`, `opts?`: [`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)): `Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

Defined in: [src/api/entities/CorporateBallot/index.ts:326](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/CorporateBallot/index.ts#L326)

Modify the Corporate Ballot's Record Date

#### Parameters

Parameter
Type

`args`

\{ `checkpoint`: [`InputCaCheckpoint`](../../Asset/Fungible/Checkpoints/types/type-aliases/InputCaCheckpoint.mdx); \}

`args.checkpoint`

[`InputCaCheckpoint`](../../Asset/Fungible/Checkpoints/types/type-aliases/InputCaCheckpoint.mdx)

`opts?`

[`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

#### Note

this method is of type [ProcedureMethod](../../../procedures/types/interfaces/ProcedureMethod.mdx), which means you can call [modifyCheckpoint.checkAuthorization](../../../procedures/types/interfaces/ProcedureMethod.mdx#checkauthorization) on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Overrides

[`CorporateActionBase`](../../CorporateActionBase/classes/CorporateActionBase.mdx).[`modifyCheckpoint`](../../CorporateActionBase/classes/CorporateActionBase.mdx#modifycheckpoint)

***

### remove()

> **remove**(`opts?`: [`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)): `Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

Defined in: [src/api/entities/CorporateBallot/index.ts:308](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/CorporateBallot/index.ts#L308)

Remove the Ballot

#### Parameters

Parameter
Type

`opts?`

[`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

#### Note

deletes the corporate action with the associated ballot if ballot has not started

#### Throws

if ballot has already started

#### Throws

if ballot is not found

#### Note

this method is of type [NoArgsProcedureMethod](../../../procedures/types/interfaces/NoArgsProcedureMethod.mdx), which means you can call [remove.checkAuthorization](../../../procedures/types/interfaces/NoArgsProcedureMethod.mdx#checkauthorization) on it to see whether the signing Account and Identity have the required roles and permissions to run it

***

### results()

> **results**(): `Promise`\<[`CorporateBallotMetaWithResults`](../types/type-aliases/CorporateBallotMetaWithResults.mdx)\>

Defined in: [src/api/entities/CorporateBallot/index.ts:173](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/CorporateBallot/index.ts#L173)

Retrieve the results of the Ballot

#### Returns

`Promise`\<[`CorporateBallotMetaWithResults`](../types/type-aliases/CorporateBallotMetaWithResults.mdx)\>

#### Throws

if the Ballot does not exist

***

### status()

> **status**(): `Promise`\<[`CorporateBallotStatus`](../types/enumerations/CorporateBallotStatus.mdx)\>

Defined in: [src/api/entities/CorporateBallot/index.ts:147](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/CorporateBallot/index.ts#L147)

Return the status of the Ballot

#### Returns

`Promise`\<[`CorporateBallotStatus`](../types/enumerations/CorporateBallotStatus.mdx)\>

#### Throws

if the Ballot does not exist

***

### toHuman()

> **toHuman**(): [`HumanReadable`](../../CorporateActionBase/interfaces/HumanReadable.mdx)

Defined in: [src/api/entities/CorporateActionBase/index.ts:315](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/CorporateActionBase/index.ts#L315)

Return the Corporate Action's static data

#### Returns

[`HumanReadable`](../../CorporateActionBase/interfaces/HumanReadable.mdx)

#### Inherited from

[`CorporateActionBase`](../../CorporateActionBase/classes/CorporateActionBase.mdx).[`toHuman`](../../CorporateActionBase/classes/CorporateActionBase.mdx#tohuman)

***

### vote()

> **vote**(`args`: [`CastBallotVoteParams`](../../../procedures/types/type-aliases/CastBallotVoteParams.mdx), `opts?`: [`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)): `Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

Defined in: [src/api/entities/CorporateBallot/index.ts:321](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/CorporateBallot/index.ts#L321)

Cast a vote on the Ballot

#### Parameters

Parameter
Type

`args`

[`CastBallotVoteParams`](../../../procedures/types/type-aliases/CastBallotVoteParams.mdx)

`opts?`

[`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

#### Throws

if the Ballot does not exist

#### Throws

if the Ballot voting is not active

#### Throws

if the number of votes does not match the sum of all choices of all motions

#### Throws

if fallback votes are provided for a non-RCV Ballot

#### Throws

if vote does not point to the correct choice in motion

#### Throws

if the fallback vote is the same as the choice

#### Throws

if the fallback vote is not pointing to a choice in the motion

#### Note

this method is of type [ProcedureMethod](../../../procedures/types/interfaces/ProcedureMethod.mdx), which means you can call [vote.checkAuthorization](../../../procedures/types/interfaces/ProcedureMethod.mdx#checkauthorization) on it to see whether the signing Account and Identity have the required roles and permissions to run it

***

### votesByIdentity()

> **votesByIdentity**(`did`: `string` \| [`Identity`](../../Identity/classes/Identity.mdx)): `Promise`\<[`CorporateBallotWithParticipation`](../types/type-aliases/CorporateBallotWithParticipation.mdx)\>

Defined in: [src/api/entities/CorporateBallot/index.ts:234](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/CorporateBallot/index.ts#L234)

Retrieve the participation of the Ballot

#### Parameters

Parameter
Type

`did`

`string` \| [`Identity`](../../Identity/classes/Identity.mdx)

#### Returns

`Promise`\<[`CorporateBallotWithParticipation`](../types/type-aliases/CorporateBallotWithParticipation.mdx)\>

#### Throws

if the Ballot does not exist

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

[`CorporateActionBase`](../../CorporateActionBase/classes/CorporateActionBase.mdx).[`generateUuid`](../../CorporateActionBase/classes/CorporateActionBase.mdx#generateuuid)

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

[`CorporateActionBase`](../../CorporateActionBase/classes/CorporateActionBase.mdx).[`unserialize`](../../CorporateActionBase/classes/CorporateActionBase.mdx#unserialize)
