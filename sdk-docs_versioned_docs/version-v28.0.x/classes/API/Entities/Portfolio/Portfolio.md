---
id: "Portfolio"
title: "Class: Portfolio"
sidebar_label: "Portfolio"
---

[api/entities/Portfolio](../../../../modules/API/Entities/Portfolio/Portfolio.md).Portfolio

Represents a Portfolio (default or numbered) for a specific Identity on the Polymesh blockchain

## Hierarchy

- [`Entity`](../Entity/Entity.md)\<[`UniqueIdentifiers`](../../../../interfaces/API/Entities/Portfolio/UniqueIdentifiers/UniqueIdentifiers.md), [`HumanReadable`](../../../../interfaces/API/Entities/Portfolio/HumanReadable/HumanReadable.md)\>

  ↳ **`Portfolio`**

  ↳↳ [`DefaultPortfolio`](../DefaultPortfolio/DefaultPortfolio.md)

  ↳↳ [`NumberedPortfolio`](../NumberedPortfolio/NumberedPortfolio.md)

## Properties

### owner

• **owner**: [`Identity`](../Identity/Identity.md)

The Identity that owns this Portfolio

#### Defined in

[api/entities/Portfolio/index.ts:69](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/Portfolio/index.ts#L69)

___

### uuid

• **uuid**: `string`

#### Inherited from

[Entity](../Entity/Entity.md).[uuid](../Entity/Entity.md#uuid)

#### Defined in

[api/entities/Entity.ts:46](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/Entity.ts#L46)

## Methods

### exists

▸ `Abstract` **exists**(): `Promise`\<`boolean`\>

Determine whether this Entity exists on chain

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

[Entity](../Entity/Entity.md).[exists](../Entity/Entity.md#exists)

#### Defined in

[api/entities/Entity.ts:68](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/Entity.ts#L68)

___

### getAssetBalances

▸ **getAssetBalances**(`args?`): `Promise`\<[`PortfolioBalance`](../../../../interfaces/API/Entities/Portfolio/Types/PortfolioBalance/PortfolioBalance.md)[]\>

Retrieve the balances of all fungible assets held in this Portfolio

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args?` | `Object` | - |
| `args.assets` | (`string` \| [`FungibleAsset`](../Asset/Fungible/FungibleAsset.md))[] | Optional array of tickers or `FungibleAsset` instances to filter the results by. If not provided, all balances are returned |

#### Returns

`Promise`\<[`PortfolioBalance`](../../../../interfaces/API/Entities/Portfolio/Types/PortfolioBalance/PortfolioBalance.md)[]\>

An array of `PortfolioBalance` objects representing total, locked, and free amounts for each asset

#### Defined in

[api/entities/Portfolio/index.ts:133](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/Portfolio/index.ts#L133)

___

### getCollections

▸ **getCollections**(`args?`): `Promise`\<[`PortfolioCollection`](../../../../interfaces/API/Entities/Portfolio/Types/PortfolioCollection/PortfolioCollection.md)[]\>

Retrieve all NFT holdings in this Portfolio

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args?` | `Object` | - |
| `args.collections` | (`string` \| [`NftCollection`](../Asset/NonFungible/NftCollection/NftCollection.md))[] | Optional array of tickers, asset IDs, or `NftCollection` instances to filter by. If not provided, returns all holdings |

#### Returns

`Promise`\<[`PortfolioCollection`](../../../../interfaces/API/Entities/Portfolio/Types/PortfolioCollection/PortfolioCollection.md)[]\>

An array of `PortfolioCollection` objects, including held, locked, and free NFTs per collection

#### Defined in

[api/entities/Portfolio/index.ts:214](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/Portfolio/index.ts#L214)

___

### getCustodian

▸ **getCustodian**(): `Promise`\<[`Identity`](../Identity/Identity.md)\>

Retrieve the current custodian of this Portfolio's identity

#### Returns

`Promise`\<[`Identity`](../Identity/Identity.md)\>

**`Note`**

If no custodian is explicitly assigned, the Portfolio owner is returned

#### Defined in

[api/entities/Portfolio/index.ts:345](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/Portfolio/index.ts#L345)

___

### getTransactionHistory

▸ **getTransactionHistory**(`filters?`): `Promise`\<[`HistoricSettlement`](../../../../interfaces/API/Entities/Portfolio/Types/HistoricSettlement/HistoricSettlement.md)[]\>

Retrieve the transaction history of this Portfolio, optionally filtered by account, ticker, or assetId

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filters` | `Object` | - |
| `filters.account?` | `string` | (optional) Account address to filter transactions by |
| `filters.assetId?` | `string` | (optional) Asset ID to filter by. Overrides ticker if both are present |
| `filters.ticker?` | `string` | (optional) Asset ticker involved in the transaction |

#### Returns

`Promise`\<[`HistoricSettlement`](../../../../interfaces/API/Entities/Portfolio/Types/HistoricSettlement/HistoricSettlement.md)[]\>

**`Note`**

Uses the middlewareV2 GraphQL API

#### Defined in

[api/entities/Portfolio/index.ts:388](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/Portfolio/index.ts#L388)

___

### isCustodiedBy

▸ **isCustodiedBy**(`args?`): `Promise`\<`boolean`\>

Check whether a given Identity is the custodian of this Portfolio

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args?` | `Object` | - |
| `args.identity` | `string` \| [`Identity`](../Identity/Identity.md) | Identity or DID string to compare. Defaults to the signing Identity |

#### Returns

`Promise`\<`boolean`\>

#### Defined in

[api/entities/Portfolio/index.ts:115](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/Portfolio/index.ts#L115)

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

[Entity](../Entity/Entity.md).[isEqual](../Entity/Entity.md#isequal)

#### Defined in

[api/entities/Entity.ts:61](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/Entity.ts#L61)

___

### isOwnedBy

▸ **isOwnedBy**(`args?`): `Promise`\<`boolean`\>

Check whether a given Identity is the owner of this Portfolio

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args?` | `Object` | - |
| `args.identity` | `string` \| [`Identity`](../Identity/Identity.md) | Identity or DID string to compare. Defaults to the signing Identity |

#### Returns

`Promise`\<`boolean`\>

#### Defined in

[api/entities/Portfolio/index.ts:102](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/Portfolio/index.ts#L102)

___

### moveFunds

▸ **moveFunds**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

Move funds from this Portfolio to another Portfolio owned by the same Identity

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

#### Defined in

[api/entities/Portfolio/index.ts:323](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/Portfolio/index.ts#L323)

___

### quitCustody

▸ **quitCustody**(`opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../modules/API/Procedures/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

Unilaterally return custody of the Portfolio to its owner

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

#### Defined in

[api/entities/Portfolio/index.ts:336](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/Portfolio/index.ts#L336)

___

### toHuman

▸ **toHuman**(): [`HumanReadable`](../../../../interfaces/API/Entities/Portfolio/HumanReadable/HumanReadable.md)

Convert this Portfolio's identifiers to a human-readable format

#### Returns

[`HumanReadable`](../../../../interfaces/API/Entities/Portfolio/HumanReadable/HumanReadable.md)

An object containing the owner DID and (if applicable) the Portfolio ID as strings

#### Overrides

[Entity](../Entity/Entity.md).[toHuman](../Entity/Entity.md#tohuman)

#### Defined in

[api/entities/Portfolio/index.ts:465](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/Portfolio/index.ts#L465)

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

[Entity](../Entity/Entity.md).[generateUuid](../Entity/Entity.md#generateuuid)

#### Defined in

[api/entities/Entity.ts:14](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/Entity.ts#L14)

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

[Entity](../Entity/Entity.md).[unserialize](../Entity/Entity.md#unserialize)

#### Defined in

[api/entities/Entity.ts:23](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/Entity.ts#L23)
