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

[api/procedures/types.ts:907](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b6f9fb883/src/api/procedures/types.ts#L907)

___

### permissions

• **permissions**: [`CustomPermissionGroup`](../../../../../classes/API/Entities/CustomPermissionGroup/CustomPermissionGroup.md) \| [`KnownPermissionGroup`](../../../../../classes/API/Entities/KnownPermissionGroup/KnownPermissionGroup.md) \| { `transactions`: ``null`` \| [`TransactionPermissions`](../../../../Types/TransactionPermissions/TransactionPermissions.md)  } \| { `transactionGroups`: [`TxGroup`](../../../../../enums/Types/TxGroup/TxGroup.md)[]  }

#### Defined in

[api/procedures/types.ts:892](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b6f9fb883/src/api/procedures/types.ts#L892)

___

### target

• **target**: `string` \| [`Identity`](../../../../../classes/API/Entities/Identity/Identity.md)

#### Defined in

[api/procedures/types.ts:891](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b6f9fb883/src/api/procedures/types.ts#L891)
