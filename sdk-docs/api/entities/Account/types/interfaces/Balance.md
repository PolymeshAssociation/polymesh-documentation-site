# Interface: Balance

> Defined in: [src/api/entities/Account/types.ts:7](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Account/types.ts#L7)

# Interface: Balance

Defined in: [src/api/entities/Account/types.ts:7](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Account/types.ts#L7)

## Extended by

- [`PortfolioBalance`](../../../Portfolio/types/interfaces/PortfolioBalance.mdx)

## Properties

### free

> **free**: `BigNumber`

Defined in: [src/api/entities/Account/types.ts:11](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Account/types.ts#L11)

balance available for transferring and paying fees

***

### locked

> **locked**: `BigNumber`

Defined in: [src/api/entities/Account/types.ts:15](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Account/types.ts#L15)

unavailable balance, either bonded for staking or locked for some other purpose

***

### total

> **total**: `BigNumber`

Defined in: [src/api/entities/Account/types.ts:19](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Account/types.ts#L19)

free + locked
