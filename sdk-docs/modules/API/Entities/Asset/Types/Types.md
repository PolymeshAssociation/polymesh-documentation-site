---
id: "Types"
title: "Module: Asset Types"
sidebar_label: "Types"
---

## Interfaces

- [AgentWithGroup](../../../../../interfaces/API/Entities/Asset/Types/AgentWithGroup/AgentWithGroup.md)
- [AssetDetails](../../../../../interfaces/API/Entities/Asset/Types/AssetDetails/AssetDetails.md)
- [HistoricAssetTransaction](../../../../../interfaces/API/Entities/Asset/Types/HistoricAssetTransaction/HistoricAssetTransaction.md)
- [IdentityBalance](../../../../../interfaces/API/Entities/Asset/Types/IdentityBalance/IdentityBalance.md)
- [NftMetadata](../../../../../interfaces/API/Entities/Asset/Types/NftMetadata/NftMetadata.md)
- [TransferBreakdown](../../../../../interfaces/API/Entities/Asset/Types/TransferBreakdown/TransferBreakdown.md)
- [TransferRestrictionResult](../../../../../interfaces/API/Entities/Asset/Types/TransferRestrictionResult/TransferRestrictionResult.md)
- [UniqueIdentifiers](../../../../../interfaces/API/Entities/Asset/Types/UniqueIdentifiers/UniqueIdentifiers.md)

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

### CollectionMetadata

Ƭ **CollectionMetadata**: [`MetadataKeyId`](Types.md#metadatakeyid) & [`MetadataDetails`](../../../../../interfaces/API/Entities/MetadataEntry/Types/MetadataDetails/MetadataDetails.md)

A metadata entry for which each NFT in the collection must have an entry for

**`Note`**

 each NFT **must** have an entry for each metadata value, the entry **should** comply with the relevant spec

#### Defined in

[api/entities/Asset/types.ts:120](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b6f9fb883/src/api/entities/Asset/types.ts#L120)

___

### MetadataKeyId

Ƭ **MetadataKeyId**: { `id`: `BigNumber` ; `type`: [`Global`](../../../../../enums/API/Entities/MetadataEntry/Types/MetadataType/MetadataType.md#global)  } \| { `id`: `BigNumber` ; `ticker`: `string` ; `type`: [`Local`](../../../../../enums/API/Entities/MetadataEntry/Types/MetadataType/MetadataType.md#local)  }

The data needed to uniquely identify a metadata specification

#### Defined in

[api/entities/Asset/types.ts:93](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b6f9fb883/src/api/entities/Asset/types.ts#L93)
