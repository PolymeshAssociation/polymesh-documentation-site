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

[api/entities/types.ts:744](https://github.com/PolymeshAssociation/polymesh-sdk/blob/49a0066c3/src/api/entities/types.ts#L744)

___

### Full

• **Full** = ``"Full"``

all transactions authorized

#### Defined in

[api/entities/types.ts:739](https://github.com/PolymeshAssociation/polymesh-sdk/blob/49a0066c3/src/api/entities/types.ts#L739)

___

### PolymeshV1Caa

• **PolymeshV1Caa** = ``"PolymeshV1Caa"``

authorized:
  - corporateAction
  - corporateBallot
  - capitalDistribution

#### Defined in

[api/entities/types.ts:751](https://github.com/PolymeshAssociation/polymesh-sdk/blob/49a0066c3/src/api/entities/types.ts#L751)

___

### PolymeshV1Pia

• **PolymeshV1Pia** = ``"PolymeshV1Pia"``

authorized:
  - asset.issue
  - asset.redeem
  - asset.controllerTransfer
  - sto (except for sto.invest)

#### Defined in

[api/entities/types.ts:759](https://github.com/PolymeshAssociation/polymesh-sdk/blob/49a0066c3/src/api/entities/types.ts#L759)
