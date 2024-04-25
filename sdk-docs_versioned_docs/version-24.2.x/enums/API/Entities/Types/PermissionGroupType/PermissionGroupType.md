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

[api/entities/types.ts:733](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fedc4714f/src/api/entities/types.ts#L733)

___

### Full

• **Full** = ``"Full"``

all transactions authorized

#### Defined in

[api/entities/types.ts:728](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fedc4714f/src/api/entities/types.ts#L728)

___

### PolymeshV1Caa

• **PolymeshV1Caa** = ``"PolymeshV1Caa"``

authorized:
  - corporateAction
  - corporateBallot
  - capitalDistribution

#### Defined in

[api/entities/types.ts:740](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fedc4714f/src/api/entities/types.ts#L740)

___

### PolymeshV1Pia

• **PolymeshV1Pia** = ``"PolymeshV1Pia"``

authorized:
  - asset.issue
  - asset.redeem
  - asset.controllerTransfer
  - sto (except for sto.invest)

#### Defined in

[api/entities/types.ts:748](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fedc4714f/src/api/entities/types.ts#L748)
