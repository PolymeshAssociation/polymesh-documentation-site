# Type Alias: ModifyOfferingTimesParams

> > **ModifyOfferingTimesParams** = \{ `end`: `Date` \| `null`; `start?`: `Date`; \} \| \{ `end?`: `Date` \| `null`; `start`: `Date`; \} \| \{ `end`: `Date` \| `null`; `start`: `Date`; \}

# Type Alias: ModifyOfferingTimesParams

> **ModifyOfferingTimesParams** = \{ `end`: `Date` \| `null`; `start?`: `Date`; \} \| \{ `end?`: `Date` \| `null`; `start`: `Date`; \} \| \{ `end`: `Date` \| `null`; `start`: `Date`; \}

Defined in: [src/api/procedures/types.ts:1758](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L1758)

## Union Members

### Type Literal

\{ `end`: `Date` \| `null`; `start?`: `Date`; \}

Name
Type
Description
Defined in

`end`

`Date` \| `null`

new end time (optional, will be left th same if not passed). A null value means the Offering doesn't end

[src/api/procedures/types.ts:1767](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L1767)

`start?`

`Date`

new start time (optional, will be left the same if not passed)

[src/api/procedures/types.ts:1763](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L1763)

***

### Type Literal

\{ `end?`: `Date` \| `null`; `start`: `Date`; \}

***

### Type Literal

\{ `end`: `Date` \| `null`; `start`: `Date`; \}
