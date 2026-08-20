# Class: DividendDistribution

> Defined in: [src/api/entities/DividendDistribution/index.ts:86](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/DividendDistribution/index.ts#L86)

# Class: DividendDistribution

Defined in: [src/api/entities/DividendDistribution/index.ts:86](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/DividendDistribution/index.ts#L86)

Represents a Corporate Action via which an Asset issuer wishes to distribute dividends
  between a subset of the Asset Holders (targets)

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

### currency

> **currency**: `string`

Defined in: [src/api/entities/DividendDistribution/index.ts:95](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/DividendDistribution/index.ts#L95)

Asset ID of the currency in which dividends are being distributed

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

### expiryDate

> **expiryDate**: `Date` \| `null`

Defined in: [src/api/entities/DividendDistribution/index.ts:111](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/DividendDistribution/index.ts#L111)

date after which dividends can no longer be paid/reclaimed. A null value means the distribution never expires

***

### id

> **id**: `BigNumber`

Defined in: [src/api/entities/CorporateActionBase/index.ts:80](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/CorporateActionBase/index.ts#L80)

internal Corporate Action ID

#### Inherited from

[`CorporateActionBase`](../../CorporateActionBase/classes/CorporateActionBase.mdx).[`id`](../../CorporateActionBase/classes/CorporateActionBase.mdx#id)

***

### maxAmount

> **maxAmount**: `BigNumber`

Defined in: [src/api/entities/DividendDistribution/index.ts:106](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/DividendDistribution/index.ts#L106)

maximum amount of `currency` to be distributed. Distributions are "first come, first served", so funds can be depleted before
  every Asset Holder receives their corresponding amount

***

### origin

> **origin**: [`DefaultPortfolio`](../../DefaultPortfolio/classes/DefaultPortfolio.mdx) \| [`NumberedPortfolio`](../../NumberedPortfolio/classes/NumberedPortfolio.mdx)

Defined in: [src/api/entities/DividendDistribution/index.ts:90](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/DividendDistribution/index.ts#L90)

Portfolio from which the dividends will be distributed

***

### paymentDate

> **paymentDate**: `Date`

Defined in: [src/api/entities/DividendDistribution/index.ts:116](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/DividendDistribution/index.ts#L116)

date starting from which dividends can be paid/reclaimed

***

### perShare

> **perShare**: `BigNumber`

Defined in: [src/api/entities/DividendDistribution/index.ts:100](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/DividendDistribution/index.ts#L100)

amount of `currency` to pay for each share held by the Asset Holders

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

> **checkpoint**(): `Promise`\<[`Checkpoint`](../../Checkpoint/classes/Checkpoint.mdx) \| [`CheckpointSchedule`](../../CheckpointSchedule/classes/CheckpointSchedule.mdx)\>

Defined in: [src/api/entities/DividendDistribution/index.ts:233](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/DividendDistribution/index.ts#L233)

Retrieve the Checkpoint associated with this Dividend Distribution. If the Checkpoint is scheduled and has not been created yet,
  the corresponding CheckpointSchedule is returned instead

#### Returns

`Promise`\<[`Checkpoint`](../../Checkpoint/classes/Checkpoint.mdx) \| [`CheckpointSchedule`](../../CheckpointSchedule/classes/CheckpointSchedule.mdx)\>

#### Overrides

[`CorporateActionBase`](../../CorporateActionBase/classes/CorporateActionBase.mdx).[`checkpoint`](../../CorporateActionBase/classes/CorporateActionBase.mdx#checkpoint)

***

### claim()

> **claim**(`opts?`: [`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)): `Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

Defined in: [src/api/entities/DividendDistribution/index.ts:196](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/DividendDistribution/index.ts#L196)

Claim the Dividends corresponding to the signing Identity

#### Parameters

Parameter
Type

`opts?`

[`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

#### Note

if `currency` is indivisible, the Identity's share will be rounded down to the nearest integer (after taxes are withheld)

#### Note

this method is of type [NoArgsProcedureMethod](../../../procedures/types/interfaces/NoArgsProcedureMethod.mdx), which means you can call [claim.checkAuthorization](../../../procedures/types/interfaces/NoArgsProcedureMethod.mdx#checkauthorization) on it to see whether the signing Account and Identity have the required roles and permissions to run it

***

### details()

> **details**(): `Promise`\<[`DividendDistributionDetails`](../types/interfaces/DividendDistributionDetails.mdx)\>

Defined in: [src/api/entities/DividendDistribution/index.ts:261](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/DividendDistribution/index.ts#L261)

Retrieve details associated with this Dividend Distribution

#### Returns

`Promise`\<[`DividendDistributionDetails`](../types/interfaces/DividendDistributionDetails.mdx)\>

***

### exists()

> **exists**(): `Promise`\<`boolean`\>

Defined in: [src/api/entities/DividendDistribution/index.ts:252](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/DividendDistribution/index.ts#L252)

Retrieve whether the Distribution exists

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

### getParticipant()

> **getParticipant**(`args?`: `object`): `Promise`\<[`DistributionParticipant`](../types/interfaces/DistributionParticipant.mdx) \| `null`\>

Defined in: [src/api/entities/DividendDistribution/index.ts:354](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/DividendDistribution/index.ts#L354)

Retrieve an Identity that is entitled to dividends in this Distribution (participant),
  the amount it is entitled to and whether it has been paid or not

#### Parameters

Parameter
Type
Description

`args?`

\{ `identity`: `string` \| [`Identity`](../../Identity/classes/Identity.mdx); \}

&hyphen;

`args.identity?`

`string` \| [`Identity`](../../Identity/classes/Identity.mdx)

defaults to the signing Identity

#### Returns

`Promise`\<[`DistributionParticipant`](../types/interfaces/DistributionParticipant.mdx) \| `null`\>

#### Note

if the Distribution Checkpoint hasn't been created yet, the result will be null.
  This is because the Distribution participant's corresponding payment cannot be determined without a Checkpoint

***

### getParticipants()

> **getParticipants**(): `Promise`\<[`DistributionParticipant`](../types/interfaces/DistributionParticipant.mdx)[]\>

Defined in: [src/api/entities/DividendDistribution/index.ts:287](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/DividendDistribution/index.ts#L287)

Retrieve a comprehensive list of all Identities that are entitled to dividends in this Distribution (participants),
  the amount they are entitled to and whether they have been paid or not

#### Returns

`Promise`\<[`DistributionParticipant`](../types/interfaces/DistributionParticipant.mdx)[]\>

#### Note

this request can take a lot of time with large amounts of Asset Holders

#### Note

if the Distribution Checkpoint hasn't been created yet, the result will be an empty array.
  This is because the Distribution participants cannot be determined without a Checkpoint

***

### getPaymentHistory()

> **getPaymentHistory**(`opts?`: `object`): `Promise`\<[`ResultSet`](../../types/interfaces/ResultSet.mdx)\<[`DistributionPayment`](../../types/interfaces/DistributionPayment.mdx)\>\>

Defined in: [src/api/entities/DividendDistribution/index.ts:493](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/DividendDistribution/index.ts#L493)

Retrieve the payment history for this Distribution

#### Parameters

Parameter
Type

`opts`

\{ `size?`: `BigNumber`; `start?`: `BigNumber`; \}

`opts.size?`

`BigNumber`

`opts.start?`

`BigNumber`

#### Returns

`Promise`\<[`ResultSet`](../../types/interfaces/ResultSet.mdx)\<[`DistributionPayment`](../../types/interfaces/DistributionPayment.mdx)\>\>

#### Note

uses the middleware V2

#### Note

supports pagination

***

### getWithheldTax()

> **getWithheldTax**(): `Promise`\<`BigNumber`\>

Defined in: [src/api/entities/DividendDistribution/index.ts:452](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/DividendDistribution/index.ts#L452)

Retrieve the amount of taxes that have been withheld up to this point in this Distribution

#### Returns

`Promise`\<`BigNumber`\>

#### Note

uses the middlewareV2

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

> **modifyCheckpoint**(`args`: [`Modify`](../../../../types/utils/type-aliases/Modify.mdx)\<[`ModifyCaCheckpointParams`](../../../procedures/types/interfaces/ModifyCaCheckpointParams.mdx), \{ `checkpoint`: [`InputCaCheckpoint`](../../Asset/Fungible/Checkpoints/types/type-aliases/InputCaCheckpoint.mdx); \}\>, `opts?`: [`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)): `Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

Defined in: [src/api/entities/DividendDistribution/index.ts:201](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/DividendDistribution/index.ts#L201)

Modify the Distribution's Checkpoint

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

#### Overrides

[`CorporateActionBase`](../../CorporateActionBase/classes/CorporateActionBase.mdx).[`modifyCheckpoint`](../../CorporateActionBase/classes/CorporateActionBase.mdx#modifycheckpoint)

***

### pay()

> **pay**(`args`: [`PayDividendsParams`](../../../procedures/types/interfaces/PayDividendsParams.mdx), `opts?`: [`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)): `Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

Defined in: [src/api/entities/DividendDistribution/index.ts:217](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/DividendDistribution/index.ts#L217)

Transfer the corresponding share of the dividends to a list of Identities

#### Parameters

Parameter
Type

`args`

[`PayDividendsParams`](../../../procedures/types/interfaces/PayDividendsParams.mdx)

`opts?`

[`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

#### Note

due to performance issues, we do not validate that the distribution has enough remaining funds to pay the corresponding amount to the supplied Identities

#### Note

if `currency` is indivisible, the Identity's share will be rounded down to the nearest integer (after taxes are withheld)

#### Note

this method is of type [ProcedureMethod](../../../procedures/types/interfaces/ProcedureMethod.mdx), which means you can call [pay.checkAuthorization](../../../procedures/types/interfaces/ProcedureMethod.mdx#checkauthorization) on it to see whether the signing Account and Identity have the required roles and permissions to run it

***

### reclaimFunds()

> **reclaimFunds**(`opts?`: [`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)): `Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

Defined in: [src/api/entities/DividendDistribution/index.ts:227](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/DividendDistribution/index.ts#L227)

Reclaim any remaining funds back to the origin Portfolio. This can only be done after the Distribution has expired

#### Parameters

Parameter
Type

`opts?`

[`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

#### Note

withheld taxes are also reclaimed in the same transaction

#### Note

required roles:
  - Origin Portfolio Custodian

#### Note

this method is of type [NoArgsProcedureMethod](../../../procedures/types/interfaces/NoArgsProcedureMethod.mdx), which means you can call [reclaimFunds.checkAuthorization](../../../procedures/types/interfaces/NoArgsProcedureMethod.mdx#checkauthorization) on it to see whether the signing Account and Identity have the required roles and permissions to run it

***

### toHuman()

> **toHuman**(): [`HumanReadable`](../interfaces/HumanReadable.mdx)

Defined in: [src/api/entities/DividendDistribution/index.ts:608](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/DividendDistribution/index.ts#L608)

Return the Dividend Distribution's static data

#### Returns

[`HumanReadable`](../interfaces/HumanReadable.mdx)

#### Overrides

[`CorporateActionBase`](../../CorporateActionBase/classes/CorporateActionBase.mdx).[`toHuman`](../../CorporateActionBase/classes/CorporateActionBase.mdx#tohuman)

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
