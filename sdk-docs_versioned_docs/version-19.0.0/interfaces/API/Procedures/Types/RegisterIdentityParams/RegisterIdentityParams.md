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

[api/procedures/types.ts:398](https://github.com/PolymeshAssociation/polymesh-sdk/blob/5a778578/src/api/procedures/types.ts#L398)

___

### expiry

• `Optional` **expiry**: `Date`

(optional) when the generated CDD claim should expire, `createCdd` must be true if specified

#### Defined in

[api/procedures/types.ts:402](https://github.com/PolymeshAssociation/polymesh-sdk/blob/5a778578/src/api/procedures/types.ts#L402)

___

### secondaryAccounts

• `Optional` **secondaryAccounts**: [`Modify`](../../../../../modules/Types/Utils/Utils.md#modify)<[`PermissionedAccount`](../../../../Types/PermissionedAccount/PermissionedAccount.md), { `permissions`: [`PermissionsLike`](../../../../../modules/Types/Types.md#permissionslike)  }\>[]

(optional) secondary accounts for the new Identity with their corresponding permissions.

**`Note`**

 Each Account will need to accept the generated authorizations before being linked to the Identity

#### Defined in

[api/procedures/types.ts:394](https://github.com/PolymeshAssociation/polymesh-sdk/blob/5a778578/src/api/procedures/types.ts#L394)

___

### targetAccount

• **targetAccount**: `string` \| [`Account`](../../../../../classes/API/Entities/Account/Account.md)

The Account that should function as the primary key of the newly created Identity. Can be ss58 encoded address or an instance of Account

#### Defined in

[api/procedures/types.ts:389](https://github.com/PolymeshAssociation/polymesh-sdk/blob/5a778578/src/api/procedures/types.ts#L389)
