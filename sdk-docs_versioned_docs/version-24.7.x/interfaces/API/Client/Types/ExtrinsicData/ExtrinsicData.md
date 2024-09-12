---
id: "ExtrinsicData"
title: "Interface: ExtrinsicData"
sidebar_label: "ExtrinsicData"
---

[api/client/types](../../../../../modules/API/Client/Types/Types.md).ExtrinsicData

## Hierarchy

- **`ExtrinsicData`**

  ↳ [`ExtrinsicDataWithFees`](../ExtrinsicDataWithFees/ExtrinsicDataWithFees.md)

## Properties

### address

• **address**: ``null`` \| `string`

public key of the signer. Unsigned transactions have no signer, in which case this value is null (example: an enacted governance proposal)

#### Defined in

[api/client/types.ts:14](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fe2e6dd1d/src/api/client/types.ts#L14)

___

### blockDate

• **blockDate**: `Date`

#### Defined in

[api/client/types.ts:9](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fe2e6dd1d/src/api/client/types.ts#L9)

___

### blockHash

• **blockHash**: `string`

#### Defined in

[api/client/types.ts:7](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fe2e6dd1d/src/api/client/types.ts#L7)

___

### blockNumber

• **blockNumber**: `BigNumber`

#### Defined in

[api/client/types.ts:8](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fe2e6dd1d/src/api/client/types.ts#L8)

___

### extrinsicHash

• **extrinsicHash**: `string`

#### Defined in

[api/client/types.ts:23](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fe2e6dd1d/src/api/client/types.ts#L23)

___

### extrinsicIdx

• **extrinsicIdx**: `BigNumber`

#### Defined in

[api/client/types.ts:10](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fe2e6dd1d/src/api/client/types.ts#L10)

___

### nonce

• **nonce**: ``null`` \| `BigNumber`

nonce of the transaction. Null for unsigned transactions where address is null

#### Defined in

[api/client/types.ts:18](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fe2e6dd1d/src/api/client/types.ts#L18)

___

### params

• **params**: `Record`\<`string`, `unknown`\>[]

#### Defined in

[api/client/types.ts:20](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fe2e6dd1d/src/api/client/types.ts#L20)

___

### specVersionId

• **specVersionId**: `BigNumber`

#### Defined in

[api/client/types.ts:22](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fe2e6dd1d/src/api/client/types.ts#L22)

___

### success

• **success**: `boolean`

#### Defined in

[api/client/types.ts:21](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fe2e6dd1d/src/api/client/types.ts#L21)

___

### txTag

• **txTag**: [`TxTag`](../../../../../modules/Generated/Types/Types.md#txtag)

#### Defined in

[api/client/types.ts:19](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fe2e6dd1d/src/api/client/types.ts#L19)
