# Interface: TransferRestrictionStatValues

> Defined in: [src/api/entities/Asset/types.ts:411](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Asset/types.ts#L411)

# Interface: TransferRestrictionStatValues

Defined in: [src/api/entities/Asset/types.ts:411](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Asset/types.ts#L411)

Asset Stat along with its current value

## Properties

### claim?

> `optional` **claim?**: `object`

Defined in: [src/api/entities/Asset/types.ts:417](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Asset/types.ts#L417)

The claim of the stat

Name
Type
Defined in

`claimType`

[`TrustedFor`](../../../types/type-aliases/TrustedFor.mdx)

[src/api/entities/Asset/types.ts:419](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Asset/types.ts#L419)

`issuer`

[`Identity`](../../../Identity/classes/Identity.mdx)

[src/api/entities/Asset/types.ts:418](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Asset/types.ts#L418)

`value?`

[`ClaimValue`](../type-aliases/ClaimValue.mdx) \| [`JurisdictionValue`](../type-aliases/JurisdictionValue.mdx)[]

[src/api/entities/Asset/types.ts:420](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Asset/types.ts#L420)

#### Note

for scoped stats, this is the claim of the stat

#### Note

for count stats, this is undefined

***

### type

> **type**: [`StatType`](../../../types/enumerations/StatType.mdx)

Defined in: [src/api/entities/Asset/types.ts:426](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Asset/types.ts#L426)

The type of the stat

***

### value

> **value**: `BigNumber`

Defined in: [src/api/entities/Asset/types.ts:432](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Asset/types.ts#L432)

The total value of of the Asset Stat

#### Note

for scoped stats, this is the total value of all claims

#### Note

for count stats, this is the value of the stat
