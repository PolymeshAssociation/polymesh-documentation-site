---
id: 'DividendDistribution'
title: 'Class: DividendDistribution'
sidebar_label: 'DividendDistribution'
---

[api/entities/DividendDistribution](../../../../modules/API/Entities/DividendDistribution/DividendDistribution.md).DividendDistribution

Represents a Corporate Action via which an Asset issuer wishes to distribute dividends
between a subset of the Asset Holders (targets)

## Hierarchy

- [`CorporateActionBase`](../CorporateActionBase/CorporateActionBase.md)

  ↳ **`DividendDistribution`**

## Properties

### asset

• **asset**: [`FungibleAsset`](../Asset/Fungible/FungibleAsset.md)

Asset affected by this Corporate Action

#### Inherited from

[CorporateActionBase](../CorporateActionBase/CorporateActionBase.md).[asset](../CorporateActionBase/CorporateActionBase.md#asset)

#### Defined in

[api/entities/CorporateActionBase/index.ts:75](https://github.com/PolymeshAssociation/polymesh-sdk/blob/968f8d70c/src/api/entities/CorporateActionBase/index.ts#L75)

---

### currency

• **currency**: `string`

ticker of the currency in which dividends are being distributed

#### Defined in

[api/entities/DividendDistribution/index.ts:97](https://github.com/PolymeshAssociation/polymesh-sdk/blob/968f8d70c/src/api/entities/DividendDistribution/index.ts#L97)

---

### declarationDate

• **declarationDate**: `Date`

date at which the Corporate Action was created

#### Inherited from

[CorporateActionBase](../CorporateActionBase/CorporateActionBase.md).[declarationDate](../CorporateActionBase/CorporateActionBase.md#declarationdate)

#### Defined in

[api/entities/CorporateActionBase/index.ts:80](https://github.com/PolymeshAssociation/polymesh-sdk/blob/968f8d70c/src/api/entities/CorporateActionBase/index.ts#L80)

---

### defaultTaxWithholding

• **defaultTaxWithholding**: `BigNumber`

default percentage (0-100) of tax withholding for this Corporate Action

#### Inherited from

[CorporateActionBase](../CorporateActionBase/CorporateActionBase.md).[defaultTaxWithholding](../CorporateActionBase/CorporateActionBase.md#defaulttaxwithholding)

#### Defined in

[api/entities/CorporateActionBase/index.ts:96](https://github.com/PolymeshAssociation/polymesh-sdk/blob/968f8d70c/src/api/entities/CorporateActionBase/index.ts#L96)

---

### description

• **description**: `string`

brief text description of the Corporate Action

#### Inherited from

[CorporateActionBase](../CorporateActionBase/CorporateActionBase.md).[description](../CorporateActionBase/CorporateActionBase.md#description)

#### Defined in

[api/entities/CorporateActionBase/index.ts:85](https://github.com/PolymeshAssociation/polymesh-sdk/blob/968f8d70c/src/api/entities/CorporateActionBase/index.ts#L85)

---

### expiryDate

• **expiryDate**: `null` \| `Date`

date after which dividends can no longer be paid/reclaimed. A null value means the distribution never expires

#### Defined in

[api/entities/DividendDistribution/index.ts:113](https://github.com/PolymeshAssociation/polymesh-sdk/blob/968f8d70c/src/api/entities/DividendDistribution/index.ts#L113)

---

### id

• **id**: `BigNumber`

internal Corporate Action ID

#### Inherited from

[CorporateActionBase](../CorporateActionBase/CorporateActionBase.md).[id](../CorporateActionBase/CorporateActionBase.md#id)

#### Defined in

[api/entities/CorporateActionBase/index.ts:70](https://github.com/PolymeshAssociation/polymesh-sdk/blob/968f8d70c/src/api/entities/CorporateActionBase/index.ts#L70)

---

### maxAmount

• **maxAmount**: `BigNumber`

maximum amount of `currency` to be distributed. Distributions are "first come, first served", so funds can be depleted before
every Asset Holder receives their corresponding amount

#### Defined in

[api/entities/DividendDistribution/index.ts:108](https://github.com/PolymeshAssociation/polymesh-sdk/blob/968f8d70c/src/api/entities/DividendDistribution/index.ts#L108)

---

### origin

• **origin**: [`NumberedPortfolio`](../NumberedPortfolio/NumberedPortfolio.md) \| [`DefaultPortfolio`](../DefaultPortfolio/DefaultPortfolio.md)

Portfolio from which the dividends will be distributed

#### Defined in

[api/entities/DividendDistribution/index.ts:92](https://github.com/PolymeshAssociation/polymesh-sdk/blob/968f8d70c/src/api/entities/DividendDistribution/index.ts#L92)

---

### paymentDate

• **paymentDate**: `Date`

date starting from which dividends can be paid/reclaimed

#### Defined in

[api/entities/DividendDistribution/index.ts:118](https://github.com/PolymeshAssociation/polymesh-sdk/blob/968f8d70c/src/api/entities/DividendDistribution/index.ts#L118)

---

### perShare

• **perShare**: `BigNumber`

amount of `currency` to pay for each share held by the Asset Holders

#### Defined in

[api/entities/DividendDistribution/index.ts:102](https://github.com/PolymeshAssociation/polymesh-sdk/blob/968f8d70c/src/api/entities/DividendDistribution/index.ts#L102)

---

### targets

• **targets**: [`CorporateActionTargets`](../../../../interfaces/API/Entities/CorporateActionBase/Types/CorporateActionTargets/CorporateActionTargets.md)

Asset Holder Identities related to this Corporate action. If the treatment is `Exclude`, the Identities
in the array will not be targeted by the Action, Identities not in the array will be targeted, and vice versa

#### Inherited from

[CorporateActionBase](../CorporateActionBase/CorporateActionBase.md).[targets](../CorporateActionBase/CorporateActionBase.md#targets)

#### Defined in

[api/entities/CorporateActionBase/index.ts:91](https://github.com/PolymeshAssociation/polymesh-sdk/blob/968f8d70c/src/api/entities/CorporateActionBase/index.ts#L91)

---

### taxWithholdings

• **taxWithholdings**: [`TaxWithholding`](../../../../interfaces/API/Entities/CorporateActionBase/Types/TaxWithholding/TaxWithholding.md)[]

percentage (0-100) of tax withholding per Identity. Any Identity not present
in this array uses the default tax withholding percentage

#### Inherited from

[CorporateActionBase](../CorporateActionBase/CorporateActionBase.md).[taxWithholdings](../CorporateActionBase/CorporateActionBase.md#taxwithholdings)

#### Defined in

[api/entities/CorporateActionBase/index.ts:102](https://github.com/PolymeshAssociation/polymesh-sdk/blob/968f8d70c/src/api/entities/CorporateActionBase/index.ts#L102)

---

### uuid

• **uuid**: `string`

#### Inherited from

[CorporateActionBase](../CorporateActionBase/CorporateActionBase.md).[uuid](../CorporateActionBase/CorporateActionBase.md#uuid)

#### Defined in

[api/entities/Entity.ts:46](https://github.com/PolymeshAssociation/polymesh-sdk/blob/968f8d70c/src/api/entities/Entity.ts#L46)

## Methods

### checkpoint

▸ **checkpoint**(): `Promise`\<[`CheckpointSchedule`](../CheckpointSchedule/CheckpointSchedule.md) \| [`Checkpoint`](../Checkpoint/Checkpoint.md)\>

Retrieve the Checkpoint associated with this Dividend Distribution. If the Checkpoint is scheduled and has not been created yet,
the corresponding CheckpointSchedule is returned instead

#### Returns

`Promise`\<[`CheckpointSchedule`](../CheckpointSchedule/CheckpointSchedule.md) \| [`Checkpoint`](../Checkpoint/Checkpoint.md)\>

#### Overrides

[CorporateActionBase](../CorporateActionBase/CorporateActionBase.md).[checkpoint](../CorporateActionBase/CorporateActionBase.md#checkpoint)

#### Defined in

[api/entities/DividendDistribution/index.ts:252](https://github.com/PolymeshAssociation/polymesh-sdk/blob/968f8d70c/src/api/entities/DividendDistribution/index.ts#L252)

---

### claim

▸ **claim**(`opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

Claim the Dividends corresponding to the signing Identity

#### Parameters

| Name    | Type                                                                           |
| :------ | :----------------------------------------------------------------------------- |
| `opts?` | [`ProcedureOpts`](../../../../interfaces/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

**`Note`**

if `currency` is indivisible, the Identity's share will be rounded down to the nearest integer (after taxes are withheld)

**`Note`**

this method is of type [NoArgsProcedureMethod](../../../../interfaces/Types/NoArgsProcedureMethod/NoArgsProcedureMethod.md), which means you can call [claim.checkAuthorization](../../../../interfaces/Types/NoArgsProcedureMethod/NoArgsProcedureMethod.md#checkauthorization)
on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/entities/DividendDistribution/index.ts:201](https://github.com/PolymeshAssociation/polymesh-sdk/blob/968f8d70c/src/api/entities/DividendDistribution/index.ts#L201)

---

### details

▸ **details**(): `Promise`\<[`DividendDistributionDetails`](../../../../interfaces/API/Entities/DividendDistribution/Types/DividendDistributionDetails/DividendDistributionDetails.md)\>

Retrieve details associated with this Dividend Distribution

#### Returns

`Promise`\<[`DividendDistributionDetails`](../../../../interfaces/API/Entities/DividendDistribution/Types/DividendDistributionDetails/DividendDistributionDetails.md)\>

#### Defined in

[api/entities/DividendDistribution/index.ts:280](https://github.com/PolymeshAssociation/polymesh-sdk/blob/968f8d70c/src/api/entities/DividendDistribution/index.ts#L280)

---

### exists

▸ **exists**(): `Promise`\<`boolean`\>

Retrieve whether the Distribution exists

#### Returns

`Promise`\<`boolean`\>

#### Overrides

[CorporateActionBase](../CorporateActionBase/CorporateActionBase.md).[exists](../CorporateActionBase/CorporateActionBase.md#exists)

#### Defined in

[api/entities/DividendDistribution/index.ts:271](https://github.com/PolymeshAssociation/polymesh-sdk/blob/968f8d70c/src/api/entities/DividendDistribution/index.ts#L271)

---

### getParticipant

▸ **getParticipant**(`args?`): `Promise`\<`null` \| [`DistributionParticipant`](../../../../interfaces/API/Entities/DividendDistribution/Types/DistributionParticipant/DistributionParticipant.md)\>

Retrieve an Identity that is entitled to dividends in this Distribution (participant),
the amount it is entitled to and whether it has been paid or not

#### Parameters

| Name            | Type                                              | Description                      |
| :-------------- | :------------------------------------------------ | :------------------------------- |
| `args?`         | `Object`                                          | -                                |
| `args.identity` | `string` \| [`Identity`](../Identity/Identity.md) | defaults to the signing Identity |

#### Returns

`Promise`\<`null` \| [`DistributionParticipant`](../../../../interfaces/API/Entities/DividendDistribution/Types/DistributionParticipant/DistributionParticipant.md)\>

**`Note`**

if the Distribution Checkpoint hasn't been created yet, the result will be null.
This is because the Distribution participant's corresponding payment cannot be determined without a Checkpoint

#### Defined in

[api/entities/DividendDistribution/index.ts:361](https://github.com/PolymeshAssociation/polymesh-sdk/blob/968f8d70c/src/api/entities/DividendDistribution/index.ts#L361)

---

### getParticipants

▸ **getParticipants**(): `Promise`\<[`DistributionParticipant`](../../../../interfaces/API/Entities/DividendDistribution/Types/DistributionParticipant/DistributionParticipant.md)[]\>

Retrieve a comprehensive list of all Identities that are entitled to dividends in this Distribution (participants),
the amount they are entitled to and whether they have been paid or not

#### Returns

`Promise`\<[`DistributionParticipant`](../../../../interfaces/API/Entities/DividendDistribution/Types/DistributionParticipant/DistributionParticipant.md)[]\>

**`Note`**

this request can take a lot of time with large amounts of Asset Holders

**`Note`**

if the Distribution Checkpoint hasn't been created yet, the result will be an empty array.
This is because the Distribution participants cannot be determined without a Checkpoint

#### Defined in

[api/entities/DividendDistribution/index.ts:306](https://github.com/PolymeshAssociation/polymesh-sdk/blob/968f8d70c/src/api/entities/DividendDistribution/index.ts#L306)

---

### getPaymentHistory

▸ **getPaymentHistory**(`opts?`): `Promise`\<[`ResultSet`](../../../../interfaces/Types/ResultSet/ResultSet.md) \<[`DistributionPayment`](../../../../interfaces/Types/DistributionPayment/DistributionPayment.md)\>\>

Retrieve the payment history for this Distribution

#### Parameters

| Name          | Type        |
| :------------ | :---------- |
| `opts`        | `Object`    |
| `opts.size?`  | `BigNumber` |
| `opts.start?` | `BigNumber` |

#### Returns

`Promise`\<[`ResultSet`](../../../../interfaces/Types/ResultSet/ResultSet.md) \<[`DistributionPayment`](../../../../interfaces/Types/DistributionPayment/DistributionPayment.md)\>\>

**`Note`**

uses the middleware V2

**`Note`**

supports pagination

#### Defined in

[api/entities/DividendDistribution/index.ts:501](https://github.com/PolymeshAssociation/polymesh-sdk/blob/968f8d70c/src/api/entities/DividendDistribution/index.ts#L501)

---

### getWithheldTax

▸ **getWithheldTax**(): `Promise`\<`BigNumber`\>

Retrieve the amount of taxes that have been withheld up to this point in this Distribution

#### Returns

`Promise`\<`BigNumber`\>

**`Note`**

uses the middlewareV2

#### Defined in

[api/entities/DividendDistribution/index.ts:463](https://github.com/PolymeshAssociation/polymesh-sdk/blob/968f8d70c/src/api/entities/DividendDistribution/index.ts#L463)

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

[CorporateActionBase](../CorporateActionBase/CorporateActionBase.md).[isEqual](../CorporateActionBase/CorporateActionBase.md#isequal)

#### Defined in

[api/entities/Entity.ts:61](https://github.com/PolymeshAssociation/polymesh-sdk/blob/968f8d70c/src/api/entities/Entity.ts#L61)

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

#### Inherited from

[CorporateActionBase](../CorporateActionBase/CorporateActionBase.md).[linkDocuments](../CorporateActionBase/CorporateActionBase.md#linkdocuments)

#### Defined in

[api/entities/CorporateActionBase/index.ts:150](https://github.com/PolymeshAssociation/polymesh-sdk/blob/968f8d70c/src/api/entities/CorporateActionBase/index.ts#L150)

---

### modifyCheckpoint

▸ **modifyCheckpoint**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

Modify the Distribution's Checkpoint

#### Parameters

| Name    | Type                                                                                                                                                                                                                                                                                                                                   |
| :------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `args`  | [`Modify`](../../../../modules/Types/Utils/Utils.md#modify) \<[`ModifyCaCheckpointParams`](../../../../interfaces/API/Procedures/Types/ModifyCaCheckpointParams/ModifyCaCheckpointParams.md), \{ `checkpoint`: [`InputCaCheckpoint`](../../../../modules/API/Entities/Asset/Fungible/Checkpoints/Types/Types.md#inputcacheckpoint) }\> |
| `opts?` | [`ProcedureOpts`](../../../../interfaces/Types/ProcedureOpts/ProcedureOpts.md)                                                                                                                                                                                                                                                         |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

**`Note`**

this method is of type [ProcedureMethod](../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [modifyCheckpoint.checkAuthorization](../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Overrides

[CorporateActionBase](../CorporateActionBase/CorporateActionBase.md).[modifyCheckpoint](../CorporateActionBase/CorporateActionBase.md#modifycheckpoint)

#### Defined in

[api/entities/DividendDistribution/index.ts:211](https://github.com/PolymeshAssociation/polymesh-sdk/blob/968f8d70c/src/api/entities/DividendDistribution/index.ts#L211)

---

### pay

▸ **pay**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

Transfer the corresponding share of the dividends to a list of Identities

#### Parameters

| Name    | Type                                                                                                         |
| :------ | :----------------------------------------------------------------------------------------------------------- |
| `args`  | [`PayDividendsParams`](../../../../interfaces/API/Procedures/Types/PayDividendsParams/PayDividendsParams.md) |
| `opts?` | [`ProcedureOpts`](../../../../interfaces/Types/ProcedureOpts/ProcedureOpts.md)                               |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

**`Note`**

due to performance issues, we do not validate that the distribution has enough remaining funds to pay the corresponding amount to the supplied Identities

**`Note`**

if `currency` is indivisible, the Identity's share will be rounded down to the nearest integer (after taxes are withheld)

**`Note`**

this method is of type [ProcedureMethod](../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [pay.checkAuthorization](../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/entities/DividendDistribution/index.ts:229](https://github.com/PolymeshAssociation/polymesh-sdk/blob/968f8d70c/src/api/entities/DividendDistribution/index.ts#L229)

---

### reclaimFunds

▸ **reclaimFunds**(`opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

Reclaim any remaining funds back to the origin Portfolio. This can only be done after the Distribution has expired

#### Parameters

| Name    | Type                                                                           |
| :------ | :----------------------------------------------------------------------------- |
| `opts?` | [`ProcedureOpts`](../../../../interfaces/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

**`Note`**

withheld taxes are also reclaimed in the same transaction

**`Note`**

required roles:

- Origin Portfolio Custodian

**`Note`**

this method is of type [NoArgsProcedureMethod](../../../../interfaces/Types/NoArgsProcedureMethod/NoArgsProcedureMethod.md), which means you can call [reclaimFunds.checkAuthorization](../../../../interfaces/Types/NoArgsProcedureMethod/NoArgsProcedureMethod.md#checkauthorization)
on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/entities/DividendDistribution/index.ts:244](https://github.com/PolymeshAssociation/polymesh-sdk/blob/968f8d70c/src/api/entities/DividendDistribution/index.ts#L244)

---

### toHuman

▸ **toHuman**(): [`HumanReadable`](../../../../interfaces/API/Entities/DividendDistribution/HumanReadable/HumanReadable.md)

Return the Dividend Distribution's static data

#### Returns

[`HumanReadable`](../../../../interfaces/API/Entities/DividendDistribution/HumanReadable/HumanReadable.md)

#### Overrides

[CorporateActionBase](../CorporateActionBase/CorporateActionBase.md).[toHuman](../CorporateActionBase/CorporateActionBase.md#tohuman)

#### Defined in

[api/entities/DividendDistribution/index.ts:614](https://github.com/PolymeshAssociation/polymesh-sdk/blob/968f8d70c/src/api/entities/DividendDistribution/index.ts#L614)

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

[CorporateActionBase](../CorporateActionBase/CorporateActionBase.md).[generateUuid](../CorporateActionBase/CorporateActionBase.md#generateuuid)

#### Defined in

[api/entities/Entity.ts:14](https://github.com/PolymeshAssociation/polymesh-sdk/blob/968f8d70c/src/api/entities/Entity.ts#L14)

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

[CorporateActionBase](../CorporateActionBase/CorporateActionBase.md).[unserialize](../CorporateActionBase/CorporateActionBase.md#unserialize)

#### Defined in

[api/entities/Entity.ts:23](https://github.com/PolymeshAssociation/polymesh-sdk/blob/968f8d70c/src/api/entities/Entity.ts#L23)
