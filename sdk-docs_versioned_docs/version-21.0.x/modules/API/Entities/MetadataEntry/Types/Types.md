---
id: "Types"
title: "Module: MetadataEntry Types"
sidebar_label: "Types"
---

## Enumerations

- [MetadataLockStatus](../../../../../enums/API/Entities/MetadataEntry/Types/MetadataLockStatus/MetadataLockStatus.md)
- [MetadataType](../../../../../enums/API/Entities/MetadataEntry/Types/MetadataType/MetadataType.md)

## Interfaces

- [MetadataDetails](../../../../../interfaces/API/Entities/MetadataEntry/Types/MetadataDetails/MetadataDetails.md)
- [MetadataSpec](../../../../../interfaces/API/Entities/MetadataEntry/Types/MetadataSpec/MetadataSpec.md)

## Type Aliases

### GlobalMetadataKey

Ƭ **GlobalMetadataKey**: [`MetadataDetails`](../../../../../interfaces/API/Entities/MetadataEntry/Types/MetadataDetails/MetadataDetails.md) & \{ `id`: `BigNumber`  }

#### Defined in

[api/entities/MetadataEntry/types.ts:53](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/MetadataEntry/types.ts#L53)

___

### MetadataValue

Ƭ **MetadataValue**: \{ `value`: `string`  } & [`MetadataValueDetails`](Types.md#metadatavaluedetails)

#### Defined in

[api/entities/MetadataEntry/types.ts:49](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/MetadataEntry/types.ts#L49)

___

### MetadataValueDetails

Ƭ **MetadataValueDetails**: \{ `expiry`: `Date` \| ``null``  } & \{ `lockStatus`: `Exclude`\<[`MetadataLockStatus`](../../../../../enums/API/Entities/MetadataEntry/Types/MetadataLockStatus/MetadataLockStatus.md), [`LockedUntil`](../../../../../enums/API/Entities/MetadataEntry/Types/MetadataLockStatus/MetadataLockStatus.md#lockeduntil)\>  } \| \{ `lockStatus`: [`LockedUntil`](../../../../../enums/API/Entities/MetadataEntry/Types/MetadataLockStatus/MetadataLockStatus.md#lockeduntil) ; `lockedUntil`: `Date`  }

#### Defined in

[api/entities/MetadataEntry/types.ts:25](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/MetadataEntry/types.ts#L25)
