# Type Alias: ClaimCountStatInput

> > **ClaimCountStatInput** = \{ `claimType`: [`Accredited`](../enumerations/ClaimType.mdx#accredited); `issuer`: [`Identity`](Identity.mdx); `value?`: \{ `accredited`: `BigNumber`; `nonAccredited`: `BigNumber`; \}; \} \| \{ `claimType`: [`Affiliate`](../enumerations/ClaimType.mdx#affiliate); `issuer`: [`Identity`](Identity.mdx); `value?`: \{ `affiliate`: `BigNumber`; `nonAffiliate`: `BigNumber`; \}; \} \| \{ `claimType`: [`Jurisdiction`](../enumerations/ClaimType.mdx#jurisdiction); `issuer`: [`Identity`](Identity.mdx); `value?`: `object`[]; \}

# Type Alias: ClaimCountStatInput

> **ClaimCountStatInput** = \{ `claimType`: [`Accredited`](../enumerations/ClaimType.mdx#accredited); `issuer`: [`Identity`](Identity.mdx); `value?`: \{ `accredited`: `BigNumber`; `nonAccredited`: `BigNumber`; \}; \} \| \{ `claimType`: [`Affiliate`](../enumerations/ClaimType.mdx#affiliate); `issuer`: [`Identity`](Identity.mdx); `value?`: \{ `affiliate`: `BigNumber`; `nonAffiliate`: `BigNumber`; \}; \} \| \{ `claimType`: [`Jurisdiction`](../enumerations/ClaimType.mdx#jurisdiction); `issuer`: [`Identity`](Identity.mdx); `value?`: `object`[]; \}

Defined in: [src/api/entities/types.ts:570](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/types.ts#L570)

## Union Members

### Type Literal

\{ `claimType`: [`Accredited`](../enumerations/ClaimType.mdx#accredited); `issuer`: [`Identity`](Identity.mdx); `value?`: \{ `accredited`: `BigNumber`; `nonAccredited`: `BigNumber`; \}; \}

Name
Type
Description
Defined in

`claimType`

[`Accredited`](../enumerations/ClaimType.mdx#accredited)

&hyphen;

[src/api/entities/types.ts:573](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/types.ts#L573)

`issuer`

[`Identity`](Identity.mdx)

&hyphen;

[src/api/entities/types.ts:572](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/types.ts#L572)

`value?`

`object`

The count values for token holders with the accredited and non-accredited claim

**Note**

If not provided when enabling a stat, values will default to zero.
  If not provided when updating stats, the current values will remain unchanged

[src/api/entities/types.ts:580](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/types.ts#L580)

`value.accredited`

`BigNumber`

&hyphen;

[src/api/entities/types.ts:580](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/types.ts#L580)

`value.nonAccredited`

`BigNumber`

&hyphen;

[src/api/entities/types.ts:580](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/types.ts#L580)

***

### Type Literal

\{ `claimType`: [`Affiliate`](../enumerations/ClaimType.mdx#affiliate); `issuer`: [`Identity`](Identity.mdx); `value?`: \{ `affiliate`: `BigNumber`; `nonAffiliate`: `BigNumber`; \}; \}

Name
Type
Description
Defined in

`claimType`

[`Affiliate`](../enumerations/ClaimType.mdx#affiliate)

&hyphen;

[src/api/entities/types.ts:584](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/types.ts#L584)

`issuer`

[`Identity`](Identity.mdx)

&hyphen;

[src/api/entities/types.ts:583](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/types.ts#L583)

`value?`

`object`

The count values for token holders with the affiliate and non-affiliate claim

**Note**

If not provided when enabling a stat, values will default to zero.
  If not provided when updating stats, the current values will remain unchanged

[src/api/entities/types.ts:591](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/types.ts#L591)

`value.affiliate`

`BigNumber`

&hyphen;

[src/api/entities/types.ts:591](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/types.ts#L591)

`value.nonAffiliate`

`BigNumber`

&hyphen;

[src/api/entities/types.ts:591](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/types.ts#L591)

***

### Type Literal

\{ `claimType`: [`Jurisdiction`](../enumerations/ClaimType.mdx#jurisdiction); `issuer`: [`Identity`](Identity.mdx); `value?`: `object`[]; \}

Name
Type
Description
Defined in

`claimType`

[`Jurisdiction`](../enumerations/ClaimType.mdx#jurisdiction)

&hyphen;

[src/api/entities/types.ts:595](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/types.ts#L595)

`issuer`

[`Identity`](Identity.mdx)

&hyphen;

[src/api/entities/types.ts:594](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/types.ts#L594)

`value?`

`object`[]

The count values for token holders per jurisdiction claim

**Note**

If not provided when enabling a stat, values will default to zero.
  If not provided when updating stats, the current values will remain unchanged

[src/api/entities/types.ts:602](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/types.ts#L602)
