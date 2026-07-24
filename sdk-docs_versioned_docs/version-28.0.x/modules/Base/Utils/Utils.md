---
id: "Utils"
title: "Module: utils"
sidebar_label: "Utils"
---

## Functions

### dispatchErrorToMessage

▸ **dispatchErrorToMessage**(`error`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `DispatchError` \| `SpRuntimeDispatchError` |

#### Returns

`string`

#### Defined in

[base/utils.ts:154](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/base/utils.ts#L154)

___

### handleTransactionSubmissionError

▸ **handleTransactionSubmissionError**(`err`): [`PolymeshError`](../../../classes/Base/PolymeshError/PolymeshError.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Error` |

#### Returns

[`PolymeshError`](../../../classes/Base/PolymeshError/PolymeshError.md)

#### Defined in

[base/utils.ts:185](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/base/utils.ts#L185)

___

### processType

▸ **processType**(`rawType`, `name`): [`TransactionArgument`](../Types/Types.md#transactionargument)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rawType` | `TypeDef` |
| `name` | `string` |

#### Returns

[`TransactionArgument`](../Types/Types.md#transactionargument)

#### Defined in

[base/utils.ts:66](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/base/utils.ts#L66)
