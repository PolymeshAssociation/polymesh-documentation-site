# Type Alias: RotatePrimaryKeyToSecondaryParams

> > **RotatePrimaryKeyToSecondaryParams** = `object`

# Type Alias: RotatePrimaryKeyToSecondaryParams

> **RotatePrimaryKeyToSecondaryParams** = `object`

Defined in: [src/api/procedures/types.ts:1034](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L1034)

## Properties

Property
Type
Description
Defined in

 `expiry?`

`Date`

(optional) when the generated authorization should expire

[src/api/procedures/types.ts:1043](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L1043)

 `permissions`

[`PermissionsLike`](../../../entities/types/type-aliases/PermissionsLike.mdx)

&hyphen;

[src/api/procedures/types.ts:1035](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L1035)

 `targetAccount`

`string` \| [`Account`](../../../entities/Account/classes/Account.mdx)

The Account that should function as the primary key of the newly created Identity. Can be ss58 encoded address or an instance of Account

[src/api/procedures/types.ts:1039](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L1039)
