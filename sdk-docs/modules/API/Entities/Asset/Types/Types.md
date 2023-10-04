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

### MetadataKeyId

Ƭ **MetadataKeyId**: { `id`: `BigNumber` ; `type`: [`Global`](../../../../../enums/API/Entities/MetadataEntry/Types/MetadataType/MetadataType.md#global)  } \| { `id`: `BigNumber` ; `ticker`: `string` ; `type`: [`Local`](../../../../../enums/API/Entities/MetadataEntry/Types/MetadataType/MetadataType.md#local)  }

#### Defined in

[api/entities/Asset/types.ts:89](https://github.com/PolymeshAssociation/polymesh-sdk/blob/de58d40fd/src/api/entities/Asset/types.ts#L89)
