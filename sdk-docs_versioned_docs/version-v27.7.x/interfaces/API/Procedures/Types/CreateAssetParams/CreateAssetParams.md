---
id: "CreateAssetParams"
title: "Interface: CreateAssetParams"
sidebar_label: "CreateAssetParams"
---

[api/procedures/types](../../../../../modules/API/Procedures/Types/Types.md).CreateAssetParams

## Hierarchy

- **`CreateAssetParams`**

  ↳ [`CreateAssetWithTickerParams`](../CreateAssetWithTickerParams/CreateAssetWithTickerParams.md)

## Properties

### assetType

• **assetType**: `string` \| `BigNumber`

type of security that the Asset represents (e.g. Equity, Debt, Commodity). Common values are included in the
  [KnownAssetType](../../../../../enums/API/Entities/Asset/Types/KnownAssetType/KnownAssetType.md) enum, but custom values can be used as well. Custom values must be registered on-chain the first time
  they're used, requiring an additional transaction. They aren't tied to a specific Asset
  if using a custom type, it can be provided as a string (representing name) or a BigNumber (representing the custom type ID)

#### Defined in

[api/procedures/types.ts:708](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9e72221/src/api/procedures/types.ts#L708)

___

### documents

• `Optional` **documents**: [`AssetDocument`](../../../Entities/Asset/Types/AssetDocument/AssetDocument.md)[]

#### Defined in

[api/procedures/types.ts:717](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9e72221/src/api/procedures/types.ts#L717)

___

### fundingRound

• `Optional` **fundingRound**: `string`

(optional) funding round in which the Asset currently is (e.g. Series A, Series B)

#### Defined in

[api/procedures/types.ts:716](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9e72221/src/api/procedures/types.ts#L716)

___

### initialStatistics

• `Optional` **initialStatistics**: [`InputStatType`](../../../../../modules/API/Entities/Types/Types.md#inputstattype)[]

(optional) type of statistics that should be enabled for the Asset

Enabling statistics allows for TransferRestrictions to be made. For example the SEC requires registration for a company that
has either more than 2000 investors, or more than 500 non accredited investors. To prevent crossing this limit two restrictions are
needed, a `Count` of 2000, and a `ScopedCount` of non accredited with a maximum of 500. [source](https://www.sec.gov/info/smallbus/secg/jobs-act-section-12g-small-business-compliance-guide.htm)

These restrictions require a `Count` and `ScopedCount` statistic to be created. Although they an be created after the Asset is made, it is recommended to create statistics
before the Asset is circulated. Count statistics made after Asset creation need their initial value set, so it is simpler to create them before investors hold the Asset.
If you do need to create a stat for an Asset after creation, you can use the [enableStat](../../../../../classes/API/Entities/Asset/Fungible/TransferRestrictions/TransferRestrictionBase/TransferRestrictionBase.md#enablestat) method in
the appropriate namespace

#### Defined in

[api/procedures/types.ts:731](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9e72221/src/api/procedures/types.ts#L731)

___

### initialSupply

• `Optional` **initialSupply**: `BigNumber`

amount of Asset tokens that will be minted on creation (optional, default doesn't mint)

#### Defined in

[api/procedures/types.ts:693](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9e72221/src/api/procedures/types.ts#L693)

___

### isDivisible

• **isDivisible**: `boolean`

whether a single Asset token can be divided into decimal parts

#### Defined in

[api/procedures/types.ts:701](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9e72221/src/api/procedures/types.ts#L701)

___

### name

• **name**: `string`

#### Defined in

[api/procedures/types.ts:689](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9e72221/src/api/procedures/types.ts#L689)

___

### portfolioId

• `Optional` **portfolioId**: `BigNumber`

portfolio to which the Asset tokens will be issued on creation (optional, default is the default portfolio)

#### Defined in

[api/procedures/types.ts:697](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9e72221/src/api/procedures/types.ts#L697)

___

### securityIdentifiers

• `Optional` **securityIdentifiers**: [`SecurityIdentifier`](../../../Entities/Asset/Types/SecurityIdentifier/SecurityIdentifier.md)[]

array of domestic or international alphanumeric security identifiers for the Asset (e.g. ISIN, CUSIP, FIGI)

#### Defined in

[api/procedures/types.ts:712](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9e72221/src/api/procedures/types.ts#L712)
