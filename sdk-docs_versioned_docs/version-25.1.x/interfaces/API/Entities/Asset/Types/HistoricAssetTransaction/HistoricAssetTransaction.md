---
id: "HistoricAssetTransaction"
title: "Interface: HistoricAssetTransaction"
sidebar_label: "HistoricAssetTransaction"
---

[api/entities/Asset/types](../../../../../../modules/API/Entities/Asset/Types/Types.md).HistoricAssetTransaction

## Hierarchy

- [`BaseHistoricAssetTransaction`](../BaseHistoricAssetTransaction/BaseHistoricAssetTransaction.md)

  ↳ **`HistoricAssetTransaction`**

## Properties

### amount

• **amount**: `BigNumber`

Amount of the fungible tokens involved in the transaction

#### Defined in

[api/entities/Asset/types.ts:189](https://github.com/PolymeshAssociation/polymesh-sdk/blob/88db4a911/src/api/entities/Asset/types.ts#L189)

___

### asset

• **asset**: [`FungibleAsset`](../../../../../../classes/API/Entities/Asset/Fungible/FungibleAsset.md)

#### Defined in

[api/entities/Asset/types.ts:184](https://github.com/PolymeshAssociation/polymesh-sdk/blob/88db4a911/src/api/entities/Asset/types.ts#L184)

___

### blockDate

• **blockDate**: `Date`

#### Inherited from

[BaseHistoricAssetTransaction](../BaseHistoricAssetTransaction/BaseHistoricAssetTransaction.md).[blockDate](../BaseHistoricAssetTransaction/BaseHistoricAssetTransaction.md#blockdate)

#### Defined in

[api/client/types.ts:175](https://github.com/PolymeshAssociation/polymesh-sdk/blob/88db4a911/src/api/client/types.ts#L175)

___

### blockHash

• **blockHash**: `string`

#### Inherited from

[BaseHistoricAssetTransaction](../BaseHistoricAssetTransaction/BaseHistoricAssetTransaction.md).[blockHash](../BaseHistoricAssetTransaction/BaseHistoricAssetTransaction.md#blockhash)

#### Defined in

[api/client/types.ts:174](https://github.com/PolymeshAssociation/polymesh-sdk/blob/88db4a911/src/api/client/types.ts#L174)

___

### blockNumber

• **blockNumber**: `BigNumber`

#### Inherited from

[BaseHistoricAssetTransaction](../BaseHistoricAssetTransaction/BaseHistoricAssetTransaction.md).[blockNumber](../BaseHistoricAssetTransaction/BaseHistoricAssetTransaction.md#blocknumber)

#### Defined in

[api/client/types.ts:173](https://github.com/PolymeshAssociation/polymesh-sdk/blob/88db4a911/src/api/client/types.ts#L173)

___

### event

• **event**: [`EventIdEnum`](../../../../../../enums/Types/EventIdEnum/EventIdEnum.md)

Event identifying the type of transaction

#### Inherited from

[BaseHistoricAssetTransaction](../BaseHistoricAssetTransaction/BaseHistoricAssetTransaction.md).[event](../BaseHistoricAssetTransaction/BaseHistoricAssetTransaction.md#event)

#### Defined in

[api/entities/Asset/types.ts:162](https://github.com/PolymeshAssociation/polymesh-sdk/blob/88db4a911/src/api/entities/Asset/types.ts#L162)

___

### eventIndex

• **eventIndex**: `BigNumber`

#### Inherited from

[BaseHistoricAssetTransaction](../BaseHistoricAssetTransaction/BaseHistoricAssetTransaction.md).[eventIndex](../BaseHistoricAssetTransaction/BaseHistoricAssetTransaction.md#eventindex)

#### Defined in

[api/client/types.ts:176](https://github.com/PolymeshAssociation/polymesh-sdk/blob/88db4a911/src/api/client/types.ts#L176)

___

### extrinsicIndex

• **extrinsicIndex**: `BigNumber`

Index value of the extrinsic which led to the Asset transaction within the `blockNumber` block

#### Inherited from

[BaseHistoricAssetTransaction](../BaseHistoricAssetTransaction/BaseHistoricAssetTransaction.md).[extrinsicIndex](../BaseHistoricAssetTransaction/BaseHistoricAssetTransaction.md#extrinsicindex)

#### Defined in

[api/entities/Asset/types.ts:167](https://github.com/PolymeshAssociation/polymesh-sdk/blob/88db4a911/src/api/entities/Asset/types.ts#L167)

___

### from

• **from**: ``null`` \| [`NumberedPortfolio`](../../../../../../classes/API/Entities/NumberedPortfolio/NumberedPortfolio.md) \| [`DefaultPortfolio`](../../../../../../classes/API/Entities/DefaultPortfolio/DefaultPortfolio.md)

Origin portfolio involved in the transaction. This value will be null when the `event` value is `Issued`

#### Inherited from

[BaseHistoricAssetTransaction](../BaseHistoricAssetTransaction/BaseHistoricAssetTransaction.md).[from](../BaseHistoricAssetTransaction/BaseHistoricAssetTransaction.md#from)

#### Defined in

[api/entities/Asset/types.ts:153](https://github.com/PolymeshAssociation/polymesh-sdk/blob/88db4a911/src/api/entities/Asset/types.ts#L153)

___

### fundingRound

• `Optional` **fundingRound**: `string`

Name of the funding round (if provided while issuing the Asset). This value is present only when the value of `event` is `Issued`

#### Inherited from

[BaseHistoricAssetTransaction](../BaseHistoricAssetTransaction/BaseHistoricAssetTransaction.md).[fundingRound](../BaseHistoricAssetTransaction/BaseHistoricAssetTransaction.md#fundinground)

#### Defined in

[api/entities/Asset/types.ts:172](https://github.com/PolymeshAssociation/polymesh-sdk/blob/88db4a911/src/api/entities/Asset/types.ts#L172)

___

### instructionId

• `Optional` **instructionId**: `BigNumber`

ID of the instruction being executed. This value is present only when the value of `event` is `Transfer`

#### Inherited from

[BaseHistoricAssetTransaction](../BaseHistoricAssetTransaction/BaseHistoricAssetTransaction.md).[instructionId](../BaseHistoricAssetTransaction/BaseHistoricAssetTransaction.md#instructionid)

#### Defined in

[api/entities/Asset/types.ts:176](https://github.com/PolymeshAssociation/polymesh-sdk/blob/88db4a911/src/api/entities/Asset/types.ts#L176)

___

### instructionMemo

• `Optional` **instructionMemo**: `string`

Memo provided against the executed instruction. This value is present only when the value of `event` is `Transfer`

#### Inherited from

[BaseHistoricAssetTransaction](../BaseHistoricAssetTransaction/BaseHistoricAssetTransaction.md).[instructionMemo](../BaseHistoricAssetTransaction/BaseHistoricAssetTransaction.md#instructionmemo)

#### Defined in

[api/entities/Asset/types.ts:180](https://github.com/PolymeshAssociation/polymesh-sdk/blob/88db4a911/src/api/entities/Asset/types.ts#L180)

___

### to

• **to**: ``null`` \| [`NumberedPortfolio`](../../../../../../classes/API/Entities/NumberedPortfolio/NumberedPortfolio.md) \| [`DefaultPortfolio`](../../../../../../classes/API/Entities/DefaultPortfolio/DefaultPortfolio.md)

Destination portfolio involved in the transaction . This value will be null when the `event` value is `Redeemed`

#### Inherited from

[BaseHistoricAssetTransaction](../BaseHistoricAssetTransaction/BaseHistoricAssetTransaction.md).[to](../BaseHistoricAssetTransaction/BaseHistoricAssetTransaction.md#to)

#### Defined in

[api/entities/Asset/types.ts:157](https://github.com/PolymeshAssociation/polymesh-sdk/blob/88db4a911/src/api/entities/Asset/types.ts#L157)
