---
id: "modules"
title: "Polymesh SDK"
sidebar_label: "SDK Module List"
sidebar_position: 0.5
---

## Modules

- API
  - Client
    - [AccountManagement](modules/API/Client/AccountManagement/AccountManagement.md)
    - [Assets](modules/API/Client/Assets/Assets.md)
    - [Claims](modules/API/Client/Claims/Claims.md)
    - [Identities](modules/API/Client/Identities/Identities.md)
    - [Network](modules/API/Client/Network/Network.md)
    - [Polymesh](modules/API/Client/Polymesh/Polymesh.md)
    - [Settlements](modules/API/Client/Settlements/Settlements.md)
    - [Staking](modules/API/Client/Staking/Staking.md)
    - [Types](modules/API/Client/Types/Types.md)
  - Entities
    - [Account](modules/API/Entities/Account/Account.md)
      - [MultiSig](modules/API/Entities/Account/MultiSig/MultiSig.md)
        - [Types](modules/API/Entities/Account/MultiSig/Types/Types.md)
      - [Staking](modules/API/Entities/Account/Staking/Staking.md)
      - [Helpers](modules/API/Entities/Account/Helpers/Helpers.md)
      - [Types](modules/API/Entities/Account/Types/Types.md)
    - [Asset](modules/API/Entities/Asset/Asset.md)
      - [Base](modules/API/Entities/Asset/Base/Base.md)
        - [BaseAsset](modules/API/Entities/Asset/Base/BaseAsset/BaseAsset.md)
        - [Compliance](modules/API/Entities/Asset/Base/Compliance/Compliance.md)
          - [Requirements](modules/API/Entities/Asset/Base/Compliance/Requirements/Requirements.md)
          - [TrustedClaimIssuers](modules/API/Entities/Asset/Base/Compliance/TrustedClaimIssuers/TrustedClaimIssuers.md)
        - [Documents](modules/API/Entities/Asset/Base/Documents/Documents.md)
        - [Metadata](modules/API/Entities/Asset/Base/Metadata/Metadata.md)
        - [Permissions](modules/API/Entities/Asset/Base/Permissions/Permissions.md)
        - [Settlements](modules/API/Entities/Asset/Base/Settlements/Settlements.md)
      - [Fungible](modules/API/Entities/Asset/Fungible/Fungible.md)
        - [AssetHolders](modules/API/Entities/Asset/Fungible/AssetHolders/AssetHolders.md)
        - [Checkpoints](modules/API/Entities/Asset/Fungible/Checkpoints/Checkpoints.md)
          - [Schedules](modules/API/Entities/Asset/Fungible/Checkpoints/Schedules/Schedules.md)
          - [Types](modules/API/Entities/Asset/Fungible/Checkpoints/Types/Types.md)
        - [CorporateActions](modules/API/Entities/Asset/Fungible/CorporateActions/CorporateActions.md)
          - [Ballots](modules/API/Entities/Asset/Fungible/CorporateActions/Ballots/Ballots.md)
          - [Distributions](modules/API/Entities/Asset/Fungible/CorporateActions/Distributions/Distributions.md)
          - [Types](modules/API/Entities/Asset/Fungible/CorporateActions/Types/Types.md)
        - [Issuance](modules/API/Entities/Asset/Fungible/Issuance/Issuance.md)
        - [Offerings](modules/API/Entities/Asset/Fungible/Offerings/Offerings.md)
        - [TransferRestrictions](modules/API/Entities/Asset/Fungible/TransferRestrictions/TransferRestrictions.md)
          - [ClaimCount](modules/API/Entities/Asset/Fungible/TransferRestrictions/ClaimCount/ClaimCount.md)
          - [ClaimPercentage](modules/API/Entities/Asset/Fungible/TransferRestrictions/ClaimPercentage/ClaimPercentage.md)
          - [Count](modules/API/Entities/Asset/Fungible/TransferRestrictions/Count/Count.md)
          - [Percentage](modules/API/Entities/Asset/Fungible/TransferRestrictions/Percentage/Percentage.md)
          - [TransferRestrictionBase](modules/API/Entities/Asset/Fungible/TransferRestrictions/TransferRestrictionBase/TransferRestrictionBase.md)
      - [NonFungible](modules/API/Entities/Asset/NonFungible/NonFungible.md)
        - [AssetHolders](modules/API/Entities/Asset/NonFungible/AssetHolders/AssetHolders.md)
        - [Nft](modules/API/Entities/Asset/NonFungible/Nft/Nft.md)
        - [NftCollection](modules/API/Entities/Asset/NonFungible/NftCollection/NftCollection.md)
      - [Types](modules/API/Entities/Asset/Types/Types.md)
    - [AuthorizationRequest](modules/API/Entities/AuthorizationRequest/AuthorizationRequest.md)
    - [Checkpoint](modules/API/Entities/Checkpoint/Checkpoint.md)
    - [CheckpointSchedule](modules/API/Entities/CheckpointSchedule/CheckpointSchedule.md)
      - [Types](modules/API/Entities/CheckpointSchedule/Types/Types.md)
    - [CorporateAction](modules/API/Entities/CorporateAction/CorporateAction.md)
    - [CorporateActionBase](modules/API/Entities/CorporateActionBase/CorporateActionBase.md)
      - [Types](modules/API/Entities/CorporateActionBase/Types/Types.md)
    - [CorporateBallot](modules/API/Entities/CorporateBallot/CorporateBallot.md)
      - [Types](modules/API/Entities/CorporateBallot/Types/Types.md)
    - [CustomPermissionGroup](modules/API/Entities/CustomPermissionGroup/CustomPermissionGroup.md)
    - [DefaultPortfolio](modules/API/Entities/DefaultPortfolio/DefaultPortfolio.md)
    - [DefaultTrustedClaimIssuer](modules/API/Entities/DefaultTrustedClaimIssuer/DefaultTrustedClaimIssuer.md)
    - [DividendDistribution](modules/API/Entities/DividendDistribution/DividendDistribution.md)
      - [Types](modules/API/Entities/DividendDistribution/Types/Types.md)
    - [Entity](modules/API/Entities/Entity/Entity.md)
    - [Identity](modules/API/Entities/Identity/Identity.md)
      - [AssetPermissions](modules/API/Entities/Identity/AssetPermissions/AssetPermissions.md)
      - [ChildIdentity](modules/API/Entities/Identity/ChildIdentity/ChildIdentity.md)
      - [IdentityAuthorizations](modules/API/Entities/Identity/IdentityAuthorizations/IdentityAuthorizations.md)
      - [Portfolios](modules/API/Entities/Identity/Portfolios/Portfolios.md)
    - [Instruction](modules/API/Entities/Instruction/Instruction.md)
      - [Types](modules/API/Entities/Instruction/Types/Types.md)
    - [KnownPermissionGroup](modules/API/Entities/KnownPermissionGroup/KnownPermissionGroup.md)
    - [MetadataEntry](modules/API/Entities/MetadataEntry/MetadataEntry.md)
      - [Types](modules/API/Entities/MetadataEntry/Types/Types.md)
    - [MultiSigProposal](modules/API/Entities/MultiSigProposal/MultiSigProposal.md)
      - [Types](modules/API/Entities/MultiSigProposal/Types/Types.md)
    - [NumberedPortfolio](modules/API/Entities/NumberedPortfolio/NumberedPortfolio.md)
    - [Offering](modules/API/Entities/Offering/Offering.md)
      - [Types](modules/API/Entities/Offering/Types/Types.md)
    - [PermissionGroup](modules/API/Entities/PermissionGroup/PermissionGroup.md)
    - [Portfolio](modules/API/Entities/Portfolio/Portfolio.md)
      - [Types](modules/API/Entities/Portfolio/Types/Types.md)
    - [Subsidies](modules/API/Entities/Subsidies/Subsidies.md)
    - [Subsidy](modules/API/Entities/Subsidy/Subsidy.md)
      - [Types](modules/API/Entities/Subsidy/Types/Types.md)
    - [TickerReservation](modules/API/Entities/TickerReservation/TickerReservation.md)
      - [Types](modules/API/Entities/TickerReservation/Types/Types.md)
    - [Venue](modules/API/Entities/Venue/Venue.md)
      - [Types](modules/API/Entities/Venue/Types/Types.md)
    - Common
      - Namespaces
        - [Authorizations](modules/API/Entities/Common/Namespaces/Authorizations/Authorizations.md)
    - [Types](modules/API/Entities/Types/Types.md)
  - Procedures
    - [Types](modules/API/Procedures/Types/Types.md)
- Base
  - [PolymeshError](modules/Base/PolymeshError/PolymeshError.md)
  - [PolymeshTransaction](modules/Base/PolymeshTransaction/PolymeshTransaction.md)
  - [PolymeshTransactionBase](modules/Base/PolymeshTransactionBase/PolymeshTransactionBase.md)
  - [PolymeshTransactionBatch](modules/Base/PolymeshTransactionBatch/PolymeshTransactionBatch.md)
  - [Types](modules/Base/Types/Types.md)
  - [Utils](modules/Base/Utils/Utils.md)
- Generated
  - [Types](modules/Generated/Types/Types.md)
- [Types](modules/Types/Types.md)
  - [Utils](modules/Types/Utils/Utils.md)
