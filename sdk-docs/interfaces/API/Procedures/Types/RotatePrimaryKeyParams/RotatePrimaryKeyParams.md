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

[api/procedures/types.ts:876](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c53723bab/src/api/procedures/types.ts#L876)

___

### targetAccount

• **targetAccount**: `string` \| [`Account`](../../../../../classes/API/Entities/Account/Account.md)

The Account that should function as the primary key of the newly created Identity. Can be ss58 encoded address or an instance of Account

#### Defined in

[api/procedures/types.ts:871](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c53723bab/src/api/procedures/types.ts#L871)
