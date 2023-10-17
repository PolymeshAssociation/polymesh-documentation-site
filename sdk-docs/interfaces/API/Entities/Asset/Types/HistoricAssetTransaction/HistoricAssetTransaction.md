---
id: "HistoricAssetTransaction"
title: "Interface: HistoricAssetTransaction"
sidebar_label: "HistoricAssetTransaction"
---

[api/entities/Asset/types](../../../../../../modules/API/Entities/Asset/Types/Types.md).HistoricAssetTransaction

## Hierarchy

- [`EventIdentifier`](../../../../../Types/EventIdentifier/EventIdentifier.md)

  ↳ **`HistoricAssetTransaction`**

## Properties

### amount

• **amount**: `BigNumber`

#### Defined in

[api/entities/Asset/types.ts:83](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b6f9fb883/src/api/entities/Asset/types.ts#L83)

___

### asset

• **asset**: [`FungibleAsset`](../../../../../../classes/API/Entities/Asset/Fungible/FungibleAsset.md)

#### Defined in

[api/entities/Asset/types.ts:82](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b6f9fb883/src/api/entities/Asset/types.ts#L82)

___

### blockDate

• **blockDate**: `Date`

#### Inherited from

[EventIdentifier](../../../../../Types/EventIdentifier/EventIdentifier.md).[blockDate](../../../../../Types/EventIdentifier/EventIdentifier.md#blockdate)

#### Defined in

[types/index.ts:734](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b6f9fb883/src/types/index.ts#L734)

___

### blockHash

• **blockHash**: `string`

#### Inherited from

[EventIdentifier](../../../../../Types/EventIdentifier/EventIdentifier.md).[blockHash](../../../../../Types/EventIdentifier/EventIdentifier.md#blockhash)

#### Defined in

[types/index.ts:733](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b6f9fb883/src/types/index.ts#L733)

___

### blockNumber

• **blockNumber**: `BigNumber`

#### Inherited from

[EventIdentifier](../../../../../Types/EventIdentifier/EventIdentifier.md).[blockNumber](../../../../../Types/EventIdentifier/EventIdentifier.md#blocknumber)

#### Defined in

[types/index.ts:732](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b6f9fb883/src/types/index.ts#L732)

___

### event

• **event**: [`EventIdEnum`](../../../../../../enums/Types/EventIdEnum/EventIdEnum.md)

#### Defined in

[api/entities/Asset/types.ts:86](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b6f9fb883/src/api/entities/Asset/types.ts#L86)

___

### eventIndex

• **eventIndex**: `BigNumber`

#### Inherited from

[EventIdentifier](../../../../../Types/EventIdentifier/EventIdentifier.md).[eventIndex](../../../../../Types/EventIdentifier/EventIdentifier.md#eventindex)

#### Defined in

[types/index.ts:735](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b6f9fb883/src/types/index.ts#L735)

___

### extrinsicIndex

• **extrinsicIndex**: `BigNumber`

#### Defined in

[api/entities/Asset/types.ts:87](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b6f9fb883/src/api/entities/Asset/types.ts#L87)

___

### from

• **from**: ``null`` \| [`NumberedPortfolio`](../../../../../../classes/API/Entities/NumberedPortfolio/NumberedPortfolio.md) \| [`DefaultPortfolio`](../../../../../../classes/API/Entities/DefaultPortfolio/DefaultPortfolio.md)

#### Defined in

[api/entities/Asset/types.ts:84](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b6f9fb883/src/api/entities/Asset/types.ts#L84)

___

### to

• **to**: ``null`` \| [`NumberedPortfolio`](../../../../../../classes/API/Entities/NumberedPortfolio/NumberedPortfolio.md) \| [`DefaultPortfolio`](../../../../../../classes/API/Entities/DefaultPortfolio/DefaultPortfolio.md)

#### Defined in

[api/entities/Asset/types.ts:85](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b6f9fb883/src/api/entities/Asset/types.ts#L85)
