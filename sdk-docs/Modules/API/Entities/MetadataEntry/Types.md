## Enumerations

- [MetadataLockStatus](../../../../Enums/API/Entities/MetadataEntry/Types/MetadataLockStatus.md)
- [MetadataType](../../../../Enums/API/Entities/MetadataEntry/Types/MetadataType.md)

## Interfaces

- [MetadataDetails](../../../../Interfaces/API/Entities/MetadataEntry/Types/MetadataDetails.md)
- [MetadataSpec](../../../../Interfaces/API/Entities/MetadataEntry/Types/MetadataSpec.md)

## Type Aliases

### GlobalMetadataKey

Ƭ **GlobalMetadataKey**: [`MetadataDetails`](../../../../Interfaces/API/Entities/MetadataEntry/Types/MetadataDetails.md) & { `id`: `BigNumber`  }

#### Defined in

[api/entities/MetadataEntry/types.ts:53](https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/api/entities/MetadataEntry/types.ts#L53)

___

### MetadataValue

Ƭ **MetadataValue**: { `value`: `string`  } & [`MetadataValueDetails`](Types.md#metadatavaluedetails)

#### Defined in

[api/entities/MetadataEntry/types.ts:49](https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/api/entities/MetadataEntry/types.ts#L49)

___

### MetadataValueDetails

Ƭ **MetadataValueDetails**: { `expiry`: `Date` \| ``null``  } & { `lockStatus`: `Exclude`<[`MetadataLockStatus`](../../../../Enums/API/Entities/MetadataEntry/Types/MetadataLockStatus.md), [`LockedUntil`](../../../../Enums/API/Entities/MetadataEntry/Types/MetadataLockStatus.md#lockeduntil)\>  } \| { `lockStatus`: [`LockedUntil`](../../../../Enums/API/Entities/MetadataEntry/Types/MetadataLockStatus.md#lockeduntil) ; `lockedUntil`: `Date`  }

#### Defined in

[api/entities/MetadataEntry/types.ts:25](https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/api/entities/MetadataEntry/types.ts#L25)
