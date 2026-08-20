# Variable: SETTLEMENT\_MANAGEMENT\_TX\_TAGS

> > `const` **SETTLEMENT\_MANAGEMENT\_TX\_TAGS**: \[[`Approve`](../../enumerations/AssetTx.mdx#approve), [`PreApproveAsset`](../../enumerations/AssetTx.mdx#preapproveasset), [`ReceiverAffirmAssetTransfer`](../../enumerations/AssetTx.mdx#receiveraffirmassettransfer), [`RejectAssetTransfer`](../../enumerations/AssetTx.mdx#rejectassettransfer), [`RemoveAssetPreApproval`](../../enumerations/AssetTx.mdx#removeassetpreapproval), [`TransferAsset`](../../enumerations/AssetTx.mdx#transferasset), [`Claim`](../../enumerations/CapitalDistributionTx.mdx#claim), [`TransferNft`](../../enumerations/NftTx.mdx#transfernft), [`PreApprovePortfolio`](../../enumerations/PortfolioTx.mdx#preapproveportfolio), [`RemovePortfolioPreApproval`](../../enumerations/PortfolioTx.mdx#removeportfoliopreapproval)\]

# Variable: SETTLEMENT\_MANAGEMENT\_TX\_TAGS

> `const` **SETTLEMENT\_MANAGEMENT\_TX\_TAGS**: \[[`Approve`](../../enumerations/AssetTx.mdx#approve), [`PreApproveAsset`](../../enumerations/AssetTx.mdx#preapproveasset), [`ReceiverAffirmAssetTransfer`](../../enumerations/AssetTx.mdx#receiveraffirmassettransfer), [`RejectAssetTransfer`](../../enumerations/AssetTx.mdx#rejectassettransfer), [`RemoveAssetPreApproval`](../../enumerations/AssetTx.mdx#removeassetpreapproval), [`TransferAsset`](../../enumerations/AssetTx.mdx#transferasset), [`Claim`](../../enumerations/CapitalDistributionTx.mdx#claim), [`TransferNft`](../../enumerations/NftTx.mdx#transfernft), [`PreApprovePortfolio`](../../enumerations/PortfolioTx.mdx#preapproveportfolio), [`RemovePortfolioPreApproval`](../../enumerations/PortfolioTx.mdx#removeportfoliopreapproval)\]

Defined in: [src/types/txGroupConstants.ts:382](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/types/txGroupConstants.ts#L382)

Transaction tags for Settlement Management operations
Contains comprehensive settlement instruction, venue management, asset pre-approval, and investment operations.

Values:
- TxTags.asset.Approve
- TxTags.asset.PreApproveAsset
- TxTags.asset.ReceiverAffirmAssetTransfer
- TxTags.asset.RejectAssetTransfer
- TxTags.asset.RemoveAssetPreApproval
- TxTags.asset.TransferAsset
- TxTags.capitalDistribution.Claim
- TxTags.nft.TransferNft
- TxTags.portfolio.PreApprovePortfolio
- TxTags.portfolio.RemovePortfolioPreApproval
- TxTags.settlement.AddAndAffirmInstruction
- TxTags.settlement.AddAndAffirmWithMediators
- TxTags.settlement.AddInstruction
- TxTags.settlement.AddInstructionWithMediators
- TxTags.settlement.AffirmInstruction
- TxTags.settlement.AffirmInstructionWithCount
- TxTags.settlement.AffirmWithReceipts
- TxTags.settlement.AffirmWithReceiptsWithCount
- TxTags.settlement.CreateVenue
- TxTags.settlement.ExecuteManualInstruction
- TxTags.settlement.RejectInstruction
- TxTags.settlement.RejectInstructionWithCount
- TxTags.settlement.SetMandatoryReceiverAffirmation
- TxTags.settlement.TransferFunds
- TxTags.settlement.UpdateVenueDetails
- TxTags.settlement.UpdateVenueSigners
- TxTags.settlement.UpdateVenueType
- TxTags.sto.Invest
