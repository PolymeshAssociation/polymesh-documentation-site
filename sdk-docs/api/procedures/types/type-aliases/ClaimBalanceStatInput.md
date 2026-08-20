# Type Alias: ClaimBalanceStatInput

> > **ClaimBalanceStatInput** = \{ `claimType`: [`Accredited`](../../../entities/types/enumerations/ClaimType.mdx#accredited); `issuer`: [`Identity`](../../../entities/Identity/classes/Identity.mdx); `value?`: \{ `accredited`: `BigNumber`; `nonAccredited`: `BigNumber`; \}; \} \| \{ `claimType`: [`Affiliate`](../../../entities/types/enumerations/ClaimType.mdx#affiliate); `issuer`: [`Identity`](../../../entities/Identity/classes/Identity.mdx); `value?`: \{ `affiliate`: `BigNumber`; `nonAffiliate`: `BigNumber`; \}; \} \| \{ `claimType`: [`Jurisdiction`](../../../entities/types/enumerations/ClaimType.mdx#jurisdiction); `issuer`: [`Identity`](../../../entities/Identity/classes/Identity.mdx); `value?`: `object`[]; \}

# Type Alias: ClaimBalanceStatInput

> **ClaimBalanceStatInput** = \{ `claimType`: [`Accredited`](../../../entities/types/enumerations/ClaimType.mdx#accredited); `issuer`: [`Identity`](../../../entities/Identity/classes/Identity.mdx); `value?`: \{ `accredited`: `BigNumber`; `nonAccredited`: `BigNumber`; \}; \} \| \{ `claimType`: [`Affiliate`](../../../entities/types/enumerations/ClaimType.mdx#affiliate); `issuer`: [`Identity`](../../../entities/Identity/classes/Identity.mdx); `value?`: \{ `affiliate`: `BigNumber`; `nonAffiliate`: `BigNumber`; \}; \} \| \{ `claimType`: [`Jurisdiction`](../../../entities/types/enumerations/ClaimType.mdx#jurisdiction); `issuer`: [`Identity`](../../../entities/Identity/classes/Identity.mdx); `value?`: `object`[]; \}

Defined in: [src/api/procedures/types.ts:514](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/procedures/types.ts#L514)

## Union Members

### Type Literal

\{ `claimType`: [`Accredited`](../../../entities/types/enumerations/ClaimType.mdx#accredited); `issuer`: [`Identity`](../../../entities/Identity/classes/Identity.mdx); `value?`: \{ `accredited`: `BigNumber`; `nonAccredited`: `BigNumber`; \}; \}

Name
Type
Description
Defined in

`claimType`

[`Accredited`](../../../entities/types/enumerations/ClaimType.mdx#accredited)

&hyphen;

[src/api/procedures/types.ts:517](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/procedures/types.ts#L517)

`issuer`

[`Identity`](../../../entities/Identity/classes/Identity.mdx)

&hyphen;

[src/api/procedures/types.ts:516](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/procedures/types.ts#L516)

`value?`

`object`

The total balance values for token holder with the accredited and non-accredited claim

**Note**

If not provided when enabling a stat, values will default to zero.
  If not provided when updating stats, the current values will remain unchanged

[src/api/procedures/types.ts:524](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/procedures/types.ts#L524)

`value.accredited`

`BigNumber`

&hyphen;

[src/api/procedures/types.ts:524](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/procedures/types.ts#L524)

`value.nonAccredited`

`BigNumber`

&hyphen;

[src/api/procedures/types.ts:524](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/procedures/types.ts#L524)

***

### Type Literal

\{ `claimType`: [`Affiliate`](../../../entities/types/enumerations/ClaimType.mdx#affiliate); `issuer`: [`Identity`](../../../entities/Identity/classes/Identity.mdx); `value?`: \{ `affiliate`: `BigNumber`; `nonAffiliate`: `BigNumber`; \}; \}

Name
Type
Description
Defined in

`claimType`

[`Affiliate`](../../../entities/types/enumerations/ClaimType.mdx#affiliate)

&hyphen;

[src/api/procedures/types.ts:528](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/procedures/types.ts#L528)

`issuer`

[`Identity`](../../../entities/Identity/classes/Identity.mdx)

&hyphen;

[src/api/procedures/types.ts:527](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/procedures/types.ts#L527)

`value?`

`object`

The total balance values for token holder with the affiliate and non-affiliate claim

**Note**

If not provided when enabling a stat, values will default to zero.
  If not provided when updating stats, the current values will remain unchanged

[src/api/procedures/types.ts:535](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/procedures/types.ts#L535)

`value.affiliate`

`BigNumber`

&hyphen;

[src/api/procedures/types.ts:535](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/procedures/types.ts#L535)

`value.nonAffiliate`

`BigNumber`

&hyphen;

[src/api/procedures/types.ts:535](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/procedures/types.ts#L535)

***

### Type Literal

\{ `claimType`: [`Jurisdiction`](../../../entities/types/enumerations/ClaimType.mdx#jurisdiction); `issuer`: [`Identity`](../../../entities/Identity/classes/Identity.mdx); `value?`: `object`[]; \}

Name
Type
Description
Defined in

`claimType`

[`Jurisdiction`](../../../entities/types/enumerations/ClaimType.mdx#jurisdiction)

&hyphen;

[src/api/procedures/types.ts:539](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/procedures/types.ts#L539)

`issuer`

[`Identity`](../../../entities/Identity/classes/Identity.mdx)

&hyphen;

[src/api/procedures/types.ts:538](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/procedures/types.ts#L538)

`value?`

`object`[]

The total balance values for token holder per jurisdiction claim

**Note**

If not provided when enabling a stat, values will default to zero.
  If not provided when updating stats, the current values will remain unchanged

[src/api/procedures/types.ts:546](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/procedures/types.ts#L546)
