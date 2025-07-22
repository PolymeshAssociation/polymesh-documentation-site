---
id: "Types"
title: "Module: Asset Types"
sidebar_label: "Types"
---

## Enumerations

- [KnownAssetType](../../../../../enums/API/Entities/Asset/Types/KnownAssetType/KnownAssetType.md)
- [KnownNftType](../../../../../enums/API/Entities/Asset/Types/KnownNftType/KnownNftType.md)
- [SecurityIdentifierType](../../../../../enums/API/Entities/Asset/Types/SecurityIdentifierType/SecurityIdentifierType.md)
- [TransferError](../../../../../enums/API/Entities/Asset/Types/TransferError/TransferError.md)
- [TransferStatus](../../../../../enums/API/Entities/Asset/Types/TransferStatus/TransferStatus.md)

## Interfaces

- [ActiveTransferRestrictions](../../../../../interfaces/API/Entities/Asset/Types/ActiveTransferRestrictions/ActiveTransferRestrictions.md)
- [AgentWithGroup](../../../../../interfaces/API/Entities/Asset/Types/AgentWithGroup/AgentWithGroup.md)
- [AssetDetails](../../../../../interfaces/API/Entities/Asset/Types/AssetDetails/AssetDetails.md)
- [AssetDocument](../../../../../interfaces/API/Entities/Asset/Types/AssetDocument/AssetDocument.md)
- [AssetStat](../../../../../interfaces/API/Entities/Asset/Types/AssetStat/AssetStat.md)
- [AssetWithGroup](../../../../../interfaces/API/Entities/Asset/Types/AssetWithGroup/AssetWithGroup.md)
- [BaseHistoricAssetTransaction](../../../../../interfaces/API/Entities/Asset/Types/BaseHistoricAssetTransaction/BaseHistoricAssetTransaction.md)
- [HeldNfts](../../../../../interfaces/API/Entities/Asset/Types/HeldNfts/HeldNfts.md)
- [HistoricAgentOperation](../../../../../interfaces/API/Entities/Asset/Types/HistoricAgentOperation/HistoricAgentOperation.md)
- [HistoricAssetTransaction](../../../../../interfaces/API/Entities/Asset/Types/HistoricAssetTransaction/HistoricAssetTransaction.md)
- [HistoricNftTransaction](../../../../../interfaces/API/Entities/Asset/Types/HistoricNftTransaction/HistoricNftTransaction.md)
- [IdentityBalance](../../../../../interfaces/API/Entities/Asset/Types/IdentityBalance/IdentityBalance.md)
- [IdentityHeldNfts](../../../../../interfaces/API/Entities/Asset/Types/IdentityHeldNfts/IdentityHeldNfts.md)
- [NftMetadata](../../../../../interfaces/API/Entities/Asset/Types/NftMetadata/NftMetadata.md)
- [SecurityIdentifier](../../../../../interfaces/API/Entities/Asset/Types/SecurityIdentifier/SecurityIdentifier.md)
- [TransferBreakdown](../../../../../interfaces/API/Entities/Asset/Types/TransferBreakdown/TransferBreakdown.md)
- [TransferExemptKey](../../../../../interfaces/API/Entities/Asset/Types/TransferExemptKey/TransferExemptKey.md)
- [TransferRestrictionExemption](../../../../../interfaces/API/Entities/Asset/Types/TransferRestrictionExemption/TransferRestrictionExemption.md)
- [TransferRestrictionResult](../../../../../interfaces/API/Entities/Asset/Types/TransferRestrictionResult/TransferRestrictionResult.md)
- [TransferRestrictionStatValues](../../../../../interfaces/API/Entities/Asset/Types/TransferRestrictionStatValues/TransferRestrictionStatValues.md)
- [UniqueIdentifiers](../../../../../interfaces/API/Entities/Asset/Types/UniqueIdentifiers/UniqueIdentifiers.md)
- [VenueFilteringDetails](../../../../../interfaces/API/Entities/Asset/Types/VenueFilteringDetails/VenueFilteringDetails.md)

