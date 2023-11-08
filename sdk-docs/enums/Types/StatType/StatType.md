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

[types/index.ts:343](https://github.com/PolymeshAssociation/polymesh-sdk/blob/372a67e5d/src/types/index.ts#L343)

___

### Count

• **Count** = ``"Count"``

#### Defined in

[types/index.ts:342](https://github.com/PolymeshAssociation/polymesh-sdk/blob/372a67e5d/src/types/index.ts#L342)

___

### ScopedBalance

• **ScopedBalance** = ``"ScopedBalance"``

ScopedPercentage is an SDK only type, on chain it is `Balance` with a claimType option present

#### Defined in

[types/index.ts:351](https://github.com/PolymeshAssociation/polymesh-sdk/blob/372a67e5d/src/types/index.ts#L351)

___

### ScopedCount

• **ScopedCount** = ``"ScopedCount"``

ScopedCount is an SDK only type, on chain it is `Count` with a claimType option present

#### Defined in

[types/index.ts:347](https://github.com/PolymeshAssociation/polymesh-sdk/blob/372a67e5d/src/types/index.ts#L347)
