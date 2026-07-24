# Type Alias: ClaimCountStatInput

> > **ClaimCountStatInput** = \{ `claimType`: [`Accredited`](../enumerations/ClaimType.mdx#accredited); `issuer`: [`Identity`](Identity.mdx); `value?`: \{ `accredited`: `BigNumber`; `nonAccredited`: `BigNumber`; \}; \} \| \{ `claimType`: [`Affiliate`](../enumerations/ClaimType.mdx#affiliate); `issuer`: [`Identity`](Identity.mdx); `value?`: \{ `affiliate`: `BigNumber`; `nonAffiliate`: `BigNumber`; \}; \} \| \{ `claimType`: [`Jurisdiction`](../enumerations/ClaimType.mdx#jurisdiction); `issuer`: [`Identity`](Identity.mdx); `value?`: `object`[]; \}

# Type Alias: ClaimCountStatInput

> **ClaimCountStatInput** = \{ `claimType`: [`Accredited`](../enumerations/ClaimType.mdx#accredited); `issuer`: [`Identity`](Identity.mdx); `value?`: \{ `accredited`: `BigNumber`; `nonAccredited`: `BigNumber`; \}; \} \| \{ `claimType`: [`Affiliate`](../enumerations/ClaimType.mdx#affiliate); `issuer`: [`Identity`](Identity.mdx); `value?`: \{ `affiliate`: `BigNumber`; `nonAffiliate`: `BigNumber`; \}; \} \| \{ `claimType`: [`Jurisdiction`](../enumerations/ClaimType.mdx#jurisdiction); `issuer`: [`Identity`](Identity.mdx); `value?`: `object`[]; \}

Defined in: [src/api/entities/types.ts:586](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/types.ts#L586)

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

[src/api/entities/types.ts:589](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/types.ts#L589)

`issuer`

[`Identity`](Identity.mdx)

&hyphen;

[src/api/entities/types.ts:588](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/types.ts#L588)

`value?`

`object`

The count values for token holders with the accredited and non-accredited claim

**Note**

If not provided when enabling a stat, values will default to zero.
  If not provided when updating stats, the current values will remain unchanged

[src/api/entities/types.ts:596](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/types.ts#L596)

`value.accredited`

`BigNumber`

&hyphen;

[src/api/entities/types.ts:596](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/types.ts#L596)

`value.nonAccredited`

`BigNumber`

&hyphen;

[src/api/entities/types.ts:596](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/types.ts#L596)

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

[src/api/entities/types.ts:600](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/types.ts#L600)

`issuer`

[`Identity`](Identity.mdx)

&hyphen;

[src/api/entities/types.ts:599](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/types.ts#L599)

`value?`

`object`

The count values for token holders with the affiliate and non-affiliate claim

**Note**

If not provided when enabling a stat, values will default to zero.
  If not provided when updating stats, the current values will remain unchanged

[src/api/entities/types.ts:607](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/types.ts#L607)

`value.affiliate`

`BigNumber`

&hyphen;

[src/api/entities/types.ts:607](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/types.ts#L607)

`value.nonAffiliate`

`BigNumber`

&hyphen;

[src/api/entities/types.ts:607](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/types.ts#L607)

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

[src/api/entities/types.ts:611](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/types.ts#L611)

`issuer`

[`Identity`](Identity.mdx)

&hyphen;

[src/api/entities/types.ts:610](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/types.ts#L610)

`value?`

`object`[]

The count values for token holders per jurisdiction claim

**Note**

If not provided when enabling a stat, values will default to zero.
  If not provided when updating stats, the current values will remain unchanged

[src/api/entities/types.ts:618](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/types.ts#L618)
