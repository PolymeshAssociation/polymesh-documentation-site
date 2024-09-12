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

[api/entities/types.ts:735](https://github.com/PolymeshAssociation/polymesh-sdk/blob/978e4ded6/src/api/entities/types.ts#L735)

___

### Full

• **Full** = ``"Full"``

all transactions authorized

#### Defined in

[api/entities/types.ts:730](https://github.com/PolymeshAssociation/polymesh-sdk/blob/978e4ded6/src/api/entities/types.ts#L730)

___

### PolymeshV1Caa

• **PolymeshV1Caa** = ``"PolymeshV1Caa"``

authorized:
  - corporateAction
  - corporateBallot
  - capitalDistribution

#### Defined in

[api/entities/types.ts:742](https://github.com/PolymeshAssociation/polymesh-sdk/blob/978e4ded6/src/api/entities/types.ts#L742)

___

### PolymeshV1Pia

• **PolymeshV1Pia** = ``"PolymeshV1Pia"``

authorized:
  - asset.issue
  - asset.redeem
  - asset.controllerTransfer
  - sto (except for sto.invest)

#### Defined in

[api/entities/types.ts:750](https://github.com/PolymeshAssociation/polymesh-sdk/blob/978e4ded6/src/api/entities/types.ts#L750)
