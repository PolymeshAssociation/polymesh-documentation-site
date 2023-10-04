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

[types/index.ts:357](https://github.com/PolymeshAssociation/polymesh-sdk/blob/de58d40fd/src/types/index.ts#L357)

___

### blockDate

• **blockDate**: `Date`

#### Defined in

[types/index.ts:352](https://github.com/PolymeshAssociation/polymesh-sdk/blob/de58d40fd/src/types/index.ts#L352)

___

### blockHash

• **blockHash**: `string`

#### Defined in

[types/index.ts:350](https://github.com/PolymeshAssociation/polymesh-sdk/blob/de58d40fd/src/types/index.ts#L350)

___

### blockNumber

• **blockNumber**: `BigNumber`

#### Defined in

[types/index.ts:351](https://github.com/PolymeshAssociation/polymesh-sdk/blob/de58d40fd/src/types/index.ts#L351)

___

### extrinsicHash

• **extrinsicHash**: `string`

#### Defined in

[types/index.ts:366](https://github.com/PolymeshAssociation/polymesh-sdk/blob/de58d40fd/src/types/index.ts#L366)

___

### extrinsicIdx

• **extrinsicIdx**: `BigNumber`

#### Defined in

[types/index.ts:353](https://github.com/PolymeshAssociation/polymesh-sdk/blob/de58d40fd/src/types/index.ts#L353)

___

### nonce

• **nonce**: ``null`` \| `BigNumber`

nonce of the transaction. Null for unsigned transactions where address is null

#### Defined in

[types/index.ts:361](https://github.com/PolymeshAssociation/polymesh-sdk/blob/de58d40fd/src/types/index.ts#L361)

___

### params

• **params**: `Record`<`string`, `unknown`\>[]

#### Defined in

[types/index.ts:363](https://github.com/PolymeshAssociation/polymesh-sdk/blob/de58d40fd/src/types/index.ts#L363)

___

### specVersionId

• **specVersionId**: `BigNumber`

#### Defined in

[types/index.ts:365](https://github.com/PolymeshAssociation/polymesh-sdk/blob/de58d40fd/src/types/index.ts#L365)

___

### success

• **success**: `boolean`

#### Defined in

[types/index.ts:364](https://github.com/PolymeshAssociation/polymesh-sdk/blob/de58d40fd/src/types/index.ts#L364)

___

### txTag

• **txTag**: [`TxTag`](../../../modules/Generated/Types/Types.md#txtag)

#### Defined in

[types/index.ts:362](https://github.com/PolymeshAssociation/polymesh-sdk/blob/de58d40fd/src/types/index.ts#L362)
