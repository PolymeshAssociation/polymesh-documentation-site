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

[types/index.ts:1078](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d2/src/types/index.ts#L1078)

___

### Full

• **Full** = ``"Full"``

all transactions authorized

#### Defined in

[types/index.ts:1073](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d2/src/types/index.ts#L1073)

___

### PolymeshV1Caa

• **PolymeshV1Caa** = ``"PolymeshV1Caa"``

authorized:
  - corporateAction
  - corporateBallot
  - capitalDistribution

#### Defined in

[types/index.ts:1085](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d2/src/types/index.ts#L1085)

___

### PolymeshV1Pia

• **PolymeshV1Pia** = ``"PolymeshV1Pia"``

authorized:
  - asset.issue
  - asset.redeem
  - asset.controllerTransfer
  - sto (except for sto.invest)

#### Defined in

[types/index.ts:1093](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d2/src/types/index.ts#L1093)
