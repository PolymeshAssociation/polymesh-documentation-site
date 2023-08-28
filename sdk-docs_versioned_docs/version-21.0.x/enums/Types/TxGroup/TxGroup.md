---
id: "TxGroup"
title: "Enumeration: TxGroup"
sidebar_label: "TxGroup"
---

[types](../../../modules/Types/Types.md).TxGroup

Transaction Groups (for permissions purposes)

## Enumeration Members

### AdvancedAssetManagement

• **AdvancedAssetManagement** = ``"AdvancedAssetManagement"``

- TxTags.asset.Freeze
- TxTags.asset.Unfreeze
- TxTags.identity.AddAuthorization
- TxTags.identity.RemoveAuthorization

#### Defined in

[types/index.ts:884](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d2/src/types/index.ts#L884)

___

### AssetManagement

• **AssetManagement** = ``"AssetManagement"``

- TxTags.asset.MakeDivisible
- TxTags.asset.RenameAsset
- TxTags.asset.SetFundingRound
- TxTags.asset.AddDocuments
- TxTags.asset.RemoveDocuments

#### Defined in

[types/index.ts:877](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d2/src/types/index.ts#L877)

___

### ClaimsManagement

• **ClaimsManagement** = ``"ClaimsManagement"``

- TxTags.identity.AddClaim
- TxTags.identity.RevokeClaim

#### Defined in

[types/index.ts:907](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d2/src/types/index.ts#L907)

___

### ComplianceRequirementsManagement

• **ComplianceRequirementsManagement** = ``"ComplianceRequirementsManagement"``

- TxTags.complianceManager.AddComplianceRequirement
- TxTags.complianceManager.RemoveComplianceRequirement
- TxTags.complianceManager.PauseAssetCompliance
- TxTags.complianceManager.ResumeAssetCompliance
- TxTags.complianceManager.ResetAssetCompliance

#### Defined in

[types/index.ts:915](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d2/src/types/index.ts#L915)

___

### CorporateActionsManagement

• **CorporateActionsManagement** = ``"CorporateActionsManagement"``

- TxTags.checkpoint.CreateSchedule,
- TxTags.checkpoint.RemoveSchedule,
- TxTags.checkpoint.CreateCheckpoint,
- TxTags.corporateAction.InitiateCorporateAction,
- TxTags.capitalDistribution.Distribute,
- TxTags.capitalDistribution.Claim,
- TxTags.identity.AddInvestorUniquenessClaim,

#### Defined in

[types/index.ts:925](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d2/src/types/index.ts#L925)

___

### Distribution

• **Distribution** = ``"Distribution"``

- TxTags.identity.AddInvestorUniquenessClaim
- TxTags.settlement.CreateVenue
- TxTags.settlement.AddInstruction
- TxTags.settlement.AddInstructionWithMemo
- TxTags.settlement.AddAndAffirmInstruction
- TxTags.settlement.AddAndAffirmInstructionWithMemo

#### Defined in

[types/index.ts:893](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d2/src/types/index.ts#L893)

___

### Issuance

• **Issuance** = ``"Issuance"``

- TxTags.asset.Issue

#### Defined in

[types/index.ts:897](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d2/src/types/index.ts#L897)

___

### PortfolioManagement

• **PortfolioManagement** = ``"PortfolioManagement"``

- TxTags.identity.AddInvestorUniquenessClaim
- TxTags.portfolio.MovePortfolioFunds
- TxTags.settlement.AddInstruction
- TxTags.settlement.AddInstructionWithMemo
- TxTags.settlement.AddAndAffirmInstruction
- TxTags.settlement.AddAndAffirmInstructionWithMemo
- TxTags.settlement.AffirmInstruction
- TxTags.settlement.RejectInstruction
- TxTags.settlement.CreateVenue

#### Defined in

[types/index.ts:869](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d2/src/types/index.ts#L869)

___

### StoManagement

• **StoManagement** = ``"StoManagement"``

- TxTags.sto.CreateFundraiser,
- TxTags.sto.FreezeFundraiser,
- TxTags.sto.Invest,
- TxTags.sto.ModifyFundraiserWindow,
- TxTags.sto.Stop,
- TxTags.sto.UnfreezeFundraiser,
- TxTags.identity.AddInvestorUniquenessClaim,
- TxTags.asset.Issue,
- TxTags.settlement.CreateVenue

#### Defined in

[types/index.ts:937](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d2/src/types/index.ts#L937)

___

### TrustedClaimIssuersManagement

• **TrustedClaimIssuersManagement** = ``"TrustedClaimIssuersManagement"``

- TxTags.complianceManager.AddDefaultTrustedClaimIssuer
- TxTags.complianceManager.RemoveDefaultTrustedClaimIssuer

#### Defined in

[types/index.ts:902](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d2/src/types/index.ts#L902)
