---
id: "SetPermissionGroupParams"
title: "Interface: SetPermissionGroupParams"
sidebar_label: "SetPermissionGroupParams"
---

[api/procedures/types](../../../../../modules/API/Procedures/Types/Types.md).SetPermissionGroupParams

This procedure can be called with:
  - An Asset's existing Custom Permission Group. The Identity will be assigned as an Agent of that Group for that Asset
  - A Known Permission Group and an Asset. The Identity will be assigned as an Agent of that Group for that Asset
  - A set of Transaction Permissions and an Asset. If there is no Custom Permission Group with those permissions, a Custom Permission Group will be created for that Asset with those permissions, and
    the Identity will be assigned as an Agent of that Group for that Asset. Otherwise, the existing Group will be used
  - An array of [Transaction Groups](../../../../../enums/API/Procedures/Types/TxGroup/TxGroup.md) that represent a set of permissions. If there is no Custom Permission Group with those permissions, a Custom Permission Group will be created with those permissions, and
    the Identity will be assigned as an Agent of that Group for that Asset. Otherwise, the existing Group will be used

## Properties

### group

• **group**: [`CustomPermissionGroup`](../../../../../classes/API/Entities/CustomPermissionGroup/CustomPermissionGroup.md) \| [`KnownPermissionGroup`](../../../../../classes/API/Entities/KnownPermissionGroup/KnownPermissionGroup.md) \| [`TransactionsParams`](../TransactionsParams/TransactionsParams.md) \| [`TxGroupParams`](../TxGroupParams/TxGroupParams.md)

#### Defined in

[api/procedures/types.ts:1612](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/procedures/types.ts#L1612)
