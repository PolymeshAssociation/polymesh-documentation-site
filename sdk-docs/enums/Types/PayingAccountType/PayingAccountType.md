---
id: "PayingAccountType"
title: "Enumeration: PayingAccountType"
sidebar_label: "PayingAccountType"
---

[types](../../../modules/Types/Types.md).PayingAccountType

Type of relationship between a paying account and a beneficiary

## Enumeration Members

### Caller

• **Caller** = ``"Caller"``

the caller Account is responsible of paying the fees

#### Defined in

[types/index.ts:756](https://github.com/PolymeshAssociation/polymesh-sdk/blob/acc2284c/src/types/index.ts#L756)

___

### Other

• **Other** = ``"Other"``

the paying Account is paying for a specific transaction because of
  chain-specific constraints (e.g. the caller is accepting an invitation to an Identity
  and cannot have any funds to pay for it by definition)

#### Defined in

[types/index.ts:752](https://github.com/PolymeshAssociation/polymesh-sdk/blob/acc2284c/src/types/index.ts#L752)

___

### Subsidy

• **Subsidy** = ``"Subsidy"``

the paying Account is currently subsidizing the caller

#### Defined in

[types/index.ts:746](https://github.com/PolymeshAssociation/polymesh-sdk/blob/acc2284c/src/types/index.ts#L746)
