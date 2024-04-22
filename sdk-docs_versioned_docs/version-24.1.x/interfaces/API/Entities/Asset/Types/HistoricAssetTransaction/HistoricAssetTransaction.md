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

[api/entities/Asset/types.ts:138](https://github.com/PolymeshAssociation/polymesh-sdk/blob/968f8d70c/src/api/entities/Asset/types.ts#L138)

___

### asset

• **asset**: [`FungibleAsset`](../../../../../../classes/API/Entities/Asset/Fungible/FungibleAsset.md)

#### Defined in

[api/entities/Asset/types.ts:133](https://github.com/PolymeshAssociation/polymesh-sdk/blob/968f8d70c/src/api/entities/Asset/types.ts#L133)

___

### blockDate

• **blockDate**: `Date`

#### Inherited from

[BaseHistoricAssetTransaction](../BaseHistoricAssetTransaction/BaseHistoricAssetTransaction.md).[blockDate](../BaseHistoricAssetTransaction/BaseHistoricAssetTransaction.md#blockdate)

#### Defined in

[types/index.ts:761](https://github.com/PolymeshAssociation/polymesh-sdk/blob/968f8d70c/src/types/index.ts#L761)

___

### blockHash

• **blockHash**: `string`

#### Inherited from

[BaseHistoricAssetTransaction](../BaseHistoricAssetTransaction/BaseHistoricAssetTransaction.md).[blockHash](../BaseHistoricAssetTransaction/BaseHistoricAssetTransaction.md#blockhash)

#### Defined in

[types/index.ts:760](https://github.com/PolymeshAssociation/polymesh-sdk/blob/968f8d70c/src/types/index.ts#L760)

___

### blockNumber

• **blockNumber**: `BigNumber`

#### Inherited from

[BaseHistoricAssetTransaction](../BaseHistoricAssetTransaction/BaseHistoricAssetTransaction.md).[blockNumber](../BaseHistoricAssetTransaction/BaseHistoricAssetTransaction.md#blocknumber)

#### Defined in

[types/index.ts:759](https://github.com/PolymeshAssociation/polymesh-sdk/blob/968f8d70c/src/types/index.ts#L759)

___

### event

• **event**: [`EventIdEnum`](../../../../../../enums/Types/EventIdEnum/EventIdEnum.md)

Event identifying the type of transaction

#### Inherited from

[BaseHistoricAssetTransaction](../BaseHistoricAssetTransaction/BaseHistoricAssetTransaction.md).[event](../BaseHistoricAssetTransaction/BaseHistoricAssetTransaction.md#event)

#### Defined in

[api/entities/Asset/types.ts:111](https://github.com/PolymeshAssociation/polymesh-sdk/blob/968f8d70c/src/api/entities/Asset/types.ts#L111)

___

### eventIndex

• **eventIndex**: `BigNumber`

#### Inherited from

[BaseHistoricAssetTransaction](../BaseHistoricAssetTransaction/BaseHistoricAssetTransaction.md).[eventIndex](../BaseHistoricAssetTransaction/BaseHistoricAssetTransaction.md#eventindex)

#### Defined in

[types/index.ts:762](https://github.com/PolymeshAssociation/polymesh-sdk/blob/968f8d70c/src/types/index.ts#L762)

___

### extrinsicIndex

• **extrinsicIndex**: `BigNumber`

Index value of the extrinsic which led to the Asset transaction within the `blockNumber` block

#### Inherited from

[BaseHistoricAssetTransaction](../BaseHistoricAssetTransaction/BaseHistoricAssetTransaction.md).[extrinsicIndex](../BaseHistoricAssetTransaction/BaseHistoricAssetTransaction.md#extrinsicindex)

#### Defined in

[api/entities/Asset/types.ts:116](https://github.com/PolymeshAssociation/polymesh-sdk/blob/968f8d70c/src/api/entities/Asset/types.ts#L116)

___

### from

• **from**: ``null`` \| [`NumberedPortfolio`](../../../../../../classes/API/Entities/NumberedPortfolio/NumberedPortfolio.md) \| [`DefaultPortfolio`](../../../../../../classes/API/Entities/DefaultPortfolio/DefaultPortfolio.md)

Origin portfolio involved in the transaction. This value will be null when the `event` value is `Issued`

#### Inherited from

[BaseHistoricAssetTransaction](../BaseHistoricAssetTransaction/BaseHistoricAssetTransaction.md).[from](../BaseHistoricAssetTransaction/BaseHistoricAssetTransaction.md#from)

#### Defined in

[api/entities/Asset/types.ts:102](https://github.com/PolymeshAssociation/polymesh-sdk/blob/968f8d70c/src/api/entities/Asset/types.ts#L102)

___

### fundingRound

• `Optional` **fundingRound**: `string`

Name of the funding round (if provided while issuing the Asset). This value is present only when the value of `event` is `Issued`

#### Inherited from

[BaseHistoricAssetTransaction](../BaseHistoricAssetTransaction/BaseHistoricAssetTransaction.md).[fundingRound](../BaseHistoricAssetTransaction/BaseHistoricAssetTransaction.md#fundinground)

#### Defined in

[api/entities/Asset/types.ts:121](https://github.com/PolymeshAssociation/polymesh-sdk/blob/968f8d70c/src/api/entities/Asset/types.ts#L121)

___

### instructionId

• `Optional` **instructionId**: `BigNumber`

ID of the instruction being executed. This value is present only when the value of `event` is `Transfer`

#### Inherited from

[BaseHistoricAssetTransaction](../BaseHistoricAssetTransaction/BaseHistoricAssetTransaction.md).[instructionId](../BaseHistoricAssetTransaction/BaseHistoricAssetTransaction.md#instructionid)

#### Defined in

[api/entities/Asset/types.ts:125](https://github.com/PolymeshAssociation/polymesh-sdk/blob/968f8d70c/src/api/entities/Asset/types.ts#L125)

___

### instructionMemo

• `Optional` **instructionMemo**: `string`

Memo provided against the executed instruction. This value is present only when the value of `event` is `Transfer`

#### Inherited from

[BaseHistoricAssetTransaction](../BaseHistoricAssetTransaction/BaseHistoricAssetTransaction.md).[instructionMemo](../BaseHistoricAssetTransaction/BaseHistoricAssetTransaction.md#instructionmemo)

#### Defined in

[api/entities/Asset/types.ts:129](https://github.com/PolymeshAssociation/polymesh-sdk/blob/968f8d70c/src/api/entities/Asset/types.ts#L129)

___

### to

• **to**: ``null`` \| [`NumberedPortfolio`](../../../../../../classes/API/Entities/NumberedPortfolio/NumberedPortfolio.md) \| [`DefaultPortfolio`](../../../../../../classes/API/Entities/DefaultPortfolio/DefaultPortfolio.md)

Destination portfolio involved in the transaction . This value will be null when the `event` value is `Redeemed`

#### Inherited from

[BaseHistoricAssetTransaction](../BaseHistoricAssetTransaction/BaseHistoricAssetTransaction.md).[to](../BaseHistoricAssetTransaction/BaseHistoricAssetTransaction.md#to)

#### Defined in

[api/entities/Asset/types.ts:106](https://github.com/PolymeshAssociation/polymesh-sdk/blob/968f8d70c/src/api/entities/Asset/types.ts#L106)
