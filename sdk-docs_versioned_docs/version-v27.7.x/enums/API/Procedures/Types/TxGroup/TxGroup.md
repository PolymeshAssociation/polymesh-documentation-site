---
id: "TxGroup"
title: "Enumeration: TxGroup"
sidebar_label: "TxGroup"
---

[api/procedures/types](../../../../../modules/API/Procedures/Types/Types.md).TxGroup

Transaction Groups (for permissions purposes)

## Enumeration Members

### AdvancedAssetManagement

• **AdvancedAssetManagement** = ``"AdvancedAssetManagement"``

- TxTags.asset.Freeze
- TxTags.asset.Unfreeze
- TxTags.identity.AddAuthorization
- TxTags.identity.RemoveAuthorization

#### Defined in

[api/procedures/types.ts:349](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9e72221/src/api/procedures/types.ts#L349)

___

### AssetManagement

• **AssetManagement** = ``"AssetManagement"``

- TxTags.asset.MakeDivisible
- TxTags.asset.RenameAsset
- TxTags.asset.SetFundingRound
- TxTags.asset.AddDocuments
- TxTags.asset.RemoveDocuments

#### Defined in

[api/procedures/types.ts:342](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9e72221/src/api/procedures/types.ts#L342)

___

### ClaimsManagement

• **ClaimsManagement** = ``"ClaimsManagement"``

- TxTags.identity.AddClaim
- TxTags.identity.RevokeClaim

#### Defined in

[api/procedures/types.ts:372](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9e72221/src/api/procedures/types.ts#L372)

___

### ComplianceRequirementsManagement

• **ComplianceRequirementsManagement** = ``"ComplianceRequirementsManagement"``

- TxTags.complianceManager.AddComplianceRequirement
- TxTags.complianceManager.RemoveComplianceRequirement
- TxTags.complianceManager.PauseAssetCompliance
- TxTags.complianceManager.ResumeAssetCompliance
- TxTags.complianceManager.ResetAssetCompliance

#### Defined in

[api/procedures/types.ts:380](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9e72221/src/api/procedures/types.ts#L380)

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

[api/procedures/types.ts:390](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9e72221/src/api/procedures/types.ts#L390)

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

[api/procedures/types.ts:358](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9e72221/src/api/procedures/types.ts#L358)

___

### Issuance

• **Issuance** = ``"Issuance"``

- TxTags.asset.Issue

#### Defined in

[api/procedures/types.ts:362](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9e72221/src/api/procedures/types.ts#L362)

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

[api/procedures/types.ts:334](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9e72221/src/api/procedures/types.ts#L334)

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

[api/procedures/types.ts:402](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9e72221/src/api/procedures/types.ts#L402)

___

### TrustedClaimIssuersManagement

• **TrustedClaimIssuersManagement** = ``"TrustedClaimIssuersManagement"``

- TxTags.complianceManager.AddDefaultTrustedClaimIssuer
- TxTags.complianceManager.RemoveDefaultTrustedClaimIssuer

#### Defined in

[api/procedures/types.ts:367](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9e72221/src/api/procedures/types.ts#L367)
