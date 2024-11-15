---
id: "ClaimPercentage"
title: "Class: ClaimPercentage"
sidebar_label: "ClaimPercentage"
---

[api/entities/Asset/Fungible/TransferRestrictions/ClaimPercentage](../../../../../../../modules/API/Entities/Asset/Fungible/TransferRestrictions/ClaimPercentage/ClaimPercentage.md).ClaimPercentage

Handles all Claim Percentage Transfer Restriction related functionality

## Hierarchy

- [`TransferRestrictionBase`](../TransferRestrictionBase/TransferRestrictionBase.md)\<[`ClaimPercentage`](../../../../../../../enums/API/Procedures/Types/TransferRestrictionType/TransferRestrictionType.md#claimpercentage)\>

  ↳ **`ClaimPercentage`**

## Properties

### addRestriction

• **addRestriction**: [`ProcedureMethod`](../../../../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md)\<`Omit`\<[`AddClaimPercentageTransferRestrictionParams`](../../../../../../../modules/API/Procedures/Types/Types.md#addclaimpercentagetransferrestrictionparams), ``"type"``\>, `BigNumber`, `BigNumber`\>

Add a Percentage Transfer Restriction to this Asset. This can be used to limit the total amount of supply
investors who share a ClaimType may hold. For example a restriction can be made so Canadian investors must hold
at least 50% of the supply.

**`Throws`**

if the appropriately scoped Balance statistic (by ClaimType and issuer) is not enabled for this Asset. [enableStat](ClaimPercentage.md#enablestat) with appropriate arguments should be called before this method

#### Overrides

[TransferRestrictionBase](../TransferRestrictionBase/TransferRestrictionBase.md).[addRestriction](../TransferRestrictionBase/TransferRestrictionBase.md#addrestriction)

#### Defined in

[api/entities/Asset/Fungible/TransferRestrictions/ClaimPercentage.ts:32](https://github.com/PolymeshAssociation/polymesh-sdk/blob/3cc570ade/src/api/entities/Asset/Fungible/TransferRestrictions/ClaimPercentage.ts#L32)

___

### disableStat

• **disableStat**: [`ProcedureMethod`](../../../../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md)\<`Omit`\<[`RemoveScopedBalanceParams`](../../../../../../../modules/API/Procedures/Types/Types.md#removescopedbalanceparams), ``"type"``\>, `void`, `void`\>

Disables an investor balance statistic for the Asset. Since statistics introduce slight overhead to each transaction
involving the Asset, disabling unused stats will reduce gas fees for investors

**`Throws`**

if the stat is being used by a restriction or is not set

#### Overrides

[TransferRestrictionBase](../TransferRestrictionBase/TransferRestrictionBase.md).[disableStat](../TransferRestrictionBase/TransferRestrictionBase.md#disablestat)

#### Defined in

[api/entities/Asset/Fungible/TransferRestrictions/ClaimPercentage.ts:69](https://github.com/PolymeshAssociation/polymesh-sdk/blob/3cc570ade/src/api/entities/Asset/Fungible/TransferRestrictions/ClaimPercentage.ts#L69)

___

### enableStat

• **enableStat**: [`ProcedureMethod`](../../../../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md)\<`Omit`\<[`AddClaimPercentageStatParams`](../../../../../../../modules/API/Procedures/Types/Types.md#addclaimpercentagestatparams), ``"type"``\>, `void`, `void`\>

Enables investor balance statistic for the Asset, which is required before creating restrictions
that limit the total ownership the Asset's supply

#### Overrides

[TransferRestrictionBase](../TransferRestrictionBase/TransferRestrictionBase.md).[enableStat](../TransferRestrictionBase/TransferRestrictionBase.md#enablestat)

#### Defined in

[api/entities/Asset/Fungible/TransferRestrictions/ClaimPercentage.ts:61](https://github.com/PolymeshAssociation/polymesh-sdk/blob/3cc570ade/src/api/entities/Asset/Fungible/TransferRestrictions/ClaimPercentage.ts#L61)

___

### get

• **get**: () => `Promise`\<[`ActiveTransferRestrictions`](../../../../../../../interfaces/API/Entities/Types/ActiveTransferRestrictions/ActiveTransferRestrictions.md)\<[`ClaimPercentageTransferRestriction`](../../../../../../../interfaces/API/Entities/Types/ClaimPercentageTransferRestriction/ClaimPercentageTransferRestriction.md)\>\>

#### Type declaration

▸ (): `Promise`\<[`ActiveTransferRestrictions`](../../../../../../../interfaces/API/Entities/Types/ActiveTransferRestrictions/ActiveTransferRestrictions.md)\<[`ClaimPercentageTransferRestriction`](../../../../../../../interfaces/API/Entities/Types/ClaimPercentageTransferRestriction/ClaimPercentageTransferRestriction.md)\>\>

Retrieve all active Claim Percentage Transfer Restrictions

##### Returns

`Promise`\<[`ActiveTransferRestrictions`](../../../../../../../interfaces/API/Entities/Types/ActiveTransferRestrictions/ActiveTransferRestrictions.md)\<[`ClaimPercentageTransferRestriction`](../../../../../../../interfaces/API/Entities/Types/ClaimPercentageTransferRestriction/ClaimPercentageTransferRestriction.md)\>\>

**`Note`**

there is a maximum number of restrictions allowed across all types.
  The `availableSlots` property of the result represents how many more restrictions can be added
  before reaching that limit

#### Overrides

[TransferRestrictionBase](../TransferRestrictionBase/TransferRestrictionBase.md).[get](../TransferRestrictionBase/TransferRestrictionBase.md#get)

#### Defined in

[api/entities/Asset/Fungible/TransferRestrictions/ClaimPercentage.ts:78](https://github.com/PolymeshAssociation/polymesh-sdk/blob/3cc570ade/src/api/entities/Asset/Fungible/TransferRestrictions/ClaimPercentage.ts#L78)

___

### getStat

• **getStat**: () => `Promise`\<[`ActiveStats`](../../../../../../../modules/API/Entities/Types/Types.md#activestats)\>

#### Type declaration

▸ (): `Promise`\<[`ActiveStats`](../../../../../../../modules/API/Entities/Types/Types.md#activestats)\>

Retrieve current Claim Percentage Transfer Restriction investor balance statistic for the Asset

##### Returns

`Promise`\<[`ActiveStats`](../../../../../../../modules/API/Entities/Types/Types.md#activestats)\>

#### Overrides

[TransferRestrictionBase](../TransferRestrictionBase/TransferRestrictionBase.md).[getStat](../TransferRestrictionBase/TransferRestrictionBase.md#getstat)

#### Defined in

[api/entities/Asset/Fungible/TransferRestrictions/ClaimPercentage.ts:84](https://github.com/PolymeshAssociation/polymesh-sdk/blob/3cc570ade/src/api/entities/Asset/Fungible/TransferRestrictions/ClaimPercentage.ts#L84)

___

### removeRestrictions

• **removeRestrictions**: [`NoArgsProcedureMethod`](../../../../../../../interfaces/API/Procedures/Types/NoArgsProcedureMethod/NoArgsProcedureMethod.md)\<`BigNumber`, `BigNumber`\>

Removes all Claim Percentage Transfer Restrictions from this Asset

**`Note`**

the result is the total amount of restrictions after the procedure has run

#### Overrides

[TransferRestrictionBase](../TransferRestrictionBase/TransferRestrictionBase.md).[removeRestrictions](../TransferRestrictionBase/TransferRestrictionBase.md#removerestrictions)

#### Defined in

[api/entities/Asset/Fungible/TransferRestrictions/ClaimPercentage.ts:55](https://github.com/PolymeshAssociation/polymesh-sdk/blob/3cc570ade/src/api/entities/Asset/Fungible/TransferRestrictions/ClaimPercentage.ts#L55)

___

### setRestrictions

• **setRestrictions**: [`ProcedureMethod`](../../../../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md)\<`Omit`\<[`SetClaimPercentageTransferRestrictionsParams`](../../../../../../../interfaces/API/Procedures/Types/SetClaimPercentageTransferRestrictionsParams/SetClaimPercentageTransferRestrictionsParams.md), ``"type"``\>, `BigNumber`, `BigNumber`\>

Sets all Claim Percentage Transfer Restrictions on this Asset

**`Note`**

this method sets exempted Identities for restrictions as well. If an Identity is currently exempted from a Claim Percentage Transfer Restriction
but not passed into this call then it will be removed

**`Note`**

the result is the total amount of restrictions after the procedure has run

#### Overrides

[TransferRestrictionBase](../TransferRestrictionBase/TransferRestrictionBase.md).[setRestrictions](../TransferRestrictionBase/TransferRestrictionBase.md#setrestrictions)

#### Defined in

[api/entities/Asset/Fungible/TransferRestrictions/ClaimPercentage.ts:45](https://github.com/PolymeshAssociation/polymesh-sdk/blob/3cc570ade/src/api/entities/Asset/Fungible/TransferRestrictions/ClaimPercentage.ts#L45)
