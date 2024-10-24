---
id: "PermissionGroupType"
title: "Enumeration: PermissionGroupType"
sidebar_label: "PermissionGroupType"
---

[api/entities/types](../../../../../modules/API/Entities/Types/Types.md).PermissionGroupType

## Enumeration Members

### ExceptMeta

• **ExceptMeta** = ``"ExceptMeta"``

not authorized:
  - externalAgents

#### Defined in

[api/entities/types.ts:739](https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/entities/types.ts#L739)

___

### Full

• **Full** = ``"Full"``

all transactions authorized

#### Defined in

[api/entities/types.ts:734](https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/entities/types.ts#L734)

___

### PolymeshV1Caa

• **PolymeshV1Caa** = ``"PolymeshV1Caa"``

authorized:
  - corporateAction
  - corporateBallot
  - capitalDistribution

#### Defined in

[api/entities/types.ts:746](https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/entities/types.ts#L746)

___

### PolymeshV1Pia

• **PolymeshV1Pia** = ``"PolymeshV1Pia"``

authorized:
  - asset.issue
  - asset.redeem
  - asset.controllerTransfer
  - sto (except for sto.invest)

#### Defined in

[api/entities/types.ts:754](https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/entities/types.ts#L754)
