[types](../../Modules/Types/Types.md).PayingAccountFees

Breakdown of the fees that will be paid by a specific Account for a transaction, along
  with data associated to the Paying account

## Properties

### fees

• **fees**: [`Fees`](Fees.md)

fees that will be paid by the Account

#### Defined in

[types/index.ts:798](https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/types/index.ts#L798)

___

### payingAccountData

• **payingAccountData**: { `account`: [`Account`](../../Classes/API/Entities/Account/Account.md) ; `allowance`: `BigNumber` ; `type`: [`Subsidy`](../../Enums/Types/PayingAccountType.md#subsidy)  } & { `balance`: `BigNumber`  } & { `account`: [`Account`](../../Classes/API/Entities/Account/Account.md) ; `type`: [`Other`](../../Enums/Types/PayingAccountType.md#other) \| [`Caller`](../../Enums/Types/PayingAccountType.md#caller)  } & { `balance`: `BigNumber`  }

data related to the Account responsible of paying for the transaction

#### Defined in

[types/index.ts:802](https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/types/index.ts#L802)
