# Interface: PayingAccountFees

> Defined in: [src/base/types.ts:165](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/base/types.ts#L165)

# Interface: PayingAccountFees

Defined in: [src/base/types.ts:165](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/base/types.ts#L165)

Breakdown of the fees that will be paid by a specific Account for a transaction, along
  with data associated to the Paying account

## Properties

### fees

> **fees**: [`Fees`](../../../api/client/types/interfaces/Fees.mdx)

Defined in: [src/base/types.ts:169](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/base/types.ts#L169)

fees that will be paid by the Account

***

### payingAccountData

> **payingAccountData**: [`PayingAccount`](../type-aliases/PayingAccount.mdx) & `object`

Defined in: [src/base/types.ts:173](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/base/types.ts#L173)

data related to the Account responsible of paying for the transaction

#### Type Declaration

Name
Type
Description
Defined in

`balance`

`BigNumber`

free balance of the Account

[src/base/types.ts:177](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/base/types.ts#L177)
