# Interface: AddSecondaryAccountsParams

> Defined in: [src/api/procedures/types.ts:755](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L755)

# Interface: AddSecondaryAccountsParams

Defined in: [src/api/procedures/types.ts:755](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L755)

## Properties

### accounts

> **accounts**: [`AccountWithSignature`](AccountWithSignature.mdx)[]

Defined in: [src/api/procedures/types.ts:764](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L764)

List of accounts to be added as secondary accounts along with their off chain authorization signatures

***

### expiresAt

> **expiresAt**: `Date`

Defined in: [src/api/procedures/types.ts:759](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L759)

Expiry date until which all the off chain authorizations received from each account is valid
