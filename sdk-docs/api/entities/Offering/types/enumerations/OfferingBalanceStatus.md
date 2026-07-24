# Enumeration: OfferingBalanceStatus

> Defined in: [src/api/entities/Offering/types.ts:21](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Offering/types.ts#L21)

# Enumeration: OfferingBalanceStatus

Defined in: [src/api/entities/Offering/types.ts:21](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Offering/types.ts#L21)

## Enumeration Members

### Available

> **Available**: `"Available"`

Defined in: [src/api/entities/Offering/types.ts:25](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Offering/types.ts#L25)

There still are Asset tokens available for purchase

***

### Residual

> **Residual**: `"Residual"`

Defined in: [src/api/entities/Offering/types.ts:35](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Offering/types.ts#L35)

There are remaining Asset tokens, but their added value is lower than the Offering's
  minimum investment, so they cannot be purchased. The Offering should be manually closed
  to retrieve them

***

### SoldOut

> **SoldOut**: `"SoldOut"`

Defined in: [src/api/entities/Offering/types.ts:29](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Offering/types.ts#L29)

All Asset tokens in the Offering have been sold
