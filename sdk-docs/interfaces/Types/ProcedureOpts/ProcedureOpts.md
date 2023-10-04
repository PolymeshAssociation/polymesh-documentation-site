---
id: "ProcedureOpts"
title: "Interface: ProcedureOpts"
sidebar_label: "ProcedureOpts"
---

[types](../../../modules/Types/Types.md).ProcedureOpts

## Properties

### mortality

• `Optional` **mortality**: [`MortalityProcedureOpt`](../../../modules/Types/Types.md#mortalityprocedureopt)

This option allows for transactions that never expire, aka "immortal". By default, a transaction is only valid for approximately 5 minutes (250 blocks) after its construction. Allows for transaction construction to be decoupled from its submission, such as requiring manual approval for the signing or providing "at least once" guarantees.

More information can be found [here](https://wiki.polkadot.network/docs/build-protocol-info#transaction-mortality). Note the Polymesh chain will **never** reap Accounts, so the risk of a replay attack is mitigated.

#### Defined in

[types/index.ts:1477](https://github.com/PolymeshAssociation/polymesh-sdk/blob/d4e2c127f/src/types/index.ts#L1477)

___

### nonce

• `Optional` **nonce**: `BigNumber` \| `Promise`<`BigNumber`\> \| () => `BigNumber` \| `Promise`<`BigNumber`\>

nonce value for signing the transaction

An [Account](../../../classes/API/Entities/Account/Account.md) can directly fetch its current nonce by calling [account.getCurrentNonce](../../../classes/API/Entities/Account/Account.md#getcurrentnonce). More information can be found at: https://polkadot.js.org/docs/api/cookbook/tx/#how-do-i-take-the-pending-tx-pool-into-account-in-my-nonce

**`Note`**

 the passed value can be either the nonce itself or a function that returns the nonce. This allows, for example, passing a closure that increases the returned value every time it's called, or a function that fetches the nonce from the chain or a different source

#### Defined in

[types/index.ts:1470](https://github.com/PolymeshAssociation/polymesh-sdk/blob/d4e2c127f/src/types/index.ts#L1470)

___

### signingAccount

• `Optional` **signingAccount**: `string` \| [`Account`](../../../classes/API/Entities/Account/Account.md)

Account or address of a signing key to replace the current one (for this procedure only)

#### Defined in

[types/index.ts:1461](https://github.com/PolymeshAssociation/polymesh-sdk/blob/d4e2c127f/src/types/index.ts#L1461)
