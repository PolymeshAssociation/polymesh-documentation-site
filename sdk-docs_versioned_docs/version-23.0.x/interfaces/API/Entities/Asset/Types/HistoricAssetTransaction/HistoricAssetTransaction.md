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

[api/entities/Asset/types.ts:90](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2c78f6c34/src/api/entities/Asset/types.ts#L90)

___

### asset

• **asset**: [`FungibleAsset`](../../../../../../classes/API/Entities/Asset/Fungible/FungibleAsset.md)

#### Defined in

[api/entities/Asset/types.ts:89](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2c78f6c34/src/api/entities/Asset/types.ts#L89)

___

### blockDate

• **blockDate**: `Date`

#### Inherited from

[EventIdentifier](../../../../../Types/EventIdentifier/EventIdentifier.md).[blockDate](../../../../../Types/EventIdentifier/EventIdentifier.md#blockdate)

#### Defined in

[types/index.ts:755](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2c78f6c34/src/types/index.ts#L755)

___

### blockHash

• **blockHash**: `string`

#### Inherited from

[EventIdentifier](../../../../../Types/EventIdentifier/EventIdentifier.md).[blockHash](../../../../../Types/EventIdentifier/EventIdentifier.md#blockhash)

#### Defined in

[types/index.ts:754](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2c78f6c34/src/types/index.ts#L754)

___

### blockNumber

• **blockNumber**: `BigNumber`

#### Inherited from

[EventIdentifier](../../../../../Types/EventIdentifier/EventIdentifier.md).[blockNumber](../../../../../Types/EventIdentifier/EventIdentifier.md#blocknumber)

#### Defined in

[types/index.ts:753](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2c78f6c34/src/types/index.ts#L753)

___

### event

• **event**: [`EventIdEnum`](../../../../../../enums/Types/EventIdEnum/EventIdEnum.md)

#### Defined in

[api/entities/Asset/types.ts:93](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2c78f6c34/src/api/entities/Asset/types.ts#L93)

___

### eventIndex

• **eventIndex**: `BigNumber`

#### Inherited from

[EventIdentifier](../../../../../Types/EventIdentifier/EventIdentifier.md).[eventIndex](../../../../../Types/EventIdentifier/EventIdentifier.md#eventindex)

#### Defined in

[types/index.ts:756](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2c78f6c34/src/types/index.ts#L756)

___

### extrinsicIndex

• **extrinsicIndex**: `BigNumber`

#### Defined in

[api/entities/Asset/types.ts:94](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2c78f6c34/src/api/entities/Asset/types.ts#L94)

___

### from

• **from**: ``null`` \| [`NumberedPortfolio`](../../../../../../classes/API/Entities/NumberedPortfolio/NumberedPortfolio.md) \| [`DefaultPortfolio`](../../../../../../classes/API/Entities/DefaultPortfolio/DefaultPortfolio.md)

#### Defined in

[api/entities/Asset/types.ts:91](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2c78f6c34/src/api/entities/Asset/types.ts#L91)

___

### to

• **to**: ``null`` \| [`NumberedPortfolio`](../../../../../../classes/API/Entities/NumberedPortfolio/NumberedPortfolio.md) \| [`DefaultPortfolio`](../../../../../../classes/API/Entities/DefaultPortfolio/DefaultPortfolio.md)

#### Defined in

[api/entities/Asset/types.ts:92](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2c78f6c34/src/api/entities/Asset/types.ts#L92)
