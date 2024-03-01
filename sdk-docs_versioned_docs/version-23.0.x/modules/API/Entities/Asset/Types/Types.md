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

### Asset

Ƭ **Asset**: [`FungibleAsset`](../../../../../classes/API/Entities/Asset/Fungible/FungibleAsset.md) \| [`NftCollection`](../../../../../classes/API/Entities/Asset/NonFungible/NftCollection/NftCollection.md)

Represents a generic asset on chain. Common functionality (e.g. documents) can be interacted with directly. For type specific functionality (e.g. issue) the type can
be narrowed via `instanceof` operator, or by using a more specific getter

#### Defined in

[api/entities/Asset/types.ts:26](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2c78f6c34/src/api/entities/Asset/types.ts#L26)

___

### CollectionKey

Ƭ **CollectionKey**: [`MetadataKeyId`](Types.md#metadatakeyid) & [`MetadataDetails`](../../../../../interfaces/API/Entities/MetadataEntry/Types/MetadataDetails/MetadataDetails.md)

A metadata entry for which each NFT in the collection must have an entry for

**`Note`**

each NFT **must** have an entry for each metadata value, the entry **should** comply with the relevant spec

#### Defined in

[api/entities/Asset/types.ts:127](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2c78f6c34/src/api/entities/Asset/types.ts#L127)

___

### MetadataKeyId

Ƭ **MetadataKeyId**: \{ `id`: `BigNumber` ; `type`: [`Global`](../../../../../enums/API/Entities/MetadataEntry/Types/MetadataType/MetadataType.md#global)  } \| \{ `id`: `BigNumber` ; `ticker`: `string` ; `type`: [`Local`](../../../../../enums/API/Entities/MetadataEntry/Types/MetadataType/MetadataType.md#local)  }

The data needed to uniquely identify a metadata specification

#### Defined in

[api/entities/Asset/types.ts:100](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2c78f6c34/src/api/entities/Asset/types.ts#L100)
