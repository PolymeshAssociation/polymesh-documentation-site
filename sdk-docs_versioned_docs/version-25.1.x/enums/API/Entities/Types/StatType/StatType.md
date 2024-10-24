---
id: "StatType"
title: "Enumeration: StatType"
sidebar_label: "StatType"
---

[api/entities/types](../../../../../modules/API/Entities/Types/Types.md).StatType

Represents the StatType from the `statistics` module.

**`Note`**

the chain doesn't use "Scoped" types, but they are needed here to discriminate the input instead of having an optional input

## Enumeration Members

### Balance

• **Balance** = ``"Balance"``

#### Defined in

[api/entities/types.ts:282](https://github.com/PolymeshAssociation/polymesh-sdk/blob/88db4a911/src/api/entities/types.ts#L282)

___

### Count

• **Count** = ``"Count"``

#### Defined in

[api/entities/types.ts:281](https://github.com/PolymeshAssociation/polymesh-sdk/blob/88db4a911/src/api/entities/types.ts#L281)

___

### ScopedBalance

• **ScopedBalance** = ``"ScopedBalance"``

ScopedPercentage is an SDK only type, on chain it is `Balance` with a claimType option present

#### Defined in

[api/entities/types.ts:290](https://github.com/PolymeshAssociation/polymesh-sdk/blob/88db4a911/src/api/entities/types.ts#L290)

___

### ScopedCount

• **ScopedCount** = ``"ScopedCount"``

ScopedCount is an SDK only type, on chain it is `Count` with a claimType option present

#### Defined in

[api/entities/types.ts:286](https://github.com/PolymeshAssociation/polymesh-sdk/blob/88db4a911/src/api/entities/types.ts#L286)