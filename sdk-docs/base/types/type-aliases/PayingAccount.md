# Type Alias: PayingAccount

> > **PayingAccount** = \{ `account`: [`Account`](../../../api/entities/Account/classes/Account.mdx); `allowance`: `BigNumber`; `type`: [`Subsidy`](../enumerations/PayingAccountType.mdx#subsidy); \} \| \{ `account`: [`Account`](../../../api/entities/Account/classes/Account.mdx); `type`: [`Caller`](../enumerations/PayingAccountType.mdx#caller) \| [`Other`](../enumerations/PayingAccountType.mdx#other) \| [`MultiSigCreator`](../enumerations/PayingAccountType.mdx#multisigcreator); \}

# Type Alias: PayingAccount

> **PayingAccount** = \{ `account`: [`Account`](../../../api/entities/Account/classes/Account.mdx); `allowance`: `BigNumber`; `type`: [`Subsidy`](../enumerations/PayingAccountType.mdx#subsidy); \} \| \{ `account`: [`Account`](../../../api/entities/Account/classes/Account.mdx); `type`: [`Caller`](../enumerations/PayingAccountType.mdx#caller) \| [`Other`](../enumerations/PayingAccountType.mdx#other) \| [`MultiSigCreator`](../enumerations/PayingAccountType.mdx#multisigcreator); \}

Defined in: [src/base/types.ts:144](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/base/types.ts#L144)

Data representing the Account responsible for paying fees for a transaction

## Union Members

### Type Literal

\{ `account`: [`Account`](../../../api/entities/Account/classes/Account.mdx); `allowance`: `BigNumber`; `type`: [`Subsidy`](../enumerations/PayingAccountType.mdx#subsidy); \}

Name
Type
Description
Defined in

`account`

[`Account`](../../../api/entities/Account/classes/Account.mdx)

Account that pays for the transaction

[src/base/types.ts:150](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/base/types.ts#L150)

`allowance`

`BigNumber`

total amount that can be paid for

[src/base/types.ts:154](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/base/types.ts#L154)

`type`

[`Subsidy`](../enumerations/PayingAccountType.mdx#subsidy)

&hyphen;

[src/base/types.ts:146](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/base/types.ts#L146)

***

### Type Literal

\{ `account`: [`Account`](../../../api/entities/Account/classes/Account.mdx); `type`: [`Caller`](../enumerations/PayingAccountType.mdx#caller) \| [`Other`](../enumerations/PayingAccountType.mdx#other) \| [`MultiSigCreator`](../enumerations/PayingAccountType.mdx#multisigcreator); \}
