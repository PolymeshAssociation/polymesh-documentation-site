---
id: "Percentage"
title: "Class: Percentage"
sidebar_label: "Percentage"
---

[api/entities/Asset/TransferRestrictions/Percentage](../../../../../../modules/API/Entities/Asset/TransferRestrictions/Percentage/Percentage.md).Percentage

Handles all Percentage Transfer Restriction related functionality

## Hierarchy

- [`TransferRestrictionBase`](../TransferRestrictionBase/TransferRestrictionBase.md)<[`Percentage`](../../../../../../enums/Types/TransferRestrictionType/TransferRestrictionType.md#percentage)\>

  ↳ **`Percentage`**

## Properties

### addRestriction

• **addRestriction**: [`ProcedureMethod`](../../../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md)<`Omit`<[`AddPercentageTransferRestrictionParams`](../../../../../../modules/API/Procedures/Types/Types.md#addpercentagetransferrestrictionparams), ``"type"``\>, `BigNumber`, `BigNumber`\>

Add a Percentage Transfer Restriction to this Asset. This limits the total percentage of the supply
a single investor can acquire without an exemption

**`Throws`**

 if the Balance statistic is not enabled for this Asset. [enableStat](Percentage.md#enablestat) should be called before this method

#### Overrides

[TransferRestrictionBase](../TransferRestrictionBase/TransferRestrictionBase.md).[addRestriction](../TransferRestrictionBase/TransferRestrictionBase.md#addrestriction)

#### Defined in

[api/entities/Asset/TransferRestrictions/Percentage.ts:28](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d2/src/api/entities/Asset/TransferRestrictions/Percentage.ts#L28)

___

### disableStat

• **disableStat**: [`NoArgsProcedureMethod`](../../../../../../interfaces/Types/NoArgsProcedureMethod/NoArgsProcedureMethod.md)<`void`, `void`\>

Disables the investor balance statistic for the Asset. Since statistics introduce slight overhead to each transaction
involving the Asset, disabling unused stats will reduce gas fees for investors when they transact with the Asset

**`Throws`**

 if the stat is being used by a restriction or is not set

#### Overrides

[TransferRestrictionBase](../TransferRestrictionBase/TransferRestrictionBase.md).[disableStat](../TransferRestrictionBase/TransferRestrictionBase.md#disablestat)

#### Defined in

[api/entities/Asset/TransferRestrictions/Percentage.ts:65](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d2/src/api/entities/Asset/TransferRestrictions/Percentage.ts#L65)

___

### enableStat

• **enableStat**: [`NoArgsProcedureMethod`](../../../../../../interfaces/Types/NoArgsProcedureMethod/NoArgsProcedureMethod.md)<`void`, `void`\>

Enables investor balance statistic for the Asset, which is required before creating restrictions
that limit the total ownership of the Assets' supply

#### Overrides

[TransferRestrictionBase](../TransferRestrictionBase/TransferRestrictionBase.md).[enableStat](../TransferRestrictionBase/TransferRestrictionBase.md#enablestat)

#### Defined in

[api/entities/Asset/TransferRestrictions/Percentage.ts:57](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d2/src/api/entities/Asset/TransferRestrictions/Percentage.ts#L57)

___

### get

• **get**: () => `Promise`<[`ActiveTransferRestrictions`](../../../../../../interfaces/Types/ActiveTransferRestrictions/ActiveTransferRestrictions.md)<[`PercentageTransferRestriction`](../../../../../../interfaces/Types/PercentageTransferRestriction/PercentageTransferRestriction.md)\>\>

#### Type declaration

▸ (): `Promise`<[`ActiveTransferRestrictions`](../../../../../../interfaces/Types/ActiveTransferRestrictions/ActiveTransferRestrictions.md)<[`PercentageTransferRestriction`](../../../../../../interfaces/Types/PercentageTransferRestriction/PercentageTransferRestriction.md)\>\>

Retrieve all active Percentage Transfer Restrictions

**`Note`**

 there is a maximum number of restrictions allowed across all types.
  The `availableSlots` property of the result represents how many more restrictions can be added
  before reaching that limit

##### Returns

`Promise`<[`ActiveTransferRestrictions`](../../../../../../interfaces/Types/ActiveTransferRestrictions/ActiveTransferRestrictions.md)<[`PercentageTransferRestriction`](../../../../../../interfaces/Types/PercentageTransferRestriction/PercentageTransferRestriction.md)\>\>

#### Overrides

[TransferRestrictionBase](../TransferRestrictionBase/TransferRestrictionBase.md).[get](../TransferRestrictionBase/TransferRestrictionBase.md#get)

#### Defined in

[api/entities/Asset/TransferRestrictions/Percentage.ts:74](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d2/src/api/entities/Asset/TransferRestrictions/Percentage.ts#L74)

___

### removeRestrictions

• **removeRestrictions**: [`NoArgsProcedureMethod`](../../../../../../interfaces/Types/NoArgsProcedureMethod/NoArgsProcedureMethod.md)<`BigNumber`, `BigNumber`\>

Removes all Percentage Transfer Restrictions from this Asset

**`Note`**

 the result is the total amount of restrictions after the procedure has run

#### Overrides

[TransferRestrictionBase](../TransferRestrictionBase/TransferRestrictionBase.md).[removeRestrictions](../TransferRestrictionBase/TransferRestrictionBase.md#removerestrictions)

#### Defined in

[api/entities/Asset/TransferRestrictions/Percentage.ts:51](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d2/src/api/entities/Asset/TransferRestrictions/Percentage.ts#L51)

___

### setRestrictions

• **setRestrictions**: [`ProcedureMethod`](../../../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md)<`Omit`<[`SetPercentageTransferRestrictionsParams`](../../../../../../interfaces/API/Procedures/Types/SetPercentageTransferRestrictionsParams/SetPercentageTransferRestrictionsParams.md), ``"type"``\>, `BigNumber`, `BigNumber`\>

Sets all Percentage Transfer Restrictions on this Asset

**`Note`**

 this method sets exempted Identities for restrictions as well. If an Identity is currently exempted from a Percentage Transfer Restriction
but not passed into this call then it will be removed

**`Note`**

 the result is the total amount of restrictions after the procedure has run

#### Overrides

[TransferRestrictionBase](../TransferRestrictionBase/TransferRestrictionBase.md).[setRestrictions](../TransferRestrictionBase/TransferRestrictionBase.md#setrestrictions)

#### Defined in

[api/entities/Asset/TransferRestrictions/Percentage.ts:41](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d2/src/api/entities/Asset/TransferRestrictions/Percentage.ts#L41)
