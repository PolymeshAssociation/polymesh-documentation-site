# Interface: ModifyPrimaryIssuanceAgentParams

> Defined in: [src/api/procedures/types.ts:1385](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L1385)

# Interface: ModifyPrimaryIssuanceAgentParams

Defined in: [src/api/procedures/types.ts:1385](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L1385)

## Properties

### requestExpiry?

> `optional` **requestExpiry?**: `Date`

Defined in: [src/api/procedures/types.ts:1393](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L1393)

date at which the authorization request to modify the primary issuance agent expires (optional, never expires if a date is not provided)

***

### target

> **target**: `string` \| [`Identity`](../../../entities/Identity/classes/Identity.mdx)

Defined in: [src/api/procedures/types.ts:1389](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L1389)

Identity to be set as primary issuance agent
