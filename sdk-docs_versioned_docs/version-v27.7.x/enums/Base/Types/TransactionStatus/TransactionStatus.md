---
id: "TransactionStatus"
title: "Enumeration: TransactionStatus"
sidebar_label: "TransactionStatus"
---

[base/types](../../../../modules/Base/Types/Types.md).TransactionStatus

## Enumeration Members

### Aborted

• **Aborted** = ``"Aborted"``

the transaction couldn't be broadcast. It was either dropped, usurped or invalidated
see https://github.com/paritytech/substrate/blob/master/primitives/transaction-pool/src/pool.rs#L58-L110

#### Defined in

[base/types.ts:50](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9e72221/src/base/types.ts#L50)

___

### Failed

• **Failed** = ``"Failed"``

the transaction's execution failed due to a an on-chain validation error, insufficient balance for fees, or other such reasons

#### Defined in

[base/types.ts:45](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9e72221/src/base/types.ts#L45)

___

### Idle

• **Idle** = ``"Idle"``

the transaction is prepped to run

#### Defined in

[base/types.ts:25](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9e72221/src/base/types.ts#L25)

___

### Rejected

• **Rejected** = ``"Rejected"``

the transaction was rejected by the signer

#### Defined in

[base/types.ts:37](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9e72221/src/base/types.ts#L37)

___

### Running

• **Running** = ``"Running"``

the transaction is being executed

#### Defined in

[base/types.ts:33](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9e72221/src/base/types.ts#L33)

___

### Succeeded

• **Succeeded** = ``"Succeeded"``

the transaction was run successfully

#### Defined in

[base/types.ts:41](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9e72221/src/base/types.ts#L41)

___

### Unapproved

• **Unapproved** = ``"Unapproved"``

the transaction is waiting for the user's signature

#### Defined in

[base/types.ts:29](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9e72221/src/base/types.ts#L29)
