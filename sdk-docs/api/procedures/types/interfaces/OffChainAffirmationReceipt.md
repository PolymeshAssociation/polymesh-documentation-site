# Interface: OffChainAffirmationReceipt

> Defined in: [src/api/procedures/types.ts:1157](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/procedures/types.ts#L1157)

# Interface: OffChainAffirmationReceipt

Defined in: [src/api/procedures/types.ts:1157](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/procedures/types.ts#L1157)

## Properties

### expiresAt

> **expiresAt**: `Date`

Defined in: [src/api/procedures/types.ts:1181](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/procedures/types.ts#L1181)

Timestamp at which the receipt expires

***

### legId

> **legId**: `BigNumber`

Defined in: [src/api/procedures/types.ts:1165](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/procedures/types.ts#L1165)

Index of the off chain leg within the instruction to be affirmed

***

### metadata

> **metadata**: `string` \| `undefined`

Defined in: [src/api/procedures/types.ts:1177](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/procedures/types.ts#L1177)

(optional) Metadata value that can be used to attach messages to the receipt

***

### signature

> **signature**: [`OffChainSignature`](OffChainSignature.mdx)

Defined in: [src/api/procedures/types.ts:1173](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/procedures/types.ts#L1173)

Signature confirming the receipt details

***

### signer

> **signer**: `string` \| [`Account`](../../../entities/Account/classes/Account.mdx)

Defined in: [src/api/procedures/types.ts:1169](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/procedures/types.ts#L1169)

Signer of this receipt

***

### uid

> **uid**: `BigNumber`

Defined in: [src/api/procedures/types.ts:1161](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/procedures/types.ts#L1161)

Unique receipt number set by the signer for their receipts
