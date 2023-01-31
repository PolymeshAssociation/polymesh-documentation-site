---
id: "SettlementLeg"
title: "Interface: SettlementLeg"
sidebar_label: "SettlementLeg"
---

# Interface: SettlementLeg

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

[api/entities/Instruction/types.ts:43](https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/api/entities/Instruction/types.ts#L43)

___

### asset

• **asset**: [`Asset`](../../../../../../classes/API/Entities/Asset/Asset.md)

#### Inherited from

[Leg](../../../Instruction/Types/Leg/Leg.md).[asset](../../../Instruction/Types/Leg/Leg.md#asset)

#### Defined in

[api/entities/Instruction/types.ts:44](https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/api/entities/Instruction/types.ts#L44)

___

### direction

• **direction**: [`SettlementDirectionEnum`](../../../../../../enums/Types/SettlementDirectionEnum/SettlementDirectionEnum.md)

#### Defined in

[api/entities/Portfolio/types.ts:15](https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/api/entities/Portfolio/types.ts#L15)

___

### from

• **from**: [`NumberedPortfolio`](../../../../../../classes/API/Entities/NumberedPortfolio/NumberedPortfolio.md) \| [`DefaultPortfolio`](../../../../../../classes/API/Entities/DefaultPortfolio/DefaultPortfolio.md)

#### Inherited from

[Leg](../../../Instruction/Types/Leg/Leg.md).[from](../../../Instruction/Types/Leg/Leg.md#from)

#### Defined in

[api/entities/Instruction/types.ts:41](https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/api/entities/Instruction/types.ts#L41)

___

### to

• **to**: [`NumberedPortfolio`](../../../../../../classes/API/Entities/NumberedPortfolio/NumberedPortfolio.md) \| [`DefaultPortfolio`](../../../../../../classes/API/Entities/DefaultPortfolio/DefaultPortfolio.md)

#### Inherited from

[Leg](../../../Instruction/Types/Leg/Leg.md).[to](../../../Instruction/Types/Leg/Leg.md#to)

#### Defined in

[api/entities/Instruction/types.ts:42](https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/api/entities/Instruction/types.ts#L42)
