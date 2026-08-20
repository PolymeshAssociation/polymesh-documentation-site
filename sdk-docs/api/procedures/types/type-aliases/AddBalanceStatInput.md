# Type Alias: AddBalanceStatInput

> > **AddBalanceStatInput** = `object`

# Type Alias: AddBalanceStatInput

> **AddBalanceStatInput** = `object`

Defined in: [src/api/procedures/types.ts:496](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/procedures/types.ts#L496)

## Properties

Property
Type
Description
Defined in

 `balance?`

`BigNumber`

The total asset holder balance value for the stat

**Note**

If not provided when enabling a stat, it will default to zero.
  If not provided when updating stats, the current value will remain unchanged

[src/api/procedures/types.ts:503](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/procedures/types.ts#L503)
