# Type Alias: ModifyOfferingTimesParams

> > **ModifyOfferingTimesParams** = \{ `end`: `Date` \| `null`; `start?`: `Date`; \} \| \{ `end?`: `Date` \| `null`; `start`: `Date`; \} \| \{ `end`: `Date` \| `null`; `start`: `Date`; \}

# Type Alias: ModifyOfferingTimesParams

> **ModifyOfferingTimesParams** = \{ `end`: `Date` \| `null`; `start?`: `Date`; \} \| \{ `end?`: `Date` \| `null`; `start`: `Date`; \} \| \{ `end`: `Date` \| `null`; `start`: `Date`; \}

Defined in: [src/api/procedures/types.ts:1688](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/procedures/types.ts#L1688)

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

[src/api/procedures/types.ts:1697](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/procedures/types.ts#L1697)

`start?`

`Date`

new start time (optional, will be left the same if not passed)

[src/api/procedures/types.ts:1693](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/procedures/types.ts#L1693)

***

### Type Literal

\{ `end?`: `Date` \| `null`; `start`: `Date`; \}

***

### Type Literal

\{ `end`: `Date` \| `null`; `start`: `Date`; \}
