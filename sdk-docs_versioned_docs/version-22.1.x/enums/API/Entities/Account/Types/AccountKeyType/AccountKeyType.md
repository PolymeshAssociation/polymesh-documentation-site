---
id: "AccountKeyType"
title: "Enumeration: AccountKeyType"
sidebar_label: "AccountKeyType"
---

[api/entities/Account/types](../../../../../../modules/API/Entities/Account/Types/Types.md).AccountKeyType

Distinguishes MultiSig and Smart Contract accounts

## Enumeration Members

### MultiSig

• **MultiSig** = ``"MultiSig"``

Account is a MultiSig. (i.e. multiple signatures are required to authorize transactions)

#### Defined in

[api/entities/Account/types.ts:22](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2d3ac2aea/src/api/entities/Account/types.ts#L22)

___

### Normal

• **Normal** = ``""``

Account is a standard type (e.g. corresponds to the public key of a sr25519 pair)

#### Defined in

[api/entities/Account/types.ts:18](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2d3ac2aea/src/api/entities/Account/types.ts#L18)

___

### SmartContract

• **SmartContract** = ``"SmartContract"``

Account represents a smart contract

#### Defined in

[api/entities/Account/types.ts:26](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2d3ac2aea/src/api/entities/Account/types.ts#L26)
