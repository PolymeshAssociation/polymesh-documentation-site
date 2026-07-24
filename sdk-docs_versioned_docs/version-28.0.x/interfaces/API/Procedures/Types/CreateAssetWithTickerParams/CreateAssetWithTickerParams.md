---
id: "CreateAssetWithTickerParams"
title: "Interface: CreateAssetWithTickerParams"
sidebar_label: "CreateAssetWithTickerParams"
---

[api/procedures/types](../../../../../modules/API/Procedures/Types/Types.md).CreateAssetWithTickerParams

## Hierarchy

- [`CreateAssetParams`](../CreateAssetParams/CreateAssetParams.md)

  ↳ **`CreateAssetWithTickerParams`**

## Properties

### assetType

• **assetType**: `string` \| `BigNumber`

Type of security that the Asset represents (e.g., Equity, Debt, Commodity). Common values are included in the
  [KnownAssetType](../../../../../enums/API/Entities/Asset/Types/KnownAssetType/KnownAssetType.md) enum, but custom values can be used as well. Custom values must be registered on-chain the first time
  they're used, requiring an additional transaction. They aren't tied to a specific Asset.
  If using a custom type, it can be provided as a string (representing name) or a BigNumber (representing the custom type ID).

#### Inherited from

[CreateAssetParams](../CreateAssetParams/CreateAssetParams.md).[assetType](../CreateAssetParams/CreateAssetParams.md#assettype)

#### Defined in

[api/procedures/types.ts:665](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/procedures/types.ts#L665)

___

### documents

• `Optional` **documents**: [`AssetDocument`](../../../Entities/Asset/Types/AssetDocument/AssetDocument.md)[]

#### Inherited from

[CreateAssetParams](../CreateAssetParams/CreateAssetParams.md).[documents](../CreateAssetParams/CreateAssetParams.md#documents)

#### Defined in

[api/procedures/types.ts:674](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/procedures/types.ts#L674)

___

### fundingRound

• `Optional` **fundingRound**: `string`

(Optional) funding round in which the Asset currently is (e.g., Series A, Series B).

#### Inherited from

[CreateAssetParams](../CreateAssetParams/CreateAssetParams.md).[fundingRound](../CreateAssetParams/CreateAssetParams.md#fundinground)

#### Defined in

[api/procedures/types.ts:673](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/procedures/types.ts#L673)

___

### initialStatistics

• `Optional` **initialStatistics**: [`InputStatType`](../../../../../modules/API/Entities/Types/Types.md#inputstattype)[]

(Optional) type of statistics that should be enabled for the Asset.

Enabling statistics allows for TransferRestrictions to be made. For example, the SEC requires registration for a company that
has either more than 2000 investors or more than 500 non-accredited investors. To prevent crossing this limit, two restrictions are
needed: a `Count` of 2000, and a `ScopedCount` of non-accredited with a maximum of 500. [source](https://www.sec.gov/info/smallbus/secg/jobs-act-section-12g-small-business-compliance-guide.htm)

These restrictions require a `Count` and `ScopedCount` statistic to be created. Although they can be created after the Asset is made, it is recommended to create statistics
before the Asset is circulated. Count statistics made after Asset creation need their initial value set, so it is simpler to create them before investors hold the Asset.
If you need to create a stat for an Asset after creation, you can use the [TransferRestrictions.setStats](../../../../../classes/API/Entities/Asset/Fungible/TransferRestrictions/TransferRestrictions.md#setstats) method in the [TransferRestrictions](../../../../../classes/API/Entities/Asset/Fungible/TransferRestrictions/TransferRestrictions.md) namespace.

#### Inherited from

[CreateAssetParams](../CreateAssetParams/CreateAssetParams.md).[initialStatistics](../CreateAssetParams/CreateAssetParams.md#initialstatistics)

#### Defined in

[api/procedures/types.ts:687](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/procedures/types.ts#L687)

___

### initialSupply

• `Optional` **initialSupply**: `BigNumber`

Amount of Asset tokens to be minted on creation (optional; by default, no tokens are minted).

#### Inherited from

[CreateAssetParams](../CreateAssetParams/CreateAssetParams.md).[initialSupply](../CreateAssetParams/CreateAssetParams.md#initialsupply)

#### Defined in

[api/procedures/types.ts:650](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/procedures/types.ts#L650)

___

### isDivisible

• **isDivisible**: `boolean`

Whether a single Asset token can be divided into decimal parts.

#### Inherited from

[CreateAssetParams](../CreateAssetParams/CreateAssetParams.md).[isDivisible](../CreateAssetParams/CreateAssetParams.md#isdivisible)

#### Defined in

[api/procedures/types.ts:658](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/procedures/types.ts#L658)

___

### name

• **name**: `string`

#### Inherited from

[CreateAssetParams](../CreateAssetParams/CreateAssetParams.md).[name](../CreateAssetParams/CreateAssetParams.md#name)

#### Defined in

[api/procedures/types.ts:646](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/procedures/types.ts#L646)

___

### portfolioId

• `Optional` **portfolioId**: `BigNumber`

Portfolio to which the Asset tokens will be issued on creation (optional; defaults to the default portfolio).

#### Inherited from

[CreateAssetParams](../CreateAssetParams/CreateAssetParams.md).[portfolioId](../CreateAssetParams/CreateAssetParams.md#portfolioid)

#### Defined in

[api/procedures/types.ts:654](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/procedures/types.ts#L654)

___

### securityIdentifiers

• `Optional` **securityIdentifiers**: [`SecurityIdentifier`](../../../Entities/Asset/Types/SecurityIdentifier/SecurityIdentifier.md)[]

Array of domestic or international alphanumeric security identifiers for the Asset (e.g., ISIN, CUSIP, FIGI).

#### Inherited from

[CreateAssetParams](../CreateAssetParams/CreateAssetParams.md).[securityIdentifiers](../CreateAssetParams/CreateAssetParams.md#securityidentifiers)

#### Defined in

[api/procedures/types.ts:669](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/procedures/types.ts#L669)

___

### ticker

• `Optional` **ticker**: `string`

(optional) ticker to be linked with the Asset

**`Note`**

from 7.x chain, ticker has been made optional. For 6.x chain, it is still mandatory.

#### Defined in

[api/procedures/types.ts:707](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/procedures/types.ts#L707)
