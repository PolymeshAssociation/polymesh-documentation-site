# Variable: ISSUANCE\_TX\_TAGS

> > `const` **ISSUANCE\_TX\_TAGS**: \[[`Issue`](../../enumerations/AssetTx.mdx#issue), [`CreateNftCollection`](../../enumerations/NftTx.mdx#createnftcollection), [`IssueNft`](../../enumerations/NftTx.mdx#issuenft)\]

# Variable: ISSUANCE\_TX\_TAGS

> `const` **ISSUANCE\_TX\_TAGS**: \[[`Issue`](../../enumerations/AssetTx.mdx#issue), [`CreateNftCollection`](../../enumerations/NftTx.mdx#createnftcollection), [`IssueNft`](../../enumerations/NftTx.mdx#issuenft)\]

Defined in: [src/types/txGroupConstants.ts:446](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/types/txGroupConstants.ts#L446)

Transaction tags for Issuance operations
Contains fungible asset and NFT issuance operations.

Values:
- TxTags.asset.Issue
- TxTags.nft.CreateNftCollection
- TxTags.nft.IssueNft

## Note

`TxTags.nft.CreateNftCollection` is also a member of `ASSET_REGISTRATION_TX_TAGS`. The
  extrinsic takes two paths on chain: creating a collection for a **new** Asset is a Secondary
  Key operation (`ensure_origin_call_permissions`), while creating one under an **existing**
  Asset is Agent checked (`ExternalAgents::ensure_agent_asset_perms`). `TxGroup.AssetRegistration`
  is not agent grantable, so it covers only the first path - this group covers the second
