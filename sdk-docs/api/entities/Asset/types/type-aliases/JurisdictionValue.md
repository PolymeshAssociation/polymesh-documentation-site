# Type Alias: JurisdictionValue

> > **JurisdictionValue** = `object`

# Type Alias: JurisdictionValue

> **JurisdictionValue** = `object`

Defined in: [src/api/entities/Asset/types.ts:441](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Asset/types.ts#L441)

For Jurisdiction claims - tracks holders by country code and those without jurisdiction

## Properties

Property
Type
Description
Defined in

 `countryCode`

[`CountryCode`](../../../../../types/enumerations/CountryCode.mdx) \| `null`

The country code of the jurisdiction

**Note**

null if the jurisdiction is not specified (no jurisdiction claim)

[src/api/entities/Asset/types.ts:446](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Asset/types.ts#L446)

 `value`

`BigNumber`

The number of individual Asset holders with this jurisdiction (or without any jurisdiction if countryCode is null), or the total balance of tokens held by all such holders

[src/api/entities/Asset/types.ts:451](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Asset/types.ts#L451)
