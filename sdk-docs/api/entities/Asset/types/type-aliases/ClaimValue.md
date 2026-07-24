# Type Alias: ClaimValue

> > **ClaimValue** = `object`

# Type Alias: ClaimValue

> **ClaimValue** = `object`

Defined in: [src/api/entities/Asset/types.ts:426](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Asset/types.ts#L426)

For all claim types except Jurisdiction - tracks holders with and without the claim

## Properties

Property
Type
Description
Defined in

 `withClaim`

`BigNumber`

The number of individual Asset holders that have the claim, or the total balance of tokens held by all holders with the claim

[src/api/entities/Asset/types.ts:430](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Asset/types.ts#L430)

 `withoutClaim`

`BigNumber`

The number of individual Asset holders that do not have the claim, or the total balance of tokens held by all holders without the claim

[src/api/entities/Asset/types.ts:435](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Asset/types.ts#L435)
