---
id: "RegisterIdentityParams"
title: "Interface: RegisterIdentityParams"
sidebar_label: "RegisterIdentityParams"
---

[api/procedures/types](../../../../../modules/API/Procedures/Types/Types.md).RegisterIdentityParams

## Properties

### createCdd

• `Optional` **createCdd**: `boolean`

(optional) also issue a CDD claim for the created DID, completing the onboarding process for the Account

#### Defined in

[api/procedures/types.ts:849](https://github.com/PolymeshAssociation/polymesh-sdk/blob/0dbd0ebd0/src/api/procedures/types.ts#L849)

___

### expiry

• `Optional` **expiry**: `Date`

(optional) when the generated CDD claim should expire, `createCdd` must be true if specified

#### Defined in

[api/procedures/types.ts:853](https://github.com/PolymeshAssociation/polymesh-sdk/blob/0dbd0ebd0/src/api/procedures/types.ts#L853)

___

### secondaryAccounts

• `Optional` **secondaryAccounts**: [`Modify`](../../../../../modules/Types/Utils/Utils.md#modify)\<[`PermissionedAccount`](../../../Entities/Types/PermissionedAccount/PermissionedAccount.md), \{ `permissions`: [`PermissionsLike`](../../../../../modules/API/Entities/Types/Types.md#permissionslike)  }\>[]

(optional) secondary accounts for the new Identity with their corresponding permissions.

**`Note`**

Each Account will need to accept the generated authorizations before being linked to the Identity

#### Defined in

[api/procedures/types.ts:845](https://github.com/PolymeshAssociation/polymesh-sdk/blob/0dbd0ebd0/src/api/procedures/types.ts#L845)

___

### targetAccount

• **targetAccount**: `string` \| [`Account`](../../../../../classes/API/Entities/Account/Account.md)

The Account that should function as the primary key of the newly created Identity. Can be ss58 encoded address or an instance of Account

#### Defined in

[api/procedures/types.ts:840](https://github.com/PolymeshAssociation/polymesh-sdk/blob/0dbd0ebd0/src/api/procedures/types.ts#L840)
