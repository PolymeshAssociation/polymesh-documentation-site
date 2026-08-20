# Enumeration: PayingAccountType

> Defined in: [src/base/types.ts:120](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/base/types.ts#L120)

# Enumeration: PayingAccountType

Defined in: [src/base/types.ts:120](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/base/types.ts#L120)

Type of relationship between a paying account and a beneficiary

## Enumeration Members

### Caller

> **Caller**: `"Caller"`

Defined in: [src/base/types.ts:134](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/base/types.ts#L134)

the caller Account is responsible of paying the fees

***

### MultiSigCreator

> **MultiSigCreator**: `"MultiSigCreator"`

Defined in: [src/base/types.ts:138](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/base/types.ts#L138)

The creator of the MultiSig is responsible for paying the fees

***

### Other

> **Other**: `"Other"`

Defined in: [src/base/types.ts:130](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/base/types.ts#L130)

the paying Account is paying for a specific transaction because of
  chain-specific constraints (e.g. the caller is accepting an invitation to an Identity
  and cannot have any funds to pay for it by definition)

***

### Subsidy

> **Subsidy**: `"Subsidy"`

Defined in: [src/base/types.ts:124](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/base/types.ts#L124)

the paying Account is currently subsidizing the caller
