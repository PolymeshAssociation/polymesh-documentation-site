# Variable: SETTLEMENT\_MANAGEMENT\_TX\_TAGS

> > `const` **SETTLEMENT\_MANAGEMENT\_TX\_TAGS**: \[[`PreApproveAsset`](../../enumerations/AssetTx.mdx#preapproveasset), [`RemoveAssetPreApproval`](../../enumerations/AssetTx.mdx#removeassetpreapproval), [`Claim`](../../enumerations/CapitalDistributionTx.mdx#claim), [`AddAndAffirmInstruction`](../../enumerations/SettlementTx.mdx#addandaffirminstruction), [`AddAndAffirmInstructionWithMemo`](../../enumerations/SettlementTx.mdx#addandaffirminstructionwithmemo), [`AddInstruction`](../../enumerations/SettlementTx.mdx#addinstruction), [`AddInstructionWithMemo`](../../enumerations/SettlementTx.mdx#addinstructionwithmemo), [`AffirmInstruction`](../../enumerations/SettlementTx.mdx#affirminstruction)\]

# Variable: SETTLEMENT\_MANAGEMENT\_TX\_TAGS

> `const` **SETTLEMENT\_MANAGEMENT\_TX\_TAGS**: \[[`PreApproveAsset`](../../enumerations/AssetTx.mdx#preapproveasset), [`RemoveAssetPreApproval`](../../enumerations/AssetTx.mdx#removeassetpreapproval), [`Claim`](../../enumerations/CapitalDistributionTx.mdx#claim), [`AddAndAffirmInstruction`](../../enumerations/SettlementTx.mdx#addandaffirminstruction), [`AddAndAffirmInstructionWithMemo`](../../enumerations/SettlementTx.mdx#addandaffirminstructionwithmemo), [`AddInstruction`](../../enumerations/SettlementTx.mdx#addinstruction), [`AddInstructionWithMemo`](../../enumerations/SettlementTx.mdx#addinstructionwithmemo), [`AffirmInstruction`](../../enumerations/SettlementTx.mdx#affirminstruction)\]

Defined in: [src/types/txGroupConstants.ts:331](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/types/txGroupConstants.ts#L331)

Transaction tags for Settlement Management operations
Contains comprehensive settlement instruction, venue management, asset pre-approval, and investment operations.

Values:
- TxTags.asset.PreApproveAsset
- TxTags.asset.RemoveAssetPreApproval
- TxTags.capitalDistribution.Claim
- TxTags.settlement.AddAndAffirmInstruction
- TxTags.settlement.AddAndAffirmInstructionWithMemo
- TxTags.settlement.AddInstruction
- TxTags.settlement.AddInstructionWithMemo
- TxTags.settlement.AffirmInstruction
- TxTags.settlement.AffirmWithReceipts
- TxTags.settlement.CreateVenue
- TxTags.settlement.ExecuteManualInstruction
- TxTags.settlement.RejectInstruction
- TxTags.settlement.UpdateVenueDetails
- TxTags.settlement.UpdateVenueSigners
- TxTags.settlement.UpdateVenueType
- TxTags.sto.Invest
