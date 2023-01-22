[api/procedures/types](../../../../Modules/API/Procedures/Types.md).CreateAssetWithTickerParams

## Hierarchy

- [`CreateAssetParams`](CreateAssetParams.md)

  ↳ **`CreateAssetWithTickerParams`**

## Properties

### assetType

• **assetType**: `string`

type of security that the Asset represents (e.g. Equity, Debt, Commodity). Common values are included in the
  [KnownAssetType](../../../../Enums/Types/KnownAssetType.md) enum, but custom values can be used as well. Custom values must be registered on-chain the first time
  they're used, requiring an additional transaction. They aren't tied to a specific Asset

#### Inherited from

[CreateAssetParams](CreateAssetParams.md).[assetType](CreateAssetParams.md#assettype)

#### Defined in

[api/procedures/types.ts:293](https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/api/procedures/types.ts#L293)

___

### documents

• `Optional` **documents**: [`AssetDocument`](../../../Types/AssetDocument.md)[]

#### Inherited from

[CreateAssetParams](CreateAssetParams.md).[documents](CreateAssetParams.md#documents)

#### Defined in

[api/procedures/types.ts:302](https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/api/procedures/types.ts#L302)

___

### fundingRound

• `Optional` **fundingRound**: `string`

(optional) funding round in which the Asset currently is (e.g. Series A, Series B)

#### Inherited from

[CreateAssetParams](CreateAssetParams.md).[fundingRound](CreateAssetParams.md#fundinground)

#### Defined in

[api/procedures/types.ts:301](https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/api/procedures/types.ts#L301)

___

### initialStatistics

• `Optional` **initialStatistics**: [`InputStatType`](../../../../Modules/Types/Types.md#inputstattype)[]

(optional) type of statistics that should be enabled for the Asset

Enabling statistics allows for TransferRestrictions to be made. For example the SEC requires registration for a company that
has either more than 2000 investors, or more than 500 non accredited investors. To prevent crossing this limit two restrictions are
needed, a `Count` of 2000, and a `ScopedCount` of non accredited with a maximum of 500. [source](https://www.sec.gov/info/smallbus/secg/jobs-act-section-12g-small-business-compliance-guide.htm)

These restrictions require a `Count` and `ScopedCount` statistic to be created. Although they an be created after the Asset is made, it is recommended to create statistics
before the Asset is circulated. Count statistics made after Asset creation need their initial value set, so it is simpler to create them before investors hold the Asset.
If you do need to create a stat for an Asset after creation, you can use the [enableStat](../../../../Classes/API/Entities/Asset/TransferRestrictions/TransferRestrictionBase/TransferRestrictionBase.md#enablestat) method in
the appropriate namespace

#### Inherited from

[CreateAssetParams](CreateAssetParams.md).[initialStatistics](CreateAssetParams.md#initialstatistics)

#### Defined in

[api/procedures/types.ts:321](https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/api/procedures/types.ts#L321)

___

### initialSupply

• `Optional` **initialSupply**: `BigNumber`

amount of Asset tokens that will be minted on creation (optional, default doesn't mint)

#### Inherited from

[CreateAssetParams](CreateAssetParams.md).[initialSupply](CreateAssetParams.md#initialsupply)

#### Defined in

[api/procedures/types.ts:283](https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/api/procedures/types.ts#L283)

___

### isDivisible

• **isDivisible**: `boolean`

whether a single Asset token can be divided into decimal parts

#### Inherited from

[CreateAssetParams](CreateAssetParams.md).[isDivisible](CreateAssetParams.md#isdivisible)

#### Defined in

[api/procedures/types.ts:287](https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/api/procedures/types.ts#L287)

___

### name

• **name**: `string`

#### Inherited from

[CreateAssetParams](CreateAssetParams.md).[name](CreateAssetParams.md#name)

#### Defined in

[api/procedures/types.ts:279](https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/api/procedures/types.ts#L279)

___

### requireInvestorUniqueness

• **requireInvestorUniqueness**: `boolean`

whether this asset requires investors to have a Investor Uniqueness Claim in order
  to hold it. More information about Investor Uniqueness and PUIS [here](https://developers.polymesh.live/introduction/identity#polymesh-unique-identity-system-puis)

#### Inherited from

[CreateAssetParams](CreateAssetParams.md).[requireInvestorUniqueness](CreateAssetParams.md#requireinvestoruniqueness)

#### Defined in

[api/procedures/types.ts:307](https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/api/procedures/types.ts#L307)

___

### securityIdentifiers

• `Optional` **securityIdentifiers**: [`SecurityIdentifier`](../../../Types/SecurityIdentifier.md)[]

array of domestic or international alphanumeric security identifiers for the Asset (e.g. ISIN, CUSIP, FIGI)

#### Inherited from

[CreateAssetParams](CreateAssetParams.md).[securityIdentifiers](CreateAssetParams.md#securityidentifiers)

#### Defined in

[api/procedures/types.ts:297](https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/api/procedures/types.ts#L297)

___

### ticker

• **ticker**: `string`

#### Defined in

[api/procedures/types.ts:325](https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/api/procedures/types.ts#L325)
