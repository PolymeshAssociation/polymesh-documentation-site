---
id: "TransactionStatus"
title: "Enumeration: TransactionStatus"
sidebar_label: "TransactionStatus"
---

[types](../../../modules/Types/Types.md).TransactionStatus

## Enumeration Members

### Aborted

• **Aborted** = ``"Aborted"``

the transaction couldn't be broadcast. It was either dropped, usurped or invalidated
see https://github.com/paritytech/substrate/blob/master/primitives/transaction-pool/src/pool.rs#L58-L110

#### Defined in

[types/index.ts:80](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b6f9fb883/src/types/index.ts#L80)

___

### Failed

• **Failed** = ``"Failed"``

the transaction's execution failed due to a an on-chain validation error, insufficient balance for fees, or other such reasons

#### Defined in

[types/index.ts:75](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b6f9fb883/src/types/index.ts#L75)

___

### Idle

• **Idle** = ``"Idle"``

the transaction is prepped to run

#### Defined in

[types/index.ts:55](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b6f9fb883/src/types/index.ts#L55)

___

### Rejected

• **Rejected** = ``"Rejected"``

the transaction was rejected by the signer

#### Defined in

[types/index.ts:67](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b6f9fb883/src/types/index.ts#L67)

___

### Running

• **Running** = ``"Running"``

the transaction is being executed

#### Defined in

[types/index.ts:63](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b6f9fb883/src/types/index.ts#L63)

___

### Succeeded

• **Succeeded** = ``"Succeeded"``

the transaction was run successfully

#### Defined in

[types/index.ts:71](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b6f9fb883/src/types/index.ts#L71)

___

### Unapproved

• **Unapproved** = ``"Unapproved"``

the transaction is waiting for the user's signature

#### Defined in

[types/index.ts:59](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b6f9fb883/src/types/index.ts#L59)
