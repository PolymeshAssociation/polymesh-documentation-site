# Type Alias: MetadataValueDetails

> > **MetadataValueDetails** = `object` & \{ `lockStatus`: `Exclude`\<[`MetadataLockStatus`](../enumerations/MetadataLockStatus.mdx), [`LockedUntil`](../enumerations/MetadataLockStatus.mdx#lockeduntil)\>; \} \| \{ `lockedUntil`: `Date`; `lockStatus`: [`LockedUntil`](../enumerations/MetadataLockStatus.mdx#lockeduntil) \| `undefined`; \} \| \{ `lockStatus`: `undefined`; \}

# Type Alias: MetadataValueDetails

> **MetadataValueDetails** = `object` & \{ `lockStatus`: `Exclude`\<[`MetadataLockStatus`](../enumerations/MetadataLockStatus.mdx), [`LockedUntil`](../enumerations/MetadataLockStatus.mdx#lockeduntil)\>; \} \| \{ `lockedUntil`: `Date`; `lockStatus`: [`LockedUntil`](../enumerations/MetadataLockStatus.mdx#lockeduntil) \| `undefined`; \} \| \{ `lockStatus`: `undefined`; \}

Defined in: [src/api/entities/MetadataEntry/types.ts:27](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/MetadataEntry/types.ts#L27)

## Type Declaration

Name
Type
Description
Defined in

`expiry?`

`Date` \| `null`

Date at which the Metadata value expires, null if it never expires

[src/api/entities/MetadataEntry/types.ts:31](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/MetadataEntry/types.ts#L31)
