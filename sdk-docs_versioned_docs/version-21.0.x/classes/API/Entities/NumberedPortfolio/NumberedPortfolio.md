---
id: 'NumberedPortfolio'
title: 'Class: NumberedPortfolio'
sidebar_label: 'NumberedPortfolio'
---

[api/entities/NumberedPortfolio](../../../../modules/API/Entities/NumberedPortfolio/NumberedPortfolio.md).NumberedPortfolio

Represents a numbered (non-default) Portfolio for an Identity

## Hierarchy

- [`Portfolio`](../Portfolio/Portfolio.md)

  ↳ **`NumberedPortfolio`**

## Properties

### id

• **id**: `BigNumber`

Portfolio identifier number

#### Defined in

[api/entities/NumberedPortfolio.ts:42](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/NumberedPortfolio.ts#L42)

---

### owner

• **owner**: [`Identity`](../Identity/Identity.md)

Identity of the Portfolio's owner

#### Inherited from

[Portfolio](../Portfolio/Portfolio.md).[owner](../Portfolio/Portfolio.md#owner)

#### Defined in

[api/entities/Portfolio/index.ts:82](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/Portfolio/index.ts#L82)

---

### uuid

• **uuid**: `string`

#### Inherited from

[Portfolio](../Portfolio/Portfolio.md).[uuid](../Portfolio/Portfolio.md#uuid)

#### Defined in

[api/entities/Entity.ts:46](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/Entity.ts#L46)

## Methods

### createdAt

▸ **createdAt**(): `Promise`\<`null` \| [`EventIdentifier`](../../../../interfaces/Types/EventIdentifier/EventIdentifier.md)\>

Retrieve the identifier data (block number, date and event index) of the event that was emitted when this Portfolio was created

#### Returns

`Promise`\<`null` \| [`EventIdentifier`](../../../../interfaces/Types/EventIdentifier/EventIdentifier.md)\>

**`Note`**

uses the middleware

**`Note`**

there is a possibility that the data is not ready by the time it is requested. In that case, `null` is returned

#### Defined in

[api/entities/NumberedPortfolio.ts:107](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/NumberedPortfolio.ts#L107)

---

### createdAtV2

▸ **createdAtV2**(): `Promise`\<`null` \| [`EventIdentifier`](../../../../interfaces/Types/EventIdentifier/EventIdentifier.md)\>

Retrieve the identifier data (block number, date and event index) of the event that was emitted when this Portfolio was created

#### Returns

`Promise`\<`null` \| [`EventIdentifier`](../../../../interfaces/Types/EventIdentifier/EventIdentifier.md)\>

**`Note`**

uses the middlewareV2

**`Note`**

there is a possibility that the data is not ready by the time it is requested. In that case, `null` is returned

#### Defined in

[api/entities/NumberedPortfolio.ts:138](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/NumberedPortfolio.ts#L138)

---

### exists

▸ **exists**(): `Promise`\<`boolean`\>

Return whether this Portfolio exists

#### Returns

`Promise`\<`boolean`\>

#### Overrides

[Portfolio](../Portfolio/Portfolio.md).[exists](../Portfolio/Portfolio.md#exists)

#### Defined in

[api/entities/NumberedPortfolio.ts:164](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/NumberedPortfolio.ts#L164)

---

### getAssetBalances

▸ **getAssetBalances**(`args?`): `Promise`\<[`PortfolioBalance`](../../../../interfaces/API/Entities/Portfolio/Types/PortfolioBalance/PortfolioBalance.md)[]\>

Retrieve the balances of all Assets in this Portfolio

#### Parameters

| Name          | Type                                         | Description                                                                                                   |
| :------------ | :------------------------------------------- | :------------------------------------------------------------------------------------------------------------ |
| `args?`       | `Object`                                     | -                                                                                                             |
| `args.assets` | (`string` \| [`Asset`](../Asset/Asset.md))[] | array of Assets (or tickers) for which to fetch balances (optional, all balances are retrieved if not passed) |

#### Returns

`Promise`\<[`PortfolioBalance`](../../../../interfaces/API/Entities/Portfolio/Types/PortfolioBalance/PortfolioBalance.md)[]\>

#### Inherited from

[Portfolio](../Portfolio/Portfolio.md).[getAssetBalances](../Portfolio/Portfolio.md#getassetbalances)

#### Defined in

[api/entities/Portfolio/index.ts:148](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/Portfolio/index.ts#L148)

---

### getCustodian

▸ **getCustodian**(): `Promise`\<[`Identity`](../Identity/Identity.md)\>

Retrieve the custodian Identity of this Portfolio

#### Returns

`Promise`\<[`Identity`](../Identity/Identity.md)\>

**`Note`**

if no custodian is set, the owner Identity is returned

#### Inherited from

[Portfolio](../Portfolio/Portfolio.md).[getCustodian](../Portfolio/Portfolio.md#getcustodian)

#### Defined in

[api/entities/Portfolio/index.ts:270](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/Portfolio/index.ts#L270)

---

### getName

▸ **getName**(): `Promise`\<`string`\>

Return the Portfolio name

#### Returns

`Promise`\<`string`\>

#### Defined in

[api/entities/NumberedPortfolio.ts:75](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/NumberedPortfolio.ts#L75)

---

### getTransactionHistory

▸ **getTransactionHistory**(`filters?`): `Promise`\<[`ResultSet`](../../../../interfaces/Types/ResultSet/ResultSet.md) \<[`HistoricSettlement`](../../../../interfaces/API/Entities/Portfolio/Types/HistoricSettlement/HistoricSettlement.md)\>\>

Retrieve a list of transactions where this portfolio was involved. Can be filtered using parameters

#### Parameters

| Name               | Type        | Description                        |
| :----------------- | :---------- | :--------------------------------- |
| `filters`          | `Object`    | -                                  |
| `filters.account?` | `string`    | Account involved in the settlement |
| `filters.size?`    | `BigNumber` | page size                          |
| `filters.start?`   | `BigNumber` | page offset                        |
| `filters.ticker?`  | `string`    | ticker involved in the transaction |

#### Returns

`Promise`\<[`ResultSet`](../../../../interfaces/Types/ResultSet/ResultSet.md) \<[`HistoricSettlement`](../../../../interfaces/API/Entities/Portfolio/Types/HistoricSettlement/HistoricSettlement.md)\>\>

**`Note`**

supports pagination

**`Note`**

uses the middleware

#### Inherited from

[Portfolio](../Portfolio/Portfolio.md).[getTransactionHistory](../Portfolio/Portfolio.md#gettransactionhistory)

#### Defined in

[api/entities/Portfolio/index.ts:315](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/Portfolio/index.ts#L315)

---

### getTransactionHistoryV2

▸ **getTransactionHistoryV2**(`filters?`): `Promise`\<[`HistoricSettlement`](../../../../interfaces/API/Entities/Portfolio/Types/HistoricSettlement/HistoricSettlement.md)[]\>

Retrieve a list of transactions where this portfolio was involved. Can be filtered using parameters

#### Parameters

| Name               | Type     | Description                        |
| :----------------- | :------- | :--------------------------------- |
| `filters`          | `Object` | -                                  |
| `filters.account?` | `string` | Account involved in the settlement |
| `filters.ticker?`  | `string` | ticker involved in the transaction |

#### Returns

`Promise`\<[`HistoricSettlement`](../../../../interfaces/API/Entities/Portfolio/Types/HistoricSettlement/HistoricSettlement.md)[]\>

**`Note`**

uses the middlewareV2

#### Inherited from

[Portfolio](../Portfolio/Portfolio.md).[getTransactionHistoryV2](../Portfolio/Portfolio.md#gettransactionhistoryv2)

#### Defined in

[api/entities/Portfolio/index.ts:427](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/Portfolio/index.ts#L427)

---

### isCustodiedBy

▸ **isCustodiedBy**(`args?`): `Promise`\<`boolean`\>

Return whether an Identity is the Portfolio custodian

#### Parameters

| Name            | Type                                              | Description                                |
| :-------------- | :------------------------------------------------ | :----------------------------------------- |
| `args?`         | `Object`                                          | -                                          |
| `args.identity` | `string` \| [`Identity`](../Identity/Identity.md) | optional, defaults to the signing Identity |

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

[Portfolio](../Portfolio/Portfolio.md).[isCustodiedBy](../Portfolio/Portfolio.md#iscustodiedby)

#### Defined in

[api/entities/Portfolio/index.ts:132](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/Portfolio/index.ts#L132)

---

### isEqual

▸ **isEqual**(`entity`): `boolean`

Determine whether this Entity is the same as another one

#### Parameters

| Name     | Type                                                    |
| :------- | :------------------------------------------------------ |
| `entity` | [`Entity`](../Entity/Entity.md)\<`unknown`, `unknown`\> |

#### Returns

`boolean`

#### Inherited from

[Portfolio](../Portfolio/Portfolio.md).[isEqual](../Portfolio/Portfolio.md#isequal)

#### Defined in

[api/entities/Entity.ts:61](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/Entity.ts#L61)

---

### isOwnedBy

▸ **isOwnedBy**(`args?`): `Promise`\<`boolean`\>

Return whether an Identity is the Portfolio owner

#### Parameters

| Name            | Type                                              | Description                      |
| :-------------- | :------------------------------------------------ | :------------------------------- |
| `args?`         | `Object`                                          | -                                |
| `args.identity` | `string` \| [`Identity`](../Identity/Identity.md) | defaults to the signing Identity |

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

[Portfolio](../Portfolio/Portfolio.md).[isOwnedBy](../Portfolio/Portfolio.md#isownedby)

#### Defined in

[api/entities/Portfolio/index.ts:119](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/Portfolio/index.ts#L119)

---

### modifyName

▸ **modifyName**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction) \<[`NumberedPortfolio`](NumberedPortfolio.md), [`NumberedPortfolio`](NumberedPortfolio.md)\>\>

Rename portfolio

#### Parameters

| Name    | Type                                                                                                                  |
| :------ | :-------------------------------------------------------------------------------------------------------------------- |
| `args`  | [`RenamePortfolioParams`](../../../../interfaces/API/Procedures/Types/RenamePortfolioParams/RenamePortfolioParams.md) |
| `opts?` | [`ProcedureOpts`](../../../../interfaces/Types/ProcedureOpts/ProcedureOpts.md)                                        |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction) \<[`NumberedPortfolio`](NumberedPortfolio.md), [`NumberedPortfolio`](NumberedPortfolio.md)\>\>

**`Note`**

Only the owner is allowed to rename the Portfolio.

**`Note`**

this method is of type [ProcedureMethod](../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [modifyName.checkAuthorization](../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/entities/NumberedPortfolio.ts:68](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/NumberedPortfolio.ts#L68)

---

### moveFunds

▸ **moveFunds**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

Moves funds from this Portfolio to another one owned by the same Identity

#### Parameters

| Name    | Type                                                                                                |
| :------ | :-------------------------------------------------------------------------------------------------- |
| `args`  | [`MoveFundsParams`](../../../../interfaces/API/Procedures/Types/MoveFundsParams/MoveFundsParams.md) |
| `opts?` | [`ProcedureOpts`](../../../../interfaces/Types/ProcedureOpts/ProcedureOpts.md)                      |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

**`Note`**

required role:

- Portfolio Custodian

**`Note`**

this method is of type [ProcedureMethod](../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [moveFunds.checkAuthorization](../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Inherited from

[Portfolio](../Portfolio/Portfolio.md).[moveFunds](../Portfolio/Portfolio.md#movefunds)

#### Defined in

[api/entities/Portfolio/index.ts:248](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/Portfolio/index.ts#L248)

---

### quitCustody

▸ **quitCustody**(`opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

Returns the custody of the portfolio to the portfolio owner unilaterally

#### Parameters

| Name    | Type                                                                           |
| :------ | :----------------------------------------------------------------------------- |
| `opts?` | [`ProcedureOpts`](../../../../interfaces/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

**`Note`**

required role:

- Portfolio Custodian

**`Note`**

this method is of type [NoArgsProcedureMethod](../../../../interfaces/Types/NoArgsProcedureMethod/NoArgsProcedureMethod.md), which means you can call [quitCustody.checkAuthorization](../../../../interfaces/Types/NoArgsProcedureMethod/NoArgsProcedureMethod.md#checkauthorization)
on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Inherited from

[Portfolio](../Portfolio/Portfolio.md).[quitCustody](../Portfolio/Portfolio.md#quitcustody)

#### Defined in

[api/entities/Portfolio/index.ts:261](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/Portfolio/index.ts#L261)

---

### setCustodian

▸ **setCustodian**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction) \<[`AuthorizationRequest`](../AuthorizationRequest/AuthorizationRequest.md), [`AuthorizationRequest`](../AuthorizationRequest/AuthorizationRequest.md)\>\>

Send an invitation to an Identity to assign it as custodian for this Portfolio

#### Parameters

| Name    | Type                                                                                                         |
| :------ | :----------------------------------------------------------------------------------------------------------- |
| `args`  | [`SetCustodianParams`](../../../../interfaces/API/Procedures/Types/SetCustodianParams/SetCustodianParams.md) |
| `opts?` | [`ProcedureOpts`](../../../../interfaces/Types/ProcedureOpts/ProcedureOpts.md)                               |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction) \<[`AuthorizationRequest`](../AuthorizationRequest/AuthorizationRequest.md), [`AuthorizationRequest`](../AuthorizationRequest/AuthorizationRequest.md)\>\>

**`Note`**

this will create an [Authorization Request](../AuthorizationRequest/AuthorizationRequest.md) which has to be accepted by the `targetIdentity`.
An [Account](../Account/Account.md) or [Identity](../Identity/Identity.md) can fetch its pending Authorization Requests by calling [authorizations.getReceived](../Common/Namespaces/Authorizations/Authorizations.md#getreceived).
Also, an Account or Identity can directly fetch the details of an Authorization Request by calling [authorizations.getOne](../Common/Namespaces/Authorizations/Authorizations.md#getone)

**`Note`**

required role:

- Portfolio Custodian

**`Note`**

this method is of type [ProcedureMethod](../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [setCustodian.checkAuthorization](../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Inherited from

[Portfolio](../Portfolio/Portfolio.md).[setCustodian](../Portfolio/Portfolio.md#setcustodian)

#### Defined in

[api/entities/Portfolio/index.ts:235](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/Portfolio/index.ts#L235)

---

### toHuman

▸ **toHuman**(): [`HumanReadable`](../../../../interfaces/API/Entities/Portfolio/HumanReadable/HumanReadable.md)

Return the Portfolio ID and owner DID

#### Returns

[`HumanReadable`](../../../../interfaces/API/Entities/Portfolio/HumanReadable/HumanReadable.md)

#### Inherited from

[Portfolio](../Portfolio/Portfolio.md).[toHuman](../Portfolio/Portfolio.md#tohuman)

#### Defined in

[api/entities/Portfolio/index.ts:546](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/Portfolio/index.ts#L546)

---

### generateUuid

▸ `Static` **generateUuid**\<`Identifiers`\>(`identifiers`): `string`

Generate the Entity's UUID from its identifying properties

#### Type parameters

| Name          |
| :------------ |
| `Identifiers` |

#### Parameters

| Name          | Type          |
| :------------ | :------------ |
| `identifiers` | `Identifiers` |

#### Returns

`string`

#### Inherited from

[Portfolio](../Portfolio/Portfolio.md).[generateUuid](../Portfolio/Portfolio.md#generateuuid)

#### Defined in

[api/entities/Entity.ts:14](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/Entity.ts#L14)

---

### unserialize

▸ `Static` **unserialize**\<`Identifiers`\>(`serialized`): `Identifiers`

Unserialize a UUID into its Unique Identifiers

#### Type parameters

| Name          |
| :------------ |
| `Identifiers` |

#### Parameters

| Name         | Type     | Description         |
| :----------- | :------- | :------------------ |
| `serialized` | `string` | UUID to unserialize |

#### Returns

`Identifiers`

#### Inherited from

[Portfolio](../Portfolio/Portfolio.md).[unserialize](../Portfolio/Portfolio.md#unserialize)

#### Defined in

[api/entities/Entity.ts:23](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/Entity.ts#L23)