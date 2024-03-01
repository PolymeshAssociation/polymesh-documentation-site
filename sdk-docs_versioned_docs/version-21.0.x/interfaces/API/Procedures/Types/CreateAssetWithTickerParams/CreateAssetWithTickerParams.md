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

• **assetType**: `string`

type of security that the Asset represents (e.g. Equity, Debt, Commodity). Common values are included in the
  [KnownAssetType](../../../../../enums/Types/KnownAssetType/KnownAssetType.md) enum, but custom values can be used as well. Custom values must be registered on-chain the first time
  they're used, requiring an additional transaction. They aren't tied to a specific Asset

#### Inherited from

[CreateAssetParams](../CreateAssetParams/CreateAssetParams.md).[assetType](../CreateAssetParams/CreateAssetParams.md#assettype)

#### Defined in

[api/procedures/types.ts:292](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/procedures/types.ts#L292)

___

### documents

• `Optional` **documents**: [`AssetDocument`](../../../../Types/AssetDocument/AssetDocument.md)[]

#### Inherited from

[CreateAssetParams](../CreateAssetParams/CreateAssetParams.md).[documents](../CreateAssetParams/CreateAssetParams.md#documents)

#### Defined in

[api/procedures/types.ts:301](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/procedures/types.ts#L301)

___

### fundingRound

• `Optional` **fundingRound**: `string`

(optional) funding round in which the Asset currently is (e.g. Series A, Series B)

#### Inherited from

[CreateAssetParams](../CreateAssetParams/CreateAssetParams.md).[fundingRound](../CreateAssetParams/CreateAssetParams.md#fundinground)

#### Defined in

[api/procedures/types.ts:300](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/procedures/types.ts#L300)

___

### initialStatistics

• `Optional` **initialStatistics**: [`InputStatType`](../../../../../modules/Types/Types.md#inputstattype)[]

(optional) type of statistics that should be enabled for the Asset

Enabling statistics allows for TransferRestrictions to be made. For example the SEC requires registration for a company that
has either more than 2000 investors, or more than 500 non accredited investors. To prevent crossing this limit two restrictions are
needed, a `Count` of 2000, and a `ScopedCount` of non accredited with a maximum of 500. [source](https://www.sec.gov/info/smallbus/secg/jobs-act-section-12g-small-business-compliance-guide.htm)

These restrictions require a `Count` and `ScopedCount` statistic to be created. Although they an be created after the Asset is made, it is recommended to create statistics
before the Asset is circulated. Count statistics made after Asset creation need their initial value set, so it is simpler to create them before investors hold the Asset.
If you do need to create a stat for an Asset after creation, you can use the [enableStat](../../../../../classes/API/Entities/Asset/TransferRestrictions/TransferRestrictionBase/TransferRestrictionBase.md#enablestat) method in
the appropriate namespace

#### Inherited from

[CreateAssetParams](../CreateAssetParams/CreateAssetParams.md).[initialStatistics](../CreateAssetParams/CreateAssetParams.md#initialstatistics)

#### Defined in

[api/procedures/types.ts:315](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/procedures/types.ts#L315)

___

### initialSupply

• `Optional` **initialSupply**: `BigNumber`

amount of Asset tokens that will be minted on creation (optional, default doesn't mint)

#### Inherited from

[CreateAssetParams](../CreateAssetParams/CreateAssetParams.md).[initialSupply](../CreateAssetParams/CreateAssetParams.md#initialsupply)

#### Defined in

[api/procedures/types.ts:282](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/procedures/types.ts#L282)

___

### isDivisible

• **isDivisible**: `boolean`

whether a single Asset token can be divided into decimal parts

#### Inherited from

[CreateAssetParams](../CreateAssetParams/CreateAssetParams.md).[isDivisible](../CreateAssetParams/CreateAssetParams.md#isdivisible)

#### Defined in

[api/procedures/types.ts:286](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/procedures/types.ts#L286)

___

### name

• **name**: `string`

#### Inherited from

[CreateAssetParams](../CreateAssetParams/CreateAssetParams.md).[name](../CreateAssetParams/CreateAssetParams.md#name)

#### Defined in

[api/procedures/types.ts:278](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/procedures/types.ts#L278)

___

### securityIdentifiers

• `Optional` **securityIdentifiers**: [`SecurityIdentifier`](../../../../Types/SecurityIdentifier/SecurityIdentifier.md)[]

array of domestic or international alphanumeric security identifiers for the Asset (e.g. ISIN, CUSIP, FIGI)

#### Inherited from

[CreateAssetParams](../CreateAssetParams/CreateAssetParams.md).[securityIdentifiers](../CreateAssetParams/CreateAssetParams.md#securityidentifiers)

#### Defined in

[api/procedures/types.ts:296](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/procedures/types.ts#L296)

___

### ticker

• **ticker**: `string`

#### Defined in

[api/procedures/types.ts:319](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/procedures/types.ts#L319)
