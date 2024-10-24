---
id: "Percentage"
title: "Class: Percentage"
sidebar_label: "Percentage"
---

[api/entities/Asset/Fungible/TransferRestrictions/Percentage](../../../../../../../modules/API/Entities/Asset/Fungible/TransferRestrictions/Percentage/Percentage.md).Percentage

Handles all Percentage Transfer Restriction related functionality

## Hierarchy

- [`TransferRestrictionBase`](../TransferRestrictionBase/TransferRestrictionBase.md)\<[`Percentage`](../../../../../../../enums/API/Procedures/Types/TransferRestrictionType/TransferRestrictionType.md#percentage)\>

  ↳ **`Percentage`**

## Properties

### addRestriction

• **addRestriction**: [`ProcedureMethod`](../../../../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md)\<`Omit`\<[`AddPercentageTransferRestrictionParams`](../../../../../../../modules/API/Procedures/Types/Types.md#addpercentagetransferrestrictionparams), ``"type"``\>, `BigNumber`, `BigNumber`\>

Add a Percentage Transfer Restriction to this Asset. This limits the total percentage of the supply
a single investor can acquire without an exemption

**`Throws`**

if the Balance statistic is not enabled for this Asset. [enableStat](Percentage.md#enablestat) should be called before this method

#### Overrides

[TransferRestrictionBase](../TransferRestrictionBase/TransferRestrictionBase.md).[addRestriction](../TransferRestrictionBase/TransferRestrictionBase.md#addrestriction)

#### Defined in

[api/entities/Asset/Fungible/TransferRestrictions/Percentage.ts:29](https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/entities/Asset/Fungible/TransferRestrictions/Percentage.ts#L29)

___

### disableStat

• **disableStat**: [`NoArgsProcedureMethod`](../../../../../../../interfaces/API/Procedures/Types/NoArgsProcedureMethod/NoArgsProcedureMethod.md)\<`void`, `void`\>

Disables the investor balance statistic for the Asset. Since statistics introduce slight overhead to each transaction
involving the Asset, disabling unused stats will reduce gas fees for investors when they transact with the Asset

**`Throws`**

if the stat is being used by a restriction or is not set

#### Overrides

[TransferRestrictionBase](../TransferRestrictionBase/TransferRestrictionBase.md).[disableStat](../TransferRestrictionBase/TransferRestrictionBase.md#disablestat)

#### Defined in

[api/entities/Asset/Fungible/TransferRestrictions/Percentage.ts:66](https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/entities/Asset/Fungible/TransferRestrictions/Percentage.ts#L66)

___

### enableStat

• **enableStat**: [`NoArgsProcedureMethod`](../../../../../../../interfaces/API/Procedures/Types/NoArgsProcedureMethod/NoArgsProcedureMethod.md)\<`void`, `void`\>

Enables investor balance statistic for the Asset, which is required before creating restrictions
that limit the total ownership of the Assets' supply

#### Overrides

[TransferRestrictionBase](../TransferRestrictionBase/TransferRestrictionBase.md).[enableStat](../TransferRestrictionBase/TransferRestrictionBase.md#enablestat)

#### Defined in

[api/entities/Asset/Fungible/TransferRestrictions/Percentage.ts:58](https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/entities/Asset/Fungible/TransferRestrictions/Percentage.ts#L58)

___

### get

• **get**: () => `Promise`\<[`ActiveTransferRestrictions`](../../../../../../../interfaces/API/Entities/Types/ActiveTransferRestrictions/ActiveTransferRestrictions.md)\<[`PercentageTransferRestriction`](../../../../../../../interfaces/API/Entities/Types/PercentageTransferRestriction/PercentageTransferRestriction.md)\>\>

#### Type declaration

▸ (): `Promise`\<[`ActiveTransferRestrictions`](../../../../../../../interfaces/API/Entities/Types/ActiveTransferRestrictions/ActiveTransferRestrictions.md)\<[`PercentageTransferRestriction`](../../../../../../../interfaces/API/Entities/Types/PercentageTransferRestriction/PercentageTransferRestriction.md)\>\>

Retrieve all active Percentage Transfer Restrictions

##### Returns

`Promise`\<[`ActiveTransferRestrictions`](../../../../../../../interfaces/API/Entities/Types/ActiveTransferRestrictions/ActiveTransferRestrictions.md)\<[`PercentageTransferRestriction`](../../../../../../../interfaces/API/Entities/Types/PercentageTransferRestriction/PercentageTransferRestriction.md)\>\>

**`Note`**

there is a maximum number of restrictions allowed across all types.
  The `availableSlots` property of the result represents how many more restrictions can be added
  before reaching that limit

#### Overrides

[TransferRestrictionBase](../TransferRestrictionBase/TransferRestrictionBase.md).[get](../TransferRestrictionBase/TransferRestrictionBase.md#get)

#### Defined in

[api/entities/Asset/Fungible/TransferRestrictions/Percentage.ts:75](https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/entities/Asset/Fungible/TransferRestrictions/Percentage.ts#L75)

___

### getStat

• **getStat**: () => `Promise`\<[`ActiveStats`](../../../../../../../modules/API/Entities/Types/Types.md#activestats)\>

#### Type declaration

▸ (): `Promise`\<[`ActiveStats`](../../../../../../../modules/API/Entities/Types/Types.md#activestats)\>

Retrieve current Percentage Transfer Restriction investor balance statistic for the Asset

##### Returns

`Promise`\<[`ActiveStats`](../../../../../../../modules/API/Entities/Types/Types.md#activestats)\>

#### Overrides

[TransferRestrictionBase](../TransferRestrictionBase/TransferRestrictionBase.md).[getStat](../TransferRestrictionBase/TransferRestrictionBase.md#getstat)

#### Defined in

[api/entities/Asset/Fungible/TransferRestrictions/Percentage.ts:81](https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/entities/Asset/Fungible/TransferRestrictions/Percentage.ts#L81)

___

### removeRestrictions

• **removeRestrictions**: [`NoArgsProcedureMethod`](../../../../../../../interfaces/API/Procedures/Types/NoArgsProcedureMethod/NoArgsProcedureMethod.md)\<`BigNumber`, `BigNumber`\>

Removes all Percentage Transfer Restrictions from this Asset

**`Note`**

the result is the total amount of restrictions after the procedure has run

#### Overrides

[TransferRestrictionBase](../TransferRestrictionBase/TransferRestrictionBase.md).[removeRestrictions](../TransferRestrictionBase/TransferRestrictionBase.md#removerestrictions)

#### Defined in

[api/entities/Asset/Fungible/TransferRestrictions/Percentage.ts:52](https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/entities/Asset/Fungible/TransferRestrictions/Percentage.ts#L52)

___

### setRestrictions

• **setRestrictions**: [`ProcedureMethod`](../../../../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md)\<`Omit`\<[`SetPercentageTransferRestrictionsParams`](../../../../../../../interfaces/API/Procedures/Types/SetPercentageTransferRestrictionsParams/SetPercentageTransferRestrictionsParams.md), ``"type"``\>, `BigNumber`, `BigNumber`\>

Sets all Percentage Transfer Restrictions on this Asset

**`Note`**

this method sets exempted Identities for restrictions as well. If an Identity is currently exempted from a Percentage Transfer Restriction
but not passed into this call then it will be removed

**`Note`**

the result is the total amount of restrictions after the procedure has run

#### Overrides

[TransferRestrictionBase](../TransferRestrictionBase/TransferRestrictionBase.md).[setRestrictions](../TransferRestrictionBase/TransferRestrictionBase.md#setrestrictions)

#### Defined in

[api/entities/Asset/Fungible/TransferRestrictions/Percentage.ts:42](https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/entities/Asset/Fungible/TransferRestrictions/Percentage.ts#L42)
