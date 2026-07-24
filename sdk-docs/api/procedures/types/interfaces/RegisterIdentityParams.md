# Interface: RegisterIdentityParams

> Defined in: [src/api/procedures/types.ts:985](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L985)

# Interface: RegisterIdentityParams

Defined in: [src/api/procedures/types.ts:985](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L985)

## Properties

### createCdd?

> `optional` **createCdd?**: `boolean`

Defined in: [src/api/procedures/types.ts:998](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L998)

(optional) also issue a CDD claim for the created DID, completing the onboarding process for the Account

***

### expiry?

> `optional` **expiry?**: `Date`

Defined in: [src/api/procedures/types.ts:1002](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L1002)

(optional) when the generated CDD claim should expire, `createCdd` must be true if specified

***

### secondaryAccounts?

> `optional` **secondaryAccounts?**: [`Modify`](../../../../types/utils/type-aliases/Modify.mdx)\<[`PermissionedAccount`](../../../entities/types/interfaces/PermissionedAccount.mdx), \{ `permissions`: [`PermissionsLike`](../../../entities/types/type-aliases/PermissionsLike.mdx); \}\>[]

Defined in: [src/api/procedures/types.ts:994](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L994)

(optional) secondary accounts for the new Identity with their corresponding permissions.

#### Note

Each Account will need to accept the generated authorizations before being linked to the Identity

***

### targetAccount

> **targetAccount**: `string` \| [`Account`](../../../entities/Account/classes/Account.mdx)

Defined in: [src/api/procedures/types.ts:989](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/procedures/types.ts#L989)

The Account that should function as the primary key of the newly created Identity. Can be ss58 encoded address or an instance of Account
