---
id: "InviteExternalAgentParams"
title: "Interface: InviteExternalAgentParams"
sidebar_label: "InviteExternalAgentParams"
---

[api/procedures/types](../../../../../modules/API/Procedures/Types/Types.md).InviteExternalAgentParams

## Properties

### expiry

• `Optional` **expiry**: `Date`

date at which the authorization request for invitation expires (optional)

**`Note`**

if expiry date is not set, the invitation will never expire

**`Note`**

due to chain limitations, the expiry will be ignored if the passed `permissions` don't correspond to an existing Permission Group

#### Defined in

[api/procedures/types.ts:1417](https://github.com/PolymeshAssociation/polymesh-sdk/blob/88db4a911/src/api/procedures/types.ts#L1417)

___

### permissions

• **permissions**: [`CustomPermissionGroup`](../../../../../classes/API/Entities/CustomPermissionGroup/CustomPermissionGroup.md) \| [`KnownPermissionGroup`](../../../../../classes/API/Entities/KnownPermissionGroup/KnownPermissionGroup.md) \| \{ `transactions`: ``null`` \| [`TransactionPermissions`](../../../Entities/Types/TransactionPermissions/TransactionPermissions.md)  } \| \{ `transactionGroups`: [`TxGroup`](../../../../../enums/API/Procedures/Types/TxGroup/TxGroup.md)[]  }

#### Defined in

[api/procedures/types.ts:1402](https://github.com/PolymeshAssociation/polymesh-sdk/blob/88db4a911/src/api/procedures/types.ts#L1402)

___

### target

• **target**: `string` \| [`Identity`](../../../../../classes/API/Entities/Identity/Identity.md)

#### Defined in

[api/procedures/types.ts:1401](https://github.com/PolymeshAssociation/polymesh-sdk/blob/88db4a911/src/api/procedures/types.ts#L1401)