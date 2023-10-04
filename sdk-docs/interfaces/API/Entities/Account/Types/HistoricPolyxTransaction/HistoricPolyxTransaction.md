---
id: "HistoricPolyxTransaction"
title: "Interface: HistoricPolyxTransaction"
sidebar_label: "HistoricPolyxTransaction"
---

[api/entities/Account/types](../../../../../../modules/API/Entities/Account/Types/Types.md).HistoricPolyxTransaction

## Hierarchy

- [`EventIdentifier`](../../../../../Types/EventIdentifier/EventIdentifier.md)

  ↳ **`HistoricPolyxTransaction`**

## Properties

### amount

• **amount**: `BigNumber`

#### Defined in

[api/entities/Account/types.ts:87](https://github.com/PolymeshAssociation/polymesh-sdk/blob/d4e2c127f/src/api/entities/Account/types.ts#L87)

___

### blockDate

• **blockDate**: `Date`

#### Inherited from

[EventIdentifier](../../../../../Types/EventIdentifier/EventIdentifier.md).[blockDate](../../../../../Types/EventIdentifier/EventIdentifier.md#blockdate)

#### Defined in

[types/index.ts:725](https://github.com/PolymeshAssociation/polymesh-sdk/blob/d4e2c127f/src/types/index.ts#L725)

___

### blockHash

• **blockHash**: `string`

#### Inherited from

[EventIdentifier](../../../../../Types/EventIdentifier/EventIdentifier.md).[blockHash](../../../../../Types/EventIdentifier/EventIdentifier.md#blockhash)

#### Defined in

[types/index.ts:724](https://github.com/PolymeshAssociation/polymesh-sdk/blob/d4e2c127f/src/types/index.ts#L724)

___

### blockNumber

• **blockNumber**: `BigNumber`

#### Inherited from

[EventIdentifier](../../../../../Types/EventIdentifier/EventIdentifier.md).[blockNumber](../../../../../Types/EventIdentifier/EventIdentifier.md#blocknumber)

#### Defined in

[types/index.ts:723](https://github.com/PolymeshAssociation/polymesh-sdk/blob/d4e2c127f/src/types/index.ts#L723)

___

### callId

• `Optional` **callId**: [`CallIdEnum`](../../../../../../enums/Types/CallIdEnum/CallIdEnum.md)

#### Defined in

[api/entities/Account/types.ts:95](https://github.com/PolymeshAssociation/polymesh-sdk/blob/d4e2c127f/src/api/entities/Account/types.ts#L95)

___

### eventId

• **eventId**: [`EventIdEnum`](../../../../../../enums/Types/EventIdEnum/EventIdEnum.md)

#### Defined in

[api/entities/Account/types.ts:97](https://github.com/PolymeshAssociation/polymesh-sdk/blob/d4e2c127f/src/api/entities/Account/types.ts#L97)

___

### eventIndex

• **eventIndex**: `BigNumber`

#### Inherited from

[EventIdentifier](../../../../../Types/EventIdentifier/EventIdentifier.md).[eventIndex](../../../../../Types/EventIdentifier/EventIdentifier.md#eventindex)

#### Defined in

[types/index.ts:726](https://github.com/PolymeshAssociation/polymesh-sdk/blob/d4e2c127f/src/types/index.ts#L726)

___

### extrinsicIdx

• `Optional` **extrinsicIdx**: `BigNumber`

#### Defined in

[api/entities/Account/types.ts:93](https://github.com/PolymeshAssociation/polymesh-sdk/blob/d4e2c127f/src/api/entities/Account/types.ts#L93)

___

### fromAccount

• `Optional` **fromAccount**: [`Account`](../../../../../../classes/API/Entities/Account/Account.md)

Account from which the POLYX transaction has been initiated/deducted in case of a transfer.

**`Note`**

 this can be null in cases where some balance are endowed/transferred from treasury

#### Defined in

[api/entities/Account/types.ts:75](https://github.com/PolymeshAssociation/polymesh-sdk/blob/d4e2c127f/src/api/entities/Account/types.ts#L75)

___

### fromIdentity

• `Optional` **fromIdentity**: [`Identity`](../../../../../../classes/API/Entities/Identity/Identity.md)

Identity from which the POLYX transaction has been initiated/deducted in case of a transfer.

**`Note`**

 this can be null in cases where some balance are endowed/transferred from treasury

#### Defined in

[api/entities/Account/types.ts:70](https://github.com/PolymeshAssociation/polymesh-sdk/blob/d4e2c127f/src/api/entities/Account/types.ts#L70)

___

### memo

• `Optional` **memo**: `string`

identifier string to help differentiate transfers

#### Defined in

[api/entities/Account/types.ts:92](https://github.com/PolymeshAssociation/polymesh-sdk/blob/d4e2c127f/src/api/entities/Account/types.ts#L92)

___

### moduleId

• **moduleId**: [`ModuleIdEnum`](../../../../../../enums/Types/ModuleIdEnum/ModuleIdEnum.md)

#### Defined in

[api/entities/Account/types.ts:96](https://github.com/PolymeshAssociation/polymesh-sdk/blob/d4e2c127f/src/api/entities/Account/types.ts#L96)

___

### toAccount

• `Optional` **toAccount**: [`Account`](../../../../../../classes/API/Entities/Account/Account.md)

Account in which the POLYX amount was deposited.

**`Note`**

 this can be null in case when account balance was burned

#### Defined in

[api/entities/Account/types.ts:85](https://github.com/PolymeshAssociation/polymesh-sdk/blob/d4e2c127f/src/api/entities/Account/types.ts#L85)

___

### toIdentity

• `Optional` **toIdentity**: [`Identity`](../../../../../../classes/API/Entities/Identity/Identity.md)

Identity in which the POLYX amount was deposited.

**`Note`**

 this can be null in case when account balance was burned

#### Defined in

[api/entities/Account/types.ts:80](https://github.com/PolymeshAssociation/polymesh-sdk/blob/d4e2c127f/src/api/entities/Account/types.ts#L80)

___

### type

• **type**: [`BalanceTypeEnum`](../../../../../../enums/Types/BalanceTypeEnum/BalanceTypeEnum.md)

#### Defined in

[api/entities/Account/types.ts:88](https://github.com/PolymeshAssociation/polymesh-sdk/blob/d4e2c127f/src/api/entities/Account/types.ts#L88)
