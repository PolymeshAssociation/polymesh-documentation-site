---
id: "PayingAccountFees"
title: "Interface: PayingAccountFees"
sidebar_label: "PayingAccountFees"
---

[types](../../../modules/Types/Types.md).PayingAccountFees

Breakdown of the fees that will be paid by a specific Account for a transaction, along
  with data associated to the Paying account

## Properties

### fees

• **fees**: [`Fees`](../Fees/Fees.md)

fees that will be paid by the Account

#### Defined in

[types/index.ts:801](https://github.com/PolymeshAssociation/polymesh-sdk/blob/07a4c5b0/src/types/index.ts#L801)

___

### payingAccountData

• **payingAccountData**: { `account`: [`Account`](../../../classes/API/Entities/Account/Account.md) ; `allowance`: `BigNumber` ; `type`: [`Subsidy`](../../../enums/Types/PayingAccountType/PayingAccountType.md#subsidy)  } & { `balance`: `BigNumber`  } & { `account`: [`Account`](../../../classes/API/Entities/Account/Account.md) ; `type`: [`Other`](../../../enums/Types/PayingAccountType/PayingAccountType.md#other) \| [`Caller`](../../../enums/Types/PayingAccountType/PayingAccountType.md#caller)  } & { `balance`: `BigNumber`  }

data related to the Account responsible of paying for the transaction

#### Defined in

[types/index.ts:805](https://github.com/PolymeshAssociation/polymesh-sdk/blob/07a4c5b0/src/types/index.ts#L805)