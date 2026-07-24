# Class: BaseAsset

> Defined in: [src/api/entities/Asset/Base/BaseAsset.ts:68](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Asset/Base/BaseAsset.ts#L68)

# Class: BaseAsset

Defined in: [src/api/entities/Asset/Base/BaseAsset.ts:68](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Asset/Base/BaseAsset.ts#L68)

Class used to manage functionality common to all assets.

## Extends

- [`Entity`](../../../../Entity/classes/Entity.mdx)\<[`UniqueIdentifiers`](../../../types/interfaces/UniqueIdentifiers.mdx), `string`\>

## Extended by

- [`FungibleAsset`](../../../Fungible/classes/FungibleAsset.mdx)
- [`NftCollection`](../../../NonFungible/NftCollection/classes/NftCollection.mdx)

## Properties

### compliance

> **compliance**: [`Compliance`](../../Compliance/classes/Compliance.mdx)

Defined in: [src/api/entities/Asset/Base/BaseAsset.ts:70](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Asset/Base/BaseAsset.ts#L70)

***

### documents

> **documents**: [`Documents`](../../Documents/classes/Documents.mdx)

Defined in: [src/api/entities/Asset/Base/BaseAsset.ts:71](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Asset/Base/BaseAsset.ts#L71)

***

### id

> **id**: `string`

Defined in: [src/api/entities/Asset/Base/BaseAsset.ts:78](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Asset/Base/BaseAsset.ts#L78)

Unique ID of the Asset in UUID format

***

### metadata

> **metadata**: [`Metadata`](../../Metadata/classes/Metadata.mdx)

Defined in: [src/api/entities/Asset/Base/BaseAsset.ts:72](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Asset/Base/BaseAsset.ts#L72)

***

### permissions

> **permissions**: [`Permissions`](../../Permissions/classes/Permissions.mdx)

Defined in: [src/api/entities/Asset/Base/BaseAsset.ts:73](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Asset/Base/BaseAsset.ts#L73)

***

### uuid

> **uuid**: `string`

Defined in: [src/api/entities/Entity.ts:46](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Entity.ts#L46)

#### Inherited from

[`Entity`](../../../../Entity/classes/Entity.mdx).[`uuid`](../../../../Entity/classes/Entity.mdx#uuid)

## Accessors

### rawId

#### Get Signature

> **get** **rawId**(): `string`

Defined in: [src/api/entities/Asset/Base/BaseAsset.ts:85](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Asset/Base/BaseAsset.ts#L85)

Unique ID of the Asset in hex format

##### Note

Although UUID format is the usual representation of asset IDs, generic polkadot/substrate tools usually expect it in hex format

##### Returns

`string`

## Methods

### addRequiredMediators()

> **addRequiredMediators**(`args`: [`AssetMediatorParams`](../../../../../procedures/types/interfaces/AssetMediatorParams.mdx), `opts?`: [`ProcedureOpts`](../../../../../procedures/types/interfaces/ProcedureOpts.mdx)): `Promise`\<[`GenericPolymeshTransaction`](../../../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

Defined in: [src/api/entities/Asset/Base/BaseAsset.ts:212](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Asset/Base/BaseAsset.ts#L212)

Add required mediators. Mediators must approve any trades involving the asset

#### Parameters

Parameter
Type

`args`

[`AssetMediatorParams`](../../../../../procedures/types/interfaces/AssetMediatorParams.mdx)

`opts?`

[`ProcedureOpts`](../../../../../procedures/types/interfaces/ProcedureOpts.mdx)

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

#### Note

this method is of type [ProcedureMethod](../../../../../procedures/types/interfaces/ProcedureMethod.mdx), which means you can call [addRequiredMediators.checkAuthorization](../../../../../procedures/types/interfaces/ProcedureMethod.mdx#checkauthorization) on it to see whether the signing Account and Identity have the required roles and permissions to run it

***

### currentFundingRound()

#### Call Signature

> **currentFundingRound**(): `Promise`\<`string` \| `null`\>

Defined in: [src/api/entities/Asset/Base/BaseAsset.ts:499](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Asset/Base/BaseAsset.ts#L499)

Retrieve the Asset's funding round

##### Returns

`Promise`\<`string` \| `null`\>

Promise that resolves to the current funding round name or null if not set

#### Call Signature

> **currentFundingRound**(`callback`: [`SubCallback`](../../../../types/type-aliases/SubCallback.mdx)\<`string` \| `null`\>): `Promise`\<[`UnsubCallback`](../../../../types/type-aliases/UnsubCallback.mdx)\>

Defined in: [src/api/entities/Asset/Base/BaseAsset.ts:509](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Asset/Base/BaseAsset.ts#L509)

Retrieve the Asset's funding round

##### Parameters

Parameter
Type
Description

`callback`

[`SubCallback`](../../../../types/type-aliases/SubCallback.mdx)\<`string` \| `null`\>

Callback function that receives funding round updates

##### Returns

`Promise`\<[`UnsubCallback`](../../../../types/type-aliases/UnsubCallback.mdx)\>

Promise that resolves to an unsubscribe function

##### Note

can be subscribed to, if connected to node using a web socket

***

### details()

#### Call Signature

> **details**(): `Promise`\<[`AssetDetails`](../../../types/interfaces/AssetDetails.mdx)\>

Defined in: [src/api/entities/Asset/Base/BaseAsset.ts:332](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Asset/Base/BaseAsset.ts#L332)

Retrieve the Asset's data

##### Returns

`Promise`\<[`AssetDetails`](../../../types/interfaces/AssetDetails.mdx)\>

Promise that resolves to the Asset details

#### Call Signature

> **details**(`callback`: [`SubCallback`](../../../../types/type-aliases/SubCallback.mdx)\<[`AssetDetails`](../../../types/interfaces/AssetDetails.mdx)\>): `Promise`\<[`UnsubCallback`](../../../../types/type-aliases/UnsubCallback.mdx)\>

Defined in: [src/api/entities/Asset/Base/BaseAsset.ts:342](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Asset/Base/BaseAsset.ts#L342)

Retrieve the Asset's data

##### Parameters

Parameter
Type
Description

`callback`

[`SubCallback`](../../../../types/type-aliases/SubCallback.mdx)\<[`AssetDetails`](../../../types/interfaces/AssetDetails.mdx)\>

Callback function that receives Asset details updates

##### Returns

`Promise`\<[`UnsubCallback`](../../../../types/type-aliases/UnsubCallback.mdx)\>

Promise that resolves to an unsubscribe function

##### Note

can be subscribed to, if connected to node using a web socket

***

### freeze()

> **freeze**(`opts?`: [`ProcedureOpts`](../../../../../procedures/types/interfaces/ProcedureOpts.mdx)): `Promise`\<[`GenericPolymeshTransaction`](../../../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

Defined in: [src/api/entities/Asset/Base/BaseAsset.ts:202](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Asset/Base/BaseAsset.ts#L202)

Freeze transfers of the Asset

#### Parameters

Parameter
Type

`opts?`

[`ProcedureOpts`](../../../../../procedures/types/interfaces/ProcedureOpts.mdx)

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

#### Note

this method is of type [NoArgsProcedureMethod](../../../../../procedures/types/interfaces/NoArgsProcedureMethod.mdx), which means you can call [freeze.checkAuthorization](../../../../../procedures/types/interfaces/NoArgsProcedureMethod.mdx#checkauthorization) on it to see whether the signing Account and Identity have the required roles and permissions to run it

***

### getIdentifiers()

#### Call Signature

> **getIdentifiers**(): `Promise`\<[`SecurityIdentifier`](../../../types/interfaces/SecurityIdentifier.mdx)[]\>

Defined in: [src/api/entities/Asset/Base/BaseAsset.ts:241](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Asset/Base/BaseAsset.ts#L241)

Retrieve the Asset's identifiers list

##### Returns

`Promise`\<[`SecurityIdentifier`](../../../types/interfaces/SecurityIdentifier.mdx)[]\>

Promise that resolves to the list of security identifiers

#### Call Signature

> **getIdentifiers**(`callback?`: [`SubCallback`](../../../../types/type-aliases/SubCallback.mdx)\<[`SecurityIdentifier`](../../../types/interfaces/SecurityIdentifier.mdx)[]\>): `Promise`\<[`UnsubCallback`](../../../../types/type-aliases/UnsubCallback.mdx)\>

Defined in: [src/api/entities/Asset/Base/BaseAsset.ts:251](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Asset/Base/BaseAsset.ts#L251)

Retrieve the Asset's identifiers list

##### Parameters

Parameter
Type
Description

`callback?`

[`SubCallback`](../../../../types/type-aliases/SubCallback.mdx)\<[`SecurityIdentifier`](../../../types/interfaces/SecurityIdentifier.mdx)[]\>

Callback function that receives identifier updates

##### Returns

`Promise`\<[`UnsubCallback`](../../../../types/type-aliases/UnsubCallback.mdx)\>

Promise that resolves to an unsubscribe function

##### Note

can be subscribed to, if connected to node using a web socket

***

### getRequiredMediators()

> **getRequiredMediators**(): `Promise`\<[`Identity`](../../../../Identity/classes/Identity.mdx)[]\>

Defined in: [src/api/entities/Asset/Base/BaseAsset.ts:444](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Asset/Base/BaseAsset.ts#L444)

Get required Asset mediators. These Identities must approve any Instruction involving the asset

#### Returns

`Promise`\<[`Identity`](../../../../Identity/classes/Identity.mdx)[]\>

***

### getVenueFilteringDetails()

> **getVenueFilteringDetails**(): `Promise`\<[`VenueFilteringDetails`](../../../types/interfaces/VenueFilteringDetails.mdx)\>

Defined in: [src/api/entities/Asset/Base/BaseAsset.ts:464](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Asset/Base/BaseAsset.ts#L464)

Get venue filtering details

#### Returns

`Promise`\<[`VenueFilteringDetails`](../../../types/interfaces/VenueFilteringDetails.mdx)\>

***

### isEqual()

> **isEqual**(`entity`: [`Entity`](../../../../Entity/classes/Entity.mdx)\<`unknown`, `unknown`\>): `boolean`

Defined in: [src/api/entities/Entity.ts:61](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Entity.ts#L61)

Determine whether this Entity is the same as another one

#### Parameters

Parameter
Type

`entity`

[`Entity`](../../../../Entity/classes/Entity.mdx)\<`unknown`, `unknown`\>

#### Returns

`boolean`

#### Inherited from

[`Entity`](../../../../Entity/classes/Entity.mdx).[`isEqual`](../../../../Entity/classes/Entity.mdx#isequal)

***

### isFrozen()

#### Call Signature

> **isFrozen**(): `Promise`\<`boolean`\>

Defined in: [src/api/entities/Asset/Base/BaseAsset.ts:289](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Asset/Base/BaseAsset.ts#L289)

Check whether transfers are frozen for the Asset

##### Returns

`Promise`\<`boolean`\>

Promise that resolves to true if transfers are frozen, false otherwise

#### Call Signature

> **isFrozen**(`callback`: [`SubCallback`](../../../../types/type-aliases/SubCallback.mdx)\<`boolean`\>): `Promise`\<[`UnsubCallback`](../../../../types/type-aliases/UnsubCallback.mdx)\>

Defined in: [src/api/entities/Asset/Base/BaseAsset.ts:299](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Asset/Base/BaseAsset.ts#L299)

Check whether transfers are frozen for the Asset

##### Parameters

Parameter
Type
Description

`callback`

[`SubCallback`](../../../../types/type-aliases/SubCallback.mdx)\<`boolean`\>

Callback function that receives frozen status updates

##### Returns

`Promise`\<[`UnsubCallback`](../../../../types/type-aliases/UnsubCallback.mdx)\>

Promise that resolves to an unsubscribe function

##### Note

can be subscribed to, if connected to node using a web socket

***

### linkTicker()

> **linkTicker**(`args`: [`LinkTickerToAssetParams`](../../../../../procedures/types/interfaces/LinkTickerToAssetParams.mdx), `opts?`: [`ProcedureOpts`](../../../../../procedures/types/interfaces/ProcedureOpts.mdx)): `Promise`\<[`GenericPolymeshTransaction`](../../../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

Defined in: [src/api/entities/Asset/Base/BaseAsset.ts:225](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Asset/Base/BaseAsset.ts#L225)

Link ticker to the asset

#### Parameters

Parameter
Type

`args`

[`LinkTickerToAssetParams`](../../../../../procedures/types/interfaces/LinkTickerToAssetParams.mdx)

`opts?`

[`ProcedureOpts`](../../../../../procedures/types/interfaces/ProcedureOpts.mdx)

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

#### Note

if ticker is already reserved, then required role:
- Ticker Owner

#### Note

this method is of type [ProcedureMethod](../../../../../procedures/types/interfaces/ProcedureMethod.mdx), which means you can call [linkTicker.checkAuthorization](../../../../../procedures/types/interfaces/ProcedureMethod.mdx#checkauthorization) on it to see whether the signing Account and Identity have the required roles and permissions to run it

***

### modify()

> **modify**(`args`: [`ModifyAssetParams`](../../../../../procedures/types/type-aliases/ModifyAssetParams.mdx), `opts?`: [`ProcedureOpts`](../../../../../procedures/types/interfaces/ProcedureOpts.mdx)): `Promise`\<[`GenericPolymeshTransaction`](../../../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<[`Asset`](../../../types/type-aliases/Asset.mdx), [`Asset`](../../../types/type-aliases/Asset.mdx)\>\>

Defined in: [src/api/entities/Asset/Base/BaseAsset.ts:121](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Asset/Base/BaseAsset.ts#L121)

Modify some properties of the Asset

#### Parameters

Parameter
Type

`args`

[`ModifyAssetParams`](../../../../../procedures/types/type-aliases/ModifyAssetParams.mdx)

`opts?`

[`ProcedureOpts`](../../../../../procedures/types/interfaces/ProcedureOpts.mdx)

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<[`Asset`](../../../types/type-aliases/Asset.mdx), [`Asset`](../../../types/type-aliases/Asset.mdx)\>\>

#### Throws

if the passed values result in no changes being made to the Asset

#### Throws

if the passed assetType is not a known asset type or a custom type that has not been created on the chain

#### Throws

if trying to modify an NftCollection's assetType

#### Note

this method is of type [ProcedureMethod](../../../../../procedures/types/interfaces/ProcedureMethod.mdx), which means you can call [modify.checkAuthorization](../../../../../procedures/types/interfaces/ProcedureMethod.mdx#checkauthorization) on it to see whether the signing Account and Identity have the required roles and permissions to run it

***

### removeRequiredMediators()

> **removeRequiredMediators**(`args`: [`AssetMediatorParams`](../../../../../procedures/types/interfaces/AssetMediatorParams.mdx), `opts?`: [`ProcedureOpts`](../../../../../procedures/types/interfaces/ProcedureOpts.mdx)): `Promise`\<[`GenericPolymeshTransaction`](../../../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

Defined in: [src/api/entities/Asset/Base/BaseAsset.ts:217](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Asset/Base/BaseAsset.ts#L217)

Remove required mediators

#### Parameters

Parameter
Type

`args`

[`AssetMediatorParams`](../../../../../procedures/types/interfaces/AssetMediatorParams.mdx)

`opts?`

[`ProcedureOpts`](../../../../../procedures/types/interfaces/ProcedureOpts.mdx)

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

#### Note

this method is of type [ProcedureMethod](../../../../../procedures/types/interfaces/ProcedureMethod.mdx), which means you can call [removeRequiredMediators.checkAuthorization](../../../../../procedures/types/interfaces/ProcedureMethod.mdx#checkauthorization) on it to see whether the signing Account and Identity have the required roles and permissions to run it

***

### setVenueFiltering()

> **setVenueFiltering**(`args`: [`SetVenueFilteringParams`](../../../../../procedures/types/type-aliases/SetVenueFilteringParams.mdx), `opts?`: [`ProcedureOpts`](../../../../../procedures/types/interfaces/ProcedureOpts.mdx)): `Promise`\<[`GenericPolymeshTransaction`](../../../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

Defined in: [src/api/entities/Asset/Base/BaseAsset.ts:102](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Asset/Base/BaseAsset.ts#L102)

Enable/disable venue filtering for this Asset and/or set allowed/disallowed venues

#### Parameters

Parameter
Type

`args`

[`SetVenueFilteringParams`](../../../../../procedures/types/type-aliases/SetVenueFilteringParams.mdx)

`opts?`

[`ProcedureOpts`](../../../../../procedures/types/interfaces/ProcedureOpts.mdx)

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

#### Note

this method is of type [ProcedureMethod](../../../../../procedures/types/interfaces/ProcedureMethod.mdx), which means you can call [setVenueFiltering.checkAuthorization](../../../../../procedures/types/interfaces/ProcedureMethod.mdx#checkauthorization) on it to see whether the signing Account and Identity have the required roles and permissions to run it

***

### toHuman()

> **toHuman**(): `string`

Defined in: [src/api/entities/Asset/Base/BaseAsset.ts:565](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Asset/Base/BaseAsset.ts#L565)

Return the BaseAsset's ID

#### Returns

`string`

#### Overrides

[`Entity`](../../../../Entity/classes/Entity.mdx).[`toHuman`](../../../../Entity/classes/Entity.mdx#tohuman)

***

### transferOwnership()

> **transferOwnership**(`args`: [`TransferAssetOwnershipParams`](../../../../../procedures/types/interfaces/TransferAssetOwnershipParams.mdx), `opts?`: [`ProcedureOpts`](../../../../../procedures/types/interfaces/ProcedureOpts.mdx)): `Promise`\<[`GenericPolymeshTransaction`](../../../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<[`AuthorizationRequest`](../../../../AuthorizationRequest/classes/AuthorizationRequest.mdx), [`AuthorizationRequest`](../../../../AuthorizationRequest/classes/AuthorizationRequest.mdx)\>\>

Defined in: [src/api/entities/Asset/Base/BaseAsset.ts:97](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Asset/Base/BaseAsset.ts#L97)

Transfer ownership of the Asset to another Identity. This generates an authorization request that must be accepted
  by the recipient

#### Parameters

Parameter
Type

`args`

[`TransferAssetOwnershipParams`](../../../../../procedures/types/interfaces/TransferAssetOwnershipParams.mdx)

`opts?`

[`ProcedureOpts`](../../../../../procedures/types/interfaces/ProcedureOpts.mdx)

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<[`AuthorizationRequest`](../../../../AuthorizationRequest/classes/AuthorizationRequest.mdx), [`AuthorizationRequest`](../../../../AuthorizationRequest/classes/AuthorizationRequest.mdx)\>\>

#### Note

this will create [Authorization Request](../../../../types/type-aliases/AuthorizationRequest.mdx) which has to be accepted by the `target` Identity.
  An [Account](../../../../Account/classes/Account.mdx) or [Identity](../../../../Identity/classes/Identity.mdx) can fetch its pending Authorization Requests by calling [authorizations.getReceived](../../../../common/namespaces/Authorizations/classes/Authorizations.mdx#getreceived).
  Also, an Account or Identity can directly fetch the details of an Authorization Request by calling [authorizations.getOne](../../../../common/namespaces/Authorizations/classes/Authorizations.mdx#getone)

#### Note

this method is of type [ProcedureMethod](../../../../../procedures/types/interfaces/ProcedureMethod.mdx), which means you can call [transferOwnership.checkAuthorization](../../../../../procedures/types/interfaces/ProcedureMethod.mdx#checkauthorization) on it to see whether the signing Account and Identity have the required roles and permissions to run it

***

### unfreeze()

> **unfreeze**(`opts?`: [`ProcedureOpts`](../../../../../procedures/types/interfaces/ProcedureOpts.mdx)): `Promise`\<[`GenericPolymeshTransaction`](../../../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

Defined in: [src/api/entities/Asset/Base/BaseAsset.ts:207](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Asset/Base/BaseAsset.ts#L207)

Unfreeze transfers of the Asset

#### Parameters

Parameter
Type

`opts?`

[`ProcedureOpts`](../../../../../procedures/types/interfaces/ProcedureOpts.mdx)

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

#### Note

this method is of type [NoArgsProcedureMethod](../../../../../procedures/types/interfaces/NoArgsProcedureMethod.mdx), which means you can call [unfreeze.checkAuthorization](../../../../../procedures/types/interfaces/NoArgsProcedureMethod.mdx#checkauthorization) on it to see whether the signing Account and Identity have the required roles and permissions to run it

***

### unlinkTicker()

> **unlinkTicker**(`opts?`: [`ProcedureOpts`](../../../../../procedures/types/interfaces/ProcedureOpts.mdx)): `Promise`\<[`GenericPolymeshTransaction`](../../../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

Defined in: [src/api/entities/Asset/Base/BaseAsset.ts:234](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Asset/Base/BaseAsset.ts#L234)

Unlink ticker from the Asset

#### Parameters

Parameter
Type

`opts?`

[`ProcedureOpts`](../../../../../procedures/types/interfaces/ProcedureOpts.mdx)

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

#### Note

Only the ticker owner is allowed to unlink the Asset

#### Throws

if there is no ticker to unlink

#### Note

this method is of type [NoArgsProcedureMethod](../../../../../procedures/types/interfaces/NoArgsProcedureMethod.mdx), which means you can call [unlinkTicker.checkAuthorization](../../../../../procedures/types/interfaces/NoArgsProcedureMethod.mdx#checkauthorization) on it to see whether the signing Account and Identity have the required roles and permissions to run it

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

[`Entity`](../../../../Entity/classes/Entity.mdx).[`generateUuid`](../../../../Entity/classes/Entity.mdx#generateuuid)

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

[`Entity`](../../../../Entity/classes/Entity.mdx).[`unserialize`](../../../../Entity/classes/Entity.mdx#unserialize)
