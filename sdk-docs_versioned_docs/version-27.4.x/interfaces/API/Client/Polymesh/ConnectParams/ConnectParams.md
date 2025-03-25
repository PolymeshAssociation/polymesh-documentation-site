---
id: "ConnectParams"
title: "Interface: ConnectParams"
sidebar_label: "ConnectParams"
---

[api/client/Polymesh](../../../../../modules/API/Client/Polymesh/Polymesh.md).ConnectParams

## Properties

### middlewareV2

• `Optional` **middlewareV2**: [`MiddlewareConfig`](../../Types/MiddlewareConfig/MiddlewareConfig.md)

Allows for historical data to be queried. Required for some methods to work

#### Defined in

[api/client/Polymesh.ts:53](https://github.com/PolymeshAssociation/polymesh-sdk/blob/f8a937f04/src/api/client/Polymesh.ts#L53)

___

### nodeUrl

• **nodeUrl**: `string`

The websocket or http URL for the Polymesh node to connect to

**`Note`**

subscription features are not available if an http URL is provided

#### Defined in

[api/client/Polymesh.ts:45](https://github.com/PolymeshAssociation/polymesh-sdk/blob/f8a937f04/src/api/client/Polymesh.ts#L45)

___

### polkadot

• `Optional` **polkadot**: [`PolkadotConfig`](../../Types/PolkadotConfig/PolkadotConfig.md)

Advanced options that will be used with the underling polkadot.js instance

#### Defined in

[api/client/Polymesh.ts:57](https://github.com/PolymeshAssociation/polymesh-sdk/blob/f8a937f04/src/api/client/Polymesh.ts#L57)

___

### signingManager

• `Optional` **signingManager**: `SigningManager`

Handles signing of transactions. Required to be set before submitting transactions

#### Defined in

[api/client/Polymesh.ts:49](https://github.com/PolymeshAssociation/polymesh-sdk/blob/f8a937f04/src/api/client/Polymesh.ts#L49)
