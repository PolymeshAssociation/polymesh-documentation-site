# Interface: RotatePrimaryKeyParams

> Defined in: [src/api/procedures/types.ts:1022](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L1022)

# Interface: RotatePrimaryKeyParams

Defined in: [src/api/procedures/types.ts:1022](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L1022)

## Properties

### expiry?

> `optional` **expiry?**: `Date`

Defined in: [src/api/procedures/types.ts:1031](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L1031)

(optional) when the generated authorization should expire

***

### targetAccount

> **targetAccount**: `string` \| [`Account`](../../../entities/Account/classes/Account.mdx)

Defined in: [src/api/procedures/types.ts:1026](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L1026)

The Account that should function as the primary key of the newly created Identity. Can be ss58 encoded address or an instance of Account
