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

[api/client/types.ts:17](https://github.com/PolymeshAssociation/polymesh-sdk/blob/3cc570ade/src/api/client/types.ts#L17)

___

### blockDate

• **blockDate**: `Date`

#### Defined in

[api/client/types.ts:12](https://github.com/PolymeshAssociation/polymesh-sdk/blob/3cc570ade/src/api/client/types.ts#L12)

___

### blockHash

• **blockHash**: `string`

#### Defined in

[api/client/types.ts:10](https://github.com/PolymeshAssociation/polymesh-sdk/blob/3cc570ade/src/api/client/types.ts#L10)

___

### blockNumber

• **blockNumber**: `BigNumber`

#### Defined in

[api/client/types.ts:11](https://github.com/PolymeshAssociation/polymesh-sdk/blob/3cc570ade/src/api/client/types.ts#L11)

___

### extrinsicHash

• **extrinsicHash**: `string`

#### Defined in

[api/client/types.ts:26](https://github.com/PolymeshAssociation/polymesh-sdk/blob/3cc570ade/src/api/client/types.ts#L26)

___

### extrinsicIdx

• **extrinsicIdx**: `BigNumber`

#### Defined in

[api/client/types.ts:13](https://github.com/PolymeshAssociation/polymesh-sdk/blob/3cc570ade/src/api/client/types.ts#L13)

___

### nonce

• **nonce**: ``null`` \| `BigNumber`

nonce of the transaction. Null for unsigned transactions where address is null

#### Defined in

[api/client/types.ts:21](https://github.com/PolymeshAssociation/polymesh-sdk/blob/3cc570ade/src/api/client/types.ts#L21)

___

### params

• **params**: `Record`\<`string`, `unknown`\>[]

#### Defined in

[api/client/types.ts:23](https://github.com/PolymeshAssociation/polymesh-sdk/blob/3cc570ade/src/api/client/types.ts#L23)

___

### specVersionId

• **specVersionId**: `BigNumber`

#### Defined in

[api/client/types.ts:25](https://github.com/PolymeshAssociation/polymesh-sdk/blob/3cc570ade/src/api/client/types.ts#L25)

___

### success

• **success**: `boolean`

#### Defined in

[api/client/types.ts:24](https://github.com/PolymeshAssociation/polymesh-sdk/blob/3cc570ade/src/api/client/types.ts#L24)

___

### txTag

• **txTag**: [`TxTag`](../../../../../modules/Generated/Types/Types.md#txtag)

#### Defined in

[api/client/types.ts:22](https://github.com/PolymeshAssociation/polymesh-sdk/blob/3cc570ade/src/api/client/types.ts#L22)
