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

[types/index.ts:79](https://github.com/PolymeshAssociation/polymesh-sdk/blob/372a67e5d/src/types/index.ts#L79)

___

### Failed

• **Failed** = ``"Failed"``

the transaction's execution failed due to a an on-chain validation error, insufficient balance for fees, or other such reasons

#### Defined in

[types/index.ts:74](https://github.com/PolymeshAssociation/polymesh-sdk/blob/372a67e5d/src/types/index.ts#L74)

___

### Idle

• **Idle** = ``"Idle"``

the transaction is prepped to run

#### Defined in

[types/index.ts:54](https://github.com/PolymeshAssociation/polymesh-sdk/blob/372a67e5d/src/types/index.ts#L54)

___

### Rejected

• **Rejected** = ``"Rejected"``

the transaction was rejected by the signer

#### Defined in

[types/index.ts:66](https://github.com/PolymeshAssociation/polymesh-sdk/blob/372a67e5d/src/types/index.ts#L66)

___

### Running

• **Running** = ``"Running"``

the transaction is being executed

#### Defined in

[types/index.ts:62](https://github.com/PolymeshAssociation/polymesh-sdk/blob/372a67e5d/src/types/index.ts#L62)

___

### Succeeded

• **Succeeded** = ``"Succeeded"``

the transaction was run successfully

#### Defined in

[types/index.ts:70](https://github.com/PolymeshAssociation/polymesh-sdk/blob/372a67e5d/src/types/index.ts#L70)

___

### Unapproved

• **Unapproved** = ``"Unapproved"``

the transaction is waiting for the user's signature

#### Defined in

[types/index.ts:58](https://github.com/PolymeshAssociation/polymesh-sdk/blob/372a67e5d/src/types/index.ts#L58)
