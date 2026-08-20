# Interface: TransactionPayload

> Defined in: [src/base/types.ts:184](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/base/types.ts#L184)

# Interface: TransactionPayload

Defined in: [src/base/types.ts:184](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/base/types.ts#L184)

Unsigned transaction data in JSON a format

## Properties

### metadata

> `readonly` **metadata**: `Record`\<`string`, `string`\>

Defined in: [src/base/types.ts:210](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/base/types.ts#L210)

Additional information attached to the payload, such as IDs or memos about the transaction.

#### Note

this is not chain data. Its for convenience for attaching a trace ID

***

### method

> `readonly` **method**: `` `0x${string}` ``

Defined in: [src/base/types.ts:203](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/base/types.ts#L203)

A hex representation of the core extrinsic information. i.e. the extrinsic and args, but does not contain information about who is to sign the transaction.

***

### multiSig

> `readonly` **multiSig**: `string` \| `null`

Defined in: [src/base/types.ts:218](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/base/types.ts#L218)

The address of the MultiSig if the transaction is a proposal.

Will be set only if the signing account is a MultiSig signer, the transaction is not approving or rejecting an existing proposal,

#### Note

`asProposal: false` will force this to be null, even if the signing account is a MultiSig signer

***

### payload

> `readonly` **payload**: `SignerPayloadJSON`

Defined in: [src/base/types.ts:190](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/base/types.ts#L190)

This is what a Polkadot signer ".signPayload" method expects

#### Note

this field is recommended to be passed in with the signature when submitting a signed transaction

***

### rawPayload

> `readonly` **rawPayload**: `SignerPayloadRaw`

Defined in: [src/base/types.ts:198](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/base/types.ts#L198)

An alternative representation of the payload for which Polkadot signers providing ".signRaw" expect.

#### Note

using the field `payload` is generally recommended. The raw version is included so any polkadot compliant signer can sign.

#### Note

`signRaw` typically returns just the signature. However signatures must be prefixed with a byte to indicate the type. For ed25519 signatures prepend a zero byte (`0x00`), for sr25519 `0x01` byte to indicate sr25519 if the signer implementation does not already do so.
