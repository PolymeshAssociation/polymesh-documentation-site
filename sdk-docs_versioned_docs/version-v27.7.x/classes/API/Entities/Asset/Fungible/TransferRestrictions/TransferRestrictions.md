---
id: "TransferRestrictions"
title: "Class: TransferRestrictions"
sidebar_label: "TransferRestrictions"
---

[api/entities/Asset/Fungible/TransferRestrictions](../../../../../../modules/API/Entities/Asset/Fungible/TransferRestrictions/TransferRestrictions.md).TransferRestrictions

Handles all Asset Transfer Restrictions related functionality

## Hierarchy

- `Namespace`\<[`FungibleAsset`](../FungibleAsset.md)\>

  ↳ **`TransferRestrictions`**

## Properties

### claimCount

• **claimCount**: [`ClaimCount`](ClaimCount/ClaimCount.md)

#### Defined in

[api/entities/Asset/Fungible/TransferRestrictions/index.ts:29](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9e72221/src/api/entities/Asset/Fungible/TransferRestrictions/index.ts#L29)

___

### claimPercentage

• **claimPercentage**: [`ClaimPercentage`](ClaimPercentage/ClaimPercentage.md)

#### Defined in

[api/entities/Asset/Fungible/TransferRestrictions/index.ts:30](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9e72221/src/api/entities/Asset/Fungible/TransferRestrictions/index.ts#L30)

___

### count

• **count**: [`Count`](Count/Count.md)

#### Defined in

[api/entities/Asset/Fungible/TransferRestrictions/index.ts:27](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9e72221/src/api/entities/Asset/Fungible/TransferRestrictions/index.ts#L27)

___

### percentage

• **percentage**: [`Percentage`](Percentage/Percentage.md)

#### Defined in

[api/entities/Asset/Fungible/TransferRestrictions/index.ts:28](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9e72221/src/api/entities/Asset/Fungible/TransferRestrictions/index.ts#L28)

## Methods

### getValues

▸ **getValues**(): `Promise`\<[`TransferRestrictionValues`](../../../../../../interfaces/API/Entities/Asset/Types/TransferRestrictionValues/TransferRestrictionValues.md)[]\>

Get the values of all active transfer restrictions for this Asset

#### Returns

`Promise`\<[`TransferRestrictionValues`](../../../../../../interfaces/API/Entities/Asset/Types/TransferRestrictionValues/TransferRestrictionValues.md)[]\>

an array of objects containing the values of all active transfer restrictions for this Asset

#### Defined in

[api/entities/Asset/Fungible/TransferRestrictions/index.ts:48](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9e72221/src/api/entities/Asset/Fungible/TransferRestrictions/index.ts#L48)
