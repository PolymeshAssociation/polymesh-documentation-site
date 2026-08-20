# ~~Variable: CDD\_REGISTRATION\_TX\_TAGS~~

> > `const` **CDD\_REGISTRATION\_TX\_TAGS**: \[[`CddRegisterDid`](../../enumerations/IdentityTx.mdx#cddregisterdid), [`CddRegisterDidWithCdd`](../../enumerations/IdentityTx.mdx#cddregisterdidwithcdd)\]

# ~~Variable: CDD\_REGISTRATION\_TX\_TAGS~~

> `const` **CDD\_REGISTRATION\_TX\_TAGS**: \[[`CddRegisterDid`](../../enumerations/IdentityTx.mdx#cddregisterdid), [`CddRegisterDidWithCdd`](../../enumerations/IdentityTx.mdx#cddregisterdidwithcdd)\]

Defined in: [src/types/txGroupConstants.ts:160](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/types/txGroupConstants.ts#L160)

Transaction tags for CDD Registration operations
Contains the deprecated DID registration extrinsics.

Values:
- TxTags.identity.CddRegisterDid
- TxTags.identity.CddRegisterDidWithCdd

## Deprecated

these extrinsics no longer attach a `CustomerDueDiligence` claim as of chain v8.
  Use [DID\_REGISTRATION\_TX\_TAGS](DID_REGISTRATION_TX_TAGS.mdx) instead
