---
id: "HistoricNftTransaction"
title: "Interface: HistoricNftTransaction"
sidebar_label: "HistoricNftTransaction"
---

[api/entities/Asset/types](../../../../../../modules/API/Entities/Asset/Types/Types.md).HistoricNftTransaction

## Hierarchy

- [`BaseHistoricAssetTransaction`](../BaseHistoricAssetTransaction/BaseHistoricAssetTransaction.md)

  ↳ **`HistoricNftTransaction`**

## Properties

### asset

• **asset**: [`NftCollection`](../../../../../../classes/API/Entities/Asset/NonFungible/NftCollection/NftCollection.md)

#### Defined in

[api/entities/Asset/types.ts:194](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9e72221/src/api/entities/Asset/types.ts#L194)

___

### blockDate

• **blockDate**: `Date`

#### Inherited from

[BaseHistoricAssetTransaction](../BaseHistoricAssetTransaction/BaseHistoricAssetTransaction.md).[blockDate](../BaseHistoricAssetTransaction/BaseHistoricAssetTransaction.md#blockdate)

#### Defined in

[api/client/types.ts:179](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9e72221/src/api/client/types.ts#L179)

___

### blockHash

• **blockHash**: `string`

#### Inherited from

[BaseHistoricAssetTransaction](../BaseHistoricAssetTransaction/BaseHistoricAssetTransaction.md).[blockHash](../BaseHistoricAssetTransaction/BaseHistoricAssetTransaction.md#blockhash)

#### Defined in

[api/client/types.ts:178](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9e72221/src/api/client/types.ts#L178)

___

### blockNumber

• **blockNumber**: `BigNumber`

#### Inherited from

[BaseHistoricAssetTransaction](../BaseHistoricAssetTransaction/BaseHistoricAssetTransaction.md).[blockNumber](../BaseHistoricAssetTransaction/BaseHistoricAssetTransaction.md#blocknumber)

#### Defined in

[api/client/types.ts:177](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9e72221/src/api/client/types.ts#L177)

___

### event

• **event**: [`EventIdEnum`](../../../../../../enums/Types/EventIdEnum/EventIdEnum.md)

Event identifying the type of transaction

#### Inherited from

[BaseHistoricAssetTransaction](../BaseHistoricAssetTransaction/BaseHistoricAssetTransaction.md).[event](../BaseHistoricAssetTransaction/BaseHistoricAssetTransaction.md#event)

#### Defined in

[api/entities/Asset/types.ts:163](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9e72221/src/api/entities/Asset/types.ts#L163)

___

### eventIndex

• **eventIndex**: `BigNumber`

#### Inherited from

[BaseHistoricAssetTransaction](../BaseHistoricAssetTransaction/BaseHistoricAssetTransaction.md).[eventIndex](../BaseHistoricAssetTransaction/BaseHistoricAssetTransaction.md#eventindex)

#### Defined in

[api/client/types.ts:180](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9e72221/src/api/client/types.ts#L180)

___

### extrinsicIndex

• **extrinsicIndex**: `BigNumber`

Index value of the extrinsic which led to the Asset transaction within the `blockNumber` block

#### Inherited from

[BaseHistoricAssetTransaction](../BaseHistoricAssetTransaction/BaseHistoricAssetTransaction.md).[extrinsicIndex](../BaseHistoricAssetTransaction/BaseHistoricAssetTransaction.md#extrinsicindex)

#### Defined in

[api/entities/Asset/types.ts:168](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9e72221/src/api/entities/Asset/types.ts#L168)

___

### from

• **from**: ``null`` \| [`NumberedPortfolio`](../../../../../../classes/API/Entities/NumberedPortfolio/NumberedPortfolio.md) \| [`DefaultPortfolio`](../../../../../../classes/API/Entities/DefaultPortfolio/DefaultPortfolio.md)

Origin portfolio involved in the transaction. This value will be null when the `event` value is `Issued`

#### Inherited from

[BaseHistoricAssetTransaction](../BaseHistoricAssetTransaction/BaseHistoricAssetTransaction.md).[from](../BaseHistoricAssetTransaction/BaseHistoricAssetTransaction.md#from)

#### Defined in

[api/entities/Asset/types.ts:154](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9e72221/src/api/entities/Asset/types.ts#L154)

___

### fundingRound

• `Optional` **fundingRound**: `string`

Name of the funding round (if provided while issuing the Asset). This value is present only when the value of `event` is `Issued`

#### Inherited from

[BaseHistoricAssetTransaction](../BaseHistoricAssetTransaction/BaseHistoricAssetTransaction.md).[fundingRound](../BaseHistoricAssetTransaction/BaseHistoricAssetTransaction.md#fundinground)

#### Defined in

[api/entities/Asset/types.ts:173](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9e72221/src/api/entities/Asset/types.ts#L173)

___

### instructionId

• `Optional` **instructionId**: `BigNumber`

ID of the instruction being executed. This value is present only when the value of `event` is `Transfer`

#### Inherited from

[BaseHistoricAssetTransaction](../BaseHistoricAssetTransaction/BaseHistoricAssetTransaction.md).[instructionId](../BaseHistoricAssetTransaction/BaseHistoricAssetTransaction.md#instructionid)

#### Defined in

[api/entities/Asset/types.ts:177](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9e72221/src/api/entities/Asset/types.ts#L177)

___

### instructionMemo

• `Optional` **instructionMemo**: `string`

Memo provided against the executed instruction. This value is present only when the value of `event` is `Transfer`

#### Inherited from

[BaseHistoricAssetTransaction](../BaseHistoricAssetTransaction/BaseHistoricAssetTransaction.md).[instructionMemo](../BaseHistoricAssetTransaction/BaseHistoricAssetTransaction.md#instructionmemo)

#### Defined in

[api/entities/Asset/types.ts:181](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9e72221/src/api/entities/Asset/types.ts#L181)

___

### nfts

• **nfts**: [`Nft`](../../../../../../classes/API/Entities/Asset/NonFungible/Nft/Nft.md)[]

The specific NFTs involved in the transaction

#### Defined in

[api/entities/Asset/types.ts:199](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9e72221/src/api/entities/Asset/types.ts#L199)

___

### to

• **to**: ``null`` \| [`NumberedPortfolio`](../../../../../../classes/API/Entities/NumberedPortfolio/NumberedPortfolio.md) \| [`DefaultPortfolio`](../../../../../../classes/API/Entities/DefaultPortfolio/DefaultPortfolio.md)

Destination portfolio involved in the transaction . This value will be null when the `event` value is `Redeemed`

#### Inherited from

[BaseHistoricAssetTransaction](../BaseHistoricAssetTransaction/BaseHistoricAssetTransaction.md).[to](../BaseHistoricAssetTransaction/BaseHistoricAssetTransaction.md#to)

#### Defined in

[api/entities/Asset/types.ts:158](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9e72221/src/api/entities/Asset/types.ts#L158)
