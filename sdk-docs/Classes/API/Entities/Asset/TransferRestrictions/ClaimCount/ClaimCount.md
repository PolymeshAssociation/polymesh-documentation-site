[api/entities/Asset/TransferRestrictions/ClaimCount](../../../../../../Modules/API/Entities/Asset/TransferRestrictions/ClaimCount.md).ClaimCount

Handles all Claim Count Transfer Restriction related functionality

## Hierarchy

- [`TransferRestrictionBase`](../TransferRestrictionBase/TransferRestrictionBase.md)<[`ClaimCount`](../../../../../../Enums/Types/TransferRestrictionType.md#claimcount)\>

  ↳ **`ClaimCount`**

## Properties

### addRestriction

• **addRestriction**: [`ProcedureMethod`](../../../../../../Interfaces/Types/ProcedureMethod.md)<`Omit`<[`AddClaimCountTransferRestrictionParams`](../../../../../../Modules/API/Procedures/Types.md#addclaimcounttransferrestrictionparams), ``"type"``\>, `BigNumber`, `BigNumber`\>

Add a ClaimCount Transfer Restriction to this Asset. This limits to total number of individual
investors that may hold the Asset scoped by some Claim. This can limit the number of holders that
are non accredited, or ensure all holders are of a certain nationality

**`Note`**

the result is the total amount of restrictions after the procedure has run

**`Throws`**

if the appropriate count statistic (matching ClaimType and issuer) is not enabled for the Asset. [enableStat](ClaimCount.md#enablestat) should be called with appropriate arguments before this method

#### Overrides

[TransferRestrictionBase](../TransferRestrictionBase/TransferRestrictionBase.md).[addRestriction](../TransferRestrictionBase/TransferRestrictionBase.md#addrestriction)

#### Defined in

[api/entities/Asset/TransferRestrictions/ClaimCount.ts:31](https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/api/entities/Asset/TransferRestrictions/ClaimCount.ts#L31)

___

### disableStat

• **disableStat**: [`ProcedureMethod`](../../../../../../Interfaces/Types/ProcedureMethod.md)<`Omit`<[`RemoveScopedCountParams`](../../../../../../Modules/API/Procedures/Types.md#removescopedcountparams), ``"type"``\>, `void`, `void`\>

Disables a claim count statistic for the Asset. Since statistics introduce slight overhead to each transaction
involving the Asset, disabling unused stats will reduce gas fees for investors

**`Throws`**

if the stat is being used by a restriction or is not set

#### Overrides

[TransferRestrictionBase](../TransferRestrictionBase/TransferRestrictionBase.md).[disableStat](../TransferRestrictionBase/TransferRestrictionBase.md#disablestat)

#### Defined in

[api/entities/Asset/TransferRestrictions/ClaimCount.ts:77](https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/api/entities/Asset/TransferRestrictions/ClaimCount.ts#L77)

___

### enableStat

• **enableStat**: [`ProcedureMethod`](../../../../../../Interfaces/Types/ProcedureMethod.md)<`Omit`<[`AddClaimCountStatParams`](../../../../../../Modules/API/Procedures/Types.md#addclaimcountstatparams), ``"type"``\>, `void`, `void`\>

Enables an investor count statistic for the Asset to be scoped by a claim, which is required before creating restrictions

The counter is only updated automatically with each transfer of tokens after the stat has been enabled.
As such the initial values for the stat should be passed in.
For `Affiliate` and `Accredited` scoped stats the both the number of investors who have the Claim and who do not have the claim
should be given. For `Jurisdiction` scoped stats the amount of holders for each CountryCode need to be given.

**`Note`**

Currently there is a potential race condition if passing in counts values when the Asset is being traded.
It is recommended to call this method during the initial configuration of the Asset, before people are trading it.
Otherwise the Asset should be frozen, or the stat checked after being set to ensure the correct value is used. Future
versions of the chain may expose a new extrinsic to avoid this issue

#### Overrides

[TransferRestrictionBase](../TransferRestrictionBase/TransferRestrictionBase.md).[enableStat](../TransferRestrictionBase/TransferRestrictionBase.md#enablestat)

#### Defined in

[api/entities/Asset/TransferRestrictions/ClaimCount.ts:69](https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/api/entities/Asset/TransferRestrictions/ClaimCount.ts#L69)

___

### get

• **get**: () => `Promise`<[`ActiveTransferRestrictions`](../../../../../../Interfaces/Types/ActiveTransferRestrictions.md)<[`ClaimCountTransferRestriction`](../../../../../../Interfaces/Types/ClaimCountTransferRestriction.md)\>\>

#### Type declaration

▸ (): `Promise`<[`ActiveTransferRestrictions`](../../../../../../Interfaces/Types/ActiveTransferRestrictions.md)<[`ClaimCountTransferRestriction`](../../../../../../Interfaces/Types/ClaimCountTransferRestriction.md)\>\>

Retrieve all active Claim Count Transfer Restrictions

**`Note`**

there is a maximum number of restrictions allowed across all types.
  The `availableSlots` property of the result represents how many more restrictions can be added
  before reaching that limit

##### Returns

`Promise`<[`ActiveTransferRestrictions`](../../../../../../Interfaces/Types/ActiveTransferRestrictions.md)<[`ClaimCountTransferRestriction`](../../../../../../Interfaces/Types/ClaimCountTransferRestriction.md)\>\>

#### Overrides

[TransferRestrictionBase](../TransferRestrictionBase/TransferRestrictionBase.md).[get](../TransferRestrictionBase/TransferRestrictionBase.md#get)

#### Defined in

[api/entities/Asset/TransferRestrictions/ClaimCount.ts:86](https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/api/entities/Asset/TransferRestrictions/ClaimCount.ts#L86)

___

### removeRestrictions

• **removeRestrictions**: [`NoArgsProcedureMethod`](../../../../../../Interfaces/Types/NoArgsProcedureMethod.md)<`BigNumber`, `BigNumber`\>

Removes all Claim Count Transfer Restrictions from this Asset

**`Note`**

the result is the total amount of restrictions after the procedure has run

#### Overrides

[TransferRestrictionBase](../TransferRestrictionBase/TransferRestrictionBase.md).[removeRestrictions](../TransferRestrictionBase/TransferRestrictionBase.md#removerestrictions)

#### Defined in

[api/entities/Asset/TransferRestrictions/ClaimCount.ts:54](https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/api/entities/Asset/TransferRestrictions/ClaimCount.ts#L54)

___

### setRestrictions

• **setRestrictions**: [`ProcedureMethod`](../../../../../../Interfaces/Types/ProcedureMethod.md)<`Omit`<[`SetClaimCountTransferRestrictionsParams`](../../../../../../Interfaces/API/Procedures/Types/SetClaimCountTransferRestrictionsParams.md), ``"type"``\>, `BigNumber`, `BigNumber`\>

Sets all Claim Count Transfer Restrictions on this Asset

**`Note`**

this method sets exempted Identities for restrictions as well. If an Identity is currently exempted from a Claim Count Transfer Restriction
but not passed into this call then it will be removed

**`Note`**

the result is the total amount of restrictions after the procedure has run

#### Overrides

[TransferRestrictionBase](../TransferRestrictionBase/TransferRestrictionBase.md).[setRestrictions](../TransferRestrictionBase/TransferRestrictionBase.md#setrestrictions)

#### Defined in

[api/entities/Asset/TransferRestrictions/ClaimCount.ts:44](https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/api/entities/Asset/TransferRestrictions/ClaimCount.ts#L44)
