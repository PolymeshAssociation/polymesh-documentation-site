---
id: "Count"
title: "Class: Count"
sidebar_label: "Count"
---

[api/entities/Asset/Fungible/TransferRestrictions/Count](../../../../../../../modules/API/Entities/Asset/Fungible/TransferRestrictions/Count/Count.md).Count

Handles all Count Transfer Restriction related functionality

## Hierarchy

- [`TransferRestrictionBase`](../TransferRestrictionBase/TransferRestrictionBase.md)\<[`Count`](../../../../../../../enums/API/Procedures/Types/TransferRestrictionType/TransferRestrictionType.md#count)\>

  ↳ **`Count`**

## Properties

### addRestriction

• **addRestriction**: [`ProcedureMethod`](../../../../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md)\<`Omit`\<[`AddCountTransferRestrictionParams`](../../../../../../../modules/API/Procedures/Types/Types.md#addcounttransferrestrictionparams), ``"type"``\>, `BigNumber`, `BigNumber`\>

Add a Count Transfer Restriction to this Asset. This limits to total number of individual
investors that may hold the Asset. In some jurisdictions once a threshold of investors is
passed, different regulations may apply. Count Transfer Restriction can ensure such limits are not exceeded

**`Throws`**

if a count statistic is not enabled for the Asset. [Count.enableStat](Count.md#enablestat) should be called before this method

#### Overrides

[TransferRestrictionBase](../TransferRestrictionBase/TransferRestrictionBase.md).[addRestriction](../TransferRestrictionBase/TransferRestrictionBase.md#addrestriction)

#### Defined in

[api/entities/Asset/Fungible/TransferRestrictions/Count.ts:39](https://github.com/PolymeshAssociation/polymesh-sdk/blob/49a0066c3/src/api/entities/Asset/Fungible/TransferRestrictions/Count.ts#L39)

___

### disableStat

• **disableStat**: [`NoArgsProcedureMethod`](../../../../../../../interfaces/API/Procedures/Types/NoArgsProcedureMethod/NoArgsProcedureMethod.md)\<`void`, `void`\>

Disables the investor count statistic for the Asset. Since statistics introduce slight overhead to each transaction
involving the Asset, disabling unused stats will reduce gas fees for investors when they transact with the Asset

**`Throws`**

if the stat is being used by a restriction or is not set

#### Overrides

[TransferRestrictionBase](../TransferRestrictionBase/TransferRestrictionBase.md).[disableStat](../TransferRestrictionBase/TransferRestrictionBase.md#disablestat)

#### Defined in

[api/entities/Asset/Fungible/TransferRestrictions/Count.ts:83](https://github.com/PolymeshAssociation/polymesh-sdk/blob/49a0066c3/src/api/entities/Asset/Fungible/TransferRestrictions/Count.ts#L83)

___

### enableStat

• **enableStat**: [`ProcedureMethod`](../../../../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md)\<`Pick`\<[`AddCountStatParams`](../../../../../../../modules/API/Procedures/Types/Types.md#addcountstatparams), ``"count"``\>, `void`, `void`\>

Enables an investor count statistic for the Asset, which is required before creating restrictions

The counter is only updated automatically with each transfer of tokens after the stat has been enabled.
As such the initial value for the stat should be passed in, which can be fetched with [Count.investorCount](Count.md#investorcount)

**`Note`**

Currently there is a potential race condition if passing in counts values when the Asset is being traded.
It is recommended to call this method during the initial configuration of the Asset, before people are trading it.
Otherwise the Asset should be frozen, or the stat checked after being set to ensure the correct value is used. Future
versions of the chain may expose a new extrinsic to avoid this issue

#### Overrides

[TransferRestrictionBase](../TransferRestrictionBase/TransferRestrictionBase.md).[enableStat](../TransferRestrictionBase/TransferRestrictionBase.md#enablestat)

#### Defined in

[api/entities/Asset/Fungible/TransferRestrictions/Count.ts:75](https://github.com/PolymeshAssociation/polymesh-sdk/blob/49a0066c3/src/api/entities/Asset/Fungible/TransferRestrictions/Count.ts#L75)

___

### get

• **get**: () => `Promise`\<[`ActiveTransferRestrictions`](../../../../../../../interfaces/API/Entities/Types/ActiveTransferRestrictions/ActiveTransferRestrictions.md)\<[`CountTransferRestriction`](../../../../../../../interfaces/API/Entities/Types/CountTransferRestriction/CountTransferRestriction.md)\>\>

#### Type declaration

▸ (): `Promise`\<[`ActiveTransferRestrictions`](../../../../../../../interfaces/API/Entities/Types/ActiveTransferRestrictions/ActiveTransferRestrictions.md)\<[`CountTransferRestriction`](../../../../../../../interfaces/API/Entities/Types/CountTransferRestriction/CountTransferRestriction.md)\>\>

/**
 * Retrieve all active Count Transfer Restrictions
 *
 *

##### Returns

`Promise`\<[`ActiveTransferRestrictions`](../../../../../../../interfaces/API/Entities/Types/ActiveTransferRestrictions/ActiveTransferRestrictions.md)\<[`CountTransferRestriction`](../../../../../../../interfaces/API/Entities/Types/CountTransferRestriction/CountTransferRestriction.md)\>\>

**`Note`**

there is a maximum number of restrictions allowed across all types.
 *   The `availableSlots` property of the result represents how many more restrictions can be added
 *   before reaching that limit

#### Overrides

[TransferRestrictionBase](../TransferRestrictionBase/TransferRestrictionBase.md).[get](../TransferRestrictionBase/TransferRestrictionBase.md#get)

#### Defined in

[api/entities/Asset/Fungible/TransferRestrictions/Count.ts:94](https://github.com/PolymeshAssociation/polymesh-sdk/blob/49a0066c3/src/api/entities/Asset/Fungible/TransferRestrictions/Count.ts#L94)

___

### getStat

• **getStat**: () => `Promise`\<[`ActiveStats`](../../../../../../../modules/API/Entities/Types/Types.md#activestats)\>

#### Type declaration

▸ (): `Promise`\<[`ActiveStats`](../../../../../../../modules/API/Entities/Types/Types.md#activestats)\>

Retrieve current Count Transfer Restriction investor balance statistic for the Asset

##### Returns

`Promise`\<[`ActiveStats`](../../../../../../../modules/API/Entities/Types/Types.md#activestats)\>

#### Overrides

[TransferRestrictionBase](../TransferRestrictionBase/TransferRestrictionBase.md).[getStat](../TransferRestrictionBase/TransferRestrictionBase.md#getstat)

#### Defined in

[api/entities/Asset/Fungible/TransferRestrictions/Count.ts:109](https://github.com/PolymeshAssociation/polymesh-sdk/blob/49a0066c3/src/api/entities/Asset/Fungible/TransferRestrictions/Count.ts#L109)

___

### investorCount

• **investorCount**: () => `Promise`\<`BigNumber`\>

#### Type declaration

▸ (): `Promise`\<`BigNumber`\>

Returns the count of individual holders of the Asset

##### Returns

`Promise`\<`BigNumber`\>

**`Note`**

This value can be used to initialize `enableStat`. If used for this purpose there is a potential race condition
if Asset transfers happen between the time of check and time of use. Either pause Asset transfers, or check after stat
creation and try again if a race occurred. Future versions of the chain should introduce an extrinsic to avoid this issue

#### Defined in

[api/entities/Asset/Fungible/TransferRestrictions/Count.ts:103](https://github.com/PolymeshAssociation/polymesh-sdk/blob/49a0066c3/src/api/entities/Asset/Fungible/TransferRestrictions/Count.ts#L103)

___

### removeRestrictions

• **removeRestrictions**: [`NoArgsProcedureMethod`](../../../../../../../interfaces/API/Procedures/Types/NoArgsProcedureMethod/NoArgsProcedureMethod.md)\<`BigNumber`, `BigNumber`\>

Removes all Count Transfer Restrictions from this Asset

**`Note`**

the result is the total amount of restrictions after the procedure has run

#### Overrides

[TransferRestrictionBase](../TransferRestrictionBase/TransferRestrictionBase.md).[removeRestrictions](../TransferRestrictionBase/TransferRestrictionBase.md#removerestrictions)

#### Defined in

[api/entities/Asset/Fungible/TransferRestrictions/Count.ts:62](https://github.com/PolymeshAssociation/polymesh-sdk/blob/49a0066c3/src/api/entities/Asset/Fungible/TransferRestrictions/Count.ts#L62)

___

### setRestrictions

• **setRestrictions**: [`ProcedureMethod`](../../../../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md)\<`Omit`\<[`SetCountTransferRestrictionsParams`](../../../../../../../interfaces/API/Procedures/Types/SetCountTransferRestrictionsParams/SetCountTransferRestrictionsParams.md), ``"type"``\>, `BigNumber`, `BigNumber`\>

Sets all Count Transfer Restrictions on this Asset

**`Note`**

this method sets exempted Identities for restrictions as well. If an Identity is currently exempted from a Count Transfer Restriction
but not passed into this call then it will be removed

**`Note`**

the result is the total amount of restrictions after the procedure has run

#### Overrides

[TransferRestrictionBase](../TransferRestrictionBase/TransferRestrictionBase.md).[setRestrictions](../TransferRestrictionBase/TransferRestrictionBase.md#setrestrictions)

#### Defined in

[api/entities/Asset/Fungible/TransferRestrictions/Count.ts:52](https://github.com/PolymeshAssociation/polymesh-sdk/blob/49a0066c3/src/api/entities/Asset/Fungible/TransferRestrictions/Count.ts#L52)
