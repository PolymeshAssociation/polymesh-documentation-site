---
id: "RotatePrimaryKeyParams"
title: "Interface: RotatePrimaryKeyParams"
sidebar_label: "RotatePrimaryKeyParams"
---

[api/procedures/types](../../../../../modules/API/Procedures/Types/Types.md).RotatePrimaryKeyParams

## Properties

### expiry

• `Optional` **expiry**: `Date`

(optional) when the generated authorization should expire

#### Defined in

[api/procedures/types.ts:877](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/procedures/types.ts#L877)

___

### targetAccount

• **targetAccount**: `string` \| [`Account`](../../../../../classes/API/Entities/Account/Account.md)

The Account that should function as the primary key of the newly created Identity. Can be ss58 encoded address or an instance of Account

#### Defined in

[api/procedures/types.ts:872](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/procedures/types.ts#L872)
