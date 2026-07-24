# Interface: ConnectParams

> Defined in: [src/api/client/Polymesh.ts:37](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/client/Polymesh.ts#L37)

# Interface: ConnectParams

Defined in: [src/api/client/Polymesh.ts:37](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/client/Polymesh.ts#L37)

## Properties

### middlewareV2?

> `optional` **middlewareV2?**: [`MiddlewareConfig`](../../types/interfaces/MiddlewareConfig.mdx)

Defined in: [src/api/client/Polymesh.ts:51](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/client/Polymesh.ts#L51)

Allows for historical data to be queried. Required for some methods to work

***

### nodeUrl

> **nodeUrl**: `string`

Defined in: [src/api/client/Polymesh.ts:43](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/client/Polymesh.ts#L43)

The websocket or http URL for the Polymesh node to connect to

#### Note

subscription features are not available if an http URL is provided

***

### polkadot?

> `optional` **polkadot?**: [`PolkadotConfig`](../../types/interfaces/PolkadotConfig.mdx)

Defined in: [src/api/client/Polymesh.ts:55](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/client/Polymesh.ts#L55)

Advanced options that will be used with the underling polkadot.js instance

***

### signingManager?

> `optional` **signingManager?**: `SigningManager`

Defined in: [src/api/client/Polymesh.ts:47](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/client/Polymesh.ts#L47)

Handles signing of transactions. Required to be set before submitting transactions
