# Interface: CreateAssetParams

> Defined in: [src/api/procedures/types.ts:785](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/procedures/types.ts#L785)

# Interface: CreateAssetParams

Defined in: [src/api/procedures/types.ts:785](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/procedures/types.ts#L785)

## Extended by

- [`CreateAssetWithTickerParams`](CreateAssetWithTickerParams.mdx)

## Properties

### assetType

> **assetType**: `string` \| `BigNumber`

Defined in: [src/api/procedures/types.ts:805](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/procedures/types.ts#L805)

Type of security that the Asset represents (e.g., Equity, Debt, Commodity). Common values are included in the
  [KnownAssetType](../../../entities/Asset/types/enumerations/KnownAssetType.mdx) enum, but custom values can be used as well. Custom values must be registered on-chain the first time
  they're used, requiring an additional transaction. They aren't tied to a specific Asset.
  If using a custom type, it can be provided as a string (representing name) or a BigNumber (representing the custom type ID).

***

### documents?

> `optional` **documents?**: [`AssetDocument`](../../../entities/Asset/types/interfaces/AssetDocument.mdx)[]

Defined in: [src/api/procedures/types.ts:814](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/procedures/types.ts#L814)

***

### fundingRound?

> `optional` **fundingRound?**: `string`

Defined in: [src/api/procedures/types.ts:813](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/procedures/types.ts#L813)

(Optional) funding round in which the Asset currently is (e.g., Series A, Series B).

***

### initialStatistics?

> `optional` **initialStatistics?**: [`InputStatType`](../../../entities/types/type-aliases/InputStatType.mdx)[]

Defined in: [src/api/procedures/types.ts:827](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/procedures/types.ts#L827)

(Optional) type of statistics that should be enabled for the Asset.

Enabling statistics allows for TransferRestrictions to be made. For example, the SEC requires registration for a company that
has either more than 2000 investors or more than 500 non-accredited investors. To prevent crossing this limit, two restrictions are
needed: a `Count` of 2000, and a `ScopedCount` of non-accredited with a maximum of 500. [source](https://www.sec.gov/info/smallbus/secg/jobs-act-section-12g-small-business-compliance-guide.htm)

These restrictions require a `Count` and `ScopedCount` statistic to be created. Although they can be created after the Asset is made, it is recommended to create statistics
before the Asset is circulated. Count statistics made after Asset creation need their initial value set, so it is simpler to create them before investors hold the Asset.
If you need to create a stat for an Asset after creation, you can use the [TransferRestrictions.setStats](../../../entities/Asset/Fungible/TransferRestrictions/classes/TransferRestrictions.mdx#setstats) method in the [TransferRestrictions](../../../entities/Asset/Fungible/TransferRestrictions/classes/TransferRestrictions.mdx) namespace.

***

### initialSupply?

> `optional` **initialSupply?**: `BigNumber`

Defined in: [src/api/procedures/types.ts:790](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/procedures/types.ts#L790)

Amount of Asset tokens to be minted on creation (optional; by default, no tokens are minted).

***

### isDivisible

> **isDivisible**: `boolean`

Defined in: [src/api/procedures/types.ts:798](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/procedures/types.ts#L798)

Whether a single Asset token can be divided into decimal parts.

***

### name

> **name**: `string`

Defined in: [src/api/procedures/types.ts:786](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/procedures/types.ts#L786)

***

### portfolioId?

> `optional` **portfolioId?**: `BigNumber`

Defined in: [src/api/procedures/types.ts:794](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/procedures/types.ts#L794)

Portfolio to which the Asset tokens will be issued on creation (optional; defaults to the default portfolio).

***

### securityIdentifiers?

> `optional` **securityIdentifiers?**: [`SecurityIdentifier`](../../../entities/Asset/types/interfaces/SecurityIdentifier.mdx)[]

Defined in: [src/api/procedures/types.ts:809](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/procedures/types.ts#L809)

Array of domestic or international alphanumeric security identifiers for the Asset (e.g., ISIN, CUSIP, FIGI).
