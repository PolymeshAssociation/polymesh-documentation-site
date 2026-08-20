# Type Alias: JurisdictionValue

> > **JurisdictionValue** = `object`

# Type Alias: JurisdictionValue

> **JurisdictionValue** = `object`

Defined in: [src/api/entities/Asset/types.ts:388](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Asset/types.ts#L388)

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

[src/api/entities/Asset/types.ts:393](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Asset/types.ts#L393)

 `value`

`BigNumber`

The number of individual Asset holders with this jurisdiction (or without any jurisdiction if countryCode is null), or the total balance of tokens held by all such holders

[src/api/entities/Asset/types.ts:398](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Asset/types.ts#L398)
