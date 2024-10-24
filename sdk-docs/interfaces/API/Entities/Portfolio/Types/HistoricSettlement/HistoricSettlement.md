---
id: "HistoricSettlement"
title: "Interface: HistoricSettlement"
sidebar_label: "HistoricSettlement"
---

[api/entities/Portfolio/types](../../../../../../modules/API/Entities/Portfolio/Types/Types.md).HistoricSettlement

## Properties

### accounts

• **accounts**: [`Account`](../../../../../../classes/API/Entities/Account/Account.md)[]

Array of Accounts that participated by affirming the settlement

#### Defined in

[api/entities/Portfolio/types.ts:38](https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/entities/Portfolio/types.ts#L38)

___

### blockHash

• **blockHash**: `string`

#### Defined in

[api/entities/Portfolio/types.ts:33](https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/entities/Portfolio/types.ts#L33)

___

### blockNumber

• **blockNumber**: `BigNumber`

#### Defined in

[api/entities/Portfolio/types.ts:32](https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/entities/Portfolio/types.ts#L32)

___

### instruction

• `Optional` **instruction**: [`Instruction`](../../../../../../classes/API/Entities/Instruction/Instruction.md)

This value is null when depicting portfolio movements

#### Defined in

[api/entities/Portfolio/types.ts:43](https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/entities/Portfolio/types.ts#L43)

___

### legs

• **legs**: [`SettlementLeg`](../../../../../../modules/API/Entities/Portfolio/Types/Types.md#settlementleg)[]

#### Defined in

[api/entities/Portfolio/types.ts:39](https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/entities/Portfolio/types.ts#L39)

___

### status

• **status**: [`InstructionStatusEnum`](../../../../../../enums/Types/InstructionStatusEnum/InstructionStatusEnum.md)

#### Defined in

[api/entities/Portfolio/types.ts:34](https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/entities/Portfolio/types.ts#L34)
