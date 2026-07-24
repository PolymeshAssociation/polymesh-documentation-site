# Interface: AttestPrimaryKeyRotationParams

> Defined in: [src/api/procedures/types.ts:1005](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L1005)

# Interface: AttestPrimaryKeyRotationParams

Defined in: [src/api/procedures/types.ts:1005](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L1005)

## Properties

### expiry?

> `optional` **expiry?**: `Date`

Defined in: [src/api/procedures/types.ts:1019](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L1019)

(optional) when the generated authorization should expire

***

### identity

> **identity**: `string` \| [`Identity`](../../../entities/Identity/classes/Identity.mdx)

Defined in: [src/api/procedures/types.ts:1014](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L1014)

Identity or the DID of the Identity that is to be rotated

***

### targetAccount

> **targetAccount**: `string` \| [`Account`](../../../entities/Account/classes/Account.mdx)

Defined in: [src/api/procedures/types.ts:1009](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L1009)

The Account that will be attested to become the primary key of the `identity`. Can be ss58 encoded address or an instance of Account
