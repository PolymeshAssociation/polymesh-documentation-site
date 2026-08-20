# Interface: Balance

> Defined in: [src/api/entities/Account/types.ts:7](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Account/types.ts#L7)

# Interface: Balance

Defined in: [src/api/entities/Account/types.ts:7](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Account/types.ts#L7)

## Extended by

- [`PortfolioBalance`](../../../Portfolio/types/interfaces/PortfolioBalance.mdx)

## Properties

### free

> **free**: `BigNumber`

Defined in: [src/api/entities/Account/types.ts:11](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Account/types.ts#L11)

balance available for transferring

***

### locked

> **locked**: `BigNumber`

Defined in: [src/api/entities/Account/types.ts:15](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Account/types.ts#L15)

unavailable balance, locked for some purpose (e.g. pending settlement instructions)

***

### total

> **total**: `BigNumber`

Defined in: [src/api/entities/Account/types.ts:19](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Account/types.ts#L19)

free + locked
