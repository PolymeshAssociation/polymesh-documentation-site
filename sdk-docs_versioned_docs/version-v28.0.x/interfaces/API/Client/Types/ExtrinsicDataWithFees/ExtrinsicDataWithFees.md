---
id: "ExtrinsicDataWithFees"
title: "Interface: ExtrinsicDataWithFees"
sidebar_label: "ExtrinsicDataWithFees"
---

[api/client/types](../../../../../modules/API/Client/Types/Types.md).ExtrinsicDataWithFees

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

[api/client/types.ts:17](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/client/types.ts#L17)

___

### blockDate

• **blockDate**: `Date`

#### Inherited from

[ExtrinsicData](../ExtrinsicData/ExtrinsicData.md).[blockDate](../ExtrinsicData/ExtrinsicData.md#blockdate)

#### Defined in

[api/client/types.ts:12](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/client/types.ts#L12)

___

### blockHash

• **blockHash**: `string`

#### Inherited from

[ExtrinsicData](../ExtrinsicData/ExtrinsicData.md).[blockHash](../ExtrinsicData/ExtrinsicData.md#blockhash)

#### Defined in

[api/client/types.ts:10](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/client/types.ts#L10)

___

### blockNumber

• **blockNumber**: `BigNumber`

#### Inherited from

[ExtrinsicData](../ExtrinsicData/ExtrinsicData.md).[blockNumber](../ExtrinsicData/ExtrinsicData.md#blocknumber)

#### Defined in

[api/client/types.ts:11](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/client/types.ts#L11)

___

### extrinsicHash

• **extrinsicHash**: `string`

#### Inherited from

[ExtrinsicData](../ExtrinsicData/ExtrinsicData.md).[extrinsicHash](../ExtrinsicData/ExtrinsicData.md#extrinsichash)

#### Defined in

[api/client/types.ts:26](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/client/types.ts#L26)

___

### extrinsicIdx

• **extrinsicIdx**: `BigNumber`

#### Inherited from

[ExtrinsicData](../ExtrinsicData/ExtrinsicData.md).[extrinsicIdx](../ExtrinsicData/ExtrinsicData.md#extrinsicidx)

#### Defined in

[api/client/types.ts:13](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/client/types.ts#L13)

___

### fee

• **fee**: [`Fees`](../Fees/Fees.md)

#### Defined in

[api/client/types.ts:30](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/client/types.ts#L30)

___

### nonce

• **nonce**: ``null`` \| `BigNumber`

nonce of the transaction. Null for unsigned transactions where address is null

#### Inherited from

[ExtrinsicData](../ExtrinsicData/ExtrinsicData.md).[nonce](../ExtrinsicData/ExtrinsicData.md#nonce)

#### Defined in

[api/client/types.ts:21](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/client/types.ts#L21)

___

### params

• **params**: `Record`\<`string`, `unknown`\>[]

#### Inherited from

[ExtrinsicData](../ExtrinsicData/ExtrinsicData.md).[params](../ExtrinsicData/ExtrinsicData.md#params)

#### Defined in

[api/client/types.ts:23](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/client/types.ts#L23)

___

### specVersionId

• **specVersionId**: `BigNumber`

#### Inherited from

[ExtrinsicData](../ExtrinsicData/ExtrinsicData.md).[specVersionId](../ExtrinsicData/ExtrinsicData.md#specversionid)

#### Defined in

[api/client/types.ts:25](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/client/types.ts#L25)

___

### success

• **success**: `boolean`

#### Inherited from

[ExtrinsicData](../ExtrinsicData/ExtrinsicData.md).[success](../ExtrinsicData/ExtrinsicData.md#success)

#### Defined in

[api/client/types.ts:24](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/client/types.ts#L24)

___

### txTag

• **txTag**: `TxTag`

#### Inherited from

[ExtrinsicData](../ExtrinsicData/ExtrinsicData.md).[txTag](../ExtrinsicData/ExtrinsicData.md#txtag)

#### Defined in

[api/client/types.ts:22](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/client/types.ts#L22)
