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

[api/client/types.ts:14](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fe2e6dd1d/src/api/client/types.ts#L14)

___

### blockDate

• **blockDate**: `Date`

#### Inherited from

[ExtrinsicData](../ExtrinsicData/ExtrinsicData.md).[blockDate](../ExtrinsicData/ExtrinsicData.md#blockdate)

#### Defined in

[api/client/types.ts:9](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fe2e6dd1d/src/api/client/types.ts#L9)

___

### blockHash

• **blockHash**: `string`

#### Inherited from

[ExtrinsicData](../ExtrinsicData/ExtrinsicData.md).[blockHash](../ExtrinsicData/ExtrinsicData.md#blockhash)

#### Defined in

[api/client/types.ts:7](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fe2e6dd1d/src/api/client/types.ts#L7)

___

### blockNumber

• **blockNumber**: `BigNumber`

#### Inherited from

[ExtrinsicData](../ExtrinsicData/ExtrinsicData.md).[blockNumber](../ExtrinsicData/ExtrinsicData.md#blocknumber)

#### Defined in

[api/client/types.ts:8](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fe2e6dd1d/src/api/client/types.ts#L8)

___

### extrinsicHash

• **extrinsicHash**: `string`

#### Inherited from

[ExtrinsicData](../ExtrinsicData/ExtrinsicData.md).[extrinsicHash](../ExtrinsicData/ExtrinsicData.md#extrinsichash)

#### Defined in

[api/client/types.ts:23](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fe2e6dd1d/src/api/client/types.ts#L23)

___

### extrinsicIdx

• **extrinsicIdx**: `BigNumber`

#### Inherited from

[ExtrinsicData](../ExtrinsicData/ExtrinsicData.md).[extrinsicIdx](../ExtrinsicData/ExtrinsicData.md#extrinsicidx)

#### Defined in

[api/client/types.ts:10](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fe2e6dd1d/src/api/client/types.ts#L10)

___

### fee

• **fee**: [`Fees`](../Fees/Fees.md)

#### Defined in

[api/client/types.ts:27](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fe2e6dd1d/src/api/client/types.ts#L27)

___

### nonce

• **nonce**: ``null`` \| `BigNumber`

nonce of the transaction. Null for unsigned transactions where address is null

#### Inherited from

[ExtrinsicData](../ExtrinsicData/ExtrinsicData.md).[nonce](../ExtrinsicData/ExtrinsicData.md#nonce)

#### Defined in

[api/client/types.ts:18](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fe2e6dd1d/src/api/client/types.ts#L18)

___

### params

• **params**: `Record`\<`string`, `unknown`\>[]

#### Inherited from

[ExtrinsicData](../ExtrinsicData/ExtrinsicData.md).[params](../ExtrinsicData/ExtrinsicData.md#params)

#### Defined in

[api/client/types.ts:20](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fe2e6dd1d/src/api/client/types.ts#L20)

___

### specVersionId

• **specVersionId**: `BigNumber`

#### Inherited from

[ExtrinsicData](../ExtrinsicData/ExtrinsicData.md).[specVersionId](../ExtrinsicData/ExtrinsicData.md#specversionid)

#### Defined in

[api/client/types.ts:22](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fe2e6dd1d/src/api/client/types.ts#L22)

___

### success

• **success**: `boolean`

#### Inherited from

[ExtrinsicData](../ExtrinsicData/ExtrinsicData.md).[success](../ExtrinsicData/ExtrinsicData.md#success)

#### Defined in

[api/client/types.ts:21](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fe2e6dd1d/src/api/client/types.ts#L21)

___

### txTag

• **txTag**: [`TxTag`](../../../../../modules/Generated/Types/Types.md#txtag)

#### Inherited from

[ExtrinsicData](../ExtrinsicData/ExtrinsicData.md).[txTag](../ExtrinsicData/ExtrinsicData.md#txtag)

#### Defined in

[api/client/types.ts:19](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fe2e6dd1d/src/api/client/types.ts#L19)
