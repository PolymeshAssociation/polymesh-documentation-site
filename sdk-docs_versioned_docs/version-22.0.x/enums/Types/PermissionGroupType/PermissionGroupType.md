---
id: "PermissionGroupType"
title: "Enumeration: PermissionGroupType"
sidebar_label: "PermissionGroupType"
---

[types](../../../modules/Types/Types.md).PermissionGroupType

## Enumeration Members

### ExceptMeta

• **ExceptMeta** = ``"ExceptMeta"``

not authorized:
  - externalAgents

#### Defined in

[types/index.ts:1076](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2d3ac2aea/src/types/index.ts#L1076)

___

### Full

• **Full** = ``"Full"``

all transactions authorized

#### Defined in

[types/index.ts:1071](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2d3ac2aea/src/types/index.ts#L1071)

___

### PolymeshV1Caa

• **PolymeshV1Caa** = ``"PolymeshV1Caa"``

authorized:
  - corporateAction
  - corporateBallot
  - capitalDistribution

#### Defined in

[types/index.ts:1083](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2d3ac2aea/src/types/index.ts#L1083)

___

### PolymeshV1Pia

• **PolymeshV1Pia** = ``"PolymeshV1Pia"``

authorized:
  - asset.issue
  - asset.redeem
  - asset.controllerTransfer
  - sto (except for sto.invest)

#### Defined in

[types/index.ts:1091](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2d3ac2aea/src/types/index.ts#L1091)
