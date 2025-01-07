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

[api/entities/types.ts:742](https://github.com/PolymeshAssociation/polymesh-sdk/blob/0dbd0ebd0/src/api/entities/types.ts#L742)

___

### Full

• **Full** = ``"Full"``

all transactions authorized

#### Defined in

[api/entities/types.ts:737](https://github.com/PolymeshAssociation/polymesh-sdk/blob/0dbd0ebd0/src/api/entities/types.ts#L737)

___

### PolymeshV1Caa

• **PolymeshV1Caa** = ``"PolymeshV1Caa"``

authorized:
  - corporateAction
  - corporateBallot
  - capitalDistribution

#### Defined in

[api/entities/types.ts:749](https://github.com/PolymeshAssociation/polymesh-sdk/blob/0dbd0ebd0/src/api/entities/types.ts#L749)

___

### PolymeshV1Pia

• **PolymeshV1Pia** = ``"PolymeshV1Pia"``

authorized:
  - asset.issue
  - asset.redeem
  - asset.controllerTransfer
  - sto (except for sto.invest)

#### Defined in

[api/entities/types.ts:757](https://github.com/PolymeshAssociation/polymesh-sdk/blob/0dbd0ebd0/src/api/entities/types.ts#L757)
