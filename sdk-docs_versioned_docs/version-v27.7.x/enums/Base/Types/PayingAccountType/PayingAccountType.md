---
id: "PayingAccountType"
title: "Enumeration: PayingAccountType"
sidebar_label: "PayingAccountType"
---

[base/types](../../../../modules/Base/Types/Types.md).PayingAccountType

Type of relationship between a paying account and a beneficiary

## Enumeration Members

### Caller

• **Caller** = ``"Caller"``

the caller Account is responsible of paying the fees

#### Defined in

[base/types.ts:127](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9e72221/src/base/types.ts#L127)

___

### MultiSigCreator

• **MultiSigCreator** = ``"MultiSigCreator"``

The creator of the MultiSig is responsible for paying the fees

#### Defined in

[base/types.ts:131](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9e72221/src/base/types.ts#L131)

___

### Other

• **Other** = ``"Other"``

the paying Account is paying for a specific transaction because of
  chain-specific constraints (e.g. the caller is accepting an invitation to an Identity
  and cannot have any funds to pay for it by definition)

#### Defined in

[base/types.ts:123](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9e72221/src/base/types.ts#L123)

___

### Subsidy

• **Subsidy** = ``"Subsidy"``

the paying Account is currently subsidizing the caller

#### Defined in

[base/types.ts:117](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9e72221/src/base/types.ts#L117)
