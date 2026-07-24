# Interface: TransferRestrictionStatValues

> Defined in: [src/api/entities/Asset/types.ts:464](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Asset/types.ts#L464)

# Interface: TransferRestrictionStatValues

Defined in: [src/api/entities/Asset/types.ts:464](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Asset/types.ts#L464)

Asset Stat along with its current value

## Properties

### claim?

> `optional` **claim?**: `object`

Defined in: [src/api/entities/Asset/types.ts:470](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Asset/types.ts#L470)

The claim of the stat

Name
Type
Defined in

`claimType`

[`TrustedFor`](../../../types/type-aliases/TrustedFor.mdx)

[src/api/entities/Asset/types.ts:472](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Asset/types.ts#L472)

`issuer`

[`Identity`](../../../Identity/classes/Identity.mdx)

[src/api/entities/Asset/types.ts:471](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Asset/types.ts#L471)

`value?`

[`ClaimValue`](../type-aliases/ClaimValue.mdx) \| [`JurisdictionValue`](../type-aliases/JurisdictionValue.mdx)[]

[src/api/entities/Asset/types.ts:473](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Asset/types.ts#L473)

#### Note

for scoped stats, this is the claim of the stat

#### Note

for count stats, this is undefined

***

### type

> **type**: [`StatType`](../../../types/enumerations/StatType.mdx)

Defined in: [src/api/entities/Asset/types.ts:479](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Asset/types.ts#L479)

The type of the stat

***

### value

> **value**: `BigNumber`

Defined in: [src/api/entities/Asset/types.ts:485](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Asset/types.ts#L485)

The total value of of the Asset Stat

#### Note

for scoped stats, this is the total value of all claims

#### Note

for count stats, this is the value of the stat
