# Interface: InviteExternalAgentParams

> Defined in: [src/api/procedures/types.ts:1654](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L1654)

# Interface: InviteExternalAgentParams

Defined in: [src/api/procedures/types.ts:1654](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L1654)

## Properties

### expiry?

> `optional` **expiry?**: `Date`

Defined in: [src/api/procedures/types.ts:1671](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L1671)

date at which the authorization request for invitation expires (optional)

#### Note

if expiry date is not set, the invitation will never expire

#### Note

due to chain limitations, the expiry will be ignored if the passed `permissions` don't correspond to an existing Permission Group

***

### permissions

> **permissions**: [`CustomPermissionGroup`](../../../entities/CustomPermissionGroup/classes/CustomPermissionGroup.mdx) \| [`KnownPermissionGroup`](../../../entities/KnownPermissionGroup/classes/KnownPermissionGroup.mdx) \| \{ `transactions`: [`TransactionPermissions`](../../../entities/types/interfaces/TransactionPermissions.mdx) \| `null`; \} \| \{ `transactionGroups`: ([`AdvancedAssetManagement`](../enumerations/TxGroup.mdx#advancedassetmanagement) \| [`AssetManagement`](../enumerations/TxGroup.mdx#assetmanagement) \| [`AssetDocumentManagement`](../enumerations/TxGroup.mdx#assetdocumentmanagement) \| [`AssetMetadataManagement`](../enumerations/TxGroup.mdx#assetmetadatamanagement) \| [`CapitalDistribution`](../enumerations/TxGroup.mdx#capitaldistribution) \| [`CheckpointManagement`](../enumerations/TxGroup.mdx#checkpointmanagement) \| [`ComplianceManagement`](../enumerations/TxGroup.mdx#compliancemanagement) \| [`CorporateActionsManagement`](../enumerations/TxGroup.mdx#corporateactionsmanagement) \| [`CorporateBallotManagement`](../enumerations/TxGroup.mdx#corporateballotmanagement) \| [`ExternalAgentManagement`](../enumerations/TxGroup.mdx#externalagentmanagement) \| [`Issuance`](../enumerations/TxGroup.mdx#issuance) \| [`Redemption`](../enumerations/TxGroup.mdx#redemption) \| [`StoManagement`](../enumerations/TxGroup.mdx#stomanagement) \| [`TrustedClaimIssuersManagement`](../enumerations/TxGroup.mdx#trustedclaimissuersmanagement))[]; \}

Defined in: [src/api/procedures/types.ts:1656](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L1656)

***

### target

> **target**: `string` \| [`Identity`](../../../entities/Identity/classes/Identity.mdx)

Defined in: [src/api/procedures/types.ts:1655](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L1655)
