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

[types/index.ts:1370](https://github.com/PolymeshAssociation/polymesh-sdk/blob/daafaa68f/src/types/index.ts#L1370)

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

[types/index.ts:1353](https://github.com/PolymeshAssociation/polymesh-sdk/blob/daafaa68f/src/types/index.ts#L1353)

___

### issuer

• **issuer**: [`Identity`](../../../classes/API/Entities/Identity/Identity.md)

#### Defined in

[types/index.ts:1380](https://github.com/PolymeshAssociation/polymesh-sdk/blob/daafaa68f/src/types/index.ts#L1380)

___

### max

• `Optional` **max**: `BigNumber`

The maximum amount of investors that must meet the Claim criteria

#### Defined in

[types/index.ts:1378](https://github.com/PolymeshAssociation/polymesh-sdk/blob/daafaa68f/src/types/index.ts#L1378)

___

### min

• **min**: `BigNumber`

The minimum amount of investors the must meet the Claim criteria

#### Defined in

[types/index.ts:1374](https://github.com/PolymeshAssociation/polymesh-sdk/blob/daafaa68f/src/types/index.ts#L1374)
