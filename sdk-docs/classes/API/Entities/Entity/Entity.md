---
id: "Entity"
title: "Class: Entity<UniqueIdentifiers, HumanReadable>"
sidebar_label: "Entity"
---

[api/entities/Entity](../../../../modules/API/Entities/Entity/Entity.md).Entity

Represents an object or resource in the Polymesh Ecosystem with its own set of properties and functionality

## Type parameters

| Name |
| :------ |
| `UniqueIdentifiers` |
| `HumanReadable` |

## Hierarchy

- **`Entity`**

  ↳ [`Account`](../Account/Account.md)

  ↳ [`BaseAsset`](../Asset/Base/BaseAsset/BaseAsset.md)

  ↳ [`Nft`](../Asset/NonFungible/Nft/Nft.md)

  ↳ [`AuthorizationRequest`](../AuthorizationRequest/AuthorizationRequest.md)

  ↳ [`Checkpoint`](../Checkpoint/Checkpoint.md)

  ↳ [`CheckpointSchedule`](../CheckpointSchedule/CheckpointSchedule.md)

  ↳ [`CorporateActionBase`](../CorporateActionBase/CorporateActionBase.md)

  ↳ [`Identity`](../Identity/Identity.md)

  ↳ [`Instruction`](../Instruction/Instruction.md)

  ↳ [`MetadataEntry`](../MetadataEntry/MetadataEntry.md)

  ↳ [`MultiSigProposal`](../MultiSigProposal/MultiSigProposal.md)

  ↳ [`Offering`](../Offering/Offering.md)

  ↳ [`PermissionGroup`](../PermissionGroup/PermissionGroup.md)

  ↳ [`Portfolio`](../Portfolio/Portfolio.md)

  ↳ [`Subsidy`](../Subsidy/Subsidy.md)

  ↳ [`TickerReservation`](../TickerReservation/TickerReservation.md)

  ↳ [`Venue`](../Venue/Venue.md)

## Properties

### uuid

• **uuid**: `string`

#### Defined in

[api/entities/Entity.ts:46](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c53723bab/src/api/entities/Entity.ts#L46)

## Methods

### exists

▸ `Abstract` **exists**(): `Promise`\<`boolean`\>

Determine whether this Entity exists on chain

#### Returns

`Promise`\<`boolean`\>

#### Defined in

[api/entities/Entity.ts:68](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c53723bab/src/api/entities/Entity.ts#L68)

___

### isEqual

▸ **isEqual**(`entity`): `boolean`

Determine whether this Entity is the same as another one

#### Parameters

| Name | Type |
| :------ | :------ |
| `entity` | [`Entity`](Entity.md)\<`unknown`, `unknown`\> |

#### Returns

`boolean`

#### Defined in

[api/entities/Entity.ts:61](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c53723bab/src/api/entities/Entity.ts#L61)

___

### toHuman

▸ `Abstract` **toHuman**(): `HumanReadable`

Returns Entity data in a human readable (JSON) format

#### Returns

`HumanReadable`

#### Defined in

[api/entities/Entity.ts:73](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c53723bab/src/api/entities/Entity.ts#L73)

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

#### Defined in

[api/entities/Entity.ts:14](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c53723bab/src/api/entities/Entity.ts#L14)

___

### isUniqueIdentifiers

▸ `Static` **isUniqueIdentifiers**(`identifiers`): `boolean`

Typeguard that checks whether the object passed corresponds to the unique identifiers of the class. Must be overridden

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifiers` | `unknown` | object to type check |

#### Returns

`boolean`

#### Defined in

[api/entities/Entity.ts:42](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c53723bab/src/api/entities/Entity.ts#L42)

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

#### Defined in

[api/entities/Entity.ts:23](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c53723bab/src/api/entities/Entity.ts#L23)
