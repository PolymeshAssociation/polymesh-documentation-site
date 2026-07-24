# Class: NumberedPortfolio

> Defined in: [src/api/entities/NumberedPortfolio.ts:31](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/NumberedPortfolio.ts#L31)

# Class: NumberedPortfolio

Defined in: [src/api/entities/NumberedPortfolio.ts:31](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/NumberedPortfolio.ts#L31)

Represents a numbered (non-default) Portfolio for an Identity

## Extends

- [`Portfolio`](../../Portfolio/classes/Portfolio.mdx)

## Properties

### id

> **id**: `BigNumber`

Defined in: [src/api/entities/NumberedPortfolio.ts:45](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/NumberedPortfolio.ts#L45)

Portfolio identifier number

***

### owner

> **owner**: [`Identity`](../../Identity/classes/Identity.mdx)

Defined in: [src/api/entities/Portfolio/index.ts:76](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Portfolio/index.ts#L76)

Identity of the Portfolio's owner

#### Inherited from

[`Portfolio`](../../Portfolio/classes/Portfolio.mdx).[`owner`](../../Portfolio/classes/Portfolio.mdx#owner)

***

### uuid

> **uuid**: `string`

Defined in: [src/api/entities/Entity.ts:46](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Entity.ts#L46)

#### Inherited from

[`Portfolio`](../../Portfolio/classes/Portfolio.mdx).[`uuid`](../../Portfolio/classes/Portfolio.mdx#uuid)

## Methods

### createdAt()

> **createdAt**(): `Promise`\<[`EventIdentifier`](../../../client/types/interfaces/EventIdentifier.mdx) \| `null`\>

Defined in: [src/api/entities/NumberedPortfolio.ts:107](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/NumberedPortfolio.ts#L107)

Retrieve the identifier data (block number, date and event index) of the event that was emitted when this Portfolio was created

#### Returns

`Promise`\<[`EventIdentifier`](../../../client/types/interfaces/EventIdentifier.mdx) \| `null`\>

#### Note

uses the middlewareV2

#### Note

there is a possibility that the data is not ready by the time it is requested. In that case, `null` is returned

***

### exists()

> **exists**(): `Promise`\<`boolean`\>

Defined in: [src/api/entities/NumberedPortfolio.ts:133](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/NumberedPortfolio.ts#L133)

Return whether this Portfolio exists

#### Returns

`Promise`\<`boolean`\>

#### Overrides

[`Portfolio`](../../Portfolio/classes/Portfolio.mdx).[`exists`](../../Portfolio/classes/Portfolio.mdx#exists)

***

### getAssetBalances()

> **getAssetBalances**(`args?`: `object`): `Promise`\<[`PortfolioBalance`](../../Portfolio/types/interfaces/PortfolioBalance.mdx)[]\>

Defined in: [src/api/entities/Portfolio/index.ts:138](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Portfolio/index.ts#L138)

Retrieve the balances of all fungible assets in this Portfolio

#### Parameters

Parameter
Type
Description

`args?`

\{ `assets`: (`string` \| [`FungibleAsset`](../../Asset/Fungible/classes/FungibleAsset.mdx))[]; \}

&hyphen;

`args.assets?`

(`string` \| [`FungibleAsset`](../../Asset/Fungible/classes/FungibleAsset.mdx))[]

array of FungibleAssets (or tickers) for which to fetch balances (optional, all balances are retrieved if not passed)

#### Returns

`Promise`\<[`PortfolioBalance`](../../Portfolio/types/interfaces/PortfolioBalance.mdx)[]\>

#### Inherited from

[`Portfolio`](../../Portfolio/classes/Portfolio.mdx).[`getAssetBalances`](../../Portfolio/classes/Portfolio.mdx#getassetbalances)

***

### getCollections()

> **getCollections**(`args?`: `object`): `Promise`\<[`PortfolioCollection`](../../Portfolio/types/interfaces/PortfolioCollection.mdx)[]\>

Defined in: [src/api/entities/Portfolio/index.ts:217](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Portfolio/index.ts#L217)

Retrieve the NFTs held in this portfolio

#### Parameters

Parameter
Type
Description

`args?`

\{ `collections`: (`string` \| [`NftCollection`](../../Asset/NonFungible/NftCollection/classes/NftCollection.mdx))[]; \}

&hyphen;

`args.collections?`

(`string` \| [`NftCollection`](../../Asset/NonFungible/NftCollection/classes/NftCollection.mdx))[]

array of NftCollection (or tickers) for which to fetch holdings (optional, all holdings are retrieved if not passed)

#### Returns

`Promise`\<[`PortfolioCollection`](../../Portfolio/types/interfaces/PortfolioCollection.mdx)[]\>

#### Inherited from

[`Portfolio`](../../Portfolio/classes/Portfolio.mdx).[`getCollections`](../../Portfolio/classes/Portfolio.mdx#getcollections)

***

### getCustodian()

> **getCustodian**(): `Promise`\<[`Identity`](../../Identity/classes/Identity.mdx)\>

Defined in: [src/api/entities/Portfolio/index.ts:328](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Portfolio/index.ts#L328)

Retrieve the custodian Identity of this Portfolio

#### Returns

`Promise`\<[`Identity`](../../Identity/classes/Identity.mdx)\>

#### Note

if no custodian is set, the owner Identity is returned

#### Inherited from

[`Portfolio`](../../Portfolio/classes/Portfolio.mdx).[`getCustodian`](../../Portfolio/classes/Portfolio.mdx#getcustodian)

***

### getName()

> **getName**(): `Promise`\<`string`\>

Defined in: [src/api/entities/NumberedPortfolio.ts:78](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/NumberedPortfolio.ts#L78)

Return the Portfolio name

#### Returns

`Promise`\<`string`\>

***

### getTransactionHistory()

> **getTransactionHistory**(`filters?`: `object`): `Promise`\<[`HistoricSettlement`](../../Portfolio/types/interfaces/HistoricSettlement.mdx)[]\>

Defined in: [src/api/entities/Portfolio/index.ts:370](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Portfolio/index.ts#L370)

Retrieve a list of transactions where this portfolio was involved. Can be filtered using parameters

#### Parameters

Parameter
Type
Description

`filters`

\{ `account?`: `string`; `assetId?`: `string`; `ticker?`: `string`; \}

&hyphen;

`filters.account?`

`string`

Account involved in the settlement

`filters.assetId?`

`string`

&hyphen;

`filters.ticker?`

`string`

ticker involved in the transaction

#### Returns

`Promise`\<[`HistoricSettlement`](../../Portfolio/types/interfaces/HistoricSettlement.mdx)[]\>

#### Note

uses the middlewareV2

#### Inherited from

[`Portfolio`](../../Portfolio/classes/Portfolio.mdx).[`getTransactionHistory`](../../Portfolio/classes/Portfolio.mdx#gettransactionhistory)

***

### isCustodiedBy()

> **isCustodiedBy**(`args?`: `object`): `Promise`\<`boolean`\>

Defined in: [src/api/entities/Portfolio/index.ts:122](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Portfolio/index.ts#L122)

Return whether an Identity is the Portfolio custodian

#### Parameters

Parameter
Type
Description

`args?`

\{ `identity`: `string` \| [`Identity`](../../Identity/classes/Identity.mdx); \}

&hyphen;

`args.identity?`

`string` \| [`Identity`](../../Identity/classes/Identity.mdx)

optional, defaults to the signing Identity

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

[`Portfolio`](../../Portfolio/classes/Portfolio.mdx).[`isCustodiedBy`](../../Portfolio/classes/Portfolio.mdx#iscustodiedby)

***

### isEqual()

> **isEqual**(`entity`: [`Entity`](../../Entity/classes/Entity.mdx)\<`unknown`, `unknown`\>): `boolean`

Defined in: [src/api/entities/Entity.ts:61](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Entity.ts#L61)

Determine whether this Entity is the same as another one

#### Parameters

Parameter
Type

`entity`

[`Entity`](../../Entity/classes/Entity.mdx)\<`unknown`, `unknown`\>

#### Returns

`boolean`

#### Inherited from

[`Portfolio`](../../Portfolio/classes/Portfolio.mdx).[`isEqual`](../../Portfolio/classes/Portfolio.mdx#isequal)

***

### isOwnedBy()

> **isOwnedBy**(`args?`: `object`): `Promise`\<`boolean`\>

Defined in: [src/api/entities/Portfolio/index.ts:109](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Portfolio/index.ts#L109)

Return whether an Identity is the Portfolio owner

#### Parameters

Parameter
Type
Description

`args?`

\{ `identity`: `string` \| [`Identity`](../../Identity/classes/Identity.mdx); \}

&hyphen;

`args.identity?`

`string` \| [`Identity`](../../Identity/classes/Identity.mdx)

defaults to the signing Identity

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

[`Portfolio`](../../Portfolio/classes/Portfolio.mdx).[`isOwnedBy`](../../Portfolio/classes/Portfolio.mdx#isownedby)

***

### modifyName()

> **modifyName**(`args`: [`RenamePortfolioParams`](../../../procedures/types/interfaces/RenamePortfolioParams.mdx), `opts?`: [`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)): `Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`NumberedPortfolio`, `NumberedPortfolio`\>\>

Defined in: [src/api/entities/NumberedPortfolio.ts:73](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/NumberedPortfolio.ts#L73)

Rename portfolio

#### Parameters

Parameter
Type

`args`

[`RenamePortfolioParams`](../../../procedures/types/interfaces/RenamePortfolioParams.mdx)

`opts?`

[`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`NumberedPortfolio`, `NumberedPortfolio`\>\>

#### Note

Only the owner is allowed to rename the Portfolio.

#### Note

this method is of type [ProcedureMethod](../../../procedures/types/interfaces/ProcedureMethod.mdx), which means you can call [modifyName.checkAuthorization](../../../procedures/types/interfaces/ProcedureMethod.mdx#checkauthorization) on it to see whether the signing Account and Identity have the required roles and permissions to run it

***

### moveFunds()

> **moveFunds**(`args`: [`MoveFundsParams`](../../../procedures/types/interfaces/MoveFundsParams.mdx), `opts?`: [`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)): `Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

Defined in: [src/api/entities/Portfolio/index.ts:313](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Portfolio/index.ts#L313)

Moves funds from this Portfolio to another one owned by the same Identity

#### Parameters

Parameter
Type

`args`

[`MoveFundsParams`](../../../procedures/types/interfaces/MoveFundsParams.mdx)

`opts?`

[`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

#### Note

required role:
  - Portfolio Custodian

#### Note

this method is of type [ProcedureMethod](../../../procedures/types/interfaces/ProcedureMethod.mdx), which means you can call [moveFunds.checkAuthorization](../../../procedures/types/interfaces/ProcedureMethod.mdx#checkauthorization) on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Inherited from

[`Portfolio`](../../Portfolio/classes/Portfolio.mdx).[`moveFunds`](../../Portfolio/classes/Portfolio.mdx#movefunds)

***

### quitCustody()

> **quitCustody**(`opts?`: [`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)): `Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

Defined in: [src/api/entities/Portfolio/index.ts:321](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Portfolio/index.ts#L321)

Returns the custody of the portfolio to the portfolio owner unilaterally

#### Parameters

Parameter
Type

`opts?`

[`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

#### Note

required role:
  - Portfolio Custodian

#### Note

this method is of type [NoArgsProcedureMethod](../../../procedures/types/interfaces/NoArgsProcedureMethod.mdx), which means you can call [quitCustody.checkAuthorization](../../../procedures/types/interfaces/NoArgsProcedureMethod.mdx#checkauthorization) on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Inherited from

[`Portfolio`](../../Portfolio/classes/Portfolio.mdx).[`quitCustody`](../../Portfolio/classes/Portfolio.mdx#quitcustody)

***

### setCustodian()

> **setCustodian**(`args`: [`SetCustodianParams`](../../../procedures/types/interfaces/SetCustodianParams.mdx), `opts?`: [`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)): `Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<[`AuthorizationRequest`](../../AuthorizationRequest/classes/AuthorizationRequest.mdx), [`AuthorizationRequest`](../../AuthorizationRequest/classes/AuthorizationRequest.mdx)\>\>

Defined in: [src/api/entities/NumberedPortfolio.ts:162](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/NumberedPortfolio.ts#L162)

Send an invitation to an Identity to assign it as custodian for this Numbered Portfolio

#### Parameters

Parameter
Type

`args`

[`SetCustodianParams`](../../../procedures/types/interfaces/SetCustodianParams.mdx)

`opts?`

[`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<[`AuthorizationRequest`](../../AuthorizationRequest/classes/AuthorizationRequest.mdx), [`AuthorizationRequest`](../../AuthorizationRequest/classes/AuthorizationRequest.mdx)\>\>

#### Note

this will create an [Authorization Request](../../types/type-aliases/AuthorizationRequest.mdx) which has to be accepted by the `targetIdentity`.
  An [Account](../../Account/classes/Account.mdx) or [Identity](../../Identity/classes/Identity.mdx) can fetch its pending Authorization Requests by calling [authorizations.getReceived](../../common/namespaces/Authorizations/classes/Authorizations.mdx#getreceived).
  Also, an Account or Identity can directly fetch the details of an Authorization Request by calling [authorizations.getOne](../../common/namespaces/Authorizations/classes/Authorizations.mdx#getone)

#### Note

required role:
  - Portfolio Custodian

#### Note

this method is of type [ProcedureMethod](../../../procedures/types/interfaces/ProcedureMethod.mdx), which means you can call [setCustodian.checkAuthorization](../../../procedures/types/interfaces/ProcedureMethod.mdx#checkauthorization) on it to see whether the signing Account and Identity have the required roles and permissions to run it

***

### toHuman()

> **toHuman**(): [`HumanReadable`](../../Portfolio/interfaces/HumanReadable.mdx)

Defined in: [src/api/entities/Portfolio/index.ts:445](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Portfolio/index.ts#L445)

Return the Portfolio ID and owner DID

#### Returns

[`HumanReadable`](../../Portfolio/interfaces/HumanReadable.mdx)

#### Inherited from

[`Portfolio`](../../Portfolio/classes/Portfolio.mdx).[`toHuman`](../../Portfolio/classes/Portfolio.mdx#tohuman)

***

### generateUuid()

> `static` **generateUuid**\<`Identifiers`\>(`identifiers`: `Identifiers`): `string`

Defined in: [src/api/entities/Entity.ts:14](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Entity.ts#L14)

Generate the Entity's UUID from its identifying properties

#### Type Parameters

Type Parameter

`Identifiers`

#### Parameters

Parameter
Type
Description

`identifiers`

`Identifiers`

&hyphen;

#### Returns

`string`

#### Inherited from

[`Portfolio`](../../Portfolio/classes/Portfolio.mdx).[`generateUuid`](../../Portfolio/classes/Portfolio.mdx#generateuuid)

***

### unserialize()

> `static` **unserialize**\<`Identifiers`\>(`serialized`: `string`): `Identifiers`

Defined in: [src/api/entities/Entity.ts:23](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Entity.ts#L23)

Unserialize a UUID into its Unique Identifiers

#### Type Parameters

Type Parameter

`Identifiers`

#### Parameters

Parameter
Type
Description

`serialized`

`string`

UUID to unserialize

#### Returns

`Identifiers`

#### Inherited from

[`Portfolio`](../../Portfolio/classes/Portfolio.mdx).[`unserialize`](../../Portfolio/classes/Portfolio.mdx#unserialize)
