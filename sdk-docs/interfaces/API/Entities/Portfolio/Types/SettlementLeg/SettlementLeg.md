---
id: "SettlementLeg"
title: "Interface: SettlementLeg"
sidebar_label: "SettlementLeg"
---

[api/entities/Portfolio/types](../../../../../../modules/API/Entities/Portfolio/Types/Types.md).SettlementLeg

## Hierarchy

- [`Leg`](../../../Instruction/Types/Leg/Leg.md)

  ↳ **`SettlementLeg`**

## Properties

### amount

• **amount**: `BigNumber`

#### Inherited from

[Leg](../../../Instruction/Types/Leg/Leg.md).[amount](../../../Instruction/Types/Leg/Leg.md#amount)

#### Defined in

[api/entities/Instruction/types.ts:49](https://github.com/PolymeshAssociation/polymesh-sdk/blob/31fdce23/src/api/entities/Instruction/types.ts#L49)

___

### asset

• **asset**: [`Asset`](../../../../../../classes/API/Entities/Asset/Asset.md)

#### Inherited from

[Leg](../../../Instruction/Types/Leg/Leg.md).[asset](../../../Instruction/Types/Leg/Leg.md#asset)

#### Defined in

[api/entities/Instruction/types.ts:50](https://github.com/PolymeshAssociation/polymesh-sdk/blob/31fdce23/src/api/entities/Instruction/types.ts#L50)

___

### direction

• **direction**: [`SettlementDirectionEnum`](../../../../../../enums/Types/SettlementDirectionEnum/SettlementDirectionEnum.md)

#### Defined in

[api/entities/Portfolio/types.ts:15](https://github.com/PolymeshAssociation/polymesh-sdk/blob/31fdce23/src/api/entities/Portfolio/types.ts#L15)

___

### from

• **from**: [`NumberedPortfolio`](../../../../../../classes/API/Entities/NumberedPortfolio/NumberedPortfolio.md) \| [`DefaultPortfolio`](../../../../../../classes/API/Entities/DefaultPortfolio/DefaultPortfolio.md)

#### Inherited from

[Leg](../../../Instruction/Types/Leg/Leg.md).[from](../../../Instruction/Types/Leg/Leg.md#from)

#### Defined in

[api/entities/Instruction/types.ts:47](https://github.com/PolymeshAssociation/polymesh-sdk/blob/31fdce23/src/api/entities/Instruction/types.ts#L47)

___

### to

• **to**: [`NumberedPortfolio`](../../../../../../classes/API/Entities/NumberedPortfolio/NumberedPortfolio.md) \| [`DefaultPortfolio`](../../../../../../classes/API/Entities/DefaultPortfolio/DefaultPortfolio.md)

#### Inherited from

[Leg](../../../Instruction/Types/Leg/Leg.md).[to](../../../Instruction/Types/Leg/Leg.md#to)

#### Defined in

[api/entities/Instruction/types.ts:48](https://github.com/PolymeshAssociation/polymesh-sdk/blob/31fdce23/src/api/entities/Instruction/types.ts#L48)
