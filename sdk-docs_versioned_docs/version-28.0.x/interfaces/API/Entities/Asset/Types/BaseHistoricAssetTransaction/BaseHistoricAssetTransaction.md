---
id: "BaseHistoricAssetTransaction"
title: "Interface: BaseHistoricAssetTransaction"
sidebar_label: "BaseHistoricAssetTransaction"
---

[api/entities/Asset/types](../../../../../../modules/API/Entities/Asset/Types/Types.md).BaseHistoricAssetTransaction

## Hierarchy

- [`EventIdentifier`](../../../../Client/Types/EventIdentifier/EventIdentifier.md)

  ↳ **`BaseHistoricAssetTransaction`**

  ↳↳ [`HistoricAssetTransaction`](../HistoricAssetTransaction/HistoricAssetTransaction.md)

  ↳↳ [`HistoricNftTransaction`](../HistoricNftTransaction/HistoricNftTransaction.md)

## Properties

### blockDate

• **blockDate**: `Date`

#### Inherited from

[EventIdentifier](../../../../Client/Types/EventIdentifier/EventIdentifier.md).[blockDate](../../../../Client/Types/EventIdentifier/EventIdentifier.md#blockdate)

#### Defined in

[api/client/types.ts:179](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/client/types.ts#L179)

___

### blockHash

• **blockHash**: `string`

#### Inherited from

[EventIdentifier](../../../../Client/Types/EventIdentifier/EventIdentifier.md).[blockHash](../../../../Client/Types/EventIdentifier/EventIdentifier.md#blockhash)

#### Defined in

[api/client/types.ts:178](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/client/types.ts#L178)

___

### blockNumber

• **blockNumber**: `BigNumber`

#### Inherited from

[EventIdentifier](../../../../Client/Types/EventIdentifier/EventIdentifier.md).[blockNumber](../../../../Client/Types/EventIdentifier/EventIdentifier.md#blocknumber)

#### Defined in

[api/client/types.ts:177](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/client/types.ts#L177)

___

### event

• **event**: [`EventIdEnum`](../../../../../../enums/Types/EventIdEnum/EventIdEnum.md)

Event identifying the type of transaction

#### Defined in

[api/entities/Asset/types.ts:168](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/Asset/types.ts#L168)

___

### eventIndex

• **eventIndex**: `BigNumber`

#### Inherited from

[EventIdentifier](../../../../Client/Types/EventIdentifier/EventIdentifier.md).[eventIndex](../../../../Client/Types/EventIdentifier/EventIdentifier.md#eventindex)

#### Defined in

[api/client/types.ts:180](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/client/types.ts#L180)

___

### extrinsicIndex

• **extrinsicIndex**: `BigNumber`

Index value of the extrinsic which led to the Asset transaction within the `blockNumber` block

#### Defined in

[api/entities/Asset/types.ts:173](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/Asset/types.ts#L173)

___

### from

• **from**: ``null`` \| [`DefaultPortfolio`](../../../../../../classes/API/Entities/DefaultPortfolio/DefaultPortfolio.md) \| [`NumberedPortfolio`](../../../../../../classes/API/Entities/NumberedPortfolio/NumberedPortfolio.md)

Origin portfolio involved in the transaction. This value will be null when the `event` value is `Issued`

#### Defined in

[api/entities/Asset/types.ts:159](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/Asset/types.ts#L159)

___

### fundingRound

• `Optional` **fundingRound**: `string`

Name of the funding round (if provided while issuing the Asset). This value is present only when the value of `event` is `Issued`

#### Defined in

[api/entities/Asset/types.ts:178](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/Asset/types.ts#L178)

___

### instructionId

• `Optional` **instructionId**: `BigNumber`

ID of the instruction being executed. This value is present only when the value of `event` is `Transfer`

#### Defined in

[api/entities/Asset/types.ts:182](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/Asset/types.ts#L182)

___

### instructionMemo

• `Optional` **instructionMemo**: `string`

Memo provided against the executed instruction. This value is present only when the value of `event` is `Transfer`

#### Defined in

[api/entities/Asset/types.ts:186](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/Asset/types.ts#L186)

___

### to

• **to**: ``null`` \| [`DefaultPortfolio`](../../../../../../classes/API/Entities/DefaultPortfolio/DefaultPortfolio.md) \| [`NumberedPortfolio`](../../../../../../classes/API/Entities/NumberedPortfolio/NumberedPortfolio.md)

Destination portfolio involved in the transaction . This value will be null when the `event` value is `Redeemed`

#### Defined in

[api/entities/Asset/types.ts:163](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/Asset/types.ts#L163)
