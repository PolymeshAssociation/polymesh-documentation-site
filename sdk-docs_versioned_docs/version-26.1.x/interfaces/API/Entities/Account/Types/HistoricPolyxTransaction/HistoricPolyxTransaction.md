---
id: "HistoricPolyxTransaction"
title: "Interface: HistoricPolyxTransaction"
sidebar_label: "HistoricPolyxTransaction"
---

[api/entities/Account/types](../../../../../../modules/API/Entities/Account/Types/Types.md).HistoricPolyxTransaction

## Hierarchy

- [`EventIdentifier`](../../../../Client/Types/EventIdentifier/EventIdentifier.md)

  ↳ **`HistoricPolyxTransaction`**

## Properties

### amount

• **amount**: `BigNumber`

#### Defined in

[api/entities/Account/types.ts:100](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b55e63737/src/api/entities/Account/types.ts#L100)

___

### blockDate

• **blockDate**: `Date`

#### Inherited from

[EventIdentifier](../../../../Client/Types/EventIdentifier/EventIdentifier.md).[blockDate](../../../../Client/Types/EventIdentifier/EventIdentifier.md#blockdate)

#### Defined in

[api/client/types.ts:178](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b55e63737/src/api/client/types.ts#L178)

___

### blockHash

• **blockHash**: `string`

#### Inherited from

[EventIdentifier](../../../../Client/Types/EventIdentifier/EventIdentifier.md).[blockHash](../../../../Client/Types/EventIdentifier/EventIdentifier.md#blockhash)

#### Defined in

[api/client/types.ts:177](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b55e63737/src/api/client/types.ts#L177)

___

### blockNumber

• **blockNumber**: `BigNumber`

#### Inherited from

[EventIdentifier](../../../../Client/Types/EventIdentifier/EventIdentifier.md).[blockNumber](../../../../Client/Types/EventIdentifier/EventIdentifier.md#blocknumber)

#### Defined in

[api/client/types.ts:176](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b55e63737/src/api/client/types.ts#L176)

___

### callId

• `Optional` **callId**: [`CallIdEnum`](../../../../../../enums/Types/CallIdEnum/CallIdEnum.md)

#### Defined in

[api/entities/Account/types.ts:108](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b55e63737/src/api/entities/Account/types.ts#L108)

___

### eventId

• **eventId**: [`EventIdEnum`](../../../../../../enums/Types/EventIdEnum/EventIdEnum.md)

#### Defined in

[api/entities/Account/types.ts:110](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b55e63737/src/api/entities/Account/types.ts#L110)

___

### eventIndex

• **eventIndex**: `BigNumber`

#### Inherited from

[EventIdentifier](../../../../Client/Types/EventIdentifier/EventIdentifier.md).[eventIndex](../../../../Client/Types/EventIdentifier/EventIdentifier.md#eventindex)

#### Defined in

[api/client/types.ts:179](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b55e63737/src/api/client/types.ts#L179)

___

### extrinsicIdx

• `Optional` **extrinsicIdx**: `BigNumber`

#### Defined in

[api/entities/Account/types.ts:106](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b55e63737/src/api/entities/Account/types.ts#L106)

___

### fromAccount

• `Optional` **fromAccount**: [`Account`](../../../../../../classes/API/Entities/Account/Account.md)

Account from which the POLYX transaction has been initiated/deducted in case of a transfer.

**`Note`**

this can be null in cases where some balance are endowed/transferred from treasury

#### Defined in

[api/entities/Account/types.ts:88](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b55e63737/src/api/entities/Account/types.ts#L88)

___

### fromIdentity

• `Optional` **fromIdentity**: [`Identity`](../../../../../../classes/API/Entities/Identity/Identity.md)

Identity from which the POLYX transaction has been initiated/deducted in case of a transfer.

**`Note`**

this can be null in cases where some balance are endowed/transferred from treasury

#### Defined in

[api/entities/Account/types.ts:83](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b55e63737/src/api/entities/Account/types.ts#L83)

___

### memo

• `Optional` **memo**: `string`

identifier string to help differentiate transfers

#### Defined in

[api/entities/Account/types.ts:105](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b55e63737/src/api/entities/Account/types.ts#L105)

___

### moduleId

• **moduleId**: [`ModuleIdEnum`](../../../../../../enums/Types/ModuleIdEnum/ModuleIdEnum.md)

#### Defined in

[api/entities/Account/types.ts:109](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b55e63737/src/api/entities/Account/types.ts#L109)

___

### toAccount

• `Optional` **toAccount**: [`Account`](../../../../../../classes/API/Entities/Account/Account.md)

Account in which the POLYX amount was deposited.

**`Note`**

this can be null in case when account balance was burned

#### Defined in

[api/entities/Account/types.ts:98](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b55e63737/src/api/entities/Account/types.ts#L98)

___

### toIdentity

• `Optional` **toIdentity**: [`Identity`](../../../../../../classes/API/Entities/Identity/Identity.md)

Identity in which the POLYX amount was deposited.

**`Note`**

this can be null in case when account balance was burned

#### Defined in

[api/entities/Account/types.ts:93](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b55e63737/src/api/entities/Account/types.ts#L93)

___

### type

• **type**: [`BalanceTypeEnum`](../../../../../../enums/Types/BalanceTypeEnum/BalanceTypeEnum.md)

#### Defined in

[api/entities/Account/types.ts:101](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b55e63737/src/api/entities/Account/types.ts#L101)
