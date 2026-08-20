# Interface: ClaimCountTransferRestriction

> Defined in: [src/api/entities/types.ts:522](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/types.ts#L522)

# Interface: ClaimCountTransferRestriction

Defined in: [src/api/entities/types.ts:522](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/types.ts#L522)

## Extends

- `TransferRestrictionBase`

## Properties

### claim

> **claim**: [`InputStatClaim`](../type-aliases/InputStatClaim.mdx)

Defined in: [src/api/entities/types.ts:526](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/types.ts#L526)

The type of investors this restriction applies to. e.g. non-accredited

***

### exemptedIds?

> `optional` **exemptedIds?**: `string`[]

Defined in: [src/api/entities/types.ts:509](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/types.ts#L509)

array of Identity IDs that are exempted from the Restriction

#### Inherited from

`TransferRestrictionBase.exemptedIds`

***

### issuer

> **issuer**: [`Identity`](../../Identity/classes/Identity.mdx)

Defined in: [src/api/entities/types.ts:536](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/types.ts#L536)

***

### max?

> `optional` **max?**: `BigNumber`

Defined in: [src/api/entities/types.ts:534](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/types.ts#L534)

The maximum amount of investors that must meet the Claim criteria

***

### min

> **min**: `BigNumber`

Defined in: [src/api/entities/types.ts:530](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/types.ts#L530)

The minimum amount of investors the must meet the Claim criteria
