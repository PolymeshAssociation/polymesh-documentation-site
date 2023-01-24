[api/entities/Asset/AssetHolders](../../../../../Modules/API/Entities/Asset/AssetHolders.md).AssetHolders

Handles all Asset Holders related functionality

## Hierarchy

- `Namespace`<[`Asset`](../Asset.md)\>

  ↳ **`AssetHolders`**

## Methods

### get

▸ **get**(`paginationOpts?`): `Promise`<[`ResultSet`](../../../../../Interfaces/Types/ResultSet.md)<[`IdentityBalance`](../../../../../Interfaces/API/Entities/Asset/Types/IdentityBalance.md)\>\>

Retrieve all the Asset Holders with their respective balance

**`Note`**

supports pagination

#### Parameters

| Name | Type |
| :------ | :------ |
| `paginationOpts?` | [`PaginationOptions`](../../../../../Interfaces/Types/PaginationOptions.md) |

#### Returns

`Promise`<[`ResultSet`](../../../../../Interfaces/Types/ResultSet.md)<[`IdentityBalance`](../../../../../Interfaces/API/Entities/Asset/Types/IdentityBalance.md)\>\>