## References

### CaCheckpointType

Re-exports [CaCheckpointType](../../../../../enums/API/Entities/Asset/Fungible/Checkpoints/Types/CaCheckpointType/CaCheckpointType.md)

___

### CorporateActionDefaultConfig

Re-exports [CorporateActionDefaultConfig](../../../../../interfaces/API/Entities/Asset/Fungible/CorporateActions/Types/CorporateActionDefaultConfig/CorporateActionDefaultConfig.md)

___

### InputCaCheckpoint

Re-exports [InputCaCheckpoint](../Fungible/Checkpoints/Types/Types.md#inputcacheckpoint)

## Type Aliases

### Asset

Ƭ **Asset**: [`FungibleAsset`](../../../../../classes/API/Entities/Asset/Fungible/FungibleAsset.md) \| [`NftCollection`](../../../../../classes/API/Entities/Asset/NonFungible/NftCollection/NftCollection.md)

Represents a generic asset on chain. Common functionality (e.g. documents) can be interacted with directly. For type specific functionality (e.g. issue) the type can
be narrowed via `instanceof` operator, or by using a more specific getter

#### Defined in

[api/entities/Asset/types.ts:32](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/Asset/types.ts#L32)

___

### ClaimStatValue

Ƭ **ClaimStatValue**\<`T`\>: `T` extends [`Jurisdiction`](../../../../../enums/API/Entities/Types/ClaimType/ClaimType.md#jurisdiction) ? [`JurisdictionValue`](Types.md#jurisdictionvalue)[] : [`ClaimValue`](Types.md#claimvalue)

Maps claim types to their corresponding statistical value types

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`TrustedFor`](../../Types/Types.md#trustedfor) |

#### Defined in

[api/entities/Asset/types.ts:435](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/Asset/types.ts#L435)

___

### ClaimValue

Ƭ **ClaimValue**: `Object`

For all claim types except Jurisdiction - tracks holders with and without the claim

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `withClaim` | `BigNumber` | The number of individual Asset holders that have the claim, or the total balance of tokens held by all holders with the claim |
| `withoutClaim` | `BigNumber` | The number of individual Asset holders that do not have the claim, or the total balance of tokens held by all holders without the claim |

#### Defined in

[api/entities/Asset/types.ts:404](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/Asset/types.ts#L404)

___

### CollectionKey

Ƭ **CollectionKey**: [`MetadataKeyId`](Types.md#metadatakeyid) & [`MetadataDetails`](../../../../../interfaces/API/Entities/MetadataEntry/Types/MetadataDetails/MetadataDetails.md)

A metadata entry for which each NFT in the collection must have an entry for

**`Note`**

each NFT **must** have an entry for each metadata value, the entry **should** comply with the relevant spec

#### Defined in

[api/entities/Asset/types.ts:248](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/Asset/types.ts#L248)

___

### JurisdictionValue

Ƭ **JurisdictionValue**: `Object`

For Jurisdiction claims - tracks holders by country code and those without jurisdiction

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `countryCode` | `CountryCode` \| ``null`` | The country code of the jurisdiction **`Note`** null if the jurisdiction is not specified (no jurisdiction claim) |
| `value` | `BigNumber` | The number of individual Asset holders with this jurisdiction (or without any jurisdiction if countryCode is null), or the total balance of tokens held by all such holders |

#### Defined in

[api/entities/Asset/types.ts:419](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/Asset/types.ts#L419)

___

### MetadataKeyId

Ƭ **MetadataKeyId**: \{ `id`: `BigNumber` ; `type`: [`Global`](../../../../../enums/API/Entities/MetadataEntry/Types/MetadataType/MetadataType.md#global)  } \| \{ `assetId`: `string` ; `id`: `BigNumber` ; `type`: [`Local`](../../../../../enums/API/Entities/MetadataEntry/Types/MetadataType/MetadataType.md#local)  }

The data needed to uniquely identify a metadata specification

#### Defined in

[api/entities/Asset/types.ts:210](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/Asset/types.ts#L210)
