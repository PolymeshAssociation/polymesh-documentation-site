---
id: "ProcedureOpts"
title: "Interface: ProcedureOpts"
sidebar_label: "ProcedureOpts"
---

[api/procedures/types](../../../../../modules/API/Procedures/Types/Types.md).ProcedureOpts

## Properties

### mortality

• `Optional` **mortality**: [`MortalityProcedureOpt`](../../../../../modules/API/Procedures/Types/Types.md#mortalityprocedureopt)

This option allows for transactions that never expire, aka "immortal". By default, a transaction is only valid for approximately 5 minutes (250 blocks) after its construction. Allows for transaction construction to be decoupled from its submission, such as requiring manual approval for the signing or providing "at least once" guarantees.

More information can be found [here](https://wiki.polkadot.network/docs/build-protocol-info#transaction-mortality). Note the Polymesh chain will **never** reap Accounts, so the risk of a replay attack is mitigated.

#### Defined in

[api/procedures/types.ts:110](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9158669/src/api/procedures/types.ts#L110)

___

### multiSigOpts

• `Optional` **multiSigOpts**: [`MultiSigProcedureOpt`](../MultiSigProcedureOpt/MultiSigProcedureOpt.md)

These options will only apply when the `signingAccount` is a MultiSig signer and the transaction is being wrapped as a proposal

#### Defined in

[api/procedures/types.ts:115](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9158669/src/api/procedures/types.ts#L115)

___

### nonce

• `Optional` **nonce**: `BigNumber` \| `Promise`\<`BigNumber`\> \| () => `BigNumber` \| `Promise`\<`BigNumber`\>

nonce value for signing the transaction

An [Account](../../../../../classes/API/Entities/Account/Account.md) can directly fetch its current nonce by calling [account.getCurrentNonce](../../../../../classes/API/Entities/Account/Account.md#getcurrentnonce). More information can be found at: https://polkadot.js.org/docs/api/cookbook/tx/#how-do-i-take-the-pending-tx-pool-into-account-in-my-nonce

**`Note`**

the passed value can be either the nonce itself or a function that returns the nonce. This allows, for example, passing a closure that increases the returned value every time it's called, or a function that fetches the nonce from the chain or a different source

#### Defined in

[api/procedures/types.ts:103](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9158669/src/api/procedures/types.ts#L103)

___

### signingAccount

• `Optional` **signingAccount**: `string` \| [`Account`](../../../../../classes/API/Entities/Account/Account.md)

Account or address of a signing key to replace the current one (for this procedure only)

#### Defined in

[api/procedures/types.ts:94](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9158669/src/api/procedures/types.ts#L94)