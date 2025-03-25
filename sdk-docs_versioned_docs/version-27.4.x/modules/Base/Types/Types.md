---
id: "Types"
title: "Module: Base Types"
sidebar_label: "Types"
---

## Enumerations

- [PayingAccountType](../../../enums/Base/Types/PayingAccountType/PayingAccountType.md)
- [TransactionArgumentType](../../../enums/Base/Types/TransactionArgumentType/TransactionArgumentType.md)
- [TransactionStatus](../../../enums/Base/Types/TransactionStatus/TransactionStatus.md)

## Interfaces

- [ArrayTransactionArgument](../../../interfaces/Base/Types/ArrayTransactionArgument/ArrayTransactionArgument.md)
- [ComplexTransactionArgument](../../../interfaces/Base/Types/ComplexTransactionArgument/ComplexTransactionArgument.md)
- [PayingAccountFees](../../../interfaces/Base/Types/PayingAccountFees/PayingAccountFees.md)
- [PlainTransactionArgument](../../../interfaces/Base/Types/PlainTransactionArgument/PlainTransactionArgument.md)
- [SimpleEnumTransactionArgument](../../../interfaces/Base/Types/SimpleEnumTransactionArgument/SimpleEnumTransactionArgument.md)
- [TransactionPayload](../../../interfaces/Base/Types/TransactionPayload/TransactionPayload.md)

## Type Aliases

### MapTxData

Ƭ **MapTxData**\<`ArgsArray`\>: \{ [K in keyof ArgsArray]: ArgsArray[K] extends unknown[] ? TxData\<ArgsArray[K]\> : never }

Apply the [TxData](../../../interfaces/API/Procedures/Types/TxData/TxData.md) type to all args in an array

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ArgsArray` | extends `unknown`[][] |

#### Defined in

[base/types.ts:17](https://github.com/PolymeshAssociation/polymesh-sdk/blob/f8a937f04/src/base/types.ts#L17)

___

### PayingAccount

Ƭ **PayingAccount**: \{ `account`: [`Account`](../../../classes/API/Entities/Account/Account.md) ; `allowance`: `BigNumber` ; `type`: [`Subsidy`](../../../enums/Base/Types/PayingAccountType/PayingAccountType.md#subsidy)  } \| \{ `account`: [`Account`](../../../classes/API/Entities/Account/Account.md) ; `type`: [`Caller`](../../../enums/Base/Types/PayingAccountType/PayingAccountType.md#caller) \| [`Other`](../../../enums/Base/Types/PayingAccountType/PayingAccountType.md#other) \| [`MultiSigCreator`](../../../enums/Base/Types/PayingAccountType/PayingAccountType.md#multisigcreator)  }

Data representing the Account responsible for paying fees for a transaction

#### Defined in

[base/types.ts:137](https://github.com/PolymeshAssociation/polymesh-sdk/blob/f8a937f04/src/base/types.ts#L137)

___

### PolymeshError

Ƭ **PolymeshError**: [`PolymeshError`](../../../classes/Base/PolymeshError/PolymeshError.md)

#### Defined in

[base/types.ts:236](https://github.com/PolymeshAssociation/polymesh-sdk/blob/f8a937f04/src/base/types.ts#L236)

___

### PolymeshTransaction

Ƭ **PolymeshTransaction**\<`ReturnValue`, `TransformedReturnValue`, `Args`\>: [`PolymeshTransaction`](../../../classes/Base/PolymeshTransaction/PolymeshTransaction.md)\<`ReturnValue`, `TransformedReturnValue`, `Args`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ReturnValue` | `unknown` |
| `TransformedReturnValue` | `ReturnValue` |
| `Args` | extends `unknown`[] \| [] = `unknown`[] |

#### Defined in

[base/types.ts:226](https://github.com/PolymeshAssociation/polymesh-sdk/blob/f8a937f04/src/base/types.ts#L226)

___

### PolymeshTransactionBatch

Ƭ **PolymeshTransactionBatch**\<`ReturnValue`, `TransformedReturnValue`, `Args`\>: [`PolymeshTransactionBatch`](../../../classes/Base/PolymeshTransactionBatch/PolymeshTransactionBatch.md)\<`ReturnValue`, `TransformedReturnValue`, `Args`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ReturnValue` | `unknown` |
| `TransformedReturnValue` | `ReturnValue` |
| `Args` | extends `unknown`[][] = `unknown`[][] |

#### Defined in

[base/types.ts:231](https://github.com/PolymeshAssociation/polymesh-sdk/blob/f8a937f04/src/base/types.ts#L231)

___

### TransactionArgument

Ƭ **TransactionArgument**: \{ `_rawType`: `TypeDef` ; `name`: `string` ; `optional`: `boolean`  } & [`PlainTransactionArgument`](../../../interfaces/Base/Types/PlainTransactionArgument/PlainTransactionArgument.md) \| [`ArrayTransactionArgument`](../../../interfaces/Base/Types/ArrayTransactionArgument/ArrayTransactionArgument.md) \| [`SimpleEnumTransactionArgument`](../../../interfaces/Base/Types/SimpleEnumTransactionArgument/SimpleEnumTransactionArgument.md) \| [`ComplexTransactionArgument`](../../../interfaces/Base/Types/ComplexTransactionArgument/ComplexTransactionArgument.md)

#### Defined in

[base/types.ts:99](https://github.com/PolymeshAssociation/polymesh-sdk/blob/f8a937f04/src/base/types.ts#L99)

___

### TransactionPayloadInput

Ƭ **TransactionPayloadInput**: [`TransactionPayload`](../../../interfaces/Base/Types/TransactionPayload/TransactionPayload.md) \| [`TransactionPayload`](../../../interfaces/Base/Types/TransactionPayload/TransactionPayload.md)[``"payload"``] \| [`TransactionPayload`](../../../interfaces/Base/Types/TransactionPayload/TransactionPayload.md)[``"rawPayload"``]

The data needed for submitting an offline transaction.

**`Note`**

One of the following can be used to submit an offline transaction -
  1. Full payload
  2. Inner payload field
  3. Inner raw payload field

#### Defined in

[base/types.ts:221](https://github.com/PolymeshAssociation/polymesh-sdk/blob/f8a937f04/src/base/types.ts#L221)
