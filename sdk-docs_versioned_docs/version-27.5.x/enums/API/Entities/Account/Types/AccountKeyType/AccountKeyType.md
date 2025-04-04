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

[api/entities/Account/types.ts:35](https://github.com/PolymeshAssociation/polymesh-sdk/blob/49a0066c3/src/api/entities/Account/types.ts#L35)

___

### Normal

• **Normal** = ``""``

Account is a standard type (e.g. corresponds to the public key of a sr25519 pair)

#### Defined in

[api/entities/Account/types.ts:31](https://github.com/PolymeshAssociation/polymesh-sdk/blob/49a0066c3/src/api/entities/Account/types.ts#L31)

___

### SmartContract

• **SmartContract** = ``"SmartContract"``

Account represents a smart contract

#### Defined in

[api/entities/Account/types.ts:39](https://github.com/PolymeshAssociation/polymesh-sdk/blob/49a0066c3/src/api/entities/Account/types.ts#L39)
