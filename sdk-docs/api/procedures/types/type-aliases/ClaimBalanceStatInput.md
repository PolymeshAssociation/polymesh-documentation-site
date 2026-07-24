# Type Alias: ClaimBalanceStatInput

> > **ClaimBalanceStatInput** = \{ `claimType`: [`Accredited`](../../../entities/types/enumerations/ClaimType.mdx#accredited); `issuer`: [`Identity`](../../../entities/Identity/classes/Identity.mdx); `value?`: \{ `accredited`: `BigNumber`; `nonAccredited`: `BigNumber`; \}; \} \| \{ `claimType`: [`Affiliate`](../../../entities/types/enumerations/ClaimType.mdx#affiliate); `issuer`: [`Identity`](../../../entities/Identity/classes/Identity.mdx); `value?`: \{ `affiliate`: `BigNumber`; `nonAffiliate`: `BigNumber`; \}; \} \| \{ `claimType`: [`Jurisdiction`](../../../entities/types/enumerations/ClaimType.mdx#jurisdiction); `issuer`: [`Identity`](../../../entities/Identity/classes/Identity.mdx); `value?`: `object`[]; \}

# Type Alias: ClaimBalanceStatInput

> **ClaimBalanceStatInput** = \{ `claimType`: [`Accredited`](../../../entities/types/enumerations/ClaimType.mdx#accredited); `issuer`: [`Identity`](../../../entities/Identity/classes/Identity.mdx); `value?`: \{ `accredited`: `BigNumber`; `nonAccredited`: `BigNumber`; \}; \} \| \{ `claimType`: [`Affiliate`](../../../entities/types/enumerations/ClaimType.mdx#affiliate); `issuer`: [`Identity`](../../../entities/Identity/classes/Identity.mdx); `value?`: \{ `affiliate`: `BigNumber`; `nonAffiliate`: `BigNumber`; \}; \} \| \{ `claimType`: [`Jurisdiction`](../../../entities/types/enumerations/ClaimType.mdx#jurisdiction); `issuer`: [`Identity`](../../../entities/Identity/classes/Identity.mdx); `value?`: `object`[]; \}

Defined in: [src/api/procedures/types.ts:516](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L516)

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

[src/api/procedures/types.ts:519](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L519)

`issuer`

[`Identity`](../../../entities/Identity/classes/Identity.mdx)

&hyphen;

[src/api/procedures/types.ts:518](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L518)

`value?`

`object`

The total balance values for token holder with the accredited and non-accredited claim

**Note**

If not provided when enabling a stat, values will default to zero.
  If not provided when updating stats, the current values will remain unchanged

[src/api/procedures/types.ts:526](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L526)

`value.accredited`

`BigNumber`

&hyphen;

[src/api/procedures/types.ts:526](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L526)

`value.nonAccredited`

`BigNumber`

&hyphen;

[src/api/procedures/types.ts:526](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L526)

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

[src/api/procedures/types.ts:530](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L530)

`issuer`

[`Identity`](../../../entities/Identity/classes/Identity.mdx)

&hyphen;

[src/api/procedures/types.ts:529](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L529)

`value?`

`object`

The total balance values for token holder with the affiliate and non-affiliate claim

**Note**

If not provided when enabling a stat, values will default to zero.
  If not provided when updating stats, the current values will remain unchanged

[src/api/procedures/types.ts:537](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L537)

`value.affiliate`

`BigNumber`

&hyphen;

[src/api/procedures/types.ts:537](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L537)

`value.nonAffiliate`

`BigNumber`

&hyphen;

[src/api/procedures/types.ts:537](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L537)

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

[src/api/procedures/types.ts:541](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L541)

`issuer`

[`Identity`](../../../entities/Identity/classes/Identity.mdx)

&hyphen;

[src/api/procedures/types.ts:540](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L540)

`value?`

`object`[]

The total balance values for token holder per jurisdiction claim

**Note**

If not provided when enabling a stat, values will default to zero.
  If not provided when updating stats, the current values will remain unchanged

[src/api/procedures/types.ts:548](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L548)
