---
id: "StatType"
title: "Enumeration: StatType"
sidebar_label: "StatType"
---

[types](../../../modules/Types/Types.md).StatType

Represents the StatType from the `statistics` module.

**`Note`**

 the chain doesn't use "Scoped" types, but they are needed here to discriminate the input instead of having an optional input

## Enumeration Members

### Balance

• **Balance** = ``"Balance"``

#### Defined in

[types/index.ts:336](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b6f9fb883/src/types/index.ts#L336)

___

### Count

• **Count** = ``"Count"``

#### Defined in

[types/index.ts:335](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b6f9fb883/src/types/index.ts#L335)

___

### ScopedBalance

• **ScopedBalance** = ``"ScopedBalance"``

ScopedPercentage is an SDK only type, on chain it is `Balance` with a claimType option present

#### Defined in

[types/index.ts:344](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b6f9fb883/src/types/index.ts#L344)

___

### ScopedCount

• **ScopedCount** = ``"ScopedCount"``

ScopedCount is an SDK only type, on chain it is `Count` with a claimType option present

#### Defined in

[types/index.ts:340](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b6f9fb883/src/types/index.ts#L340)
