---
id: "DefaultPortfolio"
title: "Class: DefaultPortfolio"
sidebar_label: "DefaultPortfolio"
---

[api/entities/DefaultPortfolio](../../../../modules/API/Entities/DefaultPortfolio/DefaultPortfolio.md).DefaultPortfolio

Represents the default Portfolio for an Identity

## Hierarchy

- [`Portfolio`](../Portfolio/Portfolio.md)

  ↳ **`DefaultPortfolio`**

## Properties

### owner

• **owner**: [`Identity`](../Identity/Identity.md)

Identity of the Portfolio's owner

#### Inherited from

[Portfolio](../Portfolio/Portfolio.md).[owner](../Portfolio/Portfolio.md#owner)

#### Defined in

[api/entities/Portfolio/index.ts:76](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fe2e6dd1d/src/api/entities/Portfolio/index.ts#L76)

___

### uuid

• **uuid**: `string`

#### Inherited from

[Portfolio](../Portfolio/Portfolio.md).[uuid](../Portfolio/Portfolio.md#uuid)

#### Defined in

[api/entities/Entity.ts:46](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fe2e6dd1d/src/api/entities/Entity.ts#L46)

## Methods

### exists

▸ **exists**(): `Promise`\<`boolean`\>

Determine whether this Portfolio exists on chain

#### Returns

`Promise`\<`boolean`\>

#### Overrides

[Portfolio](../Portfolio/Portfolio.md).[exists](../Portfolio/Portfolio.md#exists)

#### Defined in

[api/entities/DefaultPortfolio.ts:22](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fe2e6dd1d/src/api/entities/DefaultPortfolio.ts#L22)

___

### getAssetBalances

▸ **getAssetBalances**(`args?`): `Promise`\<[`PortfolioBalance`](../../../../interfaces/API/Entities/Portfolio/Types/PortfolioBalance/PortfolioBalance.md)[]\>

Retrieve the balances of all fungible assets in this Portfolio

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args?` | `Object` | - |
| `args.assets` | (`string` \| [`FungibleAsset`](../Asset/Fungible/FungibleAsset.md))[] | array of FungibleAssets (or tickers) for which to fetch balances (optional, all balances are retrieved if not passed) |

#### Returns

`Promise`\<[`PortfolioBalance`](../../../../interfaces/API/Entities/Portfolio/Types/PortfolioBalance/PortfolioBalance.md)[]\>

#### Inherited from

[Portfolio](../Portfolio/Portfolio.md).[getAssetBalances](../Portfolio/Portfolio.md#getassetbalances)

#### Defined in

[api/entities/Portfolio/index.ts:142](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fe2e6dd1d/src/api/entities/Portfolio/index.ts#L142)

___

### getCollections

▸ **getCollections**(`args?`): `Promise`\<[`PortfolioCollection`](../../../../interfaces/API/Entities/Portfolio/Types/PortfolioCollection/PortfolioCollection.md)[]\>

Retrieve the NFTs held in this portfolio

#### Parameters

| Name | Type |
| :------ | :------ |
| `args?` | `Object` |
| `args.collections` | (`string` \| [`NftCollection`](../Asset/NonFungible/NftCollection/NftCollection.md))[] |

#### Returns

`Promise`\<[`PortfolioCollection`](../../../../interfaces/API/Entities/Portfolio/Types/PortfolioCollection/PortfolioCollection.md)[]\>

#### Inherited from

[Portfolio](../Portfolio/Portfolio.md).[getCollections](../Portfolio/Portfolio.md#getcollections)

#### Defined in

[api/entities/Portfolio/index.ts:221](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fe2e6dd1d/src/api/entities/Portfolio/index.ts#L221)

___

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

[api/entities/Portfolio/index.ts:362](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fe2e6dd1d/src/api/entities/Portfolio/index.ts#L362)

___

### getTransactionHistory

▸ **getTransactionHistory**(`filters?`): `Promise`\<[`HistoricSettlement`](../../../../interfaces/API/Entities/Portfolio/Types/HistoricSettlement/HistoricSettlement.md)[]\>

Retrieve a list of transactions where this portfolio was involved. Can be filtered using parameters

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filters` | `Object` | - |
| `filters.account?` | `string` | Account involved in the settlement |
| `filters.ticker?` | `string` | ticker involved in the transaction |

#### Returns

`Promise`\<[`HistoricSettlement`](../../../../interfaces/API/Entities/Portfolio/Types/HistoricSettlement/HistoricSettlement.md)[]\>

**`Note`**

uses the middlewareV2

#### Inherited from

[Portfolio](../Portfolio/Portfolio.md).[getTransactionHistory](../Portfolio/Portfolio.md#gettransactionhistory)

#### Defined in

[api/entities/Portfolio/index.ts:404](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fe2e6dd1d/src/api/entities/Portfolio/index.ts#L404)

___

### isCustodiedBy

▸ **isCustodiedBy**(`args?`): `Promise`\<`boolean`\>

Return whether an Identity is the Portfolio custodian

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args?` | `Object` | - |
| `args.identity` | `string` \| [`Identity`](../Identity/Identity.md) | optional, defaults to the signing Identity |

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

[Portfolio](../Portfolio/Portfolio.md).[isCustodiedBy](../Portfolio/Portfolio.md#iscustodiedby)

#### Defined in

[api/entities/Portfolio/index.ts:126](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fe2e6dd1d/src/api/entities/Portfolio/index.ts#L126)

___

### isEqual

▸ **isEqual**(`entity`): `boolean`

Determine whether this Entity is the same as another one

#### Parameters

| Name | Type |
| :------ | :------ |
| `entity` | [`Entity`](../Entity/Entity.md)\<`unknown`, `unknown`\> |

#### Returns

`boolean`

#### Inherited from

[Portfolio](../Portfolio/Portfolio.md).[isEqual](../Portfolio/Portfolio.md#isequal)

#### Defined in

[api/entities/Entity.ts:61](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fe2e6dd1d/src/api/entities/Entity.ts#L61)

___

### isOwnedBy

▸ **isOwnedBy**(`args?`): `Promise`\<`boolean`\>

Return whether an Identity is the Portfolio owner

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args?` | `Object` | - |
| `args.identity` | `string` \| [`Identity`](../Identity/Identity.md) | defaults to the signing Identity |

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

[Portfolio](../Portfolio/Portfolio.md).[isOwnedBy](../Portfolio/Portfolio.md#isownedby)

#### Defined in

[api/entities/Portfolio/index.ts:113](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fe2e6dd1d/src/api/entities/Portfolio/index.ts#L113)

___

### moveFunds

▸ **moveFunds**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

Moves funds from this Portfolio to another one owned by the same Identity

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`MoveFundsParams`](../../../../interfaces/API/Procedures/Types/MoveFundsParams/MoveFundsParams.md) |
| `opts?` | [`ProcedureOpts`](../../../../interfaces/API/Procedures/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

**`Note`**

required role:
  - Portfolio Custodian

**`Note`**

this method is of type [ProcedureMethod](../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [moveFunds.checkAuthorization](../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Inherited from

[Portfolio](../Portfolio/Portfolio.md).[moveFunds](../Portfolio/Portfolio.md#movefunds)

#### Defined in

[api/entities/Portfolio/index.ts:340](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fe2e6dd1d/src/api/entities/Portfolio/index.ts#L340)

___

### quitCustody

▸ **quitCustody**(`opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

Returns the custody of the portfolio to the portfolio owner unilaterally

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`ProcedureOpts`](../../../../interfaces/API/Procedures/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

**`Note`**

required role:
  - Portfolio Custodian

**`Note`**

this method is of type [NoArgsProcedureMethod](../../../../interfaces/API/Procedures/Types/NoArgsProcedureMethod/NoArgsProcedureMethod.md), which means you can call [quitCustody.checkAuthorization](../../../../interfaces/API/Procedures/Types/NoArgsProcedureMethod/NoArgsProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Inherited from

[Portfolio](../Portfolio/Portfolio.md).[quitCustody](../Portfolio/Portfolio.md#quitcustody)

#### Defined in

[api/entities/Portfolio/index.ts:353](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fe2e6dd1d/src/api/entities/Portfolio/index.ts#L353)

___

### setCustodian

▸ **setCustodian**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<[`AuthorizationRequest`](../AuthorizationRequest/AuthorizationRequest.md), [`AuthorizationRequest`](../AuthorizationRequest/AuthorizationRequest.md)\>\>

Send an invitation to an Identity to assign it as custodian for this Portfolio

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`SetCustodianParams`](../../../../interfaces/API/Procedures/Types/SetCustodianParams/SetCustodianParams.md) |
| `opts?` | [`ProcedureOpts`](../../../../interfaces/API/Procedures/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<[`AuthorizationRequest`](../AuthorizationRequest/AuthorizationRequest.md), [`AuthorizationRequest`](../AuthorizationRequest/AuthorizationRequest.md)\>\>

**`Note`**

this will create an [Authorization Request](../AuthorizationRequest/AuthorizationRequest.md) which has to be accepted by the `targetIdentity`.
  An [Account](../Account/Account.md) or [Identity](../Identity/Identity.md) can fetch its pending Authorization Requests by calling [authorizations.getReceived](../Common/Namespaces/Authorizations/Authorizations.md#getreceived).
  Also, an Account or Identity can directly fetch the details of an Authorization Request by calling [authorizations.getOne](../Common/Namespaces/Authorizations/Authorizations.md#getone)

**`Note`**

required role:
  - Portfolio Custodian

**`Note`**

this method is of type [ProcedureMethod](../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [setCustodian.checkAuthorization](../../../../interfaces/API/Procedures/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Inherited from

[Portfolio](../Portfolio/Portfolio.md).[setCustodian](../Portfolio/Portfolio.md#setcustodian)

#### Defined in

[api/entities/Portfolio/index.ts:327](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fe2e6dd1d/src/api/entities/Portfolio/index.ts#L327)

___

### toHuman

▸ **toHuman**(): [`HumanReadable`](../../../../interfaces/API/Entities/Portfolio/HumanReadable/HumanReadable.md)

Return the Portfolio ID and owner DID

#### Returns

[`HumanReadable`](../../../../interfaces/API/Entities/Portfolio/HumanReadable/HumanReadable.md)

#### Inherited from

[Portfolio](../Portfolio/Portfolio.md).[toHuman](../Portfolio/Portfolio.md#tohuman)

#### Defined in

[api/entities/Portfolio/index.ts:464](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fe2e6dd1d/src/api/entities/Portfolio/index.ts#L464)

___

### generateUuid

▸ `Static` **generateUuid**\<`Identifiers`\>(`identifiers`): `string`

Generate the Entity's UUID from its identifying properties

#### Type parameters

| Name |
| :------ |
| `Identifiers` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `identifiers` | `Identifiers` |

#### Returns

`string`

#### Inherited from

[Portfolio](../Portfolio/Portfolio.md).[generateUuid](../Portfolio/Portfolio.md#generateuuid)

#### Defined in

[api/entities/Entity.ts:14](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fe2e6dd1d/src/api/entities/Entity.ts#L14)

___

### unserialize

▸ `Static` **unserialize**\<`Identifiers`\>(`serialized`): `Identifiers`

Unserialize a UUID into its Unique Identifiers

#### Type parameters

| Name |
| :------ |
| `Identifiers` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `serialized` | `string` | UUID to unserialize |

#### Returns

`Identifiers`

#### Inherited from

[Portfolio](../Portfolio/Portfolio.md).[unserialize](../Portfolio/Portfolio.md#unserialize)

#### Defined in

[api/entities/Entity.ts:23](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fe2e6dd1d/src/api/entities/Entity.ts#L23)
