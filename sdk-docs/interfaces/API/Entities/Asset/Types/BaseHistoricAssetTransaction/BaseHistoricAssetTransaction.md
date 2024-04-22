---
id: "BaseHistoricAssetTransaction"
title: "Interface: BaseHistoricAssetTransaction"
sidebar_label: "BaseHistoricAssetTransaction"
---

[api/entities/Asset/types](../../../../../../modules/API/Entities/Asset/Types/Types.md).BaseHistoricAssetTransaction

## Hierarchy

- [`EventIdentifier`](../../../../../Types/EventIdentifier/EventIdentifier.md)

  ↳ **`BaseHistoricAssetTransaction`**

  ↳↳ [`HistoricAssetTransaction`](../HistoricAssetTransaction/HistoricAssetTransaction.md)

  ↳↳ [`HistoricNftTransaction`](../HistoricNftTransaction/HistoricNftTransaction.md)

## Properties

### blockDate

• **blockDate**: `Date`

#### Inherited from

[EventIdentifier](../../../../../Types/EventIdentifier/EventIdentifier.md).[blockDate](../../../../../Types/EventIdentifier/EventIdentifier.md#blockdate)

#### Defined in

[types/index.ts:761](https://github.com/PolymeshAssociation/polymesh-sdk/blob/968f8d70c/src/types/index.ts#L761)

___

### blockHash

• **blockHash**: `string`

#### Inherited from

[EventIdentifier](../../../../../Types/EventIdentifier/EventIdentifier.md).[blockHash](../../../../../Types/EventIdentifier/EventIdentifier.md#blockhash)

#### Defined in

[types/index.ts:760](https://github.com/PolymeshAssociation/polymesh-sdk/blob/968f8d70c/src/types/index.ts#L760)

___

### blockNumber

• **blockNumber**: `BigNumber`

#### Inherited from

[EventIdentifier](../../../../../Types/EventIdentifier/EventIdentifier.md).[blockNumber](../../../../../Types/EventIdentifier/EventIdentifier.md#blocknumber)

#### Defined in

[types/index.ts:759](https://github.com/PolymeshAssociation/polymesh-sdk/blob/968f8d70c/src/types/index.ts#L759)

___

### event

• **event**: [`EventIdEnum`](../../../../../../enums/Types/EventIdEnum/EventIdEnum.md)

Event identifying the type of transaction

#### Defined in

[api/entities/Asset/types.ts:111](https://github.com/PolymeshAssociation/polymesh-sdk/blob/968f8d70c/src/api/entities/Asset/types.ts#L111)

___

### eventIndex

• **eventIndex**: `BigNumber`

#### Inherited from

[EventIdentifier](../../../../../Types/EventIdentifier/EventIdentifier.md).[eventIndex](../../../../../Types/EventIdentifier/EventIdentifier.md#eventindex)

#### Defined in

[types/index.ts:762](https://github.com/PolymeshAssociation/polymesh-sdk/blob/968f8d70c/src/types/index.ts#L762)

___

### extrinsicIndex

• **extrinsicIndex**: `BigNumber`

Index value of the extrinsic which led to the Asset transaction within the `blockNumber` block

#### Defined in

[api/entities/Asset/types.ts:116](https://github.com/PolymeshAssociation/polymesh-sdk/blob/968f8d70c/src/api/entities/Asset/types.ts#L116)

___

### from

• **from**: ``null`` \| [`NumberedPortfolio`](../../../../../../classes/API/Entities/NumberedPortfolio/NumberedPortfolio.md) \| [`DefaultPortfolio`](../../../../../../classes/API/Entities/DefaultPortfolio/DefaultPortfolio.md)

Origin portfolio involved in the transaction. This value will be null when the `event` value is `Issued`

#### Defined in

[api/entities/Asset/types.ts:102](https://github.com/PolymeshAssociation/polymesh-sdk/blob/968f8d70c/src/api/entities/Asset/types.ts#L102)

___

### fundingRound

• `Optional` **fundingRound**: `string`

Name of the funding round (if provided while issuing the Asset). This value is present only when the value of `event` is `Issued`

#### Defined in

[api/entities/Asset/types.ts:121](https://github.com/PolymeshAssociation/polymesh-sdk/blob/968f8d70c/src/api/entities/Asset/types.ts#L121)

___

### instructionId

• `Optional` **instructionId**: `BigNumber`

ID of the instruction being executed. This value is present only when the value of `event` is `Transfer`

#### Defined in

[api/entities/Asset/types.ts:125](https://github.com/PolymeshAssociation/polymesh-sdk/blob/968f8d70c/src/api/entities/Asset/types.ts#L125)

___

### instructionMemo

• `Optional` **instructionMemo**: `string`

Memo provided against the executed instruction. This value is present only when the value of `event` is `Transfer`

#### Defined in

[api/entities/Asset/types.ts:129](https://github.com/PolymeshAssociation/polymesh-sdk/blob/968f8d70c/src/api/entities/Asset/types.ts#L129)

___

### to

• **to**: ``null`` \| [`NumberedPortfolio`](../../../../../../classes/API/Entities/NumberedPortfolio/NumberedPortfolio.md) \| [`DefaultPortfolio`](../../../../../../classes/API/Entities/DefaultPortfolio/DefaultPortfolio.md)

Destination portfolio involved in the transaction . This value will be null when the `event` value is `Redeemed`

#### Defined in

[api/entities/Asset/types.ts:106](https://github.com/PolymeshAssociation/polymesh-sdk/blob/968f8d70c/src/api/entities/Asset/types.ts#L106)
