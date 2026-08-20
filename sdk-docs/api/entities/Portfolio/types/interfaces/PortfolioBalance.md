# Interface: PortfolioBalance

> Defined in: [src/api/entities/Portfolio/types.ts:7](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Portfolio/types.ts#L7)

# Interface: PortfolioBalance

Defined in: [src/api/entities/Portfolio/types.ts:7](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Portfolio/types.ts#L7)

## Extends

- [`Balance`](../../../Account/types/interfaces/Balance.mdx)

## Properties

### asset

> **asset**: [`FungibleAsset`](../../../Asset/Fungible/classes/FungibleAsset.mdx)

Defined in: [src/api/entities/Portfolio/types.ts:8](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Portfolio/types.ts#L8)

***

### free

> **free**: `BigNumber`

Defined in: [src/api/entities/Account/types.ts:11](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Account/types.ts#L11)

balance available for transferring

#### Inherited from

[`Balance`](../../../Account/types/interfaces/Balance.mdx).[`free`](../../../Account/types/interfaces/Balance.mdx#free)

***

### locked

> **locked**: `BigNumber`

Defined in: [src/api/entities/Account/types.ts:15](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Account/types.ts#L15)

unavailable balance, locked for some purpose (e.g. pending settlement instructions)

#### Inherited from

[`Balance`](../../../Account/types/interfaces/Balance.mdx).[`locked`](../../../Account/types/interfaces/Balance.mdx#locked)

***

### total

> **total**: `BigNumber`

Defined in: [src/api/entities/Account/types.ts:19](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Account/types.ts#L19)

free + locked

#### Inherited from

[`Balance`](../../../Account/types/interfaces/Balance.mdx).[`total`](../../../Account/types/interfaces/Balance.mdx#total)
