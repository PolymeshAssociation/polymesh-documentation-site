# Type Alias: ClaimValue

> > **ClaimValue** = `object`

# Type Alias: ClaimValue

> **ClaimValue** = `object`

Defined in: [src/api/entities/Asset/types.ts:373](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Asset/types.ts#L373)

For all claim types except Jurisdiction - tracks holders with and without the claim

## Properties

Property
Type
Description
Defined in

 `withClaim`

`BigNumber`

The number of individual Asset holders that have the claim, or the total balance of tokens held by all holders with the claim

[src/api/entities/Asset/types.ts:377](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Asset/types.ts#L377)

 `withoutClaim`

`BigNumber`

The number of individual Asset holders that do not have the claim, or the total balance of tokens held by all holders without the claim

[src/api/entities/Asset/types.ts:382](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Asset/types.ts#L382)
