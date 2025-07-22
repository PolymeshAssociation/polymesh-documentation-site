---
id: "TransferRestrictionStatValues"
title: "Interface: TransferRestrictionStatValues"
sidebar_label: "TransferRestrictionStatValues"
---

[api/entities/Asset/types](../../../../../../modules/API/Entities/Asset/Types/Types.md).TransferRestrictionStatValues

Asset Stat along with its current value

## Properties

### claim

• `Optional` **claim**: `Object`

The claim of the stat

**`Note`**

for scoped stats, this is the claim of the stat

**`Note`**

for count stats, this is undefined

#### Type declaration

| Name | Type |
| :------ | :------ |
| `claimType` | [`TrustedFor`](../../../../../../modules/API/Entities/Types/Types.md#trustedfor) |
| `issuer` | [`Identity`](../../../../../../classes/API/Entities/Identity/Identity.md) |
| `value?` | [`ClaimValue`](../../../../../../modules/API/Entities/Asset/Types/Types.md#claimvalue) \| [`JurisdictionValue`](../../../../../../modules/API/Entities/Asset/Types/Types.md#jurisdictionvalue)[] |

#### Defined in

[api/entities/Asset/types.ts:448](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/Asset/types.ts#L448)

___

### type

• **type**: [`StatType`](../../../../../../enums/API/Entities/Types/StatType/StatType.md)

The type of the stat

#### Defined in

[api/entities/Asset/types.ts:457](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/Asset/types.ts#L457)

___

### value

• **value**: `BigNumber`

The total value of of the Asset Stat

**`Note`**

for scoped stats, this is the total value of all claims

**`Note`**

for count stats, this is the value of the stat

#### Defined in

[api/entities/Asset/types.ts:463](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/Asset/types.ts#L463)
