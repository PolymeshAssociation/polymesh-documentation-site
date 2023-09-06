---
id: "Count"
title: "Class: Count"
sidebar_label: "Count"
---

[api/entities/Asset/TransferRestrictions/Count](../../../../../../modules/API/Entities/Asset/TransferRestrictions/Count/Count.md).Count

Handles all Count Transfer Restriction related functionality

## Hierarchy

- [`TransferRestrictionBase`](../TransferRestrictionBase/TransferRestrictionBase.md)<[`Count`](../../../../../../enums/Types/TransferRestrictionType/TransferRestrictionType.md#count)\>

  ↳ **`Count`**

## Properties

### addRestriction

• **addRestriction**: [`ProcedureMethod`](../../../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md)<`Omit`<[`AddCountTransferRestrictionParams`](../../../../../../modules/API/Procedures/Types/Types.md#addcounttransferrestrictionparams), ``"type"``\>, `BigNumber`, `BigNumber`\>

Add a Count Transfer Restriction to this Asset. This limits to total number of individual
investors that may hold the Asset. In some jurisdictions once a threshold of investors is
passed, different regulations may apply. Count Transfer Restriction can ensure such limits are not exceeded

**`Throws`**

 if a count statistic is not enabled for the Asset. [Count.enableStat](Count.md#enablestat) should be called before this method

#### Overrides

[TransferRestrictionBase](../TransferRestrictionBase/TransferRestrictionBase.md).[addRestriction](../TransferRestrictionBase/TransferRestrictionBase.md#addrestriction)

#### Defined in

[api/entities/Asset/TransferRestrictions/Count.ts:38](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95f248df/src/api/entities/Asset/TransferRestrictions/Count.ts#L38)

___

### disableStat

• **disableStat**: [`NoArgsProcedureMethod`](../../../../../../interfaces/Types/NoArgsProcedureMethod/NoArgsProcedureMethod.md)<`void`, `void`\>

Disables the investor count statistic for the Asset. Since statistics introduce slight overhead to each transaction
involving the Asset, disabling unused stats will reduce gas fees for investors when they transact with the Asset

**`Throws`**

 if the stat is being used by a restriction or is not set

#### Overrides

[TransferRestrictionBase](../TransferRestrictionBase/TransferRestrictionBase.md).[disableStat](../TransferRestrictionBase/TransferRestrictionBase.md#disablestat)

#### Defined in

[api/entities/Asset/TransferRestrictions/Count.ts:82](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95f248df/src/api/entities/Asset/TransferRestrictions/Count.ts#L82)

___

### enableStat

• **enableStat**: [`ProcedureMethod`](../../../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md)<`Pick`<[`AddCountStatParams`](../../../../../../modules/API/Procedures/Types/Types.md#addcountstatparams), ``"count"``\>, `void`, `void`\>

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

[api/entities/Asset/TransferRestrictions/Count.ts:74](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95f248df/src/api/entities/Asset/TransferRestrictions/Count.ts#L74)

___

### get

• **get**: () => `Promise`<[`ActiveTransferRestrictions`](../../../../../../interfaces/Types/ActiveTransferRestrictions/ActiveTransferRestrictions.md)<[`CountTransferRestriction`](../../../../../../interfaces/Types/CountTransferRestriction/CountTransferRestriction.md)\>\>

#### Type declaration

▸ (): `Promise`<[`ActiveTransferRestrictions`](../../../../../../interfaces/Types/ActiveTransferRestrictions/ActiveTransferRestrictions.md)<[`CountTransferRestriction`](../../../../../../interfaces/Types/CountTransferRestriction/CountTransferRestriction.md)\>\>

/**
 * Retrieve all active Count Transfer Restrictions
 *
 *

**`Note`**

 there is a maximum number of restrictions allowed across all types.
 *   The `availableSlots` property of the result represents how many more restrictions can be added
 *   before reaching that limit

##### Returns

`Promise`<[`ActiveTransferRestrictions`](../../../../../../interfaces/Types/ActiveTransferRestrictions/ActiveTransferRestrictions.md)<[`CountTransferRestriction`](../../../../../../interfaces/Types/CountTransferRestriction/CountTransferRestriction.md)\>\>

#### Overrides

[TransferRestrictionBase](../TransferRestrictionBase/TransferRestrictionBase.md).[get](../TransferRestrictionBase/TransferRestrictionBase.md#get)

#### Defined in

[api/entities/Asset/TransferRestrictions/Count.ts:93](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95f248df/src/api/entities/Asset/TransferRestrictions/Count.ts#L93)

___

### investorCount

• **investorCount**: () => `Promise`<`BigNumber`\>

#### Type declaration

▸ (): `Promise`<`BigNumber`\>

Returns the count of individual holders of the Asset

**`Note`**

 This value can be used to initialize `enableStat`. If used for this purpose there is a potential race condition
if Asset transfers happen between the time of check and time of use. Either pause Asset transfers, or check after stat
creation and try again if a race occurred. Future versions of the chain should introduce an extrinsic to avoid this issue

##### Returns

`Promise`<`BigNumber`\>

#### Defined in

[api/entities/Asset/TransferRestrictions/Count.ts:102](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95f248df/src/api/entities/Asset/TransferRestrictions/Count.ts#L102)

___

### removeRestrictions

• **removeRestrictions**: [`NoArgsProcedureMethod`](../../../../../../interfaces/Types/NoArgsProcedureMethod/NoArgsProcedureMethod.md)<`BigNumber`, `BigNumber`\>

Removes all Count Transfer Restrictions from this Asset

**`Note`**

 the result is the total amount of restrictions after the procedure has run

#### Overrides

[TransferRestrictionBase](../TransferRestrictionBase/TransferRestrictionBase.md).[removeRestrictions](../TransferRestrictionBase/TransferRestrictionBase.md#removerestrictions)

#### Defined in

[api/entities/Asset/TransferRestrictions/Count.ts:61](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95f248df/src/api/entities/Asset/TransferRestrictions/Count.ts#L61)

___

### setRestrictions

• **setRestrictions**: [`ProcedureMethod`](../../../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md)<`Omit`<[`SetCountTransferRestrictionsParams`](../../../../../../interfaces/API/Procedures/Types/SetCountTransferRestrictionsParams/SetCountTransferRestrictionsParams.md), ``"type"``\>, `BigNumber`, `BigNumber`\>

Sets all Count Transfer Restrictions on this Asset

**`Note`**

 this method sets exempted Identities for restrictions as well. If an Identity is currently exempted from a Count Transfer Restriction
but not passed into this call then it will be removed

**`Note`**

 the result is the total amount of restrictions after the procedure has run

#### Overrides

[TransferRestrictionBase](../TransferRestrictionBase/TransferRestrictionBase.md).[setRestrictions](../TransferRestrictionBase/TransferRestrictionBase.md#setrestrictions)

#### Defined in

[api/entities/Asset/TransferRestrictions/Count.ts:51](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95f248df/src/api/entities/Asset/TransferRestrictions/Count.ts#L51)
