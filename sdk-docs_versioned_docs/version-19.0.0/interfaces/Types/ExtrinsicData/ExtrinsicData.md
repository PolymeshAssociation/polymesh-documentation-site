---
id: "ExtrinsicData"
title: "Interface: ExtrinsicData"
sidebar_label: "ExtrinsicData"
---

[types](../../../modules/Types/Types.md).ExtrinsicData

## Hierarchy

- **`ExtrinsicData`**

  ↳ [`ExtrinsicDataWithFees`](../ExtrinsicDataWithFees/ExtrinsicDataWithFees.md)

## Properties

### address

• **address**: ``null`` \| `string`

public key of the signer. Unsigned transactions have no signer, in which case this value is null (example: an enacted governance proposal)

#### Defined in

[types/index.ts:362](https://github.com/PolymeshAssociation/polymesh-sdk/blob/5a778578/src/types/index.ts#L362)

___

### blockHash

• **blockHash**: `string`

#### Defined in

[types/index.ts:356](https://github.com/PolymeshAssociation/polymesh-sdk/blob/5a778578/src/types/index.ts#L356)

___

### blockNumber

• **blockNumber**: `BigNumber`

#### Defined in

[types/index.ts:357](https://github.com/PolymeshAssociation/polymesh-sdk/blob/5a778578/src/types/index.ts#L357)

___

### extrinsicHash

• **extrinsicHash**: `string`

#### Defined in

[types/index.ts:371](https://github.com/PolymeshAssociation/polymesh-sdk/blob/5a778578/src/types/index.ts#L371)

___

### extrinsicIdx

• **extrinsicIdx**: `BigNumber`

#### Defined in

[types/index.ts:358](https://github.com/PolymeshAssociation/polymesh-sdk/blob/5a778578/src/types/index.ts#L358)

___

### nonce

• **nonce**: ``null`` \| `BigNumber`

nonce of the transaction. Null for unsigned transactions where address is null

#### Defined in

[types/index.ts:366](https://github.com/PolymeshAssociation/polymesh-sdk/blob/5a778578/src/types/index.ts#L366)

___

### params

• **params**: `Record`<`string`, `unknown`\>[]

#### Defined in

[types/index.ts:368](https://github.com/PolymeshAssociation/polymesh-sdk/blob/5a778578/src/types/index.ts#L368)

___

### specVersionId

• **specVersionId**: `BigNumber`

#### Defined in

[types/index.ts:370](https://github.com/PolymeshAssociation/polymesh-sdk/blob/5a778578/src/types/index.ts#L370)

___

### success

• **success**: `boolean`

#### Defined in

[types/index.ts:369](https://github.com/PolymeshAssociation/polymesh-sdk/blob/5a778578/src/types/index.ts#L369)

___

### txTag

• **txTag**: [`TxTag`](../../../modules/Generated/Types/Types.md#txtag)

#### Defined in

[types/index.ts:367](https://github.com/PolymeshAssociation/polymesh-sdk/blob/5a778578/src/types/index.ts#L367)
