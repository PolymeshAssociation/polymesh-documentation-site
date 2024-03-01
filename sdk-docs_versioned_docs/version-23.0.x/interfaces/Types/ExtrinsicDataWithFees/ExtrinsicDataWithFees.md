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

[types/index.ts:380](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2c78f6c34/src/types/index.ts#L380)

___

### blockDate

• **blockDate**: `Date`

#### Inherited from

[ExtrinsicData](../ExtrinsicData/ExtrinsicData.md).[blockDate](../ExtrinsicData/ExtrinsicData.md#blockdate)

#### Defined in

[types/index.ts:375](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2c78f6c34/src/types/index.ts#L375)

___

### blockHash

• **blockHash**: `string`

#### Inherited from

[ExtrinsicData](../ExtrinsicData/ExtrinsicData.md).[blockHash](../ExtrinsicData/ExtrinsicData.md#blockhash)

#### Defined in

[types/index.ts:373](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2c78f6c34/src/types/index.ts#L373)

___

### blockNumber

• **blockNumber**: `BigNumber`

#### Inherited from

[ExtrinsicData](../ExtrinsicData/ExtrinsicData.md).[blockNumber](../ExtrinsicData/ExtrinsicData.md#blocknumber)

#### Defined in

[types/index.ts:374](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2c78f6c34/src/types/index.ts#L374)

___

### extrinsicHash

• **extrinsicHash**: `string`

#### Inherited from

[ExtrinsicData](../ExtrinsicData/ExtrinsicData.md).[extrinsicHash](../ExtrinsicData/ExtrinsicData.md#extrinsichash)

#### Defined in

[types/index.ts:389](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2c78f6c34/src/types/index.ts#L389)

___

### extrinsicIdx

• **extrinsicIdx**: `BigNumber`

#### Inherited from

[ExtrinsicData](../ExtrinsicData/ExtrinsicData.md).[extrinsicIdx](../ExtrinsicData/ExtrinsicData.md#extrinsicidx)

#### Defined in

[types/index.ts:376](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2c78f6c34/src/types/index.ts#L376)

___

### fee

• **fee**: [`Fees`](../Fees/Fees.md)

#### Defined in

[types/index.ts:393](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2c78f6c34/src/types/index.ts#L393)

___

### nonce

• **nonce**: ``null`` \| `BigNumber`

nonce of the transaction. Null for unsigned transactions where address is null

#### Inherited from

[ExtrinsicData](../ExtrinsicData/ExtrinsicData.md).[nonce](../ExtrinsicData/ExtrinsicData.md#nonce)

#### Defined in

[types/index.ts:384](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2c78f6c34/src/types/index.ts#L384)

___

### params

• **params**: `Record`\<`string`, `unknown`\>[]

#### Inherited from

[ExtrinsicData](../ExtrinsicData/ExtrinsicData.md).[params](../ExtrinsicData/ExtrinsicData.md#params)

#### Defined in

[types/index.ts:386](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2c78f6c34/src/types/index.ts#L386)

___

### specVersionId

• **specVersionId**: `BigNumber`

#### Inherited from

[ExtrinsicData](../ExtrinsicData/ExtrinsicData.md).[specVersionId](../ExtrinsicData/ExtrinsicData.md#specversionid)

#### Defined in

[types/index.ts:388](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2c78f6c34/src/types/index.ts#L388)

___

### success

• **success**: `boolean`

#### Inherited from

[ExtrinsicData](../ExtrinsicData/ExtrinsicData.md).[success](../ExtrinsicData/ExtrinsicData.md#success)

#### Defined in

[types/index.ts:387](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2c78f6c34/src/types/index.ts#L387)

___

### txTag

• **txTag**: [`TxTag`](../../../modules/Generated/Types/Types.md#txtag)

#### Inherited from

[ExtrinsicData](../ExtrinsicData/ExtrinsicData.md).[txTag](../ExtrinsicData/ExtrinsicData.md#txtag)

#### Defined in

[types/index.ts:385](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2c78f6c34/src/types/index.ts#L385)
