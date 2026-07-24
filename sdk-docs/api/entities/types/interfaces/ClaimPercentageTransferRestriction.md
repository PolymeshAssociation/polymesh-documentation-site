# Interface: ClaimPercentageTransferRestriction

> Defined in: [src/api/entities/types.ts:554](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/types.ts#L554)

# Interface: ClaimPercentageTransferRestriction

Defined in: [src/api/entities/types.ts:554](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/types.ts#L554)

## Extends

- `TransferRestrictionBase`

## Properties

### claim

> **claim**: [`InputStatClaim`](../type-aliases/InputStatClaim.mdx)

Defined in: [src/api/entities/types.ts:558](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/types.ts#L558)

The type of investors this restriction applies to. e.g. Canadian investor

***

### exemptedIds?

> `optional` **exemptedIds?**: `string`[]

Defined in: [src/api/entities/types.ts:525](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/types.ts#L525)

array of Identity IDs that are exempted from the Restriction

#### Inherited from

`TransferRestrictionBase.exemptedIds`

***

### issuer

> **issuer**: [`Identity`](../../Identity/classes/Identity.mdx)

Defined in: [src/api/entities/types.ts:568](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/types.ts#L568)

***

### max

> **max**: `BigNumber`

Defined in: [src/api/entities/types.ts:566](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/types.ts#L566)

The maximum percentage of the total supply that investors meeting the Claim criteria must hold

***

### min

> **min**: `BigNumber`

Defined in: [src/api/entities/types.ts:562](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/types.ts#L562)

The minimum percentage of the total supply that investors meeting the Claim criteria must hold
