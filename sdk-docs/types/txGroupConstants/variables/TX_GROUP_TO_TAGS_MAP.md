# Variable: TX\_GROUP\_TO\_TAGS\_MAP

> > `const` **TX\_GROUP\_TO\_TAGS\_MAP**: `Record`\<[`TxGroup`](../../../api/procedures/types/enumerations/TxGroup.mdx), [`TxTag`](../../type-aliases/TxTag.mdx)[]\>

# Variable: TX\_GROUP\_TO\_TAGS\_MAP

> `const` **TX\_GROUP\_TO\_TAGS\_MAP**: `Record`\<[`TxGroup`](../../../api/procedures/types/enumerations/TxGroup.mdx), [`TxTag`](../../type-aliases/TxTag.mdx)[]\>

Defined in: [src/types/txGroupConstants.ts:546](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/types/txGroupConstants.ts#L546)

Mapping of transaction groups to their corresponding transaction tags
Used by txGroupToTxTags function for efficient lookups
Groups are ordered alphabetically for maintainability
