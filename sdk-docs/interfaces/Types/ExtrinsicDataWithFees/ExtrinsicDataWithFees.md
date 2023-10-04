---
id: "ExtrinsicDataWithFees"
title: "Interface: ExtrinsicDataWithFees"
sidebar_label: "ExtrinsicDataWithFees"
---

[types](../../../modules/Types/Types.md).ExtrinsicDataWithFees

## Hierarchy

- [`ExtrinsicData`](../ExtrinsicData/ExtrinsicData.md)

  ↳ **`ExtrinsicDataWithFees`**

## Properties

### address

• **address**: ``null`` \| `string`

public key of the signer. Unsigned transactions have no signer, in which case this value is null (example: an enacted governance proposal)

#### Inherited from

[ExtrinsicData](../ExtrinsicData/ExtrinsicData.md).[address](../ExtrinsicData/ExtrinsicData.md#address)

#### Defined in

[types/index.ts:357](https://github.com/PolymeshAssociation/polymesh-sdk/blob/de58d40fd/src/types/index.ts#L357)

___

### blockDate

• **blockDate**: `Date`

#### Inherited from

[ExtrinsicData](../ExtrinsicData/ExtrinsicData.md).[blockDate](../ExtrinsicData/ExtrinsicData.md#blockdate)

#### Defined in

[types/index.ts:352](https://github.com/PolymeshAssociation/polymesh-sdk/blob/de58d40fd/src/types/index.ts#L352)

___

### blockHash

• **blockHash**: `string`

#### Inherited from

[ExtrinsicData](../ExtrinsicData/ExtrinsicData.md).[blockHash](../ExtrinsicData/ExtrinsicData.md#blockhash)

#### Defined in

[types/index.ts:350](https://github.com/PolymeshAssociation/polymesh-sdk/blob/de58d40fd/src/types/index.ts#L350)

___

### blockNumber

• **blockNumber**: `BigNumber`

#### Inherited from

[ExtrinsicData](../ExtrinsicData/ExtrinsicData.md).[blockNumber](../ExtrinsicData/ExtrinsicData.md#blocknumber)

#### Defined in

[types/index.ts:351](https://github.com/PolymeshAssociation/polymesh-sdk/blob/de58d40fd/src/types/index.ts#L351)

___

### extrinsicHash

• **extrinsicHash**: `string`

#### Inherited from

[ExtrinsicData](../ExtrinsicData/ExtrinsicData.md).[extrinsicHash](../ExtrinsicData/ExtrinsicData.md#extrinsichash)

#### Defined in

[types/index.ts:366](https://github.com/PolymeshAssociation/polymesh-sdk/blob/de58d40fd/src/types/index.ts#L366)

___

### extrinsicIdx

• **extrinsicIdx**: `BigNumber`

#### Inherited from

[ExtrinsicData](../ExtrinsicData/ExtrinsicData.md).[extrinsicIdx](../ExtrinsicData/ExtrinsicData.md#extrinsicidx)

#### Defined in

[types/index.ts:353](https://github.com/PolymeshAssociation/polymesh-sdk/blob/de58d40fd/src/types/index.ts#L353)

___

### fee

• **fee**: [`Fees`](../Fees/Fees.md)

#### Defined in

[types/index.ts:370](https://github.com/PolymeshAssociation/polymesh-sdk/blob/de58d40fd/src/types/index.ts#L370)

___

### nonce

• **nonce**: ``null`` \| `BigNumber`

nonce of the transaction. Null for unsigned transactions where address is null

#### Inherited from

[ExtrinsicData](../ExtrinsicData/ExtrinsicData.md).[nonce](../ExtrinsicData/ExtrinsicData.md#nonce)

#### Defined in

[types/index.ts:361](https://github.com/PolymeshAssociation/polymesh-sdk/blob/de58d40fd/src/types/index.ts#L361)

___

### params

• **params**: `Record`<`string`, `unknown`\>[]

#### Inherited from

[ExtrinsicData](../ExtrinsicData/ExtrinsicData.md).[params](../ExtrinsicData/ExtrinsicData.md#params)

#### Defined in

[types/index.ts:363](https://github.com/PolymeshAssociation/polymesh-sdk/blob/de58d40fd/src/types/index.ts#L363)

___

### specVersionId

• **specVersionId**: `BigNumber`

#### Inherited from

[ExtrinsicData](../ExtrinsicData/ExtrinsicData.md).[specVersionId](../ExtrinsicData/ExtrinsicData.md#specversionid)

#### Defined in

[types/index.ts:365](https://github.com/PolymeshAssociation/polymesh-sdk/blob/de58d40fd/src/types/index.ts#L365)

___

### success

• **success**: `boolean`

#### Inherited from

[ExtrinsicData](../ExtrinsicData/ExtrinsicData.md).[success](../ExtrinsicData/ExtrinsicData.md#success)

#### Defined in

[types/index.ts:364](https://github.com/PolymeshAssociation/polymesh-sdk/blob/de58d40fd/src/types/index.ts#L364)

___

### txTag

• **txTag**: [`TxTag`](../../../modules/Generated/Types/Types.md#txtag)

#### Inherited from

[ExtrinsicData](../ExtrinsicData/ExtrinsicData.md).[txTag](../ExtrinsicData/ExtrinsicData.md#txtag)

#### Defined in

[types/index.ts:362](https://github.com/PolymeshAssociation/polymesh-sdk/blob/de58d40fd/src/types/index.ts#L362)
