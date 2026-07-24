# Class: Offering

> Defined in: [src/api/entities/Offering/index.ts:65](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Offering/index.ts#L65)

# Class: Offering

Defined in: [src/api/entities/Offering/index.ts:65](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Offering/index.ts#L65)

Represents an Asset Offering in the Polymesh blockchain

## Extends

- [`Entity`](../../Entity/classes/Entity.mdx)\<[`UniqueIdentifiers`](../interfaces/UniqueIdentifiers.mdx), [`HumanReadable`](../interfaces/HumanReadable.mdx)\>

## Properties

### asset

> **asset**: [`FungibleAsset`](../../Asset/Fungible/classes/FungibleAsset.mdx)

Defined in: [src/api/entities/Offering/index.ts:84](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Offering/index.ts#L84)

Asset being offered

***

### id

> **id**: `BigNumber`

Defined in: [src/api/entities/Offering/index.ts:79](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Offering/index.ts#L79)

identifier number of the Offering

***

### uuid

> **uuid**: `string`

Defined in: [src/api/entities/Entity.ts:46](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Entity.ts#L46)

#### Inherited from

[`Entity`](../../Entity/classes/Entity.mdx).[`uuid`](../../Entity/classes/Entity.mdx#uuid)

## Methods

### close()

> **close**(`opts?`: [`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)): `Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

Defined in: [src/api/entities/Offering/index.ts:200](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Offering/index.ts#L200)

Close the Offering

#### Parameters

Parameter
Type

`opts?`

[`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

#### Note

this method is of type [NoArgsProcedureMethod](../../../procedures/types/interfaces/NoArgsProcedureMethod.mdx), which means you can call [close.checkAuthorization](../../../procedures/types/interfaces/NoArgsProcedureMethod.mdx#checkauthorization) on it to see whether the signing Account and Identity have the required roles and permissions to run it

***

### details()

#### Call Signature

> **details**(): `Promise`\<[`OfferingDetails`](../types/interfaces/OfferingDetails.mdx)\>

Defined in: [src/api/entities/Offering/index.ts:139](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Offering/index.ts#L139)

Retrieve the Offering's details

##### Returns

`Promise`\<[`OfferingDetails`](../types/interfaces/OfferingDetails.mdx)\>

Promise that resolves to the Offering details

#### Call Signature

> **details**(`callback`: [`SubCallback`](../../types/type-aliases/SubCallback.mdx)\<[`OfferingDetails`](../types/interfaces/OfferingDetails.mdx)\>): `Promise`\<[`UnsubCallback`](../../types/type-aliases/UnsubCallback.mdx)\>

Defined in: [src/api/entities/Offering/index.ts:150](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Offering/index.ts#L150)

Retrieve the Offering's details (with subscription support)

##### Parameters

Parameter
Type
Description

`callback`

[`SubCallback`](../../types/type-aliases/SubCallback.mdx)\<[`OfferingDetails`](../types/interfaces/OfferingDetails.mdx)\>

Callback function that receives offering detail updates

##### Returns

`Promise`\<[`UnsubCallback`](../../types/type-aliases/UnsubCallback.mdx)\>

Promise that resolves to an unsubscribe function

##### Note

can be subscribed to, if connected to node using a web socket

***

### enableOffChainFunding()

> **enableOffChainFunding**(`args`: [`EnableOffChainFundingParams`](../../../procedures/types/interfaces/EnableOffChainFundingParams.mdx), `opts?`: [`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)): `Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

Defined in: [src/api/entities/Offering/index.ts:220](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Offering/index.ts#L220)

Enable off-chain funding for the Offering

#### Parameters

Parameter
Type

`args`

[`EnableOffChainFundingParams`](../../../procedures/types/interfaces/EnableOffChainFundingParams.mdx)

`opts?`

[`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

#### Throws

if:
  - Trying to enable off-chain funding on an Offering that does not exist
  - Trying to enable off-chain funding on an Offering that has already ended
  - Trying to enable off-chain funding on an Offering that is already closed

#### Note

this method is of type [ProcedureMethod](../../../procedures/types/interfaces/ProcedureMethod.mdx), which means you can call [enableOffChainFunding.checkAuthorization](../../../procedures/types/interfaces/ProcedureMethod.mdx#checkauthorization) on it to see whether the signing Account and Identity have the required roles and permissions to run it

***

### exists()

> **exists**(): `Promise`\<`boolean`\>

Defined in: [src/api/entities/Offering/index.ts:329](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Offering/index.ts#L329)

Determine whether this Offering exists on chain

#### Returns

`Promise`\<`boolean`\>

#### Overrides

[`Entity`](../../Entity/classes/Entity.mdx).[`exists`](../../Entity/classes/Entity.mdx#exists)

***

### freeze()

> **freeze**(`opts?`: [`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)): `Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`Offering`, `Offering`\>\>

Defined in: [src/api/entities/Offering/index.ts:205](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Offering/index.ts#L205)

Freeze the Offering

#### Parameters

Parameter
Type

`opts?`

[`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`Offering`, `Offering`\>\>

#### Note

this method is of type [NoArgsProcedureMethod](../../../procedures/types/interfaces/NoArgsProcedureMethod.mdx), which means you can call [freeze.checkAuthorization](../../../procedures/types/interfaces/NoArgsProcedureMethod.mdx#checkauthorization) on it to see whether the signing Account and Identity have the required roles and permissions to run it

***

### generateOffChainFundingReceipt()

> **generateOffChainFundingReceipt**(`args`: `object`): `Promise`\<[`OffChainFundingReceipt`](../types/interfaces/OffChainFundingReceipt.mdx)\>

Defined in: [src/api/entities/Offering/index.ts:375](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Offering/index.ts#L375)

Generate an off-chain funding receipt for this offering

#### Parameters

Parameter
Type
Description

`args`

\{ `amount`: `BigNumber`; `metadata?`: `string`; `offChainTicker`: `string`; `sender`: `string` \| [`Identity`](../../Identity/classes/Identity.mdx); `signer?`: `string` \| [`Account`](../../Account/classes/Account.mdx); `signerKeyRingType?`: [`SignerKeyRingType`](../../../procedures/types/enumerations/SignerKeyRingType.mdx); `uid`: `BigNumber`; \}

&hyphen;

`args.amount`

`BigNumber`

equivalent investment amount in the raising asset (calculated from the off-chain asset value based on STO tier pricing)

`args.metadata?`

`string`

(optional) additional metadata to be associated with the receipt

`args.offChainTicker`

`string`

ticker symbol of the off-chain asset being transferred (e.g., 'BTC', 'ETH')

`args.sender`

`string` \| [`Identity`](../../Identity/classes/Identity.mdx)

Identity or DID of the investor providing the off-chain funding

`args.signer?`

`string` \| [`Account`](../../Account/classes/Account.mdx)

(optional) authorized venue receipt signer to generate the cryptographic signature. Defaults to signing Account associated with the SDK

`args.signerKeyRingType?`

[`SignerKeyRingType`](../../../procedures/types/enumerations/SignerKeyRingType.mdx)

(optional) keyring type for signature generation. Defaults to 'Sr25519'. Supported types: SR25519, ED25519, ECDSA

`args.uid`

`BigNumber`

unique receipt ID (UID) for this off-chain funding transaction

#### Returns

`Promise`\<[`OffChainFundingReceipt`](../types/interfaces/OffChainFundingReceipt.mdx)\>

#### Note

The generated receipt contains SCALE-encoded data wrapped with `<Bytes>` tags, including:
- Receipt UID
- Fundraiser ID
- Sender's DID (investor)
- Receiver's DID (raising portfolio owner)
- Off-chain asset ticker
- Equivalent investment amount in raising asset (calculated from STO tier pricing)

#### Note

The amount must represent the exact investment cost as calculated by the STO's blended pricing mechanism

***

### getInvestments()

> **getInvestments**(`opts?`: `object`): `Promise`\<[`ResultSet`](../../types/interfaces/ResultSet.mdx)\<[`Investment`](../types/interfaces/Investment.mdx)\>\>

Defined in: [src/api/entities/Offering/index.ts:250](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Offering/index.ts#L250)

Retrieve all investments made on this Offering

#### Parameters

Parameter
Type
Description

`opts`

\{ `size?`: `BigNumber`; `start?`: `BigNumber`; \}

&hyphen;

`opts.size?`

`BigNumber`

page size

`opts.start?`

`BigNumber`

page offset

#### Returns

`Promise`\<[`ResultSet`](../../types/interfaces/ResultSet.mdx)\<[`Investment`](../types/interfaces/Investment.mdx)\>\>

#### Note

supports pagination

#### Note

uses the middleware V2

***

### invest()

> **invest**(`args`: `object` & \{ `fundingPortfolio`: [`PortfolioLike`](../../types/type-aliases/PortfolioLike.mdx); \} \| \{ `offChainFundingReceipt`: [`OffChainFundingReceipt`](../types/interfaces/OffChainFundingReceipt.mdx); `offChainTicker`: `string`; \}, `opts?`: [`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)): `Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

Defined in: [src/api/entities/Offering/index.ts:239](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Offering/index.ts#L239)

Invest in the Offering

#### Parameters

Parameter
Type

`args`

`object` & \{ `fundingPortfolio`: [`PortfolioLike`](../../types/type-aliases/PortfolioLike.mdx); \} \| \{ `offChainFundingReceipt`: [`OffChainFundingReceipt`](../types/interfaces/OffChainFundingReceipt.mdx); `offChainTicker`: `string`; \}

`opts?`

[`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

#### Note

required roles:
  - Purchase Portfolio Custodian
  - Funding Portfolio Custodian

#### Note

this method is of type [ProcedureMethod](../../../procedures/types/interfaces/ProcedureMethod.mdx), which means you can call [invest.checkAuthorization](../../../procedures/types/interfaces/ProcedureMethod.mdx#checkauthorization) on it to see whether the signing Account and Identity have the required roles and permissions to run it

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

### modifyTimes()

> **modifyTimes**(`args`: [`ModifyOfferingTimesParams`](../../../procedures/types/type-aliases/ModifyOfferingTimesParams.mdx), `opts?`: [`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)): `Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

Defined in: [src/api/entities/Offering/index.ts:230](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Offering/index.ts#L230)

Modify the start/end time of the Offering

#### Parameters

Parameter
Type

`args`

[`ModifyOfferingTimesParams`](../../../procedures/types/type-aliases/ModifyOfferingTimesParams.mdx)

`opts?`

[`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

#### Throws

if:
  - Trying to modify the start time on an Offering that already started
  - Trying to modify anything on an Offering that already ended
  - Trying to change start or end time to a past date

#### Note

this method is of type [ProcedureMethod](../../../procedures/types/interfaces/ProcedureMethod.mdx), which means you can call [modifyTimes.checkAuthorization](../../../procedures/types/interfaces/ProcedureMethod.mdx#checkauthorization) on it to see whether the signing Account and Identity have the required roles and permissions to run it

***

### offChainFundingDetails()

> **offChainFundingDetails**(): `Promise`\<[`OffChainFundingDetails`](../types/type-aliases/OffChainFundingDetails.mdx)\>

Defined in: [src/api/entities/Offering/index.ts:302](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Offering/index.ts#L302)

Retrieve off chain funding details

#### Returns

`Promise`\<[`OffChainFundingDetails`](../types/type-aliases/OffChainFundingDetails.mdx)\>

***

### toHuman()

> **toHuman**(): [`HumanReadable`](../interfaces/HumanReadable.mdx)

Defined in: [src/api/entities/Offering/index.ts:345](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Offering/index.ts#L345)

Return the Offering's ID and Asset ticker

#### Returns

[`HumanReadable`](../interfaces/HumanReadable.mdx)

#### Overrides

[`Entity`](../../Entity/classes/Entity.mdx).[`toHuman`](../../Entity/classes/Entity.mdx#tohuman)

***

### unfreeze()

> **unfreeze**(`opts?`: [`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)): `Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`Offering`, `Offering`\>\>

Defined in: [src/api/entities/Offering/index.ts:210](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Offering/index.ts#L210)

Unfreeze the Offering

#### Parameters

Parameter
Type

`opts?`

[`ProcedureOpts`](../../../procedures/types/interfaces/ProcedureOpts.mdx)

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`Offering`, `Offering`\>\>

#### Note

this method is of type [NoArgsProcedureMethod](../../../procedures/types/interfaces/NoArgsProcedureMethod.mdx), which means you can call [unfreeze.checkAuthorization](../../../procedures/types/interfaces/NoArgsProcedureMethod.mdx#checkauthorization) on it to see whether the signing Account and Identity have the required roles and permissions to run it

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
