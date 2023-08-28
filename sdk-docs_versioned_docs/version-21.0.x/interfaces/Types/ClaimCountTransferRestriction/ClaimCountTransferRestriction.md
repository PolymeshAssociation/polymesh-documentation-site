---
id: "ClaimCountTransferRestriction"
title: "Interface: ClaimCountTransferRestriction"
sidebar_label: "ClaimCountTransferRestriction"
---

[types](../../../modules/Types/Types.md).ClaimCountTransferRestriction

## Hierarchy

- `TransferRestrictionBase`

  ↳ **`ClaimCountTransferRestriction`**

## Properties

### claim

• **claim**: [`InputStatClaim`](../../../modules/Types/Types.md#inputstatclaim)

The type of investors this restriction applies to. e.g. non-accredited

#### Defined in

[types/index.ts:1324](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d2/src/types/index.ts#L1324)

___

### exemptedIds

• `Optional` **exemptedIds**: `string`[]

array of Scope/Identity IDs that are exempted from the Restriction

**`Note`**

 if the Asset requires investor uniqueness, Scope IDs are used. Otherwise, we use Identity IDs. More on Scope IDs and investor uniqueness
  [here](https://developers.polymesh.network/introduction/identity#polymesh-unique-identity-system-puis) and
  [here](https://developers.polymesh.network/polymesh-docs/primitives/confidential-identity)

#### Inherited from

TransferRestrictionBase.exemptedIds

#### Defined in

[types/index.ts:1307](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d2/src/types/index.ts#L1307)

___

### issuer

• **issuer**: [`Identity`](../../../classes/API/Entities/Identity/Identity.md)

#### Defined in

[types/index.ts:1334](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d2/src/types/index.ts#L1334)

___

### max

• `Optional` **max**: `BigNumber`

The maximum amount of investors that must meet the Claim criteria

#### Defined in

[types/index.ts:1332](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d2/src/types/index.ts#L1332)

___

### min

• **min**: `BigNumber`

The minimum amount of investors the must meet the Claim criteria

#### Defined in

[types/index.ts:1328](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d2/src/types/index.ts#L1328)
