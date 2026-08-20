# Variable: ASSET\_REGISTRATION\_TX\_TAGS

> > `const` **ASSET\_REGISTRATION\_TX\_TAGS**: \[[`AcceptAssetOwnershipTransfer`](../../enumerations/AssetTx.mdx#acceptassetownershiptransfer), [`AcceptTickerTransfer`](../../enumerations/AssetTx.mdx#accepttickertransfer), [`CreateAsset`](../../enumerations/AssetTx.mdx#createasset), [`CreateAssetWithCustomType`](../../enumerations/AssetTx.mdx#createassetwithcustomtype), [`RegisterCustomAssetType`](../../enumerations/AssetTx.mdx#registercustomassettype), [`RegisterUniqueTicker`](../../enumerations/AssetTx.mdx#registeruniqueticker), [`CreateNftCollection`](../../enumerations/NftTx.mdx#createnftcollection)\]

# Variable: ASSET\_REGISTRATION\_TX\_TAGS

> `const` **ASSET\_REGISTRATION\_TX\_TAGS**: \[[`AcceptAssetOwnershipTransfer`](../../enumerations/AssetTx.mdx#acceptassetownershiptransfer), [`AcceptTickerTransfer`](../../enumerations/AssetTx.mdx#accepttickertransfer), [`CreateAsset`](../../enumerations/AssetTx.mdx#createasset), [`CreateAssetWithCustomType`](../../enumerations/AssetTx.mdx#createassetwithcustomtype), [`RegisterCustomAssetType`](../../enumerations/AssetTx.mdx#registercustomassettype), [`RegisterUniqueTicker`](../../enumerations/AssetTx.mdx#registeruniqueticker), [`CreateNftCollection`](../../enumerations/NftTx.mdx#createnftcollection)\]

Defined in: [src/types/txGroupConstants.ts:109](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/types/txGroupConstants.ts#L109)

Transaction tags for Asset Registration operations
Contains operations for registering assets, custom types, and NFT collections.

Values:
- TxTags.asset.AcceptAssetOwnershipTransfer
- TxTags.asset.AcceptTickerTransfer
- TxTags.asset.CreateAsset
- TxTags.asset.CreateAssetWithCustomType
- TxTags.asset.RegisterCustomAssetType
- TxTags.asset.RegisterUniqueTicker
- TxTags.nft.CreateNftCollection

## Note

`TxTags.nft.CreateNftCollection` is Agent checked when the collection is created under an
  existing Asset. This group is not agent grantable, so that path is covered by
  `ISSUANCE_TX_TAGS` instead
