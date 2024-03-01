---
id: 'BaseAsset'
title: 'Class: BaseAsset'
sidebar_label: 'BaseAsset'
---

[api/entities/Asset/Base/BaseAsset](../../../../../../modules/API/Entities/Asset/Base/BaseAsset/BaseAsset.md).BaseAsset

Class used to manage functionality common to all assets.

## Hierarchy

- [`Entity`](../../../Entity/Entity.md) \<[`UniqueIdentifiers`](../../../../../../interfaces/API/Entities/Asset/Types/UniqueIdentifiers/UniqueIdentifiers.md), `string`\>

  ↳ **`BaseAsset`**

  ↳↳ [`FungibleAsset`](../../Fungible/FungibleAsset.md)

  ↳↳ [`NftCollection`](../../NonFungible/NftCollection/NftCollection.md)

## Properties

### compliance

• **compliance**: [`Compliance`](../Compliance/Compliance.md)

#### Defined in

[api/entities/Asset/Base/BaseAsset.ts:58](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/api/entities/Asset/Base/BaseAsset.ts#L58)

---

### did

• **did**: `string`

Identity ID of the Asset (used for Claims)

#### Defined in

[api/entities/Asset/Base/BaseAsset.ts:66](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/api/entities/Asset/Base/BaseAsset.ts#L66)

---

### documents

• **documents**: [`Documents`](../Documents/Documents.md)

#### Defined in

[api/entities/Asset/Base/BaseAsset.ts:59](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/api/entities/Asset/Base/BaseAsset.ts#L59)

---

### metadata

• **metadata**: [`Metadata`](../Metadata/Metadata.md)

#### Defined in

[api/entities/Asset/Base/BaseAsset.ts:60](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/api/entities/Asset/Base/BaseAsset.ts#L60)

---

### permissions

• **permissions**: [`Permissions`](../Permissions/Permissions.md)

#### Defined in

[api/entities/Asset/Base/BaseAsset.ts:61](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/api/entities/Asset/Base/BaseAsset.ts#L61)

---

### ticker

• **ticker**: `string`

ticker of the Asset

#### Defined in

[api/entities/Asset/Base/BaseAsset.ts:71](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/api/entities/Asset/Base/BaseAsset.ts#L71)

---

### uuid

• **uuid**: `string`

#### Inherited from

[Entity](../../../Entity/Entity.md).[uuid](../../../Entity/Entity.md#uuid)

#### Defined in

[api/entities/Entity.ts:46](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/api/entities/Entity.ts#L46)

## Methods

### addRequiredMediators

▸ **addRequiredMediators**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../../../modules/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

Add required mediators. Mediators must approve any trades involving the asset

#### Parameters

| Name    | Type                                                                                                                  |
| :------ | :-------------------------------------------------------------------------------------------------------------------- |
| `args`  | [`AssetMediatorParams`](../../../../../../interfaces/API/Procedures/Types/AssetMediatorParams/AssetMediatorParams.md) |
| `opts?` | [`ProcedureOpts`](../../../../../../interfaces/Types/ProcedureOpts/ProcedureOpts.md)                                  |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../../../modules/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

**`Note`**

this method is of type [ProcedureMethod](../../../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [addRequiredMediators.checkAuthorization](../../../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/entities/Asset/Base/BaseAsset.ts:178](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/api/entities/Asset/Base/BaseAsset.ts#L178)

---

### details

▸ **details**(): `Promise`\<[`AssetDetails`](../../../../../../interfaces/API/Entities/Asset/Types/AssetDetails/AssetDetails.md)\>

Retrieve the Asset's data

#### Returns

`Promise`\<[`AssetDetails`](../../../../../../interfaces/API/Entities/Asset/Types/AssetDetails/AssetDetails.md)\>

**`Note`**

can be subscribed to

#### Defined in

[api/entities/Asset/Base/BaseAsset.ts:267](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/api/entities/Asset/Base/BaseAsset.ts#L267)

▸ **details**(`callback`): `Promise`\<[`UnsubCallback`](../../../../../../modules/Types/Types.md#unsubcallback)\>

#### Parameters

| Name       | Type                                                                                                                                                                           |
| :--------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `callback` | [`SubCallback`](../../../../../../modules/Types/Types.md#subcallback) \<[`AssetDetails`](../../../../../../interfaces/API/Entities/Asset/Types/AssetDetails/AssetDetails.md)\> |

#### Returns

`Promise`\<[`UnsubCallback`](../../../../../../modules/Types/Types.md#unsubcallback)\>

#### Defined in

[api/entities/Asset/Base/BaseAsset.ts:268](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/api/entities/Asset/Base/BaseAsset.ts#L268)

---

### freeze

▸ **freeze**(`opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../../../modules/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

Freeze transfers of the Asset

#### Parameters

| Name    | Type                                                                                 |
| :------ | :----------------------------------------------------------------------------------- |
| `opts?` | [`ProcedureOpts`](../../../../../../interfaces/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../../../modules/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

**`Note`**

this method is of type [NoArgsProcedureMethod](../../../../../../interfaces/Types/NoArgsProcedureMethod/NoArgsProcedureMethod.md), which means you can call [freeze.checkAuthorization](../../../../../../interfaces/Types/NoArgsProcedureMethod/NoArgsProcedureMethod.md#checkauthorization)
on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/entities/Asset/Base/BaseAsset.ts:158](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/api/entities/Asset/Base/BaseAsset.ts#L158)

---

### getIdentifiers

▸ **getIdentifiers**(): `Promise`\<[`SecurityIdentifier`](../../../../../../interfaces/Types/SecurityIdentifier/SecurityIdentifier.md)[]\>

Retrieve the Asset's identifiers list

#### Returns

`Promise`\<[`SecurityIdentifier`](../../../../../../interfaces/Types/SecurityIdentifier/SecurityIdentifier.md)[]\>

**`Note`**

can be subscribed to

#### Defined in

[api/entities/Asset/Base/BaseAsset.ts:197](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/api/entities/Asset/Base/BaseAsset.ts#L197)

▸ **getIdentifiers**(`callback?`): `Promise`\<[`UnsubCallback`](../../../../../../modules/Types/Types.md#unsubcallback)\>

#### Parameters

| Name        | Type                                                                                                                                                                            |
| :---------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `callback?` | [`SubCallback`](../../../../../../modules/Types/Types.md#subcallback) \<[`SecurityIdentifier`](../../../../../../interfaces/Types/SecurityIdentifier/SecurityIdentifier.md)[]\> |

#### Returns

`Promise`\<[`UnsubCallback`](../../../../../../modules/Types/Types.md#unsubcallback)\>

#### Defined in

[api/entities/Asset/Base/BaseAsset.ts:198](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/api/entities/Asset/Base/BaseAsset.ts#L198)

---

### getRequiredMediators

▸ **getRequiredMediators**(): `Promise`\<[`Identity`](../../../Identity/Identity.md)[]\>

Get required Asset mediators. These Identities must approve any Instruction involving the asset

#### Returns

`Promise`\<[`Identity`](../../../Identity/Identity.md)[]\>

#### Defined in

[api/entities/Asset/Base/BaseAsset.ts:360](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/api/entities/Asset/Base/BaseAsset.ts#L360)

---

### isEqual

▸ **isEqual**(`entity`): `boolean`

Determine whether this Entity is the same as another one

#### Parameters

| Name     | Type                                                          |
| :------- | :------------------------------------------------------------ |
| `entity` | [`Entity`](../../../Entity/Entity.md)\<`unknown`, `unknown`\> |

#### Returns

`boolean`

#### Inherited from

[Entity](../../../Entity/Entity.md).[isEqual](../../../Entity/Entity.md#isequal)

#### Defined in

[api/entities/Entity.ts:61](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/api/entities/Entity.ts#L61)

---

### isFrozen

▸ **isFrozen**(): `Promise`\<`boolean`\>

Check whether transfers are frozen for the Asset

#### Returns

`Promise`\<`boolean`\>

**`Note`**

can be subscribed to

#### Defined in

[api/entities/Asset/Base/BaseAsset.ts:233](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/api/entities/Asset/Base/BaseAsset.ts#L233)

▸ **isFrozen**(`callback`): `Promise`\<[`UnsubCallback`](../../../../../../modules/Types/Types.md#unsubcallback)\>

#### Parameters

| Name       | Type                                                                               |
| :--------- | :--------------------------------------------------------------------------------- |
| `callback` | [`SubCallback`](../../../../../../modules/Types/Types.md#subcallback)\<`boolean`\> |

#### Returns

`Promise`\<[`UnsubCallback`](../../../../../../modules/Types/Types.md#unsubcallback)\>

#### Defined in

[api/entities/Asset/Base/BaseAsset.ts:234](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/api/entities/Asset/Base/BaseAsset.ts#L234)

---

### removeRequiredMediators

▸ **removeRequiredMediators**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../../../modules/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

Remove required mediators

#### Parameters

| Name    | Type                                                                                                                  |
| :------ | :-------------------------------------------------------------------------------------------------------------------- |
| `args`  | [`AssetMediatorParams`](../../../../../../interfaces/API/Procedures/Types/AssetMediatorParams/AssetMediatorParams.md) |
| `opts?` | [`ProcedureOpts`](../../../../../../interfaces/Types/ProcedureOpts/ProcedureOpts.md)                                  |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../../../modules/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

**`Note`**

this method is of type [ProcedureMethod](../../../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [removeRequiredMediators.checkAuthorization](../../../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/entities/Asset/Base/BaseAsset.ts:188](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/api/entities/Asset/Base/BaseAsset.ts#L188)

---

### toHuman

▸ **toHuman**(): `string`

Return the NftCollection's ticker

#### Returns

`string`

#### Overrides

[Entity](../../../Entity/Entity.md).[toHuman](../../../Entity/Entity.md#tohuman)

#### Defined in

[api/entities/Asset/Base/BaseAsset.ts:400](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/api/entities/Asset/Base/BaseAsset.ts#L400)

---

### transferOwnership

▸ **transferOwnership**(`args`, `opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../../../modules/Types/Types.md#genericpolymeshtransaction) \<[`AuthorizationRequest`](../../../AuthorizationRequest/AuthorizationRequest.md), [`AuthorizationRequest`](../../../AuthorizationRequest/AuthorizationRequest.md)\>\>

Transfer ownership of the Asset to another Identity. This generates an authorization request that must be accepted
by the recipient

#### Parameters

| Name    | Type                                                                                                                                             |
| :------ | :----------------------------------------------------------------------------------------------------------------------------------------------- |
| `args`  | [`TransferAssetOwnershipParams`](../../../../../../interfaces/API/Procedures/Types/TransferAssetOwnershipParams/TransferAssetOwnershipParams.md) |
| `opts?` | [`ProcedureOpts`](../../../../../../interfaces/Types/ProcedureOpts/ProcedureOpts.md)                                                             |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../../../modules/Types/Types.md#genericpolymeshtransaction) \<[`AuthorizationRequest`](../../../AuthorizationRequest/AuthorizationRequest.md), [`AuthorizationRequest`](../../../AuthorizationRequest/AuthorizationRequest.md)\>\>

**`Note`**

this will create [Authorization Request](../../../AuthorizationRequest/AuthorizationRequest.md) which has to be accepted by the `target` Identity.
An [Account](../../../Account/Account.md) or [Identity](../../../Identity/Identity.md) can fetch its pending Authorization Requests by calling [authorizations.getReceived](../../../Common/Namespaces/Authorizations/Authorizations.md#getreceived).
Also, an Account or Identity can directly fetch the details of an Authorization Request by calling [authorizations.getOne](../../../Common/Namespaces/Authorizations/Authorizations.md#getone)

**`Note`**

this method is of type [ProcedureMethod](../../../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [transferOwnership.checkAuthorization](../../../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/entities/Asset/Base/BaseAsset.ts:84](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/api/entities/Asset/Base/BaseAsset.ts#L84)

---

### unfreeze

▸ **unfreeze**(`opts?`): `Promise`\<[`GenericPolymeshTransaction`](../../../../../../modules/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

Unfreeze transfers of the Asset

#### Parameters

| Name    | Type                                                                                 |
| :------ | :----------------------------------------------------------------------------------- |
| `opts?` | [`ProcedureOpts`](../../../../../../interfaces/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../../../modules/Types/Types.md#genericpolymeshtransaction)\<`void`, `void`\>\>

**`Note`**

this method is of type [NoArgsProcedureMethod](../../../../../../interfaces/Types/NoArgsProcedureMethod/NoArgsProcedureMethod.md), which means you can call [unfreeze.checkAuthorization](../../../../../../interfaces/Types/NoArgsProcedureMethod/NoArgsProcedureMethod.md#checkauthorization)
on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Defined in

[api/entities/Asset/Base/BaseAsset.ts:168](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/api/entities/Asset/Base/BaseAsset.ts#L168)

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

[Entity](../../../Entity/Entity.md).[generateUuid](../../../Entity/Entity.md#generateuuid)

#### Defined in

[api/entities/Entity.ts:14](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/api/entities/Entity.ts#L14)

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

[Entity](../../../Entity/Entity.md).[unserialize](../../../Entity/Entity.md#unserialize)

#### Defined in

[api/entities/Entity.ts:23](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/api/entities/Entity.ts#L23)
