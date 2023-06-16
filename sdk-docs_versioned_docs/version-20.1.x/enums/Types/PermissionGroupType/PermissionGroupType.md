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

[types/index.ts:1055](https://github.com/F-OBrien/polymesh-sdk/blob/012f1745/src/types/index.ts#L1055)

___

### Full

• **Full** = ``"Full"``

all transactions authorized

#### Defined in

[types/index.ts:1050](https://github.com/F-OBrien/polymesh-sdk/blob/012f1745/src/types/index.ts#L1050)

___

### PolymeshV1Caa

• **PolymeshV1Caa** = ``"PolymeshV1Caa"``

authorized:
  - corporateAction
  - corporateBallot
  - capitalDistribution

#### Defined in

[types/index.ts:1062](https://github.com/F-OBrien/polymesh-sdk/blob/012f1745/src/types/index.ts#L1062)

___

### PolymeshV1Pia

• **PolymeshV1Pia** = ``"PolymeshV1Pia"``

authorized:
  - asset.issue
  - asset.redeem
  - asset.controllerTransfer
  - sto (except for sto.invest)

#### Defined in

[types/index.ts:1070](https://github.com/F-OBrien/polymesh-sdk/blob/012f1745/src/types/index.ts#L1070)
