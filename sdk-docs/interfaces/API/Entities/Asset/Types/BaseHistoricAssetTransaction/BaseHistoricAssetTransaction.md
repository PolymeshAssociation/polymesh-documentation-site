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

[api/client/types.ts:176](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c53723bab/src/api/client/types.ts#L176)

___

### blockHash

• **blockHash**: `string`

#### Inherited from

[EventIdentifier](../../../../Client/Types/EventIdentifier/EventIdentifier.md).[blockHash](../../../../Client/Types/EventIdentifier/EventIdentifier.md#blockhash)

#### Defined in

[api/client/types.ts:175](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c53723bab/src/api/client/types.ts#L175)

___

### blockNumber

• **blockNumber**: `BigNumber`

#### Inherited from

[EventIdentifier](../../../../Client/Types/EventIdentifier/EventIdentifier.md).[blockNumber](../../../../Client/Types/EventIdentifier/EventIdentifier.md#blocknumber)

#### Defined in

[api/client/types.ts:174](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c53723bab/src/api/client/types.ts#L174)

___

### event

• **event**: [`EventIdEnum`](../../../../../../enums/Types/EventIdEnum/EventIdEnum.md)

Event identifying the type of transaction

#### Defined in

[api/entities/Asset/types.ts:162](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c53723bab/src/api/entities/Asset/types.ts#L162)

___

### eventIndex

• **eventIndex**: `BigNumber`

#### Inherited from

[EventIdentifier](../../../../Client/Types/EventIdentifier/EventIdentifier.md).[eventIndex](../../../../Client/Types/EventIdentifier/EventIdentifier.md#eventindex)

#### Defined in

[api/client/types.ts:177](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c53723bab/src/api/client/types.ts#L177)

___

### extrinsicIndex

• **extrinsicIndex**: `BigNumber`

Index value of the extrinsic which led to the Asset transaction within the `blockNumber` block

#### Defined in

[api/entities/Asset/types.ts:167](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c53723bab/src/api/entities/Asset/types.ts#L167)

___

### from

• **from**: ``null`` \| [`NumberedPortfolio`](../../../../../../classes/API/Entities/NumberedPortfolio/NumberedPortfolio.md) \| [`DefaultPortfolio`](../../../../../../classes/API/Entities/DefaultPortfolio/DefaultPortfolio.md)

Origin portfolio involved in the transaction. This value will be null when the `event` value is `Issued`

#### Defined in

[api/entities/Asset/types.ts:153](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c53723bab/src/api/entities/Asset/types.ts#L153)

___

### fundingRound

• `Optional` **fundingRound**: `string`

Name of the funding round (if provided while issuing the Asset). This value is present only when the value of `event` is `Issued`

#### Defined in

[api/entities/Asset/types.ts:172](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c53723bab/src/api/entities/Asset/types.ts#L172)

___

### instructionId

• `Optional` **instructionId**: `BigNumber`

ID of the instruction being executed. This value is present only when the value of `event` is `Transfer`

#### Defined in

[api/entities/Asset/types.ts:176](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c53723bab/src/api/entities/Asset/types.ts#L176)

___

### instructionMemo

• `Optional` **instructionMemo**: `string`

Memo provided against the executed instruction. This value is present only when the value of `event` is `Transfer`

#### Defined in

[api/entities/Asset/types.ts:180](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c53723bab/src/api/entities/Asset/types.ts#L180)

___

### to

• **to**: ``null`` \| [`NumberedPortfolio`](../../../../../../classes/API/Entities/NumberedPortfolio/NumberedPortfolio.md) \| [`DefaultPortfolio`](../../../../../../classes/API/Entities/DefaultPortfolio/DefaultPortfolio.md)

Destination portfolio involved in the transaction . This value will be null when the `event` value is `Redeemed`

#### Defined in

[api/entities/Asset/types.ts:157](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c53723bab/src/api/entities/Asset/types.ts#L157)
