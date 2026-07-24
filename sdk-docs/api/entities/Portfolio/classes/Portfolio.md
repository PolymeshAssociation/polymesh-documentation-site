# Abstract Class: Portfolio

> Defined in: [src/api/entities/Portfolio/index.ts:62](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Portfolio/index.ts#L62)

# Abstract Class: Portfolio

Defined in: [src/api/entities/Portfolio/index.ts:62](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Portfolio/index.ts#L62)

Represents a base Portfolio for a specific Identity in the Polymesh blockchain

## Extends

- [`Entity`](../../Entity/classes/Entity.mdx)\<[`UniqueIdentifiers`](../interfaces/UniqueIdentifiers.mdx), [`HumanReadable`](../interfaces/HumanReadable.mdx)\>

## Extended by

- [`DefaultPortfolio`](../../DefaultPortfolio/classes/DefaultPortfolio.mdx)
- [`NumberedPortfolio`](../../NumberedPortfolio/classes/NumberedPortfolio.mdx)

## Properties

### owner

> **owner**: [`Identity`](../../Identity/classes/Identity.mdx)

Defined in: [src/api/entities/Portfolio/index.ts:76](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Portfolio/index.ts#L76)

Identity of the Portfolio's owner

***

### uuid

> **uuid**: `string`

Defined in: [src/api/entities/Entity.ts:46](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Entity.ts#L46)

#### Inherited from

[`Entity`](../../Entity/classes/Entity.mdx).[`uuid`](../../Entity/classes/Entity.mdx#uuid)

## Methods

### exists()

> `abstract` **exists**(): `Promise`\<`boolean`\>

Defined in: [src/api/entities/Entity.ts:68](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Entity.ts#L68)

Determine whether this Entity exists on chain

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

[`Entity`](../../Entity/classes/Entity.mdx).[`exists`](../../Entity/classes/Entity.mdx#exists)

***

### getAssetBalances()

> **getAssetBalances**(`args?`: `object`): `Promise`\<[`PortfolioBalance`](../types/interfaces/PortfolioBalance.mdx)[]\>

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

`Promise`\<[`PortfolioBalance`](../types/interfaces/PortfolioBalance.mdx)[]\>

***

### getCollections()

> **getCollections**(`args?`: `object`): `Promise`\<[`PortfolioCollection`](../types/interfaces/PortfolioCollection.mdx)[]\>

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

`Promise`\<[`PortfolioCollection`](../types/interfaces/PortfolioCollection.mdx)[]\>

***

### getCustodian()

> **getCustodian**(): `Promise`\<[`Identity`](../../Identity/classes/Identity.mdx)\>

Defined in: [src/api/entities/Portfolio/index.ts:328](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Portfolio/index.ts#L328)

Retrieve the custodian Identity of this Portfolio

#### Returns

`Promise`\<[`Identity`](../../Identity/classes/Identity.mdx)\>

#### Note

if no custodian is set, the owner Identity is returned

***

### getTransactionHistory()

> **getTransactionHistory**(`filters?`: `object`): `Promise`\<[`HistoricSettlement`](../types/interfaces/HistoricSettlement.mdx)[]\>

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

`Promise`\<[`HistoricSettlement`](../types/interfaces/HistoricSettlement.mdx)[]\>

#### Note

uses the middlewareV2

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

[`Entity`](../../Entity/classes/Entity.mdx).[`isEqual`](../../Entity/classes/Entity.mdx#isequal)

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

***

### toHuman()

> **toHuman**(): [`HumanReadable`](../interfaces/HumanReadable.mdx)

Defined in: [src/api/entities/Portfolio/index.ts:445](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Portfolio/index.ts#L445)

Return the Portfolio ID and owner DID

#### Returns

[`HumanReadable`](../interfaces/HumanReadable.mdx)

#### Overrides

[`Entity`](../../Entity/classes/Entity.mdx).[`toHuman`](../../Entity/classes/Entity.mdx#tohuman)

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

[`Entity`](../../Entity/classes/Entity.mdx).[`generateUuid`](../../Entity/classes/Entity.mdx#generateuuid)

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

[`Entity`](../../Entity/classes/Entity.mdx).[`unserialize`](../../Entity/classes/Entity.mdx#unserialize)
