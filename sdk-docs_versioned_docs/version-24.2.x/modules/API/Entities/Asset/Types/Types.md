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

- [AgentWithGroup](../../../../../interfaces/API/Entities/Asset/Types/AgentWithGroup/AgentWithGroup.md)
- [AssetDetails](../../../../../interfaces/API/Entities/Asset/Types/AssetDetails/AssetDetails.md)
- [AssetDocument](../../../../../interfaces/API/Entities/Asset/Types/AssetDocument/AssetDocument.md)
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
- [TransferRestrictionResult](../../../../../interfaces/API/Entities/Asset/Types/TransferRestrictionResult/TransferRestrictionResult.md)
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

[api/entities/Asset/types.ts:27](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fedc4714f/src/api/entities/Asset/types.ts#L27)

___

### CollectionKey

Ƭ **CollectionKey**: [`MetadataKeyId`](Types.md#metadatakeyid) & [`MetadataDetails`](../../../../../interfaces/API/Entities/MetadataEntry/Types/MetadataDetails/MetadataDetails.md)

A metadata entry for which each NFT in the collection must have an entry for

**`Note`**

each NFT **must** have an entry for each metadata value, the entry **should** comply with the relevant spec

#### Defined in

[api/entities/Asset/types.ts:242](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fedc4714f/src/api/entities/Asset/types.ts#L242)

___

### MetadataKeyId

Ƭ **MetadataKeyId**: \{ `id`: `BigNumber` ; `type`: [`Global`](../../../../../enums/API/Entities/MetadataEntry/Types/MetadataType/MetadataType.md#global)  } \| \{ `id`: `BigNumber` ; `ticker`: `string` ; `type`: [`Local`](../../../../../enums/API/Entities/MetadataEntry/Types/MetadataType/MetadataType.md#local)  }

The data needed to uniquely identify a metadata specification

#### Defined in

[api/entities/Asset/types.ts:204](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fedc4714f/src/api/entities/Asset/types.ts#L204)
