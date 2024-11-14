---
id: "Checkpoint"
title: "Class: Checkpoint"
sidebar_label: "Checkpoint"
---

[api/entities/Checkpoint](../../../../modules/API/Entities/Checkpoint/Checkpoint.md).Checkpoint

Represents a snapshot of the Asset's holders and their respective balances
  at a certain point in time

## Hierarchy

- [`Entity`](../Entity/Entity.md)\<[`UniqueIdentifiers`](../../../../interfaces/API/Entities/Checkpoint/UniqueIdentifiers/UniqueIdentifiers.md), [`HumanReadable`](../../../../interfaces/API/Entities/Checkpoint/HumanReadable/HumanReadable.md)\>

  ↳ **`Checkpoint`**

## Properties

### asset

• **asset**: [`FungibleAsset`](../Asset/Fungible/FungibleAsset.md)

Asset whose balances are being recorded in this Checkpoint

#### Defined in

[api/entities/Checkpoint.ts:59](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b55e63737/src/api/entities/Checkpoint.ts#L59)

___

### id

• **id**: `BigNumber`

Checkpoint identifier number

#### Defined in

[api/entities/Checkpoint.ts:54](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b55e63737/src/api/entities/Checkpoint.ts#L54)

___

### uuid

• **uuid**: `string`

#### Inherited from

[Entity](../Entity/Entity.md).[uuid](../Entity/Entity.md#uuid)

#### Defined in

[api/entities/Entity.ts:46](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b55e63737/src/api/entities/Entity.ts#L46)

## Methods

### allBalances

▸ **allBalances**(`paginationOpts?`): `Promise`\<[`ResultSet`](../../../../interfaces/API/Entities/Types/ResultSet/ResultSet.md)\<[`IdentityBalance`](../../../../interfaces/API/Entities/Asset/Types/IdentityBalance/IdentityBalance.md)\>\>

Retrieve all Asset Holder balances at this Checkpoint

#### Parameters

| Name | Type |
| :------ | :------ |
| `paginationOpts?` | [`PaginationOptions`](../../../../interfaces/API/Entities/Types/PaginationOptions/PaginationOptions.md) |

#### Returns

`Promise`\<[`ResultSet`](../../../../interfaces/API/Entities/Types/ResultSet/ResultSet.md)\<[`IdentityBalance`](../../../../interfaces/API/Entities/Asset/Types/IdentityBalance/IdentityBalance.md)\>\>

**`Note`**

supports pagination

**`Note`**

current Asset holders who didn't hold any tokens when the Checkpoint was created will be listed with a balance of 0.
This arises from a chain storage optimization and pagination.

**`See`**

[balance](Checkpoint.md#balance) for a more detailed explanation of the logic

#### Defined in

[api/entities/Checkpoint.ts:111](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b55e63737/src/api/entities/Checkpoint.ts#L111)

___

### balance

▸ **balance**(`args?`): `Promise`\<`BigNumber`\>

Retrieve the balance of a specific Asset Holder Identity at this Checkpoint

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args?` | `Object` | - |
| `args.identity` | `string` \| [`Identity`](../Identity/Identity.md) | defaults to the signing Identity |

#### Returns

`Promise`\<`BigNumber`\>

**`Note`**

A checkpoint only records balances when they change. The implementation is to query for all balance updates for [ticker, did] pair.
If no balance updates have happened since the Checkpoint has been created, then the storage will not have an entry for the user. Instead the current balance should be used.
The balance is stored only when the Identity makes a transaction after a Checkpoint is created. This helps keep storage usage to a minimum

#### Defined in

[api/entities/Checkpoint.ts:205](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b55e63737/src/api/entities/Checkpoint.ts#L205)

___

### createdAt

▸ **createdAt**(): `Promise`\<`Date`\>

Retrieve this Checkpoint's creation date

#### Returns

`Promise`\<`Date`\>

#### Defined in

[api/entities/Checkpoint.ts:91](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b55e63737/src/api/entities/Checkpoint.ts#L91)

___

### exists

▸ **exists**(): `Promise`\<`boolean`\>

Determine whether this Checkpoint exists on chain

#### Returns

`Promise`\<`boolean`\>

#### Overrides

[Entity](../Entity/Entity.md).[exists](../Entity/Entity.md#exists)

#### Defined in

[api/entities/Checkpoint.ts:250](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b55e63737/src/api/entities/Checkpoint.ts#L250)

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

[api/entities/Entity.ts:61](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b55e63737/src/api/entities/Entity.ts#L61)

___

### toHuman

▸ **toHuman**(): [`HumanReadable`](../../../../interfaces/API/Entities/Checkpoint/HumanReadable/HumanReadable.md)

Return the Checkpoint's ticker and identifier

#### Returns

[`HumanReadable`](../../../../interfaces/API/Entities/Checkpoint/HumanReadable/HumanReadable.md)

#### Overrides

[Entity](../Entity/Entity.md).[toHuman](../Entity/Entity.md#tohuman)

#### Defined in

[api/entities/Checkpoint.ts:272](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b55e63737/src/api/entities/Checkpoint.ts#L272)

___

### totalSupply

▸ **totalSupply**(): `Promise`\<`BigNumber`\>

Retrieve the Asset's total supply at this checkpoint

#### Returns

`Promise`\<`BigNumber`\>

#### Defined in

[api/entities/Checkpoint.ts:76](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b55e63737/src/api/entities/Checkpoint.ts#L76)

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

[api/entities/Entity.ts:14](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b55e63737/src/api/entities/Entity.ts#L14)

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

[api/entities/Entity.ts:23](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b55e63737/src/api/entities/Entity.ts#L23)
