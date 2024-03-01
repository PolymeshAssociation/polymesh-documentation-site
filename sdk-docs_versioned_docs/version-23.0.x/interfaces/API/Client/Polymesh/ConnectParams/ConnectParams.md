---
id: "ConnectParams"
title: "Interface: ConnectParams"
sidebar_label: "ConnectParams"
---

[api/client/Polymesh](../../../../../modules/API/Client/Polymesh/Polymesh.md).ConnectParams

## Properties

### middlewareV2

• `Optional` **middlewareV2**: [`MiddlewareConfig`](../../../../Types/MiddlewareConfig/MiddlewareConfig.md)

Allows for historical data to be queried. Required for some methods to work

#### Defined in

[api/client/Polymesh.ts:47](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2c78f6c34/src/api/client/Polymesh.ts#L47)

___

### nodeUrl

• **nodeUrl**: `string`

The websocket URL for the Polymesh node to connect to

#### Defined in

[api/client/Polymesh.ts:39](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2c78f6c34/src/api/client/Polymesh.ts#L39)

___

### polkadot

• `Optional` **polkadot**: [`PolkadotConfig`](../../../../Types/PolkadotConfig/PolkadotConfig.md)

Advanced options that will be used with the underling polkadot.js instance

#### Defined in

[api/client/Polymesh.ts:51](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2c78f6c34/src/api/client/Polymesh.ts#L51)

___

### signingManager

• `Optional` **signingManager**: `SigningManager`

Handles signing of transactions. Required to be set before submitting transactions

#### Defined in

[api/client/Polymesh.ts:43](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2c78f6c34/src/api/client/Polymesh.ts#L43)
