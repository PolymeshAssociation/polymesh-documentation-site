---
id: "Types"
title: "Module: Base Types"
sidebar_label: "Types"
---

## Interfaces

- [TransactionPayload](../../../interfaces/Base/Types/TransactionPayload/TransactionPayload.md)

## Type Aliases

### PolymeshError

Ƭ **PolymeshError**: [`PolymeshError`](../../../classes/Base/PolymeshError/PolymeshError.md)

#### Defined in

[base/types.ts:48](https://github.com/PolymeshAssociation/polymesh-sdk/blob/968f8d70c/src/base/types.ts#L48)

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

[base/types.ts:38](https://github.com/PolymeshAssociation/polymesh-sdk/blob/968f8d70c/src/base/types.ts#L38)

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

[base/types.ts:43](https://github.com/PolymeshAssociation/polymesh-sdk/blob/968f8d70c/src/base/types.ts#L43)
